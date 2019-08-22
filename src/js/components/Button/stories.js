import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import README from './README.md';

const withNotes = (renderFn) => {
    return [
        renderFn,
        {
            notes: { markdown: README },
        },
    ];
};

storiesOf('Button', module)
    .add('default', ...withNotes(() => <Button onClick={action('clicked')}>Click Me!</Button>))
    .add(
        ':disabled',
        ...withNotes(() => (
            <Button onClick={action('clicked')} disabled>
                Click Me!
            </Button>
        ))
    )
    .add(
        ':focused',
        ...withNotes(() => (
            <Button autoFocus onClick={action('clicked')}>
                Click Me!
            </Button>
        ))
    )
    .add(
        ':active',
        ...withNotes(() => (
            <Button autoActive onClick={action('clicked')}>
                Click Me!
            </Button>
        ))
    )
    .add('with emoji', ...withNotes(() => <Button onClick={action('clicked')}>🦄 Unicorn</Button>))
    .add(
        'with emoji :disabled',
        ...withNotes(() => (
            <Button onClick={action('clicked')} disabled>
                🦄 Unicorn
            </Button>
        ))
    );
