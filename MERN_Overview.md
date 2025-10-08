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
    │ │ │
    GET /todos GET /todos/:id POST /todos
    │ │ │
    ▼ ▼ ▼
    return all find by id add new todo
    todos ┌─────┐ 404 if not (req.body)
    │todo │ found
    └─────┘
    │ │ │
    PUT /todos/:id DELETE /todos/:id
    │ │
    ▼ ▼
    update task/completed remove todo by id
    (if provided) return deleted

## MVC Structure

Model - View - Controller => clean, maintainable, easy to understand
model -> handle data and business logic
view -> handle what user sees (UI)
controller -> handle data flow between model & view

## college library analogy

model -> books & catalog -> stores all information
view -> library website or notice board -> student sees list of books(UI)
controller -> librarian -> req receive from students and tells the model what to do, then sends info to view


env -> configuration stored outside your code -> sensitive data or setting per env -> dev, test, prod
example -> port num, API key, database URL


mongodb
--------

non-relational db  ->  no structure
object {} => document
table -> collection

store -> BSON  -> Binary JSOn

[
  {
    "Company": "Alfreds Futterkiste",
    "Contact": "Maria Anders",
    "Country": "Germany"
  },
  {
    "Company": "Centro comercial Moctezuma",
    "Contact": "Francisco Chang",
    "Country": "Mexico"
  },
  {
    "Company": "Ernst Handel",
    "Contact": "Roland Mendel",
    "Country": "Austria"
  },
  {
    "Company": "Island Trading",
    "Contact": "Helen Bennett",
    "Country": "UK"
  },
  {
    "Company": "Laughing Bacchus Winecellars",
    "Contact": "Yoshi Tannamuri",
    "Country": "Canada"
  },
  {
    "Company": "Magazzini Alimentari Riuniti",
    "Contact": "Giovanni Rovelli",
    "Country": "Italy"
  }
]