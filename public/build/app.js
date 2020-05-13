(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/img/dezobey.png":
/*!********************************!*\
  !*** ./assets/img/dezobey.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/build/images/dezobey.2f2ad90b.png";

/***/ }),

/***/ "./assets/img/logo.png":
/*!*****************************!*\
  !*** ./assets/img/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/build/images/logo.b927b26a.png";

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
/* harmony import */ var _img_dezobey_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/dezobey.png */ "./assets/img/dezobey.png");
/* harmony import */ var _img_dezobey_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_dezobey_png__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Accueil = /*#__PURE__*/function (_Component) {
  _inherits(Accueil, _Component);

  function Accueil() {
    _classCallCheck(this, Accueil);

    return _possibleConstructorReturn(this, _getPrototypeOf(Accueil).apply(this, arguments));
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
        src: _img_dezobey_png__WEBPACK_IMPORTED_MODULE_1___default.a,
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
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../img/logo.png */ "./assets/img/logo.png");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_img_logo_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "../../node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_11__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }














var Home = /*#__PURE__*/function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-md-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Nav"], {
        className: "navbar"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "logo",
        src: _img_logo_png__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "logo Quinoa"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavLink"], {
        className: "nav-link",
        href: "/accueil"
      }, "Accueil"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavLink"], {
        className: "nav-link",
        href: "/quizz"
      }, "Quizz"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavLink"], {
        className: "nav-link",
        href: "/LigneDuTemps"
      }, "LigneDuTemps"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavLink"], {
        className: "nav-link",
        href: "/seconnecter"
      }, "Se connecter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["NavLink"], {
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
        path: "/LigneDuTemps",
        component: _LigneDuTemps__WEBPACK_IMPORTED_MODULE_6__["default"]
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// noprotect




var Inscription = /*#__PURE__*/function (_Component) {
  _inherits(Inscription, _Component);

  function Inscription(props) {
    var _this;

    _classCallCheck(this, Inscription);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Inscription).call(this, props));
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

      if (isValid) {
        console.log(this.state);
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "sexe",
        id: "homme",
        value: "homme",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "sexe");
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "homme")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "radio"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "sexe",
        id: "femme",
        value: "femme",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "sexe");
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "femme")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "radio"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        type: "radio",
        name: "sexe",
        id: "autre",
        value: "autre",
        onChange: function onChange(item) {
          return _this2.handleChange(item, "sexe");
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], null, "autre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var LigneDuTemps = /*#__PURE__*/function (_Component) {
  _inherits(LigneDuTemps, _Component);

  function LigneDuTemps(props) {
    var _this;

    _classCallCheck(this, LigneDuTemps);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LigneDuTemps).call(this, props));
    _this.state = {
      evenements: [{
        periode: " "
      }, {
        nom: " "
      }]
    };
    return _this;
  }

  _createClass(LigneDuTemps, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('url api').then(function (response) {
        _this2.setState({
          response: response
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var elementsP = this.state.evenements.map(function (evenement) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, evenement.periode);
      });
      var elementsN = this.state.evenements.map(function (evenement) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, evenement.nom);
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-md-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cadreSombre"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        id: "tabDesobei"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Noms"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, elementsP, elementsN))))));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Posts = /*#__PURE__*/function (_Component) {
  _inherits(Posts, _Component);

  function Posts() {
    _classCallCheck(this, Posts);

    return _possibleConstructorReturn(this, _getPrototypeOf(Posts).apply(this, arguments));
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
/* harmony import */ var _QuizzData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuizzData */ "./assets/js/components/QuizzData.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Quizz = /*#__PURE__*/function (_React$Component) {
  _inherits(Quizz, _React$Component);

  function Quizz() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Quizz);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Quizz)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentQuestion: 0,
      myAnswer: null,
      options: [],
      score: 1,
      disabled: true,
      isEnd: false
    });

    _defineProperty(_assertThisInitialized(_this), "loadquizzdata", function () {
      // console.log(quizzdata[0].question)
      _this.setState(function () {
        return {
          questions: _QuizzData__WEBPACK_IMPORTED_MODULE_1__["quizzdata"][_this.state.currentQuestion].question,
          answer: _QuizzData__WEBPACK_IMPORTED_MODULE_1__["quizzdata"][_this.state.currentQuestion].answer,
          options: _QuizzData__WEBPACK_IMPORTED_MODULE_1__["quizzdata"][_this.state.currentQuestion].options
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
      if (_this.state.currentQuestion === _QuizzData__WEBPACK_IMPORTED_MODULE_1__["quizzdata"].length - 1) {
        _this.setState({
          isEnd: true
        });
      }
    });

    return _this;
  }

  _createClass(Quizz, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadquizzdata();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (this.state.currentQuestion !== prevState.currentQuestion) {
        this.setState(function () {
          return {
            disabled: true,
            questions: _QuizzData__WEBPACK_IMPORTED_MODULE_1__["quizzdata"][_this2.state.currentQuestion].question,
            options: _QuizzData__WEBPACK_IMPORTED_MODULE_1__["quizzdata"][_this2.state.currentQuestion].options,
            answer: _QuizzData__WEBPACK_IMPORTED_MODULE_1__["quizzdata"][_this2.state.currentQuestion].answer
          };
        });
      }
    } //check answer

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state2 = this.state,
          options = _this$state2.options,
          myAnswer = _this$state2.myAnswer,
          currentQuestion = _this$state2.currentQuestion,
          isEnd = _this$state2.isEnd;

      if (isEnd) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "result cadreSombre"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Game Over your Final score is ", this.state.score, " points "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The correct answer's for the questions was", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, _QuizzData__WEBPACK_IMPORTED_MODULE_1__["quizzdata"].map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            className: "ui floating message options",
            key: index
          }, item.answer);
        }))));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "App cadreSombre"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, this.state.questions, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Questions ".concat(currentQuestion, "  out of ").concat(_QuizzData__WEBPACK_IMPORTED_MODULE_1__["quizzdata"].length - 1, " remaining ")), options.map(function (option) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            key: option.id,
            className: "ui floating message options\n         ".concat(myAnswer === option ? "selected" : null, "\n         "),
            onClick: function onClick() {
              return _this3.checkAnswer(option);
            }
          }, option);
        }), currentQuestion < _QuizzData__WEBPACK_IMPORTED_MODULE_1__["quizzdata"].length - 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "ui inverted button",
          disabled: this.state.disabled,
          onClick: this.nextQuestionHandler
        }, "Next"), currentQuestion === _QuizzData__WEBPACK_IMPORTED_MODULE_1__["quizzdata"].length - 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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

/***/ "./assets/js/components/QuizzData.js":
/*!*******************************************!*\
  !*** ./assets/js/components/QuizzData.js ***!
  \*******************************************/
/*! exports provided: quizzdata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quizzdata", function() { return quizzdata; });
var quizzdata = [{
  id: 0,
  question: " What is the Capital Of India ?",
  options: ["New Delhi", "Mumbai", "Kolkatta"],
  answer: "New Delhi"
}, {
  id: 1,
  question: "Who is the CEO of Tesla Motors?",
  options: ["Bill Gates", "Steve Jobs", "Elon Musk"],
  answer: "Elon Musk"
}, {
  id: 3,
  question: "Name World's Richest Man?",
  options: ["Jeff Bezo", "Bill Gates", "Mark Zuckerberg"],
  answer: "Jeff Bezo"
}, {
  id: 4,
  question: "World's Longest River?",
  options: ["River Nile", "River Amazon", "River Godavari"],
  answer: "River Nile"
}];

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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var SeConnecter = /*#__PURE__*/function (_Component) {
  _inherits(SeConnecter, _Component);

  function SeConnecter() {
    _classCallCheck(this, SeConnecter);

    return _possibleConstructorReturn(this, _getPrototypeOf(SeConnecter).apply(this, arguments));
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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Users = /*#__PURE__*/function (_Component) {
  _inherits(Users, _Component);

  function Users() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Users);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Users)).call.apply(_getPrototypeOf2, [this].concat(args)));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZy9kZXpvYmV5LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1nL2xvZ28ucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWNjdWVpbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0luc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xpZ25lRHVUZW1wcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Qb3N0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9RdWl6ei5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9RdWl6ekRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU2VDb25uZWN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVXNlcnMuanMiXSwibmFtZXMiOlsiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQWNjdWVpbCIsImRlem9iZXkiLCJDb21wb25lbnQiLCJIb21lIiwibG9nbyIsIlVzZXJzIiwiUG9zdHMiLCJTZUNvbm5lY3RlciIsIkluc2NyaXB0aW9uIiwiUXVpenoiLCJMaWduZUR1VGVtcHMiLCJwcm9wcyIsInN0YXRlIiwicHNldWRvIiwibWFpbCIsImFnZSIsInNleGUiLCJkZXNvYmVpc3NhbnQiLCJwc2V1ZG9FcnJldXIiLCJtYWlsRXJyZXVyIiwiYWdlRXJyZXVyIiwic2V4ZUVycmV1ciIsImRlc29iZWlzc2FudEVycmV1ciIsInVzZXJPYmplY3QiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yIiwiaXRlbSIsImNoYW1wIiwiaXRlbVZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsImluY2x1ZGVzIiwiaXNWYWxpZCIsInZhbGlkYXRlIiwiaGlzdG9yeSIsInB1c2giLCJjcmVhdGVVc2VyIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwiZXZlbmVtZW50cyIsInBlcmlvZGUiLCJub20iLCJnZXQiLCJlbGVtZW50c1AiLCJtYXAiLCJldmVuZW1lbnQiLCJlbGVtZW50c04iLCJnZXRQb3N0cyIsInJlcyIsInBvc3RzIiwic2xpY2UiLCJsb2FkaW5nIiwiaWQiLCJ0aXRsZSIsImJvZHkiLCJjdXJyZW50UXVlc3Rpb24iLCJteUFuc3dlciIsIm9wdGlvbnMiLCJzY29yZSIsImRpc2FibGVkIiwiaXNFbmQiLCJxdWVzdGlvbnMiLCJxdWl6emRhdGEiLCJxdWVzdGlvbiIsImFuc3dlciIsImxlbmd0aCIsImxvYWRxdWl6emRhdGEiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJpbmRleCIsIm9wdGlvbiIsImNoZWNrQW5zd2VyIiwibmV4dFF1ZXN0aW9uSGFuZGxlciIsImZpbmlzaEhhbmRsZXIiLCJSZWFjdCIsInBlcnNvbnMiLCJwZXJzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLGdEQUFRLENBQUNDLE1BQVQsQ0FBZ0IsMkRBQUMsOERBQUQsUUFBUSwyREFBQyx3REFBRCxPQUFSLENBQWhCLEVBQTJDQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBM0MsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztJQUVNQyxPOzs7Ozs7Ozs7Ozs2QkFDSztBQUNQLGFBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsMkJBREYsRUFFRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLHlFQUNFLHVFQUNFLHNFQUNFLG9HQURGLENBREYsQ0FERixFQU1FLGlLQUVvQixzRUFGcEIsa1JBTkYsRUFjRSxvVUFkRixFQXFCRSx1RUFDRSxzRUFDRSx1RkFERixDQURGLENBckJGLEVBMEJFLG9tQkExQkYsRUFvQ0Usa2VBT0Usc0VBUEYsc0hBcENGLEVBOENFLDhKQTlDRixDQURGLEVBb0RFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQTRCLFdBQUcsRUFBRUMsdURBQWpDO0FBQTBDLFdBQUcsRUFBQztBQUE5QyxRQXBERixDQUZGLENBREYsQ0FERixDQURGO0FBK0REOzs7O0VBakVtQkMsK0M7O0FBb0VQRixzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUcsSTs7Ozs7Ozs7Ozs7NkJBQ0s7QUFDUCxhQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRSwyREFBQywrQ0FBRDtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQXNCLFdBQUcsRUFBRUMsb0RBQTNCO0FBQWlDLFdBQUcsRUFBQztBQUFyQyxRQURGLEVBRUUsMkRBQUMsbURBQUQsUUFDRSwyREFBQyxtREFBRDtBQUFTLGlCQUFTLEVBQUMsVUFBbkI7QUFBOEIsWUFBSSxFQUFDO0FBQW5DLG1CQURGLEVBSUUsMkRBQUMsbURBQUQ7QUFBUyxpQkFBUyxFQUFDLFVBQW5CO0FBQThCLFlBQUksRUFBQztBQUFuQyxpQkFKRixFQU9FLDJEQUFDLG1EQUFEO0FBQVMsaUJBQVMsRUFBQyxVQUFuQjtBQUE4QixZQUFJLEVBQUM7QUFBbkMsd0JBUEYsRUFVRSwyREFBQyxtREFBRDtBQUFTLGlCQUFTLEVBQUMsVUFBbkI7QUFBOEIsWUFBSSxFQUFDO0FBQW5DLHdCQVZGLEVBYUUsMkRBQUMsbURBQUQ7QUFBUyxpQkFBUyxFQUFDLFVBQW5CO0FBQThCLFlBQUksRUFBQztBQUFuQyx1QkFiRixDQUZGLENBREYsRUFzQkUsMkRBQUMsdURBQUQsUUFDRSwyREFBQyx5REFBRDtBQUFVLGFBQUssTUFBZjtBQUFnQixZQUFJLEVBQUMsR0FBckI7QUFBeUIsVUFBRSxFQUFDO0FBQTVCLFFBREYsRUFFRSwyREFBQyxzREFBRDtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGlCQUFTLEVBQUVDLDhDQUFLQTtBQUFyQyxRQUZGLEVBR0UsMkRBQUMsc0RBQUQ7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixpQkFBUyxFQUFFQyw4Q0FBS0E7QUFBckMsUUFIRixFQUlFLDJEQUFDLHNEQUFEO0FBQU8sWUFBSSxFQUFDLGNBQVo7QUFBMkIsaUJBQVMsRUFBRUMsb0RBQVdBO0FBQWpELFFBSkYsRUFLRSwyREFBQyxzREFBRDtBQUFPLFlBQUksRUFBQyxjQUFaO0FBQTJCLGlCQUFTLEVBQUVDLG9EQUFXQTtBQUFqRCxRQUxGLEVBTUUsMkRBQUMsc0RBQUQ7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixpQkFBUyxFQUFFQyw4Q0FBS0E7QUFBckMsUUFORixFQU9FLDJEQUFDLHNEQUFEO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsaUJBQVMsRUFBRVQsZ0RBQU9BO0FBQXpDLFFBUEYsRUFRRSwyREFBQyxzREFBRDtBQUFPLFlBQUksRUFBQyxlQUFaO0FBQTRCLGlCQUFTLEVBQUVVLHFEQUFZQTtBQUFuRCxRQVJGLENBdEJGLENBREYsQ0FERjtBQXFDRDs7OztFQXZDZ0JSLCtDOztBQTBDSkMsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBOztJQUVNSyxXOzs7QUFDSix1QkFBWUcsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixxRkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBQUUsRUFERztBQUVYQyxVQUFJLEVBQUUsRUFGSztBQUdYQyxTQUFHLEVBQUUsRUFITTtBQUlYQyxVQUFJLEVBQUUsRUFKSztBQUtYQyxrQkFBWSxFQUFFLEVBTEg7QUFNWEMsa0JBQVksRUFBRSxFQU5IO0FBT1hDLGdCQUFVLEVBQUUsRUFQRDtBQVFYQyxlQUFTLEVBQUUsRUFSQTtBQVNYQyxnQkFBVSxFQUFFLEVBVEQ7QUFVWEMsd0JBQWtCLEVBQUU7QUFWVCxLQUFiO0FBRmlCO0FBY2xCOzs7O2lDQUVZO0FBQ1gsVUFBTUMsVUFBVSxHQUFHO0FBQ2pCVixjQUFNLEVBQUUsS0FBS0QsS0FBTCxDQUFXQyxNQURGO0FBRWpCQyxZQUFJLEVBQUUsS0FBS0YsS0FBTCxDQUFXRSxJQUZBO0FBR2pCQyxXQUFHLEVBQUUsS0FBS0gsS0FBTCxDQUFXRyxHQUhDO0FBSWpCQyxZQUFJLEVBQUUsS0FBS0osS0FBTCxDQUFXSSxJQUpBO0FBS2pCQyxvQkFBWSxFQUFFLEtBQUtMLEtBQUwsQ0FBV0s7QUFMUixPQUFuQjtBQU9BTyxrREFBSyxDQUNGQyxJQURILENBQ1EsaUJBRFIsRUFDMkJGLFVBRDNCLEVBRUdHLElBRkgsQ0FFUSxVQUFDQyxRQUFELEVBQWM7QUFDbEJDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFRLENBQUNHLElBQXJCO0FBQ0QsT0FKSCxXQUtTLFVBQUNDLEtBQUQsRUFBVztBQUNoQkgsZUFBTyxDQUFDQyxHQUFSLENBQVlFLEtBQVo7QUFDRCxPQVBIO0FBUUQ7OztpQ0FFWUMsSSxFQUFNQyxLLEVBQU87QUFDeEIsVUFBSUMsU0FBUyxHQUFHRixJQUFJLENBQUNHLE1BQUwsQ0FBWUMsS0FBNUI7O0FBQ0EsY0FBUUgsS0FBUjtBQUNFLGFBQUssUUFBTDtBQUFlO0FBQ2IsaUJBQUtJLFFBQUwsQ0FBYztBQUFFeEIsb0JBQU0sRUFBRXFCO0FBQVYsYUFBZDtBQUNBO0FBQ0Q7O0FBQ0QsYUFBSyxNQUFMO0FBQWE7QUFDWCxpQkFBS0csUUFBTCxDQUFjO0FBQUV2QixrQkFBSSxFQUFFb0I7QUFBUixhQUFkO0FBQ0E7QUFDRDs7QUFDRCxhQUFLLEtBQUw7QUFBWTtBQUNWLGlCQUFLRyxRQUFMLENBQWM7QUFBRXRCLGlCQUFHLEVBQUVtQjtBQUFQLGFBQWQ7QUFDQTtBQUNEOztBQUNELGFBQUssTUFBTDtBQUFhO0FBQ1gsaUJBQUtHLFFBQUwsQ0FBYztBQUFFckIsa0JBQUksRUFBRWtCO0FBQVIsYUFBZDtBQUNBO0FBQ0Q7O0FBQ0QsYUFBSyxjQUFMO0FBQXFCO0FBQ25CLGlCQUFLRyxRQUFMLENBQWM7QUFBRXBCLDBCQUFZLEVBQUVpQjtBQUFoQixhQUFkO0FBQ0E7QUFDRDtBQXBCSDtBQXNCRDs7OytCQUVVO0FBQ1QsVUFBSWhCLFlBQVksR0FBRyxFQUFuQjtBQUNBLFVBQUlDLFVBQVUsR0FBRyxFQUFqQjtBQUNBLFVBQUlDLFNBQVMsR0FBRyxFQUFoQjtBQUNBLFVBQUlDLFVBQVUsR0FBRyxFQUFqQjtBQUNBLFVBQUlDLGtCQUFrQixHQUFHLEVBQXpCOztBQUVBLFVBQUksQ0FBQyxLQUFLVixLQUFMLENBQVdDLE1BQWhCLEVBQXdCO0FBQ3RCSyxvQkFBWSxHQUFHLDJCQUFmO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDLEtBQUtOLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQndCLFFBQWhCLENBQXlCLEdBQXpCLENBQUwsRUFBb0M7QUFDbENuQixrQkFBVSxHQUFHLHNCQUFiO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDLEtBQUtQLEtBQUwsQ0FBV0csR0FBaEIsRUFBcUI7QUFDbkJLLGlCQUFTLEdBQUcsMkJBQVo7QUFDRDs7QUFFRCxVQUFJLENBQUMsS0FBS1IsS0FBTCxDQUFXSSxJQUFoQixFQUFzQjtBQUNwQkssa0JBQVUsR0FBRywyQkFBYjtBQUNEOztBQUVELFVBQUksQ0FBQyxLQUFLVCxLQUFMLENBQVdLLFlBQWhCLEVBQThCO0FBQzVCSywwQkFBa0IsR0FBRywyQkFBckI7QUFDRDs7QUFFRCxVQUNFSCxVQUFVLElBQ1ZELFlBREEsSUFFQUUsU0FGQSxJQUdBQyxVQUhBLElBSUFDLGtCQUxGLEVBTUU7QUFDQSxhQUFLZSxRQUFMLENBQWM7QUFDWmxCLG9CQUFVLEVBQVZBLFVBRFk7QUFFWkQsc0JBQVksRUFBWkEsWUFGWTtBQUdaRSxtQkFBUyxFQUFUQSxTQUhZO0FBSVpDLG9CQUFVLEVBQVZBLFVBSlk7QUFLWkMsNEJBQWtCLEVBQWxCQTtBQUxZLFNBQWQ7QUFPQSxlQUFPLEtBQVA7QUFDRDs7QUFFRCxhQUFPLElBQVA7QUFDRDs7O21DQUVjO0FBQ2IsVUFBTWlCLE9BQU8sR0FBRyxLQUFLQyxRQUFMLEVBQWhCOztBQUNBLFVBQUlELE9BQUosRUFBYTtBQUNYWCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLakIsS0FBakI7QUFDQSxhQUFLRCxLQUFMLENBQVc4QixPQUFYLENBQW1CQyxJQUFuQixDQUF3QixRQUF4QjtBQUNBLGFBQUtDLFVBQUw7QUFDRDtBQUNGOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRSwyREFBQywrQ0FBRDtBQUFNLGlCQUFTLEVBQUMsYUFBaEI7QUFBOEIsY0FBTSxFQUFDO0FBQXJDLFNBQ0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsdUJBREYsRUFFRSwyREFBQyxvREFBRCxRQUNFLGdGQURGLEVBRUUsMkRBQUMsZ0RBQUQ7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFlBQUksRUFBQyxRQUZQO0FBR0UsVUFBRSxFQUFDLFFBSEw7QUFJRSxtQkFBVyxFQUFDLEVBSmQ7QUFLRSxnQkFBUSxFQUFFLGtCQUFDWCxJQUFEO0FBQUEsaUJBQVUsTUFBSSxDQUFDWSxZQUFMLENBQWtCWixJQUFsQixFQUF3QixRQUF4QixDQUFWO0FBQUE7QUFMWixRQUZGLEVBU0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBeUIsS0FBS3BCLEtBQUwsQ0FBV00sWUFBcEMsQ0FURixDQUZGLEVBY0UsMkRBQUMsb0RBQUQsUUFDRSxzRkFERixFQUVFLDJEQUFDLGdEQUFEO0FBQ0UsWUFBSSxFQUFDLE9BRFA7QUFFRSxZQUFJLEVBQUMsT0FGUDtBQUdFLFVBQUUsRUFBQyxPQUhMO0FBSUUsbUJBQVcsRUFBQyxFQUpkO0FBS0UsZ0JBQVEsRUFBRSxrQkFBQ2MsSUFBRDtBQUFBLGlCQUFVLE1BQUksQ0FBQ1ksWUFBTCxDQUFrQlosSUFBbEIsRUFBd0IsTUFBeEIsQ0FBVjtBQUFBO0FBTFosUUFGRixFQVNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQXlCLEtBQUtwQixLQUFMLENBQVdPLFVBQXBDLENBVEYsQ0FkRixFQXlCRSwyREFBQyxvREFBRCxRQUNFLDZFQURGLEVBRUUsMkRBQUMsb0RBQUQ7QUFBVyxpQkFBUyxFQUFDO0FBQXJCLFNBQ0UsMkRBQUMsZ0RBQUQ7QUFDRSxZQUFJLEVBQUMsT0FEUDtBQUVFLFlBQUksRUFBQyxVQUZQO0FBR0UsVUFBRSxFQUFDLElBSEw7QUFJRSxhQUFLLEVBQUMsSUFKUjtBQUtFLGdCQUFRLEVBQUUsa0JBQUNhLElBQUQ7QUFBQSxpQkFBVSxNQUFJLENBQUNZLFlBQUwsQ0FBa0JaLElBQWxCLEVBQXdCLEtBQXhCLENBQVY7QUFBQTtBQUxaLFFBREYsRUFRRSwyREFBQyxnREFBRCxnQkFSRixDQUZGLEVBWUUsMkRBQUMsb0RBQUQ7QUFBVyxpQkFBUyxFQUFDO0FBQXJCLFNBQ0UsMkRBQUMsZ0RBQUQ7QUFDRSxZQUFJLEVBQUMsT0FEUDtBQUVFLFlBQUksRUFBQyxVQUZQO0FBR0UsVUFBRSxFQUFDLElBSEw7QUFJRSxhQUFLLEVBQUMsSUFKUjtBQUtFLGdCQUFRLEVBQUUsa0JBQUNBLElBQUQ7QUFBQSxpQkFBVSxNQUFJLENBQUNZLFlBQUwsQ0FBa0JaLElBQWxCLEVBQXdCLEtBQXhCLENBQVY7QUFBQTtBQUxaLFFBREYsRUFRRSwyREFBQyxnREFBRCxnQkFSRixDQVpGLEVBc0JFLDJEQUFDLG9EQUFEO0FBQVcsaUJBQVMsRUFBQztBQUFyQixTQUNFLDJEQUFDLGdEQUFEO0FBQ0UsWUFBSSxFQUFDLE9BRFA7QUFFRSxZQUFJLEVBQUMsVUFGUDtBQUdFLFVBQUUsRUFBQyxJQUhMO0FBSUUsYUFBSyxFQUFDLElBSlI7QUFLRSxnQkFBUSxFQUFFLGtCQUFDQSxJQUFEO0FBQUEsaUJBQVUsTUFBSSxDQUFDWSxZQUFMLENBQWtCWixJQUFsQixFQUF3QixLQUF4QixDQUFWO0FBQUE7QUFMWixRQURGLEVBUUUsMkRBQUMsZ0RBQUQsZ0JBUkYsQ0F0QkYsRUFnQ0UsMkRBQUMsb0RBQUQ7QUFBVyxpQkFBUyxFQUFDO0FBQXJCLFNBQ0UsMkRBQUMsZ0RBQUQ7QUFDRSxZQUFJLEVBQUMsT0FEUDtBQUVFLFlBQUksRUFBQyxVQUZQO0FBR0UsVUFBRSxFQUFDLElBSEw7QUFJRSxhQUFLLEVBQUMsSUFKUjtBQUtFLGdCQUFRLEVBQUUsa0JBQUNBLElBQUQ7QUFBQSxpQkFBVSxNQUFJLENBQUNZLFlBQUwsQ0FBa0JaLElBQWxCLEVBQXdCLEtBQXhCLENBQVY7QUFBQTtBQUxaLFFBREYsRUFRRSwyREFBQyxnREFBRCxnQkFSRixDQWhDRixFQTBDRSwyREFBQyxvREFBRDtBQUFXLGlCQUFTLEVBQUM7QUFBckIsU0FDRSwyREFBQyxnREFBRDtBQUNFLFlBQUksRUFBQyxPQURQO0FBRUUsWUFBSSxFQUFDLFVBRlA7QUFHRSxVQUFFLEVBQUMsSUFITDtBQUlFLGFBQUssRUFBQyxJQUpSO0FBS0UsZ0JBQVEsRUFBRSxrQkFBQ0EsSUFBRDtBQUFBLGlCQUFVLE1BQUksQ0FBQ1ksWUFBTCxDQUFrQlosSUFBbEIsRUFBd0IsTUFBeEIsQ0FBVjtBQUFBO0FBTFosUUFERixFQVFFLDJEQUFDLGdEQUFELGVBUkYsQ0ExQ0YsRUFvREU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBeUIsS0FBS3BCLEtBQUwsQ0FBV1EsU0FBcEMsQ0FwREYsQ0F6QkYsRUErRUUsMkRBQUMsb0RBQUQsUUFDRSw4RUFERixFQUVFLDJEQUFDLG9EQUFEO0FBQVcsaUJBQVMsRUFBQztBQUFyQixTQUNFLDJEQUFDLGdEQUFEO0FBQ0UsWUFBSSxFQUFDLE9BRFA7QUFFRSxZQUFJLEVBQUMsTUFGUDtBQUdFLFVBQUUsRUFBQyxPQUhMO0FBSUUsYUFBSyxFQUFDLE9BSlI7QUFLRSxnQkFBUSxFQUFFLGtCQUFDWSxJQUFEO0FBQUEsaUJBQVUsTUFBSSxDQUFDWSxZQUFMLENBQWtCWixJQUFsQixFQUF3QixNQUF4QixDQUFWO0FBQUE7QUFMWixRQURGLEVBUUUsMkRBQUMsZ0RBQUQsZ0JBUkYsQ0FGRixFQVlFLDJEQUFDLG9EQUFEO0FBQVcsaUJBQVMsRUFBQztBQUFyQixTQUNFLDJEQUFDLGdEQUFEO0FBQ0UsWUFBSSxFQUFDLE9BRFA7QUFFRSxZQUFJLEVBQUMsTUFGUDtBQUdFLFVBQUUsRUFBQyxPQUhMO0FBSUUsYUFBSyxFQUFDLE9BSlI7QUFLRSxnQkFBUSxFQUFFLGtCQUFDQSxJQUFEO0FBQUEsaUJBQVUsTUFBSSxDQUFDWSxZQUFMLENBQWtCWixJQUFsQixFQUF3QixNQUF4QixDQUFWO0FBQUE7QUFMWixRQURGLEVBUUUsMkRBQUMsZ0RBQUQsZ0JBUkYsQ0FaRixFQXNCRSwyREFBQyxvREFBRDtBQUFXLGlCQUFTLEVBQUM7QUFBckIsU0FDRSwyREFBQyxnREFBRDtBQUNFLFlBQUksRUFBQyxPQURQO0FBRUUsWUFBSSxFQUFDLE1BRlA7QUFHRSxVQUFFLEVBQUMsT0FITDtBQUlFLGFBQUssRUFBQyxPQUpSO0FBS0UsZ0JBQVEsRUFBRSxrQkFBQ0EsSUFBRDtBQUFBLGlCQUFVLE1BQUksQ0FBQ1ksWUFBTCxDQUFrQlosSUFBbEIsRUFBd0IsTUFBeEIsQ0FBVjtBQUFBO0FBTFosUUFERixFQVFFLDJEQUFDLGdEQUFELGdCQVJGLENBdEJGLEVBZ0NFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQXlCLEtBQUtwQixLQUFMLENBQVdTLFVBQXBDLENBaENGLENBL0VGLEVBaUhFLDJEQUFDLG9EQUFELFFBQ0UsK0lBREYsRUFFRSwyREFBQyxvREFBRDtBQUFXLGlCQUFTLEVBQUM7QUFBckIsU0FDRSwyREFBQyxnREFBRDtBQUNFLFlBQUksRUFBQyxPQURQO0FBRUUsWUFBSSxFQUFDLFNBRlA7QUFHRSxVQUFFLEVBQUMsS0FITDtBQUlFLGFBQUssRUFBQyxLQUpSO0FBS0UsZ0JBQVEsRUFBRSxrQkFBQ1csSUFBRDtBQUFBLGlCQUFVLE1BQUksQ0FBQ1ksWUFBTCxDQUFrQlosSUFBbEIsRUFBd0IsY0FBeEIsQ0FBVjtBQUFBO0FBTFosUUFERixFQVFFLDJEQUFDLGdEQUFELGNBUkYsQ0FGRixFQVlFLDJEQUFDLG9EQUFEO0FBQVcsaUJBQVMsRUFBQztBQUFyQixTQUNFLDJEQUFDLGdEQUFEO0FBQ0UsWUFBSSxFQUFDLE9BRFA7QUFFRSxZQUFJLEVBQUMsU0FGUDtBQUdFLFVBQUUsRUFBQyxPQUhMO0FBSUUsYUFBSyxFQUFDLFFBSlI7QUFLRSxnQkFBUSxFQUFFLGtCQUFDQSxJQUFEO0FBQUEsaUJBQVUsTUFBSSxDQUFDWSxZQUFMLENBQWtCWixJQUFsQixFQUF3QixjQUF4QixDQUFWO0FBQUE7QUFMWixRQURGLEVBUUUsMkRBQUMsZ0RBQUQsaUJBUkYsQ0FaRixFQXNCRSwyREFBQyxvREFBRDtBQUFXLGlCQUFTLEVBQUM7QUFBckIsU0FDRSwyREFBQyxnREFBRDtBQUNFLFlBQUksRUFBQyxPQURQO0FBRUUsWUFBSSxFQUFDLFNBRlA7QUFHRSxVQUFFLEVBQUMsS0FITDtBQUlFLGFBQUssRUFBQyxLQUpSO0FBS0UsZ0JBQVEsRUFBRSxrQkFBQ0EsSUFBRDtBQUFBLGlCQUFVLE1BQUksQ0FBQ1ksWUFBTCxDQUFrQlosSUFBbEIsRUFBd0IsY0FBeEIsQ0FBVjtBQUFBO0FBTFosUUFERixFQVFFLDJEQUFDLGdEQUFELGNBUkYsQ0F0QkYsRUFnQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBeUIsS0FBS3BCLEtBQUwsQ0FBV1Usa0JBQXBDLENBaENGLENBakhGLEVBbUpFLDJEQUFDLG9EQUFELFFBQ0U7QUFBTyxVQUFFLEVBQUM7QUFBVixTQUNFLDBFQUNFLHVFQUNFO0FBQUksaUJBQVMsRUFBQztBQUFkLGtCQURGLEVBRUU7QUFBSSxpQkFBUyxFQUFDO0FBQWQsb0NBRkYsRUFHRTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxvQkFIRixDQURGLEVBTUUsdUVBQ0UsZ0dBREYsRUFFRTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUNFLDJEQUFDLGdEQUFEO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsWUFBSSxFQUFDO0FBQTVCLFFBREYsQ0FGRixFQUtFO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0UsMkRBQUMsZ0RBQUQ7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixZQUFJLEVBQUM7QUFBNUIsUUFERixDQUxGLENBTkYsRUFlRSx1RUFDRSxzRkFERixFQUVFO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0UsMkRBQUMsZ0RBQUQ7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixZQUFJLEVBQUM7QUFBNUIsUUFERixDQUZGLEVBS0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FDRSwyREFBQyxnREFBRDtBQUFPLFlBQUksRUFBQyxVQUFaO0FBQXVCLFlBQUksRUFBQztBQUE1QixRQURGLENBTEYsQ0FmRixFQXdCRSx1RUFDRSwrSEFERixFQUVFO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0UsMkRBQUMsZ0RBQUQ7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixZQUFJLEVBQUM7QUFBNUIsUUFERixDQUZGLEVBS0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FDRSwyREFBQyxnREFBRDtBQUFPLFlBQUksRUFBQyxVQUFaO0FBQXVCLFlBQUksRUFBQztBQUE1QixRQURGLENBTEYsQ0F4QkYsRUFpQ0UsdUVBQ0UsdUhBREYsRUFFRTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUNFLDJEQUFDLGdEQUFEO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsWUFBSSxFQUFDO0FBQTVCLFFBREYsQ0FGRixFQUtFO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0UsMkRBQUMsZ0RBQUQ7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixZQUFJLEVBQUM7QUFBNUIsUUFERixDQUxGLENBakNGLEVBMENFLHVFQUNFLHFHQURGLEVBRUU7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FDRSwyREFBQyxnREFBRDtBQUFPLFlBQUksRUFBQyxVQUFaO0FBQXVCLFlBQUksRUFBQztBQUE1QixRQURGLENBRkYsRUFLRTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUNFLDJEQUFDLGdEQUFEO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsWUFBSSxFQUFDO0FBQTVCLFFBREYsQ0FMRixDQTFDRixFQW1ERSx1RUFDRSwyRkFERixFQUVFO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0UsMkRBQUMsZ0RBQUQ7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixZQUFJLEVBQUM7QUFBNUIsUUFERixDQUZGLEVBS0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FDRSwyREFBQyxnREFBRDtBQUFPLFlBQUksRUFBQyxVQUFaO0FBQXVCLFlBQUksRUFBQztBQUE1QixRQURGLENBTEYsQ0FuREYsRUE0REUsdUVBQ0Usb0ZBREYsRUFFRTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUNFLDJEQUFDLGdEQUFEO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsWUFBSSxFQUFDO0FBQTVCLFFBREYsQ0FGRixFQUtFO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0UsMkRBQUMsZ0RBQUQ7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixZQUFJLEVBQUM7QUFBNUIsUUFERixDQUxGLENBNURGLEVBcUVFLHVFQUNFLGdIQURGLEVBRUU7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FDRSwyREFBQyxnREFBRDtBQUFPLFlBQUksRUFBQyxVQUFaO0FBQXVCLFlBQUksRUFBQztBQUE1QixRQURGLENBRkYsRUFLRTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUNFLDJEQUFDLGdEQUFEO0FBQU8sWUFBSSxFQUFDLFVBQVo7QUFBdUIsWUFBSSxFQUFDO0FBQTVCLFFBREYsQ0FMRixDQXJFRixDQURGLENBREYsQ0FuSkYsRUFzT0Usc0VBdE9GLEVBdU9FLDJEQUFDLG9EQUFEO0FBQVcsaUJBQVMsRUFBQztBQUFyQixTQUNFLDJEQUFDLGlEQUFEO0FBQVEsaUJBQVMsRUFBQyxVQUFsQjtBQUE2QixlQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUN1QixZQUFMLEVBQU47QUFBQTtBQUF0QyxTQUNFLHVGQURGLENBREYsQ0F2T0YsQ0FERixDQURGLENBREY7QUFtUEQ7Ozs7RUF6V3VCM0MsK0M7O0FBNFdYTSwwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pYQTtBQUNBOztJQUVNRSxZOzs7QUFFRix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLHNGQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1RrQyxnQkFBVSxFQUFFLENBQ1o7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FEWSxFQUVaO0FBQUVDLFdBQUcsRUFBRTtBQUFQLE9BRlk7QUFESCxLQUFiO0FBSGU7QUFRbEI7Ozs7d0NBRW1CO0FBQUE7O0FBQ2hCeEIsa0RBQUssQ0FBQ3lCLEdBQU4sQ0FBVSxTQUFWLEVBQ0N2QixJQURELENBQ00sVUFBQ0MsUUFBRCxFQUFjO0FBQ2hCLGNBQUksQ0FBQ1UsUUFBTCxDQUFjO0FBQUVWLGtCQUFRLEVBQUVBO0FBQVosU0FBZDtBQUNILE9BSEQ7QUFJSDs7OzZCQUdNO0FBRVAsVUFBTXVCLFNBQVMsR0FBRyxLQUFLdEMsS0FBTCxDQUFXa0MsVUFBWCxDQUFzQkssR0FBdEIsQ0FBMEIsVUFBQUMsU0FBUztBQUFBLGVBQ2pELHVFQUFLQSxTQUFTLENBQUNMLE9BQWYsQ0FEaUQ7QUFBQSxPQUFuQyxDQUFsQjtBQUdBLFVBQU1NLFNBQVMsR0FBRyxLQUFLekMsS0FBTCxDQUFXa0MsVUFBWCxDQUFzQkssR0FBdEIsQ0FBMEIsVUFBQUMsU0FBUztBQUFBLGVBQ2pELHVFQUFLQSxTQUFTLENBQUNKLEdBQWYsQ0FEaUQ7QUFBQSxPQUFuQyxDQUFsQjtBQUlBLGFBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0k7QUFBTyxVQUFFLEVBQUM7QUFBVixTQUNJLDBFQUNJLHVFQUNJLDhFQURKLEVBRUksOEVBRkosQ0FESixDQURKLEVBT0ksMEVBQ0ksdUVBQ0tFLFNBREwsRUFFS0csU0FGTCxDQURKLENBUEosQ0FESixDQURKLENBREYsQ0FERjtBQXNCRDs7OztFQW5Ed0JuRCwrQzs7QUFzRFpRLDJFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBQ0E7O0lBR01KLEs7Ozs7Ozs7Ozs7O3dDQUVrQjtBQUNoQixXQUFLZ0QsUUFBTDtBQUNIOzs7K0JBRVU7QUFBQTs7QUFDUDlCLGtEQUFLLENBQUN5QixHQUFOLGdEQUF5RHZCLElBQXpELENBQThELFVBQUE2QixHQUFHLEVBQUk7QUFDakUsWUFBTUMsS0FBSyxHQUFHRCxHQUFHLENBQUN6QixJQUFKLENBQVMyQixLQUFULENBQWUsQ0FBZixFQUFpQixFQUFqQixDQUFkOztBQUNBLGFBQUksQ0FBQ3BCLFFBQUwsQ0FBYztBQUFFbUIsZUFBSyxFQUFMQSxLQUFGO0FBQVNFLGlCQUFPLEVBQUU7QUFBbEIsU0FBZDtBQUNILE9BSEQ7QUFJSDs7OzZCQUVRO0FBQ0wsVUFBTUEsT0FBTyxHQUFHLEtBQUs5QyxLQUFMLENBQVc4QyxPQUEzQjtBQUNBLGFBQ0ksd0VBQ0E7QUFBUyxpQkFBUyxFQUFDO0FBQW5CLFNBQ0E7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDQTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNBO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQTRCLHlGQUE1QixtQkFBbUU7QUFDdkUsaUJBQVMsRUFBQztBQUQ2RCxRQUFuRSxtQkFEQSxDQURBLEVBTUhBLE9BQU8sR0FDSjtBQUFLLGlCQUFTLEVBQUU7QUFBaEIsU0FDQTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsUUFEQSxDQURJLEdBTVI7QUFBSyxpQkFBUyxFQUFFO0FBQWhCLFNBQ0ssS0FBSzlDLEtBQUwsQ0FBVzRDLEtBQVgsQ0FBaUJMLEdBQWpCLENBQXFCLFVBQUExQixJQUFJO0FBQUEsZUFDbEI7QUFBSyxtQkFBUyxFQUFDLGlDQUFmO0FBQWlELGFBQUcsRUFBRUEsSUFBSSxDQUFDa0M7QUFBM0QsV0FDSjtBQUFJLFlBQUUsRUFBQztBQUFQLFdBQ0EsdUVBQ0E7QUFBSyxtQkFBUyxFQUFDO0FBQWYsV0FDQTtBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUNBLHVFQUFLbEMsSUFBSSxDQUFDbUMsS0FBVixDQURBLEVBRUEsc0VBQUluQyxJQUFJLENBQUNvQyxJQUFULENBRkEsQ0FEQSxDQURBLENBREEsQ0FESSxDQURrQjtBQUFBLE9BQXpCLENBREwsQ0FaSSxDQURBLENBREEsQ0FESjtBQW9DSDs7OztFQW5EZTNELCtDOztBQXNETEksb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBQ0E7O0lBRU1HLEs7Ozs7Ozs7Ozs7Ozs7Ozs7NERBQ0k7QUFDTnFELHFCQUFlLEVBQUUsQ0FEWDtBQUVOQyxjQUFRLEVBQUUsSUFGSjtBQUdOQyxhQUFPLEVBQUUsRUFISDtBQUlOQyxXQUFLLEVBQUUsQ0FKRDtBQUtOQyxjQUFRLEVBQUUsSUFMSjtBQU1OQyxXQUFLLEVBQUU7QUFORCxLOztvRUFTUSxZQUFNO0FBQ3BCO0FBQ0EsWUFBSzlCLFFBQUwsQ0FBYyxZQUFNO0FBQ2xCLGVBQU87QUFDTCtCLG1CQUFTLEVBQUVDLG9EQUFTLENBQUMsTUFBS3pELEtBQUwsQ0FBV2tELGVBQVosQ0FBVCxDQUFzQ1EsUUFENUM7QUFFTEMsZ0JBQU0sRUFBRUYsb0RBQVMsQ0FBQyxNQUFLekQsS0FBTCxDQUFXa0QsZUFBWixDQUFULENBQXNDUyxNQUZ6QztBQUdMUCxpQkFBTyxFQUFFSyxvREFBUyxDQUFDLE1BQUt6RCxLQUFMLENBQVdrRCxlQUFaLENBQVQsQ0FBc0NFO0FBSDFDLFNBQVA7QUFLRCxPQU5EO0FBT0QsSzs7MEVBS3FCLFlBQU07QUFDMUI7QUFEMEIsd0JBRVUsTUFBS3BELEtBRmY7QUFBQSxVQUVsQm1ELFFBRmtCLGVBRWxCQSxRQUZrQjtBQUFBLFVBRVJRLE1BRlEsZUFFUkEsTUFGUTtBQUFBLFVBRUFOLEtBRkEsZUFFQUEsS0FGQTs7QUFJMUIsVUFBSUYsUUFBUSxLQUFLUSxNQUFqQixFQUF5QjtBQUN2QixjQUFLbEMsUUFBTCxDQUFjO0FBQ1o0QixlQUFLLEVBQUVBLEtBQUssR0FBRztBQURILFNBQWQ7QUFHRDs7QUFFRCxZQUFLNUIsUUFBTCxDQUFjO0FBQ1p5Qix1QkFBZSxFQUFFLE1BQUtsRCxLQUFMLENBQVdrRCxlQUFYLEdBQTZCO0FBRGxDLE9BQWQ7O0FBR0FsQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFLakIsS0FBTCxDQUFXa0QsZUFBdkI7QUFDRCxLOztrRUFlYSxVQUFDUyxNQUFELEVBQVk7QUFDeEIsWUFBS2xDLFFBQUwsQ0FBYztBQUFFMEIsZ0JBQVEsRUFBRVEsTUFBWjtBQUFvQkwsZ0JBQVEsRUFBRTtBQUE5QixPQUFkO0FBQ0QsSzs7b0VBRWUsWUFBTTtBQUNwQixVQUFJLE1BQUt0RCxLQUFMLENBQVdrRCxlQUFYLEtBQStCTyxvREFBUyxDQUFDRyxNQUFWLEdBQW1CLENBQXRELEVBQXlEO0FBQ3ZELGNBQUtuQyxRQUFMLENBQWM7QUFDWjhCLGVBQUssRUFBRTtBQURLLFNBQWQ7QUFHRDtBQUNGLEs7Ozs7Ozs7d0NBMUNtQjtBQUNsQixXQUFLTSxhQUFMO0FBQ0Q7Ozt1Q0FpQmtCQyxTLEVBQVdDLFMsRUFBVztBQUFBOztBQUN2QyxVQUFJLEtBQUsvRCxLQUFMLENBQVdrRCxlQUFYLEtBQStCYSxTQUFTLENBQUNiLGVBQTdDLEVBQThEO0FBQzVELGFBQUt6QixRQUFMLENBQWMsWUFBTTtBQUNsQixpQkFBTztBQUNMNkIsb0JBQVEsRUFBRSxJQURMO0FBRUxFLHFCQUFTLEVBQUVDLG9EQUFTLENBQUMsTUFBSSxDQUFDekQsS0FBTCxDQUFXa0QsZUFBWixDQUFULENBQXNDUSxRQUY1QztBQUdMTixtQkFBTyxFQUFFSyxvREFBUyxDQUFDLE1BQUksQ0FBQ3pELEtBQUwsQ0FBV2tELGVBQVosQ0FBVCxDQUFzQ0UsT0FIMUM7QUFJTE8sa0JBQU0sRUFBRUYsb0RBQVMsQ0FBQyxNQUFJLENBQUN6RCxLQUFMLENBQVdrRCxlQUFaLENBQVQsQ0FBc0NTO0FBSnpDLFdBQVA7QUFNRCxTQVBEO0FBUUQ7QUFDRixLLENBQ0Q7Ozs7NkJBWVM7QUFBQTs7QUFBQSx5QkFDK0MsS0FBSzNELEtBRHBEO0FBQUEsVUFDQ29ELE9BREQsZ0JBQ0NBLE9BREQ7QUFBQSxVQUNVRCxRQURWLGdCQUNVQSxRQURWO0FBQUEsVUFDb0JELGVBRHBCLGdCQUNvQkEsZUFEcEI7QUFBQSxVQUNxQ0ssS0FEckMsZ0JBQ3FDQSxLQURyQzs7QUFHUCxVQUFJQSxLQUFKLEVBQVc7QUFDVCxlQUNFO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQ0UseUdBQW1DLEtBQUt2RCxLQUFMLENBQVdxRCxLQUE5QyxhQURGLEVBRUUsb0hBRUUsdUVBQ0dJLG9EQUFTLENBQUNsQixHQUFWLENBQWMsVUFBQ25CLElBQUQsRUFBTzRDLEtBQVA7QUFBQSxpQkFDYjtBQUFJLHFCQUFTLEVBQUMsNkJBQWQ7QUFBNEMsZUFBRyxFQUFFQTtBQUFqRCxhQUNHNUMsSUFBSSxDQUFDdUMsTUFEUixDQURhO0FBQUEsU0FBZCxDQURILENBRkYsQ0FGRixDQURGO0FBZUQsT0FoQkQsTUFnQk87QUFDTCxlQUNFO0FBQUssbUJBQVMsRUFBQztBQUFmLFdBQ0UsdUVBQUssS0FBSzNELEtBQUwsQ0FBV3dELFNBQWhCLE1BREYsRUFFRSw2RkFBb0JOLGVBQXBCLHNCQUNFTyxvREFBUyxDQUFDRyxNQUFWLEdBQW1CLENBRHJCLGlCQUZGLEVBS0dSLE9BQU8sQ0FBQ2IsR0FBUixDQUFZLFVBQUMwQixNQUFEO0FBQUEsaUJBQ1g7QUFDRSxlQUFHLEVBQUVBLE1BQU0sQ0FBQ2xCLEVBRGQ7QUFFRSxxQkFBUyxrREFDWkksUUFBUSxLQUFLYyxNQUFiLEdBQXNCLFVBQXRCLEdBQW1DLElBRHZCLGdCQUZYO0FBS0UsbUJBQU8sRUFBRTtBQUFBLHFCQUFNLE1BQUksQ0FBQ0MsV0FBTCxDQUFpQkQsTUFBakIsQ0FBTjtBQUFBO0FBTFgsYUFPR0EsTUFQSCxDQURXO0FBQUEsU0FBWixDQUxILEVBZ0JHZixlQUFlLEdBQUdPLG9EQUFTLENBQUNHLE1BQVYsR0FBbUIsQ0FBckMsSUFDQztBQUNFLG1CQUFTLEVBQUMsb0JBRFo7QUFFRSxrQkFBUSxFQUFFLEtBQUs1RCxLQUFMLENBQVdzRCxRQUZ2QjtBQUdFLGlCQUFPLEVBQUUsS0FBS2E7QUFIaEIsa0JBakJKLEVBMEJHakIsZUFBZSxLQUFLTyxvREFBUyxDQUFDRyxNQUFWLEdBQW1CLENBQXZDLElBQ0M7QUFBUSxtQkFBUyxFQUFDLG9CQUFsQjtBQUF1QyxpQkFBTyxFQUFFLEtBQUtRO0FBQXJELG9CQTNCSixDQURGO0FBa0NEO0FBQ0Y7Ozs7RUF2SGlCQyw0Q0FBSyxDQUFDL0UsUzs7QUEwSFhPLG9FQUFmLEU7Ozs7Ozs7Ozs7OztBQzdIQTtBQUFBO0FBQU8sSUFBTTRELFNBQVMsR0FBRyxDQUN2QjtBQUNFVixJQUFFLEVBQUUsQ0FETjtBQUVFVyxVQUFRLG1DQUZWO0FBR0VOLFNBQU8sRUFBRSxtQ0FIWDtBQUlFTyxRQUFNO0FBSlIsQ0FEdUIsRUFPdkI7QUFDRVosSUFBRSxFQUFFLENBRE47QUFFRVcsVUFBUSxtQ0FGVjtBQUdFTixTQUFPLEVBQUUseUNBSFg7QUFJRU8sUUFBTTtBQUpSLENBUHVCLEVBYXZCO0FBQ0VaLElBQUUsRUFBRSxDQUROO0FBRUVXLFVBQVEsNkJBRlY7QUFHRU4sU0FBTyxFQUFFLDhDQUhYO0FBSUVPLFFBQU07QUFKUixDQWJ1QixFQW1CdkI7QUFDRVosSUFBRSxFQUFFLENBRE47QUFFRVcsVUFBUSwwQkFGVjtBQUdFTixTQUFPLEVBQUUsZ0RBSFg7QUFJRU8sUUFBTTtBQUpSLENBbkJ1QixDQUFsQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7QUFDQTs7SUFFTWhFLFc7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsYUFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFNBQ0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsd0JBREYsRUFFRSwyREFBQyxvREFBRCxRQUNFLHNGQURGLEVBRUUsMkRBQUMsZ0RBQUQ7QUFBTyxZQUFJLEVBQUMsT0FBWjtBQUFvQixZQUFJLEVBQUMsT0FBekI7QUFBaUMsVUFBRSxFQUFDLE9BQXBDO0FBQTRDLG1CQUFXLEVBQUM7QUFBeEQsUUFGRixDQUZGLEVBVUUsMkRBQUMsb0RBQUQ7QUFBVyxpQkFBUyxFQUFDO0FBQXJCLFNBQ0UsMkRBQUMsaURBQUQ7QUFBUSxpQkFBUyxFQUFDO0FBQWxCLHdCQURGLENBVkYsQ0FERixDQURGLENBREY7QUFvQkQ7Ozs7RUF0QnVCTCwrQzs7QUF5QlhLLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTs7SUFFTUYsSzs7Ozs7Ozs7Ozs7Ozs7Ozs0REFDRztBQUNQNkUsYUFBTyxFQUFFO0FBREYsSzs7Ozs7Ozt3Q0FJWTtBQUFBOztBQUNuQjFELGtEQUFLLENBQUN5QixHQUFOLGdCQUNFdkIsSUFERixDQUNPLFVBQUE2QixHQUFHLEVBQUk7QUFDWixZQUFNMkIsT0FBTyxHQUFHM0IsR0FBRyxDQUFDekIsSUFBcEI7O0FBQ0EsY0FBSSxDQUFDTyxRQUFMLENBQWM7QUFBRTZDLGlCQUFPLEVBQVBBO0FBQUYsU0FBZDtBQUNBLE9BSkY7QUFLQTs7OzZCQUVRO0FBQ1IsYUFDQyx1RUFDRyxLQUFLdEUsS0FBTCxDQUFXc0UsT0FBWCxDQUFtQi9CLEdBQW5CLENBQXVCLFVBQUFnQyxNQUFNO0FBQUEsZUFBSSx1RUFBS0EsTUFBTSxDQUFDdEUsTUFBWixDQUFKO0FBQUEsT0FBN0IsQ0FESCxDQUREO0FBS0E7Ozs7RUFuQmtCWCwrQzs7QUFzQkxHLG9FQUFmLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9idWlsZC9pbWFnZXMvZGV6b2JleS4yZjJhZDkwYi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2J1aWxkL2ltYWdlcy9sb2dvLmI5MjdiMjZhLnBuZ1wiOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0ICcuLi9jc3MvYXBwLmNzcyc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcclxuXHJcblJlYWN0RE9NLnJlbmRlcig8Um91dGVyPjxIb21lIC8+PC9Sb3V0ZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBkZXpvYmV5IGZyb20gXCIuLi8uLi9pbWcvZGV6b2JleS5wbmdcIjtcclxuXHJcbmNsYXNzIEFjY3VlaWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FkcmVTb21icmVcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFjY3VlaWxUaXRyZVwiPkxlIEpldSBEZXpvYmV5aTwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjdWVpbENvbnRlbnVcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAgPHU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGI+UHLDqXNlbnRhdGlvbiBkZSBsJ0FTQkwgOjwvYj5cclxuICAgICAgICAgICAgICAgICAgPC91PlxyXG4gICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBRdWlub2EgZXN0IHVuZSBPTkcgZCfDqWR1Y2F0aW9uIMOgIGxhIGNpdG95ZW5uZXTDqSBtb25kaWFsZSBldFxyXG4gICAgICAgICAgICAgICAgICBzb2xpZGFpcmUgKEVDTVMpLiA8YnI+PC9icj4gTCdFQ01TIGVzdCB1biBwcm9jZXNzdXMgcXVpIHZpc2Ugw6BcclxuICAgICAgICAgICAgICAgICAgcHJvdm9xdWVyIGRlcyBjaGFuZ2VtZW50cyBkZSB2YWxldXIgZXQgZGUgY29tcG9ydGVtZW50IHN1ciBsZVxyXG4gICAgICAgICAgICAgICAgICBwbGFuIGluZGl2aWR1ZWwgZXQgY29sbGVjdGlmIGVuIHZ1ZSBkJ3VuIG1vbmRlIHBsdXMganVzdGUgZGFuc1xyXG4gICAgICAgICAgICAgICAgICBsZXF1ZWwgcmVzc291cmNlcyBldCBwb3V2b2lycyBzb250IMOpcXVpdGFibGVtZW50IHLDqXBhcnRpcyBkYW5zXHJcbiAgICAgICAgICAgICAgICAgIGxlIHJlc3BlY3QgZGUgbGEgZGlnbml0w6kgaHVtYWluZS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBTZXMgYWN0aW9ucyA6IHByb2pldHMgaW50ZXJuYXRpb25hdXggKGF1c3NpIHNjb2xhaXJlcywgbWFpc29uXHJcbiAgICAgICAgICAgICAgICAgIGRlIGpldW5lcywgc2NvdXRzIGVuIEFtw6lyaXF1ZSBkZSBzdWQsIEFmcmlxdWUgZXQgQXNpZSkuIFByb2pldFxyXG4gICAgICAgICAgICAgICAgICBhbHRlcm5hdGl2ZSBsb2NhbGVzLiBBbmltYXRpb25zIHDDqWRhZ29naXF1ZXMgKEpldSBkZSBsYVxyXG4gICAgICAgICAgICAgICAgICBmaWNlbGxlLCBQb3RlbnRpYSwgSmV1IGRlcyBjaGFpc2VzLCBEZXpvYmV5aS4uLikuXHJcbiAgICAgICAgICAgICAgICAgIE1vYmlsaXNhdGlvbnMuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICAgIDx1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiPkpldSBEZXpvYmV5aSA6PC9iPlxyXG4gICAgICAgICAgICAgICAgICA8L3U+XHJcbiAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIEV0IHRvaSwgYXMtdHUgZMOpasOgIGRlc29iw6lpID8gRmFjZSDDoCBsJ2ludGltaWRhdGlvbiwgw6BcclxuICAgICAgICAgICAgICAgICAgbCdpbmp1c3RpY2UgY29tbWVudCByw6lhZ2lyID8gRmF1dC1pbCBwYXJmb2lzIGTDqXNvYsOpaXIgPyBRdWlub2FcclxuICAgICAgICAgICAgICAgICAgYXNibCBwcm9wb3NlIHVuIG91dGlsIHDDqWRhZ29naXF1ZSBhdXRvdXIgZGUgbCdhY3Rpb24gZGlyZWN0ZVxyXG4gICAgICAgICAgICAgICAgICBub24tdmlvbGVudGUgZXQgZGUgbGEgZMOpc29iw6lpc3NhbmNlIGNpdmlsZSA6IGR1IE5vcmQgYXUgU3VkLFxyXG4gICAgICAgICAgICAgICAgICBsJ2FjdGlvbiBkaXJlY3RlIG5vbi12aW9sZW50ZSBlc3QgKGV0IGEgdG91am91cnMgw6l0w6kpIHVuXHJcbiAgICAgICAgICAgICAgICAgIGxldmllciBkZSBjaGFuZ2VtZW50IHNvY2lhbC4gRHJvaXQgZGUgdm90ZSBkZXMgZmVtbWVzLFxyXG4gICAgICAgICAgICAgICAgICBhYm9saXRpb24gZGUgbGEgc8OpZ3LDqWdhdGlvbiwgcsOpY3Vww6lyYXRpb24gZGUgdGVycmVzLi4uIDogdG91c1xyXG4gICAgICAgICAgICAgICAgICBvbnQgw6l0w6kgb2J0ZW51cyBub3RhbW1lbnQgcGFyIGRlcyBhY3Rpb25zIGRlIFwiZMOpc29iw6lpc3NhbmNlXCIuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgTGUgamV1IGVudGVuZCBwYXJ0aXIgZHUgdsOpY3UgZGVzIHBhcnRpY2lwYW7igKJ04oCiZeKAonMgcG91ciBtaWV1eFxyXG4gICAgICAgICAgICAgICAgICB0b3VjaGVyIGF1IGNvZXVyIGRlcyBjYXVzZXMgcXVpIGxlcyBhbmltZW50IGV0IGxlcyBpbnNwaXJlbnQuXHJcbiAgICAgICAgICAgICAgICAgIEwnb3V0aWwgc2UgZMOpdmVsb3BwZSBlbiB1bmUgbGlnbmUgZHUgdGVtcHMgc3VyIGxhcXVlbGxlIGxl4oCibGFcclxuICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnTigKJlLCBlbiBwbHVzaWV1cnMgcGhhc2UgbHVkaXF1ZXMsIHBldXQgdGVzdGVyIHNlc1xyXG4gICAgICAgICAgICAgICAgICBjb25uYWlzc2FuY2VzIGV0IGFmZnV0ZXIgc2EgdmlzaW9uIGR1IG1vbmRlIGVuIHZveWFnZWFudCBkYW5zXHJcbiAgICAgICAgICAgICAgICAgIHVuZSBcImF1dHJlXCIgSGlzdG9pcmUgcXVlIGNlbGxlIHLDqWNvbnTDqWUgcGFyIGxlcyBcImRvbWluYW50c1wiLlxyXG4gICAgICAgICAgICAgICAgICA8YnI+PC9icj5MJ291dGlsIGxhaXNzZSBhdXNzaSBsYSBwbGFjZSBhdXggw6ljaGFuZ2VzIGV0IMOgXHJcbiAgICAgICAgICAgICAgICAgIGwnYWN0aW9uIGF2ZWMgZGVzIG1pc2VzIGVuIHNpdHVhdGlvbiBldCBkw6liYXRzIG1vdXZhbnRzLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIEV4cGxvcmV6IGxlcyBsdXR0ZXMgKGV0IGxlcyB2aWN0b2lyZXMpIGRlIGNlcyBmZW1tZXMgZXQgaG9tbWVzXHJcbiAgICAgICAgICAgICAgICAgIHF1aSBvbnQgZMOpc29iw6lpLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZ0FjY3VlaWxcIiBzcmM9e2Rlem9iZXl9IGFsdD1cImltYWdlIGpldVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY3VlaWw7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCwgUmVkaXJlY3QsIExpbmssIHdpdGhSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQWNjdWVpbCBmcm9tIFwiLi9BY2N1ZWlsXCI7XHJcbmltcG9ydCBVc2VycyBmcm9tIFwiLi9Vc2Vyc1wiO1xyXG5pbXBvcnQgUG9zdHMgZnJvbSBcIi4vUG9zdHNcIjtcclxuaW1wb3J0IEluc2NyaXB0aW9uIGZyb20gXCIuL0luc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBMaWduZUR1VGVtcHMgZnJvbSBcIi4vTGlnbmVEdVRlbXBzXCI7XHJcbmltcG9ydCBTZUNvbm5lY3RlciBmcm9tIFwiLi9TZUNvbm5lY3RlclwiO1xyXG5pbXBvcnQgUXVpenogZnJvbSBcIi4vUXVpenpcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSBcIi4uLy4uL2ltZy9sb2dvLnBuZ1wiO1xyXG5pbXBvcnQgeyBOYXYsIE5hdkl0ZW0sIE5hdkxpbmsgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9e2xvZ299IGFsdD1cImxvZ28gUXVpbm9hXCIgLz5cclxuICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2FjY3VlaWxcIj5cclxuICAgICAgICAgICAgICAgIEFjY3VlaWxcclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3F1aXp6XCI+XHJcbiAgICAgICAgICAgICAgICBRdWl6elxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvTGlnbmVEdVRlbXBzXCI+XHJcbiAgICAgICAgICAgICAgICBMaWduZUR1VGVtcHNcclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3NlY29ubmVjdGVyXCI+XHJcbiAgICAgICAgICAgICAgICBTZSBjb25uZWN0ZXJcclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2luc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICBJbnNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgPC9OYXY+XHJcblxyXG4gICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgPFJlZGlyZWN0IGV4YWN0IGZyb209XCIvXCIgdG89XCIvYWNjdWVpbFwiIC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3VzZXJzXCIgY29tcG9uZW50PXtVc2Vyc30gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcG9zdHNcIiBjb21wb25lbnQ9e1Bvc3RzfSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zZWNvbm5lY3RlclwiIGNvbXBvbmVudD17U2VDb25uZWN0ZXJ9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2luc2NyaXB0aW9uXCIgY29tcG9uZW50PXtJbnNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcXVpenpcIiBjb21wb25lbnQ9e1F1aXp6fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hY2N1ZWlsXCIgY29tcG9uZW50PXtBY2N1ZWlsfSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9MaWduZUR1VGVtcHNcIiBjb21wb25lbnQ9e0xpZ25lRHVUZW1wc30gLz5cclxuICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCIvLyBub3Byb3RlY3RcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIEZvcm1Hcm91cCwgTGFiZWwsIElucHV0IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY2xhc3MgSW5zY3JpcHRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwc2V1ZG86IFwiXCIsXHJcbiAgICAgIG1haWw6IFwiXCIsXHJcbiAgICAgIGFnZTogXCJcIixcclxuICAgICAgc2V4ZTogXCJcIixcclxuICAgICAgZGVzb2JlaXNzYW50OiBcIlwiLFxyXG4gICAgICBwc2V1ZG9FcnJldXI6IFwiXCIsXHJcbiAgICAgIG1haWxFcnJldXI6IFwiXCIsXHJcbiAgICAgIGFnZUVycmV1cjogXCJcIixcclxuICAgICAgc2V4ZUVycmV1cjogXCJcIixcclxuICAgICAgZGVzb2JlaXNzYW50RXJyZXVyOiBcIlwiLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVVzZXIoKSB7XHJcbiAgICBjb25zdCB1c2VyT2JqZWN0ID0ge1xyXG4gICAgICBwc2V1ZG86IHRoaXMuc3RhdGUucHNldWRvLFxyXG4gICAgICBtYWlsOiB0aGlzLnN0YXRlLm1haWwsXHJcbiAgICAgIGFnZTogdGhpcy5zdGF0ZS5hZ2UsXHJcbiAgICAgIHNleGU6IHRoaXMuc3RhdGUuc2V4ZSxcclxuICAgICAgZGVzb2JlaXNzYW50OiB0aGlzLnN0YXRlLmRlc29iZWlzc2FudCxcclxuICAgIH07XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvYWRkL1wiLCB1c2VyT2JqZWN0KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UoaXRlbSwgY2hhbXApIHtcclxuICAgIGxldCBpdGVtVmFsdWUgPSBpdGVtLnRhcmdldC52YWx1ZTtcclxuICAgIHN3aXRjaCAoY2hhbXApIHtcclxuICAgICAgY2FzZSBcInBzZXVkb1wiOiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBzZXVkbzogaXRlbVZhbHVlIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJtYWlsXCI6IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWFpbDogaXRlbVZhbHVlIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJhZ2VcIjoge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZ2U6IGl0ZW1WYWx1ZSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwic2V4ZVwiOiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNleGU6IGl0ZW1WYWx1ZSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwiZGVzb2JlaXNzYW50XCI6IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGVzb2JlaXNzYW50OiBpdGVtVmFsdWUgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhbGlkYXRlKCkge1xyXG4gICAgbGV0IHBzZXVkb0VycmV1ciA9IFwiXCI7XHJcbiAgICBsZXQgbWFpbEVycmV1ciA9IFwiXCI7XHJcbiAgICBsZXQgYWdlRXJyZXVyID0gXCJcIjtcclxuICAgIGxldCBzZXhlRXJyZXVyID0gXCJcIjtcclxuICAgIGxldCBkZXNvYmVpc3NhbnRFcnJldXIgPSBcIlwiO1xyXG5cclxuICAgIGlmICghdGhpcy5zdGF0ZS5wc2V1ZG8pIHtcclxuICAgICAgcHNldWRvRXJyZXVyID0gXCJsZSBjaGFtcCBkb2l0IMOqdHJlIHJlbXBsaVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5zdGF0ZS5tYWlsLmluY2x1ZGVzKFwiQFwiKSkge1xyXG4gICAgICBtYWlsRXJyZXVyID0gXCJsJ2VtYWlsIGVzdCBpbnZhbGlkZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5zdGF0ZS5hZ2UpIHtcclxuICAgICAgYWdlRXJyZXVyID0gXCJsZSBjaGFtcCBkb2l0IMOqdHJlIHJlbXBsaVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5zdGF0ZS5zZXhlKSB7XHJcbiAgICAgIHNleGVFcnJldXIgPSBcImxlIGNoYW1wIGRvaXQgw6p0cmUgcmVtcGxpXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmRlc29iZWlzc2FudCkge1xyXG4gICAgICBkZXNvYmVpc3NhbnRFcnJldXIgPSBcImxlIGNoYW1wIGRvaXQgw6p0cmUgcmVtcGxpXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBtYWlsRXJyZXVyIHx8XHJcbiAgICAgIHBzZXVkb0VycmV1ciB8fFxyXG4gICAgICBhZ2VFcnJldXIgfHxcclxuICAgICAgc2V4ZUVycmV1ciB8fFxyXG4gICAgICBkZXNvYmVpc3NhbnRFcnJldXJcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtYWlsRXJyZXVyLFxyXG4gICAgICAgIHBzZXVkb0VycmV1cixcclxuICAgICAgICBhZ2VFcnJldXIsXHJcbiAgICAgICAgc2V4ZUVycmV1cixcclxuICAgICAgICBkZXNvYmVpc3NhbnRFcnJldXIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgICBjb25zdCBpc1ZhbGlkID0gdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL3F1aXp6XCIpO1xyXG4gICAgICB0aGlzLmNyZWF0ZVVzZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImNhZHJlU29tYnJlXCIgbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9ybVRpdGxlIHRleHQtY2VudGVyXCI+SW5zY3JpcHRpb248L2gxPlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxoMz5Qc2V1ZG88L2gzPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBzZXVkb1wiXHJcbiAgICAgICAgICAgICAgICBpZD1cInBzZXVkb1wiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwicHNldWRvXCIpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJldXJcIj57dGhpcy5zdGF0ZS5wc2V1ZG9FcnJldXJ9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8aDM+QWRyZXNzZSBNYWlsPC9oMz5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwibWFpbFwiKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyZXVyXCI+e3RoaXMuc3RhdGUubWFpbEVycmV1cn08L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGgzPkFnZTwvaDM+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0FnZVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcImFnZVwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+MTYtMTg8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9BZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIjE5XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxOVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJhZ2VcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPjE5LTIxPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvQWdlXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIyMlwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMjJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwiYWdlXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD4yMi0yNTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0FnZVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiMjZcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIjI2XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcImFnZVwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+MjYtMjk8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9BZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIjMwXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJtYWlsXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD4rIDMwPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycmV1clwiPnt0aGlzLnN0YXRlLmFnZUVycmV1cn08L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGgzPlNleGU8L2gzPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2V4ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiaG9tbWVcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cImhvbW1lXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcInNleGVcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPmhvbW1lPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNleGVcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cImZlbW1lXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJmZW1tZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJzZXhlXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD5mZW1tZTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZXhlXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJhdXRyZVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiYXV0cmVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwic2V4ZVwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+YXV0cmU8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyZXVyXCI+e3RoaXMuc3RhdGUuc2V4ZUVycmV1cn08L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGgzPkVzdC1jZSBxdWUgdm91cyB2b3VzIGNvbnNpZMOpcmV6IGNvbW1lIMKrZMOpc29iw6lpc3NhbnTCuyA/PC9oMz5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc29iZWlcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIm91aVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwib3VpXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcImRlc29iZWlzc2FudFwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+b3VpPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc29iZWlcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInVuUGV1XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ1biBwZXVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwiZGVzb2JlaXNzYW50XCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD51biBwZXU8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzb2JlaVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwibm9uXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJub25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwiZGVzb2JlaXNzYW50XCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD5ub248L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyZXVyXCI+e3RoaXMuc3RhdGUuZGVzb2JlaXNzYW50RXJyZXVyfTwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8dGFibGUgaWQ9XCJ0YWJEZXNvYmVpXCI+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGhlYWRcIj5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0aGVhZFwiPkTDqWrDoCByw6lhbGlzw6k8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0aGVhZFwiPkVmZmljYWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5TaWduZXIgdW5lIHDDqXRpdGlvbjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInBldGl0aW9uUmVhbGlzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicGV0aXRpb25FZmZpY2FjZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5GYWlyZSB1biBkb248L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJkb25SZWFsaXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJkb25FZmZpY2FjZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5QcmF0aXF1ZXIgbGUgesOpcm8gZMOpY2hldCwgY2hhbmdlciBtZXMgaGFiaXR1ZGVzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZWNvbG9naXF1ZVJlYWxpc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImVjb2xvZ2lxdWVFZmZpY2FjZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5N4oCZaW5mb3JtZXIgw6AgcHJvcG9zIGRlIGwnYWN0dWFsaXTDqTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImluZm9ybWVyUmVhbGlzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiaW5mb3JtZXJFZmZpY2FjZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5N4oCZZW5nYWdlciBlbiBwb2xpdGlxdWU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwb2xpdGlxdWVSZWFsaXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwb2xpdGlxdWVFZmZpY2FjZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5GYWlyZSBsYSBncsOodmU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJncmV2ZVJlYWxpc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImdyZXZlRWZmaWNhY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+TWFuaWZlc3RlcjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIm1hbmlmZXN0ZXJSZWFsaXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJtYW5pZmVzdGVyRWZmaWNhY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+RmFpcmUgZGUgbGEgZMOpc29iw6lpc3NhbmNlIGNpdmlsZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImRlc29iZWlzc2FudFJlYWxpc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImRlc29iZWlzc2FudEVmZmljYWNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuTG9naW5cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVN1Ym1pdCgpfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5TJ2luc2NyaXJlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluc2NyaXB0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBMaWduZUR1VGVtcHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7IFxyXG4gICAgICAgIHN1cGVyKHByb3BzKTsgXHJcbiAgXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgXHJcbiAgICAgICAgICAgIGV2ZW5lbWVudHM6IFsgIFxyXG4gICAgICAgICAgICB7IHBlcmlvZGU6IFwiIFwiIH0sIFxyXG4gICAgICAgICAgICB7IG5vbTogXCIgXCIgfSxcclxuICAgICAgICAgICAgXX07IFxyXG4gICAgfSBcclxuICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkgeyBcclxuICAgICAgICBheGlvcy5nZXQoJ3VybCBhcGknKSBcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHsgXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXNwb25zZTogcmVzcG9uc2V9KTsgXHJcbiAgICAgICAgfSk7IFxyXG4gICAgfSBcclxuICAgICAgXHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50c1AgPSB0aGlzLnN0YXRlLmV2ZW5lbWVudHMubWFwKGV2ZW5lbWVudCA9PiAoXHJcbiAgICAgICAgPHRkPntldmVuZW1lbnQucGVyaW9kZX08L3RkPlxyXG4gICAgKSk7XHJcbiAgICBjb25zdCBlbGVtZW50c04gPSB0aGlzLnN0YXRlLmV2ZW5lbWVudHMubWFwKGV2ZW5lbWVudCA9PiAoXHJcbiAgICAgICAgPHRkPntldmVuZW1lbnQubm9tfTwvdGQ+XHJcbiAgICApKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FkcmVTb21icmVcIj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBpZD1cInRhYkRlc29iZWlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ob21zPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnRzUH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50c059XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlnbmVEdVRlbXBzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5jbGFzcyBQb3N0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRQb3N0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvc3RzKCkge1xyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzL2ApLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcG9zdHMgPSByZXMuZGF0YS5zbGljZSgwLDE1KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvc3RzLCBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGxvYWRpbmcgPSB0aGlzLnN0YXRlLmxvYWRpbmc7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm93LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+PHNwYW4+TGlzdCBvZiBwb3N0czwvc3Bhbj5DcmVhdGVkIHdpdGggPGlcclxuICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1oZWFydFwiPjwvaT4gYnkgeWVtaXdlYmJ5IDwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3JvdyB0ZXh0LWNlbnRlcid9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1zcGluIGZhLXNwaW5uZXIgZmEtNHhcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncm93J30+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnBvc3RzLm1hcChwb3N0ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgb2Zmc2V0LW1kLTEgcm93LWJsb2NrXCIga2V5PXtwb3N0LmlkfT5cclxuICAgICAgICAgICAgICAgIDx1bCBpZD1cInNvcnRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxoND57cG9zdC50aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgPHA+e3Bvc3QuYm9keX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RzOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcXVpenpkYXRhIH0gZnJvbSBcIi4vUXVpenpEYXRhXCI7XHJcblxyXG5jbGFzcyBRdWl6eiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBjdXJyZW50UXVlc3Rpb246IDAsXHJcbiAgICBteUFuc3dlcjogbnVsbCxcclxuICAgIG9wdGlvbnM6IFtdLFxyXG4gICAgc2NvcmU6IDEsXHJcbiAgICBkaXNhYmxlZDogdHJ1ZSxcclxuICAgIGlzRW5kOiBmYWxzZSxcclxuICB9O1xyXG5cclxuICBsb2FkcXVpenpkYXRhID0gKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2cocXVpenpkYXRhWzBdLnF1ZXN0aW9uKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcXVlc3Rpb25zOiBxdWl6emRhdGFbdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb25dLnF1ZXN0aW9uLFxyXG4gICAgICAgIGFuc3dlcjogcXVpenpkYXRhW3RoaXMuc3RhdGUuY3VycmVudFF1ZXN0aW9uXS5hbnN3ZXIsXHJcbiAgICAgICAgb3B0aW9uczogcXVpenpkYXRhW3RoaXMuc3RhdGUuY3VycmVudFF1ZXN0aW9uXS5vcHRpb25zLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmxvYWRxdWl6emRhdGEoKTtcclxuICB9XHJcbiAgbmV4dFF1ZXN0aW9uSGFuZGxlciA9ICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCd0ZXN0JylcclxuICAgIGNvbnN0IHsgbXlBbnN3ZXIsIGFuc3dlciwgc2NvcmUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgaWYgKG15QW5zd2VyID09PSBhbnN3ZXIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc2NvcmU6IHNjb3JlICsgMSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGN1cnJlbnRRdWVzdGlvbjogdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb24gKyAxLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb24gIT09IHByZXZTdGF0ZS5jdXJyZW50UXVlc3Rpb24pIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxyXG4gICAgICAgICAgcXVlc3Rpb25zOiBxdWl6emRhdGFbdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb25dLnF1ZXN0aW9uLFxyXG4gICAgICAgICAgb3B0aW9uczogcXVpenpkYXRhW3RoaXMuc3RhdGUuY3VycmVudFF1ZXN0aW9uXS5vcHRpb25zLFxyXG4gICAgICAgICAgYW5zd2VyOiBxdWl6emRhdGFbdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb25dLmFuc3dlcixcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgLy9jaGVjayBhbnN3ZXJcclxuICBjaGVja0Fuc3dlciA9IChhbnN3ZXIpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBteUFuc3dlcjogYW5zd2VyLCBkaXNhYmxlZDogZmFsc2UgfSk7XHJcbiAgfTtcclxuXHJcbiAgZmluaXNoSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbiA9PT0gcXVpenpkYXRhLmxlbmd0aCAtIDEpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaXNFbmQ6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBvcHRpb25zLCBteUFuc3dlciwgY3VycmVudFF1ZXN0aW9uLCBpc0VuZCB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBpZiAoaXNFbmQpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdCBjYWRyZVNvbWJyZVwiPlxyXG4gICAgICAgICAgPGgzPkdhbWUgT3ZlciB5b3VyIEZpbmFsIHNjb3JlIGlzIHt0aGlzLnN0YXRlLnNjb3JlfSBwb2ludHMgPC9oMz5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBUaGUgY29ycmVjdCBhbnN3ZXIncyBmb3IgdGhlIHF1ZXN0aW9ucyB3YXNcclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIHtxdWl6emRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInVpIGZsb2F0aW5nIG1lc3NhZ2Ugb3B0aW9uc1wiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5hbnN3ZXJ9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcCBjYWRyZVNvbWJyZVwiPlxyXG4gICAgICAgICAgPGgxPnt0aGlzLnN0YXRlLnF1ZXN0aW9uc30gPC9oMT5cclxuICAgICAgICAgIDxzcGFuPntgUXVlc3Rpb25zICR7Y3VycmVudFF1ZXN0aW9ufSAgb3V0IG9mICR7XHJcbiAgICAgICAgICAgIHF1aXp6ZGF0YS5sZW5ndGggLSAxXHJcbiAgICAgICAgICB9IHJlbWFpbmluZyBgfTwvc3Bhbj5cclxuICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAga2V5PXtvcHRpb24uaWR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdWkgZmxvYXRpbmcgbWVzc2FnZSBvcHRpb25zXHJcbiAgICAgICAgICR7bXlBbnN3ZXIgPT09IG9wdGlvbiA/IFwic2VsZWN0ZWRcIiA6IG51bGx9XHJcbiAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jaGVja0Fuc3dlcihvcHRpb24pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge29wdGlvbn1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uIDwgcXVpenpkYXRhLmxlbmd0aCAtIDEgJiYgKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgYnV0dG9uXCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm5leHRRdWVzdGlvbkhhbmRsZXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHsvKiAvL2FkZGluZyBhIGZpbmlzaCBidXR0b24gKi99XHJcbiAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uID09PSBxdWl6emRhdGEubGVuZ3RoIC0gMSAmJiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgYnV0dG9uXCIgb25DbGljaz17dGhpcy5maW5pc2hIYW5kbGVyfT5cclxuICAgICAgICAgICAgICBGaW5pc2hcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVpeno7XHJcbiIsImV4cG9ydCBjb25zdCBxdWl6emRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDAsXHJcbiAgICBxdWVzdGlvbjogYCBXaGF0IGlzIHRoZSBDYXBpdGFsIE9mIEluZGlhID9gLFxyXG4gICAgb3B0aW9uczogW2BOZXcgRGVsaGlgLCBgTXVtYmFpYCwgYEtvbGthdHRhYF0sXHJcbiAgICBhbnN3ZXI6IGBOZXcgRGVsaGlgLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBxdWVzdGlvbjogYFdobyBpcyB0aGUgQ0VPIG9mIFRlc2xhIE1vdG9ycz9gLFxyXG4gICAgb3B0aW9uczogW2BCaWxsIEdhdGVzYCwgYFN0ZXZlIEpvYnNgLCBgRWxvbiBNdXNrYF0sXHJcbiAgICBhbnN3ZXI6IGBFbG9uIE11c2tgLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBxdWVzdGlvbjogYE5hbWUgV29ybGQncyBSaWNoZXN0IE1hbj9gLFxyXG4gICAgb3B0aW9uczogW2BKZWZmIEJlem9gLCBgQmlsbCBHYXRlc2AsIGBNYXJrIFp1Y2tlcmJlcmdgXSxcclxuICAgIGFuc3dlcjogYEplZmYgQmV6b2AsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHF1ZXN0aW9uOiBgV29ybGQncyBMb25nZXN0IFJpdmVyP2AsXHJcbiAgICBvcHRpb25zOiBbYFJpdmVyIE5pbGVgLCBgUml2ZXIgQW1hem9uYCwgYFJpdmVyIEdvZGF2YXJpYF0sXHJcbiAgICBhbnN3ZXI6IGBSaXZlciBOaWxlYCxcclxuICB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybUdyb3VwLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5jbGFzcyBTZUNvbm5lY3RlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY2FkcmVTb21icmVcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvcm1UaXRsZSB0ZXh0LWNlbnRlclwiPlNlIENvbm5lY3RlcjwvaDE+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGgzPkFkcmVzc2UgTWFpbDwvaDM+XHJcbiAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICB7LyogPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8aDM+QWRyZXNzZSBtYWlsPC9oMz5cclxuICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJFbWFpbFwiIHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+ICovfVxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0bkxvZ2luXCI+U2UgQ29ubmVjdGVyPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZUNvbm5lY3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBVc2VycyBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0c3RhdGUgPSB7XHJcblx0XHRwZXJzb25zOiBbXVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHRheGlvcy5nZXQoYC9hcGkvdXNlcnMvYClcclxuXHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRjb25zdCBwZXJzb25zID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHBlcnNvbnMgfSk7XHJcblx0XHRcdH0pXHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8dWw+XHJcblx0XHRcdFx0eyB0aGlzLnN0YXRlLnBlcnNvbnMubWFwKHBlcnNvbiA9PiA8bGk+e3BlcnNvbi5wc2V1ZG99PC9saT4pfVxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7Il0sInNvdXJjZVJvb3QiOiIifQ==