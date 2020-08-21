import React from 'react';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import _taggedTemplateLiteral from '@babel/runtime/helpers/esm/taggedTemplateLiteral';
import styled, { css } from 'styled-components';

var index = (function (_ref) {
  var title = _ref.title;
  return React.createElement("h1", null, title);
});

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  ", "\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  &[disabled],\n  &[disabled]:hover,\n  &[disabled]:focus,\n  &[disabled]:active {\n    ", "\n    background: #f5f5f5;\n    border-color: #d9d9d9;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  opacity: .65;\n  pointer-events: none;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  background: ", ";\n  border-color: ", ";\n\n  &:hover, &.focus {\n    color: ", ";\n    background: ", ";\n    border-color: ", ";\n  }\n\n  &:active {\n    color: ", ";\n    background: ", ";\n    border-color: ", ";\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  background: transparent;\n\n  &:hover,\n  &.focus,\n  &:active {\n    color: ", ";\n    background: transparent;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  line-height: 1.5715;\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 400;\n  white-space: nowrap;\n  text-align: center;\n  background-image: none;\n  border: 1px solid transparent;\n  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  user-select: none;\n  touch-action: manipulation;\n  border-radius: 2px;\n  text-decoration: none;\n  outline: 0;\n  box-sizing: border-box;\n  cursor: pointer;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  background: transparent;\n  border-color: transparent;\n  pointer-events: none;\n  ", "\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.25);\n  text-shadow: none;\n  box-shadow: none;\n  cursor: not-allowed;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    height: 32px;\n    padding: 4px 16px;\n    font-size: 14px;\n    border-radius: 32px;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    min-width: 32px;\n    padding: 0;\n    text-align: center;\n    border-radius: 50%;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    height: 24px;\n    padding: 0px 7px;\n    font-size: 14px;\n    ", "\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    height: 40px;\n    padding: 6px 16px;\n    font-size: 16px;\n    ", "\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    height: 32px;\n    font-size: 14px;\n    padding: ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    background: ", ";\n    border-color: ", ";\n    ", "\n\n    &:hover, &.focus {\n      color: ", ";\n      background: ", ";\n      border-color: ", ";\n      ", "\n    }\n\n    &:active {\n      color: ", ";\n      background: ", ";\n      border-color: ", ";\n      outline: 0;\n      box-shadow: none;\n      ", "\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function getTypeCSS(base, hover, active) {
  return css(_templateObject(), base.color, base.background, base.borderColor, base.otherCSS, hover.color, hover.background, hover.borderColor, hover.otherCSS, active.color, active.background, active.borderColor, active.otherCSS);
}

var defaultType = getTypeCSS({
  color: 'rgba(0, 0, 0, 0.65)',
  background: '#fff',
  borderColor: '#d9d9d9'
}, {
  color: '#40a9ff',
  background: '#fff',
  borderColor: '#40a9ff'
}, {
  color: '#096dd9',
  background: '#fff',
  borderColor: '#096dd9'
});
var primaryType = getTypeCSS({
  color: '#fff',
  background: '#1890ff',
  borderColor: '#1890ff',
  otherCSS: 'text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);'
}, {
  color: '#fff',
  background: '#40a9ff',
  borderColor: '#40a9ff'
}, {
  color: '#fff',
  background: '#096dd9',
  borderColor: '#096dd9'
});
var dashedType = getTypeCSS({
  color: 'rgba(0, 0, 0, 0.65)',
  background: '#fff',
  borderColor: '#d9d9d9',
  otherCSS: 'border-style: dashed;'
}, {
  color: '#40a9ff',
  background: '#fff',
  borderColor: '#40a9ff'
}, {
  color: '#096dd9',
  background: '#fff',
  borderColor: '#096dd9'
});
var textType = getTypeCSS({
  color: 'rgba(0, 0, 0, 0.65)',
  background: 'transparent',
  borderColor: 'transparent',
  otherCSS: 'box-shadow: none;'
}, {
  color: 'rgba(0, 0, 0, 0.65)',
  background: 'rgba(0, 0, 0, 0.018)',
  borderColor: 'transparent'
}, {
  color: 'rgba(0, 0, 0, 0.65)',
  background: 'rgba(0, 0, 0, 0.028)',
  borderColor: 'transparent'
});
var linkType = getTypeCSS({
  color: '#1890ff',
  background: 'transparent',
  borderColor: 'transparent',
  otherCSS: 'box-shadow: none;'
}, {
  color: '#40a9ff',
  background: 'transparent',
  borderColor: 'transparent'
}, {
  color: '#096dd9',
  background: 'transparent',
  borderColor: 'transparent'
});
var Size = {
  default: css(_templateObject2(), function (_ref) {
    var shape = _ref.shape;
    return shape && shape === 'round' ? '4px 16px' : shape === 'circle' ? 'padding: 0;' : '4px 12px';
  }),
  large: css(_templateObject3(), function (_ref2) {
    var shape = _ref2.shape;
    return shape && (shape === 'circle' ? 'min-width: 40px;width: 40px;padding: 0;' : 'width: auto;padding: 6px 20px;border-radius: 40px;');
  }),
  small: css(_templateObject4(), function (_ref3) {
    var shape = _ref3.shape;
    return shape && (shape === 'circle' ? 'min-width: 24px;width: 24px;padding: 0;' : 'width: auto;padding: 0px 12px;border-radius: 24px;');
  })
};
var Type = {
  default: defaultType,
  primary: primaryType,
  dashed: dashedType,
  link: linkType,
  text: textType
};
var Shap = {
  circle: css(_templateObject5()),
  round: css(_templateObject6())
};
var baseDisabled = css(_templateObject7());
var ancharDisabled = css(_templateObject8(), baseDisabled);
var buttonBase = css(_templateObject9());
var ghostCSS = css(_templateObject10(), function (_ref4) {
  var buttonType = _ref4.buttonType;
  return buttonType === 'primary' ? '#1890ff' : '#fff';
}, function (_ref5) {
  var buttonType = _ref5.buttonType;
  return buttonType === 'primary' && '#1890ff';
});
var dangerCSS = css(_templateObject11(), function (_ref6) {
  var buttonType = _ref6.buttonType;
  return buttonType === 'primary' ? '#fff' : '#ff4d4f';
}, function (_ref7) {
  var buttonType = _ref7.buttonType;
  return buttonType === 'primary' ? '#ff4d4f' : '#fff';
}, function (_ref8) {
  var buttonType = _ref8.buttonType;
  return buttonType !== 'link' && buttonType !== 'text' && '#ff4d4f';
}, function (_ref9) {
  var buttonType = _ref9.buttonType;
  return buttonType === 'primary' ? '#fff' : '#ff7875';
}, function (_ref10) {
  var buttonType = _ref10.buttonType;
  return buttonType === 'primary' ? '#ff7875' : '#fff';
}, function (_ref11) {
  var buttonType = _ref11.buttonType;
  return buttonType !== 'link' && buttonType !== 'text' && '#ff7875';
}, function (_ref12) {
  var buttonType = _ref12.buttonType;
  return buttonType === 'primary' ? '#fff' : '#d9363e';
}, function (_ref13) {
  var buttonType = _ref13.buttonType;
  return buttonType === 'primary' ? '#d9363e' : '#fff';
}, function (_ref14) {
  var buttonType = _ref14.buttonType;
  return buttonType !== 'link' && buttonType !== 'text' && '#d9363e';
});
var loadingCSS = css(_templateObject12());
var ButtonView = styled.button(_templateObject13(), buttonBase, function (_ref15) {
  var buttonType = _ref15.buttonType;
  return Type[buttonType];
}, function (_ref16) {
  var shape = _ref16.shape;
  return shape && Shap[shape];
}, function (_ref17) {
  var buttonSize = _ref17.buttonSize;
  return Size[buttonSize];
}, function (_ref18) {
  var block = _ref18.block;
  return block && 'width: 100%;';
}, function (_ref19) {
  var ghost = _ref19.ghost;
  return ghost && ghostCSS;
}, function (_ref20) {
  var danger = _ref20.danger;
  return danger && dangerCSS;
}, function (_ref21) {
  var isLoading = _ref21.isLoading;
  return isLoading && loadingCSS;
}, baseDisabled);
var AncharView = styled.a(_templateObject14(), buttonBase, Type.link, function (_ref22) {
  var buttonSize = _ref22.buttonSize;
  return buttonSize && Size[buttonSize];
}, function (_ref23) {
  var disabled = _ref23.disabled;
  return disabled && ancharDisabled;
}, function (_ref24) {
  var block = _ref24.block;
  return block && 'width: 100%;';
}, function (_ref25) {
  var danger = _ref25.danger;
  return danger && dangerCSS;
});
var ButtonIconView = styled.span(_templateObject15(), function (_ref26) {
  var iconOnly = _ref26.iconOnly;
  return iconOnly && 'margin-right: 8px;';
});

var Button = React.forwardRef(function (props, ref) {
  var _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$ghost = props.ghost,
      ghost = _props$ghost === void 0 ? false : _props$ghost,
      _props$block = props.block,
      block = _props$block === void 0 ? false : _props$block,
      _props$danger = props.danger,
      danger = _props$danger === void 0 ? false : _props$danger,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      _props$size = props.size,
      size = _props$size === void 0 ? 'default' : _props$size,
      _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      _props$htmlType = props.htmlType,
      htmlType = _props$htmlType === void 0 ? 'button' : _props$htmlType,
      href = props.href,
      children = props.children,
      shape = props.shape,
      icon = props.icon,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      rest = _objectWithoutProperties(props, ["disabled", "ghost", "block", "danger", "loading", "size", "type", "htmlType", "href", "children", "shape", "icon", "className"]);

  var shareProps = {
    buttonSize: size,
    buttonType: type,
    disabled: disabled,
    danger: danger,
    block: block,
    ghost: ghost,
    ref: ref
  };

  if (type === 'link' && href) {
    return React.createElement(AncharView, Object.assign({
      href: href,
      className: "faz-ui_button-anchar ".concat(className)
    }, shareProps, rest), icon && React.createElement(ButtonIconView, {
      iconOnly: !!children
    }, icon), children);
  }

  return React.createElement(ButtonView, Object.assign({
    type: htmlType,
    shape: shape,
    isLoading: loading,
    className: "faz-ui_button ".concat(className)
  }, shareProps, rest), loading && type !== 'text' && React.createElement(ButtonIconView, {
    iconOnly: !!children
  }), icon && React.createElement(ButtonIconView, {
    iconOnly: !!children
  }, icon), children);
});
Button.displayName = 'Button';
Button.defaultProps = {
  disabled: false,
  ghost: false,
  block: false,
  danger: false,
  size: 'default',
  type: 'default',
  htmlType: 'button'
};

export { Button, index as Foo };
