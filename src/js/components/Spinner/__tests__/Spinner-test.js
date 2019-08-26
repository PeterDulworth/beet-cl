import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Spinner from '../Spinner';

describe('Spinner component tests', () => {
    const defaultProps = {
        size: 'sm',
    };

    it('should render in DOM', () => {
        const wrapper = mount(<Spinner {...defaultProps} />);
        expect(wrapper.is(Spinner)).toBe(true);
    });
});
