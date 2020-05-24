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





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_4__["default"], null)), document.getElementById('root'));

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

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-md-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cadreSombre"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "accueilTitre"
      }, "Le Jeu Dezobeyi"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "accueilContenu"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Pr\xE9sentation de l'ASBL :"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Quinoa est une ONG d'\xE9ducation \xE0 la citoyennet\xE9 mondiale et solidaire (ECMS). ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " L'ECMS est un processus qui vise \xE0 provoquer des changements de valeur et de comportement sur le plan individuel et collectif en vue d'un monde plus juste dans lequel ressources et pouvoirs sont \xE9quitablement r\xE9partis dans le respect de la dignit\xE9 humaine."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Ses actions : projets internationaux (aussi scolaires, maison de jeunes, scouts en Am\xE9rique de sud, Afrique et Asie). Projet alternative locales. Animations p\xE9dagogiques (Jeu de la ficelle, Potentia, Jeu des chaises, Dezobeyi...). Mobilisations."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Jeu Dezobeyi :"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Et toi, as-tu d\xE9j\xE0 desob\xE9i ? Face \xE0 l'intimidation, \xE0 l'injustice comment r\xE9agir ? Faut-il parfois d\xE9sob\xE9ir ? Quinoa asbl propose un outil p\xE9dagogique autour de l'action directe non-violente et de la d\xE9sob\xE9issance civile : du Nord au Sud, l'action directe non-violente est (et a toujours \xE9t\xE9) un levier de changement social. Droit de vote des femmes, abolition de la s\xE9gr\xE9gation, r\xE9cup\xE9ration de terres... : tous ont \xE9t\xE9 obtenus notamment par des actions de \"d\xE9sob\xE9issance\"."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Le jeu entend partir du v\xE9cu des participan\u2022t\u2022e\u2022s pour mieux toucher au coeur des causes qui les animent et les inspirent. L'outil se d\xE9veloppe en une ligne du temps sur laquelle le\u2022la participant\u2022e, en plusieurs phase ludiques, peut tester ses connaissances et affuter sa vision du monde en voyageant dans une \"autre\" Histoire que celle r\xE9cont\xE9e par les \"dominants\".", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "L'outil laisse aussi la place aux \xE9changes et \xE0 l'action avec des mises en situation et d\xE9bats mouvants."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Explorez les luttes (et les victoires) de ces femmes et hommes qui ont d\xE9sob\xE9i.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
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

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-md-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Nav"], {
        className: "navbar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "http://www.quinoa.be"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "logo",
        src: _img_logo_png__WEBPACK_IMPORTED_MODULE_10__["default"],
        alt: "logo Quinoa"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        className: "nav-link",
        href: "/accueil"
      }, "Accueil"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        className: "nav-link",
        href: "/quizz"
      }, "Quizz"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        className: "nav-link",
        href: "/LigneDuTemps"
      }, "LigneDuTemps"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        className: "nav-link",
        href: "/resultat"
      }, "Resultat"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        className: "nav-link",
        href: "/seconnecter"
      }, "Se connecter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["NavLink"], {
        className: "nav-link",
        href: "/inscription"
      }, "Inscription")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LogOut__WEBPACK_IMPORTED_MODULE_13__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        exact: true,
        from: "/",
        to: "/accueil"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/users",
        component: _Users__WEBPACK_IMPORTED_MODULE_3__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/posts",
        component: _Posts__WEBPACK_IMPORTED_MODULE_4__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/seconnecter",
        component: _SeConnecter__WEBPACK_IMPORTED_MODULE_7__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/inscription",
        component: _Inscription__WEBPACK_IMPORTED_MODULE_5__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/quizz",
        component: _Quizz__WEBPACK_IMPORTED_MODULE_8__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/accueil",
        component: _Accueil__WEBPACK_IMPORTED_MODULE_2__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/lignedutemps",
        component: _LigneDuTemps__WEBPACK_IMPORTED_MODULE_6__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
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

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-md-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        className: "cadreSombre",
        method: "POST"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "formTitle text-center"
      }, "Inscription"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Pseudo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "text",
        name: "pseudo",
        id: "pseudo",
        placeholder: "",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "pseudo");
        },
        required: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "erreur"
      }, this.state.pseudoErreur)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Adresse Mail"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "email",
        name: "email",
        id: "email",
        placeholder: "",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "mail");
        },
        required: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "erreur"
      }, this.state.mailErreur)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Age"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "radio"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "radioAge",
        id: "16",
        value: "16",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "age");
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "16-18")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "radio"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "radioAge",
        id: "19",
        value: "19",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "age");
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "19-21")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "radio"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "radioAge",
        id: "22",
        value: "22",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "age");
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "22-25")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "radio"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "radioAge",
        id: "26",
        value: "26",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "age");
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "26-29")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "radio"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "radioAge",
        id: "30",
        value: "30",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "mail");
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "+ 30")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "erreur"
      }, this.state.ageErreur)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Sexe"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "radio"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "sexe",
        id: "homme",
        value: "homme",
        "data-testid": "homme",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "sexe");
        }
      }), "homme")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "radio"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "sexe",
        id: "femme",
        value: "femme",
        "data-testid": "femme",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "sexe");
        }
      }), "femme")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "radio"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "sexe",
        id: "autre",
        value: "autre",
        "data-testid": "autre",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "sexe");
        }
      }), "autre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "erreur"
      }, this.state.sexeErreur)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Est-ce que vous vous consid\xE9rez comme \xABd\xE9sob\xE9issant\xBB ?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "radio"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "desobei",
        id: "oui",
        value: "oui",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "desobeissant");
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "oui")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "radio"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "desobei",
        id: "unPeu",
        value: "un peu",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "desobeissant");
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "un peu")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "radio"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "desobei",
        id: "non",
        value: "non",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "desobeissant");
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "non")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "erreur"
      }, this.state.desobeissantErreur)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        id: "tabDesobei"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "thead"
      }, "Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "thead"
      }, "D\xE9j\xE0 r\xE9alis\xE9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "thead"
      }, "Efficace")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Signer une p\xE9tition"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "petitionRealise"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "petitionEfficace"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Faire un don"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "donRealise"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "donEfficace"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Pratiquer le z\xE9ro d\xE9chet, changer mes habitudes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "ecologiqueRealise"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "ecologiqueEfficace"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "M\u2019informer \xE0 propos de l'actualit\xE9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "informerRealise"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "informerEfficace"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "M\u2019engager en politique"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "politiqueRealise"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "politiqueEfficace"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Faire la gr\xE8ve"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "greveRealise"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "greveEfficace"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Manifester"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "manifesterRealise"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "manifesterEfficace"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Faire de la d\xE9sob\xE9issance civile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "desobeissantRealise"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "radioTab"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "checkbox",
        name: "desobeissantEfficace"
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btnLogin",
        onClick: function onClick() {
          return _this2.handleSubmit();
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "S'inscrire"))))));
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

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
          className: "checkIcon",
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheck"]
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
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

      return _LDTData__WEBPACK_IMPORTED_MODULE_2__["ldtdata"].map(function (_ref) {
        var id = _ref.id,
            periode = _ref.periode,
            nom = _ref.nom,
            reponseJoueur = _ref.reponseJoueur;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, nom), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, periode), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          className: "reponseJoueur"
        }, _this2.reponse(reponseJoueur)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          color: "secondary",
          onClick: _this2.toggle
        }, "Plus d'information")));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-md-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cadreSombre"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
        modalClassName: "modal-dialog",
        isOpen: this.state.modal,
        fade: false,
        toggle: this.toggle
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalHeader"], {
        toggle: this.toggle
      }, this.state.nom), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null, "le texte"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        color: "secondary",
        onClick: this.toggle
      }, "Close"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "ldtTitre"
      }, "Vos r\xE9sultats aux questions des d\xE9sob\xE9issants"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        id: "tabDesobei"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "thead"
      }, "Nom"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "thead"
      }, "Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "thead"
      }, "R\xE9sultat"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "thead"
      }, "Infos"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, this.ligneDuTemps())))));
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var LogOut = function LogOut() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  console.log(checked); //true = déconnexion

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (checked) {
      console.log("Déconnexion"); //fonction déconnexion
    }
  }, [checked]);

  var handleChange = function handleChange(event) {
    //vérification du check
    setChecked(event.target.checked);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "LogOutContainer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "switch"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: handleChange
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "slider round"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
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

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "row-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "List of posts"), "Created with ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-heart"
      }), " by yemiwebby ")), loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'row text-center'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fa fa-spin fa-spinner fa-4x"
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'row'
      }, this.state.posts.map(function (post) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-md-10 offset-md-1 row-block",
          key: post.id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          id: "sortable"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "media"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "media-body"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, post.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, post.body))))));
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

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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
        console.log(res);
        var data = [{
          id: res.data.id,
          question: res.data.question,
          options: [res.data.reponse1, res.data.reponse2, res.data.reponse3],
          answer: res.data.reponse1
        }];
        console.log(data);

        _this.setState({
          quizzdata: data
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "nextQuestionHandler", function () {
      // console.log('test')
      var _this$state = _this.state,
          myAnswer = _this$state.myAnswer,
          answer = _this$state.answer,
          score = _this$state.score;

      if (myAnswer === answer) {
        _this.setState({
          score: score + 1
        });
      }

      _this.setState({
        currentQuestion: _this.state.currentQuestion + 1
      });

      console.log(_this.state.currentQuestion);

      _this.getQuestion();
    });

    _defineProperty(_assertThisInitialized(_this), "checkAnswer", function (answer) {
      _this.state.mesReponses.push(answer);

      _this.setState({
        disabled: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "finishHandler", function () {
      if (_this.state.currentQuestion === _this.state.quizzdata.length - 1) {
        _this.setState({
          isEnd: true
        });
      }
    });

    _this.state = {
      listQuestion: [],
      currentQuestion: 0,
      myAnswer: null,
      mesReponses: [],
      score: 1,
      disabled: true,
      isEnd: false,
      items: [],
      quizzdata: []
    };
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
          question = _this$state2.question,
          options = _this$state2.options;

      if (isEnd) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "result cadreSombre"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Game Over your Final score is ", this.state.score, " points "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The correct answer's for the questions was", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, quizzdata.map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            className: "ui floating message options",
            key: index
          }, item.answer);
        }))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "App cadreSombre"
        }, quizzdata.map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: index
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, item.question), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Questions ", 20 - currentQuestion, " sur 20 restantes "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, item.options.map(function (option) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
              key: item.id,
              className: "ui floating message options ".concat(myAnswer === option ? "selected" : null),
              onClick: function onClick() {
                return _this3.checkAnswer(option);
              }
            }, option);
          })));
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), currentQuestion < 20 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "ui inverted button",
          disabled: this.state.disabled,
          onClick: this.nextQuestionHandler
        }, "Next"), currentQuestion === 20 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-md-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cadreSombre"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "resultTitre"
      }, "Tu as fini le Quizz Dezobeyi !"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "resultatContenu"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Tu es un", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", null, "(3 types de personnes)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Tu as eu ...", this.state.nbBonneReponse, " de bonnes r\xE9ponses sur 20"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btnLigneTps",
        onClick: function onClick() {
          return _this2.handleClick("ligneTps");
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Tes r\xE9ponses")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btnQuizz",
        onClick: function onClick() {
          return _this2.handleClick("quizz");
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Refaire le quizz"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var SeConnecter = /*#__PURE__*/function (_Component) {
  _inherits(SeConnecter, _Component);

  var _super = _createSuper(SeConnecter);

  function SeConnecter() {
    _classCallCheck(this, SeConnecter);

    return _super.apply(this, arguments);
  }

  _createClass(SeConnecter, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-md-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "cadreSombre"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "formTitle text-center"
      }, "Se Connecter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Adresse Mail"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "email",
        name: "email",
        id: "email",
        placeholder: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        className: "btnLogin"
      }, "Se Connecter")))));
    }
  }]);

  return SeConnecter;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

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

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.state.persons.map(function (person) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, person.pseudo);
      }));
    }
  }]);

  return Users;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Users);

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZy9kZXpvYmV5LmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1nL2xvZ28ucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWNjdWVpbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0luc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xEVERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTGlnbmVEdVRlbXBzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ091dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Qb3N0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9RdWl6ei5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SZXN1bHRhdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9TZUNvbm5lY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Vc2Vycy5qcyJdLCJuYW1lcyI6WyJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJBY2N1ZWlsIiwiZGV6b2JleSIsIkNvbXBvbmVudCIsIkhvbWUiLCJsb2dvIiwiVXNlcnMiLCJQb3N0cyIsIlNlQ29ubmVjdGVyIiwiSW5zY3JpcHRpb24iLCJRdWl6eiIsIkxpZ25lRHVUZW1wcyIsIlJlc3VsdGF0IiwicHJvcHMiLCJzdGF0ZSIsInBzZXVkbyIsIm1haWwiLCJhZ2UiLCJzZXhlIiwiZGVzb2JlaXNzYW50IiwicHNldWRvRXJyZXVyIiwibWFpbEVycmV1ciIsImFnZUVycmV1ciIsInNleGVFcnJldXIiLCJkZXNvYmVpc3NhbnRFcnJldXIiLCJ1c2VyT2JqZWN0IiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnJvciIsIml0ZW0iLCJjaGFtcCIsIml0ZW1WYWx1ZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJpbmNsdWRlcyIsImlzVmFsaWQiLCJ2YWxpZGF0ZSIsIm9iaiIsImNvbW1lbnRhaXJlIiwid2FybiIsImhpc3RvcnkiLCJwdXNoIiwiY3JlYXRlVXNlciIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsImxkdGRhdGEiLCJwZXJpb2RlIiwibm9tIiwicmVwb25zZUpvdWV1ciIsImZpY2hlIiwibGlldSIsImx1dHRlIiwic3RyYXRlZ2llIiwiYWN0aW9uIiwidmljdG9pcmUiLCJhbm5lY2RvdGUiLCJjaXRhdGlvbiIsInF1ZXN0aW9uIiwicmVwb25zZTEiLCJyZXBvbnNlMiIsInJlcG9uc2UzIiwidmlkZW8iLCJhcnRpY2xlIiwibW9kYWwiLCJhY3RpdmVNb2RhbCIsInRvZ2dsZSIsImJpbmQiLCJwcmV2U3RhdGUiLCJyZXBvbnNlIiwiZmFDaGVjayIsImZhVGltZXMiLCJtYXAiLCJpZCIsImxpZ25lRHVUZW1wcyIsIkxvZ091dCIsInVzZVN0YXRlIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJ1c2VFZmZlY3QiLCJldmVudCIsImdldFBvc3RzIiwiZ2V0IiwicmVzIiwicG9zdHMiLCJzbGljZSIsImxvYWRpbmciLCJ0aXRsZSIsImJvZHkiLCJsaXN0UXVlc3Rpb24iLCJjdXJyZW50UXVlc3Rpb24iLCJvcHRpb25zIiwiYW5zd2VyIiwicXVpenpkYXRhIiwibXlBbnN3ZXIiLCJzY29yZSIsImdldFF1ZXN0aW9uIiwibWVzUmVwb25zZXMiLCJkaXNhYmxlZCIsImxlbmd0aCIsImlzRW5kIiwiaXRlbXMiLCJzZXRUaW1lb3V0IiwicHJldlByb3BzIiwiaW5kZXgiLCJvcHRpb24iLCJjaGVja0Fuc3dlciIsIm5leHRRdWVzdGlvbkhhbmRsZXIiLCJmaW5pc2hIYW5kbGVyIiwiUmVhY3QiLCJuYkJvbm5lUmVwb25zZSIsInBhZ2UiLCJoYW5kbGVDbGljayIsInBlcnNvbnMiLCJwZXJzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFlLG1HQUFvQyxFOzs7Ozs7Ozs7Ozs7QUNBbkQ7QUFBZSxnR0FBaUMsRTs7Ozs7Ozs7Ozs7O0FDQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsZ0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQiwyREFBQyw4REFBRCxRQUFRLDJEQUFDLHdEQUFELE9BQVIsQ0FBaEIsRUFBMkNDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUEzQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7SUFFTUMsTzs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUNQLGFBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsMkJBREYsRUFFRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLHlFQUNFLHVFQUNFLHNFQUNFLG9HQURGLENBREYsQ0FERixFQU1FLGlLQUVvQixzRUFGcEIsa1JBTkYsRUFjRSxvVUFkRixFQXFCRSx1RUFDRSxzRUFDRSx1RkFERixDQURGLENBckJGLEVBMEJFLG9tQkExQkYsRUFvQ0Usa2VBT0Usc0VBUEYsc0hBcENGLEVBOENFLDhKQTlDRixDQURGLEVBb0RFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQTRCLFdB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QUMsaURBQUQ7QUFBUSxpQkFBUyxFQUFDO0FBQWxCLHdCQURGLENBVkYsQ0FERixDQURGLENBREY7QUFvQkQ7Ozs7RUF0QnVCTCwrQzs7QUF5QlhLLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTs7SUFFTUYsSzs7Ozs7Ozs7Ozs7Ozs7Ozs0REFDRztBQUNQZ0gsYUFBTyxFQUFFO0FBREYsSzs7Ozs7Ozt3Q0FJWTtBQUFBOztBQUNuQjVGLGtEQUFLLENBQUM2RCxHQUFOLGdCQUNFM0QsSUFERixDQUNPLFVBQUE0RCxHQUFHLEVBQUk7QUFDWixZQUFNOEIsT0FBTyxHQUFHOUIsR0FBRyxDQUFDeEQsSUFBcEI7O0FBQ0EsY0FBSSxDQUFDTyxRQUFMLENBQWM7QUFBRStFLGlCQUFPLEVBQVBBO0FBQUYsU0FBZDtBQUNBLE9BSkY7QUFLQTs7OzZCQUVRO0FBQ1IsYUFDQyx1RUFDRyxLQUFLeEcsS0FBTCxDQUFXd0csT0FBWCxDQUFtQnpDLEdBQW5CLENBQXVCLFVBQUEwQyxNQUFNO0FBQUEsZUFBSSx1RUFBS0EsTUFBTSxDQUFDeEcsTUFBWixDQUFKO0FBQUEsT0FBN0IsQ0FESCxDQUREO0FBS0E7Ozs7RUFuQmtCWiwrQzs7QUFzQkxHLG9FQUFmLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQgXCIvYnVpbGQvaW1hZ2VzL2Rlem9iZXkuNjlkNGRkNzMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvYnVpbGQvaW1hZ2VzL2xvZ28uM2Y2YTliODAucG5nXCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgJy4uL2Nzcy9hcHAuY3NzJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKDxSb3V0ZXI+PEhvbWUgLz48L1JvdXRlcj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGRlem9iZXkgZnJvbSBcIi4uLy4uL2ltZy9kZXpvYmV5LmpwZ1wiO1xyXG5cclxuY2xhc3MgQWNjdWVpbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWRyZVNvbWJyZVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYWNjdWVpbFRpdHJlXCI+TGUgSmV1IERlem9iZXlpPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2N1ZWlsQ29udGVudVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgICA8dT5cclxuICAgICAgICAgICAgICAgICAgICA8Yj5QcsOpc2VudGF0aW9uIGRlIGwnQVNCTCA6PC9iPlxyXG4gICAgICAgICAgICAgICAgICA8L3U+XHJcbiAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIFF1aW5vYSBlc3QgdW5lIE9ORyBkJ8OpZHVjYXRpb24gw6AgbGEgY2l0b3llbm5ldMOpIG1vbmRpYWxlIGV0XHJcbiAgICAgICAgICAgICAgICAgIHNvbGlkYWlyZSAoRUNNUykuIDxicj48L2JyPiBMJ0VDTVMgZXN0IHVuIHByb2Nlc3N1cyBxdWkgdmlzZSDDoFxyXG4gICAgICAgICAgICAgICAgICBwcm92b3F1ZXIgZGVzIGNoYW5nZW1lbnRzIGRlIHZhbGV1ciBldCBkZSBjb21wb3J0ZW1lbnQgc3VyIGxlXHJcbiAgICAgICAgICAgICAgICAgIHBsYW4gaW5kaXZpZHVlbCBldCBjb2xsZWN0aWYgZW4gdnVlIGQndW4gbW9uZGUgcGx1cyBqdXN0ZSBkYW5zXHJcbiAgICAgICAgICAgICAgICAgIGxlcXVlbCByZXNzb3VyY2VzIGV0IHBvdXZvaXJzIHNvbnQgw6lxdWl0YWJsZW1lbnQgcsOpcGFydGlzIGRhbnNcclxuICAgICAgICAgICAgICAgICAgbGUgcmVzcGVjdCBkZSBsYSBkaWduaXTDqSBodW1haW5lLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIFNlcyBhY3Rpb25zIDogcHJvamV0cyBpbnRlcm5hdGlvbmF1eCAoYXVzc2kgc2NvbGFpcmVzLCBtYWlzb25cclxuICAgICAgICAgICAgICAgICAgZGUgamV1bmVzLCBzY291dHMgZW4gQW3DqXJpcXVlIGRlIHN1ZCwgQWZyaXF1ZSBldCBBc2llKS4gUHJvamV0XHJcbiAgICAgICAgICAgICAgICAgIGFsdGVybmF0aXZlIGxvY2FsZXMuIEFuaW1hdGlvbnMgcMOpZGFnb2dpcXVlcyAoSmV1IGRlIGxhXHJcbiAgICAgICAgICAgICAgICAgIGZpY2VsbGUsIFBvdGVudGlhLCBKZXUgZGVzIGNoYWlzZXMsIERlem9iZXlpLi4uKS5cclxuICAgICAgICAgICAgICAgICAgTW9iaWxpc2F0aW9ucy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAgPHU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGI+SmV1IERlem9iZXlpIDo8L2I+XHJcbiAgICAgICAgICAgICAgICAgIDwvdT5cclxuICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgRXQgdG9pLCBhcy10dSBkw6lqw6AgZGVzb2LDqWkgPyBGYWNlIMOgIGwnaW50aW1pZGF0aW9uLCDDoFxyXG4gICAgICAgICAgICAgICAgICBsJ2luanVzdGljZSBjb21tZW50IHLDqWFnaXIgPyBGYXV0LWlsIHBhcmZvaXMgZMOpc29iw6lpciA/IFF1aW5vYVxyXG4gICAgICAgICAgICAgICAgICBhc2JsIHByb3Bvc2UgdW4gb3V0aWwgcMOpZGFnb2dpcXVlIGF1dG91ciBkZSBsJ2FjdGlvbiBkaXJlY3RlXHJcbiAgICAgICAgICAgICAgICAgIG5vbi12aW9sZW50ZSBldCBkZSBsYSBkw6lzb2LDqWlzc2FuY2UgY2l2aWxlIDogZHUgTm9yZCBhdSBTdWQsXHJcbiAgICAgICAgICAgICAgICAgIGwnYWN0aW9uIGRpcmVjdGUgbm9uLXZpb2xlbnRlIGVzdCAoZXQgYSB0b3Vqb3VycyDDqXTDqSkgdW5cclxuICAgICAgICAgICAgICAgICAgbGV2aWVyIGRlIGNoYW5nZW1lbnQgc29jaWFsLiBEcm9pdCBkZSB2b3RlIGRlcyBmZW1tZXMsXHJcbiAgICAgICAgICAgICAgICAgIGFib2xpdGlvbiBkZSBsYSBzw6lncsOpZ2F0aW9uLCByw6ljdXDDqXJhdGlvbiBkZSB0ZXJyZXMuLi4gOiB0b3VzXHJcbiAgICAgICAgICAgICAgICAgIG9udCDDqXTDqSBvYnRlbnVzIG5vdGFtbWVudCBwYXIgZGVzIGFjdGlvbnMgZGUgXCJkw6lzb2LDqWlzc2FuY2VcIi5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBMZSBqZXUgZW50ZW5kIHBhcnRpciBkdSB2w6ljdSBkZXMgcGFydGljaXBhbuKAonTigKJl4oCicyBwb3VyIG1pZXV4XHJcbiAgICAgICAgICAgICAgICAgIHRvdWNoZXIgYXUgY29ldXIgZGVzIGNhdXNlcyBxdWkgbGVzIGFuaW1lbnQgZXQgbGVzIGluc3BpcmVudC5cclxuICAgICAgICAgICAgICAgICAgTCdvdXRpbCBzZSBkw6l2ZWxvcHBlIGVuIHVuZSBsaWduZSBkdSB0ZW1wcyBzdXIgbGFxdWVsbGUgbGXigKJsYVxyXG4gICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudOKAomUsIGVuIHBsdXNpZXVycyBwaGFzZSBsdWRpcXVlcywgcGV1dCB0ZXN0ZXIgc2VzXHJcbiAgICAgICAgICAgICAgICAgIGNvbm5haXNzYW5jZXMgZXQgYWZmdXRlciBzYSB2aXNpb24gZHUgbW9uZGUgZW4gdm95YWdlYW50IGRhbnNcclxuICAgICAgICAgICAgICAgICAgdW5lIFwiYXV0cmVcIiBIaXN0b2lyZSBxdWUgY2VsbGUgcsOpY29udMOpZSBwYXIgbGVzIFwiZG9taW5hbnRzXCIuXHJcbiAgICAgICAgICAgICAgICAgIDxicj48L2JyPkwnb3V0aWwgbGFpc3NlIGF1c3NpIGxhIHBsYWNlIGF1eCDDqWNoYW5nZXMgZXQgw6BcclxuICAgICAgICAgICAgICAgICAgbCdhY3Rpb24gYXZlYyBkZXMgbWlzZXMgZW4gc2l0dWF0aW9uIGV0IGTDqWJhdHMgbW91dmFudHMuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgRXhwbG9yZXogbGVzIGx1dHRlcyAoZXQgbGVzIHZpY3RvaXJlcykgZGUgY2VzIGZlbW1lcyBldCBob21tZXNcclxuICAgICAgICAgICAgICAgICAgcXVpIG9udCBkw6lzb2LDqWkuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nQWNjdWVpbFwiIHNyYz17ZGV6b2JleX0gYWx0PVwiaW1hZ2UgamV1XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjdWVpbDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoLCBSZWRpcmVjdCwgTGluaywgd2l0aFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBBY2N1ZWlsIGZyb20gXCIuL0FjY3VlaWxcIjtcclxuaW1wb3J0IFVzZXJzIGZyb20gXCIuL1VzZXJzXCI7XHJcbmltcG9ydCBQb3N0cyBmcm9tIFwiLi9Qb3N0c1wiO1xyXG5pbXBvcnQgSW5zY3JpcHRpb24gZnJvbSBcIi4vSW5zY3JpcHRpb25cIjtcclxuaW1wb3J0IExpZ25lRHVUZW1wcyBmcm9tIFwiLi9MaWduZUR1VGVtcHNcIjtcclxuaW1wb3J0IFNlQ29ubmVjdGVyIGZyb20gXCIuL1NlQ29ubmVjdGVyXCI7XHJcbmltcG9ydCBRdWl6eiBmcm9tIFwiLi9RdWl6elwiO1xyXG5pbXBvcnQgUmVzdWx0YXQgZnJvbSBcIi4vUmVzdWx0YXRcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSBcIi4uLy4uL2ltZy9sb2dvLnBuZ1wiO1xyXG5pbXBvcnQgeyBOYXYsIE5hdkl0ZW0sIE5hdkxpbmsgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xyXG5pbXBvcnQgTG9nT3V0IGZyb20gXCIuL0xvZ091dFwiO1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5xdWlub2EuYmVcIj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9e2xvZ299IGFsdD1cImxvZ28gUXVpbm9hXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvYWNjdWVpbFwiPlxyXG4gICAgICAgICAgICAgICAgQWNjdWVpbFxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvcXVpenpcIj5cclxuICAgICAgICAgICAgICAgIFF1aXp6XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9MaWduZUR1VGVtcHNcIj5cclxuICAgICAgICAgICAgICAgIExpZ25lRHVUZW1wc1xyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvcmVzdWx0YXRcIj5cclxuICAgICAgICAgICAgICAgIFJlc3VsdGF0XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9zZWNvbm5lY3RlclwiPlxyXG4gICAgICAgICAgICAgICAgU2UgY29ubmVjdGVyXHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9pbnNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgSW5zY3JpcHRpb25cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgPExvZ091dCAvPlxyXG4gICAgICAgICAgPC9OYXY+XHJcblxyXG4gICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgPFJlZGlyZWN0IGV4YWN0IGZyb209XCIvXCIgdG89XCIvYWNjdWVpbFwiIC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3VzZXJzXCIgY29tcG9uZW50PXtVc2Vyc30gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcG9zdHNcIiBjb21wb25lbnQ9e1Bvc3RzfSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zZWNvbm5lY3RlclwiIGNvbXBvbmVudD17U2VDb25uZWN0ZXJ9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2luc2NyaXB0aW9uXCIgY29tcG9uZW50PXtJbnNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcXVpenpcIiBjb21wb25lbnQ9e1F1aXp6fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hY2N1ZWlsXCIgY29tcG9uZW50PXtBY2N1ZWlsfSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9saWduZWR1dGVtcHNcIiBjb21wb25lbnQ9e0xpZ25lRHVUZW1wc30gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVzdWx0YXRcIiBjb21wb25lbnQ9e1Jlc3VsdGF0fSAvPlxyXG4gICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsIi8vIG5vcHJvdGVjdFxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgRm9ybUdyb3VwLCBMYWJlbCwgSW5wdXQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jbGFzcyBJbnNjcmlwdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHBzZXVkbzogXCJcIixcclxuICAgICAgbWFpbDogXCJcIixcclxuICAgICAgYWdlOiBcIlwiLFxyXG4gICAgICBzZXhlOiBcIlwiLFxyXG4gICAgICBkZXNvYmVpc3NhbnQ6IFwiXCIsXHJcbiAgICAgIHBzZXVkb0VycmV1cjogXCJcIixcclxuICAgICAgbWFpbEVycmV1cjogXCJcIixcclxuICAgICAgYWdlRXJyZXVyOiBcIlwiLFxyXG4gICAgICBzZXhlRXJyZXVyOiBcIlwiLFxyXG4gICAgICBkZXNvYmVpc3NhbnRFcnJldXI6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVXNlcigpIHtcclxuICAgIGNvbnN0IHVzZXJPYmplY3QgPSB7XHJcbiAgICAgIHBzZXVkbzogdGhpcy5zdGF0ZS5wc2V1ZG8sXHJcbiAgICAgIG1haWw6IHRoaXMuc3RhdGUubWFpbCxcclxuICAgICAgYWdlOiB0aGlzLnN0YXRlLmFnZSxcclxuICAgICAgc2V4ZTogdGhpcy5zdGF0ZS5zZXhlLFxyXG4gICAgICBkZXNvYmVpc3NhbnQ6IHRoaXMuc3RhdGUuZGVzb2JlaXNzYW50LFxyXG4gICAgfTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9hZGQvXCIsIHVzZXJPYmplY3QpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZShpdGVtLCBjaGFtcCkge1xyXG4gICAgbGV0IGl0ZW1WYWx1ZSA9IGl0ZW0udGFyZ2V0LnZhbHVlO1xyXG4gICAgc3dpdGNoIChjaGFtcCkge1xyXG4gICAgICBjYXNlIFwicHNldWRvXCI6IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHNldWRvOiBpdGVtVmFsdWUgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcIm1haWxcIjoge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYWlsOiBpdGVtVmFsdWUgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcImFnZVwiOiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFnZTogaXRlbVZhbHVlIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJzZXhlXCI6IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2V4ZTogaXRlbVZhbHVlIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJkZXNvYmVpc3NhbnRcIjoge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXNvYmVpc3NhbnQ6IGl0ZW1WYWx1ZSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGUoKSB7XHJcbiAgICBsZXQgcHNldWRvRXJyZXVyID0gXCJcIjtcclxuICAgIGxldCBtYWlsRXJyZXVyID0gXCJcIjtcclxuICAgIGxldCBhZ2VFcnJldXIgPSBcIlwiO1xyXG4gICAgbGV0IHNleGVFcnJldXIgPSBcIlwiO1xyXG4gICAgbGV0IGRlc29iZWlzc2FudEVycmV1ciA9IFwiXCI7XHJcblxyXG4gICAgaWYgKCF0aGlzLnN0YXRlLnBzZXVkbykge1xyXG4gICAgICBwc2V1ZG9FcnJldXIgPSBcImxlIGNoYW1wIGRvaXQgw6p0cmUgcmVtcGxpXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnN0YXRlLm1haWwuaW5jbHVkZXMoXCJAXCIpKSB7XHJcbiAgICAgIG1haWxFcnJldXIgPSBcImwnZW1haWwgZXN0IGludmFsaWRlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmFnZSkge1xyXG4gICAgICBhZ2VFcnJldXIgPSBcImxlIGNoYW1wIGRvaXQgw6p0cmUgcmVtcGxpXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnN0YXRlLnNleGUpIHtcclxuICAgICAgc2V4ZUVycmV1ciA9IFwibGUgY2hhbXAgZG9pdCDDqnRyZSByZW1wbGlcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuZGVzb2JlaXNzYW50KSB7XHJcbiAgICAgIGRlc29iZWlzc2FudEVycmV1ciA9IFwibGUgY2hhbXAgZG9pdCDDqnRyZSByZW1wbGlcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIG1haWxFcnJldXIgfHxcclxuICAgICAgcHNldWRvRXJyZXVyIHx8XHJcbiAgICAgIGFnZUVycmV1ciB8fFxyXG4gICAgICBzZXhlRXJyZXVyIHx8XHJcbiAgICAgIGRlc29iZWlzc2FudEVycmV1clxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG1haWxFcnJldXIsXHJcbiAgICAgICAgcHNldWRvRXJyZXVyLFxyXG4gICAgICAgIGFnZUVycmV1cixcclxuICAgICAgICBzZXhlRXJyZXVyLFxyXG4gICAgICAgIGRlc29iZWlzc2FudEVycmV1cixcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Ym1pdCgpIHtcclxuICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICBsZXQgb2JqID0ge307XHJcbiAgICBvYmoucHNldWRvID0gdGhpcy5zdGF0ZS5wc2V1ZG87XHJcbiAgICBvYmoubWFpbCA9IHRoaXMuc3RhdGUubWFpbDtcclxuICAgIG9iai5hZ2UgPSB0aGlzLnN0YXRlLmFnZTtcclxuICAgIG9iai5zZXhlID0gdGhpcy5zdGF0ZS5zZXhlO1xyXG4gICAgb2JqLmRlc29iZWlzc2FudCA9IHRoaXMuc3RhdGUuZGVzb2JlaXNzYW50O1xyXG4gICAgb2JqLmNvbW1lbnRhaXJlID0gdGhpcy5zdGF0ZS5jb21tZW50YWlyZTtcclxuXHJcbiAgICBpZiAoaXNWYWxpZCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJkb25uw6llcyBlbnZvecOpZXNcIiwgb2JqKTtcclxuICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvcXVpenpcIik7XHJcbiAgICAgIHRoaXMuY3JlYXRlVXNlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxyXG4gICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiY2FkcmVTb21icmVcIiBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb3JtVGl0bGUgdGV4dC1jZW50ZXJcIj5JbnNjcmlwdGlvbjwvaDE+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGgzPlBzZXVkbzwvaDM+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicHNldWRvXCJcclxuICAgICAgICAgICAgICAgIGlkPVwicHNldWRvXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJwc2V1ZG9cIil9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJldXJcIj57dGhpcy5zdGF0ZS5wc2V1ZG9FcnJldXJ9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8aDM+QWRyZXNzZSBNYWlsPC9oMz5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwibWFpbFwiKX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycmV1clwiPnt0aGlzLnN0YXRlLm1haWxFcnJldXJ9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxoMz5BZ2U8L2gzPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9BZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJhZ2VcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPjE2LTE4PC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvQWdlXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIxOVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMTlcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwiYWdlXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD4xOS0yMTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0FnZVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiMjJcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIjIyXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcImFnZVwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+MjItMjU8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9BZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIjI2XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIyNlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJhZ2VcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPjI2LTI5PC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvQWdlXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwibWFpbFwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+KyAzMDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJldXJcIj57dGhpcy5zdGF0ZS5hZ2VFcnJldXJ9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxoMz5TZXhlPC9oMz5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNleGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaG9tbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiaG9tbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiaG9tbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJzZXhlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICBob21tZVxyXG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNleGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmVtbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZmVtbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiZmVtbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJzZXhlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICBmZW1tZVxyXG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNleGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiYXV0cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiYXV0cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiYXV0cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJzZXhlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICBhdXRyZVxyXG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycmV1clwiPnt0aGlzLnN0YXRlLnNleGVFcnJldXJ9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxoMz5Fc3QtY2UgcXVlIHZvdXMgdm91cyBjb25zaWTDqXJleiBjb21tZSDCq2TDqXNvYsOpaXNzYW50wrsgPzwvaDM+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNvYmVpXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJvdWlcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIm91aVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJkZXNvYmVpc3NhbnRcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPm91aTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNvYmVpXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJ1blBldVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwidW4gcGV1XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcImRlc29iZWlzc2FudFwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+dW4gcGV1PC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc29iZWlcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIm5vblwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwibm9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcImRlc29iZWlzc2FudFwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+bm9uPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycmV1clwiPnt0aGlzLnN0YXRlLmRlc29iZWlzc2FudEVycmV1cn08L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPHRhYmxlIGlkPVwidGFiRGVzb2JlaVwiPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRoZWFkXCI+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGhlYWRcIj5Ew6lqw6AgcsOpYWxpc8OpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGhlYWRcIj5FZmZpY2FjZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+U2lnbmVyIHVuZSBww6l0aXRpb248L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwZXRpdGlvblJlYWxpc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInBldGl0aW9uRWZmaWNhY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+RmFpcmUgdW4gZG9uPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZG9uUmVhbGlzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZG9uRWZmaWNhY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+UHJhdGlxdWVyIGxlIHrDqXJvIGTDqWNoZXQsIGNoYW5nZXIgbWVzIGhhYml0dWRlczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImVjb2xvZ2lxdWVSZWFsaXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJlY29sb2dpcXVlRWZmaWNhY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+TeKAmWluZm9ybWVyIMOgIHByb3BvcyBkZSBsJ2FjdHVhbGl0w6k8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJpbmZvcm1lclJlYWxpc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImluZm9ybWVyRWZmaWNhY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+TeKAmWVuZ2FnZXIgZW4gcG9saXRpcXVlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicG9saXRpcXVlUmVhbGlzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicG9saXRpcXVlRWZmaWNhY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+RmFpcmUgbGEgZ3LDqHZlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZ3JldmVSZWFsaXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJncmV2ZUVmZmljYWNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPk1hbmlmZXN0ZXI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJtYW5pZmVzdGVyUmVhbGlzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwibWFuaWZlc3RlckVmZmljYWNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPkZhaXJlIGRlIGxhIGTDqXNvYsOpaXNzYW5jZSBjaXZpbGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJkZXNvYmVpc3NhbnRSZWFsaXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJkZXNvYmVpc3NhbnRFZmZpY2FjZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0bkxvZ2luXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoKX0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+UydpbnNjcmlyZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnNjcmlwdGlvbjtcclxuIiwiZXhwb3J0IGNvbnN0IGxkdGRhdGEgPSBbXHJcbiAge1xyXG4gICAgcGVyaW9kZTogMTkzMCxcclxuICAgIG5vbTogYCBHYW5kaGlgLFxyXG4gICAgcmVwb25zZUpvdWV1cjogMSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBlcmlvZGU6IDE5NjAsXHJcbiAgICBub206IGAgQXltZXJpY2AsXHJcbiAgICByZXBvbnNlSm91ZXVyOiAyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGVyaW9kZTogMTQ5MCxcclxuICAgIG5vbTogYCBTZWJgLFxyXG4gICAgcmVwb25zZUpvdWV1cjogMyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBlcmlvZGU6IDE5MzAsXHJcbiAgICBub206IGAgSHVtYmVyYCxcclxuICAgIHJlcG9uc2VKb3VldXI6IDEsXHJcbiAgfSxcclxuXTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGxkdGRhdGEgfSBmcm9tIFwiLi9MRFREYXRhXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IHsgZmFDaGVjaywgZmFUaW1lcyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5cclxuY2xhc3MgTGlnbmVEdVRlbXBzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGZpY2hlOiBbXHJcbiAgICAgICAgeyBub206IFwiXCIgfSxcclxuICAgICAgICB7IHBlcmlvZGU6IFwiXCIgfSxcclxuICAgICAgICB7IGxpZXU6IFwiXCIgfSxcclxuICAgICAgICB7IGx1dHRlOiBcIlwiIH0sXHJcbiAgICAgICAgeyBzdHJhdGVnaWU6IFwiXCIgfSxcclxuICAgICAgICB7IGFjdGlvbjogXCJcIiB9LFxyXG4gICAgICAgIHsgdmljdG9pcmU6IFwiXCIgfSxcclxuICAgICAgICB7IGFubmVjZG90ZTogXCJcIiB9LFxyXG4gICAgICAgIHsgY2l0YXRpb246IFwiXCIgfSxcclxuICAgICAgICB7IHF1ZXN0aW9uOiBcIlwiIH0sXHJcbiAgICAgICAgeyByZXBvbnNlMTogXCJcIiB9LFxyXG4gICAgICAgIHsgcmVwb25zZTI6IFwiXCIgfSxcclxuICAgICAgICB7IHJlcG9uc2UzOiBcIlwiIH0sXHJcbiAgICAgICAgeyB2aWRlbzogXCJcIiB9LFxyXG4gICAgICAgIHsgYXJ0aWNsZTogXCJcIiB9LFxyXG4gICAgICAgIHsgcmVwb25zZUpvdWV1cjogXCJcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgICBtb2RhbDogZmFsc2UsXHJcbiAgICAgIGFjdGl2ZU1vZGFsOiBudWxsLFxyXG4gICAgfTtcclxuICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZSgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcclxuICAgICAgbW9kYWw6ICFwcmV2U3RhdGUubW9kYWwsXHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICByZXBvbnNlKHJlcG9uc2UpIHtcclxuICAgIGlmIChyZXBvbnNlID09PSAxKSB7XHJcbiAgICAgIHJldHVybiA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cImNoZWNrSWNvblwiIGljb249e2ZhQ2hlY2t9IC8+O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPVwiZmFsc2VJY29uXCIgaWNvbj17ZmFUaW1lc30gLz47XHJcbiAgfVxyXG5cclxuICAvLyBjaGFuZ2VWYXJpYWJsZShwZXJpb2Rlcywgbm9tcywgcmVwb25zZUpvdWV1cnMpIHtcclxuICAvLyAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gIC8vICAgICBwZXJpb2RlOiBwZXJpb2Rlcy52YWx1ZSxcclxuICAvLyAgICAgbm9tOiBub21zLnZhbHVlLFxyXG4gIC8vICAgICByZXBvbnNlSm91ZXVyOiByZXBvbnNlSm91ZXVycy52YWx1ZSxcclxuICAvLyAgIH0pO1xyXG4gIC8vIH1cclxuXHJcbiAgbGlnbmVEdVRlbXBzKCkge1xyXG4gICAgcmV0dXJuIGxkdGRhdGEubWFwKCh7IGlkLCBwZXJpb2RlLCBub20sIHJlcG9uc2VKb3VldXIgfSkgPT4gKFxyXG4gICAgICA8dHIga2V5PXtpZH0+XHJcbiAgICAgICAgPHRkPntub219PC90ZD5cclxuICAgICAgICA8dGQ+e3BlcmlvZGV9PC90ZD5cclxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmVwb25zZUpvdWV1clwiPnt0aGlzLnJlcG9uc2UocmVwb25zZUpvdWV1cil9PC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy50b2dnbGV9PlxyXG4gICAgICAgICAgICBQbHVzIGQnaW5mb3JtYXRpb25cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICApKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FkcmVTb21icmVcIj5cclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgbW9kYWxDbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIlxyXG4gICAgICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5tb2RhbH1cclxuICAgICAgICAgICAgICBmYWRlPXtmYWxzZX1cclxuICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMudG9nZ2xlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZT17dGhpcy50b2dnbGV9Pnt0aGlzLnN0YXRlLm5vbX08L01vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxNb2RhbEJvZHk+bGUgdGV4dGU8L01vZGFsQm9keT5cclxuICAgICAgICAgICAgICA8TW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy50b2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxkdFRpdHJlXCI+XHJcbiAgICAgICAgICAgICAgVm9zIHLDqXN1bHRhdHMgYXV4IHF1ZXN0aW9ucyBkZXMgZMOpc29iw6lpc3NhbnRzXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDx0YWJsZSBpZD1cInRhYkRlc29iZWlcIj5cclxuICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0aGVhZFwiPk5vbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0aGVhZFwiPkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGhlYWRcIj5Sw6lzdWx0YXQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGhlYWRcIj5JbmZvczwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRib2R5Pnt0aGlzLmxpZ25lRHVUZW1wcygpfTwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlnbmVEdVRlbXBzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTG9nT3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc29sZS5sb2coY2hlY2tlZCk7IC8vdHJ1ZSA9IGTDqWNvbm5leGlvblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJEw6ljb25uZXhpb25cIik7XHJcbiAgICAgIC8vZm9uY3Rpb24gZMOpY29ubmV4aW9uXHJcbiAgICB9XHJcbiAgfSwgW2NoZWNrZWRdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvL3bDqXJpZmljYXRpb24gZHUgY2hlY2tcclxuICAgIHNldENoZWNrZWQoZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkxvZ091dENvbnRhaW5lclwiPlxyXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3dpdGNoXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e2NoZWNrZWR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJldGF0Q29ubmV4aW9uXCI+w6l0YXQgZGUgY29ubmV4aW9uPC9sYWJlbD5cclxuICAgICAgPC9sYWJlbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dPdXQ7XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuXG5jbGFzcyBQb3N0cyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5nZXRQb3N0cygpO1xuICAgIH1cblxuICAgIGdldFBvc3RzKCkge1xuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy9gKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3N0cyA9IHJlcy5kYXRhLnNsaWNlKDAsMTUpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvc3RzLCBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbG9hZGluZyA9IHRoaXMuc3RhdGUubG9hZGluZztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyb3ctc2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj48c3Bhbj5MaXN0IG9mIHBvc3RzPC9zcGFuPkNyZWF0ZWQgd2l0aCA8aVxuICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1oZWFydFwiPjwvaT4gYnkgeWVtaXdlYmJ5IDwvaDI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydyb3cgdGV4dC1jZW50ZXInfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLXNwaW4gZmEtc3Bpbm5lciBmYS00eFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncm93J30+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5wb3N0cy5tYXAocG9zdCA9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMCBvZmZzZXQtbWQtMSByb3ctYmxvY2tcIiBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICAgIDx1bCBpZD1cInNvcnRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDQ+e3Bvc3QudGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICA8cD57cG9zdC5ib2R5fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RzOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY2xhc3MgUXVpenogZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0bGlzdFF1ZXN0aW9uOiBbXSxcclxuXHRcdFx0Y3VycmVudFF1ZXN0aW9uOiAwLFxyXG5cdFx0XHRteUFuc3dlcjogbnVsbCxcclxuXHRcdFx0bWVzUmVwb25zZXM6IFtdLFxyXG5cdFx0XHRzY29yZTogMSxcclxuXHRcdFx0ZGlzYWJsZWQ6IHRydWUsXHJcblx0XHRcdGlzRW5kOiBmYWxzZSxcclxuXHRcdFx0aXRlbXM6IFtdLFxyXG5cdFx0XHRxdWl6emRhdGE6IFtdLFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0YXhpb3MuZ2V0KGAvYXBpL3N0YXJ0UXVpenovYClcclxuXHRcdFx0LnRoZW4oKHJlcykgPT57XHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7bGlzdFF1ZXN0aW9uOiByZXMuZGF0YX0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmdldFF1ZXN0aW9uKCk7XHJcblx0XHR9LCAxNTAwKTtcclxuXHJcblx0fVxyXG5cclxuXHRnZXRRdWVzdGlvbiA9ICgpID0+IHtcclxuXHRcdGxldCBldmVudCA9IHRoaXMuc3RhdGUubGlzdFF1ZXN0aW9uW3RoaXMuc3RhdGUuY3VycmVudFF1ZXN0aW9uXTtcclxuXHRcdGF4aW9zLmdldChgL2FwaS9xdWl6ei8ke2V2ZW50fWApXHJcblx0XHRcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdGxldCBkYXRhID0gW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpZDogcmVzLmRhdGEuaWQsXHJcblx0XHRcdFx0XHRcdHF1ZXN0aW9uOiByZXMuZGF0YS5xdWVzdGlvbixcclxuXHRcdFx0XHRcdFx0b3B0aW9uczogW1xyXG5cdFx0XHRcdFx0XHRcdHJlcy5kYXRhLnJlcG9uc2UxLFxyXG5cdFx0XHRcdFx0XHRcdHJlcy5kYXRhLnJlcG9uc2UyLFxyXG5cdFx0XHRcdFx0XHRcdHJlcy5kYXRhLnJlcG9uc2UzLFxyXG5cdFx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdFx0XHRhbnN3ZXI6IHJlcy5kYXRhLnJlcG9uc2UxLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRdO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe3F1aXp6ZGF0YTogZGF0YX0pO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG5leHRRdWVzdGlvbkhhbmRsZXIgPSAoKSA9PiB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygndGVzdCcpXHJcblx0XHRjb25zdCB7IG15QW5zd2VyLCBhbnN3ZXIsIHNjb3JlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuXHRcdGlmIChteUFuc3dlciA9PT0gYW5zd2VyKSB7XHJcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdHNjb3JlOiBzY29yZSArIDEsXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRjdXJyZW50UXVlc3Rpb246IHRoaXMuc3RhdGUuY3VycmVudFF1ZXN0aW9uICsgMSxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb24pO1xyXG5cdFx0dGhpcy5nZXRRdWVzdGlvbigpO1xyXG5cdH07XHJcblxyXG5cdGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xyXG5cdFx0aWYgKHRoaXMuc3RhdGUuY3VycmVudFF1ZXN0aW9uICE9PSBwcmV2U3RhdGUuY3VycmVudFF1ZXN0aW9uKSB7XHJcblx0XHRcdHRoaXMuZ2V0UXVlc3Rpb24oKTtcclxuXHRcdH1cclxuXHR9XHJcblx0Ly9jaGVjayBhbnN3ZXJcclxuXHRjaGVja0Fuc3dlciA9IChhbnN3ZXIpID0+IHtcclxuXHRcdHRoaXMuc3RhdGUubWVzUmVwb25zZXMucHVzaChhbnN3ZXIpO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7ZGlzYWJsZWQ6IGZhbHNlfSk7XHJcblx0fTtcclxuXHJcblx0ZmluaXNoSGFuZGxlciA9ICgpID0+IHtcclxuXHRcdGlmICh0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbiA9PT0gdGhpcy5zdGF0ZS5xdWl6emRhdGEubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRpc0VuZDogdHJ1ZSxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IG15QW5zd2VyLCBjdXJyZW50UXVlc3Rpb24sIGlzRW5kLCBxdWl6emRhdGEsIHF1ZXN0aW9uLCBvcHRpb25zfSA9IHRoaXMuc3RhdGU7XHJcblxyXG5cdFx0aWYgKGlzRW5kKSB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZXN1bHQgY2FkcmVTb21icmVcIj5cclxuXHRcdFx0XHRcdDxoMz5HYW1lIE92ZXIgeW91ciBGaW5hbCBzY29yZSBpcyB7dGhpcy5zdGF0ZS5zY29yZX0gcG9pbnRzIDwvaDM+XHJcblx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0VGhlIGNvcnJlY3QgYW5zd2VyJ3MgZm9yIHRoZSBxdWVzdGlvbnMgd2FzXHJcblx0XHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0XHR7cXVpenpkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJ1aSBmbG9hdGluZyBtZXNzYWdlIG9wdGlvbnNcIiBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW0uYW5zd2VyfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJBcHAgY2FkcmVTb21icmVcIj5cclxuXHRcdFx0XHRcdHtxdWl6emRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdFx0XHRcdDxoMj57aXRlbS5xdWVzdGlvbn08L2gyPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPlF1ZXN0aW9ucyB7MjAgLSBjdXJyZW50UXVlc3Rpb259IHN1ciAyMCByZXN0YW50ZXMgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHR7aXRlbS5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpdGVtLmlkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YHVpIGZsb2F0aW5nIG1lc3NhZ2Ugb3B0aW9ucyAke1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bXlBbnN3ZXIgPT09IG9wdGlvbiA/IFwic2VsZWN0ZWRcIiA6IG51bGxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB0aGlzLmNoZWNrQW5zd2VyKG9wdGlvbil9XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7b3B0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHR7Y3VycmVudFF1ZXN0aW9uIDwgMjAgJiYgKFxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlZH1cclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLm5leHRRdWVzdGlvbkhhbmRsZXJ9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHROZXh0XHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdHsvKiAvL2FkZGluZyBhIGZpbmlzaCBidXR0b24gKi99XHJcblx0XHRcdFx0XHR7Y3VycmVudFF1ZXN0aW9uID09PSAyMCAmJiAoXHJcblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgYnV0dG9uXCIgb25DbGljaz17dGhpcy5maW5pc2hIYW5kbGVyfT5cclxuXHRcdFx0XHRcdFx0XHRGaW5pc2hcclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVpeno7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybUdyb3VwIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuY2xhc3MgUmVzdWx0YXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmJCb25uZVJlcG9uc2U6IFwiXCIsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKHBhZ2UpIHtcbiAgICBzd2l0Y2ggKHBhZ2UpIHtcbiAgICAgIGNhc2UgXCJxdWl6elwiOiB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL3F1aXp6XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJsaWduZVRwc1wiOiB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL2xpZ25lZHV0ZW1wc1wiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhZHJlU29tYnJlXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicmVzdWx0VGl0cmVcIj5UdSBhcyBmaW5pIGxlIFF1aXp6IERlem9iZXlpICE8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRhdENvbnRlbnVcIj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgVHUgZXMgdW57XCIgXCJ9XG4gICAgICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgICAgICA8dT4oMyB0eXBlcyBkZSBwZXJzb25uZXMpPC91PlxuICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBUdSBhcyBldSAuLi57dGhpcy5zdGF0ZS5uYkJvbm5lUmVwb25zZX0gZGUgYm9ubmVzIHLDqXBvbnNlcyBzdXJcbiAgICAgICAgICAgICAgICAyMFxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bkxpZ25lVHBzXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soXCJsaWduZVRwc1wiKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+VGVzIHLDqXBvbnNlczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuUXVpenpcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljayhcInF1aXp6XCIpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5SZWZhaXJlIGxlIHF1aXp6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5xdWlub2EuYmVcIj5cbiAgICAgICAgICAgICAgICAgIFMnaW5zY2lyZSDDoCBsYSBuZXdzbGV0dGVyIGRlIFF1aW5vYVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRhdDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybUdyb3VwLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmNsYXNzIFNlQ29ubmVjdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNhZHJlU29tYnJlXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9ybVRpdGxlIHRleHQtY2VudGVyXCI+U2UgQ29ubmVjdGVyPC9oMT5cbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxoMz5BZHJlc3NlIE1haWw8L2gzPlxuICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiXCIgLz5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgey8qIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxoMz5BZHJlc3NlIG1haWw8L2gzPlxuICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJFbWFpbFwiIHBsYWNlaG9sZGVyPVwiXCIgLz5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPiAqL31cbiAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0bkxvZ2luXCI+U2UgQ29ubmVjdGVyPC9CdXR0b24+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZUNvbm5lY3RlcjtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgVXNlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHRwZXJzb25zOiBbXVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0YXhpb3MuZ2V0KGAvYXBpL3VzZXJzL2ApXG5cdFx0XHQudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRjb25zdCBwZXJzb25zID0gcmVzLmRhdGE7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBwZXJzb25zIH0pO1xuXHRcdFx0fSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHVsPlxuXHRcdFx0XHR7IHRoaXMuc3RhdGUucGVyc29ucy5tYXAocGVyc29uID0+IDxsaT57cGVyc29uLnBzZXVkb308L2xpPil9XG5cdFx0XHQ8L3VsPlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyczsiXSwic291cmNlUm9vdCI6IiJ9