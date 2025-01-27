import { QueryOptions } from '@apollo/client/core';
import {
  ConfidentialAsset,
  ConfidentialAssetHistory,
  ConfidentialAssetHolder,
  ConfidentialAssetHoldersOrderBy,
  ConfidentialTransaction,
} from '@polymeshassociation/polymesh-sdk/middleware/types';
import BigNumber from 'bignumber.js';
import gql from 'graphql-tag';

import {
  ConfidentialAssetHistoryByConfidentialAccountArgs,
  ConfidentialTransactionsByConfidentialAccountArgs,
} from '~/types';
import { PaginatedQueryArgs, QueryArgs } from '~/types/utils';

/**
 * @hidden
 *
 * Get Confidential Assets held by a ConfidentialAccount
 */
export function confidentialAssetsByHolderQuery(
  accountId: string,
  size?: BigNumber,
  start?: BigNumber
): QueryOptions<PaginatedQueryArgs<Pick<ConfidentialAssetHolder, 'accountId'>>> {
  const query = gql`
    query ConfidentialAssetsByAccount($size: Int, $start: Int, $accountId: String!) {
      confidentialAssetHolders(
        filter: { accountId: { equalTo: $accountId } }
        orderBy: [${ConfidentialAssetHoldersOrderBy.CreatedBlockIdAsc}]
        first: $size
        offset: $start
      ) {
        nodes {
          accountId
          assetId
        }
        totalCount
      }
    }
  `;

  return {
    query,
    variables: { size: size?.toNumber(), start: start?.toNumber(), accountId },
  };
}

/**
 *  @hidden
 */
export function createTransactionHistoryByConfidentialAssetQueryFilters(): {
  args: string;
  filter: string;
} {
  const args = ['$size: Int, $start: Int', '$assetId: String!'];
  const filters = ['assetId: { equalTo: $assetId }'];

  return {
    args: `(${args.join()})`,
    filter: `filter: { ${filters.join()} },`,
  };
}

/**
 * @hidden
 *
 * Get Confidential Asset transaction history
 */
export function transactionHistoryByConfidentialAssetQuery(
  { assetId }: Pick<ConfidentialAssetHistory, 'assetId'>,
  size?: BigNumber,
  start?: BigNumber
): QueryOptions<PaginatedQueryArgs<QueryArgs<ConfidentialAssetHistory, 'assetId'>>> {
  const { args, filter } = createTransactionHistoryByConfidentialAssetQueryFilters();

  const query = gql`
  query TransactionHistoryQuery
    ${args}
    {
      confidentialAssetHistories(
        ${filter}
        first: $size
        offset: $start
      ){
        nodes {
          fromId
          toId
          transactionId
          assetId
          createdBlock {
            datetime
            hash
      	    blockId
          }
          amount
          eventId
          memo
        }
        totalCount
      }
    }
`;

  return {
    query,
    variables: { size: size?.toNumber(), start: start?.toNumber(), assetId },
  };
}

/**
 * @hidden
 *
 * Get ConfidentialAsset details for a given id
 */
export function confidentialAssetQuery(
  variables: QueryArgs<ConfidentialAsset, 'id'>
): QueryOptions<QueryArgs<ConfidentialAsset, 'id'>> {
  const query = gql`
    query ConfidentialAssetQuery($id: String!) {
      confidentialAssets(filter: { id: { equalTo: $id } }) {
        nodes {
          eventIdx
          createdBlock {
            blockId
            datetime
            hash
          }
        }
      }
    }
  `;

  return {
    query,
    variables,
  };
}

/**
 * @hidden
 *
 * Get Confidential Transactions where a ConfidentialAccount is involved
 */
export function getConfidentialTransactionsByConfidentialAccountQuery(
  params: ConfidentialTransactionsByConfidentialAccountArgs,
  size?: BigNumber,
  start?: BigNumber
): QueryOptions<
  PaginatedQueryArgs<Omit<ConfidentialTransactionsByConfidentialAccountArgs, 'direction'>>
> {
  const { status, accountId, direction } = params;
  const filters = [];

  const args = ['$size: Int', '$start: Int', '$accountId: String!']; // Example adjustment

  if (status) {
    args.push('$status: ConfidentialTransactionStatusEnum!');
    filters.push('status: { equalTo: $status }');
  }

  const legsFilters = [];

  if (direction === 'All' || direction === 'Incoming') {
    legsFilters.push('{ receiverId: { equalTo: $accountId }}');
  }
  if (direction === 'All' || direction === 'Outgoing') {
    legsFilters.push('{ senderId: { equalTo: $accountId }}');
  }

  filters.push(`legs: { some: { or: [${legsFilters.join()}] } }`);

  const formattedArgs = `${args.join(', ')}`;

  const query = gql`
  query ConfidentialTransactionsByConfidentialAccount(${formattedArgs}) {
    confidentialTransactions(
      filter: { ${filters.join(', ')} },
      first: $size,
      offset: $start
    ) {
      nodes {
        id
      }
      totalCount
    }
  }
`;

  return {
    query,
    variables: { size: size?.toNumber(), start: start?.toNumber(), accountId, status },
  };
}

/**
 * @hidden
 */
function createGetConfidentialAssetHistoryByConfidentialAccountQueryArgs(
  variables: PaginatedQueryArgs<ConfidentialAssetHistoryByConfidentialAccountArgs>
): {
  args: string;
  filter: string;
  variables: PaginatedQueryArgs<ConfidentialAssetHistoryByConfidentialAccountArgs>;
} {
  const args = ['$size: Int, $start: Int, $accountId: String!'];
  const filters = ['or: [{ toId: { equalTo: $accountId }},{ fromId: { equalTo: $accountId }}]'];

  const { assetId, eventId } = variables;

  if (assetId?.length) {
    args.push('$assetId: String!');
    filters.push('assetId: { equalTo: $assetId }');
  }
  if (eventId) {
    args.push('$eventId: EventIdEnum!');
    filters.push('eventId: { equalTo: $eventId }');
  }

  return {
    args: `(${args.join()})`,
    filter: `filter: { ${filters.join()} }`,
    variables,
  };
}

/**
 * @hidden
 *
 * Get ConfidentialAssetHistory where a ConfidentialAccount is involved
 */
export function getConfidentialAssetHistoryByConfidentialAccountQuery(
  params: ConfidentialAssetHistoryByConfidentialAccountArgs,
  size?: BigNumber,
  start?: BigNumber
): QueryOptions<PaginatedQueryArgs<ConfidentialAssetHistoryByConfidentialAccountArgs>> {
  const { args, filter, variables } =
    createGetConfidentialAssetHistoryByConfidentialAccountQueryArgs(params);

  const query = gql`
  query ConfidentialAssetHistoryByConfidentialAccount${args} {
    confidentialAssetHistories(
      ${filter},
      first: $size,
      offset: $start
    ) {
      nodes {
        id
        assetId
        amount
        eventId
        eventIdx
        memo
        transactionId
          createdBlock {
            blockId
            datetime
            hash
          }
      }
      totalCount
    }
  }
`;

  return {
    query,
    variables: { ...variables, size: size?.toNumber(), start: start?.toNumber() },
  };
}

/**
 * @hidden
 *
 * Get confidential transaction details by ID
 */
export function confidentialTransactionQuery(
  variables: QueryArgs<ConfidentialTransaction, 'id'>
): QueryOptions<QueryArgs<ConfidentialTransaction, 'id'>> {
  const query = gql`
    query ConfidentialTransaction($id: String!) {
      confidentialTransaction(id: $id) {
        eventIdx
        createdBlock {
          blockId
          datetime
          hash
        }
      }
    }
  `;

  return {
    query,
    variables,
  };
}

/**
 * @hidden
 *
 * Get confidential transaction details by ID
 */
export function getConfidentialTransactionProofsQuery(
  variables: QueryArgs<ConfidentialTransaction, 'id'>
): QueryOptions<QueryArgs<ConfidentialTransaction, 'id'>> {
  const query = gql`
    query ConfidentialTransaction($id: String!) {
      confidentialTransaction(id: $id) {
        eventIdx
        affirmations(filter: { party: { equalTo: Sender } }) {
          nodes {
            proofs
            legId
          }
        }
        legs {
          nodes {
            id
            senderId
            receiverId
            assetAuditors
          }
        }
      }
    }
  `;

  return {
    query,
    variables,
  };
}
