# Simple login/register API

## Run Locally

Clone the project

```bash
  git clone https://github.com/Toren2313/login-api.git
```

Go to the project directory

```bash
  cd login-api
```

Install dependencies

```bash
  npm install
```

Build project

```bash
  npm run build
```

Start the server

```bash
  npm run start
```

## API Reference

### Main Route (GET)

```
 GET /
```

#### Response

```json
{
  "content": "Hello, World!"
}
```

### Auth Route (POST)

```
POST /auth/register
```

#### Parameters (body):

| Parameter  | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `username` | `string` | **Required**. Your account name |
| `password` | `string` | **Required**. Password          |

#### Response

```json
{
  "content": "Successfully created user"
}
```

### Auth Route (POST)

```
POST /auth/login
```

#### Parameters (body):

| Parameter  | Type     | Description                     |
| :--------- | :------- | :------------------------------ |
| `username` | `string` | **Required**. Your account name |
| `password` | `string` | **Required**. Password          |

#### Response

```json
{
  "content": "Succesffuly logged into acount: [username]",
  "jwt": {
    "refreshToken": "[refresh token]",
    "token": "[token]"
  }
}
```

| Status Code | Description             |
| :---------- | :---------------------- |
| 200         | `OK`                    |
| 201         | `CREATED`               |
| 202         | `ACCEPTED`              |
| 302         | `FOUND`                 |
| 400         | `BAD REQUEST`           |
| 401         | `UNAUTHORIZED`          |
| 404         | `NOT FOUND`             |
| 500         | `INTERNAL SERVER ERROR` |

## Authors

- [@Toren2313](https://github.com/Toren2313)
