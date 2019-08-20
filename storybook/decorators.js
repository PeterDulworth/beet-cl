import React from 'react';

// center decorator
export const CenterDecorator = (storyFn) => {
    return (
        <div style={{ textAlign: 'center' }}>
            {storyFn()}
        </div>
    );
};