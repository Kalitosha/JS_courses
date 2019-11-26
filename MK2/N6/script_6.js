// Script 6
// Реализуйте singleton класс UserStatistic,
// который будет собирать статистику пользовательской деятельности:
// координаты мыши
// время кликов
// прожатые клавиши
/***************************************************************************/

(function() {
  let instance = null;

  class UserStatistic {
    constructor() {
      if (instance) {
        return instance;
      }      
      this.coordinates = [];
      this.time = [];
      this.nameKeys = [];
      instance = this;
    }

    mouseCoordinates(x, y) { // координаты мыши      
        //console.log(x, y);
        this.coordinates.push({'x':x, 'y':y});
    }

    clickTime(timeStamp) { // время кликов      
        this.time.push(timeStamp);
        //console.log(timeStamp);
    }

    pressedKeys(code) { // прожатые клавиши      
      //console.log(code);
        this.nameKeys.push(code);
    }
  }
  window.UserStatistic = UserStatistic;
})();

const userStatistic = new UserStatistic();
const userStatistic1 = new UserStatistic();

//alert(userStatistic===userStatistic1);
/***************************************************************************/

document.onmousemove = function(e) {
  //console.log(e.clientX, e.clientY);
  userStatistic.mouseCoordinates(e.clientX, e.clientY);
};

document.onclick = function(e) {
  //console.log(e.timeStamp);
  userStatistic.clickTime(e.timeStamp);
};

document.onkeydown = function(e) {
  //console.log(e.code);
  userStatistic.pressedKeys(e.code);
};

document.getElementById("btn").onclick = function btnClick(){
  if(userStatistic)
  console.log(userStatistic);
}