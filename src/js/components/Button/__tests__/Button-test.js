import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Button from '../Button';

describe('Button component tests', () => {
    const defaultProps = {
        onClick: () => {},
    };

    it('should render', () => {
        const wrapper = shallow(<Button {...defaultProps}>click me</Button>);
        expect(wrapper.text()).toMatch('click me');
    });

    it('should render in DOM', () => {
        const wrapper = mount(<Button {...defaultProps}>click me</Button>);
        expect(wrapper.is(Button)).toBe(true);
    });
});
