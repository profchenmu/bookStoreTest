## Run Mock api server

### `cd ./back-end`
In the back-end project directory, you can run:

### `npm install`
### `npm start`

The api server will run on [http://localhost:9000](http://localhost:9000).<br>
Only one api is used by project: [http://localhost:9000/api/books](http://localhost:9000/api/books)<br>
The api server is running to provide date for Font-end dev server and Font-end mock server.

## Run front-end Dev server

### `cd ./front-end`
In the front-end project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
The build is minified and the filenames include the hashes.<br>

## Run Mock server

### serve -s dist
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## How to config base url

### Vim ./Font-end/redux/api.js
Replce `baseUrl` for back-end server. 


