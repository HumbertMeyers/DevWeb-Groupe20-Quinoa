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

/***/ "./assets/js/components/Administration.js":
/*!************************************************!*\
  !*** ./assets/js/components/Administration.js ***!
  \************************************************/
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// noprotect



/**
 * Cette classe permet l'affichage d'une page d'ajout et de modification des evenement pour le quizz
 */

var Administration = /*#__PURE__*/function (_Component) {
  _inherits(Administration, _Component);

  var _super = _createSuper(Administration);

  function Administration(props) {
    var _this;

    _classCallCheck(this, Administration);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      var enteredName = prompt('Entrez votre mot de passe');

      if (enteredName === "Quinoa2020") {
        _this.handleSubmit();
      }
    });

    _this.state = {
      selectEvent: true
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this)); //this.handleSubmit = this.handleSubmit.bind(this);

    return _this;
  }
  /**
   * Cette fonction permet de mettre a jour la page suite à un evenement
   * @param event un evenement sur l'affichage
   */


  _createClass(Administration, [{
    key: "handleChange",
    value: function handleChange(event) {
      var _this2 = this;

      var target = event.target;
      var value = target.value;
      var name = target.name;
      this.setState(_defineProperty({}, name, value));

      if (this.state.nom !== undefined && this.state.method === "get") {
        var nom = this.state.nom;
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/evenements/".concat(nom)).then(function (res) {
          //console.log(res);
          _this2.setState({
            periode: res.data.periode,
            lieu: res.data.lieu,
            lutte: res.data.lutte,
            strategie: res.data.strategie,
            action: res.data.action,
            victoire: res.data.victoire,
            anecdote: res.data.anecdote,
            citation: res.data.citation,
            question: res.data.question,
            reponse1: res.data.reponse1,
            reponse2: res.data.reponse2,
            reponse3: res.data.reponse3,
            video: res.data.video,
            article: res.data.article
          }); //console.log(res.data);

        });
      }
    }
    /**
     * cette fonction permet l'envoi de données vers la base de données.
     */

  }, {
    key: "handleSubmit",
    value: function handleSubmit() {
      var nom = this.state.nom;
      var eventObject = {
        nom: this.state.nom,
        periode: this.state.periode,
        lieu: this.state.lieu,
        lutte: this.state.lutte,
        strategie: this.state.strategie,
        action: this.state.action,
        victoire: this.state.victoire,
        anecdote: this.state.anecdote,
        citation: this.state.citation,
        question: this.state.question,
        reponse1: this.state.reponse1,
        reponse2: this.state.reponse2,
        reponse3: this.state.reponse3,
        video: this.state.video,
        article: this.state.article
      };

      switch (method) {
        case "post":
          axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/evenements/add/", eventObject).then(function (response) {
            console.log(response.data);
          })["catch"](function (error) {
            console.log(error);
          });
          break;

        case "put":
          axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("/api/evenements/update/".concat(nom), eventObject).then(function (response) {//console.log(response.data);
          })["catch"](function (error) {
            console.log(error);
          });
          break;

        case "delete":
          axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/api/evenements/delete/".concat(nom), eventObject).then(function (response) {//console.log(response.data);
          })["catch"](function (error) {
            console.log(error);
          });
          break;

        default:
          alert('Une erreur est survenue');

        /*axios
        	.get(`/api/evenements/${nom}`, eventObject)
        	.then((res) => {
        		console.log(res);
        		this.setState({
        			periode: res.data.periode,
        			lieu: res.data.lieu,
        			lutte: res.data.lutte,
        			strategie: res.data.strategie,
        			action: res.data.action,
        			victoire: res.data.victoire,
        			anecdote: res.data.anecdote,
        			citation: res.data.citation,
        			question: res.data.question,
        			reponse1: res.data.reponse1,
        			reponse2: res.data.reponse2,
        			reponse3: res.data.reponse3,
        			video: res.data.video,
        			article: res.data.article}
        		);
        		//console.log(res.data);
        	});*/
      }
    }
  }, {
    key: "render",

    /**
     * cette fonction permets le rendu visuel de la page
     * @returns {*}
     */
    value: function render() {
      if (this.state.selectEvent) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "container center"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "cadreSombre"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Page d'ajout ou de modification d'un \xE9venement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
          onSubmit: this.handleClick
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Que voulez vous faire ? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
          value: this.state.method,
          name: "method",
          onChange: this.handleChange
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: ""
        }, "--"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "get"
        }, "Verifier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "post"
        }, "Ajouter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "put"
        }, "Modifier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "delete"
        }, "Supprimer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Nom :", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          name: "nom",
          type: "text",
          placeholder: "nom",
          value: this.state.nom,
          onChange: this.handleChange
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Ann\xE9e :", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          name: "periode",
          type: "number",
          size: "5",
          placeholder: "Ann\xE9e",
          value: this.state.periode,
          onChange: this.handleChange
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "adminLabel"
        }, "Lieu :", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
          name: "lieu",
          rows: "1",
          cols: "95",
          placeholder: "lieu",
          value: this.state.lieu,
          onChange: this.handleChange
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "adminLabel"
        }, "Lutte :", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
          name: "lutte",
          placeholder: "lutte",
          rows: "1",
          cols: "95",
          value: this.state.lutte,
          onChange: this.handleChange
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "adminLabel"
        }, "Strategie :", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
          placeholder: "strategie",
          name: "strategie",
          rows: "1",
          cols: "95",
          value: this.state.strategie,
          onChange: this.handleChange
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "adminLabel"
        }, "Action :", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
          placeholder: "action",
          name: "action",
          rows: "1",
          cols: "95",
          value: this.state.action,
          onChange: this.handleChange
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "adminLabel"
        }, "Victoire :", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
          placeholder: "victoire",
          name: "victoire",
          rows: "1",
          cols: "95",
          value: this.state.victoire,
          onChange: this.handleChange
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "adminLabel"
        }, "Anecdote :", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
          placeholder: "anecdote",
          name: "anecdote",
          rows: "1",
          cols: "95",
          value: this.state.anecdote,
          onChange: this.handleChange
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "adminLabel"
        }, "Citation :", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
          placeholder: "citation",
          name: "citation",
          rows: "1",
          cols: "95",
          value: this.state.citation,
          onChange: this.handleChange
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "adminLabel"
        }, "Question :", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
          placeholder: "question",
          name: "question",
          rows: "1",
          cols: "95",
          value: this.state.question,
          onChange: this.handleChange
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "adminLabel"
        }, "Premi\xE8re r\xE9ponse (la r\xE9ponse correcte) :", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
          placeholder: "r\xE9ponse 1",
          name: "reponse1",
          rows: "1",
          cols: "95",
          value: this.state.reponse1,
          onChange: this.handleChange
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "adminLabel"
        }, "Deuxi\xE8me r\xE9ponse :", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
          placeholder: "r\xE9ponse 2",
          name: "reponse2",
          rows: "1",
          cols: "95",
          value: this.state.reponse2,
          onChange: this.handleChange
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "adminLabel"
        }, "Troisi\xE8me r\xE9ponse :", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
          placeholder: "r\xE9ponse 3",
          name: "reponse3",
          rows: "1",
          cols: "95",
          value: this.state.reponse3,
          onChange: this.handleChange
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "adminLabel"
        }, "Video :", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
          placeholder: "vid\xE9o",
          name: "video",
          rows: "1",
          cols: "95",
          value: this.state.video,
          onChange: this.handleChange
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          className: "adminLabel"
        }, "Article :", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
          placeholder: "article",
          name: "article",
          rows: "1",
          cols: "95",
          value: this.state.article,
          onChange: this.handleChange
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "submit",
          className: "btnLogin",
          value: "Enregistrer"
        }))));
      } else {}
    }
  }]);

  return Administration;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Administration);

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
/* harmony import */ var _Administration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Administration */ "./assets/js/components/Administration.js");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../img/logo.png */ "./assets/img/logo.png");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _LogOut__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./LogOut */ "./assets/js/components/LogOut.js");
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Nav"], {
        className: "navbar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "http://www.quinoa.be"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "logo",
        src: _img_logo_png__WEBPACK_IMPORTED_MODULE_11__["default"],
        alt: "logo Quinoa"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["NavItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["NavLink"], {
        className: "nav-link",
        href: "/accueil"
      }, "Accueil"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["NavLink"], {
        className: "nav-link",
        href: "/quizz"
      }, "Quizz"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["NavLink"], {
        className: "nav-link",
        href: "/LigneDuTemps"
      }, "LigneDuTemps"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["NavLink"], {
        className: "nav-link",
        href: "/resultat"
      }, "Resultat"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["NavLink"], {
        className: "nav-link",
        href: "/seconnecter"
      }, "Se connecter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["NavLink"], {
        className: "nav-link",
        href: "/inscription"
      }, "Inscription")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LogOut__WEBPACK_IMPORTED_MODULE_14__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/admin",
        component: _Administration__WEBPACK_IMPORTED_MODULE_10__["default"]
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
      var validator = __webpack_require__(/*! email-validator */ "./node_modules/email-validator/index.js");

      var email = this.state.mail; //change form to id or containment selector

      var mdpErreur = "";
      var mailErreur = "";
      var ageErreur = "";
      var sexeErreur = "";
      var desobeissantErreur = "";

      if (this.state.mdp.length < 8) {
        mdpErreur = "le champ doit être plus long";
      }

      if (!validator.validate(email)) {
        mailErreur = "Veuillez entrer une adresse valide";
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

      if (mailErreur || mdpErreur || ageErreur || sexeErreur || desobeissantErreur) {
        this.setState({
          mailErreur: mailErreur,
          mdpErreur: mdpErreur,
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
        anecdote: ""
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
            return 0.5 - Math.random();
          }),
          answer: res.data.reponse1
        }]; //console.log(data);

        _this.setState({
          quizzdata: data
        }); //création d'un localStorage


        localStorage.setItem("listeQuestion", JSON.stringify(_this.state.listQuestion));
        localStorage.setItem("listeReponses", JSON.stringify(_this.state.mesReponses));
        localStorage.setItem("score", JSON.stringify(_this.state.score));
        localStorage.setItem("bonneReponse", JSON.stringify(_this.state.bonnesReponses));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "nextQuestionHandler", function () {
      // console.log('test')
      var _this$state = _this.state,
          myAnswer = _this$state.myAnswer,
          quizzdata = _this$state.quizzdata,
          score = _this$state.score;

      var joinedUserAnswer = _this.state.mesReponses.concat(myAnswer);

      _this.setState({
        mesReponses: joinedUserAnswer
      });

      var joinedCorrectAnswer = _this.state.bonnesReponses.concat(quizzdata[0].answer);

      _this.setState({
        bonnesReponses: joinedCorrectAnswer
      });

      if (myAnswer === quizzdata[0].answer) {
        _this.setState({
          score: score + 1
        });
      }

      _this.setState({
        currentQuestion: _this.state.currentQuestion + 1
      });
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
    });

    _this.state = {
      bonnesReponses: [],
      mesReponses: [],
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
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Sujet de la question : ", item.nom), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, item.question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Questions ", 20 - currentQuestion, " sur 20 restantes", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)));
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
    var score = localStorage.getItem("score", JSON.stringify(score));
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
    key: "msgResultat",
    value: function msgResultat() {}
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, this.statescore >= 16 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Bravo ! Tu es un-e incontestable d\xE9sob\xE9issant-e \uD83D\uDE03... Dezobeyi comporte encore bien d'autres facettes, n'h\xE9site pas \xE0 rejouer...") : this.score <= 15 && this.score >= 10 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Tu es un-e d\xE9sob\xE9issant-e confirm\xE9-e, bien jou\xE9 ! et si tu rejouais pour devenir un-e v\xE9ritable expert-e ?") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Tu es une graine de d\xE9sob\xE9issant-e ! continue de t'informer dans nos pages et rejoue !"), "}"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Tu as eu ", this.state.score, " de bonnes r\xE9ponses sur 20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
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
  }, "Se Connecter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Adresse mail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "email",
    name: "email",
    id: "Email",
    placeholder: "",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Mot de passe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "password",
    name: "mdp",
    id: "mdp",
    placeholder: "",
    required: true
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
  }, "Votre adresse mail ou votre mot passe est incorrect")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZy9kZXpvYmV5LmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1nL2xvZ28ucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWNjdWVpbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9BZG1pbmlzdHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0luc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xEVERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTGlnbmVEdVRlbXBzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ091dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Qb3N0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9RdWl6ei5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SZXN1bHRhdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9TZUNvbm5lY3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Vc2Vycy5qcyJdLCJuYW1lcyI6WyJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJBY2N1ZWlsIiwiZGV6b2JleSIsIkNvbXBvbmVudCIsIkFkbWluaXN0cmF0aW9uIiwicHJvcHMiLCJlbnRlcmVkTmFtZSIsInByb21wdCIsImhhbmRsZVN1Ym1pdCIsInN0YXRlIiwic2VsZWN0RXZlbnQiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWUiLCJzZXRTdGF0ZSIsIm5vbSIsInVuZGVmaW5lZCIsIm1ldGhvZCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsInBlcmlvZGUiLCJkYXRhIiwibGlldSIsImx1dHRlIiwic3RyYXRlZ2llIiwiYWN0aW9uIiwidmljdG9pcmUiLCJhbmVjZG90ZSIsImNpdGF0aW9uIiwicXVlc3Rpb24iLCJyZXBvbnNlMSIsInJlcG9uc2UyIiwicmVwb25zZTMiLCJ2aWRlbyIsImFydGljbGUiLCJldmVudE9iamVjdCIsInBvc3QiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInB1dCIsImFsZXJ0IiwiaGFuZGxlQ2xpY2siLCJIb21lIiwibG9nbyIsIlVzZXJzIiwiUG9zdHMiLCJTZUNvbm5lY3RlciIsIkluc2NyaXB0aW9uIiwiUXVpenoiLCJMaWduZUR1VGVtcHMiLCJSZXN1bHRhdCIsIm1haWwiLCJtZHAiLCJhZ2UiLCJzZXhlIiwiZGVzb2JlaXNzYW50IiwibWRwRXJyZXVyIiwibWFpbEVycmV1ciIsImFnZUVycmV1ciIsInNleGVFcnJldXIiLCJkZXNvYmVpc3NhbnRFcnJldXIiLCJ1c2VyT2JqZWN0IiwiaXRlbSIsImNoYW1wIiwiaXRlbVZhbHVlIiwidmFsaWRhdG9yIiwicmVxdWlyZSIsImVtYWlsIiwibGVuZ3RoIiwidmFsaWRhdGUiLCJpc1ZhbGlkIiwib2JqIiwiY29tbWVudGFpcmUiLCJ3YXJuIiwiaGlzdG9yeSIsInB1c2giLCJjcmVhdGVVc2VyIiwibGR0ZGF0YSIsInJlcG9uc2VKb3VldXIiLCJmaWNoZSIsIm1vZGFsIiwiYWN0aXZlTW9kYWwiLCJ0b2dnbGUiLCJwcmV2U3RhdGUiLCJyZXBvbnNlIiwiZmFDaGVjayIsImZhVGltZXMiLCJtYXAiLCJpZCIsImxpZ25lRHVUZW1wcyIsIkxvZ091dCIsInVzZVN0YXRlIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJkaXNwbGF5IiwiZ2V0UG9zdHMiLCJwb3N0cyIsInNsaWNlIiwibG9hZGluZyIsInRpdGxlIiwiYm9keSIsImxpc3RRdWVzdGlvbiIsImN1cnJlbnRRdWVzdGlvbiIsIm9wdGlvbnMiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsImFuc3dlciIsInF1aXp6ZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwibWVzUmVwb25zZXMiLCJzY29yZSIsImJvbm5lc1JlcG9uc2VzIiwibXlBbnN3ZXIiLCJqb2luZWRVc2VyQW5zd2VyIiwiY29uY2F0Iiwiam9pbmVkQ29ycmVjdEFuc3dlciIsImRpc2FibGVkIiwiaXNFbmQiLCJpdGVtcyIsInNldFRpbWVvdXQiLCJnZXRRdWVzdGlvbiIsInByZXZQcm9wcyIsImluZGV4Iiwib3B0aW9uIiwiY2hlY2tBbnN3ZXIiLCJuZXh0UXVlc3Rpb25IYW5kbGVyIiwiZmluaXNoSGFuZGxlciIsIlJlYWN0IiwiZ2V0SXRlbSIsInBhZ2UiLCJzdGF0ZXNjb3JlIiwiZXJyZXVyIiwic2V0RXJyZXVyIiwibG9naW4iLCJwZXJzb25zIiwicGVyc29uIiwicHNldWRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZSxtR0FBb0MsRTs7Ozs7Ozs7Ozs7O0FDQW5EO0FBQWUsZ0dBQWlDLEU7Ozs7Ozs7Ozs7OztBQ0FoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLGdEQUFRLENBQUNDLE1BQVQsZUFBZ0IsMkRBQUMsOERBQUQscUJBQVEsMkRBQUMsd0RBQUQsT0FBUixDQUFoQixFQUEyQ0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQTNDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7SUFFTUMsTzs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUNQLDBCQUNFO0FBQUss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RUFBRTtBQURGLEs7Ozs7Ozs7d0NBSVk7QUFBQTs7QUFDbkI1SCxrREFBSyxDQUFDQyxHQUFOLGdCQUNFQyxJQURGLENBQ08sVUFBQUMsR0FBRyxFQUFJO0FBQ1osWUFBTXlILE9BQU8sR0FBR3pILEdBQUcsQ0FBQ0UsSUFBcEI7O0FBQ0EsY0FBSSxDQUFDVCxRQUFMLENBQWM7QUFBRWdJLGlCQUFPLEVBQVBBO0FBQUYsU0FBZDtBQUNBLE9BSkY7QUFLQTs7OzZCQUVRO0FBQ1IsMEJBQ0MsdUVBQ0csS0FBS3hJLEtBQUwsQ0FBV3dJLE9BQVgsQ0FBbUJuRCxHQUFuQixDQUF1QixVQUFBb0QsTUFBTTtBQUFBLDRCQUFJLHVFQUFLQSxNQUFNLENBQUNDLE1BQVosQ0FBSjtBQUFBLE9BQTdCLENBREgsQ0FERDtBQUtBOzs7O0VBbkJrQmhKLCtDOztBQXNCTGdELG9FQUFmLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQgXCIvYnVpbGQvaW1hZ2VzL2Rlem9iZXkuNjlkNGRkNzMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIvYnVpbGQvaW1hZ2VzL2xvZ28uM2Y2YTliODAucG5nXCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgJy4uL2Nzcy9hcHAuY3NzJztcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcblxuUmVhY3RET00ucmVuZGVyKDxSb3V0ZXI+PEhvbWUgLz48L1JvdXRlcj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkZXpvYmV5IGZyb20gXCIuLi8uLi9pbWcvZGV6b2JleS5qcGdcIjtcblxuY2xhc3MgQWNjdWVpbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhZHJlU29tYnJlXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYWNjdWVpbFRpdHJlXCI+TGUgSmV1IERlem9iZXlpPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjdWVpbENvbnRlbnVcIj5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgPHU+XG4gICAgICAgICAgICAgICAgICAgIDxiPlByw6lzZW50YXRpb24gZGUgbCdBU0JMIDo8L2I+XG4gICAgICAgICAgICAgICAgICA8L3U+XG4gICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIFF1aW5vYSBlc3QgdW5lIE9ORyBkJ8OpZHVjYXRpb24gw6AgbGEgY2l0b3llbm5ldMOpIG1vbmRpYWxlIGV0XG4gICAgICAgICAgICAgICAgICBzb2xpZGFpcmUgKEVDTVMpLiA8YnI+PC9icj4gTCdFQ01TIGVzdCB1biBwcm9jZXNzdXMgcXVpIHZpc2Ugw6BcbiAgICAgICAgICAgICAgICAgIHByb3ZvcXVlciBkZXMgY2hhbmdlbWVudHMgZGUgdmFsZXVyIGV0IGRlIGNvbXBvcnRlbWVudCBzdXIgbGVcbiAgICAgICAgICAgICAgICAgIHBsYW4gaW5kaXZpZHVlbCBldCBjb2xsZWN0aWYgZW4gdnVlIGQndW4gbW9uZGUgcGx1cyBqdXN0ZSBkYW5zXG4gICAgICAgICAgICAgICAgICBsZXF1ZWwgcmVzc291cmNlcyBldCBwb3V2b2lycyBzb250IMOpcXVpdGFibGVtZW50IHLDqXBhcnRpcyBkYW5zXG4gICAgICAgICAgICAgICAgICBsZSByZXNwZWN0IGRlIGxhIGRpZ25pdMOpIGh1bWFpbmUuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgU2VzIGFjdGlvbnMgOiBwcm9qZXRzIGludGVybmF0aW9uYXV4IChhdXNzaSBzY29sYWlyZXMsIG1haXNvblxuICAgICAgICAgICAgICAgICAgZGUgamV1bmVzLCBzY291dHMgZW4gQW3DqXJpcXVlIGRlIHN1ZCwgQWZyaXF1ZSBldCBBc2llKS4gUHJvamV0XG4gICAgICAgICAgICAgICAgICBhbHRlcm5hdGl2ZSBsb2NhbGVzLiBBbmltYXRpb25zIHDDqWRhZ29naXF1ZXMgKEpldSBkZSBsYVxuICAgICAgICAgICAgICAgICAgZmljZWxsZSwgUG90ZW50aWEsIEpldSBkZXMgY2hhaXNlcywgRGV6b2JleWkuLi4pLlxuICAgICAgICAgICAgICAgICAgTW9iaWxpc2F0aW9ucy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgPHU+XG4gICAgICAgICAgICAgICAgICAgIDxiPkpldSBEZXpvYmV5aSA6PC9iPlxuICAgICAgICAgICAgICAgICAgPC91PlxuICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBFdCB0b2ksIGFzLXR1IGTDqWrDoCBkZXNvYsOpaSA/IEZhY2Ugw6AgbCdpbnRpbWlkYXRpb24sIMOgXG4gICAgICAgICAgICAgICAgICBsJ2luanVzdGljZSBjb21tZW50IHLDqWFnaXIgPyBGYXV0LWlsIHBhcmZvaXMgZMOpc29iw6lpciA/IFF1aW5vYVxuICAgICAgICAgICAgICAgICAgYXNibCBwcm9wb3NlIHVuIG91dGlsIHDDqWRhZ29naXF1ZSBhdXRvdXIgZGUgbCdhY3Rpb24gZGlyZWN0ZVxuICAgICAgICAgICAgICAgICAgbm9uLXZpb2xlbnRlIGV0IGRlIGxhIGTDqXNvYsOpaXNzYW5jZSBjaXZpbGUgOiBkdSBOb3JkIGF1IFN1ZCxcbiAgICAgICAgICAgICAgICAgIGwnYWN0aW9uIGRpcmVjdGUgbm9uLXZpb2xlbnRlIGVzdCAoZXQgYSB0b3Vqb3VycyDDqXTDqSkgdW5cbiAgICAgICAgICAgICAgICAgIGxldmllciBkZSBjaGFuZ2VtZW50IHNvY2lhbC4gRHJvaXQgZGUgdm90ZSBkZXMgZmVtbWVzLFxuICAgICAgICAgICAgICAgICAgYWJvbGl0aW9uIGRlIGxhIHPDqWdyw6lnYXRpb24sIHLDqWN1cMOpcmF0aW9uIGRlIHRlcnJlcy4uLiA6IHRvdXNcbiAgICAgICAgICAgICAgICAgIG9udCDDqXTDqSBvYnRlbnVzIG5vdGFtbWVudCBwYXIgZGVzIGFjdGlvbnMgZGUgXCJkw6lzb2LDqWlzc2FuY2VcIi5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBMZSBqZXUgZW50ZW5kIHBhcnRpciBkdSB2w6ljdSBkZXMgcGFydGljaXBhbuKAonTigKJl4oCicyBwb3VyIG1pZXV4XG4gICAgICAgICAgICAgICAgICB0b3VjaGVyIGF1IGNvZXVyIGRlcyBjYXVzZXMgcXVpIGxlcyBhbmltZW50IGV0IGxlcyBpbnNwaXJlbnQuXG4gICAgICAgICAgICAgICAgICBMJ291dGlsIHNlIGTDqXZlbG9wcGUgZW4gdW5lIGxpZ25lIGR1IHRlbXBzIHN1ciBsYXF1ZWxsZSBsZeKAomxhXG4gICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudOKAomUsIGVuIHBsdXNpZXVycyBwaGFzZSBsdWRpcXVlcywgcGV1dCB0ZXN0ZXIgc2VzXG4gICAgICAgICAgICAgICAgICBjb25uYWlzc2FuY2VzIGV0IGFmZnV0ZXIgc2EgdmlzaW9uIGR1IG1vbmRlIGVuIHZveWFnZWFudCBkYW5zXG4gICAgICAgICAgICAgICAgICB1bmUgXCJhdXRyZVwiIEhpc3RvaXJlIHF1ZSBjZWxsZSByw6ljb250w6llIHBhciBsZXMgXCJkb21pbmFudHNcIi5cbiAgICAgICAgICAgICAgICAgIDxicj48L2JyPkwnb3V0aWwgbGFpc3NlIGF1c3NpIGxhIHBsYWNlIGF1eCDDqWNoYW5nZXMgZXQgw6BcbiAgICAgICAgICAgICAgICAgIGwnYWN0aW9uIGF2ZWMgZGVzIG1pc2VzIGVuIHNpdHVhdGlvbiBldCBkw6liYXRzIG1vdXZhbnRzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIEV4cGxvcmV6IGxlcyBsdXR0ZXMgKGV0IGxlcyB2aWN0b2lyZXMpIGRlIGNlcyBmZW1tZXMgZXQgaG9tbWVzXG4gICAgICAgICAgICAgICAgICBxdWkgb250IGTDqXNvYsOpaS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWdBY2N1ZWlsXCIgc3JjPXtkZXpvYmV5fSBhbHQ9XCJpbWFnZSBqZXVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY2N1ZWlsO1xuIiwiLy8gbm9wcm90ZWN0XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbi8qKlxyXG4gKiBDZXR0ZSBjbGFzc2UgcGVybWV0IGwnYWZmaWNoYWdlIGQndW5lIHBhZ2UgZCdham91dCBldCBkZSBtb2RpZmljYXRpb24gZGVzIGV2ZW5lbWVudCBwb3VyIGxlIHF1aXp6XHJcbiAqL1xyXG5cclxuY2xhc3MgQWRtaW5pc3RyYXRpb24gZXh0ZW5kcyBDb21wb25lbnR7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHNlbGVjdEV2ZW50IDogdHJ1ZSxcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcblx0XHQvL3RoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENldHRlIGZvbmN0aW9uIHBlcm1ldCBkZSBtZXR0cmUgYSBqb3VyIGxhIHBhZ2Ugc3VpdGUgw6AgdW4gZXZlbmVtZW50XHJcblx0ICogQHBhcmFtIGV2ZW50IHVuIGV2ZW5lbWVudCBzdXIgbCdhZmZpY2hhZ2VcclxuXHQgKi9cclxuXHRoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcclxuXHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHRcdGNvbnN0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xyXG5cdFx0Y29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0pO1xyXG5cdFx0aWYodGhpcy5zdGF0ZS5ub20gIT09IHVuZGVmaW5lZCAmJiB0aGlzLnN0YXRlLm1ldGhvZCA9PT0gXCJnZXRcIikge1xyXG5cdFx0XHRsZXQgbm9tID0gdGhpcy5zdGF0ZS5ub207XHJcblx0XHRcdGF4aW9zXHJcblx0XHRcdFx0LmdldChgL2FwaS9ldmVuZW1lbnRzLyR7bm9tfWApXHJcblx0XHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0cGVyaW9kZTogcmVzLmRhdGEucGVyaW9kZSxcclxuXHRcdFx0XHRcdFx0XHRsaWV1OiByZXMuZGF0YS5saWV1LFxyXG5cdFx0XHRcdFx0XHRcdGx1dHRlOiByZXMuZGF0YS5sdXR0ZSxcclxuXHRcdFx0XHRcdFx0XHRzdHJhdGVnaWU6IHJlcy5kYXRhLnN0cmF0ZWdpZSxcclxuXHRcdFx0XHRcdFx0XHRhY3Rpb246IHJlcy5kYXRhLmFjdGlvbixcclxuXHRcdFx0XHRcdFx0XHR2aWN0b2lyZTogcmVzLmRhdGEudmljdG9pcmUsXHJcblx0XHRcdFx0XHRcdFx0YW5lY2RvdGU6IHJlcy5kYXRhLmFuZWNkb3RlLFxyXG5cdFx0XHRcdFx0XHRcdGNpdGF0aW9uOiByZXMuZGF0YS5jaXRhdGlvbixcclxuXHRcdFx0XHRcdFx0XHRxdWVzdGlvbjogcmVzLmRhdGEucXVlc3Rpb24sXHJcblx0XHRcdFx0XHRcdFx0cmVwb25zZTE6IHJlcy5kYXRhLnJlcG9uc2UxLFxyXG5cdFx0XHRcdFx0XHRcdHJlcG9uc2UyOiByZXMuZGF0YS5yZXBvbnNlMixcclxuXHRcdFx0XHRcdFx0XHRyZXBvbnNlMzogcmVzLmRhdGEucmVwb25zZTMsXHJcblx0XHRcdFx0XHRcdFx0dmlkZW86IHJlcy5kYXRhLnZpZGVvLFxyXG5cdFx0XHRcdFx0XHRcdGFydGljbGU6IHJlcy5kYXRhLmFydGljbGVcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdC8vY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogY2V0dGUgZm9uY3Rpb24gcGVybWV0IGwnZW52b2kgZGUgZG9ubsOpZXMgdmVycyBsYSBiYXNlIGRlIGRvbm7DqWVzLlxyXG5cdCAqL1xyXG5cdGhhbmRsZVN1Ym1pdCgpIHtcclxuXHRcdGxldCBub20gPSB0aGlzLnN0YXRlLm5vbTtcclxuXHRcdGNvbnN0IGV2ZW50T2JqZWN0ID0ge1xyXG5cdFx0XHRub206IHRoaXMuc3RhdGUubm9tLFxyXG5cdFx0XHRwZXJpb2RlOiB0aGlzLnN0YXRlLnBlcmlvZGUsXHJcblx0XHRcdGxpZXU6IHRoaXMuc3RhdGUubGlldSxcclxuXHRcdFx0bHV0dGU6IHRoaXMuc3RhdGUubHV0dGUsXHJcblx0XHRcdHN0cmF0ZWdpZTogdGhpcy5zdGF0ZS5zdHJhdGVnaWUsXHJcblx0XHRcdGFjdGlvbjogdGhpcy5zdGF0ZS5hY3Rpb24sXHJcblx0XHRcdHZpY3RvaXJlOiB0aGlzLnN0YXRlLnZpY3RvaXJlLFxyXG5cdFx0XHRhbmVjZG90ZTogdGhpcy5zdGF0ZS5hbmVjZG90ZSxcclxuXHRcdFx0Y2l0YXRpb246IHRoaXMuc3RhdGUuY2l0YXRpb24sXHJcblx0XHRcdHF1ZXN0aW9uOiB0aGlzLnN0YXRlLnF1ZXN0aW9uLFxyXG5cdFx0XHRyZXBvbnNlMTogdGhpcy5zdGF0ZS5yZXBvbnNlMSxcclxuXHRcdFx0cmVwb25zZTI6IHRoaXMuc3RhdGUucmVwb25zZTIsXHJcblx0XHRcdHJlcG9uc2UzOiB0aGlzLnN0YXRlLnJlcG9uc2UzLFxyXG5cdFx0XHR2aWRlbzogdGhpcy5zdGF0ZS52aWRlbyxcclxuXHRcdFx0YXJ0aWNsZTogdGhpcy5zdGF0ZS5hcnRpY2xlLFxyXG5cdFx0fTtcclxuXHJcblx0XHRzd2l0Y2ggKG1ldGhvZCkge1xyXG5cdFx0XHRjYXNlIFwicG9zdFwiOlxyXG5cdFx0XHRcdGF4aW9zXHJcblx0XHRcdFx0XHQucG9zdChcIi9hcGkvZXZlbmVtZW50cy9hZGQvXCIsIGV2ZW50T2JqZWN0KVxyXG5cdFx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJwdXRcIjpcclxuXHRcdFx0XHRheGlvc1xyXG5cdFx0XHRcdFx0LnB1dChgL2FwaS9ldmVuZW1lbnRzL3VwZGF0ZS8ke25vbX1gLCBldmVudE9iamVjdClcclxuXHRcdFx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJkZWxldGVcIjpcclxuXHRcdFx0XHRheGlvc1xyXG5cdFx0XHRcdFx0LmRlbGV0ZShgL2FwaS9ldmVuZW1lbnRzL2RlbGV0ZS8ke25vbX1gLCBldmVudE9iamVjdClcclxuXHRcdFx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6IGFsZXJ0KCdVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZScpO1xyXG5cdFx0XHRcdC8qYXhpb3NcclxuXHRcdFx0XHRcdC5nZXQoYC9hcGkvZXZlbmVtZW50cy8ke25vbX1gLCBldmVudE9iamVjdClcclxuXHRcdFx0XHRcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRcdFx0cGVyaW9kZTogcmVzLmRhdGEucGVyaW9kZSxcclxuXHRcdFx0XHRcdFx0XHRsaWV1OiByZXMuZGF0YS5saWV1LFxyXG5cdFx0XHRcdFx0XHRcdGx1dHRlOiByZXMuZGF0YS5sdXR0ZSxcclxuXHRcdFx0XHRcdFx0XHRzdHJhdGVnaWU6IHJlcy5kYXRhLnN0cmF0ZWdpZSxcclxuXHRcdFx0XHRcdFx0XHRhY3Rpb246IHJlcy5kYXRhLmFjdGlvbixcclxuXHRcdFx0XHRcdFx0XHR2aWN0b2lyZTogcmVzLmRhdGEudmljdG9pcmUsXHJcblx0XHRcdFx0XHRcdFx0YW5lY2RvdGU6IHJlcy5kYXRhLmFuZWNkb3RlLFxyXG5cdFx0XHRcdFx0XHRcdGNpdGF0aW9uOiByZXMuZGF0YS5jaXRhdGlvbixcclxuXHRcdFx0XHRcdFx0XHRxdWVzdGlvbjogcmVzLmRhdGEucXVlc3Rpb24sXHJcblx0XHRcdFx0XHRcdFx0cmVwb25zZTE6IHJlcy5kYXRhLnJlcG9uc2UxLFxyXG5cdFx0XHRcdFx0XHRcdHJlcG9uc2UyOiByZXMuZGF0YS5yZXBvbnNlMixcclxuXHRcdFx0XHRcdFx0XHRyZXBvbnNlMzogcmVzLmRhdGEucmVwb25zZTMsXHJcblx0XHRcdFx0XHRcdFx0dmlkZW86IHJlcy5kYXRhLnZpZGVvLFxyXG5cdFx0XHRcdFx0XHRcdGFydGljbGU6IHJlcy5kYXRhLmFydGljbGV9XHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG5cdFx0XHRcdFx0fSk7Ki9cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG5cdFx0bGV0IGVudGVyZWROYW1lID0gcHJvbXB0KCdFbnRyZXogdm90cmUgbW90IGRlIHBhc3NlJylcclxuXHRcdGlmKGVudGVyZWROYW1lID09PSBcIlF1aW5vYTIwMjBcIil7XHJcblx0XHRcdHRoaXMuaGFuZGxlU3VibWl0KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBjZXR0ZSBmb25jdGlvbiBwZXJtZXRzIGxlIHJlbmR1IHZpc3VlbCBkZSBsYSBwYWdlXHJcblx0ICogQHJldHVybnMgeyp9XHJcblx0ICovXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0aWYodGhpcy5zdGF0ZS5zZWxlY3RFdmVudCl7XHJcblx0XHRcdHJldHVybihcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjZW50ZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FkcmVTb21icmVcIj5cclxuXHRcdFx0XHRcdFx0PGgxPlBhZ2UgZCdham91dCBvdSBkZSBtb2RpZmljYXRpb24gZCd1biDDqXZlbmVtZW50PC9oMT5cclxuXHJcblx0XHRcdFx0XHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUNsaWNrfT5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRRdWUgdm91bGV6IHZvdXMgZmFpcmUgPyA8c3Bhbj4gICA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLm1ldGhvZH0gbmFtZT1cIm1ldGhvZFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJcIj4tLTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiZ2V0XCI+VmVyaWZpZXI8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cInBvc3RcIj5Bam91dGVyPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJwdXRcIj5Nb2RpZmllcjwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiZGVsZXRlXCI+U3VwcHJpbWVyPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxici8+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0Tm9tIDo8c3Bhbj4gIDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cIm5vbVwiXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIm5vbVwiXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5ub219XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPjxzcGFuPiAgPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdEFubsOpZSA6PHNwYW4+ICA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJwZXJpb2RlXCJcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0c2l6ZT1cIjVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJBbm7DqWVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUucGVyaW9kZX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+PGJyLz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdhZG1pbkxhYmVsJz5cclxuXHRcdFx0XHRcdFx0XHRcdExpZXUgOjxici8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJsaWV1XCJcclxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCIxXCJcclxuXHRcdFx0XHRcdFx0XHRcdGNvbHM9XCI5NVwiXHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImxpZXVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubGlldX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+PGJyLz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdhZG1pbkxhYmVsJz5cclxuXHRcdFx0XHRcdFx0XHRcdEx1dHRlIDo8YnIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwibHV0dGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJsdXR0ZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiMVwiXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xzPVwiOTVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubHV0dGV9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPjxici8+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nYWRtaW5MYWJlbCc+XHJcblx0XHRcdFx0XHRcdFx0XHRTdHJhdGVnaWUgOjxici8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwic3RyYXRlZ2llXCJcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJzdHJhdGVnaWVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0cm93cz1cIjFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Y29scz1cIjk1XCJcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnN0cmF0ZWdpZX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+PGJyLz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdhZG1pbkxhYmVsJz5cclxuXHRcdFx0XHRcdFx0XHRcdEFjdGlvbiA6PGJyLz5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJhY3Rpb25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImFjdGlvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiMVwiXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xzPVwiOTVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuYWN0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD48YnIvPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2FkbWluTGFiZWwnPlxyXG5cdFx0XHRcdFx0XHRcdFx0VmljdG9pcmUgOjxici8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwidmljdG9pcmVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cInZpY3RvaXJlXCJcclxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCIxXCJcclxuXHRcdFx0XHRcdFx0XHRcdGNvbHM9XCI5NVwiXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS52aWN0b2lyZX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+PGJyLz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdhZG1pbkxhYmVsJz5cclxuXHRcdFx0XHRcdFx0XHRcdEFuZWNkb3RlIDo8YnIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImFuZWNkb3RlXCJcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJhbmVjZG90ZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiMVwiXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xzPVwiOTVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuYW5lY2RvdGV9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPjxici8+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nYWRtaW5MYWJlbCc+XHJcblx0XHRcdFx0XHRcdFx0XHRDaXRhdGlvbiA6PGJyLz5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJjaXRhdGlvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiY2l0YXRpb25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0cm93cz1cIjFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Y29scz1cIjk1XCJcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmNpdGF0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD48YnIvPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J2FkbWluTGFiZWwnPlxyXG5cdFx0XHRcdFx0XHRcdFx0UXVlc3Rpb24gOjxici8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwicXVlc3Rpb25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cInF1ZXN0aW9uXCJcclxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCIxXCJcclxuXHRcdFx0XHRcdFx0XHRcdGNvbHM9XCI5NVwiXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5xdWVzdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+PGJyLz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdhZG1pbkxhYmVsJz5cclxuXHRcdFx0XHRcdFx0XHRcdFByZW1pw6hyZSByw6lwb25zZSAobGEgcsOpcG9uc2UgY29ycmVjdGUpIDo8YnIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cInLDqXBvbnNlIDFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cInJlcG9uc2UxXCJcclxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCIxXCJcclxuXHRcdFx0XHRcdFx0XHRcdGNvbHM9XCI5NVwiXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5yZXBvbnNlMX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+PGJyLz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdhZG1pbkxhYmVsJz5cclxuXHRcdFx0XHRcdFx0XHRcdERldXhpw6htZSByw6lwb25zZSA6PGJyLz5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJyw6lwb25zZSAyXCJcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJyZXBvbnNlMlwiXHJcblx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiMVwiXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xzPVwiOTVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUucmVwb25zZTJ9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPjxici8+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nYWRtaW5MYWJlbCc+IFxyXG5cdFx0XHRcdFx0XHRcdFx0VHJvaXNpw6htZSByw6lwb25zZSA6PGJyLz5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJyw6lwb25zZSAzXCJcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJyZXBvbnNlM1wiXHJcblx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiMVwiXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xzPVwiOTVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUucmVwb25zZTN9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPjxici8+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0nYWRtaW5MYWJlbCc+XHJcblx0XHRcdFx0XHRcdFx0XHRWaWRlbyA6PGJyLz5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJ2aWTDqW9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cInZpZGVvXCJcclxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9XCIxXCJcclxuXHRcdFx0XHRcdFx0XHRcdGNvbHM9XCI5NVwiXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS52aWRlb31cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+PGJyLz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPSdhZG1pbkxhYmVsJz5cclxuXHRcdFx0XHRcdFx0XHRcdEFydGljbGUgOjxici8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiYXJ0aWNsZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiYXJ0aWNsZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRyb3dzPVwiMVwiXHJcblx0XHRcdFx0XHRcdFx0XHRjb2xzPVwiOTVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuYXJ0aWNsZX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+PGJyLz5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0bkxvZ2luXCIgdmFsdWU9XCJFbnJlZ2lzdHJlclwiIC8+XHJcblx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5pc3RyYXRpb247XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCwgUmVkaXJlY3QsIExpbmssIHdpdGhSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQWNjdWVpbCBmcm9tIFwiLi9BY2N1ZWlsXCI7XHJcbmltcG9ydCBVc2VycyBmcm9tIFwiLi9Vc2Vyc1wiO1xyXG5pbXBvcnQgUG9zdHMgZnJvbSBcIi4vUG9zdHNcIjtcclxuaW1wb3J0IEluc2NyaXB0aW9uIGZyb20gXCIuL0luc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBMaWduZUR1VGVtcHMgZnJvbSBcIi4vTGlnbmVEdVRlbXBzXCI7XHJcbmltcG9ydCBTZUNvbm5lY3RlciBmcm9tIFwiLi9TZUNvbm5lY3RlclwiO1xyXG5pbXBvcnQgUXVpenogZnJvbSBcIi4vUXVpenpcIjtcclxuaW1wb3J0IFJlc3VsdGF0IGZyb20gXCIuL1Jlc3VsdGF0XCI7XHJcbmltcG9ydCBBZG1pbmlzdHJhdGlvbiBmcm9tIFwiLi9BZG1pbmlzdHJhdGlvblwiO1xyXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vLi4vaW1nL2xvZ28ucG5nXCI7XHJcbmltcG9ydCB7IE5hdiwgTmF2SXRlbSwgTmF2TGluayB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzXCI7XHJcbmltcG9ydCBMb2dPdXQgZnJvbSBcIi4vTG9nT3V0XCI7XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZDYWRyZSc+XHJcbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5xdWlub2EuYmVcIj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9e2xvZ299IGFsdD1cImxvZ28gUXVpbm9hXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvYWNjdWVpbFwiPlxyXG4gICAgICAgICAgICAgICAgQWNjdWVpbFxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvcXVpenpcIj5cclxuICAgICAgICAgICAgICAgIFF1aXp6XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9MaWduZUR1VGVtcHNcIj5cclxuICAgICAgICAgICAgICAgIExpZ25lRHVUZW1wc1xyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvcmVzdWx0YXRcIj5cclxuICAgICAgICAgICAgICAgIFJlc3VsdGF0XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9zZWNvbm5lY3RlclwiPlxyXG4gICAgICAgICAgICAgICAgU2UgY29ubmVjdGVyXHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9pbnNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgSW5zY3JpcHRpb25cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgPExvZ091dCAvPlxyXG4gICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgIDxSZWRpcmVjdCBleGFjdCBmcm9tPVwiL1wiIHRvPVwiL2FjY3VlaWxcIiAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi91c2Vyc1wiIGNvbXBvbmVudD17VXNlcnN9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Bvc3RzXCIgY29tcG9uZW50PXtQb3N0c30gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvc2Vjb25uZWN0ZXJcIiBjb21wb25lbnQ9e1NlQ29ubmVjdGVyfSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9pbnNjcmlwdGlvblwiIGNvbXBvbmVudD17SW5zY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3F1aXp6XCIgY29tcG9uZW50PXtRdWl6en0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWNjdWVpbFwiIGNvbXBvbmVudD17QWNjdWVpbH0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbGlnbmVkdXRlbXBzXCIgY29tcG9uZW50PXtMaWduZUR1VGVtcHN9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Jlc3VsdGF0XCIgY29tcG9uZW50PXtSZXN1bHRhdH0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWRtaW5cIiBjb21wb25lbnQ9e0FkbWluaXN0cmF0aW9ufSAvPlxyXG4gICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsIi8vIG5vcHJvdGVjdFxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybSwgRm9ybUdyb3VwLCBMYWJlbCwgSW5wdXQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jbGFzcyBJbnNjcmlwdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG1haWw6IFwiXCIsXHJcbiAgICAgIG1kcDogXCJcIixcclxuICAgICAgYWdlOiBcIlwiLFxyXG4gICAgICBzZXhlOiBcIlwiLFxyXG4gICAgICBkZXNvYmVpc3NhbnQ6IFwiXCIsXHJcbiAgICAgIG1kcEVycmV1cjogXCJcIixcclxuICAgICAgbWFpbEVycmV1cjogXCJcIixcclxuICAgICAgYWdlRXJyZXVyOiBcIlwiLFxyXG4gICAgICBzZXhlRXJyZXVyOiBcIlwiLFxyXG4gICAgICBkZXNvYmVpc3NhbnRFcnJldXI6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVXNlcigpIHtcclxuICAgIGNvbnN0IHVzZXJPYmplY3QgPSB7XHJcbiAgICAgIG1kcDogdGhpcy5zdGF0ZS5tZHAsXHJcbiAgICAgIG1haWw6IHRoaXMuc3RhdGUubWFpbCxcclxuICAgICAgYWdlOiB0aGlzLnN0YXRlLmFnZSxcclxuICAgICAgc2V4ZTogdGhpcy5zdGF0ZS5zZXhlLFxyXG4gICAgICBkZXNvYmVpc3NhbnQ6IHRoaXMuc3RhdGUuZGVzb2JlaXNzYW50LFxyXG4gICAgfTtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9hZGQvXCIsIHVzZXJPYmplY3QpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZShpdGVtLCBjaGFtcCkge1xyXG4gICAgbGV0IGl0ZW1WYWx1ZSA9IGl0ZW0udGFyZ2V0LnZhbHVlO1xyXG4gICAgc3dpdGNoIChjaGFtcCkge1xyXG4gICAgICBjYXNlIFwibWRwXCI6IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWRwOiBpdGVtVmFsdWUgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcIm1haWxcIjoge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYWlsOiBpdGVtVmFsdWUgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBcImFnZVwiOiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFnZTogaXRlbVZhbHVlIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJzZXhlXCI6IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2V4ZTogaXRlbVZhbHVlIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgXCJkZXNvYmVpc3NhbnRcIjoge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXNvYmVpc3NhbnQ6IGl0ZW1WYWx1ZSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGUoKSB7XHJcbiAgICB2YXIgdmFsaWRhdG9yID0gcmVxdWlyZShcImVtYWlsLXZhbGlkYXRvclwiKTtcclxuICAgIGxldCBlbWFpbCA9IHRoaXMuc3RhdGUubWFpbDsgLy9jaGFuZ2UgZm9ybSB0byBpZCBvciBjb250YWlubWVudCBzZWxlY3RvclxyXG4gICAgbGV0IG1kcEVycmV1ciA9IFwiXCI7XHJcbiAgICBsZXQgbWFpbEVycmV1ciA9IFwiXCI7XHJcbiAgICBsZXQgYWdlRXJyZXVyID0gXCJcIjtcclxuICAgIGxldCBzZXhlRXJyZXVyID0gXCJcIjtcclxuICAgIGxldCBkZXNvYmVpc3NhbnRFcnJldXIgPSBcIlwiO1xyXG5cclxuICAgIGlmICh0aGlzLnN0YXRlLm1kcC5sZW5ndGggPCA4KSB7XHJcbiAgICAgIG1kcEVycmV1ciA9IFwibGUgY2hhbXAgZG9pdCDDqnRyZSBwbHVzIGxvbmdcIjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXZhbGlkYXRvci52YWxpZGF0ZShlbWFpbCkpIHtcclxuICAgICAgbWFpbEVycmV1ciA9IFwiVmV1aWxsZXogZW50cmVyIHVuZSBhZHJlc3NlIHZhbGlkZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5zdGF0ZS5hZ2UpIHtcclxuICAgICAgYWdlRXJyZXVyID0gXCJsZSBjaGFtcCBkb2l0IMOqdHJlIHJlbXBsaVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5zdGF0ZS5zZXhlKSB7XHJcbiAgICAgIHNleGVFcnJldXIgPSBcImxlIGNoYW1wIGRvaXQgw6p0cmUgcmVtcGxpXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmRlc29iZWlzc2FudCkge1xyXG4gICAgICBkZXNvYmVpc3NhbnRFcnJldXIgPSBcImxlIGNoYW1wIGRvaXQgw6p0cmUgcmVtcGxpXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBtYWlsRXJyZXVyIHx8XHJcbiAgICAgIG1kcEVycmV1ciB8fFxyXG4gICAgICBhZ2VFcnJldXIgfHxcclxuICAgICAgc2V4ZUVycmV1ciB8fFxyXG4gICAgICBkZXNvYmVpc3NhbnRFcnJldXJcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBtYWlsRXJyZXVyLFxyXG4gICAgICAgIG1kcEVycmV1cixcclxuICAgICAgICBhZ2VFcnJldXIsXHJcbiAgICAgICAgc2V4ZUVycmV1cixcclxuICAgICAgICBkZXNvYmVpc3NhbnRFcnJldXIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWJtaXQoKSB7XHJcbiAgICBjb25zdCBpc1ZhbGlkID0gdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgbGV0IG9iaiA9IHt9O1xyXG4gICAgb2JqLm1kcCA9IHRoaXMuc3RhdGUubWRwO1xyXG4gICAgb2JqLm1haWwgPSB0aGlzLnN0YXRlLm1haWw7XHJcbiAgICBvYmouYWdlID0gdGhpcy5zdGF0ZS5hZ2U7XHJcbiAgICBvYmouc2V4ZSA9IHRoaXMuc3RhdGUuc2V4ZTtcclxuICAgIG9iai5kZXNvYmVpc3NhbnQgPSB0aGlzLnN0YXRlLmRlc29iZWlzc2FudDtcclxuICAgIG9iai5jb21tZW50YWlyZSA9IHRoaXMuc3RhdGUuY29tbWVudGFpcmU7XHJcblxyXG4gICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiZG9ubsOpZXMgZW52b3nDqWVzXCIsIG9iaik7XHJcbiAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL3F1aXp6XCIpO1xyXG4gICAgICB0aGlzLmNyZWF0ZVVzZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImNhZHJlU29tYnJlXCIgbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9ybVRpdGxlIHRleHQtY2VudGVyXCI+SW5zY3JpcHRpb248L2gxPlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxoMz5BZHJlc3NlIE1haWw8L2gzPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJtYWlsXCIpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyZXVyXCI+e3RoaXMuc3RhdGUubWFpbEVycmV1cn08L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGgzPk1vdCBkZSBwYXNzZTwvaDM+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm1kcFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cIm1kcFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwibWRwXCIpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyZXVyXCI+e3RoaXMuc3RhdGUubWRwRXJyZXVyfTwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8aDM+QWdlPC9oMz5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvQWdlXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwiYWdlXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD4xNi0xODwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0FnZVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiMTlcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIjE5XCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcImFnZVwiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWw+MTktMjE8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmFkaW9BZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIjIyXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIyMlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJhZ2VcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPjIyLTI1PC9MYWJlbD5cclxuICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Rm9ybUdyb3VwIGNsYXNzTmFtZT1cInJhZGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJhZGlvQWdlXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCIyNlwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMjZcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwiYWdlXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD4yNi0yOTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyYWRpb0FnZVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIjMwXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpdGVtKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShpdGVtLCBcIm1haWxcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPisgMzA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyZXVyXCI+e3RoaXMuc3RhdGUuYWdlRXJyZXVyfTwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8aDM+U2V4ZTwvaDM+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZXhlXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImhvbW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImhvbW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImhvbW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwic2V4ZVwiKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgaG9tbWVcclxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZXhlXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImZlbW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImZlbW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImZlbW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwic2V4ZVwiKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgZmVtbWVcclxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZXhlXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImF1dHJlXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImF1dHJlXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImF1dHJlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwic2V4ZVwiKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgYXV0cmVcclxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJldXJcIj57dGhpcy5zdGF0ZS5zZXhlRXJyZXVyfTwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8aDM+RXN0LWNlIHF1ZSB2b3VzIHZvdXMgY29uc2lkw6lyZXogY29tbWUgwqtkw6lzb2LDqWlzc2FudMK7ID88L2gzPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzb2JlaVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwib3VpXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJvdWlcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGl0ZW0pID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGl0ZW0sIFwiZGVzb2JlaXNzYW50XCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxMYWJlbD5vdWk8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzb2JlaVwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwidW5QZXVcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cInVuIHBldVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJkZXNvYmVpc3NhbnRcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPnVuIHBldTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNvYmVpXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJub25cIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIm5vblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoaXRlbSwgXCJkZXNvYmVpc3NhbnRcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsPm5vbjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJldXJcIj57dGhpcy5zdGF0ZS5kZXNvYmVpc3NhbnRFcnJldXJ9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG5Mb2dpblwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU3VibWl0KCl9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlMnaW5zY3JpcmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5zY3JpcHRpb247XHJcbiIsImV4cG9ydCBjb25zdCBsZHRkYXRhID0gW1xyXG4gIHtcclxuICAgIHBlcmlvZGU6IDE5MzAsXHJcbiAgICBub206IGAgR2FuZGhpYCxcclxuICAgIHJlcG9uc2VKb3VldXI6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwZXJpb2RlOiAxOTYwLFxyXG4gICAgbm9tOiBgIEF5bWVyaWNgLFxyXG4gICAgcmVwb25zZUpvdWV1cjogMixcclxuICB9LFxyXG4gIHtcclxuICAgIHBlcmlvZGU6IDE0OTAsXHJcbiAgICBub206IGAgU2ViYCxcclxuICAgIHJlcG9uc2VKb3VldXI6IDMsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwZXJpb2RlOiAxOTMwLFxyXG4gICAgbm9tOiBgIEh1bWJlcmAsXHJcbiAgICByZXBvbnNlSm91ZXVyOiAxLFxyXG4gIH0sXHJcbl07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBsZHRkYXRhIH0gZnJvbSBcIi4vTERURGF0YVwiO1xyXG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsLCBNb2RhbEhlYWRlciwgTW9kYWxCb2R5LCBNb2RhbEZvb3RlciB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCB7IGZhQ2hlY2ssIGZhVGltZXMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuXHJcbmNsYXNzIExpZ25lRHVUZW1wcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBmaWNoZTogW1xyXG4gICAgICAgIHsgbm9tOiBcIlwiIH0sXHJcbiAgICAgICAgeyBwZXJpb2RlOiBcIlwiIH0sXHJcbiAgICAgICAgeyBsaWV1OiBcIlwiIH0sXHJcbiAgICAgICAgeyBsdXR0ZTogXCJcIiB9LFxyXG4gICAgICAgIHsgc3RyYXRlZ2llOiBcIlwiIH0sXHJcbiAgICAgICAgeyBhY3Rpb246IFwiXCIgfSxcclxuICAgICAgICB7IHZpY3RvaXJlOiBcIlwiIH0sXHJcbiAgICAgICAgeyBhbmVjZG90ZTogXCJcIiB9LFxyXG4gICAgICAgIHsgY2l0YXRpb246IFwiXCIgfSxcclxuICAgICAgICB7IHF1ZXN0aW9uOiBcIlwiIH0sXHJcbiAgICAgICAgeyByZXBvbnNlMTogXCJcIiB9LFxyXG4gICAgICAgIHsgcmVwb25zZTI6IFwiXCIgfSxcclxuICAgICAgICB7IHJlcG9uc2UzOiBcIlwiIH0sXHJcbiAgICAgICAgeyB2aWRlbzogXCJcIiB9LFxyXG4gICAgICAgIHsgYXJ0aWNsZTogXCJcIiB9LFxyXG4gICAgICAgIHsgcmVwb25zZUpvdWV1cjogXCJcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgICBtb2RhbDogZmFsc2UsXHJcbiAgICAgIGFjdGl2ZU1vZGFsOiBudWxsLFxyXG4gICAgfTtcclxuICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgYXhpb3MuZ2V0KCcvYXBpL2V2ZW5lbWVudHMvJylcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XHJcbiAgICAgIG1vZGFsOiAhcHJldlN0YXRlLm1vZGFsLFxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgcmVwb25zZShyZXBvbnNlKSB7XHJcbiAgICBpZiAocmVwb25zZSA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCJjaGVja0ljb25cIiBpY29uPXtmYUNoZWNrfSAvPjtcclxuICAgIH1cclxuICAgIHJldHVybiA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT1cImZhbHNlSWNvblwiIGljb249e2ZhVGltZXN9IC8+O1xyXG4gIH1cclxuXHJcbiAgLy8gY2hhbmdlVmFyaWFibGUocGVyaW9kZXMsIG5vbXMsIHJlcG9uc2VKb3VldXJzKSB7XHJcbiAgLy8gICB0aGlzLnNldFN0YXRlKHtcclxuICAvLyAgICAgcGVyaW9kZTogcGVyaW9kZXMudmFsdWUsXHJcbiAgLy8gICAgIG5vbTogbm9tcy52YWx1ZSxcclxuICAvLyAgICAgcmVwb25zZUpvdWV1cjogcmVwb25zZUpvdWV1cnMudmFsdWUsXHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcblxyXG4gIGxpZ25lRHVUZW1wcygpIHtcclxuICAgIGNvbnN0IHsgZmljaGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gZmljaGUubWFwKCh7IG5vbSwgaWQsIHBlcmlvZGUscmVwb25zZUpvdWV1ciB9KSA9PiAoXHJcbiAgICAgIDx0ciBrZXk9e2lkfT5cclxuICAgICAgICA8dGQ+e25vbX08L3RkPlxyXG4gICAgICAgIDx0ZD57cGVyaW9kZX08L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyZXBvbnNlSm91ZXVyXCI+e3RoaXMucmVwb25zZShyZXBvbnNlSm91ZXVyKX08L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XHJcbiAgICAgICAgICAgIFBsdXMgZCdpbmZvcm1hdGlvblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICkpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBmaWNoZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FkcmVTb21icmVcIj5cclxuICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgbW9kYWxDbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIlxyXG4gICAgICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5tb2RhbH1cclxuICAgICAgICAgICAgICBmYWRlPXtmYWxzZX1cclxuICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMudG9nZ2xlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZT17dGhpcy50b2dnbGV9PnsgZmljaGUubm9tfTwvTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgPE1vZGFsQm9keT57IGZpY2hlIH08L01vZGFsQm9keT5cclxuICAgICAgICAgICAgICA8TW9kYWxGb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy50b2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxkdFRpdHJlXCI+XHJcbiAgICAgICAgICAgICAgVm9zIHLDqXN1bHRhdHMgYXV4IHF1ZXN0aW9ucyBkZXMgZMOpc29iw6lpc3NhbnRzXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDx0YWJsZSBpZD1cInRhYkRlc29iZWlcIj5cclxuICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0aGVhZFwiPk5vbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0aGVhZFwiPkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGhlYWRcIj5Sw6lzdWx0YXQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGhlYWRcIj5JbmZvczwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRib2R5Pnt0aGlzLmxpZ25lRHVUZW1wcygpfTwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlnbmVEdVRlbXBzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTG9nT3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKHRydWUpOyAvL3NpIGZhbHNlIGRpc3BhcmFpdFxyXG5cclxuICBjb25zb2xlLmxvZyhjaGVja2VkKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGlmIChjaGVja2VkID09PSB0cnVlKSB7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiRMOpY29ubmV4aW9uXCIpO1xyXG4gIC8vICAgICAvL2ZvbmN0aW9uIGTDqWNvbm5leGlvblxyXG4gIC8vICAgfVxyXG4gIC8vIH0sIFtjaGVja2VkXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgLy9jaGFuZ2UgbCfDqXRhdCBkZSBjaGVja2VkXHJcbiAgICBzZXRDaGVja2VkKGV2ZW50LnRhcmdldC5jaGVja2VkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJMb2dPdXRDb250YWluZXJcIiBzdHlsZT17Y2hlY2tlZCA/IHt9IDogeyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN3aXRjaFwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtjaGVja2VkfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNsaWRlciByb3VuZFwiPjwvc3Bhbj5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZXRhdENvbm5leGlvblwiPsOpdGF0IGRlIGNvbm5leGlvbjwvbGFiZWw+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nT3V0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cblxuY2xhc3MgUG9zdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZ2V0UG9zdHMoKTtcbiAgICB9XG5cbiAgICBnZXRQb3N0cygpIHtcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvYCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9zdHMgPSByZXMuZGF0YS5zbGljZSgwLDE1KTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwb3N0cywgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGxvYWRpbmcgPSB0aGlzLnN0YXRlLmxvYWRpbmc7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm93LXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+PHNwYW4+TGlzdCBvZiBwb3N0czwvc3Bhbj5DcmVhdGVkIHdpdGggPGlcbiAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtaGVhcnRcIj48L2k+IGJ5IHllbWl3ZWJieSA8L2gyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncm93IHRleHQtY2VudGVyJ30+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1zcGluIGZhLXNwaW5uZXIgZmEtNHhcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Jvdyd9PlxuICAgICAgICAgICAge3RoaXMuc3RhdGUucG9zdHMubWFwKHBvc3QgPT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgb2Zmc2V0LW1kLTEgcm93LWJsb2NrXCIga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAgICA8dWwgaWQ9XCJzb3J0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGg0Pntwb3N0LnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgPHA+e3Bvc3QuYm9keX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0czsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNsYXNzIFF1aXp6IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGJvbm5lc1JlcG9uc2VzOiBbXSxcclxuICAgICAgbWVzUmVwb25zZXM6IFtdLFxyXG4gICAgICBsaXN0UXVlc3Rpb246IFtdLFxyXG4gICAgICBjdXJyZW50UXVlc3Rpb246IDAsXHJcbiAgICAgIG15QW5zd2VyOiBudWxsLFxyXG4gICAgICBzY29yZTogMCxcclxuICAgICAgZGlzYWJsZWQ6IHRydWUsXHJcbiAgICAgIGlzRW5kOiBmYWxzZSxcclxuICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICBxdWl6emRhdGE6IFtdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENldHRlIGZvbmN0aW9uIGluaXRpYWxpc2UgbGEgcGFnZSBhdmVjIHVuIGFycmF5IGRlIHF1ZXN0aW9uIGFsw6lhdG9pcmVcclxuICAgKi9cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGF4aW9zLmdldChgL2FwaS9zdGFydFF1aXp6L2ApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbGlzdFF1ZXN0aW9uOiByZXMuZGF0YSB9KTtcclxuICAgIH0pO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZ2V0UXVlc3Rpb24oKTtcclxuICAgIH0sIDE1MDApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY2V0dGUgZm9uY3Rpb24gcsOpY3Vww6hyZSBsZXMgaW5mb3JtYXRpb25zIGRlIGxhIHF1ZXN0aW9uIGVuIGNvdXJzXHJcbiAgICovXHJcbiAgZ2V0UXVlc3Rpb24gPSAoKSA9PiB7XHJcbiAgICBsZXQgZXZlbnQgPSB0aGlzLnN0YXRlLmxpc3RRdWVzdGlvblt0aGlzLnN0YXRlLmN1cnJlbnRRdWVzdGlvbl07XHJcbiAgICBheGlvcy5nZXQoYC9hcGkvcXVpenovJHtldmVudH1gKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgIGxldCBkYXRhID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiByZXMuZGF0YS5pZCxcclxuICAgICAgICAgIG5vbTogcmVzLmRhdGEubm9tLFxyXG4gICAgICAgICAgcXVlc3Rpb246IHJlcy5kYXRhLnF1ZXN0aW9uLFxyXG4gICAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICByZXMuZGF0YS5yZXBvbnNlMSxcclxuICAgICAgICAgICAgcmVzLmRhdGEucmVwb25zZTIsXHJcbiAgICAgICAgICAgIHJlcy5kYXRhLnJlcG9uc2UzLFxyXG4gICAgICAgICAgXS5zb3J0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIGFuc3dlcjogcmVzLmRhdGEucmVwb25zZTEsXHJcbiAgICAgICAgfSxcclxuICAgICAgXTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHF1aXp6ZGF0YTogZGF0YSB9KTtcclxuICAgICAgLy9jcsOpYXRpb24gZCd1biBsb2NhbFN0b3JhZ2VcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgXCJsaXN0ZVF1ZXN0aW9uXCIsXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5saXN0UXVlc3Rpb24pXHJcbiAgICAgICk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgIFwibGlzdGVSZXBvbnNlc1wiLFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUubWVzUmVwb25zZXMpXHJcbiAgICAgICk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2NvcmVcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5zY29yZSkpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICBcImJvbm5lUmVwb25zZVwiLFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuYm9ubmVzUmVwb25zZXMpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDZXR0ZSBmb25jdGlvbiBwZXJtZXQgZGUgcGFzc2VyIMOgIGxhIHF1ZXN0aW9uIHN1aXZhbnRlIGVuIGVucmVnaXN0cmFudCBsYSBib25uZSByw6lwb25zZSBhaW5zaSBxdWUgbGEgcsOpcG9uc2VcclxuICAgKiBkZSBsJ3V0aWxpc2F0ZXVyIGV0IGF1Z21lbnRlIGxlIHNjb3JlIHNpIGxhIHLDqXBvbnNlIGVzdCBjb3JyZWN0ZVxyXG4gICAqL1xyXG4gIG5leHRRdWVzdGlvbkhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygndGVzdCcpXHJcbiAgICBjb25zdCB7IG15QW5zd2VyLCBxdWl6emRhdGEsIHNjb3JlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IGpvaW5lZFVzZXJBbnN3ZXIgPSB0aGlzLnN0YXRlLm1lc1JlcG9uc2VzLmNvbmNhdChteUFuc3dlcik7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVzUmVwb25zZXM6IGpvaW5lZFVzZXJBbnN3ZXIgfSk7XHJcbiAgICBsZXQgam9pbmVkQ29ycmVjdEFuc3dlciA9IHRoaXMuc3RhdGUuYm9ubmVzUmVwb25zZXMuY29uY2F0KFxyXG4gICAgICBxdWl6emRhdGFbMF0uYW5zd2VyXHJcbiAgICApO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGJvbm5lc1JlcG9uc2VzOiBqb2luZWRDb3JyZWN0QW5zd2VyIH0pO1xyXG4gICAgaWYgKG15QW5zd2VyID09PSBxdWl6emRhdGFbMF0uYW5zd2VyKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHNjb3JlOiBzY29yZSArIDEsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGN1cnJlbnRRdWVzdGlvbjogdGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb24gKyAxLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2V0dGUgZm9uY3Rpb24gdsOpcmlmaWUgc2kgbGEgcXVlc3Rpb24gYWN0dWVsbGUgw6AgYmllbiBjaGFuZ2VyLlxyXG4gICAqL1xyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudFF1ZXN0aW9uICE9PSBwcmV2U3RhdGUuY3VycmVudFF1ZXN0aW9uKSB7XHJcbiAgICAgIHRoaXMuZ2V0UXVlc3Rpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENldHRlIGZvbmN0aW9uIHLDqWFnaXQgw6AgbGEgc2VsZWN0aW9uIGQndW5lIHLDqXBvbnNlIGRhbnMgbGUgcXVpenpcclxuICAgKi9cclxuICAvL2NoZWNrIGFuc3dlclxyXG4gIGNoZWNrQW5zd2VyID0gKGFuc3dlcikgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG15QW5zd2VyOiBhbnN3ZXIsIGRpc2FibGVkOiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDZXR0ZSBmb25jdGlvbiBwZXJtZXQgbGEgZmluIGR1IHF1aXp6XHJcbiAgICovXHJcblxyXG4gIGZpbmlzaEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50UXVlc3Rpb24gPT0gMTkpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRW5kOiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbXlBbnN3ZXIsXHJcbiAgICAgIGN1cnJlbnRRdWVzdGlvbixcclxuICAgICAgaXNFbmQsXHJcbiAgICAgIHF1aXp6ZGF0YSxcclxuICAgICAgYm9ubmVzUmVwb25zZXMsXHJcbiAgICB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBpZiAoaXNFbmQpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdCBjYWRyZVNvbWJyZVwiPlxyXG4gICAgICAgICAgPGgzPlZvdHJlIHNjb3JlIGZpbmFsIGVzdCA6IHt0aGlzLnN0YXRlLnNjb3JlfSBwb2ludHMgc3VyIDIwPC9oMz5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBMZXMgcsOpcG9uc2VzIGNvcnJlY3RlcyBhdXggcXVlc3Rpb25zIMOpdGFpZW50IDpcclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIHtib25uZXNSZXBvbnNlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidWkgZmxvYXRpbmcgbWVzc2FnZSBvcHRpb25zXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHAgY2FkcmVTb21icmVcIj5cclxuICAgICAgICAgIHtxdWl6emRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxoMj5TdWpldCBkZSBsYSBxdWVzdGlvbiA6IHtpdGVtLm5vbX08L2gyPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxoMz57aXRlbS5xdWVzdGlvbn08L2gzPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgUXVlc3Rpb25zIHsyMCAtIGN1cnJlbnRRdWVzdGlvbn0gc3VyIDIwIHJlc3RhbnRlc1xyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAge3F1aXp6ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAge2l0ZW0ub3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHVpIGZsb2F0aW5nIG1lc3NhZ2Ugb3B0aW9ucyAke1xyXG4gICAgICAgICAgICAgICAgICAgIG15QW5zd2VyID09PSBvcHRpb24gPyBcInNlbGVjdGVkXCIgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoZWNrQW5zd2VyKG9wdGlvbil9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtvcHRpb259XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIHtjdXJyZW50UXVlc3Rpb24gPCAxOSAmJiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1aSBpbnZlcnRlZCBidXR0b25cIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmRpc2FibGVkfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubmV4dFF1ZXN0aW9uSGFuZGxlcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgey8qIC8vYWRkaW5nIGEgZmluaXNoIGJ1dHRvbiAqL31cclxuICAgICAgICAgIHtjdXJyZW50UXVlc3Rpb24gPT09IDE5ICYmIChcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1aSBpbnZlcnRlZCBidXR0b25cIiBvbkNsaWNrPXt0aGlzLmZpbmlzaEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgIEZpbmlzaFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWl6ejtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtR3JvdXAgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5jbGFzcyBSZXN1bHRhdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNjb3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzY29yZVwiLCBKU09OLnN0cmluZ2lmeShzY29yZSkpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2socGFnZSkge1xuICAgIHN3aXRjaCAocGFnZSkge1xuICAgICAgY2FzZSBcInF1aXp6XCI6IHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvcXVpenpcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBcImxpZ25lVHBzXCI6IHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvbGlnbmVkdXRlbXBzXCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRydWU7XG4gICAgfVxuICB9XG5cbiAgbXNnUmVzdWx0YXQoKSB7fVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhZHJlU29tYnJlXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicmVzdWx0VGl0cmVcIj5UdSBhcyBmaW5pIGxlIFF1aXp6IERlem9iZXlpICE8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRhdENvbnRlbnVcIj5cbiAgICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGVzY29yZSA+PSAxNiA/IChcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgQnJhdm8gISBUdSBlcyB1bi1lIGluY29udGVzdGFibGUgZMOpc29iw6lpc3NhbnQtZSDwn5iDLi4uXG4gICAgICAgICAgICAgICAgICAgIERlem9iZXlpIGNvbXBvcnRlIGVuY29yZSBiaWVuIGQnYXV0cmVzIGZhY2V0dGVzLCBuJ2jDqXNpdGVcbiAgICAgICAgICAgICAgICAgICAgcGFzIMOgIHJlam91ZXIuLi5cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgKSA6IHRoaXMuc2NvcmUgPD0gMTUgJiYgdGhpcy5zY29yZSA+PSAxMCA/IChcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgVHUgZXMgdW4tZSBkw6lzb2LDqWlzc2FudC1lIGNvbmZpcm3DqS1lLCBiaWVuIGpvdcOpICEgZXQgc2kgdHVcbiAgICAgICAgICAgICAgICAgICAgcmVqb3VhaXMgcG91ciBkZXZlbmlyIHVuLWUgdsOpcml0YWJsZSBleHBlcnQtZSA/XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIFR1IGVzIHVuZSBncmFpbmUgZGUgZMOpc29iw6lpc3NhbnQtZSAhIGNvbnRpbnVlIGRlIHQnaW5mb3JtZXJcbiAgICAgICAgICAgICAgICAgICAgZGFucyBub3MgcGFnZXMgZXQgcmVqb3VlICFcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgPHA+VHUgYXMgZXUge3RoaXMuc3RhdGUuc2NvcmV9IGRlIGJvbm5lcyByw6lwb25zZXMgc3VyIDIwPC9wPlxuICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5MaWduZVRwc1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKFwibGlnbmVUcHNcIil9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlRlcyByw6lwb25zZXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blF1aXp6XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soXCJxdWl6elwiKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+UmVmYWlyZSBsZSBxdWl6ejwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cucXVpbm9hLmJlXCI+XG4gICAgICAgICAgICAgICAgICBTJ2luc2NpcmUgw6AgbGEgbmV3c2xldHRlciBkZSBRdWlub2FcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0YXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybUdyb3VwLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcclxuXHJcbmNvbnN0IFNlQ29ubmVjdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlcnJldXIsIHNldEVycmV1cl0gPSB1c2VTdGF0ZSh0cnVlKTsgLy9zaSB0cnVlIGRpc3BhcmFpdFxyXG5cclxuICBjb25zdCBsb2dpbiA9IChldmVudCkgPT4ge1xyXG4gICAgLy9jaGFuZ2UgbCfDqXRhdCBkZSBlcnJldXJcclxuICAgIHNldEVycmV1cihldmVudC50YXJnZXQuZXJyZXVyKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjYWRyZVNvbWJyZVwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvcm1UaXRsZSB0ZXh0LWNlbnRlclwiPlNlIENvbm5lY3RlcjwvaDE+XHJcbiAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8aDM+QWRyZXNzZSBtYWlsPC9oMz5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGlkPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8aDM+TW90IGRlIHBhc3NlPC9oMz5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwibWRwXCJcclxuICAgICAgICAgICAgICBpZD1cIm1kcFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgIDxGb3JtR3JvdXAgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0bkxvZ2luXCIgb25DbGljaz17bG9naW59PlxyXG4gICAgICAgICAgICAgIFNlIENvbm5lY3RcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPEFsZXJ0IGNvbG9yPVwid2FybmluZ1wiIHN0eWxlPXtlcnJldXIgPyB7IGRpc3BsYXk6IFwibm9uZVwiIH0gOiB7fX0+XHJcbiAgICAgICAgICBWb3RyZSBhZHJlc3NlIG1haWwgb3Ugdm90cmUgbW90IHBhc3NlIGVzdCBpbmNvcnJlY3RcclxuICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZUNvbm5lY3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBVc2VycyBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdHBlcnNvbnM6IFtdXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRheGlvcy5nZXQoYC9hcGkvdXNlcnMvYClcblx0XHRcdC50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdGNvbnN0IHBlcnNvbnMgPSByZXMuZGF0YTtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHBlcnNvbnMgfSk7XG5cdFx0XHR9KVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dWw+XG5cdFx0XHRcdHsgdGhpcy5zdGF0ZS5wZXJzb25zLm1hcChwZXJzb24gPT4gPGxpPntwZXJzb24ucHNldWRvfTwvbGk+KX1cblx0XHRcdDwvdWw+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzOyJdLCJzb3VyY2VSb290IjoiIn0=