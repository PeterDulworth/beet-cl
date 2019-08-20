import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import Anchor from './Anchor';

storiesOf('Anchor', module)
    .add('default', () => (
        <Anchor href='/'>Click Me!</Anchor>
    ))
    .add('new tab', () => (
        <Anchor href='/' newTab={true}>Click Me!</Anchor>
    ));