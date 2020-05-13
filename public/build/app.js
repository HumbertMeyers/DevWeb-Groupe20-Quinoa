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
        alt: "image du jeu"
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
      // commentaire: "",
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
        // case "commentaire": {
        //   this.setState({ commentaire: itemValue });
        // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZy9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1nL21hbmlmMi5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9BY2N1ZWlsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSW5zY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTGlnbmVEdVRlbXBzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Bvc3RzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1F1aXp6LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1F1aXp6RGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9TZUNvbm5lY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Vc2Vycy5qcyJdLCJuYW1lcyI6WyJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJBY2N1ZWlsIiwiZGV6b2JleSIsIkNvbXBvbmVudCIsIkhvbWUiLCJMb2dvIiwiVXNlcnMiLCJQb3N0cyIsIlNlQ29ubmVjdGVyIiwiSW5zY3JpcHRpb24iLCJRdWl6eiIsIkxpZ25lRHVUZW1wcyIsInByb3BzIiwic3RhdGUiLCJwc2V1ZG8iLCJtYWlsIiwiYWdlIiwic2V4ZSIsImRlc29iZWlzc2FudCIsInBzZXVkb0VycmV1ciIsIm1haWxFcnJldXIiLCJhZ2VFcnJldXIiLCJzZXhlRXJyZXVyIiwiZGVzb2JlaXNzYW50RXJyZXVyIiwidXNlck9iamVjdCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyb3IiLCJpdGVtIiwiY2hhbXAiLCJpdGVtVmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiaW5jbHVkZXMiLCJpc1ZhbGlkIiwidmFsaWRhdGUiLCJoaXN0b3J5IiwicHVzaCIsImNyZWF0ZVVzZXIiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJldmVuZW1lbnRzIiwicGVyaW9kZSIsIm5vbSIsImdldCIsImVsZW1lbnRzUCIsIm1hcCIsImV2ZW5lbWVudCIsImVsZW1lbnRzTiIsImdldFBvc3RzIiwicmVzIiwicG9zdHMiLCJzbGljZSIsImxvYWRpbmciLCJpZCIsInRpdGxlIiwiYm9keSIsImN1cnJlbnRRdWVzdGlvbiIsIm15QW5zd2VyIiwib3B0aW9ucyIsInNjb3JlIiwiZGlzYWJsZWQiLCJpc0VuZCIsInF1ZXN0aW9ucyIsInF1aXp6ZGF0YSIsInF1ZXN0aW9uIiwiYW5zd2VyIiwibGVuZ3RoIiwibG9hZHF1aXp6ZGF0YSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImluZGV4Iiwib3B0aW9uIiwiY2hlY2tBbnN3ZXIiLCJuZXh0UXVlc3Rpb25IYW5kbGVyIiwiZmluaXNoSGFuZGxlciIsIlJlYWN0IiwicGVyc29ucyIsInBlcnNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsZ0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQiwyREFBQyw4REFBRCxRQUFRLDJEQUFDLHdEQUFELE9BQVIsQ0FBaEIsRUFBMkNDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUEzQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QSxNQUFNLENBQUN0RSxNQUFaLENBQUo7QUFBQSxPQUE3QixDQURILENBREQ7QUFLQTs7OztFQW5Ca0JYLCtDOztBQXNCTEcsb0VBQWYsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2J1aWxkL2ltYWdlcy9sb2dvLmI5MjdiMjZhLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvYnVpbGQvaW1hZ2VzL21hbmlmMi43MjA3ZWQ5Yi5qcGdcIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCAnLi4vY3NzL2FwcC5jc3MnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPFJvdXRlcj48SG9tZSAvPjwvUm91dGVyPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZGV6b2JleSBmcm9tIFwiLi4vLi4vaW1nL21hbmlmMi5qcGdcIjtcclxuXHJcbmNsYXNzIEFjY3VlaWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FkcmVTb21icmVcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImFjY3VlaWxUaXRyZVwiPkxlIEpldSBEZXpvYmV5aTwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjdWVpbENvbnRlbnVcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAgPHU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGI+UHLDqXNlbnRhdGlvbiBkZSBsJ0FTQkwgOjwvYj5cclxuICAgICAgICAgICAgICAgICAgPC91PlxyXG4gICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBRdWlub2EgZXN0IHVuZSBPTkcgZCfDqWR1Y2F0aW9uIMOgIGxhIGNpdG95ZW5uZXTDqSBtb25kaWFsZSBldFxyXG4gICAgICAgICAgICAgICAgICBzb2xpZGFpcmUgKEVDTVMpLiA8YnI+PC9icj4gTCdFQ01TIGVzdCB1biBwcm9jZXNzdXMgcXVpIHZpc2Ugw6BcclxuICAgICAgICAgICAgICAgICAgcHJvdm9xdWVyIGRlcyBjaGFuZ2VtZW50cyBkZSB2YWxldXIgZXQgZGUgY29tcG9ydGVtZW50IHN1ciBsZVxyXG4gICAgICAgICAgICAgICAgICBwbGFuIGluZGl2aWR1ZWwgZXQgY29sbGVjdGlmIGVuIHZ1ZSBkJ3VuIG1vbmRlIHBsdXMganVzdGUgZGFuc1xyXG4gICAgICAgICAgICAgICAgICBsZXF1ZWwgcmVzc291cmNlcyBldCBwb3V2b2lycyBzb250IMOpcXVpdGFibGVtZW50IHLDqXBhcnRpcyBkYW5zXHJcbiAgICAgICAgICAgICAgICAgIGxlIHJlc3BlY3QgZGUgbGEgZGlnbml0w6kgaHVtYWluZS5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBTZXMgYWN0aW9ucyA6IHByb2pldHMgaW50ZXJuYXRpb25hdXggKGF1c3NpIHNjb2xhaXJlcywgbWFpc29uXHJcbiAgICAgICAgICAgICAgICAgIGRlIGpldW5lcywgc2NvdXRzIGVuIEFtw6lyaXF1ZSBkZSBzdWQsIEFmcmlxdWUgZXQgQXNpZSkuIFByb2pldFxyXG4gICAgICAgICAgICAgICAgICBhbHRlcm5hdGl2ZSBsb2NhbGVzLiBBbmltYXRpb25zIHDDqWRhZ29naXF1ZXMgKEpldSBkZSBsYVxyXG4gICAgICAgICAgICAgICAgICBmaWNlbGxlLCBQb3RlbnRpYSwgSmV1IGRlcyBjaGFpc2VzLCBEZXpvYmV5aS4uLikuXHJcbiAgICAgICAgICAgICAgICAgIE1vYmlsaXNhdGlvbnMuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICAgIDx1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiPkpldSBEZXpvYmV5aSA6PC9iPlxyXG4gICAgICAgICAgICAgICAgICA8L3U+XHJcbiAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIEV0IHRvaSwgYXMtdHUgZMOpasOgIGRlc29iw6lpID8gRmFjZSDDoCBsJ2ludGltaWRhdGlvbiwgw6BcclxuICAgICAgICAgICAgICAgICAgbCdpbmp1c3RpY2UgY29tbWVudCByw6lhZ2lyID8gRmF1dC1pbCBwYXJmb2lzIGTDqXNvYsOpaXIgPyBRdWlub2FcclxuICAgICAgICAgICAgICAgICAgYXNibCBwcm9wb3NlIHVuIG91dGlsIHDDqWRhZ29naXF1ZSBhdXRvdXIgZGUgbCdhY3Rpb24gZGlyZWN0ZVxyXG4gICAgICAgICAgICAgICAgICBub24tdmlvbGVudGUgZXQgZGUgbGEgZMOpc29iw6lpc3NhbmNlIGNpdmlsZSA6IGR1IE5vcmQgYXUgU3VkLFxyXG4gICAgICAgICAgICAgICAgICBsJ2FjdGlvbiBkaXJlY3RlIG5vbi12aW9sZW50ZSBlc3QgKGV0IGEgdG91am91cnMgw6l0w6kpIHVuXHJcbiAgICAgICAgICAgICAgICAgIGxldmllciBkZSBjaGFuZ2VtZW50IHNvY2lhbC4gRHJvaXQgZGUgdm90ZSBkZXMgZmVtbWVzLFxyXG4gICAgICAgICAgICAgICAgICBhYm9saXRpb24gZGUgbGEgc8OpZ3LDqWdhdGlvbiwgcsOpY3Vww6lyYXRpb24gZGUgdGVycmVzLi4uIDogdG91c1xyXG4gICAgICAgICAgICAgICAgICBvbnQgw6l0w6kgb2J0ZW51cyBub3RhbW1lbnQgcGFyIGRlcyBhY3Rpb25zIGRlIFwiZMOpc29iw6lpc3NhbmNlXCIuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgTGUgamV1IGVudGVuZCBwYXJ0aXIgZHUgdsOpY3UgZGVzIHBhcnRpY2lwYW7igKJ04oCiZeKAonMgcG91ciBtaWV1eFxyXG4gICAgICAgICAgICAgICAgICB0b3VjaGVyIGF1IGNvZXVyIGRlcyBjYXVzZXMgcXVpIGxlcyBhbmltZW50IGV0IGxlcyBpbnNwaXJlbnQuXHJcbiAgICAgICAgICAgICAgICAgIEwnb3V0aWwgc2UgZMOpdmVsb3BwZSBlbiB1bmUgbGlnbmUgZHUgdGVtcHMgc3VyIGxhcXVlbGxlIGxl4oCibGFcclxuICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnTigKJlLCBlbiBwbHVzaWV1cnMgcGhhc2UgbHVkaXF1ZXMsIHBldXQgdGVzdGVyIHNlc1xyXG4gICAgICAgICAgICAgICAgICBjb25uYWlzc2FuY2VzIGV0IGFmZnV0ZXIgc2EgdmlzaW9uIGR1IG1vbmRlIGVuIHZveWFnZWFudCBkYW5zXHJcbiAgICAgICAgICAgICAgICAgIHVuZSBcImF1dHJlXCIgSGlzdG9pcmUgcXVlIGNlbGxlIHLDqWNvbnTDqWUgcGFyIGxlcyBcImRvbWluYW50c1wiLlxyXG4gICAgICAgICAgICAgICAgICA8YnI+PC9icj5MJ291dGlsIGxhaXNzZSBhdXNzaSBsYSBwbGFjZSBhdXggw6ljaGFuZ2VzIGV0IMOgXHJcbiAgICAgICAgICAgICAgICAgIGwnYWN0aW9uIGF2ZWMgZGVzIG1pc2VzIGVuIHNpdHVhdGlvbiBldCBkw6liYXRzIG1vdXZhbnRzLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIEV4cGxvcmV6IGxlcyBsdXR0ZXMgKGV0IGxlcyB2aWN0b2lyZXMpIGRlIGNlcyBmZW1tZXMgZXQgaG9tbWVzXHJcbiAgICAgICAgICAgICAgICAgIHF1aSBvbnQgZMOpc29iw6lpLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZ0FjY3VlaWxcIiBzcmM9e2Rlem9iZXl9IGFsdD1cImltYWdlIGR1IGpldVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY3VlaWw7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCwgUmVkaXJlY3QsIExpbmssIHdpdGhSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQWNjdWVpbCBmcm9tIFwiLi9BY2N1ZWlsXCI7XHJcbmltcG9ydCBVc2VycyBmcm9tIFwiLi9Vc2Vyc1wiO1xyXG5pbXBvcnQgUG9zdHMgZnJvbSBcIi4vUG9zdHNcIjtcclxuaW1wb3J0IEluc2NyaXB0aW9uIGZyb20gXCIuL0luc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBMaWduZUR1VGVtcHMgZnJvbSBcIi4vTGlnbmVEdVRlbXBzXCI7XHJcbmltcG9ydCBTZUNvbm5lY3RlciBmcm9tIFwiLi9TZUNvbm5lY3RlclwiO1xyXG5pbXBvcnQgUXVpenogZnJvbSBcIi4vUXVpenpcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uL2ltZy9sb2dvLnBuZ1wiO1xyXG5pbXBvcnQgeyBOYXYsIE5hdkl0ZW0sIE5hdkxpbmsgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9e0xvZ299IGFsdD1cImxvZ28gUXVpbm9hXCIgLz5cclxuICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2FjY3VlaWxcIj5cclxuICAgICAgICAgICAgICAgIEFjY3VlaWxcclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3F1aXp6XCI+XHJcbiAgICAgICAgICAgICAgICBRdWl6elxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvTGlnbmVEdVRlbXBzXCI+XHJcbiAgICAgICAgICAgICAgICBMaWduZUR1VGVtcHNcclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3NlY29ubmVjdGVyXCI+XHJcbiAgICAgICAgICAgICAgICBTZSBjb25uZWN0ZXJcclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2luc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICBJbnNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgPC9OYXY+XHJcblxyXG4gICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgPFJlZGlyZWN0IGV4YWN0IGZyb209XCIvXCIgdG89XCIvYWNjdWVpbFwiIC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3VzZXJzXCIgY29tcG9uZW50PXtVc2Vyc30gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcG9zdHNcIiBjb21wb25lbnQ9e1Bvc3RzfSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zZWNvbm5lY3RlclwiIGNvbXBvbmVudD17U2VDb25uZWN0ZXJ9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2luc2NyaXB0aW9uXCIgY29tcG9uZW50PXtJbnNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcXVpenpcIiBjb21wb25lbnQ9e1F1aXp6fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hY2N1ZWlsXCIgY29tcG9uZW50PXtBY2N1ZWlsfSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9MaWduZUR1VGVtcHNcIiBjb21wb25lbnQ9e0xpZ25lRHVUZW1wc30gLz5cclxuICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCIvLyBub3Byb3RlY3RcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIEZvcm1Hcm91cCwgTGFiZWwsIElucHV0IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmNsYXNzIEluc2NyaXB0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcHNldWRvOiBcIlwiLFxyXG4gICAgICBtYWlsOiBcIlwiLFxyXG4gICAgICBhZ2U6IFwiXCIsXHJcbiAgICAgIHNleGU6IFwiXCIsXHJcbiAgICAgIC8vIGNvbW1lbnRhaXJlOiBcIlwiLFxyXG4gICAgICBkZXNvYmVpc3NhbnQ6IFwiXCIsXHJcbiAgICAgIHBzZXVkb0VycmV1cjogXCJcIixcclxuICAgICAgbWFpbEVycmV1cjogXCJcIixcclxuICAgICAgYWdlRXJyZXVyOiBcIlwiLFxyXG4gICAgICBzZXhlRXJyZXVyOiBcIlwiLFxyXG4gICAgICBkZXNvYmVpc3NhbnRFcnJldXI6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVXNlcigpIHtcclxuICAgIGNvbnN0IHVzZXJPYmplY3QgPSB7XHJcbiAgICAgIHBzZXVkbzogdGhpcy5zdGF0ZS5wc2V1ZG8sXHJcbiAgICAgIG1haWw6IHRoaXMuc3RhdGUubWFpbCxcclxuICAgICAgYWdlOiB0aGlzLnN0YXRlLmFnZSxcclxuICAgICAgc2V4ZTogdGhpcy5zdGF0ZS5zZXhlLFxyXG4gICAgICBkZXNvYmVpc3NhbnQ6IHRoaXMuc3RhdGUuZGVzb2JlaXNzYW50LFxyXG4gICAgfTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9hZGQvXCIsIHVzZXJPYmplY3QpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZShpdGVtLCBjaGFtcCkge1xyXG4gICAgbGV0IGl0ZW1WYWx1ZSA9IGl0ZW0udGFyZ2V0LnZhbHVlO1xyXG4gICAgc3dpdGNoIChjaGFtcCkge1xyXG4gICAgICBjYXNlIFwicHNldWRvXCI6IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHNldWRvOiBpdGVtVmFsdWUgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcIm1haWxcIjoge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYWlsOiBpdGVtVmFsdWUgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcImFnZVwiOiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFnZTogaXRlbVZhbHVlIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJzZXhlXCI6IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2V4ZTogaXRlbVZhbHVlIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJkZXNvYmVpc3NhbnRcIjoge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXNvYmVpc3NhbnQ6IGl0ZW1WYWx1ZSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICAvLyBjYXNlIFwiY29tbWVudGFpcmVcIjoge1xyXG4gICAgICAvLyAgIHRoaXMuc2V0U3RhdGUoeyBjb21tZW50YWlyZTogaXRlbVZhbHVlIH0pO1xyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZSgpIHtcclxuICAgIGxldCBwc2V1ZG9FcnJldXIgPSBcIlwiO1xyXG4gICAgbGV0IG1haWxFcnJldXIgPSBcIlwiO1xyXG4gICAgbGV0IGFnZUVycmV1ciA9IFwiXCI7XHJcbiAgICBsZXQgc2V4ZUVycmV1ciA9IFwiXCI7XHJcbiAgICBsZXQgZGVzb2JlaXNzYW50RXJyZXVyID0gXCJcIjtcclxuXHJcbiAgICBpZiAoIXRoaXMuc3RhdGUucHNldWRvKSB7XHJcbiAgICAgIHBzZXVkb0VycmV1ciA9IFwibGUgY2hhbXAgZG9pdCDDqnRyZSByZW1wbGlcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuc3RhdGUubWFpbC5pbmNsdWRlcyhcIkBcIikpIHtcclxuICAgICAgbWFpbEVycmV1ciA9IFwibCdlbWFpbCBlc3QgaW52YWxpZGVcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuYWdlKSB7XHJcbiAgICAgIGFnZUVycmV1ciA9IFwibGUgY2hhbXAgZG9pdCDDqnRyZSByZW1wbGlcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2V4ZSkge1xyXG4gICAgICBzZXhlRXJyZXVyID0gXCJsZSBjaGFtcCBkb2l0IMOqdHJlIHJlbXBsaVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5zdGF0ZS5kZXNvYmVpc3NhbnQpIHtcclxuICAgICAgZGVzb2JlaXNzYW50RXJyZXVyID0gXCJsZSBjaGFtcCBkb2l0IMOqdHJlIHJlbXBsaVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChcclxuICAgICAgbWFpbEVycmV1ciB8fFxyXG4gICAgICBwc2V1ZG9FcnJldXIgfHxcclxuICAgICAgYWdlRXJyZXVyIHx8XHJcbiAgICAgIHNleGVFcnJldXIgfHxcclxuICAgICAgZGVzb2JlaXNzYW50RXJyZXVyXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbWFpbEVycmV1cixcclxuICAgICAgICBwc2V1ZG9FcnJldXIsXHJcbiAgICAgICAgYWdlRXJyZXVyLFxyXG4gICAgICAgIHNleGVFcnJldXIsXHJcbiAgICAgICAgZGVzb2JlaXNzYW50RXJyZXVyLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0KCkge1xyXG4gICAgY29uc3QgaXNWYWxpZCA9IHRoaXMudmFsaWRhdGUoKTtcclxuICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9xdWl6elwiKTtcclxuICAgICAgdGhpcy5jcmVhdGVVc2VyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJjYWRyZVNvbWJyZVwiIG1ldGhvZD1cIlBPU1RcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvcm1UaXRsZSB0ZXh0LWNlbnRlclwiPkluc2NyaXB0aW9uPC9oMT5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8aDM+UHNldWRvPC9oMz5cclxuICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwc2V1ZG9cIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwc2V1ZG9cIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcInBzZXVkb1wiKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyZXVyXCI+e3RoaXMuc3RhdGUucHNldWRvRXJyZXVyfTwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGgzPkFkcmVzc2UgTWFpbDwvaDM+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcIm1haWxcIil9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycmV1clwiPnt0aGlzLnN0YXRlLm1haWxFcnJldXJ9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxoMz5BZ2U8L2gzPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9BZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIjE2XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJhZ2VcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPjE2LTE4PC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvQWdlXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIxOVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMTlcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwiYWdlXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD4xOS0yMTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0FnZVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiMjJcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIjIyXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcImFnZVwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+MjItMjU8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9BZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIjI2XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIyNlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJhZ2VcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPjI2LTI5PC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvQWdlXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwibWFpbFwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+KyAzMDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJldXJcIj57dGhpcy5zdGF0ZS5hZ2VFcnJldXJ9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxoMz5TZXhlPC9oMz5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNleGVcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cImhvbW1lXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJob21tZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJzZXhlXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD5ob21tZTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZXhlXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJmZW1tZVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZmVtbWVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwic2V4ZVwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+ZmVtbWU8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2V4ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiYXV0cmVcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cImF1dHJlXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcInNleGVcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPmF1dHJlPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycmV1clwiPnt0aGlzLnN0YXRlLnNleGVFcnJldXJ9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxoMz5Fc3QtY2UgcXVlIHZvdXMgdm91cyBjb25zaWTDqXJleiBjb21tZSDCq2TDqXNvYsOpaXNzYW50wrsgPzwvaDM+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNvYmVpXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJvdWlcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIm91aVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJkZXNvYmVpc3NhbnRcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPm91aTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNvYmVpXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJ1blBldVwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwidW4gcGV1XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcImRlc29iZWlzc2FudFwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+dW4gcGV1PC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc29iZWlcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIm5vblwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwibm9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcImRlc29iZWlzc2FudFwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+bm9uPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycmV1clwiPnt0aGlzLnN0YXRlLmRlc29iZWlzc2FudEVycmV1cn08L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIHsvKiA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgbGFpc3NlciB1biBjb21tZW50YWlyZSAob3B0aW9ubmVsKVxyXG4gICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICBpZD1cImNvbURlc29iZWlcIlxyXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMjAwXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJjb21tZW50YWlyZVwiKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD4gKi99XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPHRhYmxlIGlkPVwidGFiRGVzb2JlaVwiPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRoZWFkXCI+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGhlYWRcIj5Ew6lqw6AgcsOpYWxpc8OpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGhlYWRcIj5FZmZpY2FjZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+U2lnbmVyIHVuZSBww6l0aXRpb248L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwZXRpdGlvblJlYWxpc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInBldGl0aW9uRWZmaWNhY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+RmFpcmUgdW4gZG9uPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZG9uUmVhbGlzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZG9uRWZmaWNhY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+UHJhdGlxdWVyIGxlIHrDqXJvIGTDqWNoZXQsIGNoYW5nZXIgbWVzIGhhYml0dWRlczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImVjb2xvZ2lxdWVSZWFsaXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJlY29sb2dpcXVlRWZmaWNhY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+TeKAmWluZm9ybWVyIMOgIHByb3BvcyBkZSBsJ2FjdHVhbGl0w6k8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJpbmZvcm1lclJlYWxpc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJhZGlvVGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImluZm9ybWVyRWZmaWNhY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+TeKAmWVuZ2FnZXIgZW4gcG9saXRpcXVlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicG9saXRpcXVlUmVhbGlzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicG9saXRpcXVlRWZmaWNhY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+RmFpcmUgbGEgZ3LDqHZlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZ3JldmVSZWFsaXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJncmV2ZUVmZmljYWNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPk1hbmlmZXN0ZXI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJtYW5pZmVzdGVyUmVhbGlzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmFkaW9UYWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwibWFuaWZlc3RlckVmZmljYWNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPkZhaXJlIGRlIGxhIGTDqXNvYsOpaXNzYW5jZSBjaXZpbGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJkZXNvYmVpc3NhbnRSZWFsaXNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyYWRpb1RhYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJkZXNvYmVpc3NhbnRFZmZpY2FjZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5Mb2dpblwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVN1Ym1pdCgpfVxyXG4gICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5TJ2luc2NyaXJlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluc2NyaXB0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBMaWduZUR1VGVtcHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7IFxyXG4gICAgICAgIHN1cGVyKHByb3BzKTsgXHJcbiAgXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgXHJcbiAgICAgICAgICAgIGV2ZW5lbWVudHM6IFsgIFxyXG4gICAgICAgICAgICB7IHBlcmlvZGU6IFwiIFwiIH0sIFxyXG4gICAgICAgICAgICB7IG5vbTogXCIgXCIgfSxcclxuICAgICAgICAgICAgXX07IFxyXG4gICAgfSBcclxuICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkgeyBcclxuICAgICAgICBheGlvcy5nZXQoJ3VybCBhcGknKSBcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHsgXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXNwb25zZTogcmVzcG9uc2V9KTsgXHJcbiAgICAgICAgfSk7IFxyXG4gICAgfSBcclxuICAgICAgXHJcblxyXG4gIHJlbmRlcigpIHtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50c1AgPSB0aGlzLnN0YXRlLmV2ZW5lbWVudHMubWFwKGV2ZW5lbWVudCA9PiAoXHJcbiAgICAgICAgPHRkPntldmVuZW1lbnQucGVyaW9kZX08L3RkPlxyXG4gICAgKSk7XHJcbiAgICBjb25zdCBlbGVtZW50c04gPSB0aGlzLnN0YXRlLmV2ZW5lbWVudHMubWFwKGV2ZW5lbWVudCA9PiAoXHJcbiAgICAgICAgPHRkPntldmVuZW1lbnQubm9tfTwvdGQ+XHJcbiAgICApKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FkcmVTb21icmVcIj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBpZD1cInRhYkRlc29iZWlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ob21zPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnRzUH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50c059XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlnbmVEdVRlbXBzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5jbGFzcyBQb3N0cyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRQb3N0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvc3RzKCkge1xyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzL2ApLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcG9zdHMgPSByZXMuZGF0YS5zbGljZSgwLDE1KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvc3RzLCBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGxvYWRpbmcgPSB0aGlzLnN0YXRlLmxvYWRpbmc7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm93LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+PHNwYW4+TGlzdCBvZiBwb3N0czwvc3Bhbj5DcmVhdGVkIHdpdGggPGlcclxuICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1oZWFydFwiPjwvaT4gYnkgeWVtaXdlYmJ5IDwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3JvdyB0ZXh0LWNlbnRlcid9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1zcGluIGZhLXNwaW5uZXIgZmEtNHhcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncm93J30+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnBvc3RzLm1hcChwb3N0ID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgb2Zmc2V0LW1kLTEgcm93LWJsb2NrXCIga2V5PXtwb3N0LmlkfT5cclxuICAgICAgICAgICAgICAgIDx1bCBpZD1cInNvcnRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxoND57cG9zdC50aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgPHA+e3Bvc3QuYm9keX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RzOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcXVpenpkYXRhIH0gZnJvbSBcIi4vUXVpenpEYXRhXCI7XHJcblxyXG5jbGFzcyBRdWl6eiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBjdXJyZW50UXVlc3Rpb246IDAsXHJcbiAgICBteUFuc3dlcjogbnVsbCxcclxuICAgIG9wdGlvbnM6IFtdLFxyXG4gICAgc2NvcmU6IDEsXHJcbiAgICBkaXNhYmxlZDogdHJ1ZSxcclxuICAgIGlzRW5kOiBmYWxzZSxcclxuICB9O1xyXG5cclxuICBsb2FkcXVpenpkYXRhID0gKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2cocXVpenpkYXRhWzBdLnF1ZXN0aW9uKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcXVlc3Rpb25zOiBxdWl6emRhdGFbdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb25dLnF1ZXN0aW9uLFxyXG4gICAgICAgIGFuc3dlcjogcXVpenpkYXRhW3RoaXMuc3RhdGUuY3VycmVudFF1ZXN0aW9uXS5hbnN3ZXIsXHJcbiAgICAgICAgb3B0aW9uczogcXVpenpkYXRhW3RoaXMuc3RhdGUuY3VycmVudFF1ZXN0aW9uXS5vcHRpb25zLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmxvYWRxdWl6emRhdGEoKTtcclxuICB9XHJcbiAgbmV4dFF1ZXN0aW9uSGFuZGxlciA9ICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCd0ZXN0JylcclxuICAgIGNvbnN0IHsgbXlBbnN3ZXIsIGFuc3dlciwgc2NvcmUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgaWYgKG15QW5zd2VyID09PSBhbnN3ZXIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc2NvcmU6IHNjb3JlICsgMSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGN1cnJlbnRRdWVzdGlvbjogdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb24gKyAxLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb24gIT09IHByZXZTdGF0ZS5jdXJyZW50UXVlc3Rpb24pIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxyXG4gICAgICAgICAgcXVlc3Rpb25zOiBxdWl6emRhdGFbdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb25dLnF1ZXN0aW9uLFxyXG4gICAgICAgICAgb3B0aW9uczogcXVpenpkYXRhW3RoaXMuc3RhdGUuY3VycmVudFF1ZXN0aW9uXS5vcHRpb25zLFxyXG4gICAgICAgICAgYW5zd2VyOiBxdWl6emRhdGFbdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb25dLmFuc3dlcixcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgLy9jaGVjayBhbnN3ZXJcclxuICBjaGVja0Fuc3dlciA9IChhbnN3ZXIpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBteUFuc3dlcjogYW5zd2VyLCBkaXNhYmxlZDogZmFsc2UgfSk7XHJcbiAgfTtcclxuXHJcbiAgZmluaXNoSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbiA9PT0gcXVpenpkYXRhLmxlbmd0aCAtIDEpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaXNFbmQ6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBvcHRpb25zLCBteUFuc3dlciwgY3VycmVudFF1ZXN0aW9uLCBpc0VuZCB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBpZiAoaXNFbmQpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdCBjYWRyZVNvbWJyZVwiPlxyXG4gICAgICAgICAgPGgzPkdhbWUgT3ZlciB5b3VyIEZpbmFsIHNjb3JlIGlzIHt0aGlzLnN0YXRlLnNjb3JlfSBwb2ludHMgPC9oMz5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBUaGUgY29ycmVjdCBhbnN3ZXIncyBmb3IgdGhlIHF1ZXN0aW9ucyB3YXNcclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIHtxdWl6emRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInVpIGZsb2F0aW5nIG1lc3NhZ2Ugb3B0aW9uc1wiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5hbnN3ZXJ9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcCBjYWRyZVNvbWJyZVwiPlxyXG4gICAgICAgICAgPGgxPnt0aGlzLnN0YXRlLnF1ZXN0aW9uc30gPC9oMT5cclxuICAgICAgICAgIDxzcGFuPntgUXVlc3Rpb25zICR7Y3VycmVudFF1ZXN0aW9ufSAgb3V0IG9mICR7XHJcbiAgICAgICAgICAgIHF1aXp6ZGF0YS5sZW5ndGggLSAxXHJcbiAgICAgICAgICB9IHJlbWFpbmluZyBgfTwvc3Bhbj5cclxuICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAga2V5PXtvcHRpb24uaWR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdWkgZmxvYXRpbmcgbWVzc2FnZSBvcHRpb25zXHJcbiAgICAgICAgICR7bXlBbnN3ZXIgPT09IG9wdGlvbiA/IFwic2VsZWN0ZWRcIiA6IG51bGx9XHJcbiAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jaGVja0Fuc3dlcihvcHRpb24pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge29wdGlvbn1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uIDwgcXVpenpkYXRhLmxlbmd0aCAtIDEgJiYgKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgYnV0dG9uXCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm5leHRRdWVzdGlvbkhhbmRsZXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHsvKiAvL2FkZGluZyBhIGZpbmlzaCBidXR0b24gKi99XHJcbiAgICAgICAgICB7Y3VycmVudFF1ZXN0aW9uID09PSBxdWl6emRhdGEubGVuZ3RoIC0gMSAmJiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidWkgaW52ZXJ0ZWQgYnV0dG9uXCIgb25DbGljaz17dGhpcy5maW5pc2hIYW5kbGVyfT5cclxuICAgICAgICAgICAgICBGaW5pc2hcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVpeno7XHJcbiIsImV4cG9ydCBjb25zdCBxdWl6emRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDAsXHJcbiAgICBxdWVzdGlvbjogYCBXaGF0IGlzIHRoZSBDYXBpdGFsIE9mIEluZGlhID9gLFxyXG4gICAgb3B0aW9uczogW2BOZXcgRGVsaGlgLCBgTXVtYmFpYCwgYEtvbGthdHRhYF0sXHJcbiAgICBhbnN3ZXI6IGBOZXcgRGVsaGlgLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBxdWVzdGlvbjogYFdobyBpcyB0aGUgQ0VPIG9mIFRlc2xhIE1vdG9ycz9gLFxyXG4gICAgb3B0aW9uczogW2BCaWxsIEdhdGVzYCwgYFN0ZXZlIEpvYnNgLCBgRWxvbiBNdXNrYF0sXHJcbiAgICBhbnN3ZXI6IGBFbG9uIE11c2tgLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBxdWVzdGlvbjogYE5hbWUgV29ybGQncyBSaWNoZXN0IE1hbj9gLFxyXG4gICAgb3B0aW9uczogW2BKZWZmIEJlem9gLCBgQmlsbCBHYXRlc2AsIGBNYXJrIFp1Y2tlcmJlcmdgXSxcclxuICAgIGFuc3dlcjogYEplZmYgQmV6b2AsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHF1ZXN0aW9uOiBgV29ybGQncyBMb25nZXN0IFJpdmVyP2AsXHJcbiAgICBvcHRpb25zOiBbYFJpdmVyIE5pbGVgLCBgUml2ZXIgQW1hem9uYCwgYFJpdmVyIEdvZGF2YXJpYF0sXHJcbiAgICBhbnN3ZXI6IGBSaXZlciBOaWxlYCxcclxuICB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybUdyb3VwLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5jbGFzcyBTZUNvbm5lY3RlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiY2FkcmVTb21icmVcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvcm1UaXRsZSB0ZXh0LWNlbnRlclwiPlNlIENvbm5lY3RlcjwvaDE+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGgzPkFkcmVzc2UgTWFpbDwvaDM+XHJcbiAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICB7LyogPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8aDM+QWRyZXNzZSBtYWlsPC9oMz5cclxuICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJFbWFpbFwiIHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+ICovfVxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0bkxvZ2luXCI+U2UgQ29ubmVjdGVyPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZUNvbm5lY3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBVc2VycyBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0c3RhdGUgPSB7XHJcblx0XHRwZXJzb25zOiBbXVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHRheGlvcy5nZXQoYC9hcGkvdXNlcnMvYClcclxuXHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRjb25zdCBwZXJzb25zID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHBlcnNvbnMgfSk7XHJcblx0XHRcdH0pXHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8dWw+XHJcblx0XHRcdFx0eyB0aGlzLnN0YXRlLnBlcnNvbnMubWFwKHBlcnNvbiA9PiA8bGk+e3BlcnNvbi5wc2V1ZG99PC9saT4pfVxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7Il0sInNvdXJjZVJvb3QiOiIifQ==