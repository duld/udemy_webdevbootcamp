## Section 25
### Intro to APIs
#### API: Application Program(ing)Interface
In general terms, it is a set of clearly defined methods of communication between various components. An API may be for a web-based system, operating system, database system, computer hardware, or software library. - Wikipedia ~ application programming interface

The most popular APIs are generally web based, but APIs can be found everywhere. Web APIs commonly communicate using JSON or XML.

---
#### If This Then That (https://www.ifttt.com)
A service that offers 'applets' to users, with the idea of automating some kind of task. IFTTT leverages web based APIs to have multiple services communicate with one another. Users who use the IFTTT do not need to be developers, it seems designed for the average person.

---
#### Programmable Web (https://www.programmableweb.com)
A website that lists APIs that we can interact with. A good source to use when searching for an API that offers functionality we are interested in.

---

### JSON and XML
JSON and XML are the two most popular data formats that an API will respond with. JSON is currently the most popular format, due to ease of use in web development.

### Movie API APP: Displaying Data
__EJS templating__
  * the __<%__ __%>__ tags are used for control flow, we can write JavaScript like syntax here, if statements, loop statements, object key access etc.
  * the __<%=__ tag is used for value insertion. We are going to be inserting some value into the HTML document.

### RESTful Routing
There are seven types of RESTful routes

| Name    | URL            | VERB | Description                                |
| ------- | -------------- |:---: | -----------                                |
| INDEX   | /dogs          |  GET | Display a list of all Dogs                 |
| NEW     | /dogs/new      |  GET | Displays form to make a new dog            |
| CREATE  | /dogs          | POST | Add new dog to DB, then redirect somewhere |
| SHOW    | /dogs/:id      |  GET | Shows info about one dog                   |
| EDIT    | /dogs/:id/edit |  GET | Show edit form for one dog                 |
| UPDATE  | /dogs/:id      | PUT  | Update a particular dog, redirect somewhere|
| DESTROY | /dogs/:id      |DELETE| Delete a particular dog, redirect somewhere|


### Intro to Associations
An 'association' is just a description of how data realtes to one another. There are a few type of relationships, one:one, one:many and many:many. An example would be that an Home has only one valid Address, but it can contain may objects, and residents. Each resident has their own property but the same home address.

#### Associations in MongoDB
Two popular ways of implementing associations in MongoDB are through Embedding Data and Referencing Data.

### Embedded Data
