/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/src/wp-seo-metabox-category.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/src/wp-seo-metabox-category.js":
/*!*******************************************!*\
  !*** ./js/src/wp-seo-metabox-category.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _data = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n\n/* Internal dependencies */\n\n(function ($) {\n\t\"use strict\";\n\n\tvar primaryTermUITemplate, primaryTermScreenReaderTemplate;\n\tvar taxonomies = wpseoPrimaryCategoryL10n.taxonomies;\n\n\t/**\n  * Checks if the elements to make a term the primary term and the display for a primary term exist.\n  *\n  * @param {Object} checkbox The checkbox to get the closest required fields for.\n  *\n  * @returns {boolean} True when there are primary elements.\n  */\n\tfunction hasPrimaryTermElements(checkbox) {\n\t\treturn 1 === $(checkbox).closest(\"li\").children(\".wpseo-make-primary-term\").length;\n\t}\n\n\t/**\n  * Retrieves the primary term for a taxonomy.\n  *\n  * @param {string} taxonomyName The taxonomy name.\n  *\n  * @returns {string} The value of the primary term.\n  */\n\tfunction getPrimaryTerm(taxonomyName) {\n\t\tvar primaryTermInput;\n\n\t\tprimaryTermInput = $(\"#yoast-wpseo-primary-\" + taxonomyName);\n\t\treturn primaryTermInput.val();\n\t}\n\n\t/**\n  * Gets the name of a term for the category taxonomy.\n  *\n  * @param {number} categoryTermId The terms's id.\n  *\n  * @returns {string} The term's name.\n  */\n\tfunction getCategoryTermName(categoryTermId) {\n\t\tvar categoryListItem = $(\"#category-all\").find(\"#category-\" + categoryTermId + \" > label\");\n\t\tif (categoryListItem.length === 0) {\n\t\t\treturn \"\";\n\t\t}\n\t\tvar clone = categoryListItem.clone();\n\t\tclone.children().remove();\n\t\treturn $.trim(clone.text());\n\t}\n\n\t/**\n  * Sets the primary term for a taxonomy.\n  *\n  * @param {string} taxonomyName The taxonomy name.\n  * @param {string} termId       The term id.\n  *\n  * @returns {void}\n  */\n\tfunction setPrimaryTerm(taxonomyName, termId) {\n\t\tvar primaryTermInput = $(\"#yoast-wpseo-primary-\" + taxonomyName);\n\t\tprimaryTermInput.val(termId).trigger(\"change\");\n\n\t\tvar yoastEditor = (0, _data.dispatch)(\"yoast-seo/editor\");\n\t\tif (yoastEditor) {\n\t\t\tvar termIdInt = parseInt(termId, 10);\n\t\t\tyoastEditor.setPrimaryTaxonomyId(taxonomyName, termIdInt);\n\t\t\t// If the taxonomy is category update the replacement variable.\n\t\t\tif (taxonomyName === \"category\") {\n\t\t\t\tyoastEditor.updateReplacementVariable(\"primary_category\", getCategoryTermName(termIdInt));\n\t\t\t}\n\t\t}\n\t}\n\n\t/**\n  * Creates the elements necessary to show something is a primary term or to make it the primary term.\n  *\n  * @param {string} taxonomyName The taxonomy name.\n  * @param {Object} checkbox     The checkbox to get label for.\n  *\n  * @returns {void}\n  */\n\tfunction createPrimaryTermElements(taxonomyName, checkbox) {\n\t\tvar label, html;\n\n\t\tlabel = $(checkbox).closest(\"label\");\n\n\t\thtml = primaryTermUITemplate({\n\t\t\ttaxonomy: taxonomies[taxonomyName],\n\t\t\tterm: label.text()\n\t\t});\n\n\t\tlabel.after(html);\n\t}\n\n\t/**\n  * Updates the primary term selectors/indicators for a certain taxonomy.\n  *\n  * @param {string} taxonomyName The taxonomy name.\n  *\n  * @returns {void}\n  */\n\tfunction updatePrimaryTermSelectors(taxonomyName) {\n\t\tvar checkedTerms;\n\t\tvar listItem, label;\n\n\t\tcheckedTerms = $(\"#\" + taxonomyName + 'checklist input[type=\"checkbox\"]:checked');\n\n\t\tvar taxonomyListItem = $(\"#\" + taxonomyName + \"checklist li\");\n\t\ttaxonomyListItem.removeClass(\"wpseo-term-unchecked wpseo-primary-term wpseo-non-primary-term\");\n\n\t\t$(\".wpseo-primary-category-label\").remove();\n\t\ttaxonomyListItem.addClass(\"wpseo-term-unchecked\");\n\n\t\t// If there is only one term selected we don't want to show our interface.\n\t\tif (checkedTerms.length <= 1) {\n\t\t\treturn;\n\t\t}\n\n\t\tcheckedTerms.each(function (i, term) {\n\t\t\tterm = $(term);\n\t\t\tlistItem = term.closest(\"li\");\n\t\t\tlistItem.removeClass(\"wpseo-term-unchecked\");\n\n\t\t\t// Create our interface elements if they don't exist.\n\t\t\tif (!hasPrimaryTermElements(term)) {\n\t\t\t\tcreatePrimaryTermElements(taxonomyName, term);\n\t\t\t}\n\n\t\t\tif (term.val() === getPrimaryTerm(taxonomyName)) {\n\t\t\t\tlistItem.addClass(\"wpseo-primary-term\");\n\n\t\t\t\tlabel = term.closest(\"label\");\n\t\t\t\tlabel.find(\".wpseo-primary-category-label\").remove();\n\t\t\t\tlabel.append(primaryTermScreenReaderTemplate({\n\t\t\t\t\ttaxonomy: taxonomies[taxonomyName]\n\t\t\t\t}));\n\t\t\t} else {\n\t\t\t\tlistItem.addClass(\"wpseo-non-primary-term\");\n\t\t\t}\n\t\t});\n\t}\n\n\t/**\n  * Makes the first term primary for a certain taxonomy.\n  *\n  * @param {string} taxonomyName The taxonomy name.\n  *\n  * @returns {void}\n  */\n\tfunction makeFirstTermPrimary(taxonomyName) {\n\t\tvar firstTerm = $(\"#\" + taxonomyName + 'checklist input[type=\"checkbox\"]:checked:first');\n\n\t\tsetPrimaryTerm(taxonomyName, firstTerm.val());\n\t\tupdatePrimaryTermSelectors(taxonomyName);\n\t}\n\n\t/**\n  * If we check a term while there is no primary term we make that one the primary term.\n  *\n  * @param {string} taxonomyName The taxonomy name.\n  *\n  * @returns {void}\n  */\n\tfunction ensurePrimaryTerm(taxonomyName) {\n\t\tif (\"\" === getPrimaryTerm(taxonomyName)) {\n\t\t\tmakeFirstTermPrimary(taxonomyName);\n\t\t}\n\t}\n\n\t/**\n  * Returns the term checkbox handler for a certain taxonomy name.\n  *\n  * @param {string} taxonomyName The taxonomy name.\n  *\n  * @returns {Function} Event handler for the checkbox.\n  */\n\tfunction termCheckboxHandler(taxonomyName) {\n\t\treturn function () {\n\t\t\t// If the user unchecks the primary category we have to select any new primary term\n\t\t\tif (false === $(this).prop(\"checked\") && $(this).val() === getPrimaryTerm(taxonomyName)) {\n\t\t\t\tmakeFirstTermPrimary(taxonomyName);\n\t\t\t}\n\n\t\t\tensurePrimaryTerm(taxonomyName);\n\n\t\t\tupdatePrimaryTermSelectors(taxonomyName);\n\t\t};\n\t}\n\n\t/**\n  * Returns the term list add handler for a certain taxonomy name.\n  *\n  * @param {string} taxonomyName The taxonomy name.\n  *\n  * @returns {Function} The term list add handler.\n  */\n\tfunction termListAddHandler(taxonomyName) {\n\t\treturn function () {\n\t\t\tensurePrimaryTerm(taxonomyName);\n\t\t\tupdatePrimaryTermSelectors(taxonomyName);\n\t\t};\n\t}\n\n\t/**\n  * Returns the make primary event handler for a certain taxonomy name.\n  *\n  * @param {string} taxonomyName The taxonomy name.\n  *\n  * @returns {Function} The event handler.\n  */\n\tfunction makePrimaryHandler(taxonomyName) {\n\t\treturn function (e) {\n\t\t\tvar term, checkbox;\n\n\t\t\tterm = $(e.currentTarget);\n\t\t\tcheckbox = term.siblings(\"label\").find(\"input\");\n\n\t\t\tsetPrimaryTerm(taxonomyName, checkbox.val());\n\n\t\t\tupdatePrimaryTermSelectors(taxonomyName);\n\n\t\t\t// The clicked link will be hidden so we need to focus something different.\n\t\t\tcheckbox.focus();\n\t\t};\n\t}\n\n\t$.fn.initYstSEOPrimaryCategory = function () {\n\t\treturn this.each(function (i, taxonomy) {\n\t\t\tvar metaboxTaxonomy = $(\"#\" + taxonomy.name + \"div\");\n\n\t\t\tupdatePrimaryTermSelectors(taxonomy.name);\n\n\t\t\tmetaboxTaxonomy.on(\"click\", 'input[type=\"checkbox\"]', termCheckboxHandler(taxonomy.name));\n\n\t\t\t// When the AJAX Request is done, this event will be fired.\n\t\t\tmetaboxTaxonomy.on(\"wpListAddEnd\", \"#\" + taxonomy.name + \"checklist\", termListAddHandler(taxonomy.name));\n\n\t\t\tmetaboxTaxonomy.on(\"click\", \".wpseo-make-primary-term\", makePrimaryHandler(taxonomy.name));\n\t\t});\n\t};\n\n\t$(function () {\n\t\t// Initialize our templates\n\t\tprimaryTermUITemplate = wp.template(\"primary-term-ui\");\n\t\tprimaryTermScreenReaderTemplate = wp.template(\"primary-term-screen-reader\");\n\n\t\t$(_.values(taxonomies)).initYstSEOPrimaryCategory();\n\t});\n})(jQuery); /* global wp, _, wpseoPrimaryCategoryL10n */\n/* External dependencies *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zcmMvd3Atc2VvLW1ldGFib3gtY2F0ZWdvcnkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vanMvc3JjL3dwLXNlby1tZXRhYm94LWNhdGVnb3J5LmpzPzgwNTIiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIHdwLCBfLCB3cHNlb1ByaW1hcnlDYXRlZ29yeUwxMG4gKi9cbi8qIEV4dGVybmFsIGRlcGVuZGVuY2llcyAqL1xuaW1wb3J0IHsgZGlzcGF0Y2ggfSBmcm9tIFwiQHdvcmRwcmVzcy9kYXRhXCI7XG5cbi8qIEludGVybmFsIGRlcGVuZGVuY2llcyAqL1xuXG4oIGZ1bmN0aW9uKCAkICkge1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHR2YXIgcHJpbWFyeVRlcm1VSVRlbXBsYXRlLCBwcmltYXJ5VGVybVNjcmVlblJlYWRlclRlbXBsYXRlO1xuXHR2YXIgdGF4b25vbWllcyA9IHdwc2VvUHJpbWFyeUNhdGVnb3J5TDEwbi50YXhvbm9taWVzO1xuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgdGhlIGVsZW1lbnRzIHRvIG1ha2UgYSB0ZXJtIHRoZSBwcmltYXJ5IHRlcm0gYW5kIHRoZSBkaXNwbGF5IGZvciBhIHByaW1hcnkgdGVybSBleGlzdC5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGNoZWNrYm94IFRoZSBjaGVja2JveCB0byBnZXQgdGhlIGNsb3Nlc3QgcmVxdWlyZWQgZmllbGRzIGZvci5cblx0ICpcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgd2hlbiB0aGVyZSBhcmUgcHJpbWFyeSBlbGVtZW50cy5cblx0ICovXG5cdGZ1bmN0aW9uIGhhc1ByaW1hcnlUZXJtRWxlbWVudHMoIGNoZWNrYm94ICkge1xuXHRcdHJldHVybiAxID09PSAkKCBjaGVja2JveCApLmNsb3Nlc3QoIFwibGlcIiApLmNoaWxkcmVuKCBcIi53cHNlby1tYWtlLXByaW1hcnktdGVybVwiICkubGVuZ3RoO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHJpZXZlcyB0aGUgcHJpbWFyeSB0ZXJtIGZvciBhIHRheG9ub215LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGF4b25vbXlOYW1lIFRoZSB0YXhvbm9teSBuYW1lLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgdmFsdWUgb2YgdGhlIHByaW1hcnkgdGVybS5cblx0ICovXG5cdGZ1bmN0aW9uIGdldFByaW1hcnlUZXJtKCB0YXhvbm9teU5hbWUgKSB7XG5cdFx0dmFyIHByaW1hcnlUZXJtSW5wdXQ7XG5cblx0XHRwcmltYXJ5VGVybUlucHV0ID0gJCggXCIjeW9hc3Qtd3BzZW8tcHJpbWFyeS1cIiArIHRheG9ub215TmFtZSApO1xuXHRcdHJldHVybiBwcmltYXJ5VGVybUlucHV0LnZhbCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIG5hbWUgb2YgYSB0ZXJtIGZvciB0aGUgY2F0ZWdvcnkgdGF4b25vbXkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjYXRlZ29yeVRlcm1JZCBUaGUgdGVybXMncyBpZC5cblx0ICpcblx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIHRlcm0ncyBuYW1lLlxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0Q2F0ZWdvcnlUZXJtTmFtZSggY2F0ZWdvcnlUZXJtSWQgKSB7XG5cdFx0Y29uc3QgY2F0ZWdvcnlMaXN0SXRlbSA9ICQoIFwiI2NhdGVnb3J5LWFsbFwiIClcblx0XHRcdC5maW5kKCBgI2NhdGVnb3J5LSR7IGNhdGVnb3J5VGVybUlkIH0gPiBsYWJlbGAgKTtcblx0XHRpZiAoIGNhdGVnb3J5TGlzdEl0ZW0ubGVuZ3RoID09PSAwICkge1xuXHRcdFx0cmV0dXJuIFwiXCI7XG5cdFx0fVxuXHRcdGNvbnN0IGNsb25lID0gY2F0ZWdvcnlMaXN0SXRlbS5jbG9uZSgpO1xuXHRcdGNsb25lLmNoaWxkcmVuKCkucmVtb3ZlKCk7XG5cdFx0cmV0dXJuICQudHJpbSggY2xvbmUudGV4dCgpICk7XG5cdH1cblxuXHQvKipcblx0ICogU2V0cyB0aGUgcHJpbWFyeSB0ZXJtIGZvciBhIHRheG9ub215LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGF4b25vbXlOYW1lIFRoZSB0YXhvbm9teSBuYW1lLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGVybUlkICAgICAgIFRoZSB0ZXJtIGlkLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdGZ1bmN0aW9uIHNldFByaW1hcnlUZXJtKCB0YXhvbm9teU5hbWUsIHRlcm1JZCApIHtcblx0XHRjb25zdCBwcmltYXJ5VGVybUlucHV0ID0gJCggXCIjeW9hc3Qtd3BzZW8tcHJpbWFyeS1cIiArIHRheG9ub215TmFtZSApO1xuXHRcdHByaW1hcnlUZXJtSW5wdXQudmFsKCB0ZXJtSWQgKS50cmlnZ2VyKCBcImNoYW5nZVwiICk7XG5cblx0XHRjb25zdCB5b2FzdEVkaXRvciA9IGRpc3BhdGNoKCBcInlvYXN0LXNlby9lZGl0b3JcIiApO1xuXHRcdGlmICggeW9hc3RFZGl0b3IgKSB7XG5cdFx0XHRjb25zdCB0ZXJtSWRJbnQgPSBwYXJzZUludCggdGVybUlkLCAxMCApO1xuXHRcdFx0eW9hc3RFZGl0b3Iuc2V0UHJpbWFyeVRheG9ub215SWQoIHRheG9ub215TmFtZSwgdGVybUlkSW50ICk7XG5cdFx0XHQvLyBJZiB0aGUgdGF4b25vbXkgaXMgY2F0ZWdvcnkgdXBkYXRlIHRoZSByZXBsYWNlbWVudCB2YXJpYWJsZS5cblx0XHRcdGlmICggdGF4b25vbXlOYW1lID09PSBcImNhdGVnb3J5XCIgKSB7XG5cdFx0XHRcdHlvYXN0RWRpdG9yLnVwZGF0ZVJlcGxhY2VtZW50VmFyaWFibGUoXG5cdFx0XHRcdFx0XCJwcmltYXJ5X2NhdGVnb3J5XCIsXG5cdFx0XHRcdFx0Z2V0Q2F0ZWdvcnlUZXJtTmFtZSggdGVybUlkSW50IClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUgZWxlbWVudHMgbmVjZXNzYXJ5IHRvIHNob3cgc29tZXRoaW5nIGlzIGEgcHJpbWFyeSB0ZXJtIG9yIHRvIG1ha2UgaXQgdGhlIHByaW1hcnkgdGVybS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRheG9ub215TmFtZSBUaGUgdGF4b25vbXkgbmFtZS5cblx0ICogQHBhcmFtIHtPYmplY3R9IGNoZWNrYm94ICAgICBUaGUgY2hlY2tib3ggdG8gZ2V0IGxhYmVsIGZvci5cblx0ICpcblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqL1xuXHRmdW5jdGlvbiBjcmVhdGVQcmltYXJ5VGVybUVsZW1lbnRzKCB0YXhvbm9teU5hbWUsIGNoZWNrYm94ICkge1xuXHRcdHZhciBsYWJlbCwgaHRtbDtcblxuXHRcdGxhYmVsID0gJCggY2hlY2tib3ggKS5jbG9zZXN0KCBcImxhYmVsXCIgKTtcblxuXHRcdGh0bWwgPSBwcmltYXJ5VGVybVVJVGVtcGxhdGUoIHtcblx0XHRcdHRheG9ub215OiB0YXhvbm9taWVzWyB0YXhvbm9teU5hbWUgXSxcblx0XHRcdHRlcm06IGxhYmVsLnRleHQoKSxcblx0XHR9ICk7XG5cblx0XHRsYWJlbC5hZnRlciggaHRtbCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgdGhlIHByaW1hcnkgdGVybSBzZWxlY3RvcnMvaW5kaWNhdG9ycyBmb3IgYSBjZXJ0YWluIHRheG9ub215LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGF4b25vbXlOYW1lIFRoZSB0YXhvbm9teSBuYW1lLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdGZ1bmN0aW9uIHVwZGF0ZVByaW1hcnlUZXJtU2VsZWN0b3JzKCB0YXhvbm9teU5hbWUgKSB7XG5cdFx0dmFyIGNoZWNrZWRUZXJtcztcblx0XHR2YXIgbGlzdEl0ZW0sIGxhYmVsO1xuXG5cdFx0Y2hlY2tlZFRlcm1zID0gJCggXCIjXCIgKyB0YXhvbm9teU5hbWUgKyAnY2hlY2tsaXN0IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkJyApO1xuXG5cdFx0dmFyIHRheG9ub215TGlzdEl0ZW0gPSAkKCBcIiNcIiArIHRheG9ub215TmFtZSArIFwiY2hlY2tsaXN0IGxpXCIgKTtcblx0XHR0YXhvbm9teUxpc3RJdGVtLnJlbW92ZUNsYXNzKCBcIndwc2VvLXRlcm0tdW5jaGVja2VkIHdwc2VvLXByaW1hcnktdGVybSB3cHNlby1ub24tcHJpbWFyeS10ZXJtXCIgKTtcblxuXHRcdCQoIFwiLndwc2VvLXByaW1hcnktY2F0ZWdvcnktbGFiZWxcIiApLnJlbW92ZSgpO1xuXHRcdHRheG9ub215TGlzdEl0ZW0uYWRkQ2xhc3MoIFwid3BzZW8tdGVybS11bmNoZWNrZWRcIiApO1xuXG5cdFx0Ly8gSWYgdGhlcmUgaXMgb25seSBvbmUgdGVybSBzZWxlY3RlZCB3ZSBkb24ndCB3YW50IHRvIHNob3cgb3VyIGludGVyZmFjZS5cblx0XHRpZiAoIGNoZWNrZWRUZXJtcy5sZW5ndGggPD0gMSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjaGVja2VkVGVybXMuZWFjaCggZnVuY3Rpb24oIGksIHRlcm0gKSB7XG5cdFx0XHR0ZXJtID0gJCggdGVybSApO1xuXHRcdFx0bGlzdEl0ZW0gPSB0ZXJtLmNsb3Nlc3QoIFwibGlcIiApO1xuXHRcdFx0bGlzdEl0ZW0ucmVtb3ZlQ2xhc3MoIFwid3BzZW8tdGVybS11bmNoZWNrZWRcIiApO1xuXG5cdFx0XHQvLyBDcmVhdGUgb3VyIGludGVyZmFjZSBlbGVtZW50cyBpZiB0aGV5IGRvbid0IGV4aXN0LlxuXHRcdFx0aWYgKCAhIGhhc1ByaW1hcnlUZXJtRWxlbWVudHMoIHRlcm0gKSApIHtcblx0XHRcdFx0Y3JlYXRlUHJpbWFyeVRlcm1FbGVtZW50cyggdGF4b25vbXlOYW1lLCB0ZXJtICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggdGVybS52YWwoKSA9PT0gZ2V0UHJpbWFyeVRlcm0oIHRheG9ub215TmFtZSApICkge1xuXHRcdFx0XHRsaXN0SXRlbS5hZGRDbGFzcyggXCJ3cHNlby1wcmltYXJ5LXRlcm1cIiApO1xuXG5cdFx0XHRcdGxhYmVsID0gdGVybS5jbG9zZXN0KCBcImxhYmVsXCIgKTtcblx0XHRcdFx0bGFiZWwuZmluZCggXCIud3BzZW8tcHJpbWFyeS1jYXRlZ29yeS1sYWJlbFwiICkucmVtb3ZlKCk7XG5cdFx0XHRcdGxhYmVsLmFwcGVuZCggcHJpbWFyeVRlcm1TY3JlZW5SZWFkZXJUZW1wbGF0ZSgge1xuXHRcdFx0XHRcdHRheG9ub215OiB0YXhvbm9taWVzWyB0YXhvbm9teU5hbWUgXSxcblx0XHRcdFx0fSApICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0bGlzdEl0ZW0uYWRkQ2xhc3MoIFwid3BzZW8tbm9uLXByaW1hcnktdGVybVwiICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1ha2VzIHRoZSBmaXJzdCB0ZXJtIHByaW1hcnkgZm9yIGEgY2VydGFpbiB0YXhvbm9teS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRheG9ub215TmFtZSBUaGUgdGF4b25vbXkgbmFtZS5cblx0ICpcblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqL1xuXHRmdW5jdGlvbiBtYWtlRmlyc3RUZXJtUHJpbWFyeSggdGF4b25vbXlOYW1lICkge1xuXHRcdHZhciBmaXJzdFRlcm0gPSAkKCBcIiNcIiArIHRheG9ub215TmFtZSArICdjaGVja2xpc3QgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6Zmlyc3QnICk7XG5cblx0XHRzZXRQcmltYXJ5VGVybSggdGF4b25vbXlOYW1lLCBmaXJzdFRlcm0udmFsKCkgKTtcblx0XHR1cGRhdGVQcmltYXJ5VGVybVNlbGVjdG9ycyggdGF4b25vbXlOYW1lICk7XG5cdH1cblxuXHQvKipcblx0ICogSWYgd2UgY2hlY2sgYSB0ZXJtIHdoaWxlIHRoZXJlIGlzIG5vIHByaW1hcnkgdGVybSB3ZSBtYWtlIHRoYXQgb25lIHRoZSBwcmltYXJ5IHRlcm0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0YXhvbm9teU5hbWUgVGhlIHRheG9ub215IG5hbWUuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKi9cblx0ZnVuY3Rpb24gZW5zdXJlUHJpbWFyeVRlcm0oIHRheG9ub215TmFtZSApIHtcblx0XHRpZiAoIFwiXCIgPT09IGdldFByaW1hcnlUZXJtKCB0YXhvbm9teU5hbWUgKSApIHtcblx0XHRcdG1ha2VGaXJzdFRlcm1QcmltYXJ5KCB0YXhvbm9teU5hbWUgKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgdGVybSBjaGVja2JveCBoYW5kbGVyIGZvciBhIGNlcnRhaW4gdGF4b25vbXkgbmFtZS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRheG9ub215TmFtZSBUaGUgdGF4b25vbXkgbmFtZS5cblx0ICpcblx0ICogQHJldHVybnMge0Z1bmN0aW9ufSBFdmVudCBoYW5kbGVyIGZvciB0aGUgY2hlY2tib3guXG5cdCAqL1xuXHRmdW5jdGlvbiB0ZXJtQ2hlY2tib3hIYW5kbGVyKCB0YXhvbm9teU5hbWUgKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gSWYgdGhlIHVzZXIgdW5jaGVja3MgdGhlIHByaW1hcnkgY2F0ZWdvcnkgd2UgaGF2ZSB0byBzZWxlY3QgYW55IG5ldyBwcmltYXJ5IHRlcm1cblx0XHRcdGlmICggZmFsc2UgPT09ICQoIHRoaXMgKS5wcm9wKCBcImNoZWNrZWRcIiApICYmICQoIHRoaXMgKS52YWwoKSA9PT0gZ2V0UHJpbWFyeVRlcm0oIHRheG9ub215TmFtZSApICkge1xuXHRcdFx0XHRtYWtlRmlyc3RUZXJtUHJpbWFyeSggdGF4b25vbXlOYW1lICk7XG5cdFx0XHR9XG5cblx0XHRcdGVuc3VyZVByaW1hcnlUZXJtKCB0YXhvbm9teU5hbWUgKTtcblxuXHRcdFx0dXBkYXRlUHJpbWFyeVRlcm1TZWxlY3RvcnMoIHRheG9ub215TmFtZSApO1xuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgdGVybSBsaXN0IGFkZCBoYW5kbGVyIGZvciBhIGNlcnRhaW4gdGF4b25vbXkgbmFtZS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRheG9ub215TmFtZSBUaGUgdGF4b25vbXkgbmFtZS5cblx0ICpcblx0ICogQHJldHVybnMge0Z1bmN0aW9ufSBUaGUgdGVybSBsaXN0IGFkZCBoYW5kbGVyLlxuXHQgKi9cblx0ZnVuY3Rpb24gdGVybUxpc3RBZGRIYW5kbGVyKCB0YXhvbm9teU5hbWUgKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0ZW5zdXJlUHJpbWFyeVRlcm0oIHRheG9ub215TmFtZSApO1xuXHRcdFx0dXBkYXRlUHJpbWFyeVRlcm1TZWxlY3RvcnMoIHRheG9ub215TmFtZSApO1xuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgbWFrZSBwcmltYXJ5IGV2ZW50IGhhbmRsZXIgZm9yIGEgY2VydGFpbiB0YXhvbm9teSBuYW1lLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGF4b25vbXlOYW1lIFRoZSB0YXhvbm9teSBuYW1lLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7RnVuY3Rpb259IFRoZSBldmVudCBoYW5kbGVyLlxuXHQgKi9cblx0ZnVuY3Rpb24gbWFrZVByaW1hcnlIYW5kbGVyKCB0YXhvbm9teU5hbWUgKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0dmFyIHRlcm0sIGNoZWNrYm94O1xuXG5cdFx0XHR0ZXJtID0gJCggZS5jdXJyZW50VGFyZ2V0ICk7XG5cdFx0XHRjaGVja2JveCA9IHRlcm0uc2libGluZ3MoIFwibGFiZWxcIiApLmZpbmQoIFwiaW5wdXRcIiApO1xuXG5cdFx0XHRzZXRQcmltYXJ5VGVybSggdGF4b25vbXlOYW1lLCBjaGVja2JveC52YWwoKSApO1xuXG5cdFx0XHR1cGRhdGVQcmltYXJ5VGVybVNlbGVjdG9ycyggdGF4b25vbXlOYW1lICk7XG5cblx0XHRcdC8vIFRoZSBjbGlja2VkIGxpbmsgd2lsbCBiZSBoaWRkZW4gc28gd2UgbmVlZCB0byBmb2N1cyBzb21ldGhpbmcgZGlmZmVyZW50LlxuXHRcdFx0Y2hlY2tib3guZm9jdXMoKTtcblx0XHR9O1xuXHR9XG5cblx0JC5mbi5pbml0WXN0U0VPUHJpbWFyeUNhdGVnb3J5ID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGksIHRheG9ub215ICkge1xuXHRcdFx0Y29uc3QgbWV0YWJveFRheG9ub215ID0gJCggXCIjXCIgKyB0YXhvbm9teS5uYW1lICsgXCJkaXZcIiApO1xuXG5cdFx0XHR1cGRhdGVQcmltYXJ5VGVybVNlbGVjdG9ycyggdGF4b25vbXkubmFtZSApO1xuXG5cdFx0XHRtZXRhYm94VGF4b25vbXkub24oIFwiY2xpY2tcIiwgJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIHRlcm1DaGVja2JveEhhbmRsZXIoIHRheG9ub215Lm5hbWUgKSApO1xuXG5cdFx0XHQvLyBXaGVuIHRoZSBBSkFYIFJlcXVlc3QgaXMgZG9uZSwgdGhpcyBldmVudCB3aWxsIGJlIGZpcmVkLlxuXHRcdFx0bWV0YWJveFRheG9ub215Lm9uKCBcIndwTGlzdEFkZEVuZFwiLCBcIiNcIiArIHRheG9ub215Lm5hbWUgKyBcImNoZWNrbGlzdFwiLCB0ZXJtTGlzdEFkZEhhbmRsZXIoIHRheG9ub215Lm5hbWUgKSApO1xuXG5cdFx0XHRtZXRhYm94VGF4b25vbXkub24oIFwiY2xpY2tcIiwgXCIud3BzZW8tbWFrZS1wcmltYXJ5LXRlcm1cIiwgbWFrZVByaW1hcnlIYW5kbGVyKCB0YXhvbm9teS5uYW1lICkgKTtcblx0XHR9ICk7XG5cdH07XG5cblx0JCggZnVuY3Rpb24oKSB7XG5cdFx0Ly8gSW5pdGlhbGl6ZSBvdXIgdGVtcGxhdGVzXG5cdFx0cHJpbWFyeVRlcm1VSVRlbXBsYXRlID0gd3AudGVtcGxhdGUoIFwicHJpbWFyeS10ZXJtLXVpXCIgKTtcblx0XHRwcmltYXJ5VGVybVNjcmVlblJlYWRlclRlbXBsYXRlID0gd3AudGVtcGxhdGUoIFwicHJpbWFyeS10ZXJtLXNjcmVlbi1yZWFkZXJcIiApO1xuXG5cdFx0JCggXy52YWx1ZXMoIHRheG9ub21pZXMgKSApLmluaXRZc3RTRU9QcmltYXJ5Q2F0ZWdvcnkoKTtcblx0fSApO1xufSggalF1ZXJ5ICkgKTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhRQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/src/wp-seo-metabox-category.js\n");

/***/ }),

/***/ "@wordpress/data":
/*!****************************************!*\
  !*** external "window.yoast._wp.data" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = window.yoast._wp.data;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQHdvcmRwcmVzcy9kYXRhLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LnlvYXN0Ll93cC5kYXRhXCI/N2I1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy55b2FzdC5fd3AuZGF0YTsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@wordpress/data\n");

/***/ })

/******/ });