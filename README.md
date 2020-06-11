# API for Testing Platform

Before running that API instance, please make sure a RabbitMQ instance for API-test client communication, a MinIO instance to be used as file storage, and a MongoDB database instance are already started and accessible as well.

Below are some simple commands to run RabbitMQ, MinIO or MongoDB on Docker, locally.

```bash
# Run RabbitMQ on port 5672 with management interface on port 15672
docker run -d \
    --name rabbitmq -p 5672:5672 -p 15672:15672 \
    -e RABBITMQ_DEFAULT_VHOST="my-virtual-host" \
    -e RABBITMQ_DEFAULT_USER="user" \
    -e RABBITMQ_DEFAULT_PASS="pass" \
    rabbitmq:management

# Run MinIO on port 9000
docker run -d \
    --name minio -p 9000:9000 \
    -e MINIO_ACCESS_KEY="my-access-key" \
    -e MINIO_SECRET_KEY="my-secret-key" \
    minio/minio minio server "/data"

# Run MongoDB on port 27017
docker run -d \
    --name mongo -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME="username" \
    -e MONGO_INITDB_ROOT_PASSWORD="password" \
    mongo
```

## 1. Pull the repository

```bash
git clone https://gitlab.com/cmpe492/testing-api.git && cd testing-api
```

Run the commands below inside `testing-api` folder on terminal.

## 2. Check Node version and Yarn installation

The app requires Node version 12 or newer.

```bash
node -v
yarn -v
```

Sample output:

> v12.18.0 \
> 1.22.4

## 3. Install dependencies

```bash
yarn install
```

## 4. Set environment variables

The app requires several environment variables to be set before running, otherwise it throws error. These environment variables are mainly related to the other components required that are mentioned at the first section in this document: RabbitMQ, MinIO and MongoDB. Given below is a sample `.env` file.

```bash
PORT=3000   # Port to serve the API through
sessionSecret="session secret" # Session secret to be used for cookies. Any string would work, complex ones recommended.

rabbitMQURL="rabbitmq-subdomain.mydomain.tld"   # RabbitMQ instance URL
rabbitMQVHost="/my-virtual-host"                # Virtual host that should be created beforehand
rabbitMQUser="user"                             # A user that has access to given virtual host
rabbitMQPass="pass"                             # Password of the user given above

minioURL="minio-subdomain.mydomain.tld" # MinIO instance URL
minioAccessKey="my-access-key"          # MinIO access key
minioSecretKey="my-secret-key"          # MinIO access secret key

dbURL="mongodb://subdomain.mydomain.tld:27017/collectionName" # MongoDB instance URL with port
dbUsername="username"   # MongoDB username that has access to the collection given in URL above
dbPassword="password"   # MongoDB user's password

```

## How to start development server locally

The app runs on **port 3000** by default, which can be changed by `PORT` environment variable if needed, which is documented in the above section. The command also starts debugger websocket on **port 9229**, so make sure that port isn't used.

```bash
yarn dev
```

## How to start the API for production

```bash
yarn start
```

## Contact info

bahadirhocamoglu@gmail.com
