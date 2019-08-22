import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Button from '../Button';

describe('Button component tests', () => {
    it('should render', () => {
        const wrapper = shallow(<Button>click me</Button>);
        expect(wrapper.text()).toMatch('click me');
    });

    it('should render in DOM', () => {
        const wrapper = mount(<Button>click me</Button>);
        expect(wrapper.is(Button)).toBe(true);
    });
});
