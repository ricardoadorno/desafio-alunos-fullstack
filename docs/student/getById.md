# Student - Get Student by ID

**GET** `api/student/:id`

## URL Parameters

- **id**: inique identifier of the student.
  - Type: _number_

## Request

```http
GET ...api/student/1 HTTP/1.1
```

## Response (200)

```http
HTTP/1.1 200 OK

{
	"id": 1,
	"name": "Ricardo Adorno",
	"cpf": "123456789101",
	"email": "r@emial.com",
}
```
