"use strict";
(self["webpackChunksmart_todo"] = self["webpackChunksmart_todo"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/edit-svgrepo-com.svg */ "./src/icons/edit-svgrepo-com.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/delete-svgrepo-com.svg */ "./src/icons/delete-svgrepo-com.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/check-svgrepo-com.svg */ "./src/icons/check-svgrepo-com.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/undo-svgrepo-com.svg */ "./src/icons/undo-svgrepo-com.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n    box-sizing: inherit;\n}\n\nhtml {\n    box-sizing: border-box;\n    font-family: 'Ubuntu';\n}\n\nbody{\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    background: whitesmoke;\n}\n\n.header{\n    background-color: whitesmoke;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    width: 100%;\n}\n\nh1{\n    font-size: 25px;\n    margin-bottom: 5px;\n}\n\n.projects-wrapper{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.tabs-header{\n    border-top: solid .5px black;\n    display: flex;\n    gap:.3rem;\n    padding-top: 2px;\n    padding-left: 10px;\n    padding-right: 10px;\n    margin-left: 1rem;\n    margin-bottom: .5rem;\n}\n\n/* ------------------------------------ BELOW: Projects css ------------------------------------ */\n\nh2{\n    font-size: 18px;\n    margin: 0px;\n}\n\n.edit-projects-icon{\n    height: 1rem;\n    width: 1rem;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n\n.tabs-bar{\n    height: 80%;\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    min-height: 50px;\n}\n\n.tab{\n    background: white;\n    font-size: 20px;\n    margin: 10px;\n    padding-left: 10px;\n    padding-right: 10px;\n    border-left: solid .1rem black;\n    border-right: solid .1rem black;\n    width: auto;\n    display: flex;\n    align-items: center;\n    transition: all .1s;\n}\n\n.active-tab{\n    font-size: 26px;\n}\n\n.icon-holder{\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-items: center;\n    gap: .5rem;\n    margin: .2rem;\n    margin-left: .5rem;\n}\n\n.project-name-input{\n    width: 100%;\n    height: 50%;\n}\n\n.create-project-form{\n    display: flex;\n    align-items: center;\n}\n\n.project-name-input{\n    width: 120px;\n}\n\n.delete-icon{\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    height: 1rem;\n    width: 1rem; \n}\n\n.edit-icon{\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    height: 1rem;\n    width: 1rem;\n}\n\n.projects-being-edited{\n    background: white;\n    width: 100%;\n    border: .1rem dotted black;\n}\n\n.create-project-button,\n.create-button{\n   border: dotted black;\n   margin: 5px;\n   width: 80%;\n   height: 2rem;\n   display: grid;\n   justify-items: center;\n   align-items: center;\n}\n\n/* ------------------------------------ BELOW: Todo css ------------------------------------ */\n\n.todos-container{\n    width: 700px;\n    display: flex;\n    flex-direction: column;\n    gap: .2rem;\n    align-items: center;\n    padding-top: .5rem;\n\n}\n\n.todo-container{\n    background:white;\n    width: 100%;\n    min-height: 2.5rem;\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 2rem auto 1fr 6rem 1rem;\n    align-items: center;\n    justify-items: center;\n    padding-left: .5rem;\n    padding-right: .5rem;\n}\n\n.checkbox{\n    height: 1.5rem;\n    width: 1.5rem;\n    border: .1rem solid grey;\n    \n}\n\n.todo-title{\n    font-size: 1.2rem;\n}\n\n.todo-description{\n    display: flex;\n    justify-content: center;\n    opacity: .7;\n}\n\n\n/* ------------------------------------ BELOW: Form css ------------------------------------ */\n\n.being-edited{\n    background: white;\n    width: 100%;\n    border: .1rem dotted black;\n    min-height: 5rem;\n    display: grid;\n    grid-template-columns: auto 10rem 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-template-areas: \n    \"title-label deadline-label description-label \"\n    \"title-input deadline-input description-input\"\n    \"buttons buttons description-input \";\n    gap: 0 .8rem;\n    padding: .5rem 1rem .15rem 1rem;\n}\n\n.label{\n    font-size: .9rem;\n    align-self: center;\n}\n.title-label{\n    grid-area: title-label;\n}\n\n.description-label{\n    grid-area: description-label;\n}\n\n.deadline-label{\n   grid-area: deadline-label; \n}\n\n#title-input{\n    grid-area: title-input;\n    height: 1.75rem;\n    font-size: 1rem ;\n}\n\n.required{\n    border: 2px solid red;\n    border-radius: 3px;\n}\n\n#deadline-input{\n    grid-area: deadline-input;\n    font-family: 'Ubuntu';\n    height: 1.75rem;\n    margin-bottom: .7rem;\n}\n\n#description-input{\n    grid-area: description-input;\n    font-family: 'Ubuntu';\n    white-space: pre-wrap;\n}\n\n.buttons-container{\n    grid-area: buttons;\n    display: flex;\n    height:2rem;\n}\n\n.cancel-button{\n    background-color: #FF6961;\n}\n\n.submit-button{\n    background-color: #77dd77;\n}\n\nbutton{\n    height: 100%;\n    border-radius: .2rem;\n    padding: .5rem 1rem .5rem 1rem;\n    border: none;\n    margin: .1rem;\n    display: flex;\n    gap: .2rem;\n    align-items: center;\n}\n\n.check-icon{\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");  \n}\n\n.remove-icon{ \n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "); \n}\n\n.undo-icon{\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n.create-project-form > .cancel-button > .remove-icon{\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n.icon{\n    height: 1rem;\n    width: 1rem;\n    background-size: cover;\n}\n\n/* ------------------------------------ BELOW: Check css ------------------------------------ */\n\n.checkStroke{\n    stroke-dasharray: 34.7;\n    animation: .25s strokeOne, linear;\n}\n\n@keyframes strokeOne{\n    0%{\n        stroke-dashoffset: 34.7;\n    }\n\n    100%{\n        stroke-dashoffset: 0;\n    }\n}\n\n.todo-container{\n    \n    background: linear-gradient(to left, white 50%, grey 50%) right;\n    background-size: 200% 100%;\n}\n\n.checked{\n    transition: all 1s ease;\n    border: none;\n    opacity: .5;\n    background-position: left;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,sBAAsB;AAC1B;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb,SAAS;IACT,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA,kGAAkG;;AAElG;IACI,eAAe;IACf,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,yDAAqD;AACzD;;;AAGA;IACI,WAAW;IACX,WAAW;IACX,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,8BAA8B;IAC9B,+BAA+B;IAC/B,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,sBAAsB;IACtB,mBAAmB;IACnB,qBAAqB;IACrB,UAAU;IACV,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,mDAAiD;IACjD,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,mDAA+C;IAC/C,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,0BAA0B;AAC9B;;AAEA;;GAEG,oBAAoB;GACpB,WAAW;GACX,UAAU;GACV,YAAY;GACZ,aAAa;GACb,qBAAqB;GACrB,mBAAmB;AACtB;;AAEA,8FAA8F;;AAE9F;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,mBAAmB;IACnB,kBAAkB;;AAEtB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,SAAS;IACT,8CAA8C;IAC9C,mBAAmB;IACnB,qBAAqB;IACrB,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,wBAAwB;;AAE5B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,WAAW;AACf;;;AAGA,8FAA8F;;AAE9F;IACI,iBAAiB;IACjB,WAAW;IACX,0BAA0B;IAC1B,gBAAgB;IAChB,aAAa;IACb,qCAAqC;IACrC,+BAA+B;IAC/B;;;wCAGoC;IACpC,YAAY;IACZ,+BAA+B;AACnC;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,sBAAsB;AAC1B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;GACG,yBAAyB;AAC5B;;AAEA;IACI,sBAAsB;IACtB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;IACrB,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,4BAA4B;IAC5B,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,WAAW;AACf;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,oBAAoB;IACpB,8BAA8B;IAC9B,YAAY;IACZ,aAAa;IACb,aAAa;IACb,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,mDAAgD;AACpD;;AAEA;IACI,mDAAiD;AACrD;;AAEA;IACI,mDAA+C;AACnD;AACA;IACI,mDAA+C;AACnD;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;AAC1B;;AAEA,+FAA+F;;AAE/F;IACI,sBAAsB;IACtB,iCAAiC;AACrC;;AAEA;IACI;QACI,uBAAuB;IAC3B;;IAEA;QACI,oBAAoB;IACxB;AACJ;;AAEA;;IAEI,+DAA+D;IAC/D,0BAA0B;AAC9B;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,yBAAyB;AAC7B","sourcesContent":["*, *::before, *::after {\n    box-sizing: inherit;\n}\n\nhtml {\n    box-sizing: border-box;\n    font-family: 'Ubuntu';\n}\n\nbody{\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    background: whitesmoke;\n}\n\n.header{\n    background-color: whitesmoke;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    width: 100%;\n}\n\nh1{\n    font-size: 25px;\n    margin-bottom: 5px;\n}\n\n.projects-wrapper{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.tabs-header{\n    border-top: solid .5px black;\n    display: flex;\n    gap:.3rem;\n    padding-top: 2px;\n    padding-left: 10px;\n    padding-right: 10px;\n    margin-left: 1rem;\n    margin-bottom: .5rem;\n}\n\n/* ------------------------------------ BELOW: Projects css ------------------------------------ */\n\nh2{\n    font-size: 18px;\n    margin: 0px;\n}\n\n.edit-projects-icon{\n    height: 1rem;\n    width: 1rem;\n    background-image: url('./icons/edit-svgrepo-com.svg');\n}\n\n\n.tabs-bar{\n    height: 80%;\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    min-height: 50px;\n}\n\n.tab{\n    background: white;\n    font-size: 20px;\n    margin: 10px;\n    padding-left: 10px;\n    padding-right: 10px;\n    border-left: solid .1rem black;\n    border-right: solid .1rem black;\n    width: auto;\n    display: flex;\n    align-items: center;\n    transition: all .1s;\n}\n\n.active-tab{\n    font-size: 26px;\n}\n\n.icon-holder{\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-auto-flow: column;\n    align-items: center;\n    justify-items: center;\n    gap: .5rem;\n    margin: .2rem;\n    margin-left: .5rem;\n}\n\n.project-name-input{\n    width: 100%;\n    height: 50%;\n}\n\n.create-project-form{\n    display: flex;\n    align-items: center;\n}\n\n.project-name-input{\n    width: 120px;\n}\n\n.delete-icon{\n    background: url('./icons/delete-svgrepo-com.svg');\n    height: 1rem;\n    width: 1rem; \n}\n\n.edit-icon{\n    background: url('./icons/edit-svgrepo-com.svg');\n    height: 1rem;\n    width: 1rem;\n}\n\n.projects-being-edited{\n    background: white;\n    width: 100%;\n    border: .1rem dotted black;\n}\n\n.create-project-button,\n.create-button{\n   border: dotted black;\n   margin: 5px;\n   width: 80%;\n   height: 2rem;\n   display: grid;\n   justify-items: center;\n   align-items: center;\n}\n\n/* ------------------------------------ BELOW: Todo css ------------------------------------ */\n\n.todos-container{\n    width: 700px;\n    display: flex;\n    flex-direction: column;\n    gap: .2rem;\n    align-items: center;\n    padding-top: .5rem;\n\n}\n\n.todo-container{\n    background:white;\n    width: 100%;\n    min-height: 2.5rem;\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 2rem auto 1fr 6rem 1rem;\n    align-items: center;\n    justify-items: center;\n    padding-left: .5rem;\n    padding-right: .5rem;\n}\n\n.checkbox{\n    height: 1.5rem;\n    width: 1.5rem;\n    border: .1rem solid grey;\n    \n}\n\n.todo-title{\n    font-size: 1.2rem;\n}\n\n.todo-description{\n    display: flex;\n    justify-content: center;\n    opacity: .7;\n}\n\n\n/* ------------------------------------ BELOW: Form css ------------------------------------ */\n\n.being-edited{\n    background: white;\n    width: 100%;\n    border: .1rem dotted black;\n    min-height: 5rem;\n    display: grid;\n    grid-template-columns: auto 10rem 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-template-areas: \n    \"title-label deadline-label description-label \"\n    \"title-input deadline-input description-input\"\n    \"buttons buttons description-input \";\n    gap: 0 .8rem;\n    padding: .5rem 1rem .15rem 1rem;\n}\n\n.label{\n    font-size: .9rem;\n    align-self: center;\n}\n.title-label{\n    grid-area: title-label;\n}\n\n.description-label{\n    grid-area: description-label;\n}\n\n.deadline-label{\n   grid-area: deadline-label; \n}\n\n#title-input{\n    grid-area: title-input;\n    height: 1.75rem;\n    font-size: 1rem ;\n}\n\n.required{\n    border: 2px solid red;\n    border-radius: 3px;\n}\n\n#deadline-input{\n    grid-area: deadline-input;\n    font-family: 'Ubuntu';\n    height: 1.75rem;\n    margin-bottom: .7rem;\n}\n\n#description-input{\n    grid-area: description-input;\n    font-family: 'Ubuntu';\n    white-space: pre-wrap;\n}\n\n.buttons-container{\n    grid-area: buttons;\n    display: flex;\n    height:2rem;\n}\n\n.cancel-button{\n    background-color: #FF6961;\n}\n\n.submit-button{\n    background-color: #77dd77;\n}\n\nbutton{\n    height: 100%;\n    border-radius: .2rem;\n    padding: .5rem 1rem .5rem 1rem;\n    border: none;\n    margin: .1rem;\n    display: flex;\n    gap: .2rem;\n    align-items: center;\n}\n\n.check-icon{\n    background: url('./icons/check-svgrepo-com.svg');  \n}\n\n.remove-icon{ \n    background: url('./icons/delete-svgrepo-com.svg'); \n}\n\n.undo-icon{\n    background: url('./icons/undo-svgrepo-com.svg');\n}\n.create-project-form > .cancel-button > .remove-icon{\n    background: url('./icons/undo-svgrepo-com.svg');\n}\n\n.icon{\n    height: 1rem;\n    width: 1rem;\n    background-size: cover;\n}\n\n/* ------------------------------------ BELOW: Check css ------------------------------------ */\n\n.checkStroke{\n    stroke-dasharray: 34.7;\n    animation: .25s strokeOne, linear;\n}\n\n@keyframes strokeOne{\n    0%{\n        stroke-dashoffset: 34.7;\n    }\n\n    100%{\n        stroke-dashoffset: 0;\n    }\n}\n\n.todo-container{\n    \n    background: linear-gradient(to left, white 50%, grey 50%) right;\n    background-size: 200% 100%;\n}\n\n.checked{\n    transition: all 1s ease;\n    border: none;\n    opacity: .5;\n    background-position: left;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/roundingMethods/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRoundingMethod": () => (/* binding */ getRoundingMethod)
/* harmony export */ });
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function trunc(value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  } // Math.trunc is not supported by IE

};
var defaultRoundingMethod = 'trunc';
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/add/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/esm/add/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ add)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addMonths/index.js */ "./node_modules/date-fns/esm/addMonths/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(dirtyDate, duration) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  if (!duration || _typeof(duration) !== 'object') return new Date(NaN);
  var years = duration.years ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.years) : 0;
  var months = duration.months ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.months) : 0;
  var weeks = duration.weeks ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.weeks) : 0;
  var days = duration.days ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.days) : 0;
  var hours = duration.hours ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.hours) : 0;
  var minutes = duration.minutes ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.minutes) : 0;
  var seconds = duration.seconds ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.seconds) : 0; // Add years and months

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var dateWithMonths = months || years ? (0,_addMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, months + years * 12) : date; // Add weeks and days

  var dateWithDays = days || weeks ? (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dateWithMonths, days + weeks * 7) : dateWithMonths; // Add days, hours, minutes and seconds

  var minutesToAdd = minutes + hours * 60;
  var secondsToAdd = seconds + minutesToAdd * 60;
  var msToAdd = secondsToAdd * 1000;
  var finalDate = new Date(dateWithDays.getTime() + msToAdd);
  return finalDate;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMonths/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMonths/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



var MILLISECONDS_IN_DAY = 86400000;
/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */

function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var startOfDayLeft = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var startOfDayRight = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarYears/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarYears/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarYears)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */

function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeft.getFullYear() - dateRight.getFullYear();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInDays/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInDays/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInDays)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../differenceInCalendarDays/index.js */ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.

function compareLocalAsc(dateLeft, dateRight) {
  var diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}
/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.floor(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full days according to the local timezone
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * const result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
//=> 92
 */


function differenceInDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var sign = compareLocalAsc(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight));
  dateLeft.setDate(dateLeft.getDate() - sign * difference); // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value

  var isLastDayNotFull = Number(compareLocalAsc(dateLeft, dateRight) === -sign);
  var result = sign * (difference - isLastDayNotFull); // Prevent negative zero

  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInHours/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInHours/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInHours)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js");




/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of hours
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * const result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */

function differenceInHours(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_3__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dateLeft, dateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft).getTime() - (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateRight).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMinutes/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMinutes/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMinutes)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js");




/**
 * @name differenceInMinutes
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the signed number of full (rounded towards 0) minutes between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of minutes
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * const result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 *
 * @example
 * // How many minutes are between 10:01:59 and 10:00:00
 * const result = differenceInMinutes(
 *   new Date(2000, 0, 1, 10, 0, 0),
 *   new Date(2000, 0, 1, 10, 1, 59)
 * )
 * //=> -1
 */

function differenceInMinutes(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_3__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMonths/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isLastDayOfMonth/index.js */ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js");





/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates using trunc as a default rounding method.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */

function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateLeft, dateRight));
  var result; // Check for the difference of less than month

  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      dateLeft.setDate(30);
    }

    dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value

    var isLastMonthNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight) === -sign; // Check for cases of one full calendar month

    if ((0,_isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft)) && difference === 1 && (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }

    result = sign * (difference - Number(isLastMonthNotFull));
  } // Prevent negative zero


  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInSeconds/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInSeconds)
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js");



/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */

function differenceInSeconds(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / 1000;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInYears/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInYears/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInYears)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _differenceInCalendarYears_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarYears/index.js */ "./node_modules/date-fns/esm/differenceInCalendarYears/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInYears(new Date(2015, 1, 11), new Date(2013, 11, 31))
 * //=> 1
 */

function differenceInYears(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarYears_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateLeft, dateRight)); // Set both dates to a valid leap year for accurate comparison when dealing
  // with leap days

  dateLeft.setFullYear(1584);
  dateRight.setFullYear(1584); // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
  // If so, result must be decreased by 1 in absolute value

  var isLastYearNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight) === -sign;
  var result = sign * (difference - Number(isLastYearNotFull)); // Prevent negative zero

  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfMonth/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/intervalToDuration/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/intervalToDuration/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ intervalToDuration)
/* harmony export */ });
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _add_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add/index.js */ "./node_modules/date-fns/esm/add/index.js");
/* harmony import */ var _differenceInDays_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../differenceInDays/index.js */ "./node_modules/date-fns/esm/differenceInDays/index.js");
/* harmony import */ var _differenceInHours_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../differenceInHours/index.js */ "./node_modules/date-fns/esm/differenceInHours/index.js");
/* harmony import */ var _differenceInMinutes_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../differenceInMinutes/index.js */ "./node_modules/date-fns/esm/differenceInMinutes/index.js");
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../differenceInMonths/index.js */ "./node_modules/date-fns/esm/differenceInMonths/index.js");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ "./node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var _differenceInYears_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../differenceInYears/index.js */ "./node_modules/date-fns/esm/differenceInYears/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");










/**
 * @name intervalToDuration
 * @category Common Helpers
 * @summary Convert interval to duration
 *
 * @description
 * Convert a interval object to a duration object.
 *
 * @param {Interval} interval - the interval to convert to duration
 *
 * @returns {Duration} The duration Object
 * @throws {TypeError} Requires 2 arguments
 * @throws {RangeError} `start` must not be Invalid Date
 * @throws {RangeError} `end` must not be Invalid Date
 *
 * @example
 * // Get the duration between January 15, 1929 and April 4, 1968.
 * intervalToDuration({
 *   start: new Date(1929, 0, 15, 12, 0, 0),
 *   end: new Date(1968, 3, 4, 19, 5, 0)
 * })
 * // => { years: 39, months: 2, days: 20, hours: 7, minutes: 5, seconds: 0 }
 */

function intervalToDuration(interval) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var start = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.start);
  var end = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.end);
  if (isNaN(start.getTime())) throw new RangeError('Start Date is invalid');
  if (isNaN(end.getTime())) throw new RangeError('End Date is invalid');
  var duration = {};
  duration.years = Math.abs((0,_differenceInYears_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(end, start));
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(end, start);
  var remainingMonths = (0,_add_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(start, {
    years: sign * duration.years
  });
  duration.months = Math.abs((0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(end, remainingMonths));
  var remainingDays = (0,_add_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(remainingMonths, {
    months: sign * duration.months
  });
  duration.days = Math.abs((0,_differenceInDays_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(end, remainingDays));
  var remainingHours = (0,_add_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(remainingDays, {
    days: sign * duration.days
  });
  duration.hours = Math.abs((0,_differenceInHours_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(end, remainingHours));
  var remainingMinutes = (0,_add_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(remainingHours, {
    hours: sign * duration.hours
  });
  duration.minutes = Math.abs((0,_differenceInMinutes_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(end, remainingMinutes));
  var remainingSeconds = (0,_add_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(remainingMinutes, {
    minutes: sign * duration.minutes
  });
  duration.seconds = Math.abs((0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_9__["default"])(end, remainingSeconds));
  return duration;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isLastDayOfMonth/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isLastDayOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endOfDay/index.js */ "./node_modules/date-fns/esm/endOfDay/index.js");
/* harmony import */ var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endOfMonth/index.js */ "./node_modules/date-fns/esm/endOfMonth/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */

function isLastDayOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  return (0,_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() === (0,_endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domelements.js":
/*!****************************!*\
  !*** ./src/domelements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkBox": () => (/* binding */ checkBox),
/* harmony export */   "dueDate": () => (/* binding */ dueDate),
/* harmony export */   "editIcon": () => (/* binding */ editIcon),
/* harmony export */   "highlightTab": () => (/* binding */ highlightTab),
/* harmony export */   "mainTab": () => (/* binding */ mainTab),
/* harmony export */   "makeHeader": () => (/* binding */ makeHeader),
/* harmony export */   "makeTabsBar": () => (/* binding */ makeTabsBar),
/* harmony export */   "makeTabsHeader": () => (/* binding */ makeTabsHeader),
/* harmony export */   "makeTodosContainer": () => (/* binding */ makeTodosContainer),
/* harmony export */   "newTab": () => (/* binding */ newTab),
/* harmony export */   "newTabButton": () => (/* binding */ newTabButton),
/* harmony export */   "newTodoButton": () => (/* binding */ newTodoButton),
/* harmony export */   "removeHighlight": () => (/* binding */ removeHighlight),
/* harmony export */   "tabTitle": () => (/* binding */ tabTitle),
/* harmony export */   "todoContainer": () => (/* binding */ todoContainer),
/* harmony export */   "todoDescription": () => (/* binding */ todoDescription),
/* harmony export */   "todoTitle": () => (/* binding */ todoTitle)
/* harmony export */ });
/* harmony import */ var _domforms_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domforms.js */ "./src/domforms.js");
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.js */ "./src/todos.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _projectsoptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectsoptions */ "./src/projectsoptions.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/intervalToDuration/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _pencil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pencil.js */ "./src/pencil.js");







function makeHeader(){
    let header = document.createElement('div');
    header.classList.add('header');
    let title = document.createElement('h1');
    title.textContent = 'Smart To Do';
    header.appendChild(title);
    let projectsWrapper = document.createElement('div');
    projectsWrapper.classList.add('projects-wrapper');
    header.appendChild(projectsWrapper);
    document.body.appendChild(header);
    
  }

  function makeTabsBar(){
    const wrapper = document.querySelector('.projects-wrapper');
    const tabsBar = document.createElement('div');
    tabsBar.classList.add('tabs-bar');
    wrapper.appendChild(tabsBar);
  }

  function makeTabsHeader(){
    const wrapper = document.querySelector('.projects-wrapper');
    const container = document.createElement('div');
    container.classList.add('tabs-header');
    const h2 = document.createElement('h2');
    h2.textContent = 'Projects';
    const editProjectsIcon = document.createElement('div');
    editProjectsIcon.classList.add('edit-projects-icon');
    editProjectsIcon.addEventListener('click', _projectsoptions__WEBPACK_IMPORTED_MODULE_3__.openProjectOptions, {once: true});
    container.appendChild(h2);
    container.appendChild(editProjectsIcon);
    wrapper.appendChild(container);
  }

  function mainTab() {
    let tabsBar = document.querySelector('.tabs-bar');
    const main = document.createElement('div');
    main.classList.add('tab', 'maintab');
    main.setAttribute('data-key', `${_projects_js__WEBPACK_IMPORTED_MODULE_2__.projects[0].key}`)
    main.textContent = `${_projects_js__WEBPACK_IMPORTED_MODULE_2__.projects[0].name}`;
    main.addEventListener('click', () => {
    (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.renderAllTodos)();
    removeHighlight();
    highlightTab(main)
    });
    highlightTab(main)
    tabsBar.appendChild(main);
  }

  function newTabButton() {
    let tabsBar = document.querySelector('.tabs-bar');
    const btn = document.createElement('div');
    btn.classList.add('create-project-button');
    btn.textContent = '+ project'
    btn.style.width = '80px'
    btn.addEventListener('click', () => {
     ;(0,_domforms_js__WEBPACK_IMPORTED_MODULE_0__.newProjectName)(btn);
    }, {once : true});
    tabsBar.appendChild(btn)
  }

  function newTab(name, key, index){
    let tabsBar = document.querySelector('.tabs-bar');
    let projectTab = document.createElement('div');
    projectTab.classList.add('tab');
    projectTab.setAttribute('data-key', key);

    let title = projectTab.appendChild(tabTitle(name, key))

    let obj = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.findProjectObj)(key);
    projectTab.style.backgroundColor = obj.color
    if(index){
      tabsBar.insertBefore(projectTab, tabsBar.childNodes[index])
    } else {tabsBar.appendChild(projectTab)};
    
    if(document.querySelector('.projects-wrapper').classList.contains('being-edited')){
      (0,_projectsoptions__WEBPACK_IMPORTED_MODULE_3__.addIcons)(projectTab)
    }
    title.click()
  }

  function tabTitle (name, key){
    let title = document.createElement('div');
    title.classList.add('project-title')
    title.textContent = name
    title.addEventListener('click', () => {
      let objectus = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.findProjectObj)(key)
      ;(0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(objectus)
      removeHighlight()
      highlightTab(title.parentElement)
      });
    return title
  }

  function highlightTab (tab){
    tab.classList.add('active-tab')
  }

  function removeHighlight () {
    let tabs = document.querySelectorAll('.tab');
    let highlighted = [...tabs].find((tab) => tab.classList.contains('active-tab'))
    highlighted.classList.remove('active-tab')
  }

  function makeTodosContainer(){
    let container = document.createElement('div');
    container.classList.add('todos-container');
    document.body.appendChild(container);
  }
        
  function newTodoButton (project) {
    let container = document.querySelector('.todos-container');
    let createButton = document.createElement('div')
    createButton.classList.add('create-button');
    
    if(project !== _projects_js__WEBPACK_IMPORTED_MODULE_2__.projects[0])
      {createButton.textContent = `+ To Do for ${project.name}`}
      else {createButton.textContent = '+ To Do';}

    createButton.addEventListener('click', () => {
      (0,_domforms_js__WEBPACK_IMPORTED_MODULE_0__.createTodoForm)(createButton, project)
      createButton.classList.remove('create-button')
      newTodoButton(project)
    }, {once : true});
    container.insertBefore(createButton, container.firstChild);
  }



// ----------------ABOVE: site elements ---------------- BELOW: todos elements ----------------//

  function todoContainer () {
    let todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container', 'editable')
    return todoContainer
  }
  
  function todoTitle (todo) {
    let title = document.createElement('div');
    title.classList.add('todo-title');
    if(todo){title.textContent = todo.name}
    return title
  }
  
  function todoDescription (todo) {
    let description = document.createElement('div');
    description.classList.add('todo-description');
    if(todo){description.textContent = todo.desc}
    return description
  }

  function dueDate(todo){
    let dura = document.createElement('div');
    dura.classList.add('due-duration');
    if(todo.due != "") {dura.textContent = formatTodoDate(todo)}
    return dura
    
    function formatTodoDate(todo){
      const now = new Date();
      let duration = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])({
        start: now,
        end: (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(`${todo.due}`)
      });
      let dateString = ""
      
      if(duration.years !== 0){
        dateString = dateString.concat(`${duration.years} year`)
      }
      if(duration.months !== 0 && duration.years === 0){
        dateString = dateString.concat(`${duration.months} month`)
      }  
      if(duration.days !== 0 && duration.years === 0 && duration.months === 0){
        dateString = dateString.concat(`${duration.days} day`)
      }
      if(duration.hours !== 0 && duration.years === 0 && duration.months === 0 && duration.days === 0){
        dateString = dateString.concat(`${duration.hours} hour`)
      }

        function pluralize (){
        if(parseInt(dateString) > 1){
          dateString = dateString.concat('s')
          }
        }

      pluralize(dateString)

      return dateString
    }
  }

  function editIcon(project) {
    let icon = document.createElement('div');
    icon.classList.add('edit-icon');
    icon.addEventListener('click', () => {
      icon.parentElement.classList.remove('todo-container');
      (0,_domforms_js__WEBPACK_IMPORTED_MODULE_0__.editTodoForm)(icon.parentElement, project)
    });
      return icon
  }

  function checkBox (object) {
    let box = document.createElement('div');
    box.classList.add('checkbox');
    box.setAttribute('data-key', `${object.key}`)
    box.style.borderColor = `${object.color}`
    

    box.addEventListener('click', () => {
      ;(0,_pencil_js__WEBPACK_IMPORTED_MODULE_4__.drawCheck)(box);
      box.parentElement.querySelector('.edit-icon').remove();
      setTimeout(() => {
        box.parentElement.classList.add('checked');
        box.parentElement.style.border = 'none'
      }, 250);

      let project = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.findProjectObj)(object.project.key)
      let index = project.todos.findIndex((e) => e.key == box.getAttribute('data-key'));
      project.todos.splice(index, 1)
      ;(0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.storeLocally)()
      
    }, {once : true});
    return box
  }

  
  

/***/ }),

/***/ "./src/domforms.js":
/*!*************************!*\
  !*** ./src/domforms.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodoForm": () => (/* binding */ createTodoForm),
/* harmony export */   "descriptionInput": () => (/* binding */ descriptionInput),
/* harmony export */   "editProjectName": () => (/* binding */ editProjectName),
/* harmony export */   "editTodoForm": () => (/* binding */ editTodoForm),
/* harmony export */   "newProjectName": () => (/* binding */ newProjectName),
/* harmony export */   "renderForm": () => (/* binding */ renderForm),
/* harmony export */   "submitTodoButton": () => (/* binding */ submitTodoButton),
/* harmony export */   "submitTodoForm": () => (/* binding */ submitTodoForm),
/* harmony export */   "submitWithEnter": () => (/* binding */ submitWithEnter),
/* harmony export */   "titleInput": () => (/* binding */ titleInput)
/* harmony export */ });
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ "./src/todos.js");
/* harmony import */ var _domindex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domindex.js */ "./src/domindex.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _domelements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domelements.js */ "./src/domelements.js");
/* harmony import */ var _projectsoptions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectsoptions.js */ "./src/projectsoptions.js");








function titleInput (value) {
    let input = document.createElement('input');
    input.setAttribute('id', 'title-input');
    if(value) 
    {input.setAttribute('value', value)
    }
    return input
  }


  function descriptionInput (val){
    let input = document.createElement('textarea');
    input.setAttribute('id', 'description-input');
    if(val) 
    {input.value = val
    } 
    return input
  }

  function dueDateInput (date){
    let input = document.createElement('input');
    input.setAttribute('id', 'deadline-input');
    input.setAttribute('type', 'datetime-local');
    if(date){input.setAttribute('value', date);
    } 
     return input
  }

  function submitTodoButton (element, project) {
    let btn = document.createElement('button');
    btn.textContent = "ADD";
    btn.classList.add('submit-button')
    let icon = btn.appendChild(document.createElement('div'))
    icon.classList.add('check-icon', 'icon')
    btn.addEventListener('click', () => submitTodoForm(element, project))
    return btn
  }

  function submitProjectButton(){
    let btn = document.createElement('button');
    btn.classList.add('submit-button');
    let icon = btn.appendChild(document.createElement('div'));
    icon.classList.add('check-icon', 'icon');
    btn.addEventListener('click', () => {
        if(document.querySelector('.project-name-input').value !== ""){
            submitProjectForm();
            btn.parentElement.remove()
            ;(0,_domelements_js__WEBPACK_IMPORTED_MODULE_3__.newTabButton)()
            } else {document.querySelector('.project-name-input').placeholder = 'NAME NEEDED!'}
        } );
    return btn
  }

  function projectEditButton () {
    let btn = document.createElement('button');
    let icon = btn.appendChild(document.createElement('div'));
    icon.classList.add('check-icon', 'icon');
    btn.classList.add('submit-button')
        btn.addEventListener('click', () => {
            let element = btn.parentElement
            let obj = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.findProjectObj)(element.getAttribute('data-key'))
            obj.name = element.firstChild.value;
            while (element.firstChild) {
                element.removeChild(element.lastChild);
            }
            let title = element.appendChild((0,_domelements_js__WEBPACK_IMPORTED_MODULE_3__.tabTitle)(obj.name, obj.key));
            if(document.querySelector('.projects-wrapper').classList.contains('projects-being-edited')){
                (0,_projectsoptions_js__WEBPACK_IMPORTED_MODULE_4__.addIcons)(element)
            }
            title.click()
        })
    return btn
  }

  function cancelButton (project){
    let btn = document.createElement('button');
    btn.textContent = "REMOVE"
    btn.classList.add('cancel-button')
    let icon = btn.appendChild(document.createElement('div'))
    icon.classList.add('remove-icon', 'icon')
    btn.addEventListener('click', () => {
    if(btn.parentElement.getAttribute('class') == "create-project-form"){
        (0,_domelements_js__WEBPACK_IMPORTED_MODULE_3__.newTabButton)()
        btn.parentElement.remove()
    } else {
        btn.parentElement.parentElement.remove()
    }
    project.todos.splice(project.todos.indexOf(btn.parentElement.parentElement, project), 1);
    (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.storeLocally)();
    });
    return btn
  }

  function cancelEditButton(element, project){
    let btn = document.createElement('button');
    btn.textContent = 'UNDO';
    let icon = btn.appendChild(document.createElement('div'));
    icon.classList.add('undo-icon', 'icon')
    btn.addEventListener('click', () => {
        ;(0,_domindex_js__WEBPACK_IMPORTED_MODULE_1__.editToDOM)(element, project)
    });
    return btn
  }

  function undoProjectEditButton(element, obj){
    let btn = document.createElement('button');
    let icon = btn.appendChild(document.createElement('div'));
    icon.classList.add('undo-icon', 'icon');
    let index = Array.from(document.querySelector('.tabs-bar').childNodes).indexOf(element);
    btn.addEventListener('click', () => {
        btn.parentElement.remove();
        (0,_domelements_js__WEBPACK_IMPORTED_MODULE_3__.newTab)(obj.name, obj.key, index)
        let tab = document.querySelector(`[data-key='${obj.key}']`)
        tab.classList.add('active-tab');
        if(document.querySelector('.projects-wrapper').classList.contains('projects-being-edited')){(0,_projectsoptions_js__WEBPACK_IMPORTED_MODULE_4__.addIcons)(tab)}
        
    })
    return btn
  }

  function cancelAddButton(small) {
    let btn = document.createElement('button');
    if(small !== 'small'){btn.textContent = 'UNDO'}
    else{btn.style.border = '.15rem solid white'}
    let icon = btn.appendChild(document.createElement('div'));
    icon.classList.add('undo-icon', 'icon')
    btn.addEventListener('click', () => {
        if(small !== 'small'){
            btn.parentElement.parentElement.remove();
        } else{
            btn.parentElement.remove()
            ;(0,_domelements_js__WEBPACK_IMPORTED_MODULE_3__.newTabButton)();};      
    });
    return btn
  }

  function buttonsContainer(){
    let container = document.createElement('div');
    container.classList.add('buttons-container')
    return container
  }

  function label (input) {
    let label = document.createElement('label');
    let idString = input.getAttribute('id');
    label.setAttribute('for', idString)
    let titleString = idString.slice(0, idString.indexOf('-input'));
    label.classList.add(`${titleString}-label`, 'label')
    let capString = titleString.charAt(0).toUpperCase() + titleString.slice(1)+ ':';
    label.textContent = capString;
    let container = input.parentNode;
    container.insertBefore(label, input);

  }

  // ----------------ABOVE: form elements ---------------- BELOW: form logic ----------------//


function editTodoForm(element, project){
    let obj = (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.findTodoObj)(element, project);
    const name = obj.name;
    const description = obj.desc;
    const due = obj.due;
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
    renderForm(element, name, description, due, project);
};

function createTodoForm (element, project) {
    element.textContent = "";
    renderForm(element, null, null, null, project)
};

function renderForm (element, name, description, due, project) {
    element.classList.add('being-edited');
    element.appendChild(titleInput(name));
    element.appendChild(descriptionInput(description));
    element.appendChild(dueDateInput(due));
    let btnContainer = element.appendChild(buttonsContainer())
    btnContainer.appendChild(submitTodoButton(element, project));
    if(name){
        btnContainer.appendChild(cancelEditButton(element, project))
        btnContainer.appendChild(cancelButton(project))};
    if(name == null) {
        btnContainer.appendChild(cancelAddButton());}
    document.getElementById('title-input').focus();
    element.querySelectorAll('input, textarea').forEach(element => {
        submitWithEnter(element);
        label(element);
    });
};

function submitTodoForm(element, project) {
    const name = element.querySelector('#title-input').value
    const description = element.querySelector('#description-input').value
    let due = element.querySelector('#deadline-input').value
    if(element.classList.contains('editable') && name !== ""){
        (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.editTodo)(element, name, description, due, project);
        (0,_domindex_js__WEBPACK_IMPORTED_MODULE_1__.editToDOM)(element, project);
    } else if (name !== ""){
        (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.newTodo)(name, description, due, project);
        element.remove();
    } else {
        element.querySelector('#title-input').setAttribute('placeholder', 'required');
        element.querySelector('#title-input').classList.add('required')
        setTimeout(() => {
            element.querySelector('#title-input').classList.remove('required')
        }, 300);
    }
};

function newProjectName(element){
    element.firstChild.remove();
    element.classList.remove('create-project-button');
    element.classList.add('create-project-form');
    let input = titleInput();
    input.setAttribute('placeholder', 'Name your Project');
    input.classList.add('project-name-input');
    element.appendChild(input);
    element.appendChild(submitProjectButton());
    element.appendChild(cancelAddButton('small'));
    document.getElementById('title-input').focus();
    submitWithEnter(element);
}

function editProjectName (element, obj){
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    };
    let nameField = element.appendChild(titleInput(obj.name));
    element.appendChild(projectEditButton());
    element.appendChild(undoProjectEditButton(element, obj));
    submitWithEnter(nameField);
};

function submitProjectForm (){
    let name = document.querySelector('.project-name-input').value;
    (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.createProject)(name);
};

function submitWithEnter(element){
    
    var keysPressed = {};
    element.addEventListener('keydown', e => {
        keysPressed[e.key] = true;
    })
    element.addEventListener('keyup', e => {
        delete keysPressed[e.key]
    })

    element.addEventListener("keydown", (e) => {
    if(e.key === "Enter" && !keysPressed.Shift){
        element.parentElement.querySelector('.submit-button').click();
        }
    });
};




/***/ }),

/***/ "./src/domindex.js":
/*!*************************!*\
  !*** ./src/domindex.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editToDOM": () => (/* binding */ editToDOM),
/* harmony export */   "newToDOM": () => (/* binding */ newToDOM),
/* harmony export */   "toDOM": () => (/* binding */ toDOM)
/* harmony export */ });
/* harmony import */ var _domelements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domelements.js */ "./src/domelements.js");
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.js */ "./src/todos.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");




(0,_domelements_js__WEBPACK_IMPORTED_MODULE_0__.makeHeader)()
;(0,_domelements_js__WEBPACK_IMPORTED_MODULE_0__.makeTabsHeader)()
;(0,_domelements_js__WEBPACK_IMPORTED_MODULE_0__.makeTabsBar)()


;(0,_domelements_js__WEBPACK_IMPORTED_MODULE_0__.mainTab)()
;(0,_domelements_js__WEBPACK_IMPORTED_MODULE_0__.newTabButton)()


;(0,_domelements_js__WEBPACK_IMPORTED_MODULE_0__.makeTodosContainer)() 
;(0,_domelements_js__WEBPACK_IMPORTED_MODULE_0__.newTodoButton)(_projects_js__WEBPACK_IMPORTED_MODULE_2__.projects[0])


function newToDOM (todo, project){
    let toDosContainer = document.querySelector('.todos-container');
    let newTodoElement = (0,_domelements_js__WEBPACK_IMPORTED_MODULE_0__.todoContainer)();
    toDOM(newTodoElement, todo, project)
    toDosContainer.appendChild(newTodoElement);
}

function editToDOM (element, project) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
    element.classList.add('todo-container');
    element.classList.remove('being-edited');
    let me = (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.findTodoObj)(element, project);
    toDOM(element, me, project);
}

function toDOM(element, todoObj, project){
    element.setAttribute('data-key', `${todoObj.key}`)
    element.appendChild((0,_domelements_js__WEBPACK_IMPORTED_MODULE_0__.checkBox)(todoObj));
    element.appendChild((0,_domelements_js__WEBPACK_IMPORTED_MODULE_0__.todoTitle)(todoObj));
    element.appendChild((0,_domelements_js__WEBPACK_IMPORTED_MODULE_0__.todoDescription)(todoObj));
    element.appendChild((0,_domelements_js__WEBPACK_IMPORTED_MODULE_0__.dueDate)(todoObj));
    element.style.border = ` 2px solid ${project.color}`
    if (project){
        element.appendChild((0,_domelements_js__WEBPACK_IMPORTED_MODULE_0__.editIcon)(project));
       
    } else {
        element.appendChild((0,_domelements_js__WEBPACK_IMPORTED_MODULE_0__.editIcon)());  
    }; 

    (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.storeLocally)()
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ "./src/todos.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _pencil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pencil */ "./src/pencil.js");







(0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.loadLocalProjects)();
(0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.renderProjects)();
(0,_todos__WEBPACK_IMPORTED_MODULE_1__.renderAllTodos)();






/***/ }),

/***/ "./src/keygenerator.js":
/*!*****************************!*\
  !*** ./src/keygenerator.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomKey": () => (/* binding */ randomKey)
/* harmony export */ });
function randomKey() {
let key = Math.random().toString(36).slice(2, 7);
return key
}



/***/ }),

/***/ "./src/pencil.js":
/*!***********************!*\
  !*** ./src/pencil.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addSvg": () => (/* binding */ addSvg),
/* harmony export */   "drawCheck": () => (/* binding */ drawCheck),
/* harmony export */   "pencilDraw": () => (/* binding */ pencilDraw)
/* harmony export */ });
function pencilDraw (strokeClass, path, target, width) {
    let newStroke = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    newStroke.setAttributeNS(null, 'class', strokeClass);
    newStroke.setAttributeNS(null, 'd', path);
    newStroke.setAttributeNS(null, 'fill', 'none');
    newStroke.setAttributeNS(null, 'fill-rule', 'evenodd');
    newStroke.setAttributeNS(null, 'opacity', '.7');
    newStroke.setAttributeNS(null, 'stroke', '#000000');
    newStroke.setAttributeNS(null, 'stroke-linecap', 'round');
    newStroke.setAttributeNS(null, 'stroke-linejoin', 'round');
    newStroke.setAttributeNS(null, 'stroke-width', width);
    target.appendChild(newStroke);
}

function addSvg (target) {
let newSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
let templateSvg = `xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="23px" stroke-miterlimit="10" style="fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;" version="1.1" width="24px" xml:space="preserve"`
    templateSvg.split(" ").forEach(element => {
    let attrVal = element.split("=");
    let attr = attrVal[0];
    let val = attrVal[1].slice(1, -1);
    newSvg.setAttribute('data-key', `${target.getAttribute('data-key')}`)
    newSvg.setAttribute(attr, val);
    newSvg.setAttribute('viewBox', '0 0 24 24');
    });
target.appendChild(newSvg);
};

function drawCheck (target) {
    let g = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    pencilDraw('checkStroke', "M 1.29617 13.8888 C 1.41761 13.9495 2.17185 15.3989 2.28006 15.5883 C 3.01946 16.8822 3.6967 18.4823 4.00933 19.9413 C 4.06533 20.2026 4.44421 21.9687 4.63544 21.9687 C 4.79206 21.9687 5.26008 21.0317 5.351 20.8953 C 5.9805 19.9511 6.78104 19.0651 7.52749 18.212 C 10.8136 14.4564 14.1421 10.7744 17.5751 7.15066 C 18.648 6.01816 19.6928 4.85404 20.7951 3.75176 C 20.8714 3.67546 21.5747 2.95117 21.6299 3.00638 C 21.6702 3.0466 21.6363 3.32374 21.6598 3.39398", g, 4.1452);
    addSvg(target);
    let targetSvg = target.querySelector('svg');
    targetSvg.appendChild(g)
};




/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "findProjectObj": () => (/* binding */ findProjectObj),
/* harmony export */   "instantiateProject": () => (/* binding */ instantiateProject),
/* harmony export */   "loadLocalProjects": () => (/* binding */ loadLocalProjects),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects),
/* harmony export */   "storeLocally": () => (/* binding */ storeLocally)
/* harmony export */ });
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ "./src/todos.js");
/* harmony import */ var _domelements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domelements.js */ "./src/domelements.js");
/* harmony import */ var _keygenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keygenerator.js */ "./src/keygenerator.js");
/* harmony import */ var flatted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flatted */ "./node_modules/flatted/esm/index.js");





let projects = [];

function instantiateProject(name) {
    return {
        name,
        key: (0,_keygenerator_js__WEBPACK_IMPORTED_MODULE_2__.randomKey)(),
        todos: [],
        color: tabColor()
    };
};

function tabColor () {
    let colors = ['#FFFFFF', '#97C1A9', '#F6EAC2', '#FFB8B1', '#FFDAC1','#9AB7D3' ,'#A3E1DC', '#DFCCF1'];
    let assigned = projects.map(function(proj){
        return proj.color
    });
    for (let i = 0; i < colors.length; i++) {
        if(!assigned.includes(colors[i])){
            var newColor = colors[i]
            if(newColor) {
                return newColor
            } else return '#FFFFFF'
        };
    };
};

  function createProject(name){
    let project = instantiateProject(name);
    projects.push(project);
    (0,_domelements_js__WEBPACK_IMPORTED_MODULE_1__.newTab)(name, project.key);
    storeLocally()
}

function findProjectObj(dataKey){
    let me = projects.find(element => element.key == dataKey);
    return me
}

function renderProjects () {
    projects.forEach(element => {
        if(element.name !== "All"){
            (0,_domelements_js__WEBPACK_IMPORTED_MODULE_1__.newTab)(element.name, element.key, document.querySelector('.tabs-bar').childNodes.length-1)
        }
    });
}
 
projects.push(instantiateProject('All'));

function storeLocally() {
    localStorage.setItem("myProjects", (0,flatted__WEBPACK_IMPORTED_MODULE_3__.stringify)(projects));
    console.log((0,flatted__WEBPACK_IMPORTED_MODULE_3__.parse)(localStorage.myProjects))
    console.log(projects)
}


function loadLocalProjects () {
    if(localStorage.myProjects){
    projects = (0,flatted__WEBPACK_IMPORTED_MODULE_3__.parse)(localStorage.myProjects)
    }
}







/***/ }),

/***/ "./src/projectsoptions.js":
/*!********************************!*\
  !*** ./src/projectsoptions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addIcons": () => (/* binding */ addIcons),
/* harmony export */   "clickOutside": () => (/* binding */ clickOutside),
/* harmony export */   "openProjectOptions": () => (/* binding */ openProjectOptions)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.js */ "./src/todos.js");
/* harmony import */ var _domelements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domelements.js */ "./src/domelements.js");
/* harmony import */ var _domforms_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domforms.js */ "./src/domforms.js");





function openProjectOptions (){
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(element => {addIcons(element)});
    let editProjectsIcon = document.querySelector('.edit-projects-icon');
    editProjectsIcon.addEventListener('click', closeProjectOptions, {once: true});
    clickOutside()
    document.querySelector('.projects-wrapper').classList.add('projects-being-edited');
};

function clickOutside () {
    document.addEventListener('click', closeThroughClick);
}

function closeThroughClick (event) {
    let wrapper = document.querySelector('.projects-wrapper');
    const withinBoundaries = event.composedPath().includes(wrapper)
        if (!withinBoundaries) {
          closeProjectOptions()
        } 
}


function closeProjectOptions() {    
    let editProjectsIcon = document.querySelector('.edit-projects-icon');
    let iconHolders = document.querySelectorAll('.icon-holder');
    iconHolders.forEach(element => {
        element.remove();
    });
    editProjectsIcon.addEventListener('click', openProjectOptions, {once : true});
    document.removeEventListener('click', closeThroughClick);
    document.querySelector('.projects-wrapper').classList.remove('projects-being-edited');
}

function addIcons(projectTab){
    const iconHolder = document.createElement('div');
    iconHolder.classList.add('icon-holder');
    iconHolder.appendChild(editIcon());
    if(!projectTab.classList.contains('maintab')){iconHolder.appendChild(deleteIcon())};
    projectTab.appendChild(iconHolder);
}

function deleteIcon() {
    let btn = document.createElement('div');
    btn.classList.add('delete-icon', 'icon')
    btn.addEventListener('click', () => {
        let element = btn.parentElement.parentElement;
        let obj = (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.findProjectObj)(element.getAttribute('data-key'));
        let myIndex = _projects_js__WEBPACK_IMPORTED_MODULE_0__.projects.indexOf(obj)
        _projects_js__WEBPACK_IMPORTED_MODULE_0__.projects.splice(myIndex, 1)
        element.remove();
        (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.renderAllTodos)();
        (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.storeLocally)()

        //the icons trigger both the renderTodos function for the tab, as well as the the delete function, is there a way to separate them?
    });
    return btn
};

function editIcon() {
    let btn = document.createElement('div');
    btn.classList.add('edit-icon')
    btn.addEventListener('click', () => {
        let element = btn.parentElement.parentElement;
        let obj = (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.findProjectObj)(element.getAttribute('data-key'));
        (0,_domforms_js__WEBPACK_IMPORTED_MODULE_3__.editProjectName)(element, obj);
        (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.storeLocally)();
    })
    return btn
};



/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editTodo": () => (/* binding */ editTodo),
/* harmony export */   "findTodoObj": () => (/* binding */ findTodoObj),
/* harmony export */   "instantiateTodo": () => (/* binding */ instantiateTodo),
/* harmony export */   "newTodo": () => (/* binding */ newTodo),
/* harmony export */   "renderAllTodos": () => (/* binding */ renderAllTodos),
/* harmony export */   "renderTodos": () => (/* binding */ renderTodos)
/* harmony export */ });
/* harmony import */ var _domindex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domindex.js */ "./src/domindex.js");
/* harmony import */ var _keygenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keygenerator.js */ "./src/keygenerator.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _domelements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domelements.js */ "./src/domelements.js");






function instantiateTodo(name, desc, due, proj) {
    if(proj){var project = proj};
    
    return {
        name,
        desc,
        key: (0,_keygenerator_js__WEBPACK_IMPORTED_MODULE_1__.randomKey)(),
        due,
        project,
    }
}

function newTodo(name, desc, due, project) {
    let todo = instantiateTodo(name, desc, due, project);
    project.todos.push(todo);
    (0,_domindex_js__WEBPACK_IMPORTED_MODULE_0__.newToDOM)(todo, project);
    (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.storeLocally)()
};


function findTodoObj(element, project){
    let key = element.getAttribute('data-key');
    var me = project.todos.find(element => element.key == key)
    return me
}

function editTodo(element, name, description, due, project){
    let me = findTodoObj(element, project)
    me.name = name;
    me.desc = description; 
    me.due = due;
    (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.storeLocally)()
}

function clearTodos() {
    let todosContainer = document.querySelector('.todos-container')
    while (todosContainer.firstChild) {
        todosContainer.removeChild(todosContainer.lastChild);
      }
}

const renderAllTodos = () => {
    clearTodos()
    _projects_js__WEBPACK_IMPORTED_MODULE_2__.projects.forEach(project => project.todos.forEach(todo => {;(0,_domindex_js__WEBPACK_IMPORTED_MODULE_0__.newToDOM)(todo, project)}));
    (0,_domelements_js__WEBPACK_IMPORTED_MODULE_3__.newTodoButton)(_projects_js__WEBPACK_IMPORTED_MODULE_2__.projects[0]);
    (0,_domelements_js__WEBPACK_IMPORTED_MODULE_3__.removeHighlight)()
    ;(0,_domelements_js__WEBPACK_IMPORTED_MODULE_3__.highlightTab)(document.querySelector('.tabs-bar').childNodes[0]);
}

function renderTodos(project){
    clearTodos()
    project.todos.forEach(todo => {;(0,_domindex_js__WEBPACK_IMPORTED_MODULE_0__.newToDOM)(todo, project)});
    (0,_domelements_js__WEBPACK_IMPORTED_MODULE_3__.newTodoButton)(project)
}



/***/ }),

/***/ "./src/icons/check-svgrepo-com.svg":
/*!*****************************************!*\
  !*** ./src/icons/check-svgrepo-com.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f730dd45f4652fb2712.svg";

/***/ }),

/***/ "./src/icons/delete-svgrepo-com.svg":
/*!******************************************!*\
  !*** ./src/icons/delete-svgrepo-com.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c76c663a6d6b92c343a7.svg";

/***/ }),

/***/ "./src/icons/edit-svgrepo-com.svg":
/*!****************************************!*\
  !*** ./src/icons/edit-svgrepo-com.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc4055753547b99ffeb3.svg";

/***/ }),

/***/ "./src/icons/undo-svgrepo-com.svg":
/*!****************************************!*\
  !*** ./src/icons/undo-svgrepo-com.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca8b9df2fc2c4c446b39.svg";

/***/ }),

/***/ "./node_modules/flatted/esm/index.js":
/*!*******************************************!*\
  !*** ./node_modules/flatted/esm/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromJSON": () => (/* binding */ fromJSON),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "stringify": () => (/* binding */ stringify),
/* harmony export */   "toJSON": () => (/* binding */ toJSON)
/* harmony export */ });
/*! (c) 2020 Andrea Giammarchi */

const {parse: $parse, stringify: $stringify} = JSON;
const {keys} = Object;

const Primitive = String;   // it could be Number
const primitive = 'string'; // it could be 'number'

const ignore = {};
const object = 'object';

const noop = (_, value) => value;

const primitives = value => (
  value instanceof Primitive ? Primitive(value) : value
);

const Primitives = (_, value) => (
  typeof value === primitive ? new Primitive(value) : value
);

const revive = (input, parsed, output, $) => {
  const lazy = [];
  for (let ke = keys(output), {length} = ke, y = 0; y < length; y++) {
    const k = ke[y];
    const value = output[k];
    if (value instanceof Primitive) {
      const tmp = input[value];
      if (typeof tmp === object && !parsed.has(tmp)) {
        parsed.add(tmp);
        output[k] = ignore;
        lazy.push({k, a: [input, parsed, tmp, $]});
      }
      else
        output[k] = $.call(output, k, tmp);
    }
    else if (output[k] !== ignore)
      output[k] = $.call(output, k, value);
  }
  for (let {length} = lazy, i = 0; i < length; i++) {
    const {k, a} = lazy[i];
    output[k] = $.call(output, k, revive.apply(null, a));
  }
  return output;
};

const set = (known, input, value) => {
  const index = Primitive(input.push(value) - 1);
  known.set(value, index);
  return index;
};

const parse = (text, reviver) => {
  const input = $parse(text, Primitives).map(primitives);
  const value = input[0];
  const $ = reviver || noop;
  const tmp = typeof value === object && value ?
              revive(input, new Set, value, $) :
              value;
  return $.call({'': tmp}, '', tmp);
};

const stringify = (value, replacer, space) => {
  const $ = replacer && typeof replacer === object ?
            (k, v) => (k === '' || -1 < replacer.indexOf(k) ? v : void 0) :
            (replacer || noop);
  const known = new Map;
  const input = [];
  const output = [];
  let i = +set(known, input, $.call({'': value}, '', value));
  let firstRun = !i;
  while (i < input.length) {
    firstRun = true;
    output[i] = $stringify(input[i++], replace, space);
  }
  return '[' + output.join(',') + ']';
  function replace(key, value) {
    if (firstRun) {
      firstRun = !firstRun;
      return value;
    }
    const after = $.call(this, key, value);
    switch (typeof after) {
      case object:
        if (after === null) return after;
      case primitive:
        return known.get(after) || set(known, input, after);
    }
    return after;
  }
};

const toJSON = any => $parse(stringify(any));
const fromJSON = any => parse($stringify(any));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSw4REFBYTtBQUNqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREE7O0FBRUEsT0FBTyxzQ0FBc0M7QUFDN0MsT0FBTyxNQUFNOztBQUViLDRCQUE0QjtBQUM1Qiw0QkFBNEI7O0FBRTVCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLFFBQVEsYUFBYSxZQUFZO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDhCQUE4QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUSxlQUFlLFlBQVk7QUFDL0MsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6Qjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxVQUFVO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc21hcnQtdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc21hcnQtdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc21hcnQtdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vc21hcnQtdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NtYXJ0LXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbWFydC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbWFydC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JvdW5kaW5nTWV0aG9kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbWFydC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbWFydC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc21hcnQtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbWFydC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc21hcnQtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbWFydC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc21hcnQtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzL2luZGV4LmpzIiwid2VicGFjazovL3NtYXJ0LXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzL2luZGV4LmpzIiwid2VicGFjazovL3NtYXJ0LXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc21hcnQtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbWFydC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5Ib3Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbWFydC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc21hcnQtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluTWludXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbWFydC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5Nb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc21hcnQtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluU2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbWFydC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5ZZWFycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbWFydC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbWFydC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZk1vbnRoL2luZGV4LmpzIiwid2VicGFjazovL3NtYXJ0LXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2ludGVydmFsVG9EdXJhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zbWFydC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0xhc3REYXlPZk1vbnRoL2luZGV4LmpzIiwid2VicGFjazovL3NtYXJ0LXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3NtYXJ0LXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc21hcnQtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3NtYXJ0LXRvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vc21hcnQtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zbWFydC10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zbWFydC10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NtYXJ0LXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc21hcnQtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NtYXJ0LXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zbWFydC10b2RvLy4vc3JjL2RvbWVsZW1lbnRzLmpzIiwid2VicGFjazovL3NtYXJ0LXRvZG8vLi9zcmMvZG9tZm9ybXMuanMiLCJ3ZWJwYWNrOi8vc21hcnQtdG9kby8uL3NyYy9kb21pbmRleC5qcyIsIndlYnBhY2s6Ly9zbWFydC10b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3NtYXJ0LXRvZG8vLi9zcmMva2V5Z2VuZXJhdG9yLmpzIiwid2VicGFjazovL3NtYXJ0LXRvZG8vLi9zcmMvcGVuY2lsLmpzIiwid2VicGFjazovL3NtYXJ0LXRvZG8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vc21hcnQtdG9kby8uL3NyYy9wcm9qZWN0c29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vc21hcnQtdG9kby8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly9zbWFydC10b2RvLy4vbm9kZV9tb2R1bGVzL2ZsYXR0ZWQvZXNtL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ljb25zL2VkaXQtc3ZncmVwby1jb20uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pY29ucy9kZWxldGUtc3ZncmVwby1jb20uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pY29ucy9jaGVjay1zdmdyZXBvLWNvbS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ljb25zL3VuZG8tc3ZncmVwby1jb20uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmh0bWwge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1VidW50dSc7XFxufVxcblxcbmJvZHl7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaDF7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ucHJvamVjdHMtd3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhYnMtaGVhZGVye1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCAuNXB4IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6LjNyZW07XFxuICAgIHBhZGRpbmctdG9wOiAycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQkVMT1c6IFByb2plY3RzIGNzcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5oMntcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmVkaXQtcHJvamVjdHMtaWNvbntcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuXFxuLnRhYnMtYmFye1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxufVxcblxcbi50YWJ7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItbGVmdDogc29saWQgLjFyZW0gYmxhY2s7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgLjFyZW0gYmxhY2s7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzO1xcbn1cXG5cXG4uYWN0aXZlLXRhYntcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG4uaWNvbi1ob2xkZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogLjVyZW07XFxuICAgIG1hcmdpbjogLjJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1pbnB1dHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTAlO1xcbn1cXG5cXG4uY3JlYXRlLXByb2plY3QtZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1pbnB1dHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbn1cXG5cXG4uZGVsZXRlLWljb257XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgd2lkdGg6IDFyZW07IFxcbn1cXG5cXG4uZWRpdC1pY29ue1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIHdpZHRoOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdHMtYmVpbmctZWRpdGVke1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogLjFyZW0gZG90dGVkIGJsYWNrO1xcbn1cXG5cXG4uY3JlYXRlLXByb2plY3QtYnV0dG9uLFxcbi5jcmVhdGUtYnV0dG9ue1xcbiAgIGJvcmRlcjogZG90dGVkIGJsYWNrO1xcbiAgIG1hcmdpbjogNXB4O1xcbiAgIHdpZHRoOiA4MCU7XFxuICAgaGVpZ2h0OiAycmVtO1xcbiAgIGRpc3BsYXk6IGdyaWQ7XFxuICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBCRUxPVzogVG9kbyBjc3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLnRvZG9zLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDcwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IC4ycmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XFxuXFxufVxcblxcbi50b2RvLWNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZDp3aGl0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDIuNXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJyZW0gYXV0byAxZnIgNnJlbSAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xcbn1cXG5cXG4uY2hlY2tib3h7XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGdyZXk7XFxuICAgIFxcbn1cXG5cXG4udG9kby10aXRsZXtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogLjc7XFxufVxcblxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBCRUxPVzogRm9ybSBjc3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLmJlaW5nLWVkaXRlZHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IC4xcmVtIGRvdHRlZCBibGFjaztcXG4gICAgbWluLWhlaWdodDogNXJlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDEwcmVtIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJ0aXRsZS1sYWJlbCBkZWFkbGluZS1sYWJlbCBkZXNjcmlwdGlvbi1sYWJlbCBcXFwiXFxuICAgIFxcXCJ0aXRsZS1pbnB1dCBkZWFkbGluZS1pbnB1dCBkZXNjcmlwdGlvbi1pbnB1dFxcXCJcXG4gICAgXFxcImJ1dHRvbnMgYnV0dG9ucyBkZXNjcmlwdGlvbi1pbnB1dCBcXFwiO1xcbiAgICBnYXA6IDAgLjhyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW0gLjE1cmVtIDFyZW07XFxufVxcblxcbi5sYWJlbHtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4udGl0bGUtbGFiZWx7XFxuICAgIGdyaWQtYXJlYTogdGl0bGUtbGFiZWw7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1sYWJlbHtcXG4gICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbi1sYWJlbDtcXG59XFxuXFxuLmRlYWRsaW5lLWxhYmVse1xcbiAgIGdyaWQtYXJlYTogZGVhZGxpbmUtbGFiZWw7IFxcbn1cXG5cXG4jdGl0bGUtaW5wdXR7XFxuICAgIGdyaWQtYXJlYTogdGl0bGUtaW5wdXQ7XFxuICAgIGhlaWdodDogMS43NXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtIDtcXG59XFxuXFxuLnJlcXVpcmVke1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuI2RlYWRsaW5lLWlucHV0e1xcbiAgICBncmlkLWFyZWE6IGRlYWRsaW5lLWlucHV0O1xcbiAgICBmb250LWZhbWlseTogJ1VidW50dSc7XFxuICAgIGhlaWdodDogMS43NXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjdyZW07XFxufVxcblxcbiNkZXNjcmlwdGlvbi1pbnB1dHtcXG4gICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbi1pbnB1dDtcXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxufVxcblxcbi5idXR0b25zLWNvbnRhaW5lcntcXG4gICAgZ3JpZC1hcmVhOiBidXR0b25zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6MnJlbTtcXG59XFxuXFxuLmNhbmNlbC1idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjY5NjE7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdkZDc3O1xcbn1cXG5cXG5idXR0b257XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjJyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtIDFyZW0gLjVyZW0gMXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW46IC4xcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IC4ycmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2staWNvbntcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTsgIFxcbn1cXG5cXG4ucmVtb3ZlLWljb257IFxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpOyBcXG59XFxuXFxuLnVuZG8taWNvbntcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG59XFxuLmNyZWF0ZS1wcm9qZWN0LWZvcm0gPiAuY2FuY2VsLWJ1dHRvbiA+IC5yZW1vdmUtaWNvbntcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG59XFxuXFxuLmljb257XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBCRUxPVzogQ2hlY2sgY3NzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5jaGVja1N0cm9rZXtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMzQuNztcXG4gICAgYW5pbWF0aW9uOiAuMjVzIHN0cm9rZU9uZSwgbGluZWFyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHN0cm9rZU9uZXtcXG4gICAgMCV7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMzQuNztcXG4gICAgfVxcblxcbiAgICAxMDAle1xcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XFxuICAgIH1cXG59XFxuXFxuLnRvZG8tY29udGFpbmVye1xcbiAgICBcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHdoaXRlIDUwJSwgZ3JleSA1MCUpIHJpZ2h0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcXG59XFxuXFxuLmNoZWNrZWR7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG9wYWNpdHk6IC41O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBLGtHQUFrRzs7QUFFbEc7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx5REFBcUQ7QUFDekQ7OztBQUdBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbURBQWlEO0lBQ2pELFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtREFBK0M7SUFDL0MsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsMEJBQTBCO0FBQzlCOztBQUVBOztHQUVHLG9CQUFvQjtHQUNwQixXQUFXO0dBQ1gsVUFBVTtHQUNWLFlBQVk7R0FDWixhQUFhO0dBQ2IscUJBQXFCO0dBQ3JCLG1CQUFtQjtBQUN0Qjs7QUFFQSw4RkFBOEY7O0FBRTlGO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFNBQVM7SUFDVCw4Q0FBOEM7SUFDOUMsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYix3QkFBd0I7O0FBRTVCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7OztBQUdBLDhGQUE4Rjs7QUFFOUY7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHFDQUFxQztJQUNyQywrQkFBK0I7SUFDL0I7Ozt3Q0FHb0M7SUFDcEMsWUFBWTtJQUNaLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtHQUNHLHlCQUF5QjtBQUM1Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbURBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksbURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksbURBQStDO0FBQ25EO0FBQ0E7SUFDSSxtREFBK0M7QUFDbkQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtBQUMxQjs7QUFFQSwrRkFBK0Y7O0FBRS9GO0lBQ0ksc0JBQXNCO0lBQ3RCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJO1FBQ0ksdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksb0JBQW9CO0lBQ3hCO0FBQ0o7O0FBRUE7O0lBRUksK0RBQStEO0lBQy9ELDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG59XFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5oMXtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0cy13cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFicy1oZWFkZXJ7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIC41cHggYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDouM3JlbTtcXG4gICAgcGFkZGluZy10b3A6IDJweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBCRUxPVzogUHJvamVjdHMgY3NzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbmgye1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0cy1pY29ue1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaWNvbnMvZWRpdC1zdmdyZXBvLWNvbS5zdmcnKTtcXG59XFxuXFxuXFxuLnRhYnMtYmFye1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxufVxcblxcbi50YWJ7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItbGVmdDogc29saWQgLjFyZW0gYmxhY2s7XFxuICAgIGJvcmRlci1yaWdodDogc29saWQgLjFyZW0gYmxhY2s7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzO1xcbn1cXG5cXG4uYWN0aXZlLXRhYntcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG4uaWNvbi1ob2xkZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogLjVyZW07XFxuICAgIG1hcmdpbjogLjJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1pbnB1dHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTAlO1xcbn1cXG5cXG4uY3JlYXRlLXByb2plY3QtZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1pbnB1dHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbn1cXG5cXG4uZGVsZXRlLWljb257XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pY29ucy9kZWxldGUtc3ZncmVwby1jb20uc3ZnJyk7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgd2lkdGg6IDFyZW07IFxcbn1cXG5cXG4uZWRpdC1pY29ue1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vaWNvbnMvZWRpdC1zdmdyZXBvLWNvbS5zdmcnKTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICB3aWR0aDogMXJlbTtcXG59XFxuXFxuLnByb2plY3RzLWJlaW5nLWVkaXRlZHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IC4xcmVtIGRvdHRlZCBibGFjaztcXG59XFxuXFxuLmNyZWF0ZS1wcm9qZWN0LWJ1dHRvbixcXG4uY3JlYXRlLWJ1dHRvbntcXG4gICBib3JkZXI6IGRvdHRlZCBibGFjaztcXG4gICBtYXJnaW46IDVweDtcXG4gICB3aWR0aDogODAlO1xcbiAgIGhlaWdodDogMnJlbTtcXG4gICBkaXNwbGF5OiBncmlkO1xcbiAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQkVMT1c6IFRvZG8gY3NzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi50b2Rvcy1jb250YWluZXJ7XFxuICAgIHdpZHRoOiA3MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAuMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xcblxcbn1cXG5cXG4udG9kby1jb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQ6d2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAyLjVyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAycmVtIGF1dG8gMWZyIDZyZW0gMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcXG59XFxuXFxuLmNoZWNrYm94e1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCBncmV5O1xcbiAgICBcXG59XFxuXFxuLnRvZG8tdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IC43O1xcbn1cXG5cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQkVMT1c6IEZvcm0gY3NzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5iZWluZy1lZGl0ZWR7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAuMXJlbSBkb3R0ZWQgYmxhY2s7XFxuICAgIG1pbi1oZWlnaHQ6IDVyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxMHJlbSAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwidGl0bGUtbGFiZWwgZGVhZGxpbmUtbGFiZWwgZGVzY3JpcHRpb24tbGFiZWwgXFxcIlxcbiAgICBcXFwidGl0bGUtaW5wdXQgZGVhZGxpbmUtaW5wdXQgZGVzY3JpcHRpb24taW5wdXRcXFwiXFxuICAgIFxcXCJidXR0b25zIGJ1dHRvbnMgZGVzY3JpcHRpb24taW5wdXQgXFxcIjtcXG4gICAgZ2FwOiAwIC44cmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtIC4xNXJlbSAxcmVtO1xcbn1cXG5cXG4ubGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLnRpdGxlLWxhYmVse1xcbiAgICBncmlkLWFyZWE6IHRpdGxlLWxhYmVsO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tbGFiZWx7XFxuICAgIGdyaWQtYXJlYTogZGVzY3JpcHRpb24tbGFiZWw7XFxufVxcblxcbi5kZWFkbGluZS1sYWJlbHtcXG4gICBncmlkLWFyZWE6IGRlYWRsaW5lLWxhYmVsOyBcXG59XFxuXFxuI3RpdGxlLWlucHV0e1xcbiAgICBncmlkLWFyZWE6IHRpdGxlLWlucHV0O1xcbiAgICBoZWlnaHQ6IDEuNzVyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbSA7XFxufVxcblxcbi5yZXF1aXJlZHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbiNkZWFkbGluZS1pbnB1dHtcXG4gICAgZ3JpZC1hcmVhOiBkZWFkbGluZS1pbnB1dDtcXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xcbiAgICBoZWlnaHQ6IDEuNzVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IC43cmVtO1xcbn1cXG5cXG4jZGVzY3JpcHRpb24taW5wdXR7XFxuICAgIGdyaWQtYXJlYTogZGVzY3JpcHRpb24taW5wdXQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG4uYnV0dG9ucy1jb250YWluZXJ7XFxuICAgIGdyaWQtYXJlYTogYnV0dG9ucztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OjJyZW07XFxufVxcblxcbi5jYW5jZWwtYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2OTYxO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3ZGQ3NztcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtIC41cmVtIDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luOiAuMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAuMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrLWljb257XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pY29ucy9jaGVjay1zdmdyZXBvLWNvbS5zdmcnKTsgIFxcbn1cXG5cXG4ucmVtb3ZlLWljb257IFxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vaWNvbnMvZGVsZXRlLXN2Z3JlcG8tY29tLnN2ZycpOyBcXG59XFxuXFxuLnVuZG8taWNvbntcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL2ljb25zL3VuZG8tc3ZncmVwby1jb20uc3ZnJyk7XFxufVxcbi5jcmVhdGUtcHJvamVjdC1mb3JtID4gLmNhbmNlbC1idXR0b24gPiAucmVtb3ZlLWljb257XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pY29ucy91bmRvLXN2Z3JlcG8tY29tLnN2ZycpO1xcbn1cXG5cXG4uaWNvbntcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEJFTE9XOiBDaGVjayBjc3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLmNoZWNrU3Ryb2tle1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiAzNC43O1xcbiAgICBhbmltYXRpb246IC4yNXMgc3Ryb2tlT25lLCBsaW5lYXI7XFxufVxcblxcbkBrZXlmcmFtZXMgc3Ryb2tlT25le1xcbiAgICAwJXtcXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAzNC43O1xcbiAgICB9XFxuXFxuICAgIDEwMCV7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcXG4gICAgfVxcbn1cXG5cXG4udG9kby1jb250YWluZXJ7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgd2hpdGUgNTAlLCBncmV5IDUwJSkgcmlnaHQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xcbn1cXG5cXG4uY2hlY2tlZHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3BhY2l0eTogLjU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsInZhciByb3VuZGluZ01hcCA9IHtcbiAgY2VpbDogTWF0aC5jZWlsLFxuICByb3VuZDogTWF0aC5yb3VuZCxcbiAgZmxvb3I6IE1hdGguZmxvb3IsXG4gIHRydW5jOiBmdW5jdGlvbiB0cnVuYyh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA8IDAgPyBNYXRoLmNlaWwodmFsdWUpIDogTWF0aC5mbG9vcih2YWx1ZSk7XG4gIH0gLy8gTWF0aC50cnVuYyBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFXG5cbn07XG52YXIgZGVmYXVsdFJvdW5kaW5nTWV0aG9kID0gJ3RydW5jJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3VuZGluZ01ldGhvZChtZXRob2QpIHtcbiAgcmV0dXJuIG1ldGhvZCA/IHJvdW5kaW5nTWFwW21ldGhvZF0gOiByb3VuZGluZ01hcFtkZWZhdWx0Um91bmRpbmdNZXRob2RdO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgYWRkRGF5cyBmcm9tIFwiLi4vYWRkRGF5cy9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZE1vbnRocyBmcm9tIFwiLi4vYWRkTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGFkZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCB5ZWFycywgbW9udGhzLCB3ZWVrcywgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCB5ZWFycywgbW9udGhzLCB3ZWVrcywgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7RHVyYXRpb259IGR1cmF0aW9uIC0gdGhlIG9iamVjdCB3aXRoIHllYXJzLCBtb250aHMsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICpcbiAqIHwgS2V5ICAgICAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgeWVhcnMgICAgICAgICAgfCBBbW91bnQgb2YgeWVhcnMgdG8gYmUgYWRkZWQgICAgICAgIHxcbiAqIHwgbW9udGhzICAgICAgICAgfCBBbW91bnQgb2YgbW9udGhzIHRvIGJlIGFkZGVkICAgICAgIHxcbiAqIHwgd2Vla3MgICAgICAgICAgfCBBbW91bnQgb2Ygd2Vla3MgdG8gYmUgYWRkZWQgICAgICAgIHxcbiAqIHwgZGF5cyAgICAgICAgICAgfCBBbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZCAgICAgICAgIHxcbiAqIHwgaG91cnMgICAgICAgICAgfCBBbW91bnQgb2YgaG91cnMgdG8gYmUgYWRkZWQgICAgICAgIHxcbiAqIHwgbWludXRlcyAgICAgICAgfCBBbW91bnQgb2YgbWludXRlcyB0byBiZSBhZGRlZCAgICAgIHxcbiAqIHwgc2Vjb25kcyAgICAgICAgfCBBbW91bnQgb2Ygc2Vjb25kcyB0byBiZSBhZGRlZCAgICAgIHxcbiAqXG4gKiBBbGwgdmFsdWVzIGRlZmF1bHQgdG8gMFxuICpcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgdGhlIGZvbGxvd2luZyBkdXJhdGlvbiB0byAxIFNlcHRlbWJlciAyMDE0LCAxMDoxOTo1MFxuICogY29uc3QgcmVzdWx0ID0gYWRkKG5ldyBEYXRlKDIwMTQsIDgsIDEsIDEwLCAxOSwgNTApLCB7XG4gKiAgIHllYXJzOiAyLFxuICogICBtb250aHM6IDksXG4gKiAgIHdlZWtzOiAxLFxuICogICBkYXlzOiA3LFxuICogICBob3VyczogNSxcbiAqICAgbWludXRlczogOSxcbiAqICAgc2Vjb25kczogMzAsXG4gKiB9KVxuICogLy89PiBUaHUgSnVuIDE1IDIwMTcgMTU6Mjk6MjBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkKGRpcnR5RGF0ZSwgZHVyYXRpb24pIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIGlmICghZHVyYXRpb24gfHwgX3R5cGVvZihkdXJhdGlvbikgIT09ICdvYmplY3QnKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIHllYXJzID0gZHVyYXRpb24ueWVhcnMgPyB0b0ludGVnZXIoZHVyYXRpb24ueWVhcnMpIDogMDtcbiAgdmFyIG1vbnRocyA9IGR1cmF0aW9uLm1vbnRocyA/IHRvSW50ZWdlcihkdXJhdGlvbi5tb250aHMpIDogMDtcbiAgdmFyIHdlZWtzID0gZHVyYXRpb24ud2Vla3MgPyB0b0ludGVnZXIoZHVyYXRpb24ud2Vla3MpIDogMDtcbiAgdmFyIGRheXMgPSBkdXJhdGlvbi5kYXlzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLmRheXMpIDogMDtcbiAgdmFyIGhvdXJzID0gZHVyYXRpb24uaG91cnMgPyB0b0ludGVnZXIoZHVyYXRpb24uaG91cnMpIDogMDtcbiAgdmFyIG1pbnV0ZXMgPSBkdXJhdGlvbi5taW51dGVzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLm1pbnV0ZXMpIDogMDtcbiAgdmFyIHNlY29uZHMgPSBkdXJhdGlvbi5zZWNvbmRzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLnNlY29uZHMpIDogMDsgLy8gQWRkIHllYXJzIGFuZCBtb250aHNcblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF0ZVdpdGhNb250aHMgPSBtb250aHMgfHwgeWVhcnMgPyBhZGRNb250aHMoZGF0ZSwgbW9udGhzICsgeWVhcnMgKiAxMikgOiBkYXRlOyAvLyBBZGQgd2Vla3MgYW5kIGRheXNcblxuICB2YXIgZGF0ZVdpdGhEYXlzID0gZGF5cyB8fCB3ZWVrcyA/IGFkZERheXMoZGF0ZVdpdGhNb250aHMsIGRheXMgKyB3ZWVrcyAqIDcpIDogZGF0ZVdpdGhNb250aHM7IC8vIEFkZCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kc1xuXG4gIHZhciBtaW51dGVzVG9BZGQgPSBtaW51dGVzICsgaG91cnMgKiA2MDtcbiAgdmFyIHNlY29uZHNUb0FkZCA9IHNlY29uZHMgKyBtaW51dGVzVG9BZGQgKiA2MDtcbiAgdmFyIG1zVG9BZGQgPSBzZWNvbmRzVG9BZGQgKiAxMDAwO1xuICB2YXIgZmluYWxEYXRlID0gbmV3IERhdGUoZGF0ZVdpdGhEYXlzLmdldFRpbWUoKSArIG1zVG9BZGQpO1xuICByZXR1cm4gZmluYWxEYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG5cbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1vbnRocyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1vbnRocyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtb250aHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDUgbW9udGhzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNb250aHMobmV3IERhdGUoMjAxNCwgOCwgMSksIDUpXG4gKiAvLz0+IFN1biBGZWIgMDEgMjAxNSAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1vbnRocyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcblxuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIG1vbnRocywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIHZhciBkYXlPZk1vbnRoID0gZGF0ZS5nZXREYXRlKCk7IC8vIFRoZSBKUyBEYXRlIG9iamVjdCBzdXBwb3J0cyBkYXRlIG1hdGggYnkgYWNjZXB0aW5nIG91dC1vZi1ib3VuZHMgdmFsdWVzIGZvclxuICAvLyBtb250aCwgZGF5LCBldGMuIEZvciBleGFtcGxlLCBuZXcgRGF0ZSgyMDIwLCAwLCAwKSByZXR1cm5zIDMxIERlYyAyMDE5IGFuZFxuICAvLyBuZXcgRGF0ZSgyMDIwLCAxMywgMSkgcmV0dXJucyAxIEZlYiAyMDIxLiAgVGhpcyBpcyAqYWxtb3N0KiB0aGUgYmVoYXZpb3Igd2VcbiAgLy8gd2FudCBleGNlcHQgdGhhdCBkYXRlcyB3aWxsIHdyYXAgYXJvdW5kIHRoZSBlbmQgb2YgYSBtb250aCwgbWVhbmluZyB0aGF0XG4gIC8vIG5ldyBEYXRlKDIwMjAsIDEzLCAzMSkgd2lsbCByZXR1cm4gMyBNYXIgMjAyMSBub3QgMjggRmViIDIwMjEgYXMgZGVzaXJlZC4gU29cbiAgLy8gd2UnbGwgZGVmYXVsdCB0byB0aGUgZW5kIG9mIHRoZSBkZXNpcmVkIG1vbnRoIGJ5IGFkZGluZyAxIHRvIHRoZSBkZXNpcmVkXG4gIC8vIG1vbnRoIGFuZCB1c2luZyBhIGRhdGUgb2YgMCB0byBiYWNrIHVwIG9uZSBkYXkgdG8gdGhlIGVuZCBvZiB0aGUgZGVzaXJlZFxuICAvLyBtb250aC5cblxuICB2YXIgZW5kT2ZEZXNpcmVkTW9udGggPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XG4gIGVuZE9mRGVzaXJlZE1vbnRoLnNldE1vbnRoKGRhdGUuZ2V0TW9udGgoKSArIGFtb3VudCArIDEsIDApO1xuICB2YXIgZGF5c0luTW9udGggPSBlbmRPZkRlc2lyZWRNb250aC5nZXREYXRlKCk7XG5cbiAgaWYgKGRheU9mTW9udGggPj0gZGF5c0luTW9udGgpIHtcbiAgICAvLyBJZiB3ZSdyZSBhbHJlYWR5IGF0IHRoZSBlbmQgb2YgdGhlIG1vbnRoLCB0aGVuIHRoaXMgaXMgdGhlIGNvcnJlY3QgZGF0ZVxuICAgIC8vIGFuZCB3ZSdyZSBkb25lLlxuICAgIHJldHVybiBlbmRPZkRlc2lyZWRNb250aDtcbiAgfSBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UsIHdlIG5vdyBrbm93IHRoYXQgc2V0dGluZyB0aGUgb3JpZ2luYWwgZGF5LW9mLW1vbnRoIHZhbHVlIHdvbid0XG4gICAgLy8gY2F1c2UgYW4gb3ZlcmZsb3csIHNvIHNldCB0aGUgZGVzaXJlZCBkYXktb2YtbW9udGguIE5vdGUgdGhhdCB3ZSBjYW4ndFxuICAgIC8vIGp1c3Qgc2V0IHRoZSBkYXRlIG9mIGBlbmRPZkRlc2lyZWRNb250aGAgYmVjYXVzZSB0aGF0IG9iamVjdCBtYXkgaGF2ZSBoYWRcbiAgICAvLyBpdHMgdGltZSBjaGFuZ2VkIGluIHRoZSB1bnVzdWFsIGNhc2Ugd2hlcmUgd2hlcmUgYSBEU1QgdHJhbnNpdGlvbiB3YXMgb25cbiAgICAvLyB0aGUgbGFzdCBkYXkgb2YgdGhlIG1vbnRoIGFuZCBpdHMgbG9jYWwgdGltZSB3YXMgaW4gdGhlIGhvdXIgc2tpcHBlZCBvclxuICAgIC8vIHJlcGVhdGVkIG5leHQgdG8gYSBEU1QgdHJhbnNpdGlvbi4gIFNvIHdlIHVzZSBgZGF0ZWAgaW5zdGVhZCB3aGljaCBpc1xuICAgIC8vIGd1YXJhbnRlZWQgdG8gc3RpbGwgaGF2ZSB0aGUgb3JpZ2luYWwgdGltZS5cbiAgICBkYXRlLnNldEZ1bGxZZWFyKGVuZE9mRGVzaXJlZE1vbnRoLmdldEZ1bGxZZWFyKCksIGVuZE9mRGVzaXJlZE1vbnRoLmdldE1vbnRoKCksIGRheU9mTW9udGgpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgc3RhcnRPZkRheUxlZnQgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgc3RhcnRPZkRheVJpZ2h0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB0aW1lc3RhbXBMZWZ0ID0gc3RhcnRPZkRheUxlZnQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5TGVmdCk7XG4gIHZhciB0aW1lc3RhbXBSaWdodCA9IHN0YXJ0T2ZEYXlSaWdodC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlSaWdodCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSBkYXkgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSBkYXkgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gTUlMTElTRUNPTkRTX0lOX0RBWSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRoc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBtb250aHMgYXJlIGJldHdlZW4gMzEgSmFudWFyeSAyMDE0IGFuZCAxIFNlcHRlbWJlciAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDgsIDEpLFxuICogICBuZXcgRGF0ZSgyMDE0LCAwLCAzMSlcbiAqIClcbiAqIC8vPT4gOFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgeWVhckRpZmYgPSBkYXRlTGVmdC5nZXRGdWxsWWVhcigpIC0gZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCk7XG4gIHZhciBtb250aERpZmYgPSBkYXRlTGVmdC5nZXRNb250aCgpIC0gZGF0ZVJpZ2h0LmdldE1vbnRoKCk7XG4gIHJldHVybiB5ZWFyRGlmZiAqIDEyICsgbW9udGhEaWZmO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFyc1xuICogQGNhdGVnb3J5IFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgeWVhcnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciB5ZWFycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIHllYXJzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIHllYXJzIGFyZSBiZXR3ZWVuIDMxIERlY2VtYmVyIDIwMTMgYW5kIDExIEZlYnJ1YXJ5IDIwMTU/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzKFxuICogICBuZXcgRGF0ZSgyMDE1LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDIwMTMsIDExLCAzMSlcbiAqIClcbiAqIC8vPT4gMlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdC5nZXRGdWxsWWVhcigpIC0gZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIExpa2UgYGNvbXBhcmVBc2NgIGJ1dCB1c2VzIGxvY2FsIHRpbWUgbm90IFVUQywgd2hpY2ggaXMgbmVlZGVkXG4vLyBmb3IgYWNjdXJhdGUgZXF1YWxpdHkgY29tcGFyaXNvbnMgb2YgVVRDIHRpbWVzdGFtcHMgdGhhdCBlbmQgdXBcbi8vIGhhdmluZyB0aGUgc2FtZSByZXByZXNlbnRhdGlvbiBpbiBsb2NhbCB0aW1lLCBlLmcuIG9uZSBob3VyIGJlZm9yZVxuLy8gRFNUIGVuZHMgdnMuIHRoZSBpbnN0YW50IHRoYXQgRFNUIGVuZHMuXG5cbmZ1bmN0aW9uIGNvbXBhcmVMb2NhbEFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSAtIGRhdGVSaWdodC5nZXRGdWxsWWVhcigpIHx8IGRhdGVMZWZ0LmdldE1vbnRoKCkgLSBkYXRlUmlnaHQuZ2V0TW9udGgoKSB8fCBkYXRlTGVmdC5nZXREYXRlKCkgLSBkYXRlUmlnaHQuZ2V0RGF0ZSgpIHx8IGRhdGVMZWZ0LmdldEhvdXJzKCkgLSBkYXRlUmlnaHQuZ2V0SG91cnMoKSB8fCBkYXRlTGVmdC5nZXRNaW51dGVzKCkgLSBkYXRlUmlnaHQuZ2V0TWludXRlcygpIHx8IGRhdGVMZWZ0LmdldFNlY29uZHMoKSAtIGRhdGVSaWdodC5nZXRTZWNvbmRzKCkgfHwgZGF0ZUxlZnQuZ2V0TWlsbGlzZWNvbmRzKCkgLSBkYXRlUmlnaHQuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7IC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBkYXkgcGVyaW9kcyBiZXR3ZWVuIHR3byBkYXRlcy4gRnJhY3Rpb25hbCBkYXlzIGFyZVxuICogdHJ1bmNhdGVkIHRvd2FyZHMgemVyby5cbiAqXG4gKiBPbmUgXCJmdWxsIGRheVwiIGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGEgbG9jYWwgdGltZSBpbiBvbmUgZGF5IHRvIHRoZSBzYW1lXG4gKiBsb2NhbCB0aW1lIG9uIHRoZSBuZXh0IG9yIHByZXZpb3VzIGRheS4gQSBmdWxsIGRheSBjYW4gc29tZXRpbWVzIGJlIGxlc3MgdGhhblxuICogb3IgbW9yZSB0aGFuIDI0IGhvdXJzIGlmIGEgZGF5bGlnaHQgc2F2aW5ncyBjaGFuZ2UgaGFwcGVucyBiZXR3ZWVuIHR3byBkYXRlcy5cbiAqXG4gKiBUbyBpZ25vcmUgRFNUIGFuZCBvbmx5IG1lYXN1cmUgZXhhY3QgMjQtaG91ciBwZXJpb2RzLCB1c2UgdGhpcyBpbnN0ZWFkOlxuICogYE1hdGguZmxvb3IoZGlmZmVyZW5jZUluSG91cnMoZGF0ZUxlZnQsIGRhdGVSaWdodCkvMjQpfDBgLlxuICpcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGZ1bGwgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGxvY2FsIHRpbWV6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMFxuICogLy8gSG93IG1hbnkgZnVsbCBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAxIE1hcmNoIDIwMjAgMDowMCBhbmQgMSBKdW5lIDIwMjAgMDowMCA/XG4gKiAvLyBOb3RlOiBiZWNhdXNlIGxvY2FsIHRpbWUgaXMgdXNlZCwgdGhlXG4gKiAvLyByZXN1bHQgd2lsbCBhbHdheXMgYmUgOTIgZGF5cywgZXZlbiBpblxuICogLy8gdGltZSB6b25lcyB3aGVyZSBEU1Qgc3RhcnRzIGFuZCB0aGVcbiAqIC8vIHBlcmlvZCBoYXMgb25seSA5MioyNC0xIGhvdXJzLlxuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAyMCwgNSwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMjAsIDIsIDEpXG4gKiApXG4vLz0+IDkyXG4gKi9cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5EYXlzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgc2lnbiA9IGNvbXBhcmVMb2NhbEFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGF0ZUxlZnQsIGRhdGVSaWdodCkpO1xuICBkYXRlTGVmdC5zZXREYXRlKGRhdGVMZWZ0LmdldERhdGUoKSAtIHNpZ24gKiBkaWZmZXJlbmNlKTsgLy8gTWF0aC5hYnMoZGlmZiBpbiBmdWxsIGRheXMgLSBkaWZmIGluIGNhbGVuZGFyIGRheXMpID09PSAxIGlmIGxhc3QgY2FsZW5kYXIgZGF5IGlzIG5vdCBmdWxsXG4gIC8vIElmIHNvLCByZXN1bHQgbXVzdCBiZSBkZWNyZWFzZWQgYnkgMSBpbiBhYnNvbHV0ZSB2YWx1ZVxuXG4gIHZhciBpc0xhc3REYXlOb3RGdWxsID0gTnVtYmVyKGNvbXBhcmVMb2NhbEFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSA9PT0gLXNpZ24pO1xuICB2YXIgcmVzdWx0ID0gc2lnbiAqIChkaWZmZXJlbmNlIC0gaXNMYXN0RGF5Tm90RnVsbCk7IC8vIFByZXZlbnQgbmVnYXRpdmUgemVyb1xuXG4gIHJldHVybiByZXN1bHQgPT09IDAgPyAwIDogcmVzdWx0O1xufSIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldFJvdW5kaW5nTWV0aG9kIH0gZnJvbSBcIi4uL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkhvdXJzXG4gKiBAY2F0ZWdvcnkgSG91ciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBob3VycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGhvdXJzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnJvdW5kaW5nTWV0aG9kPSd0cnVuYyddIC0gYSByb3VuZGluZyBtZXRob2QgKGBjZWlsYCwgYGZsb29yYCwgYHJvdW5kYCBvciBgdHJ1bmNgKVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBob3Vyc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBob3VycyBhcmUgYmV0d2VlbiAyIEp1bHkgMjAxNCAwNjo1MDowMCBhbmQgMiBKdWx5IDIwMTQgMTk6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5Ib3VycyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTksIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCA2LCA1MClcbiAqIClcbiAqIC8vPT4gMTJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5Ib3VycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGlmZiA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSAvIG1pbGxpc2Vjb25kc0luSG91cjtcbiAgcmV0dXJuIGdldFJvdW5kaW5nTWV0aG9kKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yb3VuZGluZ01ldGhvZCkoZGlmZik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgbWlsbGlzZWNvbmRzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxNCAxMjozMDoyMC42MDAgYW5kIDIgSnVseSAyMDE0IDEyOjMwOjIxLjcwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMSwgNzAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMCwgNjAwKVxuICogKVxuICogLy89PiAxMTAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB0b0RhdGUoZGF0ZUxlZnQpLmdldFRpbWUoKSAtIHRvRGF0ZShkYXRlUmlnaHQpLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldFJvdW5kaW5nTWV0aG9kIH0gZnJvbSBcIi4uL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1pbnV0ZXNcbiAqIEBjYXRlZ29yeSBNaW51dGUgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgbWludXRlcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgc2lnbmVkIG51bWJlciBvZiBmdWxsIChyb3VuZGVkIHRvd2FyZHMgMCkgbWludXRlcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5yb3VuZGluZ01ldGhvZD0ndHJ1bmMnXSAtIGEgcm91bmRpbmcgbWV0aG9kIChgY2VpbGAsIGBmbG9vcmAsIGByb3VuZGAgb3IgYHRydW5jYClcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgbWludXRlc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBtaW51dGVzIGFyZSBiZXR3ZWVuIDIgSnVseSAyMDE0IDEyOjA3OjU5IGFuZCAyIEp1bHkgMjAxNCAxMjoyMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1pbnV0ZXMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAyMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCA3LCA1OSlcbiAqIClcbiAqIC8vPT4gMTJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgbWludXRlcyBhcmUgYmV0d2VlbiAxMDowMTo1OSBhbmQgMTA6MDA6MDBcbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1pbnV0ZXMoXG4gKiAgIG5ldyBEYXRlKDIwMDAsIDAsIDEsIDEwLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAwMCwgMCwgMSwgMTAsIDEsIDU5KVxuICogKVxuICogLy89PiAtMVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1pbnV0ZXMoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRpZmYgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkgLyBtaWxsaXNlY29uZHNJbk1pbnV0ZTtcbiAgcmV0dXJuIGdldFJvdW5kaW5nTWV0aG9kKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yb3VuZGluZ01ldGhvZCkoZGlmZik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiLi4vY29tcGFyZUFzYy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBpc0xhc3REYXlPZk1vbnRoIGZyb20gXCIuLi9pc0xhc3REYXlPZk1vbnRoL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgdXNpbmcgdHJ1bmMgYXMgYSBkZWZhdWx0IHJvdW5kaW5nIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgbW9udGhzIGFyZSBiZXR3ZWVuIDMxIEphbnVhcnkgMjAxNCBhbmQgMSBTZXB0ZW1iZXIgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1vbnRocyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgbmV3IERhdGUoMjAxNCwgMCwgMzEpKVxuICogLy89PiA3XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluTW9udGhzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgc2lnbiA9IGNvbXBhcmVBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gIHZhciBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkpO1xuICB2YXIgcmVzdWx0OyAvLyBDaGVjayBmb3IgdGhlIGRpZmZlcmVuY2Ugb2YgbGVzcyB0aGFuIG1vbnRoXG5cbiAgaWYgKGRpZmZlcmVuY2UgPCAxKSB7XG4gICAgcmVzdWx0ID0gMDtcbiAgfSBlbHNlIHtcbiAgICBpZiAoZGF0ZUxlZnQuZ2V0TW9udGgoKSA9PT0gMSAmJiBkYXRlTGVmdC5nZXREYXRlKCkgPiAyNykge1xuICAgICAgLy8gVGhpcyB3aWxsIGNoZWNrIGlmIHRoZSBkYXRlIGlzIGVuZCBvZiBGZWIgYW5kIGFzc2lnbiBhIGhpZ2hlciBlbmQgb2YgbW9udGggZGF0ZVxuICAgICAgLy8gdG8gY29tcGFyZSBpdCB3aXRoIEphblxuICAgICAgZGF0ZUxlZnQuc2V0RGF0ZSgzMCk7XG4gICAgfVxuXG4gICAgZGF0ZUxlZnQuc2V0TW9udGgoZGF0ZUxlZnQuZ2V0TW9udGgoKSAtIHNpZ24gKiBkaWZmZXJlbmNlKTsgLy8gTWF0aC5hYnMoZGlmZiBpbiBmdWxsIG1vbnRocyAtIGRpZmYgaW4gY2FsZW5kYXIgbW9udGhzKSA9PT0gMSBpZiBsYXN0IGNhbGVuZGFyIG1vbnRoIGlzIG5vdCBmdWxsXG4gICAgLy8gSWYgc28sIHJlc3VsdCBtdXN0IGJlIGRlY3JlYXNlZCBieSAxIGluIGFic29sdXRlIHZhbHVlXG5cbiAgICB2YXIgaXNMYXN0TW9udGhOb3RGdWxsID0gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSA9PT0gLXNpZ247IC8vIENoZWNrIGZvciBjYXNlcyBvZiBvbmUgZnVsbCBjYWxlbmRhciBtb250aFxuXG4gICAgaWYgKGlzTGFzdERheU9mTW9udGgodG9EYXRlKGRpcnR5RGF0ZUxlZnQpKSAmJiBkaWZmZXJlbmNlID09PSAxICYmIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGF0ZVJpZ2h0KSA9PT0gMSkge1xuICAgICAgaXNMYXN0TW9udGhOb3RGdWxsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVzdWx0ID0gc2lnbiAqIChkaWZmZXJlbmNlIC0gTnVtYmVyKGlzTGFzdE1vbnRoTm90RnVsbCkpO1xuICB9IC8vIFByZXZlbnQgbmVnYXRpdmUgemVyb1xuXG5cbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCA/IDAgOiByZXN1bHQ7XG59IiwiaW1wb3J0IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0Um91bmRpbmdNZXRob2QgfSBmcm9tIFwiLi4vX2xpYi9yb3VuZGluZ01ldGhvZHMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluU2Vjb25kc1xuICogQGNhdGVnb3J5IFNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5yb3VuZGluZ01ldGhvZD0ndHJ1bmMnXSAtIGEgcm91bmRpbmcgbWV0aG9kIChgY2VpbGAsIGBmbG9vcmAsIGByb3VuZGAgb3IgYHRydW5jYClcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2Ygc2Vjb25kc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBzZWNvbmRzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxNCAxMjozMDowNy45OTkgYW5kIDIgSnVseSAyMDE0IDEyOjMwOjIwLjAwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJblNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDcsIDk5OSlcbiAqIClcbiAqIC8vPT4gMTJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkaWZmID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIC8gMTAwMDtcbiAgcmV0dXJuIGdldFJvdW5kaW5nTWV0aG9kKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yb3VuZGluZ01ldGhvZCkoZGlmZik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycy9pbmRleC5qc1wiO1xuaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcIi4uL2NvbXBhcmVBc2MvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJblllYXJzXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBmdWxsIHllYXJzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgZnVsbCB5ZWFycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGZ1bGwgeWVhcnNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCB5ZWFycyBhcmUgYmV0d2VlbiAzMSBEZWNlbWJlciAyMDEzIGFuZCAxMSBGZWJydWFyeSAyMDE1P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluWWVhcnMobmV3IERhdGUoMjAxNSwgMSwgMTEpLCBuZXcgRGF0ZSgyMDEzLCAxMSwgMzEpKVxuICogLy89PiAxXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluWWVhcnMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBzaWduID0gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpKTsgLy8gU2V0IGJvdGggZGF0ZXMgdG8gYSB2YWxpZCBsZWFwIHllYXIgZm9yIGFjY3VyYXRlIGNvbXBhcmlzb24gd2hlbiBkZWFsaW5nXG4gIC8vIHdpdGggbGVhcCBkYXlzXG5cbiAgZGF0ZUxlZnQuc2V0RnVsbFllYXIoMTU4NCk7XG4gIGRhdGVSaWdodC5zZXRGdWxsWWVhcigxNTg0KTsgLy8gTWF0aC5hYnMoZGlmZiBpbiBmdWxsIHllYXJzIC0gZGlmZiBpbiBjYWxlbmRhciB5ZWFycykgPT09IDEgaWYgbGFzdCBjYWxlbmRhciB5ZWFyIGlzIG5vdCBmdWxsXG4gIC8vIElmIHNvLCByZXN1bHQgbXVzdCBiZSBkZWNyZWFzZWQgYnkgMSBpbiBhYnNvbHV0ZSB2YWx1ZVxuXG4gIHZhciBpc0xhc3RZZWFyTm90RnVsbCA9IGNvbXBhcmVBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCkgPT09IC1zaWduO1xuICB2YXIgcmVzdWx0ID0gc2lnbiAqIChkaWZmZXJlbmNlIC0gTnVtYmVyKGlzTGFzdFllYXJOb3RGdWxsKSk7IC8vIFByZXZlbnQgbmVnYXRpdmUgemVyb1xuXG4gIHJldHVybiByZXN1bHQgPT09IDAgPyAwIDogcmVzdWx0O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIG1vbnRoIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDMwIDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZNb250aChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoICsgMSwgMCk7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcIi4uL2NvbXBhcmVBc2MvaW5kZXguanNcIjtcbmltcG9ydCBhZGQgZnJvbSBcIi4uL2FkZC9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkRheXMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbkRheXMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5Ib3VycyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluSG91cnMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5NaW51dGVzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5NaW51dGVzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluTW9udGhzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5Nb250aHMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5TZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5TZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluWWVhcnMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJblllYXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGludGVydmFsVG9EdXJhdGlvblxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IGludGVydmFsIHRvIGR1cmF0aW9uXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IGEgaW50ZXJ2YWwgb2JqZWN0IHRvIGEgZHVyYXRpb24gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7SW50ZXJ2YWx9IGludGVydmFsIC0gdGhlIGludGVydmFsIHRvIGNvbnZlcnQgdG8gZHVyYXRpb25cbiAqXG4gKiBAcmV0dXJucyB7RHVyYXRpb259IFRoZSBkdXJhdGlvbiBPYmplY3RcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gUmVxdWlyZXMgMiBhcmd1bWVudHNcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBzdGFydGAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZW5kYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gR2V0IHRoZSBkdXJhdGlvbiBiZXR3ZWVuIEphbnVhcnkgMTUsIDE5MjkgYW5kIEFwcmlsIDQsIDE5NjguXG4gKiBpbnRlcnZhbFRvRHVyYXRpb24oe1xuICogICBzdGFydDogbmV3IERhdGUoMTkyOSwgMCwgMTUsIDEyLCAwLCAwKSxcbiAqICAgZW5kOiBuZXcgRGF0ZSgxOTY4LCAzLCA0LCAxOSwgNSwgMClcbiAqIH0pXG4gKiAvLyA9PiB7IHllYXJzOiAzOSwgbW9udGhzOiAyLCBkYXlzOiAyMCwgaG91cnM6IDcsIG1pbnV0ZXM6IDUsIHNlY29uZHM6IDAgfVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGludGVydmFsVG9EdXJhdGlvbihpbnRlcnZhbCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHN0YXJ0ID0gdG9EYXRlKGludGVydmFsLnN0YXJ0KTtcbiAgdmFyIGVuZCA9IHRvRGF0ZShpbnRlcnZhbC5lbmQpO1xuICBpZiAoaXNOYU4oc3RhcnQuZ2V0VGltZSgpKSkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1N0YXJ0IERhdGUgaXMgaW52YWxpZCcpO1xuICBpZiAoaXNOYU4oZW5kLmdldFRpbWUoKSkpIHRocm93IG5ldyBSYW5nZUVycm9yKCdFbmQgRGF0ZSBpcyBpbnZhbGlkJyk7XG4gIHZhciBkdXJhdGlvbiA9IHt9O1xuICBkdXJhdGlvbi55ZWFycyA9IE1hdGguYWJzKGRpZmZlcmVuY2VJblllYXJzKGVuZCwgc3RhcnQpKTtcbiAgdmFyIHNpZ24gPSBjb21wYXJlQXNjKGVuZCwgc3RhcnQpO1xuICB2YXIgcmVtYWluaW5nTW9udGhzID0gYWRkKHN0YXJ0LCB7XG4gICAgeWVhcnM6IHNpZ24gKiBkdXJhdGlvbi55ZWFyc1xuICB9KTtcbiAgZHVyYXRpb24ubW9udGhzID0gTWF0aC5hYnMoZGlmZmVyZW5jZUluTW9udGhzKGVuZCwgcmVtYWluaW5nTW9udGhzKSk7XG4gIHZhciByZW1haW5pbmdEYXlzID0gYWRkKHJlbWFpbmluZ01vbnRocywge1xuICAgIG1vbnRoczogc2lnbiAqIGR1cmF0aW9uLm1vbnRoc1xuICB9KTtcbiAgZHVyYXRpb24uZGF5cyA9IE1hdGguYWJzKGRpZmZlcmVuY2VJbkRheXMoZW5kLCByZW1haW5pbmdEYXlzKSk7XG4gIHZhciByZW1haW5pbmdIb3VycyA9IGFkZChyZW1haW5pbmdEYXlzLCB7XG4gICAgZGF5czogc2lnbiAqIGR1cmF0aW9uLmRheXNcbiAgfSk7XG4gIGR1cmF0aW9uLmhvdXJzID0gTWF0aC5hYnMoZGlmZmVyZW5jZUluSG91cnMoZW5kLCByZW1haW5pbmdIb3VycykpO1xuICB2YXIgcmVtYWluaW5nTWludXRlcyA9IGFkZChyZW1haW5pbmdIb3Vycywge1xuICAgIGhvdXJzOiBzaWduICogZHVyYXRpb24uaG91cnNcbiAgfSk7XG4gIGR1cmF0aW9uLm1pbnV0ZXMgPSBNYXRoLmFicyhkaWZmZXJlbmNlSW5NaW51dGVzKGVuZCwgcmVtYWluaW5nTWludXRlcykpO1xuICB2YXIgcmVtYWluaW5nU2Vjb25kcyA9IGFkZChyZW1haW5pbmdNaW51dGVzLCB7XG4gICAgbWludXRlczogc2lnbiAqIGR1cmF0aW9uLm1pbnV0ZXNcbiAgfSk7XG4gIGR1cmF0aW9uLnNlY29uZHMgPSBNYXRoLmFicyhkaWZmZXJlbmNlSW5TZWNvbmRzKGVuZCwgcmVtYWluaW5nU2Vjb25kcykpO1xuICByZXR1cm4gZHVyYXRpb247XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZW5kT2ZEYXkgZnJvbSBcIi4uL2VuZE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgZW5kT2ZNb250aCBmcm9tIFwiLi4vZW5kT2ZNb250aC9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNMYXN0RGF5T2ZNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAyOCBGZWJydWFyeSAyMDE0IHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICogY29uc3QgcmVzdWx0ID0gaXNMYXN0RGF5T2ZNb250aChuZXcgRGF0ZSgyMDE0LCAxLCAyOCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0xhc3REYXlPZk1vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuIGVuZE9mRGF5KGRhdGUpLmdldFRpbWUoKSA9PT0gZW5kT2ZNb250aChkYXRlKS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkYWRkaXRpb25hbERpO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG5cbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuXG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcblxuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG5cbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTsgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nOyAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuXG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDsgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0gLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuXG5cbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2NyZWF0ZVRvZG9Gb3JtLCBlZGl0VG9kb0Zvcm0sIG5ld1Byb2plY3ROYW1lLCBlZGl0UHJvamVjdE5hbWV9IGZyb20gJy4vZG9tZm9ybXMuanMnXG5pbXBvcnQge2ZpbmRUb2RvT2JqLCByZW5kZXJUb2RvcywgcmVuZGVyQWxsVG9kb3N9IGZyb20gJy4vdG9kb3MuanMnXG5pbXBvcnQge2ZpbmRQcm9qZWN0T2JqLCBwcm9qZWN0cywgc3RvcmVMb2NhbGx5fSBmcm9tICcuL3Byb2plY3RzLmpzJ1xuaW1wb3J0IHtvcGVuUHJvamVjdE9wdGlvbnMsIGFkZEljb25zfSBmcm9tICcuL3Byb2plY3Rzb3B0aW9ucydcbmltcG9ydCB7aW50ZXJ2YWxUb0R1cmF0aW9uLCBwYXJzZUlTT30gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQge2RyYXdDaGVja30gZnJvbSAnLi9wZW5jaWwuanMnXG5cbmZ1bmN0aW9uIG1ha2VIZWFkZXIoKXtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnU21hcnQgVG8gRG8nO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgbGV0IHByb2plY3RzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy13cmFwcGVyJyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RzV3JhcHBlcik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIFxuICB9XG5cbiAgZnVuY3Rpb24gbWFrZVRhYnNCYXIoKXtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLXdyYXBwZXInKTtcbiAgICBjb25zdCB0YWJzQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFic0Jhci5jbGFzc0xpc3QuYWRkKCd0YWJzLWJhcicpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGFic0Jhcik7XG4gIH1cblxuICBmdW5jdGlvbiBtYWtlVGFic0hlYWRlcigpe1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtd3JhcHBlcicpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YWJzLWhlYWRlcicpO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gICAgY29uc3QgZWRpdFByb2plY3RzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVkaXRQcm9qZWN0c0ljb24uY2xhc3NMaXN0LmFkZCgnZWRpdC1wcm9qZWN0cy1pY29uJyk7XG4gICAgZWRpdFByb2plY3RzSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Qcm9qZWN0T3B0aW9ucywge29uY2U6IHRydWV9KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaDIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0UHJvamVjdHNJY29uKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH1cblxuICBmdW5jdGlvbiBtYWluVGFiKCkge1xuICAgIGxldCB0YWJzQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYnMtYmFyJyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgndGFiJywgJ21haW50YWInKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBgJHtwcm9qZWN0c1swXS5rZXl9YClcbiAgICBtYWluLnRleHRDb250ZW50ID0gYCR7cHJvamVjdHNbMF0ubmFtZX1gO1xuICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVuZGVyQWxsVG9kb3MoKTtcbiAgICByZW1vdmVIaWdobGlnaHQoKTtcbiAgICBoaWdobGlnaHRUYWIobWFpbilcbiAgICB9KTtcbiAgICBoaWdobGlnaHRUYWIobWFpbilcbiAgICB0YWJzQmFyLmFwcGVuZENoaWxkKG1haW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gbmV3VGFiQnV0dG9uKCkge1xuICAgIGxldCB0YWJzQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYnMtYmFyJyk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1wcm9qZWN0LWJ1dHRvbicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9ICcrIHByb2plY3QnXG4gICAgYnRuLnN0eWxlLndpZHRoID0gJzgwcHgnXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICBuZXdQcm9qZWN0TmFtZShidG4pO1xuICAgIH0sIHtvbmNlIDogdHJ1ZX0pO1xuICAgIHRhYnNCYXIuYXBwZW5kQ2hpbGQoYnRuKVxuICB9XG5cbiAgZnVuY3Rpb24gbmV3VGFiKG5hbWUsIGtleSwgaW5kZXgpe1xuICAgIGxldCB0YWJzQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYnMtYmFyJyk7XG4gICAgbGV0IHByb2plY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0VGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgIHByb2plY3RUYWIuc2V0QXR0cmlidXRlKCdkYXRhLWtleScsIGtleSk7XG5cbiAgICBsZXQgdGl0bGUgPSBwcm9qZWN0VGFiLmFwcGVuZENoaWxkKHRhYlRpdGxlKG5hbWUsIGtleSkpXG5cbiAgICBsZXQgb2JqID0gZmluZFByb2plY3RPYmooa2V5KTtcbiAgICBwcm9qZWN0VGFiLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IG9iai5jb2xvclxuICAgIGlmKGluZGV4KXtcbiAgICAgIHRhYnNCYXIuaW5zZXJ0QmVmb3JlKHByb2plY3RUYWIsIHRhYnNCYXIuY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHt0YWJzQmFyLmFwcGVuZENoaWxkKHByb2plY3RUYWIpfTtcbiAgICBcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtd3JhcHBlcicpLmNsYXNzTGlzdC5jb250YWlucygnYmVpbmctZWRpdGVkJykpe1xuICAgICAgYWRkSWNvbnMocHJvamVjdFRhYilcbiAgICB9XG4gICAgdGl0bGUuY2xpY2soKVxuICB9XG5cbiAgZnVuY3Rpb24gdGFiVGl0bGUgKG5hbWUsIGtleSl7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lXG4gICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBsZXQgb2JqZWN0dXMgPSBmaW5kUHJvamVjdE9iaihrZXkpXG4gICAgICByZW5kZXJUb2RvcyhvYmplY3R1cylcbiAgICAgIHJlbW92ZUhpZ2hsaWdodCgpXG4gICAgICBoaWdobGlnaHRUYWIodGl0bGUucGFyZW50RWxlbWVudClcbiAgICAgIH0pO1xuICAgIHJldHVybiB0aXRsZVxuICB9XG5cbiAgZnVuY3Rpb24gaGlnaGxpZ2h0VGFiICh0YWIpe1xuICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdGFiJylcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUhpZ2hsaWdodCAoKSB7XG4gICAgbGV0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG4gICAgbGV0IGhpZ2hsaWdodGVkID0gWy4uLnRhYnNdLmZpbmQoKHRhYikgPT4gdGFiLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXRhYicpKVxuICAgIGhpZ2hsaWdodGVkLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS10YWInKVxuICB9XG5cbiAgZnVuY3Rpb24gbWFrZVRvZG9zQ29udGFpbmVyKCl7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2Rvcy1jb250YWluZXInKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH1cbiAgICAgICAgXG4gIGZ1bmN0aW9uIG5ld1RvZG9CdXR0b24gKHByb2plY3QpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLWNvbnRhaW5lcicpO1xuICAgIGxldCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNyZWF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtYnV0dG9uJyk7XG4gICAgXG4gICAgaWYocHJvamVjdCAhPT0gcHJvamVjdHNbMF0pXG4gICAgICB7Y3JlYXRlQnV0dG9uLnRleHRDb250ZW50ID0gYCsgVG8gRG8gZm9yICR7cHJvamVjdC5uYW1lfWB9XG4gICAgICBlbHNlIHtjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnKyBUbyBEbyc7fVxuXG4gICAgY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY3JlYXRlVG9kb0Zvcm0oY3JlYXRlQnV0dG9uLCBwcm9qZWN0KVxuICAgICAgY3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NyZWF0ZS1idXR0b24nKVxuICAgICAgbmV3VG9kb0J1dHRvbihwcm9qZWN0KVxuICAgIH0sIHtvbmNlIDogdHJ1ZX0pO1xuICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoY3JlYXRlQnV0dG9uLCBjb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cblxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS1BQk9WRTogc2l0ZSBlbGVtZW50cyAtLS0tLS0tLS0tLS0tLS0tIEJFTE9XOiB0b2RvcyBlbGVtZW50cyAtLS0tLS0tLS0tLS0tLS0tLy9cblxuICBmdW5jdGlvbiB0b2RvQ29udGFpbmVyICgpIHtcbiAgICBsZXQgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInLCAnZWRpdGFibGUnKVxuICAgIHJldHVybiB0b2RvQ29udGFpbmVyXG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHRvZG9UaXRsZSAodG9kbykge1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKTtcbiAgICBpZih0b2RvKXt0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8ubmFtZX1cbiAgICByZXR1cm4gdGl0bGVcbiAgfVxuICBcbiAgZnVuY3Rpb24gdG9kb0Rlc2NyaXB0aW9uICh0b2RvKSB7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjcmlwdGlvbicpO1xuICAgIGlmKHRvZG8pe2Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjfVxuICAgIHJldHVybiBkZXNjcmlwdGlvblxuICB9XG5cbiAgZnVuY3Rpb24gZHVlRGF0ZSh0b2RvKXtcbiAgICBsZXQgZHVyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1cmEuY2xhc3NMaXN0LmFkZCgnZHVlLWR1cmF0aW9uJyk7XG4gICAgaWYodG9kby5kdWUgIT0gXCJcIikge2R1cmEudGV4dENvbnRlbnQgPSBmb3JtYXRUb2RvRGF0ZSh0b2RvKX1cbiAgICByZXR1cm4gZHVyYVxuICAgIFxuICAgIGZ1bmN0aW9uIGZvcm1hdFRvZG9EYXRlKHRvZG8pe1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIGxldCBkdXJhdGlvbiA9IGludGVydmFsVG9EdXJhdGlvbih7XG4gICAgICAgIHN0YXJ0OiBub3csXG4gICAgICAgIGVuZDogcGFyc2VJU08oYCR7dG9kby5kdWV9YClcbiAgICAgIH0pO1xuICAgICAgbGV0IGRhdGVTdHJpbmcgPSBcIlwiXG4gICAgICBcbiAgICAgIGlmKGR1cmF0aW9uLnllYXJzICE9PSAwKXtcbiAgICAgICAgZGF0ZVN0cmluZyA9IGRhdGVTdHJpbmcuY29uY2F0KGAke2R1cmF0aW9uLnllYXJzfSB5ZWFyYClcbiAgICAgIH1cbiAgICAgIGlmKGR1cmF0aW9uLm1vbnRocyAhPT0gMCAmJiBkdXJhdGlvbi55ZWFycyA9PT0gMCl7XG4gICAgICAgIGRhdGVTdHJpbmcgPSBkYXRlU3RyaW5nLmNvbmNhdChgJHtkdXJhdGlvbi5tb250aHN9IG1vbnRoYClcbiAgICAgIH0gIFxuICAgICAgaWYoZHVyYXRpb24uZGF5cyAhPT0gMCAmJiBkdXJhdGlvbi55ZWFycyA9PT0gMCAmJiBkdXJhdGlvbi5tb250aHMgPT09IDApe1xuICAgICAgICBkYXRlU3RyaW5nID0gZGF0ZVN0cmluZy5jb25jYXQoYCR7ZHVyYXRpb24uZGF5c30gZGF5YClcbiAgICAgIH1cbiAgICAgIGlmKGR1cmF0aW9uLmhvdXJzICE9PSAwICYmIGR1cmF0aW9uLnllYXJzID09PSAwICYmIGR1cmF0aW9uLm1vbnRocyA9PT0gMCAmJiBkdXJhdGlvbi5kYXlzID09PSAwKXtcbiAgICAgICAgZGF0ZVN0cmluZyA9IGRhdGVTdHJpbmcuY29uY2F0KGAke2R1cmF0aW9uLmhvdXJzfSBob3VyYClcbiAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBwbHVyYWxpemUgKCl7XG4gICAgICAgIGlmKHBhcnNlSW50KGRhdGVTdHJpbmcpID4gMSl7XG4gICAgICAgICAgZGF0ZVN0cmluZyA9IGRhdGVTdHJpbmcuY29uY2F0KCdzJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgcGx1cmFsaXplKGRhdGVTdHJpbmcpXG5cbiAgICAgIHJldHVybiBkYXRlU3RyaW5nXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZWRpdEljb24ocHJvamVjdCkge1xuICAgIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LWljb24nKTtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWNvbi5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3RvZG8tY29udGFpbmVyJyk7XG4gICAgICBlZGl0VG9kb0Zvcm0oaWNvbi5wYXJlbnRFbGVtZW50LCBwcm9qZWN0KVxuICAgIH0pO1xuICAgICAgcmV0dXJuIGljb25cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrQm94IChvYmplY3QpIHtcbiAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gICAgYm94LnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCBgJHtvYmplY3Qua2V5fWApXG4gICAgYm94LnN0eWxlLmJvcmRlckNvbG9yID0gYCR7b2JqZWN0LmNvbG9yfWBcbiAgICBcblxuICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRyYXdDaGVjayhib3gpO1xuICAgICAgYm94LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtaWNvbicpLnJlbW92ZSgpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGJveC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgYm94LnBhcmVudEVsZW1lbnQuc3R5bGUuYm9yZGVyID0gJ25vbmUnXG4gICAgICB9LCAyNTApO1xuXG4gICAgICBsZXQgcHJvamVjdCA9IGZpbmRQcm9qZWN0T2JqKG9iamVjdC5wcm9qZWN0LmtleSlcbiAgICAgIGxldCBpbmRleCA9IHByb2plY3QudG9kb3MuZmluZEluZGV4KChlKSA9PiBlLmtleSA9PSBib3guZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpKTtcbiAgICAgIHByb2plY3QudG9kb3Muc3BsaWNlKGluZGV4LCAxKVxuICAgICAgc3RvcmVMb2NhbGx5KClcbiAgICAgIFxuICAgIH0sIHtvbmNlIDogdHJ1ZX0pO1xuICAgIHJldHVybiBib3hcbiAgfVxuXG4gIFxuICBleHBvcnR7bWFrZUhlYWRlciwgbWFrZVRhYnNCYXIsIG1ha2VUYWJzSGVhZGVyLCBtYWluVGFiLCBuZXdUYWJCdXR0b24sIG5ld1RhYiwgdGFiVGl0bGUsIG1ha2VUb2Rvc0NvbnRhaW5lciwgbmV3VG9kb0J1dHRvbiwgZWRpdEljb24sIHRvZG9Db250YWluZXIsIHRvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCBkdWVEYXRlLCBjaGVja0JveCwgaGlnaGxpZ2h0VGFiLCByZW1vdmVIaWdobGlnaHR9IiwiaW1wb3J0IHtuZXdUb2RvLCBmaW5kVG9kb09iaiwgZWRpdFRvZG99IGZyb20gJy4vdG9kb3MuanMnXG5pbXBvcnQge2VkaXRUb0RPTX0gZnJvbSAnLi9kb21pbmRleC5qcydcbmltcG9ydCB7Y3JlYXRlUHJvamVjdCwgZmluZFByb2plY3RPYmosIHN0b3JlTG9jYWxseX0gZnJvbSAnLi9wcm9qZWN0cy5qcydcbmltcG9ydCB7bmV3VGFiLCBuZXdUYWJCdXR0b24sIHRhYlRpdGxlfSBmcm9tICcuL2RvbWVsZW1lbnRzLmpzJ1xuaW1wb3J0IHthZGRJY29uc30gZnJvbSAnLi9wcm9qZWN0c29wdGlvbnMuanMnXG5cblxuXG5mdW5jdGlvbiB0aXRsZUlucHV0ICh2YWx1ZSkge1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZS1pbnB1dCcpO1xuICAgIGlmKHZhbHVlKSBcbiAgICB7aW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gaW5wdXRcbiAgfVxuXG5cbiAgZnVuY3Rpb24gZGVzY3JpcHRpb25JbnB1dCAodmFsKXtcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24taW5wdXQnKTtcbiAgICBpZih2YWwpIFxuICAgIHtpbnB1dC52YWx1ZSA9IHZhbFxuICAgIH0gXG4gICAgcmV0dXJuIGlucHV0XG4gIH1cblxuICBmdW5jdGlvbiBkdWVEYXRlSW5wdXQgKGRhdGUpe1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkZWFkbGluZS1pbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRldGltZS1sb2NhbCcpO1xuICAgIGlmKGRhdGUpe2lucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRlKTtcbiAgICB9IFxuICAgICByZXR1cm4gaW5wdXRcbiAgfVxuXG4gIGZ1bmN0aW9uIHN1Ym1pdFRvZG9CdXR0b24gKGVsZW1lbnQsIHByb2plY3QpIHtcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gXCJBRERcIjtcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWJ1dHRvbicpXG4gICAgbGV0IGljb24gPSBidG4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdjaGVjay1pY29uJywgJ2ljb24nKVxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN1Ym1pdFRvZG9Gb3JtKGVsZW1lbnQsIHByb2plY3QpKVxuICAgIHJldHVybiBidG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHN1Ym1pdFByb2plY3RCdXR0b24oKXtcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1idXR0b24nKTtcbiAgICBsZXQgaWNvbiA9IGJ0bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdjaGVjay1pY29uJywgJ2ljb24nKTtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUtaW5wdXQnKS52YWx1ZSAhPT0gXCJcIil7XG4gICAgICAgICAgICBzdWJtaXRQcm9qZWN0Rm9ybSgpO1xuICAgICAgICAgICAgYnRuLnBhcmVudEVsZW1lbnQucmVtb3ZlKClcbiAgICAgICAgICAgIG5ld1RhYkJ1dHRvbigpXG4gICAgICAgICAgICB9IGVsc2Uge2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUtaW5wdXQnKS5wbGFjZWhvbGRlciA9ICdOQU1FIE5FRURFRCEnfVxuICAgICAgICB9ICk7XG4gICAgcmV0dXJuIGJ0blxuICB9XG5cbiAgZnVuY3Rpb24gcHJvamVjdEVkaXRCdXR0b24gKCkge1xuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgaWNvbiA9IGJ0bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdjaGVjay1pY29uJywgJ2ljb24nKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWJ1dHRvbicpXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gYnRuLnBhcmVudEVsZW1lbnRcbiAgICAgICAgICAgIGxldCBvYmogPSBmaW5kUHJvamVjdE9iaihlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1rZXknKSlcbiAgICAgICAgICAgIG9iai5uYW1lID0gZWxlbWVudC5maXJzdENoaWxkLnZhbHVlO1xuICAgICAgICAgICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHRpdGxlID0gZWxlbWVudC5hcHBlbmRDaGlsZCh0YWJUaXRsZShvYmoubmFtZSwgb2JqLmtleSkpO1xuICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLXdyYXBwZXInKS5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3RzLWJlaW5nLWVkaXRlZCcpKXtcbiAgICAgICAgICAgICAgICBhZGRJY29ucyhlbGVtZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGl0bGUuY2xpY2soKVxuICAgICAgICB9KVxuICAgIHJldHVybiBidG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbEJ1dHRvbiAocHJvamVjdCl7XG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiUkVNT1ZFXCJcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWJ1dHRvbicpXG4gICAgbGV0IGljb24gPSBidG4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtaWNvbicsICdpY29uJylcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYoYnRuLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09IFwiY3JlYXRlLXByb2plY3QtZm9ybVwiKXtcbiAgICAgICAgbmV3VGFiQnV0dG9uKClcbiAgICAgICAgYnRuLnBhcmVudEVsZW1lbnQucmVtb3ZlKClcbiAgICB9IGVsc2Uge1xuICAgICAgICBidG4ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXG4gICAgfVxuICAgIHByb2plY3QudG9kb3Muc3BsaWNlKHByb2plY3QudG9kb3MuaW5kZXhPZihidG4ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LCBwcm9qZWN0KSwgMSk7XG4gICAgc3RvcmVMb2NhbGx5KCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJ0blxuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsRWRpdEJ1dHRvbihlbGVtZW50LCBwcm9qZWN0KXtcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gJ1VORE8nO1xuICAgIGxldCBpY29uID0gYnRuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ3VuZG8taWNvbicsICdpY29uJylcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGVkaXRUb0RPTShlbGVtZW50LCBwcm9qZWN0KVxuICAgIH0pO1xuICAgIHJldHVybiBidG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHVuZG9Qcm9qZWN0RWRpdEJ1dHRvbihlbGVtZW50LCBvYmope1xuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZXQgaWNvbiA9IGJ0bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKCd1bmRvLWljb24nLCAnaWNvbicpO1xuICAgIGxldCBpbmRleCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYnMtYmFyJykuY2hpbGROb2RlcykuaW5kZXhPZihlbGVtZW50KTtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGJ0bi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICBuZXdUYWIob2JqLm5hbWUsIG9iai5rZXksIGluZGV4KVxuICAgICAgICBsZXQgdGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEta2V5PScke29iai5rZXl9J11gKVxuICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRhYicpO1xuICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtd3JhcHBlcicpLmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdHMtYmVpbmctZWRpdGVkJykpe2FkZEljb25zKHRhYil9XG4gICAgICAgIFxuICAgIH0pXG4gICAgcmV0dXJuIGJ0blxuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsQWRkQnV0dG9uKHNtYWxsKSB7XG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGlmKHNtYWxsICE9PSAnc21hbGwnKXtidG4udGV4dENvbnRlbnQgPSAnVU5ETyd9XG4gICAgZWxzZXtidG4uc3R5bGUuYm9yZGVyID0gJy4xNXJlbSBzb2xpZCB3aGl0ZSd9XG4gICAgbGV0IGljb24gPSBidG4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgIGljb24uY2xhc3NMaXN0LmFkZCgndW5kby1pY29uJywgJ2ljb24nKVxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYoc21hbGwgIT09ICdzbWFsbCcpe1xuICAgICAgICAgICAgYnRuLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgYnRuLnBhcmVudEVsZW1lbnQucmVtb3ZlKClcbiAgICAgICAgICAgIG5ld1RhYkJ1dHRvbigpO307ICAgICAgXG4gICAgfSk7XG4gICAgcmV0dXJuIGJ0blxuICB9XG5cbiAgZnVuY3Rpb24gYnV0dG9uc0NvbnRhaW5lcigpe1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucy1jb250YWluZXInKVxuICAgIHJldHVybiBjb250YWluZXJcbiAgfVxuXG4gIGZ1bmN0aW9uIGxhYmVsIChpbnB1dCkge1xuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGV0IGlkU3RyaW5nID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaWRTdHJpbmcpXG4gICAgbGV0IHRpdGxlU3RyaW5nID0gaWRTdHJpbmcuc2xpY2UoMCwgaWRTdHJpbmcuaW5kZXhPZignLWlucHV0JykpO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoYCR7dGl0bGVTdHJpbmd9LWxhYmVsYCwgJ2xhYmVsJylcbiAgICBsZXQgY2FwU3RyaW5nID0gdGl0bGVTdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aXRsZVN0cmluZy5zbGljZSgxKSsgJzonO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gY2FwU3RyaW5nO1xuICAgIGxldCBjb250YWluZXIgPSBpbnB1dC5wYXJlbnROb2RlO1xuICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUobGFiZWwsIGlucHV0KTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLUFCT1ZFOiBmb3JtIGVsZW1lbnRzIC0tLS0tLS0tLS0tLS0tLS0gQkVMT1c6IGZvcm0gbG9naWMgLS0tLS0tLS0tLS0tLS0tLS8vXG5cblxuZnVuY3Rpb24gZWRpdFRvZG9Gb3JtKGVsZW1lbnQsIHByb2plY3Qpe1xuICAgIGxldCBvYmogPSBmaW5kVG9kb09iaihlbGVtZW50LCBwcm9qZWN0KTtcbiAgICBjb25zdCBuYW1lID0gb2JqLm5hbWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBvYmouZGVzYztcbiAgICBjb25zdCBkdWUgPSBvYmouZHVlO1xuICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIHJlbmRlckZvcm0oZWxlbWVudCwgbmFtZSwgZGVzY3JpcHRpb24sIGR1ZSwgcHJvamVjdCk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVUb2RvRm9ybSAoZWxlbWVudCwgcHJvamVjdCkge1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHJlbmRlckZvcm0oZWxlbWVudCwgbnVsbCwgbnVsbCwgbnVsbCwgcHJvamVjdClcbn07XG5cbmZ1bmN0aW9uIHJlbmRlckZvcm0gKGVsZW1lbnQsIG5hbWUsIGRlc2NyaXB0aW9uLCBkdWUsIHByb2plY3QpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JlaW5nLWVkaXRlZCcpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dChuYW1lKSk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KGRlc2NyaXB0aW9uKSk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQoZHVlKSk7XG4gICAgbGV0IGJ0bkNvbnRhaW5lciA9IGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcigpKVxuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRUb2RvQnV0dG9uKGVsZW1lbnQsIHByb2plY3QpKTtcbiAgICBpZihuYW1lKXtcbiAgICAgICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEVkaXRCdXR0b24oZWxlbWVudCwgcHJvamVjdCkpXG4gICAgICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24ocHJvamVjdCkpfTtcbiAgICBpZihuYW1lID09IG51bGwpIHtcbiAgICAgICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEFkZEJ1dHRvbigpKTt9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLWlucHV0JykuZm9jdXMoKTtcbiAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCB0ZXh0YXJlYScpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIHN1Ym1pdFdpdGhFbnRlcihlbGVtZW50KTtcbiAgICAgICAgbGFiZWwoZWxlbWVudCk7XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiBzdWJtaXRUb2RvRm9ybShlbGVtZW50LCBwcm9qZWN0KSB7XG4gICAgY29uc3QgbmFtZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLWlucHV0JykudmFsdWVcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uLWlucHV0JykudmFsdWVcbiAgICBsZXQgZHVlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZGVhZGxpbmUtaW5wdXQnKS52YWx1ZVxuICAgIGlmKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0YWJsZScpICYmIG5hbWUgIT09IFwiXCIpe1xuICAgICAgICBlZGl0VG9kbyhlbGVtZW50LCBuYW1lLCBkZXNjcmlwdGlvbiwgZHVlLCBwcm9qZWN0KTtcbiAgICAgICAgZWRpdFRvRE9NKGVsZW1lbnQsIHByb2plY3QpO1xuICAgIH0gZWxzZSBpZiAobmFtZSAhPT0gXCJcIil7XG4gICAgICAgIG5ld1RvZG8obmFtZSwgZGVzY3JpcHRpb24sIGR1ZSwgcHJvamVjdCk7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtaW5wdXQnKS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ3JlcXVpcmVkJyk7XG4gICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLWlucHV0JykuY2xhc3NMaXN0LmFkZCgncmVxdWlyZWQnKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLWlucHV0JykuY2xhc3NMaXN0LnJlbW92ZSgncmVxdWlyZWQnKVxuICAgICAgICB9LCAzMDApO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIG5ld1Byb2plY3ROYW1lKGVsZW1lbnQpe1xuICAgIGVsZW1lbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NyZWF0ZS1wcm9qZWN0LWJ1dHRvbicpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLXByb2plY3QtZm9ybScpO1xuICAgIGxldCBpbnB1dCA9IHRpdGxlSW5wdXQoKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ05hbWUgeW91ciBQcm9qZWN0Jyk7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lLWlucHV0Jyk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChzdWJtaXRQcm9qZWN0QnV0dG9uKCkpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FuY2VsQWRkQnV0dG9uKCdzbWFsbCcpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtaW5wdXQnKS5mb2N1cygpO1xuICAgIHN1Ym1pdFdpdGhFbnRlcihlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gZWRpdFByb2plY3ROYW1lIChlbGVtZW50LCBvYmope1xuICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Lmxhc3RDaGlsZCk7XG4gICAgfTtcbiAgICBsZXQgbmFtZUZpZWxkID0gZWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KG9iai5uYW1lKSk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0RWRpdEJ1dHRvbigpKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHVuZG9Qcm9qZWN0RWRpdEJ1dHRvbihlbGVtZW50LCBvYmopKTtcbiAgICBzdWJtaXRXaXRoRW50ZXIobmFtZUZpZWxkKTtcbn07XG5cbmZ1bmN0aW9uIHN1Ym1pdFByb2plY3RGb3JtICgpe1xuICAgIGxldCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZS1pbnB1dCcpLnZhbHVlO1xuICAgIGNyZWF0ZVByb2plY3QobmFtZSk7XG59O1xuXG5mdW5jdGlvbiBzdWJtaXRXaXRoRW50ZXIoZWxlbWVudCl7XG4gICAgXG4gICAgdmFyIGtleXNQcmVzc2VkID0ge307XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgIGtleXNQcmVzc2VkW2Uua2V5XSA9IHRydWU7XG4gICAgfSlcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XG4gICAgICAgIGRlbGV0ZSBrZXlzUHJlc3NlZFtlLmtleV1cbiAgICB9KVxuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIGlmKGUua2V5ID09PSBcIkVudGVyXCIgJiYgIWtleXNQcmVzc2VkLlNoaWZ0KXtcbiAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnV0dG9uJykuY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuXG5leHBvcnQge3RpdGxlSW5wdXQsIGRlc2NyaXB0aW9uSW5wdXQsIHN1Ym1pdFRvZG9CdXR0b24sIHJlbmRlckZvcm0sIGVkaXRUb2RvRm9ybSwgY3JlYXRlVG9kb0Zvcm0sIHN1Ym1pdFRvZG9Gb3JtLCBlZGl0UHJvamVjdE5hbWUsIG5ld1Byb2plY3ROYW1lLCBzdWJtaXRXaXRoRW50ZXJ9IiwiaW1wb3J0IHttYWtlSGVhZGVyLCBtYWtlVGFic0JhciwgbWFrZVRhYnNIZWFkZXIsIG1haW5UYWIsIG5ld1RhYkJ1dHRvbiwgbWFrZVRvZG9zQ29udGFpbmVyLCBuZXdUb2RvQnV0dG9uLCBlZGl0SWNvbiwgdG9kb0NvbnRhaW5lciwgdG9kb1RpdGxlLCB0b2RvRGVzY3JpcHRpb24sIGR1ZURhdGUsIGNoZWNrQm94fSBmcm9tICcuL2RvbWVsZW1lbnRzLmpzJ1xuaW1wb3J0IHtmaW5kVG9kb09ian0gZnJvbSAnLi90b2Rvcy5qcydcbmltcG9ydCB7cHJvamVjdHMsIHN0b3JlTG9jYWxseX0gZnJvbSAnLi9wcm9qZWN0cy5qcydcblxubWFrZUhlYWRlcigpXG5tYWtlVGFic0hlYWRlcigpXG5tYWtlVGFic0JhcigpXG5cblxubWFpblRhYigpXG5uZXdUYWJCdXR0b24oKVxuXG5cbm1ha2VUb2Rvc0NvbnRhaW5lcigpIFxubmV3VG9kb0J1dHRvbihwcm9qZWN0c1swXSlcblxuXG5mdW5jdGlvbiBuZXdUb0RPTSAodG9kbywgcHJvamVjdCl7XG4gICAgbGV0IHRvRG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLWNvbnRhaW5lcicpO1xuICAgIGxldCBuZXdUb2RvRWxlbWVudCA9IHRvZG9Db250YWluZXIoKTtcbiAgICB0b0RPTShuZXdUb2RvRWxlbWVudCwgdG9kbywgcHJvamVjdClcbiAgICB0b0Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUb2RvRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUb0RPTSAoZWxlbWVudCwgcHJvamVjdCkge1xuICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2JlaW5nLWVkaXRlZCcpO1xuICAgIGxldCBtZSA9IGZpbmRUb2RvT2JqKGVsZW1lbnQsIHByb2plY3QpO1xuICAgIHRvRE9NKGVsZW1lbnQsIG1lLCBwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gdG9ET00oZWxlbWVudCwgdG9kb09iaiwgcHJvamVjdCl7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgYCR7dG9kb09iai5rZXl9YClcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoZWNrQm94KHRvZG9PYmopKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRvZG9UaXRsZSh0b2RvT2JqKSk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24odG9kb09iaikpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZHVlRGF0ZSh0b2RvT2JqKSk7XG4gICAgZWxlbWVudC5zdHlsZS5ib3JkZXIgPSBgIDJweCBzb2xpZCAke3Byb2plY3QuY29sb3J9YFxuICAgIGlmIChwcm9qZWN0KXtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChlZGl0SWNvbihwcm9qZWN0KSk7XG4gICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChlZGl0SWNvbigpKTsgIFxuICAgIH07IFxuXG4gICAgc3RvcmVMb2NhbGx5KClcbn1cblxuZXhwb3J0IHt0b0RPTSwgZWRpdFRvRE9NLCBuZXdUb0RPTX0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7bmV3VG9kb30gZnJvbSAnLi90b2Rvcyc7XG5cbmltcG9ydCB7cHJvamVjdHMsIGxvYWRMb2NhbFByb2plY3RzLCByZW5kZXJQcm9qZWN0c30gZnJvbSAnLi9wcm9qZWN0cy5qcydcbmltcG9ydCB7cGVuY2lsRHJhdywgYWRkU3ZnfSBmcm9tICcuL3BlbmNpbCdcbmltcG9ydCB7cmVuZGVyQWxsVG9kb3N9IGZyb20gJy4vdG9kb3MnXG5cbmxvYWRMb2NhbFByb2plY3RzKCk7XG5yZW5kZXJQcm9qZWN0cygpO1xucmVuZGVyQWxsVG9kb3MoKTtcblxuXG5cblxuIiwiZnVuY3Rpb24gcmFuZG9tS2V5KCkge1xubGV0IGtleSA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDcpO1xucmV0dXJuIGtleVxufVxuXG5leHBvcnQge3JhbmRvbUtleX0iLCJmdW5jdGlvbiBwZW5jaWxEcmF3IChzdHJva2VDbGFzcywgcGF0aCwgdGFyZ2V0LCB3aWR0aCkge1xuICAgIGxldCBuZXdTdHJva2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCAncGF0aCcpO1xuICAgIG5ld1N0cm9rZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnY2xhc3MnLCBzdHJva2VDbGFzcyk7XG4gICAgbmV3U3Ryb2tlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdkJywgcGF0aCk7XG4gICAgbmV3U3Ryb2tlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdmaWxsJywgJ25vbmUnKTtcbiAgICBuZXdTdHJva2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2ZpbGwtcnVsZScsICdldmVub2RkJyk7XG4gICAgbmV3U3Ryb2tlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdvcGFjaXR5JywgJy43Jyk7XG4gICAgbmV3U3Ryb2tlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdzdHJva2UnLCAnIzAwMDAwMCcpO1xuICAgIG5ld1N0cm9rZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnc3Ryb2tlLWxpbmVjYXAnLCAncm91bmQnKTtcbiAgICBuZXdTdHJva2Uuc2V0QXR0cmlidXRlTlMobnVsbCwgJ3N0cm9rZS1saW5lam9pbicsICdyb3VuZCcpO1xuICAgIG5ld1N0cm9rZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAnc3Ryb2tlLXdpZHRoJywgd2lkdGgpO1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChuZXdTdHJva2UpO1xufVxuXG5mdW5jdGlvbiBhZGRTdmcgKHRhcmdldCkge1xubGV0IG5ld1N2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG5sZXQgdGVtcGxhdGVTdmcgPSBgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIGhlaWdodD1cIjIzcHhcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCIgc3R5bGU9XCJmaWxsLXJ1bGU6bm9uemVybztjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7XCIgdmVyc2lvbj1cIjEuMVwiIHdpZHRoPVwiMjRweFwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCJgXG4gICAgdGVtcGxhdGVTdmcuc3BsaXQoXCIgXCIpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgbGV0IGF0dHJWYWwgPSBlbGVtZW50LnNwbGl0KFwiPVwiKTtcbiAgICBsZXQgYXR0ciA9IGF0dHJWYWxbMF07XG4gICAgbGV0IHZhbCA9IGF0dHJWYWxbMV0uc2xpY2UoMSwgLTEpO1xuICAgIG5ld1N2Zy5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgYCR7dGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1rZXknKX1gKVxuICAgIG5ld1N2Zy5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKTtcbiAgICBuZXdTdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuICAgIH0pO1xudGFyZ2V0LmFwcGVuZENoaWxkKG5ld1N2Zyk7XG59O1xuXG5mdW5jdGlvbiBkcmF3Q2hlY2sgKHRhcmdldCkge1xuICAgIGxldCBnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgJ2cnKTtcbiAgICBwZW5jaWxEcmF3KCdjaGVja1N0cm9rZScsIFwiTSAxLjI5NjE3IDEzLjg4ODggQyAxLjQxNzYxIDEzLjk0OTUgMi4xNzE4NSAxNS4zOTg5IDIuMjgwMDYgMTUuNTg4MyBDIDMuMDE5NDYgMTYuODgyMiAzLjY5NjcgMTguNDgyMyA0LjAwOTMzIDE5Ljk0MTMgQyA0LjA2NTMzIDIwLjIwMjYgNC40NDQyMSAyMS45Njg3IDQuNjM1NDQgMjEuOTY4NyBDIDQuNzkyMDYgMjEuOTY4NyA1LjI2MDA4IDIxLjAzMTcgNS4zNTEgMjAuODk1MyBDIDUuOTgwNSAxOS45NTExIDYuNzgxMDQgMTkuMDY1MSA3LjUyNzQ5IDE4LjIxMiBDIDEwLjgxMzYgMTQuNDU2NCAxNC4xNDIxIDEwLjc3NDQgMTcuNTc1MSA3LjE1MDY2IEMgMTguNjQ4IDYuMDE4MTYgMTkuNjkyOCA0Ljg1NDA0IDIwLjc5NTEgMy43NTE3NiBDIDIwLjg3MTQgMy42NzU0NiAyMS41NzQ3IDIuOTUxMTcgMjEuNjI5OSAzLjAwNjM4IEMgMjEuNjcwMiAzLjA0NjYgMjEuNjM2MyAzLjMyMzc0IDIxLjY1OTggMy4zOTM5OFwiLCBnLCA0LjE0NTIpO1xuICAgIGFkZFN2Zyh0YXJnZXQpO1xuICAgIGxldCB0YXJnZXRTdmcgPSB0YXJnZXQucXVlcnlTZWxlY3Rvcignc3ZnJyk7XG4gICAgdGFyZ2V0U3ZnLmFwcGVuZENoaWxkKGcpXG59O1xuXG5leHBvcnQge3BlbmNpbERyYXcsIGFkZFN2ZywgZHJhd0NoZWNrfVxuIiwiaW1wb3J0IHtpbnN0YW50aWF0ZVRvZG8sIHJlbmRlckFsbFRvZG9zfSBmcm9tICcuL3RvZG9zLmpzJ1xuaW1wb3J0IHtuZXdUYWJ9IGZyb20gJy4vZG9tZWxlbWVudHMuanMnXG5pbXBvcnQge3JhbmRvbUtleX0gZnJvbSAnLi9rZXlnZW5lcmF0b3IuanMnXG5pbXBvcnQge3BhcnNlLCBzdHJpbmdpZnksIHRvSlNPTiwgZnJvbUpTT059IGZyb20gJ2ZsYXR0ZWQnO1xuXG5sZXQgcHJvamVjdHMgPSBbXTtcblxuZnVuY3Rpb24gaW5zdGFudGlhdGVQcm9qZWN0KG5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBrZXk6IHJhbmRvbUtleSgpLFxuICAgICAgICB0b2RvczogW10sXG4gICAgICAgIGNvbG9yOiB0YWJDb2xvcigpXG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIHRhYkNvbG9yICgpIHtcbiAgICBsZXQgY29sb3JzID0gWycjRkZGRkZGJywgJyM5N0MxQTknLCAnI0Y2RUFDMicsICcjRkZCOEIxJywgJyNGRkRBQzEnLCcjOUFCN0QzJyAsJyNBM0UxREMnLCAnI0RGQ0NGMSddO1xuICAgIGxldCBhc3NpZ25lZCA9IHByb2plY3RzLm1hcChmdW5jdGlvbihwcm9qKXtcbiAgICAgICAgcmV0dXJuIHByb2ouY29sb3JcbiAgICB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZighYXNzaWduZWQuaW5jbHVkZXMoY29sb3JzW2ldKSl7XG4gICAgICAgICAgICB2YXIgbmV3Q29sb3IgPSBjb2xvcnNbaV1cbiAgICAgICAgICAgIGlmKG5ld0NvbG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0NvbG9yXG4gICAgICAgICAgICB9IGVsc2UgcmV0dXJuICcjRkZGRkZGJ1xuICAgICAgICB9O1xuICAgIH07XG59O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSl7XG4gICAgbGV0IHByb2plY3QgPSBpbnN0YW50aWF0ZVByb2plY3QobmFtZSk7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBuZXdUYWIobmFtZSwgcHJvamVjdC5rZXkpO1xuICAgIHN0b3JlTG9jYWxseSgpXG59XG5cbmZ1bmN0aW9uIGZpbmRQcm9qZWN0T2JqKGRhdGFLZXkpe1xuICAgIGxldCBtZSA9IHByb2plY3RzLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LmtleSA9PSBkYXRhS2V5KTtcbiAgICByZXR1cm4gbWVcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMgKCkge1xuICAgIHByb2plY3RzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmKGVsZW1lbnQubmFtZSAhPT0gXCJBbGxcIil7XG4gICAgICAgICAgICBuZXdUYWIoZWxlbWVudC5uYW1lLCBlbGVtZW50LmtleSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYnMtYmFyJykuY2hpbGROb2Rlcy5sZW5ndGgtMSlcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIFxucHJvamVjdHMucHVzaChpbnN0YW50aWF0ZVByb2plY3QoJ0FsbCcpKTtcblxuZnVuY3Rpb24gc3RvcmVMb2NhbGx5KCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibXlQcm9qZWN0c1wiLCBzdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICBjb25zb2xlLmxvZyhwYXJzZShsb2NhbFN0b3JhZ2UubXlQcm9qZWN0cykpXG4gICAgY29uc29sZS5sb2cocHJvamVjdHMpXG59XG5cblxuZnVuY3Rpb24gbG9hZExvY2FsUHJvamVjdHMgKCkge1xuICAgIGlmKGxvY2FsU3RvcmFnZS5teVByb2plY3RzKXtcbiAgICBwcm9qZWN0cyA9IHBhcnNlKGxvY2FsU3RvcmFnZS5teVByb2plY3RzKVxuICAgIH1cbn1cblxuXG5cblxuXG5leHBvcnQge3Byb2plY3RzLCBpbnN0YW50aWF0ZVByb2plY3QsIGNyZWF0ZVByb2plY3QsIGZpbmRQcm9qZWN0T2JqLCBzdG9yZUxvY2FsbHksIGxvYWRMb2NhbFByb2plY3RzLCByZW5kZXJQcm9qZWN0c30iLCJpbXBvcnQge2ZpbmRQcm9qZWN0T2JqLCBwcm9qZWN0cywgc3RvcmVMb2NhbGx5fSBmcm9tICcuL3Byb2plY3RzLmpzJ1xuaW1wb3J0IHtyZW5kZXJBbGxUb2Rvc30gZnJvbSAnLi90b2Rvcy5qcydcbmltcG9ydCB7bmV3VG9kb0J1dHRvbn0gZnJvbSAnLi9kb21lbGVtZW50cy5qcydcbmltcG9ydCB7ZWRpdFByb2plY3ROYW1lfSBmcm9tICcuL2RvbWZvcm1zLmpzJ1xuXG5mdW5jdGlvbiBvcGVuUHJvamVjdE9wdGlvbnMgKCl7XG4gICAgbGV0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG4gICAgdGFicy5mb3JFYWNoKGVsZW1lbnQgPT4ge2FkZEljb25zKGVsZW1lbnQpfSk7XG4gICAgbGV0IGVkaXRQcm9qZWN0c0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0cy1pY29uJyk7XG4gICAgZWRpdFByb2plY3RzSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUHJvamVjdE9wdGlvbnMsIHtvbmNlOiB0cnVlfSk7XG4gICAgY2xpY2tPdXRzaWRlKClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtd3JhcHBlcicpLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLWJlaW5nLWVkaXRlZCcpO1xufTtcblxuZnVuY3Rpb24gY2xpY2tPdXRzaWRlICgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlVGhyb3VnaENsaWNrKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VUaHJvdWdoQ2xpY2sgKGV2ZW50KSB7XG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtd3JhcHBlcicpO1xuICAgIGNvbnN0IHdpdGhpbkJvdW5kYXJpZXMgPSBldmVudC5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyh3cmFwcGVyKVxuICAgICAgICBpZiAoIXdpdGhpbkJvdW5kYXJpZXMpIHtcbiAgICAgICAgICBjbG9zZVByb2plY3RPcHRpb25zKClcbiAgICAgICAgfSBcbn1cblxuXG5mdW5jdGlvbiBjbG9zZVByb2plY3RPcHRpb25zKCkgeyAgICBcbiAgICBsZXQgZWRpdFByb2plY3RzSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3RzLWljb24nKTtcbiAgICBsZXQgaWNvbkhvbGRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaWNvbi1ob2xkZXInKTtcbiAgICBpY29uSG9sZGVycy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIGVkaXRQcm9qZWN0c0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuUHJvamVjdE9wdGlvbnMsIHtvbmNlIDogdHJ1ZX0pO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUaHJvdWdoQ2xpY2spO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy13cmFwcGVyJykuY2xhc3NMaXN0LnJlbW92ZSgncHJvamVjdHMtYmVpbmctZWRpdGVkJyk7XG59XG5cbmZ1bmN0aW9uIGFkZEljb25zKHByb2plY3RUYWIpe1xuICAgIGNvbnN0IGljb25Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpY29uSG9sZGVyLmNsYXNzTGlzdC5hZGQoJ2ljb24taG9sZGVyJyk7XG4gICAgaWNvbkhvbGRlci5hcHBlbmRDaGlsZChlZGl0SWNvbigpKTtcbiAgICBpZighcHJvamVjdFRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ21haW50YWInKSl7aWNvbkhvbGRlci5hcHBlbmRDaGlsZChkZWxldGVJY29uKCkpfTtcbiAgICBwcm9qZWN0VGFiLmFwcGVuZENoaWxkKGljb25Ib2xkZXIpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVJY29uKCkge1xuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWljb24nLCAnaWNvbicpXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgZWxlbWVudCA9IGJ0bi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGxldCBvYmogPSBmaW5kUHJvamVjdE9iaihlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1rZXknKSk7XG4gICAgICAgIGxldCBteUluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihvYmopXG4gICAgICAgIHByb2plY3RzLnNwbGljZShteUluZGV4LCAxKVxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICByZW5kZXJBbGxUb2RvcygpO1xuICAgICAgICBzdG9yZUxvY2FsbHkoKVxuXG4gICAgICAgIC8vdGhlIGljb25zIHRyaWdnZXIgYm90aCB0aGUgcmVuZGVyVG9kb3MgZnVuY3Rpb24gZm9yIHRoZSB0YWIsIGFzIHdlbGwgYXMgdGhlIHRoZSBkZWxldGUgZnVuY3Rpb24sIGlzIHRoZXJlIGEgd2F5IHRvIHNlcGFyYXRlIHRoZW0/XG4gICAgfSk7XG4gICAgcmV0dXJuIGJ0blxufTtcblxuZnVuY3Rpb24gZWRpdEljb24oKSB7XG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LWljb24nKVxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBidG4ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBsZXQgb2JqID0gZmluZFByb2plY3RPYmooZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JykpO1xuICAgICAgICBlZGl0UHJvamVjdE5hbWUoZWxlbWVudCwgb2JqKTtcbiAgICAgICAgc3RvcmVMb2NhbGx5KCk7XG4gICAgfSlcbiAgICByZXR1cm4gYnRuXG59O1xuXG5leHBvcnQge29wZW5Qcm9qZWN0T3B0aW9ucywgY2xpY2tPdXRzaWRlLCBhZGRJY29uc30iLCJpbXBvcnQge25ld1RvRE9NLCBlZGl0VG9ET019IGZyb20gXCIuL2RvbWluZGV4LmpzXCI7XG5pbXBvcnQge3JhbmRvbUtleX0gZnJvbSAnLi9rZXlnZW5lcmF0b3IuanMnXG5pbXBvcnQge3Byb2plY3RzLCBzdG9yZUxvY2FsbHl9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQge25ld1RvZG9CdXR0b24sIGhpZ2hsaWdodFRhYiwgcmVtb3ZlSGlnaGxpZ2h0fSBmcm9tICcuL2RvbWVsZW1lbnRzLmpzJ1xuXG5cbmZ1bmN0aW9uIGluc3RhbnRpYXRlVG9kbyhuYW1lLCBkZXNjLCBkdWUsIHByb2opIHtcbiAgICBpZihwcm9qKXt2YXIgcHJvamVjdCA9IHByb2p9O1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2MsXG4gICAgICAgIGtleTogcmFuZG9tS2V5KCksXG4gICAgICAgIGR1ZSxcbiAgICAgICAgcHJvamVjdCxcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5ld1RvZG8obmFtZSwgZGVzYywgZHVlLCBwcm9qZWN0KSB7XG4gICAgbGV0IHRvZG8gPSBpbnN0YW50aWF0ZVRvZG8obmFtZSwgZGVzYywgZHVlLCBwcm9qZWN0KTtcbiAgICBwcm9qZWN0LnRvZG9zLnB1c2godG9kbyk7XG4gICAgbmV3VG9ET00odG9kbywgcHJvamVjdCk7XG4gICAgc3RvcmVMb2NhbGx5KClcbn07XG5cblxuZnVuY3Rpb24gZmluZFRvZG9PYmooZWxlbWVudCwgcHJvamVjdCl7XG4gICAgbGV0IGtleSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpO1xuICAgIHZhciBtZSA9IHByb2plY3QudG9kb3MuZmluZChlbGVtZW50ID0+IGVsZW1lbnQua2V5ID09IGtleSlcbiAgICByZXR1cm4gbWVcbn1cblxuZnVuY3Rpb24gZWRpdFRvZG8oZWxlbWVudCwgbmFtZSwgZGVzY3JpcHRpb24sIGR1ZSwgcHJvamVjdCl7XG4gICAgbGV0IG1lID0gZmluZFRvZG9PYmooZWxlbWVudCwgcHJvamVjdClcbiAgICBtZS5uYW1lID0gbmFtZTtcbiAgICBtZS5kZXNjID0gZGVzY3JpcHRpb247IFxuICAgIG1lLmR1ZSA9IGR1ZTtcbiAgICBzdG9yZUxvY2FsbHkoKVxufVxuXG5mdW5jdGlvbiBjbGVhclRvZG9zKCkge1xuICAgIGxldCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2Rvcy1jb250YWluZXInKVxuICAgIHdoaWxlICh0b2Rvc0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIHRvZG9zQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvZG9zQ29udGFpbmVyLmxhc3RDaGlsZCk7XG4gICAgICB9XG59XG5cbmNvbnN0IHJlbmRlckFsbFRvZG9zID0gKCkgPT4ge1xuICAgIGNsZWFyVG9kb3MoKVxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0LnRvZG9zLmZvckVhY2godG9kbyA9PiB7bmV3VG9ET00odG9kbywgcHJvamVjdCl9KSk7XG4gICAgbmV3VG9kb0J1dHRvbihwcm9qZWN0c1swXSk7XG4gICAgcmVtb3ZlSGlnaGxpZ2h0KClcbiAgICBoaWdobGlnaHRUYWIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYnMtYmFyJykuY2hpbGROb2Rlc1swXSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvZG9zKHByb2plY3Qpe1xuICAgIGNsZWFyVG9kb3MoKVxuICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCh0b2RvID0+IHtuZXdUb0RPTSh0b2RvLCBwcm9qZWN0KX0pO1xuICAgIG5ld1RvZG9CdXR0b24ocHJvamVjdClcbn1cblxuZXhwb3J0IHtpbnN0YW50aWF0ZVRvZG8sIG5ld1RvZG8sIGVkaXRUb2RvLCBmaW5kVG9kb09iaiwgcmVuZGVyVG9kb3MsIHJlbmRlckFsbFRvZG9zfSIsIi8qISAoYykgMjAyMCBBbmRyZWEgR2lhbW1hcmNoaSAqL1xuXG5jb25zdCB7cGFyc2U6ICRwYXJzZSwgc3RyaW5naWZ5OiAkc3RyaW5naWZ5fSA9IEpTT047XG5jb25zdCB7a2V5c30gPSBPYmplY3Q7XG5cbmNvbnN0IFByaW1pdGl2ZSA9IFN0cmluZzsgICAvLyBpdCBjb3VsZCBiZSBOdW1iZXJcbmNvbnN0IHByaW1pdGl2ZSA9ICdzdHJpbmcnOyAvLyBpdCBjb3VsZCBiZSAnbnVtYmVyJ1xuXG5jb25zdCBpZ25vcmUgPSB7fTtcbmNvbnN0IG9iamVjdCA9ICdvYmplY3QnO1xuXG5jb25zdCBub29wID0gKF8sIHZhbHVlKSA9PiB2YWx1ZTtcblxuY29uc3QgcHJpbWl0aXZlcyA9IHZhbHVlID0+IChcbiAgdmFsdWUgaW5zdGFuY2VvZiBQcmltaXRpdmUgPyBQcmltaXRpdmUodmFsdWUpIDogdmFsdWVcbik7XG5cbmNvbnN0IFByaW1pdGl2ZXMgPSAoXywgdmFsdWUpID0+IChcbiAgdHlwZW9mIHZhbHVlID09PSBwcmltaXRpdmUgPyBuZXcgUHJpbWl0aXZlKHZhbHVlKSA6IHZhbHVlXG4pO1xuXG5jb25zdCByZXZpdmUgPSAoaW5wdXQsIHBhcnNlZCwgb3V0cHV0LCAkKSA9PiB7XG4gIGNvbnN0IGxhenkgPSBbXTtcbiAgZm9yIChsZXQga2UgPSBrZXlzKG91dHB1dCksIHtsZW5ndGh9ID0ga2UsIHkgPSAwOyB5IDwgbGVuZ3RoOyB5KyspIHtcbiAgICBjb25zdCBrID0ga2VbeV07XG4gICAgY29uc3QgdmFsdWUgPSBvdXRwdXRba107XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgUHJpbWl0aXZlKSB7XG4gICAgICBjb25zdCB0bXAgPSBpbnB1dFt2YWx1ZV07XG4gICAgICBpZiAodHlwZW9mIHRtcCA9PT0gb2JqZWN0ICYmICFwYXJzZWQuaGFzKHRtcCkpIHtcbiAgICAgICAgcGFyc2VkLmFkZCh0bXApO1xuICAgICAgICBvdXRwdXRba10gPSBpZ25vcmU7XG4gICAgICAgIGxhenkucHVzaCh7aywgYTogW2lucHV0LCBwYXJzZWQsIHRtcCwgJF19KTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgICAgb3V0cHV0W2tdID0gJC5jYWxsKG91dHB1dCwgaywgdG1wKTtcbiAgICB9XG4gICAgZWxzZSBpZiAob3V0cHV0W2tdICE9PSBpZ25vcmUpXG4gICAgICBvdXRwdXRba10gPSAkLmNhbGwob3V0cHV0LCBrLCB2YWx1ZSk7XG4gIH1cbiAgZm9yIChsZXQge2xlbmd0aH0gPSBsYXp5LCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qge2ssIGF9ID0gbGF6eVtpXTtcbiAgICBvdXRwdXRba10gPSAkLmNhbGwob3V0cHV0LCBrLCByZXZpdmUuYXBwbHkobnVsbCwgYSkpO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuXG5jb25zdCBzZXQgPSAoa25vd24sIGlucHV0LCB2YWx1ZSkgPT4ge1xuICBjb25zdCBpbmRleCA9IFByaW1pdGl2ZShpbnB1dC5wdXNoKHZhbHVlKSAtIDEpO1xuICBrbm93bi5zZXQodmFsdWUsIGluZGV4KTtcbiAgcmV0dXJuIGluZGV4O1xufTtcblxuZXhwb3J0IGNvbnN0IHBhcnNlID0gKHRleHQsIHJldml2ZXIpID0+IHtcbiAgY29uc3QgaW5wdXQgPSAkcGFyc2UodGV4dCwgUHJpbWl0aXZlcykubWFwKHByaW1pdGl2ZXMpO1xuICBjb25zdCB2YWx1ZSA9IGlucHV0WzBdO1xuICBjb25zdCAkID0gcmV2aXZlciB8fCBub29wO1xuICBjb25zdCB0bXAgPSB0eXBlb2YgdmFsdWUgPT09IG9iamVjdCAmJiB2YWx1ZSA/XG4gICAgICAgICAgICAgIHJldml2ZShpbnB1dCwgbmV3IFNldCwgdmFsdWUsICQpIDpcbiAgICAgICAgICAgICAgdmFsdWU7XG4gIHJldHVybiAkLmNhbGwoeycnOiB0bXB9LCAnJywgdG1wKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdHJpbmdpZnkgPSAodmFsdWUsIHJlcGxhY2VyLCBzcGFjZSkgPT4ge1xuICBjb25zdCAkID0gcmVwbGFjZXIgJiYgdHlwZW9mIHJlcGxhY2VyID09PSBvYmplY3QgP1xuICAgICAgICAgICAgKGssIHYpID0+IChrID09PSAnJyB8fCAtMSA8IHJlcGxhY2VyLmluZGV4T2YoaykgPyB2IDogdm9pZCAwKSA6XG4gICAgICAgICAgICAocmVwbGFjZXIgfHwgbm9vcCk7XG4gIGNvbnN0IGtub3duID0gbmV3IE1hcDtcbiAgY29uc3QgaW5wdXQgPSBbXTtcbiAgY29uc3Qgb3V0cHV0ID0gW107XG4gIGxldCBpID0gK3NldChrbm93biwgaW5wdXQsICQuY2FsbCh7Jyc6IHZhbHVlfSwgJycsIHZhbHVlKSk7XG4gIGxldCBmaXJzdFJ1biA9ICFpO1xuICB3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCkge1xuICAgIGZpcnN0UnVuID0gdHJ1ZTtcbiAgICBvdXRwdXRbaV0gPSAkc3RyaW5naWZ5KGlucHV0W2krK10sIHJlcGxhY2UsIHNwYWNlKTtcbiAgfVxuICByZXR1cm4gJ1snICsgb3V0cHV0LmpvaW4oJywnKSArICddJztcbiAgZnVuY3Rpb24gcmVwbGFjZShrZXksIHZhbHVlKSB7XG4gICAgaWYgKGZpcnN0UnVuKSB7XG4gICAgICBmaXJzdFJ1biA9ICFmaXJzdFJ1bjtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgYWZ0ZXIgPSAkLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlb2YgYWZ0ZXIpIHtcbiAgICAgIGNhc2Ugb2JqZWN0OlxuICAgICAgICBpZiAoYWZ0ZXIgPT09IG51bGwpIHJldHVybiBhZnRlcjtcbiAgICAgIGNhc2UgcHJpbWl0aXZlOlxuICAgICAgICByZXR1cm4ga25vd24uZ2V0KGFmdGVyKSB8fCBzZXQoa25vd24sIGlucHV0LCBhZnRlcik7XG4gICAgfVxuICAgIHJldHVybiBhZnRlcjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRvSlNPTiA9IGFueSA9PiAkcGFyc2Uoc3RyaW5naWZ5KGFueSkpO1xuZXhwb3J0IGNvbnN0IGZyb21KU09OID0gYW55ID0+IHBhcnNlKCRzdHJpbmdpZnkoYW55KSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=