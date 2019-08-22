import { configure, addDecorator, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { CenterDecorator } from './decorators';
import beetLight from './theme.js';

// automatically import all files ending in *.stories.js
// const req = require.context('../stories', true, /\.stories\.js$/);
const req = require.context('../src/js/components', true, /[^/]+\/stories.js$/);

const loadStories = () => {
    req.keys().forEach((filename) => req(filename));
};

addParameters({
    options: {
        theme: beetLight,
    },
});

addParameters({
    backgrounds: [{ name: 'twitter', value: '#00aced' }, { name: 'facebook', value: '#3b5998' }],
});

addDecorator(CenterDecorator);

// this should be the last call
configure(loadStories, module);
