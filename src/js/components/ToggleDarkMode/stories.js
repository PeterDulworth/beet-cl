import React from 'react';
import { storiesOf } from '@storybook/react';
import ToggleDarkMode from './ToggleDarkMode';

storiesOf('ToggleDarkMode', module).add('default', () => <ToggleDarkMode isDarkMode={false} />);
