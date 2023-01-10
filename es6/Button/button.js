import React from 'react';
export const DynamicButton = (props) => {
    const { children, icon: { position = 'start', element = undefined }, } = props;
    return React.createElement(React.Fragment, null,
        React.createElement("button", Object.assign({}, props),
            element && position === 'start' ? element : null,
            children,
            element && position === 'end' ? element : null));
};
//# sourceMappingURL=button.js.map