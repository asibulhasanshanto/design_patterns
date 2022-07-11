class singleton{
    private static instance:singleton;

    private constructor(){}
    public static getInstance():singleton{
        if(!singleton.instance){
            singleton.instance=new singleton();
        }
        return singleton.instance;
    }
}

//client code
function clientCode(){
    const instance1=singleton.getInstance();
    const instance2=singleton.getInstance();
    if(instance1===instance2){
        console.log("both are same");
    }
    else{
        console.log("both are different");
    }
}
clientCode();