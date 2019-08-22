import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import Modal from './Modal';

storiesOf('Modal', module)
    .add('default', () => (
        <Modal href='/'>Click Me!</Modal>
    ))
    .add('new tab', () => (
        <Modal href='/' newTab={true}>Click Me!</Modal>
    ));