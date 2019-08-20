import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

// automatically import all files ending in *.stories.js
// const req = require.context('../stories', true, /\.stories\.js$/);
const req = require.context('../src/js/components', true, /[^/]+\/stories.js$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);

addParameters({
  options: {
    theme: themes.dark,
  },
});

// center decorator
const CenterDecorator = (storyFn) => <div style={{ textAlign: 'center' }}>
  {storyFn()}
</div>;

addDecorator(CenterDecorator);