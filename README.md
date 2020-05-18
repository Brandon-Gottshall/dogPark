<h1 style='text-align:center'>dogPark</h1>

------

<p style='text-align:center'><i>What's up dawg?</i></p>
  - [Overview](#Overview)
    - [Abstract](#abstract)
    - [Our Team](#our team)
  - [User Experience](#user-experience)
    - [Problem Statment](#problem-statment)
    - [Intro of Team Members](#team-members)
    - [Tools Used](#tools-used)
    - [Task Flow](#task-flow)
    - [Journey Map](#journey-map)
    - [Personas](#personas)
    - [Wireframes](#wireframes)
  - [Server Development](#server-development)
      - [Team Member Intro](#server-dev)
      - [Libraries](#server-libraries)
    - [Minimum Viable Product](#mvp-server)
      - [ERD Model](#erd-model)
      - [Endpoints](#endpoints)
    - [Post Minimum Viable Product](#pmvp-server)
    - [Code Showcase](#code-showcase)
      - [Issues and Resolutions](#issues-resolutions)
  - [Client Development](#client-development)
      - [Team Member Intro](#client-dev)
      - [Libraries](#client-libraries)
    - [Minimum Viable Product](#mvp-server)
      - [ERD Model](#erd-model)
      - [Endpoints](#endpoints)
    - [Post Minimum Viable Product](#pmvp-server)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Code Showcase](#code-showcase)
      - [Issues and Resolutions](#issues-resolutions)






## Overview

<h5 style='text-align:center'>Abstract</h5>

​	



<h5 style='text-align:center'>Our Team</h5>

<div style="display: grid; grid-template-columns: 45vw 45vw; grid-template-rows: 65vh 65vh; justify-content: space-evenly; align-items: space-evenly;">
  <div style='display: flex; flex-direction: column; justify-content: flex-start; align-items: center; text-align: center; margin-bottom: 50px; height: 200px'>
    <h3>Mary Mac Murray</h3>
    <i style='text-align:left; font-size: .6em'>Technical Project Manager | Software Engineer | EdTech Organizer</i>
    <img src='https://media-exp1.licdn.com/dms/image/C4D03AQH_Vqb6B7PDfA/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=3-lI5VNcRSHydf_Cr66WZiUF3fiMS0gHunpKdk8zrdI' alt='Mary Mac Murray' style='height: 275px; width: 275px; border-radius:100%;margin:30px'/>
    <p style='font-size:.6em; width: 40vw'>As a formally trained teacher and technical project manager, I energize teams through playful and tactical experiences. Being a scuba rescue diver and tango dancer means I test for failure but love to improvise.</p>
    <a style='font-size:1em;' href='https://www.maryxmac.com/' alt="Mary's portfolio">My Portfolio</a>
    <a style='font-size:1em;' href='https://www.linkedin.com/in/maryxmac/' alt="Mary Mac Murray's LinkedIn">My LinkedIn</a>
  </div>
  <div style='display: flex; flex-direction: column; justify-content: flex-start; align-items: center; text-align: center; margin-bottom: 50px; height: 200px'>
    <h3>Miykaelah (Rajmani) Sinclair</h3>
    <i style='text-align:left; font-size: .6em'>UX Designer | Product Designer | Event Designer</i>
    <img src='https://media-exp1.licdn.com/dms/image/C5603AQGV5ISg-4gEJg/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=_15ckCFlxKEeIomYgRyYPpvgNL-D0t4fR_-U6IDbqss' style='height: 275px; width: 275px; border-radius:100%;margin:30px' alt='Miykaelah Sinclair' />
    <p style='font-size:.6em; width: 40vw'>AI am a UX designer with over 10 years of experience using human centered design practices to produce, direct, and market memorable and meaningful events for audiences and participants. I bring this same
        approach to my UX Design practice where I lead with listening, consider all the touch points and engagements of users, and deliver a delightful, intuitive, and memorable product.</p>
    <a style='font-size:1em;' href='https://www.miykaelahsinclair.com' alt="Miykaelah's portfolio">My Portfolio</a>
    <a style='font-size:1em;' href='https://www.linkedin.com/in/miykaelah-sinclair/' alt="Miykaelah's LinkedIn">My LinkedIn</a>
  </div>
   <div style='display: flex; flex-direction: column; justify-content: flex-start; align-items: center; text-align: center; margin-bottom: 50px; height: 200px'>
       <h3>Brandon Gottshall</h3>
       <i style='text-align:left; font-size: .6em'>Software Engineer | Marine Corps Veteran</i>
       <img src='https://media-exp1.licdn.com/dms/image/C4E03AQErDiTHdpTt8g/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=UrTPfKAo--f-bqJ3XLdkNOf_V9ixRis1i1veE0h_Ojw' style='height: 275px; width: 275px; border-radius:100%;margin:30px'alt='Brandon Gottshall' />
       <p style='font-size:.6em; width: 40vw'>I am a highly adaptable, motivated Software Engineer. I’ve built a skill set through my time in the Marine Corps that allows me to take root in uncomfortable and difficult situations and extract success where others have accepted failure. I’m extremely passionate about the tech industry, and I’m always ready to embrace failure, growth, and to demand success.</p>
       <a style='font-size:1em;' href='https://www.gottshall.dev' alt="Brandon's portfolio">My Portfolio</a>
       <a style='font-size:1em;' href='https://www.linkedin.com/in/brandon-gottshall/' alt="Brandon's LinkedIn">My LinkedIn</a>
  </div>
  <div style='display: flex; flex-direction: column; justify-content: flex-start; align-items: center; text-align: center; margin-bottom: 50px; height: 200px'>
      <h3>Heather Sterman</h3>
      <i style='text-align:left; font-size: .6em'>UX Researcher | Film & TV Librarian | Empath</i>
      <img src='https://media-exp1.licdn.com/dms/image/C4D03AQHjEB9PwL06uA/profile-displayphoto-shrink_800_800/0?e=1595462400&v=beta&t=NtXNb-VOFRl5uC_VME_VKOvEYMMapzZWDc6LrzO_-lo' style='height: 275px; width: 275px; border-radius:100%;margin:30px' alt='Heather Sterman' />
      <p style='font-size:.6em; width: 40vw'>UX Researcher who’s a constant and curious learner. 
      Empathic Listener with 13 years of experience in Librarianship. The library is the ultimate example of user experience: The librarian or archivist is the UX Professional, the library itself is the Information Architecture, and the library patrons are the users of the product. </p>
      <a style='font-size:1em;' href='https://www.heather-sterman.com/' alt="Heather's portfolio">My Portfolio/</a>
      <a style='font-size:1em;' href='https://www.linkedin.com/in/heathersterman/' alt="Heather's LinkedIn">My LinkedIn</a>
  </div></div>



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