    //polyfill preset transform 解决最新版本的es语法

    //搭建脚手架（express）
    require('babel-runtime/regenerator')
    require('webpack-hot-middleware/client?reload=true')
    require('./main.css')
    require('./index.html')
    debugger 
    // console.log('hello world ')
    // async  更好解决异步问题
    // var a = async args => {
    //     const {
    //         a,
    //         b
    //     } = args
    //     await console.log('hello future!', a, b)
    //     console.log('done')
    // }

    // a({
    //     a: 1,
    //     b: 2
    // })