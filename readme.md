# Клон Инстаграма. Начало
Пробуем написать клон React и клон роутера
> предполагается что уже установлен `node.js` и `npm`

Сначала надо создать новый проект. Исходный код можно взять [отсюда ](https://fs02.getcourse.ru/fileservice/file/download/a/17633/sc/261/h/bf8cd9b0c1076ed677ff78fa52c97117.zip).
Далее идем [сюда](https://gist.github.com/Aleksey-Danchin/4170890f2d50ebe6e1d6d8cf6a05a3f3) и копируем код в соответствующие файлы.

> - файл [**`.babelrc`**](https://gist.github.com/Aleksey-Danchin/4170890f2d50ebe6e1d6d8cf6a05a3f3#file-babelrc)  отвечает за настройки babel. 
> - в [**`.gitignore`**](https://gist.github.com/Aleksey-Danchin/4170890f2d50ebe6e1d6d8cf6a05a3f3#file-gitignore) указываются файла, которые нужно игнорировать, когда проект будет  залит на гит.
> - [**`webpack.config.js`**](https://gist.github.com/Aleksey-Danchin/4170890f2d50ebe6e1d6d8cf6a05a3f3#file-webpack-config-js) запускает `webpack dev server`

после добавления всех файлов надо установить зависимости командой 

    npm install --save-dev @babel/core @babel/node @babel/cli babel/preset-env @babel/plugin-transform-runtime @babel/runtime babel-loader webpack webpack-dev-server webpack-cli

>ключ --save-dev говорит о том, что мы добавляем их в `package-lock.json`

    npm install -g @babel/core @babel/node @babel/cli @babel/preset-env @babel/plugin-transform-runtime @babel/runtime babel-loader

далее создаем папку `src` и добавляет точку запуска проекта - файл `index.js`

далее пробуем запустить сервер: `npm run serve`

после успешного запуска, в браузере открываем страницу `http://localhost:8080/`

в из app/index.html копируем код в наш index.html и добавляем:

    <script  src="dist/app.js"></script>

в `/src` создаем файл `Application.js`
с кодом: 

    export default class Application{
        constructor(args = {}){ // сюда в качестве аргумента передается точка монтированиея приложения
            this.root = args.el;
        }
    }

в index.js добавляем 

    console.log('start from index.js');
        
    import Application from './Application';
    
    const app = new Application({
        el: document.querySelector('#app')
    }); // создаем приложение
    
    console.log(app);
 и в index.html добавляем 

     <div  id="app"></div>

**Делаем роутинг**

> Маршрутизация (англ. **Routing**) — процесс определения маршрута
> данных в сетях связи.

создаем файл src/Router.js

    export  default  class  Pouter{}

в src/Application.js добавляем роутер

    import Router from './Router';
    
    export default class Application{
        constructor(args = {}){ // сюда в качестве аргумента передается точка монтированиея приложения
            this.root = args.el;
    
            this.router = new Router;
        }
    }
далее надо настроить как приложение  будет реагировать  на различные пути.
в /index.js добавим `app.router.add('/',  null);`

далее в роутер добавляем конструктор и метод add

    export default class Pouter{
        constructor(){
            this.routes = [];
            this.route = null; // текуший роут
        }
        add(path, container){
            this.routes.push({
                path, container
            })
        }
    }
а дальше в разные классы добавляем куски кода о которых оч нудно писать, проще посмотреть исходники с комментами