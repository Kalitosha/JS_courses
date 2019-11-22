console.log('it`s from script.js');

function getSum (...args){
    if(!args.length){
        return 0;
    }        
    return args.reduce((a, b) => a + b);
}

function getMax(...args){
    return Math.max(...args)
}

export default getSum // экспорт по умолчанию 

export {
    getSum, 
    getMax
}