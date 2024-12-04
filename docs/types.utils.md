# Module: types/utils

## Table of contents

### Type Aliases

- [ArgsType](../wiki/types.utils#argstype)
- [Ensured](../wiki/types.utils#ensured)
- [HumanReadableType](../wiki/types.utils#humanreadabletype)
- [Modify](../wiki/types.utils#modify)
- [PaginatedQueryArgs](../wiki/types.utils#paginatedqueryargs)
- [QueryArgs](../wiki/types.utils#queryargs)
- [WithRequired](../wiki/types.utils#withrequired)

## Type Aliases

### ArgsType

Ƭ **ArgsType**<`T`\>: `T` extends (...`args`: infer A) => `unknown` ? `A` : `never`

Less strict version of `Parameters<T>`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/utils/index.ts:30](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/utils/index.ts#L30)

___

### Ensured

Ƭ **Ensured**<`T`, `K`\>: `Required`<`Pick`<`T`, `K`\>\> & { [SubKey in K]: NonNullable<T[SubKey]\> }

Pick a single property from T and ensure it is defined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[src/types/utils/index.ts:94](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/utils/index.ts#L94)

___

### HumanReadableType

Ƭ **HumanReadableType**<`T`\>: `T` extends `Entity`<`unknown`, infer H\> ? [`HumanReadableType`](../wiki/types.utils#humanreadabletype)<`H`\> : `T` extends `BigNumber` ? `string` : `T` extends `Date` ? `string` : `T` extends `object` ? { [K in keyof T]: T[K] extends Entity<unknown, infer E\> ? HumanReadableType<E\> : HumanReadableType<T[K]\> } : `T`

Recursively traverse a type and transform its Entity properties into their
  human readable version (as if `.toHuman` had been called on all of them)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/utils/index.ts:36](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/utils/index.ts#L36)

___

### Modify

Ƭ **Modify**<`T`, `R`\>: `Omit`<`T`, keyof `R`\> & `R`

Override T with the properties of R

#### Type parameters

| Name |
| :------ |
| `T` |
| `R` |

#### Defined in

[src/types/utils/index.ts:77](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/utils/index.ts#L77)

___

### PaginatedQueryArgs

Ƭ **PaginatedQueryArgs**<`T`\>: `T` & { `size?`: `number` ; `start?`: `number`  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/utils/index.ts:98](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/utils/index.ts#L98)

___

### QueryArgs

Ƭ **QueryArgs**<`T`, `K`\>: { [P in K]?: T[P] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[src/types/utils/index.ts:103](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/utils/index.ts#L103)

___

### WithRequired

Ƭ **WithRequired**<`T`, `K`\>: `T` & { [P in K]-?: T[P] }

Ensure a specific property of T is defined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[src/types/utils/index.ts:83](https://github.com/PolymeshAssociation/polymesh-private-sdk/blob/297c67ce/src/types/utils/index.ts#L83)
