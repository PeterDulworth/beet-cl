import classNames from 'classnames';

export const bclPrefix = (name) => {
    return `bcl-${name}`;
};

export const bclClassNames = (names) => {
    return classNames(names)
        .split(' ')
        .map((name) => bclPrefix(name))
        .join(' ');
};
