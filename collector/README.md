<!-- PROJECT LOGO -->
<br />
<p align="center">

[comment]: <> (<a href="/">)
[comment]: <> (<img src="images/logo.png" alt="Logo" width="80" height="80">)
[comment]: <> (</a>)
</p>
<h3 align="center">Сборщик данных ECHO</h3>
<p align="center">
  Описание проекта
</p>

## **_Содержание:_**

###### _В главе `использоние` указанны названия директорий проекта_

- [Начало работы](#gettingStarted)
    - [Режим разработки](#developmentMode)
    - [Правила работы с ветками](#rulesforworkingwithbranches)
    - [Тесты](#tests)
- [Директории](#directories)
    - [components](#components)
        - [atoms](#atoms)
            - [icons](#components-atoms-icons)

## Начало работы <a name="gettingStarted"></a>

Выполните следующие команды для запуска локального проекта

### Режим разработки <a name="developmentMode"></a>

```sh
yarn dev
```

### Сборка проекта <a name="buildingTheProgect"></a>

Эта команда выполняется для сборки проекта

```sh
yarn build
```

### Тесты (На данный момент тесты в проекте отсутствуют) <a name="tests"></a>

Для разового запуска тестов введите команду:

```sh
yarn test
```

Для запуска тестов в режиме `watch` введите команду:

```sh
yarn test:watch
```

### Правила работы с ветками <a name="rulesforworkingwithbranches"></a>

Создайте свою ветвь `git checkout -b {userName}/{number-task}` пример: `denis/AUT-38`

Зафиксируйте свои изменения `git commit -m 'docs: description of commits'`

### Теги для коммитов:

- fea: — используется при добавлении новой функциональности уровня приложения
- fix: — если исправили какую-то серьезную багу
- docs: — всё, что касается документации
- style: — исправляем опечатки, исправляем форматирование
- ref: — рефакторинг кода приложения
- test: — всё, что связано с тестированием
- chore: — обычное обслуживание кода
- release: — ветка выпуска. (Создается от ветки develop)

Push to the Branch `git push origin {userName}/{number-task}`

<hr>

<!-- Директории -->

## Директории (Описать остальные директории) <a name="directories"></a>

Здесь будет описана структуры проекта

### components <a name="components"></a>

Компоненты проекта

### Atoms `src/components/atoms` <a name="components-atoms"></a>

Атомы - это маленькие элементы интерфейса. Например: кнопки, иконки, поля и другие мелкие
элементы.

<hr>

### Icons `../atoms/icons` <a name="components-atoms-icons"></a>

Здесь лежат все иконки проекта

### Иконка аналилитики

```jsx
<Analysis isDark={true}/>
```

###### API

```jsx
import { Analysis } from '../components/atoms'; // поправить импорт после настройки Babel
```

<table>
    <tr style="text-align: left;">
        <th>Название</th>
        <th>Type</th>
        <th>Default</th>
        <th style="width: 100%;">Описание</th>
    </tr>
    <tr>
        <td>fill</td>
        <td>string</td>
        <td>white</td>
        <td>Цвет иконки</td>
    </tr>
    <tr>
        <td>width</td>
        <td>string</td>
        <td>36</td>
        <td>Ширина иконки</td>
    </tr>
    <tr>
        <td>height</td>
        <td>string</td>
        <td>36</td>
        <td>Высота иконки</td>
    </tr>
    <tr>
        <td>isDark</td>
        <td>boolean</td>
        <td>true</td>
        <td>Стиль иконки</td>
    </tr>
    <tr>
        <td>className</td>
        <td>string</td>
        <td></td>
        <td>Внешний класс иконки</td>
    </tr>
</table>
