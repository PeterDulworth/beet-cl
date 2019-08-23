import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './Modal';

storiesOf('Modal', module).add('default', () => (
    <Modal isOpen={true} onClose={() => {}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sapiente beatae assumenda!
        Quasi consequuntur autem pariatur minus hic perferendis qui aliquam, illo id quis corporis.
        Minus, corrupti eligendi optio cumque excepturi iure hic architecto officiis accusantium
        commodi necessitatibus, inventore iste aut doloremque? Libero, tempora similique sed vitae
        iusto culpa ullam?
    </Modal>
));
