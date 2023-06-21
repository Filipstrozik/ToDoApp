# ToDoApp

Anglar and .NET Application to handle To do items on boards!
Also it is uses Anglar Material components and EF for ORM.

# Features

- Create, update and delete users.
- Create, update and delete tasks.
- Create, update and delete boards.
- Mark tasks as complete
- Filter tasks by status (completed or active)
- Responsive design for optimal user experience on different devices

# Technologies Used

- Angular
- .NET (C#)
- TypeScript
- HTML
- CSS
- Entity Framework Core (EF Core)
- SQL Server

# Screenshots

Main boards view
![Image Alt Text](./images/1.png)
Users view
![Image Alt Text](./images/2.png)
To do items view
![Image Alt Text](./images/3.png)
Adding new board
![Image Alt Text](./images/4.png)
Adding new task
![Image Alt Text](./images/5.png)
UI desscirption
![Image Alt Text](./images/6.png)

# Instalation

1. Clone the repository `git clone https://github.com/Filipstrozik/ToDoApp/`
2. Navigate to repository `cd todoapp`
3. Install node_modules `cd front-fptodo` `npm install`
4. Run angular app: `npm serve`
5. Install the dependencies for the .NET backend: `cd ../RSIapi` `dotnet restore`
6. Configure the database connection in the appsettings.json
7. Run dotnet app: `dotnet run`
8. Open your browser and navigate to http://localhost:4200 to access the app.
