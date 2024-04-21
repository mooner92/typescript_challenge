declare module 'map' {
    function map<T>(array: T[], iteratee: (value: T, index: number, array: T[]) => number): Array<T>;
}
