# なにこれ
seed値を使った再現可能なランダム生成ライブラリを試してみたかった  
あと、そのseedを仮にフロントで使う場合、ブラウザの履歴に残せないか？という実験も行った  

# 結論
## seed値を使った再現可能なランダムな値生成
良い感じ
```spike/seedrandom.ts
// spike/seedrandom.ts
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
```

## ブラウザの履歴に残せないか？という実験
```
// src/App.tsx
        <button onClick={() => navigate(`/?${key}=${count + 1}`)}>
```
nuqsで管理しているstateを、setXXX関数ではなく、  
navigate関数でクエリパラメータ経由で更新することで、ブラウザ履歴に残すことができた  
ただ、この方法だとUX微妙。複数画面ある場合は特に微妙  
でも一応の回答は得られたかなー

