"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicButton = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var DynamicButton = function (props) {
    var children = props.children, _a = props.icon, _b = _a.position, position = _b === void 0 ? 'start' : _b, _c = _a.element, element = _c === void 0 ? undefined : _c;
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("button", tslib_1.__assign({}, props),
            element && position === 'start' ? element : null,
            children,
            element && position === 'end' ? element : null));
};
exports.DynamicButton = DynamicButton;
//# sourceMappingURL=button.js.map