# beet-cl
> a react component library 

[![Build Status](https://travis-ci.com/PeterDulworth/beet-cl.svg?branch=master)](https://travis-ci.com/PeterDulworth/beet-cl) <br/>

storybook: [https://peterdulworth.github.io/beet-cl/](https://peterdulworth.github.io/beet-cl/)

### using
```
npm install beet-cl
```

```javascript
import { TextInput } from 'beet-cl';

<TextInput ... >
```

### developing

```
npm run storybook
```

```
npm start
```

### publishing to npm

```
npm login
npm version [major | minor | patch]
npm publish
```
### publishing to gh-pages

travis-ci will automatically build the storybook and deploy it [here](https://peterdulworth.github.io/beet-cl/) on every push to master.