import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import ToggleDarkMode from './ToggleDarkMode';

// manage the state of the toggle
const DarkModeWrapper = ({ initialIsDark }) => {
    const [isDark, setIsDark] = useState(initialIsDark);

    return (
        <ToggleDarkMode
            isDarkMode={isDark}
            onToggle={() => setIsDark((prevIsDark) => !prevIsDark)}
        />
    );
};

storiesOf('ToggleDarkMode', module)
    .add('light', () => <DarkModeWrapper initialIsDark={false} />)
    .add('dark', () => <DarkModeWrapper initialIsDark={true} />);
