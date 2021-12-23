[![Github Actions CI](https://github.com/Loonz806/express-graphql/actions/workflows/build.yml/badge.svg)](https://github.com/Loonz806/express-graphql/actions/workflows/build.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Express-GraphQL

_Learning the bits about Express/GraphQL via a course_

to get started

```
npm install
```

then to start the fake server via json-server package as an outside integration

```
npm run json:server
```

then to create a running nodemon graphQL instance you can run

```
npm run dev
```

and then visit http://localhost:4000/graphql

## Things to do

Using the http://localhost:4000/graphql you can add a query a user by querying on the left panel
In this case user with id of 23 is in the db.json ( you can remove or add fields on this person )

```
{
  user (id:"23") {
    id
    firstName
    age
    company {
      name
      description
      id
    }
  }
}
```

Or add users by leveraging a mutation

```
mutation {
  addUser(firstName:"Bobby", age:58) {
    id,
    age,
    firstName
  }
}
```

Or edit that user

```
mutation {
  editUser(id: <id in db.json>, companyId: "2") {
    id,
    firstName,
    age
  }
}
```

Or even delete that user

```
mutation {
  deleteUser(id: <id in db.json>) {
    id
  }
}
```

Alot of these tips follow the Restful Conventions
For more read the schema/schema.js

### Restful Conventions / Routing Examples

_restful meaning readable methods that you can assert actions on_

- /name POST Create a record
- /name GET Fetch all records
- /name/:id GET Fetch record with given id
- /name/:id PUT Update details of user with id
- /name/:id DELETE Delete user with id

_things can get complicated the more deeper and nested as you go_

- /users/23/posts POST Create a post associated with user 23
- /users/23/posts GET Fetch all posts created by user 23
- /users/23/posts/14 GET Fetch post 14 by user 23
- /users/23/posts/15 PUT Update post 15 by user 23
- /users/23/posts/18 DELETE Delete post 18 created by user 23

### However these breakdown once we get into lots of http requests or super nested data

Hence why using GraphQL perhaps can be a benefit

### Additions ( React to render and display data, transformations )

TBD
