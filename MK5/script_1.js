// Организуйте подсчет факториала с использованием Memento.
// Сделайте замеры скорости выполнения функции впервой и в последующие разы.
////////////////////////////////////////////////////////////////////////////

/* 
class Memento {
	constructor () {
		this.history = {}
	}

	getSum () { // ключ - результат вычисления ф-ции
		const key = JSON.stringify(arguments) // создаем ключ

		if (this.history[key]) { // проверяем есть ли у нас уже такой ключ
			return this.history[key]
		}

		return this.history[key] = [].reduce.call(arguments, (a, b) => a + b)
    }
    

}

const memento = new Memento
const array = (new Int16Array(1000)).map((e, i) => i + 1)

console.time('First')
memento.getSum(...array)
console.timeEnd('First')

console.time('Second')
memento.getSum(...array)
console.timeEnd('Second')


// First: 1.406ms
// Second: 0.490ms
*/

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

class Memento {
	constructor () {
		this.history = {}
	}

	getResult (n) { // ключ - результат вычисления ф-ции
		const key = JSON.stringify(n) // создаем ключ

		if (this.history[key]) { // проверяем есть ли у нас уже такой ключ
			return this.history[key]
		}

        return this.history[key] = this.factorial_2(n);


    }  

    /*factorial(n){
        console.log(n);
        if (n <= 1) return 1;
        return n * this.factorial(--n);
    }*/

    factorial_2(n){
        for (let val = 1, i = 1;i<=n; i++){
            val *= i; 
            console.log(val, i);
            
            if (i >= n) return val;
            else {
                const key = JSON.stringify(i);
                this.history[key] = val;
            }
        }       
    }
}

const memento = new Memento;

console.time('First');
memento.getResult(5);
console.timeEnd('First');

console.time('Second');
memento.getResult(5);
console.timeEnd('Second');

memento.getResult(3);
memento.getResult(4);

console.log(memento.history);