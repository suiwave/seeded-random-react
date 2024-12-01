import seedrandom from "seedrandom"

const generateSeededRandomArray = (seed: string, length: number = 5): number[] => {
    console.log(`seed is ${seed}`)

    // シードを指定して乱数生成器を作成
    const rng = seedrandom(seed);

    // 配列生成の例
    const array = Array.from({ length }, () => Math.floor(rng() * 100));

    return array
}

console.log(generateSeededRandomArray('hello', 10));
console.log(generateSeededRandomArray('hello', 10));
console.log(generateSeededRandomArray('hello111', 10));

/**
 * こんな感じになった
seed is hello
[ 54, 43, 55, 76, 48 ]
seed is hello
[ 54, 43, 55, 76, 48 ]
seed is hello111
[ 46, 53, 17, 8, 35 ]
 */