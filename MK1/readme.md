МК 1 
===


Команды консоли
--

>  **`ls`** (list show) — выдает список файлов в каталоге
  >   **`cd`** (change directory) — вывод имени или смена текущего каталога
  >  **`mkdir`** (make directory) — создать папку
  >  **`rm`** (remove) — удалить файл
  >  **`rm -rf`** (remove recursive and file) — удалить папку и все из нее
  >  **`rm -f`** (remove file) — принудительное удаление файла

Команды для Node.js
--

1.  > **`node -h`**  — показывает список всех доступных команд Node.js.  
2.  >**`node-v`**,  **`node --version`**  — показывает установленную версию Node.js.
___
3.  > **`npm -h`**  — показывает список всех доступных команд пакетного менеджера (`npm`).
4. > **`npm -v`**,  **`npm --version`**  — показывает установленную версию  `npm`.
5. > **`npm install package, npm i package`** — позволяет установить любой пакет по его имени. 
Если при этом к команде добавить префикс **`-g`** пакет будет установлен глобально на весь компьютер. 
6. > Если вы хотите установить конкретную версию пакета, воспользуйтесь префиксом  **`@`** с номером версии. Например,  **`npm install package@1.0.1`**.
7. > **`npm uninstall package`** — удаляет установленный пакет по имени. 
8. > Команда **`npm list package`** — покажет версию установленного пакета
9. > **`npm view package version`** — покажет последнюю версию пакета, которая существует.

Установка зависимостей

10. >**`npm install`**  Устанавливает все пакеты, перечисленные в package.json 
11. >**`npm install express --save`**  Устанавливает express и вносит запись о нем в package.json в секцию dependencies 
12. >**`npm install grunt --save-dev`** Устанавливает grunt и вносит запись о нем в package.json в секцию devDependencies 
13. > **`npm init -y`**  создается *package.json* по умолчанию (`-y`/  `--yes`чтобы полностью пропустить вопросник)
14. **`npm install config`** создается файл *package-lock.json*
15. > **`node + название файла`** для запуска проекта

Немного про взаимодействие разбросанных по разным файлам кусков JS кода
--
Для того, чтобы какой-то кусок кода был виден из вне, надо прописать в файле "родителе", что именно мы хотим показать миру:
``/*старая версия*//module.exports = "название объекта или модуля"``
**`` export default 'что';``**
> export default («эспорт по умолчанию»)

Чтобы увидеть этот кусок надо прописать: 
 ``/*старая версия*//const Name = require('путь к файлу родителю')``  
> путь лучше указывать без расширения, т.к. это может оказаться папка с файлом

**``import 'что' from 'откуда';``**

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
3. Далее работа с консолью. Установка `babel` и `webpack (dev-server)`
- `babel` нужен для трансляции из ES6 в старый, рабочий стандарт (да-да, нод до сих пор не работает с новыми плюшками)
- `webpack (dev-server)` нужен для 

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
Когда поступит запрос, нужно ввести ``Y``. Готово

```sh 
Вновь включить запрет на выполнение пакетных файлов в PowerShell можно командой *``Set-ExecutionPolicy Restricted``* 
```


