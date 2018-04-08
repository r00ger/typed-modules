import * as _ from "underscore";

export interface TypedUnderscoreStatic {
    extend<TDestination, TSource>(destination: TDestination, sources: TSource): TDestination & TSource;
    extend<TDestination, TSource1, TSource2>(
        destination: TDestination,
        source1: TSource1,
        source2: TSource2,
    ): TDestination & TSource1 & TSource2;
    extend<TDestination, TSource1, TSource2, TSource3>(
        destination: TDestination,
        source1: TSource1,
        source2: TSource2,
        source3: TSource3,
    ): TDestination & TSource1 & TSource2 & TSource3;
    extend<TDestination, TSource>(destination: TDestination, ...sources: TSource[]): TDestination & TSource;

    pick<T extends object, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K>;

    // redefine the rest of Underscore's API below
}

/**
 * Methods whose definition is not compatible with the default underscore definition, are described here.
 *
 * This is done so that the definition are checked to match the default ones wherever possible.
 */
export interface TypedUnderscoreStaticIncompatible extends TypedUnderscoreStatic {
    isObject(value: any): value is object;
    isNull(value: any): value is null;
    isFinite(value: any): value is number;
}

const redirect = (_ as TypedUnderscoreStatic) as TypedUnderscoreStaticIncompatible;

export default redirect;
