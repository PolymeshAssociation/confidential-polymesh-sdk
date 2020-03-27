import { u64 } from '@polkadot/types';
import { differenceWith } from 'lodash';
import { Document } from 'polymesh-types/types';

import { SecurityToken } from '~/api/entities';
import { PolymeshError, Procedure } from '~/base';
import { ErrorCode, Role, RoleType, TokenDocument } from '~/types';
import { SignerType } from '~/types/internal';
import {
  documentToTokenDocument,
  signerToSignatory,
  stringToTicker,
  tickerToDid,
  tokenDocumentToDocument,
} from '~/utils';

export interface SetTokenDocumentsParams {
  documents: TokenDocument[];
}

export type Params = SetTokenDocumentsParams & {
  ticker: string;
};

/**
 * @hidden
 */
export async function prepareSetTokenDocuments(
  this: Procedure<Params, SecurityToken>,
  args: Params
): Promise<SecurityToken> {
  const {
    context: {
      polymeshApi: { query, tx },
    },
    context,
  } = this;
  const { ticker, documents } = args;

  const links = await query.identity.links.entries(
    signerToSignatory({ type: SignerType.Identity, value: tickerToDid(ticker) }, context)
  );

  const currentDocLinks = links.filter(([, { link_data: linkData }]) => linkData.isDocumentOwned);
  const rawCurrentDocs: Document[] = [];
  const currentDocIds: u64[] = [];

  currentDocLinks.forEach(([, { link_id: linkId, link_data: linkData }]) => {
    rawCurrentDocs.push(linkData.asDocumentOwned);
    currentDocIds.push(linkId);
  });

  const currentDocs = rawCurrentDocs.map(rawDoc => documentToTokenDocument(rawDoc));

  const comparator = (a: TokenDocument, b: TokenDocument): boolean => {
    return a.name === b.name && a.uri === b.uri && a.contentHash === b.contentHash;
  };

  if (
    !differenceWith(currentDocs, documents, comparator).length &&
    currentDocs.length === documents.length
  ) {
    throw new PolymeshError({
      code: ErrorCode.ValidationError,
      message: 'The supplied document list is equal to the current one',
    });
  }

  const rawDocuments = documents.map(document => tokenDocumentToDocument(document, context));

  const rawTicker = stringToTicker(ticker, context);

  if (currentDocIds.length) {
    this.addTransaction(tx.asset.removeDocuments, {}, rawTicker, currentDocIds);
  }

  if (rawDocuments.length) {
    this.addTransaction(tx.asset.addDocuments, {}, rawTicker, rawDocuments);
  }

  return new SecurityToken({ ticker }, context);
}

/**
 * @hidden
 */
export function getRequiredRoles({ ticker }: Params): Role[] {
  return [{ type: RoleType.TokenOwner, ticker }];
}

export const setTokenDocuments = new Procedure(prepareSetTokenDocuments, getRequiredRoles);
