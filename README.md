# aurelia-material-skeleton
Skeleton for Aurelia with Material Design Components and ASP.NET Core

# Components

See [MDC components](https://github.com/arjendeblok/aurelia-material-skeleton/tree/master/src/mdc).

# Steps

Please execute the following steps. Please do not clone the GIT repository before it is stated in the steps. 

## Step 1 Installation

Install Aurelia CLI as in https://aurelia.io/docs/build-systems/aurelia-cli/ 
and read the ASP.NET Core part.

## Step 2 ASP.NET Core 
Create an new empty ASP.NET Core Project of your choice.
You can use the command `dotnet new web` for this.

## Step 3 Aurelia
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

## Step 4 Build
1. Open in Visual Studio 2017.
If you get an error opening the project file look at the global.json file. Change sdk version to `2.1.400`.
2. Look at the `instructions.txt` file. We are using .NET Core 2, so do not install SpaServices. Change `startup.cs' and project file.
3. Try to build and run the project. You should see a Welcome message.

## Step 5 Add Material Design

1. Install Material Design components via `npm install material-components-web`
2. Add the following to the `~/Views/Shared/_Layout.cshtml` file after the `<title>` tag:
```html
     <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```
3. Add the following attribute to top of the `app.ts` file: 
```typescript
import "@material/typography/mdc-typography.scss";
```
4. Add the attribute `class=mdc-typography--headline1` to the `h1` tag in the `app.html` file: 
5. Run the project. The Welcome message should have the Material Design look.

## Step 6 Add MDC Aurelia Components

1. Clone the repository to the root folder
2. Install Aurelia Validation via `npm install aurelia-validation`
3. Add following part to the `aurelia.use` in the `main.ts` file
```javascript
    .plugin(PLATFORM.moduleName('aurelia-validation'))
    .feature(PLATFORM.moduleName('mdc/index'))
```
4. Let the SASS loader also scan de `node_modules` folder. Change the `webpack.config` file. Look at the `test: /\.scss$/` part and change the `use:` to 
```javascript
        use:
        [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader", // compiles Sass to CSS
          options: {
            includePaths: ["node_modules"]
          }
        }],
```
5. For the demo change in `main.ts` the reference to `app` to `demo-app/demo-app`

