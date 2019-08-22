import classNames from 'classnames';

export const prefixClassName = (name) => {
    return `bcl-${name}`;
};

export const bclClassNames = (names) => {
    return classNames(names)
        .split(' ')
        .map((name) => prefixClassName(name))
        .join(' ');
};
