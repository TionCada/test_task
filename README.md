# Application FAQ

---

## What it is? 🤔
Everything is simple, this project is as a test task for the WebbyLab company!

## What technologies were used? 🛠️
The project consists of 2 parts - client and server, and this repo contains the first one. For everyone's sake, both of them were published as a containers on a Docker Hub. So all you need to do - is to pull them to your machine and run (detailed instruction can be found via the links below). 
- Backend container can be found here: https://hub.docker.com/r/webbylabhub/movies
- And frontend continer can be found over there: https://hub.docker.com/r/anovak123456/test_task_client

Now let's take a closer look at the stack of used technologies at the frontend part:
- React/Redux
- Javascript
- HTML/CSS
- Formik
- Axios

## What is the app structure? 🏗️

The main idea was to decompose the app into several layers: UI, BLL, and DAL: 
- UI part is located in the 'Components' folder. It's mainly functional components that return JSX, but they can also contain some simple logic. All of these components are arranged in the hierarchical order, in their folders. Each folder contains a component file, module CSS file, and, if necessary, container component file.
- BLL part is located in the 'Redux' folder. There you can find several reducer files and store file, which combine the first ones. 'auth-reducer' is responsible for all operations related to the authentication processes (login, registration). And 'movies-reducer' is responsible for all operations related to the actions, user can apply to movies (delete, add, sort, etc). 
- DAL part is located in the 'API' folder. It is the code, needed for sending the requests to the server. It is 'divided' into authAPI and moviesAPI parts. Also, to make it work, I was using Axios library. 

## How to start the app? 🏁
As it was mentioned earlier, first things first, you need to pull both frontend and backend docker containers to your machine (p.s. Don't forget to install Docker before doing this stuff). The links can be found above. Then you need to run them according to the instructions. To open the app you need to open the 80 port (by default) in your browser. And all is done!  
  
OR
  
If you want to run the frontend part of the application via NPM, you need to:

- clone or download the project from https://github.com/TionCada/test_task
- install Node.js v10.19.0+
- install npm packages
- open terminal and write 'npm start' 
