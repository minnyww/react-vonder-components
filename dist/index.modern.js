import React from 'react';
import { Divider, Card, Button } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  border: none;\n  width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);\n  border-radius: ", ";\n  margin-bottom: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 110px;\n  height: 100px;\n  object-fit: cover;\n  border-radius: 15px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var CardImage = styled.img(_templateObject());
var BaseCard = styled(Card)(_templateObject2(), function (props) {
  return props.borderradius ? props.borderradius + "px" : '0px';
}, function (props) {
  return props.marginbottom ? props.marginbottom + "em" : '0em';
});
var BaseButton = styled(Button)(_templateObject3(), function (props) {
  return props.buttoncolor ? "" + props.buttoncolor : '';
});
var index = React.memo(function VonderCardList(_ref) {
  var data = _ref.data,
      _onClick = _ref.onClick,
      marginbetweencard = _ref.marginbetweencard,
      cardradius = _ref.cardradius,
      buttoncolor = _ref.buttoncolor;
  return /*#__PURE__*/React.createElement(React.Fragment, null, data.map(function (item, index) {
    return /*#__PURE__*/React.createElement(BaseCard, {
      key: index,
      hoverable: true,
      bordered: true,
      borderradius: cardradius,
      marginbottom: marginbetweencard
    }, /*#__PURE__*/React.createElement(CardImage, {
      src: item.imageUrl,
      alt: "image_card",
      loading: "lazy"
    }), item.name, /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(BaseButton, {
      buttoncolor: buttoncolor,
      type: "primary",
      onClick: function onClick() {
        return _onClick(item);
      }
    }, "View Detail"));
  }));
});

export default index;
//# sourceMappingURL=index.modern.js.map
