import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ToggleDarkMode from '../ToggleDarkMode';

describe('Anchor component tests', () => {
    const defaultProps = {
        isDarkMode: false,
        onToggle: () => {},
    };

    it('should render in DOM', () => {
        const wrapper = mount(<ToggleDarkMode {...defaultProps} />);
        expect(wrapper.is(ToggleDarkMode)).toBe(true);
    });
});
