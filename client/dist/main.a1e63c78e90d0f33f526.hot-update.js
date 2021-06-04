self["webpackHotUpdatetitle"]("main",{

/***/ "./client/src/app.jsx":
/*!****************************!*\
  !*** ./client/src/app.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./client/src/style.css");
/* harmony import */ var _helpers_backgroundImages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./__helpers__/backgroundImages */ "./client/src/__helpers__/backgroundImages.js");
/* harmony import */ var _components_titles_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/titles.jsx */ "./client/src/components/titles.jsx");
/* harmony import */ var _components_enrolled_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/enrolled.jsx */ "./client/src/components/enrolled.jsx");
/* harmony import */ var _components_totalStars_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/totalStars.jsx */ "./client/src/components/totalStars.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

var Title = /*#__PURE__*/function (_Component) {
  _inherits(Title, _Component);

  var _super = _createSuper(Title);

  function Title(props) {
    var _this;

    _classCallCheck(this, Title);

    _this = _super.call(this, props);
    _this.state = {
      id: 1,
      num: 0,
      titles: '',
      totalEnrolled: 0,
      instructor: '',
      offeredBy: '',
      img: '',
      month: '',
      date: 0,
      totalReviews: 20,
      totalStars: 0,
      color: ''
    };
    return _this;
  } // API Get request


  _createClass(Title, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var id = window.location.pathname; // GET title, enrolled num, months, date, color, reviews, & stars

      axios__WEBPACK_IMPORTED_MODULE_2___default().get("/getTitle".concat(id)).then(function (res) {
        console.log(res.data);

        _this2.setState({
          titles: res.data.title,
          totalEnrolled: res.data.enrolled,
          month: months[Math.floor(Math.random() * months.length)],
          date: Math.floor(Math.random() * 30),
          color: _helpers_backgroundImages__WEBPACK_IMPORTED_MODULE_4__.default[Math.floor(Math.random() * _helpers_backgroundImages__WEBPACK_IMPORTED_MODULE_4__.default.length)],
          totalReviews: res.data.reviewcounts,
          totalStars: res.data.stars,
          offeredBy: res.data.offeredby
        });
      })["catch"](function (err) {
        return console.error('Cannot get title', err);
      }); // generated from jay instructor

      axios__WEBPACK_IMPORTED_MODULE_2___default().get("http://54.176.19.199:3003/api/instructors".concat(id)).then(function (response) {
        _this2.setState({
          instructor: "".concat(response.data[0].firstName, " ").concat(response.data[0].lastName)
        });
      })["catch"](function (err) {
        return console.log('Cannot get instructors', err);
      }); // generated from jay images

      axios__WEBPACK_IMPORTED_MODULE_2___default().get("http://54.176.19.199:3006/api/image".concat(id, "/primaryInstructor ")).then(function (response) {
        _this2.setState({
          img: response.data.primaryInstructor
        });
      })["catch"](function (err) {
        return console.log('Could not get images', err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "title-service",
        style: {
          backgroundImage: "linear-gradient(".concat(this.state.color, ")")
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "title-inner"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "title-service1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "title-nav"
      }, "Browse ", '>', "   Department ", '>', "   ", this.state.titles), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "banner-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_titles_jsx__WEBPACK_IMPORTED_MODULE_5__.default, {
        title: this.state.titles
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "title-star"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_totalStars_jsx__WEBPACK_IMPORTED_MODULE_7__.default, {
        rating: this.state.totalStars
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "title-num"
      }, this.state.totalStars), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "title-rating"
      }, this.state.totalReviews, " ratings")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "instructor-main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: this.state.img,
        alt: "instructor",
        className: "instructor"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "title-instructorName"
      }, this.state.instructor), this.state.totalEnrolled > 50000 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        id: "title-top-instructor"
      }, "Top instructor")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "white-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "title-charge"
      }, " Enroll for Free"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "title-date"
      }, "Starts ", this.state.month, " ", this.state.date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "title-aid"
      }, "Financial aid available"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "enrolled"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_enrolled_jsx__WEBPACK_IMPORTED_MODULE_6__.default, {
        enrolled: this.state.totalEnrolled
      }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        style: {
          marginLeft: '10px'
        }
      }, "already enrolled"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "side-bar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "offered"
      }, "Offered By "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "university"
      }, this.state.offeredBy))))));
    }
  }]);

  return Title;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Title, null), document.getElementById('title'));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d1536e96907afb5ebcbb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aXRsZS8uL2NsaWVudC9zcmMvYXBwLmpzeCIsIndlYnBhY2s6Ly90aXRsZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOlsibW9udGhzIiwiVGl0bGUiLCJwcm9wcyIsInN0YXRlIiwiaWQiLCJudW0iLCJ0aXRsZXMiLCJ0b3RhbEVucm9sbGVkIiwiaW5zdHJ1Y3RvciIsIm9mZmVyZWRCeSIsImltZyIsIm1vbnRoIiwiZGF0ZSIsInRvdGFsUmV2aWV3cyIsInRvdGFsU3RhcnMiLCJjb2xvciIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInNldFN0YXRlIiwidGl0bGUiLCJlbnJvbGxlZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImNvbG9ycyIsInJldmlld2NvdW50cyIsInN0YXJzIiwib2ZmZXJlZGJ5IiwiZXJyIiwiZXJyb3IiLCJyZXNwb25zZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicHJpbWFyeUluc3RydWN0b3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtYXJnaW5MZWZ0IiwiQ29tcG9uZW50IiwiUmVhY3REb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUcsQ0FDYixLQURhLEVBQ04sS0FETSxFQUNDLEtBREQsRUFDUSxLQURSLEVBQ2UsS0FEZixFQUNzQixLQUR0QixFQUM2QixNQUQ3QixFQUNxQyxLQURyQyxFQUM0QyxNQUQ1QyxFQUNvRCxLQURwRCxFQUMyRCxLQUQzRCxFQUNrRSxLQURsRSxDQUFmOztJQUtNQyxLOzs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FB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O0FBQWYsbUNBekJGLGVBMEJFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFLGlGQUFPLGlEQUFDLDZEQUFEO0FBQVUsZ0JBQVEsRUFBRSxLQUFLVCxLQUFMLENBQVdJO0FBQS9CLFFBQVAsTUFERixlQUVFO0FBQU0sYUFBSyxFQUFFO0FBQUVvQyxvQkFBVSxFQUFFO0FBQWQ7QUFBYiw0QkFGRixDQTFCRixDQURGLGVBZ0NFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFLDRFQUNFO0FBQUcsaUJBQVMsRUFBQztBQUFiLHVCQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBNkIsS0FBS3hDLEtBQUwsQ0FBV00sU0FBeEMsQ0FGRixDQURGLENBaENGLENBREYsQ0FERixDQURGO0FBNkNEOzs7O0VBekdpQm1DLDRDOztBQTRHcEJDLDZDQUFBLGVBQWdCLGlEQUFDLEtBQUQsT0FBaEIsRUFBMkJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUEzQixFOzs7Ozs7Ozs7O1VDMUhBLHNEIiwiZmlsZSI6Im1haW4uYTFlNjNjNzhlOTBkMGYzM2Y1MjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBsYXp5LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi9fX2hlbHBlcnNfXy9iYWNrZ3JvdW5kSW1hZ2VzJztcbmltcG9ydCBUaXRsZXMgZnJvbSAnLi9jb21wb25lbnRzL3RpdGxlcy5qc3gnO1xuaW1wb3J0IEVucm9sbGVkIGZyb20gJy4vY29tcG9uZW50cy9lbnJvbGxlZC5qc3gnO1xuaW1wb3J0IFN0YXJzIGZyb20gJy4vY29tcG9uZW50cy90b3RhbFN0YXJzLmpzeCc7XG5cbmNvbnN0IG1vbnRocyA9IFtcbiAgJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bHknLCAnQXVnJywgJ1NlcHQnLCAnT2N0JywgJ05vdicsICdEZWMnXG5dO1xuXG5cbmNsYXNzIFRpdGxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiAxLFxuICAgICAgbnVtOiAwLFxuICAgICAgdGl0bGVzOiAnJyxcbiAgICAgIHRvdGFsRW5yb2xsZWQ6IDAsXG4gICAgICBpbnN0cnVjdG9yOiAnJyxcbiAgICAgIG9mZmVyZWRCeTogJycsXG4gICAgICBpbWc6ICcnLFxuICAgICAgbW9udGg6ICcnLFxuICAgICAgZGF0ZTogMCxcbiAgICAgIHRvdGFsUmV2aWV3czogMjAsXG4gICAgICB0b3RhbFN0YXJzOiAwLFxuICAgICAgY29sb3I6ICcnLFxuICAgIH07XG4gIH1cblxuICAvLyBBUEkgR2V0IHJlcXVlc3RcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbGV0IGlkID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuXG4gICAgLy8gR0VUIHRpdGxlLCBlbnJvbGxlZCBudW0sIG1vbnRocywgZGF0ZSwgY29sb3IsIHJldmlld3MsICYgc3RhcnNcbiAgICBheGlvcy5nZXQoYC9nZXRUaXRsZSR7aWR9YClcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdGl0bGVzOiByZXMuZGF0YS50aXRsZSxcbiAgICAgICAgICB0b3RhbEVucm9sbGVkOiByZXMuZGF0YS5lbnJvbGxlZCxcbiAgICAgICAgICBtb250aDogbW9udGhzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1vbnRocy5sZW5ndGgpXSxcbiAgICAgICAgICBkYXRlOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMCksXG4gICAgICAgICAgY29sb3I6IGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV0sXG4gICAgICAgICAgdG90YWxSZXZpZXdzOiByZXMuZGF0YS5yZXZpZXdjb3VudHMsXG4gICAgICAgICAgdG90YWxTdGFyczogcmVzLmRhdGEuc3RhcnMsXG4gICAgICAgICAgb2ZmZXJlZEJ5OiByZXMuZGF0YS5vZmZlcmVkYnksXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignQ2Fubm90IGdldCB0aXRsZScsIGVycikpO1xuXG4gICAgLy8gZ2VuZXJhdGVkIGZyb20gamF5IGluc3RydWN0b3JcbiAgICBheGlvcy5nZXQoYGh0dHA6Ly81NC4xNzYuMTkuMTk5OjMwMDMvYXBpL2luc3RydWN0b3JzJHtpZH1gKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpbnN0cnVjdG9yOiBgJHtyZXNwb25zZS5kYXRhWzBdLmZpcnN0TmFtZX0gJHtyZXNwb25zZS5kYXRhWzBdLmxhc3ROYW1lfWBcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnQ2Fubm90IGdldCBpbnN0cnVjdG9ycycsIGVycikpO1xuXG4gICAgLy8gZ2VuZXJhdGVkIGZyb20gamF5IGltYWdlc1xuICAgIGF4aW9zLmdldChgaHR0cDovLzU0LjE3Ni4xOS4xOTk6MzAwNi9hcGkvaW1hZ2Uke2lkfS9wcmltYXJ5SW5zdHJ1Y3RvciBgKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpbWc6IHJlc3BvbnNlLmRhdGEucHJpbWFyeUluc3RydWN0b3JcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnQ291bGQgbm90IGdldCBpbWFnZXMnLCBlcnIpKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1zZXJ2aWNlXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KCR7dGhpcy5zdGF0ZS5jb2xvcn0pYCB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWlubmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXNlcnZpY2UxXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtbmF2XCI+XG4gICAgICAgICAgICAgICAgQnJvd3NlIHsnPid9ICAgRGVwYXJ0bWVudCB7Jz4nfSAgIHt0aGlzLnN0YXRlLnRpdGxlc31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPFRpdGxlcyB0aXRsZT17dGhpcy5zdGF0ZS50aXRsZXN9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXN0YXJcIj5cbiAgICAgICAgICAgICAgICA8U3RhcnMgcmF0aW5nPXt0aGlzLnN0YXRlLnRvdGFsU3RhcnN9IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGUtbnVtXCI+e3RoaXMuc3RhdGUudG90YWxTdGFyc308L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGUtcmF0aW5nXCI+e3RoaXMuc3RhdGUudG90YWxSZXZpZXdzfSByYXRpbmdzPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0cnVjdG9yLW1haW5cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5zdGF0ZS5pbWd9IGFsdD1cImluc3RydWN0b3JcIiBjbGFzc05hbWU9XCJpbnN0cnVjdG9yXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZS1pbnN0cnVjdG9yTmFtZVwiPlxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW5zdHJ1Y3Rvcn1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudG90YWxFbnJvbGxlZCA+IDUwMDAwICYmXG4gICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInRpdGxlLXRvcC1pbnN0cnVjdG9yXCI+VG9wIGluc3RydWN0b3I8L3NwYW4+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGl0ZS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWNoYXJnZVwiPiBFbnJvbGwgZm9yIEZyZWU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWRhdGVcIj5TdGFydHMge3RoaXMuc3RhdGUubW9udGh9IHt0aGlzLnN0YXRlLmRhdGV9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWFpZFwiPkZpbmFuY2lhbCBhaWQgYXZhaWxhYmxlPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW5yb2xsZWRcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj4gPEVucm9sbGVkIGVucm9sbGVkPXt0aGlzLnN0YXRlLnRvdGFsRW5yb2xsZWR9IC8+IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTBweCcgfX0+YWxyZWFkeSBlbnJvbGxlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZS1iYXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwib2ZmZXJlZFwiPk9mZmVyZWQgQnkgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidW5pdmVyc2l0eVwiPnt0aGlzLnN0YXRlLm9mZmVyZWRCeX08L2Rpdj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5SZWFjdERvbS5yZW5kZXIoPFRpdGxlIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKSk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkMTUzNmU5NjkwN2FmYjVlYmNiYlwiKSJdLCJzb3VyY2VSb290IjoiIn0=