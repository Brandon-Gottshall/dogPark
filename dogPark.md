<h1 style='text-align:center'>dogPark</h1>

------

<p style='text-align:center'><i>What's up dawg?</i></p>



- [Overview](#Overview)
  - [Abstract](#abstract)
  - [Our Team](#our team)
- [User Experience](#user-experience)
  - [Problem Statment](#problem-statment)
  - [Team Members](#team-members)
  - [Task Flow](#task-flow)
  - [Journey Map](#journey-map)
  - [Personas](#personas)
  - [Wireframes](#wireframes)
- [Server Development](#server-development)
  - 
  - [MVP](#mvp)
- [Client Development](#client-development)
- [MVP](#mvp)
  - [MVP Goals](#mvp-goals)
    - [UX](#ux)
    - [Client](#client)
    - [Server](#server)
  - [Libraries](libraries)
  - [MVP Client (Front End)](#mvp-client-front-end)
    - [Prototypes/Mock](#prototypes-mock)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
  - [MVP Server (Back End)](#mvp-server-back-end)
    - [ERD Model](#erd-model)
    - [Endpoints](#endpoints)
- [Post-MVP](#post-mvp)
  - [PMVP Client (Front End)](#mvp-client-front-end)
  - [PMVP Server (Back End)](#mvp-server-back-end)
- [Code Showcase](#code-showcase)
- [Issues & Resolutions](#issues-resolutions)



## Overview

##### Problem Statment

​	

#####  Proposed Solution



## MVP


_Our *MVP* statment_

### MVP Goals

<div style="display: grid; grid-template-columns: 33% 33% 33%; grid-template-rows: 100%">
  <div>
      <h4>UX</h4>
    	<ul>
      	<li>goals here</li>
    	</ul>
  </div>
  <div>
      <h4>Client</h4>
    	<ul>
      	<li>goals here</li>
    	</ul>
  </div>
  <div>
      <h4>Server</h4>
    	<ul>
      	<li>goals here</li>
    	</ul>
  </div>
</div>





### MVP Libraries



<h4 style='text-align: center'>Client</h4>


| Library |      Description       |
| :------ | :--------------------: |
| React   | _Required for Next.js_ |



<h4 style='text-align: center'>Server</h4>

| Library | Description |
| ------- | :---------: |
| Rails   |  _Dkfmdk_   |



### MVP Client (Front End)

#### Wireframes

#### Component Hierarchy




#### Component Breakdown

_MVP_

| Component | State | Description              |
| --------- | ----- | ------------------------ |
| App       | User  | Root of the application. |

_PMVP_

| Component | State    | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| UserStats | API data | Render progress of categories based on correct questions table and number of questions per category. |




### MVP Server (Back End)

Com

#### ERD Model

<img src="https://i.ibb.co/Pgd8hrv/Untitled-Diagram-2.jpg" alt="Untitled-Diagram-2" border="0">

#### Endpoints

> Use this section to list a selection of your intended endpoints and their uses. Please list any and all custom-created endpoints.

_MVP_

| Controller | Operation | VERB   | Route                           |
| ---------- | --------- | ------ | ------------------------------- |
| User       | #view     | GET    | /user/:id                       |
| User       | #create   | POST   | /user                           |
| User       | #update   | PUT    | /user/:id                       |
| User       | #delete   | DELETE | /user/:id                       |
| Cohort     | #index    | GET    | /cohorts                        |
| Cohort     | #view     | GET    | /cohorts/:id                    |
| Cohort     | #create   | POST   | /cohorts                        |
| Cohort     | #update   | PUT    | /cohorts/:id                    |
| Cohort     | #delete   | DELETE | /cohorts/:id                    |
| Unit       | #index    | GET    | /units                          |
| Unit       | #view     | GET    | /units/:id                      |
| Unit       | #create   | POST   | /units                          |
| Unit       | #update   | PUT    | /units/:id                      |
| Unit       | #delete   | DELETE | /units/:id                      |
| Category   | #index    | GET    | /category                       |
| Category   | #view     | GET    | /category/:id                   |
| Category   | #create   | POST   | /category                       |
| Category   | #update   | PUT    | /category/:id                   |
| Category   | #delete   | DELETE | /category/:id                   |
| Question   | #index    | GET    | /question                       |
| Question   | #view     | GET    | /question/catsearch/:categoryId |
| Question   | #view     | GET    | /question/:id                   |
| Question   | #create   | POST   | /question                       |
| Question   | #update   | PUT    | /question/:id                   |
| Question   | #delete   | DELETE | /question/:id                   |

_PMVP_

| Controller      | Operation | VERB   | Route                                           |
| --------------- | --------- | ------ | ----------------------------------------------- |
| CorrectQuestion | #index    | GET    | /user/:id/CorrectQuestion/                      |
| CorrectQuestion | #view     | GET    | /user/:id/CorrectQuestion/catsearch/:categoryId |
| CorrectQuestion | #view     | GET    | /user/:id/CorrectQuestion/:id                   |
| CorrectQuestion | #create   | POST   | /user/:id/CorrectQuestion/                      |
| CorrectQuestion | #delete   | DELETE | /user/:id/CorrectQuestion/                      |

<br>

***

## Planning

<br>

### Timeframes

| Task                        | Priority     | Estimated Time     | Actual Time   |
| --------------------------- | ------------ | ------------------ | ------------- |
| Build Endpoints             | High         | 7 hrs              | 3 hrs         |
| Create seed data            | High         | 3 hrs              | 1 hr          |
| Authentication              | High         | 7 hrs              | 2 hr          |
| SignUp--frontEnd            | High         | 2.5 hrs            |               |
| SignIn--frontEnd            | High         | 2.5 hrs            |               |
| User Home                   | High         | 2 hr               |               |
| CategorySelector            | High         | 5 hr               |               |
| Game Logic                  | High         | 5 hr               |               |
| Game Screens                | High         | 3 hrs              |               |
| User Settings               | Medium       | 3 hrs              |               |
| -------MVP COMPLETE-------- | ----HIGH---- | -----36 hrs------  | ------------- |
| Instructor Home             | low          | 2 hr               |               |
| Instructor Managment Menu   | low          | 3 hr               |               |
| Manage Categories           | low          | 3 hrs              |               |
| Manage Questions            | low          | 3 hrs              |               |
| Manage Cohorts              | low          | 3 hrs              |               |
| Access Panel                | low          | 3 hrs              |               |
| -------PMVP COMPLETE------- | ----low----- | ------17 hrs------ | ------------- |
| --------Total Time--------- | ------------ | -----53 hrs-----   | ------------- |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Scheduled

| Day      | Deliverables                                 |
| -------- | -------------------------------------------- |
| Mar 4th  | Prototyping                                  |
| Mar 5th  | Compile Pitch                                |
| Mar 6th  | Endpoints/Seed Data                          |
| Mar 7th  | Seed Data                                    |
| Mar 8th  | Auth                                         |
| Mar 9th  | SignUp&In/UserHome                           |
| Mar 10th | CategorySelector/Game Logic                  |
| Mar 11th | Game Screens and User Settings---MVP         |
| Mar 12th | Styling/Instructor Home and Managmement Menu |
| Mar 13th | Presentations                                |

<br>

***

## Post-MVP

-_User Stats_

- 	_Based on table of correct questions and numbers of existing questions._


-_Instructor Managment of cohorts, categories, and questions._

_Cohorts_

- _Cohorts should be in flatlist. Swiping on cohort yields options to edit or delete._
 - _Circle with Plus icon on bottom right to add a cohort._
 - _The user should be prompted to enter their password if they chose the delete option._
 - _The user should be able to view a sub-flatlist with the members listed._

_Categories and Questions_

- _Categories And Questions managment should be in a flatlist as well._
 - _Categories would be similar to implementation of Cohorts._
 - _Tapping the add icon the user would see preconstructed choices as well as the option for custom entry._
   -_Clicking on a category would lead to a nested sub-flatlist showing the Categories' Questions._

-_VS game mode for users to play with other users._

- _Create a game mode selection screen_
  <br>

***

## Project Change Log



## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.