# Getting error

```
Uncaught (in promise) Error: [Loader.load] Failed to load http://localhost:3000/bunny.png.
RangeError: Maximum call stack size exceeded
    at Loader.ts:148:1
    at async Promise.all (:3000/index 0)
    at async Loader.load (Loader.ts:153:1)
    at async AssetsClass._mapLoadToResolve (Assets.ts:689:1)
    at async AssetsClass.load
```

How to reproduce:

### `npm i`
### `npm start`