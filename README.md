## Install the App
* Download or *git clone* the repository.

## Add environment variables
### Client
* Run *npm install* on the client.
* Rename .env.example as .env
* Set REACT_APP_BASE_URL environment variable to your server's URL.
* For example:
  * REACT_APP_BASE_URL=http://localhost:3001

### Server
* Runs *npm install* on the server.
* Rename .env.example as .env
* Set SERVER_PORT and SERVER_HOST environment variables to your server's port and host.
* For Example:
  * SERVER_PORT=3001
  * SERVER_HOST=http://localhost

### Root
* Runs *npm install* on the root.

## Run the App
### Option 1 (manually, one after the other)
```
cd server
npm run start
```
```
cd client
npm run start
```

### Option 2 (concurrently)
*From the Root*

```
npm run dev
```


The browser will launch automatically.


## Run Tests


To run tests in client
```
cd client
npm run test
```

To run tests in server
```
cd server
npm run test
```