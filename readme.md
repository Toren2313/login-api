# Simple login/register API

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

| Parameter   | Type     | Description                                        |
| :---------- | :------- | :------------------------------------------------- |
| `username`  | `string` | **Required**. Your accounnt name                       |
| `password`  | `string` | **Required**. Password |

#### Response

```json
{
  "content": "Successfully created user"
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
