// Напишите класс UI с методом mountTable и с фабричным методом getTable.
// Унаследуйте UI в классах Bootstrap и Material.
// Продемонстрируйте, как это будет работать на реальном примере.
// P.S. На реальном примере значит подключите стили bootstrap и material design,
// создайте таблицы и монтируйте их с помощью экземпляров соответствующих классов.

/*
class Bootstrap{
  getButton(){
    const el = document.createElement('div');
    el.className = 'button button-default';
    return el;
  }
}

class Material {
  getButton(){
    const el = document.createElement('div'); // это фабрика
    el.className = 'btn mx-auto';
    return el;
  }  
}
*/

/******************************************************/

class UI {
  constructor() {
    this.table = document.createElement("div");
    this.table.className = "table";
  }

  static getTable() { // фабрика // должен создавать таблицу    
    throw Error('Abstract method "getTable" was called.');
  }

  mountTable() { // вствляет таблицу в DOM   
    document.querySelector("body").append(this.table);
    return this;
  }

  showTable(){
    console.log(this.table);
    return this;
  }
}

//////////////////////////////////
class Bootstrap extends UI {
  constructor() {
    super();
    this.tableBody = `<thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Имя</th>
          <th scope="col">Фамилия</th>
          <th scope="col">Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>`;
    this.table.innerHTML = `<table class="table">` + this.tableBody;
  }

  static getTable() {
    return new Bootstrap();
  }
}

//////////////////////////////////
class Material extends UI {
  constructor() {
    super();
    this.table.className = "mdc-data-table";
    this.tableBody = `<thead>
      <tr class="mdc-data-table__header-row">
        <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Dessert</th>
        <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Carbs (g)</th>
        <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Protein (g)</th>
        <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Comments</th>
      </tr>
    </thead>
    <tbody class="mdc-data-table__content">
      <tr class="mdc-data-table__row">
        <td class="mdc-data-table__cell">Frozen yogurt</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.0</td>
        <td class="mdc-data-table__cell">Super tasty</td>
      </tr>
      <tr class="mdc-data-table__row">
        <td class="mdc-data-table__cell">Ice cream sandwich</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">37</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.33333333333</td>
        <td class="mdc-data-table__cell">I like ice cream more</td>
      </tr>
      <tr class="mdc-data-table__row">
        <td class="mdc-data-table__cell">Eclair</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">6.0</td>
        <td class="mdc-data-table__cell">New filing flavor</td>
      </tr>
    </tbody>
  </table>`;

    this.table.innerHTML = `<table class="mdc-data-table__table" aria-label="Dessert calories">` + this.tableBody;
  }

  static getTable() {
    return new Material();
  }
}

const bTable = Bootstrap.getTable().mountTable().showTable();
const mTable = Material.getTable().mountTable().showTable();
