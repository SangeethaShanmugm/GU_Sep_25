24 hours session -> 3 days /week
4 weeks=> 12 days

Life skills => offline 16 hours

Additionally -> Guvi platform credentials

## At end

2 certificate => Employability skill course completion
MERN stack course completion - E Certificate
Trophies - 4 best students

MERN
M -> MongoDB - Database => store application data
E -> ExpressJs - Framework -> handle server and API
R -> React - Frontend UI -> Build UI
N -> NodeJs - Server -> backend server

## Full Stack developer role

- Front end developer(Client-side)
- Back end developer(Server-side)
- Database Developer/Administrator
- Full stack developer

customer => react(UI/menu) => Express (Waiter) => Nodejs(Kitchen) => Mongodb (Pantry)
^
|
Response/Dish

let => your daily lunch order(you can change it tomorrow)  
 const => your college ID number

Promises

NPM => Node Package manager

CRUD operation

---

                                HTTP methods

C -> Create => add /insert -> POST
R -> Read => get -> GET
U => Update = > edit/update -> PUT
D => Delete => delete -> DELETE

settig up express env

---

1.  npm init => initialising package.json
2.  npm i express=> node_module will be created and express along with version will be added as dependency to package.json


        ┌──────────────┐
Client →│ Express Router│
        └──────┬───────┘
               │
       ┌───────┼────────────────────┐
       │       │                    │
 GET /todos GET /todos/:id      POST /todos
       │       │                    │
       ▼       ▼                    ▼
 return all   find by id        add new todo
   todos   ┌─────┐ 404 if not      (req.body)
           │todo │ found
           └─────┘
       │       │                    │
 PUT /todos/:id                  DELETE /todos/:id
       │                                │
       ▼                                ▼
 update task/completed          remove todo by id
  (if provided)                 return deleted

