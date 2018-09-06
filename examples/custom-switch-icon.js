webpackJsonp([9],{

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(212);


/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_tree__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rc_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_tree_assets_index_less__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_tree_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rc_tree_assets_index_less__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint no-console:0 */
/* eslint no-alert:0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions:0 */






var arrowPath = 'M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88' + '.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.' + '6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-0.7 5.' + '2-2L869 536.2c14.7-12.8 14.7-35.6 0-48.4z';

var getSvgIcon = function getSvgIcon(path) {
  var iStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'i',
    { style: iStyle },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'svg',
      {
        viewBox: '0 0 1024 1024',
        width: '1em',
        height: '1em',
        fill: 'currentColor',
        style: _extends({ verticalAlign: '-.125em' }, style)
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: path })
    )
  );
};

var Demo = function (_React$Component) {
  _inherits(Demo, _React$Component);

  function Demo(props) {
    _classCallCheck(this, Demo);

    var _this = _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).call(this, props));

    var keys = props.keys;
    _this.state = {
      defaultExpandedKeys: keys,
      defaultSelectedKeys: keys,
      defaultCheckedKeys: keys
    };
    return _this;
  }

  _createClass(Demo, [{
    key: 'render',
    value: function render() {
      var switcherIcon = function switcherIcon(obj) {
        if (obj.isLeaf) {
          return getSvgIcon(arrowPath, { cursor: 'pointer', backgroundColor: 'white' }, { transform: 'rotate(270deg)' });
        }
        return getSvgIcon(arrowPath, { cursor: 'pointer', backgroundColor: 'white' }, { transform: 'rotate(' + (obj.expanded ? 90 : 0) + 'deg)' });
      };
      var treeCls = 'myCls' + (this.state.useIcon && ' customIcon' || '');

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'demo', style: { margin: '0 20px' } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'custom switch icon'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_rc_tree___default.a,
          {
            className: treeCls, showLine: true, checkable: true, defaultExpandAll: true,
            defaultExpandedKeys: this.state.defaultExpandedKeys,
            defaultSelectedKeys: this.state.defaultSelectedKeys,
            defaultCheckedKeys: this.state.defaultCheckedKeys,
            switcherIcon: switcherIcon
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_rc_tree__["TreeNode"],
            { title: 'parent 1', key: '0-0' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_rc_tree__["TreeNode"],
              { title: 'leaf', key: '0-0-0' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rc_tree__["TreeNode"], { title: 'leaf', key: '0-0-0-0' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rc_tree__["TreeNode"], { title: 'leaf', key: '0-0-0-1' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_rc_tree__["TreeNode"],
              { title: 'parent 1-1', key: '0-0-1' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rc_tree__["TreeNode"], { title: 'parent 1-1-0', key: '0-0-1-0', disableCheckbox: true }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rc_tree__["TreeNode"], { title: 'parent 1-1-1', key: '0-0-1-1' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_rc_tree__["TreeNode"],
              { title: 'parent 1-2', key: '0-0-2', disabled: true },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rc_tree__["TreeNode"], { title: 'parent 1-2-0', key: '0-0-2-0', disabled: true }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rc_tree__["TreeNode"], { title: 'parent 1-2-1', key: '0-0-2-1' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_rc_tree__["TreeNode"],
              { title: 'parent 1-3', key: '0-0-3' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rc_tree__["TreeNode"], { title: 'parent 1-3-0', key: '0-0-3-0' }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rc_tree__["TreeNode"], { title: 'parent 1-3-1', key: '0-0-3-1' })
            )
          )
        )
      );
    }
  }]);

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Demo.propTypes = {
  keys: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array
};
Demo.defaultProps = {
  keys: ['0-0-0-0']
};


__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ })

},[211]);
//# sourceMappingURL=custom-switch-icon.js.map