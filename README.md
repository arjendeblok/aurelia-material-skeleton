# aurelia-material-skeleton

Skeleton for Aurelia with Material Design Components.
See [Aurelia](https://github.com/aurelia) and [Material Components Web](https://github.com/material-components/material-components-web).

# Components

For a list of components: [MDC components](https://github.com/arjendeblok/aurelia-material-skeleton/tree/master/src/mdc).

For a live demo: [Demo](http://www.arjendeblok.nl/aurelia-material-demo/)

# Steps

Please execute the following steps. Please do not clone the GIT repository before it is stated in the steps. 

## Step 1 Create Project

Create Aurelia project by running `npx makes aurelia/v1`.

Choose a project with at least WebPack, TypeScript and SASS or follow the next steps.

1. Choose Custom Project
2. Choose App
3. Choose WebPack
4. Choose Web or .NET
5. Choose TypeScript
6. Choose any HTML template
7. Choose SASS
8. Choose any PostCSS processing
9. Choose any unit test runner
10. Choose any integration test runner
11. Choose any code editor
12. Choose any scaffolding
13. Choose docker or not
14. Choose Yes to install dependencies

## Step 3 Add Material Design

1. Install Material Design components via `npm install material-components-web --save`
2. Add the following to the `index.ejs` file after the `<title>` tag:
```html
     <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
     <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```
3. Add the following attribute to top of the `app.ts` file: 
```typescript
import "@material/typography/mdc-typography.scss";
```
4. Add the attribute `class=mdc-typography--headline1` to the `h1` tag in the `app.html` file: 
5. Run the project with `npm start`. The Welcome message should have the Material Design look.

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


