import React from 'react';

// center decorator
export const CenterDecorator = (storyFn) => {
    return <div style={{ display: 'flex', 'justify-content': 'center', height: '100%', 'align-items': 'center' }}>{storyFn()}</div>;
};
