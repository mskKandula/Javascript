import fetch from 'node-fetch';

const cache = new Map();

const memoizePromiseFn = (id) => {
    if (cache.has(id)) {
        console.log("7")
        return cache.get(id);
    }

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)

    cache.set(id, userPromise)
    return cache.get(id)
};


console.log(await memoizePromiseFn(1))
console.log(await memoizePromiseFn(1))
console.log(await memoizePromiseFn(2))
console.log(await memoizePromiseFn(1))
console.log(await memoizePromiseFn(3))