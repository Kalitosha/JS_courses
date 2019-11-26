// Script 5
// Доработайте класс Basket так, чтобы приведенный скрипт работал.
// Подсказка: totalPrice геттер.

class Basket {
  constructor() {
    this.goods = [];
  }

  get totalPrice(){ // это можно сделать изящнее?
    let totalprice = 0;
    this.goods.forEach(element => {
      totalprice += element.price * element.count;
    });
    return totalprice;
  }

  addGood(...args) {
    // ...
    this.goods.push(...args);
  }

  inspect() {
    // ...
    console.log('Продукт / Количество / Общая цена');
    this.goods.forEach(element => {
      console.log(`${element.label} / ${element.count} / ${element.count * element.price}`);
    });
    


  }


  /*  ...   */
}

const basket = new Basket();

basket.addGood({
  label: "Молоко",
  price: 120,
  count: 1
});

basket.addGood({
  label: "Печенье",
  price: 43,
  count: 10
});

basket.addGood({
  label: "Молоко",
  price: 120,
  count: 2
});



basket.inspect();

/*
Продукт / Количество / Общая цена
Молоко / 3 / 360
Печенье / 10 / 430
*/

console.log('totalPrice=', basket.totalPrice); // 790
