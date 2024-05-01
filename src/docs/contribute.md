## Contribute

This documentation provides all necessary information about the contribution of this project.

------------------------------------------------------------------------------------------

### Project structure

```bash
src
├───api
│   ├───controllers
│   ├───middlewares
│   ├───routes
│   └───services   
│
├───constants
│
├───db
│   ├───mocks
│   ├───models
│   ├───repositories
│   └───config.ts
│
├───docs
│   ├───apiRoutes.md
│   └───...
│   
├───errors
│   ├───BaseError.ts
│   └───...
│
└───types
```

### Development

Create docker network vero-network

```bash
    docker network create vero-network
```

Init Database with Docker

Run Dockerfile in src/db folder

```bash
    docker build -t vero-db-image .
```

```bash
    docker run --name vero-db-container --network vero-network -e POSTGRES_PASSWORD=root -p 5432:5432 -d vero-db-image
```

> Connect to the database and add a SystemGroup (db username: postgres)

Create docker container for the backend 

Run Dockerfile in root folder

```bash
    docker build -t vero-backend-image .
```

```bash
    docker run --name vero-backend --network vero-network -p 3000:3000 -d vero-backend-image
```

------------------------------------------------------------------------------------------

```bash
    docker run --name vero-db --network vero-network -e POSTGRES_PASSWORD=vero -e POSTGRES_DB=vero -p 5432:5432 -d postgres
```

execute the commands from the root folder

```bash
    docker build -t vero-backend .
```

### Run

```bash
   docker run --name vero-backend --network vero-network -p 3000:3000 -d vero-backend
```