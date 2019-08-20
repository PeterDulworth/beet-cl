import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextInput from './TextInput';

storiesOf('TextInput', module)
    .add('with text', () => (
        <TextInput onClick={action('clicked')}>Hello Button</TextInput>
    ))
    .add('with emoji', () => (
        <TextInput onClick={action('clicked')}>🚿 🚿 🐈 🐈</TextInput>
    ));
