import classNames from 'classnames';

export const prefixClassName = (name) => {
    return `bcl-${name}`;
};

export const prefixClassNames = (names) => {
    return classNames(names).split(' ').map(name => prefixClassName(name)).join(' ');
}