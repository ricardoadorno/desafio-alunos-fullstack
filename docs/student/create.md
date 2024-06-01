# Student - Create Student

**POST** `api/student`

## Body

- **name**: student name.
  - Type: _string_
- **cpf**: student CPF.
  - Type: _string_
- **email**: student email.
  - Type: _string_

## Request

```http
POST ...api/student HTTP/1.1
Content-Type: application/json

{
	"nome": "Ricardo",
	"cpf": "12345678901",
	"email": "r@email.com.br"
}
```

## Response (201)

```http
HTTP/1.1 201 CREATED
```
