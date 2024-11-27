# Example project for a11y testing with Playwright

Goal is to show how simple it can be to set up a simple accessibility testing for any web page.
With just two targeted tests, we aim to address many of the common a11y pitfalls in web app development also 
ensuring that developers prioritize accessibility in every stage of the development process.
The Aria snapshot ensures correct structure on the page while Axe analyze checks common problems 

## Running the app

```shell
npm install
npm start
```

## Running tests

```shell
npm ci
npm run uitest
```
If you get en error `Error: browserType.launch: Executable doesn't exist`, run 
```shell
npx playwright install
```
to install Playwright's browsers on your machine (this needs to be done only once).

## Aria snapshots

To create new aria snapshot use `npm run uitest-codegen` and use Aria tab from the bottom toolbar
(read more about Playwright's Codegen [here](https://playwright.dev/docs/codegen-intro))

To update all snapshot use `npx playwright test --update-snapshots` 

Read more about aria snapshots in [docs](https://playwright.dev/docs/aria-snapshots)

## A11y testing

Check ['should not have any automatically detectable accessibility issues'](tests/example.spec.js) test to see how to run simple 
Axe analyze and discover any violations. Read more in [docs](https://playwright.dev/docs/accessibility-testing)

## Other 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).





