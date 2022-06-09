function receivesAFunction (callback){
    return callback();
}
function returnsANamedFunction (){
    return function aNamedFunction(){
        return `Hello`;
    }
}
function returnsAnAnonymousFunction(){ 
    return () => `Hello`;
}
