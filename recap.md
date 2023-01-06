# Recap

## Initialize

- First, `npm create t3-app@latest`

## Docker Postgres DB

- Create a `docker-compose-pg-only.yml` file

  - In this file:

    ```yml
    version: "3.8"
    services:
    db:
        image: postgres:14.1-alpine
        restart: always
        environment:
        - POSTGRES_USER=postgres
        - POSTGRES_PASSWORD=postgres
        - POSTGRES_DB=test
        ports:
        - "5432:5432"
        volumes:
        - db:/var/lib/postgresql/data
        - db:/var/lib/postgresql
    volumes:
    db:
        driver: local
    ```

- To run the pg use: `docker-compose -f docker-compose-pg-only.yml up` If it did not work refer to [this article](https://geshan.com.np/blog/2021/12/docker-postgres/). Also make sure pg service is turned off on your windows.

- In .env file give it this string

  ```json
  DATABASE_URL="postgresql://postgres:postgres@localhost:5432/test"
  ```

## Test the current state

1. `npm run dev`
2. `npx prisma migrate dev`
