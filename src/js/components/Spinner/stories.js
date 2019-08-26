import React from 'react';
import { addParameters, storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import Spinner from './Spinner';

storiesOf('Spinner', module)
    .add('sm', () => <Spinner size='sm' />)
    .add('md', () => <Spinner size='md' />)
    .add('lg', () => <Spinner size='lg' />)
    .add('red', () => <Spinner color='brand' />)
    .add('blue', () => <Spinner color='blue' />)
    .add('colored background', () => <Spinner size='md' />, {
        backgrounds: [
            {
                name: 'blue',
                value: '#2587ff',
                default: true,
            },
        ],
    })
    .add('inline', () => (
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, numquam?
            <Spinner size='md' inline />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, voluptate?
        </div>
    ));
