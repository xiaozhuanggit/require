// main.js

//alert("加载成功！");


require.config({
    baseUrl:'./js',
    paths:{
        'jquery':'lib/jquery/jquery',
        'a':'a',
        'b':'b',
        'c':'c'
    }
})


require(['jquery','a','b'],function($,a,b){
    console.log(a.add(1,2))
})
