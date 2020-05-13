(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/img/logo.png":
/*!*****************************!*\
  !*** ./assets/img/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/build/images/logo.b927b26a.png";

/***/ }),

/***/ "./assets/img/manif2.jpg":
/*!*******************************!*\
  !*** ./assets/img/manif2.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/build/images/manif2.7207ed9b.jpg";

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
/* harmony import */ var _img_manif2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/manif2.jpg */ "./assets/img/manif2.jpg");
/* harmony import */ var _img_manif2_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_manif2_jpg__WEBPACK_IMPORTED_MODULE_1__);
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
        src: _img_manif2_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
        alt: "Accueil"
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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
        },
        "data-testid": "button"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZy9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1nL21hbmlmMi5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9BY2N1ZWlsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSW5zY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTGlnbmVEdVRlbXBzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Bvc3RzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1F1aXp6LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1F1aXp6RGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9TZUNvbm5lY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Vc2Vycy5qcyJdLCJuYW1lcyI6WyJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJBY2N1ZWlsIiwiZGV6b2JleSIsIkNvbXBvbmVudCIsIkhvbWUiLCJMb2dvIiwiVXNlcnMiLCJQb3N0cyIsIlNlQ29ubmVjdGVyIiwiSW5zY3JpcHRpb24iLCJRdWl6eiIsIkxpZ25lRHVUZW1wcyIsInByb3BzIiwic3RhdGUiLCJwc2V1ZG8iLCJtYWlsIiwiYWdlIiwic2V4ZSIsImRlc29iZWlzc2FudCIsInBzZXVkb0VycmV1ciIsIm1haWxFcnJldXIiLCJhZ2VFcnJldXIiLCJzZXhlRXJyZXVyIiwiZGVzb2JlaXNzYW50RXJyZXVyIiwidXNlck9iamVjdCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyb3IiLCJpdGVtIiwiY2hhbXAiLCJpdGVtVmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiaW5jbHVkZXMiLCJpc1ZhbGlkIiwidmFsaWRhdGUiLCJoaXN0b3J5IiwicHVzaCIsImNyZWF0ZVVzZXIiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJldmVuZW1lbnRzIiwicGVyaW9kZSIsIm5vbSIsImdldCIsImVsZW1lbnRzUCIsIm1hcCIsImV2ZW5lbWVudCIsImVsZW1lbnRzTiIsImdldFBvc3RzIiwicmVzIiwicG9zdHMiLCJzbGljZSIsImxvYWRpbmciLCJpZCIsInRpdGxlIiwiYm9keSIsImN1cnJlbnRRdWVzdGlvbiIsIm15QW5zd2VyIiwib3B0aW9ucyIsInNjb3JlIiwiZGlzYWJsZWQiLCJpc0VuZCIsInF1ZXN0aW9ucyIsInF1aXp6ZGF0YSIsInF1ZXN0aW9uIiwiYW5zd2VyIiwibGVuZ3RoIiwibG9hZHF1aXp6ZGF0YSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImluZGV4Iiwib3B0aW9uIiwiY2hlY2tBbnN3ZXIiLCJuZXh0UXVlc3Rpb25IYW5kbGVyIiwiZmluaXNoSGFuZGxlciIsIlJlYWN0IiwicGVyc29ucyIsInBlcnNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsZ0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQiwyREFBQyw4REFBRCxRQUFRLDJEQUFDLHdEQUFELE9BQVIsQ0FBaEIsRUFBMkNDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUEzQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFKO0FBQUEsT0FBN0IsQ0FESCxDQUREO0FBS0E7Ozs7RUFuQmtCWCwrQzs7QUFzQkxHLG9FQUFmLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9idWlsZC9pbWFnZXMvbG9nby5iOTI3YjI2YS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2J1aWxkL2ltYWdlcy9tYW5pZjIuNzIwN2VkOWIuanBnXCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgJy4uL2Nzcy9hcHAuY3NzJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKDxSb3V0ZXI+PEhvbWUgLz48L1JvdXRlcj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGRlem9iZXkgZnJvbSBcIi4uLy4uL2ltZy9tYW5pZjIuanBnXCI7XHJcblxyXG5jbGFzcyBBY2N1ZWlsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhZHJlU29tYnJlXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJhY2N1ZWlsVGl0cmVcIj5MZSBKZXUgRGV6b2JleWk8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY3VlaWxDb250ZW51XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICAgIDx1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiPlByw6lzZW50YXRpb24gZGUgbCdBU0JMIDo8L2I+XHJcbiAgICAgICAgICAgICAgICAgIDwvdT5cclxuICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgUXVpbm9hIGVzdCB1bmUgT05HIGQnw6lkdWNhdGlvbiDDoCBsYSBjaXRveWVubmV0w6kgbW9uZGlhbGUgZXRcclxuICAgICAgICAgICAgICAgICAgc29saWRhaXJlIChFQ01TKS4gPGJyPjwvYnI+IEwnRUNNUyBlc3QgdW4gcHJvY2Vzc3VzIHF1aSB2aXNlIMOgXHJcbiAgICAgICAgICAgICAgICAgIHByb3ZvcXVlciBkZXMgY2hhbmdlbWVudHMgZGUgdmFsZXVyIGV0IGRlIGNvbXBvcnRlbWVudCBzdXIgbGVcclxuICAgICAgICAgICAgICAgICAgcGxhbiBpbmRpdmlkdWVsIGV0IGNvbGxlY3RpZiBlbiB2dWUgZCd1biBtb25kZSBwbHVzIGp1c3RlIGRhbnNcclxuICAgICAgICAgICAgICAgICAgbGVxdWVsIHJlc3NvdXJjZXMgZXQgcG91dm9pcnMgc29udCDDqXF1aXRhYmxlbWVudCByw6lwYXJ0aXMgZGFuc1xyXG4gICAgICAgICAgICAgICAgICBsZSByZXNwZWN0IGRlIGxhIGRpZ25pdMOpIGh1bWFpbmUuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgU2VzIGFjdGlvbnMgOiBwcm9qZXRzIGludGVybmF0aW9uYXV4IChhdXNzaSBzY29sYWlyZXMsIG1haXNvblxyXG4gICAgICAgICAgICAgICAgICBkZSBqZXVuZXMsIHNjb3V0cyBlbiBBbcOpcmlxdWUgZGUgc3VkLCBBZnJpcXVlIGV0IEFzaWUpLiBQcm9qZXRcclxuICAgICAgICAgICAgICAgICAgYWx0ZXJuYXRpdmUgbG9jYWxlcy4gQW5pbWF0aW9ucyBww6lkYWdvZ2lxdWVzIChKZXUgZGUgbGFcclxuICAgICAgICAgICAgICAgICAgZmljZWxsZSwgUG90ZW50aWEsIEpldSBkZXMgY2hhaXNlcywgRGV6b2JleWkuLi4pLlxyXG4gICAgICAgICAgICAgICAgICBNb2JpbGlzYXRpb25zLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgICA8dT5cclxuICAgICAgICAgICAgICAgICAgICA8Yj5KZXUgRGV6b2JleWkgOjwvYj5cclxuICAgICAgICAgICAgICAgICAgPC91PlxyXG4gICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBFdCB0b2ksIGFzLXR1IGTDqWrDoCBkZXNvYsOpaSA/IEZhY2Ugw6AgbCdpbnRpbWlkYXRpb24sIMOgXHJcbiAgICAgICAgICAgICAgICAgIGwnaW5qdXN0aWNlIGNvbW1lbnQgcsOpYWdpciA/IEZhdXQtaWwgcGFyZm9pcyBkw6lzb2LDqWlyID8gUXVpbm9hXHJcbiAgICAgICAgICAgICAgICAgIGFzYmwgcHJvcG9zZSB1biBvdXRpbCBww6lkYWdvZ2lxdWUgYXV0b3VyIGRlIGwnYWN0aW9uIGRpcmVjdGVcclxuICAgICAgICAgICAgICAgICAgbm9uLXZpb2xlbnRlIGV0IGRlIGxhIGTDqXNvYsOpaXNzYW5jZSBjaXZpbGUgOiBkdSBOb3JkIGF1IFN1ZCxcclxuICAgICAgICAgICAgICAgICAgbCdhY3Rpb24gZGlyZWN0ZSBub24tdmlvbGVudGUgZXN0IChldCBhIHRvdWpvdXJzIMOpdMOpKSB1blxyXG4gICAgICAgICAgICAgICAgICBsZXZpZXIgZGUgY2hhbmdlbWVudCBzb2NpYWwuIERyb2l0IGRlIHZvdGUgZGVzIGZlbW1lcyxcclxuICAgICAgICAgICAgICAgICAgYWJvbGl0aW9uIGRlIGxhIHPDqWdyw6lnYXRpb24sIHLDqWN1cMOpcmF0aW9uIGRlIHRlcnJlcy4uLiA6IHRvdXNcclxuICAgICAgICAgICAgICAgICAgb250IMOpdMOpIG9idGVudXMgbm90YW1tZW50IHBhciBkZXMgYWN0aW9ucyBkZSBcImTDqXNvYsOpaXNzYW5jZVwiLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIExlIGpldSBlbnRlbmQgcGFydGlyIGR1IHbDqWN1IGRlcyBwYXJ0aWNpcGFu4oCidOKAomXigKJzIHBvdXIgbWlldXhcclxuICAgICAgICAgICAgICAgICAgdG91Y2hlciBhdSBjb2V1ciBkZXMgY2F1c2VzIHF1aSBsZXMgYW5pbWVudCBldCBsZXMgaW5zcGlyZW50LlxyXG4gICAgICAgICAgICAgICAgICBMJ291dGlsIHNlIGTDqXZlbG9wcGUgZW4gdW5lIGxpZ25lIGR1IHRlbXBzIHN1ciBsYXF1ZWxsZSBsZeKAomxhXHJcbiAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW504oCiZSwgZW4gcGx1c2lldXJzIHBoYXNlIGx1ZGlxdWVzLCBwZXV0IHRlc3RlciBzZXNcclxuICAgICAgICAgICAgICAgICAgY29ubmFpc3NhbmNlcyBldCBhZmZ1dGVyIHNhIHZpc2lvbiBkdSBtb25kZSBlbiB2b3lhZ2VhbnQgZGFuc1xyXG4gICAgICAgICAgICAgICAgICB1bmUgXCJhdXRyZVwiIEhpc3RvaXJlIHF1ZSBjZWxsZSByw6ljb250w6llIHBhciBsZXMgXCJkb21pbmFudHNcIi5cclxuICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+TCdvdXRpbCBsYWlzc2UgYXVzc2kgbGEgcGxhY2UgYXV4IMOpY2hhbmdlcyBldCDDoFxyXG4gICAgICAgICAgICAgICAgICBsJ2FjdGlvbiBhdmVjIGRlcyBtaXNlcyBlbiBzaXR1YXRpb24gZXQgZMOpYmF0cyBtb3V2YW50cy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBFeHBsb3JleiBsZXMgbHV0dGVzIChldCBsZXMgdmljdG9pcmVzKSBkZSBjZXMgZmVtbWVzIGV0IGhvbW1lc1xyXG4gICAgICAgICAgICAgICAgICBxdWkgb250IGTDqXNvYsOpaS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWdBY2N1ZWlsXCIgc3JjPXtkZXpvYmV5fSBhbHQ9XCJBY2N1ZWlsXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjdWVpbDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoLCBSZWRpcmVjdCwgTGluaywgd2l0aFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBBY2N1ZWlsIGZyb20gXCIuL0FjY3VlaWxcIjtcclxuaW1wb3J0IFVzZXJzIGZyb20gXCIuL1VzZXJzXCI7XHJcbmltcG9ydCBQb3N0cyBmcm9tIFwiLi9Qb3N0c1wiO1xyXG5pbXBvcnQgSW5zY3JpcHRpb24gZnJvbSBcIi4vSW5zY3JpcHRpb25cIjtcclxuaW1wb3J0IExpZ25lRHVUZW1wcyBmcm9tIFwiLi9MaWduZUR1VGVtcHNcIjtcclxuaW1wb3J0IFNlQ29ubmVjdGVyIGZyb20gXCIuL1NlQ29ubmVjdGVyXCI7XHJcbmltcG9ydCBRdWl6eiBmcm9tIFwiLi9RdWl6elwiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vaW1nL2xvZ28ucG5nXCI7XHJcbmltcG9ydCB7IE5hdiwgTmF2SXRlbSwgTmF2TGluayB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzXCI7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz17TG9nb30gYWx0PVwibG9nbyBRdWlub2FcIiAvPlxyXG4gICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvYWNjdWVpbFwiPlxyXG4gICAgICAgICAgICAgICAgQWNjdWVpbFxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvcXVpenpcIj5cclxuICAgICAgICAgICAgICAgIFF1aXp6XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9MaWduZUR1VGVtcHNcIj5cclxuICAgICAgICAgICAgICAgIExpZ25lRHVUZW1wc1xyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvc2Vjb25uZWN0ZXJcIj5cclxuICAgICAgICAgICAgICAgIFNlIGNvbm5lY3RlclxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvaW5zY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIEluc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICA8L05hdj5cclxuXHJcbiAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICA8UmVkaXJlY3QgZXhhY3QgZnJvbT1cIi9cIiB0bz1cIi9hY2N1ZWlsXCIgLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvdXNlcnNcIiBjb21wb25lbnQ9e1VzZXJzfSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wb3N0c1wiIGNvbXBvbmVudD17UG9zdHN9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3NlY29ubmVjdGVyXCIgY29tcG9uZW50PXtTZUNvbm5lY3Rlcn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvaW5zY3JpcHRpb25cIiBjb21wb25lbnQ9e0luc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9xdWl6elwiIGNvbXBvbmVudD17UXVpenp9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FjY3VlaWxcIiBjb21wb25lbnQ9e0FjY3VlaWx9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL0xpZ25lRHVUZW1wc1wiIGNvbXBvbmVudD17TGlnbmVEdVRlbXBzfSAvPlxyXG4gICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsIi8vIG5vcHJvdGVjdFxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgRm9ybUdyb3VwLCBMYWJlbCwgSW5wdXQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuY2xhc3MgSW5zY3JpcHRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBwc2V1ZG86IFwiXCIsXHJcbiAgICAgIG1haWw6IFwiXCIsXHJcbiAgICAgIGFnZTogXCJcIixcclxuICAgICAgc2V4ZTogXCJcIixcclxuICAgICAgZGVzb2JlaXNzYW50OiBcIlwiLFxyXG4gICAgICBwc2V1ZG9FcnJldXI6IFwiXCIsXHJcbiAgICAgIG1haWxFcnJldXI6IFwiXCIsXHJcbiAgICAgIGFnZUVycmV1cjogXCJcIixcclxuICAgICAgc2V4ZUVycmV1cjogXCJcIixcclxuICAgICAgZGVzb2JlaXNzYW50RXJyZXVyOiBcIlwiLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVVzZXIoKSB7XHJcbiAgICBjb25zdCB1c2VyT2JqZWN0ID0ge1xyXG4gICAgICBwc2V1ZG86IHRoaXMuc3RhdGUucHNldWRvLFxyXG4gICAgICBtYWlsOiB0aGlzLnN0YXRlLm1haWwsXHJcbiAgICAgIGFnZTogdGhpcy5zdGF0ZS5hZ2UsXHJcbiAgICAgIHNleGU6IHRoaXMuc3RhdGUuc2V4ZSxcclxuICAgICAgZGVzb2JlaXNzYW50OiB0aGlzLnN0YXRlLmRlc29iZWlzc2FudCxcclxuICAgIH07XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvYWRkL1wiLCB1c2VyT2JqZWN0KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UoaXRlbSwgY2hhbXApIHtcclxuICAgIGxldCBpdGVtVmFsdWUgPSBpdGVtLnRhcmdldC52YWx1ZTtcclxuICAgIHN3aXRjaCAoY2hhbXApIHtcclxuICAgICAgY2FzZSBcInBzZXVkb1wiOiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBzZXVkbzogaXRlbVZhbHVlIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJtYWlsXCI6IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWFpbDogaXRlbVZhbHVlIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJhZ2VcIjoge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZ2U6IGl0ZW1WYWx1ZSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwic2V4ZVwiOiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNleGU6IGl0ZW1WYWx1ZSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwiZGVzb2JlaXNzYW50XCI6IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGVzb2JlaXNzYW50OiBpdGVtVmFsdWUgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhbGlkYXRlKCkge1xyXG4gICAgbGV0IHBzZXVkb0VycmV1ciA9IFwiXCI7XHJcbiAgICBsZXQgbWFpbEVycmV1ciA9IFwiXCI7XHJcbiAgICBsZXQgYWdlRXJyZXVyID0gXCJcIjtcclxuICAgIGxldCBzZXhlRXJyZXVyID0gXCJcIjtcclxuICAgIGxldCBkZXNvYmVpc3NhbnRFcnJldXIgPSBcIlwiO1xyXG5cclxuICAgIGlmICghdGhpcy5zdGF0ZS5wc2V1ZG8pIHtcclxuICAgICAgcHNldWRvRXJyZXVyID0gXCJsZSBjaGFtcCBkb2l0IMOqdHJlIHJlbXBsaVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5zdGF0ZS5tYWlsLmluY2x1ZGVzKFwiQFwiKSkge1xyXG4gICAgICBtYWlsRXJyZXVyID0gXCJsJ2VtYWlsIGVzdCBpbnZhbGlkZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5zdGF0ZS5hZ2UpIHtcclxuICAgICAgYWdlRXJyZXVyID0gXCJsZSBjaGFtcCBkb2l0IMOqdHJlIHJlbXBsaVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5zdGF0ZS5zZXhlKSB7XHJcbiAgICAgIHNleGVFcnJldXIgPSBcImxlIGNoYW1wIGRvaXQgw6p0cmUgcmVtcGxpXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmRlc29iZWlzc2FudCkge1xyXG4gICAgICBkZXNvYmVpc3NhbnRFcnJldXIgPSBcImxlIGNoYW1wIGRvaXQgw6p0cmUgcmVtcGxpXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBtYWlsRXJyZXVyIHx8XHJcbiAgICAgIHBzZXVkb0VycmV1ciB8fFxyXG4gICAgICBhZ2VFcnJldXIgfHxcclxuICAgICAgc2V4ZUVycmV1ciB8fFxyXG4gICAgICBkZXNvYmVpc3NhbnRFcnJldXJcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtYWlsRXJyZXVyLFxyXG4gICAgICAgIHBzZXVkb0VycmV1cixcclxuICAgICAgICBhZ2VFcnJldXIsXHJcbiAgICAgICAgc2V4ZUVycmV1cixcclxuICAgICAgICBkZXNvYmVpc3NhbnRFcnJldXIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgICBjb25zdCBpc1ZhbGlkID0gdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL3F1aXp6XCIpO1xyXG4gICAgICB0aGlzLmNyZWF0ZVVzZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImNhZHJlU29tYnJlXCIgbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9ybVRpdGxlIHRleHQtY2VudGVyXCI+SW5zY3JpcHRpb248L2gxPlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxoMz5Qc2V1ZG88L2gzPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBzZXVkb1wiXHJcbiAgICAgICAgICAgICAgICBpZD1cInBzZXVkb1wiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwicHNldWRvXCIpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJldXJcIj57dGhpcy5zdGF0ZS5wc2V1ZG9FcnJldXJ9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8aDM+QWRyZXNzZSBNYWlsPC9oMz5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwibWFpbFwiKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyZXVyXCI+e3RoaXMuc3RhdGUubWFpbEVycmV1cn08L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGgzPkFnZTwvaDM+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0FnZVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcImFnZVwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+MTYtMTg8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9BZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIjE5XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxOVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJhZ2VcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPjE5LTIxPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvQWdlXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIyMlwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMjJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwiYWdlXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD4yMi0yNTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0FnZVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiMjZcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIjI2XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcImFnZVwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+MjYtMjk8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9BZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIjMwXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJtYWlsXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD4rIDMwPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycmV1clwiPnt0aGlzLnN0YXRlLmFnZUVycmV1cn08L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGgzPlNleGU8L2gzPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2V4ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiaG9tbWVcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cImhvbW1lXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcInNleGVcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPmhvbW1lPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNleGVcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cImZlbW1lXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJmZW1tZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJzZXhlXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD5mZW1tZTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZXhlXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJhdXRyZVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiYXV0cmVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwic2V4ZVwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+YXV0cmU8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyZXVyXCI+e3RoaXMuc3RhdGUuc2V4ZUVycmV1cn08L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGgzPkVzdC1jZSBxdWUgdm91cyB2b3VzIGNvbnNpZMOpcmV6IGNvbW1lIMKrZMOpc29iw6lpc3NhbnTCuyA/PC9oMz5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc29iZWlcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIm91aVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwib3VpXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcImRlc29iZWlzc2FudFwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+b3VpPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc29iZWlcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInVuUGV1XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ1biBwZXVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwiZGVzb2JlaXNzYW50XCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD51biBwZXU8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzb2JlaVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwibm9uXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJub25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwiZGVzb2JlaXNzYW50XCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD5ub248L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyZXVyXCI+e3RoaXMuc3RhdGUuZGVzb2JlaXNzYW50RXJyZXVyfTwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8dGFibGUgaWQ9XCJ0YWJEZXNvYmVpXCI+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGhlYWRcIj5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0aGVhZFwiPkTDqWrDoCByw6lhbGlzw6k8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0aGVhZFwiPkVmZmljYWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5TaWduZXIgdW5lIHDDqXRpdGlvbjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInBldGl0aW9uUmVhbGlzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicGV0aXRpb25FZmZpY2FjZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5GYWlyZSB1biBkb248L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJkb25SZWFsaXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJkb25FZmZpY2FjZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5QcmF0aXF1ZXIgbGUgesOpcm8gZMOpY2hldCwgY2hhbmdlciBtZXMgaGFiaXR1ZGVzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZWNvbG9naXF1ZVJlYWxpc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImVjb2xvZ2lxdWVFZmZpY2FjZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5N4oCZaW5mb3JtZXIgw6AgcHJvcG9zIGRlIGwnYWN0dWFsaXTDqTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImluZm9ybWVyUmVhbGlzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiaW5mb3JtZXJFZmZpY2FjZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5N4oCZZW5nYWdlciBlbiBwb2xpdGlxdWU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwb2xpdGlxdWVSZWFsaXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwb2xpdGlxdWVFZmZpY2FjZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5GYWlyZSBsYSBncsOodmU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJncmV2ZVJlYWxpc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImdyZXZlRWZmaWNhY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+TWFuaWZlc3RlcjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIm1hbmlmZXN0ZXJSZWFsaXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJtYW5pZmVzdGVyRWZmaWNhY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+RmFpcmUgZGUgbGEgZMOpc29iw6lpc3NhbmNlIGNpdmlsZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImRlc29iZWlzc2FudFJlYWxpc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImRlc29iZWlzc2FudEVmZmljYWNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bkxvZ2luXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU3VibWl0KCl9XHJcbiAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlMnaW5zY3JpcmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5zY3JpcHRpb247XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIExpZ25lRHVUZW1wcyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHsgXHJcbiAgICAgICAgc3VwZXIocHJvcHMpOyBcclxuICBcclxuICAgICAgICB0aGlzLnN0YXRlID0geyBcclxuICAgICAgICAgICAgZXZlbmVtZW50czogWyAgXHJcbiAgICAgICAgICAgIHsgcGVyaW9kZTogXCIgXCIgfSwgXHJcbiAgICAgICAgICAgIHsgbm9tOiBcIiBcIiB9LFxyXG4gICAgICAgICAgICBdfTsgXHJcbiAgICB9IFxyXG4gIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7IFxyXG4gICAgICAgIGF4aW9zLmdldCgndXJsIGFwaScpIFxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4geyBcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlc3BvbnNlOiByZXNwb25zZX0pOyBcclxuICAgICAgICB9KTsgXHJcbiAgICB9IFxyXG4gICAgICBcclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnRzUCA9IHRoaXMuc3RhdGUuZXZlbmVtZW50cy5tYXAoZXZlbmVtZW50ID0+IChcclxuICAgICAgICA8dGQ+e2V2ZW5lbWVudC5wZXJpb2RlfTwvdGQ+XHJcbiAgICApKTtcclxuICAgIGNvbnN0IGVsZW1lbnRzTiA9IHRoaXMuc3RhdGUuZXZlbmVtZW50cy5tYXAoZXZlbmVtZW50ID0+IChcclxuICAgICAgICA8dGQ+e2V2ZW5lbWVudC5ub219PC90ZD5cclxuICAgICkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWRyZVNvbWJyZVwiPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGlkPVwidGFiRGVzb2JlaVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5vbXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudHNQfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnRzTn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaWduZUR1VGVtcHM7XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmNsYXNzIFBvc3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmdldFBvc3RzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9zdHMoKSB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvYCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwb3N0cyA9IHJlcy5kYXRhLnNsaWNlKDAsMTUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcG9zdHMsIGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgbG9hZGluZyA9IHRoaXMuc3RhdGUubG9hZGluZztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyb3ctc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj48c3Bhbj5MaXN0IG9mIHBvc3RzPC9zcGFuPkNyZWF0ZWQgd2l0aCA8aVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLWhlYXJ0XCI+PC9pPiBieSB5ZW1pd2ViYnkgPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncm93IHRleHQtY2VudGVyJ30+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLXNwaW4gZmEtc3Bpbm5lciBmYS00eFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydyb3cnfT5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUucG9zdHMubWFwKHBvc3QgPT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMCBvZmZzZXQtbWQtMSByb3ctYmxvY2tcIiBrZXk9e3Bvc3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgPHVsIGlkPVwic29ydGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGg0Pntwb3N0LnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cD57cG9zdC5ib2R5fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdHM7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBxdWl6emRhdGEgfSBmcm9tIFwiLi9RdWl6ekRhdGFcIjtcclxuXHJcbmNsYXNzIFF1aXp6IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGN1cnJlbnRRdWVzdGlvbjogMCxcclxuICAgIG15QW5zd2VyOiBudWxsLFxyXG4gICAgb3B0aW9uczogW10sXHJcbiAgICBzY29yZTogMSxcclxuICAgIGRpc2FibGVkOiB0cnVlLFxyXG4gICAgaXNFbmQ6IGZhbHNlLFxyXG4gIH07XHJcblxyXG4gIGxvYWRxdWl6emRhdGEgPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhxdWl6emRhdGFbMF0ucXVlc3Rpb24pXHJcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBxdWVzdGlvbnM6IHF1aXp6ZGF0YVt0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbl0ucXVlc3Rpb24sXHJcbiAgICAgICAgYW5zd2VyOiBxdWl6emRhdGFbdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb25dLmFuc3dlcixcclxuICAgICAgICBvcHRpb25zOiBxdWl6emRhdGFbdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb25dLm9wdGlvbnMsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubG9hZHF1aXp6ZGF0YSgpO1xyXG4gIH1cclxuICBuZXh0UXVlc3Rpb25IYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3Rlc3QnKVxyXG4gICAgY29uc3QgeyBteUFuc3dlciwgYW5zd2VyLCBzY29yZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBpZiAobXlBbnN3ZXIgPT09IGFuc3dlcikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBzY29yZTogc2NvcmUgKyAxLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY3VycmVudFF1ZXN0aW9uOiB0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbiArIDEsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY3VycmVudFF1ZXN0aW9uKTtcclxuICB9O1xyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbiAhPT0gcHJldlN0YXRlLmN1cnJlbnRRdWVzdGlvbikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgZGlzYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICBxdWVzdGlvbnM6IHF1aXp6ZGF0YVt0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbl0ucXVlc3Rpb24sXHJcbiAgICAgICAgICBvcHRpb25zOiBxdWl6emRhdGFbdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb25dLm9wdGlvbnMsXHJcbiAgICAgICAgICBhbnN3ZXI6IHF1aXp6ZGF0YVt0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbl0uYW5zd2VyLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICAvL2NoZWNrIGFuc3dlclxyXG4gIGNoZWNrQW5zd2VyID0gKGFuc3dlcikgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG15QW5zd2VyOiBhbnN3ZXIsIGRpc2FibGVkOiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuICBmaW5pc2hIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudFF1ZXN0aW9uID09PSBxdWl6emRhdGEubGVuZ3RoIC0gMSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpc0VuZDogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IG9wdGlvbnMsIG15QW5zd2VyLCBjdXJyZW50UXVlc3Rpb24sIGlzRW5kIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIGlmIChpc0VuZCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0IGNhZHJlU29tYnJlXCI+XHJcbiAgICAgICAgICA8aDM+R2FtZSBPdmVyIHlvdXIgRmluYWwgc2NvcmUgaXMge3RoaXMuc3RhdGUuc2NvcmV9IHBvaW50cyA8L2gzPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIFRoZSBjb3JyZWN0IGFuc3dlcidzIGZvciB0aGUgcXVlc3Rpb25zIHdhc1xyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAge3F1aXp6ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidWkgZmxvYXRpbmcgbWVzc2FnZSBvcHRpb25zXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLmFuc3dlcn1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwIGNhZHJlU29tYnJlXCI+XHJcbiAgICAgICAgICA8aDE+e3RoaXMuc3RhdGUucXVlc3Rpb25zfSA8L2gxPlxyXG4gICAgICAgICAgPHNwYW4+e2BRdWVzdGlvbnMgJHtjdXJyZW50UXVlc3Rpb259ICBvdXQgb2YgJHtcclxuICAgICAgICAgICAgcXVpenpkYXRhLmxlbmd0aCAtIDFcclxuICAgICAgICAgIH0gcmVtYWluaW5nIGB9PC9zcGFuPlxyXG4gICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IChcclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICBrZXk9e29wdGlvbi5pZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B1aSBmbG9hdGluZyBtZXNzYWdlIG9wdGlvbnNcclxuICAgICAgICAgJHtteUFuc3dlciA9PT0gb3B0aW9uID8gXCJzZWxlY3RlZFwiIDogbnVsbH1cclxuICAgICAgICAgYH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoZWNrQW5zd2VyKG9wdGlvbil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7b3B0aW9ufVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIHtjdXJyZW50UXVlc3Rpb24gPCBxdWl6emRhdGEubGVuZ3RoIC0gMSAmJiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1aSBpbnZlcnRlZCBidXR0b25cIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmRpc2FibGVkfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubmV4dFF1ZXN0aW9uSGFuZGxlcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgey8qIC8vYWRkaW5nIGEgZmluaXNoIGJ1dHRvbiAqL31cclxuICAgICAgICAgIHtjdXJyZW50UXVlc3Rpb24gPT09IHF1aXp6ZGF0YS5sZW5ndGggLSAxICYmIChcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1aSBpbnZlcnRlZCBidXR0b25cIiBvbkNsaWNrPXt0aGlzLmZpbmlzaEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgIEZpbmlzaFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWl6ejtcclxuIiwiZXhwb3J0IGNvbnN0IHF1aXp6ZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMCxcclxuICAgIHF1ZXN0aW9uOiBgIFdoYXQgaXMgdGhlIENhcGl0YWwgT2YgSW5kaWEgP2AsXHJcbiAgICBvcHRpb25zOiBbYE5ldyBEZWxoaWAsIGBNdW1iYWlgLCBgS29sa2F0dGFgXSxcclxuICAgIGFuc3dlcjogYE5ldyBEZWxoaWAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHF1ZXN0aW9uOiBgV2hvIGlzIHRoZSBDRU8gb2YgVGVzbGEgTW90b3JzP2AsXHJcbiAgICBvcHRpb25zOiBbYEJpbGwgR2F0ZXNgLCBgU3RldmUgSm9ic2AsIGBFbG9uIE11c2tgXSxcclxuICAgIGFuc3dlcjogYEVsb24gTXVza2AsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIHF1ZXN0aW9uOiBgTmFtZSBXb3JsZCdzIFJpY2hlc3QgTWFuP2AsXHJcbiAgICBvcHRpb25zOiBbYEplZmYgQmV6b2AsIGBCaWxsIEdhdGVzYCwgYE1hcmsgWnVja2VyYmVyZ2BdLFxyXG4gICAgYW5zd2VyOiBgSmVmZiBCZXpvYCxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgcXVlc3Rpb246IGBXb3JsZCdzIExvbmdlc3QgUml2ZXI/YCxcclxuICAgIG9wdGlvbnM6IFtgUml2ZXIgTmlsZWAsIGBSaXZlciBBbWF6b25gLCBgUml2ZXIgR29kYXZhcmlgXSxcclxuICAgIGFuc3dlcjogYFJpdmVyIE5pbGVgLFxyXG4gIH0sXHJcbl07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtR3JvdXAsIElucHV0IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmNsYXNzIFNlQ29ubmVjdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjYWRyZVNvbWJyZVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9ybVRpdGxlIHRleHQtY2VudGVyXCI+U2UgQ29ubmVjdGVyPC9oMT5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8aDM+QWRyZXNzZSBNYWlsPC9oMz5cclxuICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIHsvKiA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxoMz5BZHJlc3NlIG1haWw8L2gzPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cIkVtYWlsXCIgcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD4gKi99XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuTG9naW5cIj5TZSBDb25uZWN0ZXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlQ29ubmVjdGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIFVzZXJzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRzdGF0ZSA9IHtcclxuXHRcdHBlcnNvbnM6IFtdXHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdGF4aW9zLmdldChgL2FwaS91c2Vycy9gKVxyXG5cdFx0XHQudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHBlcnNvbnMgPSByZXMuZGF0YTtcclxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgcGVyc29ucyB9KTtcclxuXHRcdFx0fSlcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDx1bD5cclxuXHRcdFx0XHR7IHRoaXMuc3RhdGUucGVyc29ucy5tYXAocGVyc29uID0+IDxsaT57cGVyc29uLnBzZXVkb308L2xpPil9XHJcblx0XHRcdDwvdWw+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyczsiXSwic291cmNlUm9vdCI6IiJ9