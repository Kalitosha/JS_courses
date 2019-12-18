// Реализуйте Strategy паттерн в объекте с функциями сортировки чисел.
// Так же реализуйте сортировку по длине записи числа.

const sortMethods = {
	 ASC: (a, b) => a - b,
	 DESC: (a, b) => b - a,
	 ABSOLUTE_ASC: (a, b) => Math.abs(a) - Math.abs(b), // по возр по модулю
	 ABSOLUTE_DESC: (a, b) => Math.abs(b) - Math.abs(a)
}

const numbers = (new Int16Array(5)).map(() => Math.floor(Math.random() * 1000) - 500)

console.log(numbers) // Int16Array [ 29, 21, -5, -50, -22, 39, 22, 40, -39, 17 ]

console.log("ASC", numbers.sort(sortMethods.ASC)); // ASC Int16Array [ -50, -39, -22, -5, 17, 21, 22, 29, 39, 40 ]
console.log("DESC", numbers.sort(sortMethods.DESC)); // DESC Int16Array [ 40, 39, 29, 22, 21, 17, -5, -22, -39, -50 ]
console.log("ABSOLUTE_ASC", numbers.sort(sortMethods.ABSOLUTE_ASC)); // ABSOLUTE_ASC Int16Array [ -5, 17, 21, 22, -22, 29, 39, -39, 40, -50 ]
console.log("ABSOLUTE_DESC", numbers.sort(sortMethods.ABSOLUTE_DESC)); // ABSOLUTE_DESC Int16Array [ -50, 40, 39, -39, 29, 22, -22, 21, 17, -5 ]
/**/

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

sortMethods.RECORD_LENGTH = (a, b) => a.length - b.length;
console.log("RECORD_LENGTH", numbers.sort(sortMethods.RECORD_LENGTH));




