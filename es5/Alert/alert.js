import { __assign } from "tslib";
import React from 'react';
export var CustomButton = function (props) {
    var children = props.children, _a = props.icon, _b = _a.position, position = _b === void 0 ? 'start' : _b, _c = _a.element, element = _c === void 0 ? undefined : _c;
    return React.createElement(React.Fragment, null,
        React.createElement("button", __assign({}, props),
            element && position === 'start' ? element : null,
            children,
            element && position === 'end' ? element : null));
};
//# sourceMappingURL=alert.js.map