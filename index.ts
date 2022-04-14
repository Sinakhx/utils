export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const isPrimitive = (val: unknown) => Object(val) !== val;

export const benchmark = (val: any, times: number = 5000000) => (fn1: Function, fn2: Function) => {
    const start = performance.now();
    for (let i = 0; i < times; i++) {
        fn1(val);
    }
    const between = performance.now();
    for (let i = 0; i < times; i++) {
        fn2(val);
    }
    const end = performance.now();
    return {
        fn1: Math.round(between - start),
        fn2: Math.round(end - between),
    };
};
