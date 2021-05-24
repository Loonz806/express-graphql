[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Express-GraphQL

_learnings into GraphQL and what role it solves by making graphs over restful conventions/routing_

### Restful Conventions / Routing Examples

_restful meaning readable methods that you can assert actions on_

/name POST Create a record
/name GET Fetch all records
/name/:id GET Fetch record with given id
/name/:id PUT Update details of user with id
/name/:id DELETE Delete user with id

_things can get complicated the more deeper and nested as you go_
/users/23/posts POST Create a post associated with user 23
/users/23/posts GET Fetch all posts created by user 23
/users/23/posts/14 GET Fetch post 14 by user 23
/users/23/posts/15 PUT Update post 15 by user 23
/users/23/posts/18 DELETE Delete post 18 created by user 23

### However these breakdown once we get into lots of http requests or super nested data

Hence why using GraphQL perhaps can be a benefit
