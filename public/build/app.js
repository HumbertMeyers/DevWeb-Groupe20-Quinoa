(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/img/dezobey.jpg":
/*!********************************!*\
  !*** ./assets/img/dezobey.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/build/images/dezobey.69d4dd73.jpg");

/***/ }),

/***/ "./assets/img/logo.png":
/*!*****************************!*\
  !*** ./assets/img/logo.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/build/images/logo.3f6a9b80.png");

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Home */ "./assets/js/components/Home.js");





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_4__["default"], null)), document.getElementById('root'));

/***/ }),

/***/ "./assets/js/components/Accueil.js":
/*!*****************************************!*\
  !*** ./assets/js/components/Accueil.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_dezobey_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/dezobey.jpg */ "./assets/img/dezobey.jpg");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Accueil = /*#__PURE__*/function (_Component) {
  _inherits(Accueil, _Component);

  var _super = _createSuper(Accueil);

  function Accueil() {
    _classCallCheck(this, Accueil);

    return _super.apply(this, arguments);
  }

  _createClass(Accueil, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-md-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cadreSombre"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "accueilTitre"
      }, "Le Jeu Dezobeyi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "accueilContenu"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Pr\xE9sentation de l'ASBL :"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Quinoa est une ONG d'\xE9ducation \xE0 la citoyennet\xE9 mondiale et solidaire (ECMS). ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " L'ECMS est un processus qui vise \xE0 provoquer des changements de valeur et de comportement sur le plan individuel et collectif en vue d'un monde plus juste dans lequel ressources et pouvoirs sont \xE9quitablement r\xE9partis dans le respect de la dignit\xE9 humaine."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Ses actions : projets internationaux (aussi scolaires, maison de jeunes, scouts en Am\xE9rique de sud, Afrique et Asie). Projet alternative locales. Animations p\xE9dagogiques (Jeu de la ficelle, Potentia, Jeu des chaises, Dezobeyi...). Mobilisations."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Jeu Dezobeyi :"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Et toi, as-tu d\xE9j\xE0 desob\xE9i ? Face \xE0 l'intimidation, \xE0 l'injustice comment r\xE9agir ? Faut-il parfois d\xE9sob\xE9ir ? Quinoa asbl propose un outil p\xE9dagogique autour de l'action directe non-violente et de la d\xE9sob\xE9issance civile : du Nord au Sud, l'action directe non-violente est (et a toujours \xE9t\xE9) un levier de changement social. Droit de vote des femmes, abolition de la s\xE9gr\xE9gation, r\xE9cup\xE9ration de terres... : tous ont \xE9t\xE9 obtenus notamment par des actions de \"d\xE9sob\xE9issance\"."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Le jeu entend partir du v\xE9cu des participan\u2022t\u2022e\u2022s pour mieux toucher au coeur des causes qui les animent et les inspirent. L'outil se d\xE9veloppe en une ligne du temps sur laquelle le\u2022la participant\u2022e, en plusieurs phase ludiques, peut tester ses connaissances et affuter sa vision du monde en voyageant dans une \"autre\" Histoire que celle r\xE9cont\xE9e par les \"dominants\".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "L'outil laisse aussi la place aux \xE9changes et \xE0 l'action avec des mises en situation et d\xE9bats mouvants."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Explorez les luttes (et les victoires) de ces femmes et hommes qui ont d\xE9sob\xE9i.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "imgAccueil",
        src: _img_dezobey_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
        alt: "image jeu"
      })))));
    }
  }]);

  return Accueil;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Accueil);

/***/ }),

/***/ "./assets/js/components/Home.js":
/*!**************************************!*\
  !*** ./assets/js/components/Home.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Accueil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Accueil */ "./assets/js/components/Accueil.js");
/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Users */ "./assets/js/components/Users.js");
/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Posts */ "./assets/js/components/Posts.js");
/* harmony import */ var _Inscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Inscription */ "./assets/js/components/Inscription.js");
/* harmony import */ var _LigneDuTemps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LigneDuTemps */ "./assets/js/components/LigneDuTemps.js");
/* harmony import */ var _SeConnecter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SeConnecter */ "./assets/js/components/SeConnecter.js");
/* harmony import */ var _Quizz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Quizz */ "./assets/js/components/Quizz.js");
/* harmony import */ var _Resultat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Resultat */ "./assets/js/components/Resultat.js");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../img/logo.png */ "./assets/img/logo.png");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _LogOut__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./LogOut */ "./assets/js/components/LogOut.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
















var Home = /*#__PURE__*/function (_Component) {
  _inherits(Home, _Component);

  var _super = _createSuper(Home);

  function Home() {
    _classCallCheck(this, Home);

    return _super.apply(this, arguments);
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-md-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"], {
        className: "navbar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "http://www.quinoa.be"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "logo",
        src: _img_logo_png__WEBPACK_IMPORTED_MODULE_10__["default"],
        alt: "logo Quinoa"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        className: "nav-link",
        href: "/accueil"
      }, "Accueil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        className: "nav-link",
        href: "/quizz"
      }, "Quizz"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        className: "nav-link",
        href: "/LigneDuTemps"
      }, "LigneDuTemps"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        className: "nav-link",
        href: "/resultat"
      }, "Resultat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        className: "nav-link",
        href: "/seconnecter"
      }, "Se connecter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        className: "nav-link",
        href: "/inscription"
      }, "Inscription")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LogOut__WEBPACK_IMPORTED_MODULE_13__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        exact: true,
        from: "/",
        to: "/accueil"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/users",
        component: _Users__WEBPACK_IMPORTED_MODULE_3__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/posts",
        component: _Posts__WEBPACK_IMPORTED_MODULE_4__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/seconnecter",
        component: _SeConnecter__WEBPACK_IMPORTED_MODULE_7__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/inscription",
        component: _Inscription__WEBPACK_IMPORTED_MODULE_5__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/quizz",
        component: _Quizz__WEBPACK_IMPORTED_MODULE_8__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/accueil",
        component: _Accueil__WEBPACK_IMPORTED_MODULE_2__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/lignedutemps",
        component: _LigneDuTemps__WEBPACK_IMPORTED_MODULE_6__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/resultat",
        component: _Resultat__WEBPACK_IMPORTED_MODULE_9__["default"]
      }))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./assets/js/components/Inscription.js":
/*!*********************************************!*\
  !*** ./assets/js/components/Inscription.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// noprotect




var Inscription = /*#__PURE__*/function (_Component) {
  _inherits(Inscription, _Component);

  var _super = _createSuper(Inscription);

  function Inscription(props) {
    var _this;

    _classCallCheck(this, Inscription);

    _this = _super.call(this, props);
    _this.state = {
      pseudo: "",
      mail: "",
      age: "",
      sexe: "",
      desobeissant: "",
      pseudoErreur: "",
      mailErreur: "",
      ageErreur: "",
      sexeErreur: "",
      desobeissantErreur: ""
    };
    return _this;
  }

  _createClass(Inscription, [{
    key: "createUser",
    value: function createUser() {
      var userObject = {
        pseudo: this.state.pseudo,
        mail: this.state.mail,
        age: this.state.age,
        sexe: this.state.sexe,
        desobeissant: this.state.desobeissant
      };
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/users/add/", userObject).then(function (response) {
        console.log(response.data);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(item, champ) {
      var itemValue = item.target.value;

      switch (champ) {
        case "pseudo":
          {
            this.setState({
              pseudo: itemValue
            });
            break;
          }

        case "mail":
          {
            this.setState({
              mail: itemValue
            });
            break;
          }

        case "age":
          {
            this.setState({
              age: itemValue
            });
            break;
          }

        case "sexe":
          {
            this.setState({
              sexe: itemValue
            });
            break;
          }

        case "desobeissant":
          {
            this.setState({
              desobeissant: itemValue
            });
            break;
          }
      }
    }
  }, {
    key: "validate",
    value: function validate() {
      var pseudoErreur = "";
      var mailErreur = "";
      var ageErreur = "";
      var sexeErreur = "";
      var desobeissantErreur = "";

      if (!this.state.pseudo) {
        pseudoErreur = "le champ doit être rempli";
      }

      if (!this.state.mail.includes("@")) {
        mailErreur = "l'email est invalide";
      }

      if (!this.state.age) {
        ageErreur = "le champ doit être rempli";
      }

      if (!this.state.sexe) {
        sexeErreur = "le champ doit être rempli";
      }

      if (!this.state.desobeissant) {
        desobeissantErreur = "le champ doit être rempli";
      }

      if (mailErreur || pseudoErreur || ageErreur || sexeErreur || desobeissantErreur) {
        this.setState({
          mailErreur: mailErreur,
          pseudoErreur: pseudoErreur,
          ageErreur: ageErreur,
          sexeErreur: sexeErreur,
          desobeissantErreur: desobeissantErreur
        });
        return false;
      }

      return true;
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit() {
      var isValid = this.validate();
      var obj = {};
      obj.pseudo = this.state.pseudo;
      obj.mail = this.state.mail;
      obj.age = this.state.age;
      obj.sexe = this.state.sexe;
      obj.desobeissant = this.state.desobeissant;
      obj.commentaire = this.state.commentaire;

      if (isValid) {
        console.warn("données envoyées", obj);
        this.props.history.push("/quizz");
        this.createUser();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-md-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        className: "cadreSombre",
        method: "POST"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "formTitle text-center"
      }, "Inscription"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Pseudo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "text",
        name: "pseudo",
        id: "pseudo",
        placeholder: "",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "pseudo");
        },
        required: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "erreur"
      }, this.state.pseudoErreur)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Adresse Mail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "email",
        name: "email",
        id: "email",
        placeholder: "",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "mail");
        },
        required: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "erreur"
      }, this.state.mailErreur)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Age"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "radioAge",
        id: "16",
        value: "16",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "age");
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "16-18")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "radioAge",
        id: "19",
        value: "19",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "age");
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "19-21")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "radioAge",
        id: "22",
        value: "22",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "age");
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "22-25")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "radioAge",
        id: "26",
        value: "26",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "age");
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "26-29")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "radioAge",
        id: "30",
        value: "30",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "mail");
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "+ 30")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "erreur"
      }, this.state.ageErreur)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Sexe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "sexe",
        id: "homme",
        value: "homme",
        "data-testid": "homme",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "sexe");
        }
      }), "homme")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "sexe",
        id: "femme",
        value: "femme",
        "data-testid": "femme",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "sexe");
        }
      }), "femme")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "sexe",
        id: "autre",
        value: "autre",
        "data-testid": "autre",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "sexe");
        }
      }), "autre")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "erreur"
      }, this.state.sexeErreur)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Est-ce que vous vous consid\xE9rez comme \xABd\xE9sob\xE9issant\xBB ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "desobei",
        id: "oui",
        value: "oui",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "desobeissant");
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "oui")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "desobei",
        id: "unPeu",
        value: "un peu",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "desobeissant");
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "un peu")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "radio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "desobei",
        id: "non",
        value: "non",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "desobeissant");
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "non")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "erreur"
      }, this.state.desobeissantErreur)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        id: "tabDesobei"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "thead"
      }, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "thead"
      }, "D\xE9j\xE0 r\xE9alis\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "thead"
      }, "Efficace")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Signer une p\xE9tition"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "petitionRealise"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "petitionEfficace"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Faire un don"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "donRealise"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "donEfficace"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Pratiquer le z\xE9ro d\xE9chet, changer mes habitudes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "ecologiqueRealise"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "ecologiqueEfficace"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "M\u2019informer \xE0 propos de l'actualit\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "informerRealise"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "informerEfficace"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "M\u2019engager en politique"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "politiqueRealise"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "politiqueEfficace"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Faire la gr\xE8ve"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "greveRealise"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "greveEfficace"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Manifester"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "manifesterRealise"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "manifesterEfficace"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Faire de la d\xE9sob\xE9issance civile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "desobeissantRealise"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "desobeissantEfficace"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btnLogin",
        onClick: function onClick() {
          return _this2.handleSubmit();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "S'inscrire"))))));
    }
  }]);

  return Inscription;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Inscription);

/***/ }),

/***/ "./assets/js/components/LDTData.js":
/*!*****************************************!*\
  !*** ./assets/js/components/LDTData.js ***!
  \*****************************************/
/*! exports provided: ldtdata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ldtdata", function() { return ldtdata; });
var ldtdata = [{
  periode: 1930,
  nom: " Gandhi",
  reponseJoueur: 1
}, {
  periode: 1960,
  nom: " Aymeric",
  reponseJoueur: 2
}, {
  periode: 1490,
  nom: " Seb",
  reponseJoueur: 3
}, {
  periode: 1930,
  nom: " Humber",
  reponseJoueur: 1
}];

/***/ }),

/***/ "./assets/js/components/LigneDuTemps.js":
/*!**********************************************!*\
  !*** ./assets/js/components/LigneDuTemps.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LDTData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LDTData */ "./assets/js/components/LDTData.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_simplert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-simplert */ "./node_modules/react-simplert/build/simplert.bundle.js");
/* harmony import */ var react_simplert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_simplert__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var LigneDuTemps = /*#__PURE__*/function (_Component) {
  _inherits(LigneDuTemps, _Component);

  var _super = _createSuper(LigneDuTemps);

  function LigneDuTemps(props) {
    var _this;

    _classCallCheck(this, LigneDuTemps);

    _this = _super.call(this, props);
    _this.state = {
      showAlert: false,
      typeAlert: 'success',
      titleAlert: 'This is Title',
      messageAlert: 'I am message alert',
      fiche: [{
        nom: ""
      }, {
        periode: ""
      }, {
        lieu: ""
      }, {
        lutte: ""
      }, {
        strategie: ""
      }, {
        action: ""
      }, {
        victoire: ""
      }, {
        annecdote: ""
      }, {
        citation: ""
      }, {
        question: ""
      }, {
        reponse1: ""
      }, {
        reponse2: ""
      }, {
        reponse3: ""
      }, {
        video: ""
      }, {
        article: ""
      }, {
        reponseJoueur: ""
      }],
      modal: false,
      activeModal: null
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LigneDuTemps, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/evenements/').then(function (response) {
        console.log(response.data);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.setState(function (prevState) {
        return {
          modal: !prevState.modal
        };
      });
    }
  }, {
    key: "reponse",
    value: function reponse(_reponse) {
      if (_reponse === 1) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
          className: "checkIcon",
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheck"]
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
        className: "falseIcon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimes"]
      });
    } // changeVariable(periodes, noms, reponseJoueurs) {
    //   this.setState({
    //     periode: periodes.value,
    //     nom: noms.value,
    //     reponseJoueur: reponseJoueurs.value,
    //   });
    // }

  }, {
    key: "ligneDuTemps",
    value: function ligneDuTemps() {
      var _this2 = this;

      var fiche = this.state.fiche;
      return fiche.map(function (_ref) {
        var nom = _ref.nom,
            id = _ref.id,
            periode = _ref.periode,
            reponseJoueur = _ref.reponseJoueur;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, nom), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, periode), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          className: "reponseJoueur"
        }, _this2.reponse(reponseJoueur)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          color: "secondary",
          onClick: _this2.toggle
        }, "Plus d'information")));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var fiche = this.state.fiche;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-md-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cadreSombre"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_simplert__WEBPACK_IMPORTED_MODULE_6___default.a, {
        showSimplert: this.state.showAlert,
        type: this.state.typeAlert,
        title: this.state.titleAlert,
        message: this.state.messageAlert
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "ldtTitre"
      }, "Vos r\xE9sultats aux questions des d\xE9sob\xE9issants"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        id: "tabDesobei"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "thead"
      }, "Nom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "thead"
      }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "thead"
      }, "R\xE9sultat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "thead"
      }, "Infos"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, this.ligneDuTemps())))));
    }
  }]);

  return LigneDuTemps;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LigneDuTemps);

/***/ }),

/***/ "./assets/js/components/LogOut.js":
/*!****************************************!*\
  !*** ./assets/js/components/LogOut.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var LogOut = function LogOut() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1]; //si false disparait


  console.log(checked); // useEffect(() => {
  //   if (checked === true) {
  //     console.log("Déconnexion");
  //     //fonction déconnexion
  //   }
  // }, [checked]);

  var handleChange = function handleChange(event) {
    //change l'état de checked
    setChecked(event.target.checked);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "LogOutContainer",
    style: checked ? {} : {
      display: "none"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "switch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "slider round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "etatConnexion"
  }, "\xE9tat de connexion")));
};

/* harmony default export */ __webpack_exports__["default"] = (LogOut);

/***/ }),

/***/ "./assets/js/components/Posts.js":
/*!***************************************!*\
  !*** ./assets/js/components/Posts.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Posts = /*#__PURE__*/function (_Component) {
  _inherits(Posts, _Component);

  var _super = _createSuper(Posts);

  function Posts() {
    _classCallCheck(this, Posts);

    return _super.apply(this, arguments);
  }

  _createClass(Posts, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getPosts();
    }
  }, {
    key: "getPosts",
    value: function getPosts() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://jsonplaceholder.typicode.com/posts/").then(function (res) {
        var posts = res.data.slice(0, 15);

        _this.setState({
          posts: posts,
          loading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var loading = this.state.loading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "row-section"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "text-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "List of posts"), "Created with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-heart"
      }), " by yemiwebby ")), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'row text-center'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fa fa-spin fa-spinner fa-4x"
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'row'
      }, this.state.posts.map(function (post) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-md-10 offset-md-1 row-block",
          key: post.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          id: "sortable"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "media"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "media-body"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, post.body))))));
      })))));
    }
  }]);

  return Posts;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Posts);

/***/ }),

/***/ "./assets/js/components/Quizz.js":
/*!***************************************!*\
  !*** ./assets/js/components/Quizz.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Quizz = /*#__PURE__*/function (_React$Component) {
  _inherits(Quizz, _React$Component);

  var _super = _createSuper(Quizz);

  function Quizz(props) {
    var _this;

    _classCallCheck(this, Quizz);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "getQuestion", function () {
      var event = _this.state.listQuestion[_this.state.currentQuestion];
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/quizz/".concat(event)).then(function (res) {
        console.log(res.data);
        var data = [{
          id: res.data.id,
          nom: res.data.nom,
          question: res.data.question,
          options: [res.data.reponse1, res.data.reponse2, res.data.reponse3],
          answer: res.data.reponse1
        }];

        _this.setState({
          quizzdata: data
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "nextQuestionHandler", function () {
      // console.log('test')
      var _this$state = _this.state,
          myAnswer = _this$state.myAnswer,
          quizzdata = _this$state.quizzdata,
          score = _this$state.score;

      _this.state.mesReponses.push(myAnswer);

      if (myAnswer === quizzdata[0].answer) {
        _this.setState({
          score: score + 1
        });
      }

      _this.setState({
        currentQuestion: _this.state.currentQuestion + 1
      });

      console.log(_this.state.currentQuestion);
    });

    _defineProperty(_assertThisInitialized(_this), "checkAnswer", function (answer) {
      _this.setState({
        myAnswer: answer,
        disabled: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "finishHandler", function () {
      if (_this.state.currentQuestion == 19) {
        _this.setState({
          isEnd: true
        });
      }

      for (var i = 0; i < 20; i++) {
        var listeEvent = _this.state.listQuestion[i];
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/quizz/".concat(listeEvent)).then(function (res) {
          var data = res.data.reponse1;

          _this.setState({
            bonneReponses: _this.state.bonnesReponses.push(data)
          });
        });
      }
    });

    _this.state = {
      listQuestion: [],
      currentQuestion: 0,
      myAnswer: null,
      mesReponses: [],
      score: 0,
      disabled: true,
      isEnd: false,
      items: [],
      quizzdata: [],
      bonnesReponses: []
    };
    _this.element = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  }

  _createClass(Quizz, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/startQuizz/").then(function (res) {
        _this2.setState({
          listQuestion: res.data
        });
      });
      setTimeout(function () {
        _this2.getQuestion();
      }, 1500);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.currentQuestion !== prevState.currentQuestion) {
        this.getQuestion();
      }
    } //check answer

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state2 = this.state,
          myAnswer = _this$state2.myAnswer,
          currentQuestion = _this$state2.currentQuestion,
          isEnd = _this$state2.isEnd,
          quizzdata = _this$state2.quizzdata,
          bonnesReponses = _this$state2.bonnesReponses;

      if (isEnd) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "result cadreSombre"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Votre score final est : ", this.state.score, " points sur 20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Les r\xE9ponses correctes aux questions \xE9taient :", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, bonnesReponses.map(function (item, index) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            className: "ui floating message options",
            key: index
          }, item);
        }))));
      } else {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "App cadreSombre"
        }, quizzdata.map(function (item, index) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: index
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Sujet de la question : ", item.nom), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, item.question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Questions ", 20 - currentQuestion, " sur 20 restantes "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, item.options.sort(function () {
            return .5 - Math.random();
          }).map(function (option) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              className: "ui floating message options ".concat(myAnswer === option ? "selected" : null),
              onClick: function onClick() {
                return _this3.checkAnswer(option);
              }
            }, option);
          })));
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), currentQuestion < 19 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "ui inverted button",
          disabled: this.state.disabled,
          onClick: this.nextQuestionHandler
        }, "Next"), currentQuestion === 19 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "ui inverted button",
          onClick: this.finishHandler
        }, "Finish"));
      }
    }
  }]);

  return Quizz;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Quizz);

/***/ }),

/***/ "./assets/js/components/Resultat.js":
/*!******************************************!*\
  !*** ./assets/js/components/Resultat.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Resultat = /*#__PURE__*/function (_Component) {
  _inherits(Resultat, _Component);

  var _super = _createSuper(Resultat);

  function Resultat(props) {
    var _this;

    _classCallCheck(this, Resultat);

    _this = _super.call(this, props);
    _this.state = {
      nbBonneReponse: ""
    };
    return _this;
  }

  _createClass(Resultat, [{
    key: "handleClick",
    value: function handleClick(page) {
      switch (page) {
        case "quizz":
          {
            this.props.history.push("/quizz");
            break;
          }

        case "ligneTps":
          {
            this.props.history.push("/lignedutemps");
            break;
          }

        default:
          true;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-md-center"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cadreSombre"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "resultTitre"
      }, "Tu as fini le Quizz Dezobeyi !"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "resultatContenu"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Tu es un", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", null, "(3 types de personnes)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Tu as eu ...", this.state.nbBonneReponse, " de bonnes r\xE9ponses sur 20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btnLigneTps",
        onClick: function onClick() {
          return _this2.handleClick("ligneTps");
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Tes r\xE9ponses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btnQuizz",
        onClick: function onClick() {
          return _this2.handleClick("quizz");
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Refaire le quizz"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "http://www.quinoa.be"
      }, "S'inscire \xE0 la newsletter de Quinoa"))))));
    }
  }]);

  return Resultat;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Resultat);

/***/ }),

/***/ "./assets/js/components/SeConnecter.js":
/*!*********************************************!*\
  !*** ./assets/js/components/SeConnecter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var SeConnecter = function SeConnecter() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      erreur = _useState2[0],
      setErreur = _useState2[1]; //si true disparait


  var login = function login(event) {
    //change l'état de erreur
    setErreur(event.target.erreur);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-md-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "cadreSombre"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "formTitle text-center"
  }, "Se Connecter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Adresse Mail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "email",
    name: "email",
    id: "email",
    placeholder: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "btnLogin",
    onClick: login
  }, "Se Connect"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
    color: "warning",
    style: erreur ? {
      display: "none"
    } : {}
  }, "Nous ne connaissons pas ce mail !")));
};

/* harmony default export */ __webpack_exports__["default"] = (SeConnecter);

/***/ }),

/***/ "./assets/js/components/Users.js":
/*!***************************************!*\
  !*** ./assets/js/components/Users.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Users = /*#__PURE__*/function (_Component) {
  _inherits(Users, _Component);

  var _super = _createSuper(Users);

  function Users() {
    var _this;

    _classCallCheck(this, Users);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      persons: []
    });

    return _this;
  }

  _createClass(Users, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/users/").then(function (res) {
        var persons = res.data;

        _this2.setState({
          persons: persons
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.state.persons.map(function (person) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, person.pseudo);
      }));
    }
  }]);

  return Users;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Users);

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZy9kZXpvYmV5LmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1nL2xvZ28ucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWNjdWVpbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0luc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xEVERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTGlnbmVEdVRlbXBzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ091dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Qb3N0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9RdWl6ei5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SZXN1bHRhdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9TZUNvbm5lY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Vc2Vycy5qcyJdLCJuYW1lcyI6WyJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJBY2N1ZWlsIiwiZGV6b2JleSIsIkNvbXBvbmVudCIsIkhvbWUiLCJsb2dvIiwiVXNlcnMiLCJQb3N0cyIsIlNlQ29ubmVjdGVyIiwiSW5zY3JpcHRpb24iLCJRdWl6eiIsIkxpZ25lRHVUZW1wcyIsIlJlc3VsdGF0IiwicHJvcHMiLCJzdGF0ZSIsInBzZXVkbyIsIm1haWwiLCJhZ2UiLCJzZXhlIiwiZGVzb2JlaXNzYW50IiwicHNldWRvRXJyZXVyIiwibWFpbEVycmV1ciIsImFnZUVycmV1ciIsInNleGVFcnJldXIiLCJkZXNvYmVpc3NhbnRFcnJldXIiLCJ1c2VyT2JqZWN0IiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnJvciIsIml0ZW0iLCJjaGFtcCIsIml0ZW1WYWx1ZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJpbmNsdWRlcyIsImlzVmFsaWQiLCJ2YWxpZGF0ZSIsIm9iaiIsImNvbW1lbnRhaXJlIiwid2FybiIsImhpc3RvcnkiLCJwdXNoIiwiY3JlYXRlVXNlciIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsImxkdGRhdGEiLCJwZXJpb2RlIiwibm9tIiwicmVwb25zZUpvdWV1ciIsInNob3dBbGVydCIsInR5cGVBbGVydCIsInRpdGxlQWxlcnQiLCJtZXNzYWdlQWxlcnQiLCJmaWNoZSIsImxpZXUiLCJsdXR0ZSIsInN0cmF0ZWdpZSIsImFjdGlvbiIsInZpY3RvaXJlIiwiYW5uZWNkb3RlIiwiY2l0YXRpb24iLCJxdWVzdGlvbiIsInJlcG9uc2UxIiwicmVwb25zZTIiLCJyZXBvbnNlMyIsInZpZGVvIiwiYXJ0aWNsZSIsIm1vZGFsIiwiYWN0aXZlTW9kYWwiLCJ0b2dnbGUiLCJiaW5kIiwiZ2V0IiwicHJldlN0YXRlIiwicmVwb25zZSIsImZhQ2hlY2siLCJmYVRpbWVzIiwibWFwIiwiaWQiLCJsaWduZUR1VGVtcHMiLCJMb2dPdXQiLCJ1c2VTdGF0ZSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwiZXZlbnQiLCJkaXNwbGF5IiwiZ2V0UG9zdHMiLCJyZXMiLCJwb3N0cyIsInNsaWNlIiwibG9hZGluZyIsInRpdGxlIiwiYm9keSIsImxpc3RRdWVzdGlvbiIsImN1cnJlbnRRdWVzdGlvbiIsIm9wdGlvbnMiLCJhbnN3ZXIiLCJxdWl6emRhdGEiLCJteUFuc3dlciIsInNjb3JlIiwibWVzUmVwb25zZXMiLCJkaXNhYmxlZCIsImlzRW5kIiwiaSIsImxpc3RlRXZlbnQiLCJib25uZVJlcG9uc2VzIiwiYm9ubmVzUmVwb25zZXMiLCJpdGVtcyIsImVsZW1lbnQiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInNldFRpbWVvdXQiLCJnZXRRdWVzdGlvbiIsInByZXZQcm9wcyIsImluZGV4Iiwic29ydCIsIk1hdGgiLCJyYW5kb20iLCJvcHRpb24iLCJjaGVja0Fuc3dlciIsIm5leHRRdWVzdGlvbkhhbmRsZXIiLCJmaW5pc2hIYW5kbGVyIiwibmJCb25uZVJlcG9uc2UiLCJwYWdlIiwiaGFuZGxlQ2xpY2siLCJlcnJldXIiLCJzZXRFcnJldXIiLCJsb2dpbiIsInBlcnNvbnMiLCJwZXJzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFlLG1HQUFvQyxFOzs7Ozs7Ozs7Ozs7QUNBbkQ7QUFBZSxnR0FBaUMsRTs7Ozs7Ozs7Ozs7O0FDQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUFnQiwyREFBQyw4REFBRCxxQkFBUSwyREFBQyx3REFBRCxPQUFSLENBQWhCLEVBQTJDQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBM0MsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztJQUVNQyxPOzs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsMEJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsMkJBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRSxzRkFDRSxvRkFDRSxtRkFDRSxvR0FERixDQURGLENBREYsZUFNRSw4S0FFb0Isc0VBRnBC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aUMsTUFBRSxFQUFDLE9BQXBDO0FBQTRDLGVBQVcsRUFBQztBQUF4RCxJQUZGLENBRkYsZUFVRSwyREFBQyxvREFBRDtBQUFXLGFBQVMsRUFBQztBQUFyQixrQkFDRSwyREFBQyxpREFBRDtBQUFRLGFBQVMsRUFBQyxVQUFsQjtBQUE2QixXQUFPLEVBQUVFO0FBQXRDLGtCQURGLENBVkYsQ0FERixlQWlCRSwyREFBQyxnREFBRDtBQUFPLFNBQUssRUFBQyxTQUFiO0FBQXVCLFNBQUssRUFBRUYsTUFBTSxHQUFHO0FBQUV4QyxhQUFPLEVBQUU7QUFBWCxLQUFILEdBQXlCO0FBQTdELHlDQWpCRixDQURGLENBREY7QUF5QkQsQ0FqQ0Q7O0FBbUNlbEYsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTs7SUFFTUYsSzs7Ozs7Ozs7Ozs7Ozs7Ozs0REFDRztBQUNQK0gsYUFBTyxFQUFFO0FBREYsSzs7Ozs7Ozt3Q0FJWTtBQUFBOztBQUNuQjNHLGtEQUFLLENBQUNtRCxHQUFOLGdCQUNFakQsSUFERixDQUNPLFVBQUFnRSxHQUFHLEVBQUk7QUFDWixZQUFNeUMsT0FBTyxHQUFHekMsR0FBRyxDQUFDNUQsSUFBcEI7O0FBQ0EsY0FBSSxDQUFDTyxRQUFMLENBQWM7QUFBRThGLGlCQUFPLEVBQVBBO0FBQUYsU0FBZDtBQUNBLE9BSkY7QUFLQTs7OzZCQUVRO0FBQ1IsMEJBQ0MsdUVBQ0csS0FBS3ZILEtBQUwsQ0FBV3VILE9BQVgsQ0FBbUJuRCxHQUFuQixDQUF1QixVQUFBb0QsTUFBTTtBQUFBLDRCQUFJLHVFQUFLQSxNQUFNLENBQUN2SCxNQUFaLENBQUo7QUFBQSxPQUE3QixDQURILENBREQ7QUFLQTs7OztFQW5Ca0JaLCtDOztBQXNCTEcsb0VBQWYsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJleHBvcnQgZGVmYXVsdCBcIi9idWlsZC9pbWFnZXMvZGV6b2JleS42OWQ0ZGQ3My5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi9idWlsZC9pbWFnZXMvbG9nby4zZjZhOWI4MC5wbmdcIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCAnLi4vY3NzL2FwcC5jc3MnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xuXG5SZWFjdERPTS5yZW5kZXIoPFJvdXRlcj48SG9tZSAvPjwvUm91dGVyPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGRlem9iZXkgZnJvbSBcIi4uLy4uL2ltZy9kZXpvYmV5LmpwZ1wiO1xuXG5jbGFzcyBBY2N1ZWlsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FkcmVTb21icmVcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJhY2N1ZWlsVGl0cmVcIj5MZSBKZXUgRGV6b2JleWk8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2N1ZWlsQ29udGVudVwiPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICA8dT5cbiAgICAgICAgICAgICAgICAgICAgPGI+UHLDqXNlbnRhdGlvbiBkZSBsJ0FTQkwgOjwvYj5cbiAgICAgICAgICAgICAgICAgIDwvdT5cbiAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgUXVpbm9hIGVzdCB1bmUgT05HIGQnw6lkdWNhdGlvbiDDoCBsYSBjaXRveWVubmV0w6kgbW9uZGlhbGUgZXRcbiAgICAgICAgICAgICAgICAgIHNvbGlkYWlyZSAoRUNNUykuIDxicj48L2JyPiBMJ0VDTVMgZXN0IHVuIHByb2Nlc3N1cyBxdWkgdmlzZSDDoFxuICAgICAgICAgICAgICAgICAgcHJvdm9xdWVyIGRlcyBjaGFuZ2VtZW50cyBkZSB2YWxldXIgZXQgZGUgY29tcG9ydGVtZW50IHN1ciBsZVxuICAgICAgICAgICAgICAgICAgcGxhbiBpbmRpdmlkdWVsIGV0IGNvbGxlY3RpZiBlbiB2dWUgZCd1biBtb25kZSBwbHVzIGp1c3RlIGRhbnNcbiAgICAgICAgICAgICAgICAgIGxlcXVlbCByZXNzb3VyY2VzIGV0IHBvdXZvaXJzIHNvbnQgw6lxdWl0YWJsZW1lbnQgcsOpcGFydGlzIGRhbnNcbiAgICAgICAgICAgICAgICAgIGxlIHJlc3BlY3QgZGUgbGEgZGlnbml0w6kgaHVtYWluZS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBTZXMgYWN0aW9ucyA6IHByb2pldHMgaW50ZXJuYXRpb25hdXggKGF1c3NpIHNjb2xhaXJlcywgbWFpc29uXG4gICAgICAgICAgICAgICAgICBkZSBqZXVuZXMsIHNjb3V0cyBlbiBBbcOpcmlxdWUgZGUgc3VkLCBBZnJpcXVlIGV0IEFzaWUpLiBQcm9qZXRcbiAgICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlIGxvY2FsZXMuIEFuaW1hdGlvbnMgcMOpZGFnb2dpcXVlcyAoSmV1IGRlIGxhXG4gICAgICAgICAgICAgICAgICBmaWNlbGxlLCBQb3RlbnRpYSwgSmV1IGRlcyBjaGFpc2VzLCBEZXpvYmV5aS4uLikuXG4gICAgICAgICAgICAgICAgICBNb2JpbGlzYXRpb25zLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICA8dT5cbiAgICAgICAgICAgICAgICAgICAgPGI+SmV1IERlem9iZXlpIDo8L2I+XG4gICAgICAgICAgICAgICAgICA8L3U+XG4gICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIEV0IHRvaSwgYXMtdHUgZMOpasOgIGRlc29iw6lpID8gRmFjZSDDoCBsJ2ludGltaWRhdGlvbiwgw6BcbiAgICAgICAgICAgICAgICAgIGwnaW5qdXN0aWNlIGNvbW1lbnQgcsOpYWdpciA/IEZhdXQtaWwgcGFyZm9pcyBkw6lzb2LDqWlyID8gUXVpbm9hXG4gICAgICAgICAgICAgICAgICBhc2JsIHByb3Bvc2UgdW4gb3V0aWwgcMOpZGFnb2dpcXVlIGF1dG91ciBkZSBsJ2FjdGlvbiBkaXJlY3RlXG4gICAgICAgICAgICAgICAgICBub24tdmlvbGVudGUgZXQgZGUgbGEgZMOpc29iw6lpc3NhbmNlIGNpdmlsZSA6IGR1IE5vcmQgYXUgU3VkLFxuICAgICAgICAgICAgICAgICAgbCdhY3Rpb24gZGlyZWN0ZSBub24tdmlvbGVudGUgZXN0IChldCBhIHRvdWpvdXJzIMOpdMOpKSB1blxuICAgICAgICAgICAgICAgICAgbGV2aWVyIGRlIGNoYW5nZW1lbnQgc29jaWFsLiBEcm9pdCBkZSB2b3RlIGRlcyBmZW1tZXMsXG4gICAgICAgICAgICAgICAgICBhYm9saXRpb24gZGUgbGEgc8OpZ3LDqWdhdGlvbiwgcsOpY3Vww6lyYXRpb24gZGUgdGVycmVzLi4uIDogdG91c1xuICAgICAgICAgICAgICAgICAgb250IMOpdMOpIG9idGVudXMgbm90YW1tZW50IHBhciBkZXMgYWN0aW9ucyBkZSBcImTDqXNvYsOpaXNzYW5jZVwiLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIExlIGpldSBlbnRlbmQgcGFydGlyIGR1IHbDqWN1IGRlcyBwYXJ0aWNpcGFu4oCidOKAomXigKJzIHBvdXIgbWlldXhcbiAgICAgICAgICAgICAgICAgIHRvdWNoZXIgYXUgY29ldXIgZGVzIGNhdXNlcyBxdWkgbGVzIGFuaW1lbnQgZXQgbGVzIGluc3BpcmVudC5cbiAgICAgICAgICAgICAgICAgIEwnb3V0aWwgc2UgZMOpdmVsb3BwZSBlbiB1bmUgbGlnbmUgZHUgdGVtcHMgc3VyIGxhcXVlbGxlIGxl4oCibGFcbiAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW504oCiZSwgZW4gcGx1c2lldXJzIHBoYXNlIGx1ZGlxdWVzLCBwZXV0IHRlc3RlciBzZXNcbiAgICAgICAgICAgICAgICAgIGNvbm5haXNzYW5jZXMgZXQgYWZmdXRlciBzYSB2aXNpb24gZHUgbW9uZGUgZW4gdm95YWdlYW50IGRhbnNcbiAgICAgICAgICAgICAgICAgIHVuZSBcImF1dHJlXCIgSGlzdG9pcmUgcXVlIGNlbGxlIHLDqWNvbnTDqWUgcGFyIGxlcyBcImRvbWluYW50c1wiLlxuICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+TCdvdXRpbCBsYWlzc2UgYXVzc2kgbGEgcGxhY2UgYXV4IMOpY2hhbmdlcyBldCDDoFxuICAgICAgICAgICAgICAgICAgbCdhY3Rpb24gYXZlYyBkZXMgbWlzZXMgZW4gc2l0dWF0aW9uIGV0IGTDqWJhdHMgbW91dmFudHMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgRXhwbG9yZXogbGVzIGx1dHRlcyAoZXQgbGVzIHZpY3RvaXJlcykgZGUgY2VzIGZlbW1lcyBldCBob21tZXNcbiAgICAgICAgICAgICAgICAgIHF1aSBvbnQgZMOpc29iw6lpLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZ0FjY3VlaWxcIiBzcmM9e2Rlem9iZXl9IGFsdD1cImltYWdlIGpldVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY3VlaWw7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdXRlLCBTd2l0Y2gsIFJlZGlyZWN0LCBMaW5rLCB3aXRoUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEFjY3VlaWwgZnJvbSBcIi4vQWNjdWVpbFwiO1xyXG5pbXBvcnQgVXNlcnMgZnJvbSBcIi4vVXNlcnNcIjtcclxuaW1wb3J0IFBvc3RzIGZyb20gXCIuL1Bvc3RzXCI7XHJcbmltcG9ydCBJbnNjcmlwdGlvbiBmcm9tIFwiLi9JbnNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTGlnbmVEdVRlbXBzIGZyb20gXCIuL0xpZ25lRHVUZW1wc1wiO1xyXG5pbXBvcnQgU2VDb25uZWN0ZXIgZnJvbSBcIi4vU2VDb25uZWN0ZXJcIjtcclxuaW1wb3J0IFF1aXp6IGZyb20gXCIuL1F1aXp6XCI7XHJcbmltcG9ydCBSZXN1bHRhdCBmcm9tIFwiLi9SZXN1bHRhdFwiO1xyXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vLi4vaW1nL2xvZ28ucG5nXCI7XHJcbmltcG9ydCB7IE5hdiwgTmF2SXRlbSwgTmF2TGluayB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzXCI7XHJcbmltcG9ydCBMb2dPdXQgZnJvbSBcIi4vTG9nT3V0XCI7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LnF1aW5vYS5iZVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz17bG9nb30gYWx0PVwibG9nbyBRdWlub2FcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9hY2N1ZWlsXCI+XHJcbiAgICAgICAgICAgICAgICBBY2N1ZWlsXHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9xdWl6elwiPlxyXG4gICAgICAgICAgICAgICAgUXVpenpcclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL0xpZ25lRHVUZW1wc1wiPlxyXG4gICAgICAgICAgICAgICAgTGlnbmVEdVRlbXBzXHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9yZXN1bHRhdFwiPlxyXG4gICAgICAgICAgICAgICAgUmVzdWx0YXRcclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3NlY29ubmVjdGVyXCI+XHJcbiAgICAgICAgICAgICAgICBTZSBjb25uZWN0ZXJcclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2luc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICBJbnNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICA8TG9nT3V0IC8+XHJcbiAgICAgICAgICA8L05hdj5cclxuXHJcbiAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICA8UmVkaXJlY3QgZXhhY3QgZnJvbT1cIi9cIiB0bz1cIi9hY2N1ZWlsXCIgLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvdXNlcnNcIiBjb21wb25lbnQ9e1VzZXJzfSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wb3N0c1wiIGNvbXBvbmVudD17UG9zdHN9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3NlY29ubmVjdGVyXCIgY29tcG9uZW50PXtTZUNvbm5lY3Rlcn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvaW5zY3JpcHRpb25cIiBjb21wb25lbnQ9e0luc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9xdWl6elwiIGNvbXBvbmVudD17UXVpenp9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FjY3VlaWxcIiBjb21wb25lbnQ9e0FjY3VlaWx9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xpZ25lZHV0ZW1wc1wiIGNvbXBvbmVudD17TGlnbmVEdVRlbXBzfSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZXN1bHRhdFwiIGNvbXBvbmVudD17UmVzdWx0YXR9IC8+XHJcbiAgICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiLy8gbm9wcm90ZWN0XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNsYXNzIEluc2NyaXB0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcHNldWRvOiBcIlwiLFxyXG4gICAgICBtYWlsOiBcIlwiLFxyXG4gICAgICBhZ2U6IFwiXCIsXHJcbiAgICAgIHNleGU6IFwiXCIsXHJcbiAgICAgIGRlc29iZWlzc2FudDogXCJcIixcclxuICAgICAgcHNldWRvRXJyZXVyOiBcIlwiLFxyXG4gICAgICBtYWlsRXJyZXVyOiBcIlwiLFxyXG4gICAgICBhZ2VFcnJldXI6IFwiXCIsXHJcbiAgICAgIHNleGVFcnJldXI6IFwiXCIsXHJcbiAgICAgIGRlc29iZWlzc2FudEVycmV1cjogXCJcIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjcmVhdGVVc2VyKCkge1xyXG4gICAgY29uc3QgdXNlck9iamVjdCA9IHtcclxuICAgICAgcHNldWRvOiB0aGlzLnN0YXRlLnBzZXVkbyxcclxuICAgICAgbWFpbDogdGhpcy5zdGF0ZS5tYWlsLFxyXG4gICAgICBhZ2U6IHRoaXMuc3RhdGUuYWdlLFxyXG4gICAgICBzZXhlOiB0aGlzLnN0YXRlLnNleGUsXHJcbiAgICAgIGRlc29iZWlzc2FudDogdGhpcy5zdGF0ZS5kZXNvYmVpc3NhbnQsXHJcbiAgICB9O1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzL2FkZC9cIiwgdXNlck9iamVjdClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlKGl0ZW0sIGNoYW1wKSB7XHJcbiAgICBsZXQgaXRlbVZhbHVlID0gaXRlbS50YXJnZXQudmFsdWU7XHJcbiAgICBzd2l0Y2ggKGNoYW1wKSB7XHJcbiAgICAgIGNhc2UgXCJwc2V1ZG9cIjoge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwc2V1ZG86IGl0ZW1WYWx1ZSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwibWFpbFwiOiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1haWw6IGl0ZW1WYWx1ZSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwiYWdlXCI6IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWdlOiBpdGVtVmFsdWUgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcInNleGVcIjoge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZXhlOiBpdGVtVmFsdWUgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcImRlc29iZWlzc2FudFwiOiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRlc29iZWlzc2FudDogaXRlbVZhbHVlIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZSgpIHtcclxuICAgIGxldCBwc2V1ZG9FcnJldXIgPSBcIlwiO1xyXG4gICAgbGV0IG1haWxFcnJldXIgPSBcIlwiO1xyXG4gICAgbGV0IGFnZUVycmV1ciA9IFwiXCI7XHJcbiAgICBsZXQgc2V4ZUVycmV1ciA9IFwiXCI7XHJcbiAgICBsZXQgZGVzb2JlaXNzYW50RXJyZXVyID0gXCJcIjtcclxuXHJcbiAgICBpZiAoIXRoaXMuc3RhdGUucHNldWRvKSB7XHJcbiAgICAgIHBzZXVkb0VycmV1ciA9IFwibGUgY2hhbXAgZG9pdCDDqnRyZSByZW1wbGlcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuc3RhdGUubWFpbC5pbmNsdWRlcyhcIkBcIikpIHtcclxuICAgICAgbWFpbEVycmV1ciA9IFwibCdlbWFpbCBlc3QgaW52YWxpZGVcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuYWdlKSB7XHJcbiAgICAgIGFnZUVycmV1ciA9IFwibGUgY2hhbXAgZG9pdCDDqnRyZSByZW1wbGlcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2V4ZSkge1xyXG4gICAgICBzZXhlRXJyZXVyID0gXCJsZSBjaGFtcCBkb2l0IMOqdHJlIHJlbXBsaVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5zdGF0ZS5kZXNvYmVpc3NhbnQpIHtcclxuICAgICAgZGVzb2JlaXNzYW50RXJyZXVyID0gXCJsZSBjaGFtcCBkb2l0IMOqdHJlIHJlbXBsaVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChcclxuICAgICAgbWFpbEVycmV1ciB8fFxyXG4gICAgICBwc2V1ZG9FcnJldXIgfHxcclxuICAgICAgYWdlRXJyZXVyIHx8XHJcbiAgICAgIHNleGVFcnJldXIgfHxcclxuICAgICAgZGVzb2JlaXNzYW50RXJyZXVyXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbWFpbEVycmV1cixcclxuICAgICAgICBwc2V1ZG9FcnJldXIsXHJcbiAgICAgICAgYWdlRXJyZXVyLFxyXG4gICAgICAgIHNleGVFcnJldXIsXHJcbiAgICAgICAgZGVzb2JlaXNzYW50RXJyZXVyLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0KCkge1xyXG4gICAgY29uc3QgaXNWYWxpZCA9IHRoaXMudmFsaWRhdGUoKTtcclxuICAgIGxldCBvYmogPSB7fTtcclxuICAgIG9iai5wc2V1ZG8gPSB0aGlzLnN0YXRlLnBzZXVkbztcclxuICAgIG9iai5tYWlsID0gdGhpcy5zdGF0ZS5tYWlsO1xyXG4gICAgb2JqLmFnZSA9IHRoaXMuc3RhdGUuYWdlO1xyXG4gICAgb2JqLnNleGUgPSB0aGlzLnN0YXRlLnNleGU7XHJcbiAgICBvYmouZGVzb2JlaXNzYW50ID0gdGhpcy5zdGF0ZS5kZXNvYmVpc3NhbnQ7XHJcbiAgICBvYmouY29tbWVudGFpcmUgPSB0aGlzLnN0YXRlLmNvbW1lbnRhaXJlO1xyXG5cclxuICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcImRvbm7DqWVzIGVudm95w6llc1wiLCBvYmopO1xyXG4gICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9xdWl6elwiKTtcclxuICAgICAgdGhpcy5jcmVhdGVVc2VyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJjYWRyZVNvbWJyZVwiIG1ldGhvZD1cIlBPU1RcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvcm1UaXRsZSB0ZXh0LWNlbnRlclwiPkluc2NyaXB0aW9uPC9oMT5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8aDM+UHNldWRvPC9oMz5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwc2V1ZG9cIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwc2V1ZG9cIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcInBzZXVkb1wiKX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycmV1clwiPnt0aGlzLnN0YXRlLnBzZXVkb0VycmV1cn08L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxoMz5BZHJlc3NlIE1haWw8L2gzPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJtYWlsXCIpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyZXVyXCI+e3RoaXMuc3RhdGUubWFpbEVycmV1cn08L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGgzPkFnZTwvaDM+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0FnZVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcImFnZVwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+MTYtMTg8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9BZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIjE5XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxOVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJhZ2VcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPjE5LTIxPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvQWdlXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIyMlwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMjJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwiYWdlXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD4yMi0yNTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0FnZVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiMjZcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIjI2XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcImFnZVwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+MjYtMjk8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9BZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIjMwXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJtYWlsXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD4rIDMwPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycmV1clwiPnt0aGlzLnN0YXRlLmFnZUVycmV1cn08L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGgzPlNleGU8L2gzPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2V4ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJob21tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJob21tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJob21tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcInNleGVcIil9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIGhvbW1lXHJcbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2V4ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmZW1tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJmZW1tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJmZW1tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcInNleGVcIil9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIGZlbW1lXHJcbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2V4ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJhdXRyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJhdXRyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJhdXRyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcInNleGVcIil9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIGF1dHJlXHJcbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyZXVyXCI+e3RoaXMuc3RhdGUuc2V4ZUVycmV1cn08L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGgzPkVzdC1jZSBxdWUgdm91cyB2b3VzIGNvbnNpZMOpcmV6IGNvbW1lIMKrZMOpc29iw6lpc3NhbnTCuyA/PC9oMz5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc29iZWlcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIm91aVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwib3VpXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcImRlc29iZWlzc2FudFwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+b3VpPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc29iZWlcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInVuUGV1XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ1biBwZXVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwiZGVzb2JlaXNzYW50XCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD51biBwZXU8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzb2JlaVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwibm9uXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJub25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwiZGVzb2JlaXNzYW50XCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD5ub248L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyZXVyXCI+e3RoaXMuc3RhdGUuZGVzb2JlaXNzYW50RXJyZXVyfTwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8dGFibGUgaWQ9XCJ0YWJEZXNvYmVpXCI+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGhlYWRcIj5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0aGVhZFwiPkTDqWrDoCByw6lhbGlzw6k8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0aGVhZFwiPkVmZmljYWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5TaWduZXIgdW5lIHDDqXRpdGlvbjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInBldGl0aW9uUmVhbGlzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicGV0aXRpb25FZmZpY2FjZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5GYWlyZSB1biBkb248L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJkb25SZWFsaXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJkb25FZmZpY2FjZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5QcmF0aXF1ZXIgbGUgesOpcm8gZMOpY2hldCwgY2hhbmdlciBtZXMgaGFiaXR1ZGVzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZWNvbG9naXF1ZVJlYWxpc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImVjb2xvZ2lxdWVFZmZpY2FjZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5N4oCZaW5mb3JtZXIgw6AgcHJvcG9zIGRlIGwnYWN0dWFsaXTDqTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImluZm9ybWVyUmVhbGlzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiaW5mb3JtZXJFZmZpY2FjZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5N4oCZZW5nYWdlciBlbiBwb2xpdGlxdWU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwb2xpdGlxdWVSZWFsaXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwb2xpdGlxdWVFZmZpY2FjZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5GYWlyZSBsYSBncsOodmU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJncmV2ZVJlYWxpc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImdyZXZlRWZmaWNhY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+TWFuaWZlc3RlcjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIm1hbmlmZXN0ZXJSZWFsaXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJtYW5pZmVzdGVyRWZmaWNhY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+RmFpcmUgZGUgbGEgZMOpc29iw6lpc3NhbmNlIGNpdmlsZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImRlc29iZWlzc2FudFJlYWxpc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImRlc29iZWlzc2FudEVmZmljYWNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuTG9naW5cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVN1Ym1pdCgpfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5TJ2luc2NyaXJlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluc2NyaXB0aW9uO1xyXG4iLCJleHBvcnQgY29uc3QgbGR0ZGF0YSA9IFtcclxuICB7XHJcbiAgICBwZXJpb2RlOiAxOTMwLFxyXG4gICAgbm9tOiBgIEdhbmRoaWAsXHJcbiAgICByZXBvbnNlSm91ZXVyOiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGVyaW9kZTogMTk2MCxcclxuICAgIG5vbTogYCBBeW1lcmljYCxcclxuICAgIHJlcG9uc2VKb3VldXI6IDIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwZXJpb2RlOiAxNDkwLFxyXG4gICAgbm9tOiBgIFNlYmAsXHJcbiAgICByZXBvbnNlSm91ZXVyOiAzLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGVyaW9kZTogMTkzMCxcclxuICAgIG5vbTogYCBIdW1iZXJgLFxyXG4gICAgcmVwb25zZUpvdWV1cjogMSxcclxuICB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgbGR0ZGF0YSB9IGZyb20gXCIuL0xEVERhdGFcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCwgTW9kYWxIZWFkZXIsIE1vZGFsQm9keSwgTW9kYWxGb290ZXIgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBmYUNoZWNrLCBmYVRpbWVzIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCBTaW1wbGVydCBmcm9tICdyZWFjdC1zaW1wbGVydCdcclxuXHJcbmNsYXNzIExpZ25lRHVUZW1wcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzaG93QWxlcnQ6IGZhbHNlLFxyXG4gICAgICB0eXBlQWxlcnQ6ICdzdWNjZXNzJyxcclxuICAgICAgdGl0bGVBbGVydDogJ1RoaXMgaXMgVGl0bGUnLFxyXG4gICAgICBtZXNzYWdlQWxlcnQ6ICdJIGFtIG1lc3NhZ2UgYWxlcnQnLFxyXG4gICAgICBmaWNoZTogW1xyXG4gICAgICAgIHsgbm9tOiBcIlwiIH0sXHJcbiAgICAgICAgeyBwZXJpb2RlOiBcIlwiIH0sXHJcbiAgICAgICAgeyBsaWV1OiBcIlwiIH0sXHJcbiAgICAgICAgeyBsdXR0ZTogXCJcIiB9LFxyXG4gICAgICAgIHsgc3RyYXRlZ2llOiBcIlwiIH0sXHJcbiAgICAgICAgeyBhY3Rpb246IFwiXCIgfSxcclxuICAgICAgICB7IHZpY3RvaXJlOiBcIlwiIH0sXHJcbiAgICAgICAgeyBhbm5lY2RvdGU6IFwiXCIgfSxcclxuICAgICAgICB7IGNpdGF0aW9uOiBcIlwiIH0sXHJcbiAgICAgICAgeyBxdWVzdGlvbjogXCJcIiB9LFxyXG4gICAgICAgIHsgcmVwb25zZTE6IFwiXCIgfSxcclxuICAgICAgICB7IHJlcG9uc2UyOiBcIlwiIH0sXHJcbiAgICAgICAgeyByZXBvbnNlMzogXCJcIiB9LFxyXG4gICAgICAgIHsgdmlkZW86IFwiXCIgfSxcclxuICAgICAgICB7IGFydGljbGU6IFwiXCIgfSxcclxuICAgICAgICB7IHJlcG9uc2VKb3VldXI6IFwiXCIgfSxcclxuICAgICAgXSxcclxuICAgICAgbW9kYWw6IGZhbHNlLFxyXG4gICAgICBhY3RpdmVNb2RhbDogbnVsbCxcclxuICAgIH07XHJcbiAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGF4aW9zLmdldCgnL2FwaS9ldmVuZW1lbnRzLycpXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoe1xyXG4gICAgICBtb2RhbDogIXByZXZTdGF0ZS5tb2RhbCxcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHJlcG9uc2UocmVwb25zZSkge1xyXG4gICAgaWYgKHJlcG9uc2UgPT09IDEpIHtcclxuICAgICAgcmV0dXJuIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPVwiY2hlY2tJY29uXCIgaWNvbj17ZmFDaGVja30gLz47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJmYWxzZUljb25cIiBpY29uPXtmYVRpbWVzfSAvPjtcclxuICB9XHJcblxyXG4gIC8vIGNoYW5nZVZhcmlhYmxlKHBlcmlvZGVzLCBub21zLCByZXBvbnNlSm91ZXVycykge1xyXG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgIHBlcmlvZGU6IHBlcmlvZGVzLnZhbHVlLFxyXG4gIC8vICAgICBub206IG5vbXMudmFsdWUsXHJcbiAgLy8gICAgIHJlcG9uc2VKb3VldXI6IHJlcG9uc2VKb3VldXJzLnZhbHVlLFxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG5cclxuICBsaWduZUR1VGVtcHMoKSB7XHJcbiAgICBjb25zdCB7IGZpY2hlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIGZpY2hlLm1hcCgoeyBub20sIGlkLCBwZXJpb2RlLHJlcG9uc2VKb3VldXIgfSkgPT4gKFxyXG4gICAgICA8dHIga2V5PXtpZH0+XHJcbiAgICAgICAgPHRkPntub219PC90ZD5cclxuICAgICAgICA8dGQ+e3BlcmlvZGV9PC90ZD5cclxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmVwb25zZUpvdWV1clwiPnt0aGlzLnJlcG9uc2UocmVwb25zZUpvdWV1cil9PC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy50b2dnbGV9PlxyXG4gICAgICAgICAgICBQbHVzIGQnaW5mb3JtYXRpb25cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICApKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZmljaGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhZHJlU29tYnJlXCI+XHJcbiAgICAgICAgICA8U2ltcGxlcnQgXHJcbiAgICAgICAgICAgIHNob3dTaW1wbGVydD17IHRoaXMuc3RhdGUuc2hvd0FsZXJ0IH1cclxuICAgICAgICAgICAgdHlwZT17IHRoaXMuc3RhdGUudHlwZUFsZXJ0IH1cclxuICAgICAgICAgICAgIHRpdGxlPXsgdGhpcy5zdGF0ZS50aXRsZUFsZXJ0IH1cclxuICAgICAgICAgICAgIG1lc3NhZ2U9eyB0aGlzLnN0YXRlLm1lc3NhZ2VBbGVydCB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibGR0VGl0cmVcIj5cclxuICAgICAgICAgICAgICBWb3MgcsOpc3VsdGF0cyBhdXggcXVlc3Rpb25zIGRlcyBkw6lzb2LDqWlzc2FudHNcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPHRhYmxlIGlkPVwidGFiRGVzb2JlaVwiPlxyXG4gICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRoZWFkXCI+Tm9tPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRoZWFkXCI+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0aGVhZFwiPlLDqXN1bHRhdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0aGVhZFwiPkluZm9zPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICA8dGJvZHk+e3RoaXMubGlnbmVEdVRlbXBzKCl9PC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWduZUR1VGVtcHM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBMb2dPdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUodHJ1ZSk7IC8vc2kgZmFsc2UgZGlzcGFyYWl0XHJcblxyXG4gIGNvbnNvbGUubG9nKGNoZWNrZWQpO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgaWYgKGNoZWNrZWQgPT09IHRydWUpIHtcclxuICAvLyAgICAgY29uc29sZS5sb2coXCJEw6ljb25uZXhpb25cIik7XHJcbiAgLy8gICAgIC8vZm9uY3Rpb24gZMOpY29ubmV4aW9uXHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgW2NoZWNrZWRdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvL2NoYW5nZSBsJ8OpdGF0IGRlIGNoZWNrZWRcclxuICAgIHNldENoZWNrZWQoZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkxvZ091dENvbnRhaW5lclwiIHN0eWxlPXtjaGVja2VkID8ge30gOiB7IGRpc3BsYXk6IFwibm9uZVwiIH19PlxyXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3dpdGNoXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e2NoZWNrZWR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJldGF0Q29ubmV4aW9uXCI+w6l0YXQgZGUgY29ubmV4aW9uPC9sYWJlbD5cclxuICAgICAgPC9sYWJlbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dPdXQ7XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuXG5jbGFzcyBQb3N0cyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5nZXRQb3N0cygpO1xuICAgIH1cblxuICAgIGdldFBvc3RzKCkge1xuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy9gKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3N0cyA9IHJlcy5kYXRhLnNsaWNlKDAsMTUpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvc3RzLCBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbG9hZGluZyA9IHRoaXMuc3RhdGUubG9hZGluZztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyb3ctc2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj48c3Bhbj5MaXN0IG9mIHBvc3RzPC9zcGFuPkNyZWF0ZWQgd2l0aCA8aVxuICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1oZWFydFwiPjwvaT4gYnkgeWVtaXdlYmJ5IDwvaDI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydyb3cgdGV4dC1jZW50ZXInfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLXNwaW4gZmEtc3Bpbm5lciBmYS00eFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncm93J30+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5wb3N0cy5tYXAocG9zdCA9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMCBvZmZzZXQtbWQtMSByb3ctYmxvY2tcIiBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICAgIDx1bCBpZD1cInNvcnRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDQ+e3Bvc3QudGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICA8cD57cG9zdC5ib2R5fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RzOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY2xhc3MgUXVpenogZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0bGlzdFF1ZXN0aW9uOiBbXSxcclxuXHRcdFx0Y3VycmVudFF1ZXN0aW9uOiAwLFxyXG5cdFx0XHRteUFuc3dlcjogbnVsbCxcclxuXHRcdFx0bWVzUmVwb25zZXM6IFtdLFxyXG5cdFx0XHRzY29yZTogMCxcclxuXHRcdFx0ZGlzYWJsZWQ6IHRydWUsXHJcblx0XHRcdGlzRW5kOiBmYWxzZSxcclxuXHRcdFx0aXRlbXM6IFtdLFxyXG5cdFx0XHRxdWl6emRhdGE6IFtdLFxyXG5cdFx0XHRib25uZXNSZXBvbnNlczogW10sXHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuZWxlbWVudCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHRheGlvcy5nZXQoYC9hcGkvc3RhcnRRdWl6ei9gKVxyXG5cdFx0XHQudGhlbigocmVzKSA9PntcclxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtsaXN0UXVlc3Rpb246IHJlcy5kYXRhfSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMuZ2V0UXVlc3Rpb24oKTtcclxuXHRcdH0sIDE1MDApO1xyXG5cclxuXHR9XHJcblxyXG5cdGdldFF1ZXN0aW9uID0gKCkgPT4ge1xyXG5cdFx0bGV0IGV2ZW50ID0gdGhpcy5zdGF0ZS5saXN0UXVlc3Rpb25bdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb25dO1xyXG5cdFx0YXhpb3MuZ2V0KGAvYXBpL3F1aXp6LyR7ZXZlbnR9YClcclxuXHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuXHRcdFx0XHRsZXQgZGF0YSA9IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWQ6IHJlcy5kYXRhLmlkLFxyXG5cdFx0XHRcdFx0XHRub206IHJlcy5kYXRhLm5vbSxcclxuXHRcdFx0XHRcdFx0cXVlc3Rpb246IHJlcy5kYXRhLnF1ZXN0aW9uLFxyXG5cdFx0XHRcdFx0XHRvcHRpb25zOiBbXHJcblx0XHRcdFx0XHRcdFx0cmVzLmRhdGEucmVwb25zZTEsXHJcblx0XHRcdFx0XHRcdFx0cmVzLmRhdGEucmVwb25zZTIsXHJcblx0XHRcdFx0XHRcdFx0cmVzLmRhdGEucmVwb25zZTMsXHJcblx0XHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0XHRcdGFuc3dlcjogcmVzLmRhdGEucmVwb25zZTEsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF07XHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7cXVpenpkYXRhOiBkYXRhfSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0bmV4dFF1ZXN0aW9uSGFuZGxlciA9ICgpID0+IHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCd0ZXN0JylcclxuXHRcdGNvbnN0IHsgbXlBbnN3ZXIsIHF1aXp6ZGF0YSwgc2NvcmUgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHR0aGlzLnN0YXRlLm1lc1JlcG9uc2VzLnB1c2gobXlBbnN3ZXIpO1xyXG5cdFx0aWYgKG15QW5zd2VyID09PSBxdWl6emRhdGFbMF0uYW5zd2VyKSB7XHJcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdHNjb3JlOiBzY29yZSArIDEsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRjdXJyZW50UXVlc3Rpb246IHRoaXMuc3RhdGUuY3VycmVudFF1ZXN0aW9uICsgMSxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb24pO1xyXG5cdH07XHJcblxyXG5cdGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xyXG5cdFx0aWYgKHRoaXMuc3RhdGUuY3VycmVudFF1ZXN0aW9uICE9PSBwcmV2U3RhdGUuY3VycmVudFF1ZXN0aW9uKSB7XHJcblx0XHRcdHRoaXMuZ2V0UXVlc3Rpb24oKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vY2hlY2sgYW5zd2VyXHJcblx0Y2hlY2tBbnN3ZXIgPSAoYW5zd2VyKSA9PiB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtteUFuc3dlcjogYW5zd2VyLCBkaXNhYmxlZDogZmFsc2V9KTtcclxuXHR9O1xyXG5cclxuXHRmaW5pc2hIYW5kbGVyID0gKCkgPT4ge1xyXG5cdFx0aWYgKHRoaXMuc3RhdGUuY3VycmVudFF1ZXN0aW9uID09IDE5KSB7XHJcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2lzRW5kOiB0cnVlLH0pO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0wOyBpIDwgMjA7IGkrKyl7XHJcblx0XHRcdHZhciBsaXN0ZUV2ZW50ID0gdGhpcy5zdGF0ZS5saXN0UXVlc3Rpb25baV07XHJcblx0XHRcdGF4aW9zLmdldChgL2FwaS9xdWl6ei8ke2xpc3RlRXZlbnR9YClcclxuXHRcdFx0XHQudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLnJlcG9uc2UxO1xyXG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7Ym9ubmVSZXBvbnNlczogdGhpcy5zdGF0ZS5ib25uZXNSZXBvbnNlcy5wdXNoKGRhdGEpfSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IG15QW5zd2VyLCBjdXJyZW50UXVlc3Rpb24sIGlzRW5kLCBxdWl6emRhdGEsIGJvbm5lc1JlcG9uc2VzIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuXHRcdGlmIChpc0VuZCkge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0IGNhZHJlU29tYnJlXCI+XHJcblx0XHRcdFx0XHQ8aDM+Vm90cmUgc2NvcmUgZmluYWwgZXN0IDoge3RoaXMuc3RhdGUuc2NvcmV9IHBvaW50cyBzdXIgMjA8L2gzPlxyXG5cdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdExlcyByw6lwb25zZXMgY29ycmVjdGVzIGF1eCBxdWVzdGlvbnMgw6l0YWllbnQgOlxyXG5cdFx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdFx0IHtib25uZXNSZXBvbnNlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwidWkgZmxvYXRpbmcgbWVzc2FnZSBvcHRpb25zXCIga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJBcHAgY2FkcmVTb21icmVcIj5cclxuXHRcdFx0XHRcdHtxdWl6emRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdFx0XHRcdDxoMj5TdWpldCBkZSBsYSBxdWVzdGlvbiA6IHtpdGVtLm5vbX08L2gyPlxyXG5cdFx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHRcdFx0PGgzPntpdGVtLnF1ZXN0aW9ufTwvaDM+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+UXVlc3Rpb25zIHsyMCAtIGN1cnJlbnRRdWVzdGlvbn0gc3VyIDIwIHJlc3RhbnRlcyA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdHtpdGVtLm9wdGlvbnMuc29ydChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIC41IC0gTWF0aC5yYW5kb20oKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0pLm1hcChvcHRpb24gPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YHVpIGZsb2F0aW5nIG1lc3NhZ2Ugb3B0aW9ucyAke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bXlBbnN3ZXIgPT09IG9wdGlvbiA/IFwic2VsZWN0ZWRcIiA6IG51bGxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB0aGlzLmNoZWNrQW5zd2VyKG9wdGlvbil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7b3B0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8YnIvPlxyXG5cdFx0XHRcdFx0e2N1cnJlbnRRdWVzdGlvbiA8IDE5ICYmIChcclxuXHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInVpIGludmVydGVkIGJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGlzYWJsZWR9XHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5uZXh0UXVlc3Rpb25IYW5kbGVyfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0TmV4dFxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHR7LyogLy9hZGRpbmcgYSBmaW5pc2ggYnV0dG9uICovfVxyXG5cdFx0XHRcdFx0e2N1cnJlbnRRdWVzdGlvbiA9PT0gMTkgJiYgKFxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInVpIGludmVydGVkIGJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuZmluaXNoSGFuZGxlcn0+XHJcblx0XHRcdFx0XHRcdFx0RmluaXNoXHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1aXp6O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm1Hcm91cCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmNsYXNzIFJlc3VsdGF0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5iQm9ubmVSZXBvbnNlOiBcIlwiLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVDbGljayhwYWdlKSB7XG4gICAgc3dpdGNoIChwYWdlKSB7XG4gICAgICBjYXNlIFwicXVpenpcIjoge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9xdWl6elwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFwibGlnbmVUcHNcIjoge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9saWduZWR1dGVtcHNcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWRyZVNvbWJyZVwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInJlc3VsdFRpdHJlXCI+VHUgYXMgZmluaSBsZSBRdWl6eiBEZXpvYmV5aSAhPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0YXRDb250ZW51XCI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFR1IGVzIHVue1wiIFwifVxuICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgPHU+KDMgdHlwZXMgZGUgcGVyc29ubmVzKTwvdT5cbiAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgVHUgYXMgZXUgLi4ue3RoaXMuc3RhdGUubmJCb25uZVJlcG9uc2V9IGRlIGJvbm5lcyByw6lwb25zZXMgc3VyXG4gICAgICAgICAgICAgICAgMjBcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5MaWduZVRwc1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKFwibGlnbmVUcHNcIil9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlRlcyByw6lwb25zZXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blF1aXp6XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soXCJxdWl6elwiKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+UmVmYWlyZSBsZSBxdWl6ejwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cucXVpbm9hLmJlXCI+XG4gICAgICAgICAgICAgICAgICBTJ2luc2NpcmUgw6AgbGEgbmV3c2xldHRlciBkZSBRdWlub2FcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0YXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybUdyb3VwLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmNvbnN0IFNlQ29ubmVjdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlcnJldXIsIHNldEVycmV1cl0gPSB1c2VTdGF0ZSh0cnVlKTsgLy9zaSB0cnVlIGRpc3BhcmFpdFxyXG5cclxuICBjb25zdCBsb2dpbiA9IChldmVudCkgPT4ge1xyXG4gICAgLy9jaGFuZ2UgbCfDqXRhdCBkZSBlcnJldXJcclxuICAgIHNldEVycmV1cihldmVudC50YXJnZXQuZXJyZXVyKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjYWRyZVNvbWJyZVwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvcm1UaXRsZSB0ZXh0LWNlbnRlclwiPlNlIENvbm5lY3RlcjwvaDE+XHJcbiAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8aDM+QWRyZXNzZSBNYWlsPC9oMz5cclxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgIHsvKiA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxoMz5BZHJlc3NlIG1haWw8L2gzPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cIkVtYWlsXCIgcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD4gKi99XHJcbiAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG5Mb2dpblwiIG9uQ2xpY2s9e2xvZ2lufT5cclxuICAgICAgICAgICAgICBTZSBDb25uZWN0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxBbGVydCBjb2xvcj1cIndhcm5pbmdcIiBzdHlsZT17ZXJyZXVyID8geyBkaXNwbGF5OiBcIm5vbmVcIiB9IDoge319PlxyXG4gICAgICAgICAgTm91cyBuZSBjb25uYWlzc29ucyBwYXMgY2UgbWFpbCAhXHJcbiAgICAgICAgPC9BbGVydD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VDb25uZWN0ZXI7XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgVXNlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHRwZXJzb25zOiBbXVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0YXhpb3MuZ2V0KGAvYXBpL3VzZXJzL2ApXG5cdFx0XHQudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRjb25zdCBwZXJzb25zID0gcmVzLmRhdGE7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBwZXJzb25zIH0pO1xuXHRcdFx0fSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHVsPlxuXHRcdFx0XHR7IHRoaXMuc3RhdGUucGVyc29ucy5tYXAocGVyc29uID0+IDxsaT57cGVyc29uLnBzZXVkb308L2xpPil9XG5cdFx0XHQ8L3VsPlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyczsiXSwic291cmNlUm9vdCI6IiJ9