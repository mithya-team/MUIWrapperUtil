'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styles = require('@material-ui/core/styles');
var Dialog = _interopDefault(require('@material-ui/core/Dialog/Dialog'));
var MuiDialogTitle = _interopDefault(require('@material-ui/core/DialogTitle'));
var MuiDialogContent = _interopDefault(require('@material-ui/core/DialogContent'));
var MuiDialogActions = _interopDefault(require('@material-ui/core/DialogActions'));
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));
var CloseIcon = _interopDefault(require('@material-ui/icons/Close'));
var Typography = _interopDefault(require('@material-ui/core/Typography'));
var Button = _interopDefault(require('@material-ui/core/Button'));
var clsx = _interopDefault(require('clsx'));
var Snackbar = _interopDefault(require('@material-ui/core/Snackbar'));
var SnackbarContent = _interopDefault(require('@material-ui/core/SnackbarContent'));
var CheckCircleIcon = _interopDefault(require('@material-ui/icons/CheckCircle'));
var ErrorIcon = _interopDefault(require('@material-ui/icons/Error'));
var InfoIcon = _interopDefault(require('@material-ui/icons/Info'));
var WarningIcon = _interopDefault(require('@material-ui/icons/Warning'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var DialogTitle = function (props) {
    var classes = useDialogTitleStyles();
    var children = props.children, headerContent = props.headerContent, headerClasses = props.headerClasses, closeButtonClasses = props.closeButtonClasses, _a = props.isCloseButton, isCloseButton = _a === void 0 ? true : _a, onClose = props.onClose;
    return (React.createElement(MuiDialogTitle, { disableTypography: true, className: clsx(classes.root, headerClasses) },
        (headerContent) ? (headerContent) : (React.createElement(Typography, { variant: "h6" }, children)),
        isCloseButton ? (React.createElement(IconButton, { "aria-label": "close", className: clsx(classes.closeButton, closeButtonClasses), onClick: onClose },
            React.createElement(CloseIcon, null))) : null));
};
var DialogActions = function (props) {
    var isCloseButton = props.isCloseButton, closeButtonText = props.closeButtonText, actionsChildren = props.actionsChildren, onClose = props.onClose, closeButtonClasses = props.closeButtonClasses, rootClasses = props.rootClasses;
    return (React.createElement(MuiDialogActions, { className: clsx(rootClasses) },
        (actionsChildren) && actionsChildren,
        (isCloseButton && !actionsChildren) &&
            (React.createElement(Button, { color: "primary", onClick: function () { onClose && onClose(); }, className: clsx(closeButtonClasses) }, (closeButtonText) ? closeButtonText : 'Close'))));
};
var AppDialog = function (props) {
    var title = props.title, headerProps = props.headerProps, handleClose = props.handleClose, children = props.children, _a = props.maxWidth, maxWidth = _a === void 0 ? "sm" : _a, contentProps = props.contentProps, _b = props.isActionCloseButton, isActionCloseButton = _b === void 0 ? true : _b, closeButtonText = props.closeButtonText, actionsChildren = props.actionsChildren, actionsProps = props.actionsProps, rest = __rest(props, ["title", "headerProps", "handleClose", "children", "maxWidth", "contentProps", "isActionCloseButton", "closeButtonText", "actionsChildren", "actionsProps"]);
    var handleDialogClose = function () {
        handleClose();
    };
    return (React.createElement(Dialog, __assign({ onClose: handleDialogClose, fullWidth: true, maxWidth: maxWidth }, rest),
        React.createElement(DialogTitle, __assign({ onClose: handleDialogClose }, headerProps), title),
        React.createElement(MuiDialogContent, __assign({}, contentProps), children),
        (isActionCloseButton || actionsChildren) &&
            (React.createElement(DialogActions, __assign({}, actionsProps, { isCloseButton: isActionCloseButton, closeButtonText: closeButtonText, actionsChildren: actionsChildren, onClose: handleDialogClose })))));
};
var useDialogTitleStyles = styles.makeStyles(function (theme) {
    return (styles.createStyles({
        root: {},
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        }
    }));
});

var variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};
var defaultProps = {
    anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
    },
    autoHideDuration: 6000
};
var ToastInit = function (initProps) {
    defaultProps = __assign(__assign({}, defaultProps), initProps);
};
var ToastMessageContent = function (props) {
    var classes = useStyles1();
    var className = props.className, message = props.message, onClose = props.onClose, variantClassName = props.variantClassName, other = __rest(props, ["className", "message", "onClose", "variantClassName"]);
    var Icon = (variantClassName) ? variantIcon[variantClassName] : '';
    var variantClass = (variantClassName) ? classes[variantClassName] : '';
    return (React.createElement(SnackbarContent, __assign({ className: clsx(variantClass, className), "aria-describedby": "client-snackbar", message: React.createElement("span", { className: classes.message },
            (Icon) && (React.createElement(Icon, { className: clsx(classes.icon, classes.iconVariant) })),
            message), action: [
            React.createElement(IconButton, { key: "close", "aria-label": "close", color: "inherit", onClick: onClose },
                React.createElement(CloseIcon, { className: classes.icon })),
        ] }, other)));
};
var ToastMessage = function (props) {
    var className = props.className, variant = props.variant, TransitionComponent = props.TransitionComponent, autoHideDuration = props.autoHideDuration, anchorOrigin = props.anchorOrigin, open = props.open, onClose = props.onClose;
    var snackBarProps = __assign(__assign({}, defaultProps), { TransitionComponent: TransitionComponent, autoHideDuration: autoHideDuration, anchorOrigin: anchorOrigin, open: open, onClose: onClose });
    return (React.createElement(Snackbar, __assign({}, snackBarProps),
        React.createElement(ToastMessageContent, __assign({}, props.ContentProps, { onClose: props.onClose, message: props.message, variantClassName: variant, className: className }))));
};
var useStyles1 = styles.makeStyles(function (theme) { return ({
    success: {
        backgroundColor: theme.palette.success.main,
    },
    error: {
        backgroundColor: theme.palette.error.main,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: theme.palette.warning.main,
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}); });

exports.AppDialog = AppDialog;
exports.DialogTitle = DialogTitle;
exports.ToastInit = ToastInit;
exports.ToastMessage = ToastMessage;
exports.ToastMessageContent = ToastMessageContent;
//# sourceMappingURL=index.js.map
