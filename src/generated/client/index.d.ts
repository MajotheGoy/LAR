
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ModLog
 * 
 */
export type ModLog = $Result.DefaultSelection<Prisma.$ModLogPayload>
/**
 * Model PartListing
 * 
 */
export type PartListing = $Result.DefaultSelection<Prisma.$PartListingPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model ProjectTag
 * 
 */
export type ProjectTag = $Result.DefaultSelection<Prisma.$ProjectTagPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.modLog`: Exposes CRUD operations for the **ModLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModLogs
    * const modLogs = await prisma.modLog.findMany()
    * ```
    */
  get modLog(): Prisma.ModLogDelegate<ExtArgs>;

  /**
   * `prisma.partListing`: Exposes CRUD operations for the **PartListing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartListings
    * const partListings = await prisma.partListing.findMany()
    * ```
    */
  get partListing(): Prisma.PartListingDelegate<ExtArgs>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs>;

  /**
   * `prisma.projectTag`: Exposes CRUD operations for the **ProjectTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectTags
    * const projectTags = await prisma.projectTag.findMany()
    * ```
    */
  get projectTag(): Prisma.ProjectTagDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Project: 'Project',
    ModLog: 'ModLog',
    PartListing: 'PartListing',
    Tag: 'Tag',
    ProjectTag: 'ProjectTag'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "project" | "modLog" | "partListing" | "tag" | "projectTag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ModLog: {
        payload: Prisma.$ModLogPayload<ExtArgs>
        fields: Prisma.ModLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModLogPayload>
          }
          findFirst: {
            args: Prisma.ModLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModLogPayload>
          }
          findMany: {
            args: Prisma.ModLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModLogPayload>[]
          }
          create: {
            args: Prisma.ModLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModLogPayload>
          }
          createMany: {
            args: Prisma.ModLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ModLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModLogPayload>
          }
          update: {
            args: Prisma.ModLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModLogPayload>
          }
          deleteMany: {
            args: Prisma.ModLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ModLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModLogPayload>
          }
          aggregate: {
            args: Prisma.ModLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModLog>
          }
          groupBy: {
            args: Prisma.ModLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModLogCountArgs<ExtArgs>
            result: $Utils.Optional<ModLogCountAggregateOutputType> | number
          }
        }
      }
      PartListing: {
        payload: Prisma.$PartListingPayload<ExtArgs>
        fields: Prisma.PartListingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartListingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartListingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartListingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartListingPayload>
          }
          findFirst: {
            args: Prisma.PartListingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartListingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartListingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartListingPayload>
          }
          findMany: {
            args: Prisma.PartListingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartListingPayload>[]
          }
          create: {
            args: Prisma.PartListingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartListingPayload>
          }
          createMany: {
            args: Prisma.PartListingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PartListingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartListingPayload>
          }
          update: {
            args: Prisma.PartListingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartListingPayload>
          }
          deleteMany: {
            args: Prisma.PartListingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartListingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PartListingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartListingPayload>
          }
          aggregate: {
            args: Prisma.PartListingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartListing>
          }
          groupBy: {
            args: Prisma.PartListingGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartListingGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartListingCountArgs<ExtArgs>
            result: $Utils.Optional<PartListingCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      ProjectTag: {
        payload: Prisma.$ProjectTagPayload<ExtArgs>
        fields: Prisma.ProjectTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>
          }
          findFirst: {
            args: Prisma.ProjectTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>
          }
          findMany: {
            args: Prisma.ProjectTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>[]
          }
          create: {
            args: Prisma.ProjectTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>
          }
          createMany: {
            args: Prisma.ProjectTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>
          }
          update: {
            args: Prisma.ProjectTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>
          }
          deleteMany: {
            args: Prisma.ProjectTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTagPayload>
          }
          aggregate: {
            args: Prisma.ProjectTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectTag>
          }
          groupBy: {
            args: Prisma.ProjectTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectTagCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectTagCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    projects: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    modLogs: number
    tags: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modLogs?: boolean | ProjectCountOutputTypeCountModLogsArgs
    tags?: boolean | ProjectCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountModLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModLogWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTagWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    projects: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | TagCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    wallet: Decimal | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    wallet: Decimal | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    fullname: string | null
    password: string | null
    wallet: Decimal | null
    role: string | null
    avatarUrl: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    username: string | null
    fullname: string | null
    password: string | null
    wallet: Decimal | null
    role: string | null
    avatarUrl: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    fullname: number
    password: number
    wallet: number
    role: number
    avatarUrl: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    wallet?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    wallet?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    fullname?: true
    password?: true
    wallet?: true
    role?: true
    avatarUrl?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    fullname?: true
    password?: true
    wallet?: true
    role?: true
    avatarUrl?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    fullname?: true
    password?: true
    wallet?: true
    role?: true
    avatarUrl?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    username: string | null
    fullname: string | null
    password: string
    wallet: Decimal
    role: string
    avatarUrl: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    fullname?: boolean
    password?: boolean
    wallet?: boolean
    role?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    fullname?: boolean
    password?: boolean
    wallet?: boolean
    role?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | User$projectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      username: string | null
      fullname: string | null
      password: string
      wallet: Prisma.Decimal
      role: string
      avatarUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly fullname: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly wallet: FieldRef<"User", 'Decimal'>
    readonly role: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    progress: number | null
    totalSpent: Decimal | null
    userId: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    progress: number | null
    totalSpent: Decimal | null
    userId: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    imageUrl: string | null
    status: string | null
    progress: number | null
    totalSpent: Decimal | null
    userId: number | null
    createdAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    imageUrl: string | null
    status: string | null
    progress: number | null
    totalSpent: Decimal | null
    userId: number | null
    createdAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    description: number
    imageUrl: number
    status: number
    progress: number
    totalSpent: number
    userId: number
    createdAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    progress?: true
    totalSpent?: true
    userId?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    progress?: true
    totalSpent?: true
    userId?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    status?: true
    progress?: true
    totalSpent?: true
    userId?: true
    createdAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    status?: true
    progress?: true
    totalSpent?: true
    userId?: true
    createdAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    status?: true
    progress?: true
    totalSpent?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    title: string
    description: string | null
    imageUrl: string | null
    status: string
    progress: number
    totalSpent: Decimal
    userId: number
    createdAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    status?: boolean
    progress?: boolean
    totalSpent?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    modLogs?: boolean | Project$modLogsArgs<ExtArgs>
    tags?: boolean | Project$tagsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>


  export type ProjectSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    status?: boolean
    progress?: boolean
    totalSpent?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    modLogs?: boolean | Project$modLogsArgs<ExtArgs>
    tags?: boolean | Project$tagsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      modLogs: Prisma.$ModLogPayload<ExtArgs>[]
      tags: Prisma.$ProjectTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      imageUrl: string | null
      status: string
      progress: number
      totalSpent: Prisma.Decimal
      userId: number
      createdAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    modLogs<T extends Project$modLogsArgs<ExtArgs> = {}>(args?: Subset<T, Project$modLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModLogPayload<ExtArgs>, T, "findMany"> | Null>
    tags<T extends Project$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Project$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly imageUrl: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'String'>
    readonly progress: FieldRef<"Project", 'Int'>
    readonly totalSpent: FieldRef<"Project", 'Decimal'>
    readonly userId: FieldRef<"Project", 'Int'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }

  /**
   * Project.modLogs
   */
  export type Project$modLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModLog
     */
    select?: ModLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModLogInclude<ExtArgs> | null
    where?: ModLogWhereInput
    orderBy?: ModLogOrderByWithRelationInput | ModLogOrderByWithRelationInput[]
    cursor?: ModLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModLogScalarFieldEnum | ModLogScalarFieldEnum[]
  }

  /**
   * Project.tags
   */
  export type Project$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    where?: ProjectTagWhereInput
    orderBy?: ProjectTagOrderByWithRelationInput | ProjectTagOrderByWithRelationInput[]
    cursor?: ProjectTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectTagScalarFieldEnum | ProjectTagScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ModLog
   */

  export type AggregateModLog = {
    _count: ModLogCountAggregateOutputType | null
    _avg: ModLogAvgAggregateOutputType | null
    _sum: ModLogSumAggregateOutputType | null
    _min: ModLogMinAggregateOutputType | null
    _max: ModLogMaxAggregateOutputType | null
  }

  export type ModLogAvgAggregateOutputType = {
    id: number | null
    cost: Decimal | null
    projectId: number | null
  }

  export type ModLogSumAggregateOutputType = {
    id: number | null
    cost: Decimal | null
    projectId: number | null
  }

  export type ModLogMinAggregateOutputType = {
    id: number | null
    logName: string | null
    description: string | null
    cost: Decimal | null
    imageUrl: string | null
    createdAt: Date | null
    projectId: number | null
  }

  export type ModLogMaxAggregateOutputType = {
    id: number | null
    logName: string | null
    description: string | null
    cost: Decimal | null
    imageUrl: string | null
    createdAt: Date | null
    projectId: number | null
  }

  export type ModLogCountAggregateOutputType = {
    id: number
    logName: number
    description: number
    cost: number
    imageUrl: number
    createdAt: number
    projectId: number
    _all: number
  }


  export type ModLogAvgAggregateInputType = {
    id?: true
    cost?: true
    projectId?: true
  }

  export type ModLogSumAggregateInputType = {
    id?: true
    cost?: true
    projectId?: true
  }

  export type ModLogMinAggregateInputType = {
    id?: true
    logName?: true
    description?: true
    cost?: true
    imageUrl?: true
    createdAt?: true
    projectId?: true
  }

  export type ModLogMaxAggregateInputType = {
    id?: true
    logName?: true
    description?: true
    cost?: true
    imageUrl?: true
    createdAt?: true
    projectId?: true
  }

  export type ModLogCountAggregateInputType = {
    id?: true
    logName?: true
    description?: true
    cost?: true
    imageUrl?: true
    createdAt?: true
    projectId?: true
    _all?: true
  }

  export type ModLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModLog to aggregate.
     */
    where?: ModLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModLogs to fetch.
     */
    orderBy?: ModLogOrderByWithRelationInput | ModLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModLogs
    **/
    _count?: true | ModLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModLogMaxAggregateInputType
  }

  export type GetModLogAggregateType<T extends ModLogAggregateArgs> = {
        [P in keyof T & keyof AggregateModLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModLog[P]>
      : GetScalarType<T[P], AggregateModLog[P]>
  }




  export type ModLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModLogWhereInput
    orderBy?: ModLogOrderByWithAggregationInput | ModLogOrderByWithAggregationInput[]
    by: ModLogScalarFieldEnum[] | ModLogScalarFieldEnum
    having?: ModLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModLogCountAggregateInputType | true
    _avg?: ModLogAvgAggregateInputType
    _sum?: ModLogSumAggregateInputType
    _min?: ModLogMinAggregateInputType
    _max?: ModLogMaxAggregateInputType
  }

  export type ModLogGroupByOutputType = {
    id: number
    logName: string
    description: string | null
    cost: Decimal
    imageUrl: string | null
    createdAt: Date
    projectId: number
    _count: ModLogCountAggregateOutputType | null
    _avg: ModLogAvgAggregateOutputType | null
    _sum: ModLogSumAggregateOutputType | null
    _min: ModLogMinAggregateOutputType | null
    _max: ModLogMaxAggregateOutputType | null
  }

  type GetModLogGroupByPayload<T extends ModLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModLogGroupByOutputType[P]>
            : GetScalarType<T[P], ModLogGroupByOutputType[P]>
        }
      >
    >


  export type ModLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logName?: boolean
    description?: boolean
    cost?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modLog"]>


  export type ModLogSelectScalar = {
    id?: boolean
    logName?: boolean
    description?: boolean
    cost?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    projectId?: boolean
  }

  export type ModLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ModLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModLog"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      logName: string
      description: string | null
      cost: Prisma.Decimal
      imageUrl: string | null
      createdAt: Date
      projectId: number
    }, ExtArgs["result"]["modLog"]>
    composites: {}
  }

  type ModLogGetPayload<S extends boolean | null | undefined | ModLogDefaultArgs> = $Result.GetResult<Prisma.$ModLogPayload, S>

  type ModLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ModLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ModLogCountAggregateInputType | true
    }

  export interface ModLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModLog'], meta: { name: 'ModLog' } }
    /**
     * Find zero or one ModLog that matches the filter.
     * @param {ModLogFindUniqueArgs} args - Arguments to find a ModLog
     * @example
     * // Get one ModLog
     * const modLog = await prisma.modLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModLogFindUniqueArgs>(args: SelectSubset<T, ModLogFindUniqueArgs<ExtArgs>>): Prisma__ModLogClient<$Result.GetResult<Prisma.$ModLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ModLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ModLogFindUniqueOrThrowArgs} args - Arguments to find a ModLog
     * @example
     * // Get one ModLog
     * const modLog = await prisma.modLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ModLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModLogClient<$Result.GetResult<Prisma.$ModLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ModLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModLogFindFirstArgs} args - Arguments to find a ModLog
     * @example
     * // Get one ModLog
     * const modLog = await prisma.modLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModLogFindFirstArgs>(args?: SelectSubset<T, ModLogFindFirstArgs<ExtArgs>>): Prisma__ModLogClient<$Result.GetResult<Prisma.$ModLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ModLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModLogFindFirstOrThrowArgs} args - Arguments to find a ModLog
     * @example
     * // Get one ModLog
     * const modLog = await prisma.modLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ModLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModLogClient<$Result.GetResult<Prisma.$ModLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ModLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModLogs
     * const modLogs = await prisma.modLog.findMany()
     * 
     * // Get first 10 ModLogs
     * const modLogs = await prisma.modLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modLogWithIdOnly = await prisma.modLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModLogFindManyArgs>(args?: SelectSubset<T, ModLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ModLog.
     * @param {ModLogCreateArgs} args - Arguments to create a ModLog.
     * @example
     * // Create one ModLog
     * const ModLog = await prisma.modLog.create({
     *   data: {
     *     // ... data to create a ModLog
     *   }
     * })
     * 
     */
    create<T extends ModLogCreateArgs>(args: SelectSubset<T, ModLogCreateArgs<ExtArgs>>): Prisma__ModLogClient<$Result.GetResult<Prisma.$ModLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ModLogs.
     * @param {ModLogCreateManyArgs} args - Arguments to create many ModLogs.
     * @example
     * // Create many ModLogs
     * const modLog = await prisma.modLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModLogCreateManyArgs>(args?: SelectSubset<T, ModLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ModLog.
     * @param {ModLogDeleteArgs} args - Arguments to delete one ModLog.
     * @example
     * // Delete one ModLog
     * const ModLog = await prisma.modLog.delete({
     *   where: {
     *     // ... filter to delete one ModLog
     *   }
     * })
     * 
     */
    delete<T extends ModLogDeleteArgs>(args: SelectSubset<T, ModLogDeleteArgs<ExtArgs>>): Prisma__ModLogClient<$Result.GetResult<Prisma.$ModLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ModLog.
     * @param {ModLogUpdateArgs} args - Arguments to update one ModLog.
     * @example
     * // Update one ModLog
     * const modLog = await prisma.modLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModLogUpdateArgs>(args: SelectSubset<T, ModLogUpdateArgs<ExtArgs>>): Prisma__ModLogClient<$Result.GetResult<Prisma.$ModLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ModLogs.
     * @param {ModLogDeleteManyArgs} args - Arguments to filter ModLogs to delete.
     * @example
     * // Delete a few ModLogs
     * const { count } = await prisma.modLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModLogDeleteManyArgs>(args?: SelectSubset<T, ModLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModLogs
     * const modLog = await prisma.modLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModLogUpdateManyArgs>(args: SelectSubset<T, ModLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ModLog.
     * @param {ModLogUpsertArgs} args - Arguments to update or create a ModLog.
     * @example
     * // Update or create a ModLog
     * const modLog = await prisma.modLog.upsert({
     *   create: {
     *     // ... data to create a ModLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModLog we want to update
     *   }
     * })
     */
    upsert<T extends ModLogUpsertArgs>(args: SelectSubset<T, ModLogUpsertArgs<ExtArgs>>): Prisma__ModLogClient<$Result.GetResult<Prisma.$ModLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ModLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModLogCountArgs} args - Arguments to filter ModLogs to count.
     * @example
     * // Count the number of ModLogs
     * const count = await prisma.modLog.count({
     *   where: {
     *     // ... the filter for the ModLogs we want to count
     *   }
     * })
    **/
    count<T extends ModLogCountArgs>(
      args?: Subset<T, ModLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModLogAggregateArgs>(args: Subset<T, ModLogAggregateArgs>): Prisma.PrismaPromise<GetModLogAggregateType<T>>

    /**
     * Group by ModLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModLogGroupByArgs['orderBy'] }
        : { orderBy?: ModLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModLog model
   */
  readonly fields: ModLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ModLog model
   */ 
  interface ModLogFieldRefs {
    readonly id: FieldRef<"ModLog", 'Int'>
    readonly logName: FieldRef<"ModLog", 'String'>
    readonly description: FieldRef<"ModLog", 'String'>
    readonly cost: FieldRef<"ModLog", 'Decimal'>
    readonly imageUrl: FieldRef<"ModLog", 'String'>
    readonly createdAt: FieldRef<"ModLog", 'DateTime'>
    readonly projectId: FieldRef<"ModLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ModLog findUnique
   */
  export type ModLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModLog
     */
    select?: ModLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModLogInclude<ExtArgs> | null
    /**
     * Filter, which ModLog to fetch.
     */
    where: ModLogWhereUniqueInput
  }

  /**
   * ModLog findUniqueOrThrow
   */
  export type ModLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModLog
     */
    select?: ModLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModLogInclude<ExtArgs> | null
    /**
     * Filter, which ModLog to fetch.
     */
    where: ModLogWhereUniqueInput
  }

  /**
   * ModLog findFirst
   */
  export type ModLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModLog
     */
    select?: ModLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModLogInclude<ExtArgs> | null
    /**
     * Filter, which ModLog to fetch.
     */
    where?: ModLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModLogs to fetch.
     */
    orderBy?: ModLogOrderByWithRelationInput | ModLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModLogs.
     */
    cursor?: ModLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModLogs.
     */
    distinct?: ModLogScalarFieldEnum | ModLogScalarFieldEnum[]
  }

  /**
   * ModLog findFirstOrThrow
   */
  export type ModLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModLog
     */
    select?: ModLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModLogInclude<ExtArgs> | null
    /**
     * Filter, which ModLog to fetch.
     */
    where?: ModLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModLogs to fetch.
     */
    orderBy?: ModLogOrderByWithRelationInput | ModLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModLogs.
     */
    cursor?: ModLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModLogs.
     */
    distinct?: ModLogScalarFieldEnum | ModLogScalarFieldEnum[]
  }

  /**
   * ModLog findMany
   */
  export type ModLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModLog
     */
    select?: ModLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModLogInclude<ExtArgs> | null
    /**
     * Filter, which ModLogs to fetch.
     */
    where?: ModLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModLogs to fetch.
     */
    orderBy?: ModLogOrderByWithRelationInput | ModLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModLogs.
     */
    cursor?: ModLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModLogs.
     */
    skip?: number
    distinct?: ModLogScalarFieldEnum | ModLogScalarFieldEnum[]
  }

  /**
   * ModLog create
   */
  export type ModLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModLog
     */
    select?: ModLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ModLog.
     */
    data: XOR<ModLogCreateInput, ModLogUncheckedCreateInput>
  }

  /**
   * ModLog createMany
   */
  export type ModLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModLogs.
     */
    data: ModLogCreateManyInput | ModLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModLog update
   */
  export type ModLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModLog
     */
    select?: ModLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ModLog.
     */
    data: XOR<ModLogUpdateInput, ModLogUncheckedUpdateInput>
    /**
     * Choose, which ModLog to update.
     */
    where: ModLogWhereUniqueInput
  }

  /**
   * ModLog updateMany
   */
  export type ModLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModLogs.
     */
    data: XOR<ModLogUpdateManyMutationInput, ModLogUncheckedUpdateManyInput>
    /**
     * Filter which ModLogs to update
     */
    where?: ModLogWhereInput
  }

  /**
   * ModLog upsert
   */
  export type ModLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModLog
     */
    select?: ModLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ModLog to update in case it exists.
     */
    where: ModLogWhereUniqueInput
    /**
     * In case the ModLog found by the `where` argument doesn't exist, create a new ModLog with this data.
     */
    create: XOR<ModLogCreateInput, ModLogUncheckedCreateInput>
    /**
     * In case the ModLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModLogUpdateInput, ModLogUncheckedUpdateInput>
  }

  /**
   * ModLog delete
   */
  export type ModLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModLog
     */
    select?: ModLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModLogInclude<ExtArgs> | null
    /**
     * Filter which ModLog to delete.
     */
    where: ModLogWhereUniqueInput
  }

  /**
   * ModLog deleteMany
   */
  export type ModLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModLogs to delete
     */
    where?: ModLogWhereInput
  }

  /**
   * ModLog without action
   */
  export type ModLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModLog
     */
    select?: ModLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModLogInclude<ExtArgs> | null
  }


  /**
   * Model PartListing
   */

  export type AggregatePartListing = {
    _count: PartListingCountAggregateOutputType | null
    _avg: PartListingAvgAggregateOutputType | null
    _sum: PartListingSumAggregateOutputType | null
    _min: PartListingMinAggregateOutputType | null
    _max: PartListingMaxAggregateOutputType | null
  }

  export type PartListingAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type PartListingSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type PartListingMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
  }

  export type PartListingMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
  }

  export type PartListingCountAggregateOutputType = {
    id: number
    name: number
    price: number
    _all: number
  }


  export type PartListingAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type PartListingSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type PartListingMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
  }

  export type PartListingMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
  }

  export type PartListingCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    _all?: true
  }

  export type PartListingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartListing to aggregate.
     */
    where?: PartListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartListings to fetch.
     */
    orderBy?: PartListingOrderByWithRelationInput | PartListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PartListings
    **/
    _count?: true | PartListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartListingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartListingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartListingMaxAggregateInputType
  }

  export type GetPartListingAggregateType<T extends PartListingAggregateArgs> = {
        [P in keyof T & keyof AggregatePartListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartListing[P]>
      : GetScalarType<T[P], AggregatePartListing[P]>
  }




  export type PartListingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartListingWhereInput
    orderBy?: PartListingOrderByWithAggregationInput | PartListingOrderByWithAggregationInput[]
    by: PartListingScalarFieldEnum[] | PartListingScalarFieldEnum
    having?: PartListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartListingCountAggregateInputType | true
    _avg?: PartListingAvgAggregateInputType
    _sum?: PartListingSumAggregateInputType
    _min?: PartListingMinAggregateInputType
    _max?: PartListingMaxAggregateInputType
  }

  export type PartListingGroupByOutputType = {
    id: number
    name: string
    price: Decimal
    _count: PartListingCountAggregateOutputType | null
    _avg: PartListingAvgAggregateOutputType | null
    _sum: PartListingSumAggregateOutputType | null
    _min: PartListingMinAggregateOutputType | null
    _max: PartListingMaxAggregateOutputType | null
  }

  type GetPartListingGroupByPayload<T extends PartListingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartListingGroupByOutputType[P]>
            : GetScalarType<T[P], PartListingGroupByOutputType[P]>
        }
      >
    >


  export type PartListingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
  }, ExtArgs["result"]["partListing"]>


  export type PartListingSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
  }


  export type $PartListingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PartListing"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: Prisma.Decimal
    }, ExtArgs["result"]["partListing"]>
    composites: {}
  }

  type PartListingGetPayload<S extends boolean | null | undefined | PartListingDefaultArgs> = $Result.GetResult<Prisma.$PartListingPayload, S>

  type PartListingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PartListingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PartListingCountAggregateInputType | true
    }

  export interface PartListingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PartListing'], meta: { name: 'PartListing' } }
    /**
     * Find zero or one PartListing that matches the filter.
     * @param {PartListingFindUniqueArgs} args - Arguments to find a PartListing
     * @example
     * // Get one PartListing
     * const partListing = await prisma.partListing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartListingFindUniqueArgs>(args: SelectSubset<T, PartListingFindUniqueArgs<ExtArgs>>): Prisma__PartListingClient<$Result.GetResult<Prisma.$PartListingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PartListing that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PartListingFindUniqueOrThrowArgs} args - Arguments to find a PartListing
     * @example
     * // Get one PartListing
     * const partListing = await prisma.partListing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartListingFindUniqueOrThrowArgs>(args: SelectSubset<T, PartListingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartListingClient<$Result.GetResult<Prisma.$PartListingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PartListing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartListingFindFirstArgs} args - Arguments to find a PartListing
     * @example
     * // Get one PartListing
     * const partListing = await prisma.partListing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartListingFindFirstArgs>(args?: SelectSubset<T, PartListingFindFirstArgs<ExtArgs>>): Prisma__PartListingClient<$Result.GetResult<Prisma.$PartListingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PartListing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartListingFindFirstOrThrowArgs} args - Arguments to find a PartListing
     * @example
     * // Get one PartListing
     * const partListing = await prisma.partListing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartListingFindFirstOrThrowArgs>(args?: SelectSubset<T, PartListingFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartListingClient<$Result.GetResult<Prisma.$PartListingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PartListings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartListingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartListings
     * const partListings = await prisma.partListing.findMany()
     * 
     * // Get first 10 PartListings
     * const partListings = await prisma.partListing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partListingWithIdOnly = await prisma.partListing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartListingFindManyArgs>(args?: SelectSubset<T, PartListingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartListingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PartListing.
     * @param {PartListingCreateArgs} args - Arguments to create a PartListing.
     * @example
     * // Create one PartListing
     * const PartListing = await prisma.partListing.create({
     *   data: {
     *     // ... data to create a PartListing
     *   }
     * })
     * 
     */
    create<T extends PartListingCreateArgs>(args: SelectSubset<T, PartListingCreateArgs<ExtArgs>>): Prisma__PartListingClient<$Result.GetResult<Prisma.$PartListingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PartListings.
     * @param {PartListingCreateManyArgs} args - Arguments to create many PartListings.
     * @example
     * // Create many PartListings
     * const partListing = await prisma.partListing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartListingCreateManyArgs>(args?: SelectSubset<T, PartListingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PartListing.
     * @param {PartListingDeleteArgs} args - Arguments to delete one PartListing.
     * @example
     * // Delete one PartListing
     * const PartListing = await prisma.partListing.delete({
     *   where: {
     *     // ... filter to delete one PartListing
     *   }
     * })
     * 
     */
    delete<T extends PartListingDeleteArgs>(args: SelectSubset<T, PartListingDeleteArgs<ExtArgs>>): Prisma__PartListingClient<$Result.GetResult<Prisma.$PartListingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PartListing.
     * @param {PartListingUpdateArgs} args - Arguments to update one PartListing.
     * @example
     * // Update one PartListing
     * const partListing = await prisma.partListing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartListingUpdateArgs>(args: SelectSubset<T, PartListingUpdateArgs<ExtArgs>>): Prisma__PartListingClient<$Result.GetResult<Prisma.$PartListingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PartListings.
     * @param {PartListingDeleteManyArgs} args - Arguments to filter PartListings to delete.
     * @example
     * // Delete a few PartListings
     * const { count } = await prisma.partListing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartListingDeleteManyArgs>(args?: SelectSubset<T, PartListingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartListings
     * const partListing = await prisma.partListing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartListingUpdateManyArgs>(args: SelectSubset<T, PartListingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PartListing.
     * @param {PartListingUpsertArgs} args - Arguments to update or create a PartListing.
     * @example
     * // Update or create a PartListing
     * const partListing = await prisma.partListing.upsert({
     *   create: {
     *     // ... data to create a PartListing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartListing we want to update
     *   }
     * })
     */
    upsert<T extends PartListingUpsertArgs>(args: SelectSubset<T, PartListingUpsertArgs<ExtArgs>>): Prisma__PartListingClient<$Result.GetResult<Prisma.$PartListingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PartListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartListingCountArgs} args - Arguments to filter PartListings to count.
     * @example
     * // Count the number of PartListings
     * const count = await prisma.partListing.count({
     *   where: {
     *     // ... the filter for the PartListings we want to count
     *   }
     * })
    **/
    count<T extends PartListingCountArgs>(
      args?: Subset<T, PartListingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartListingAggregateArgs>(args: Subset<T, PartListingAggregateArgs>): Prisma.PrismaPromise<GetPartListingAggregateType<T>>

    /**
     * Group by PartListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartListingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartListingGroupByArgs['orderBy'] }
        : { orderBy?: PartListingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PartListing model
   */
  readonly fields: PartListingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PartListing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartListingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PartListing model
   */ 
  interface PartListingFieldRefs {
    readonly id: FieldRef<"PartListing", 'Int'>
    readonly name: FieldRef<"PartListing", 'String'>
    readonly price: FieldRef<"PartListing", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * PartListing findUnique
   */
  export type PartListingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartListing
     */
    select?: PartListingSelect<ExtArgs> | null
    /**
     * Filter, which PartListing to fetch.
     */
    where: PartListingWhereUniqueInput
  }

  /**
   * PartListing findUniqueOrThrow
   */
  export type PartListingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartListing
     */
    select?: PartListingSelect<ExtArgs> | null
    /**
     * Filter, which PartListing to fetch.
     */
    where: PartListingWhereUniqueInput
  }

  /**
   * PartListing findFirst
   */
  export type PartListingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartListing
     */
    select?: PartListingSelect<ExtArgs> | null
    /**
     * Filter, which PartListing to fetch.
     */
    where?: PartListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartListings to fetch.
     */
    orderBy?: PartListingOrderByWithRelationInput | PartListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartListings.
     */
    cursor?: PartListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartListings.
     */
    distinct?: PartListingScalarFieldEnum | PartListingScalarFieldEnum[]
  }

  /**
   * PartListing findFirstOrThrow
   */
  export type PartListingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartListing
     */
    select?: PartListingSelect<ExtArgs> | null
    /**
     * Filter, which PartListing to fetch.
     */
    where?: PartListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartListings to fetch.
     */
    orderBy?: PartListingOrderByWithRelationInput | PartListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartListings.
     */
    cursor?: PartListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartListings.
     */
    distinct?: PartListingScalarFieldEnum | PartListingScalarFieldEnum[]
  }

  /**
   * PartListing findMany
   */
  export type PartListingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartListing
     */
    select?: PartListingSelect<ExtArgs> | null
    /**
     * Filter, which PartListings to fetch.
     */
    where?: PartListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartListings to fetch.
     */
    orderBy?: PartListingOrderByWithRelationInput | PartListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PartListings.
     */
    cursor?: PartListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartListings.
     */
    skip?: number
    distinct?: PartListingScalarFieldEnum | PartListingScalarFieldEnum[]
  }

  /**
   * PartListing create
   */
  export type PartListingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartListing
     */
    select?: PartListingSelect<ExtArgs> | null
    /**
     * The data needed to create a PartListing.
     */
    data: XOR<PartListingCreateInput, PartListingUncheckedCreateInput>
  }

  /**
   * PartListing createMany
   */
  export type PartListingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartListings.
     */
    data: PartListingCreateManyInput | PartListingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PartListing update
   */
  export type PartListingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartListing
     */
    select?: PartListingSelect<ExtArgs> | null
    /**
     * The data needed to update a PartListing.
     */
    data: XOR<PartListingUpdateInput, PartListingUncheckedUpdateInput>
    /**
     * Choose, which PartListing to update.
     */
    where: PartListingWhereUniqueInput
  }

  /**
   * PartListing updateMany
   */
  export type PartListingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PartListings.
     */
    data: XOR<PartListingUpdateManyMutationInput, PartListingUncheckedUpdateManyInput>
    /**
     * Filter which PartListings to update
     */
    where?: PartListingWhereInput
  }

  /**
   * PartListing upsert
   */
  export type PartListingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartListing
     */
    select?: PartListingSelect<ExtArgs> | null
    /**
     * The filter to search for the PartListing to update in case it exists.
     */
    where: PartListingWhereUniqueInput
    /**
     * In case the PartListing found by the `where` argument doesn't exist, create a new PartListing with this data.
     */
    create: XOR<PartListingCreateInput, PartListingUncheckedCreateInput>
    /**
     * In case the PartListing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartListingUpdateInput, PartListingUncheckedUpdateInput>
  }

  /**
   * PartListing delete
   */
  export type PartListingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartListing
     */
    select?: PartListingSelect<ExtArgs> | null
    /**
     * Filter which PartListing to delete.
     */
    where: PartListingWhereUniqueInput
  }

  /**
   * PartListing deleteMany
   */
  export type PartListingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartListings to delete
     */
    where?: PartListingWhereInput
  }

  /**
   * PartListing without action
   */
  export type PartListingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartListing
     */
    select?: PartListingSelect<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    name: string
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projects?: boolean | Tag$projectsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>


  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | Tag$projectsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      projects: Prisma.$ProjectTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends Tag$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */ 
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'Int'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
  }

  /**
   * Tag.projects
   */
  export type Tag$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    where?: ProjectTagWhereInput
    orderBy?: ProjectTagOrderByWithRelationInput | ProjectTagOrderByWithRelationInput[]
    cursor?: ProjectTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectTagScalarFieldEnum | ProjectTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model ProjectTag
   */

  export type AggregateProjectTag = {
    _count: ProjectTagCountAggregateOutputType | null
    _avg: ProjectTagAvgAggregateOutputType | null
    _sum: ProjectTagSumAggregateOutputType | null
    _min: ProjectTagMinAggregateOutputType | null
    _max: ProjectTagMaxAggregateOutputType | null
  }

  export type ProjectTagAvgAggregateOutputType = {
    projectId: number | null
    tagId: number | null
  }

  export type ProjectTagSumAggregateOutputType = {
    projectId: number | null
    tagId: number | null
  }

  export type ProjectTagMinAggregateOutputType = {
    projectId: number | null
    tagId: number | null
  }

  export type ProjectTagMaxAggregateOutputType = {
    projectId: number | null
    tagId: number | null
  }

  export type ProjectTagCountAggregateOutputType = {
    projectId: number
    tagId: number
    _all: number
  }


  export type ProjectTagAvgAggregateInputType = {
    projectId?: true
    tagId?: true
  }

  export type ProjectTagSumAggregateInputType = {
    projectId?: true
    tagId?: true
  }

  export type ProjectTagMinAggregateInputType = {
    projectId?: true
    tagId?: true
  }

  export type ProjectTagMaxAggregateInputType = {
    projectId?: true
    tagId?: true
  }

  export type ProjectTagCountAggregateInputType = {
    projectId?: true
    tagId?: true
    _all?: true
  }

  export type ProjectTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTag to aggregate.
     */
    where?: ProjectTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTags to fetch.
     */
    orderBy?: ProjectTagOrderByWithRelationInput | ProjectTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectTags
    **/
    _count?: true | ProjectTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectTagMaxAggregateInputType
  }

  export type GetProjectTagAggregateType<T extends ProjectTagAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectTag[P]>
      : GetScalarType<T[P], AggregateProjectTag[P]>
  }




  export type ProjectTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTagWhereInput
    orderBy?: ProjectTagOrderByWithAggregationInput | ProjectTagOrderByWithAggregationInput[]
    by: ProjectTagScalarFieldEnum[] | ProjectTagScalarFieldEnum
    having?: ProjectTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectTagCountAggregateInputType | true
    _avg?: ProjectTagAvgAggregateInputType
    _sum?: ProjectTagSumAggregateInputType
    _min?: ProjectTagMinAggregateInputType
    _max?: ProjectTagMaxAggregateInputType
  }

  export type ProjectTagGroupByOutputType = {
    projectId: number
    tagId: number
    _count: ProjectTagCountAggregateOutputType | null
    _avg: ProjectTagAvgAggregateOutputType | null
    _sum: ProjectTagSumAggregateOutputType | null
    _min: ProjectTagMinAggregateOutputType | null
    _max: ProjectTagMaxAggregateOutputType | null
  }

  type GetProjectTagGroupByPayload<T extends ProjectTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectTagGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectTagGroupByOutputType[P]>
        }
      >
    >


  export type ProjectTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    tagId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTag"]>


  export type ProjectTagSelectScalar = {
    projectId?: boolean
    tagId?: boolean
  }

  export type ProjectTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $ProjectTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectTag"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      projectId: number
      tagId: number
    }, ExtArgs["result"]["projectTag"]>
    composites: {}
  }

  type ProjectTagGetPayload<S extends boolean | null | undefined | ProjectTagDefaultArgs> = $Result.GetResult<Prisma.$ProjectTagPayload, S>

  type ProjectTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectTagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectTagCountAggregateInputType | true
    }

  export interface ProjectTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectTag'], meta: { name: 'ProjectTag' } }
    /**
     * Find zero or one ProjectTag that matches the filter.
     * @param {ProjectTagFindUniqueArgs} args - Arguments to find a ProjectTag
     * @example
     * // Get one ProjectTag
     * const projectTag = await prisma.projectTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectTagFindUniqueArgs>(args: SelectSubset<T, ProjectTagFindUniqueArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProjectTag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectTagFindUniqueOrThrowArgs} args - Arguments to find a ProjectTag
     * @example
     * // Get one ProjectTag
     * const projectTag = await prisma.projectTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectTagFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProjectTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagFindFirstArgs} args - Arguments to find a ProjectTag
     * @example
     * // Get one ProjectTag
     * const projectTag = await prisma.projectTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectTagFindFirstArgs>(args?: SelectSubset<T, ProjectTagFindFirstArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProjectTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagFindFirstOrThrowArgs} args - Arguments to find a ProjectTag
     * @example
     * // Get one ProjectTag
     * const projectTag = await prisma.projectTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectTagFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProjectTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectTags
     * const projectTags = await prisma.projectTag.findMany()
     * 
     * // Get first 10 ProjectTags
     * const projectTags = await prisma.projectTag.findMany({ take: 10 })
     * 
     * // Only select the `projectId`
     * const projectTagWithProjectIdOnly = await prisma.projectTag.findMany({ select: { projectId: true } })
     * 
     */
    findMany<T extends ProjectTagFindManyArgs>(args?: SelectSubset<T, ProjectTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProjectTag.
     * @param {ProjectTagCreateArgs} args - Arguments to create a ProjectTag.
     * @example
     * // Create one ProjectTag
     * const ProjectTag = await prisma.projectTag.create({
     *   data: {
     *     // ... data to create a ProjectTag
     *   }
     * })
     * 
     */
    create<T extends ProjectTagCreateArgs>(args: SelectSubset<T, ProjectTagCreateArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProjectTags.
     * @param {ProjectTagCreateManyArgs} args - Arguments to create many ProjectTags.
     * @example
     * // Create many ProjectTags
     * const projectTag = await prisma.projectTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectTagCreateManyArgs>(args?: SelectSubset<T, ProjectTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectTag.
     * @param {ProjectTagDeleteArgs} args - Arguments to delete one ProjectTag.
     * @example
     * // Delete one ProjectTag
     * const ProjectTag = await prisma.projectTag.delete({
     *   where: {
     *     // ... filter to delete one ProjectTag
     *   }
     * })
     * 
     */
    delete<T extends ProjectTagDeleteArgs>(args: SelectSubset<T, ProjectTagDeleteArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProjectTag.
     * @param {ProjectTagUpdateArgs} args - Arguments to update one ProjectTag.
     * @example
     * // Update one ProjectTag
     * const projectTag = await prisma.projectTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectTagUpdateArgs>(args: SelectSubset<T, ProjectTagUpdateArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProjectTags.
     * @param {ProjectTagDeleteManyArgs} args - Arguments to filter ProjectTags to delete.
     * @example
     * // Delete a few ProjectTags
     * const { count } = await prisma.projectTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectTagDeleteManyArgs>(args?: SelectSubset<T, ProjectTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectTags
     * const projectTag = await prisma.projectTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectTagUpdateManyArgs>(args: SelectSubset<T, ProjectTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectTag.
     * @param {ProjectTagUpsertArgs} args - Arguments to update or create a ProjectTag.
     * @example
     * // Update or create a ProjectTag
     * const projectTag = await prisma.projectTag.upsert({
     *   create: {
     *     // ... data to create a ProjectTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectTag we want to update
     *   }
     * })
     */
    upsert<T extends ProjectTagUpsertArgs>(args: SelectSubset<T, ProjectTagUpsertArgs<ExtArgs>>): Prisma__ProjectTagClient<$Result.GetResult<Prisma.$ProjectTagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProjectTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagCountArgs} args - Arguments to filter ProjectTags to count.
     * @example
     * // Count the number of ProjectTags
     * const count = await prisma.projectTag.count({
     *   where: {
     *     // ... the filter for the ProjectTags we want to count
     *   }
     * })
    **/
    count<T extends ProjectTagCountArgs>(
      args?: Subset<T, ProjectTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectTagAggregateArgs>(args: Subset<T, ProjectTagAggregateArgs>): Prisma.PrismaPromise<GetProjectTagAggregateType<T>>

    /**
     * Group by ProjectTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectTagGroupByArgs['orderBy'] }
        : { orderBy?: ProjectTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectTag model
   */
  readonly fields: ProjectTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectTag model
   */ 
  interface ProjectTagFieldRefs {
    readonly projectId: FieldRef<"ProjectTag", 'Int'>
    readonly tagId: FieldRef<"ProjectTag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProjectTag findUnique
   */
  export type ProjectTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTag to fetch.
     */
    where: ProjectTagWhereUniqueInput
  }

  /**
   * ProjectTag findUniqueOrThrow
   */
  export type ProjectTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTag to fetch.
     */
    where: ProjectTagWhereUniqueInput
  }

  /**
   * ProjectTag findFirst
   */
  export type ProjectTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTag to fetch.
     */
    where?: ProjectTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTags to fetch.
     */
    orderBy?: ProjectTagOrderByWithRelationInput | ProjectTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTags.
     */
    cursor?: ProjectTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTags.
     */
    distinct?: ProjectTagScalarFieldEnum | ProjectTagScalarFieldEnum[]
  }

  /**
   * ProjectTag findFirstOrThrow
   */
  export type ProjectTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTag to fetch.
     */
    where?: ProjectTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTags to fetch.
     */
    orderBy?: ProjectTagOrderByWithRelationInput | ProjectTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTags.
     */
    cursor?: ProjectTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTags.
     */
    distinct?: ProjectTagScalarFieldEnum | ProjectTagScalarFieldEnum[]
  }

  /**
   * ProjectTag findMany
   */
  export type ProjectTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTags to fetch.
     */
    where?: ProjectTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTags to fetch.
     */
    orderBy?: ProjectTagOrderByWithRelationInput | ProjectTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectTags.
     */
    cursor?: ProjectTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTags.
     */
    skip?: number
    distinct?: ProjectTagScalarFieldEnum | ProjectTagScalarFieldEnum[]
  }

  /**
   * ProjectTag create
   */
  export type ProjectTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectTag.
     */
    data: XOR<ProjectTagCreateInput, ProjectTagUncheckedCreateInput>
  }

  /**
   * ProjectTag createMany
   */
  export type ProjectTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectTags.
     */
    data: ProjectTagCreateManyInput | ProjectTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectTag update
   */
  export type ProjectTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectTag.
     */
    data: XOR<ProjectTagUpdateInput, ProjectTagUncheckedUpdateInput>
    /**
     * Choose, which ProjectTag to update.
     */
    where: ProjectTagWhereUniqueInput
  }

  /**
   * ProjectTag updateMany
   */
  export type ProjectTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectTags.
     */
    data: XOR<ProjectTagUpdateManyMutationInput, ProjectTagUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTags to update
     */
    where?: ProjectTagWhereInput
  }

  /**
   * ProjectTag upsert
   */
  export type ProjectTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectTag to update in case it exists.
     */
    where: ProjectTagWhereUniqueInput
    /**
     * In case the ProjectTag found by the `where` argument doesn't exist, create a new ProjectTag with this data.
     */
    create: XOR<ProjectTagCreateInput, ProjectTagUncheckedCreateInput>
    /**
     * In case the ProjectTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectTagUpdateInput, ProjectTagUncheckedUpdateInput>
  }

  /**
   * ProjectTag delete
   */
  export type ProjectTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
    /**
     * Filter which ProjectTag to delete.
     */
    where: ProjectTagWhereUniqueInput
  }

  /**
   * ProjectTag deleteMany
   */
  export type ProjectTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTags to delete
     */
    where?: ProjectTagWhereInput
  }

  /**
   * ProjectTag without action
   */
  export type ProjectTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTag
     */
    select?: ProjectTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTagInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    fullname: 'fullname',
    password: 'password',
    wallet: 'wallet',
    role: 'role',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    imageUrl: 'imageUrl',
    status: 'status',
    progress: 'progress',
    totalSpent: 'totalSpent',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ModLogScalarFieldEnum: {
    id: 'id',
    logName: 'logName',
    description: 'description',
    cost: 'cost',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    projectId: 'projectId'
  };

  export type ModLogScalarFieldEnum = (typeof ModLogScalarFieldEnum)[keyof typeof ModLogScalarFieldEnum]


  export const PartListingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price'
  };

  export type PartListingScalarFieldEnum = (typeof PartListingScalarFieldEnum)[keyof typeof PartListingScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const ProjectTagScalarFieldEnum: {
    projectId: 'projectId',
    tagId: 'tagId'
  };

  export type ProjectTagScalarFieldEnum = (typeof ProjectTagScalarFieldEnum)[keyof typeof ProjectTagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    fullname?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    wallet?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    role?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    projects?: ProjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrderInput | SortOrder
    fullname?: SortOrderInput | SortOrder
    password?: SortOrder
    wallet?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullname?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    wallet?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    role?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    projects?: ProjectListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrderInput | SortOrder
    fullname?: SortOrderInput | SortOrder
    password?: SortOrder
    wallet?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    fullname?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    wallet?: DecimalWithAggregatesFilter<"User"> | Decimal | DecimalJsLike | number | string
    role?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    imageUrl?: StringNullableFilter<"Project"> | string | null
    status?: StringFilter<"Project"> | string
    progress?: IntFilter<"Project"> | number
    totalSpent?: DecimalFilter<"Project"> | Decimal | DecimalJsLike | number | string
    userId?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    modLogs?: ModLogListRelationFilter
    tags?: ProjectTagListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    progress?: SortOrder
    totalSpent?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    modLogs?: ModLogOrderByRelationAggregateInput
    tags?: ProjectTagOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    imageUrl?: StringNullableFilter<"Project"> | string | null
    status?: StringFilter<"Project"> | string
    progress?: IntFilter<"Project"> | number
    totalSpent?: DecimalFilter<"Project"> | Decimal | DecimalJsLike | number | string
    userId?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    modLogs?: ModLogListRelationFilter
    tags?: ProjectTagListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    progress?: SortOrder
    totalSpent?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    status?: StringWithAggregatesFilter<"Project"> | string
    progress?: IntWithAggregatesFilter<"Project"> | number
    totalSpent?: DecimalWithAggregatesFilter<"Project"> | Decimal | DecimalJsLike | number | string
    userId?: IntWithAggregatesFilter<"Project"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ModLogWhereInput = {
    AND?: ModLogWhereInput | ModLogWhereInput[]
    OR?: ModLogWhereInput[]
    NOT?: ModLogWhereInput | ModLogWhereInput[]
    id?: IntFilter<"ModLog"> | number
    logName?: StringFilter<"ModLog"> | string
    description?: StringNullableFilter<"ModLog"> | string | null
    cost?: DecimalFilter<"ModLog"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringNullableFilter<"ModLog"> | string | null
    createdAt?: DateTimeFilter<"ModLog"> | Date | string
    projectId?: IntFilter<"ModLog"> | number
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type ModLogOrderByWithRelationInput = {
    id?: SortOrder
    logName?: SortOrder
    description?: SortOrderInput | SortOrder
    cost?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ModLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ModLogWhereInput | ModLogWhereInput[]
    OR?: ModLogWhereInput[]
    NOT?: ModLogWhereInput | ModLogWhereInput[]
    logName?: StringFilter<"ModLog"> | string
    description?: StringNullableFilter<"ModLog"> | string | null
    cost?: DecimalFilter<"ModLog"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringNullableFilter<"ModLog"> | string | null
    createdAt?: DateTimeFilter<"ModLog"> | Date | string
    projectId?: IntFilter<"ModLog"> | number
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }, "id">

  export type ModLogOrderByWithAggregationInput = {
    id?: SortOrder
    logName?: SortOrder
    description?: SortOrderInput | SortOrder
    cost?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
    _count?: ModLogCountOrderByAggregateInput
    _avg?: ModLogAvgOrderByAggregateInput
    _max?: ModLogMaxOrderByAggregateInput
    _min?: ModLogMinOrderByAggregateInput
    _sum?: ModLogSumOrderByAggregateInput
  }

  export type ModLogScalarWhereWithAggregatesInput = {
    AND?: ModLogScalarWhereWithAggregatesInput | ModLogScalarWhereWithAggregatesInput[]
    OR?: ModLogScalarWhereWithAggregatesInput[]
    NOT?: ModLogScalarWhereWithAggregatesInput | ModLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ModLog"> | number
    logName?: StringWithAggregatesFilter<"ModLog"> | string
    description?: StringNullableWithAggregatesFilter<"ModLog"> | string | null
    cost?: DecimalWithAggregatesFilter<"ModLog"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringNullableWithAggregatesFilter<"ModLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ModLog"> | Date | string
    projectId?: IntWithAggregatesFilter<"ModLog"> | number
  }

  export type PartListingWhereInput = {
    AND?: PartListingWhereInput | PartListingWhereInput[]
    OR?: PartListingWhereInput[]
    NOT?: PartListingWhereInput | PartListingWhereInput[]
    id?: IntFilter<"PartListing"> | number
    name?: StringFilter<"PartListing"> | string
    price?: DecimalFilter<"PartListing"> | Decimal | DecimalJsLike | number | string
  }

  export type PartListingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type PartListingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PartListingWhereInput | PartListingWhereInput[]
    OR?: PartListingWhereInput[]
    NOT?: PartListingWhereInput | PartListingWhereInput[]
    name?: StringFilter<"PartListing"> | string
    price?: DecimalFilter<"PartListing"> | Decimal | DecimalJsLike | number | string
  }, "id">

  export type PartListingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    _count?: PartListingCountOrderByAggregateInput
    _avg?: PartListingAvgOrderByAggregateInput
    _max?: PartListingMaxOrderByAggregateInput
    _min?: PartListingMinOrderByAggregateInput
    _sum?: PartListingSumOrderByAggregateInput
  }

  export type PartListingScalarWhereWithAggregatesInput = {
    AND?: PartListingScalarWhereWithAggregatesInput | PartListingScalarWhereWithAggregatesInput[]
    OR?: PartListingScalarWhereWithAggregatesInput[]
    NOT?: PartListingScalarWhereWithAggregatesInput | PartListingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PartListing"> | number
    name?: StringWithAggregatesFilter<"PartListing"> | string
    price?: DecimalWithAggregatesFilter<"PartListing"> | Decimal | DecimalJsLike | number | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
    projects?: ProjectTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    projects?: ProjectTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    projects?: ProjectTagListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tag"> | number
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type ProjectTagWhereInput = {
    AND?: ProjectTagWhereInput | ProjectTagWhereInput[]
    OR?: ProjectTagWhereInput[]
    NOT?: ProjectTagWhereInput | ProjectTagWhereInput[]
    projectId?: IntFilter<"ProjectTag"> | number
    tagId?: IntFilter<"ProjectTag"> | number
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    tag?: XOR<TagRelationFilter, TagWhereInput>
  }

  export type ProjectTagOrderByWithRelationInput = {
    projectId?: SortOrder
    tagId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type ProjectTagWhereUniqueInput = Prisma.AtLeast<{
    projectId_tagId?: ProjectTagProjectIdTagIdCompoundUniqueInput
    AND?: ProjectTagWhereInput | ProjectTagWhereInput[]
    OR?: ProjectTagWhereInput[]
    NOT?: ProjectTagWhereInput | ProjectTagWhereInput[]
    projectId?: IntFilter<"ProjectTag"> | number
    tagId?: IntFilter<"ProjectTag"> | number
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    tag?: XOR<TagRelationFilter, TagWhereInput>
  }, "projectId_tagId">

  export type ProjectTagOrderByWithAggregationInput = {
    projectId?: SortOrder
    tagId?: SortOrder
    _count?: ProjectTagCountOrderByAggregateInput
    _avg?: ProjectTagAvgOrderByAggregateInput
    _max?: ProjectTagMaxOrderByAggregateInput
    _min?: ProjectTagMinOrderByAggregateInput
    _sum?: ProjectTagSumOrderByAggregateInput
  }

  export type ProjectTagScalarWhereWithAggregatesInput = {
    AND?: ProjectTagScalarWhereWithAggregatesInput | ProjectTagScalarWhereWithAggregatesInput[]
    OR?: ProjectTagScalarWhereWithAggregatesInput[]
    NOT?: ProjectTagScalarWhereWithAggregatesInput | ProjectTagScalarWhereWithAggregatesInput[]
    projectId?: IntWithAggregatesFilter<"ProjectTag"> | number
    tagId?: IntWithAggregatesFilter<"ProjectTag"> | number
  }

  export type UserCreateInput = {
    email: string
    username?: string | null
    fullname?: string | null
    password: string
    wallet?: Decimal | DecimalJsLike | number | string
    role?: string
    avatarUrl?: string | null
    createdAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    username?: string | null
    fullname?: string | null
    password: string
    wallet?: Decimal | DecimalJsLike | number | string
    role?: string
    avatarUrl?: string | null
    createdAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    wallet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    wallet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    username?: string | null
    fullname?: string | null
    password: string
    wallet?: Decimal | DecimalJsLike | number | string
    role?: string
    avatarUrl?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    wallet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    wallet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    title: string
    description?: string | null
    imageUrl?: string | null
    status?: string
    progress?: number
    totalSpent?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    modLogs?: ModLogCreateNestedManyWithoutProjectInput
    tags?: ProjectTagCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    imageUrl?: string | null
    status?: string
    progress?: number
    totalSpent?: Decimal | DecimalJsLike | number | string
    userId: number
    createdAt?: Date | string
    modLogs?: ModLogUncheckedCreateNestedManyWithoutProjectInput
    tags?: ProjectTagUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    modLogs?: ModLogUpdateManyWithoutProjectNestedInput
    tags?: ProjectTagUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modLogs?: ModLogUncheckedUpdateManyWithoutProjectNestedInput
    tags?: ProjectTagUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    imageUrl?: string | null
    status?: string
    progress?: number
    totalSpent?: Decimal | DecimalJsLike | number | string
    userId: number
    createdAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModLogCreateInput = {
    logName: string
    description?: string | null
    cost: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutModLogsInput
  }

  export type ModLogUncheckedCreateInput = {
    id?: number
    logName: string
    description?: string | null
    cost: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    createdAt?: Date | string
    projectId: number
  }

  export type ModLogUpdateInput = {
    logName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutModLogsNestedInput
  }

  export type ModLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    logName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type ModLogCreateManyInput = {
    id?: number
    logName: string
    description?: string | null
    cost: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    createdAt?: Date | string
    projectId: number
  }

  export type ModLogUpdateManyMutationInput = {
    logName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    logName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type PartListingCreateInput = {
    name: string
    price: Decimal | DecimalJsLike | number | string
  }

  export type PartListingUncheckedCreateInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
  }

  export type PartListingUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PartListingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PartListingCreateManyInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
  }

  export type PartListingUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PartListingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TagCreateInput = {
    name: string
    projects?: ProjectTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    name: string
    projects?: ProjectTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    projects?: ProjectTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projects?: ProjectTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: number
    name: string
  }

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectTagCreateInput = {
    project: ProjectCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutProjectsInput
  }

  export type ProjectTagUncheckedCreateInput = {
    projectId: number
    tagId: number
  }

  export type ProjectTagUpdateInput = {
    project?: ProjectUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectTagUncheckedUpdateInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectTagCreateManyInput = {
    projectId: number
    tagId: number
  }

  export type ProjectTagUpdateManyMutationInput = {

  }

  export type ProjectTagUncheckedUpdateManyInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    password?: SortOrder
    wallet?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    wallet?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    password?: SortOrder
    wallet?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    fullname?: SortOrder
    password?: SortOrder
    wallet?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    wallet?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ModLogListRelationFilter = {
    every?: ModLogWhereInput
    some?: ModLogWhereInput
    none?: ModLogWhereInput
  }

  export type ProjectTagListRelationFilter = {
    every?: ProjectTagWhereInput
    some?: ProjectTagWhereInput
    none?: ProjectTagWhereInput
  }

  export type ModLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    totalSpent?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    progress?: SortOrder
    totalSpent?: SortOrder
    userId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    totalSpent?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    totalSpent?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    progress?: SortOrder
    totalSpent?: SortOrder
    userId?: SortOrder
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ModLogCountOrderByAggregateInput = {
    id?: SortOrder
    logName?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }

  export type ModLogAvgOrderByAggregateInput = {
    id?: SortOrder
    cost?: SortOrder
    projectId?: SortOrder
  }

  export type ModLogMaxOrderByAggregateInput = {
    id?: SortOrder
    logName?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }

  export type ModLogMinOrderByAggregateInput = {
    id?: SortOrder
    logName?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    projectId?: SortOrder
  }

  export type ModLogSumOrderByAggregateInput = {
    id?: SortOrder
    cost?: SortOrder
    projectId?: SortOrder
  }

  export type PartListingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type PartListingAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type PartListingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type PartListingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
  }

  export type PartListingSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type ProjectTagProjectIdTagIdCompoundUniqueInput = {
    projectId: number
    tagId: number
  }

  export type ProjectTagCountOrderByAggregateInput = {
    projectId?: SortOrder
    tagId?: SortOrder
  }

  export type ProjectTagAvgOrderByAggregateInput = {
    projectId?: SortOrder
    tagId?: SortOrder
  }

  export type ProjectTagMaxOrderByAggregateInput = {
    projectId?: SortOrder
    tagId?: SortOrder
  }

  export type ProjectTagMinOrderByAggregateInput = {
    projectId?: SortOrder
    tagId?: SortOrder
  }

  export type ProjectTagSumOrderByAggregateInput = {
    projectId?: SortOrder
    tagId?: SortOrder
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ModLogCreateNestedManyWithoutProjectInput = {
    create?: XOR<ModLogCreateWithoutProjectInput, ModLogUncheckedCreateWithoutProjectInput> | ModLogCreateWithoutProjectInput[] | ModLogUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ModLogCreateOrConnectWithoutProjectInput | ModLogCreateOrConnectWithoutProjectInput[]
    createMany?: ModLogCreateManyProjectInputEnvelope
    connect?: ModLogWhereUniqueInput | ModLogWhereUniqueInput[]
  }

  export type ProjectTagCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectTagCreateWithoutProjectInput, ProjectTagUncheckedCreateWithoutProjectInput> | ProjectTagCreateWithoutProjectInput[] | ProjectTagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutProjectInput | ProjectTagCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectTagCreateManyProjectInputEnvelope
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
  }

  export type ModLogUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ModLogCreateWithoutProjectInput, ModLogUncheckedCreateWithoutProjectInput> | ModLogCreateWithoutProjectInput[] | ModLogUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ModLogCreateOrConnectWithoutProjectInput | ModLogCreateOrConnectWithoutProjectInput[]
    createMany?: ModLogCreateManyProjectInputEnvelope
    connect?: ModLogWhereUniqueInput | ModLogWhereUniqueInput[]
  }

  export type ProjectTagUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectTagCreateWithoutProjectInput, ProjectTagUncheckedCreateWithoutProjectInput> | ProjectTagCreateWithoutProjectInput[] | ProjectTagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutProjectInput | ProjectTagCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectTagCreateManyProjectInputEnvelope
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type ModLogUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ModLogCreateWithoutProjectInput, ModLogUncheckedCreateWithoutProjectInput> | ModLogCreateWithoutProjectInput[] | ModLogUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ModLogCreateOrConnectWithoutProjectInput | ModLogCreateOrConnectWithoutProjectInput[]
    upsert?: ModLogUpsertWithWhereUniqueWithoutProjectInput | ModLogUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ModLogCreateManyProjectInputEnvelope
    set?: ModLogWhereUniqueInput | ModLogWhereUniqueInput[]
    disconnect?: ModLogWhereUniqueInput | ModLogWhereUniqueInput[]
    delete?: ModLogWhereUniqueInput | ModLogWhereUniqueInput[]
    connect?: ModLogWhereUniqueInput | ModLogWhereUniqueInput[]
    update?: ModLogUpdateWithWhereUniqueWithoutProjectInput | ModLogUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ModLogUpdateManyWithWhereWithoutProjectInput | ModLogUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ModLogScalarWhereInput | ModLogScalarWhereInput[]
  }

  export type ProjectTagUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectTagCreateWithoutProjectInput, ProjectTagUncheckedCreateWithoutProjectInput> | ProjectTagCreateWithoutProjectInput[] | ProjectTagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutProjectInput | ProjectTagCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectTagUpsertWithWhereUniqueWithoutProjectInput | ProjectTagUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectTagCreateManyProjectInputEnvelope
    set?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    disconnect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    delete?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    update?: ProjectTagUpdateWithWhereUniqueWithoutProjectInput | ProjectTagUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectTagUpdateManyWithWhereWithoutProjectInput | ProjectTagUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectTagScalarWhereInput | ProjectTagScalarWhereInput[]
  }

  export type ModLogUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ModLogCreateWithoutProjectInput, ModLogUncheckedCreateWithoutProjectInput> | ModLogCreateWithoutProjectInput[] | ModLogUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ModLogCreateOrConnectWithoutProjectInput | ModLogCreateOrConnectWithoutProjectInput[]
    upsert?: ModLogUpsertWithWhereUniqueWithoutProjectInput | ModLogUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ModLogCreateManyProjectInputEnvelope
    set?: ModLogWhereUniqueInput | ModLogWhereUniqueInput[]
    disconnect?: ModLogWhereUniqueInput | ModLogWhereUniqueInput[]
    delete?: ModLogWhereUniqueInput | ModLogWhereUniqueInput[]
    connect?: ModLogWhereUniqueInput | ModLogWhereUniqueInput[]
    update?: ModLogUpdateWithWhereUniqueWithoutProjectInput | ModLogUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ModLogUpdateManyWithWhereWithoutProjectInput | ModLogUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ModLogScalarWhereInput | ModLogScalarWhereInput[]
  }

  export type ProjectTagUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectTagCreateWithoutProjectInput, ProjectTagUncheckedCreateWithoutProjectInput> | ProjectTagCreateWithoutProjectInput[] | ProjectTagUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutProjectInput | ProjectTagCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectTagUpsertWithWhereUniqueWithoutProjectInput | ProjectTagUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectTagCreateManyProjectInputEnvelope
    set?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    disconnect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    delete?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    update?: ProjectTagUpdateWithWhereUniqueWithoutProjectInput | ProjectTagUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectTagUpdateManyWithWhereWithoutProjectInput | ProjectTagUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectTagScalarWhereInput | ProjectTagScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutModLogsInput = {
    create?: XOR<ProjectCreateWithoutModLogsInput, ProjectUncheckedCreateWithoutModLogsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutModLogsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutModLogsNestedInput = {
    create?: XOR<ProjectCreateWithoutModLogsInput, ProjectUncheckedCreateWithoutModLogsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutModLogsInput
    upsert?: ProjectUpsertWithoutModLogsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutModLogsInput, ProjectUpdateWithoutModLogsInput>, ProjectUncheckedUpdateWithoutModLogsInput>
  }

  export type ProjectTagCreateNestedManyWithoutTagInput = {
    create?: XOR<ProjectTagCreateWithoutTagInput, ProjectTagUncheckedCreateWithoutTagInput> | ProjectTagCreateWithoutTagInput[] | ProjectTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutTagInput | ProjectTagCreateOrConnectWithoutTagInput[]
    createMany?: ProjectTagCreateManyTagInputEnvelope
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
  }

  export type ProjectTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<ProjectTagCreateWithoutTagInput, ProjectTagUncheckedCreateWithoutTagInput> | ProjectTagCreateWithoutTagInput[] | ProjectTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutTagInput | ProjectTagCreateOrConnectWithoutTagInput[]
    createMany?: ProjectTagCreateManyTagInputEnvelope
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
  }

  export type ProjectTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<ProjectTagCreateWithoutTagInput, ProjectTagUncheckedCreateWithoutTagInput> | ProjectTagCreateWithoutTagInput[] | ProjectTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutTagInput | ProjectTagCreateOrConnectWithoutTagInput[]
    upsert?: ProjectTagUpsertWithWhereUniqueWithoutTagInput | ProjectTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: ProjectTagCreateManyTagInputEnvelope
    set?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    disconnect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    delete?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    update?: ProjectTagUpdateWithWhereUniqueWithoutTagInput | ProjectTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: ProjectTagUpdateManyWithWhereWithoutTagInput | ProjectTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: ProjectTagScalarWhereInput | ProjectTagScalarWhereInput[]
  }

  export type ProjectTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<ProjectTagCreateWithoutTagInput, ProjectTagUncheckedCreateWithoutTagInput> | ProjectTagCreateWithoutTagInput[] | ProjectTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: ProjectTagCreateOrConnectWithoutTagInput | ProjectTagCreateOrConnectWithoutTagInput[]
    upsert?: ProjectTagUpsertWithWhereUniqueWithoutTagInput | ProjectTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: ProjectTagCreateManyTagInputEnvelope
    set?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    disconnect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    delete?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    connect?: ProjectTagWhereUniqueInput | ProjectTagWhereUniqueInput[]
    update?: ProjectTagUpdateWithWhereUniqueWithoutTagInput | ProjectTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: ProjectTagUpdateManyWithWhereWithoutTagInput | ProjectTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: ProjectTagScalarWhereInput | ProjectTagScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutTagsInput = {
    create?: XOR<ProjectCreateWithoutTagsInput, ProjectUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTagsInput
    connect?: ProjectWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutProjectsInput = {
    create?: XOR<TagCreateWithoutProjectsInput, TagUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TagCreateOrConnectWithoutProjectsInput
    connect?: TagWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<ProjectCreateWithoutTagsInput, ProjectUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTagsInput
    upsert?: ProjectUpsertWithoutTagsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTagsInput, ProjectUpdateWithoutTagsInput>, ProjectUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<TagCreateWithoutProjectsInput, TagUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TagCreateOrConnectWithoutProjectsInput
    upsert?: TagUpsertWithoutProjectsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutProjectsInput, TagUpdateWithoutProjectsInput>, TagUncheckedUpdateWithoutProjectsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProjectCreateWithoutUserInput = {
    title: string
    description?: string | null
    imageUrl?: string | null
    status?: string
    progress?: number
    totalSpent?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    modLogs?: ModLogCreateNestedManyWithoutProjectInput
    tags?: ProjectTagCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description?: string | null
    imageUrl?: string | null
    status?: string
    progress?: number
    totalSpent?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    modLogs?: ModLogUncheckedCreateNestedManyWithoutProjectInput
    tags?: ProjectTagUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: IntFilter<"Project"> | number
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    imageUrl?: StringNullableFilter<"Project"> | string | null
    status?: StringFilter<"Project"> | string
    progress?: IntFilter<"Project"> | number
    totalSpent?: DecimalFilter<"Project"> | Decimal | DecimalJsLike | number | string
    userId?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type UserCreateWithoutProjectsInput = {
    email: string
    username?: string | null
    fullname?: string | null
    password: string
    wallet?: Decimal | DecimalJsLike | number | string
    role?: string
    avatarUrl?: string | null
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: number
    email: string
    username?: string | null
    fullname?: string | null
    password: string
    wallet?: Decimal | DecimalJsLike | number | string
    role?: string
    avatarUrl?: string | null
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type ModLogCreateWithoutProjectInput = {
    logName: string
    description?: string | null
    cost: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type ModLogUncheckedCreateWithoutProjectInput = {
    id?: number
    logName: string
    description?: string | null
    cost: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type ModLogCreateOrConnectWithoutProjectInput = {
    where: ModLogWhereUniqueInput
    create: XOR<ModLogCreateWithoutProjectInput, ModLogUncheckedCreateWithoutProjectInput>
  }

  export type ModLogCreateManyProjectInputEnvelope = {
    data: ModLogCreateManyProjectInput | ModLogCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectTagCreateWithoutProjectInput = {
    tag: TagCreateNestedOneWithoutProjectsInput
  }

  export type ProjectTagUncheckedCreateWithoutProjectInput = {
    tagId: number
  }

  export type ProjectTagCreateOrConnectWithoutProjectInput = {
    where: ProjectTagWhereUniqueInput
    create: XOR<ProjectTagCreateWithoutProjectInput, ProjectTagUncheckedCreateWithoutProjectInput>
  }

  export type ProjectTagCreateManyProjectInputEnvelope = {
    data: ProjectTagCreateManyProjectInput | ProjectTagCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    wallet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    wallet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModLogUpsertWithWhereUniqueWithoutProjectInput = {
    where: ModLogWhereUniqueInput
    update: XOR<ModLogUpdateWithoutProjectInput, ModLogUncheckedUpdateWithoutProjectInput>
    create: XOR<ModLogCreateWithoutProjectInput, ModLogUncheckedCreateWithoutProjectInput>
  }

  export type ModLogUpdateWithWhereUniqueWithoutProjectInput = {
    where: ModLogWhereUniqueInput
    data: XOR<ModLogUpdateWithoutProjectInput, ModLogUncheckedUpdateWithoutProjectInput>
  }

  export type ModLogUpdateManyWithWhereWithoutProjectInput = {
    where: ModLogScalarWhereInput
    data: XOR<ModLogUpdateManyMutationInput, ModLogUncheckedUpdateManyWithoutProjectInput>
  }

  export type ModLogScalarWhereInput = {
    AND?: ModLogScalarWhereInput | ModLogScalarWhereInput[]
    OR?: ModLogScalarWhereInput[]
    NOT?: ModLogScalarWhereInput | ModLogScalarWhereInput[]
    id?: IntFilter<"ModLog"> | number
    logName?: StringFilter<"ModLog"> | string
    description?: StringNullableFilter<"ModLog"> | string | null
    cost?: DecimalFilter<"ModLog"> | Decimal | DecimalJsLike | number | string
    imageUrl?: StringNullableFilter<"ModLog"> | string | null
    createdAt?: DateTimeFilter<"ModLog"> | Date | string
    projectId?: IntFilter<"ModLog"> | number
  }

  export type ProjectTagUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectTagWhereUniqueInput
    update: XOR<ProjectTagUpdateWithoutProjectInput, ProjectTagUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectTagCreateWithoutProjectInput, ProjectTagUncheckedCreateWithoutProjectInput>
  }

  export type ProjectTagUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectTagWhereUniqueInput
    data: XOR<ProjectTagUpdateWithoutProjectInput, ProjectTagUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectTagUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectTagScalarWhereInput
    data: XOR<ProjectTagUpdateManyMutationInput, ProjectTagUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectTagScalarWhereInput = {
    AND?: ProjectTagScalarWhereInput | ProjectTagScalarWhereInput[]
    OR?: ProjectTagScalarWhereInput[]
    NOT?: ProjectTagScalarWhereInput | ProjectTagScalarWhereInput[]
    projectId?: IntFilter<"ProjectTag"> | number
    tagId?: IntFilter<"ProjectTag"> | number
  }

  export type ProjectCreateWithoutModLogsInput = {
    title: string
    description?: string | null
    imageUrl?: string | null
    status?: string
    progress?: number
    totalSpent?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    tags?: ProjectTagCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutModLogsInput = {
    id?: number
    title: string
    description?: string | null
    imageUrl?: string | null
    status?: string
    progress?: number
    totalSpent?: Decimal | DecimalJsLike | number | string
    userId: number
    createdAt?: Date | string
    tags?: ProjectTagUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutModLogsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutModLogsInput, ProjectUncheckedCreateWithoutModLogsInput>
  }

  export type ProjectUpsertWithoutModLogsInput = {
    update: XOR<ProjectUpdateWithoutModLogsInput, ProjectUncheckedUpdateWithoutModLogsInput>
    create: XOR<ProjectCreateWithoutModLogsInput, ProjectUncheckedCreateWithoutModLogsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutModLogsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutModLogsInput, ProjectUncheckedUpdateWithoutModLogsInput>
  }

  export type ProjectUpdateWithoutModLogsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    tags?: ProjectTagUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutModLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: ProjectTagUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectTagCreateWithoutTagInput = {
    project: ProjectCreateNestedOneWithoutTagsInput
  }

  export type ProjectTagUncheckedCreateWithoutTagInput = {
    projectId: number
  }

  export type ProjectTagCreateOrConnectWithoutTagInput = {
    where: ProjectTagWhereUniqueInput
    create: XOR<ProjectTagCreateWithoutTagInput, ProjectTagUncheckedCreateWithoutTagInput>
  }

  export type ProjectTagCreateManyTagInputEnvelope = {
    data: ProjectTagCreateManyTagInput | ProjectTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type ProjectTagUpsertWithWhereUniqueWithoutTagInput = {
    where: ProjectTagWhereUniqueInput
    update: XOR<ProjectTagUpdateWithoutTagInput, ProjectTagUncheckedUpdateWithoutTagInput>
    create: XOR<ProjectTagCreateWithoutTagInput, ProjectTagUncheckedCreateWithoutTagInput>
  }

  export type ProjectTagUpdateWithWhereUniqueWithoutTagInput = {
    where: ProjectTagWhereUniqueInput
    data: XOR<ProjectTagUpdateWithoutTagInput, ProjectTagUncheckedUpdateWithoutTagInput>
  }

  export type ProjectTagUpdateManyWithWhereWithoutTagInput = {
    where: ProjectTagScalarWhereInput
    data: XOR<ProjectTagUpdateManyMutationInput, ProjectTagUncheckedUpdateManyWithoutTagInput>
  }

  export type ProjectCreateWithoutTagsInput = {
    title: string
    description?: string | null
    imageUrl?: string | null
    status?: string
    progress?: number
    totalSpent?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    modLogs?: ModLogCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTagsInput = {
    id?: number
    title: string
    description?: string | null
    imageUrl?: string | null
    status?: string
    progress?: number
    totalSpent?: Decimal | DecimalJsLike | number | string
    userId: number
    createdAt?: Date | string
    modLogs?: ModLogUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTagsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTagsInput, ProjectUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutProjectsInput = {
    name: string
  }

  export type TagUncheckedCreateWithoutProjectsInput = {
    id?: number
    name: string
  }

  export type TagCreateOrConnectWithoutProjectsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutProjectsInput, TagUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectUpsertWithoutTagsInput = {
    update: XOR<ProjectUpdateWithoutTagsInput, ProjectUncheckedUpdateWithoutTagsInput>
    create: XOR<ProjectCreateWithoutTagsInput, ProjectUncheckedCreateWithoutTagsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTagsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTagsInput, ProjectUncheckedUpdateWithoutTagsInput>
  }

  export type ProjectUpdateWithoutTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    modLogs?: ModLogUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modLogs?: ModLogUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type TagUpsertWithoutProjectsInput = {
    update: XOR<TagUpdateWithoutProjectsInput, TagUncheckedUpdateWithoutProjectsInput>
    create: XOR<TagCreateWithoutProjectsInput, TagUncheckedCreateWithoutProjectsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutProjectsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutProjectsInput, TagUncheckedUpdateWithoutProjectsInput>
  }

  export type TagUpdateWithoutProjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateManyUserInput = {
    id?: number
    title: string
    description?: string | null
    imageUrl?: string | null
    status?: string
    progress?: number
    totalSpent?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ProjectUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modLogs?: ModLogUpdateManyWithoutProjectNestedInput
    tags?: ProjectTagUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modLogs?: ModLogUncheckedUpdateManyWithoutProjectNestedInput
    tags?: ProjectTagUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    totalSpent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModLogCreateManyProjectInput = {
    id?: number
    logName: string
    description?: string | null
    cost: Decimal | DecimalJsLike | number | string
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type ProjectTagCreateManyProjectInput = {
    tagId: number
  }

  export type ModLogUpdateWithoutProjectInput = {
    logName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModLogUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    logName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModLogUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    logName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTagUpdateWithoutProjectInput = {
    tag?: TagUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectTagUncheckedUpdateWithoutProjectInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectTagUncheckedUpdateManyWithoutProjectInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectTagCreateManyTagInput = {
    projectId: number
  }

  export type ProjectTagUpdateWithoutTagInput = {
    project?: ProjectUpdateOneRequiredWithoutTagsNestedInput
  }

  export type ProjectTagUncheckedUpdateWithoutTagInput = {
    projectId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectTagUncheckedUpdateManyWithoutTagInput = {
    projectId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
     */
    export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagCountOutputTypeDefaultArgs instead
     */
    export type TagCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModLogDefaultArgs instead
     */
    export type ModLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PartListingDefaultArgs instead
     */
    export type PartListingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PartListingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagDefaultArgs instead
     */
    export type TagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectTagDefaultArgs instead
     */
    export type ProjectTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectTagDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}