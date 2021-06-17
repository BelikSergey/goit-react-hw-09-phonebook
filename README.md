
1. npx create-react-app . (имя_папки_проекта)
2. npm install --save-dev prop-types
3. npm install axios
4. npm install react-router-dom
5. npm install react-loadable
6. npm install react-transition-group
7. npm install react-redux
8. npm install @reduxjs/toolkit
Деплой на NetliFY
1. В корне проекта создаем файл netlify.toml
  с настройками
[build]
publish = "build"

[[redirects]]
from = "/*"
to = "index.html"
status = 200

2. npm install netlify-cli -g

3. netlify login

4. Скрипты
"predeploy": "npm run build",
    "deploy": "netlify deploy -p"

5. npm run deploy

6. клавишей вниз выбираем создать и настроять новый проект

7. команду разработчиков оставляем

8. Придумываем уникальное имя