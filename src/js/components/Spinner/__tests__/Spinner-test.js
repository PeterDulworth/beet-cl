import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Spinner from '../Spinner';

describe('Spinner component tests', () => {
    const defaultProps = {};

    it('should render', () => {
        const wrapper = shallow(<Spinner {...defaultProps} />);
        expect(wrapper.text()).toMatch('link');
    });

    it('should render in DOM', () => {
        const wrapper = mount(<Spinner {...defaultProps} />);
        expect(wrapper.is(Spinner)).toBe(true);
    });
});
