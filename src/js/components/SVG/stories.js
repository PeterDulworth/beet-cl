import React from 'react';
import { storiesOf } from '@storybook/react';
import SVG from './SVG';

const svg1 = {
    path: 'M0,241V0H1024V218C736,83,195,384,0,241Z',
    aspectRatio: {
        width: 1024,
        height: 768,
    },
    size: {
        width: '100%',
        height: 192,
    },
    color: '#085ff7',
    lockAspectRatio: false,
};

storiesOf('SVG', module)
    .add('default', () => <SVG {...svg1} />)
    .add('container', () => (
        <div style={{ width: '400px' }}>
            <SVG {...svg1} />
        </div>
    ));
