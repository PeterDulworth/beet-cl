import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Anchor from '../Anchor';

describe('Anchor component tests', () => {
    const defaultProps = {
        href: '#',
        openNewTab: false,
    };

    it('should render', () => {
        const wrapper = shallow(<Anchor {...defaultProps}>link</Anchor>);
        expect(wrapper.text()).toMatch('link');
    });

    it('should render in DOM', () => {
        const wrapper = mount(<Anchor {...defaultProps}>click me</Anchor>);
        expect(wrapper.is(Anchor)).toBe(true);
    });
});
