# aurelia-material-skeleton
Skeleton for Aurelia with Material Design Components and ASP.NET Core

# Steps

## Step 1

Install Aurelia CLI as in https://aurelia.io/docs/build-systems/aurelia-cli/ 
and read the ASP.NET Core part.

## Step 2
Create an new empty ASP.NET Core Project of your choice.
You can use the command `dotnet new web` for this.

## Step 3
Create Aurelia project by running `au new --here` on the same folder where you created the ASP.NET Core Project.

1. Choose WebPack (1)
2. Choose ASP.NET Core (2)
3. Choose TypeScript (2)
4. Choose 2 or 3 for minification
5. Choose SASS (3) 
6. Choose Jest and Jasmine (3)
7. Choose Yes or No
8. Choose Visual Studio Code
9. Choose Yes to create project in the folder
10. Choose Yes to install dependencies

## Step 4
1. Open in Visual Studio 2017.
If you get an error opening the project file look at the global.json file. Change sdk version to `2.1.400`.
2. Look at the `instructions.txt` file. We are using .NET Core 2, so do not install SpaServices. Change `startup.cs' and project file.
3. Try to build and run the project. You should see a Welcome message.


