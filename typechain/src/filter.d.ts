declare module "filter" {
    function filter<T>(array: T[], predicate: (value: T, index: number, array: T[]) => boolean): T[];
}
