/**
 * Enzyme setup file.
 * https://github.com/airbnb/enzyme/issues/1265
 */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
