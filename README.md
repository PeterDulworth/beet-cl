<img src="https://peterdulworth.github.io/beet-cl/beet-cl-logo.svg" width="250px">

> a react component library 

[![Build Status](https://travis-ci.com/PeterDulworth/beet-cl.svg?branch=master)](https://travis-ci.com/PeterDulworth/beet-cl)
[![npm package](https://img.shields.io/npm/v/beet-cl.svg?color=1497ff)](npm)
[![npm downloads](https://img.shields.io/npm/dw/beet-cl.svg?color=3d138d)](npm)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](prettier)

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