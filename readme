#  School APi


##  Tech Stack


- **Backend:** Expressjs
- **Database:** MySql


---





## Api Endpoinsts

### 1.POST:  /api/v1/school/addSchool

```bash
   example body 
  {
    "name": "Blue Ridge Secondary School",
    "address": "321 Hilltop Drive, Sylhet",
    "latitude": 24.8949,
    "longitude": 91.8687
  }
```
### 2.GET: /api/v1/school/listSchools?latitude=23.8103&longitude=90.4125
`Functionality:` Fetches all schools from the database, sorts them based on proximity to the user's location, and returns the sorted list.
`Sorting Mechanism:` Calculate and sort by the geographical distance between the user's coordinates and each school's coordinates.
```bash
example response 
[
    {
        "id": 1,
        "name": "Green Valley High School",
        "address": "123 School Street, Dhaka",
        "latitude": 23.8103,
        "longitude": 90.4125,
        "createdAt": "2025-05-27T05:05:07.000Z",
        "updatedAt": "2025-05-27T05:05:07.000Z",
        "distance": 0
    },
    {
        "id": 3,
        "name": "Maple Leaf International School",
        "address": "456 Lake Road, Dhaka",
        "latitude": 23.7505,
        "longitude": 90.37,
        "createdAt": "2025-05-27T05:06:57.000Z",
        "updatedAt": "2025-05-27T05:06:57.000Z",
        "distance": 7.93
    },
    {
        "id": 2,
        "name": "Riverbank Public School",
        "address": "654 Riverside Lane, Khulna",
        "latitude": 22.8456,
        "longitude": 89.5403,
        "createdAt": "2025-05-27T05:06:35.000Z",
        "updatedAt": "2025-05-27T05:06:35.000Z",
        "distance": 139.42
    },
    {
        "id": 4,
        "name": "Blue Ridge Secondary School",
        "address": "321 Hilltop Drive, Sylhet",
        "latitude": 24.8949,
        "longitude": 91.8687,
        "createdAt": "2025-05-27T05:35:03.000Z",
        "updatedAt": "2025-05-27T05:35:03.000Z",
        "distance": 190.54
    },
    {
        "id": 5,
        "name": "Blue Ridge Secondary School",
        "address": "321 Hilltop Drive, Sylhet",
        "latitude": 24.8949,
        "longitude": 91.8687,
        "createdAt": "2025-05-27T05:38:48.000Z",
        "updatedAt": "2025-05-27T05:38:48.000Z",
        "distance": 190.54
    },
    {
        "id": 6,
        "name": "Blue Ridge Secondary School",
        "address": "321 Hilltop Drive, Sylhet",
        "latitude": 24.8949,
        "longitude": 91.8687,
        "createdAt": "2025-05-27T05:46:53.000Z",
        "updatedAt": "2025-05-27T05:46:53.000Z",
        "distance": 190.54
    }
]
```
### 3.Setup Environment Variables
Create a `.env` file in the root with the following:
```
PORT=
DATABASE_URL=
CORS_ORIGIN=
```