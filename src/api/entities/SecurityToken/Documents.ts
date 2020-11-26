import {
  Namespace,
  SecurityToken,
  setTokenDocuments,
  SetTokenDocumentsParams,
  TransactionQueue,
} from '~/internal';
import { PaginationOptions, ResultSet, TokenDocument } from '~/types';
import { documentToTokenDocument, stringToTicker } from '~/utils/conversion';
import { requestPaginated } from '~/utils/internal';

/**
 * Handles all Security Token Document related functionality
 */
export class Documents extends Namespace<SecurityToken> {
  /**
   * Assign a new list of documents to the Security Token by replacing the existing list of documents with the one passed in the parameters
   *
   * This requires two transactions
   *
   * @param args.documents - new list of documents
   */
  public set(args: SetTokenDocumentsParams): Promise<TransactionQueue<SecurityToken>> {
    const {
      parent: { ticker },
      context,
    } = this;
    return setTokenDocuments.prepare({ ticker, ...args }, context);
  }

  /**
   * Retrieve all documents linked to the Security Token
   *
   * @note supports pagination
   */
  public async get(paginationOpts?: PaginationOptions): Promise<ResultSet<TokenDocument>> {
    const {
      context: {
        polymeshApi: { query },
      },
      context,
      parent: { ticker },
    } = this;

    const { entries, lastKey: next } = await requestPaginated(query.asset.assetDocuments, {
      arg: stringToTicker(ticker, context),
      paginationOpts,
    });

    const data: TokenDocument[] = entries.map(([, doc]) => documentToTokenDocument(doc));

    return {
      data,
      next,
    };
  }
}
