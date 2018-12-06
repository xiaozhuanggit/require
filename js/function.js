

;(function(){


    //用代理实现单例模式

    var CreateDiv=function(html){
        this.html=html;
        this.init();
    };

    CreateDiv.prototype.init=function(){
        var div=document.createElement('div');
        div.innerHTML=this.html;
        document.body.appendChild(div);
    }

    //代理
    var ProxySingle=(function(){
        var instance;

        return function(html){
            console.log(instance)
            if(!instance){
                instance=new CreateDiv(html);
            }
            return instance;
        }
    })();

    var a=new ProxySingle('sven1')
    var b=new ProxySingle('sven2')

    alert(a===b)


})()