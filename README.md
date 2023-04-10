## Как развернуть приложение в вебе.

Для этого небохдимо выполнить сборку приложения с помощью команды:
`ionic run build`

Будет создана папка `dist` с файлами приложения. Содержимое папки `dist` можно
задеплоить. Например, на
[Netlify](https://643443bcdc4a9a4d83100249--precious-squirrel-284baa.netlify.app/)

## Как собрать apk для Android (Должна быть установлена Android Studio)

1. Создаем нативный проект командой: `ionic capacitor add android`

2. Запускаем Android Studio командой: `ionic capacitor open android`

3. Выполняем сборку проекта в Android Studio.

4. Файл `app-debug.apk` лежит в папке
   `папка приложения\android\app\build\outputs\apk\debug\`
