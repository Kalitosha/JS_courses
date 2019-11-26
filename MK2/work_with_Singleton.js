import Singleton from './Singleton';
// const Singleton = require('./Singleton'); // это по-старому

const s1 = new Singleton;
const s2 = new Singleton;

console.log('s1 === s2: ', s1 === s2);
