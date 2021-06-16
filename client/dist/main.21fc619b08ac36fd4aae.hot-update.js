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
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");
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
              console.log(res.value.data);
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
/******/ 	__webpack_require__.h = () => ("537646edb153eed72303")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aXRsZS8uL2NsaWVudC9zcmMvYXBwLmpzeCIsIndlYnBhY2s6Ly90aXRsZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOlsibW9udGhzIiwiVGl0bGUiLCJwcm9wcyIsInN0YXRlIiwiaWQiLCJudW0iLCJ0aXRsZXMiLCJ0b3RhbEVucm9sbGVkIiwiaW5zdHJ1Y3RvciIsIm9mZmVyZWRCeSIsImltZyIsIm1vbnRoIiwiZGF0ZSIsInRvdGFsUmV2aWV3cyIsInRvdGFsU3RhcnMiLCJjb2xvciIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ1cmxzIiwicmVzdWx0cyIsIlByb21pc2UiLCJhbGxTZXR0bGVkIiwibWFwIiwidXJsIiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiZm9yRWFjaCIsImkiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJkYXRhIiwidGl0bGUiLCJlbnJvbGxlZCIsInJldmlld2NvdW50cyIsInN0YXJzIiwib2ZmZXJlZGJ5Iiwic2V0U3RhdGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjb2xvcnMiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsInByaW1hcnlJbnN0cnVjdG9yIiwiYmFja2dyb3VuZEltYWdlIiwibWFyZ2luTGVmdCIsIkNvbXBvbmVudCIsIlJlYWN0RG9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLEVBQTJDLE1BQTNDLEVBQW1ELEtBQW5ELEVBQTBELE1BQTFELEVBQWtFLEtBQWxFLEVBQXlF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V0ssVUFEZCxDQUZGLEVBS0csS0FBS0wsS0FBTCxDQUFXSSxhQUFYLEdBQTJCLEtBQTNCLGlCQUNDO0FBQU0sVUFBRSxFQUFDO0FBQVQsMEJBTkosQ0FaRixlQXFCRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZiw0QkFERixlQUVFO0FBQUssaUJBQVMsRUFBQztBQUFmLG9CQUFvQyxLQUFLSixLQUFMLENBQVdRLEtBQS9DLE9BQXVELEtBQUtSLEtBQUwsQ0FBV1MsSUFBbEUsQ0FGRixDQXJCRixlQXlCRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixtQ0F6QkYsZUEwQkU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0UsaUZBQU8saURBQUMsNkRBQUQ7QUFBVSxnQkFBUSxFQUFFLEtBQUtULEtBQUwsQ0FBV0k7QUFBL0IsUUFBUCxNQURGLGVBRUU7QUFBTSxhQUFLLEVBQUU7QUFBRTJDLG9CQUFVLEVBQUU7QUFBZDtBQUFiLDRCQUZGLENBMUJGLENBREYsZUFnQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0UsNEVBQ0U7QUFBRyxpQkFBUyxFQUFDO0FBQWIsdUJBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUE2QixLQUFLL0MsS0FBTCxDQUFXTSxTQUF4QyxDQUZGLENBREYsQ0FoQ0YsQ0FERixDQURGLENBREY7QUE2Q0Q7Ozs7RUFuSGlCMEMsNEM7O0FBdUhwQkMsNkNBQUEsZUFBZ0IsaURBQUMsS0FBRCxPQUFoQixFQUEyQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQTNCLEU7Ozs7Ozs7Ozs7VUNwSUEsc0QiLCJmaWxlIjoibWFpbi4yMWZjNjE5YjA4YWMzNmZkNGFhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuL19faGVscGVyc19fL2JhY2tncm91bmRJbWFnZXMnO1xuaW1wb3J0IFRpdGxlcyBmcm9tICcuL2NvbXBvbmVudHMvdGl0bGVzLmpzeCc7XG5pbXBvcnQgRW5yb2xsZWQgZnJvbSAnLi9jb21wb25lbnRzL2Vucm9sbGVkLmpzeCc7XG5pbXBvcnQgU3RhcnMgZnJvbSAnLi9jb21wb25lbnRzL3RvdGFsU3RhcnMuanN4JztcbmltcG9ydCBSZWFjdERPTVNlcnZlciBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcblxuY29uc3QgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWx5JywgJ0F1ZycsICdTZXB0JywgJ09jdCcsICdOb3YnLCAnRGVjJ107XG5cblxuY2xhc3MgVGl0bGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaWQ6IDEsXG4gICAgICBudW06IDAsXG4gICAgICB0aXRsZXM6ICcnLFxuICAgICAgdG90YWxFbnJvbGxlZDogMCxcbiAgICAgIGluc3RydWN0b3I6ICcnLFxuICAgICAgb2ZmZXJlZEJ5OiAnJyxcbiAgICAgIGltZzogJycsXG4gICAgICBtb250aDogJycsXG4gICAgICBkYXRlOiAwLFxuICAgICAgdG90YWxSZXZpZXdzOiAyMCxcbiAgICAgIHRvdGFsU3RhcnM6IDAsXG4gICAgICBjb2xvcjogJycsXG4gICAgfTtcbiAgfVxuXG4gIC8vIEFQSSBHZXQgcmVxdWVzdFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBpZCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcblxuICAgIGNvbnN0IHVybHMgPSBbXG4gICAgICBgL2dldFRpdGxlJHtpZH1gLFxuICAgICAgYGh0dHA6Ly8xOC4xMTguMzYuMTcyOjMwMDMvYXBpL2luc3RydWN0b3JzJHtpZH1gXG4gICAgICAvLyBgaHR0cDovLzU0LjE3Ni4xOS4xOTk6MzAwNi9hcGkvaW1hZ2Uke2lkfS9wcmltYXJ5SW5zdHJ1Y3RvcmBcbiAgICBdO1xuXG4gICAgY29uc3QgcmVzdWx0cyA9IFByb21pc2UuYWxsU2V0dGxlZCh1cmxzLm1hcCh1cmwgPT4gYXhpb3MuZ2V0KHVybCkpKTtcblxuICAgIHJlc3VsdHMudGhlbihyZXMgPT4ge1xuICAgICAgcmVzLmZvckVhY2goKHJlcywgaSkgPT4ge1xuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gXCJmdWxmaWxsZWRcIikge1xuICAgICAgICAgIC8vIHRpdGxlcywgZXRjLlxuICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMudmFsdWUuZGF0YSlcbiAgICAgICAgICAgIGNvbnN0IHsgdGl0bGUsIGVucm9sbGVkLCByZXZpZXdjb3VudHMsIHN0YXJzLCBvZmZlcmVkYnkgfSA9IHJlcy52YWx1ZS5kYXRhO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgdGl0bGVzOiB0aXRsZSxcbiAgICAgICAgICAgICAgdG90YWxFbnJvbGxlZDogZW5yb2xsZWQsXG4gICAgICAgICAgICAgIG1vbnRoOiBtb250aHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbW9udGhzLmxlbmd0aCldLFxuICAgICAgICAgICAgICBkYXRlOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMCksXG4gICAgICAgICAgICAgIGNvbG9yOiBjb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCldLFxuICAgICAgICAgICAgICB0b3RhbFJldmlld3M6IHJldmlld2NvdW50cyxcbiAgICAgICAgICAgICAgdG90YWxTdGFyczogc3RhcnMsXG4gICAgICAgICAgICAgIG9mZmVyZWRCeTogb2ZmZXJlZGJ5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBpbnN0cnVjdG9yIG5hbWVcbiAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZmlyc3RuYW1lLCBsYXN0bmFtZSB9ID0gcmVzLnZhbHVlLmRhdGFbMF07XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBpbnN0cnVjdG9yOiBgJHtmaXJzdG5hbWV9ICR7bGFzdG5hbWV9YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gaW5zdHJ1Y3RvciBpbWFnZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB7IHByaW1hcnlJbnN0cnVjdG9yIH0gPSByZXMudmFsdWUuZGF0YTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGltZzogcHJpbWFyeUluc3RydWN0b3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1zZXJ2aWNlXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KCR7dGhpcy5zdGF0ZS5jb2xvcn0pYCB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWlubmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXNlcnZpY2UxXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtbmF2XCI+XG4gICAgICAgICAgICAgICAgQnJvd3NlIHsnPid9ICAgRGVwYXJ0bWVudCB7Jz4nfSAgIHt0aGlzLnN0YXRlLnRpdGxlc31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPFRpdGxlcyB0aXRsZT17dGhpcy5zdGF0ZS50aXRsZXN9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXN0YXJcIj5cbiAgICAgICAgICAgICAgICA8U3RhcnMgcmF0aW5nPXt0aGlzLnN0YXRlLnRvdGFsU3RhcnN9IC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGUtbnVtXCI+e3RoaXMuc3RhdGUudG90YWxTdGFyc308L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGUtcmF0aW5nXCI+e3RoaXMuc3RhdGUudG90YWxSZXZpZXdzfSByYXRpbmdzPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0cnVjdG9yLW1haW5cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5zdGF0ZS5pbWd9IGFsdD1cImluc3RydWN0b3JcIiBjbGFzc05hbWU9XCJpbnN0cnVjdG9yXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZS1pbnN0cnVjdG9yTmFtZVwiPlxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaW5zdHJ1Y3Rvcn1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudG90YWxFbnJvbGxlZCA+IDUwMDAwICYmXG4gICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInRpdGxlLXRvcC1pbnN0cnVjdG9yXCI+VG9wIGluc3RydWN0b3I8L3NwYW4+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGl0ZS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWNoYXJnZVwiPiBFbnJvbGwgZm9yIEZyZWU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWRhdGVcIj5TdGFydHMge3RoaXMuc3RhdGUubW9udGh9IHt0aGlzLnN0YXRlLmRhdGV9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWFpZFwiPkZpbmFuY2lhbCBhaWQgYXZhaWxhYmxlPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW5yb2xsZWRcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj4gPEVucm9sbGVkIGVucm9sbGVkPXt0aGlzLnN0YXRlLnRvdGFsRW5yb2xsZWR9IC8+IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTBweCcgfX0+YWxyZWFkeSBlbnJvbGxlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZS1iYXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwib2ZmZXJlZFwiPk9mZmVyZWQgQnkgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidW5pdmVyc2l0eVwiPnt0aGlzLnN0YXRlLm9mZmVyZWRCeX08L2Rpdj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblJlYWN0RG9tLnJlbmRlcig8VGl0bGUgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpKTtcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTM3NjQ2ZWRiMTUzZWVkNzIzMDNcIikiXSwic291cmNlUm9vdCI6IiJ9