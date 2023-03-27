# Employee Rest API

This is a RESTful API for managing employee records. The API allows users to add, update, delete employee records and keep track of the createdAt and updatedAt times.

**API LINK:** https://apis-employee.onrender.com/

### Technologies

The following technologies were used to create this API:

- Node.js
- Express.js
- MongoDB

### Getting Started

To get started with this API, you will need to do the following:

1. Clone this repository to your local machine
2. Install the necessary dependencies using the command `npm install`.
3. Make sure you have MongoDB installed on your local machine. If you do not have MongoDB installed, you can download it from the [**official MongoDB website**](https://www.mongodb.com/).
4. Create a `.env` file at the root of the project and add the following variables:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/employee-records
```

5. Run the API using the command `npm start`.

### Endpoints

The following endpoints are available in this API:

#### GET /employees

Returns a list of all employees.

#### POST /employees

Adds a new employee to the database.

Request Body

**sample:**

```
{
    "_id": "6420f17baf8d4a137b1ecb1c",
    "name":"Nagarjuna Chenna",
    "designation":"Frontend Developer",
    "phone":"9391568082",
    "email":"chennanagarjuna@gmail.com",
    "age":23,
    "createdAt": "27-03-2023  6:59:31 am",
    "updatedAt": "27-03-2023  6:59:31 am",
    "__v": 0
}
```

Return Response Body

```
{
    "name":"Nagarjuna Chenna",
    "designation":"Frontend Developer",
    "phone":"9391568082",
    "email":"chennanagarjuna@gmail.com",
    "age":23
}
```

#### PUT /employees/:id

Updates an existing employee record.
Update any details

Request Body

**samples:**

```
{
    "name":"Chenna Nagarjuna",
}
```

```
{
    "name":"Chenna Nagarjuna",
    "designation":"Backend Developer",
}
```

#### DELETE /employees/:id

Deletes an existing employee record.

### Schema

The following is the schema for the employee records:

```
{
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
    , createdAt: { type: String },
    updatedAt: { type: String }
}
```

The `createdAt` and `updatedAt` fields are automatically with `pre` middleware set by the API.
