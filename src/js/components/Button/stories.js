import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

storiesOf('Button', module)
    .add('default', () => (
        <Button onClick={action('clicked')}>Click Me!</Button>
    ))
    .add(':disabled', () => (
        <Button onClick={action('clicked')} disabled={true}>
            Click Me!
        </Button>
    ))
    .add(':focused', () => (
        <Button autoFocus onClick={action('clicked')}>
            Click Me!
        </Button>
    ))
    .add(':active', () => (
        <Button autoActive onClick={action('clicked')}>
            Click Me!
        </Button>
    ))
    .add('with emoji', () => (
        <Button onClick={action('clicked')}>🦄 Unicorn</Button>
    ));
