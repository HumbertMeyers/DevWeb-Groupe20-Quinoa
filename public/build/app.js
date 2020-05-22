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
    }
  }, {
    key: "changeVariable",
    value: function changeVariable(periodes, noms, reponseJoueurs) {
      this.setState({
        periode: periodes.value,
        nom: noms.value,
        reponseJoueur: reponseJoueurs.value
      });
    }
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

 //import { quizzdata } from "./QuizzData";



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZy9kZXpvYmV5LmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1nL2xvZ28ucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWNjdWVpbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0luc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xEVERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTGlnbmVEdVRlbXBzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Bvc3RzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1F1aXp6LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Jlc3VsdGF0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NlQ29ubmVjdGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1VzZXJzLmpzIl0sIm5hbWVzIjpbIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFjY3VlaWwiLCJkZXpvYmV5IiwiQ29tcG9uZW50IiwiSG9tZSIsImxvZ28iLCJVc2VycyIsIlBvc3RzIiwiU2VDb25uZWN0ZXIiLCJJbnNjcmlwdGlvbiIsIlF1aXp6IiwiTGlnbmVEdVRlbXBzIiwiUmVzdWx0YXQiLCJwcm9wcyIsInN0YXRlIiwicHNldWRvIiwibWFpbCIsImFnZSIsInNleGUiLCJkZXNvYmVpc3NhbnQiLCJwc2V1ZG9FcnJldXIiLCJtYWlsRXJyZXVyIiwiYWdlRXJyZXVyIiwic2V4ZUVycmV1ciIsImRlc29iZWlzc2FudEVycmV1ciIsInVzZXJPYmplY3QiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yIiwiaXRlbSIsImNoYW1wIiwiaXRlbVZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsImluY2x1ZGVzIiwiaXNWYWxpZCIsInZhbGlkYXRlIiwib2JqIiwiY29tbWVudGFpcmUiLCJ3YXJuIiwiaGlzdG9yeSIsInB1c2giLCJjcmVhdGVVc2VyIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwibGR0ZGF0YSIsInBlcmlvZGUiLCJub20iLCJyZXBvbnNlSm91ZXVyIiwiZmljaGUiLCJsaWV1IiwibHV0dGUiLCJzdHJhdGVnaWUiLCJhY3Rpb24iLCJ2aWN0b2lyZSIsImFubmVjZG90ZSIsImNpdGF0aW9uIiwicXVlc3Rpb24iLCJyZXBvbnNlMSIsInJlcG9uc2UyIiwicmVwb25zZTMiLCJ2aWRlbyIsImFydGljbGUiLCJtb2RhbCIsImFjdGl2ZU1vZGFsIiwidG9nZ2xlIiwiYmluZCIsInByZXZTdGF0ZSIsInJlcG9uc2UiLCJmYUNoZWNrIiwiZmFUaW1lcyIsInBlcmlvZGVzIiwibm9tcyIsInJlcG9uc2VKb3VldXJzIiwibWFwIiwiaWQiLCJsaWduZUR1VGVtcHMiLCJnZXRQb3N0cyIsImdldCIsInJlcyIsInBvc3RzIiwic2xpY2UiLCJsb2FkaW5nIiwidGl0bGUiLCJib2R5IiwicXVpenpkYXRhIiwib3B0aW9ucyIsImFuc3dlciIsInF1ZXN0aW9ucyIsImN1cnJlbnRRdWVzdGlvbiIsIm15QW5zd2VyIiwic2NvcmUiLCJkaXNhYmxlZCIsImxlbmd0aCIsImlzRW5kIiwiaXRlbXMiLCJsb2FkcXVpenpkYXRhIiwicHJldlByb3BzIiwiaW5kZXgiLCJvcHRpb24iLCJjaGVja0Fuc3dlciIsIm5leHRRdWVzdGlvbkhhbmRsZXIiLCJmaW5pc2hIYW5kbGVyIiwiUmVhY3QiLCJuYkJvbm5lUmVwb25zZSIsInBhZ2UiLCJoYW5kbGVDbGljayIsInBlcnNvbnMiLCJwZXJzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFlLG1HQUFvQyxFOzs7Ozs7Ozs7Ozs7QUNBbkQ7QUFBZSxnR0FBaUMsRTs7Ozs7Ozs7Ozs7O0FDQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsZ0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQiwyREFBQyw4REFBRCxRQUFRLDJEQUFDLHdEQUFELE9BQVIsQ0FBaEIsRUFBMkNDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUEzQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7SUFFTUMsTzs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUNQLGFBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsMkJBREYsRUFFRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLHlFQUNFLHVFQUNFLHNFQUNFLG9HQURGLENBREYsQ0FERixFQU1FLGlLQUVvQixzRUFGcEIsa1JBTkYsRUFjRSxvVUFkRixFQXFCRSx1RUFDRSxzRUFDRSx1RkFERixDQURGLENBckJGLEVBMEJFLG9tQkExQkYsRUFvQ0Usa2VBT0Usc0VBUEYsc0hBcENGLEVBOENFLDhKQTlDRixDQURGLEVBb0RFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQTRCLFdBQUcsRUFBRUMsd0RBQWpDO0FBQTBDLFdBQUcsRUFBQztBQUE5QyxRQXBERixDQUZGLENBREYsQ0FERixDQURGO0FBK0REOzs7O0VBakVtQkMsK0M7O0FBb0VQRixzRUFBZixFOzs7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RSxzRkFERixFQUVFLDJEQUFDLGdEQUFEO0FBQU8sWUFBSSxFQUFDLE9BQVo7QUFBb0IsWUFBSSxFQUFDLE9BQXpCO0FBQWlDLFVBQUUsRUFBQyxPQUFwQztBQUE0QyxtQkFBVyxFQUFDO0FBQXhELFFBRkYsQ0FGRixFQVVFLDJEQUFDLG9EQUFEO0FBQVcsaUJBQVMsRUFBQztBQUFyQixTQUNFLDJEQUFDLGlEQUFEO0FBQVEsaUJBQVMsRUFBQztBQUFsQix3QkFERixDQVZGLENBREYsQ0FERixDQURGO0FBb0JEOzs7O0VBdEJ1QkwsK0M7O0FBeUJYSywwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7O0lBRU1GLEs7Ozs7Ozs7Ozs7Ozs7Ozs7NERBQ0c7QUFDUDJHLGFBQU8sRUFBRTtBQURGLEs7Ozs7Ozs7d0NBSVk7QUFBQTs7QUFDbkJ2RixrREFBSyxDQUFDMEQsR0FBTixnQkFDRXhELElBREYsQ0FDTyxVQUFBeUQsR0FBRyxFQUFJO0FBQ1osWUFBTTRCLE9BQU8sR0FBRzVCLEdBQUcsQ0FBQ3JELElBQXBCOztBQUNBLGNBQUksQ0FBQ08sUUFBTCxDQUFjO0FBQUUwRSxpQkFBTyxFQUFQQTtBQUFGLFNBQWQ7QUFDQSxPQUpGO0FBS0E7Ozs2QkFFUTtBQUNSLGFBQ0MsdUVBQ0csS0FBS25HLEtBQUwsQ0FBV21HLE9BQVgsQ0FBbUJqQyxHQUFuQixDQUF1QixVQUFBa0MsTUFBTTtBQUFBLGVBQUksdUVBQUtBLE1BQU0sQ0FBQ25HLE1BQVosQ0FBSjtBQUFBLE9BQTdCLENBREgsQ0FERDtBQUtBOzs7O0VBbkJrQlosK0M7O0FBc0JMRyxvRUFBZixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBkZWZhdWx0IFwiL2J1aWxkL2ltYWdlcy9kZXpvYmV5LjY5ZDRkZDczLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiL2J1aWxkL2ltYWdlcy9sb2dvLjNmNmE5YjgwLnBuZ1wiOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0ICcuLi9jc3MvYXBwLmNzcyc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XG5cblJlYWN0RE9NLnJlbmRlcig8Um91dGVyPjxIb21lIC8+PC9Sb3V0ZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZGV6b2JleSBmcm9tIFwiLi4vLi4vaW1nL2Rlem9iZXkuanBnXCI7XG5cbmNsYXNzIEFjY3VlaWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWRyZVNvbWJyZVwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFjY3VlaWxUaXRyZVwiPkxlIEpldSBEZXpvYmV5aTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY3VlaWxDb250ZW51XCI+XG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICAgIDx1PlxuICAgICAgICAgICAgICAgICAgICA8Yj5QcsOpc2VudGF0aW9uIGRlIGwnQVNCTCA6PC9iPlxuICAgICAgICAgICAgICAgICAgPC91PlxuICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBRdWlub2EgZXN0IHVuZSBPTkcgZCfDqWR1Y2F0aW9uIMOgIGxhIGNpdG95ZW5uZXTDqSBtb25kaWFsZSBldFxuICAgICAgICAgICAgICAgICAgc29saWRhaXJlIChFQ01TKS4gPGJyPjwvYnI+IEwnRUNNUyBlc3QgdW4gcHJvY2Vzc3VzIHF1aSB2aXNlIMOgXG4gICAgICAgICAgICAgICAgICBwcm92b3F1ZXIgZGVzIGNoYW5nZW1lbnRzIGRlIHZhbGV1ciBldCBkZSBjb21wb3J0ZW1lbnQgc3VyIGxlXG4gICAgICAgICAgICAgICAgICBwbGFuIGluZGl2aWR1ZWwgZXQgY29sbGVjdGlmIGVuIHZ1ZSBkJ3VuIG1vbmRlIHBsdXMganVzdGUgZGFuc1xuICAgICAgICAgICAgICAgICAgbGVxdWVsIHJlc3NvdXJjZXMgZXQgcG91dm9pcnMgc29udCDDqXF1aXRhYmxlbWVudCByw6lwYXJ0aXMgZGFuc1xuICAgICAgICAgICAgICAgICAgbGUgcmVzcGVjdCBkZSBsYSBkaWduaXTDqSBodW1haW5lLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIFNlcyBhY3Rpb25zIDogcHJvamV0cyBpbnRlcm5hdGlvbmF1eCAoYXVzc2kgc2NvbGFpcmVzLCBtYWlzb25cbiAgICAgICAgICAgICAgICAgIGRlIGpldW5lcywgc2NvdXRzIGVuIEFtw6lyaXF1ZSBkZSBzdWQsIEFmcmlxdWUgZXQgQXNpZSkuIFByb2pldFxuICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmUgbG9jYWxlcy4gQW5pbWF0aW9ucyBww6lkYWdvZ2lxdWVzIChKZXUgZGUgbGFcbiAgICAgICAgICAgICAgICAgIGZpY2VsbGUsIFBvdGVudGlhLCBKZXUgZGVzIGNoYWlzZXMsIERlem9iZXlpLi4uKS5cbiAgICAgICAgICAgICAgICAgIE1vYmlsaXNhdGlvbnMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICAgIDx1PlxuICAgICAgICAgICAgICAgICAgICA8Yj5KZXUgRGV6b2JleWkgOjwvYj5cbiAgICAgICAgICAgICAgICAgIDwvdT5cbiAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgRXQgdG9pLCBhcy10dSBkw6lqw6AgZGVzb2LDqWkgPyBGYWNlIMOgIGwnaW50aW1pZGF0aW9uLCDDoFxuICAgICAgICAgICAgICAgICAgbCdpbmp1c3RpY2UgY29tbWVudCByw6lhZ2lyID8gRmF1dC1pbCBwYXJmb2lzIGTDqXNvYsOpaXIgPyBRdWlub2FcbiAgICAgICAgICAgICAgICAgIGFzYmwgcHJvcG9zZSB1biBvdXRpbCBww6lkYWdvZ2lxdWUgYXV0b3VyIGRlIGwnYWN0aW9uIGRpcmVjdGVcbiAgICAgICAgICAgICAgICAgIG5vbi12aW9sZW50ZSBldCBkZSBsYSBkw6lzb2LDqWlzc2FuY2UgY2l2aWxlIDogZHUgTm9yZCBhdSBTdWQsXG4gICAgICAgICAgICAgICAgICBsJ2FjdGlvbiBkaXJlY3RlIG5vbi12aW9sZW50ZSBlc3QgKGV0IGEgdG91am91cnMgw6l0w6kpIHVuXG4gICAgICAgICAgICAgICAgICBsZXZpZXIgZGUgY2hhbmdlbWVudCBzb2NpYWwuIERyb2l0IGRlIHZvdGUgZGVzIGZlbW1lcyxcbiAgICAgICAgICAgICAgICAgIGFib2xpdGlvbiBkZSBsYSBzw6lncsOpZ2F0aW9uLCByw6ljdXDDqXJhdGlvbiBkZSB0ZXJyZXMuLi4gOiB0b3VzXG4gICAgICAgICAgICAgICAgICBvbnQgw6l0w6kgb2J0ZW51cyBub3RhbW1lbnQgcGFyIGRlcyBhY3Rpb25zIGRlIFwiZMOpc29iw6lpc3NhbmNlXCIuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgTGUgamV1IGVudGVuZCBwYXJ0aXIgZHUgdsOpY3UgZGVzIHBhcnRpY2lwYW7igKJ04oCiZeKAonMgcG91ciBtaWV1eFxuICAgICAgICAgICAgICAgICAgdG91Y2hlciBhdSBjb2V1ciBkZXMgY2F1c2VzIHF1aSBsZXMgYW5pbWVudCBldCBsZXMgaW5zcGlyZW50LlxuICAgICAgICAgICAgICAgICAgTCdvdXRpbCBzZSBkw6l2ZWxvcHBlIGVuIHVuZSBsaWduZSBkdSB0ZW1wcyBzdXIgbGFxdWVsbGUgbGXigKJsYVxuICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnTigKJlLCBlbiBwbHVzaWV1cnMgcGhhc2UgbHVkaXF1ZXMsIHBldXQgdGVzdGVyIHNlc1xuICAgICAgICAgICAgICAgICAgY29ubmFpc3NhbmNlcyBldCBhZmZ1dGVyIHNhIHZpc2lvbiBkdSBtb25kZSBlbiB2b3lhZ2VhbnQgZGFuc1xuICAgICAgICAgICAgICAgICAgdW5lIFwiYXV0cmVcIiBIaXN0b2lyZSBxdWUgY2VsbGUgcsOpY29udMOpZSBwYXIgbGVzIFwiZG9taW5hbnRzXCIuXG4gICAgICAgICAgICAgICAgICA8YnI+PC9icj5MJ291dGlsIGxhaXNzZSBhdXNzaSBsYSBwbGFjZSBhdXggw6ljaGFuZ2VzIGV0IMOgXG4gICAgICAgICAgICAgICAgICBsJ2FjdGlvbiBhdmVjIGRlcyBtaXNlcyBlbiBzaXR1YXRpb24gZXQgZMOpYmF0cyBtb3V2YW50cy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBFeHBsb3JleiBsZXMgbHV0dGVzIChldCBsZXMgdmljdG9pcmVzKSBkZSBjZXMgZmVtbWVzIGV0IGhvbW1lc1xuICAgICAgICAgICAgICAgICAgcXVpIG9udCBkw6lzb2LDqWkuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nQWNjdWVpbFwiIHNyYz17ZGV6b2JleX0gYWx0PVwiaW1hZ2UgamV1XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjdWVpbDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdXRlLCBTd2l0Y2gsIFJlZGlyZWN0LCBMaW5rLCB3aXRoUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBBY2N1ZWlsIGZyb20gXCIuL0FjY3VlaWxcIjtcbmltcG9ydCBVc2VycyBmcm9tIFwiLi9Vc2Vyc1wiO1xuaW1wb3J0IFBvc3RzIGZyb20gXCIuL1Bvc3RzXCI7XG5pbXBvcnQgSW5zY3JpcHRpb24gZnJvbSBcIi4vSW5zY3JpcHRpb25cIjtcbmltcG9ydCBMaWduZUR1VGVtcHMgZnJvbSBcIi4vTGlnbmVEdVRlbXBzXCI7XG5pbXBvcnQgU2VDb25uZWN0ZXIgZnJvbSBcIi4vU2VDb25uZWN0ZXJcIjtcbmltcG9ydCBRdWl6eiBmcm9tIFwiLi9RdWl6elwiO1xuaW1wb3J0IFJlc3VsdGF0IGZyb20gXCIuL1Jlc3VsdGF0XCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vLi4vaW1nL2xvZ28ucG5nXCI7XG5pbXBvcnQgeyBOYXYsIE5hdkl0ZW0sIE5hdkxpbmsgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3NcIjtcblxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5xdWlub2EuYmVcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPXtsb2dvfSBhbHQ9XCJsb2dvIFF1aW5vYVwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2FjY3VlaWxcIj5cbiAgICAgICAgICAgICAgICBBY2N1ZWlsXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3F1aXp6XCI+XG4gICAgICAgICAgICAgICAgUXVpenpcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvTGlnbmVEdVRlbXBzXCI+XG4gICAgICAgICAgICAgICAgTGlnbmVEdVRlbXBzXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3Jlc3VsdGF0XCI+XG4gICAgICAgICAgICAgICAgUmVzdWx0YXRcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvc2Vjb25uZWN0ZXJcIj5cbiAgICAgICAgICAgICAgICBTZSBjb25uZWN0ZXJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvaW5zY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICBJbnNjcmlwdGlvblxuICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPC9OYXY+XG5cbiAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgPFJlZGlyZWN0IGV4YWN0IGZyb209XCIvXCIgdG89XCIvYWNjdWVpbFwiIC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi91c2Vyc1wiIGNvbXBvbmVudD17VXNlcnN9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wb3N0c1wiIGNvbXBvbmVudD17UG9zdHN9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zZWNvbm5lY3RlclwiIGNvbXBvbmVudD17U2VDb25uZWN0ZXJ9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9pbnNjcmlwdGlvblwiIGNvbXBvbmVudD17SW5zY3JpcHRpb259IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9xdWl6elwiIGNvbXBvbmVudD17UXVpenp9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hY2N1ZWlsXCIgY29tcG9uZW50PXtBY2N1ZWlsfSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbGlnbmVkdXRlbXBzXCIgY29tcG9uZW50PXtMaWduZUR1VGVtcHN9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZXN1bHRhdFwiIGNvbXBvbmVudD17UmVzdWx0YXR9IC8+XG4gICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiLy8gbm9wcm90ZWN0XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIEZvcm1Hcm91cCwgTGFiZWwsIElucHV0IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY2xhc3MgSW5zY3JpcHRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcHNldWRvOiBcIlwiLFxuICAgICAgbWFpbDogXCJcIixcbiAgICAgIGFnZTogXCJcIixcbiAgICAgIHNleGU6IFwiXCIsXG4gICAgICBkZXNvYmVpc3NhbnQ6IFwiXCIsXG4gICAgICBwc2V1ZG9FcnJldXI6IFwiXCIsXG4gICAgICBtYWlsRXJyZXVyOiBcIlwiLFxuICAgICAgYWdlRXJyZXVyOiBcIlwiLFxuICAgICAgc2V4ZUVycmV1cjogXCJcIixcbiAgICAgIGRlc29iZWlzc2FudEVycmV1cjogXCJcIixcbiAgICB9O1xuICB9XG5cbiAgY3JlYXRlVXNlcigpIHtcbiAgICBjb25zdCB1c2VyT2JqZWN0ID0ge1xuICAgICAgcHNldWRvOiB0aGlzLnN0YXRlLnBzZXVkbyxcbiAgICAgIG1haWw6IHRoaXMuc3RhdGUubWFpbCxcbiAgICAgIGFnZTogdGhpcy5zdGF0ZS5hZ2UsXG4gICAgICBzZXhlOiB0aGlzLnN0YXRlLnNleGUsXG4gICAgICBkZXNvYmVpc3NhbnQ6IHRoaXMuc3RhdGUuZGVzb2JlaXNzYW50LFxuICAgIH07XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9hZGQvXCIsIHVzZXJPYmplY3QpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShpdGVtLCBjaGFtcCkge1xuICAgIGxldCBpdGVtVmFsdWUgPSBpdGVtLnRhcmdldC52YWx1ZTtcbiAgICBzd2l0Y2ggKGNoYW1wKSB7XG4gICAgICBjYXNlIFwicHNldWRvXCI6IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBzZXVkbzogaXRlbVZhbHVlIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJtYWlsXCI6IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1haWw6IGl0ZW1WYWx1ZSB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFwiYWdlXCI6IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFnZTogaXRlbVZhbHVlIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJzZXhlXCI6IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNleGU6IGl0ZW1WYWx1ZSB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFwiZGVzb2JlaXNzYW50XCI6IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRlc29iZWlzc2FudDogaXRlbVZhbHVlIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICBsZXQgcHNldWRvRXJyZXVyID0gXCJcIjtcbiAgICBsZXQgbWFpbEVycmV1ciA9IFwiXCI7XG4gICAgbGV0IGFnZUVycmV1ciA9IFwiXCI7XG4gICAgbGV0IHNleGVFcnJldXIgPSBcIlwiO1xuICAgIGxldCBkZXNvYmVpc3NhbnRFcnJldXIgPSBcIlwiO1xuXG4gICAgaWYgKCF0aGlzLnN0YXRlLnBzZXVkbykge1xuICAgICAgcHNldWRvRXJyZXVyID0gXCJsZSBjaGFtcCBkb2l0IMOqdHJlIHJlbXBsaVwiO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5zdGF0ZS5tYWlsLmluY2x1ZGVzKFwiQFwiKSkge1xuICAgICAgbWFpbEVycmV1ciA9IFwibCdlbWFpbCBlc3QgaW52YWxpZGVcIjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUuYWdlKSB7XG4gICAgICBhZ2VFcnJldXIgPSBcImxlIGNoYW1wIGRvaXQgw6p0cmUgcmVtcGxpXCI7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnN0YXRlLnNleGUpIHtcbiAgICAgIHNleGVFcnJldXIgPSBcImxlIGNoYW1wIGRvaXQgw6p0cmUgcmVtcGxpXCI7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnN0YXRlLmRlc29iZWlzc2FudCkge1xuICAgICAgZGVzb2JlaXNzYW50RXJyZXVyID0gXCJsZSBjaGFtcCBkb2l0IMOqdHJlIHJlbXBsaVwiO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIG1haWxFcnJldXIgfHxcbiAgICAgIHBzZXVkb0VycmV1ciB8fFxuICAgICAgYWdlRXJyZXVyIHx8XG4gICAgICBzZXhlRXJyZXVyIHx8XG4gICAgICBkZXNvYmVpc3NhbnRFcnJldXJcbiAgICApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtYWlsRXJyZXVyLFxuICAgICAgICBwc2V1ZG9FcnJldXIsXG4gICAgICAgIGFnZUVycmV1cixcbiAgICAgICAgc2V4ZUVycmV1cixcbiAgICAgICAgZGVzb2JlaXNzYW50RXJyZXVyLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoKSB7XG4gICAgY29uc3QgaXNWYWxpZCA9IHRoaXMudmFsaWRhdGUoKTtcbiAgICBsZXQgb2JqID0ge307XG4gICAgb2JqLnBzZXVkbyA9IHRoaXMuc3RhdGUucHNldWRvO1xuICAgIG9iai5tYWlsID0gdGhpcy5zdGF0ZS5tYWlsO1xuICAgIG9iai5hZ2UgPSB0aGlzLnN0YXRlLmFnZTtcbiAgICBvYmouc2V4ZSA9IHRoaXMuc3RhdGUuc2V4ZTtcbiAgICBvYmouZGVzb2JlaXNzYW50ID0gdGhpcy5zdGF0ZS5kZXNvYmVpc3NhbnQ7XG4gICAgb2JqLmNvbW1lbnRhaXJlID0gdGhpcy5zdGF0ZS5jb21tZW50YWlyZTtcblxuICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJkb25uw6llcyBlbnZvecOpZXNcIiwgb2JqKTtcbiAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL3F1aXp6XCIpO1xuICAgICAgdGhpcy5jcmVhdGVVc2VyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxuICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImNhZHJlU29tYnJlXCIgbWV0aG9kPVwiUE9TVFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvcm1UaXRsZSB0ZXh0LWNlbnRlclwiPkluc2NyaXB0aW9uPC9oMT5cbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxoMz5Qc2V1ZG88L2gzPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInBzZXVkb1wiXG4gICAgICAgICAgICAgICAgaWQ9XCJwc2V1ZG9cIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwicHNldWRvXCIpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycmV1clwiPnt0aGlzLnN0YXRlLnBzZXVkb0VycmV1cn08L2Rpdj5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8aDM+QWRyZXNzZSBNYWlsPC9oMz5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwibWFpbFwiKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJldXJcIj57dGhpcy5zdGF0ZS5tYWlsRXJyZXVyfTwvZGl2PlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8aDM+QWdlPC9oMz5cbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0FnZVwiXG4gICAgICAgICAgICAgICAgICBpZD1cIjE2XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMTZcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcImFnZVwiKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbD4xNi0xODwvTGFiZWw+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvQWdlXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiMTlcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxOVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwiYWdlXCIpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsPjE5LTIxPC9MYWJlbD5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9BZ2VcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCIyMlwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIjIyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJhZ2VcIil9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWw+MjItMjU8L0xhYmVsPlxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0FnZVwiXG4gICAgICAgICAgICAgICAgICBpZD1cIjI2XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMjZcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcImFnZVwiKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbD4yNi0yOTwvTGFiZWw+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvQWdlXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiMzBcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIzMFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwibWFpbFwiKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMYWJlbD4rIDMwPC9MYWJlbD5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyZXVyXCI+e3RoaXMuc3RhdGUuYWdlRXJyZXVyfTwvZGl2PlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8aDM+U2V4ZTwvaDM+XG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cbiAgICAgICAgICAgICAgICA8TGFiZWw+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNleGVcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImhvbW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJob21tZVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiaG9tbWVcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwic2V4ZVwiKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICBob21tZVxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsPlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZXhlXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmZW1tZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZmVtbWVcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImZlbW1lXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcInNleGVcIil9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgZmVtbWVcbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxuICAgICAgICAgICAgICAgIDxMYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2V4ZVwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiYXV0cmVcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImF1dHJlXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJhdXRyZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJzZXhlXCIpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIGF1dHJlXG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyZXVyXCI+e3RoaXMuc3RhdGUuc2V4ZUVycmV1cn08L2Rpdj5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPGgzPkVzdC1jZSBxdWUgdm91cyB2b3VzIGNvbnNpZMOpcmV6IGNvbW1lIMKrZMOpc29iw6lpc3NhbnTCuyA/PC9oMz5cbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNvYmVpXCJcbiAgICAgICAgICAgICAgICAgIGlkPVwib3VpXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwib3VpXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJkZXNvYmVpc3NhbnRcIil9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWw+b3VpPC9MYWJlbD5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzb2JlaVwiXG4gICAgICAgICAgICAgICAgICBpZD1cInVuUGV1XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwidW4gcGV1XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJkZXNvYmVpc3NhbnRcIil9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGFiZWw+dW4gcGV1PC9MYWJlbD5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzb2JlaVwiXG4gICAgICAgICAgICAgICAgICBpZD1cIm5vblwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIm5vblwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwiZGVzb2JlaXNzYW50XCIpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPExhYmVsPm5vbjwvTGFiZWw+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycmV1clwiPnt0aGlzLnN0YXRlLmRlc29iZWlzc2FudEVycmV1cn08L2Rpdj5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgPHRhYmxlIGlkPVwidGFiRGVzb2JlaVwiPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRoZWFkXCI+QWN0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRoZWFkXCI+RMOpasOgIHLDqWFsaXPDqTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0aGVhZFwiPkVmZmljYWNlPC90aD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5TaWduZXIgdW5lIHDDqXRpdGlvbjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicGV0aXRpb25SZWFsaXNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwZXRpdGlvbkVmZmljYWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5GYWlyZSB1biBkb248L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImRvblJlYWxpc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImRvbkVmZmljYWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5QcmF0aXF1ZXIgbGUgesOpcm8gZMOpY2hldCwgY2hhbmdlciBtZXMgaGFiaXR1ZGVzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJlY29sb2dpcXVlUmVhbGlzZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZWNvbG9naXF1ZUVmZmljYWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5N4oCZaW5mb3JtZXIgw6AgcHJvcG9zIGRlIGwnYWN0dWFsaXTDqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiaW5mb3JtZXJSZWFsaXNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJpbmZvcm1lckVmZmljYWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5N4oCZZW5nYWdlciBlbiBwb2xpdGlxdWU8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInBvbGl0aXF1ZVJlYWxpc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInBvbGl0aXF1ZUVmZmljYWNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5GYWlyZSBsYSBncsOodmU8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImdyZXZlUmVhbGlzZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZ3JldmVFZmZpY2FjZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+TWFuaWZlc3RlcjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwibWFuaWZlc3RlclJlYWxpc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIm1hbmlmZXN0ZXJFZmZpY2FjZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+RmFpcmUgZGUgbGEgZMOpc29iw6lpc3NhbmNlIGNpdmlsZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZGVzb2JlaXNzYW50UmVhbGlzZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZGVzb2JlaXNzYW50RWZmaWNhY2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0bkxvZ2luXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoKX0+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlMnaW5zY3JpcmU8L2xhYmVsPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc2NyaXB0aW9uO1xuIiwiZXhwb3J0IGNvbnN0IGxkdGRhdGEgPSBbXHJcbiAge1xyXG4gICAgcGVyaW9kZTogMTkzMCxcclxuICAgIG5vbTogYCBHYW5kaGlgLFxyXG4gICAgcmVwb25zZUpvdWV1cjogMSxcclxuICB9LFxyXG4gIHtcclxuICAgIHBlcmlvZGU6IDE5NjAsXHJcbiAgICBub206IGAgQXltZXJpY2AsXHJcbiAgICByZXBvbnNlSm91ZXVyOiAyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGVyaW9kZTogMTQ5MCxcclxuICAgIG5vbTogYCBTZWJgLFxyXG4gICAgcmVwb25zZUpvdWV1cjogMyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBlcmlvZGU6IDE5MzAsXHJcbiAgICBub206IGAgSHVtYmVyYCxcclxuICAgIHJlcG9uc2VKb3VldXI6IDEsXHJcbiAgfSxcclxuXTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgbGR0ZGF0YSB9IGZyb20gXCIuL0xEVERhdGFcIjtcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7IGZhQ2hlY2ssIGZhVGltZXMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5cbmNsYXNzIExpZ25lRHVUZW1wcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpY2hlOiBbXG4gICAgICAgIHsgbm9tOiBcIlwiIH0sXG4gICAgICAgIHsgcGVyaW9kZTogXCJcIiB9LFxuICAgICAgICB7IGxpZXU6IFwiXCIgfSxcbiAgICAgICAgeyBsdXR0ZTogXCJcIiB9LFxuICAgICAgICB7IHN0cmF0ZWdpZTogXCJcIiB9LFxuICAgICAgICB7IGFjdGlvbjogXCJcIiB9LFxuICAgICAgICB7IHZpY3RvaXJlOiBcIlwiIH0sXG4gICAgICAgIHsgYW5uZWNkb3RlOiBcIlwiIH0sXG4gICAgICAgIHsgY2l0YXRpb246IFwiXCIgfSxcbiAgICAgICAgeyBxdWVzdGlvbjogXCJcIiB9LFxuICAgICAgICB7IHJlcG9uc2UxOiBcIlwiIH0sXG4gICAgICAgIHsgcmVwb25zZTI6IFwiXCIgfSxcbiAgICAgICAgeyByZXBvbnNlMzogXCJcIiB9LFxuICAgICAgICB7IHZpZGVvOiBcIlwiIH0sXG4gICAgICAgIHsgYXJ0aWNsZTogXCJcIiB9LFxuICAgICAgICB7IHJlcG9uc2VKb3VldXI6IFwiXCIgfSxcbiAgICAgIF0sXG4gICAgICBtb2RhbDogZmFsc2UsXG4gICAgICBhY3RpdmVNb2RhbDogbnVsbCxcbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICBtb2RhbDogIXByZXZTdGF0ZS5tb2RhbCxcbiAgICB9KSk7XG4gIH1cblxuICByZXBvbnNlKHJlcG9uc2UpIHtcbiAgICBpZiAocmVwb25zZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPVwiY2hlY2tJY29uXCIgaWNvbj17ZmFDaGVja30gLz47XG4gICAgfVxuICAgIHJldHVybiA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cImZhbHNlSWNvblwiIGljb249e2ZhVGltZXN9IC8+O1xuICB9XG5cbiAgY2hhbmdlVmFyaWFibGUocGVyaW9kZXMsIG5vbXMsIHJlcG9uc2VKb3VldXJzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwZXJpb2RlOiBwZXJpb2Rlcy52YWx1ZSxcbiAgICAgIG5vbTogbm9tcy52YWx1ZSxcbiAgICAgIHJlcG9uc2VKb3VldXI6IHJlcG9uc2VKb3VldXJzLnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgbGlnbmVEdVRlbXBzKCkge1xuICAgIHJldHVybiBsZHRkYXRhLm1hcCgoeyBpZCwgcGVyaW9kZSwgbm9tLCByZXBvbnNlSm91ZXVyIH0pID0+IChcbiAgICAgIDx0ciBrZXk9e2lkfT5cbiAgICAgICAgPHRkPntub219PC90ZD5cbiAgICAgICAgPHRkPntwZXJpb2RlfTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyZXBvbnNlSm91ZXVyXCI+e3RoaXMucmVwb25zZShyZXBvbnNlSm91ZXVyKX08L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cbiAgICAgICAgICAgIFBsdXMgZCdpbmZvcm1hdGlvblxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICApKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhZHJlU29tYnJlXCI+XG4gICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgbW9kYWxDbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIlxuICAgICAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUubW9kYWx9XG4gICAgICAgICAgICAgIGZhZGU9e2ZhbHNlfVxuICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMudG9nZ2xlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TW9kYWxIZWFkZXIgdG9nZ2xlPXt0aGlzLnRvZ2dsZX0+e3RoaXMuc3RhdGUubm9tfTwvTW9kYWxIZWFkZXI+XG4gICAgICAgICAgICAgIDxNb2RhbEJvZHk+VGV4dGU8L01vZGFsQm9keT5cbiAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L01vZGFsRm9vdGVyPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJsZHRUaXRyZVwiPlxuICAgICAgICAgICAgICBWb3MgcsOpc3VsdGF0cyBhdXggcXVlc3Rpb25zIGRlcyBkw6lzb2LDqWlzc2FudHNcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8dGFibGUgaWQ9XCJ0YWJEZXNvYmVpXCI+XG4gICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGhlYWRcIj5Ob208L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRoZWFkXCI+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGhlYWRcIj5Sw6lzdWx0YXQ8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRoZWFkXCI+SW5mb3M8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keT57dGhpcy5saWduZUR1VGVtcHMoKX08L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpZ25lRHVUZW1wcztcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuXG5jbGFzcyBQb3N0cyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5nZXRQb3N0cygpO1xuICAgIH1cblxuICAgIGdldFBvc3RzKCkge1xuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy9gKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3N0cyA9IHJlcy5kYXRhLnNsaWNlKDAsMTUpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvc3RzLCBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgbG9hZGluZyA9IHRoaXMuc3RhdGUubG9hZGluZztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyb3ctc2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj48c3Bhbj5MaXN0IG9mIHBvc3RzPC9zcGFuPkNyZWF0ZWQgd2l0aCA8aVxuICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1oZWFydFwiPjwvaT4gYnkgeWVtaXdlYmJ5IDwvaDI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydyb3cgdGV4dC1jZW50ZXInfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLXNwaW4gZmEtc3Bpbm5lciBmYS00eFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncm93J30+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5wb3N0cy5tYXAocG9zdCA9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMCBvZmZzZXQtbWQtMSByb3ctYmxvY2tcIiBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICAgIDx1bCBpZD1cInNvcnRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDQ+e3Bvc3QudGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICA8cD57cG9zdC5ib2R5fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RzOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy9pbXBvcnQgeyBxdWl6emRhdGEgfSBmcm9tIFwiLi9RdWl6ekRhdGFcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmNsYXNzIFF1aXp6IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7IFxyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGN1cnJlbnRRdWVzdGlvbjogMCxcclxuICAgICAgbXlBbnN3ZXI6IG51bGwsXHJcbiAgICAgIG9wdGlvbnM6IFtdLFxyXG4gICAgICBzY29yZTogMSxcclxuICAgICAgZGlzYWJsZWQ6IHRydWUsXHJcbiAgICAgIGlzRW5kOiBmYWxzZSxcclxuICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICBxdWl6emRhdGE6IFtdLFxyXG4gICAgICBpZDpcIlwiLFxyXG4gICAgICBxdWVzdGlvbjpcIlwiLFxyXG4gICAgICByZXBvbnNlMTpcIlwiLFxyXG4gICAgICByZXBvbnNlMjpcIlwiLCAgICAgIFxyXG4gICAgICByZXBvbnNlMzpcIlwiLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9hZHF1aXp6ZGF0YSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHF1aXp6ZGF0YSA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiB0aGlzLnN0YXRlLmlkLFxyXG4gICAgICAgIHF1ZXN0aW9uOiB0aGlzLnN0YXRlLnF1ZXN0aW9uLFxyXG4gICAgICAgIG9wdGlvbnM6IFt0aGlzLnN0YXRlLnJlcG9uc2UxLCB0aGlzLnN0YXRlLnJlcG9uc2UyLCB0aGlzLnN0YXRlLnJlcG9uc2UzXSxcclxuICAgICAgICBhbnN3ZXI6IHRoaXMuc3RhdGUucmVwb25zZTEsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBxdWVzdGlvbnM6IHF1aXp6ZGF0YVt0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbl0ucXVlc3Rpb24sXHJcbiAgICAgICAgYW5zd2VyOiBxdWl6emRhdGFbdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb25dLmFuc3dlcixcclxuICAgICAgICBvcHRpb25zOiBxdWl6emRhdGFbdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb25dLm9wdGlvbnMsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBheGlvcy5nZXQoYC9hcGkvcXVpenovYClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZHF1aXp6ZGF0YShyZXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gIH1cclxuICBcclxuICBuZXh0UXVlc3Rpb25IYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3Rlc3QnKVxyXG4gICAgY29uc3QgeyBteUFuc3dlciwgYW5zd2VyLCBzY29yZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcblxyXG4gICAgaWYgKG15QW5zd2VyID09PSBhbnN3ZXIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc2NvcmU6IHNjb3JlICsgMSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjdXJyZW50UXVlc3Rpb246IHRoaXMuc3RhdGUuY3VycmVudFF1ZXN0aW9uICsgMSxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb24pO1xyXG4gIH07XHJcblxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbiAhPT0gcHJldlN0YXRlLmN1cnJlbnRRdWVzdGlvbikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICBxdWVzdGlvbnM6IHF1aXp6ZGF0YVt0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbl0ucXVlc3Rpb24sXHJcbiAgICAgICAgICBvcHRpb25zOiBxdWl6emRhdGFbdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb25dLm9wdGlvbnMsXHJcbiAgICAgICAgICBhbnN3ZXI6IHF1aXp6ZGF0YVt0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbl0uYW5zd2VyLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICAvL2NoZWNrIGFuc3dlclxyXG4gIGNoZWNrQW5zd2VyID0gKGFuc3dlcikgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG15QW5zd2VyOiBhbnN3ZXIsIGRpc2FibGVkOiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuXHJcbiAgZmluaXNoSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbiA9PT0gcXVpenpkYXRhLmxlbmd0aCAtIDEpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaXNFbmQ6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBvcHRpb25zLCBteUFuc3dlciwgY3VycmVudFF1ZXN0aW9uLCBpc0VuZCAsIHF1aXp6ZGF0YX0gPSB0aGlzLnN0YXRlO1xyXG5cclxuXHJcbiAgICBpZiAoaXNFbmQpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdCBjYWRyZVNvbWJyZVwiPlxyXG4gICAgICAgICAgPGgzPkdhbWUgT3ZlciB5b3VyIEZpbmFsIHNjb3JlIGlzIHt0aGlzLnN0YXRlLnNjb3JlfSBwb2ludHMgPC9oMz5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBUaGUgY29ycmVjdCBhbnN3ZXIncyBmb3IgdGhlIHF1ZXN0aW9ucyB3YXNcclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIHtxdWl6emRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInVpIGZsb2F0aW5nIG1lc3NhZ2Ugb3B0aW9uc1wiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5hbnN3ZXJ9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcCBjYWRyZVNvbWJyZVwiPlxyXG4gICAgICAgICAgPGgxPnt0aGlzLnN0YXRlLnF1ZXN0aW9uc30gPC9oMT5cclxuICAgICAgICAgIDxzcGFuPntgUXVlc3Rpb25zICR7Y3VycmVudFF1ZXN0aW9ufSAgb3V0IG9mIDIwIHJlbWFpbmluZyBgfTwvc3Bhbj5cclxuICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAga2V5PXtvcHRpb24uaWR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdWkgZmxvYXRpbmcgbWVzc2FnZSBvcHRpb25zICR7bXlBbnN3ZXIgPT09IG9wdGlvbiA/IFwic2VsZWN0ZWRcIiA6IG51bGx9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoZWNrQW5zd2VyKG9wdGlvbil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7b3B0aW9ufVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIHtjdXJyZW50UXVlc3Rpb24gPCAyMCAmJiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1aSBpbnZlcnRlZCBidXR0b25cIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmRpc2FibGVkfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubmV4dFF1ZXN0aW9uSGFuZGxlcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgey8qIC8vYWRkaW5nIGEgZmluaXNoIGJ1dHRvbiAqL31cclxuICAgICAgICAgIHtjdXJyZW50UXVlc3Rpb24gPT09IDIwICYmIChcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1aSBpbnZlcnRlZCBidXR0b25cIiBvbkNsaWNrPXt0aGlzLmZpbmlzaEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgIEZpbmlzaFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVpeno7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybUdyb3VwIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuY2xhc3MgUmVzdWx0YXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmJCb25uZVJlcG9uc2U6IFwiXCIsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKHBhZ2UpIHtcbiAgICBzd2l0Y2ggKHBhZ2UpIHtcbiAgICAgIGNhc2UgXCJxdWl6elwiOiB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL3F1aXp6XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJsaWduZVRwc1wiOiB7XG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL2xpZ25lZHV0ZW1wc1wiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhZHJlU29tYnJlXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicmVzdWx0VGl0cmVcIj5UdSBhcyBmaW5pIGxlIFF1aXp6IERlem9iZXlpICE8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRhdENvbnRlbnVcIj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgVHUgZXMgdW57XCIgXCJ9XG4gICAgICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgICAgICA8dT4oMyB0eXBlcyBkZSBwZXJzb25uZXMpPC91PlxuICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBUdSBhcyBldSAuLi57dGhpcy5zdGF0ZS5uYkJvbm5lUmVwb25zZX0gZGUgYm9ubmVzIHLDqXBvbnNlcyBzdXJcbiAgICAgICAgICAgICAgICAyMFxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bkxpZ25lVHBzXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soXCJsaWduZVRwc1wiKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+VGVzIHLDqXBvbnNlczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuUXVpenpcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljayhcInF1aXp6XCIpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5SZWZhaXJlIGxlIHF1aXp6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5xdWlub2EuYmVcIj5cbiAgICAgICAgICAgICAgICAgIFMnaW5zY2lyZSDDoCBsYSBuZXdzbGV0dGVyIGRlIFF1aW5vYVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRhdDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybUdyb3VwLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmNsYXNzIFNlQ29ubmVjdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImNhZHJlU29tYnJlXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9ybVRpdGxlIHRleHQtY2VudGVyXCI+U2UgQ29ubmVjdGVyPC9oMT5cbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxoMz5BZHJlc3NlIE1haWw8L2gzPlxuICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiXCIgLz5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgey8qIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgIDxoMz5BZHJlc3NlIG1haWw8L2gzPlxuICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJFbWFpbFwiIHBsYWNlaG9sZGVyPVwiXCIgLz5cbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPiAqL31cbiAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0bkxvZ2luXCI+U2UgQ29ubmVjdGVyPC9CdXR0b24+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZUNvbm5lY3RlcjtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgVXNlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRzdGF0ZSA9IHtcblx0XHRwZXJzb25zOiBbXVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0YXhpb3MuZ2V0KGAvYXBpL3VzZXJzL2ApXG5cdFx0XHQudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRjb25zdCBwZXJzb25zID0gcmVzLmRhdGE7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBwZXJzb25zIH0pO1xuXHRcdFx0fSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHVsPlxuXHRcdFx0XHR7IHRoaXMuc3RhdGUucGVyc29ucy5tYXAocGVyc29uID0+IDxsaT57cGVyc29uLnBzZXVkb308L2xpPil9XG5cdFx0XHQ8L3VsPlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyczsiXSwic291cmNlUm9vdCI6IiJ9