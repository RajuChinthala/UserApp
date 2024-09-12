## To use the virtual json server
npm install -g json-server
json-server --watch db.json --port 3030
npm i react-router-dom

## start servers parallelly 
> Terminal
npm i concurrently --save-dev

## package.json
"start": "concurrently \"json-server db.json --watch --port 3001\" \"react-scripts start\""
