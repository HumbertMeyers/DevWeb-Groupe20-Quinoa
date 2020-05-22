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
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "../../node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_12__);
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
      }, "Inscription"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
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
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "erreur"
      }, this.state.pseudoErreur)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Adresse Mail"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "email",
        name: "email",
        id: "email",
        placeholder: "",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "mail");
        }
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
      }, this.state.nom), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null, "Texte"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalFooter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
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

    _defineProperty(_assertThisInitialized(_this), "loadquizzdata", function () {
      var quizzdata = [{
        id: _this.state.id,
        question: _this.state.question,
        options: [_this.state.reponse1, _this.state.reponse2, _this.state.reponse3],
        answer: _this.state.reponse1
      }];

      _this.setState(function () {
        return {
          questions: quizzdata[_this.state.currentQuestion].question,
          answer: quizzdata[_this.state.currentQuestion].answer,
          options: quizzdata[_this.state.currentQuestion].options
        };
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
    });

    _defineProperty(_assertThisInitialized(_this), "checkAnswer", function (answer) {
      _this.setState({
        myAnswer: answer,
        disabled: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "finishHandler", function () {
      if (_this.state.currentQuestion === quizzdata.length - 1) {
        _this.setState({
          isEnd: true
        });
      }
    });

    _this.state = {
      currentQuestion: 0,
      myAnswer: null,
      options: [],
      score: 1,
      disabled: true,
      isEnd: false,
      items: [],
      quizzdata: [],
      id: "",
      question: "",
      reponse1: "",
      reponse2: "",
      reponse3: ""
    };
    return _this;
  }

  _createClass(Quizz, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/quizz/").then(function (res) {
        _this2.loadquizzdata(res);
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this3 = this;

      if (this.state.currentQuestion !== prevState.currentQuestion) {
        this.setState(function () {
          return {
            disabled: true,
            questions: quizzdata[_this3.state.currentQuestion].question,
            options: quizzdata[_this3.state.currentQuestion].options,
            answer: quizzdata[_this3.state.currentQuestion].answer
          };
        });
      }
    } //check answer

  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state2 = this.state,
          options = _this$state2.options,
          myAnswer = _this$state2.myAnswer,
          currentQuestion = _this$state2.currentQuestion,
          isEnd = _this$state2.isEnd,
          quizzdata = _this$state2.quizzdata;

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
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, this.state.questions, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Questions ".concat(currentQuestion, "  out of 20 remaining ")), options.map(function (option) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            key: option.id,
            className: "ui floating message options ".concat(myAnswer === option ? "selected" : null),
            onClick: function onClick() {
              return _this4.checkAnswer(option);
            }
          }, option);
        }), currentQuestion < 20 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZy9kZXpvYmV5LmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1nL2xvZ28ucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWNjdWVpbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0luc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xEVERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTGlnbmVEdVRlbXBzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Bvc3RzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1F1aXp6LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jlc3VsdGF0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NlQ29ubmVjdGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VzZXJzLmpzIl0sIm5hbWVzIjpbIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFjY3VlaWwiLCJkZXpvYmV5IiwiQ29tcG9uZW50IiwiSG9tZSIsImxvZ28iLCJVc2VycyIsIlBvc3RzIiwiU2VDb25uZWN0ZXIiLCJJbnNjcmlwdGlvbiIsIlF1aXp6IiwiTGlnbmVEdVRlbXBzIiwiUmVzdWx0YXQiLCJwcm9wcyIsInN0YXRlIiwicHNldWRvIiwibWFpbCIsImFnZSIsInNleGUiLCJkZXNvYmVpc3NhbnQiLCJwc2V1ZG9FcnJldXIiLCJtYWlsRXJyZXVyIiwiYWdlRXJyZXVyIiwic2V4ZUVycmV1ciIsImRlc29iZWlzc2FudEVycmV1ciIsInVzZXJPYmplY3QiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yIiwiaXRlbSIsImNoYW1wIiwiaXRlbVZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsImluY2x1ZGVzIiwiaXNWYWxpZCIsInZhbGlkYXRlIiwib2JqIiwiY29tbWVudGFpcmUiLCJ3YXJuIiwiaGlzdG9yeSIsInB1c2giLCJjcmVhdGVVc2VyIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwibGR0ZGF0YSIsInBlcmlvZGUiLCJub20iLCJyZXBvbnNlSm91ZXVyIiwiZmljaGUiLCJsaWV1IiwibHV0dGUiLCJzdHJhdGVnaWUiLCJhY3Rpb24iLCJ2aWN0b2lyZSIsImFubmVjZG90ZSIsImNpdGF0aW9uIiwicXVlc3Rpb24iLCJyZXBvbnNlMSIsInJlcG9uc2UyIiwicmVwb25zZTMiLCJ2aWRlbyIsImFydGljbGUiLCJtb2RhbCIsImFjdGl2ZU1vZGFsIiwidG9nZ2xlIiwiYmluZCIsInByZXZTdGF0ZSIsInJlcG9uc2UiLCJmYUNoZWNrIiwiZmFUaW1lcyIsIm1hcCIsImlkIiwibGlnbmVEdVRlbXBzIiwiZ2V0UG9zdHMiLCJnZXQiLCJyZXMiLCJwb3N0cyIsInNsaWNlIiwibG9hZGluZyIsInRpdGxlIiwiYm9keSIsInF1aXp6ZGF0YSIsIm9wdGlvbnMiLCJhbnN3ZXIiLCJxdWVzdGlvbnMiLCJjdXJyZW50UXVlc3Rpb24iLCJteUFuc3dlciIsInNjb3JlIiwiZGlzYWJsZWQiLCJsZW5ndGgiLCJpc0VuZCIsIml0ZW1zIiwibG9hZHF1aXp6ZGF0YSIsInByZXZQcm9wcyIsImluZGV4Iiwib3B0aW9uIiwiY2hlY2tBbnN3ZXIiLCJuZXh0UXVlc3Rpb25IYW5kbGVyIiwiZmluaXNoSGFuZGxlciIsIlJlYWN0IiwibmJCb25uZVJlcG9uc2UiLCJwYWdl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QUFEO0FBQVEsaUJBQVMsRUFBQztBQUFsQix3QkFERixDQVZGLENBREYsQ0FERixDQURGO0FBb0JEOzs7O0VBdEJ1QkwsK0M7O0FBeUJYSywwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7O0lBRU1GLEs7Ozs7Ozs7Ozs7Ozs7Ozs7NERBQ0c7QUFDUHdHLGFBQU8sRUFBRTtBQURGLEs7Ozs7Ozs7d0NBSVk7QUFBQTs7QUFDbkJwRixrREFBSyxDQUFDdUQsR0FBTixnQkFDRXJELElBREYsQ0FDTyxVQUFBc0QsR0FBRyxFQUFJO0FBQ1osWUFBTTRCLE9BQU8sR0FBRzVCLEdBQUcsQ0FBQ2xELElBQXBCOztBQUNBLGNBQUksQ0FBQ08sUUFBTCxDQUFjO0FBQUV1RSxpQkFBTyxFQUFQQTtBQUFGLFNBQWQ7QUFDQSxPQUpGO0FBS0E7Ozs2QkFFUTtBQUNSLGFBQ0MsdUVBQ0csS0FBS2hHLEtBQUwsQ0FBV2dHLE9BQVgsQ0FBbUJqQyxHQUFuQixDQUF1QixVQUFBa0MsTUFBTTtBQUFBLGVBQUksdUVBQUtBLE1BQU0sQ0FBQ2hHLE1BQVosQ0FBSjtBQUFBLE9BQTdCLENBREgsQ0FERDtBQUtBOzs7O0VBbkJrQlosK0M7O0FBc0JMRyxvRUFBZixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBkZWZhdWx0IFwiL2J1aWxkL2ltYWdlcy9kZXpvYmV5LjY5ZDRkZDczLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL2J1aWxkL2ltYWdlcy9sb2dvLjNmNmE5YjgwLnBuZ1wiOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0ICcuLi9jc3MvYXBwLmNzcyc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5cblJlYWN0RE9NLnJlbmRlcig8Um91dGVyPjxIb21lIC8+PC9Sb3V0ZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZGV6b2JleSBmcm9tIFwiLi4vLi4vaW1nL2Rlem9iZXkuanBnXCI7XG5cbmNsYXNzIEFjY3VlaWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWRyZVNvbWJyZVwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFjY3VlaWxUaXRyZVwiPkxlIEpldSBEZXpvYmV5aTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY3VlaWxDb250ZW51XCI+XG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICAgIDx1PlxuICAgICAgICAgICAgICAgICAgICA8Yj5QcsOpc2VudGF0aW9uIGRlIGwnQVNCTCA6PC9iPlxuICAgICAgICAgICAgICAgICAgPC91PlxuICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBRdWlub2EgZXN0IHVuZSBPTkcgZCfDqWR1Y2F0aW9uIMOgIGxhIGNpdG95ZW5uZXTDqSBtb25kaWFsZSBldFxuICAgICAgICAgICAgICAgICAgc29saWRhaXJlIChFQ01TKS4gPGJyPjwvYnI+IEwnRUNNUyBlc3QgdW4gcHJvY2Vzc3VzIHF1aSB2aXNlIMOgXG4gICAgICAgICAgICAgICAgICBwcm92b3F1ZXIgZGVzIGNoYW5nZW1lbnRzIGRlIHZhbGV1ciBldCBkZSBjb21wb3J0ZW1lbnQgc3VyIGxlXG4gICAgICAgICAgICAgICAgICBwbGFuIGluZGl2aWR1ZWwgZXQgY29sbGVjdGlmIGVuIHZ1ZSBkJ3VuIG1vbmRlIHBsdXMganVzdGUgZGFuc1xuICAgICAgICAgICAgICAgICAgbGVxdWVsIHJlc3NvdXJjZXMgZXQgcG91dm9pcnMgc29udCDDqXF1aXRhYmxlbWVudCByw6lwYXJ0aXMgZGFuc1xuICAgICAgICAgICAgICAgICAgbGUgcmVzcGVjdCBkZSBsYSBkaWduaXTDqSBodW1haW5lLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIFNlcyBhY3Rpb25zIDogcHJvamV0cyBpbnRlcm5hdGlvbmF1eCAoYXVzc2kgc2NvbGFpcmVzLCBtYWlzb25cbiAgICAgICAgICAgICAgICAgIGRlIGpldW5lcywgc2NvdXRzIGVuIEFtw6lyaXF1ZSBkZSBzdWQsIEFmcmlxdWUgZXQgQXNpZSkuIFByb2pldFxuICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmUgbG9jYWxlcy4gQW5pbWF0aW9ucyBww6lkYWdvZ2lxdWVzIChKZXUgZGUgbGFcbiAgICAgICAgICAgICAgICAgIGZpY2VsbGUsIFBvdGVudGlhLCBKZXUgZGVzIGNoYWlzZXMsIERlem9iZXlpLi4uKS5cbiAgICAgICAgICAgICAgICAgIE1vYmlsaXNhdGlvbnMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICAgIDx1PlxuICAgICAgICAgICAgICAgICAgICA8Yj5KZXUgRGV6b2JleWkgOjwvYj5cbiAgICAgICAgICAgICAgICAgIDwvdT5cbiAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgRXQgdG9pLCBhcy10dSBkw6lqw6AgZGVzb2LDqWkgPyBGYWNlIMOgIGwnaW50aW1pZGF0aW9uLCDDoFxuICAgICAgICAgICAgICAgICAgbCdpbmp1c3RpY2UgY29tbWVudCByw6lhZ2lyID8gRmF1dC1pbCBwYXJmb2lzIGTDqXNvYsOpaXIgPyBRdWlub2FcbiAgICAgICAgICAgICAgICAgIGFzYmwgcHJvcG9zZSB1biBvdXRpbCBww6lkYWdvZ2lxdWUgYXV0b3VyIGRlIGwnYWN0aW9uIGRpcmVjdGVcbiAgICAgICAgICAgICAgICAgIG5vbi12aW9sZW50ZSBldCBkZSBsYSBkw6lzb2LDqWlzc2FuY2UgY2l2aWxlIDogZHUgTm9yZCBhdSBTdWQsXG4gICAgICAgICAgICAgICAgICBsJ2FjdGlvbiBkaXJlY3RlIG5vbi12aW9sZW50ZSBlc3QgKGV0IGEgdG91am91cnMgw6l0w6kpIHVuXG4gICAgICAgICAgICAgICAgICBsZXZpZXIgZGUgY2hhbmdlbWVudCBzb2NpYWwuIERyb2l0IGRlIHZvdGUgZGVzIGZlbW1lcyxcbiAgICAgICAgICAgICAgICAgIGFib2xpdGlvbiBkZSBsYSBzw6lncsOpZ2F0aW9uLCByw6ljdXDDqXJhdGlvbiBkZSB0ZXJyZXMuLi4gOiB0b3VzXG4gICAgICAgICAgICAgICAgICBvbnQgw6l0w6kgb2J0ZW51cyBub3RhbW1lbnQgcGFyIGRlcyBhY3Rpb25zIGRlIFwiZMOpc29iw6lpc3NhbmNlXCIuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgTGUgamV1IGVudGVuZCBwYXJ0aXIgZHUgdsOpY3UgZGVzIHBhcnRpY2lwYW7igKJ04oCiZeKAonMgcG91ciBtaWV1eFxuICAgICAgICAgICAgICAgICAgdG91Y2hlciBhdSBjb2V1ciBkZXMgY2F1c2VzIHF1aSBsZXMgYW5pbWVudCBldCBsZXMgaW5zcGlyZW50LlxuICAgICAgICAgICAgICAgICAgTCdvdXRpbCBzZSBkw6l2ZWxvcHBlIGVuIHVuZSBsaWduZSBkdSB0ZW1wcyBzdXIgbGFxdWVsbGUgbGXigKJsYVxuICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnTigKJlLCBlbiBwbHVzaWV1cnMgcGhhc2UgbHVkaXF1ZXMsIHBldXQgdGVzdGVyIHNlc1xuICAgICAgICAgICAgICAgICAgY29ubmFpc3NhbmNlcyBldCBhZmZ1dGVyIHNhIHZpc2lvbiBkdSBtb25kZSBlbiB2b3lhZ2VhbnQgZGFuc1xuICAgICAgICAgICAgICAgICAgdW5lIFwiYXV0cmVcIiBIaXN0b2lyZSBxdWUgY2VsbGUgcsOpY29udMOpZSBwYXIgbGVzIFwiZG9taW5hbnRzXCIuXG4gICAgICAgICAgICAgICAgICA8YnI+PC9icj5MJ291dGlsIGxhaXNzZSBhdXNzaSBsYSBwbGFjZSBhdXggw6ljaGFuZ2VzIGV0IMOgXG4gICAgICAgICAgICAgICAgICBsJ2FjdGlvbiBhdmVjIGRlcyBtaXNlcyBlbiBzaXR1YXRpb24gZXQgZMOpYmF0cyBtb3V2YW50cy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBFeHBsb3JleiBsZXMgbHV0dGVzIChldCBsZXMgdmljdG9pcmVzKSBkZSBjZXMgZmVtbWVzIGV0IGhvbW1lc1xuICAgICAgICAgICAgICAgICAgcXVpIG9udCBkw6lzb2LDqWkuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nQWNjdWVpbFwiIHNyYz17ZGV6b2JleX0gYWx0PVwiaW1hZ2UgamV1XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjdWVpbDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdXRlLCBTd2l0Y2gsIFJlZGlyZWN0LCBMaW5rLCB3aXRoUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBBY2N1ZWlsIGZyb20gXCIuL0FjY3VlaWxcIjtcbmltcG9ydCBVc2VycyBmcm9tIFwiLi9Vc2Vyc1wiO1xuaW1wb3J0IFBvc3RzIGZyb20gXCIuL1Bvc3RzXCI7XG5pbXBvcnQgSW5zY3JpcHRpb24gZnJvbSBcIi4vSW5zY3JpcHRpb25cIjtcbmltcG9ydCBMaWduZUR1VGVtcHMgZnJvbSBcIi4vTGlnbmVEdVRlbXBzXCI7XG5pbXBvcnQgU2VDb25uZWN0ZXIgZnJvbSBcIi4vU2VDb25uZWN0ZXJcIjtcbmltcG9ydCBRdWl6eiBmcm9tIFwiLi9RdWl6elwiO1xuaW1wb3J0IFJlc3VsdGF0IGZyb20gXCIuL1Jlc3VsdGF0XCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vLi4vaW1nL2xvZ28ucG5nXCI7XG5pbXBvcnQgeyBOYXYsIE5hdkl0ZW0sIE5hdkxpbmsgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3NcIjtcblxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5xdWlub2EuYmVcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPXtsb2dvfSBhbHQ9XCJsb2dvIFF1aW5vYVwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2FjY3VlaWxcIj5cbiAgICAgICAgICAgICAgICBBY2N1ZWlsXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3F1aXp6XCI+XG4gICAgICAgICAgICAgICAgUXVpenpcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvTGlnbmVEdVRlbXBzXCI+XG4gICAgICAgICAgICAgICAgTGlnbmVEdVRlbXBzXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3Jlc3VsdGF0XCI+XG4gICAgICAgICAgICAgICAgUmVzdWx0YXRcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvc2Vjb25uZWN0ZXJcIj5cbiAgICAgICAgICAgICAgICBTZSBjb25uZWN0ZXJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvaW5zY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICBJbnNjcmlwdGlvblxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPC9OYXY+XG5cbiAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgPFJlZGlyZWN0IGV4YWN0IGZyb209XCIvXCIgdG89XCIvYWNjdWVpbFwiIC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi91c2Vyc1wiIGNvbXBvbmVudD17VXNlcnN9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wb3N0c1wiIGNvbXBvbmVudD17UG9zdHN9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zZWNvbm5lY3RlclwiIGNvbXBvbmVudD17U2VDb25uZWN0ZXJ9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9pbnNjcmlwdGlvblwiIGNvbXBvbmVudD17SW5zY3JpcHRpb259IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9xdWl6elwiIGNvbXBvbmVudD17UXVpenp9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hY2N1ZWlsXCIgY29tcG9uZW50PXtBY2N1ZWlsfSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbGlnbmVkdXRlbXBzXCIgY29tcG9uZW50PXtMaWduZUR1VGVtcHN9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZXN1bHRhdFwiIGNvbXBvbmVudD17UmVzdWx0YXR9IC8+XG4gICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiLy8gbm9wcm90ZWN0XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIEZvcm1Hcm91cCwgTGFiZWwsIElucHV0IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY2xhc3MgSW5zY3JpcHRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcHNldWRvOiBcIlwiLFxuICAgICAgbWFpbDogXCJcIixcbiAgICAgIGFnZTogXCJcIixcbiAgICAgIHNleGU6IFwiXCIsXG4gICAgICBkZXNvYmVpc3NhbnQ6IFwiXCIsXG4gICAgICBwc2V1ZG9FcnJldXI6IFwiXCIsXG4gICAgICBtYWlsRXJyZXVyOiBcIlwiLFxuICAgICAgYWdlRXJyZXVyOiBcIlwiLFxuICAgICAgc2V4ZUVycmV1cjogXCJcIixcbiAgICAgIGRlc29iZWlzc2FudEVycmV1cjogXCJcIixcbiAgICB9O1xuICB9XG5cbiAgY3JlYXRlVXNlcigpIHtcbiAgICBjb25zdCB1c2VyT2JqZWN0ID0ge1xuICAgICAgcHNldWRvOiB0aGlzLnN0YXRlLnBzZXVkbyxcbiAgICAgIG1haWw6IHRoaXMuc3RhdGUubWFpbCxcbiAgICAgIGFnZTogdGhpcy5zdGF0ZS5hZ2UsXG4gICAgICBzZXhlOiB0aGlzLnN0YXRlLnNleGUsXG4gICAgICBkZXNvYmVpc3NhbnQ6IHRoaXMuc3RhdGUuZGVzb2JlaXNzYW50LFxuICAgIH07XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9hZGQvXCIsIHVzZXJPYmplY3QpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShpdGVtLCBjaGFtcCkge1xuICAgIGxldCBpdGVtVmFsdWUgPSBpdGVtLnRhcmdldC52YWx1ZTtcbiAgICBzd2l0Y2ggKGNoYW1wKSB7XG4gICAgICBjYXNlIFwicHNldWRvXCI6IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBzZXVkbzogaXRlbVZhbHVlIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJtYWlsXCI6IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1haWw6IGl0ZW1WYWx1ZSB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFwiYWdlXCI6IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFnZTogaXRlbVZhbHVlIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJzZXhlXCI6IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNleGU6IGl0ZW1WYWx1ZSB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFwiZGVzb2JlaXNzYW50XCI6IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRlc29iZWlzc2FudDogaXRlbVZhbHVlIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICBsZXQgcHNldWRvRXJyZXVyID0gXCJcIjtcbiAgICBsZXQgbWFpbEVycmV1ciA9IFwiXCI7XG4gICAgbGV0IGFnZUVycmV1ciA9IFwiXCI7XG4gICAgbGV0IHNleGVFcnJldXIgPSBcIlwiO1xuICAgIGxldCBkZXNvYmVpc3NhbnRFcnJldXIgPSBcIlwiO1xuXG4gICAgaWYgKCF0aGlzLnN0YXRlLnBzZXVkbykge1xuICAgICAgcHNldWRvRXJyZXVyID0gXCJsZSBjaGFtcCBkb2l0IMOqdHJlIHJlbXBsaVwiO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5zdGF0ZS5tYWlsLmluY2x1ZGVzKFwiQFwiKSkge1xuICAgICAgbWFpbEVycmV1ciA9IFwibCdlbWFpbCBlc3QgaW52YWxpZGVcIjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUuYWdlKSB7XG4gICAgICBhZ2VFcnJldXIgPSBcImxlIGNoYW1wIGRvaXQgw6p0cmUgcmVtcGxpXCI7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnN0YXRlLnNleGUpIHtcbiAgICAgIHNleGVFcnJldXIgPSBcImxlIGNoYW1wIGRvaXQgw6p0cmUgcmVtcGxpXCI7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnN0YXRlLmRlc29iZWlzc2FudCkge1xuICAgICAgZGVzb2JlaXNzYW50RXJyZXVyID0gXCJsZSBjaGFtcCBkb2l0IMOqdHJlIHJlbXBsaVwiO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIG1haWxFcnJldXIgfHxcbiAgICAgIHBzZXVkb0VycmV1ciB8fFxuICAgICAgYWdlRXJyZXVyIHx8XG4gICAgICBzZXhlRXJyZXVyIHx8XG4gICAgICBkZXNvYmVpc3NhbnRFcnJldXJcbiAgICApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtYWlsRXJyZXVyLFxuICAgICAgICBwc2V1ZG9FcnJldXIsXG4gICAgICAgIGFnZUVycmV1cixcbiAgICAgICAgc2V4ZUVycmV1cixcbiAgICAgICAgZGVzb2JlaXNzYW50RXJyZXVyLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgY29uc3QgaXNWYWxpZCA9IHRoaXMudmFsaWRhdGUoKTtcbiAgICBsZXQgb2JqID0ge307XG4gICAgb2JqLnBzZXVkbyA9IHRoaXMuc3RhdGUucHNldWRvO1xuICAgIG9iai5tYWlsID0gdGhpcy5zdGF0ZS5tYWlsO1xuICAgIG9iai5hZ2UgPSB0aGlzLnN0YXRlLmFnZTtcbiAgICBvYmouc2V4ZSA9IHRoaXMuc3RhdGUuc2V4ZTtcbiAgICBvYmouZGVzb2JlaXNzYW50ID0gdGhpcy5zdGF0ZS5kZXNvYmVpc3NhbnQ7XG4gICAgb2JqLmNvbW1lbnRhaXJlID0gdGhpcy5zdGF0ZS5jb21tZW50YWlyZTtcblxuICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJkb25uw6llcyBlbnZvecOpZXNcIiwgb2JqKTtcbiAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL3F1aXp6XCIpO1xuICAgICAgdGhpcy5jcmVhdGVVc2VyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxuICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImNhZHJlU29tYnJlXCIgbWV0aG9kPVwiUE9TVFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvcm1UaXRsZSB0ZXh0LWNlbnRlclwiPkluc2NyaXB0aW9uPC9oMT5cbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxoMz5Qc2V1ZG88L2gzPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInBzZXVkb1wiXG4gICAgICAgICAgICAgICAgaWQ9XCJwc2V1ZG9cIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwicHNldWRvXCIpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycmV1clwiPnt0aGlzLnN0YXRlLnBzZXVkb0VycmV1cn08L2Rpdj5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8aDM+QWRyZXNzZSBNYWlsPC9oMz5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwibWFpbFwiKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJldXJcIj57dGhpcy5zdGF0ZS5tYWlsRXJyZXVyfTwvZGl2PlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8aDM+QWdlPC9oMz5cbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0FnZVwiXG4gICAgICAgICAgICAgICAgICBpZD1cIjE2XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMTZcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcImFnZVwiKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbD4xNi0xODwvTGFiZWw+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvQWdlXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiMTlcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxOVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwiYWdlXCIpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsPjE5LTIxPC9MYWJlbD5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9BZ2VcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCIyMlwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIjIyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJhZ2VcIil9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWw+MjItMjU8L0xhYmVsPlxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0FnZVwiXG4gICAgICAgICAgICAgICAgICBpZD1cIjI2XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMjZcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcImFnZVwiKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbD4yNi0yOTwvTGFiZWw+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvQWdlXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiMzBcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIzMFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwibWFpbFwiKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbD4rIDMwPC9MYWJlbD5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyZXVyXCI+e3RoaXMuc3RhdGUuYWdlRXJyZXVyfTwvZGl2PlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8aDM+U2V4ZTwvaDM+XG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cbiAgICAgICAgICAgICAgICA8TGFiZWw+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNleGVcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImhvbW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJob21tZVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiaG9tbWVcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwic2V4ZVwiKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICBob21tZVxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsPlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZXhlXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmZW1tZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZmVtbWVcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImZlbW1lXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcInNleGVcIil9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgZmVtbWVcbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxuICAgICAgICAgICAgICAgIDxMYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2V4ZVwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiYXV0cmVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImF1dHJlXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJhdXRyZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJzZXhlXCIpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIGF1dHJlXG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyZXVyXCI+e3RoaXMuc3RhdGUuc2V4ZUVycmV1cn08L2Rpdj5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPGgzPkVzdC1jZSBxdWUgdm91cyB2b3VzIGNvbnNpZMOpcmV6IGNvbW1lIMKrZMOpc29iw6lpc3NhbnTCuyA/PC9oMz5cbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNvYmVpXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwib3VpXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwib3VpXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJkZXNvYmVpc3NhbnRcIil9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWw+b3VpPC9MYWJlbD5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzb2JlaVwiXG4gICAgICAgICAgICAgICAgICBpZD1cInVuUGV1XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwidW4gcGV1XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJkZXNvYmVpc3NhbnRcIil9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWw+dW4gcGV1PC9MYWJlbD5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzb2JlaVwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm5vblwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIm5vblwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwiZGVzb2JlaXNzYW50XCIpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsPm5vbjwvTGFiZWw+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycmV1clwiPnt0aGlzLnN0YXRlLmRlc29iZWlzc2FudEVycmV1cn08L2Rpdj5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPHRhYmxlIGlkPVwidGFiRGVzb2JlaVwiPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRoZWFkXCI+QWN0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRoZWFkXCI+RMOpasOgIHLDqWFsaXPDqTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0aGVhZFwiPkVmZmljYWNlPC90aD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5TaWduZXIgdW5lIHDDqXRpdGlvbjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicGV0aXRpb25SZWFsaXNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwZXRpdGlvbkVmZmljYWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5GYWlyZSB1biBkb248L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImRvblJlYWxpc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImRvbkVmZmljYWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5QcmF0aXF1ZXIgbGUgesOpcm8gZMOpY2hldCwgY2hhbmdlciBtZXMgaGFiaXR1ZGVzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJlY29sb2dpcXVlUmVhbGlzZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZWNvbG9naXF1ZUVmZmljYWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5N4oCZaW5mb3JtZXIgw6AgcHJvcG9zIGRlIGwnYWN0dWFsaXTDqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiaW5mb3JtZXJSZWFsaXNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJpbmZvcm1lckVmZmljYWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5N4oCZZW5nYWdlciBlbiBwb2xpdGlxdWU8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInBvbGl0aXF1ZVJlYWxpc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInBvbGl0aXF1ZUVmZmljYWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5GYWlyZSBsYSBncsOodmU8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImdyZXZlUmVhbGlzZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZ3JldmVFZmZpY2FjZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+TWFuaWZlc3RlcjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwibWFuaWZlc3RlclJlYWxpc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIm1hbmlmZXN0ZXJFZmZpY2FjZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+RmFpcmUgZGUgbGEgZMOpc29iw6lpc3NhbmNlIGNpdmlsZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZGVzb2JlaXNzYW50UmVhbGlzZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZGVzb2JlaXNzYW50RWZmaWNhY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0bkxvZ2luXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoKX0+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlMnaW5zY3JpcmU8L2xhYmVsPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc2NyaXB0aW9uO1xuIiwiZXhwb3J0IGNvbnN0IGxkdGRhdGEgPSBbXHJcbiAge1xyXG4gICAgcGVyaW9kZTogMTkzMCxcclxuICAgIG5vbTogYCBHYW5kaGlgLFxyXG4gICAgcmVwb25zZUpvdWV1cjogMSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBlcmlvZGU6IDE5NjAsXHJcbiAgICBub206IGAgQXltZXJpY2AsXHJcbiAgICByZXBvbnNlSm91ZXVyOiAyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGVyaW9kZTogMTQ5MCxcclxuICAgIG5vbTogYCBTZWJgLFxyXG4gICAgcmVwb25zZUpvdWV1cjogMyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBlcmlvZGU6IDE5MzAsXHJcbiAgICBub206IGAgSHVtYmVyYCxcclxuICAgIHJlcG9uc2VKb3VldXI6IDEsXHJcbiAgfSxcclxuXTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgbGR0ZGF0YSB9IGZyb20gXCIuL0xEVERhdGFcIjtcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7IGZhQ2hlY2ssIGZhVGltZXMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5cbmNsYXNzIExpZ25lRHVUZW1wcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpY2hlOiBbXG4gICAgICAgIHsgbm9tOiBcIlwiIH0sXG4gICAgICAgIHsgcGVyaW9kZTogXCJcIiB9LFxuICAgICAgICB7IGxpZXU6IFwiXCIgfSxcbiAgICAgICAgeyBsdXR0ZTogXCJcIiB9LFxuICAgICAgICB7IHN0cmF0ZWdpZTogXCJcIiB9LFxuICAgICAgICB7IGFjdGlvbjogXCJcIiB9LFxuICAgICAgICB7IHZpY3RvaXJlOiBcIlwiIH0sXG4gICAgICAgIHsgYW5uZWNkb3RlOiBcIlwiIH0sXG4gICAgICAgIHsgY2l0YXRpb246IFwiXCIgfSxcbiAgICAgICAgeyBxdWVzdGlvbjogXCJcIiB9LFxuICAgICAgICB7IHJlcG9uc2UxOiBcIlwiIH0sXG4gICAgICAgIHsgcmVwb25zZTI6IFwiXCIgfSxcbiAgICAgICAgeyByZXBvbnNlMzogXCJcIiB9LFxuICAgICAgICB7IHZpZGVvOiBcIlwiIH0sXG4gICAgICAgIHsgYXJ0aWNsZTogXCJcIiB9LFxuICAgICAgICB7IHJlcG9uc2VKb3VldXI6IFwiXCIgfSxcbiAgICAgIF0sXG4gICAgICBtb2RhbDogZmFsc2UsXG4gICAgICBhY3RpdmVNb2RhbDogbnVsbCxcbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICBtb2RhbDogIXByZXZTdGF0ZS5tb2RhbCxcbiAgICB9KSk7XG4gIH1cblxuICByZXBvbnNlKHJlcG9uc2UpIHtcbiAgICBpZiAocmVwb25zZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPVwiY2hlY2tJY29uXCIgaWNvbj17ZmFDaGVja30gLz47XG4gICAgfVxuICAgIHJldHVybiA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cImZhbHNlSWNvblwiIGljb249e2ZhVGltZXN9IC8+O1xuICB9XG5cbiAgLy8gY2hhbmdlVmFyaWFibGUocGVyaW9kZXMsIG5vbXMsIHJlcG9uc2VKb3VldXJzKSB7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgICBwZXJpb2RlOiBwZXJpb2Rlcy52YWx1ZSxcbiAgLy8gICAgIG5vbTogbm9tcy52YWx1ZSxcbiAgLy8gICAgIHJlcG9uc2VKb3VldXI6IHJlcG9uc2VKb3VldXJzLnZhbHVlLFxuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgbGlnbmVEdVRlbXBzKCkge1xuICAgIHJldHVybiBsZHRkYXRhLm1hcCgoeyBpZCwgcGVyaW9kZSwgbm9tLCByZXBvbnNlSm91ZXVyIH0pID0+IChcbiAgICAgIDx0ciBrZXk9e2lkfT5cbiAgICAgICAgPHRkPntub219PC90ZD5cbiAgICAgICAgPHRkPntwZXJpb2RlfTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyZXBvbnNlSm91ZXVyXCI+e3RoaXMucmVwb25zZShyZXBvbnNlSm91ZXVyKX08L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cbiAgICAgICAgICAgIFBsdXMgZCdpbmZvcm1hdGlvblxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICApKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhZHJlU29tYnJlXCI+XG4gICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgbW9kYWxDbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIlxuICAgICAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUubW9kYWx9XG4gICAgICAgICAgICAgIGZhZGU9e2ZhbHNlfVxuICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMudG9nZ2xlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlPXt0aGlzLnRvZ2dsZX0+e3RoaXMuc3RhdGUubm9tfTwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgICAgIDxNb2RhbEJvZHk+VGV4dGU8L01vZGFsQm9keT5cbiAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L01vZGFsRm9vdGVyPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJsZHRUaXRyZVwiPlxuICAgICAgICAgICAgICBWb3MgcsOpc3VsdGF0cyBhdXggcXVlc3Rpb25zIGRlcyBkw6lzb2LDqWlzc2FudHNcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8dGFibGUgaWQ9XCJ0YWJEZXNvYmVpXCI+XG4gICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGhlYWRcIj5Ob208L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRoZWFkXCI+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGhlYWRcIj5Sw6lzdWx0YXQ8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRoZWFkXCI+SW5mb3M8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keT57dGhpcy5saWduZUR1VGVtcHMoKX08L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpZ25lRHVUZW1wcztcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuXG5jbGFzcyBQb3N0cyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5nZXRQb3N0cygpO1xuICAgIH1cblxuICAgIGdldFBvc3RzKCkge1xuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy9gKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3N0cyA9IHJlcy5kYXRhLnNsaWNlKDAsMTUpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvc3RzLCBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbG9hZGluZyA9IHRoaXMuc3RhdGUubG9hZGluZztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyb3ctc2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj48c3Bhbj5MaXN0IG9mIHBvc3RzPC9zcGFuPkNyZWF0ZWQgd2l0aCA8aVxuICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1oZWFydFwiPjwvaT4gYnkgeWVtaXdlYmJ5IDwvaDI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydyb3cgdGV4dC1jZW50ZXInfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLXNwaW4gZmEtc3Bpbm5lciBmYS00eFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncm93J30+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5wb3N0cy5tYXAocG9zdCA9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMCBvZmZzZXQtbWQtMSByb3ctYmxvY2tcIiBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICAgIDx1bCBpZD1cInNvcnRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDQ+e3Bvc3QudGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICA8cD57cG9zdC5ib2R5fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RzOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY2xhc3MgUXVpenogZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY3VycmVudFF1ZXN0aW9uOiAwLFxyXG4gICAgICBteUFuc3dlcjogbnVsbCxcclxuICAgICAgb3B0aW9uczogW10sXHJcbiAgICAgIHNjb3JlOiAxLFxyXG4gICAgICBkaXNhYmxlZDogdHJ1ZSxcclxuICAgICAgaXNFbmQ6IGZhbHNlLFxyXG4gICAgICBpdGVtczogW10sXHJcbiAgICAgIHF1aXp6ZGF0YTogW10sXHJcbiAgICAgIGlkOiBcIlwiLFxyXG4gICAgICBxdWVzdGlvbjogXCJcIixcclxuICAgICAgcmVwb25zZTE6IFwiXCIsXHJcbiAgICAgIHJlcG9uc2UyOiBcIlwiLFxyXG4gICAgICByZXBvbnNlMzogXCJcIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBsb2FkcXVpenpkYXRhID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcXVpenpkYXRhID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IHRoaXMuc3RhdGUuaWQsXHJcbiAgICAgICAgcXVlc3Rpb246IHRoaXMuc3RhdGUucXVlc3Rpb24sXHJcbiAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5yZXBvbnNlMSxcclxuICAgICAgICAgIHRoaXMuc3RhdGUucmVwb25zZTIsXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnJlcG9uc2UzLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYW5zd2VyOiB0aGlzLnN0YXRlLnJlcG9uc2UxLFxyXG4gICAgICB9LFxyXG4gICAgXTtcclxuICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHF1ZXN0aW9uczogcXVpenpkYXRhW3RoaXMuc3RhdGUuY3VycmVudFF1ZXN0aW9uXS5xdWVzdGlvbixcclxuICAgICAgICBhbnN3ZXI6IHF1aXp6ZGF0YVt0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbl0uYW5zd2VyLFxyXG4gICAgICAgIG9wdGlvbnM6IHF1aXp6ZGF0YVt0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbl0ub3B0aW9ucyxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgYXhpb3MuZ2V0KGAvYXBpL3F1aXp6L2ApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRxdWl6emRhdGEocmVzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmV4dFF1ZXN0aW9uSGFuZGxlciA9ICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCd0ZXN0JylcclxuICAgIGNvbnN0IHsgbXlBbnN3ZXIsIGFuc3dlciwgc2NvcmUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgaWYgKG15QW5zd2VyID09PSBhbnN3ZXIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc2NvcmU6IHNjb3JlICsgMSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGN1cnJlbnRRdWVzdGlvbjogdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb24gKyAxLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb24gIT09IHByZXZTdGF0ZS5jdXJyZW50UXVlc3Rpb24pIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxyXG4gICAgICAgICAgcXVlc3Rpb25zOiBxdWl6emRhdGFbdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb25dLnF1ZXN0aW9uLFxyXG4gICAgICAgICAgb3B0aW9uczogcXVpenpkYXRhW3RoaXMuc3RhdGUuY3VycmVudFF1ZXN0aW9uXS5vcHRpb25zLFxyXG4gICAgICAgICAgYW5zd2VyOiBxdWl6emRhdGFbdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb25dLmFuc3dlcixcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgLy9jaGVjayBhbnN3ZXJcclxuICBjaGVja0Fuc3dlciA9IChhbnN3ZXIpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBteUFuc3dlcjogYW5zd2VyLCBkaXNhYmxlZDogZmFsc2UgfSk7XHJcbiAgfTtcclxuXHJcbiAgZmluaXNoSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbiA9PT0gcXVpenpkYXRhLmxlbmd0aCAtIDEpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaXNFbmQ6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBvcHRpb25zLCBteUFuc3dlciwgY3VycmVudFF1ZXN0aW9uLCBpc0VuZCwgcXVpenpkYXRhIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGlmIChpc0VuZCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0IGNhZHJlU29tYnJlXCI+XHJcbiAgICAgICAgICA8aDM+R2FtZSBPdmVyIHlvdXIgRmluYWwgc2NvcmUgaXMge3RoaXMuc3RhdGUuc2NvcmV9IHBvaW50cyA8L2gzPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIFRoZSBjb3JyZWN0IGFuc3dlcidzIGZvciB0aGUgcXVlc3Rpb25zIHdhc1xyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAge3F1aXp6ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidWkgZmxvYXRpbmcgbWVzc2FnZSBvcHRpb25zXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLmFuc3dlcn1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwIGNhZHJlU29tYnJlXCI+XHJcbiAgICAgICAgICA8aDE+e3RoaXMuc3RhdGUucXVlc3Rpb25zfSA8L2gxPlxyXG4gICAgICAgICAgPHNwYW4+e2BRdWVzdGlvbnMgJHtjdXJyZW50UXVlc3Rpb259ICBvdXQgb2YgMjAgcmVtYWluaW5nIGB9PC9zcGFuPlxyXG4gICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICBrZXk9e29wdGlvbi5pZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B1aSBmbG9hdGluZyBtZXNzYWdlIG9wdGlvbnMgJHtcclxuICAgICAgICAgICAgICAgIG15QW5zd2VyID09PSBvcHRpb24gPyBcInNlbGVjdGVkXCIgOiBudWxsXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jaGVja0Fuc3dlcihvcHRpb24pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge29wdGlvbn1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uIDwgMjAgJiYgKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgYnV0dG9uXCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm5leHRRdWVzdGlvbkhhbmRsZXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHsvKiAvL2FkZGluZyBhIGZpbmlzaCBidXR0b24gKi99XHJcbiAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uID09PSAyMCAmJiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgYnV0dG9uXCIgb25DbGljaz17dGhpcy5maW5pc2hIYW5kbGVyfT5cclxuICAgICAgICAgICAgICBGaW5pc2hcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVpeno7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybUdyb3VwIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuY2xhc3MgUmVzdWx0YXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmJCb25uZVJlcG9uc2U6IFwiXCIsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKHBhZ2UpIHtcbiAgICBzd2l0Y2ggKHBhZ2UpIHtcbiAgICAgIGNhc2UgXCJxdWl6elwiOiB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL3F1aXp6XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJsaWduZVRwc1wiOiB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL2xpZ25lZHV0ZW1wc1wiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhZHJlU29tYnJlXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicmVzdWx0VGl0cmVcIj5UdSBhcyBmaW5pIGxlIFF1aXp6IERlem9iZXlpICE8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRhdENvbnRlbnVcIj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgVHUgZXMgdW57XCIgXCJ9XG4gICAgICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgICAgICA8dT4oMyB0eXBlcyBkZSBwZXJzb25uZXMpPC91PlxuICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBUdSBhcyBldSAuLi57dGhpcy5zdGF0ZS5uYkJvbm5lUmVwb25zZX0gZGUgYm9ubmVzIHLDqXBvbnNlcyBzdXJcbiAgICAgICAgICAgICAgICAyMFxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bkxpZ25lVHBzXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soXCJsaWduZVRwc1wiKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+VGVzIHLDqXBvbnNlczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuUXVpenpcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljayhcInF1aXp6XCIpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5SZWZhaXJlIGxlIHF1aXp6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5xdWlub2EuYmVcIj5cbiAgICAgICAgICAgICAgICAgIFMnaW5zY2lyZSDDoCBsYSBuZXdzbGV0dGVyIGRlIFF1aW5vYVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRhdDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybUdyb3VwLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmNsYXNzIFNlQ29ubmVjdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNhZHJlU29tYnJlXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9ybVRpdGxlIHRleHQtY2VudGVyXCI+U2UgQ29ubmVjdGVyPC9oMT5cbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxoMz5BZHJlc3NlIE1haWw8L2gzPlxuICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiXCIgLz5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgey8qIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxoMz5BZHJlc3NlIG1haWw8L2gzPlxuICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJFbWFpbFwiIHBsYWNlaG9sZGVyPVwiXCIgLz5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPiAqL31cbiAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0bkxvZ2luXCI+U2UgQ29ubmVjdGVyPC9CdXR0b24+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZUNvbm5lY3RlcjtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgVXNlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHRwZXJzb25zOiBbXVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0YXhpb3MuZ2V0KGAvYXBpL3VzZXJzL2ApXG5cdFx0XHQudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRjb25zdCBwZXJzb25zID0gcmVzLmRhdGE7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBwZXJzb25zIH0pO1xuXHRcdFx0fSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHVsPlxuXHRcdFx0XHR7IHRoaXMuc3RhdGUucGVyc29ucy5tYXAocGVyc29uID0+IDxsaT57cGVyc29uLnBzZXVkb308L2xpPil9XG5cdFx0XHQ8L3VsPlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyczsiXSwic291cmNlUm9vdCI6IiJ9