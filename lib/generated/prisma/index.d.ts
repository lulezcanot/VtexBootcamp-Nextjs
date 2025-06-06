
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
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Option
 * 
 */
export type Option = $Result.DefaultSelection<Prisma.$OptionPayload>
/**
 * Model CategoryStat
 * 
 */
export type CategoryStat = $Result.DefaultSelection<Prisma.$CategoryStatPayload>
/**
 * Model LearningPath
 * 
 */
export type LearningPath = $Result.DefaultSelection<Prisma.$LearningPathPayload>
/**
 * Model Module
 * 
 */
export type Module = $Result.DefaultSelection<Prisma.$ModulePayload>
/**
 * Model Lesson
 * 
 */
export type Lesson = $Result.DefaultSelection<Prisma.$LessonPayload>
/**
 * Model UserLearningProgress
 * 
 */
export type UserLearningProgress = $Result.DefaultSelection<Prisma.$UserLearningProgressPayload>
/**
 * Model UserModuleProgress
 * 
 */
export type UserModuleProgress = $Result.DefaultSelection<Prisma.$UserModuleProgressPayload>
/**
 * Model UserLessonProgress
 * 
 */
export type UserLessonProgress = $Result.DefaultSelection<Prisma.$UserLessonProgressPayload>
/**
 * Model DocumentationCategory
 * 
 */
export type DocumentationCategory = $Result.DefaultSelection<Prisma.$DocumentationCategoryPayload>
/**
 * Model DocumentationSection
 * 
 */
export type DocumentationSection = $Result.DefaultSelection<Prisma.$DocumentationSectionPayload>
/**
 * Model CodeExample
 * 
 */
export type CodeExample = $Result.DefaultSelection<Prisma.$CodeExamplePayload>

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.option`: Exposes CRUD operations for the **Option** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Options
    * const options = await prisma.option.findMany()
    * ```
    */
  get option(): Prisma.OptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoryStat`: Exposes CRUD operations for the **CategoryStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryStats
    * const categoryStats = await prisma.categoryStat.findMany()
    * ```
    */
  get categoryStat(): Prisma.CategoryStatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.learningPath`: Exposes CRUD operations for the **LearningPath** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LearningPaths
    * const learningPaths = await prisma.learningPath.findMany()
    * ```
    */
  get learningPath(): Prisma.LearningPathDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.module`: Exposes CRUD operations for the **Module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): Prisma.ModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lesson.findMany()
    * ```
    */
  get lesson(): Prisma.LessonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLearningProgress`: Exposes CRUD operations for the **UserLearningProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLearningProgresses
    * const userLearningProgresses = await prisma.userLearningProgress.findMany()
    * ```
    */
  get userLearningProgress(): Prisma.UserLearningProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userModuleProgress`: Exposes CRUD operations for the **UserModuleProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserModuleProgresses
    * const userModuleProgresses = await prisma.userModuleProgress.findMany()
    * ```
    */
  get userModuleProgress(): Prisma.UserModuleProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLessonProgress`: Exposes CRUD operations for the **UserLessonProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLessonProgresses
    * const userLessonProgresses = await prisma.userLessonProgress.findMany()
    * ```
    */
  get userLessonProgress(): Prisma.UserLessonProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentationCategory`: Exposes CRUD operations for the **DocumentationCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentationCategories
    * const documentationCategories = await prisma.documentationCategory.findMany()
    * ```
    */
  get documentationCategory(): Prisma.DocumentationCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentationSection`: Exposes CRUD operations for the **DocumentationSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentationSections
    * const documentationSections = await prisma.documentationSection.findMany()
    * ```
    */
  get documentationSection(): Prisma.DocumentationSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.codeExample`: Exposes CRUD operations for the **CodeExample** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CodeExamples
    * const codeExamples = await prisma.codeExample.findMany()
    * ```
    */
  get codeExample(): Prisma.CodeExampleDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Category: 'Category',
    Quiz: 'Quiz',
    Question: 'Question',
    Option: 'Option',
    CategoryStat: 'CategoryStat',
    LearningPath: 'LearningPath',
    Module: 'Module',
    Lesson: 'Lesson',
    UserLearningProgress: 'UserLearningProgress',
    UserModuleProgress: 'UserModuleProgress',
    UserLessonProgress: 'UserLessonProgress',
    DocumentationCategory: 'DocumentationCategory',
    DocumentationSection: 'DocumentationSection',
    CodeExample: 'CodeExample'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "category" | "quiz" | "question" | "option" | "categoryStat" | "learningPath" | "module" | "lesson" | "userLearningProgress" | "userModuleProgress" | "userLessonProgress" | "documentationCategory" | "documentationSection" | "codeExample"
      txIsolationLevel: never
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.QuizFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.QuizAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.QuestionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.QuestionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Option: {
        payload: Prisma.$OptionPayload<ExtArgs>
        fields: Prisma.OptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findFirst: {
            args: Prisma.OptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          findMany: {
            args: Prisma.OptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>[]
          }
          create: {
            args: Prisma.OptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          createMany: {
            args: Prisma.OptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          update: {
            args: Prisma.OptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          deleteMany: {
            args: Prisma.OptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionPayload>
          }
          aggregate: {
            args: Prisma.OptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOption>
          }
          groupBy: {
            args: Prisma.OptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OptionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.OptionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.OptionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.OptionCountArgs<ExtArgs>
            result: $Utils.Optional<OptionCountAggregateOutputType> | number
          }
        }
      }
      CategoryStat: {
        payload: Prisma.$CategoryStatPayload<ExtArgs>
        fields: Prisma.CategoryStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryStatPayload>
          }
          findFirst: {
            args: Prisma.CategoryStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryStatPayload>
          }
          findMany: {
            args: Prisma.CategoryStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryStatPayload>[]
          }
          create: {
            args: Prisma.CategoryStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryStatPayload>
          }
          createMany: {
            args: Prisma.CategoryStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryStatPayload>
          }
          update: {
            args: Prisma.CategoryStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryStatPayload>
          }
          deleteMany: {
            args: Prisma.CategoryStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryStatPayload>
          }
          aggregate: {
            args: Prisma.CategoryStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoryStat>
          }
          groupBy: {
            args: Prisma.CategoryStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryStatGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CategoryStatFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CategoryStatAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CategoryStatCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryStatCountAggregateOutputType> | number
          }
        }
      }
      LearningPath: {
        payload: Prisma.$LearningPathPayload<ExtArgs>
        fields: Prisma.LearningPathFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LearningPathFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LearningPathFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload>
          }
          findFirst: {
            args: Prisma.LearningPathFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LearningPathFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload>
          }
          findMany: {
            args: Prisma.LearningPathFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload>[]
          }
          create: {
            args: Prisma.LearningPathCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload>
          }
          createMany: {
            args: Prisma.LearningPathCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LearningPathDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload>
          }
          update: {
            args: Prisma.LearningPathUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload>
          }
          deleteMany: {
            args: Prisma.LearningPathDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LearningPathUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LearningPathUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LearningPathPayload>
          }
          aggregate: {
            args: Prisma.LearningPathAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLearningPath>
          }
          groupBy: {
            args: Prisma.LearningPathGroupByArgs<ExtArgs>
            result: $Utils.Optional<LearningPathGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LearningPathFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LearningPathAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LearningPathCountArgs<ExtArgs>
            result: $Utils.Optional<LearningPathCountAggregateOutputType> | number
          }
        }
      }
      Module: {
        payload: Prisma.$ModulePayload<ExtArgs>
        fields: Prisma.ModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findFirst: {
            args: Prisma.ModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findMany: {
            args: Prisma.ModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          create: {
            args: Prisma.ModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          createMany: {
            args: Prisma.ModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          update: {
            args: Prisma.ModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          deleteMany: {
            args: Prisma.ModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          aggregate: {
            args: Prisma.ModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModule>
          }
          groupBy: {
            args: Prisma.ModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ModuleFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ModuleAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ModuleCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleCountAggregateOutputType> | number
          }
        }
      }
      Lesson: {
        payload: Prisma.$LessonPayload<ExtArgs>
        fields: Prisma.LessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findFirst: {
            args: Prisma.LessonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findMany: {
            args: Prisma.LessonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          create: {
            args: Prisma.LessonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          createMany: {
            args: Prisma.LessonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LessonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          update: {
            args: Prisma.LessonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          deleteMany: {
            args: Prisma.LessonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LessonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          aggregate: {
            args: Prisma.LessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLesson>
          }
          groupBy: {
            args: Prisma.LessonGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LessonFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LessonAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LessonCountArgs<ExtArgs>
            result: $Utils.Optional<LessonCountAggregateOutputType> | number
          }
        }
      }
      UserLearningProgress: {
        payload: Prisma.$UserLearningProgressPayload<ExtArgs>
        fields: Prisma.UserLearningProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLearningProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLearningProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningProgressPayload>
          }
          findFirst: {
            args: Prisma.UserLearningProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLearningProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningProgressPayload>
          }
          findMany: {
            args: Prisma.UserLearningProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningProgressPayload>[]
          }
          create: {
            args: Prisma.UserLearningProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningProgressPayload>
          }
          createMany: {
            args: Prisma.UserLearningProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserLearningProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningProgressPayload>
          }
          update: {
            args: Prisma.UserLearningProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserLearningProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLearningProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserLearningProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLearningProgressPayload>
          }
          aggregate: {
            args: Prisma.UserLearningProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLearningProgress>
          }
          groupBy: {
            args: Prisma.UserLearningProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLearningProgressGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserLearningProgressFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserLearningProgressAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserLearningProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserLearningProgressCountAggregateOutputType> | number
          }
        }
      }
      UserModuleProgress: {
        payload: Prisma.$UserModuleProgressPayload<ExtArgs>
        fields: Prisma.UserModuleProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserModuleProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserModuleProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>
          }
          findFirst: {
            args: Prisma.UserModuleProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserModuleProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>
          }
          findMany: {
            args: Prisma.UserModuleProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>[]
          }
          create: {
            args: Prisma.UserModuleProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>
          }
          createMany: {
            args: Prisma.UserModuleProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserModuleProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>
          }
          update: {
            args: Prisma.UserModuleProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserModuleProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserModuleProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserModuleProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModuleProgressPayload>
          }
          aggregate: {
            args: Prisma.UserModuleProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserModuleProgress>
          }
          groupBy: {
            args: Prisma.UserModuleProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserModuleProgressGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserModuleProgressFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserModuleProgressAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserModuleProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserModuleProgressCountAggregateOutputType> | number
          }
        }
      }
      UserLessonProgress: {
        payload: Prisma.$UserLessonProgressPayload<ExtArgs>
        fields: Prisma.UserLessonProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLessonProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLessonProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonProgressPayload>
          }
          findFirst: {
            args: Prisma.UserLessonProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLessonProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonProgressPayload>
          }
          findMany: {
            args: Prisma.UserLessonProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonProgressPayload>[]
          }
          create: {
            args: Prisma.UserLessonProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonProgressPayload>
          }
          createMany: {
            args: Prisma.UserLessonProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserLessonProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonProgressPayload>
          }
          update: {
            args: Prisma.UserLessonProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserLessonProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLessonProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserLessonProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLessonProgressPayload>
          }
          aggregate: {
            args: Prisma.UserLessonProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLessonProgress>
          }
          groupBy: {
            args: Prisma.UserLessonProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLessonProgressGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserLessonProgressFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserLessonProgressAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserLessonProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserLessonProgressCountAggregateOutputType> | number
          }
        }
      }
      DocumentationCategory: {
        payload: Prisma.$DocumentationCategoryPayload<ExtArgs>
        fields: Prisma.DocumentationCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentationCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentationCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationCategoryPayload>
          }
          findFirst: {
            args: Prisma.DocumentationCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentationCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationCategoryPayload>
          }
          findMany: {
            args: Prisma.DocumentationCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationCategoryPayload>[]
          }
          create: {
            args: Prisma.DocumentationCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationCategoryPayload>
          }
          createMany: {
            args: Prisma.DocumentationCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DocumentationCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationCategoryPayload>
          }
          update: {
            args: Prisma.DocumentationCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationCategoryPayload>
          }
          deleteMany: {
            args: Prisma.DocumentationCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentationCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DocumentationCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationCategoryPayload>
          }
          aggregate: {
            args: Prisma.DocumentationCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentationCategory>
          }
          groupBy: {
            args: Prisma.DocumentationCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentationCategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DocumentationCategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DocumentationCategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DocumentationCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentationCategoryCountAggregateOutputType> | number
          }
        }
      }
      DocumentationSection: {
        payload: Prisma.$DocumentationSectionPayload<ExtArgs>
        fields: Prisma.DocumentationSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentationSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentationSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationSectionPayload>
          }
          findFirst: {
            args: Prisma.DocumentationSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentationSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationSectionPayload>
          }
          findMany: {
            args: Prisma.DocumentationSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationSectionPayload>[]
          }
          create: {
            args: Prisma.DocumentationSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationSectionPayload>
          }
          createMany: {
            args: Prisma.DocumentationSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DocumentationSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationSectionPayload>
          }
          update: {
            args: Prisma.DocumentationSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationSectionPayload>
          }
          deleteMany: {
            args: Prisma.DocumentationSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentationSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DocumentationSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationSectionPayload>
          }
          aggregate: {
            args: Prisma.DocumentationSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentationSection>
          }
          groupBy: {
            args: Prisma.DocumentationSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentationSectionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DocumentationSectionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DocumentationSectionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DocumentationSectionCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentationSectionCountAggregateOutputType> | number
          }
        }
      }
      CodeExample: {
        payload: Prisma.$CodeExamplePayload<ExtArgs>
        fields: Prisma.CodeExampleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CodeExampleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeExamplePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CodeExampleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeExamplePayload>
          }
          findFirst: {
            args: Prisma.CodeExampleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeExamplePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CodeExampleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeExamplePayload>
          }
          findMany: {
            args: Prisma.CodeExampleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeExamplePayload>[]
          }
          create: {
            args: Prisma.CodeExampleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeExamplePayload>
          }
          createMany: {
            args: Prisma.CodeExampleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CodeExampleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeExamplePayload>
          }
          update: {
            args: Prisma.CodeExampleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeExamplePayload>
          }
          deleteMany: {
            args: Prisma.CodeExampleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CodeExampleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CodeExampleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeExamplePayload>
          }
          aggregate: {
            args: Prisma.CodeExampleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCodeExample>
          }
          groupBy: {
            args: Prisma.CodeExampleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodeExampleGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CodeExampleFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CodeExampleAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CodeExampleCountArgs<ExtArgs>
            result: $Utils.Optional<CodeExampleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    category?: CategoryOmit
    quiz?: QuizOmit
    question?: QuestionOmit
    option?: OptionOmit
    categoryStat?: CategoryStatOmit
    learningPath?: LearningPathOmit
    module?: ModuleOmit
    lesson?: LessonOmit
    userLearningProgress?: UserLearningProgressOmit
    userModuleProgress?: UserModuleProgressOmit
    userLessonProgress?: UserLessonProgressOmit
    documentationCategory?: DocumentationCategoryOmit
    documentationSection?: DocumentationSectionOmit
    codeExample?: CodeExampleOmit
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
    | 'updateManyAndReturn'
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
    categoryStats: number
    learningProgress: number
    moduleProgress: number
    lessonProgress: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryStats?: boolean | UserCountOutputTypeCountCategoryStatsArgs
    learningProgress?: boolean | UserCountOutputTypeCountLearningProgressArgs
    moduleProgress?: boolean | UserCountOutputTypeCountModuleProgressArgs
    lessonProgress?: boolean | UserCountOutputTypeCountLessonProgressArgs
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
  export type UserCountOutputTypeCountCategoryStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryStatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLearningProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLearningProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountModuleProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserModuleProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLessonProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLessonProgressWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    quizzes: number
    categoryStats: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizzes?: boolean | CategoryCountOutputTypeCountQuizzesArgs
    categoryStats?: boolean | CategoryCountOutputTypeCountCategoryStatsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountCategoryStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryStatWhereInput
  }


  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    questions: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | QuizCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    options: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    options?: boolean | QuestionCountOutputTypeCountOptionsArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
  }


  /**
   * Count Type LearningPathCountOutputType
   */

  export type LearningPathCountOutputType = {
    modules: number
    userProgress: number
  }

  export type LearningPathCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modules?: boolean | LearningPathCountOutputTypeCountModulesArgs
    userProgress?: boolean | LearningPathCountOutputTypeCountUserProgressArgs
  }

  // Custom InputTypes
  /**
   * LearningPathCountOutputType without action
   */
  export type LearningPathCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPathCountOutputType
     */
    select?: LearningPathCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LearningPathCountOutputType without action
   */
  export type LearningPathCountOutputTypeCountModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
  }

  /**
   * LearningPathCountOutputType without action
   */
  export type LearningPathCountOutputTypeCountUserProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLearningProgressWhereInput
  }


  /**
   * Count Type ModuleCountOutputType
   */

  export type ModuleCountOutputType = {
    lessons: number
    userProgress: number
  }

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | ModuleCountOutputTypeCountLessonsArgs
    userProgress?: boolean | ModuleCountOutputTypeCountUserProgressArgs
  }

  // Custom InputTypes
  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleCountOutputType
     */
    select?: ModuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountUserProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserModuleProgressWhereInput
  }


  /**
   * Count Type LessonCountOutputType
   */

  export type LessonCountOutputType = {
    userProgress: number
  }

  export type LessonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProgress?: boolean | LessonCountOutputTypeCountUserProgressArgs
  }

  // Custom InputTypes
  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCountOutputType
     */
    select?: LessonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountUserProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLessonProgressWhereInput
  }


  /**
   * Count Type DocumentationCategoryCountOutputType
   */

  export type DocumentationCategoryCountOutputType = {
    sections: number
  }

  export type DocumentationCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | DocumentationCategoryCountOutputTypeCountSectionsArgs
  }

  // Custom InputTypes
  /**
   * DocumentationCategoryCountOutputType without action
   */
  export type DocumentationCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentationCategoryCountOutputType
     */
    select?: DocumentationCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentationCategoryCountOutputType without action
   */
  export type DocumentationCategoryCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentationSectionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    role?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    role: string
    _count: UserCountAggregateOutputType | null
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
    clerkId?: boolean
    role?: boolean
    categoryStats?: boolean | User$categoryStatsArgs<ExtArgs>
    learningProgress?: boolean | User$learningProgressArgs<ExtArgs>
    moduleProgress?: boolean | User$moduleProgressArgs<ExtArgs>
    lessonProgress?: boolean | User$lessonProgressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryStats?: boolean | User$categoryStatsArgs<ExtArgs>
    learningProgress?: boolean | User$learningProgressArgs<ExtArgs>
    moduleProgress?: boolean | User$moduleProgressArgs<ExtArgs>
    lessonProgress?: boolean | User$lessonProgressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      categoryStats: Prisma.$CategoryStatPayload<ExtArgs>[]
      learningProgress: Prisma.$UserLearningProgressPayload<ExtArgs>[]
      moduleProgress: Prisma.$UserModuleProgressPayload<ExtArgs>[]
      lessonProgress: Prisma.$UserLessonProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoryStats<T extends User$categoryStatsArgs<ExtArgs> = {}>(args?: Subset<T, User$categoryStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    learningProgress<T extends User$learningProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$learningProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLearningProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    moduleProgress<T extends User$moduleProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$moduleProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lessonProgress<T extends User$lessonProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$lessonProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLessonProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.categoryStats
   */
  export type User$categoryStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryStat
     */
    select?: CategoryStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryStat
     */
    omit?: CategoryStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryStatInclude<ExtArgs> | null
    where?: CategoryStatWhereInput
    orderBy?: CategoryStatOrderByWithRelationInput | CategoryStatOrderByWithRelationInput[]
    cursor?: CategoryStatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryStatScalarFieldEnum | CategoryStatScalarFieldEnum[]
  }

  /**
   * User.learningProgress
   */
  export type User$learningProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearningProgress
     */
    select?: UserLearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearningProgress
     */
    omit?: UserLearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningProgressInclude<ExtArgs> | null
    where?: UserLearningProgressWhereInput
    orderBy?: UserLearningProgressOrderByWithRelationInput | UserLearningProgressOrderByWithRelationInput[]
    cursor?: UserLearningProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLearningProgressScalarFieldEnum | UserLearningProgressScalarFieldEnum[]
  }

  /**
   * User.moduleProgress
   */
  export type User$moduleProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressInclude<ExtArgs> | null
    where?: UserModuleProgressWhereInput
    orderBy?: UserModuleProgressOrderByWithRelationInput | UserModuleProgressOrderByWithRelationInput[]
    cursor?: UserModuleProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserModuleProgressScalarFieldEnum | UserModuleProgressScalarFieldEnum[]
  }

  /**
   * User.lessonProgress
   */
  export type User$lessonProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressInclude<ExtArgs> | null
    where?: UserLessonProgressWhereInput
    orderBy?: UserLessonProgressOrderByWithRelationInput | UserLessonProgressOrderByWithRelationInput[]
    cursor?: UserLessonProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLessonProgressScalarFieldEnum | UserLessonProgressScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    image: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    image: string | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    quizzes?: boolean | Category$quizzesArgs<ExtArgs>
    categoryStats?: boolean | Category$categoryStatsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "image", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizzes?: boolean | Category$quizzesArgs<ExtArgs>
    categoryStats?: boolean | Category$categoryStatsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      quizzes: Prisma.$QuizPayload<ExtArgs>[]
      categoryStats: Prisma.$CategoryStatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      image: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * @param {CategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const category = await prisma.category.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Category.
     * @param {CategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const category = await prisma.category.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quizzes<T extends Category$quizzesArgs<ExtArgs> = {}>(args?: Subset<T, Category$quizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categoryStats<T extends Category$categoryStatsArgs<ExtArgs> = {}>(args?: Subset<T, Category$categoryStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly image: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category findRaw
   */
  export type CategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Category aggregateRaw
   */
  export type CategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Category.quizzes
   */
  export type Category$quizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Category.categoryStats
   */
  export type Category$categoryStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryStat
     */
    select?: CategoryStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryStat
     */
    omit?: CategoryStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryStatInclude<ExtArgs> | null
    where?: CategoryStatWhereInput
    orderBy?: CategoryStatOrderByWithRelationInput | CategoryStatOrderByWithRelationInput[]
    cursor?: CategoryStatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryStatScalarFieldEnum | CategoryStatScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    image: string | null
    categoryId: string | null
  }

  export type QuizMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    image: string | null
    categoryId: string | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    title: number
    description: number
    image: number
    categoryId: number
    _all: number
  }


  export type QuizMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    categoryId?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    categoryId?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    image?: true
    categoryId?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: string
    title: string
    description: string | null
    image: string | null
    categoryId: string
    _count: QuizCountAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    questions?: boolean | Quiz$questionsArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>



  export type QuizSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    categoryId?: boolean
  }

  export type QuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "image" | "categoryId", ExtArgs["result"]["quiz"]>
  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    questions?: boolean | Quiz$questionsArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      questions: Prisma.$QuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      image: string | null
      categoryId: string
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }

  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizFindUniqueArgs>(args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizFindFirstArgs>(args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizFindManyArgs>(args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
     */
    create<T extends QuizCreateArgs>(args: SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quizzes.
     * @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCreateManyArgs>(args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
     */
    delete<T extends QuizDeleteArgs>(args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizUpdateArgs>(args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizDeleteManyArgs>(args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizUpdateManyArgs>(args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
     */
    upsert<T extends QuizUpsertArgs>(args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * @param {QuizFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const quiz = await prisma.quiz.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: QuizFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Quiz.
     * @param {QuizAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const quiz = await prisma.quiz.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: QuizAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
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
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends Quiz$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Quiz model
   */
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'String'>
    readonly title: FieldRef<"Quiz", 'String'>
    readonly description: FieldRef<"Quiz", 'String'>
    readonly image: FieldRef<"Quiz", 'String'>
    readonly categoryId: FieldRef<"Quiz", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }

  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
  }

  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }

  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to delete.
     */
    limit?: number
  }

  /**
   * Quiz findRaw
   */
  export type QuizFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Quiz aggregateRaw
   */
  export type QuizAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Quiz.questions
   */
  export type Quiz$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    text: string | null
    quizId: string | null
    difficulty: string | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    text: string | null
    quizId: string | null
    difficulty: string | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    text: number
    quizId: number
    difficulty: number
    _all: number
  }


  export type QuestionMinAggregateInputType = {
    id?: true
    text?: true
    quizId?: true
    difficulty?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    text?: true
    quizId?: true
    difficulty?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    text?: true
    quizId?: true
    difficulty?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    text: string
    quizId: string
    difficulty: string | null
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    quizId?: boolean
    difficulty?: boolean
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    options?: boolean | Question$optionsArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>



  export type QuestionSelectScalar = {
    id?: boolean
    text?: boolean
    quizId?: boolean
    difficulty?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "quizId" | "difficulty", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quiz?: boolean | QuizDefaultArgs<ExtArgs>
    options?: boolean | Question$optionsArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      quiz: Prisma.$QuizPayload<ExtArgs>
      options: Prisma.$OptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      quizId: string
      difficulty: string | null
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * @param {QuestionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const question = await prisma.question.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: QuestionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Question.
     * @param {QuestionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const question = await prisma.question.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: QuestionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quiz<T extends QuizDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizDefaultArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    options<T extends Question$optionsArgs<ExtArgs> = {}>(args?: Subset<T, Question$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly text: FieldRef<"Question", 'String'>
    readonly quizId: FieldRef<"Question", 'String'>
    readonly difficulty: FieldRef<"Question", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question findRaw
   */
  export type QuestionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Question aggregateRaw
   */
  export type QuestionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Question.options
   */
  export type Question$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    cursor?: OptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Option
   */

  export type AggregateOption = {
    _count: OptionCountAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  export type OptionMinAggregateOutputType = {
    id: string | null
    text: string | null
    isCorret: boolean | null
    questionId: string | null
  }

  export type OptionMaxAggregateOutputType = {
    id: string | null
    text: string | null
    isCorret: boolean | null
    questionId: string | null
  }

  export type OptionCountAggregateOutputType = {
    id: number
    text: number
    isCorret: number
    questionId: number
    _all: number
  }


  export type OptionMinAggregateInputType = {
    id?: true
    text?: true
    isCorret?: true
    questionId?: true
  }

  export type OptionMaxAggregateInputType = {
    id?: true
    text?: true
    isCorret?: true
    questionId?: true
  }

  export type OptionCountAggregateInputType = {
    id?: true
    text?: true
    isCorret?: true
    questionId?: true
    _all?: true
  }

  export type OptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Option to aggregate.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Options
    **/
    _count?: true | OptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptionMaxAggregateInputType
  }

  export type GetOptionAggregateType<T extends OptionAggregateArgs> = {
        [P in keyof T & keyof AggregateOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOption[P]>
      : GetScalarType<T[P], AggregateOption[P]>
  }




  export type OptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionWhereInput
    orderBy?: OptionOrderByWithAggregationInput | OptionOrderByWithAggregationInput[]
    by: OptionScalarFieldEnum[] | OptionScalarFieldEnum
    having?: OptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptionCountAggregateInputType | true
    _min?: OptionMinAggregateInputType
    _max?: OptionMaxAggregateInputType
  }

  export type OptionGroupByOutputType = {
    id: string
    text: string
    isCorret: boolean
    questionId: string
    _count: OptionCountAggregateOutputType | null
    _min: OptionMinAggregateOutputType | null
    _max: OptionMaxAggregateOutputType | null
  }

  type GetOptionGroupByPayload<T extends OptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptionGroupByOutputType[P]>
            : GetScalarType<T[P], OptionGroupByOutputType[P]>
        }
      >
    >


  export type OptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    isCorret?: boolean
    questionId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["option"]>



  export type OptionSelectScalar = {
    id?: boolean
    text?: boolean
    isCorret?: boolean
    questionId?: boolean
  }

  export type OptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "isCorret" | "questionId", ExtArgs["result"]["option"]>
  export type OptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $OptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Option"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      isCorret: boolean
      questionId: string
    }, ExtArgs["result"]["option"]>
    composites: {}
  }

  type OptionGetPayload<S extends boolean | null | undefined | OptionDefaultArgs> = $Result.GetResult<Prisma.$OptionPayload, S>

  type OptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OptionCountAggregateInputType | true
    }

  export interface OptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Option'], meta: { name: 'Option' } }
    /**
     * Find zero or one Option that matches the filter.
     * @param {OptionFindUniqueArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OptionFindUniqueArgs>(args: SelectSubset<T, OptionFindUniqueArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Option that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OptionFindUniqueOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OptionFindUniqueOrThrowArgs>(args: SelectSubset<T, OptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Option that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OptionFindFirstArgs>(args?: SelectSubset<T, OptionFindFirstArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Option that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindFirstOrThrowArgs} args - Arguments to find a Option
     * @example
     * // Get one Option
     * const option = await prisma.option.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OptionFindFirstOrThrowArgs>(args?: SelectSubset<T, OptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Options
     * const options = await prisma.option.findMany()
     * 
     * // Get first 10 Options
     * const options = await prisma.option.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const optionWithIdOnly = await prisma.option.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OptionFindManyArgs>(args?: SelectSubset<T, OptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Option.
     * @param {OptionCreateArgs} args - Arguments to create a Option.
     * @example
     * // Create one Option
     * const Option = await prisma.option.create({
     *   data: {
     *     // ... data to create a Option
     *   }
     * })
     * 
     */
    create<T extends OptionCreateArgs>(args: SelectSubset<T, OptionCreateArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Options.
     * @param {OptionCreateManyArgs} args - Arguments to create many Options.
     * @example
     * // Create many Options
     * const option = await prisma.option.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OptionCreateManyArgs>(args?: SelectSubset<T, OptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Option.
     * @param {OptionDeleteArgs} args - Arguments to delete one Option.
     * @example
     * // Delete one Option
     * const Option = await prisma.option.delete({
     *   where: {
     *     // ... filter to delete one Option
     *   }
     * })
     * 
     */
    delete<T extends OptionDeleteArgs>(args: SelectSubset<T, OptionDeleteArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Option.
     * @param {OptionUpdateArgs} args - Arguments to update one Option.
     * @example
     * // Update one Option
     * const option = await prisma.option.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OptionUpdateArgs>(args: SelectSubset<T, OptionUpdateArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Options.
     * @param {OptionDeleteManyArgs} args - Arguments to filter Options to delete.
     * @example
     * // Delete a few Options
     * const { count } = await prisma.option.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OptionDeleteManyArgs>(args?: SelectSubset<T, OptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Options
     * const option = await prisma.option.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OptionUpdateManyArgs>(args: SelectSubset<T, OptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Option.
     * @param {OptionUpsertArgs} args - Arguments to update or create a Option.
     * @example
     * // Update or create a Option
     * const option = await prisma.option.upsert({
     *   create: {
     *     // ... data to create a Option
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Option we want to update
     *   }
     * })
     */
    upsert<T extends OptionUpsertArgs>(args: SelectSubset<T, OptionUpsertArgs<ExtArgs>>): Prisma__OptionClient<$Result.GetResult<Prisma.$OptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Options that matches the filter.
     * @param {OptionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const option = await prisma.option.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: OptionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Option.
     * @param {OptionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const option = await prisma.option.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: OptionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionCountArgs} args - Arguments to filter Options to count.
     * @example
     * // Count the number of Options
     * const count = await prisma.option.count({
     *   where: {
     *     // ... the filter for the Options we want to count
     *   }
     * })
    **/
    count<T extends OptionCountArgs>(
      args?: Subset<T, OptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OptionAggregateArgs>(args: Subset<T, OptionAggregateArgs>): Prisma.PrismaPromise<GetOptionAggregateType<T>>

    /**
     * Group by Option.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionGroupByArgs} args - Group by arguments.
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
      T extends OptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptionGroupByArgs['orderBy'] }
        : { orderBy?: OptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Option model
   */
  readonly fields: OptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Option.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Option model
   */
  interface OptionFieldRefs {
    readonly id: FieldRef<"Option", 'String'>
    readonly text: FieldRef<"Option", 'String'>
    readonly isCorret: FieldRef<"Option", 'Boolean'>
    readonly questionId: FieldRef<"Option", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Option findUnique
   */
  export type OptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option findUniqueOrThrow
   */
  export type OptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option findFirst
   */
  export type OptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option findFirstOrThrow
   */
  export type OptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Option to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Options.
     */
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option findMany
   */
  export type OptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter, which Options to fetch.
     */
    where?: OptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Options to fetch.
     */
    orderBy?: OptionOrderByWithRelationInput | OptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Options.
     */
    cursor?: OptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Options.
     */
    skip?: number
    distinct?: OptionScalarFieldEnum | OptionScalarFieldEnum[]
  }

  /**
   * Option create
   */
  export type OptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Option.
     */
    data: XOR<OptionCreateInput, OptionUncheckedCreateInput>
  }

  /**
   * Option createMany
   */
  export type OptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Options.
     */
    data: OptionCreateManyInput | OptionCreateManyInput[]
  }

  /**
   * Option update
   */
  export type OptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Option.
     */
    data: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
    /**
     * Choose, which Option to update.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option updateMany
   */
  export type OptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Options.
     */
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyInput>
    /**
     * Filter which Options to update
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to update.
     */
    limit?: number
  }

  /**
   * Option upsert
   */
  export type OptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Option to update in case it exists.
     */
    where: OptionWhereUniqueInput
    /**
     * In case the Option found by the `where` argument doesn't exist, create a new Option with this data.
     */
    create: XOR<OptionCreateInput, OptionUncheckedCreateInput>
    /**
     * In case the Option was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptionUpdateInput, OptionUncheckedUpdateInput>
  }

  /**
   * Option delete
   */
  export type OptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
    /**
     * Filter which Option to delete.
     */
    where: OptionWhereUniqueInput
  }

  /**
   * Option deleteMany
   */
  export type OptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Options to delete
     */
    where?: OptionWhereInput
    /**
     * Limit how many Options to delete.
     */
    limit?: number
  }

  /**
   * Option findRaw
   */
  export type OptionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Option aggregateRaw
   */
  export type OptionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Option without action
   */
  export type OptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Option
     */
    select?: OptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Option
     */
    omit?: OptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionInclude<ExtArgs> | null
  }


  /**
   * Model CategoryStat
   */

  export type AggregateCategoryStat = {
    _count: CategoryStatCountAggregateOutputType | null
    _avg: CategoryStatAvgAggregateOutputType | null
    _sum: CategoryStatSumAggregateOutputType | null
    _min: CategoryStatMinAggregateOutputType | null
    _max: CategoryStatMaxAggregateOutputType | null
  }

  export type CategoryStatAvgAggregateOutputType = {
    attempts: number | null
    completed: number | null
    averageScore: number | null
  }

  export type CategoryStatSumAggregateOutputType = {
    attempts: number | null
    completed: number | null
    averageScore: number | null
  }

  export type CategoryStatMinAggregateOutputType = {
    id: string | null
    userId: string | null
    categoryId: string | null
    attempts: number | null
    completed: number | null
    averageScore: number | null
    lastAttempt: Date | null
  }

  export type CategoryStatMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    categoryId: string | null
    attempts: number | null
    completed: number | null
    averageScore: number | null
    lastAttempt: Date | null
  }

  export type CategoryStatCountAggregateOutputType = {
    id: number
    userId: number
    categoryId: number
    attempts: number
    completed: number
    averageScore: number
    lastAttempt: number
    _all: number
  }


  export type CategoryStatAvgAggregateInputType = {
    attempts?: true
    completed?: true
    averageScore?: true
  }

  export type CategoryStatSumAggregateInputType = {
    attempts?: true
    completed?: true
    averageScore?: true
  }

  export type CategoryStatMinAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    attempts?: true
    completed?: true
    averageScore?: true
    lastAttempt?: true
  }

  export type CategoryStatMaxAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    attempts?: true
    completed?: true
    averageScore?: true
    lastAttempt?: true
  }

  export type CategoryStatCountAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
    attempts?: true
    completed?: true
    averageScore?: true
    lastAttempt?: true
    _all?: true
  }

  export type CategoryStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryStat to aggregate.
     */
    where?: CategoryStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryStats to fetch.
     */
    orderBy?: CategoryStatOrderByWithRelationInput | CategoryStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryStats
    **/
    _count?: true | CategoryStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoryStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryStatMaxAggregateInputType
  }

  export type GetCategoryStatAggregateType<T extends CategoryStatAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryStat[P]>
      : GetScalarType<T[P], AggregateCategoryStat[P]>
  }




  export type CategoryStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryStatWhereInput
    orderBy?: CategoryStatOrderByWithAggregationInput | CategoryStatOrderByWithAggregationInput[]
    by: CategoryStatScalarFieldEnum[] | CategoryStatScalarFieldEnum
    having?: CategoryStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryStatCountAggregateInputType | true
    _avg?: CategoryStatAvgAggregateInputType
    _sum?: CategoryStatSumAggregateInputType
    _min?: CategoryStatMinAggregateInputType
    _max?: CategoryStatMaxAggregateInputType
  }

  export type CategoryStatGroupByOutputType = {
    id: string
    userId: string
    categoryId: string
    attempts: number
    completed: number
    averageScore: number | null
    lastAttempt: Date | null
    _count: CategoryStatCountAggregateOutputType | null
    _avg: CategoryStatAvgAggregateOutputType | null
    _sum: CategoryStatSumAggregateOutputType | null
    _min: CategoryStatMinAggregateOutputType | null
    _max: CategoryStatMaxAggregateOutputType | null
  }

  type GetCategoryStatGroupByPayload<T extends CategoryStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryStatGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryStatGroupByOutputType[P]>
        }
      >
    >


  export type CategoryStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    attempts?: boolean
    completed?: boolean
    averageScore?: boolean
    lastAttempt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryStat"]>



  export type CategoryStatSelectScalar = {
    id?: boolean
    userId?: boolean
    categoryId?: boolean
    attempts?: boolean
    completed?: boolean
    averageScore?: boolean
    lastAttempt?: boolean
  }

  export type CategoryStatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "categoryId" | "attempts" | "completed" | "averageScore" | "lastAttempt", ExtArgs["result"]["categoryStat"]>
  export type CategoryStatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $CategoryStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoryStat"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      categoryId: string
      attempts: number
      completed: number
      averageScore: number | null
      lastAttempt: Date | null
    }, ExtArgs["result"]["categoryStat"]>
    composites: {}
  }

  type CategoryStatGetPayload<S extends boolean | null | undefined | CategoryStatDefaultArgs> = $Result.GetResult<Prisma.$CategoryStatPayload, S>

  type CategoryStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryStatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryStatCountAggregateInputType | true
    }

  export interface CategoryStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryStat'], meta: { name: 'CategoryStat' } }
    /**
     * Find zero or one CategoryStat that matches the filter.
     * @param {CategoryStatFindUniqueArgs} args - Arguments to find a CategoryStat
     * @example
     * // Get one CategoryStat
     * const categoryStat = await prisma.categoryStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryStatFindUniqueArgs>(args: SelectSubset<T, CategoryStatFindUniqueArgs<ExtArgs>>): Prisma__CategoryStatClient<$Result.GetResult<Prisma.$CategoryStatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoryStat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryStatFindUniqueOrThrowArgs} args - Arguments to find a CategoryStat
     * @example
     * // Get one CategoryStat
     * const categoryStat = await prisma.categoryStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryStatFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryStatClient<$Result.GetResult<Prisma.$CategoryStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryStatFindFirstArgs} args - Arguments to find a CategoryStat
     * @example
     * // Get one CategoryStat
     * const categoryStat = await prisma.categoryStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryStatFindFirstArgs>(args?: SelectSubset<T, CategoryStatFindFirstArgs<ExtArgs>>): Prisma__CategoryStatClient<$Result.GetResult<Prisma.$CategoryStatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryStatFindFirstOrThrowArgs} args - Arguments to find a CategoryStat
     * @example
     * // Get one CategoryStat
     * const categoryStat = await prisma.categoryStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryStatFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryStatClient<$Result.GetResult<Prisma.$CategoryStatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoryStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryStats
     * const categoryStats = await prisma.categoryStat.findMany()
     * 
     * // Get first 10 CategoryStats
     * const categoryStats = await prisma.categoryStat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryStatWithIdOnly = await prisma.categoryStat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryStatFindManyArgs>(args?: SelectSubset<T, CategoryStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoryStat.
     * @param {CategoryStatCreateArgs} args - Arguments to create a CategoryStat.
     * @example
     * // Create one CategoryStat
     * const CategoryStat = await prisma.categoryStat.create({
     *   data: {
     *     // ... data to create a CategoryStat
     *   }
     * })
     * 
     */
    create<T extends CategoryStatCreateArgs>(args: SelectSubset<T, CategoryStatCreateArgs<ExtArgs>>): Prisma__CategoryStatClient<$Result.GetResult<Prisma.$CategoryStatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoryStats.
     * @param {CategoryStatCreateManyArgs} args - Arguments to create many CategoryStats.
     * @example
     * // Create many CategoryStats
     * const categoryStat = await prisma.categoryStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryStatCreateManyArgs>(args?: SelectSubset<T, CategoryStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CategoryStat.
     * @param {CategoryStatDeleteArgs} args - Arguments to delete one CategoryStat.
     * @example
     * // Delete one CategoryStat
     * const CategoryStat = await prisma.categoryStat.delete({
     *   where: {
     *     // ... filter to delete one CategoryStat
     *   }
     * })
     * 
     */
    delete<T extends CategoryStatDeleteArgs>(args: SelectSubset<T, CategoryStatDeleteArgs<ExtArgs>>): Prisma__CategoryStatClient<$Result.GetResult<Prisma.$CategoryStatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoryStat.
     * @param {CategoryStatUpdateArgs} args - Arguments to update one CategoryStat.
     * @example
     * // Update one CategoryStat
     * const categoryStat = await prisma.categoryStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryStatUpdateArgs>(args: SelectSubset<T, CategoryStatUpdateArgs<ExtArgs>>): Prisma__CategoryStatClient<$Result.GetResult<Prisma.$CategoryStatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoryStats.
     * @param {CategoryStatDeleteManyArgs} args - Arguments to filter CategoryStats to delete.
     * @example
     * // Delete a few CategoryStats
     * const { count } = await prisma.categoryStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryStatDeleteManyArgs>(args?: SelectSubset<T, CategoryStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryStats
     * const categoryStat = await prisma.categoryStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryStatUpdateManyArgs>(args: SelectSubset<T, CategoryStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoryStat.
     * @param {CategoryStatUpsertArgs} args - Arguments to update or create a CategoryStat.
     * @example
     * // Update or create a CategoryStat
     * const categoryStat = await prisma.categoryStat.upsert({
     *   create: {
     *     // ... data to create a CategoryStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryStat we want to update
     *   }
     * })
     */
    upsert<T extends CategoryStatUpsertArgs>(args: SelectSubset<T, CategoryStatUpsertArgs<ExtArgs>>): Prisma__CategoryStatClient<$Result.GetResult<Prisma.$CategoryStatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoryStats that matches the filter.
     * @param {CategoryStatFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const categoryStat = await prisma.categoryStat.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CategoryStatFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CategoryStat.
     * @param {CategoryStatAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const categoryStat = await prisma.categoryStat.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CategoryStatAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of CategoryStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryStatCountArgs} args - Arguments to filter CategoryStats to count.
     * @example
     * // Count the number of CategoryStats
     * const count = await prisma.categoryStat.count({
     *   where: {
     *     // ... the filter for the CategoryStats we want to count
     *   }
     * })
    **/
    count<T extends CategoryStatCountArgs>(
      args?: Subset<T, CategoryStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryStatAggregateArgs>(args: Subset<T, CategoryStatAggregateArgs>): Prisma.PrismaPromise<GetCategoryStatAggregateType<T>>

    /**
     * Group by CategoryStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryStatGroupByArgs} args - Group by arguments.
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
      T extends CategoryStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryStatGroupByArgs['orderBy'] }
        : { orderBy?: CategoryStatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryStat model
   */
  readonly fields: CategoryStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CategoryStat model
   */
  interface CategoryStatFieldRefs {
    readonly id: FieldRef<"CategoryStat", 'String'>
    readonly userId: FieldRef<"CategoryStat", 'String'>
    readonly categoryId: FieldRef<"CategoryStat", 'String'>
    readonly attempts: FieldRef<"CategoryStat", 'Int'>
    readonly completed: FieldRef<"CategoryStat", 'Int'>
    readonly averageScore: FieldRef<"CategoryStat", 'Float'>
    readonly lastAttempt: FieldRef<"CategoryStat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CategoryStat findUnique
   */
  export type CategoryStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryStat
     */
    select?: CategoryStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryStat
     */
    omit?: CategoryStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryStatInclude<ExtArgs> | null
    /**
     * Filter, which CategoryStat to fetch.
     */
    where: CategoryStatWhereUniqueInput
  }

  /**
   * CategoryStat findUniqueOrThrow
   */
  export type CategoryStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryStat
     */
    select?: CategoryStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryStat
     */
    omit?: CategoryStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryStatInclude<ExtArgs> | null
    /**
     * Filter, which CategoryStat to fetch.
     */
    where: CategoryStatWhereUniqueInput
  }

  /**
   * CategoryStat findFirst
   */
  export type CategoryStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryStat
     */
    select?: CategoryStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryStat
     */
    omit?: CategoryStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryStatInclude<ExtArgs> | null
    /**
     * Filter, which CategoryStat to fetch.
     */
    where?: CategoryStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryStats to fetch.
     */
    orderBy?: CategoryStatOrderByWithRelationInput | CategoryStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryStats.
     */
    cursor?: CategoryStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryStats.
     */
    distinct?: CategoryStatScalarFieldEnum | CategoryStatScalarFieldEnum[]
  }

  /**
   * CategoryStat findFirstOrThrow
   */
  export type CategoryStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryStat
     */
    select?: CategoryStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryStat
     */
    omit?: CategoryStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryStatInclude<ExtArgs> | null
    /**
     * Filter, which CategoryStat to fetch.
     */
    where?: CategoryStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryStats to fetch.
     */
    orderBy?: CategoryStatOrderByWithRelationInput | CategoryStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryStats.
     */
    cursor?: CategoryStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryStats.
     */
    distinct?: CategoryStatScalarFieldEnum | CategoryStatScalarFieldEnum[]
  }

  /**
   * CategoryStat findMany
   */
  export type CategoryStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryStat
     */
    select?: CategoryStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryStat
     */
    omit?: CategoryStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryStatInclude<ExtArgs> | null
    /**
     * Filter, which CategoryStats to fetch.
     */
    where?: CategoryStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryStats to fetch.
     */
    orderBy?: CategoryStatOrderByWithRelationInput | CategoryStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryStats.
     */
    cursor?: CategoryStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryStats.
     */
    skip?: number
    distinct?: CategoryStatScalarFieldEnum | CategoryStatScalarFieldEnum[]
  }

  /**
   * CategoryStat create
   */
  export type CategoryStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryStat
     */
    select?: CategoryStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryStat
     */
    omit?: CategoryStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryStatInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoryStat.
     */
    data: XOR<CategoryStatCreateInput, CategoryStatUncheckedCreateInput>
  }

  /**
   * CategoryStat createMany
   */
  export type CategoryStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryStats.
     */
    data: CategoryStatCreateManyInput | CategoryStatCreateManyInput[]
  }

  /**
   * CategoryStat update
   */
  export type CategoryStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryStat
     */
    select?: CategoryStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryStat
     */
    omit?: CategoryStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryStatInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoryStat.
     */
    data: XOR<CategoryStatUpdateInput, CategoryStatUncheckedUpdateInput>
    /**
     * Choose, which CategoryStat to update.
     */
    where: CategoryStatWhereUniqueInput
  }

  /**
   * CategoryStat updateMany
   */
  export type CategoryStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryStats.
     */
    data: XOR<CategoryStatUpdateManyMutationInput, CategoryStatUncheckedUpdateManyInput>
    /**
     * Filter which CategoryStats to update
     */
    where?: CategoryStatWhereInput
    /**
     * Limit how many CategoryStats to update.
     */
    limit?: number
  }

  /**
   * CategoryStat upsert
   */
  export type CategoryStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryStat
     */
    select?: CategoryStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryStat
     */
    omit?: CategoryStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryStatInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoryStat to update in case it exists.
     */
    where: CategoryStatWhereUniqueInput
    /**
     * In case the CategoryStat found by the `where` argument doesn't exist, create a new CategoryStat with this data.
     */
    create: XOR<CategoryStatCreateInput, CategoryStatUncheckedCreateInput>
    /**
     * In case the CategoryStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryStatUpdateInput, CategoryStatUncheckedUpdateInput>
  }

  /**
   * CategoryStat delete
   */
  export type CategoryStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryStat
     */
    select?: CategoryStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryStat
     */
    omit?: CategoryStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryStatInclude<ExtArgs> | null
    /**
     * Filter which CategoryStat to delete.
     */
    where: CategoryStatWhereUniqueInput
  }

  /**
   * CategoryStat deleteMany
   */
  export type CategoryStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryStats to delete
     */
    where?: CategoryStatWhereInput
    /**
     * Limit how many CategoryStats to delete.
     */
    limit?: number
  }

  /**
   * CategoryStat findRaw
   */
  export type CategoryStatFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * CategoryStat aggregateRaw
   */
  export type CategoryStatAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * CategoryStat without action
   */
  export type CategoryStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryStat
     */
    select?: CategoryStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryStat
     */
    omit?: CategoryStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryStatInclude<ExtArgs> | null
  }


  /**
   * Model LearningPath
   */

  export type AggregateLearningPath = {
    _count: LearningPathCountAggregateOutputType | null
    _avg: LearningPathAvgAggregateOutputType | null
    _sum: LearningPathSumAggregateOutputType | null
    _min: LearningPathMinAggregateOutputType | null
    _max: LearningPathMaxAggregateOutputType | null
  }

  export type LearningPathAvgAggregateOutputType = {
    order: number | null
  }

  export type LearningPathSumAggregateOutputType = {
    order: number | null
  }

  export type LearningPathMinAggregateOutputType = {
    id: string | null
    name: string | null
    title: string | null
    description: string | null
    image: string | null
    order: number | null
  }

  export type LearningPathMaxAggregateOutputType = {
    id: string | null
    name: string | null
    title: string | null
    description: string | null
    image: string | null
    order: number | null
  }

  export type LearningPathCountAggregateOutputType = {
    id: number
    name: number
    title: number
    description: number
    image: number
    order: number
    _all: number
  }


  export type LearningPathAvgAggregateInputType = {
    order?: true
  }

  export type LearningPathSumAggregateInputType = {
    order?: true
  }

  export type LearningPathMinAggregateInputType = {
    id?: true
    name?: true
    title?: true
    description?: true
    image?: true
    order?: true
  }

  export type LearningPathMaxAggregateInputType = {
    id?: true
    name?: true
    title?: true
    description?: true
    image?: true
    order?: true
  }

  export type LearningPathCountAggregateInputType = {
    id?: true
    name?: true
    title?: true
    description?: true
    image?: true
    order?: true
    _all?: true
  }

  export type LearningPathAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningPath to aggregate.
     */
    where?: LearningPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPaths to fetch.
     */
    orderBy?: LearningPathOrderByWithRelationInput | LearningPathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LearningPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LearningPaths
    **/
    _count?: true | LearningPathCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LearningPathAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LearningPathSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LearningPathMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LearningPathMaxAggregateInputType
  }

  export type GetLearningPathAggregateType<T extends LearningPathAggregateArgs> = {
        [P in keyof T & keyof AggregateLearningPath]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearningPath[P]>
      : GetScalarType<T[P], AggregateLearningPath[P]>
  }




  export type LearningPathGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LearningPathWhereInput
    orderBy?: LearningPathOrderByWithAggregationInput | LearningPathOrderByWithAggregationInput[]
    by: LearningPathScalarFieldEnum[] | LearningPathScalarFieldEnum
    having?: LearningPathScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LearningPathCountAggregateInputType | true
    _avg?: LearningPathAvgAggregateInputType
    _sum?: LearningPathSumAggregateInputType
    _min?: LearningPathMinAggregateInputType
    _max?: LearningPathMaxAggregateInputType
  }

  export type LearningPathGroupByOutputType = {
    id: string
    name: string
    title: string
    description: string
    image: string | null
    order: number
    _count: LearningPathCountAggregateOutputType | null
    _avg: LearningPathAvgAggregateOutputType | null
    _sum: LearningPathSumAggregateOutputType | null
    _min: LearningPathMinAggregateOutputType | null
    _max: LearningPathMaxAggregateOutputType | null
  }

  type GetLearningPathGroupByPayload<T extends LearningPathGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LearningPathGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LearningPathGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LearningPathGroupByOutputType[P]>
            : GetScalarType<T[P], LearningPathGroupByOutputType[P]>
        }
      >
    >


  export type LearningPathSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    order?: boolean
    modules?: boolean | LearningPath$modulesArgs<ExtArgs>
    userProgress?: boolean | LearningPath$userProgressArgs<ExtArgs>
    _count?: boolean | LearningPathCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["learningPath"]>



  export type LearningPathSelectScalar = {
    id?: boolean
    name?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    order?: boolean
  }

  export type LearningPathOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "title" | "description" | "image" | "order", ExtArgs["result"]["learningPath"]>
  export type LearningPathInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modules?: boolean | LearningPath$modulesArgs<ExtArgs>
    userProgress?: boolean | LearningPath$userProgressArgs<ExtArgs>
    _count?: boolean | LearningPathCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LearningPathPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LearningPath"
    objects: {
      modules: Prisma.$ModulePayload<ExtArgs>[]
      userProgress: Prisma.$UserLearningProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      title: string
      description: string
      image: string | null
      order: number
    }, ExtArgs["result"]["learningPath"]>
    composites: {}
  }

  type LearningPathGetPayload<S extends boolean | null | undefined | LearningPathDefaultArgs> = $Result.GetResult<Prisma.$LearningPathPayload, S>

  type LearningPathCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LearningPathFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LearningPathCountAggregateInputType | true
    }

  export interface LearningPathDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LearningPath'], meta: { name: 'LearningPath' } }
    /**
     * Find zero or one LearningPath that matches the filter.
     * @param {LearningPathFindUniqueArgs} args - Arguments to find a LearningPath
     * @example
     * // Get one LearningPath
     * const learningPath = await prisma.learningPath.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LearningPathFindUniqueArgs>(args: SelectSubset<T, LearningPathFindUniqueArgs<ExtArgs>>): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LearningPath that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LearningPathFindUniqueOrThrowArgs} args - Arguments to find a LearningPath
     * @example
     * // Get one LearningPath
     * const learningPath = await prisma.learningPath.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LearningPathFindUniqueOrThrowArgs>(args: SelectSubset<T, LearningPathFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningPath that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathFindFirstArgs} args - Arguments to find a LearningPath
     * @example
     * // Get one LearningPath
     * const learningPath = await prisma.learningPath.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LearningPathFindFirstArgs>(args?: SelectSubset<T, LearningPathFindFirstArgs<ExtArgs>>): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LearningPath that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathFindFirstOrThrowArgs} args - Arguments to find a LearningPath
     * @example
     * // Get one LearningPath
     * const learningPath = await prisma.learningPath.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LearningPathFindFirstOrThrowArgs>(args?: SelectSubset<T, LearningPathFindFirstOrThrowArgs<ExtArgs>>): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LearningPaths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LearningPaths
     * const learningPaths = await prisma.learningPath.findMany()
     * 
     * // Get first 10 LearningPaths
     * const learningPaths = await prisma.learningPath.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learningPathWithIdOnly = await prisma.learningPath.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LearningPathFindManyArgs>(args?: SelectSubset<T, LearningPathFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LearningPath.
     * @param {LearningPathCreateArgs} args - Arguments to create a LearningPath.
     * @example
     * // Create one LearningPath
     * const LearningPath = await prisma.learningPath.create({
     *   data: {
     *     // ... data to create a LearningPath
     *   }
     * })
     * 
     */
    create<T extends LearningPathCreateArgs>(args: SelectSubset<T, LearningPathCreateArgs<ExtArgs>>): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LearningPaths.
     * @param {LearningPathCreateManyArgs} args - Arguments to create many LearningPaths.
     * @example
     * // Create many LearningPaths
     * const learningPath = await prisma.learningPath.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LearningPathCreateManyArgs>(args?: SelectSubset<T, LearningPathCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LearningPath.
     * @param {LearningPathDeleteArgs} args - Arguments to delete one LearningPath.
     * @example
     * // Delete one LearningPath
     * const LearningPath = await prisma.learningPath.delete({
     *   where: {
     *     // ... filter to delete one LearningPath
     *   }
     * })
     * 
     */
    delete<T extends LearningPathDeleteArgs>(args: SelectSubset<T, LearningPathDeleteArgs<ExtArgs>>): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LearningPath.
     * @param {LearningPathUpdateArgs} args - Arguments to update one LearningPath.
     * @example
     * // Update one LearningPath
     * const learningPath = await prisma.learningPath.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LearningPathUpdateArgs>(args: SelectSubset<T, LearningPathUpdateArgs<ExtArgs>>): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LearningPaths.
     * @param {LearningPathDeleteManyArgs} args - Arguments to filter LearningPaths to delete.
     * @example
     * // Delete a few LearningPaths
     * const { count } = await prisma.learningPath.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LearningPathDeleteManyArgs>(args?: SelectSubset<T, LearningPathDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LearningPaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LearningPaths
     * const learningPath = await prisma.learningPath.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LearningPathUpdateManyArgs>(args: SelectSubset<T, LearningPathUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LearningPath.
     * @param {LearningPathUpsertArgs} args - Arguments to update or create a LearningPath.
     * @example
     * // Update or create a LearningPath
     * const learningPath = await prisma.learningPath.upsert({
     *   create: {
     *     // ... data to create a LearningPath
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LearningPath we want to update
     *   }
     * })
     */
    upsert<T extends LearningPathUpsertArgs>(args: SelectSubset<T, LearningPathUpsertArgs<ExtArgs>>): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LearningPaths that matches the filter.
     * @param {LearningPathFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const learningPath = await prisma.learningPath.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: LearningPathFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a LearningPath.
     * @param {LearningPathAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const learningPath = await prisma.learningPath.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LearningPathAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of LearningPaths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathCountArgs} args - Arguments to filter LearningPaths to count.
     * @example
     * // Count the number of LearningPaths
     * const count = await prisma.learningPath.count({
     *   where: {
     *     // ... the filter for the LearningPaths we want to count
     *   }
     * })
    **/
    count<T extends LearningPathCountArgs>(
      args?: Subset<T, LearningPathCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LearningPathCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LearningPath.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LearningPathAggregateArgs>(args: Subset<T, LearningPathAggregateArgs>): Prisma.PrismaPromise<GetLearningPathAggregateType<T>>

    /**
     * Group by LearningPath.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearningPathGroupByArgs} args - Group by arguments.
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
      T extends LearningPathGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LearningPathGroupByArgs['orderBy'] }
        : { orderBy?: LearningPathGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LearningPathGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearningPathGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LearningPath model
   */
  readonly fields: LearningPathFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LearningPath.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LearningPathClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modules<T extends LearningPath$modulesArgs<ExtArgs> = {}>(args?: Subset<T, LearningPath$modulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userProgress<T extends LearningPath$userProgressArgs<ExtArgs> = {}>(args?: Subset<T, LearningPath$userProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLearningProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LearningPath model
   */
  interface LearningPathFieldRefs {
    readonly id: FieldRef<"LearningPath", 'String'>
    readonly name: FieldRef<"LearningPath", 'String'>
    readonly title: FieldRef<"LearningPath", 'String'>
    readonly description: FieldRef<"LearningPath", 'String'>
    readonly image: FieldRef<"LearningPath", 'String'>
    readonly order: FieldRef<"LearningPath", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LearningPath findUnique
   */
  export type LearningPathFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPath
     */
    omit?: LearningPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * Filter, which LearningPath to fetch.
     */
    where: LearningPathWhereUniqueInput
  }

  /**
   * LearningPath findUniqueOrThrow
   */
  export type LearningPathFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPath
     */
    omit?: LearningPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * Filter, which LearningPath to fetch.
     */
    where: LearningPathWhereUniqueInput
  }

  /**
   * LearningPath findFirst
   */
  export type LearningPathFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPath
     */
    omit?: LearningPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * Filter, which LearningPath to fetch.
     */
    where?: LearningPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPaths to fetch.
     */
    orderBy?: LearningPathOrderByWithRelationInput | LearningPathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningPaths.
     */
    cursor?: LearningPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningPaths.
     */
    distinct?: LearningPathScalarFieldEnum | LearningPathScalarFieldEnum[]
  }

  /**
   * LearningPath findFirstOrThrow
   */
  export type LearningPathFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPath
     */
    omit?: LearningPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * Filter, which LearningPath to fetch.
     */
    where?: LearningPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPaths to fetch.
     */
    orderBy?: LearningPathOrderByWithRelationInput | LearningPathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LearningPaths.
     */
    cursor?: LearningPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPaths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LearningPaths.
     */
    distinct?: LearningPathScalarFieldEnum | LearningPathScalarFieldEnum[]
  }

  /**
   * LearningPath findMany
   */
  export type LearningPathFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPath
     */
    omit?: LearningPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * Filter, which LearningPaths to fetch.
     */
    where?: LearningPathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LearningPaths to fetch.
     */
    orderBy?: LearningPathOrderByWithRelationInput | LearningPathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LearningPaths.
     */
    cursor?: LearningPathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LearningPaths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LearningPaths.
     */
    skip?: number
    distinct?: LearningPathScalarFieldEnum | LearningPathScalarFieldEnum[]
  }

  /**
   * LearningPath create
   */
  export type LearningPathCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPath
     */
    omit?: LearningPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * The data needed to create a LearningPath.
     */
    data: XOR<LearningPathCreateInput, LearningPathUncheckedCreateInput>
  }

  /**
   * LearningPath createMany
   */
  export type LearningPathCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LearningPaths.
     */
    data: LearningPathCreateManyInput | LearningPathCreateManyInput[]
  }

  /**
   * LearningPath update
   */
  export type LearningPathUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPath
     */
    omit?: LearningPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * The data needed to update a LearningPath.
     */
    data: XOR<LearningPathUpdateInput, LearningPathUncheckedUpdateInput>
    /**
     * Choose, which LearningPath to update.
     */
    where: LearningPathWhereUniqueInput
  }

  /**
   * LearningPath updateMany
   */
  export type LearningPathUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LearningPaths.
     */
    data: XOR<LearningPathUpdateManyMutationInput, LearningPathUncheckedUpdateManyInput>
    /**
     * Filter which LearningPaths to update
     */
    where?: LearningPathWhereInput
    /**
     * Limit how many LearningPaths to update.
     */
    limit?: number
  }

  /**
   * LearningPath upsert
   */
  export type LearningPathUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPath
     */
    omit?: LearningPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * The filter to search for the LearningPath to update in case it exists.
     */
    where: LearningPathWhereUniqueInput
    /**
     * In case the LearningPath found by the `where` argument doesn't exist, create a new LearningPath with this data.
     */
    create: XOR<LearningPathCreateInput, LearningPathUncheckedCreateInput>
    /**
     * In case the LearningPath was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LearningPathUpdateInput, LearningPathUncheckedUpdateInput>
  }

  /**
   * LearningPath delete
   */
  export type LearningPathDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPath
     */
    omit?: LearningPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathInclude<ExtArgs> | null
    /**
     * Filter which LearningPath to delete.
     */
    where: LearningPathWhereUniqueInput
  }

  /**
   * LearningPath deleteMany
   */
  export type LearningPathDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LearningPaths to delete
     */
    where?: LearningPathWhereInput
    /**
     * Limit how many LearningPaths to delete.
     */
    limit?: number
  }

  /**
   * LearningPath findRaw
   */
  export type LearningPathFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * LearningPath aggregateRaw
   */
  export type LearningPathAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * LearningPath.modules
   */
  export type LearningPath$modulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    cursor?: ModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * LearningPath.userProgress
   */
  export type LearningPath$userProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearningProgress
     */
    select?: UserLearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearningProgress
     */
    omit?: UserLearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningProgressInclude<ExtArgs> | null
    where?: UserLearningProgressWhereInput
    orderBy?: UserLearningProgressOrderByWithRelationInput | UserLearningProgressOrderByWithRelationInput[]
    cursor?: UserLearningProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLearningProgressScalarFieldEnum | UserLearningProgressScalarFieldEnum[]
  }

  /**
   * LearningPath without action
   */
  export type LearningPathDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LearningPath
     */
    select?: LearningPathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LearningPath
     */
    omit?: LearningPathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LearningPathInclude<ExtArgs> | null
  }


  /**
   * Model Module
   */

  export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  export type ModuleAvgAggregateOutputType = {
    order: number | null
  }

  export type ModuleSumAggregateOutputType = {
    order: number | null
  }

  export type ModuleMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    duration: string | null
    order: number | null
    learningPathId: string | null
  }

  export type ModuleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    duration: string | null
    order: number | null
    learningPathId: string | null
  }

  export type ModuleCountAggregateOutputType = {
    id: number
    title: number
    description: number
    duration: number
    order: number
    learningPathId: number
    _all: number
  }


  export type ModuleAvgAggregateInputType = {
    order?: true
  }

  export type ModuleSumAggregateInputType = {
    order?: true
  }

  export type ModuleMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    duration?: true
    order?: true
    learningPathId?: true
  }

  export type ModuleMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    duration?: true
    order?: true
    learningPathId?: true
  }

  export type ModuleCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    duration?: true
    order?: true
    learningPathId?: true
    _all?: true
  }

  export type ModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Module to aggregate.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modules
    **/
    _count?: true | ModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleMaxAggregateInputType
  }

  export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule[P]>
      : GetScalarType<T[P], AggregateModule[P]>
  }




  export type ModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithAggregationInput | ModuleOrderByWithAggregationInput[]
    by: ModuleScalarFieldEnum[] | ModuleScalarFieldEnum
    having?: ModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleCountAggregateInputType | true
    _avg?: ModuleAvgAggregateInputType
    _sum?: ModuleSumAggregateInputType
    _min?: ModuleMinAggregateInputType
    _max?: ModuleMaxAggregateInputType
  }

  export type ModuleGroupByOutputType = {
    id: string
    title: string
    description: string
    duration: string
    order: number
    learningPathId: string
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  type GetModuleGroupByPayload<T extends ModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleGroupByOutputType[P]>
        }
      >
    >


  export type ModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    duration?: boolean
    order?: boolean
    learningPathId?: boolean
    learningPath?: boolean | LearningPathDefaultArgs<ExtArgs>
    lessons?: boolean | Module$lessonsArgs<ExtArgs>
    userProgress?: boolean | Module$userProgressArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>



  export type ModuleSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    duration?: boolean
    order?: boolean
    learningPathId?: boolean
  }

  export type ModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "duration" | "order" | "learningPathId", ExtArgs["result"]["module"]>
  export type ModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    learningPath?: boolean | LearningPathDefaultArgs<ExtArgs>
    lessons?: boolean | Module$lessonsArgs<ExtArgs>
    userProgress?: boolean | Module$userProgressArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Module"
    objects: {
      learningPath: Prisma.$LearningPathPayload<ExtArgs>
      lessons: Prisma.$LessonPayload<ExtArgs>[]
      userProgress: Prisma.$UserModuleProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      duration: string
      order: number
      learningPathId: string
    }, ExtArgs["result"]["module"]>
    composites: {}
  }

  type ModuleGetPayload<S extends boolean | null | undefined | ModuleDefaultArgs> = $Result.GetResult<Prisma.$ModulePayload, S>

  type ModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleCountAggregateInputType | true
    }

  export interface ModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Module'], meta: { name: 'Module' } }
    /**
     * Find zero or one Module that matches the filter.
     * @param {ModuleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuleFindUniqueArgs>(args: SelectSubset<T, ModuleFindUniqueArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Module that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuleFindFirstArgs>(args?: SelectSubset<T, ModuleFindFirstArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.module.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.module.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleWithIdOnly = await prisma.module.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuleFindManyArgs>(args?: SelectSubset<T, ModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Module.
     * @param {ModuleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     * 
     */
    create<T extends ModuleCreateArgs>(args: SelectSubset<T, ModuleCreateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modules.
     * @param {ModuleCreateManyArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuleCreateManyArgs>(args?: SelectSubset<T, ModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Module.
     * @param {ModuleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     * 
     */
    delete<T extends ModuleDeleteArgs>(args: SelectSubset<T, ModuleDeleteArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Module.
     * @param {ModuleUpdateArgs} args - Arguments to update one Module.
     * @example
     * // Update one Module
     * const module = await prisma.module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuleUpdateArgs>(args: SelectSubset<T, ModuleUpdateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modules.
     * @param {ModuleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuleDeleteManyArgs>(args?: SelectSubset<T, ModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuleUpdateManyArgs>(args: SelectSubset<T, ModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Module.
     * @param {ModuleUpsertArgs} args - Arguments to update or create a Module.
     * @example
     * // Update or create a Module
     * const module = await prisma.module.upsert({
     *   create: {
     *     // ... data to create a Module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module we want to update
     *   }
     * })
     */
    upsert<T extends ModuleUpsertArgs>(args: SelectSubset<T, ModuleUpsertArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modules that matches the filter.
     * @param {ModuleFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const module = await prisma.module.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ModuleFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Module.
     * @param {ModuleAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const module = await prisma.module.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ModuleAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends ModuleCountArgs>(
      args?: Subset<T, ModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModuleAggregateArgs>(args: Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>

    /**
     * Group by Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleGroupByArgs} args - Group by arguments.
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
      T extends ModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleGroupByArgs['orderBy'] }
        : { orderBy?: ModuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Module model
   */
  readonly fields: ModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    learningPath<T extends LearningPathDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LearningPathDefaultArgs<ExtArgs>>): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lessons<T extends Module$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, Module$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userProgress<T extends Module$userProgressArgs<ExtArgs> = {}>(args?: Subset<T, Module$userProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Module model
   */
  interface ModuleFieldRefs {
    readonly id: FieldRef<"Module", 'String'>
    readonly title: FieldRef<"Module", 'String'>
    readonly description: FieldRef<"Module", 'String'>
    readonly duration: FieldRef<"Module", 'String'>
    readonly order: FieldRef<"Module", 'Int'>
    readonly learningPathId: FieldRef<"Module", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Module findUnique
   */
  export type ModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findUniqueOrThrow
   */
  export type ModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findFirst
   */
  export type ModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findFirstOrThrow
   */
  export type ModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findMany
   */
  export type ModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Modules to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module create
   */
  export type ModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Module.
     */
    data: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
  }

  /**
   * Module createMany
   */
  export type ModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
  }

  /**
   * Module update
   */
  export type ModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Module.
     */
    data: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
    /**
     * Choose, which Module to update.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module updateMany
   */
  export type ModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
  }

  /**
   * Module upsert
   */
  export type ModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Module to update in case it exists.
     */
    where: ModuleWhereUniqueInput
    /**
     * In case the Module found by the `where` argument doesn't exist, create a new Module with this data.
     */
    create: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
    /**
     * In case the Module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
  }

  /**
   * Module delete
   */
  export type ModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter which Module to delete.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module deleteMany
   */
  export type ModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modules to delete
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to delete.
     */
    limit?: number
  }

  /**
   * Module findRaw
   */
  export type ModuleFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Module aggregateRaw
   */
  export type ModuleAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Module.lessons
   */
  export type Module$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    cursor?: LessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Module.userProgress
   */
  export type Module$userProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressInclude<ExtArgs> | null
    where?: UserModuleProgressWhereInput
    orderBy?: UserModuleProgressOrderByWithRelationInput | UserModuleProgressOrderByWithRelationInput[]
    cursor?: UserModuleProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserModuleProgressScalarFieldEnum | UserModuleProgressScalarFieldEnum[]
  }

  /**
   * Module without action
   */
  export type ModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
  }


  /**
   * Model Lesson
   */

  export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  export type LessonAvgAggregateOutputType = {
    order: number | null
  }

  export type LessonSumAggregateOutputType = {
    order: number | null
  }

  export type LessonMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    videoUrl: string | null
    codeExample: string | null
    resources: string | null
    duration: string | null
    order: number | null
    moduleId: string | null
  }

  export type LessonMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    videoUrl: string | null
    codeExample: string | null
    resources: string | null
    duration: string | null
    order: number | null
    moduleId: string | null
  }

  export type LessonCountAggregateOutputType = {
    id: number
    title: number
    content: number
    videoUrl: number
    codeExample: number
    resources: number
    duration: number
    order: number
    moduleId: number
    _all: number
  }


  export type LessonAvgAggregateInputType = {
    order?: true
  }

  export type LessonSumAggregateInputType = {
    order?: true
  }

  export type LessonMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    videoUrl?: true
    codeExample?: true
    resources?: true
    duration?: true
    order?: true
    moduleId?: true
  }

  export type LessonMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    videoUrl?: true
    codeExample?: true
    resources?: true
    duration?: true
    order?: true
    moduleId?: true
  }

  export type LessonCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    videoUrl?: true
    codeExample?: true
    resources?: true
    duration?: true
    order?: true
    moduleId?: true
    _all?: true
  }

  export type LessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lesson to aggregate.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lessons
    **/
    _count?: true | LessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonMaxAggregateInputType
  }

  export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
        [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson[P]>
      : GetScalarType<T[P], AggregateLesson[P]>
  }




  export type LessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithAggregationInput | LessonOrderByWithAggregationInput[]
    by: LessonScalarFieldEnum[] | LessonScalarFieldEnum
    having?: LessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonCountAggregateInputType | true
    _avg?: LessonAvgAggregateInputType
    _sum?: LessonSumAggregateInputType
    _min?: LessonMinAggregateInputType
    _max?: LessonMaxAggregateInputType
  }

  export type LessonGroupByOutputType = {
    id: string
    title: string
    content: string
    videoUrl: string | null
    codeExample: string | null
    resources: string | null
    duration: string
    order: number
    moduleId: string
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonGroupByOutputType[P]>
            : GetScalarType<T[P], LessonGroupByOutputType[P]>
        }
      >
    >


  export type LessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    videoUrl?: boolean
    codeExample?: boolean
    resources?: boolean
    duration?: boolean
    order?: boolean
    moduleId?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    userProgress?: boolean | Lesson$userProgressArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>



  export type LessonSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    videoUrl?: boolean
    codeExample?: boolean
    resources?: boolean
    duration?: boolean
    order?: boolean
    moduleId?: boolean
  }

  export type LessonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "videoUrl" | "codeExample" | "resources" | "duration" | "order" | "moduleId", ExtArgs["result"]["lesson"]>
  export type LessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    userProgress?: boolean | Lesson$userProgressArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lesson"
    objects: {
      module: Prisma.$ModulePayload<ExtArgs>
      userProgress: Prisma.$UserLessonProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      videoUrl: string | null
      codeExample: string | null
      resources: string | null
      duration: string
      order: number
      moduleId: string
    }, ExtArgs["result"]["lesson"]>
    composites: {}
  }

  type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = $Result.GetResult<Prisma.$LessonPayload, S>

  type LessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonCountAggregateInputType | true
    }

  export interface LessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lesson'], meta: { name: 'Lesson' } }
    /**
     * Find zero or one Lesson that matches the filter.
     * @param {LessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonFindUniqueArgs>(args: SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonFindFirstArgs>(args?: SelectSubset<T, LessonFindFirstArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonWithIdOnly = await prisma.lesson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonFindManyArgs>(args?: SelectSubset<T, LessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lesson.
     * @param {LessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     * 
     */
    create<T extends LessonCreateArgs>(args: SelectSubset<T, LessonCreateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lessons.
     * @param {LessonCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonCreateManyArgs>(args?: SelectSubset<T, LessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lesson.
     * @param {LessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     * 
     */
    delete<T extends LessonDeleteArgs>(args: SelectSubset<T, LessonDeleteArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lesson.
     * @param {LessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonUpdateArgs>(args: SelectSubset<T, LessonUpdateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lessons.
     * @param {LessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonDeleteManyArgs>(args?: SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonUpdateManyArgs>(args: SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lesson.
     * @param {LessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
     */
    upsert<T extends LessonUpsertArgs>(args: SelectSubset<T, LessonUpsertArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lessons that matches the filter.
     * @param {LessonFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const lesson = await prisma.lesson.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: LessonFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Lesson.
     * @param {LessonAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const lesson = await prisma.lesson.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LessonAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends LessonCountArgs>(
      args?: Subset<T, LessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonAggregateArgs>(args: Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>

    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonGroupByArgs} args - Group by arguments.
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
      T extends LessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonGroupByArgs['orderBy'] }
        : { orderBy?: LessonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lesson model
   */
  readonly fields: LessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userProgress<T extends Lesson$userProgressArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$userProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLessonProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lesson model
   */
  interface LessonFieldRefs {
    readonly id: FieldRef<"Lesson", 'String'>
    readonly title: FieldRef<"Lesson", 'String'>
    readonly content: FieldRef<"Lesson", 'String'>
    readonly videoUrl: FieldRef<"Lesson", 'String'>
    readonly codeExample: FieldRef<"Lesson", 'String'>
    readonly resources: FieldRef<"Lesson", 'String'>
    readonly duration: FieldRef<"Lesson", 'String'>
    readonly order: FieldRef<"Lesson", 'Int'>
    readonly moduleId: FieldRef<"Lesson", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Lesson findUnique
   */
  export type LessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findUniqueOrThrow
   */
  export type LessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findFirst
   */
  export type LessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findFirstOrThrow
   */
  export type LessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findMany
   */
  export type LessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson create
   */
  export type LessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to create a Lesson.
     */
    data: XOR<LessonCreateInput, LessonUncheckedCreateInput>
  }

  /**
   * Lesson createMany
   */
  export type LessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
  }

  /**
   * Lesson update
   */
  export type LessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to update a Lesson.
     */
    data: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
    /**
     * Choose, which Lesson to update.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson updateMany
   */
  export type LessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
  }

  /**
   * Lesson upsert
   */
  export type LessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The filter to search for the Lesson to update in case it exists.
     */
    where: LessonWhereUniqueInput
    /**
     * In case the Lesson found by the `where` argument doesn't exist, create a new Lesson with this data.
     */
    create: XOR<LessonCreateInput, LessonUncheckedCreateInput>
    /**
     * In case the Lesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
  }

  /**
   * Lesson delete
   */
  export type LessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter which Lesson to delete.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson deleteMany
   */
  export type LessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lessons to delete
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to delete.
     */
    limit?: number
  }

  /**
   * Lesson findRaw
   */
  export type LessonFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Lesson aggregateRaw
   */
  export type LessonAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Lesson.userProgress
   */
  export type Lesson$userProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressInclude<ExtArgs> | null
    where?: UserLessonProgressWhereInput
    orderBy?: UserLessonProgressOrderByWithRelationInput | UserLessonProgressOrderByWithRelationInput[]
    cursor?: UserLessonProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLessonProgressScalarFieldEnum | UserLessonProgressScalarFieldEnum[]
  }

  /**
   * Lesson without action
   */
  export type LessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
  }


  /**
   * Model UserLearningProgress
   */

  export type AggregateUserLearningProgress = {
    _count: UserLearningProgressCountAggregateOutputType | null
    _avg: UserLearningProgressAvgAggregateOutputType | null
    _sum: UserLearningProgressSumAggregateOutputType | null
    _min: UserLearningProgressMinAggregateOutputType | null
    _max: UserLearningProgressMaxAggregateOutputType | null
  }

  export type UserLearningProgressAvgAggregateOutputType = {
    progressPercent: number | null
  }

  export type UserLearningProgressSumAggregateOutputType = {
    progressPercent: number | null
  }

  export type UserLearningProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    learningPathId: string | null
    startedAt: Date | null
    lastAccessedAt: Date | null
    completedAt: Date | null
    progressPercent: number | null
  }

  export type UserLearningProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    learningPathId: string | null
    startedAt: Date | null
    lastAccessedAt: Date | null
    completedAt: Date | null
    progressPercent: number | null
  }

  export type UserLearningProgressCountAggregateOutputType = {
    id: number
    userId: number
    learningPathId: number
    startedAt: number
    lastAccessedAt: number
    completedAt: number
    progressPercent: number
    _all: number
  }


  export type UserLearningProgressAvgAggregateInputType = {
    progressPercent?: true
  }

  export type UserLearningProgressSumAggregateInputType = {
    progressPercent?: true
  }

  export type UserLearningProgressMinAggregateInputType = {
    id?: true
    userId?: true
    learningPathId?: true
    startedAt?: true
    lastAccessedAt?: true
    completedAt?: true
    progressPercent?: true
  }

  export type UserLearningProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    learningPathId?: true
    startedAt?: true
    lastAccessedAt?: true
    completedAt?: true
    progressPercent?: true
  }

  export type UserLearningProgressCountAggregateInputType = {
    id?: true
    userId?: true
    learningPathId?: true
    startedAt?: true
    lastAccessedAt?: true
    completedAt?: true
    progressPercent?: true
    _all?: true
  }

  export type UserLearningProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLearningProgress to aggregate.
     */
    where?: UserLearningProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLearningProgresses to fetch.
     */
    orderBy?: UserLearningProgressOrderByWithRelationInput | UserLearningProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLearningProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLearningProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLearningProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLearningProgresses
    **/
    _count?: true | UserLearningProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserLearningProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserLearningProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLearningProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLearningProgressMaxAggregateInputType
  }

  export type GetUserLearningProgressAggregateType<T extends UserLearningProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLearningProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLearningProgress[P]>
      : GetScalarType<T[P], AggregateUserLearningProgress[P]>
  }




  export type UserLearningProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLearningProgressWhereInput
    orderBy?: UserLearningProgressOrderByWithAggregationInput | UserLearningProgressOrderByWithAggregationInput[]
    by: UserLearningProgressScalarFieldEnum[] | UserLearningProgressScalarFieldEnum
    having?: UserLearningProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLearningProgressCountAggregateInputType | true
    _avg?: UserLearningProgressAvgAggregateInputType
    _sum?: UserLearningProgressSumAggregateInputType
    _min?: UserLearningProgressMinAggregateInputType
    _max?: UserLearningProgressMaxAggregateInputType
  }

  export type UserLearningProgressGroupByOutputType = {
    id: string
    userId: string
    learningPathId: string
    startedAt: Date
    lastAccessedAt: Date
    completedAt: Date | null
    progressPercent: number
    _count: UserLearningProgressCountAggregateOutputType | null
    _avg: UserLearningProgressAvgAggregateOutputType | null
    _sum: UserLearningProgressSumAggregateOutputType | null
    _min: UserLearningProgressMinAggregateOutputType | null
    _max: UserLearningProgressMaxAggregateOutputType | null
  }

  type GetUserLearningProgressGroupByPayload<T extends UserLearningProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLearningProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLearningProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLearningProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserLearningProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserLearningProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    learningPathId?: boolean
    startedAt?: boolean
    lastAccessedAt?: boolean
    completedAt?: boolean
    progressPercent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    learningPath?: boolean | LearningPathDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLearningProgress"]>



  export type UserLearningProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    learningPathId?: boolean
    startedAt?: boolean
    lastAccessedAt?: boolean
    completedAt?: boolean
    progressPercent?: boolean
  }

  export type UserLearningProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "learningPathId" | "startedAt" | "lastAccessedAt" | "completedAt" | "progressPercent", ExtArgs["result"]["userLearningProgress"]>
  export type UserLearningProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    learningPath?: boolean | LearningPathDefaultArgs<ExtArgs>
  }

  export type $UserLearningProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLearningProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      learningPath: Prisma.$LearningPathPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      learningPathId: string
      startedAt: Date
      lastAccessedAt: Date
      completedAt: Date | null
      progressPercent: number
    }, ExtArgs["result"]["userLearningProgress"]>
    composites: {}
  }

  type UserLearningProgressGetPayload<S extends boolean | null | undefined | UserLearningProgressDefaultArgs> = $Result.GetResult<Prisma.$UserLearningProgressPayload, S>

  type UserLearningProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserLearningProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserLearningProgressCountAggregateInputType | true
    }

  export interface UserLearningProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLearningProgress'], meta: { name: 'UserLearningProgress' } }
    /**
     * Find zero or one UserLearningProgress that matches the filter.
     * @param {UserLearningProgressFindUniqueArgs} args - Arguments to find a UserLearningProgress
     * @example
     * // Get one UserLearningProgress
     * const userLearningProgress = await prisma.userLearningProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLearningProgressFindUniqueArgs>(args: SelectSubset<T, UserLearningProgressFindUniqueArgs<ExtArgs>>): Prisma__UserLearningProgressClient<$Result.GetResult<Prisma.$UserLearningProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLearningProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLearningProgressFindUniqueOrThrowArgs} args - Arguments to find a UserLearningProgress
     * @example
     * // Get one UserLearningProgress
     * const userLearningProgress = await prisma.userLearningProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLearningProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLearningProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLearningProgressClient<$Result.GetResult<Prisma.$UserLearningProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLearningProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLearningProgressFindFirstArgs} args - Arguments to find a UserLearningProgress
     * @example
     * // Get one UserLearningProgress
     * const userLearningProgress = await prisma.userLearningProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLearningProgressFindFirstArgs>(args?: SelectSubset<T, UserLearningProgressFindFirstArgs<ExtArgs>>): Prisma__UserLearningProgressClient<$Result.GetResult<Prisma.$UserLearningProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLearningProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLearningProgressFindFirstOrThrowArgs} args - Arguments to find a UserLearningProgress
     * @example
     * // Get one UserLearningProgress
     * const userLearningProgress = await prisma.userLearningProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLearningProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLearningProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLearningProgressClient<$Result.GetResult<Prisma.$UserLearningProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLearningProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLearningProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLearningProgresses
     * const userLearningProgresses = await prisma.userLearningProgress.findMany()
     * 
     * // Get first 10 UserLearningProgresses
     * const userLearningProgresses = await prisma.userLearningProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLearningProgressWithIdOnly = await prisma.userLearningProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLearningProgressFindManyArgs>(args?: SelectSubset<T, UserLearningProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLearningProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLearningProgress.
     * @param {UserLearningProgressCreateArgs} args - Arguments to create a UserLearningProgress.
     * @example
     * // Create one UserLearningProgress
     * const UserLearningProgress = await prisma.userLearningProgress.create({
     *   data: {
     *     // ... data to create a UserLearningProgress
     *   }
     * })
     * 
     */
    create<T extends UserLearningProgressCreateArgs>(args: SelectSubset<T, UserLearningProgressCreateArgs<ExtArgs>>): Prisma__UserLearningProgressClient<$Result.GetResult<Prisma.$UserLearningProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLearningProgresses.
     * @param {UserLearningProgressCreateManyArgs} args - Arguments to create many UserLearningProgresses.
     * @example
     * // Create many UserLearningProgresses
     * const userLearningProgress = await prisma.userLearningProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLearningProgressCreateManyArgs>(args?: SelectSubset<T, UserLearningProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserLearningProgress.
     * @param {UserLearningProgressDeleteArgs} args - Arguments to delete one UserLearningProgress.
     * @example
     * // Delete one UserLearningProgress
     * const UserLearningProgress = await prisma.userLearningProgress.delete({
     *   where: {
     *     // ... filter to delete one UserLearningProgress
     *   }
     * })
     * 
     */
    delete<T extends UserLearningProgressDeleteArgs>(args: SelectSubset<T, UserLearningProgressDeleteArgs<ExtArgs>>): Prisma__UserLearningProgressClient<$Result.GetResult<Prisma.$UserLearningProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLearningProgress.
     * @param {UserLearningProgressUpdateArgs} args - Arguments to update one UserLearningProgress.
     * @example
     * // Update one UserLearningProgress
     * const userLearningProgress = await prisma.userLearningProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLearningProgressUpdateArgs>(args: SelectSubset<T, UserLearningProgressUpdateArgs<ExtArgs>>): Prisma__UserLearningProgressClient<$Result.GetResult<Prisma.$UserLearningProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLearningProgresses.
     * @param {UserLearningProgressDeleteManyArgs} args - Arguments to filter UserLearningProgresses to delete.
     * @example
     * // Delete a few UserLearningProgresses
     * const { count } = await prisma.userLearningProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLearningProgressDeleteManyArgs>(args?: SelectSubset<T, UserLearningProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLearningProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLearningProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLearningProgresses
     * const userLearningProgress = await prisma.userLearningProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLearningProgressUpdateManyArgs>(args: SelectSubset<T, UserLearningProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserLearningProgress.
     * @param {UserLearningProgressUpsertArgs} args - Arguments to update or create a UserLearningProgress.
     * @example
     * // Update or create a UserLearningProgress
     * const userLearningProgress = await prisma.userLearningProgress.upsert({
     *   create: {
     *     // ... data to create a UserLearningProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLearningProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserLearningProgressUpsertArgs>(args: SelectSubset<T, UserLearningProgressUpsertArgs<ExtArgs>>): Prisma__UserLearningProgressClient<$Result.GetResult<Prisma.$UserLearningProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLearningProgresses that matches the filter.
     * @param {UserLearningProgressFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userLearningProgress = await prisma.userLearningProgress.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserLearningProgressFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserLearningProgress.
     * @param {UserLearningProgressAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userLearningProgress = await prisma.userLearningProgress.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserLearningProgressAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserLearningProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLearningProgressCountArgs} args - Arguments to filter UserLearningProgresses to count.
     * @example
     * // Count the number of UserLearningProgresses
     * const count = await prisma.userLearningProgress.count({
     *   where: {
     *     // ... the filter for the UserLearningProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserLearningProgressCountArgs>(
      args?: Subset<T, UserLearningProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLearningProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLearningProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLearningProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserLearningProgressAggregateArgs>(args: Subset<T, UserLearningProgressAggregateArgs>): Prisma.PrismaPromise<GetUserLearningProgressAggregateType<T>>

    /**
     * Group by UserLearningProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLearningProgressGroupByArgs} args - Group by arguments.
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
      T extends UserLearningProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLearningProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserLearningProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserLearningProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLearningProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLearningProgress model
   */
  readonly fields: UserLearningProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLearningProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLearningProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    learningPath<T extends LearningPathDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LearningPathDefaultArgs<ExtArgs>>): Prisma__LearningPathClient<$Result.GetResult<Prisma.$LearningPathPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserLearningProgress model
   */
  interface UserLearningProgressFieldRefs {
    readonly id: FieldRef<"UserLearningProgress", 'String'>
    readonly userId: FieldRef<"UserLearningProgress", 'String'>
    readonly learningPathId: FieldRef<"UserLearningProgress", 'String'>
    readonly startedAt: FieldRef<"UserLearningProgress", 'DateTime'>
    readonly lastAccessedAt: FieldRef<"UserLearningProgress", 'DateTime'>
    readonly completedAt: FieldRef<"UserLearningProgress", 'DateTime'>
    readonly progressPercent: FieldRef<"UserLearningProgress", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserLearningProgress findUnique
   */
  export type UserLearningProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearningProgress
     */
    select?: UserLearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearningProgress
     */
    omit?: UserLearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserLearningProgress to fetch.
     */
    where: UserLearningProgressWhereUniqueInput
  }

  /**
   * UserLearningProgress findUniqueOrThrow
   */
  export type UserLearningProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearningProgress
     */
    select?: UserLearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearningProgress
     */
    omit?: UserLearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserLearningProgress to fetch.
     */
    where: UserLearningProgressWhereUniqueInput
  }

  /**
   * UserLearningProgress findFirst
   */
  export type UserLearningProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearningProgress
     */
    select?: UserLearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearningProgress
     */
    omit?: UserLearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserLearningProgress to fetch.
     */
    where?: UserLearningProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLearningProgresses to fetch.
     */
    orderBy?: UserLearningProgressOrderByWithRelationInput | UserLearningProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLearningProgresses.
     */
    cursor?: UserLearningProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLearningProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLearningProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLearningProgresses.
     */
    distinct?: UserLearningProgressScalarFieldEnum | UserLearningProgressScalarFieldEnum[]
  }

  /**
   * UserLearningProgress findFirstOrThrow
   */
  export type UserLearningProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearningProgress
     */
    select?: UserLearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearningProgress
     */
    omit?: UserLearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserLearningProgress to fetch.
     */
    where?: UserLearningProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLearningProgresses to fetch.
     */
    orderBy?: UserLearningProgressOrderByWithRelationInput | UserLearningProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLearningProgresses.
     */
    cursor?: UserLearningProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLearningProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLearningProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLearningProgresses.
     */
    distinct?: UserLearningProgressScalarFieldEnum | UserLearningProgressScalarFieldEnum[]
  }

  /**
   * UserLearningProgress findMany
   */
  export type UserLearningProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearningProgress
     */
    select?: UserLearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearningProgress
     */
    omit?: UserLearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserLearningProgresses to fetch.
     */
    where?: UserLearningProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLearningProgresses to fetch.
     */
    orderBy?: UserLearningProgressOrderByWithRelationInput | UserLearningProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLearningProgresses.
     */
    cursor?: UserLearningProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLearningProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLearningProgresses.
     */
    skip?: number
    distinct?: UserLearningProgressScalarFieldEnum | UserLearningProgressScalarFieldEnum[]
  }

  /**
   * UserLearningProgress create
   */
  export type UserLearningProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearningProgress
     */
    select?: UserLearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearningProgress
     */
    omit?: UserLearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLearningProgress.
     */
    data: XOR<UserLearningProgressCreateInput, UserLearningProgressUncheckedCreateInput>
  }

  /**
   * UserLearningProgress createMany
   */
  export type UserLearningProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLearningProgresses.
     */
    data: UserLearningProgressCreateManyInput | UserLearningProgressCreateManyInput[]
  }

  /**
   * UserLearningProgress update
   */
  export type UserLearningProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearningProgress
     */
    select?: UserLearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearningProgress
     */
    omit?: UserLearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLearningProgress.
     */
    data: XOR<UserLearningProgressUpdateInput, UserLearningProgressUncheckedUpdateInput>
    /**
     * Choose, which UserLearningProgress to update.
     */
    where: UserLearningProgressWhereUniqueInput
  }

  /**
   * UserLearningProgress updateMany
   */
  export type UserLearningProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLearningProgresses.
     */
    data: XOR<UserLearningProgressUpdateManyMutationInput, UserLearningProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserLearningProgresses to update
     */
    where?: UserLearningProgressWhereInput
    /**
     * Limit how many UserLearningProgresses to update.
     */
    limit?: number
  }

  /**
   * UserLearningProgress upsert
   */
  export type UserLearningProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearningProgress
     */
    select?: UserLearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearningProgress
     */
    omit?: UserLearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLearningProgress to update in case it exists.
     */
    where: UserLearningProgressWhereUniqueInput
    /**
     * In case the UserLearningProgress found by the `where` argument doesn't exist, create a new UserLearningProgress with this data.
     */
    create: XOR<UserLearningProgressCreateInput, UserLearningProgressUncheckedCreateInput>
    /**
     * In case the UserLearningProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLearningProgressUpdateInput, UserLearningProgressUncheckedUpdateInput>
  }

  /**
   * UserLearningProgress delete
   */
  export type UserLearningProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearningProgress
     */
    select?: UserLearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearningProgress
     */
    omit?: UserLearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningProgressInclude<ExtArgs> | null
    /**
     * Filter which UserLearningProgress to delete.
     */
    where: UserLearningProgressWhereUniqueInput
  }

  /**
   * UserLearningProgress deleteMany
   */
  export type UserLearningProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLearningProgresses to delete
     */
    where?: UserLearningProgressWhereInput
    /**
     * Limit how many UserLearningProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserLearningProgress findRaw
   */
  export type UserLearningProgressFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserLearningProgress aggregateRaw
   */
  export type UserLearningProgressAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserLearningProgress without action
   */
  export type UserLearningProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLearningProgress
     */
    select?: UserLearningProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLearningProgress
     */
    omit?: UserLearningProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLearningProgressInclude<ExtArgs> | null
  }


  /**
   * Model UserModuleProgress
   */

  export type AggregateUserModuleProgress = {
    _count: UserModuleProgressCountAggregateOutputType | null
    _avg: UserModuleProgressAvgAggregateOutputType | null
    _sum: UserModuleProgressSumAggregateOutputType | null
    _min: UserModuleProgressMinAggregateOutputType | null
    _max: UserModuleProgressMaxAggregateOutputType | null
  }

  export type UserModuleProgressAvgAggregateOutputType = {
    progressPercent: number | null
  }

  export type UserModuleProgressSumAggregateOutputType = {
    progressPercent: number | null
  }

  export type UserModuleProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    moduleId: string | null
    startedAt: Date | null
    completedAt: Date | null
    progressPercent: number | null
  }

  export type UserModuleProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    moduleId: string | null
    startedAt: Date | null
    completedAt: Date | null
    progressPercent: number | null
  }

  export type UserModuleProgressCountAggregateOutputType = {
    id: number
    userId: number
    moduleId: number
    startedAt: number
    completedAt: number
    progressPercent: number
    _all: number
  }


  export type UserModuleProgressAvgAggregateInputType = {
    progressPercent?: true
  }

  export type UserModuleProgressSumAggregateInputType = {
    progressPercent?: true
  }

  export type UserModuleProgressMinAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    startedAt?: true
    completedAt?: true
    progressPercent?: true
  }

  export type UserModuleProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    startedAt?: true
    completedAt?: true
    progressPercent?: true
  }

  export type UserModuleProgressCountAggregateInputType = {
    id?: true
    userId?: true
    moduleId?: true
    startedAt?: true
    completedAt?: true
    progressPercent?: true
    _all?: true
  }

  export type UserModuleProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserModuleProgress to aggregate.
     */
    where?: UserModuleProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModuleProgresses to fetch.
     */
    orderBy?: UserModuleProgressOrderByWithRelationInput | UserModuleProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserModuleProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModuleProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModuleProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserModuleProgresses
    **/
    _count?: true | UserModuleProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserModuleProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserModuleProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserModuleProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserModuleProgressMaxAggregateInputType
  }

  export type GetUserModuleProgressAggregateType<T extends UserModuleProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserModuleProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserModuleProgress[P]>
      : GetScalarType<T[P], AggregateUserModuleProgress[P]>
  }




  export type UserModuleProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserModuleProgressWhereInput
    orderBy?: UserModuleProgressOrderByWithAggregationInput | UserModuleProgressOrderByWithAggregationInput[]
    by: UserModuleProgressScalarFieldEnum[] | UserModuleProgressScalarFieldEnum
    having?: UserModuleProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserModuleProgressCountAggregateInputType | true
    _avg?: UserModuleProgressAvgAggregateInputType
    _sum?: UserModuleProgressSumAggregateInputType
    _min?: UserModuleProgressMinAggregateInputType
    _max?: UserModuleProgressMaxAggregateInputType
  }

  export type UserModuleProgressGroupByOutputType = {
    id: string
    userId: string
    moduleId: string
    startedAt: Date
    completedAt: Date | null
    progressPercent: number
    _count: UserModuleProgressCountAggregateOutputType | null
    _avg: UserModuleProgressAvgAggregateOutputType | null
    _sum: UserModuleProgressSumAggregateOutputType | null
    _min: UserModuleProgressMinAggregateOutputType | null
    _max: UserModuleProgressMaxAggregateOutputType | null
  }

  type GetUserModuleProgressGroupByPayload<T extends UserModuleProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserModuleProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserModuleProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserModuleProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserModuleProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserModuleProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    startedAt?: boolean
    completedAt?: boolean
    progressPercent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userModuleProgress"]>



  export type UserModuleProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    moduleId?: boolean
    startedAt?: boolean
    completedAt?: boolean
    progressPercent?: boolean
  }

  export type UserModuleProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "moduleId" | "startedAt" | "completedAt" | "progressPercent", ExtArgs["result"]["userModuleProgress"]>
  export type UserModuleProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }

  export type $UserModuleProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserModuleProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      module: Prisma.$ModulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      moduleId: string
      startedAt: Date
      completedAt: Date | null
      progressPercent: number
    }, ExtArgs["result"]["userModuleProgress"]>
    composites: {}
  }

  type UserModuleProgressGetPayload<S extends boolean | null | undefined | UserModuleProgressDefaultArgs> = $Result.GetResult<Prisma.$UserModuleProgressPayload, S>

  type UserModuleProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserModuleProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserModuleProgressCountAggregateInputType | true
    }

  export interface UserModuleProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserModuleProgress'], meta: { name: 'UserModuleProgress' } }
    /**
     * Find zero or one UserModuleProgress that matches the filter.
     * @param {UserModuleProgressFindUniqueArgs} args - Arguments to find a UserModuleProgress
     * @example
     * // Get one UserModuleProgress
     * const userModuleProgress = await prisma.userModuleProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserModuleProgressFindUniqueArgs>(args: SelectSubset<T, UserModuleProgressFindUniqueArgs<ExtArgs>>): Prisma__UserModuleProgressClient<$Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserModuleProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserModuleProgressFindUniqueOrThrowArgs} args - Arguments to find a UserModuleProgress
     * @example
     * // Get one UserModuleProgress
     * const userModuleProgress = await prisma.userModuleProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserModuleProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserModuleProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserModuleProgressClient<$Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserModuleProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleProgressFindFirstArgs} args - Arguments to find a UserModuleProgress
     * @example
     * // Get one UserModuleProgress
     * const userModuleProgress = await prisma.userModuleProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserModuleProgressFindFirstArgs>(args?: SelectSubset<T, UserModuleProgressFindFirstArgs<ExtArgs>>): Prisma__UserModuleProgressClient<$Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserModuleProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleProgressFindFirstOrThrowArgs} args - Arguments to find a UserModuleProgress
     * @example
     * // Get one UserModuleProgress
     * const userModuleProgress = await prisma.userModuleProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserModuleProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserModuleProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserModuleProgressClient<$Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserModuleProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserModuleProgresses
     * const userModuleProgresses = await prisma.userModuleProgress.findMany()
     * 
     * // Get first 10 UserModuleProgresses
     * const userModuleProgresses = await prisma.userModuleProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userModuleProgressWithIdOnly = await prisma.userModuleProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserModuleProgressFindManyArgs>(args?: SelectSubset<T, UserModuleProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserModuleProgress.
     * @param {UserModuleProgressCreateArgs} args - Arguments to create a UserModuleProgress.
     * @example
     * // Create one UserModuleProgress
     * const UserModuleProgress = await prisma.userModuleProgress.create({
     *   data: {
     *     // ... data to create a UserModuleProgress
     *   }
     * })
     * 
     */
    create<T extends UserModuleProgressCreateArgs>(args: SelectSubset<T, UserModuleProgressCreateArgs<ExtArgs>>): Prisma__UserModuleProgressClient<$Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserModuleProgresses.
     * @param {UserModuleProgressCreateManyArgs} args - Arguments to create many UserModuleProgresses.
     * @example
     * // Create many UserModuleProgresses
     * const userModuleProgress = await prisma.userModuleProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserModuleProgressCreateManyArgs>(args?: SelectSubset<T, UserModuleProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserModuleProgress.
     * @param {UserModuleProgressDeleteArgs} args - Arguments to delete one UserModuleProgress.
     * @example
     * // Delete one UserModuleProgress
     * const UserModuleProgress = await prisma.userModuleProgress.delete({
     *   where: {
     *     // ... filter to delete one UserModuleProgress
     *   }
     * })
     * 
     */
    delete<T extends UserModuleProgressDeleteArgs>(args: SelectSubset<T, UserModuleProgressDeleteArgs<ExtArgs>>): Prisma__UserModuleProgressClient<$Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserModuleProgress.
     * @param {UserModuleProgressUpdateArgs} args - Arguments to update one UserModuleProgress.
     * @example
     * // Update one UserModuleProgress
     * const userModuleProgress = await prisma.userModuleProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserModuleProgressUpdateArgs>(args: SelectSubset<T, UserModuleProgressUpdateArgs<ExtArgs>>): Prisma__UserModuleProgressClient<$Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserModuleProgresses.
     * @param {UserModuleProgressDeleteManyArgs} args - Arguments to filter UserModuleProgresses to delete.
     * @example
     * // Delete a few UserModuleProgresses
     * const { count } = await prisma.userModuleProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserModuleProgressDeleteManyArgs>(args?: SelectSubset<T, UserModuleProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserModuleProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserModuleProgresses
     * const userModuleProgress = await prisma.userModuleProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserModuleProgressUpdateManyArgs>(args: SelectSubset<T, UserModuleProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserModuleProgress.
     * @param {UserModuleProgressUpsertArgs} args - Arguments to update or create a UserModuleProgress.
     * @example
     * // Update or create a UserModuleProgress
     * const userModuleProgress = await prisma.userModuleProgress.upsert({
     *   create: {
     *     // ... data to create a UserModuleProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserModuleProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserModuleProgressUpsertArgs>(args: SelectSubset<T, UserModuleProgressUpsertArgs<ExtArgs>>): Prisma__UserModuleProgressClient<$Result.GetResult<Prisma.$UserModuleProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserModuleProgresses that matches the filter.
     * @param {UserModuleProgressFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userModuleProgress = await prisma.userModuleProgress.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserModuleProgressFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserModuleProgress.
     * @param {UserModuleProgressAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userModuleProgress = await prisma.userModuleProgress.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserModuleProgressAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserModuleProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleProgressCountArgs} args - Arguments to filter UserModuleProgresses to count.
     * @example
     * // Count the number of UserModuleProgresses
     * const count = await prisma.userModuleProgress.count({
     *   where: {
     *     // ... the filter for the UserModuleProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserModuleProgressCountArgs>(
      args?: Subset<T, UserModuleProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserModuleProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserModuleProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserModuleProgressAggregateArgs>(args: Subset<T, UserModuleProgressAggregateArgs>): Prisma.PrismaPromise<GetUserModuleProgressAggregateType<T>>

    /**
     * Group by UserModuleProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModuleProgressGroupByArgs} args - Group by arguments.
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
      T extends UserModuleProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserModuleProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserModuleProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserModuleProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserModuleProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserModuleProgress model
   */
  readonly fields: UserModuleProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserModuleProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserModuleProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserModuleProgress model
   */
  interface UserModuleProgressFieldRefs {
    readonly id: FieldRef<"UserModuleProgress", 'String'>
    readonly userId: FieldRef<"UserModuleProgress", 'String'>
    readonly moduleId: FieldRef<"UserModuleProgress", 'String'>
    readonly startedAt: FieldRef<"UserModuleProgress", 'DateTime'>
    readonly completedAt: FieldRef<"UserModuleProgress", 'DateTime'>
    readonly progressPercent: FieldRef<"UserModuleProgress", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserModuleProgress findUnique
   */
  export type UserModuleProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserModuleProgress to fetch.
     */
    where: UserModuleProgressWhereUniqueInput
  }

  /**
   * UserModuleProgress findUniqueOrThrow
   */
  export type UserModuleProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserModuleProgress to fetch.
     */
    where: UserModuleProgressWhereUniqueInput
  }

  /**
   * UserModuleProgress findFirst
   */
  export type UserModuleProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserModuleProgress to fetch.
     */
    where?: UserModuleProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModuleProgresses to fetch.
     */
    orderBy?: UserModuleProgressOrderByWithRelationInput | UserModuleProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserModuleProgresses.
     */
    cursor?: UserModuleProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModuleProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModuleProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserModuleProgresses.
     */
    distinct?: UserModuleProgressScalarFieldEnum | UserModuleProgressScalarFieldEnum[]
  }

  /**
   * UserModuleProgress findFirstOrThrow
   */
  export type UserModuleProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserModuleProgress to fetch.
     */
    where?: UserModuleProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModuleProgresses to fetch.
     */
    orderBy?: UserModuleProgressOrderByWithRelationInput | UserModuleProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserModuleProgresses.
     */
    cursor?: UserModuleProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModuleProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModuleProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserModuleProgresses.
     */
    distinct?: UserModuleProgressScalarFieldEnum | UserModuleProgressScalarFieldEnum[]
  }

  /**
   * UserModuleProgress findMany
   */
  export type UserModuleProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserModuleProgresses to fetch.
     */
    where?: UserModuleProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModuleProgresses to fetch.
     */
    orderBy?: UserModuleProgressOrderByWithRelationInput | UserModuleProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserModuleProgresses.
     */
    cursor?: UserModuleProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModuleProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModuleProgresses.
     */
    skip?: number
    distinct?: UserModuleProgressScalarFieldEnum | UserModuleProgressScalarFieldEnum[]
  }

  /**
   * UserModuleProgress create
   */
  export type UserModuleProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserModuleProgress.
     */
    data: XOR<UserModuleProgressCreateInput, UserModuleProgressUncheckedCreateInput>
  }

  /**
   * UserModuleProgress createMany
   */
  export type UserModuleProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserModuleProgresses.
     */
    data: UserModuleProgressCreateManyInput | UserModuleProgressCreateManyInput[]
  }

  /**
   * UserModuleProgress update
   */
  export type UserModuleProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserModuleProgress.
     */
    data: XOR<UserModuleProgressUpdateInput, UserModuleProgressUncheckedUpdateInput>
    /**
     * Choose, which UserModuleProgress to update.
     */
    where: UserModuleProgressWhereUniqueInput
  }

  /**
   * UserModuleProgress updateMany
   */
  export type UserModuleProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserModuleProgresses.
     */
    data: XOR<UserModuleProgressUpdateManyMutationInput, UserModuleProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserModuleProgresses to update
     */
    where?: UserModuleProgressWhereInput
    /**
     * Limit how many UserModuleProgresses to update.
     */
    limit?: number
  }

  /**
   * UserModuleProgress upsert
   */
  export type UserModuleProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserModuleProgress to update in case it exists.
     */
    where: UserModuleProgressWhereUniqueInput
    /**
     * In case the UserModuleProgress found by the `where` argument doesn't exist, create a new UserModuleProgress with this data.
     */
    create: XOR<UserModuleProgressCreateInput, UserModuleProgressUncheckedCreateInput>
    /**
     * In case the UserModuleProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserModuleProgressUpdateInput, UserModuleProgressUncheckedUpdateInput>
  }

  /**
   * UserModuleProgress delete
   */
  export type UserModuleProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressInclude<ExtArgs> | null
    /**
     * Filter which UserModuleProgress to delete.
     */
    where: UserModuleProgressWhereUniqueInput
  }

  /**
   * UserModuleProgress deleteMany
   */
  export type UserModuleProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserModuleProgresses to delete
     */
    where?: UserModuleProgressWhereInput
    /**
     * Limit how many UserModuleProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserModuleProgress findRaw
   */
  export type UserModuleProgressFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserModuleProgress aggregateRaw
   */
  export type UserModuleProgressAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserModuleProgress without action
   */
  export type UserModuleProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModuleProgress
     */
    select?: UserModuleProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModuleProgress
     */
    omit?: UserModuleProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModuleProgressInclude<ExtArgs> | null
  }


  /**
   * Model UserLessonProgress
   */

  export type AggregateUserLessonProgress = {
    _count: UserLessonProgressCountAggregateOutputType | null
    _avg: UserLessonProgressAvgAggregateOutputType | null
    _sum: UserLessonProgressSumAggregateOutputType | null
    _min: UserLessonProgressMinAggregateOutputType | null
    _max: UserLessonProgressMaxAggregateOutputType | null
  }

  export type UserLessonProgressAvgAggregateOutputType = {
    timeSpent: number | null
  }

  export type UserLessonProgressSumAggregateOutputType = {
    timeSpent: number | null
  }

  export type UserLessonProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    lessonId: string | null
    startedAt: Date | null
    completedAt: Date | null
    timeSpent: number | null
  }

  export type UserLessonProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    lessonId: string | null
    startedAt: Date | null
    completedAt: Date | null
    timeSpent: number | null
  }

  export type UserLessonProgressCountAggregateOutputType = {
    id: number
    userId: number
    lessonId: number
    startedAt: number
    completedAt: number
    timeSpent: number
    _all: number
  }


  export type UserLessonProgressAvgAggregateInputType = {
    timeSpent?: true
  }

  export type UserLessonProgressSumAggregateInputType = {
    timeSpent?: true
  }

  export type UserLessonProgressMinAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
    startedAt?: true
    completedAt?: true
    timeSpent?: true
  }

  export type UserLessonProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
    startedAt?: true
    completedAt?: true
    timeSpent?: true
  }

  export type UserLessonProgressCountAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
    startedAt?: true
    completedAt?: true
    timeSpent?: true
    _all?: true
  }

  export type UserLessonProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLessonProgress to aggregate.
     */
    where?: UserLessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLessonProgresses to fetch.
     */
    orderBy?: UserLessonProgressOrderByWithRelationInput | UserLessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLessonProgresses
    **/
    _count?: true | UserLessonProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserLessonProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserLessonProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLessonProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLessonProgressMaxAggregateInputType
  }

  export type GetUserLessonProgressAggregateType<T extends UserLessonProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLessonProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLessonProgress[P]>
      : GetScalarType<T[P], AggregateUserLessonProgress[P]>
  }




  export type UserLessonProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLessonProgressWhereInput
    orderBy?: UserLessonProgressOrderByWithAggregationInput | UserLessonProgressOrderByWithAggregationInput[]
    by: UserLessonProgressScalarFieldEnum[] | UserLessonProgressScalarFieldEnum
    having?: UserLessonProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLessonProgressCountAggregateInputType | true
    _avg?: UserLessonProgressAvgAggregateInputType
    _sum?: UserLessonProgressSumAggregateInputType
    _min?: UserLessonProgressMinAggregateInputType
    _max?: UserLessonProgressMaxAggregateInputType
  }

  export type UserLessonProgressGroupByOutputType = {
    id: string
    userId: string
    lessonId: string
    startedAt: Date
    completedAt: Date | null
    timeSpent: number
    _count: UserLessonProgressCountAggregateOutputType | null
    _avg: UserLessonProgressAvgAggregateOutputType | null
    _sum: UserLessonProgressSumAggregateOutputType | null
    _min: UserLessonProgressMinAggregateOutputType | null
    _max: UserLessonProgressMaxAggregateOutputType | null
  }

  type GetUserLessonProgressGroupByPayload<T extends UserLessonProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLessonProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLessonProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLessonProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserLessonProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserLessonProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    startedAt?: boolean
    completedAt?: boolean
    timeSpent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLessonProgress"]>



  export type UserLessonProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    startedAt?: boolean
    completedAt?: boolean
    timeSpent?: boolean
  }

  export type UserLessonProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "lessonId" | "startedAt" | "completedAt" | "timeSpent", ExtArgs["result"]["userLessonProgress"]>
  export type UserLessonProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }

  export type $UserLessonProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLessonProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      lesson: Prisma.$LessonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      lessonId: string
      startedAt: Date
      completedAt: Date | null
      timeSpent: number
    }, ExtArgs["result"]["userLessonProgress"]>
    composites: {}
  }

  type UserLessonProgressGetPayload<S extends boolean | null | undefined | UserLessonProgressDefaultArgs> = $Result.GetResult<Prisma.$UserLessonProgressPayload, S>

  type UserLessonProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserLessonProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserLessonProgressCountAggregateInputType | true
    }

  export interface UserLessonProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLessonProgress'], meta: { name: 'UserLessonProgress' } }
    /**
     * Find zero or one UserLessonProgress that matches the filter.
     * @param {UserLessonProgressFindUniqueArgs} args - Arguments to find a UserLessonProgress
     * @example
     * // Get one UserLessonProgress
     * const userLessonProgress = await prisma.userLessonProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLessonProgressFindUniqueArgs>(args: SelectSubset<T, UserLessonProgressFindUniqueArgs<ExtArgs>>): Prisma__UserLessonProgressClient<$Result.GetResult<Prisma.$UserLessonProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLessonProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLessonProgressFindUniqueOrThrowArgs} args - Arguments to find a UserLessonProgress
     * @example
     * // Get one UserLessonProgress
     * const userLessonProgress = await prisma.userLessonProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLessonProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLessonProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLessonProgressClient<$Result.GetResult<Prisma.$UserLessonProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLessonProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonProgressFindFirstArgs} args - Arguments to find a UserLessonProgress
     * @example
     * // Get one UserLessonProgress
     * const userLessonProgress = await prisma.userLessonProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLessonProgressFindFirstArgs>(args?: SelectSubset<T, UserLessonProgressFindFirstArgs<ExtArgs>>): Prisma__UserLessonProgressClient<$Result.GetResult<Prisma.$UserLessonProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLessonProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonProgressFindFirstOrThrowArgs} args - Arguments to find a UserLessonProgress
     * @example
     * // Get one UserLessonProgress
     * const userLessonProgress = await prisma.userLessonProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLessonProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLessonProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLessonProgressClient<$Result.GetResult<Prisma.$UserLessonProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLessonProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLessonProgresses
     * const userLessonProgresses = await prisma.userLessonProgress.findMany()
     * 
     * // Get first 10 UserLessonProgresses
     * const userLessonProgresses = await prisma.userLessonProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLessonProgressWithIdOnly = await prisma.userLessonProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLessonProgressFindManyArgs>(args?: SelectSubset<T, UserLessonProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLessonProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLessonProgress.
     * @param {UserLessonProgressCreateArgs} args - Arguments to create a UserLessonProgress.
     * @example
     * // Create one UserLessonProgress
     * const UserLessonProgress = await prisma.userLessonProgress.create({
     *   data: {
     *     // ... data to create a UserLessonProgress
     *   }
     * })
     * 
     */
    create<T extends UserLessonProgressCreateArgs>(args: SelectSubset<T, UserLessonProgressCreateArgs<ExtArgs>>): Prisma__UserLessonProgressClient<$Result.GetResult<Prisma.$UserLessonProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLessonProgresses.
     * @param {UserLessonProgressCreateManyArgs} args - Arguments to create many UserLessonProgresses.
     * @example
     * // Create many UserLessonProgresses
     * const userLessonProgress = await prisma.userLessonProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLessonProgressCreateManyArgs>(args?: SelectSubset<T, UserLessonProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserLessonProgress.
     * @param {UserLessonProgressDeleteArgs} args - Arguments to delete one UserLessonProgress.
     * @example
     * // Delete one UserLessonProgress
     * const UserLessonProgress = await prisma.userLessonProgress.delete({
     *   where: {
     *     // ... filter to delete one UserLessonProgress
     *   }
     * })
     * 
     */
    delete<T extends UserLessonProgressDeleteArgs>(args: SelectSubset<T, UserLessonProgressDeleteArgs<ExtArgs>>): Prisma__UserLessonProgressClient<$Result.GetResult<Prisma.$UserLessonProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLessonProgress.
     * @param {UserLessonProgressUpdateArgs} args - Arguments to update one UserLessonProgress.
     * @example
     * // Update one UserLessonProgress
     * const userLessonProgress = await prisma.userLessonProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLessonProgressUpdateArgs>(args: SelectSubset<T, UserLessonProgressUpdateArgs<ExtArgs>>): Prisma__UserLessonProgressClient<$Result.GetResult<Prisma.$UserLessonProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLessonProgresses.
     * @param {UserLessonProgressDeleteManyArgs} args - Arguments to filter UserLessonProgresses to delete.
     * @example
     * // Delete a few UserLessonProgresses
     * const { count } = await prisma.userLessonProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLessonProgressDeleteManyArgs>(args?: SelectSubset<T, UserLessonProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLessonProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLessonProgresses
     * const userLessonProgress = await prisma.userLessonProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLessonProgressUpdateManyArgs>(args: SelectSubset<T, UserLessonProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserLessonProgress.
     * @param {UserLessonProgressUpsertArgs} args - Arguments to update or create a UserLessonProgress.
     * @example
     * // Update or create a UserLessonProgress
     * const userLessonProgress = await prisma.userLessonProgress.upsert({
     *   create: {
     *     // ... data to create a UserLessonProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLessonProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserLessonProgressUpsertArgs>(args: SelectSubset<T, UserLessonProgressUpsertArgs<ExtArgs>>): Prisma__UserLessonProgressClient<$Result.GetResult<Prisma.$UserLessonProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLessonProgresses that matches the filter.
     * @param {UserLessonProgressFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userLessonProgress = await prisma.userLessonProgress.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserLessonProgressFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserLessonProgress.
     * @param {UserLessonProgressAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userLessonProgress = await prisma.userLessonProgress.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserLessonProgressAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserLessonProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonProgressCountArgs} args - Arguments to filter UserLessonProgresses to count.
     * @example
     * // Count the number of UserLessonProgresses
     * const count = await prisma.userLessonProgress.count({
     *   where: {
     *     // ... the filter for the UserLessonProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserLessonProgressCountArgs>(
      args?: Subset<T, UserLessonProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLessonProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLessonProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserLessonProgressAggregateArgs>(args: Subset<T, UserLessonProgressAggregateArgs>): Prisma.PrismaPromise<GetUserLessonProgressAggregateType<T>>

    /**
     * Group by UserLessonProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLessonProgressGroupByArgs} args - Group by arguments.
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
      T extends UserLessonProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLessonProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserLessonProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserLessonProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLessonProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLessonProgress model
   */
  readonly fields: UserLessonProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLessonProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLessonProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonDefaultArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserLessonProgress model
   */
  interface UserLessonProgressFieldRefs {
    readonly id: FieldRef<"UserLessonProgress", 'String'>
    readonly userId: FieldRef<"UserLessonProgress", 'String'>
    readonly lessonId: FieldRef<"UserLessonProgress", 'String'>
    readonly startedAt: FieldRef<"UserLessonProgress", 'DateTime'>
    readonly completedAt: FieldRef<"UserLessonProgress", 'DateTime'>
    readonly timeSpent: FieldRef<"UserLessonProgress", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserLessonProgress findUnique
   */
  export type UserLessonProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserLessonProgress to fetch.
     */
    where: UserLessonProgressWhereUniqueInput
  }

  /**
   * UserLessonProgress findUniqueOrThrow
   */
  export type UserLessonProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserLessonProgress to fetch.
     */
    where: UserLessonProgressWhereUniqueInput
  }

  /**
   * UserLessonProgress findFirst
   */
  export type UserLessonProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserLessonProgress to fetch.
     */
    where?: UserLessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLessonProgresses to fetch.
     */
    orderBy?: UserLessonProgressOrderByWithRelationInput | UserLessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLessonProgresses.
     */
    cursor?: UserLessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLessonProgresses.
     */
    distinct?: UserLessonProgressScalarFieldEnum | UserLessonProgressScalarFieldEnum[]
  }

  /**
   * UserLessonProgress findFirstOrThrow
   */
  export type UserLessonProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserLessonProgress to fetch.
     */
    where?: UserLessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLessonProgresses to fetch.
     */
    orderBy?: UserLessonProgressOrderByWithRelationInput | UserLessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLessonProgresses.
     */
    cursor?: UserLessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLessonProgresses.
     */
    distinct?: UserLessonProgressScalarFieldEnum | UserLessonProgressScalarFieldEnum[]
  }

  /**
   * UserLessonProgress findMany
   */
  export type UserLessonProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which UserLessonProgresses to fetch.
     */
    where?: UserLessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLessonProgresses to fetch.
     */
    orderBy?: UserLessonProgressOrderByWithRelationInput | UserLessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLessonProgresses.
     */
    cursor?: UserLessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLessonProgresses.
     */
    skip?: number
    distinct?: UserLessonProgressScalarFieldEnum | UserLessonProgressScalarFieldEnum[]
  }

  /**
   * UserLessonProgress create
   */
  export type UserLessonProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLessonProgress.
     */
    data: XOR<UserLessonProgressCreateInput, UserLessonProgressUncheckedCreateInput>
  }

  /**
   * UserLessonProgress createMany
   */
  export type UserLessonProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLessonProgresses.
     */
    data: UserLessonProgressCreateManyInput | UserLessonProgressCreateManyInput[]
  }

  /**
   * UserLessonProgress update
   */
  export type UserLessonProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLessonProgress.
     */
    data: XOR<UserLessonProgressUpdateInput, UserLessonProgressUncheckedUpdateInput>
    /**
     * Choose, which UserLessonProgress to update.
     */
    where: UserLessonProgressWhereUniqueInput
  }

  /**
   * UserLessonProgress updateMany
   */
  export type UserLessonProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLessonProgresses.
     */
    data: XOR<UserLessonProgressUpdateManyMutationInput, UserLessonProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserLessonProgresses to update
     */
    where?: UserLessonProgressWhereInput
    /**
     * Limit how many UserLessonProgresses to update.
     */
    limit?: number
  }

  /**
   * UserLessonProgress upsert
   */
  export type UserLessonProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLessonProgress to update in case it exists.
     */
    where: UserLessonProgressWhereUniqueInput
    /**
     * In case the UserLessonProgress found by the `where` argument doesn't exist, create a new UserLessonProgress with this data.
     */
    create: XOR<UserLessonProgressCreateInput, UserLessonProgressUncheckedCreateInput>
    /**
     * In case the UserLessonProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLessonProgressUpdateInput, UserLessonProgressUncheckedUpdateInput>
  }

  /**
   * UserLessonProgress delete
   */
  export type UserLessonProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressInclude<ExtArgs> | null
    /**
     * Filter which UserLessonProgress to delete.
     */
    where: UserLessonProgressWhereUniqueInput
  }

  /**
   * UserLessonProgress deleteMany
   */
  export type UserLessonProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLessonProgresses to delete
     */
    where?: UserLessonProgressWhereInput
    /**
     * Limit how many UserLessonProgresses to delete.
     */
    limit?: number
  }

  /**
   * UserLessonProgress findRaw
   */
  export type UserLessonProgressFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserLessonProgress aggregateRaw
   */
  export type UserLessonProgressAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserLessonProgress without action
   */
  export type UserLessonProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLessonProgress
     */
    select?: UserLessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLessonProgress
     */
    omit?: UserLessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLessonProgressInclude<ExtArgs> | null
  }


  /**
   * Model DocumentationCategory
   */

  export type AggregateDocumentationCategory = {
    _count: DocumentationCategoryCountAggregateOutputType | null
    _avg: DocumentationCategoryAvgAggregateOutputType | null
    _sum: DocumentationCategorySumAggregateOutputType | null
    _min: DocumentationCategoryMinAggregateOutputType | null
    _max: DocumentationCategoryMaxAggregateOutputType | null
  }

  export type DocumentationCategoryAvgAggregateOutputType = {
    order: number | null
  }

  export type DocumentationCategorySumAggregateOutputType = {
    order: number | null
  }

  export type DocumentationCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    icon: string | null
    description: string | null
    order: number | null
  }

  export type DocumentationCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    icon: string | null
    description: string | null
    order: number | null
  }

  export type DocumentationCategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    icon: number
    description: number
    order: number
    _all: number
  }


  export type DocumentationCategoryAvgAggregateInputType = {
    order?: true
  }

  export type DocumentationCategorySumAggregateInputType = {
    order?: true
  }

  export type DocumentationCategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    icon?: true
    description?: true
    order?: true
  }

  export type DocumentationCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    icon?: true
    description?: true
    order?: true
  }

  export type DocumentationCategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    icon?: true
    description?: true
    order?: true
    _all?: true
  }

  export type DocumentationCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentationCategory to aggregate.
     */
    where?: DocumentationCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentationCategories to fetch.
     */
    orderBy?: DocumentationCategoryOrderByWithRelationInput | DocumentationCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentationCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentationCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentationCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentationCategories
    **/
    _count?: true | DocumentationCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentationCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentationCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentationCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentationCategoryMaxAggregateInputType
  }

  export type GetDocumentationCategoryAggregateType<T extends DocumentationCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentationCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentationCategory[P]>
      : GetScalarType<T[P], AggregateDocumentationCategory[P]>
  }




  export type DocumentationCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentationCategoryWhereInput
    orderBy?: DocumentationCategoryOrderByWithAggregationInput | DocumentationCategoryOrderByWithAggregationInput[]
    by: DocumentationCategoryScalarFieldEnum[] | DocumentationCategoryScalarFieldEnum
    having?: DocumentationCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentationCategoryCountAggregateInputType | true
    _avg?: DocumentationCategoryAvgAggregateInputType
    _sum?: DocumentationCategorySumAggregateInputType
    _min?: DocumentationCategoryMinAggregateInputType
    _max?: DocumentationCategoryMaxAggregateInputType
  }

  export type DocumentationCategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    icon: string
    description: string
    order: number
    _count: DocumentationCategoryCountAggregateOutputType | null
    _avg: DocumentationCategoryAvgAggregateOutputType | null
    _sum: DocumentationCategorySumAggregateOutputType | null
    _min: DocumentationCategoryMinAggregateOutputType | null
    _max: DocumentationCategoryMaxAggregateOutputType | null
  }

  type GetDocumentationCategoryGroupByPayload<T extends DocumentationCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentationCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentationCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentationCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentationCategoryGroupByOutputType[P]>
        }
      >
    >


  export type DocumentationCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    icon?: boolean
    description?: boolean
    order?: boolean
    sections?: boolean | DocumentationCategory$sectionsArgs<ExtArgs>
    _count?: boolean | DocumentationCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentationCategory"]>



  export type DocumentationCategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    icon?: boolean
    description?: boolean
    order?: boolean
  }

  export type DocumentationCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "icon" | "description" | "order", ExtArgs["result"]["documentationCategory"]>
  export type DocumentationCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | DocumentationCategory$sectionsArgs<ExtArgs>
    _count?: boolean | DocumentationCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DocumentationCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentationCategory"
    objects: {
      sections: Prisma.$DocumentationSectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      icon: string
      description: string
      order: number
    }, ExtArgs["result"]["documentationCategory"]>
    composites: {}
  }

  type DocumentationCategoryGetPayload<S extends boolean | null | undefined | DocumentationCategoryDefaultArgs> = $Result.GetResult<Prisma.$DocumentationCategoryPayload, S>

  type DocumentationCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentationCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentationCategoryCountAggregateInputType | true
    }

  export interface DocumentationCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentationCategory'], meta: { name: 'DocumentationCategory' } }
    /**
     * Find zero or one DocumentationCategory that matches the filter.
     * @param {DocumentationCategoryFindUniqueArgs} args - Arguments to find a DocumentationCategory
     * @example
     * // Get one DocumentationCategory
     * const documentationCategory = await prisma.documentationCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentationCategoryFindUniqueArgs>(args: SelectSubset<T, DocumentationCategoryFindUniqueArgs<ExtArgs>>): Prisma__DocumentationCategoryClient<$Result.GetResult<Prisma.$DocumentationCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentationCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentationCategoryFindUniqueOrThrowArgs} args - Arguments to find a DocumentationCategory
     * @example
     * // Get one DocumentationCategory
     * const documentationCategory = await prisma.documentationCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentationCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentationCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentationCategoryClient<$Result.GetResult<Prisma.$DocumentationCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentationCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentationCategoryFindFirstArgs} args - Arguments to find a DocumentationCategory
     * @example
     * // Get one DocumentationCategory
     * const documentationCategory = await prisma.documentationCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentationCategoryFindFirstArgs>(args?: SelectSubset<T, DocumentationCategoryFindFirstArgs<ExtArgs>>): Prisma__DocumentationCategoryClient<$Result.GetResult<Prisma.$DocumentationCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentationCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentationCategoryFindFirstOrThrowArgs} args - Arguments to find a DocumentationCategory
     * @example
     * // Get one DocumentationCategory
     * const documentationCategory = await prisma.documentationCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentationCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentationCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentationCategoryClient<$Result.GetResult<Prisma.$DocumentationCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentationCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentationCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentationCategories
     * const documentationCategories = await prisma.documentationCategory.findMany()
     * 
     * // Get first 10 DocumentationCategories
     * const documentationCategories = await prisma.documentationCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentationCategoryWithIdOnly = await prisma.documentationCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentationCategoryFindManyArgs>(args?: SelectSubset<T, DocumentationCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentationCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentationCategory.
     * @param {DocumentationCategoryCreateArgs} args - Arguments to create a DocumentationCategory.
     * @example
     * // Create one DocumentationCategory
     * const DocumentationCategory = await prisma.documentationCategory.create({
     *   data: {
     *     // ... data to create a DocumentationCategory
     *   }
     * })
     * 
     */
    create<T extends DocumentationCategoryCreateArgs>(args: SelectSubset<T, DocumentationCategoryCreateArgs<ExtArgs>>): Prisma__DocumentationCategoryClient<$Result.GetResult<Prisma.$DocumentationCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentationCategories.
     * @param {DocumentationCategoryCreateManyArgs} args - Arguments to create many DocumentationCategories.
     * @example
     * // Create many DocumentationCategories
     * const documentationCategory = await prisma.documentationCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentationCategoryCreateManyArgs>(args?: SelectSubset<T, DocumentationCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DocumentationCategory.
     * @param {DocumentationCategoryDeleteArgs} args - Arguments to delete one DocumentationCategory.
     * @example
     * // Delete one DocumentationCategory
     * const DocumentationCategory = await prisma.documentationCategory.delete({
     *   where: {
     *     // ... filter to delete one DocumentationCategory
     *   }
     * })
     * 
     */
    delete<T extends DocumentationCategoryDeleteArgs>(args: SelectSubset<T, DocumentationCategoryDeleteArgs<ExtArgs>>): Prisma__DocumentationCategoryClient<$Result.GetResult<Prisma.$DocumentationCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentationCategory.
     * @param {DocumentationCategoryUpdateArgs} args - Arguments to update one DocumentationCategory.
     * @example
     * // Update one DocumentationCategory
     * const documentationCategory = await prisma.documentationCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentationCategoryUpdateArgs>(args: SelectSubset<T, DocumentationCategoryUpdateArgs<ExtArgs>>): Prisma__DocumentationCategoryClient<$Result.GetResult<Prisma.$DocumentationCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentationCategories.
     * @param {DocumentationCategoryDeleteManyArgs} args - Arguments to filter DocumentationCategories to delete.
     * @example
     * // Delete a few DocumentationCategories
     * const { count } = await prisma.documentationCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentationCategoryDeleteManyArgs>(args?: SelectSubset<T, DocumentationCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentationCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentationCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentationCategories
     * const documentationCategory = await prisma.documentationCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentationCategoryUpdateManyArgs>(args: SelectSubset<T, DocumentationCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DocumentationCategory.
     * @param {DocumentationCategoryUpsertArgs} args - Arguments to update or create a DocumentationCategory.
     * @example
     * // Update or create a DocumentationCategory
     * const documentationCategory = await prisma.documentationCategory.upsert({
     *   create: {
     *     // ... data to create a DocumentationCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentationCategory we want to update
     *   }
     * })
     */
    upsert<T extends DocumentationCategoryUpsertArgs>(args: SelectSubset<T, DocumentationCategoryUpsertArgs<ExtArgs>>): Prisma__DocumentationCategoryClient<$Result.GetResult<Prisma.$DocumentationCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentationCategories that matches the filter.
     * @param {DocumentationCategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const documentationCategory = await prisma.documentationCategory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DocumentationCategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DocumentationCategory.
     * @param {DocumentationCategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const documentationCategory = await prisma.documentationCategory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DocumentationCategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of DocumentationCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentationCategoryCountArgs} args - Arguments to filter DocumentationCategories to count.
     * @example
     * // Count the number of DocumentationCategories
     * const count = await prisma.documentationCategory.count({
     *   where: {
     *     // ... the filter for the DocumentationCategories we want to count
     *   }
     * })
    **/
    count<T extends DocumentationCategoryCountArgs>(
      args?: Subset<T, DocumentationCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentationCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentationCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentationCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentationCategoryAggregateArgs>(args: Subset<T, DocumentationCategoryAggregateArgs>): Prisma.PrismaPromise<GetDocumentationCategoryAggregateType<T>>

    /**
     * Group by DocumentationCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentationCategoryGroupByArgs} args - Group by arguments.
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
      T extends DocumentationCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentationCategoryGroupByArgs['orderBy'] }
        : { orderBy?: DocumentationCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentationCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentationCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentationCategory model
   */
  readonly fields: DocumentationCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentationCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentationCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sections<T extends DocumentationCategory$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, DocumentationCategory$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentationSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DocumentationCategory model
   */
  interface DocumentationCategoryFieldRefs {
    readonly id: FieldRef<"DocumentationCategory", 'String'>
    readonly name: FieldRef<"DocumentationCategory", 'String'>
    readonly slug: FieldRef<"DocumentationCategory", 'String'>
    readonly icon: FieldRef<"DocumentationCategory", 'String'>
    readonly description: FieldRef<"DocumentationCategory", 'String'>
    readonly order: FieldRef<"DocumentationCategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DocumentationCategory findUnique
   */
  export type DocumentationCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentationCategory
     */
    select?: DocumentationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentationCategory
     */
    omit?: DocumentationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentationCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DocumentationCategory to fetch.
     */
    where: DocumentationCategoryWhereUniqueInput
  }

  /**
   * DocumentationCategory findUniqueOrThrow
   */
  export type DocumentationCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentationCategory
     */
    select?: DocumentationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentationCategory
     */
    omit?: DocumentationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentationCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DocumentationCategory to fetch.
     */
    where: DocumentationCategoryWhereUniqueInput
  }

  /**
   * DocumentationCategory findFirst
   */
  export type DocumentationCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentationCategory
     */
    select?: DocumentationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentationCategory
     */
    omit?: DocumentationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentationCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DocumentationCategory to fetch.
     */
    where?: DocumentationCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentationCategories to fetch.
     */
    orderBy?: DocumentationCategoryOrderByWithRelationInput | DocumentationCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentationCategories.
     */
    cursor?: DocumentationCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentationCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentationCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentationCategories.
     */
    distinct?: DocumentationCategoryScalarFieldEnum | DocumentationCategoryScalarFieldEnum[]
  }

  /**
   * DocumentationCategory findFirstOrThrow
   */
  export type DocumentationCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentationCategory
     */
    select?: DocumentationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentationCategory
     */
    omit?: DocumentationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentationCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DocumentationCategory to fetch.
     */
    where?: DocumentationCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentationCategories to fetch.
     */
    orderBy?: DocumentationCategoryOrderByWithRelationInput | DocumentationCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentationCategories.
     */
    cursor?: DocumentationCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentationCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentationCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentationCategories.
     */
    distinct?: DocumentationCategoryScalarFieldEnum | DocumentationCategoryScalarFieldEnum[]
  }

  /**
   * DocumentationCategory findMany
   */
  export type DocumentationCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentationCategory
     */
    select?: DocumentationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentationCategory
     */
    omit?: DocumentationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentationCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DocumentationCategories to fetch.
     */
    where?: DocumentationCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentationCategories to fetch.
     */
    orderBy?: DocumentationCategoryOrderByWithRelationInput | DocumentationCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentationCategories.
     */
    cursor?: DocumentationCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentationCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentationCategories.
     */
    skip?: number
    distinct?: DocumentationCategoryScalarFieldEnum | DocumentationCategoryScalarFieldEnum[]
  }

  /**
   * DocumentationCategory create
   */
  export type DocumentationCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentationCategory
     */
    select?: DocumentationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentationCategory
     */
    omit?: DocumentationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentationCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentationCategory.
     */
    data: XOR<DocumentationCategoryCreateInput, DocumentationCategoryUncheckedCreateInput>
  }

  /**
   * DocumentationCategory createMany
   */
  export type DocumentationCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentationCategories.
     */
    data: DocumentationCategoryCreateManyInput | DocumentationCategoryCreateManyInput[]
  }

  /**
   * DocumentationCategory update
   */
  export type DocumentationCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentationCategory
     */
    select?: DocumentationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentationCategory
     */
    omit?: DocumentationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentationCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentationCategory.
     */
    data: XOR<DocumentationCategoryUpdateInput, DocumentationCategoryUncheckedUpdateInput>
    /**
     * Choose, which DocumentationCategory to update.
     */
    where: DocumentationCategoryWhereUniqueInput
  }

  /**
   * DocumentationCategory updateMany
   */
  export type DocumentationCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentationCategories.
     */
    data: XOR<DocumentationCategoryUpdateManyMutationInput, DocumentationCategoryUncheckedUpdateManyInput>
    /**
     * Filter which DocumentationCategories to update
     */
    where?: DocumentationCategoryWhereInput
    /**
     * Limit how many DocumentationCategories to update.
     */
    limit?: number
  }

  /**
   * DocumentationCategory upsert
   */
  export type DocumentationCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentationCategory
     */
    select?: DocumentationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentationCategory
     */
    omit?: DocumentationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentationCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentationCategory to update in case it exists.
     */
    where: DocumentationCategoryWhereUniqueInput
    /**
     * In case the DocumentationCategory found by the `where` argument doesn't exist, create a new DocumentationCategory with this data.
     */
    create: XOR<DocumentationCategoryCreateInput, DocumentationCategoryUncheckedCreateInput>
    /**
     * In case the DocumentationCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentationCategoryUpdateInput, DocumentationCategoryUncheckedUpdateInput>
  }

  /**
   * DocumentationCategory delete
   */
  export type DocumentationCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentationCategory
     */
    select?: DocumentationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentationCategory
     */
    omit?: DocumentationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentationCategoryInclude<ExtArgs> | null
    /**
     * Filter which DocumentationCategory to delete.
     */
    where: DocumentationCategoryWhereUniqueInput
  }

  /**
   * DocumentationCategory deleteMany
   */
  export type DocumentationCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentationCategories to delete
     */
    where?: DocumentationCategoryWhereInput
    /**
     * Limit how many DocumentationCategories to delete.
     */
    limit?: number
  }

  /**
   * DocumentationCategory findRaw
   */
  export type DocumentationCategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DocumentationCategory aggregateRaw
   */
  export type DocumentationCategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DocumentationCategory.sections
   */
  export type DocumentationCategory$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentationSection
     */
    select?: DocumentationSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentationSection
     */
    omit?: DocumentationSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentationSectionInclude<ExtArgs> | null
    where?: DocumentationSectionWhereInput
    orderBy?: DocumentationSectionOrderByWithRelationInput | DocumentationSectionOrderByWithRelationInput[]
    cursor?: DocumentationSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentationSectionScalarFieldEnum | DocumentationSectionScalarFieldEnum[]
  }

  /**
   * DocumentationCategory without action
   */
  export type DocumentationCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentationCategory
     */
    select?: DocumentationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentationCategory
     */
    omit?: DocumentationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentationCategoryInclude<ExtArgs> | null
  }


  /**
   * Model DocumentationSection
   */

  export type AggregateDocumentationSection = {
    _count: DocumentationSectionCountAggregateOutputType | null
    _avg: DocumentationSectionAvgAggregateOutputType | null
    _sum: DocumentationSectionSumAggregateOutputType | null
    _min: DocumentationSectionMinAggregateOutputType | null
    _max: DocumentationSectionMaxAggregateOutputType | null
  }

  export type DocumentationSectionAvgAggregateOutputType = {
    order: number | null
  }

  export type DocumentationSectionSumAggregateOutputType = {
    order: number | null
  }

  export type DocumentationSectionMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    content: string | null
    categoryId: string | null
    order: number | null
  }

  export type DocumentationSectionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    content: string | null
    categoryId: string | null
    order: number | null
  }

  export type DocumentationSectionCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    content: number
    categoryId: number
    order: number
    _all: number
  }


  export type DocumentationSectionAvgAggregateInputType = {
    order?: true
  }

  export type DocumentationSectionSumAggregateInputType = {
    order?: true
  }

  export type DocumentationSectionMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    categoryId?: true
    order?: true
  }

  export type DocumentationSectionMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    categoryId?: true
    order?: true
  }

  export type DocumentationSectionCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    categoryId?: true
    order?: true
    _all?: true
  }

  export type DocumentationSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentationSection to aggregate.
     */
    where?: DocumentationSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentationSections to fetch.
     */
    orderBy?: DocumentationSectionOrderByWithRelationInput | DocumentationSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentationSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentationSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentationSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentationSections
    **/
    _count?: true | DocumentationSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentationSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentationSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentationSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentationSectionMaxAggregateInputType
  }

  export type GetDocumentationSectionAggregateType<T extends DocumentationSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentationSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentationSection[P]>
      : GetScalarType<T[P], AggregateDocumentationSection[P]>
  }




  export type DocumentationSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentationSectionWhereInput
    orderBy?: DocumentationSectionOrderByWithAggregationInput | DocumentationSectionOrderByWithAggregationInput[]
    by: DocumentationSectionScalarFieldEnum[] | DocumentationSectionScalarFieldEnum
    having?: DocumentationSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentationSectionCountAggregateInputType | true
    _avg?: DocumentationSectionAvgAggregateInputType
    _sum?: DocumentationSectionSumAggregateInputType
    _min?: DocumentationSectionMinAggregateInputType
    _max?: DocumentationSectionMaxAggregateInputType
  }

  export type DocumentationSectionGroupByOutputType = {
    id: string
    title: string
    slug: string
    content: string
    categoryId: string
    order: number
    _count: DocumentationSectionCountAggregateOutputType | null
    _avg: DocumentationSectionAvgAggregateOutputType | null
    _sum: DocumentationSectionSumAggregateOutputType | null
    _min: DocumentationSectionMinAggregateOutputType | null
    _max: DocumentationSectionMaxAggregateOutputType | null
  }

  type GetDocumentationSectionGroupByPayload<T extends DocumentationSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentationSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentationSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentationSectionGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentationSectionGroupByOutputType[P]>
        }
      >
    >


  export type DocumentationSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    categoryId?: boolean
    order?: boolean
    category?: boolean | DocumentationCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentationSection"]>



  export type DocumentationSectionSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    categoryId?: boolean
    order?: boolean
  }

  export type DocumentationSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "content" | "categoryId" | "order", ExtArgs["result"]["documentationSection"]>
  export type DocumentationSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | DocumentationCategoryDefaultArgs<ExtArgs>
  }

  export type $DocumentationSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentationSection"
    objects: {
      category: Prisma.$DocumentationCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      content: string
      categoryId: string
      order: number
    }, ExtArgs["result"]["documentationSection"]>
    composites: {}
  }

  type DocumentationSectionGetPayload<S extends boolean | null | undefined | DocumentationSectionDefaultArgs> = $Result.GetResult<Prisma.$DocumentationSectionPayload, S>

  type DocumentationSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentationSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentationSectionCountAggregateInputType | true
    }

  export interface DocumentationSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentationSection'], meta: { name: 'DocumentationSection' } }
    /**
     * Find zero or one DocumentationSection that matches the filter.
     * @param {DocumentationSectionFindUniqueArgs} args - Arguments to find a DocumentationSection
     * @example
     * // Get one DocumentationSection
     * const documentationSection = await prisma.documentationSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentationSectionFindUniqueArgs>(args: SelectSubset<T, DocumentationSectionFindUniqueArgs<ExtArgs>>): Prisma__DocumentationSectionClient<$Result.GetResult<Prisma.$DocumentationSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentationSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentationSectionFindUniqueOrThrowArgs} args - Arguments to find a DocumentationSection
     * @example
     * // Get one DocumentationSection
     * const documentationSection = await prisma.documentationSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentationSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentationSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentationSectionClient<$Result.GetResult<Prisma.$DocumentationSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentationSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentationSectionFindFirstArgs} args - Arguments to find a DocumentationSection
     * @example
     * // Get one DocumentationSection
     * const documentationSection = await prisma.documentationSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentationSectionFindFirstArgs>(args?: SelectSubset<T, DocumentationSectionFindFirstArgs<ExtArgs>>): Prisma__DocumentationSectionClient<$Result.GetResult<Prisma.$DocumentationSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentationSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentationSectionFindFirstOrThrowArgs} args - Arguments to find a DocumentationSection
     * @example
     * // Get one DocumentationSection
     * const documentationSection = await prisma.documentationSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentationSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentationSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentationSectionClient<$Result.GetResult<Prisma.$DocumentationSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentationSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentationSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentationSections
     * const documentationSections = await prisma.documentationSection.findMany()
     * 
     * // Get first 10 DocumentationSections
     * const documentationSections = await prisma.documentationSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentationSectionWithIdOnly = await prisma.documentationSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentationSectionFindManyArgs>(args?: SelectSubset<T, DocumentationSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentationSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentationSection.
     * @param {DocumentationSectionCreateArgs} args - Arguments to create a DocumentationSection.
     * @example
     * // Create one DocumentationSection
     * const DocumentationSection = await prisma.documentationSection.create({
     *   data: {
     *     // ... data to create a DocumentationSection
     *   }
     * })
     * 
     */
    create<T extends DocumentationSectionCreateArgs>(args: SelectSubset<T, DocumentationSectionCreateArgs<ExtArgs>>): Prisma__DocumentationSectionClient<$Result.GetResult<Prisma.$DocumentationSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentationSections.
     * @param {DocumentationSectionCreateManyArgs} args - Arguments to create many DocumentationSections.
     * @example
     * // Create many DocumentationSections
     * const documentationSection = await prisma.documentationSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentationSectionCreateManyArgs>(args?: SelectSubset<T, DocumentationSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DocumentationSection.
     * @param {DocumentationSectionDeleteArgs} args - Arguments to delete one DocumentationSection.
     * @example
     * // Delete one DocumentationSection
     * const DocumentationSection = await prisma.documentationSection.delete({
     *   where: {
     *     // ... filter to delete one DocumentationSection
     *   }
     * })
     * 
     */
    delete<T extends DocumentationSectionDeleteArgs>(args: SelectSubset<T, DocumentationSectionDeleteArgs<ExtArgs>>): Prisma__DocumentationSectionClient<$Result.GetResult<Prisma.$DocumentationSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentationSection.
     * @param {DocumentationSectionUpdateArgs} args - Arguments to update one DocumentationSection.
     * @example
     * // Update one DocumentationSection
     * const documentationSection = await prisma.documentationSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentationSectionUpdateArgs>(args: SelectSubset<T, DocumentationSectionUpdateArgs<ExtArgs>>): Prisma__DocumentationSectionClient<$Result.GetResult<Prisma.$DocumentationSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentationSections.
     * @param {DocumentationSectionDeleteManyArgs} args - Arguments to filter DocumentationSections to delete.
     * @example
     * // Delete a few DocumentationSections
     * const { count } = await prisma.documentationSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentationSectionDeleteManyArgs>(args?: SelectSubset<T, DocumentationSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentationSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentationSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentationSections
     * const documentationSection = await prisma.documentationSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentationSectionUpdateManyArgs>(args: SelectSubset<T, DocumentationSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DocumentationSection.
     * @param {DocumentationSectionUpsertArgs} args - Arguments to update or create a DocumentationSection.
     * @example
     * // Update or create a DocumentationSection
     * const documentationSection = await prisma.documentationSection.upsert({
     *   create: {
     *     // ... data to create a DocumentationSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentationSection we want to update
     *   }
     * })
     */
    upsert<T extends DocumentationSectionUpsertArgs>(args: SelectSubset<T, DocumentationSectionUpsertArgs<ExtArgs>>): Prisma__DocumentationSectionClient<$Result.GetResult<Prisma.$DocumentationSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentationSections that matches the filter.
     * @param {DocumentationSectionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const documentationSection = await prisma.documentationSection.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DocumentationSectionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DocumentationSection.
     * @param {DocumentationSectionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const documentationSection = await prisma.documentationSection.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DocumentationSectionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of DocumentationSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentationSectionCountArgs} args - Arguments to filter DocumentationSections to count.
     * @example
     * // Count the number of DocumentationSections
     * const count = await prisma.documentationSection.count({
     *   where: {
     *     // ... the filter for the DocumentationSections we want to count
     *   }
     * })
    **/
    count<T extends DocumentationSectionCountArgs>(
      args?: Subset<T, DocumentationSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentationSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentationSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentationSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentationSectionAggregateArgs>(args: Subset<T, DocumentationSectionAggregateArgs>): Prisma.PrismaPromise<GetDocumentationSectionAggregateType<T>>

    /**
     * Group by DocumentationSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentationSectionGroupByArgs} args - Group by arguments.
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
      T extends DocumentationSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentationSectionGroupByArgs['orderBy'] }
        : { orderBy?: DocumentationSectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentationSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentationSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentationSection model
   */
  readonly fields: DocumentationSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentationSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentationSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends DocumentationCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentationCategoryDefaultArgs<ExtArgs>>): Prisma__DocumentationCategoryClient<$Result.GetResult<Prisma.$DocumentationCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DocumentationSection model
   */
  interface DocumentationSectionFieldRefs {
    readonly id: FieldRef<"DocumentationSection", 'String'>
    readonly title: FieldRef<"DocumentationSection", 'String'>
    readonly slug: FieldRef<"DocumentationSection", 'String'>
    readonly content: FieldRef<"DocumentationSection", 'String'>
    readonly categoryId: FieldRef<"DocumentationSection", 'String'>
    readonly order: FieldRef<"DocumentationSection", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DocumentationSection findUnique
   */
  export type DocumentationSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentationSection
     */
    select?: DocumentationSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentationSection
     */
    omit?: DocumentationSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentationSectionInclude<ExtArgs> | null
    /**
     * Filter, which DocumentationSection to fetch.
     */
    where: DocumentationSectionWhereUniqueInput
  }

  /**
   * DocumentationSection findUniqueOrThrow
   */
  export type DocumentationSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentationSection
     */
    select?: DocumentationSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentationSection
     */
    omit?: DocumentationSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentationSectionInclude<ExtArgs> | null
    /**
     * Filter, which DocumentationSection to fetch.
     */
    where: DocumentationSectionWhereUniqueInput
  }

  /**
   * DocumentationSection findFirst
   */
  export type DocumentationSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentationSection
     */
    select?: DocumentationSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentationSection
     */
    omit?: DocumentationSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentationSectionInclude<ExtArgs> | null
    /**
     * Filter, which DocumentationSection to fetch.
     */
    where?: DocumentationSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentationSections to fetch.
     */
    orderBy?: DocumentationSectionOrderByWithRelationInput | DocumentationSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentationSections.
     */
    cursor?: DocumentationSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentationSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentationSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentationSections.
     */
    distinct?: DocumentationSectionScalarFieldEnum | DocumentationSectionScalarFieldEnum[]
  }

  /**
   * DocumentationSection findFirstOrThrow
   */
  export type DocumentationSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentationSection
     */
    select?: DocumentationSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentationSection
     */
    omit?: DocumentationSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentationSectionInclude<ExtArgs> | null
    /**
     * Filter, which DocumentationSection to fetch.
     */
    where?: DocumentationSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentationSections to fetch.
     */
    orderBy?: DocumentationSectionOrderByWithRelationInput | DocumentationSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentationSections.
     */
    cursor?: DocumentationSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentationSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentationSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentationSections.
     */
    distinct?: DocumentationSectionScalarFieldEnum | DocumentationSectionScalarFieldEnum[]
  }

  /**
   * DocumentationSection findMany
   */
  export type DocumentationSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentationSection
     */
    select?: DocumentationSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentationSection
     */
    omit?: DocumentationSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentationSectionInclude<ExtArgs> | null
    /**
     * Filter, which DocumentationSections to fetch.
     */
    where?: DocumentationSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentationSections to fetch.
     */
    orderBy?: DocumentationSectionOrderByWithRelationInput | DocumentationSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentationSections.
     */
    cursor?: DocumentationSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentationSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentationSections.
     */
    skip?: number
    distinct?: DocumentationSectionScalarFieldEnum | DocumentationSectionScalarFieldEnum[]
  }

  /**
   * DocumentationSection create
   */
  export type DocumentationSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentationSection
     */
    select?: DocumentationSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentationSection
     */
    omit?: DocumentationSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentationSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentationSection.
     */
    data: XOR<DocumentationSectionCreateInput, DocumentationSectionUncheckedCreateInput>
  }

  /**
   * DocumentationSection createMany
   */
  export type DocumentationSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentationSections.
     */
    data: DocumentationSectionCreateManyInput | DocumentationSectionCreateManyInput[]
  }

  /**
   * DocumentationSection update
   */
  export type DocumentationSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentationSection
     */
    select?: DocumentationSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentationSection
     */
    omit?: DocumentationSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentationSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentationSection.
     */
    data: XOR<DocumentationSectionUpdateInput, DocumentationSectionUncheckedUpdateInput>
    /**
     * Choose, which DocumentationSection to update.
     */
    where: DocumentationSectionWhereUniqueInput
  }

  /**
   * DocumentationSection updateMany
   */
  export type DocumentationSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentationSections.
     */
    data: XOR<DocumentationSectionUpdateManyMutationInput, DocumentationSectionUncheckedUpdateManyInput>
    /**
     * Filter which DocumentationSections to update
     */
    where?: DocumentationSectionWhereInput
    /**
     * Limit how many DocumentationSections to update.
     */
    limit?: number
  }

  /**
   * DocumentationSection upsert
   */
  export type DocumentationSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentationSection
     */
    select?: DocumentationSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentationSection
     */
    omit?: DocumentationSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentationSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentationSection to update in case it exists.
     */
    where: DocumentationSectionWhereUniqueInput
    /**
     * In case the DocumentationSection found by the `where` argument doesn't exist, create a new DocumentationSection with this data.
     */
    create: XOR<DocumentationSectionCreateInput, DocumentationSectionUncheckedCreateInput>
    /**
     * In case the DocumentationSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentationSectionUpdateInput, DocumentationSectionUncheckedUpdateInput>
  }

  /**
   * DocumentationSection delete
   */
  export type DocumentationSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentationSection
     */
    select?: DocumentationSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentationSection
     */
    omit?: DocumentationSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentationSectionInclude<ExtArgs> | null
    /**
     * Filter which DocumentationSection to delete.
     */
    where: DocumentationSectionWhereUniqueInput
  }

  /**
   * DocumentationSection deleteMany
   */
  export type DocumentationSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentationSections to delete
     */
    where?: DocumentationSectionWhereInput
    /**
     * Limit how many DocumentationSections to delete.
     */
    limit?: number
  }

  /**
   * DocumentationSection findRaw
   */
  export type DocumentationSectionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DocumentationSection aggregateRaw
   */
  export type DocumentationSectionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DocumentationSection without action
   */
  export type DocumentationSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentationSection
     */
    select?: DocumentationSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentationSection
     */
    omit?: DocumentationSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentationSectionInclude<ExtArgs> | null
  }


  /**
   * Model CodeExample
   */

  export type AggregateCodeExample = {
    _count: CodeExampleCountAggregateOutputType | null
    _min: CodeExampleMinAggregateOutputType | null
    _max: CodeExampleMaxAggregateOutputType | null
  }

  export type CodeExampleMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    code: string | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CodeExampleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    code: string | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CodeExampleCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    code: number
    language: number
    tags: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CodeExampleMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    code?: true
    language?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CodeExampleMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    code?: true
    language?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CodeExampleCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    code?: true
    language?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CodeExampleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeExample to aggregate.
     */
    where?: CodeExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeExamples to fetch.
     */
    orderBy?: CodeExampleOrderByWithRelationInput | CodeExampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodeExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeExamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeExamples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CodeExamples
    **/
    _count?: true | CodeExampleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodeExampleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodeExampleMaxAggregateInputType
  }

  export type GetCodeExampleAggregateType<T extends CodeExampleAggregateArgs> = {
        [P in keyof T & keyof AggregateCodeExample]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCodeExample[P]>
      : GetScalarType<T[P], AggregateCodeExample[P]>
  }




  export type CodeExampleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodeExampleWhereInput
    orderBy?: CodeExampleOrderByWithAggregationInput | CodeExampleOrderByWithAggregationInput[]
    by: CodeExampleScalarFieldEnum[] | CodeExampleScalarFieldEnum
    having?: CodeExampleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodeExampleCountAggregateInputType | true
    _min?: CodeExampleMinAggregateInputType
    _max?: CodeExampleMaxAggregateInputType
  }

  export type CodeExampleGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    code: string
    language: string
    tags: string[]
    createdAt: Date
    updatedAt: Date
    _count: CodeExampleCountAggregateOutputType | null
    _min: CodeExampleMinAggregateOutputType | null
    _max: CodeExampleMaxAggregateOutputType | null
  }

  type GetCodeExampleGroupByPayload<T extends CodeExampleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodeExampleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodeExampleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodeExampleGroupByOutputType[P]>
            : GetScalarType<T[P], CodeExampleGroupByOutputType[P]>
        }
      >
    >


  export type CodeExampleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    code?: boolean
    language?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["codeExample"]>



  export type CodeExampleSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    code?: boolean
    language?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CodeExampleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "code" | "language" | "tags" | "createdAt" | "updatedAt", ExtArgs["result"]["codeExample"]>

  export type $CodeExamplePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CodeExample"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      code: string
      language: string
      tags: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["codeExample"]>
    composites: {}
  }

  type CodeExampleGetPayload<S extends boolean | null | undefined | CodeExampleDefaultArgs> = $Result.GetResult<Prisma.$CodeExamplePayload, S>

  type CodeExampleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CodeExampleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CodeExampleCountAggregateInputType | true
    }

  export interface CodeExampleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CodeExample'], meta: { name: 'CodeExample' } }
    /**
     * Find zero or one CodeExample that matches the filter.
     * @param {CodeExampleFindUniqueArgs} args - Arguments to find a CodeExample
     * @example
     * // Get one CodeExample
     * const codeExample = await prisma.codeExample.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CodeExampleFindUniqueArgs>(args: SelectSubset<T, CodeExampleFindUniqueArgs<ExtArgs>>): Prisma__CodeExampleClient<$Result.GetResult<Prisma.$CodeExamplePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CodeExample that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CodeExampleFindUniqueOrThrowArgs} args - Arguments to find a CodeExample
     * @example
     * // Get one CodeExample
     * const codeExample = await prisma.codeExample.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CodeExampleFindUniqueOrThrowArgs>(args: SelectSubset<T, CodeExampleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CodeExampleClient<$Result.GetResult<Prisma.$CodeExamplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodeExample that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeExampleFindFirstArgs} args - Arguments to find a CodeExample
     * @example
     * // Get one CodeExample
     * const codeExample = await prisma.codeExample.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CodeExampleFindFirstArgs>(args?: SelectSubset<T, CodeExampleFindFirstArgs<ExtArgs>>): Prisma__CodeExampleClient<$Result.GetResult<Prisma.$CodeExamplePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodeExample that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeExampleFindFirstOrThrowArgs} args - Arguments to find a CodeExample
     * @example
     * // Get one CodeExample
     * const codeExample = await prisma.codeExample.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CodeExampleFindFirstOrThrowArgs>(args?: SelectSubset<T, CodeExampleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CodeExampleClient<$Result.GetResult<Prisma.$CodeExamplePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CodeExamples that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeExampleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CodeExamples
     * const codeExamples = await prisma.codeExample.findMany()
     * 
     * // Get first 10 CodeExamples
     * const codeExamples = await prisma.codeExample.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codeExampleWithIdOnly = await prisma.codeExample.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CodeExampleFindManyArgs>(args?: SelectSubset<T, CodeExampleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeExamplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CodeExample.
     * @param {CodeExampleCreateArgs} args - Arguments to create a CodeExample.
     * @example
     * // Create one CodeExample
     * const CodeExample = await prisma.codeExample.create({
     *   data: {
     *     // ... data to create a CodeExample
     *   }
     * })
     * 
     */
    create<T extends CodeExampleCreateArgs>(args: SelectSubset<T, CodeExampleCreateArgs<ExtArgs>>): Prisma__CodeExampleClient<$Result.GetResult<Prisma.$CodeExamplePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CodeExamples.
     * @param {CodeExampleCreateManyArgs} args - Arguments to create many CodeExamples.
     * @example
     * // Create many CodeExamples
     * const codeExample = await prisma.codeExample.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CodeExampleCreateManyArgs>(args?: SelectSubset<T, CodeExampleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CodeExample.
     * @param {CodeExampleDeleteArgs} args - Arguments to delete one CodeExample.
     * @example
     * // Delete one CodeExample
     * const CodeExample = await prisma.codeExample.delete({
     *   where: {
     *     // ... filter to delete one CodeExample
     *   }
     * })
     * 
     */
    delete<T extends CodeExampleDeleteArgs>(args: SelectSubset<T, CodeExampleDeleteArgs<ExtArgs>>): Prisma__CodeExampleClient<$Result.GetResult<Prisma.$CodeExamplePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CodeExample.
     * @param {CodeExampleUpdateArgs} args - Arguments to update one CodeExample.
     * @example
     * // Update one CodeExample
     * const codeExample = await prisma.codeExample.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CodeExampleUpdateArgs>(args: SelectSubset<T, CodeExampleUpdateArgs<ExtArgs>>): Prisma__CodeExampleClient<$Result.GetResult<Prisma.$CodeExamplePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CodeExamples.
     * @param {CodeExampleDeleteManyArgs} args - Arguments to filter CodeExamples to delete.
     * @example
     * // Delete a few CodeExamples
     * const { count } = await prisma.codeExample.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CodeExampleDeleteManyArgs>(args?: SelectSubset<T, CodeExampleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodeExamples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeExampleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CodeExamples
     * const codeExample = await prisma.codeExample.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CodeExampleUpdateManyArgs>(args: SelectSubset<T, CodeExampleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CodeExample.
     * @param {CodeExampleUpsertArgs} args - Arguments to update or create a CodeExample.
     * @example
     * // Update or create a CodeExample
     * const codeExample = await prisma.codeExample.upsert({
     *   create: {
     *     // ... data to create a CodeExample
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CodeExample we want to update
     *   }
     * })
     */
    upsert<T extends CodeExampleUpsertArgs>(args: SelectSubset<T, CodeExampleUpsertArgs<ExtArgs>>): Prisma__CodeExampleClient<$Result.GetResult<Prisma.$CodeExamplePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CodeExamples that matches the filter.
     * @param {CodeExampleFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const codeExample = await prisma.codeExample.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CodeExampleFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CodeExample.
     * @param {CodeExampleAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const codeExample = await prisma.codeExample.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CodeExampleAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of CodeExamples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeExampleCountArgs} args - Arguments to filter CodeExamples to count.
     * @example
     * // Count the number of CodeExamples
     * const count = await prisma.codeExample.count({
     *   where: {
     *     // ... the filter for the CodeExamples we want to count
     *   }
     * })
    **/
    count<T extends CodeExampleCountArgs>(
      args?: Subset<T, CodeExampleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodeExampleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CodeExample.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeExampleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CodeExampleAggregateArgs>(args: Subset<T, CodeExampleAggregateArgs>): Prisma.PrismaPromise<GetCodeExampleAggregateType<T>>

    /**
     * Group by CodeExample.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeExampleGroupByArgs} args - Group by arguments.
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
      T extends CodeExampleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodeExampleGroupByArgs['orderBy'] }
        : { orderBy?: CodeExampleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CodeExampleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodeExampleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CodeExample model
   */
  readonly fields: CodeExampleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CodeExample.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CodeExampleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CodeExample model
   */
  interface CodeExampleFieldRefs {
    readonly id: FieldRef<"CodeExample", 'String'>
    readonly name: FieldRef<"CodeExample", 'String'>
    readonly slug: FieldRef<"CodeExample", 'String'>
    readonly description: FieldRef<"CodeExample", 'String'>
    readonly code: FieldRef<"CodeExample", 'String'>
    readonly language: FieldRef<"CodeExample", 'String'>
    readonly tags: FieldRef<"CodeExample", 'String[]'>
    readonly createdAt: FieldRef<"CodeExample", 'DateTime'>
    readonly updatedAt: FieldRef<"CodeExample", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CodeExample findUnique
   */
  export type CodeExampleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeExample
     */
    select?: CodeExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeExample
     */
    omit?: CodeExampleOmit<ExtArgs> | null
    /**
     * Filter, which CodeExample to fetch.
     */
    where: CodeExampleWhereUniqueInput
  }

  /**
   * CodeExample findUniqueOrThrow
   */
  export type CodeExampleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeExample
     */
    select?: CodeExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeExample
     */
    omit?: CodeExampleOmit<ExtArgs> | null
    /**
     * Filter, which CodeExample to fetch.
     */
    where: CodeExampleWhereUniqueInput
  }

  /**
   * CodeExample findFirst
   */
  export type CodeExampleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeExample
     */
    select?: CodeExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeExample
     */
    omit?: CodeExampleOmit<ExtArgs> | null
    /**
     * Filter, which CodeExample to fetch.
     */
    where?: CodeExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeExamples to fetch.
     */
    orderBy?: CodeExampleOrderByWithRelationInput | CodeExampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeExamples.
     */
    cursor?: CodeExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeExamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeExamples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeExamples.
     */
    distinct?: CodeExampleScalarFieldEnum | CodeExampleScalarFieldEnum[]
  }

  /**
   * CodeExample findFirstOrThrow
   */
  export type CodeExampleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeExample
     */
    select?: CodeExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeExample
     */
    omit?: CodeExampleOmit<ExtArgs> | null
    /**
     * Filter, which CodeExample to fetch.
     */
    where?: CodeExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeExamples to fetch.
     */
    orderBy?: CodeExampleOrderByWithRelationInput | CodeExampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeExamples.
     */
    cursor?: CodeExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeExamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeExamples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeExamples.
     */
    distinct?: CodeExampleScalarFieldEnum | CodeExampleScalarFieldEnum[]
  }

  /**
   * CodeExample findMany
   */
  export type CodeExampleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeExample
     */
    select?: CodeExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeExample
     */
    omit?: CodeExampleOmit<ExtArgs> | null
    /**
     * Filter, which CodeExamples to fetch.
     */
    where?: CodeExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeExamples to fetch.
     */
    orderBy?: CodeExampleOrderByWithRelationInput | CodeExampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CodeExamples.
     */
    cursor?: CodeExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeExamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeExamples.
     */
    skip?: number
    distinct?: CodeExampleScalarFieldEnum | CodeExampleScalarFieldEnum[]
  }

  /**
   * CodeExample create
   */
  export type CodeExampleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeExample
     */
    select?: CodeExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeExample
     */
    omit?: CodeExampleOmit<ExtArgs> | null
    /**
     * The data needed to create a CodeExample.
     */
    data: XOR<CodeExampleCreateInput, CodeExampleUncheckedCreateInput>
  }

  /**
   * CodeExample createMany
   */
  export type CodeExampleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CodeExamples.
     */
    data: CodeExampleCreateManyInput | CodeExampleCreateManyInput[]
  }

  /**
   * CodeExample update
   */
  export type CodeExampleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeExample
     */
    select?: CodeExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeExample
     */
    omit?: CodeExampleOmit<ExtArgs> | null
    /**
     * The data needed to update a CodeExample.
     */
    data: XOR<CodeExampleUpdateInput, CodeExampleUncheckedUpdateInput>
    /**
     * Choose, which CodeExample to update.
     */
    where: CodeExampleWhereUniqueInput
  }

  /**
   * CodeExample updateMany
   */
  export type CodeExampleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CodeExamples.
     */
    data: XOR<CodeExampleUpdateManyMutationInput, CodeExampleUncheckedUpdateManyInput>
    /**
     * Filter which CodeExamples to update
     */
    where?: CodeExampleWhereInput
    /**
     * Limit how many CodeExamples to update.
     */
    limit?: number
  }

  /**
   * CodeExample upsert
   */
  export type CodeExampleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeExample
     */
    select?: CodeExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeExample
     */
    omit?: CodeExampleOmit<ExtArgs> | null
    /**
     * The filter to search for the CodeExample to update in case it exists.
     */
    where: CodeExampleWhereUniqueInput
    /**
     * In case the CodeExample found by the `where` argument doesn't exist, create a new CodeExample with this data.
     */
    create: XOR<CodeExampleCreateInput, CodeExampleUncheckedCreateInput>
    /**
     * In case the CodeExample was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodeExampleUpdateInput, CodeExampleUncheckedUpdateInput>
  }

  /**
   * CodeExample delete
   */
  export type CodeExampleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeExample
     */
    select?: CodeExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeExample
     */
    omit?: CodeExampleOmit<ExtArgs> | null
    /**
     * Filter which CodeExample to delete.
     */
    where: CodeExampleWhereUniqueInput
  }

  /**
   * CodeExample deleteMany
   */
  export type CodeExampleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeExamples to delete
     */
    where?: CodeExampleWhereInput
    /**
     * Limit how many CodeExamples to delete.
     */
    limit?: number
  }

  /**
   * CodeExample findRaw
   */
  export type CodeExampleFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * CodeExample aggregateRaw
   */
  export type CodeExampleAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * CodeExample without action
   */
  export type CodeExampleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeExample
     */
    select?: CodeExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeExample
     */
    omit?: CodeExampleOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    image: 'image'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    image: 'image',
    categoryId: 'categoryId'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    quizId: 'quizId',
    difficulty: 'difficulty'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const OptionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    isCorret: 'isCorret',
    questionId: 'questionId'
  };

  export type OptionScalarFieldEnum = (typeof OptionScalarFieldEnum)[keyof typeof OptionScalarFieldEnum]


  export const CategoryStatScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    categoryId: 'categoryId',
    attempts: 'attempts',
    completed: 'completed',
    averageScore: 'averageScore',
    lastAttempt: 'lastAttempt'
  };

  export type CategoryStatScalarFieldEnum = (typeof CategoryStatScalarFieldEnum)[keyof typeof CategoryStatScalarFieldEnum]


  export const LearningPathScalarFieldEnum: {
    id: 'id',
    name: 'name',
    title: 'title',
    description: 'description',
    image: 'image',
    order: 'order'
  };

  export type LearningPathScalarFieldEnum = (typeof LearningPathScalarFieldEnum)[keyof typeof LearningPathScalarFieldEnum]


  export const ModuleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    duration: 'duration',
    order: 'order',
    learningPathId: 'learningPathId'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const LessonScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    videoUrl: 'videoUrl',
    codeExample: 'codeExample',
    resources: 'resources',
    duration: 'duration',
    order: 'order',
    moduleId: 'moduleId'
  };

  export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum]


  export const UserLearningProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    learningPathId: 'learningPathId',
    startedAt: 'startedAt',
    lastAccessedAt: 'lastAccessedAt',
    completedAt: 'completedAt',
    progressPercent: 'progressPercent'
  };

  export type UserLearningProgressScalarFieldEnum = (typeof UserLearningProgressScalarFieldEnum)[keyof typeof UserLearningProgressScalarFieldEnum]


  export const UserModuleProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    moduleId: 'moduleId',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    progressPercent: 'progressPercent'
  };

  export type UserModuleProgressScalarFieldEnum = (typeof UserModuleProgressScalarFieldEnum)[keyof typeof UserModuleProgressScalarFieldEnum]


  export const UserLessonProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    lessonId: 'lessonId',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    timeSpent: 'timeSpent'
  };

  export type UserLessonProgressScalarFieldEnum = (typeof UserLessonProgressScalarFieldEnum)[keyof typeof UserLessonProgressScalarFieldEnum]


  export const DocumentationCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    icon: 'icon',
    description: 'description',
    order: 'order'
  };

  export type DocumentationCategoryScalarFieldEnum = (typeof DocumentationCategoryScalarFieldEnum)[keyof typeof DocumentationCategoryScalarFieldEnum]


  export const DocumentationSectionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    content: 'content',
    categoryId: 'categoryId',
    order: 'order'
  };

  export type DocumentationSectionScalarFieldEnum = (typeof DocumentationSectionScalarFieldEnum)[keyof typeof DocumentationSectionScalarFieldEnum]


  export const CodeExampleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    code: 'code',
    language: 'language',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CodeExampleScalarFieldEnum = (typeof CodeExampleScalarFieldEnum)[keyof typeof CodeExampleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    categoryStats?: CategoryStatListRelationFilter
    learningProgress?: UserLearningProgressListRelationFilter
    moduleProgress?: UserModuleProgressListRelationFilter
    lessonProgress?: UserLessonProgressListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
    categoryStats?: CategoryStatOrderByRelationAggregateInput
    learningProgress?: UserLearningProgressOrderByRelationAggregateInput
    moduleProgress?: UserModuleProgressOrderByRelationAggregateInput
    lessonProgress?: UserLessonProgressOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: StringFilter<"User"> | string
    categoryStats?: CategoryStatListRelationFilter
    learningProgress?: UserLearningProgressListRelationFilter
    moduleProgress?: UserModuleProgressListRelationFilter
    lessonProgress?: UserLessonProgressListRelationFilter
  }, "id" | "clerkId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    image?: StringNullableFilter<"Category"> | string | null
    quizzes?: QuizListRelationFilter
    categoryStats?: CategoryStatListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    quizzes?: QuizOrderByRelationAggregateInput
    categoryStats?: CategoryStatOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    image?: StringNullableFilter<"Category"> | string | null
    quizzes?: QuizListRelationFilter
    categoryStats?: CategoryStatListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    image?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: StringFilter<"Quiz"> | string
    title?: StringFilter<"Quiz"> | string
    description?: StringNullableFilter<"Quiz"> | string | null
    image?: StringNullableFilter<"Quiz"> | string | null
    categoryId?: StringFilter<"Quiz"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    questions?: QuestionListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    categoryId?: SortOrder
    category?: CategoryOrderByWithRelationInput
    questions?: QuestionOrderByRelationAggregateInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    title?: StringFilter<"Quiz"> | string
    description?: StringNullableFilter<"Quiz"> | string | null
    image?: StringNullableFilter<"Quiz"> | string | null
    categoryId?: StringFilter<"Quiz"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    questions?: QuestionListRelationFilter
  }, "id">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    categoryId?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quiz"> | string
    title?: StringWithAggregatesFilter<"Quiz"> | string
    description?: StringNullableWithAggregatesFilter<"Quiz"> | string | null
    image?: StringNullableWithAggregatesFilter<"Quiz"> | string | null
    categoryId?: StringWithAggregatesFilter<"Quiz"> | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    quizId?: StringFilter<"Question"> | string
    difficulty?: StringNullableFilter<"Question"> | string | null
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    options?: OptionListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    quizId?: SortOrder
    difficulty?: SortOrder
    quiz?: QuizOrderByWithRelationInput
    options?: OptionOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    text?: StringFilter<"Question"> | string
    quizId?: StringFilter<"Question"> | string
    difficulty?: StringNullableFilter<"Question"> | string | null
    quiz?: XOR<QuizScalarRelationFilter, QuizWhereInput>
    options?: OptionListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    quizId?: SortOrder
    difficulty?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    text?: StringWithAggregatesFilter<"Question"> | string
    quizId?: StringWithAggregatesFilter<"Question"> | string
    difficulty?: StringNullableWithAggregatesFilter<"Question"> | string | null
  }

  export type OptionWhereInput = {
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    id?: StringFilter<"Option"> | string
    text?: StringFilter<"Option"> | string
    isCorret?: BoolFilter<"Option"> | boolean
    questionId?: StringFilter<"Option"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type OptionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    isCorret?: SortOrder
    questionId?: SortOrder
    question?: QuestionOrderByWithRelationInput
  }

  export type OptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OptionWhereInput | OptionWhereInput[]
    OR?: OptionWhereInput[]
    NOT?: OptionWhereInput | OptionWhereInput[]
    text?: StringFilter<"Option"> | string
    isCorret?: BoolFilter<"Option"> | boolean
    questionId?: StringFilter<"Option"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id">

  export type OptionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    isCorret?: SortOrder
    questionId?: SortOrder
    _count?: OptionCountOrderByAggregateInput
    _max?: OptionMaxOrderByAggregateInput
    _min?: OptionMinOrderByAggregateInput
  }

  export type OptionScalarWhereWithAggregatesInput = {
    AND?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    OR?: OptionScalarWhereWithAggregatesInput[]
    NOT?: OptionScalarWhereWithAggregatesInput | OptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Option"> | string
    text?: StringWithAggregatesFilter<"Option"> | string
    isCorret?: BoolWithAggregatesFilter<"Option"> | boolean
    questionId?: StringWithAggregatesFilter<"Option"> | string
  }

  export type CategoryStatWhereInput = {
    AND?: CategoryStatWhereInput | CategoryStatWhereInput[]
    OR?: CategoryStatWhereInput[]
    NOT?: CategoryStatWhereInput | CategoryStatWhereInput[]
    id?: StringFilter<"CategoryStat"> | string
    userId?: StringFilter<"CategoryStat"> | string
    categoryId?: StringFilter<"CategoryStat"> | string
    attempts?: IntFilter<"CategoryStat"> | number
    completed?: IntFilter<"CategoryStat"> | number
    averageScore?: FloatNullableFilter<"CategoryStat"> | number | null
    lastAttempt?: DateTimeNullableFilter<"CategoryStat"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type CategoryStatOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    attempts?: SortOrder
    completed?: SortOrder
    averageScore?: SortOrder
    lastAttempt?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type CategoryStatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_categoryId?: CategoryStatUserIdCategoryIdCompoundUniqueInput
    AND?: CategoryStatWhereInput | CategoryStatWhereInput[]
    OR?: CategoryStatWhereInput[]
    NOT?: CategoryStatWhereInput | CategoryStatWhereInput[]
    userId?: StringFilter<"CategoryStat"> | string
    categoryId?: StringFilter<"CategoryStat"> | string
    attempts?: IntFilter<"CategoryStat"> | number
    completed?: IntFilter<"CategoryStat"> | number
    averageScore?: FloatNullableFilter<"CategoryStat"> | number | null
    lastAttempt?: DateTimeNullableFilter<"CategoryStat"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "id" | "userId_categoryId">

  export type CategoryStatOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    attempts?: SortOrder
    completed?: SortOrder
    averageScore?: SortOrder
    lastAttempt?: SortOrder
    _count?: CategoryStatCountOrderByAggregateInput
    _avg?: CategoryStatAvgOrderByAggregateInput
    _max?: CategoryStatMaxOrderByAggregateInput
    _min?: CategoryStatMinOrderByAggregateInput
    _sum?: CategoryStatSumOrderByAggregateInput
  }

  export type CategoryStatScalarWhereWithAggregatesInput = {
    AND?: CategoryStatScalarWhereWithAggregatesInput | CategoryStatScalarWhereWithAggregatesInput[]
    OR?: CategoryStatScalarWhereWithAggregatesInput[]
    NOT?: CategoryStatScalarWhereWithAggregatesInput | CategoryStatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CategoryStat"> | string
    userId?: StringWithAggregatesFilter<"CategoryStat"> | string
    categoryId?: StringWithAggregatesFilter<"CategoryStat"> | string
    attempts?: IntWithAggregatesFilter<"CategoryStat"> | number
    completed?: IntWithAggregatesFilter<"CategoryStat"> | number
    averageScore?: FloatNullableWithAggregatesFilter<"CategoryStat"> | number | null
    lastAttempt?: DateTimeNullableWithAggregatesFilter<"CategoryStat"> | Date | string | null
  }

  export type LearningPathWhereInput = {
    AND?: LearningPathWhereInput | LearningPathWhereInput[]
    OR?: LearningPathWhereInput[]
    NOT?: LearningPathWhereInput | LearningPathWhereInput[]
    id?: StringFilter<"LearningPath"> | string
    name?: StringFilter<"LearningPath"> | string
    title?: StringFilter<"LearningPath"> | string
    description?: StringFilter<"LearningPath"> | string
    image?: StringNullableFilter<"LearningPath"> | string | null
    order?: IntFilter<"LearningPath"> | number
    modules?: ModuleListRelationFilter
    userProgress?: UserLearningProgressListRelationFilter
  }

  export type LearningPathOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    order?: SortOrder
    modules?: ModuleOrderByRelationAggregateInput
    userProgress?: UserLearningProgressOrderByRelationAggregateInput
  }

  export type LearningPathWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LearningPathWhereInput | LearningPathWhereInput[]
    OR?: LearningPathWhereInput[]
    NOT?: LearningPathWhereInput | LearningPathWhereInput[]
    name?: StringFilter<"LearningPath"> | string
    title?: StringFilter<"LearningPath"> | string
    description?: StringFilter<"LearningPath"> | string
    image?: StringNullableFilter<"LearningPath"> | string | null
    order?: IntFilter<"LearningPath"> | number
    modules?: ModuleListRelationFilter
    userProgress?: UserLearningProgressListRelationFilter
  }, "id">

  export type LearningPathOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    order?: SortOrder
    _count?: LearningPathCountOrderByAggregateInput
    _avg?: LearningPathAvgOrderByAggregateInput
    _max?: LearningPathMaxOrderByAggregateInput
    _min?: LearningPathMinOrderByAggregateInput
    _sum?: LearningPathSumOrderByAggregateInput
  }

  export type LearningPathScalarWhereWithAggregatesInput = {
    AND?: LearningPathScalarWhereWithAggregatesInput | LearningPathScalarWhereWithAggregatesInput[]
    OR?: LearningPathScalarWhereWithAggregatesInput[]
    NOT?: LearningPathScalarWhereWithAggregatesInput | LearningPathScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LearningPath"> | string
    name?: StringWithAggregatesFilter<"LearningPath"> | string
    title?: StringWithAggregatesFilter<"LearningPath"> | string
    description?: StringWithAggregatesFilter<"LearningPath"> | string
    image?: StringNullableWithAggregatesFilter<"LearningPath"> | string | null
    order?: IntWithAggregatesFilter<"LearningPath"> | number
  }

  export type ModuleWhereInput = {
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    id?: StringFilter<"Module"> | string
    title?: StringFilter<"Module"> | string
    description?: StringFilter<"Module"> | string
    duration?: StringFilter<"Module"> | string
    order?: IntFilter<"Module"> | number
    learningPathId?: StringFilter<"Module"> | string
    learningPath?: XOR<LearningPathScalarRelationFilter, LearningPathWhereInput>
    lessons?: LessonListRelationFilter
    userProgress?: UserModuleProgressListRelationFilter
  }

  export type ModuleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    learningPathId?: SortOrder
    learningPath?: LearningPathOrderByWithRelationInput
    lessons?: LessonOrderByRelationAggregateInput
    userProgress?: UserModuleProgressOrderByRelationAggregateInput
  }

  export type ModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    title?: StringFilter<"Module"> | string
    description?: StringFilter<"Module"> | string
    duration?: StringFilter<"Module"> | string
    order?: IntFilter<"Module"> | number
    learningPathId?: StringFilter<"Module"> | string
    learningPath?: XOR<LearningPathScalarRelationFilter, LearningPathWhereInput>
    lessons?: LessonListRelationFilter
    userProgress?: UserModuleProgressListRelationFilter
  }, "id">

  export type ModuleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    learningPathId?: SortOrder
    _count?: ModuleCountOrderByAggregateInput
    _avg?: ModuleAvgOrderByAggregateInput
    _max?: ModuleMaxOrderByAggregateInput
    _min?: ModuleMinOrderByAggregateInput
    _sum?: ModuleSumOrderByAggregateInput
  }

  export type ModuleScalarWhereWithAggregatesInput = {
    AND?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    OR?: ModuleScalarWhereWithAggregatesInput[]
    NOT?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Module"> | string
    title?: StringWithAggregatesFilter<"Module"> | string
    description?: StringWithAggregatesFilter<"Module"> | string
    duration?: StringWithAggregatesFilter<"Module"> | string
    order?: IntWithAggregatesFilter<"Module"> | number
    learningPathId?: StringWithAggregatesFilter<"Module"> | string
  }

  export type LessonWhereInput = {
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    id?: StringFilter<"Lesson"> | string
    title?: StringFilter<"Lesson"> | string
    content?: StringFilter<"Lesson"> | string
    videoUrl?: StringNullableFilter<"Lesson"> | string | null
    codeExample?: StringNullableFilter<"Lesson"> | string | null
    resources?: StringNullableFilter<"Lesson"> | string | null
    duration?: StringFilter<"Lesson"> | string
    order?: IntFilter<"Lesson"> | number
    moduleId?: StringFilter<"Lesson"> | string
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    userProgress?: UserLessonProgressListRelationFilter
  }

  export type LessonOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    videoUrl?: SortOrder
    codeExample?: SortOrder
    resources?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    moduleId?: SortOrder
    module?: ModuleOrderByWithRelationInput
    userProgress?: UserLessonProgressOrderByRelationAggregateInput
  }

  export type LessonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    title?: StringFilter<"Lesson"> | string
    content?: StringFilter<"Lesson"> | string
    videoUrl?: StringNullableFilter<"Lesson"> | string | null
    codeExample?: StringNullableFilter<"Lesson"> | string | null
    resources?: StringNullableFilter<"Lesson"> | string | null
    duration?: StringFilter<"Lesson"> | string
    order?: IntFilter<"Lesson"> | number
    moduleId?: StringFilter<"Lesson"> | string
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    userProgress?: UserLessonProgressListRelationFilter
  }, "id">

  export type LessonOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    videoUrl?: SortOrder
    codeExample?: SortOrder
    resources?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    moduleId?: SortOrder
    _count?: LessonCountOrderByAggregateInput
    _avg?: LessonAvgOrderByAggregateInput
    _max?: LessonMaxOrderByAggregateInput
    _min?: LessonMinOrderByAggregateInput
    _sum?: LessonSumOrderByAggregateInput
  }

  export type LessonScalarWhereWithAggregatesInput = {
    AND?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    OR?: LessonScalarWhereWithAggregatesInput[]
    NOT?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lesson"> | string
    title?: StringWithAggregatesFilter<"Lesson"> | string
    content?: StringWithAggregatesFilter<"Lesson"> | string
    videoUrl?: StringNullableWithAggregatesFilter<"Lesson"> | string | null
    codeExample?: StringNullableWithAggregatesFilter<"Lesson"> | string | null
    resources?: StringNullableWithAggregatesFilter<"Lesson"> | string | null
    duration?: StringWithAggregatesFilter<"Lesson"> | string
    order?: IntWithAggregatesFilter<"Lesson"> | number
    moduleId?: StringWithAggregatesFilter<"Lesson"> | string
  }

  export type UserLearningProgressWhereInput = {
    AND?: UserLearningProgressWhereInput | UserLearningProgressWhereInput[]
    OR?: UserLearningProgressWhereInput[]
    NOT?: UserLearningProgressWhereInput | UserLearningProgressWhereInput[]
    id?: StringFilter<"UserLearningProgress"> | string
    userId?: StringFilter<"UserLearningProgress"> | string
    learningPathId?: StringFilter<"UserLearningProgress"> | string
    startedAt?: DateTimeFilter<"UserLearningProgress"> | Date | string
    lastAccessedAt?: DateTimeFilter<"UserLearningProgress"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserLearningProgress"> | Date | string | null
    progressPercent?: IntFilter<"UserLearningProgress"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    learningPath?: XOR<LearningPathScalarRelationFilter, LearningPathWhereInput>
  }

  export type UserLearningProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    learningPathId?: SortOrder
    startedAt?: SortOrder
    lastAccessedAt?: SortOrder
    completedAt?: SortOrder
    progressPercent?: SortOrder
    user?: UserOrderByWithRelationInput
    learningPath?: LearningPathOrderByWithRelationInput
  }

  export type UserLearningProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_learningPathId?: UserLearningProgressUserIdLearningPathIdCompoundUniqueInput
    AND?: UserLearningProgressWhereInput | UserLearningProgressWhereInput[]
    OR?: UserLearningProgressWhereInput[]
    NOT?: UserLearningProgressWhereInput | UserLearningProgressWhereInput[]
    userId?: StringFilter<"UserLearningProgress"> | string
    learningPathId?: StringFilter<"UserLearningProgress"> | string
    startedAt?: DateTimeFilter<"UserLearningProgress"> | Date | string
    lastAccessedAt?: DateTimeFilter<"UserLearningProgress"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserLearningProgress"> | Date | string | null
    progressPercent?: IntFilter<"UserLearningProgress"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    learningPath?: XOR<LearningPathScalarRelationFilter, LearningPathWhereInput>
  }, "id" | "userId_learningPathId">

  export type UserLearningProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    learningPathId?: SortOrder
    startedAt?: SortOrder
    lastAccessedAt?: SortOrder
    completedAt?: SortOrder
    progressPercent?: SortOrder
    _count?: UserLearningProgressCountOrderByAggregateInput
    _avg?: UserLearningProgressAvgOrderByAggregateInput
    _max?: UserLearningProgressMaxOrderByAggregateInput
    _min?: UserLearningProgressMinOrderByAggregateInput
    _sum?: UserLearningProgressSumOrderByAggregateInput
  }

  export type UserLearningProgressScalarWhereWithAggregatesInput = {
    AND?: UserLearningProgressScalarWhereWithAggregatesInput | UserLearningProgressScalarWhereWithAggregatesInput[]
    OR?: UserLearningProgressScalarWhereWithAggregatesInput[]
    NOT?: UserLearningProgressScalarWhereWithAggregatesInput | UserLearningProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserLearningProgress"> | string
    userId?: StringWithAggregatesFilter<"UserLearningProgress"> | string
    learningPathId?: StringWithAggregatesFilter<"UserLearningProgress"> | string
    startedAt?: DateTimeWithAggregatesFilter<"UserLearningProgress"> | Date | string
    lastAccessedAt?: DateTimeWithAggregatesFilter<"UserLearningProgress"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"UserLearningProgress"> | Date | string | null
    progressPercent?: IntWithAggregatesFilter<"UserLearningProgress"> | number
  }

  export type UserModuleProgressWhereInput = {
    AND?: UserModuleProgressWhereInput | UserModuleProgressWhereInput[]
    OR?: UserModuleProgressWhereInput[]
    NOT?: UserModuleProgressWhereInput | UserModuleProgressWhereInput[]
    id?: StringFilter<"UserModuleProgress"> | string
    userId?: StringFilter<"UserModuleProgress"> | string
    moduleId?: StringFilter<"UserModuleProgress"> | string
    startedAt?: DateTimeFilter<"UserModuleProgress"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserModuleProgress"> | Date | string | null
    progressPercent?: IntFilter<"UserModuleProgress"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }

  export type UserModuleProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    progressPercent?: SortOrder
    user?: UserOrderByWithRelationInput
    module?: ModuleOrderByWithRelationInput
  }

  export type UserModuleProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_moduleId?: UserModuleProgressUserIdModuleIdCompoundUniqueInput
    AND?: UserModuleProgressWhereInput | UserModuleProgressWhereInput[]
    OR?: UserModuleProgressWhereInput[]
    NOT?: UserModuleProgressWhereInput | UserModuleProgressWhereInput[]
    userId?: StringFilter<"UserModuleProgress"> | string
    moduleId?: StringFilter<"UserModuleProgress"> | string
    startedAt?: DateTimeFilter<"UserModuleProgress"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserModuleProgress"> | Date | string | null
    progressPercent?: IntFilter<"UserModuleProgress"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
  }, "id" | "userId_moduleId">

  export type UserModuleProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    progressPercent?: SortOrder
    _count?: UserModuleProgressCountOrderByAggregateInput
    _avg?: UserModuleProgressAvgOrderByAggregateInput
    _max?: UserModuleProgressMaxOrderByAggregateInput
    _min?: UserModuleProgressMinOrderByAggregateInput
    _sum?: UserModuleProgressSumOrderByAggregateInput
  }

  export type UserModuleProgressScalarWhereWithAggregatesInput = {
    AND?: UserModuleProgressScalarWhereWithAggregatesInput | UserModuleProgressScalarWhereWithAggregatesInput[]
    OR?: UserModuleProgressScalarWhereWithAggregatesInput[]
    NOT?: UserModuleProgressScalarWhereWithAggregatesInput | UserModuleProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserModuleProgress"> | string
    userId?: StringWithAggregatesFilter<"UserModuleProgress"> | string
    moduleId?: StringWithAggregatesFilter<"UserModuleProgress"> | string
    startedAt?: DateTimeWithAggregatesFilter<"UserModuleProgress"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"UserModuleProgress"> | Date | string | null
    progressPercent?: IntWithAggregatesFilter<"UserModuleProgress"> | number
  }

  export type UserLessonProgressWhereInput = {
    AND?: UserLessonProgressWhereInput | UserLessonProgressWhereInput[]
    OR?: UserLessonProgressWhereInput[]
    NOT?: UserLessonProgressWhereInput | UserLessonProgressWhereInput[]
    id?: StringFilter<"UserLessonProgress"> | string
    userId?: StringFilter<"UserLessonProgress"> | string
    lessonId?: StringFilter<"UserLessonProgress"> | string
    startedAt?: DateTimeFilter<"UserLessonProgress"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserLessonProgress"> | Date | string | null
    timeSpent?: IntFilter<"UserLessonProgress"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }

  export type UserLessonProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    timeSpent?: SortOrder
    user?: UserOrderByWithRelationInput
    lesson?: LessonOrderByWithRelationInput
  }

  export type UserLessonProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_lessonId?: UserLessonProgressUserIdLessonIdCompoundUniqueInput
    AND?: UserLessonProgressWhereInput | UserLessonProgressWhereInput[]
    OR?: UserLessonProgressWhereInput[]
    NOT?: UserLessonProgressWhereInput | UserLessonProgressWhereInput[]
    userId?: StringFilter<"UserLessonProgress"> | string
    lessonId?: StringFilter<"UserLessonProgress"> | string
    startedAt?: DateTimeFilter<"UserLessonProgress"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserLessonProgress"> | Date | string | null
    timeSpent?: IntFilter<"UserLessonProgress"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }, "id" | "userId_lessonId">

  export type UserLessonProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    timeSpent?: SortOrder
    _count?: UserLessonProgressCountOrderByAggregateInput
    _avg?: UserLessonProgressAvgOrderByAggregateInput
    _max?: UserLessonProgressMaxOrderByAggregateInput
    _min?: UserLessonProgressMinOrderByAggregateInput
    _sum?: UserLessonProgressSumOrderByAggregateInput
  }

  export type UserLessonProgressScalarWhereWithAggregatesInput = {
    AND?: UserLessonProgressScalarWhereWithAggregatesInput | UserLessonProgressScalarWhereWithAggregatesInput[]
    OR?: UserLessonProgressScalarWhereWithAggregatesInput[]
    NOT?: UserLessonProgressScalarWhereWithAggregatesInput | UserLessonProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserLessonProgress"> | string
    userId?: StringWithAggregatesFilter<"UserLessonProgress"> | string
    lessonId?: StringWithAggregatesFilter<"UserLessonProgress"> | string
    startedAt?: DateTimeWithAggregatesFilter<"UserLessonProgress"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"UserLessonProgress"> | Date | string | null
    timeSpent?: IntWithAggregatesFilter<"UserLessonProgress"> | number
  }

  export type DocumentationCategoryWhereInput = {
    AND?: DocumentationCategoryWhereInput | DocumentationCategoryWhereInput[]
    OR?: DocumentationCategoryWhereInput[]
    NOT?: DocumentationCategoryWhereInput | DocumentationCategoryWhereInput[]
    id?: StringFilter<"DocumentationCategory"> | string
    name?: StringFilter<"DocumentationCategory"> | string
    slug?: StringFilter<"DocumentationCategory"> | string
    icon?: StringFilter<"DocumentationCategory"> | string
    description?: StringFilter<"DocumentationCategory"> | string
    order?: IntFilter<"DocumentationCategory"> | number
    sections?: DocumentationSectionListRelationFilter
  }

  export type DocumentationCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    order?: SortOrder
    sections?: DocumentationSectionOrderByRelationAggregateInput
  }

  export type DocumentationCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: DocumentationCategoryWhereInput | DocumentationCategoryWhereInput[]
    OR?: DocumentationCategoryWhereInput[]
    NOT?: DocumentationCategoryWhereInput | DocumentationCategoryWhereInput[]
    name?: StringFilter<"DocumentationCategory"> | string
    icon?: StringFilter<"DocumentationCategory"> | string
    description?: StringFilter<"DocumentationCategory"> | string
    order?: IntFilter<"DocumentationCategory"> | number
    sections?: DocumentationSectionListRelationFilter
  }, "id" | "slug">

  export type DocumentationCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    order?: SortOrder
    _count?: DocumentationCategoryCountOrderByAggregateInput
    _avg?: DocumentationCategoryAvgOrderByAggregateInput
    _max?: DocumentationCategoryMaxOrderByAggregateInput
    _min?: DocumentationCategoryMinOrderByAggregateInput
    _sum?: DocumentationCategorySumOrderByAggregateInput
  }

  export type DocumentationCategoryScalarWhereWithAggregatesInput = {
    AND?: DocumentationCategoryScalarWhereWithAggregatesInput | DocumentationCategoryScalarWhereWithAggregatesInput[]
    OR?: DocumentationCategoryScalarWhereWithAggregatesInput[]
    NOT?: DocumentationCategoryScalarWhereWithAggregatesInput | DocumentationCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocumentationCategory"> | string
    name?: StringWithAggregatesFilter<"DocumentationCategory"> | string
    slug?: StringWithAggregatesFilter<"DocumentationCategory"> | string
    icon?: StringWithAggregatesFilter<"DocumentationCategory"> | string
    description?: StringWithAggregatesFilter<"DocumentationCategory"> | string
    order?: IntWithAggregatesFilter<"DocumentationCategory"> | number
  }

  export type DocumentationSectionWhereInput = {
    AND?: DocumentationSectionWhereInput | DocumentationSectionWhereInput[]
    OR?: DocumentationSectionWhereInput[]
    NOT?: DocumentationSectionWhereInput | DocumentationSectionWhereInput[]
    id?: StringFilter<"DocumentationSection"> | string
    title?: StringFilter<"DocumentationSection"> | string
    slug?: StringFilter<"DocumentationSection"> | string
    content?: StringFilter<"DocumentationSection"> | string
    categoryId?: StringFilter<"DocumentationSection"> | string
    order?: IntFilter<"DocumentationSection"> | number
    category?: XOR<DocumentationCategoryScalarRelationFilter, DocumentationCategoryWhereInput>
  }

  export type DocumentationSectionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    categoryId?: SortOrder
    order?: SortOrder
    category?: DocumentationCategoryOrderByWithRelationInput
  }

  export type DocumentationSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    categoryId_slug?: DocumentationSectionCategoryIdSlugCompoundUniqueInput
    AND?: DocumentationSectionWhereInput | DocumentationSectionWhereInput[]
    OR?: DocumentationSectionWhereInput[]
    NOT?: DocumentationSectionWhereInput | DocumentationSectionWhereInput[]
    title?: StringFilter<"DocumentationSection"> | string
    slug?: StringFilter<"DocumentationSection"> | string
    content?: StringFilter<"DocumentationSection"> | string
    categoryId?: StringFilter<"DocumentationSection"> | string
    order?: IntFilter<"DocumentationSection"> | number
    category?: XOR<DocumentationCategoryScalarRelationFilter, DocumentationCategoryWhereInput>
  }, "id" | "categoryId_slug">

  export type DocumentationSectionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    categoryId?: SortOrder
    order?: SortOrder
    _count?: DocumentationSectionCountOrderByAggregateInput
    _avg?: DocumentationSectionAvgOrderByAggregateInput
    _max?: DocumentationSectionMaxOrderByAggregateInput
    _min?: DocumentationSectionMinOrderByAggregateInput
    _sum?: DocumentationSectionSumOrderByAggregateInput
  }

  export type DocumentationSectionScalarWhereWithAggregatesInput = {
    AND?: DocumentationSectionScalarWhereWithAggregatesInput | DocumentationSectionScalarWhereWithAggregatesInput[]
    OR?: DocumentationSectionScalarWhereWithAggregatesInput[]
    NOT?: DocumentationSectionScalarWhereWithAggregatesInput | DocumentationSectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocumentationSection"> | string
    title?: StringWithAggregatesFilter<"DocumentationSection"> | string
    slug?: StringWithAggregatesFilter<"DocumentationSection"> | string
    content?: StringWithAggregatesFilter<"DocumentationSection"> | string
    categoryId?: StringWithAggregatesFilter<"DocumentationSection"> | string
    order?: IntWithAggregatesFilter<"DocumentationSection"> | number
  }

  export type CodeExampleWhereInput = {
    AND?: CodeExampleWhereInput | CodeExampleWhereInput[]
    OR?: CodeExampleWhereInput[]
    NOT?: CodeExampleWhereInput | CodeExampleWhereInput[]
    id?: StringFilter<"CodeExample"> | string
    name?: StringFilter<"CodeExample"> | string
    slug?: StringFilter<"CodeExample"> | string
    description?: StringNullableFilter<"CodeExample"> | string | null
    code?: StringFilter<"CodeExample"> | string
    language?: StringFilter<"CodeExample"> | string
    tags?: StringNullableListFilter<"CodeExample">
    createdAt?: DateTimeFilter<"CodeExample"> | Date | string
    updatedAt?: DateTimeFilter<"CodeExample"> | Date | string
  }

  export type CodeExampleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    code?: SortOrder
    language?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CodeExampleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CodeExampleWhereInput | CodeExampleWhereInput[]
    OR?: CodeExampleWhereInput[]
    NOT?: CodeExampleWhereInput | CodeExampleWhereInput[]
    name?: StringFilter<"CodeExample"> | string
    description?: StringNullableFilter<"CodeExample"> | string | null
    code?: StringFilter<"CodeExample"> | string
    language?: StringFilter<"CodeExample"> | string
    tags?: StringNullableListFilter<"CodeExample">
    createdAt?: DateTimeFilter<"CodeExample"> | Date | string
    updatedAt?: DateTimeFilter<"CodeExample"> | Date | string
  }, "id" | "slug">

  export type CodeExampleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    code?: SortOrder
    language?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CodeExampleCountOrderByAggregateInput
    _max?: CodeExampleMaxOrderByAggregateInput
    _min?: CodeExampleMinOrderByAggregateInput
  }

  export type CodeExampleScalarWhereWithAggregatesInput = {
    AND?: CodeExampleScalarWhereWithAggregatesInput | CodeExampleScalarWhereWithAggregatesInput[]
    OR?: CodeExampleScalarWhereWithAggregatesInput[]
    NOT?: CodeExampleScalarWhereWithAggregatesInput | CodeExampleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CodeExample"> | string
    name?: StringWithAggregatesFilter<"CodeExample"> | string
    slug?: StringWithAggregatesFilter<"CodeExample"> | string
    description?: StringNullableWithAggregatesFilter<"CodeExample"> | string | null
    code?: StringWithAggregatesFilter<"CodeExample"> | string
    language?: StringWithAggregatesFilter<"CodeExample"> | string
    tags?: StringNullableListFilter<"CodeExample">
    createdAt?: DateTimeWithAggregatesFilter<"CodeExample"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CodeExample"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    role?: string
    categoryStats?: CategoryStatCreateNestedManyWithoutUserInput
    learningProgress?: UserLearningProgressCreateNestedManyWithoutUserInput
    moduleProgress?: UserModuleProgressCreateNestedManyWithoutUserInput
    lessonProgress?: UserLessonProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    role?: string
    categoryStats?: CategoryStatUncheckedCreateNestedManyWithoutUserInput
    learningProgress?: UserLearningProgressUncheckedCreateNestedManyWithoutUserInput
    moduleProgress?: UserModuleProgressUncheckedCreateNestedManyWithoutUserInput
    lessonProgress?: UserLessonProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    categoryStats?: CategoryStatUpdateManyWithoutUserNestedInput
    learningProgress?: UserLearningProgressUpdateManyWithoutUserNestedInput
    moduleProgress?: UserModuleProgressUpdateManyWithoutUserNestedInput
    lessonProgress?: UserLessonProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    categoryStats?: CategoryStatUncheckedUpdateManyWithoutUserNestedInput
    learningProgress?: UserLearningProgressUncheckedUpdateManyWithoutUserNestedInput
    moduleProgress?: UserModuleProgressUncheckedUpdateManyWithoutUserNestedInput
    lessonProgress?: UserLessonProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    role?: string
  }

  export type UserUpdateManyMutationInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    quizzes?: QuizCreateNestedManyWithoutCategoryInput
    categoryStats?: CategoryStatCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    quizzes?: QuizUncheckedCreateNestedManyWithoutCategoryInput
    categoryStats?: CategoryStatUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    quizzes?: QuizUpdateManyWithoutCategoryNestedInput
    categoryStats?: CategoryStatUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    quizzes?: QuizUncheckedUpdateManyWithoutCategoryNestedInput
    categoryStats?: CategoryStatUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuizCreateInput = {
    id?: string
    title: string
    description?: string | null
    image?: string | null
    category: CategoryCreateNestedOneWithoutQuizzesInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    image?: string | null
    categoryId: string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: CategoryUpdateOneRequiredWithoutQuizzesNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    image?: string | null
    categoryId: string
  }

  export type QuizUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuizUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionCreateInput = {
    id?: string
    text: string
    difficulty?: string | null
    quiz: QuizCreateNestedOneWithoutQuestionsInput
    options?: OptionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    text: string
    quizId: string
    difficulty?: string | null
    options?: OptionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
    options?: OptionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    options?: OptionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    text: string
    quizId: string
    difficulty?: string | null
  }

  export type QuestionUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuestionUncheckedUpdateManyInput = {
    text?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OptionCreateInput = {
    id?: string
    text: string
    isCorret: boolean
    question: QuestionCreateNestedOneWithoutOptionsInput
  }

  export type OptionUncheckedCreateInput = {
    id?: string
    text: string
    isCorret: boolean
    questionId: string
  }

  export type OptionUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    isCorret?: BoolFieldUpdateOperationsInput | boolean
    question?: QuestionUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type OptionUncheckedUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    isCorret?: BoolFieldUpdateOperationsInput | boolean
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type OptionCreateManyInput = {
    id?: string
    text: string
    isCorret: boolean
    questionId: string
  }

  export type OptionUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    isCorret?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OptionUncheckedUpdateManyInput = {
    text?: StringFieldUpdateOperationsInput | string
    isCorret?: BoolFieldUpdateOperationsInput | boolean
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryStatCreateInput = {
    id?: string
    attempts?: number
    completed?: number
    averageScore?: number | null
    lastAttempt?: Date | string | null
    user: UserCreateNestedOneWithoutCategoryStatsInput
    category: CategoryCreateNestedOneWithoutCategoryStatsInput
  }

  export type CategoryStatUncheckedCreateInput = {
    id?: string
    userId: string
    categoryId: string
    attempts?: number
    completed?: number
    averageScore?: number | null
    lastAttempt?: Date | string | null
  }

  export type CategoryStatUpdateInput = {
    attempts?: IntFieldUpdateOperationsInput | number
    completed?: IntFieldUpdateOperationsInput | number
    averageScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutCategoryStatsNestedInput
    category?: CategoryUpdateOneRequiredWithoutCategoryStatsNestedInput
  }

  export type CategoryStatUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    completed?: IntFieldUpdateOperationsInput | number
    averageScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryStatCreateManyInput = {
    id?: string
    userId: string
    categoryId: string
    attempts?: number
    completed?: number
    averageScore?: number | null
    lastAttempt?: Date | string | null
  }

  export type CategoryStatUpdateManyMutationInput = {
    attempts?: IntFieldUpdateOperationsInput | number
    completed?: IntFieldUpdateOperationsInput | number
    averageScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryStatUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    completed?: IntFieldUpdateOperationsInput | number
    averageScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LearningPathCreateInput = {
    id?: string
    name: string
    title: string
    description: string
    image?: string | null
    order: number
    modules?: ModuleCreateNestedManyWithoutLearningPathInput
    userProgress?: UserLearningProgressCreateNestedManyWithoutLearningPathInput
  }

  export type LearningPathUncheckedCreateInput = {
    id?: string
    name: string
    title: string
    description: string
    image?: string | null
    order: number
    modules?: ModuleUncheckedCreateNestedManyWithoutLearningPathInput
    userProgress?: UserLearningProgressUncheckedCreateNestedManyWithoutLearningPathInput
  }

  export type LearningPathUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    modules?: ModuleUpdateManyWithoutLearningPathNestedInput
    userProgress?: UserLearningProgressUpdateManyWithoutLearningPathNestedInput
  }

  export type LearningPathUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    modules?: ModuleUncheckedUpdateManyWithoutLearningPathNestedInput
    userProgress?: UserLearningProgressUncheckedUpdateManyWithoutLearningPathNestedInput
  }

  export type LearningPathCreateManyInput = {
    id?: string
    name: string
    title: string
    description: string
    image?: string | null
    order: number
  }

  export type LearningPathUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type LearningPathUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ModuleCreateInput = {
    id?: string
    title: string
    description: string
    duration: string
    order: number
    learningPath: LearningPathCreateNestedOneWithoutModulesInput
    lessons?: LessonCreateNestedManyWithoutModuleInput
    userProgress?: UserModuleProgressCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    duration: string
    order: number
    learningPathId: string
    lessons?: LessonUncheckedCreateNestedManyWithoutModuleInput
    userProgress?: UserModuleProgressUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    learningPath?: LearningPathUpdateOneRequiredWithoutModulesNestedInput
    lessons?: LessonUpdateManyWithoutModuleNestedInput
    userProgress?: UserModuleProgressUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    learningPathId?: StringFieldUpdateOperationsInput | string
    lessons?: LessonUncheckedUpdateManyWithoutModuleNestedInput
    userProgress?: UserModuleProgressUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleCreateManyInput = {
    id?: string
    title: string
    description: string
    duration: string
    order: number
    learningPathId: string
  }

  export type ModuleUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ModuleUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    learningPathId?: StringFieldUpdateOperationsInput | string
  }

  export type LessonCreateInput = {
    id?: string
    title: string
    content: string
    videoUrl?: string | null
    codeExample?: string | null
    resources?: string | null
    duration: string
    order: number
    module: ModuleCreateNestedOneWithoutLessonsInput
    userProgress?: UserLessonProgressCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    videoUrl?: string | null
    codeExample?: string | null
    resources?: string | null
    duration: string
    order: number
    moduleId: string
    userProgress?: UserLessonProgressUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    codeExample?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    module?: ModuleUpdateOneRequiredWithoutLessonsNestedInput
    userProgress?: UserLessonProgressUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    codeExample?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    moduleId?: StringFieldUpdateOperationsInput | string
    userProgress?: UserLessonProgressUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonCreateManyInput = {
    id?: string
    title: string
    content: string
    videoUrl?: string | null
    codeExample?: string | null
    resources?: string | null
    duration: string
    order: number
    moduleId: string
  }

  export type LessonUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    codeExample?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type LessonUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    codeExample?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    moduleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserLearningProgressCreateInput = {
    id?: string
    startedAt?: Date | string
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
    progressPercent?: number
    user: UserCreateNestedOneWithoutLearningProgressInput
    learningPath: LearningPathCreateNestedOneWithoutUserProgressInput
  }

  export type UserLearningProgressUncheckedCreateInput = {
    id?: string
    userId: string
    learningPathId: string
    startedAt?: Date | string
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
    progressPercent?: number
  }

  export type UserLearningProgressUpdateInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutLearningProgressNestedInput
    learningPath?: LearningPathUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserLearningProgressUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    learningPathId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
  }

  export type UserLearningProgressCreateManyInput = {
    id?: string
    userId: string
    learningPathId: string
    startedAt?: Date | string
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
    progressPercent?: number
  }

  export type UserLearningProgressUpdateManyMutationInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
  }

  export type UserLearningProgressUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    learningPathId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
  }

  export type UserModuleProgressCreateInput = {
    id?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    progressPercent?: number
    user: UserCreateNestedOneWithoutModuleProgressInput
    module: ModuleCreateNestedOneWithoutUserProgressInput
  }

  export type UserModuleProgressUncheckedCreateInput = {
    id?: string
    userId: string
    moduleId: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    progressPercent?: number
  }

  export type UserModuleProgressUpdateInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutModuleProgressNestedInput
    module?: ModuleUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserModuleProgressUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
  }

  export type UserModuleProgressCreateManyInput = {
    id?: string
    userId: string
    moduleId: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    progressPercent?: number
  }

  export type UserModuleProgressUpdateManyMutationInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
  }

  export type UserModuleProgressUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    moduleId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
  }

  export type UserLessonProgressCreateInput = {
    id?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    timeSpent?: number
    user: UserCreateNestedOneWithoutLessonProgressInput
    lesson: LessonCreateNestedOneWithoutUserProgressInput
  }

  export type UserLessonProgressUncheckedCreateInput = {
    id?: string
    userId: string
    lessonId: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    timeSpent?: number
  }

  export type UserLessonProgressUpdateInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutLessonProgressNestedInput
    lesson?: LessonUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserLessonProgressUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpent?: IntFieldUpdateOperationsInput | number
  }

  export type UserLessonProgressCreateManyInput = {
    id?: string
    userId: string
    lessonId: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    timeSpent?: number
  }

  export type UserLessonProgressUpdateManyMutationInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpent?: IntFieldUpdateOperationsInput | number
  }

  export type UserLessonProgressUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpent?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentationCategoryCreateInput = {
    id?: string
    name: string
    slug: string
    icon: string
    description: string
    order: number
    sections?: DocumentationSectionCreateNestedManyWithoutCategoryInput
  }

  export type DocumentationCategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    icon: string
    description: string
    order: number
    sections?: DocumentationSectionUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type DocumentationCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    sections?: DocumentationSectionUpdateManyWithoutCategoryNestedInput
  }

  export type DocumentationCategoryUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    sections?: DocumentationSectionUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type DocumentationCategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    icon: string
    description: string
    order: number
  }

  export type DocumentationCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentationCategoryUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentationSectionCreateInput = {
    id?: string
    title: string
    slug: string
    content: string
    order: number
    category: DocumentationCategoryCreateNestedOneWithoutSectionsInput
  }

  export type DocumentationSectionUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    content: string
    categoryId: string
    order: number
  }

  export type DocumentationSectionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    category?: DocumentationCategoryUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type DocumentationSectionUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentationSectionCreateManyInput = {
    id?: string
    title: string
    slug: string
    content: string
    categoryId: string
    order: number
  }

  export type DocumentationSectionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentationSectionUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type CodeExampleCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    code: string
    language?: string
    tags?: CodeExampleCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CodeExampleUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    code: string
    language?: string
    tags?: CodeExampleCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CodeExampleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    tags?: CodeExampleUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeExampleUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    tags?: CodeExampleUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeExampleCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    code: string
    language?: string
    tags?: CodeExampleCreatetagsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CodeExampleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    tags?: CodeExampleUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeExampleUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    tags?: CodeExampleUpdatetagsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CategoryStatListRelationFilter = {
    every?: CategoryStatWhereInput
    some?: CategoryStatWhereInput
    none?: CategoryStatWhereInput
  }

  export type UserLearningProgressListRelationFilter = {
    every?: UserLearningProgressWhereInput
    some?: UserLearningProgressWhereInput
    none?: UserLearningProgressWhereInput
  }

  export type UserModuleProgressListRelationFilter = {
    every?: UserModuleProgressWhereInput
    some?: UserModuleProgressWhereInput
    none?: UserModuleProgressWhereInput
  }

  export type UserLessonProgressListRelationFilter = {
    every?: UserLessonProgressWhereInput
    some?: UserLessonProgressWhereInput
    none?: UserLessonProgressWhereInput
  }

  export type CategoryStatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserLearningProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserModuleProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserLessonProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type QuizListRelationFilter = {
    every?: QuizWhereInput
    some?: QuizWhereInput
    none?: QuizWhereInput
  }

  export type QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    categoryId?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    categoryId?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    categoryId?: SortOrder
  }

  export type QuizScalarRelationFilter = {
    is?: QuizWhereInput
    isNot?: QuizWhereInput
  }

  export type OptionListRelationFilter = {
    every?: OptionWhereInput
    some?: OptionWhereInput
    none?: OptionWhereInput
  }

  export type OptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    quizId?: SortOrder
    difficulty?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    quizId?: SortOrder
    difficulty?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    quizId?: SortOrder
    difficulty?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type OptionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    isCorret?: SortOrder
    questionId?: SortOrder
  }

  export type OptionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    isCorret?: SortOrder
    questionId?: SortOrder
  }

  export type OptionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    isCorret?: SortOrder
    questionId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategoryStatUserIdCategoryIdCompoundUniqueInput = {
    userId: string
    categoryId: string
  }

  export type CategoryStatCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    attempts?: SortOrder
    completed?: SortOrder
    averageScore?: SortOrder
    lastAttempt?: SortOrder
  }

  export type CategoryStatAvgOrderByAggregateInput = {
    attempts?: SortOrder
    completed?: SortOrder
    averageScore?: SortOrder
  }

  export type CategoryStatMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    attempts?: SortOrder
    completed?: SortOrder
    averageScore?: SortOrder
    lastAttempt?: SortOrder
  }

  export type CategoryStatMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    attempts?: SortOrder
    completed?: SortOrder
    averageScore?: SortOrder
    lastAttempt?: SortOrder
  }

  export type CategoryStatSumOrderByAggregateInput = {
    attempts?: SortOrder
    completed?: SortOrder
    averageScore?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type ModuleListRelationFilter = {
    every?: ModuleWhereInput
    some?: ModuleWhereInput
    none?: ModuleWhereInput
  }

  export type ModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LearningPathCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    order?: SortOrder
  }

  export type LearningPathAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type LearningPathMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    order?: SortOrder
  }

  export type LearningPathMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    order?: SortOrder
  }

  export type LearningPathSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type LearningPathScalarRelationFilter = {
    is?: LearningPathWhereInput
    isNot?: LearningPathWhereInput
  }

  export type LessonListRelationFilter = {
    every?: LessonWhereInput
    some?: LessonWhereInput
    none?: LessonWhereInput
  }

  export type LessonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    learningPathId?: SortOrder
  }

  export type ModuleAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    learningPathId?: SortOrder
  }

  export type ModuleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    learningPathId?: SortOrder
  }

  export type ModuleSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ModuleScalarRelationFilter = {
    is?: ModuleWhereInput
    isNot?: ModuleWhereInput
  }

  export type LessonCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    videoUrl?: SortOrder
    codeExample?: SortOrder
    resources?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    moduleId?: SortOrder
  }

  export type LessonAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type LessonMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    videoUrl?: SortOrder
    codeExample?: SortOrder
    resources?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    moduleId?: SortOrder
  }

  export type LessonMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    videoUrl?: SortOrder
    codeExample?: SortOrder
    resources?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    moduleId?: SortOrder
  }

  export type LessonSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserLearningProgressUserIdLearningPathIdCompoundUniqueInput = {
    userId: string
    learningPathId: string
  }

  export type UserLearningProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    learningPathId?: SortOrder
    startedAt?: SortOrder
    lastAccessedAt?: SortOrder
    completedAt?: SortOrder
    progressPercent?: SortOrder
  }

  export type UserLearningProgressAvgOrderByAggregateInput = {
    progressPercent?: SortOrder
  }

  export type UserLearningProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    learningPathId?: SortOrder
    startedAt?: SortOrder
    lastAccessedAt?: SortOrder
    completedAt?: SortOrder
    progressPercent?: SortOrder
  }

  export type UserLearningProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    learningPathId?: SortOrder
    startedAt?: SortOrder
    lastAccessedAt?: SortOrder
    completedAt?: SortOrder
    progressPercent?: SortOrder
  }

  export type UserLearningProgressSumOrderByAggregateInput = {
    progressPercent?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserModuleProgressUserIdModuleIdCompoundUniqueInput = {
    userId: string
    moduleId: string
  }

  export type UserModuleProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    progressPercent?: SortOrder
  }

  export type UserModuleProgressAvgOrderByAggregateInput = {
    progressPercent?: SortOrder
  }

  export type UserModuleProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    progressPercent?: SortOrder
  }

  export type UserModuleProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moduleId?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    progressPercent?: SortOrder
  }

  export type UserModuleProgressSumOrderByAggregateInput = {
    progressPercent?: SortOrder
  }

  export type LessonScalarRelationFilter = {
    is?: LessonWhereInput
    isNot?: LessonWhereInput
  }

  export type UserLessonProgressUserIdLessonIdCompoundUniqueInput = {
    userId: string
    lessonId: string
  }

  export type UserLessonProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    timeSpent?: SortOrder
  }

  export type UserLessonProgressAvgOrderByAggregateInput = {
    timeSpent?: SortOrder
  }

  export type UserLessonProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    timeSpent?: SortOrder
  }

  export type UserLessonProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    timeSpent?: SortOrder
  }

  export type UserLessonProgressSumOrderByAggregateInput = {
    timeSpent?: SortOrder
  }

  export type DocumentationSectionListRelationFilter = {
    every?: DocumentationSectionWhereInput
    some?: DocumentationSectionWhereInput
    none?: DocumentationSectionWhereInput
  }

  export type DocumentationSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentationCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    order?: SortOrder
  }

  export type DocumentationCategoryAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type DocumentationCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    order?: SortOrder
  }

  export type DocumentationCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    order?: SortOrder
  }

  export type DocumentationCategorySumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type DocumentationCategoryScalarRelationFilter = {
    is?: DocumentationCategoryWhereInput
    isNot?: DocumentationCategoryWhereInput
  }

  export type DocumentationSectionCategoryIdSlugCompoundUniqueInput = {
    categoryId: string
    slug: string
  }

  export type DocumentationSectionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    categoryId?: SortOrder
    order?: SortOrder
  }

  export type DocumentationSectionAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type DocumentationSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    categoryId?: SortOrder
    order?: SortOrder
  }

  export type DocumentationSectionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    categoryId?: SortOrder
    order?: SortOrder
  }

  export type DocumentationSectionSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CodeExampleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    code?: SortOrder
    language?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CodeExampleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    code?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CodeExampleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    code?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryStatCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryStatCreateWithoutUserInput, CategoryStatUncheckedCreateWithoutUserInput> | CategoryStatCreateWithoutUserInput[] | CategoryStatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryStatCreateOrConnectWithoutUserInput | CategoryStatCreateOrConnectWithoutUserInput[]
    createMany?: CategoryStatCreateManyUserInputEnvelope
    connect?: CategoryStatWhereUniqueInput | CategoryStatWhereUniqueInput[]
  }

  export type UserLearningProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLearningProgressCreateWithoutUserInput, UserLearningProgressUncheckedCreateWithoutUserInput> | UserLearningProgressCreateWithoutUserInput[] | UserLearningProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLearningProgressCreateOrConnectWithoutUserInput | UserLearningProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserLearningProgressCreateManyUserInputEnvelope
    connect?: UserLearningProgressWhereUniqueInput | UserLearningProgressWhereUniqueInput[]
  }

  export type UserModuleProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserModuleProgressCreateWithoutUserInput, UserModuleProgressUncheckedCreateWithoutUserInput> | UserModuleProgressCreateWithoutUserInput[] | UserModuleProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserModuleProgressCreateOrConnectWithoutUserInput | UserModuleProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserModuleProgressCreateManyUserInputEnvelope
    connect?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
  }

  export type UserLessonProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLessonProgressCreateWithoutUserInput, UserLessonProgressUncheckedCreateWithoutUserInput> | UserLessonProgressCreateWithoutUserInput[] | UserLessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLessonProgressCreateOrConnectWithoutUserInput | UserLessonProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserLessonProgressCreateManyUserInputEnvelope
    connect?: UserLessonProgressWhereUniqueInput | UserLessonProgressWhereUniqueInput[]
  }

  export type CategoryStatUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryStatCreateWithoutUserInput, CategoryStatUncheckedCreateWithoutUserInput> | CategoryStatCreateWithoutUserInput[] | CategoryStatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryStatCreateOrConnectWithoutUserInput | CategoryStatCreateOrConnectWithoutUserInput[]
    createMany?: CategoryStatCreateManyUserInputEnvelope
    connect?: CategoryStatWhereUniqueInput | CategoryStatWhereUniqueInput[]
  }

  export type UserLearningProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLearningProgressCreateWithoutUserInput, UserLearningProgressUncheckedCreateWithoutUserInput> | UserLearningProgressCreateWithoutUserInput[] | UserLearningProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLearningProgressCreateOrConnectWithoutUserInput | UserLearningProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserLearningProgressCreateManyUserInputEnvelope
    connect?: UserLearningProgressWhereUniqueInput | UserLearningProgressWhereUniqueInput[]
  }

  export type UserModuleProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserModuleProgressCreateWithoutUserInput, UserModuleProgressUncheckedCreateWithoutUserInput> | UserModuleProgressCreateWithoutUserInput[] | UserModuleProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserModuleProgressCreateOrConnectWithoutUserInput | UserModuleProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserModuleProgressCreateManyUserInputEnvelope
    connect?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
  }

  export type UserLessonProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLessonProgressCreateWithoutUserInput, UserLessonProgressUncheckedCreateWithoutUserInput> | UserLessonProgressCreateWithoutUserInput[] | UserLessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLessonProgressCreateOrConnectWithoutUserInput | UserLessonProgressCreateOrConnectWithoutUserInput[]
    createMany?: UserLessonProgressCreateManyUserInputEnvelope
    connect?: UserLessonProgressWhereUniqueInput | UserLessonProgressWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CategoryStatUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryStatCreateWithoutUserInput, CategoryStatUncheckedCreateWithoutUserInput> | CategoryStatCreateWithoutUserInput[] | CategoryStatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryStatCreateOrConnectWithoutUserInput | CategoryStatCreateOrConnectWithoutUserInput[]
    upsert?: CategoryStatUpsertWithWhereUniqueWithoutUserInput | CategoryStatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryStatCreateManyUserInputEnvelope
    set?: CategoryStatWhereUniqueInput | CategoryStatWhereUniqueInput[]
    disconnect?: CategoryStatWhereUniqueInput | CategoryStatWhereUniqueInput[]
    delete?: CategoryStatWhereUniqueInput | CategoryStatWhereUniqueInput[]
    connect?: CategoryStatWhereUniqueInput | CategoryStatWhereUniqueInput[]
    update?: CategoryStatUpdateWithWhereUniqueWithoutUserInput | CategoryStatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryStatUpdateManyWithWhereWithoutUserInput | CategoryStatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryStatScalarWhereInput | CategoryStatScalarWhereInput[]
  }

  export type UserLearningProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLearningProgressCreateWithoutUserInput, UserLearningProgressUncheckedCreateWithoutUserInput> | UserLearningProgressCreateWithoutUserInput[] | UserLearningProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLearningProgressCreateOrConnectWithoutUserInput | UserLearningProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserLearningProgressUpsertWithWhereUniqueWithoutUserInput | UserLearningProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLearningProgressCreateManyUserInputEnvelope
    set?: UserLearningProgressWhereUniqueInput | UserLearningProgressWhereUniqueInput[]
    disconnect?: UserLearningProgressWhereUniqueInput | UserLearningProgressWhereUniqueInput[]
    delete?: UserLearningProgressWhereUniqueInput | UserLearningProgressWhereUniqueInput[]
    connect?: UserLearningProgressWhereUniqueInput | UserLearningProgressWhereUniqueInput[]
    update?: UserLearningProgressUpdateWithWhereUniqueWithoutUserInput | UserLearningProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLearningProgressUpdateManyWithWhereWithoutUserInput | UserLearningProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLearningProgressScalarWhereInput | UserLearningProgressScalarWhereInput[]
  }

  export type UserModuleProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserModuleProgressCreateWithoutUserInput, UserModuleProgressUncheckedCreateWithoutUserInput> | UserModuleProgressCreateWithoutUserInput[] | UserModuleProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserModuleProgressCreateOrConnectWithoutUserInput | UserModuleProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserModuleProgressUpsertWithWhereUniqueWithoutUserInput | UserModuleProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserModuleProgressCreateManyUserInputEnvelope
    set?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    disconnect?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    delete?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    connect?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    update?: UserModuleProgressUpdateWithWhereUniqueWithoutUserInput | UserModuleProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserModuleProgressUpdateManyWithWhereWithoutUserInput | UserModuleProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserModuleProgressScalarWhereInput | UserModuleProgressScalarWhereInput[]
  }

  export type UserLessonProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLessonProgressCreateWithoutUserInput, UserLessonProgressUncheckedCreateWithoutUserInput> | UserLessonProgressCreateWithoutUserInput[] | UserLessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLessonProgressCreateOrConnectWithoutUserInput | UserLessonProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserLessonProgressUpsertWithWhereUniqueWithoutUserInput | UserLessonProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLessonProgressCreateManyUserInputEnvelope
    set?: UserLessonProgressWhereUniqueInput | UserLessonProgressWhereUniqueInput[]
    disconnect?: UserLessonProgressWhereUniqueInput | UserLessonProgressWhereUniqueInput[]
    delete?: UserLessonProgressWhereUniqueInput | UserLessonProgressWhereUniqueInput[]
    connect?: UserLessonProgressWhereUniqueInput | UserLessonProgressWhereUniqueInput[]
    update?: UserLessonProgressUpdateWithWhereUniqueWithoutUserInput | UserLessonProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLessonProgressUpdateManyWithWhereWithoutUserInput | UserLessonProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLessonProgressScalarWhereInput | UserLessonProgressScalarWhereInput[]
  }

  export type CategoryStatUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryStatCreateWithoutUserInput, CategoryStatUncheckedCreateWithoutUserInput> | CategoryStatCreateWithoutUserInput[] | CategoryStatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryStatCreateOrConnectWithoutUserInput | CategoryStatCreateOrConnectWithoutUserInput[]
    upsert?: CategoryStatUpsertWithWhereUniqueWithoutUserInput | CategoryStatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryStatCreateManyUserInputEnvelope
    set?: CategoryStatWhereUniqueInput | CategoryStatWhereUniqueInput[]
    disconnect?: CategoryStatWhereUniqueInput | CategoryStatWhereUniqueInput[]
    delete?: CategoryStatWhereUniqueInput | CategoryStatWhereUniqueInput[]
    connect?: CategoryStatWhereUniqueInput | CategoryStatWhereUniqueInput[]
    update?: CategoryStatUpdateWithWhereUniqueWithoutUserInput | CategoryStatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryStatUpdateManyWithWhereWithoutUserInput | CategoryStatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryStatScalarWhereInput | CategoryStatScalarWhereInput[]
  }

  export type UserLearningProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLearningProgressCreateWithoutUserInput, UserLearningProgressUncheckedCreateWithoutUserInput> | UserLearningProgressCreateWithoutUserInput[] | UserLearningProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLearningProgressCreateOrConnectWithoutUserInput | UserLearningProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserLearningProgressUpsertWithWhereUniqueWithoutUserInput | UserLearningProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLearningProgressCreateManyUserInputEnvelope
    set?: UserLearningProgressWhereUniqueInput | UserLearningProgressWhereUniqueInput[]
    disconnect?: UserLearningProgressWhereUniqueInput | UserLearningProgressWhereUniqueInput[]
    delete?: UserLearningProgressWhereUniqueInput | UserLearningProgressWhereUniqueInput[]
    connect?: UserLearningProgressWhereUniqueInput | UserLearningProgressWhereUniqueInput[]
    update?: UserLearningProgressUpdateWithWhereUniqueWithoutUserInput | UserLearningProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLearningProgressUpdateManyWithWhereWithoutUserInput | UserLearningProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLearningProgressScalarWhereInput | UserLearningProgressScalarWhereInput[]
  }

  export type UserModuleProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserModuleProgressCreateWithoutUserInput, UserModuleProgressUncheckedCreateWithoutUserInput> | UserModuleProgressCreateWithoutUserInput[] | UserModuleProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserModuleProgressCreateOrConnectWithoutUserInput | UserModuleProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserModuleProgressUpsertWithWhereUniqueWithoutUserInput | UserModuleProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserModuleProgressCreateManyUserInputEnvelope
    set?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    disconnect?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    delete?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    connect?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    update?: UserModuleProgressUpdateWithWhereUniqueWithoutUserInput | UserModuleProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserModuleProgressUpdateManyWithWhereWithoutUserInput | UserModuleProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserModuleProgressScalarWhereInput | UserModuleProgressScalarWhereInput[]
  }

  export type UserLessonProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLessonProgressCreateWithoutUserInput, UserLessonProgressUncheckedCreateWithoutUserInput> | UserLessonProgressCreateWithoutUserInput[] | UserLessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLessonProgressCreateOrConnectWithoutUserInput | UserLessonProgressCreateOrConnectWithoutUserInput[]
    upsert?: UserLessonProgressUpsertWithWhereUniqueWithoutUserInput | UserLessonProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLessonProgressCreateManyUserInputEnvelope
    set?: UserLessonProgressWhereUniqueInput | UserLessonProgressWhereUniqueInput[]
    disconnect?: UserLessonProgressWhereUniqueInput | UserLessonProgressWhereUniqueInput[]
    delete?: UserLessonProgressWhereUniqueInput | UserLessonProgressWhereUniqueInput[]
    connect?: UserLessonProgressWhereUniqueInput | UserLessonProgressWhereUniqueInput[]
    update?: UserLessonProgressUpdateWithWhereUniqueWithoutUserInput | UserLessonProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLessonProgressUpdateManyWithWhereWithoutUserInput | UserLessonProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLessonProgressScalarWhereInput | UserLessonProgressScalarWhereInput[]
  }

  export type QuizCreateNestedManyWithoutCategoryInput = {
    create?: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput> | QuizCreateWithoutCategoryInput[] | QuizUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCategoryInput | QuizCreateOrConnectWithoutCategoryInput[]
    createMany?: QuizCreateManyCategoryInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type CategoryStatCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoryStatCreateWithoutCategoryInput, CategoryStatUncheckedCreateWithoutCategoryInput> | CategoryStatCreateWithoutCategoryInput[] | CategoryStatUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryStatCreateOrConnectWithoutCategoryInput | CategoryStatCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoryStatCreateManyCategoryInputEnvelope
    connect?: CategoryStatWhereUniqueInput | CategoryStatWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput> | QuizCreateWithoutCategoryInput[] | QuizUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCategoryInput | QuizCreateOrConnectWithoutCategoryInput[]
    createMany?: QuizCreateManyCategoryInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type CategoryStatUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoryStatCreateWithoutCategoryInput, CategoryStatUncheckedCreateWithoutCategoryInput> | CategoryStatCreateWithoutCategoryInput[] | CategoryStatUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryStatCreateOrConnectWithoutCategoryInput | CategoryStatCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoryStatCreateManyCategoryInputEnvelope
    connect?: CategoryStatWhereUniqueInput | CategoryStatWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type QuizUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput> | QuizCreateWithoutCategoryInput[] | QuizUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCategoryInput | QuizCreateOrConnectWithoutCategoryInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutCategoryInput | QuizUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: QuizCreateManyCategoryInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutCategoryInput | QuizUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutCategoryInput | QuizUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type CategoryStatUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoryStatCreateWithoutCategoryInput, CategoryStatUncheckedCreateWithoutCategoryInput> | CategoryStatCreateWithoutCategoryInput[] | CategoryStatUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryStatCreateOrConnectWithoutCategoryInput | CategoryStatCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoryStatUpsertWithWhereUniqueWithoutCategoryInput | CategoryStatUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoryStatCreateManyCategoryInputEnvelope
    set?: CategoryStatWhereUniqueInput | CategoryStatWhereUniqueInput[]
    disconnect?: CategoryStatWhereUniqueInput | CategoryStatWhereUniqueInput[]
    delete?: CategoryStatWhereUniqueInput | CategoryStatWhereUniqueInput[]
    connect?: CategoryStatWhereUniqueInput | CategoryStatWhereUniqueInput[]
    update?: CategoryStatUpdateWithWhereUniqueWithoutCategoryInput | CategoryStatUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoryStatUpdateManyWithWhereWithoutCategoryInput | CategoryStatUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoryStatScalarWhereInput | CategoryStatScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput> | QuizCreateWithoutCategoryInput[] | QuizUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutCategoryInput | QuizCreateOrConnectWithoutCategoryInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutCategoryInput | QuizUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: QuizCreateManyCategoryInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutCategoryInput | QuizUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutCategoryInput | QuizUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type CategoryStatUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoryStatCreateWithoutCategoryInput, CategoryStatUncheckedCreateWithoutCategoryInput> | CategoryStatCreateWithoutCategoryInput[] | CategoryStatUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryStatCreateOrConnectWithoutCategoryInput | CategoryStatCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoryStatUpsertWithWhereUniqueWithoutCategoryInput | CategoryStatUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoryStatCreateManyCategoryInputEnvelope
    set?: CategoryStatWhereUniqueInput | CategoryStatWhereUniqueInput[]
    disconnect?: CategoryStatWhereUniqueInput | CategoryStatWhereUniqueInput[]
    delete?: CategoryStatWhereUniqueInput | CategoryStatWhereUniqueInput[]
    connect?: CategoryStatWhereUniqueInput | CategoryStatWhereUniqueInput[]
    update?: CategoryStatUpdateWithWhereUniqueWithoutCategoryInput | CategoryStatUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoryStatUpdateManyWithWhereWithoutCategoryInput | CategoryStatUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoryStatScalarWhereInput | CategoryStatScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<CategoryCreateWithoutQuizzesInput, CategoryUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutQuizzesInput
    connect?: CategoryWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutQuizzesNestedInput = {
    create?: XOR<CategoryCreateWithoutQuizzesInput, CategoryUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutQuizzesInput
    upsert?: CategoryUpsertWithoutQuizzesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutQuizzesInput, CategoryUpdateWithoutQuizzesInput>, CategoryUncheckedUpdateWithoutQuizzesInput>
  }

  export type QuestionUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuizInput | QuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuizInput | QuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuizInput | QuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuizInput | QuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuizInput | QuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuizInput | QuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuizCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionsInput
    connect?: QuizWhereUniqueInput
  }

  export type OptionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput> | OptionCreateWithoutQuestionInput[] | OptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuestionInput | OptionCreateOrConnectWithoutQuestionInput[]
    createMany?: OptionCreateManyQuestionInputEnvelope
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type OptionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput> | OptionCreateWithoutQuestionInput[] | OptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuestionInput | OptionCreateOrConnectWithoutQuestionInput[]
    createMany?: OptionCreateManyQuestionInputEnvelope
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
  }

  export type QuizUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionsInput
    upsert?: QuizUpsertWithoutQuestionsInput
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutQuestionsInput, QuizUpdateWithoutQuestionsInput>, QuizUncheckedUpdateWithoutQuestionsInput>
  }

  export type OptionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput> | OptionCreateWithoutQuestionInput[] | OptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuestionInput | OptionCreateOrConnectWithoutQuestionInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutQuestionInput | OptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: OptionCreateManyQuestionInputEnvelope
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutQuestionInput | OptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutQuestionInput | OptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type OptionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput> | OptionCreateWithoutQuestionInput[] | OptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: OptionCreateOrConnectWithoutQuestionInput | OptionCreateOrConnectWithoutQuestionInput[]
    upsert?: OptionUpsertWithWhereUniqueWithoutQuestionInput | OptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: OptionCreateManyQuestionInputEnvelope
    set?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    disconnect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    delete?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    connect?: OptionWhereUniqueInput | OptionWhereUniqueInput[]
    update?: OptionUpdateWithWhereUniqueWithoutQuestionInput | OptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: OptionUpdateManyWithWhereWithoutQuestionInput | OptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: OptionScalarWhereInput | OptionScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutOptionsInput = {
    create?: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutOptionsInput
    connect?: QuestionWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type QuestionUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutOptionsInput
    upsert?: QuestionUpsertWithoutOptionsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutOptionsInput, QuestionUpdateWithoutOptionsInput>, QuestionUncheckedUpdateWithoutOptionsInput>
  }

  export type UserCreateNestedOneWithoutCategoryStatsInput = {
    create?: XOR<UserCreateWithoutCategoryStatsInput, UserUncheckedCreateWithoutCategoryStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoryStatsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutCategoryStatsInput = {
    create?: XOR<CategoryCreateWithoutCategoryStatsInput, CategoryUncheckedCreateWithoutCategoryStatsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCategoryStatsInput
    connect?: CategoryWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutCategoryStatsNestedInput = {
    create?: XOR<UserCreateWithoutCategoryStatsInput, UserUncheckedCreateWithoutCategoryStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoryStatsInput
    upsert?: UserUpsertWithoutCategoryStatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCategoryStatsInput, UserUpdateWithoutCategoryStatsInput>, UserUncheckedUpdateWithoutCategoryStatsInput>
  }

  export type CategoryUpdateOneRequiredWithoutCategoryStatsNestedInput = {
    create?: XOR<CategoryCreateWithoutCategoryStatsInput, CategoryUncheckedCreateWithoutCategoryStatsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCategoryStatsInput
    upsert?: CategoryUpsertWithoutCategoryStatsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutCategoryStatsInput, CategoryUpdateWithoutCategoryStatsInput>, CategoryUncheckedUpdateWithoutCategoryStatsInput>
  }

  export type ModuleCreateNestedManyWithoutLearningPathInput = {
    create?: XOR<ModuleCreateWithoutLearningPathInput, ModuleUncheckedCreateWithoutLearningPathInput> | ModuleCreateWithoutLearningPathInput[] | ModuleUncheckedCreateWithoutLearningPathInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutLearningPathInput | ModuleCreateOrConnectWithoutLearningPathInput[]
    createMany?: ModuleCreateManyLearningPathInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type UserLearningProgressCreateNestedManyWithoutLearningPathInput = {
    create?: XOR<UserLearningProgressCreateWithoutLearningPathInput, UserLearningProgressUncheckedCreateWithoutLearningPathInput> | UserLearningProgressCreateWithoutLearningPathInput[] | UserLearningProgressUncheckedCreateWithoutLearningPathInput[]
    connectOrCreate?: UserLearningProgressCreateOrConnectWithoutLearningPathInput | UserLearningProgressCreateOrConnectWithoutLearningPathInput[]
    createMany?: UserLearningProgressCreateManyLearningPathInputEnvelope
    connect?: UserLearningProgressWhereUniqueInput | UserLearningProgressWhereUniqueInput[]
  }

  export type ModuleUncheckedCreateNestedManyWithoutLearningPathInput = {
    create?: XOR<ModuleCreateWithoutLearningPathInput, ModuleUncheckedCreateWithoutLearningPathInput> | ModuleCreateWithoutLearningPathInput[] | ModuleUncheckedCreateWithoutLearningPathInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutLearningPathInput | ModuleCreateOrConnectWithoutLearningPathInput[]
    createMany?: ModuleCreateManyLearningPathInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type UserLearningProgressUncheckedCreateNestedManyWithoutLearningPathInput = {
    create?: XOR<UserLearningProgressCreateWithoutLearningPathInput, UserLearningProgressUncheckedCreateWithoutLearningPathInput> | UserLearningProgressCreateWithoutLearningPathInput[] | UserLearningProgressUncheckedCreateWithoutLearningPathInput[]
    connectOrCreate?: UserLearningProgressCreateOrConnectWithoutLearningPathInput | UserLearningProgressCreateOrConnectWithoutLearningPathInput[]
    createMany?: UserLearningProgressCreateManyLearningPathInputEnvelope
    connect?: UserLearningProgressWhereUniqueInput | UserLearningProgressWhereUniqueInput[]
  }

  export type ModuleUpdateManyWithoutLearningPathNestedInput = {
    create?: XOR<ModuleCreateWithoutLearningPathInput, ModuleUncheckedCreateWithoutLearningPathInput> | ModuleCreateWithoutLearningPathInput[] | ModuleUncheckedCreateWithoutLearningPathInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutLearningPathInput | ModuleCreateOrConnectWithoutLearningPathInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutLearningPathInput | ModuleUpsertWithWhereUniqueWithoutLearningPathInput[]
    createMany?: ModuleCreateManyLearningPathInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutLearningPathInput | ModuleUpdateWithWhereUniqueWithoutLearningPathInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutLearningPathInput | ModuleUpdateManyWithWhereWithoutLearningPathInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type UserLearningProgressUpdateManyWithoutLearningPathNestedInput = {
    create?: XOR<UserLearningProgressCreateWithoutLearningPathInput, UserLearningProgressUncheckedCreateWithoutLearningPathInput> | UserLearningProgressCreateWithoutLearningPathInput[] | UserLearningProgressUncheckedCreateWithoutLearningPathInput[]
    connectOrCreate?: UserLearningProgressCreateOrConnectWithoutLearningPathInput | UserLearningProgressCreateOrConnectWithoutLearningPathInput[]
    upsert?: UserLearningProgressUpsertWithWhereUniqueWithoutLearningPathInput | UserLearningProgressUpsertWithWhereUniqueWithoutLearningPathInput[]
    createMany?: UserLearningProgressCreateManyLearningPathInputEnvelope
    set?: UserLearningProgressWhereUniqueInput | UserLearningProgressWhereUniqueInput[]
    disconnect?: UserLearningProgressWhereUniqueInput | UserLearningProgressWhereUniqueInput[]
    delete?: UserLearningProgressWhereUniqueInput | UserLearningProgressWhereUniqueInput[]
    connect?: UserLearningProgressWhereUniqueInput | UserLearningProgressWhereUniqueInput[]
    update?: UserLearningProgressUpdateWithWhereUniqueWithoutLearningPathInput | UserLearningProgressUpdateWithWhereUniqueWithoutLearningPathInput[]
    updateMany?: UserLearningProgressUpdateManyWithWhereWithoutLearningPathInput | UserLearningProgressUpdateManyWithWhereWithoutLearningPathInput[]
    deleteMany?: UserLearningProgressScalarWhereInput | UserLearningProgressScalarWhereInput[]
  }

  export type ModuleUncheckedUpdateManyWithoutLearningPathNestedInput = {
    create?: XOR<ModuleCreateWithoutLearningPathInput, ModuleUncheckedCreateWithoutLearningPathInput> | ModuleCreateWithoutLearningPathInput[] | ModuleUncheckedCreateWithoutLearningPathInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutLearningPathInput | ModuleCreateOrConnectWithoutLearningPathInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutLearningPathInput | ModuleUpsertWithWhereUniqueWithoutLearningPathInput[]
    createMany?: ModuleCreateManyLearningPathInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutLearningPathInput | ModuleUpdateWithWhereUniqueWithoutLearningPathInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutLearningPathInput | ModuleUpdateManyWithWhereWithoutLearningPathInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type UserLearningProgressUncheckedUpdateManyWithoutLearningPathNestedInput = {
    create?: XOR<UserLearningProgressCreateWithoutLearningPathInput, UserLearningProgressUncheckedCreateWithoutLearningPathInput> | UserLearningProgressCreateWithoutLearningPathInput[] | UserLearningProgressUncheckedCreateWithoutLearningPathInput[]
    connectOrCreate?: UserLearningProgressCreateOrConnectWithoutLearningPathInput | UserLearningProgressCreateOrConnectWithoutLearningPathInput[]
    upsert?: UserLearningProgressUpsertWithWhereUniqueWithoutLearningPathInput | UserLearningProgressUpsertWithWhereUniqueWithoutLearningPathInput[]
    createMany?: UserLearningProgressCreateManyLearningPathInputEnvelope
    set?: UserLearningProgressWhereUniqueInput | UserLearningProgressWhereUniqueInput[]
    disconnect?: UserLearningProgressWhereUniqueInput | UserLearningProgressWhereUniqueInput[]
    delete?: UserLearningProgressWhereUniqueInput | UserLearningProgressWhereUniqueInput[]
    connect?: UserLearningProgressWhereUniqueInput | UserLearningProgressWhereUniqueInput[]
    update?: UserLearningProgressUpdateWithWhereUniqueWithoutLearningPathInput | UserLearningProgressUpdateWithWhereUniqueWithoutLearningPathInput[]
    updateMany?: UserLearningProgressUpdateManyWithWhereWithoutLearningPathInput | UserLearningProgressUpdateManyWithWhereWithoutLearningPathInput[]
    deleteMany?: UserLearningProgressScalarWhereInput | UserLearningProgressScalarWhereInput[]
  }

  export type LearningPathCreateNestedOneWithoutModulesInput = {
    create?: XOR<LearningPathCreateWithoutModulesInput, LearningPathUncheckedCreateWithoutModulesInput>
    connectOrCreate?: LearningPathCreateOrConnectWithoutModulesInput
    connect?: LearningPathWhereUniqueInput
  }

  export type LessonCreateNestedManyWithoutModuleInput = {
    create?: XOR<LessonCreateWithoutModuleInput, LessonUncheckedCreateWithoutModuleInput> | LessonCreateWithoutModuleInput[] | LessonUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutModuleInput | LessonCreateOrConnectWithoutModuleInput[]
    createMany?: LessonCreateManyModuleInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type UserModuleProgressCreateNestedManyWithoutModuleInput = {
    create?: XOR<UserModuleProgressCreateWithoutModuleInput, UserModuleProgressUncheckedCreateWithoutModuleInput> | UserModuleProgressCreateWithoutModuleInput[] | UserModuleProgressUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: UserModuleProgressCreateOrConnectWithoutModuleInput | UserModuleProgressCreateOrConnectWithoutModuleInput[]
    createMany?: UserModuleProgressCreateManyModuleInputEnvelope
    connect?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
  }

  export type LessonUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<LessonCreateWithoutModuleInput, LessonUncheckedCreateWithoutModuleInput> | LessonCreateWithoutModuleInput[] | LessonUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutModuleInput | LessonCreateOrConnectWithoutModuleInput[]
    createMany?: LessonCreateManyModuleInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type UserModuleProgressUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<UserModuleProgressCreateWithoutModuleInput, UserModuleProgressUncheckedCreateWithoutModuleInput> | UserModuleProgressCreateWithoutModuleInput[] | UserModuleProgressUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: UserModuleProgressCreateOrConnectWithoutModuleInput | UserModuleProgressCreateOrConnectWithoutModuleInput[]
    createMany?: UserModuleProgressCreateManyModuleInputEnvelope
    connect?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
  }

  export type LearningPathUpdateOneRequiredWithoutModulesNestedInput = {
    create?: XOR<LearningPathCreateWithoutModulesInput, LearningPathUncheckedCreateWithoutModulesInput>
    connectOrCreate?: LearningPathCreateOrConnectWithoutModulesInput
    upsert?: LearningPathUpsertWithoutModulesInput
    connect?: LearningPathWhereUniqueInput
    update?: XOR<XOR<LearningPathUpdateToOneWithWhereWithoutModulesInput, LearningPathUpdateWithoutModulesInput>, LearningPathUncheckedUpdateWithoutModulesInput>
  }

  export type LessonUpdateManyWithoutModuleNestedInput = {
    create?: XOR<LessonCreateWithoutModuleInput, LessonUncheckedCreateWithoutModuleInput> | LessonCreateWithoutModuleInput[] | LessonUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutModuleInput | LessonCreateOrConnectWithoutModuleInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutModuleInput | LessonUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: LessonCreateManyModuleInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutModuleInput | LessonUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutModuleInput | LessonUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type UserModuleProgressUpdateManyWithoutModuleNestedInput = {
    create?: XOR<UserModuleProgressCreateWithoutModuleInput, UserModuleProgressUncheckedCreateWithoutModuleInput> | UserModuleProgressCreateWithoutModuleInput[] | UserModuleProgressUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: UserModuleProgressCreateOrConnectWithoutModuleInput | UserModuleProgressCreateOrConnectWithoutModuleInput[]
    upsert?: UserModuleProgressUpsertWithWhereUniqueWithoutModuleInput | UserModuleProgressUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: UserModuleProgressCreateManyModuleInputEnvelope
    set?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    disconnect?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    delete?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    connect?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    update?: UserModuleProgressUpdateWithWhereUniqueWithoutModuleInput | UserModuleProgressUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: UserModuleProgressUpdateManyWithWhereWithoutModuleInput | UserModuleProgressUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: UserModuleProgressScalarWhereInput | UserModuleProgressScalarWhereInput[]
  }

  export type LessonUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<LessonCreateWithoutModuleInput, LessonUncheckedCreateWithoutModuleInput> | LessonCreateWithoutModuleInput[] | LessonUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutModuleInput | LessonCreateOrConnectWithoutModuleInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutModuleInput | LessonUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: LessonCreateManyModuleInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutModuleInput | LessonUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutModuleInput | LessonUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type UserModuleProgressUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<UserModuleProgressCreateWithoutModuleInput, UserModuleProgressUncheckedCreateWithoutModuleInput> | UserModuleProgressCreateWithoutModuleInput[] | UserModuleProgressUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: UserModuleProgressCreateOrConnectWithoutModuleInput | UserModuleProgressCreateOrConnectWithoutModuleInput[]
    upsert?: UserModuleProgressUpsertWithWhereUniqueWithoutModuleInput | UserModuleProgressUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: UserModuleProgressCreateManyModuleInputEnvelope
    set?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    disconnect?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    delete?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    connect?: UserModuleProgressWhereUniqueInput | UserModuleProgressWhereUniqueInput[]
    update?: UserModuleProgressUpdateWithWhereUniqueWithoutModuleInput | UserModuleProgressUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: UserModuleProgressUpdateManyWithWhereWithoutModuleInput | UserModuleProgressUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: UserModuleProgressScalarWhereInput | UserModuleProgressScalarWhereInput[]
  }

  export type ModuleCreateNestedOneWithoutLessonsInput = {
    create?: XOR<ModuleCreateWithoutLessonsInput, ModuleUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutLessonsInput
    connect?: ModuleWhereUniqueInput
  }

  export type UserLessonProgressCreateNestedManyWithoutLessonInput = {
    create?: XOR<UserLessonProgressCreateWithoutLessonInput, UserLessonProgressUncheckedCreateWithoutLessonInput> | UserLessonProgressCreateWithoutLessonInput[] | UserLessonProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: UserLessonProgressCreateOrConnectWithoutLessonInput | UserLessonProgressCreateOrConnectWithoutLessonInput[]
    createMany?: UserLessonProgressCreateManyLessonInputEnvelope
    connect?: UserLessonProgressWhereUniqueInput | UserLessonProgressWhereUniqueInput[]
  }

  export type UserLessonProgressUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<UserLessonProgressCreateWithoutLessonInput, UserLessonProgressUncheckedCreateWithoutLessonInput> | UserLessonProgressCreateWithoutLessonInput[] | UserLessonProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: UserLessonProgressCreateOrConnectWithoutLessonInput | UserLessonProgressCreateOrConnectWithoutLessonInput[]
    createMany?: UserLessonProgressCreateManyLessonInputEnvelope
    connect?: UserLessonProgressWhereUniqueInput | UserLessonProgressWhereUniqueInput[]
  }

  export type ModuleUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: XOR<ModuleCreateWithoutLessonsInput, ModuleUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutLessonsInput
    upsert?: ModuleUpsertWithoutLessonsInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutLessonsInput, ModuleUpdateWithoutLessonsInput>, ModuleUncheckedUpdateWithoutLessonsInput>
  }

  export type UserLessonProgressUpdateManyWithoutLessonNestedInput = {
    create?: XOR<UserLessonProgressCreateWithoutLessonInput, UserLessonProgressUncheckedCreateWithoutLessonInput> | UserLessonProgressCreateWithoutLessonInput[] | UserLessonProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: UserLessonProgressCreateOrConnectWithoutLessonInput | UserLessonProgressCreateOrConnectWithoutLessonInput[]
    upsert?: UserLessonProgressUpsertWithWhereUniqueWithoutLessonInput | UserLessonProgressUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: UserLessonProgressCreateManyLessonInputEnvelope
    set?: UserLessonProgressWhereUniqueInput | UserLessonProgressWhereUniqueInput[]
    disconnect?: UserLessonProgressWhereUniqueInput | UserLessonProgressWhereUniqueInput[]
    delete?: UserLessonProgressWhereUniqueInput | UserLessonProgressWhereUniqueInput[]
    connect?: UserLessonProgressWhereUniqueInput | UserLessonProgressWhereUniqueInput[]
    update?: UserLessonProgressUpdateWithWhereUniqueWithoutLessonInput | UserLessonProgressUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: UserLessonProgressUpdateManyWithWhereWithoutLessonInput | UserLessonProgressUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: UserLessonProgressScalarWhereInput | UserLessonProgressScalarWhereInput[]
  }

  export type UserLessonProgressUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<UserLessonProgressCreateWithoutLessonInput, UserLessonProgressUncheckedCreateWithoutLessonInput> | UserLessonProgressCreateWithoutLessonInput[] | UserLessonProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: UserLessonProgressCreateOrConnectWithoutLessonInput | UserLessonProgressCreateOrConnectWithoutLessonInput[]
    upsert?: UserLessonProgressUpsertWithWhereUniqueWithoutLessonInput | UserLessonProgressUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: UserLessonProgressCreateManyLessonInputEnvelope
    set?: UserLessonProgressWhereUniqueInput | UserLessonProgressWhereUniqueInput[]
    disconnect?: UserLessonProgressWhereUniqueInput | UserLessonProgressWhereUniqueInput[]
    delete?: UserLessonProgressWhereUniqueInput | UserLessonProgressWhereUniqueInput[]
    connect?: UserLessonProgressWhereUniqueInput | UserLessonProgressWhereUniqueInput[]
    update?: UserLessonProgressUpdateWithWhereUniqueWithoutLessonInput | UserLessonProgressUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: UserLessonProgressUpdateManyWithWhereWithoutLessonInput | UserLessonProgressUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: UserLessonProgressScalarWhereInput | UserLessonProgressScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLearningProgressInput = {
    create?: XOR<UserCreateWithoutLearningProgressInput, UserUncheckedCreateWithoutLearningProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutLearningProgressInput
    connect?: UserWhereUniqueInput
  }

  export type LearningPathCreateNestedOneWithoutUserProgressInput = {
    create?: XOR<LearningPathCreateWithoutUserProgressInput, LearningPathUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: LearningPathCreateOrConnectWithoutUserProgressInput
    connect?: LearningPathWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutLearningProgressNestedInput = {
    create?: XOR<UserCreateWithoutLearningProgressInput, UserUncheckedCreateWithoutLearningProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutLearningProgressInput
    upsert?: UserUpsertWithoutLearningProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLearningProgressInput, UserUpdateWithoutLearningProgressInput>, UserUncheckedUpdateWithoutLearningProgressInput>
  }

  export type LearningPathUpdateOneRequiredWithoutUserProgressNestedInput = {
    create?: XOR<LearningPathCreateWithoutUserProgressInput, LearningPathUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: LearningPathCreateOrConnectWithoutUserProgressInput
    upsert?: LearningPathUpsertWithoutUserProgressInput
    connect?: LearningPathWhereUniqueInput
    update?: XOR<XOR<LearningPathUpdateToOneWithWhereWithoutUserProgressInput, LearningPathUpdateWithoutUserProgressInput>, LearningPathUncheckedUpdateWithoutUserProgressInput>
  }

  export type UserCreateNestedOneWithoutModuleProgressInput = {
    create?: XOR<UserCreateWithoutModuleProgressInput, UserUncheckedCreateWithoutModuleProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutModuleProgressInput
    connect?: UserWhereUniqueInput
  }

  export type ModuleCreateNestedOneWithoutUserProgressInput = {
    create?: XOR<ModuleCreateWithoutUserProgressInput, ModuleUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutUserProgressInput
    connect?: ModuleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutModuleProgressNestedInput = {
    create?: XOR<UserCreateWithoutModuleProgressInput, UserUncheckedCreateWithoutModuleProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutModuleProgressInput
    upsert?: UserUpsertWithoutModuleProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutModuleProgressInput, UserUpdateWithoutModuleProgressInput>, UserUncheckedUpdateWithoutModuleProgressInput>
  }

  export type ModuleUpdateOneRequiredWithoutUserProgressNestedInput = {
    create?: XOR<ModuleCreateWithoutUserProgressInput, ModuleUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutUserProgressInput
    upsert?: ModuleUpsertWithoutUserProgressInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutUserProgressInput, ModuleUpdateWithoutUserProgressInput>, ModuleUncheckedUpdateWithoutUserProgressInput>
  }

  export type UserCreateNestedOneWithoutLessonProgressInput = {
    create?: XOR<UserCreateWithoutLessonProgressInput, UserUncheckedCreateWithoutLessonProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutLessonProgressInput
    connect?: UserWhereUniqueInput
  }

  export type LessonCreateNestedOneWithoutUserProgressInput = {
    create?: XOR<LessonCreateWithoutUserProgressInput, LessonUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: LessonCreateOrConnectWithoutUserProgressInput
    connect?: LessonWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLessonProgressNestedInput = {
    create?: XOR<UserCreateWithoutLessonProgressInput, UserUncheckedCreateWithoutLessonProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutLessonProgressInput
    upsert?: UserUpsertWithoutLessonProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLessonProgressInput, UserUpdateWithoutLessonProgressInput>, UserUncheckedUpdateWithoutLessonProgressInput>
  }

  export type LessonUpdateOneRequiredWithoutUserProgressNestedInput = {
    create?: XOR<LessonCreateWithoutUserProgressInput, LessonUncheckedCreateWithoutUserProgressInput>
    connectOrCreate?: LessonCreateOrConnectWithoutUserProgressInput
    upsert?: LessonUpsertWithoutUserProgressInput
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutUserProgressInput, LessonUpdateWithoutUserProgressInput>, LessonUncheckedUpdateWithoutUserProgressInput>
  }

  export type DocumentationSectionCreateNestedManyWithoutCategoryInput = {
    create?: XOR<DocumentationSectionCreateWithoutCategoryInput, DocumentationSectionUncheckedCreateWithoutCategoryInput> | DocumentationSectionCreateWithoutCategoryInput[] | DocumentationSectionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DocumentationSectionCreateOrConnectWithoutCategoryInput | DocumentationSectionCreateOrConnectWithoutCategoryInput[]
    createMany?: DocumentationSectionCreateManyCategoryInputEnvelope
    connect?: DocumentationSectionWhereUniqueInput | DocumentationSectionWhereUniqueInput[]
  }

  export type DocumentationSectionUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<DocumentationSectionCreateWithoutCategoryInput, DocumentationSectionUncheckedCreateWithoutCategoryInput> | DocumentationSectionCreateWithoutCategoryInput[] | DocumentationSectionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DocumentationSectionCreateOrConnectWithoutCategoryInput | DocumentationSectionCreateOrConnectWithoutCategoryInput[]
    createMany?: DocumentationSectionCreateManyCategoryInputEnvelope
    connect?: DocumentationSectionWhereUniqueInput | DocumentationSectionWhereUniqueInput[]
  }

  export type DocumentationSectionUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<DocumentationSectionCreateWithoutCategoryInput, DocumentationSectionUncheckedCreateWithoutCategoryInput> | DocumentationSectionCreateWithoutCategoryInput[] | DocumentationSectionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DocumentationSectionCreateOrConnectWithoutCategoryInput | DocumentationSectionCreateOrConnectWithoutCategoryInput[]
    upsert?: DocumentationSectionUpsertWithWhereUniqueWithoutCategoryInput | DocumentationSectionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: DocumentationSectionCreateManyCategoryInputEnvelope
    set?: DocumentationSectionWhereUniqueInput | DocumentationSectionWhereUniqueInput[]
    disconnect?: DocumentationSectionWhereUniqueInput | DocumentationSectionWhereUniqueInput[]
    delete?: DocumentationSectionWhereUniqueInput | DocumentationSectionWhereUniqueInput[]
    connect?: DocumentationSectionWhereUniqueInput | DocumentationSectionWhereUniqueInput[]
    update?: DocumentationSectionUpdateWithWhereUniqueWithoutCategoryInput | DocumentationSectionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: DocumentationSectionUpdateManyWithWhereWithoutCategoryInput | DocumentationSectionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: DocumentationSectionScalarWhereInput | DocumentationSectionScalarWhereInput[]
  }

  export type DocumentationSectionUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<DocumentationSectionCreateWithoutCategoryInput, DocumentationSectionUncheckedCreateWithoutCategoryInput> | DocumentationSectionCreateWithoutCategoryInput[] | DocumentationSectionUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DocumentationSectionCreateOrConnectWithoutCategoryInput | DocumentationSectionCreateOrConnectWithoutCategoryInput[]
    upsert?: DocumentationSectionUpsertWithWhereUniqueWithoutCategoryInput | DocumentationSectionUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: DocumentationSectionCreateManyCategoryInputEnvelope
    set?: DocumentationSectionWhereUniqueInput | DocumentationSectionWhereUniqueInput[]
    disconnect?: DocumentationSectionWhereUniqueInput | DocumentationSectionWhereUniqueInput[]
    delete?: DocumentationSectionWhereUniqueInput | DocumentationSectionWhereUniqueInput[]
    connect?: DocumentationSectionWhereUniqueInput | DocumentationSectionWhereUniqueInput[]
    update?: DocumentationSectionUpdateWithWhereUniqueWithoutCategoryInput | DocumentationSectionUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: DocumentationSectionUpdateManyWithWhereWithoutCategoryInput | DocumentationSectionUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: DocumentationSectionScalarWhereInput | DocumentationSectionScalarWhereInput[]
  }

  export type DocumentationCategoryCreateNestedOneWithoutSectionsInput = {
    create?: XOR<DocumentationCategoryCreateWithoutSectionsInput, DocumentationCategoryUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: DocumentationCategoryCreateOrConnectWithoutSectionsInput
    connect?: DocumentationCategoryWhereUniqueInput
  }

  export type DocumentationCategoryUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<DocumentationCategoryCreateWithoutSectionsInput, DocumentationCategoryUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: DocumentationCategoryCreateOrConnectWithoutSectionsInput
    upsert?: DocumentationCategoryUpsertWithoutSectionsInput
    connect?: DocumentationCategoryWhereUniqueInput
    update?: XOR<XOR<DocumentationCategoryUpdateToOneWithWhereWithoutSectionsInput, DocumentationCategoryUpdateWithoutSectionsInput>, DocumentationCategoryUncheckedUpdateWithoutSectionsInput>
  }

  export type CodeExampleCreatetagsInput = {
    set: string[]
  }

  export type CodeExampleUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CategoryStatCreateWithoutUserInput = {
    id?: string
    attempts?: number
    completed?: number
    averageScore?: number | null
    lastAttempt?: Date | string | null
    category: CategoryCreateNestedOneWithoutCategoryStatsInput
  }

  export type CategoryStatUncheckedCreateWithoutUserInput = {
    id?: string
    categoryId: string
    attempts?: number
    completed?: number
    averageScore?: number | null
    lastAttempt?: Date | string | null
  }

  export type CategoryStatCreateOrConnectWithoutUserInput = {
    where: CategoryStatWhereUniqueInput
    create: XOR<CategoryStatCreateWithoutUserInput, CategoryStatUncheckedCreateWithoutUserInput>
  }

  export type CategoryStatCreateManyUserInputEnvelope = {
    data: CategoryStatCreateManyUserInput | CategoryStatCreateManyUserInput[]
  }

  export type UserLearningProgressCreateWithoutUserInput = {
    id?: string
    startedAt?: Date | string
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
    progressPercent?: number
    learningPath: LearningPathCreateNestedOneWithoutUserProgressInput
  }

  export type UserLearningProgressUncheckedCreateWithoutUserInput = {
    id?: string
    learningPathId: string
    startedAt?: Date | string
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
    progressPercent?: number
  }

  export type UserLearningProgressCreateOrConnectWithoutUserInput = {
    where: UserLearningProgressWhereUniqueInput
    create: XOR<UserLearningProgressCreateWithoutUserInput, UserLearningProgressUncheckedCreateWithoutUserInput>
  }

  export type UserLearningProgressCreateManyUserInputEnvelope = {
    data: UserLearningProgressCreateManyUserInput | UserLearningProgressCreateManyUserInput[]
  }

  export type UserModuleProgressCreateWithoutUserInput = {
    id?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    progressPercent?: number
    module: ModuleCreateNestedOneWithoutUserProgressInput
  }

  export type UserModuleProgressUncheckedCreateWithoutUserInput = {
    id?: string
    moduleId: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    progressPercent?: number
  }

  export type UserModuleProgressCreateOrConnectWithoutUserInput = {
    where: UserModuleProgressWhereUniqueInput
    create: XOR<UserModuleProgressCreateWithoutUserInput, UserModuleProgressUncheckedCreateWithoutUserInput>
  }

  export type UserModuleProgressCreateManyUserInputEnvelope = {
    data: UserModuleProgressCreateManyUserInput | UserModuleProgressCreateManyUserInput[]
  }

  export type UserLessonProgressCreateWithoutUserInput = {
    id?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    timeSpent?: number
    lesson: LessonCreateNestedOneWithoutUserProgressInput
  }

  export type UserLessonProgressUncheckedCreateWithoutUserInput = {
    id?: string
    lessonId: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    timeSpent?: number
  }

  export type UserLessonProgressCreateOrConnectWithoutUserInput = {
    where: UserLessonProgressWhereUniqueInput
    create: XOR<UserLessonProgressCreateWithoutUserInput, UserLessonProgressUncheckedCreateWithoutUserInput>
  }

  export type UserLessonProgressCreateManyUserInputEnvelope = {
    data: UserLessonProgressCreateManyUserInput | UserLessonProgressCreateManyUserInput[]
  }

  export type CategoryStatUpsertWithWhereUniqueWithoutUserInput = {
    where: CategoryStatWhereUniqueInput
    update: XOR<CategoryStatUpdateWithoutUserInput, CategoryStatUncheckedUpdateWithoutUserInput>
    create: XOR<CategoryStatCreateWithoutUserInput, CategoryStatUncheckedCreateWithoutUserInput>
  }

  export type CategoryStatUpdateWithWhereUniqueWithoutUserInput = {
    where: CategoryStatWhereUniqueInput
    data: XOR<CategoryStatUpdateWithoutUserInput, CategoryStatUncheckedUpdateWithoutUserInput>
  }

  export type CategoryStatUpdateManyWithWhereWithoutUserInput = {
    where: CategoryStatScalarWhereInput
    data: XOR<CategoryStatUpdateManyMutationInput, CategoryStatUncheckedUpdateManyWithoutUserInput>
  }

  export type CategoryStatScalarWhereInput = {
    AND?: CategoryStatScalarWhereInput | CategoryStatScalarWhereInput[]
    OR?: CategoryStatScalarWhereInput[]
    NOT?: CategoryStatScalarWhereInput | CategoryStatScalarWhereInput[]
    id?: StringFilter<"CategoryStat"> | string
    userId?: StringFilter<"CategoryStat"> | string
    categoryId?: StringFilter<"CategoryStat"> | string
    attempts?: IntFilter<"CategoryStat"> | number
    completed?: IntFilter<"CategoryStat"> | number
    averageScore?: FloatNullableFilter<"CategoryStat"> | number | null
    lastAttempt?: DateTimeNullableFilter<"CategoryStat"> | Date | string | null
  }

  export type UserLearningProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserLearningProgressWhereUniqueInput
    update: XOR<UserLearningProgressUpdateWithoutUserInput, UserLearningProgressUncheckedUpdateWithoutUserInput>
    create: XOR<UserLearningProgressCreateWithoutUserInput, UserLearningProgressUncheckedCreateWithoutUserInput>
  }

  export type UserLearningProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserLearningProgressWhereUniqueInput
    data: XOR<UserLearningProgressUpdateWithoutUserInput, UserLearningProgressUncheckedUpdateWithoutUserInput>
  }

  export type UserLearningProgressUpdateManyWithWhereWithoutUserInput = {
    where: UserLearningProgressScalarWhereInput
    data: XOR<UserLearningProgressUpdateManyMutationInput, UserLearningProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserLearningProgressScalarWhereInput = {
    AND?: UserLearningProgressScalarWhereInput | UserLearningProgressScalarWhereInput[]
    OR?: UserLearningProgressScalarWhereInput[]
    NOT?: UserLearningProgressScalarWhereInput | UserLearningProgressScalarWhereInput[]
    id?: StringFilter<"UserLearningProgress"> | string
    userId?: StringFilter<"UserLearningProgress"> | string
    learningPathId?: StringFilter<"UserLearningProgress"> | string
    startedAt?: DateTimeFilter<"UserLearningProgress"> | Date | string
    lastAccessedAt?: DateTimeFilter<"UserLearningProgress"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserLearningProgress"> | Date | string | null
    progressPercent?: IntFilter<"UserLearningProgress"> | number
  }

  export type UserModuleProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserModuleProgressWhereUniqueInput
    update: XOR<UserModuleProgressUpdateWithoutUserInput, UserModuleProgressUncheckedUpdateWithoutUserInput>
    create: XOR<UserModuleProgressCreateWithoutUserInput, UserModuleProgressUncheckedCreateWithoutUserInput>
  }

  export type UserModuleProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserModuleProgressWhereUniqueInput
    data: XOR<UserModuleProgressUpdateWithoutUserInput, UserModuleProgressUncheckedUpdateWithoutUserInput>
  }

  export type UserModuleProgressUpdateManyWithWhereWithoutUserInput = {
    where: UserModuleProgressScalarWhereInput
    data: XOR<UserModuleProgressUpdateManyMutationInput, UserModuleProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserModuleProgressScalarWhereInput = {
    AND?: UserModuleProgressScalarWhereInput | UserModuleProgressScalarWhereInput[]
    OR?: UserModuleProgressScalarWhereInput[]
    NOT?: UserModuleProgressScalarWhereInput | UserModuleProgressScalarWhereInput[]
    id?: StringFilter<"UserModuleProgress"> | string
    userId?: StringFilter<"UserModuleProgress"> | string
    moduleId?: StringFilter<"UserModuleProgress"> | string
    startedAt?: DateTimeFilter<"UserModuleProgress"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserModuleProgress"> | Date | string | null
    progressPercent?: IntFilter<"UserModuleProgress"> | number
  }

  export type UserLessonProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserLessonProgressWhereUniqueInput
    update: XOR<UserLessonProgressUpdateWithoutUserInput, UserLessonProgressUncheckedUpdateWithoutUserInput>
    create: XOR<UserLessonProgressCreateWithoutUserInput, UserLessonProgressUncheckedCreateWithoutUserInput>
  }

  export type UserLessonProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserLessonProgressWhereUniqueInput
    data: XOR<UserLessonProgressUpdateWithoutUserInput, UserLessonProgressUncheckedUpdateWithoutUserInput>
  }

  export type UserLessonProgressUpdateManyWithWhereWithoutUserInput = {
    where: UserLessonProgressScalarWhereInput
    data: XOR<UserLessonProgressUpdateManyMutationInput, UserLessonProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserLessonProgressScalarWhereInput = {
    AND?: UserLessonProgressScalarWhereInput | UserLessonProgressScalarWhereInput[]
    OR?: UserLessonProgressScalarWhereInput[]
    NOT?: UserLessonProgressScalarWhereInput | UserLessonProgressScalarWhereInput[]
    id?: StringFilter<"UserLessonProgress"> | string
    userId?: StringFilter<"UserLessonProgress"> | string
    lessonId?: StringFilter<"UserLessonProgress"> | string
    startedAt?: DateTimeFilter<"UserLessonProgress"> | Date | string
    completedAt?: DateTimeNullableFilter<"UserLessonProgress"> | Date | string | null
    timeSpent?: IntFilter<"UserLessonProgress"> | number
  }

  export type QuizCreateWithoutCategoryInput = {
    id?: string
    title: string
    description?: string | null
    image?: string | null
    questions?: QuestionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    description?: string | null
    image?: string | null
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutCategoryInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput>
  }

  export type QuizCreateManyCategoryInputEnvelope = {
    data: QuizCreateManyCategoryInput | QuizCreateManyCategoryInput[]
  }

  export type CategoryStatCreateWithoutCategoryInput = {
    id?: string
    attempts?: number
    completed?: number
    averageScore?: number | null
    lastAttempt?: Date | string | null
    user: UserCreateNestedOneWithoutCategoryStatsInput
  }

  export type CategoryStatUncheckedCreateWithoutCategoryInput = {
    id?: string
    userId: string
    attempts?: number
    completed?: number
    averageScore?: number | null
    lastAttempt?: Date | string | null
  }

  export type CategoryStatCreateOrConnectWithoutCategoryInput = {
    where: CategoryStatWhereUniqueInput
    create: XOR<CategoryStatCreateWithoutCategoryInput, CategoryStatUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryStatCreateManyCategoryInputEnvelope = {
    data: CategoryStatCreateManyCategoryInput | CategoryStatCreateManyCategoryInput[]
  }

  export type QuizUpsertWithWhereUniqueWithoutCategoryInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutCategoryInput, QuizUncheckedUpdateWithoutCategoryInput>
    create: XOR<QuizCreateWithoutCategoryInput, QuizUncheckedCreateWithoutCategoryInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutCategoryInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutCategoryInput, QuizUncheckedUpdateWithoutCategoryInput>
  }

  export type QuizUpdateManyWithWhereWithoutCategoryInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutCategoryInput>
  }

  export type QuizScalarWhereInput = {
    AND?: QuizScalarWhereInput | QuizScalarWhereInput[]
    OR?: QuizScalarWhereInput[]
    NOT?: QuizScalarWhereInput | QuizScalarWhereInput[]
    id?: StringFilter<"Quiz"> | string
    title?: StringFilter<"Quiz"> | string
    description?: StringNullableFilter<"Quiz"> | string | null
    image?: StringNullableFilter<"Quiz"> | string | null
    categoryId?: StringFilter<"Quiz"> | string
  }

  export type CategoryStatUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CategoryStatWhereUniqueInput
    update: XOR<CategoryStatUpdateWithoutCategoryInput, CategoryStatUncheckedUpdateWithoutCategoryInput>
    create: XOR<CategoryStatCreateWithoutCategoryInput, CategoryStatUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryStatUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CategoryStatWhereUniqueInput
    data: XOR<CategoryStatUpdateWithoutCategoryInput, CategoryStatUncheckedUpdateWithoutCategoryInput>
  }

  export type CategoryStatUpdateManyWithWhereWithoutCategoryInput = {
    where: CategoryStatScalarWhereInput
    data: XOR<CategoryStatUpdateManyMutationInput, CategoryStatUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryCreateWithoutQuizzesInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    categoryStats?: CategoryStatCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutQuizzesInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    categoryStats?: CategoryStatUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutQuizzesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutQuizzesInput, CategoryUncheckedCreateWithoutQuizzesInput>
  }

  export type QuestionCreateWithoutQuizInput = {
    id?: string
    text: string
    difficulty?: string | null
    options?: OptionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutQuizInput = {
    id?: string
    text: string
    difficulty?: string | null
    options?: OptionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuestionCreateManyQuizInputEnvelope = {
    data: QuestionCreateManyQuizInput | QuestionCreateManyQuizInput[]
  }

  export type CategoryUpsertWithoutQuizzesInput = {
    update: XOR<CategoryUpdateWithoutQuizzesInput, CategoryUncheckedUpdateWithoutQuizzesInput>
    create: XOR<CategoryCreateWithoutQuizzesInput, CategoryUncheckedCreateWithoutQuizzesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutQuizzesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutQuizzesInput, CategoryUncheckedUpdateWithoutQuizzesInput>
  }

  export type CategoryUpdateWithoutQuizzesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categoryStats?: CategoryStatUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutQuizzesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categoryStats?: CategoryStatUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type QuestionUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutQuizInput, QuestionUncheckedUpdateWithoutQuizInput>
    create: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutQuizInput, QuestionUncheckedUpdateWithoutQuizInput>
  }

  export type QuestionUpdateManyWithWhereWithoutQuizInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutQuizInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    quizId?: StringFilter<"Question"> | string
    difficulty?: StringNullableFilter<"Question"> | string | null
  }

  export type QuizCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description?: string | null
    image?: string | null
    category: CategoryCreateNestedOneWithoutQuizzesInput
  }

  export type QuizUncheckedCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description?: string | null
    image?: string | null
    categoryId: string
  }

  export type QuizCreateOrConnectWithoutQuestionsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
  }

  export type OptionCreateWithoutQuestionInput = {
    id?: string
    text: string
    isCorret: boolean
  }

  export type OptionUncheckedCreateWithoutQuestionInput = {
    id?: string
    text: string
    isCorret: boolean
  }

  export type OptionCreateOrConnectWithoutQuestionInput = {
    where: OptionWhereUniqueInput
    create: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput>
  }

  export type OptionCreateManyQuestionInputEnvelope = {
    data: OptionCreateManyQuestionInput | OptionCreateManyQuestionInput[]
  }

  export type QuizUpsertWithoutQuestionsInput = {
    update: XOR<QuizUpdateWithoutQuestionsInput, QuizUncheckedUpdateWithoutQuestionsInput>
    create: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutQuestionsInput, QuizUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuizUpdateWithoutQuestionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: CategoryUpdateOneRequiredWithoutQuizzesNestedInput
  }

  export type QuizUncheckedUpdateWithoutQuestionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type OptionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: OptionWhereUniqueInput
    update: XOR<OptionUpdateWithoutQuestionInput, OptionUncheckedUpdateWithoutQuestionInput>
    create: XOR<OptionCreateWithoutQuestionInput, OptionUncheckedCreateWithoutQuestionInput>
  }

  export type OptionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: OptionWhereUniqueInput
    data: XOR<OptionUpdateWithoutQuestionInput, OptionUncheckedUpdateWithoutQuestionInput>
  }

  export type OptionUpdateManyWithWhereWithoutQuestionInput = {
    where: OptionScalarWhereInput
    data: XOR<OptionUpdateManyMutationInput, OptionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type OptionScalarWhereInput = {
    AND?: OptionScalarWhereInput | OptionScalarWhereInput[]
    OR?: OptionScalarWhereInput[]
    NOT?: OptionScalarWhereInput | OptionScalarWhereInput[]
    id?: StringFilter<"Option"> | string
    text?: StringFilter<"Option"> | string
    isCorret?: BoolFilter<"Option"> | boolean
    questionId?: StringFilter<"Option"> | string
  }

  export type QuestionCreateWithoutOptionsInput = {
    id?: string
    text: string
    difficulty?: string | null
    quiz: QuizCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutOptionsInput = {
    id?: string
    text: string
    quizId: string
    difficulty?: string | null
  }

  export type QuestionCreateOrConnectWithoutOptionsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
  }

  export type QuestionUpsertWithoutOptionsInput = {
    update: XOR<QuestionUpdateWithoutOptionsInput, QuestionUncheckedUpdateWithoutOptionsInput>
    create: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutOptionsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutOptionsInput, QuestionUncheckedUpdateWithoutOptionsInput>
  }

  export type QuestionUpdateWithoutOptionsInput = {
    text?: StringFieldUpdateOperationsInput | string
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    quiz?: QuizUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutOptionsInput = {
    text?: StringFieldUpdateOperationsInput | string
    quizId?: StringFieldUpdateOperationsInput | string
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutCategoryStatsInput = {
    id?: string
    clerkId: string
    role?: string
    learningProgress?: UserLearningProgressCreateNestedManyWithoutUserInput
    moduleProgress?: UserModuleProgressCreateNestedManyWithoutUserInput
    lessonProgress?: UserLessonProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCategoryStatsInput = {
    id?: string
    clerkId: string
    role?: string
    learningProgress?: UserLearningProgressUncheckedCreateNestedManyWithoutUserInput
    moduleProgress?: UserModuleProgressUncheckedCreateNestedManyWithoutUserInput
    lessonProgress?: UserLessonProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCategoryStatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCategoryStatsInput, UserUncheckedCreateWithoutCategoryStatsInput>
  }

  export type CategoryCreateWithoutCategoryStatsInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    quizzes?: QuizCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutCategoryStatsInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    quizzes?: QuizUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutCategoryStatsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutCategoryStatsInput, CategoryUncheckedCreateWithoutCategoryStatsInput>
  }

  export type UserUpsertWithoutCategoryStatsInput = {
    update: XOR<UserUpdateWithoutCategoryStatsInput, UserUncheckedUpdateWithoutCategoryStatsInput>
    create: XOR<UserCreateWithoutCategoryStatsInput, UserUncheckedCreateWithoutCategoryStatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCategoryStatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCategoryStatsInput, UserUncheckedUpdateWithoutCategoryStatsInput>
  }

  export type UserUpdateWithoutCategoryStatsInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    learningProgress?: UserLearningProgressUpdateManyWithoutUserNestedInput
    moduleProgress?: UserModuleProgressUpdateManyWithoutUserNestedInput
    lessonProgress?: UserLessonProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCategoryStatsInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    learningProgress?: UserLearningProgressUncheckedUpdateManyWithoutUserNestedInput
    moduleProgress?: UserModuleProgressUncheckedUpdateManyWithoutUserNestedInput
    lessonProgress?: UserLessonProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutCategoryStatsInput = {
    update: XOR<CategoryUpdateWithoutCategoryStatsInput, CategoryUncheckedUpdateWithoutCategoryStatsInput>
    create: XOR<CategoryCreateWithoutCategoryStatsInput, CategoryUncheckedCreateWithoutCategoryStatsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutCategoryStatsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutCategoryStatsInput, CategoryUncheckedUpdateWithoutCategoryStatsInput>
  }

  export type CategoryUpdateWithoutCategoryStatsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    quizzes?: QuizUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutCategoryStatsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    quizzes?: QuizUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ModuleCreateWithoutLearningPathInput = {
    id?: string
    title: string
    description: string
    duration: string
    order: number
    lessons?: LessonCreateNestedManyWithoutModuleInput
    userProgress?: UserModuleProgressCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutLearningPathInput = {
    id?: string
    title: string
    description: string
    duration: string
    order: number
    lessons?: LessonUncheckedCreateNestedManyWithoutModuleInput
    userProgress?: UserModuleProgressUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutLearningPathInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutLearningPathInput, ModuleUncheckedCreateWithoutLearningPathInput>
  }

  export type ModuleCreateManyLearningPathInputEnvelope = {
    data: ModuleCreateManyLearningPathInput | ModuleCreateManyLearningPathInput[]
  }

  export type UserLearningProgressCreateWithoutLearningPathInput = {
    id?: string
    startedAt?: Date | string
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
    progressPercent?: number
    user: UserCreateNestedOneWithoutLearningProgressInput
  }

  export type UserLearningProgressUncheckedCreateWithoutLearningPathInput = {
    id?: string
    userId: string
    startedAt?: Date | string
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
    progressPercent?: number
  }

  export type UserLearningProgressCreateOrConnectWithoutLearningPathInput = {
    where: UserLearningProgressWhereUniqueInput
    create: XOR<UserLearningProgressCreateWithoutLearningPathInput, UserLearningProgressUncheckedCreateWithoutLearningPathInput>
  }

  export type UserLearningProgressCreateManyLearningPathInputEnvelope = {
    data: UserLearningProgressCreateManyLearningPathInput | UserLearningProgressCreateManyLearningPathInput[]
  }

  export type ModuleUpsertWithWhereUniqueWithoutLearningPathInput = {
    where: ModuleWhereUniqueInput
    update: XOR<ModuleUpdateWithoutLearningPathInput, ModuleUncheckedUpdateWithoutLearningPathInput>
    create: XOR<ModuleCreateWithoutLearningPathInput, ModuleUncheckedCreateWithoutLearningPathInput>
  }

  export type ModuleUpdateWithWhereUniqueWithoutLearningPathInput = {
    where: ModuleWhereUniqueInput
    data: XOR<ModuleUpdateWithoutLearningPathInput, ModuleUncheckedUpdateWithoutLearningPathInput>
  }

  export type ModuleUpdateManyWithWhereWithoutLearningPathInput = {
    where: ModuleScalarWhereInput
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyWithoutLearningPathInput>
  }

  export type ModuleScalarWhereInput = {
    AND?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
    OR?: ModuleScalarWhereInput[]
    NOT?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
    id?: StringFilter<"Module"> | string
    title?: StringFilter<"Module"> | string
    description?: StringFilter<"Module"> | string
    duration?: StringFilter<"Module"> | string
    order?: IntFilter<"Module"> | number
    learningPathId?: StringFilter<"Module"> | string
  }

  export type UserLearningProgressUpsertWithWhereUniqueWithoutLearningPathInput = {
    where: UserLearningProgressWhereUniqueInput
    update: XOR<UserLearningProgressUpdateWithoutLearningPathInput, UserLearningProgressUncheckedUpdateWithoutLearningPathInput>
    create: XOR<UserLearningProgressCreateWithoutLearningPathInput, UserLearningProgressUncheckedCreateWithoutLearningPathInput>
  }

  export type UserLearningProgressUpdateWithWhereUniqueWithoutLearningPathInput = {
    where: UserLearningProgressWhereUniqueInput
    data: XOR<UserLearningProgressUpdateWithoutLearningPathInput, UserLearningProgressUncheckedUpdateWithoutLearningPathInput>
  }

  export type UserLearningProgressUpdateManyWithWhereWithoutLearningPathInput = {
    where: UserLearningProgressScalarWhereInput
    data: XOR<UserLearningProgressUpdateManyMutationInput, UserLearningProgressUncheckedUpdateManyWithoutLearningPathInput>
  }

  export type LearningPathCreateWithoutModulesInput = {
    id?: string
    name: string
    title: string
    description: string
    image?: string | null
    order: number
    userProgress?: UserLearningProgressCreateNestedManyWithoutLearningPathInput
  }

  export type LearningPathUncheckedCreateWithoutModulesInput = {
    id?: string
    name: string
    title: string
    description: string
    image?: string | null
    order: number
    userProgress?: UserLearningProgressUncheckedCreateNestedManyWithoutLearningPathInput
  }

  export type LearningPathCreateOrConnectWithoutModulesInput = {
    where: LearningPathWhereUniqueInput
    create: XOR<LearningPathCreateWithoutModulesInput, LearningPathUncheckedCreateWithoutModulesInput>
  }

  export type LessonCreateWithoutModuleInput = {
    id?: string
    title: string
    content: string
    videoUrl?: string | null
    codeExample?: string | null
    resources?: string | null
    duration: string
    order: number
    userProgress?: UserLessonProgressCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutModuleInput = {
    id?: string
    title: string
    content: string
    videoUrl?: string | null
    codeExample?: string | null
    resources?: string | null
    duration: string
    order: number
    userProgress?: UserLessonProgressUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutModuleInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutModuleInput, LessonUncheckedCreateWithoutModuleInput>
  }

  export type LessonCreateManyModuleInputEnvelope = {
    data: LessonCreateManyModuleInput | LessonCreateManyModuleInput[]
  }

  export type UserModuleProgressCreateWithoutModuleInput = {
    id?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    progressPercent?: number
    user: UserCreateNestedOneWithoutModuleProgressInput
  }

  export type UserModuleProgressUncheckedCreateWithoutModuleInput = {
    id?: string
    userId: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    progressPercent?: number
  }

  export type UserModuleProgressCreateOrConnectWithoutModuleInput = {
    where: UserModuleProgressWhereUniqueInput
    create: XOR<UserModuleProgressCreateWithoutModuleInput, UserModuleProgressUncheckedCreateWithoutModuleInput>
  }

  export type UserModuleProgressCreateManyModuleInputEnvelope = {
    data: UserModuleProgressCreateManyModuleInput | UserModuleProgressCreateManyModuleInput[]
  }

  export type LearningPathUpsertWithoutModulesInput = {
    update: XOR<LearningPathUpdateWithoutModulesInput, LearningPathUncheckedUpdateWithoutModulesInput>
    create: XOR<LearningPathCreateWithoutModulesInput, LearningPathUncheckedCreateWithoutModulesInput>
    where?: LearningPathWhereInput
  }

  export type LearningPathUpdateToOneWithWhereWithoutModulesInput = {
    where?: LearningPathWhereInput
    data: XOR<LearningPathUpdateWithoutModulesInput, LearningPathUncheckedUpdateWithoutModulesInput>
  }

  export type LearningPathUpdateWithoutModulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    userProgress?: UserLearningProgressUpdateManyWithoutLearningPathNestedInput
  }

  export type LearningPathUncheckedUpdateWithoutModulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    userProgress?: UserLearningProgressUncheckedUpdateManyWithoutLearningPathNestedInput
  }

  export type LessonUpsertWithWhereUniqueWithoutModuleInput = {
    where: LessonWhereUniqueInput
    update: XOR<LessonUpdateWithoutModuleInput, LessonUncheckedUpdateWithoutModuleInput>
    create: XOR<LessonCreateWithoutModuleInput, LessonUncheckedCreateWithoutModuleInput>
  }

  export type LessonUpdateWithWhereUniqueWithoutModuleInput = {
    where: LessonWhereUniqueInput
    data: XOR<LessonUpdateWithoutModuleInput, LessonUncheckedUpdateWithoutModuleInput>
  }

  export type LessonUpdateManyWithWhereWithoutModuleInput = {
    where: LessonScalarWhereInput
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyWithoutModuleInput>
  }

  export type LessonScalarWhereInput = {
    AND?: LessonScalarWhereInput | LessonScalarWhereInput[]
    OR?: LessonScalarWhereInput[]
    NOT?: LessonScalarWhereInput | LessonScalarWhereInput[]
    id?: StringFilter<"Lesson"> | string
    title?: StringFilter<"Lesson"> | string
    content?: StringFilter<"Lesson"> | string
    videoUrl?: StringNullableFilter<"Lesson"> | string | null
    codeExample?: StringNullableFilter<"Lesson"> | string | null
    resources?: StringNullableFilter<"Lesson"> | string | null
    duration?: StringFilter<"Lesson"> | string
    order?: IntFilter<"Lesson"> | number
    moduleId?: StringFilter<"Lesson"> | string
  }

  export type UserModuleProgressUpsertWithWhereUniqueWithoutModuleInput = {
    where: UserModuleProgressWhereUniqueInput
    update: XOR<UserModuleProgressUpdateWithoutModuleInput, UserModuleProgressUncheckedUpdateWithoutModuleInput>
    create: XOR<UserModuleProgressCreateWithoutModuleInput, UserModuleProgressUncheckedCreateWithoutModuleInput>
  }

  export type UserModuleProgressUpdateWithWhereUniqueWithoutModuleInput = {
    where: UserModuleProgressWhereUniqueInput
    data: XOR<UserModuleProgressUpdateWithoutModuleInput, UserModuleProgressUncheckedUpdateWithoutModuleInput>
  }

  export type UserModuleProgressUpdateManyWithWhereWithoutModuleInput = {
    where: UserModuleProgressScalarWhereInput
    data: XOR<UserModuleProgressUpdateManyMutationInput, UserModuleProgressUncheckedUpdateManyWithoutModuleInput>
  }

  export type ModuleCreateWithoutLessonsInput = {
    id?: string
    title: string
    description: string
    duration: string
    order: number
    learningPath: LearningPathCreateNestedOneWithoutModulesInput
    userProgress?: UserModuleProgressCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutLessonsInput = {
    id?: string
    title: string
    description: string
    duration: string
    order: number
    learningPathId: string
    userProgress?: UserModuleProgressUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutLessonsInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutLessonsInput, ModuleUncheckedCreateWithoutLessonsInput>
  }

  export type UserLessonProgressCreateWithoutLessonInput = {
    id?: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    timeSpent?: number
    user: UserCreateNestedOneWithoutLessonProgressInput
  }

  export type UserLessonProgressUncheckedCreateWithoutLessonInput = {
    id?: string
    userId: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    timeSpent?: number
  }

  export type UserLessonProgressCreateOrConnectWithoutLessonInput = {
    where: UserLessonProgressWhereUniqueInput
    create: XOR<UserLessonProgressCreateWithoutLessonInput, UserLessonProgressUncheckedCreateWithoutLessonInput>
  }

  export type UserLessonProgressCreateManyLessonInputEnvelope = {
    data: UserLessonProgressCreateManyLessonInput | UserLessonProgressCreateManyLessonInput[]
  }

  export type ModuleUpsertWithoutLessonsInput = {
    update: XOR<ModuleUpdateWithoutLessonsInput, ModuleUncheckedUpdateWithoutLessonsInput>
    create: XOR<ModuleCreateWithoutLessonsInput, ModuleUncheckedCreateWithoutLessonsInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutLessonsInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutLessonsInput, ModuleUncheckedUpdateWithoutLessonsInput>
  }

  export type ModuleUpdateWithoutLessonsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    learningPath?: LearningPathUpdateOneRequiredWithoutModulesNestedInput
    userProgress?: UserModuleProgressUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutLessonsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    learningPathId?: StringFieldUpdateOperationsInput | string
    userProgress?: UserModuleProgressUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type UserLessonProgressUpsertWithWhereUniqueWithoutLessonInput = {
    where: UserLessonProgressWhereUniqueInput
    update: XOR<UserLessonProgressUpdateWithoutLessonInput, UserLessonProgressUncheckedUpdateWithoutLessonInput>
    create: XOR<UserLessonProgressCreateWithoutLessonInput, UserLessonProgressUncheckedCreateWithoutLessonInput>
  }

  export type UserLessonProgressUpdateWithWhereUniqueWithoutLessonInput = {
    where: UserLessonProgressWhereUniqueInput
    data: XOR<UserLessonProgressUpdateWithoutLessonInput, UserLessonProgressUncheckedUpdateWithoutLessonInput>
  }

  export type UserLessonProgressUpdateManyWithWhereWithoutLessonInput = {
    where: UserLessonProgressScalarWhereInput
    data: XOR<UserLessonProgressUpdateManyMutationInput, UserLessonProgressUncheckedUpdateManyWithoutLessonInput>
  }

  export type UserCreateWithoutLearningProgressInput = {
    id?: string
    clerkId: string
    role?: string
    categoryStats?: CategoryStatCreateNestedManyWithoutUserInput
    moduleProgress?: UserModuleProgressCreateNestedManyWithoutUserInput
    lessonProgress?: UserLessonProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLearningProgressInput = {
    id?: string
    clerkId: string
    role?: string
    categoryStats?: CategoryStatUncheckedCreateNestedManyWithoutUserInput
    moduleProgress?: UserModuleProgressUncheckedCreateNestedManyWithoutUserInput
    lessonProgress?: UserLessonProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLearningProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLearningProgressInput, UserUncheckedCreateWithoutLearningProgressInput>
  }

  export type LearningPathCreateWithoutUserProgressInput = {
    id?: string
    name: string
    title: string
    description: string
    image?: string | null
    order: number
    modules?: ModuleCreateNestedManyWithoutLearningPathInput
  }

  export type LearningPathUncheckedCreateWithoutUserProgressInput = {
    id?: string
    name: string
    title: string
    description: string
    image?: string | null
    order: number
    modules?: ModuleUncheckedCreateNestedManyWithoutLearningPathInput
  }

  export type LearningPathCreateOrConnectWithoutUserProgressInput = {
    where: LearningPathWhereUniqueInput
    create: XOR<LearningPathCreateWithoutUserProgressInput, LearningPathUncheckedCreateWithoutUserProgressInput>
  }

  export type UserUpsertWithoutLearningProgressInput = {
    update: XOR<UserUpdateWithoutLearningProgressInput, UserUncheckedUpdateWithoutLearningProgressInput>
    create: XOR<UserCreateWithoutLearningProgressInput, UserUncheckedCreateWithoutLearningProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLearningProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLearningProgressInput, UserUncheckedUpdateWithoutLearningProgressInput>
  }

  export type UserUpdateWithoutLearningProgressInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    categoryStats?: CategoryStatUpdateManyWithoutUserNestedInput
    moduleProgress?: UserModuleProgressUpdateManyWithoutUserNestedInput
    lessonProgress?: UserLessonProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLearningProgressInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    categoryStats?: CategoryStatUncheckedUpdateManyWithoutUserNestedInput
    moduleProgress?: UserModuleProgressUncheckedUpdateManyWithoutUserNestedInput
    lessonProgress?: UserLessonProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LearningPathUpsertWithoutUserProgressInput = {
    update: XOR<LearningPathUpdateWithoutUserProgressInput, LearningPathUncheckedUpdateWithoutUserProgressInput>
    create: XOR<LearningPathCreateWithoutUserProgressInput, LearningPathUncheckedCreateWithoutUserProgressInput>
    where?: LearningPathWhereInput
  }

  export type LearningPathUpdateToOneWithWhereWithoutUserProgressInput = {
    where?: LearningPathWhereInput
    data: XOR<LearningPathUpdateWithoutUserProgressInput, LearningPathUncheckedUpdateWithoutUserProgressInput>
  }

  export type LearningPathUpdateWithoutUserProgressInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    modules?: ModuleUpdateManyWithoutLearningPathNestedInput
  }

  export type LearningPathUncheckedUpdateWithoutUserProgressInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    modules?: ModuleUncheckedUpdateManyWithoutLearningPathNestedInput
  }

  export type UserCreateWithoutModuleProgressInput = {
    id?: string
    clerkId: string
    role?: string
    categoryStats?: CategoryStatCreateNestedManyWithoutUserInput
    learningProgress?: UserLearningProgressCreateNestedManyWithoutUserInput
    lessonProgress?: UserLessonProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutModuleProgressInput = {
    id?: string
    clerkId: string
    role?: string
    categoryStats?: CategoryStatUncheckedCreateNestedManyWithoutUserInput
    learningProgress?: UserLearningProgressUncheckedCreateNestedManyWithoutUserInput
    lessonProgress?: UserLessonProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutModuleProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModuleProgressInput, UserUncheckedCreateWithoutModuleProgressInput>
  }

  export type ModuleCreateWithoutUserProgressInput = {
    id?: string
    title: string
    description: string
    duration: string
    order: number
    learningPath: LearningPathCreateNestedOneWithoutModulesInput
    lessons?: LessonCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutUserProgressInput = {
    id?: string
    title: string
    description: string
    duration: string
    order: number
    learningPathId: string
    lessons?: LessonUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutUserProgressInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutUserProgressInput, ModuleUncheckedCreateWithoutUserProgressInput>
  }

  export type UserUpsertWithoutModuleProgressInput = {
    update: XOR<UserUpdateWithoutModuleProgressInput, UserUncheckedUpdateWithoutModuleProgressInput>
    create: XOR<UserCreateWithoutModuleProgressInput, UserUncheckedCreateWithoutModuleProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutModuleProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutModuleProgressInput, UserUncheckedUpdateWithoutModuleProgressInput>
  }

  export type UserUpdateWithoutModuleProgressInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    categoryStats?: CategoryStatUpdateManyWithoutUserNestedInput
    learningProgress?: UserLearningProgressUpdateManyWithoutUserNestedInput
    lessonProgress?: UserLessonProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutModuleProgressInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    categoryStats?: CategoryStatUncheckedUpdateManyWithoutUserNestedInput
    learningProgress?: UserLearningProgressUncheckedUpdateManyWithoutUserNestedInput
    lessonProgress?: UserLessonProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ModuleUpsertWithoutUserProgressInput = {
    update: XOR<ModuleUpdateWithoutUserProgressInput, ModuleUncheckedUpdateWithoutUserProgressInput>
    create: XOR<ModuleCreateWithoutUserProgressInput, ModuleUncheckedCreateWithoutUserProgressInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutUserProgressInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutUserProgressInput, ModuleUncheckedUpdateWithoutUserProgressInput>
  }

  export type ModuleUpdateWithoutUserProgressInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    learningPath?: LearningPathUpdateOneRequiredWithoutModulesNestedInput
    lessons?: LessonUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutUserProgressInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    learningPathId?: StringFieldUpdateOperationsInput | string
    lessons?: LessonUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type UserCreateWithoutLessonProgressInput = {
    id?: string
    clerkId: string
    role?: string
    categoryStats?: CategoryStatCreateNestedManyWithoutUserInput
    learningProgress?: UserLearningProgressCreateNestedManyWithoutUserInput
    moduleProgress?: UserModuleProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLessonProgressInput = {
    id?: string
    clerkId: string
    role?: string
    categoryStats?: CategoryStatUncheckedCreateNestedManyWithoutUserInput
    learningProgress?: UserLearningProgressUncheckedCreateNestedManyWithoutUserInput
    moduleProgress?: UserModuleProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLessonProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLessonProgressInput, UserUncheckedCreateWithoutLessonProgressInput>
  }

  export type LessonCreateWithoutUserProgressInput = {
    id?: string
    title: string
    content: string
    videoUrl?: string | null
    codeExample?: string | null
    resources?: string | null
    duration: string
    order: number
    module: ModuleCreateNestedOneWithoutLessonsInput
  }

  export type LessonUncheckedCreateWithoutUserProgressInput = {
    id?: string
    title: string
    content: string
    videoUrl?: string | null
    codeExample?: string | null
    resources?: string | null
    duration: string
    order: number
    moduleId: string
  }

  export type LessonCreateOrConnectWithoutUserProgressInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutUserProgressInput, LessonUncheckedCreateWithoutUserProgressInput>
  }

  export type UserUpsertWithoutLessonProgressInput = {
    update: XOR<UserUpdateWithoutLessonProgressInput, UserUncheckedUpdateWithoutLessonProgressInput>
    create: XOR<UserCreateWithoutLessonProgressInput, UserUncheckedCreateWithoutLessonProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLessonProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLessonProgressInput, UserUncheckedUpdateWithoutLessonProgressInput>
  }

  export type UserUpdateWithoutLessonProgressInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    categoryStats?: CategoryStatUpdateManyWithoutUserNestedInput
    learningProgress?: UserLearningProgressUpdateManyWithoutUserNestedInput
    moduleProgress?: UserModuleProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLessonProgressInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    categoryStats?: CategoryStatUncheckedUpdateManyWithoutUserNestedInput
    learningProgress?: UserLearningProgressUncheckedUpdateManyWithoutUserNestedInput
    moduleProgress?: UserModuleProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LessonUpsertWithoutUserProgressInput = {
    update: XOR<LessonUpdateWithoutUserProgressInput, LessonUncheckedUpdateWithoutUserProgressInput>
    create: XOR<LessonCreateWithoutUserProgressInput, LessonUncheckedCreateWithoutUserProgressInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutUserProgressInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutUserProgressInput, LessonUncheckedUpdateWithoutUserProgressInput>
  }

  export type LessonUpdateWithoutUserProgressInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    codeExample?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    module?: ModuleUpdateOneRequiredWithoutLessonsNestedInput
  }

  export type LessonUncheckedUpdateWithoutUserProgressInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    codeExample?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    moduleId?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentationSectionCreateWithoutCategoryInput = {
    id?: string
    title: string
    slug: string
    content: string
    order: number
  }

  export type DocumentationSectionUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    slug: string
    content: string
    order: number
  }

  export type DocumentationSectionCreateOrConnectWithoutCategoryInput = {
    where: DocumentationSectionWhereUniqueInput
    create: XOR<DocumentationSectionCreateWithoutCategoryInput, DocumentationSectionUncheckedCreateWithoutCategoryInput>
  }

  export type DocumentationSectionCreateManyCategoryInputEnvelope = {
    data: DocumentationSectionCreateManyCategoryInput | DocumentationSectionCreateManyCategoryInput[]
  }

  export type DocumentationSectionUpsertWithWhereUniqueWithoutCategoryInput = {
    where: DocumentationSectionWhereUniqueInput
    update: XOR<DocumentationSectionUpdateWithoutCategoryInput, DocumentationSectionUncheckedUpdateWithoutCategoryInput>
    create: XOR<DocumentationSectionCreateWithoutCategoryInput, DocumentationSectionUncheckedCreateWithoutCategoryInput>
  }

  export type DocumentationSectionUpdateWithWhereUniqueWithoutCategoryInput = {
    where: DocumentationSectionWhereUniqueInput
    data: XOR<DocumentationSectionUpdateWithoutCategoryInput, DocumentationSectionUncheckedUpdateWithoutCategoryInput>
  }

  export type DocumentationSectionUpdateManyWithWhereWithoutCategoryInput = {
    where: DocumentationSectionScalarWhereInput
    data: XOR<DocumentationSectionUpdateManyMutationInput, DocumentationSectionUncheckedUpdateManyWithoutCategoryInput>
  }

  export type DocumentationSectionScalarWhereInput = {
    AND?: DocumentationSectionScalarWhereInput | DocumentationSectionScalarWhereInput[]
    OR?: DocumentationSectionScalarWhereInput[]
    NOT?: DocumentationSectionScalarWhereInput | DocumentationSectionScalarWhereInput[]
    id?: StringFilter<"DocumentationSection"> | string
    title?: StringFilter<"DocumentationSection"> | string
    slug?: StringFilter<"DocumentationSection"> | string
    content?: StringFilter<"DocumentationSection"> | string
    categoryId?: StringFilter<"DocumentationSection"> | string
    order?: IntFilter<"DocumentationSection"> | number
  }

  export type DocumentationCategoryCreateWithoutSectionsInput = {
    id?: string
    name: string
    slug: string
    icon: string
    description: string
    order: number
  }

  export type DocumentationCategoryUncheckedCreateWithoutSectionsInput = {
    id?: string
    name: string
    slug: string
    icon: string
    description: string
    order: number
  }

  export type DocumentationCategoryCreateOrConnectWithoutSectionsInput = {
    where: DocumentationCategoryWhereUniqueInput
    create: XOR<DocumentationCategoryCreateWithoutSectionsInput, DocumentationCategoryUncheckedCreateWithoutSectionsInput>
  }

  export type DocumentationCategoryUpsertWithoutSectionsInput = {
    update: XOR<DocumentationCategoryUpdateWithoutSectionsInput, DocumentationCategoryUncheckedUpdateWithoutSectionsInput>
    create: XOR<DocumentationCategoryCreateWithoutSectionsInput, DocumentationCategoryUncheckedCreateWithoutSectionsInput>
    where?: DocumentationCategoryWhereInput
  }

  export type DocumentationCategoryUpdateToOneWithWhereWithoutSectionsInput = {
    where?: DocumentationCategoryWhereInput
    data: XOR<DocumentationCategoryUpdateWithoutSectionsInput, DocumentationCategoryUncheckedUpdateWithoutSectionsInput>
  }

  export type DocumentationCategoryUpdateWithoutSectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentationCategoryUncheckedUpdateWithoutSectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryStatCreateManyUserInput = {
    id?: string
    categoryId: string
    attempts?: number
    completed?: number
    averageScore?: number | null
    lastAttempt?: Date | string | null
  }

  export type UserLearningProgressCreateManyUserInput = {
    id?: string
    learningPathId: string
    startedAt?: Date | string
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
    progressPercent?: number
  }

  export type UserModuleProgressCreateManyUserInput = {
    id?: string
    moduleId: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    progressPercent?: number
  }

  export type UserLessonProgressCreateManyUserInput = {
    id?: string
    lessonId: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    timeSpent?: number
  }

  export type CategoryStatUpdateWithoutUserInput = {
    attempts?: IntFieldUpdateOperationsInput | number
    completed?: IntFieldUpdateOperationsInput | number
    averageScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: CategoryUpdateOneRequiredWithoutCategoryStatsNestedInput
  }

  export type CategoryStatUncheckedUpdateWithoutUserInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    completed?: IntFieldUpdateOperationsInput | number
    averageScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryStatUncheckedUpdateManyWithoutUserInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    completed?: IntFieldUpdateOperationsInput | number
    averageScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserLearningProgressUpdateWithoutUserInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
    learningPath?: LearningPathUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserLearningProgressUncheckedUpdateWithoutUserInput = {
    learningPathId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
  }

  export type UserLearningProgressUncheckedUpdateManyWithoutUserInput = {
    learningPathId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
  }

  export type UserModuleProgressUpdateWithoutUserInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
    module?: ModuleUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserModuleProgressUncheckedUpdateWithoutUserInput = {
    moduleId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
  }

  export type UserModuleProgressUncheckedUpdateManyWithoutUserInput = {
    moduleId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
  }

  export type UserLessonProgressUpdateWithoutUserInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    lesson?: LessonUpdateOneRequiredWithoutUserProgressNestedInput
  }

  export type UserLessonProgressUncheckedUpdateWithoutUserInput = {
    lessonId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpent?: IntFieldUpdateOperationsInput | number
  }

  export type UserLessonProgressUncheckedUpdateManyWithoutUserInput = {
    lessonId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpent?: IntFieldUpdateOperationsInput | number
  }

  export type QuizCreateManyCategoryInput = {
    id?: string
    title: string
    description?: string | null
    image?: string | null
  }

  export type CategoryStatCreateManyCategoryInput = {
    id?: string
    userId: string
    attempts?: number
    completed?: number
    averageScore?: number | null
    lastAttempt?: Date | string | null
  }

  export type QuizUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: QuestionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryStatUpdateWithoutCategoryInput = {
    attempts?: IntFieldUpdateOperationsInput | number
    completed?: IntFieldUpdateOperationsInput | number
    averageScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutCategoryStatsNestedInput
  }

  export type CategoryStatUncheckedUpdateWithoutCategoryInput = {
    userId?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    completed?: IntFieldUpdateOperationsInput | number
    averageScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryStatUncheckedUpdateManyWithoutCategoryInput = {
    userId?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    completed?: IntFieldUpdateOperationsInput | number
    averageScore?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAttempt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuestionCreateManyQuizInput = {
    id?: string
    text: string
    difficulty?: string | null
  }

  export type QuestionUpdateWithoutQuizInput = {
    text?: StringFieldUpdateOperationsInput | string
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    options?: OptionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutQuizInput = {
    text?: StringFieldUpdateOperationsInput | string
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    options?: OptionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutQuizInput = {
    text?: StringFieldUpdateOperationsInput | string
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OptionCreateManyQuestionInput = {
    id?: string
    text: string
    isCorret: boolean
  }

  export type OptionUpdateWithoutQuestionInput = {
    text?: StringFieldUpdateOperationsInput | string
    isCorret?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OptionUncheckedUpdateWithoutQuestionInput = {
    text?: StringFieldUpdateOperationsInput | string
    isCorret?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OptionUncheckedUpdateManyWithoutQuestionInput = {
    text?: StringFieldUpdateOperationsInput | string
    isCorret?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModuleCreateManyLearningPathInput = {
    id?: string
    title: string
    description: string
    duration: string
    order: number
  }

  export type UserLearningProgressCreateManyLearningPathInput = {
    id?: string
    userId: string
    startedAt?: Date | string
    lastAccessedAt?: Date | string
    completedAt?: Date | string | null
    progressPercent?: number
  }

  export type ModuleUpdateWithoutLearningPathInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    lessons?: LessonUpdateManyWithoutModuleNestedInput
    userProgress?: UserModuleProgressUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutLearningPathInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    lessons?: LessonUncheckedUpdateManyWithoutModuleNestedInput
    userProgress?: UserModuleProgressUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateManyWithoutLearningPathInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type UserLearningProgressUpdateWithoutLearningPathInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutLearningProgressNestedInput
  }

  export type UserLearningProgressUncheckedUpdateWithoutLearningPathInput = {
    userId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
  }

  export type UserLearningProgressUncheckedUpdateManyWithoutLearningPathInput = {
    userId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAccessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
  }

  export type LessonCreateManyModuleInput = {
    id?: string
    title: string
    content: string
    videoUrl?: string | null
    codeExample?: string | null
    resources?: string | null
    duration: string
    order: number
  }

  export type UserModuleProgressCreateManyModuleInput = {
    id?: string
    userId: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    progressPercent?: number
  }

  export type LessonUpdateWithoutModuleInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    codeExample?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    userProgress?: UserLessonProgressUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutModuleInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    codeExample?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    userProgress?: UserLessonProgressUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateManyWithoutModuleInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    codeExample?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type UserModuleProgressUpdateWithoutModuleInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutModuleProgressNestedInput
  }

  export type UserModuleProgressUncheckedUpdateWithoutModuleInput = {
    userId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
  }

  export type UserModuleProgressUncheckedUpdateManyWithoutModuleInput = {
    userId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    progressPercent?: IntFieldUpdateOperationsInput | number
  }

  export type UserLessonProgressCreateManyLessonInput = {
    id?: string
    userId: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    timeSpent?: number
  }

  export type UserLessonProgressUpdateWithoutLessonInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpent?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutLessonProgressNestedInput
  }

  export type UserLessonProgressUncheckedUpdateWithoutLessonInput = {
    userId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpent?: IntFieldUpdateOperationsInput | number
  }

  export type UserLessonProgressUncheckedUpdateManyWithoutLessonInput = {
    userId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    timeSpent?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentationSectionCreateManyCategoryInput = {
    id?: string
    title: string
    slug: string
    content: string
    order: number
  }

  export type DocumentationSectionUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentationSectionUncheckedUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentationSectionUncheckedUpdateManyWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }



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