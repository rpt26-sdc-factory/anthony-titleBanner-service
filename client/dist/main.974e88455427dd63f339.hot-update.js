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

      var id = window.location.pathname;
      var urls = ["/getTitle".concat(id), "http://18.118.36.172:3003/api/instructors".concat(id) // `http://54.176.19.199:3006/api/image${id}/primaryInstructor`
      ];
      var results = Promise.allSettled(urls.map(function (url) {
        return axios__WEBPACK_IMPORTED_MODULE_2___default().get(url);
      }));
      results.then(function (res) {
        res.forEach(function (res, i) {
          if (res.status === "fulfilled") {
            // titles, etc.
            if (i === 0) {
              var _res$value$data = res.value.data,
                  title = _res$value$data.title,
                  enrolled = _res$value$data.enrolled,
                  reviewcounts = _res$value$data.reviewcounts,
                  stars = _res$value$data.stars,
                  offeredby = _res$value$data.offeredby;

              _this2.setState({
                titles: title,
                totalEnrolled: enrolled,
                month: months[Math.floor(Math.random() * months.length)],
                date: Math.floor(Math.random() * 30),
                color: _helpers_backgroundImages__WEBPACK_IMPORTED_MODULE_4__.default[Math.floor(Math.random() * _helpers_backgroundImages__WEBPACK_IMPORTED_MODULE_4__.default.length)],
                totalReviews: reviewcounts,
                totalStars: stars,
                offeredBy: offeredby
              }); // instructor name

            } else if (i === 1) {
              var _res$value$data$ = res.value.data[0],
                  firstname = _res$value$data$.firstname,
                  lastname = _res$value$data$.lastname;

              _this2.setState({
                instructor: "".concat(firstname, " ").concat(lastname)
              }); // instructor image

            } else {
              var primaryInstructor = res.value.data.primaryInstructor;

              _this2.setState({
                img: primaryInstructor
              });
            }
          }
        });
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
/******/ 	__webpack_require__.h = () => ("8c4c8f9774032a3df3ca")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aXRsZS8uL2NsaWVudC9zcmMvYXBwLmpzeCIsIndlYnBhY2s6Ly90aXRsZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOlsibW9udGhzIiwiVGl0bGUiLCJwcm9wcyIsInN0YXRlIiwiaWQiLCJudW0iLCJ0aXRsZXMiLCJ0b3RhbEVucm9sbGVkIiwiaW5zdHJ1Y3RvciIsIm9mZmVyZWRCeSIsImltZyIsIm1vbnRoIiwiZGF0ZSIsInRvdGFsUmV2aWV3cyIsInRvdGFsU3RhcnMiLCJjb2xvciIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ1cmxzIiwicmVzdWx0cyIsIlByb21pc2UiLCJhbGxTZXR0bGVkIiwibWFwIiwidXJsIiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiZm9yRWFjaCIsImkiLCJzdGF0dXMiLCJ2YWx1ZSIsImRhdGEiLCJ0aXRsZSIsImVucm9sbGVkIiwicmV2aWV3Y291bnRzIiwic3RhcnMiLCJvZmZlcmVkYnkiLCJzZXRTdGF0ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImNvbG9ycyIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwicHJpbWFyeUluc3RydWN0b3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtYXJnaW5MZWZ0IiwiQ29tcG9uZW50IiwiUmVhY3REb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUcsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsTUFBM0MsRUFBbUQsS0FBbkQsRUFBMEQsTUFBMUQsRUFBa0UsS0FBbEUsRUFBeUUsS0FBekUsRUFBZ0YsS0FBaEYsQ0FB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QkFOSixDQVpGLGVBcUJFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLDRCQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsb0JBQW9DLEtBQUtKLEtBQUwsQ0FBV1EsS0FBL0MsT0FBdUQsS0FBS1IsS0FBTCxDQUFXUyxJQUFsRSxDQUZGLENBckJGLGVBeUJFO0FBQUssaUJBQVMsRUFBQztBQUFmLG1DQXpCRixlQTBCRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRSxpRkFBTyxpREFBQyw2REFBRDtBQUFVLGdCQUFRLEVBQUUsS0FBS1QsS0FBTCxDQUFXSTtBQUEvQixRQUFQLE1BREYsZUFFRTtBQUFNLGFBQUssRUFBRTtBQUFFeUMsb0JBQVUsRUFBRTtBQUFkO0FBQWIsNEJBRkYsQ0ExQkYsQ0FERixlQWdDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRSw0RUFDRTtBQUFHLGlCQUFTLEVBQUM7QUFBYix1QkFERixlQUVFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQTZCLEtBQUs3QyxLQUFMLENBQVdNLFNBQXhDLENBRkYsQ0FERixDQWhDRixDQURGLENBREYsQ0FERjtBQTZDRDs7OztFQWxIaUJ3Qyw0Qzs7QUFxSHBCQyw2Q0FBQSxlQUFnQixpREFBQyxLQUFELE9BQWhCLEVBQTJCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBM0IsRTs7Ozs7Ozs7OztVQ2pJQSxzRCIsImZpbGUiOiJtYWluLjk3NGU4ODQ1NTQyN2RkNjNmMzM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbGF6eSwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4vX19oZWxwZXJzX18vYmFja2dyb3VuZEltYWdlcyc7XG5pbXBvcnQgVGl0bGVzIGZyb20gJy4vY29tcG9uZW50cy90aXRsZXMuanN4JztcbmltcG9ydCBFbnJvbGxlZCBmcm9tICcuL2NvbXBvbmVudHMvZW5yb2xsZWQuanN4JztcbmltcG9ydCBTdGFycyBmcm9tICcuL2NvbXBvbmVudHMvdG90YWxTdGFycy5qc3gnO1xuXG5jb25zdCBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bHknLCAnQXVnJywgJ1NlcHQnLCAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuXG5jbGFzcyBUaXRsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpZDogMSxcbiAgICAgIG51bTogMCxcbiAgICAgIHRpdGxlczogJycsXG4gICAgICB0b3RhbEVucm9sbGVkOiAwLFxuICAgICAgaW5zdHJ1Y3RvcjogJycsXG4gICAgICBvZmZlcmVkQnk6ICcnLFxuICAgICAgaW1nOiAnJyxcbiAgICAgIG1vbnRoOiAnJyxcbiAgICAgIGRhdGU6IDAsXG4gICAgICB0b3RhbFJldmlld3M6IDIwLFxuICAgICAgdG90YWxTdGFyczogMCxcbiAgICAgIGNvbG9yOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgLy8gQVBJIEdldCByZXF1ZXN0XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGlkID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuXG4gICAgY29uc3QgdXJscyA9IFtcbiAgICAgIGAvZ2V0VGl0bGUke2lkfWAsXG4gICAgICBgaHR0cDovLzE4LjExOC4zNi4xNzI6MzAwMy9hcGkvaW5zdHJ1Y3RvcnMke2lkfWBcbiAgICAgIC8vIGBodHRwOi8vNTQuMTc2LjE5LjE5OTozMDA2L2FwaS9pbWFnZSR7aWR9L3ByaW1hcnlJbnN0cnVjdG9yYFxuICAgIF07XG5cbiAgICBjb25zdCByZXN1bHRzID0gUHJvbWlzZS5hbGxTZXR0bGVkKHVybHMubWFwKHVybCA9PiBheGlvcy5nZXQodXJsKSkpO1xuXG4gICAgcmVzdWx0cy50aGVuKHJlcyA9PiB7XG4gICAgICByZXMuZm9yRWFjaCgocmVzLCBpKSA9PiB7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSBcImZ1bGZpbGxlZFwiKSB7XG4gICAgICAgICAgLy8gdGl0bGVzLCBldGMuXG4gICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdGl0bGUsIGVucm9sbGVkLCByZXZpZXdjb3VudHMsIHN0YXJzLCBvZmZlcmVkYnkgfSA9IHJlcy52YWx1ZS5kYXRhO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgdGl0bGVzOiB0aXRsZSxcbiAgICAgICAgICAgICAgdG90YWxFbnJvbGxlZDogZW5yb2xsZWQsXG4gICAgICAgICAgICAgIG1vbnRoOiBtb250aHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbW9udGhzLmxlbmd0aCldLFxuICAgICAgICAgICAgICBkYXRlOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMCksXG4gICAgICAgICAgICAgIGNvbG9yOiBjb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCldLFxuICAgICAgICAgICAgICB0b3RhbFJldmlld3M6IHJldmlld2NvdW50cyxcbiAgICAgICAgICAgICAgdG90YWxTdGFyczogc3RhcnMsXG4gICAgICAgICAgICAgIG9mZmVyZWRCeTogb2ZmZXJlZGJ5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBpbnN0cnVjdG9yIG5hbWVcbiAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZmlyc3RuYW1lLCBsYXN0bmFtZSB9ID0gcmVzLnZhbHVlLmRhdGFbMF07XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBpbnN0cnVjdG9yOiBgJHtmaXJzdG5hbWV9ICR7bGFzdG5hbWV9YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gaW5zdHJ1Y3RvciBpbWFnZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB7IHByaW1hcnlJbnN0cnVjdG9yIH0gPSByZXMudmFsdWUuZGF0YTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGltZzogcHJpbWFyeUluc3RydWN0b3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1zZXJ2aWNlXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KCR7dGhpcy5zdGF0ZS5jb2xvcn0pYCB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWlubmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXNlcnZpY2UxXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtbmF2XCI+XG4gICAgICAgICAgICAgICAgQnJvd3NlIHsnPid9ICAgRGVwYXJ0bWVudCB7Jz4nfSAgIHt0aGlzLnN0YXRlLnRpdGxlc31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPFRpdGxlcyB0aXRsZT17dGhpcy5zdGF0ZS50aXRsZXN9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXN0YXJcIj5cbiAgICAgICAgICAgICAgICA8U3RhcnMgcmF0aW5nPXt0aGlzLnN0YXRlLnRvdGFsU3RhcnN9IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGUtbnVtXCI+e3RoaXMuc3RhdGUudG90YWxTdGFyc308L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGUtcmF0aW5nXCI+e3RoaXMuc3RhdGUudG90YWxSZXZpZXdzfSByYXRpbmdzPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0cnVjdG9yLW1haW5cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5zdGF0ZS5pbWd9IGFsdD1cImluc3RydWN0b3JcIiBjbGFzc05hbWU9XCJpbnN0cnVjdG9yXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZS1pbnN0cnVjdG9yTmFtZVwiPlxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW5zdHJ1Y3Rvcn1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudG90YWxFbnJvbGxlZCA+IDUwMDAwICYmXG4gICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInRpdGxlLXRvcC1pbnN0cnVjdG9yXCI+VG9wIGluc3RydWN0b3I8L3NwYW4+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGl0ZS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWNoYXJnZVwiPiBFbnJvbGwgZm9yIEZyZWU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWRhdGVcIj5TdGFydHMge3RoaXMuc3RhdGUubW9udGh9IHt0aGlzLnN0YXRlLmRhdGV9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWFpZFwiPkZpbmFuY2lhbCBhaWQgYXZhaWxhYmxlPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW5yb2xsZWRcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj4gPEVucm9sbGVkIGVucm9sbGVkPXt0aGlzLnN0YXRlLnRvdGFsRW5yb2xsZWR9IC8+IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTBweCcgfX0+YWxyZWFkeSBlbnJvbGxlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZS1iYXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwib2ZmZXJlZFwiPk9mZmVyZWQgQnkgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidW5pdmVyc2l0eVwiPnt0aGlzLnN0YXRlLm9mZmVyZWRCeX08L2Rpdj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5SZWFjdERvbS5yZW5kZXIoPFRpdGxlIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKSk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4YzRjOGY5Nzc0MDMyYTNkZjNjYVwiKSJdLCJzb3VyY2VSb290IjoiIn0=