webpackJsonp([8],{

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(220);


/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_tree_assets_index_less__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_tree_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rc_tree_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_tree__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rc_tree__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint no-console:0 */





function generateTreeNodes(treeNode) {
  var arr = [];
  var key = treeNode.props.eventKey;
  for (var i = 0; i < 3; i++) {
    arr.push({ name: 'leaf ' + key + '-' + i, key: key + '-' + i });
  }
  return arr;
}

function setLeaf(treeData, curKey, level) {
  var loopLeaf = function loopLeaf(data, lev) {
    var l = lev - 1;
    data.forEach(function (item) {
      if (item.key.length > curKey.length ? item.key.indexOf(curKey) !== 0 : curKey.indexOf(item.key) !== 0) {
        return;
      }
      if (item.children) {
        loopLeaf(item.children, l);
      } else if (l < 1) {
        item.isLeaf = true;
      }
    });
  };
  loopLeaf(treeData, level + 1);
}

function getNewTreeData(treeData, curKey, child, level) {
  var loop = function loop(data) {
    if (level < 1 || curKey.length - 3 > level * 2) return;
    data.forEach(function (item) {
      if (curKey.indexOf(item.key) === 0) {
        if (item.children) {
          loop(item.children);
        } else {
          item.children = child;
        }
      }
    });
  };
  loop(treeData);
  setLeaf(treeData, curKey, level);
}

var Demo = function (_React$Component) {
  _inherits(Demo, _React$Component);

  function Demo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Demo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      treeData: [],
      checkedKeys: []
    }, _this.onSelect = function (info) {
      console.log('selected', info);
    }, _this.onCheck = function (checkedKeys) {
      console.log(checkedKeys);
      _this.setState({
        checkedKeys: checkedKeys
      });
    }, _this.onLoadData = function (treeNode) {
      console.log('load data...');
      return new Promise(function (resolve) {
        setTimeout(function () {
          var treeData = [].concat(_toConsumableArray(_this.state.treeData));
          getNewTreeData(treeData, treeNode.props.eventKey, generateTreeNodes(treeNode), 2);
          _this.setState({ treeData: treeData });
          resolve();
        }, 500);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Demo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          treeData: [{ name: 'pNode 01', key: '0-0' }, { name: 'pNode 02', key: '0-1' }, { name: 'pNode 03', key: '0-2', isLeaf: true }],
          checkedKeys: ['0-0']
        });
      }, 100);
    }
  }, {
    key: 'render',
    value: function render() {
      var loop = function loop(data) {
        return data.map(function (item) {
          if (item.children) {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_rc_tree__["TreeNode"],
              { title: item.name, key: item.key },
              loop(item.children)
            );
          }
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_rc_tree__["TreeNode"], { title: item.name, key: item.key, isLeaf: item.isLeaf,
            disabled: item.key === '0-0-0'
          });
        });
      };
      var treeNodes = loop(this.state.treeData);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h2',
          null,
          'dynamic render'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_rc_tree___default.a,
          {
            onSelect: this.onSelect,
            checkable: true, onCheck: this.onCheck, checkedKeys: this.state.checkedKeys,
            loadData: this.onLoadData
          },
          treeNodes
        )
      );
    }
  }]);

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ })

},[219]);
//# sourceMappingURL=dynamic.js.map