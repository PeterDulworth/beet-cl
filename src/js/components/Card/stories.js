import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Card from './Card';
import Button from '../Button/Button';

storiesOf('Card', module)
    .add('default', () => (
        <Card>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium nesciunt
            porro doloribus, illo vitae doloremque? Nulla eos consequatur quaerat reiciendis beatae
            alias voluptatibus molestiae doloribus sint doloremque, reprehenderit architecto tenetur
            quis modi in deleniti. Dolor nesciunt repellendus molestias eos sunt eveniet, quibusdam
            reiciendis! Hic perspiciatis laborum tenetur sequi earum.
        </Card>
    ))
    .add('with button', () => (
        <Card>
            <Button>click me</Button>
        </Card>
    ));
