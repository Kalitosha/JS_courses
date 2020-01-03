//тесты на mocha.js
// unit тесты
const should = require("should"); // из chai.js
const Matrix = require("./marix.js");

describe("Тест Matrix класса", () => {
  // форма заголовка теста
  it("Создание экземпляров класса", () => {
    const a = new Matrix(`
            1 4 7
            2 5 1
            5 8 0
        `);

    a.body.should.be.eql([
      [1, 4, 7],
      [2, 5, 1],
      [5, 8, 0]
    ]);

    const b = new Matrix(`
            1
        `);

    b.body.should.be.eql([[1]]);
  });

  it("Сложение двух матриц Matrix.getSum", () => {
        const a = new Matrix(`
                1 4 7
                2 5 1
                5 8 0
            `);

        const b = new Matrix(`
                2 4 7
                2 6 1
                5 8 2
            `);

        const c = Matrix.getSum(a, b);
        c.body.should.be.eql([
            [3, 8, 14],
            [4, 11, 2],
            [10, 16, 2]
        ]);
    });

    it("Транспонирование Matrix.getSum", () => {
        const a = new Matrix(`
                1 4 7
                2 5 1
                5 8 0
            `);

        const c = Matrix.getTranspose(a);
        c.body.should.be.eql([
            [1, 2, 5],
            [4, 5, 8],
            [7, 1, 0]
        ]);
    });

});
