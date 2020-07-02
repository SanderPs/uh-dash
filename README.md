
## How to run

```
> npm install
> npm run start
```

## Main Issues

- change inter component communication from events to RxJS
- components should not directly read the arrays, they should get their data from a service
- should become a input box with a pop-up keyboard
- for use on mobile phones: css should be somewhat different, list of radicals should be collapsable

## Other Issues

- wijzigingen in `/global/app.scss` worden bij save niet geupdate: https://github.com/ionic-team/stencil-sass/issues/8

# From the documentation:

## Using this component

### Script tag

- [Publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- Put a script tag similar to this `<script src='https://unpkg.com/my-component@0.0.1/dist/mycomponent.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install my-component --save`
- Put a script tag similar to this `<script src='node_modules/my-component/dist/mycomponent.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install my-component --save`
- Add an import to the npm packages `import my-component;`
- Then you can use the element anywhere in your template, JSX, html etc
