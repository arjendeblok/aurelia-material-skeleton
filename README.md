# aurelia-material-skeleton

Skeleton for Aurelia with Material Design Components

# Components

For a list of components: [MDC components](https://github.com/arjendeblok/aurelia-material-skeleton/tree/master/src/mdc).

For a live demo: [Demo](http://www.arjendeblok.nl/aurelia-material-demo/)

# Steps

Please execute the following steps. Please do not clone the GIT repository before it is stated in the steps. 

## Step 1 Installation

Install Aurelia CLI as in https://aurelia.io/docs/build-systems/aurelia-cli/ 

## Step 2 Create Project

Create Aurelia project by running `au new --here` on the same folder where you created the ASP.NET Core Project.

Choose a project with at least WebPack, TypeScript and SASS or follow the next steps.

1. Choose Custom App
2. Choose WebPack
3. Choose any HTTP protocol
4. Choose any Web platform
5. Choose TypeScript
6. Choose any HTML template
7. Choose SASS
8. Choose any PostCSS processing
9. Choose any unit test runner
10. Choose any integration test runner
12. Choose any code editor
13. Choose any scaffolding
14. Choose Yes to install dependencies

## Step 3 Add Material Design

1. Install Material Design components via `npm install material-components-web --save`
2. Add the following to the `index.ejs` file after the `<title>` tag:
```html
     <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
     <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```
4. Let the SASS loader also scan de `node_modules` folder. Change the `webpack.config` file. Look at the `test: /\.scss$/` part and change the `use:` to 
```javascript
  use: ['style-loader', 'css-loader', { loader: "sass-loader", options: { includePaths: ["node_modules"] } }],
```
3. Add the following attribute to top of the `app.ts` file: 
```typescript
import "@material/typography/mdc-typography.scss";
```
4. Add the attribute `class=mdc-typography--headline1` to the `h1` tag in the `app.html` file: 
5. Run the project with `au run`. The Welcome message should have the Material Design look.

## Step 4 Add MDC Aurelia Components

1. Clone the repository to the root folder
2. Install Aurelia Validation via `npm install aurelia-validation --save`
3. Add following part to the `aurelia.use` in the `main.ts` file
```javascript
    .plugin(PLATFORM.moduleName('aurelia-validation'))
    .feature(PLATFORM.moduleName('mdc/index'))
```
5. For the demo change in `main.ts` the reference to `app` to `demo/demo-app`
6. Run the project with `au run`. 


