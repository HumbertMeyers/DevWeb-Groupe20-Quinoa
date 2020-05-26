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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navCadre"
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
      }, "Inscription")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LogOut__WEBPACK_IMPORTED_MODULE_13__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
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
      mail: "",
      mdp: "",
      age: "",
      sexe: "",
      desobeissant: "",
      mdpErreur: "",
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
        mdp: this.state.mdp,
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
        case "mdp":
          {
            this.setState({
              mdp: itemValue
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
      var mdpErreur = "";
      var mailErreur = "";
      var ageErreur = "";
      var sexeErreur = "";
      var desobeissantErreur = "";

      if (this.state.mdp.value.length < 5) {
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
      obj.mdp = this.state.mdp;
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
      }, "Inscription"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Adresse Mail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
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
      }, this.state.mailErreur)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Mot de passe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "password",
        name: "mdp",
        id: "mdp",
        placeholder: "",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "mdp");
        },
        required: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "erreur"
      }, this.state.mdpErreur)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Age"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
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
      }, this.state.desobeissantErreur)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
        modalClassName: "modal-dialog",
        isOpen: this.state.modal,
        fade: false,
        toggle: this.toggle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalHeader"], {
        toggle: this.toggle
      }, fiche.nom), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null, fiche), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        color: "secondary",
        onClick: this.toggle
      }, "Close"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
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
        //console.log(res.data);
        var data = [{
          id: res.data.id,
          nom: res.data.nom,
          question: res.data.question,
          options: [res.data.reponse1, res.data.reponse2, res.data.reponse3].sort(function () {
            return .5 - Math.random();
          }),
          answer: res.data.reponse1
        }];
        console.log(data);

        _this.setState({
          quizzdata: data
        });

        !_this.state.bonnesReponses ? _this.setState({
          bonnesReponses: [data[0].answer]
        }) : _this.setState({
          bonnesReponses: [_this.state.bonnesReponses, data[0].answer]
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "nextQuestionHandler", function () {
      // console.log('test')
      var _this$state = _this.state,
          myAnswer = _this$state.myAnswer,
          quizzdata = _this$state.quizzdata,
          score = _this$state.score;
      !_this.state.mesReponses ? _this.setState({
        mesReponses: [myAnswer]
      }) : _this.setState({
        bonnesReponses: [_this.state.mesReponses, myAnswer]
      });

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
      score: 0,
      disabled: true,
      isEnd: false,
      items: [],
      quizzdata: []
    };
    return _this;
  }
  /**
   * Cette fonction initialise la page avec un array de question aléatoire
   */


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
    /**
     * cette fonction récupère les informations de la question en cours
     */

  }, {
    key: "componentDidUpdate",

    /**
     * Cette fonction vérifie si la question actuelle à bien changer.
     */
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.currentQuestion !== prevState.currentQuestion) {
        this.getQuestion();
      }
    }
    /**
     * Cette fonction réagit à la selection d'une réponse dans le quizz
     */
    //check answer

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
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Sujet de la question : ", item.nom), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, item.question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Questions ", 20 - currentQuestion, " sur 20 restantes "));
        }), quizzdata.map(function (item, index) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: index
          }, item.options.map(function (option, index) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              key: index,
              className: "ui floating message options ".concat(myAnswer === option ? "selected" : null),
              onClick: function onClick() {
                return _this3.checkAnswer(option);
              }
            }, option);
          }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZy9kZXpvYmV5LmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1nL2xvZ28ucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWNjdWVpbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0luc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xEVERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTGlnbmVEdVRlbXBzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ091dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Qb3N0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9RdWl6ei5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SZXN1bHRhdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9TZUNvbm5lY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Vc2Vycy5qcyJdLCJuYW1lcyI6WyJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJBY2N1ZWlsIiwiZGV6b2JleSIsIkNvbXBvbmVudCIsIkhvbWUiLCJsb2dvIiwiVXNlcnMiLCJQb3N0cyIsIlNlQ29ubmVjdGVyIiwiSW5zY3JpcHRpb24iLCJRdWl6eiIsIkxpZ25lRHVUZW1wcyIsIlJlc3VsdGF0IiwicHJvcHMiLCJzdGF0ZSIsIm1haWwiLCJtZHAiLCJhZ2UiLCJzZXhlIiwiZGVzb2JlaXNzYW50IiwibWRwRXJyZXVyIiwibWFpbEVycmV1ciIsImFnZUVycmV1ciIsInNleGVFcnJldXIiLCJkZXNvYmVpc3NhbnRFcnJldXIiLCJ1c2VyT2JqZWN0IiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnJvciIsIml0ZW0iLCJjaGFtcCIsIml0ZW1WYWx1ZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJsZW5ndGgiLCJwc2V1ZG9FcnJldXIiLCJpbmNsdWRlcyIsImlzVmFsaWQiLCJ2YWxpZGF0ZSIsIm9iaiIsImNvbW1lbnRhaXJlIiwid2FybiIsImhpc3RvcnkiLCJwdXNoIiwiY3JlYXRlVXNlciIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsImxkdGRhdGEiLCJwZXJpb2RlIiwibm9tIiwicmVwb25zZUpvdWV1ciIsImZpY2hlIiwibGlldSIsImx1dHRlIiwic3RyYXRlZ2llIiwiYWN0aW9uIiwidmljdG9pcmUiLCJhbm5lY2RvdGUiLCJjaXRhdGlvbiIsInF1ZXN0aW9uIiwicmVwb25zZTEiLCJyZXBvbnNlMiIsInJlcG9uc2UzIiwidmlkZW8iLCJhcnRpY2xlIiwibW9kYWwiLCJhY3RpdmVNb2RhbCIsInRvZ2dsZSIsImJpbmQiLCJnZXQiLCJwcmV2U3RhdGUiLCJyZXBvbnNlIiwiZmFDaGVjayIsImZhVGltZXMiLCJtYXAiLCJpZCIsImxpZ25lRHVUZW1wcyIsIkxvZ091dCIsInVzZVN0YXRlIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJldmVudCIsImRpc3BsYXkiLCJnZXRQb3N0cyIsInJlcyIsInBvc3RzIiwic2xpY2UiLCJsb2FkaW5nIiwidGl0bGUiLCJib2R5IiwibGlzdFF1ZXN0aW9uIiwiY3VycmVudFF1ZXN0aW9uIiwib3B0aW9ucyIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwiYW5zd2VyIiwicXVpenpkYXRhIiwiYm9ubmVzUmVwb25zZXMiLCJteUFuc3dlciIsInNjb3JlIiwibWVzUmVwb25zZXMiLCJkaXNhYmxlZCIsImlzRW5kIiwiaSIsImxpc3RlRXZlbnQiLCJib25uZVJlcG9uc2VzIiwiaXRlbXMiLCJzZXRUaW1lb3V0IiwiZ2V0UXVlc3Rpb24iLCJwcmV2UHJvcHMiLCJpbmRleCIsIm9wdGlvbiIsImNoZWNrQW5zd2VyIiwibmV4dFF1ZXN0aW9uSGFuZGxlciIsImZpbmlzaEhhbmRsZXIiLCJSZWFjdCIsIm5iQm9ubmVSZXBvbnNlIiwicGFnZSIsImhhbmRsZUNsaWNrIiwiZXJyZXVyIiwic2V0RXJyZXVyIiwibG9naW4iLCJwZXJzb25zIiwicGVyc29uIiwicHNldWRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZSxtR0FBb0MsRTs7Ozs7Ozs7Ozs7O0FDQW5EO0FBQWUsZ0dBQWlDLEU7Ozs7Ozs7Ozs7OztBQ0FoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLGdEQUFRLENBQUNDLE1BQVQsZUFBZ0IsMkRBQUMsOERBQUQscUJBQVEsMkRBQUMsd0RBQUQsT0FBUixDQUFoQixFQUEyQ0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQTNDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7SUFFTUMsTzs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUNQLDBCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNFO0FBQUksaUJBQVMsRUFBQztBQUFkLDJCQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0Usc0ZBQ0Usb0ZBQ0UsbUZBQ0Usb0dBREYsQ0FERixDQURGLGVBTUUsOEtBRW9CLHNFQUZwQixrUkFORixlQWNFLG9VQWRGLGVBcUJFLG9GQUNFLG1GQUNFLHVGQURGLENBREYs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bkJ2RyxrREFBSyxDQUFDaUQsR0FBTixnQkFDRS9DLElBREYsQ0FDTyxVQUFBOEQsR0FBRyxFQUFJO0FBQ1osWUFBTXVDLE9BQU8sR0FBR3ZDLEdBQUcsQ0FBQzFELElBQXBCOztBQUNBLGNBQUksQ0FBQ08sUUFBTCxDQUFjO0FBQUUwRixpQkFBTyxFQUFQQTtBQUFGLFNBQWQ7QUFDQSxPQUpGO0FBS0E7Ozs2QkFFUTtBQUNSLDBCQUNDLHVFQUNHLEtBQUtuSCxLQUFMLENBQVdtSCxPQUFYLENBQW1CakQsR0FBbkIsQ0FBdUIsVUFBQWtELE1BQU07QUFBQSw0QkFBSSx1RUFBS0EsTUFBTSxDQUFDQyxNQUFaLENBQUo7QUFBQSxPQUE3QixDQURILENBREQ7QUFLQTs7OztFQW5Ca0JoSSwrQzs7QUFzQkxHLG9FQUFmLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQgXCIvYnVpbGQvaW1hZ2VzL2Rlem9iZXkuNjlkNGRkNzMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvYnVpbGQvaW1hZ2VzL2xvZ28uM2Y2YTliODAucG5nXCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgJy4uL2Nzcy9hcHAuY3NzJztcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcblxuUmVhY3RET00ucmVuZGVyKDxSb3V0ZXI+PEhvbWUgLz48L1JvdXRlcj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkZXpvYmV5IGZyb20gXCIuLi8uLi9pbWcvZGV6b2JleS5qcGdcIjtcblxuY2xhc3MgQWNjdWVpbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhZHJlU29tYnJlXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYWNjdWVpbFRpdHJlXCI+TGUgSmV1IERlem9iZXlpPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjdWVpbENvbnRlbnVcIj5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgPHU+XG4gICAgICAgICAgICAgICAgICAgIDxiPlByw6lzZW50YXRpb24gZGUgbCdBU0JMIDo8L2I+XG4gICAgICAgICAgICAgICAgICA8L3U+XG4gICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIFF1aW5vYSBlc3QgdW5lIE9ORyBkJ8OpZHVjYXRpb24gw6AgbGEgY2l0b3llbm5ldMOpIG1vbmRpYWxlIGV0XG4gICAgICAgICAgICAgICAgICBzb2xpZGFpcmUgKEVDTVMpLiA8YnI+PC9icj4gTCdFQ01TIGVzdCB1biBwcm9jZXNzdXMgcXVpIHZpc2Ugw6BcbiAgICAgICAgICAgICAgICAgIHByb3ZvcXVlciBkZXMgY2hhbmdlbWVudHMgZGUgdmFsZXVyIGV0IGRlIGNvbXBvcnRlbWVudCBzdXIgbGVcbiAgICAgICAgICAgICAgICAgIHBsYW4gaW5kaXZpZHVlbCBldCBjb2xsZWN0aWYgZW4gdnVlIGQndW4gbW9uZGUgcGx1cyBqdXN0ZSBkYW5zXG4gICAgICAgICAgICAgICAgICBsZXF1ZWwgcmVzc291cmNlcyBldCBwb3V2b2lycyBzb250IMOpcXVpdGFibGVtZW50IHLDqXBhcnRpcyBkYW5zXG4gICAgICAgICAgICAgICAgICBsZSByZXNwZWN0IGRlIGxhIGRpZ25pdMOpIGh1bWFpbmUuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgU2VzIGFjdGlvbnMgOiBwcm9qZXRzIGludGVybmF0aW9uYXV4IChhdXNzaSBzY29sYWlyZXMsIG1haXNvblxuICAgICAgICAgICAgICAgICAgZGUgamV1bmVzLCBzY291dHMgZW4gQW3DqXJpcXVlIGRlIHN1ZCwgQWZyaXF1ZSBldCBBc2llKS4gUHJvamV0XG4gICAgICAgICAgICAgICAgICBhbHRlcm5hdGl2ZSBsb2NhbGVzLiBBbmltYXRpb25zIHDDqWRhZ29naXF1ZXMgKEpldSBkZSBsYVxuICAgICAgICAgICAgICAgICAgZmljZWxsZSwgUG90ZW50aWEsIEpldSBkZXMgY2hhaXNlcywgRGV6b2JleWkuLi4pLlxuICAgICAgICAgICAgICAgICAgTW9iaWxpc2F0aW9ucy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgPHU+XG4gICAgICAgICAgICAgICAgICAgIDxiPkpldSBEZXpvYmV5aSA6PC9iPlxuICAgICAgICAgICAgICAgICAgPC91PlxuICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBFdCB0b2ksIGFzLXR1IGTDqWrDoCBkZXNvYsOpaSA/IEZhY2Ugw6AgbCdpbnRpbWlkYXRpb24sIMOgXG4gICAgICAgICAgICAgICAgICBsJ2luanVzdGljZSBjb21tZW50IHLDqWFnaXIgPyBGYXV0LWlsIHBhcmZvaXMgZMOpc29iw6lpciA/IFF1aW5vYVxuICAgICAgICAgICAgICAgICAgYXNibCBwcm9wb3NlIHVuIG91dGlsIHDDqWRhZ29naXF1ZSBhdXRvdXIgZGUgbCdhY3Rpb24gZGlyZWN0ZVxuICAgICAgICAgICAgICAgICAgbm9uLXZpb2xlbnRlIGV0IGRlIGxhIGTDqXNvYsOpaXNzYW5jZSBjaXZpbGUgOiBkdSBOb3JkIGF1IFN1ZCxcbiAgICAgICAgICAgICAgICAgIGwnYWN0aW9uIGRpcmVjdGUgbm9uLXZpb2xlbnRlIGVzdCAoZXQgYSB0b3Vqb3VycyDDqXTDqSkgdW5cbiAgICAgICAgICAgICAgICAgIGxldmllciBkZSBjaGFuZ2VtZW50IHNvY2lhbC4gRHJvaXQgZGUgdm90ZSBkZXMgZmVtbWVzLFxuICAgICAgICAgICAgICAgICAgYWJvbGl0aW9uIGRlIGxhIHPDqWdyw6lnYXRpb24sIHLDqWN1cMOpcmF0aW9uIGRlIHRlcnJlcy4uLiA6IHRvdXNcbiAgICAgICAgICAgICAgICAgIG9udCDDqXTDqSBvYnRlbnVzIG5vdGFtbWVudCBwYXIgZGVzIGFjdGlvbnMgZGUgXCJkw6lzb2LDqWlzc2FuY2VcIi5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBMZSBqZXUgZW50ZW5kIHBhcnRpciBkdSB2w6ljdSBkZXMgcGFydGljaXBhbuKAonTigKJl4oCicyBwb3VyIG1pZXV4XG4gICAgICAgICAgICAgICAgICB0b3VjaGVyIGF1IGNvZXVyIGRlcyBjYXVzZXMgcXVpIGxlcyBhbmltZW50IGV0IGxlcyBpbnNwaXJlbnQuXG4gICAgICAgICAgICAgICAgICBMJ291dGlsIHNlIGTDqXZlbG9wcGUgZW4gdW5lIGxpZ25lIGR1IHRlbXBzIHN1ciBsYXF1ZWxsZSBsZeKAomxhXG4gICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudOKAomUsIGVuIHBsdXNpZXVycyBwaGFzZSBsdWRpcXVlcywgcGV1dCB0ZXN0ZXIgc2VzXG4gICAgICAgICAgICAgICAgICBjb25uYWlzc2FuY2VzIGV0IGFmZnV0ZXIgc2EgdmlzaW9uIGR1IG1vbmRlIGVuIHZveWFnZWFudCBkYW5zXG4gICAgICAgICAgICAgICAgICB1bmUgXCJhdXRyZVwiIEhpc3RvaXJlIHF1ZSBjZWxsZSByw6ljb250w6llIHBhciBsZXMgXCJkb21pbmFudHNcIi5cbiAgICAgICAgICAgICAgICAgIDxicj48L2JyPkwnb3V0aWwgbGFpc3NlIGF1c3NpIGxhIHBsYWNlIGF1eCDDqWNoYW5nZXMgZXQgw6BcbiAgICAgICAgICAgICAgICAgIGwnYWN0aW9uIGF2ZWMgZGVzIG1pc2VzIGVuIHNpdHVhdGlvbiBldCBkw6liYXRzIG1vdXZhbnRzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIEV4cGxvcmV6IGxlcyBsdXR0ZXMgKGV0IGxlcyB2aWN0b2lyZXMpIGRlIGNlcyBmZW1tZXMgZXQgaG9tbWVzXG4gICAgICAgICAgICAgICAgICBxdWkgb250IGTDqXNvYsOpaS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWdBY2N1ZWlsXCIgc3JjPXtkZXpvYmV5fSBhbHQ9XCJpbWFnZSBqZXVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY2N1ZWlsO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoLCBSZWRpcmVjdCwgTGluaywgd2l0aFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBBY2N1ZWlsIGZyb20gXCIuL0FjY3VlaWxcIjtcclxuaW1wb3J0IFVzZXJzIGZyb20gXCIuL1VzZXJzXCI7XHJcbmltcG9ydCBQb3N0cyBmcm9tIFwiLi9Qb3N0c1wiO1xyXG5pbXBvcnQgSW5zY3JpcHRpb24gZnJvbSBcIi4vSW5zY3JpcHRpb25cIjtcclxuaW1wb3J0IExpZ25lRHVUZW1wcyBmcm9tIFwiLi9MaWduZUR1VGVtcHNcIjtcclxuaW1wb3J0IFNlQ29ubmVjdGVyIGZyb20gXCIuL1NlQ29ubmVjdGVyXCI7XHJcbmltcG9ydCBRdWl6eiBmcm9tIFwiLi9RdWl6elwiO1xyXG5pbXBvcnQgUmVzdWx0YXQgZnJvbSBcIi4vUmVzdWx0YXRcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSBcIi4uLy4uL2ltZy9sb2dvLnBuZ1wiO1xyXG5pbXBvcnQgeyBOYXYsIE5hdkl0ZW0sIE5hdkxpbmsgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xyXG5pbXBvcnQgTG9nT3V0IGZyb20gXCIuL0xvZ091dFwiO1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2Q2FkcmUnPlxyXG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cucXVpbm9hLmJlXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPXtsb2dvfSBhbHQ9XCJsb2dvIFF1aW5vYVwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2FjY3VlaWxcIj5cclxuICAgICAgICAgICAgICAgIEFjY3VlaWxcclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3F1aXp6XCI+XHJcbiAgICAgICAgICAgICAgICBRdWl6elxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvTGlnbmVEdVRlbXBzXCI+XHJcbiAgICAgICAgICAgICAgICBMaWduZUR1VGVtcHNcclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3Jlc3VsdGF0XCI+XHJcbiAgICAgICAgICAgICAgICBSZXN1bHRhdFxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvc2Vjb25uZWN0ZXJcIj5cclxuICAgICAgICAgICAgICAgIFNlIGNvbm5lY3RlclxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvaW5zY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIEluc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxMb2dPdXQgLz5cclxuICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICA8UmVkaXJlY3QgZXhhY3QgZnJvbT1cIi9cIiB0bz1cIi9hY2N1ZWlsXCIgLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvdXNlcnNcIiBjb21wb25lbnQ9e1VzZXJzfSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wb3N0c1wiIGNvbXBvbmVudD17UG9zdHN9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3NlY29ubmVjdGVyXCIgY29tcG9uZW50PXtTZUNvbm5lY3Rlcn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvaW5zY3JpcHRpb25cIiBjb21wb25lbnQ9e0luc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9xdWl6elwiIGNvbXBvbmVudD17UXVpenp9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FjY3VlaWxcIiBjb21wb25lbnQ9e0FjY3VlaWx9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xpZ25lZHV0ZW1wc1wiIGNvbXBvbmVudD17TGlnbmVEdVRlbXBzfSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZXN1bHRhdFwiIGNvbXBvbmVudD17UmVzdWx0YXR9IC8+XHJcbiAgICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiLy8gbm9wcm90ZWN0XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNsYXNzIEluc2NyaXB0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbWFpbDogXCJcIixcclxuICAgICAgbWRwOiBcIlwiLFxyXG4gICAgICBhZ2U6IFwiXCIsXHJcbiAgICAgIHNleGU6IFwiXCIsXHJcbiAgICAgIGRlc29iZWlzc2FudDogXCJcIixcclxuICAgICAgbWRwRXJyZXVyOiBcIlwiLFxyXG4gICAgICBtYWlsRXJyZXVyOiBcIlwiLFxyXG4gICAgICBhZ2VFcnJldXI6IFwiXCIsXHJcbiAgICAgIHNleGVFcnJldXI6IFwiXCIsXHJcbiAgICAgIGRlc29iZWlzc2FudEVycmV1cjogXCJcIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjcmVhdGVVc2VyKCkge1xyXG4gICAgY29uc3QgdXNlck9iamVjdCA9IHtcclxuICAgICAgbWRwOiB0aGlzLnN0YXRlLm1kcCxcclxuICAgICAgbWFpbDogdGhpcy5zdGF0ZS5tYWlsLFxyXG4gICAgICBhZ2U6IHRoaXMuc3RhdGUuYWdlLFxyXG4gICAgICBzZXhlOiB0aGlzLnN0YXRlLnNleGUsXHJcbiAgICAgIGRlc29iZWlzc2FudDogdGhpcy5zdGF0ZS5kZXNvYmVpc3NhbnQsXHJcbiAgICB9O1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzL2FkZC9cIiwgdXNlck9iamVjdClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlKGl0ZW0sIGNoYW1wKSB7XHJcbiAgICBsZXQgaXRlbVZhbHVlID0gaXRlbS50YXJnZXQudmFsdWU7XHJcbiAgICBzd2l0Y2ggKGNoYW1wKSB7XHJcbiAgICAgIGNhc2UgXCJtZHBcIjoge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZHA6IGl0ZW1WYWx1ZSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwibWFpbFwiOiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1haWw6IGl0ZW1WYWx1ZSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwiYWdlXCI6IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWdlOiBpdGVtVmFsdWUgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcInNleGVcIjoge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZXhlOiBpdGVtVmFsdWUgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcImRlc29iZWlzc2FudFwiOiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRlc29iZWlzc2FudDogaXRlbVZhbHVlIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZSgpIHtcclxuICAgIGxldCBtZHBFcnJldXIgPSBcIlwiO1xyXG4gICAgbGV0IG1haWxFcnJldXIgPSBcIlwiO1xyXG4gICAgbGV0IGFnZUVycmV1ciA9IFwiXCI7XHJcbiAgICBsZXQgc2V4ZUVycmV1ciA9IFwiXCI7XHJcbiAgICBsZXQgZGVzb2JlaXNzYW50RXJyZXVyID0gXCJcIjtcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5tZHAudmFsdWUubGVuZ3RoIDwgNSkge1xyXG4gICAgICBwc2V1ZG9FcnJldXIgPSBcImxlIGNoYW1wIGRvaXQgw6p0cmUgcmVtcGxpXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnN0YXRlLm1haWwuaW5jbHVkZXMoXCJAXCIpKSB7XHJcbiAgICAgIG1haWxFcnJldXIgPSBcImwnZW1haWwgZXN0IGludmFsaWRlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmFnZSkge1xyXG4gICAgICBhZ2VFcnJldXIgPSBcImxlIGNoYW1wIGRvaXQgw6p0cmUgcmVtcGxpXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnN0YXRlLnNleGUpIHtcclxuICAgICAgc2V4ZUVycmV1ciA9IFwibGUgY2hhbXAgZG9pdCDDqnRyZSByZW1wbGlcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuZGVzb2JlaXNzYW50KSB7XHJcbiAgICAgIGRlc29iZWlzc2FudEVycmV1ciA9IFwibGUgY2hhbXAgZG9pdCDDqnRyZSByZW1wbGlcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIG1haWxFcnJldXIgfHxcclxuICAgICAgcHNldWRvRXJyZXVyIHx8XHJcbiAgICAgIGFnZUVycmV1ciB8fFxyXG4gICAgICBzZXhlRXJyZXVyIHx8XHJcbiAgICAgIGRlc29iZWlzc2FudEVycmV1clxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG1haWxFcnJldXIsXHJcbiAgICAgICAgcHNldWRvRXJyZXVyLFxyXG4gICAgICAgIGFnZUVycmV1cixcclxuICAgICAgICBzZXhlRXJyZXVyLFxyXG4gICAgICAgIGRlc29iZWlzc2FudEVycmV1cixcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICBsZXQgb2JqID0ge307XHJcbiAgICBvYmoubWRwID0gdGhpcy5zdGF0ZS5tZHA7XHJcbiAgICBvYmoubWFpbCA9IHRoaXMuc3RhdGUubWFpbDtcclxuICAgIG9iai5hZ2UgPSB0aGlzLnN0YXRlLmFnZTtcclxuICAgIG9iai5zZXhlID0gdGhpcy5zdGF0ZS5zZXhlO1xyXG4gICAgb2JqLmRlc29iZWlzc2FudCA9IHRoaXMuc3RhdGUuZGVzb2JlaXNzYW50O1xyXG4gICAgb2JqLmNvbW1lbnRhaXJlID0gdGhpcy5zdGF0ZS5jb21tZW50YWlyZTtcclxuXHJcbiAgICBpZiAoaXNWYWxpZCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJkb25uw6llcyBlbnZvecOpZXNcIiwgb2JqKTtcclxuICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvcXVpenpcIik7XHJcbiAgICAgIHRoaXMuY3JlYXRlVXNlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxyXG4gICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiY2FkcmVTb21icmVcIiBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb3JtVGl0bGUgdGV4dC1jZW50ZXJcIj5JbnNjcmlwdGlvbjwvaDE+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGgzPkFkcmVzc2UgTWFpbDwvaDM+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcIm1haWxcIil9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJldXJcIj57dGhpcy5zdGF0ZS5tYWlsRXJyZXVyfTwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8aDM+TW90IGRlIHBhc3NlPC9oMz5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibWRwXCJcclxuICAgICAgICAgICAgICAgIGlkPVwibWRwXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJtZHBcIil9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJldXJcIj57dGhpcy5zdGF0ZS5tZHBFcnJldXJ9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxoMz5BZ2U8L2gzPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9BZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJhZ2VcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPjE2LTE4PC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvQWdlXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIxOVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMTlcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwiYWdlXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD4xOS0yMTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0FnZVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiMjJcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIjIyXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcImFnZVwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+MjItMjU8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9BZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIjI2XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIyNlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJhZ2VcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPjI2LTI5PC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvQWdlXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwibWFpbFwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+KyAzMDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJldXJcIj57dGhpcy5zdGF0ZS5hZ2VFcnJldXJ9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxoMz5TZXhlPC9oMz5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNleGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaG9tbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiaG9tbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiaG9tbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJzZXhlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICBob21tZVxyXG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNleGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmVtbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZmVtbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiZmVtbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJzZXhlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICBmZW1tZVxyXG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNleGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiYXV0cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiYXV0cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiYXV0cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJzZXhlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICBhdXRyZVxyXG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycmV1clwiPnt0aGlzLnN0YXRlLnNleGVFcnJldXJ9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxoMz5Fc3QtY2UgcXVlIHZvdXMgdm91cyBjb25zaWTDqXJleiBjb21tZSDCq2TDqXNvYsOpaXNzYW50wrsgPzwvaDM+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNvYmVpXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJvdWlcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIm91aVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJkZXNvYmVpc3NhbnRcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPm91aTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNvYmVpXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJ1blBldVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwidW4gcGV1XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcImRlc29iZWlzc2FudFwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+dW4gcGV1PC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc29iZWlcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIm5vblwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwibm9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcImRlc29iZWlzc2FudFwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+bm9uPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycmV1clwiPnt0aGlzLnN0YXRlLmRlc29iZWlzc2FudEVycmV1cn08L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG5Mb2dpblwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU3VibWl0KCl9PlxyXG4gIDxsYWJlbD5TJ2luc2NyaXJlPC9sYWJlbD5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnNjcmlwdGlvbjtcclxuIiwiZXhwb3J0IGNvbnN0IGxkdGRhdGEgPSBbXHJcbiAge1xyXG4gICAgcGVyaW9kZTogMTkzMCxcclxuICAgIG5vbTogYCBHYW5kaGlgLFxyXG4gICAgcmVwb25zZUpvdWV1cjogMSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBlcmlvZGU6IDE5NjAsXHJcbiAgICBub206IGAgQXltZXJpY2AsXHJcbiAgICByZXBvbnNlSm91ZXVyOiAyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGVyaW9kZTogMTQ5MCxcclxuICAgIG5vbTogYCBTZWJgLFxyXG4gICAgcmVwb25zZUpvdWV1cjogMyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBlcmlvZGU6IDE5MzAsXHJcbiAgICBub206IGAgSHVtYmVyYCxcclxuICAgIHJlcG9uc2VKb3VldXI6IDEsXHJcbiAgfSxcclxuXTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGxkdGRhdGEgfSBmcm9tIFwiLi9MRFREYXRhXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IHsgZmFDaGVjaywgZmFUaW1lcyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5cclxuY2xhc3MgTGlnbmVEdVRlbXBzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGZpY2hlOiBbXHJcbiAgICAgICAgeyBub206IFwiXCIgfSxcclxuICAgICAgICB7IHBlcmlvZGU6IFwiXCIgfSxcclxuICAgICAgICB7IGxpZXU6IFwiXCIgfSxcclxuICAgICAgICB7IGx1dHRlOiBcIlwiIH0sXHJcbiAgICAgICAgeyBzdHJhdGVnaWU6IFwiXCIgfSxcclxuICAgICAgICB7IGFjdGlvbjogXCJcIiB9LFxyXG4gICAgICAgIHsgdmljdG9pcmU6IFwiXCIgfSxcclxuICAgICAgICB7IGFubmVjZG90ZTogXCJcIiB9LFxyXG4gICAgICAgIHsgY2l0YXRpb246IFwiXCIgfSxcclxuICAgICAgICB7IHF1ZXN0aW9uOiBcIlwiIH0sXHJcbiAgICAgICAgeyByZXBvbnNlMTogXCJcIiB9LFxyXG4gICAgICAgIHsgcmVwb25zZTI6IFwiXCIgfSxcclxuICAgICAgICB7IHJlcG9uc2UzOiBcIlwiIH0sXHJcbiAgICAgICAgeyB2aWRlbzogXCJcIiB9LFxyXG4gICAgICAgIHsgYXJ0aWNsZTogXCJcIiB9LFxyXG4gICAgICAgIHsgcmVwb25zZUpvdWV1cjogXCJcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgICBtb2RhbDogZmFsc2UsXHJcbiAgICAgIGFjdGl2ZU1vZGFsOiBudWxsLFxyXG4gICAgfTtcclxuICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgYXhpb3MuZ2V0KCcvYXBpL2V2ZW5lbWVudHMvJylcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XHJcbiAgICAgIG1vZGFsOiAhcHJldlN0YXRlLm1vZGFsLFxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgcmVwb25zZShyZXBvbnNlKSB7XHJcbiAgICBpZiAocmVwb25zZSA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJjaGVja0ljb25cIiBpY29uPXtmYUNoZWNrfSAvPjtcclxuICAgIH1cclxuICAgIHJldHVybiA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cImZhbHNlSWNvblwiIGljb249e2ZhVGltZXN9IC8+O1xyXG4gIH1cclxuXHJcbiAgLy8gY2hhbmdlVmFyaWFibGUocGVyaW9kZXMsIG5vbXMsIHJlcG9uc2VKb3VldXJzKSB7XHJcbiAgLy8gICB0aGlzLnNldFN0YXRlKHtcclxuICAvLyAgICAgcGVyaW9kZTogcGVyaW9kZXMudmFsdWUsXHJcbiAgLy8gICAgIG5vbTogbm9tcy52YWx1ZSxcclxuICAvLyAgICAgcmVwb25zZUpvdWV1cjogcmVwb25zZUpvdWV1cnMudmFsdWUsXHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcblxyXG4gIGxpZ25lRHVUZW1wcygpIHtcclxuICAgIGNvbnN0IHsgZmljaGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gZmljaGUubWFwKCh7IG5vbSwgaWQsIHBlcmlvZGUscmVwb25zZUpvdWV1ciB9KSA9PiAoXHJcbiAgICAgIDx0ciBrZXk9e2lkfT5cclxuICAgICAgICA8dGQ+e25vbX08L3RkPlxyXG4gICAgICAgIDx0ZD57cGVyaW9kZX08L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyZXBvbnNlSm91ZXVyXCI+e3RoaXMucmVwb25zZShyZXBvbnNlSm91ZXVyKX08L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XHJcbiAgICAgICAgICAgIFBsdXMgZCdpbmZvcm1hdGlvblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICkpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBmaWNoZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FkcmVTb21icmVcIj5cclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgbW9kYWxDbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIlxyXG4gICAgICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5tb2RhbH1cclxuICAgICAgICAgICAgICBmYWRlPXtmYWxzZX1cclxuICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMudG9nZ2xlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZT17dGhpcy50b2dnbGV9PnsgZmljaGUubm9tfTwvTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgPE1vZGFsQm9keT57IGZpY2hlIH08L01vZGFsQm9keT5cclxuICAgICAgICAgICAgICA8TW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy50b2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxkdFRpdHJlXCI+XHJcbiAgICAgICAgICAgICAgVm9zIHLDqXN1bHRhdHMgYXV4IHF1ZXN0aW9ucyBkZXMgZMOpc29iw6lpc3NhbnRzXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDx0YWJsZSBpZD1cInRhYkRlc29iZWlcIj5cclxuICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0aGVhZFwiPk5vbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0aGVhZFwiPkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGhlYWRcIj5Sw6lzdWx0YXQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGhlYWRcIj5JbmZvczwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRib2R5Pnt0aGlzLmxpZ25lRHVUZW1wcygpfTwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlnbmVEdVRlbXBzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTG9nT3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKHRydWUpOyAvL3NpIGZhbHNlIGRpc3BhcmFpdFxyXG5cclxuICBjb25zb2xlLmxvZyhjaGVja2VkKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGlmIChjaGVja2VkID09PSB0cnVlKSB7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiRMOpY29ubmV4aW9uXCIpO1xyXG4gIC8vICAgICAvL2ZvbmN0aW9uIGTDqWNvbm5leGlvblxyXG4gIC8vICAgfVxyXG4gIC8vIH0sIFtjaGVja2VkXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgLy9jaGFuZ2UgbCfDqXRhdCBkZSBjaGVja2VkXHJcbiAgICBzZXRDaGVja2VkKGV2ZW50LnRhcmdldC5jaGVja2VkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJMb2dPdXRDb250YWluZXJcIiBzdHlsZT17Y2hlY2tlZCA/IHt9IDogeyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaFwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtjaGVja2VkfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlciByb3VuZFwiPjwvc3Bhbj5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZXRhdENvbm5leGlvblwiPsOpdGF0IGRlIGNvbm5leGlvbjwvbGFiZWw+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nT3V0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cblxuY2xhc3MgUG9zdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZ2V0UG9zdHMoKTtcbiAgICB9XG5cbiAgICBnZXRQb3N0cygpIHtcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvYCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9zdHMgPSByZXMuZGF0YS5zbGljZSgwLDE1KTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwb3N0cywgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGxvYWRpbmcgPSB0aGlzLnN0YXRlLmxvYWRpbmc7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm93LXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+PHNwYW4+TGlzdCBvZiBwb3N0czwvc3Bhbj5DcmVhdGVkIHdpdGggPGlcbiAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtaGVhcnRcIj48L2k+IGJ5IHllbWl3ZWJieSA8L2gyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncm93IHRleHQtY2VudGVyJ30+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1zcGluIGZhLXNwaW5uZXIgZmEtNHhcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Jvdyd9PlxuICAgICAgICAgICAge3RoaXMuc3RhdGUucG9zdHMubWFwKHBvc3QgPT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgb2Zmc2V0LW1kLTEgcm93LWJsb2NrXCIga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAgICA8dWwgaWQ9XCJzb3J0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGg0Pntwb3N0LnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgPHA+e3Bvc3QuYm9keX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0czsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNsYXNzIFF1aXp6IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdGxpc3RRdWVzdGlvbjogW10sXHJcblx0XHRcdGN1cnJlbnRRdWVzdGlvbjogMCxcclxuXHRcdFx0bXlBbnN3ZXI6IG51bGwsXHJcblx0XHRcdHNjb3JlOiAwLFxyXG5cdFx0XHRkaXNhYmxlZDogdHJ1ZSxcclxuXHRcdFx0aXNFbmQ6IGZhbHNlLFxyXG5cdFx0XHRpdGVtczogW10sXHJcblx0XHRcdHF1aXp6ZGF0YTogW10sXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENldHRlIGZvbmN0aW9uIGluaXRpYWxpc2UgbGEgcGFnZSBhdmVjIHVuIGFycmF5IGRlIHF1ZXN0aW9uIGFsw6lhdG9pcmVcclxuXHQgKi9cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdGF4aW9zLmdldChgL2FwaS9zdGFydFF1aXp6L2ApXHJcblx0XHRcdC50aGVuKChyZXMpID0+e1xyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2xpc3RRdWVzdGlvbjogcmVzLmRhdGF9KTtcclxuXHRcdFx0fSk7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5nZXRRdWVzdGlvbigpO1xyXG5cdFx0fSwgMTUwMCk7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogY2V0dGUgZm9uY3Rpb24gcsOpY3Vww6hyZSBsZXMgaW5mb3JtYXRpb25zIGRlIGxhIHF1ZXN0aW9uIGVuIGNvdXJzXHJcblx0ICovXHJcblx0Z2V0UXVlc3Rpb24gPSAoKSA9PiB7XHJcblx0XHRsZXQgZXZlbnQgPSB0aGlzLnN0YXRlLmxpc3RRdWVzdGlvblt0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbl07XHJcblx0XHRheGlvcy5nZXQoYC9hcGkvcXVpenovJHtldmVudH1gKVxyXG5cdFx0XHQudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcblx0XHRcdFx0bGV0IGRhdGEgPSBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGlkOiByZXMuZGF0YS5pZCxcclxuXHRcdFx0XHRcdFx0bm9tOiByZXMuZGF0YS5ub20sXHJcblx0XHRcdFx0XHRcdHF1ZXN0aW9uOiByZXMuZGF0YS5xdWVzdGlvbixcclxuXHRcdFx0XHRcdFx0b3B0aW9uczogW1xyXG5cdFx0XHRcdFx0XHRcdHJlcy5kYXRhLnJlcG9uc2UxLFxyXG5cdFx0XHRcdFx0XHRcdHJlcy5kYXRhLnJlcG9uc2UyLFxyXG5cdFx0XHRcdFx0XHRcdHJlcy5kYXRhLnJlcG9uc2UzLFxyXG5cdFx0XHRcdFx0XHRdLnNvcnQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIC41IC0gTWF0aC5yYW5kb20oKVxyXG5cdFx0XHRcdFx0XHR9KSxcclxuXHRcdFx0XHRcdFx0YW5zd2VyOiByZXMuZGF0YS5yZXBvbnNlMSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtxdWl6emRhdGE6IGRhdGF9KTtcclxuXHRcdFx0XHQhKHRoaXMuc3RhdGUuYm9ubmVzUmVwb25zZXMpID9cclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtib25uZXNSZXBvbnNlczogW2RhdGFbMF0uYW5zd2VyXX0pXHJcblx0XHRcdFx0XHRcdDogdGhpcy5zZXRTdGF0ZSh7Ym9ubmVzUmVwb25zZXM6IFt0aGlzLnN0YXRlLmJvbm5lc1JlcG9uc2VzLCBkYXRhWzBdLmFuc3dlcl19KTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDZXR0ZSBmb25jdGlvbiBwZXJtZXQgZGUgcGFzc2VyIMOgIGxhIHF1ZXN0aW9uIHN1aXZhbnRlXHJcblx0ICovXHJcblx0bmV4dFF1ZXN0aW9uSGFuZGxlciA9ICgpID0+IHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCd0ZXN0JylcclxuXHRcdGNvbnN0IHsgbXlBbnN3ZXIsIHF1aXp6ZGF0YSwgc2NvcmUgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHQhKHRoaXMuc3RhdGUubWVzUmVwb25zZXMpID9cclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7bWVzUmVwb25zZXM6IFtteUFuc3dlcl19KVxyXG5cdFx0XHQ6IHRoaXMuc2V0U3RhdGUoe2Jvbm5lc1JlcG9uc2VzOiBbdGhpcy5zdGF0ZS5tZXNSZXBvbnNlcywgbXlBbnN3ZXJdfSk7XHJcblx0XHRpZiAobXlBbnN3ZXIgPT09IHF1aXp6ZGF0YVswXS5hbnN3ZXIpIHtcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0c2NvcmU6IHNjb3JlICsgMSxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdGN1cnJlbnRRdWVzdGlvbjogdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb24gKyAxLFxyXG5cdFx0fSk7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbik7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQ2V0dGUgZm9uY3Rpb24gdsOpcmlmaWUgc2kgbGEgcXVlc3Rpb24gYWN0dWVsbGUgw6AgYmllbiBjaGFuZ2VyLlxyXG5cdCAqL1xyXG5cdGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xyXG5cdFx0aWYgKHRoaXMuc3RhdGUuY3VycmVudFF1ZXN0aW9uICE9PSBwcmV2U3RhdGUuY3VycmVudFF1ZXN0aW9uKSB7XHJcblx0XHRcdHRoaXMuZ2V0UXVlc3Rpb24oKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENldHRlIGZvbmN0aW9uIHLDqWFnaXQgw6AgbGEgc2VsZWN0aW9uIGQndW5lIHLDqXBvbnNlIGRhbnMgbGUgcXVpenpcclxuXHQgKi9cclxuXHQvL2NoZWNrIGFuc3dlclxyXG5cdGNoZWNrQW5zd2VyID0gKGFuc3dlcikgPT4ge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7bXlBbnN3ZXI6IGFuc3dlciwgZGlzYWJsZWQ6IGZhbHNlfSk7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQ2V0dGUgZm9uY3Rpb24gcGVybWV0IGxhIGZpbiBkdSBxdWl6elxyXG5cdCAqL1xyXG5cclxuXHRmaW5pc2hIYW5kbGVyID0gKCkgPT4ge1xyXG5cdFx0aWYgKHRoaXMuc3RhdGUuY3VycmVudFF1ZXN0aW9uID09IDE5KSB7XHJcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2lzRW5kOiB0cnVlLH0pO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKHZhciBpID0wOyBpIDwgMjA7IGkrKyl7XHJcblx0XHRcdHZhciBsaXN0ZUV2ZW50ID0gdGhpcy5zdGF0ZS5saXN0UXVlc3Rpb25baV07XHJcblx0XHRcdGF4aW9zLmdldChgL2FwaS9xdWl6ei8ke2xpc3RlRXZlbnR9YClcclxuXHRcdFx0XHQudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLnJlcG9uc2UxO1xyXG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7Ym9ubmVSZXBvbnNlczogdGhpcy5zdGF0ZS5ib25uZXNSZXBvbnNlcy5wdXNoKGRhdGEpfSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IG15QW5zd2VyLCBjdXJyZW50UXVlc3Rpb24sIGlzRW5kLCBxdWl6emRhdGEsIGJvbm5lc1JlcG9uc2VzIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuXHRcdGlmIChpc0VuZCkge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0IGNhZHJlU29tYnJlXCI+XHJcblx0XHRcdFx0XHQ8aDM+Vm90cmUgc2NvcmUgZmluYWwgZXN0IDoge3RoaXMuc3RhdGUuc2NvcmV9IHBvaW50cyBzdXIgMjA8L2gzPlxyXG5cdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdExlcyByw6lwb25zZXMgY29ycmVjdGVzIGF1eCBxdWVzdGlvbnMgw6l0YWllbnQgOlxyXG5cdFx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdFx0IHtib25uZXNSZXBvbnNlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwidWkgZmxvYXRpbmcgbWVzc2FnZSBvcHRpb25zXCIga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJBcHAgY2FkcmVTb21icmVcIj5cclxuXHRcdFx0XHRcdHtxdWl6emRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdFx0XHRcdDxoMj5TdWpldCBkZSBsYSBxdWVzdGlvbiA6IHtpdGVtLm5vbX08L2gyPlxyXG5cdFx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHRcdFx0PGgzPntpdGVtLnF1ZXN0aW9ufTwvaDM+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+UXVlc3Rpb25zIHsyMCAtIGN1cnJlbnRRdWVzdGlvbn0gc3VyIDIwIHJlc3RhbnRlcyA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHR7cXVpenpkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0PGRpdiBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0XHR7aXRlbS5vcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PHAga2V5PXtpbmRleH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgdWkgZmxvYXRpbmcgbWVzc2FnZSBvcHRpb25zICR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bXlBbnN3ZXIgPT09IG9wdGlvbiA/IFwic2VsZWN0ZWRcIiA6IG51bGxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHRoaXMuY2hlY2tBbnN3ZXIob3B0aW9uKX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e29wdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHR7Y3VycmVudFF1ZXN0aW9uIDwgMTkgJiYgKFxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlZH1cclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLm5leHRRdWVzdGlvbkhhbmRsZXJ9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHROZXh0XHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdHsvKiAvL2FkZGluZyBhIGZpbmlzaCBidXR0b24gKi99XHJcblx0XHRcdFx0XHR7Y3VycmVudFF1ZXN0aW9uID09PSAxOSAmJiAoXHJcblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgYnV0dG9uXCIgb25DbGljaz17dGhpcy5maW5pc2hIYW5kbGVyfT5cclxuXHRcdFx0XHRcdFx0XHRGaW5pc2hcclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVpeno7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybUdyb3VwIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuY2xhc3MgUmVzdWx0YXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmJCb25uZVJlcG9uc2U6IFwiXCIsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKHBhZ2UpIHtcbiAgICBzd2l0Y2ggKHBhZ2UpIHtcbiAgICAgIGNhc2UgXCJxdWl6elwiOiB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL3F1aXp6XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJsaWduZVRwc1wiOiB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL2xpZ25lZHV0ZW1wc1wiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhZHJlU29tYnJlXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicmVzdWx0VGl0cmVcIj5UdSBhcyBmaW5pIGxlIFF1aXp6IERlem9iZXlpICE8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRhdENvbnRlbnVcIj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgVHUgZXMgdW57XCIgXCJ9XG4gICAgICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgICAgICA8dT4oMyB0eXBlcyBkZSBwZXJzb25uZXMpPC91PlxuICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBUdSBhcyBldSAuLi57dGhpcy5zdGF0ZS5uYkJvbm5lUmVwb25zZX0gZGUgYm9ubmVzIHLDqXBvbnNlcyBzdXJcbiAgICAgICAgICAgICAgICAyMFxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bkxpZ25lVHBzXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soXCJsaWduZVRwc1wiKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+VGVzIHLDqXBvbnNlczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuUXVpenpcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljayhcInF1aXp6XCIpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5SZWZhaXJlIGxlIHF1aXp6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5xdWlub2EuYmVcIj5cbiAgICAgICAgICAgICAgICAgIFMnaW5zY2lyZSDDoCBsYSBuZXdzbGV0dGVyIGRlIFF1aW5vYVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRhdDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtR3JvdXAsIElucHV0IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IHsgQWxlcnQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuY29uc3QgU2VDb25uZWN0ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VycmV1ciwgc2V0RXJyZXVyXSA9IHVzZVN0YXRlKHRydWUpOyAvL3NpIHRydWUgZGlzcGFyYWl0XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvL2NoYW5nZSBsJ8OpdGF0IGRlIGVycmV1clxyXG4gICAgc2V0RXJyZXVyKGV2ZW50LnRhcmdldC5lcnJldXIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNhZHJlU29tYnJlXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9ybVRpdGxlIHRleHQtY2VudGVyXCI+U2UgQ29ubmVjdGVyPC9oMT5cclxuICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxoMz5BZHJlc3NlIE1haWw8L2gzPlxyXG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgey8qIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGgzPkFkcmVzc2UgbWFpbDwvaDM+XHJcbiAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiRW1haWxcIiBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPiAqL31cclxuICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0bkxvZ2luXCIgb25DbGljaz17bG9naW59PlxyXG4gICAgICAgICAgICAgIFNlIENvbm5lY3RcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPEFsZXJ0IGNvbG9yPVwid2FybmluZ1wiIHN0eWxlPXtlcnJldXIgPyB7IGRpc3BsYXk6IFwibm9uZVwiIH0gOiB7fX0+XHJcbiAgICAgICAgICBOb3VzIG5lIGNvbm5haXNzb25zIHBhcyBjZSBtYWlsICFcclxuICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZUNvbm5lY3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBVc2VycyBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdHBlcnNvbnM6IFtdXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRheGlvcy5nZXQoYC9hcGkvdXNlcnMvYClcblx0XHRcdC50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdGNvbnN0IHBlcnNvbnMgPSByZXMuZGF0YTtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHBlcnNvbnMgfSk7XG5cdFx0XHR9KVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dWw+XG5cdFx0XHRcdHsgdGhpcy5zdGF0ZS5wZXJzb25zLm1hcChwZXJzb24gPT4gPGxpPntwZXJzb24ucHNldWRvfTwvbGk+KX1cblx0XHRcdDwvdWw+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzOyJdLCJzb3VyY2VSb290IjoiIn0=