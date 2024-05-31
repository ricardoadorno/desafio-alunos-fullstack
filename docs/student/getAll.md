# Student - Get Student by ID

**GET** `api/student`

## URL Query Parameters

- **name**: student name. (optional)
  - Type: _string_
- **cpf**: student CPF. (optional)
  - Type: _string_
- **email**: student email. (optional)
  - Type: _string_

## Request

```http
GET ...api/student HTTP/1.1
```

## Response (200)

```http
HTTP/1.1 200 OK
[
    {
        "id": 1,
        "name": "Ricardo Adorno",
        "cpf": "123456789101",
        "email": "r@emial.com",
    },
    {
        "id": 2,
        "name": "Ricardo Adorno",
        "cpf": "123456789101",
        "email": "rr@email.com",
    }
]
```
