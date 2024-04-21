declare module 'every' {
    function every<T>(array: T[], predicate: (value: T, index: number, array: T[]) => boolean): boolean;
}
