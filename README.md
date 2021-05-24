# Restful Conventions / Routing

/name POST Create a record
/name GET Fetch all records
/name/:id GET Fetch record with given id
/name/:id PUT Update details of user with id
/name/:id DELETE Delete user with id

/users/23/posts POST Create a post associated with user 23
/users/23/posts GET Fetch all posts created by user 23
/users/23/posts/14 GET Fetch post 14 by user 23
/users/23/posts/15 PUT Update post 15 by user 23
/users/23/posts/18 DELETE Delete post 18 created by user 23

## However these breakdown once we get into lots of http requests or super nested data
