# JS_courses
Наработки по курсу 'Продвинутый JS'

___
НАСТОЙКА ОКРУЖЕНИЯ
--
1. Cоздаем файл **``.babelrc``** со следующим содержимым:

```
{
	"presets": ["@babel/preset-env"],
	"plugins": ["@babel/plugin-transform-runtime"]
}
```
2. Если не используется creater project (Vue CLI, React CLI и т/д), нужно создать файл **``.gitignore``**

```
.DS_Store
node_modules
/dist

# local env files
.env.local
.env.*.local

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw*
```
3. Далее работа с консолью. Установка `babel` и `webpack-dev-server`
- `babel` нужен для трансляции из ES6 в старый, рабочий стандарт (да-да, нод до сих пор не работает с новыми плюшками)
- `webpack (dev-server)` сборщик проекта

```
:~$ npm install --save-dev @babel/core @babel/node @babel/cli @babel/preset-env @babel/plugin-transform-runtime @babel/runtime babel-loader webpack webpack-dev-server webpack-cli
```
после вызываем команду (устанавливаем зависимости глобально)

```
:~$ npm install -g @babel/core @babel/node @babel/cli @babel/preset-env @babel/plugin-transform-runtime @babel/runtime babel-loader
```

4. `babel` транслятор готов! Теперь запускаем скрипты командой 
```
babel-node имя_файла
```
5. Если вы работаете по ОС Windows, может появиться ошибка с подобным текстом: 
```
Невозможно загрузить файл ....ps1, так как выполнение сценариев отключено в этой системе
```
Причина ошибки в том, что в системе Windows по умолчанию запрещено запускать пакетные файлы, скрипты PowerShell.
Политика выполнения скриптов запрещает выполнять эти самые скрипты. Узнать текущее значение политики можно командой (вводить надо в оболочке PowerShell):
```
Get-ExecutionPolicy
```
Значение ``Restricted`` говорит о том, что запрет как раз таки стоит.
Чтобы разрешить выполнение файлов с расширением ``.ps1``, то есть чтобы запустить скрипт PowerShell в Windows, выполните команду:
```
Set-ExecutionPolicy unrestricted
```
Когда поступит запрос, нужно ввести ``Y``.

> Вновь включить запрет на выполнение пакетных файлов в PowerShell можно командой *``Set-ExecutionPolicy Restricted``* 

6. Для сборки проекта создаем файл index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script src='/dist/app.js'></script>
</body>
</html>
```
7. В package.json добавляем
```
"scripts": {
	"serve": "webpack-dev-server --mode development",
	"nodemon": "nodemon --exec babel-node server.js",
	"build": "webpack --mode production",
	"test": "mocha --require @babel/register"
},
```
> Добавленные скрипты нужны для краткой записи длинных команд. Их называют alias (в пер. псевдоним)
>
> Запуск команды ``serve`` равноценен ``webpack-dev-server --mode development``

8. Создаем файл с настройками для сборщика``webpack.config.js``
```
const path = require('path')

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, '/dist'),
		publicPath: '/dist'
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: '/node_modules/'
		}]
	},
	devServer: {
		overlay: true,
    port: 5005
	}
}
```
> ``entry`` - точка входа

> ``output`` - тоска выкладки

> ``module`` - модули

> ``devServer: port [если нужно, указываете свой порт или вообще убираете эту строчку]`` тот, что по умолчанию (8080) может быть занят (как это было у меня)

9. В папке проекта должна быть папка scr, в которой лежит файл index.js - точка входа приложения (мы ее в конфиге вебпак задали).
Далее запускаем сервер разработки
```
 npm run serve
 ```
И открываем в браузере ``http://localhost:5005/``
