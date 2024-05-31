# Student - Create Student

**PUT** `api/student/:id`

## Body

- **name**: student name. (optional)
  - Type: _string_
- **cpf**: student CPF. (optional)
  - Type: _string_
- **email**: student email. (optional)
  - Type: _string_

## Request

```http
PUT ...api/student/1 HTTP/1.1
Content-Type: application/json

{
	"name": "Ricardo",
	"cpf": "12345678901",
	"email": "r@email.com.br"
}
```

## Response (200)

```http
HTTP/1.1 200 OK
```
