# yieldable


The co [yieldable](https://github.com/tj/co/#yieldables) objects currently supported are:

- promises
- thunks (functions)
- array (parallel execution)
- objects (parallel execution)
- generators (delegation)
- generator functions (delegation)

Nested `yieldable` objects are supported, meaning you can nest promises within objects within arrays, and so on!

