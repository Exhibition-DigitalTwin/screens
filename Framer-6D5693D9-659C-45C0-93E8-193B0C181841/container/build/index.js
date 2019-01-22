(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react")) : factory(root["Framer"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/]build.index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/graz.radial-gradient/build/index.js":
/*!****************************************************************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/graz.radial-gradient/build/index.js ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! framer */ "framer"), __webpack_require__(/*! react */ "react"));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/]build.index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Defaults.ts": "./code/Defaults.ts",
	"./Radial_gradient.tsx": "./code/Radial_gradient.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/Defaults.ts":
/*!**************************!*\
  !*** ./code/Defaults.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nconst data = framer_1.Data({ toggle: true, scale: 1, opacity: 1, rotation: 0, top: 0 });\nexports.Scale = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        scale: data.scale,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            data.scale.set(0.6);\n            framer_1.animate.spring(data.scale, 1);\n        },\n    };\n};\nexports.Rotate = props => {\n    window[\"__checkBudget__\"]();\n    data.rotation.set(props.rotation);\n    return {\n        rotation: data.rotation,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            framer_1.animate.spring(data.rotation, data.rotation.get() + 90, {\n                tension: 250,\n                friction: 20,\n            });\n        },\n    };\n};\nexports.Fade = props => {\n    window[\"__checkBudget__\"]();\n    data.opacity.set(props.opacity);\n    return {\n        opacity: data.opacity,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            framer_1.animate.linear(data.opacity, 0, 0.2);\n        },\n    };\n};\nexports.SwitchOutput = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        opacity: data.opacity,\n        rotation: data.rotation,\n    };\n};\nexports.SwitchInput = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        onTap() {\n            window[\"__checkBudget__\"]();\n            const toggle = data.toggle.get();\n            framer_1.animate.spring({ opacity: data.opacity, rotation: data.rotation }, {\n                opacity: toggle ? 0.5 : 1,\n                rotation: toggle ? 360 : 0,\n            }, { tension: 200, friction: 20 });\n            data.toggle.set(!toggle);\n        },\n    };\n};\nexports.__info__ = [];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL0RlZmF1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSw0QkFBNEIsMERBQTBEO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsaURBQWlEO0FBQ3RGO0FBQ0E7QUFDQSxhQUFhLEdBQUcsNkJBQTZCO0FBQzdDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvZGUvRGVmYXVsdHMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZyYW1lcl8xID0gcmVxdWlyZShcImZyYW1lclwiKTtcbmNvbnN0IGRhdGEgPSBmcmFtZXJfMS5EYXRhKHsgdG9nZ2xlOiB0cnVlLCBzY2FsZTogMSwgb3BhY2l0eTogMSwgcm90YXRpb246IDAsIHRvcDogMCB9KTtcbmV4cG9ydHMuU2NhbGUgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NhbGU6IGRhdGEuc2NhbGUsXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBkYXRhLnNjYWxlLnNldCgwLjYpO1xuICAgICAgICAgICAgZnJhbWVyXzEuYW5pbWF0ZS5zcHJpbmcoZGF0YS5zY2FsZSwgMSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLlJvdGF0ZSA9IHByb3BzID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICBkYXRhLnJvdGF0aW9uLnNldChwcm9wcy5yb3RhdGlvbik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm90YXRpb246IGRhdGEucm90YXRpb24sXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLnNwcmluZyhkYXRhLnJvdGF0aW9uLCBkYXRhLnJvdGF0aW9uLmdldCgpICsgOTAsIHtcbiAgICAgICAgICAgICAgICB0ZW5zaW9uOiAyNTAsXG4gICAgICAgICAgICAgICAgZnJpY3Rpb246IDIwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLkZhZGUgPSBwcm9wcyA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgZGF0YS5vcGFjaXR5LnNldChwcm9wcy5vcGFjaXR5KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiBkYXRhLm9wYWNpdHksXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLmxpbmVhcihkYXRhLm9wYWNpdHksIDAsIDAuMik7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLlN3aXRjaE91dHB1dCA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiBkYXRhLm9wYWNpdHksXG4gICAgICAgIHJvdGF0aW9uOiBkYXRhLnJvdGF0aW9uLFxuICAgIH07XG59O1xuZXhwb3J0cy5Td2l0Y2hJbnB1dCA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvblRhcCgpIHtcbiAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgY29uc3QgdG9nZ2xlID0gZGF0YS50b2dnbGUuZ2V0KCk7XG4gICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLnNwcmluZyh7IG9wYWNpdHk6IGRhdGEub3BhY2l0eSwgcm90YXRpb246IGRhdGEucm90YXRpb24gfSwge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IHRvZ2dsZSA/IDAuNSA6IDEsXG4gICAgICAgICAgICAgICAgcm90YXRpb246IHRvZ2dsZSA/IDM2MCA6IDAsXG4gICAgICAgICAgICB9LCB7IHRlbnNpb246IDIwMCwgZnJpY3Rpb246IDIwIH0pO1xuICAgICAgICAgICAgZGF0YS50b2dnbGUuc2V0KCF0b2dnbGUpO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuZXhwb3J0cy5fX2luZm9fXyA9IFtdO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/Defaults.ts\n");

/***/ }),

/***/ "./code/Radial_gradient.tsx":
/*!**********************************!*\
  !*** ./code/Radial_gradient.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nclass Radial_gradient extends React.Component {\n    constructor() {\n        super(...arguments);\n        this.allColors = [];\n    }\n    randomArray(length) {\n        window[\"__checkBudget__\"]();\n        return Array.apply(null, Array(length)).map(function () {\n            window[\"__checkBudget__\"]();\n            return \"#000000\".replace(/0/g, function () { window[\"__checkBudget__\"](); return (~~(Math.random() * 16)).toString(16); });\n        });\n    }\n    componentWillReceiveProps(props) {\n        window[\"__checkBudget__\"]();\n        this.allColors.length = 0;\n        for (let i = 0; i < props.amount; i++) {\n            window[\"__checkBudget__\"]();\n            this.allColors.push(props[`color${i + 1}`]);\n        }\n    }\n    componentWillMount() {\n        window[\"__checkBudget__\"]();\n        for (let i = 0; i < this.props.amount; i++) {\n            window[\"__checkBudget__\"]();\n            this.allColors.push(this.props[`color${i + 1}`]);\n        }\n    }\n    render() {\n        window[\"__checkBudget__\"]();\n        const { extent, isFlipped, shape, xPos, yPos, isRandom, amount } = this.props;\n        let finalColor;\n        isFlipped ? finalColor = this.allColors : finalColor = this.allColors.reverse();\n        isRandom ? finalColor = this.randomArray(amount) : finalColor = this.allColors;\n        const style = {\n            height: \"100%\",\n            background: '-webkit-radial-gradient(' + xPos + '% ' + yPos + '%,' + shape + ' ' + extent + ', ' + finalColor + ')'\n        };\n        return React.createElement(\"div\", { key: extent, style: style });\n    }\n}\n// Set default properties\nRadial_gradient.defaultProps = {\n    extent: 'farthest-corner',\n    shape: 'ellipse',\n    isFlipped: false,\n    isRandomColor: false,\n    color1: \"#FBAD66\",\n    color2: \"#F70103\",\n    color3: \"#4E246F\",\n    color4: \"#01369F\",\n    color5: \"#2E53FA\",\n    amount: 3,\n    xPos: 50,\n    yPos: 50\n};\n// Items shown in property panel\nRadial_gradient.propertyControls = {\n    // colorArray: { type: ControlType.String, title: \"Colors\" },\n    shape: {\n        type: framer_1.ControlType.Enum,\n        options: ['circle', 'ellipse'],\n        title: \"Shape\"\n    },\n    extent: {\n        type: framer_1.ControlType.Enum,\n        options: ['closest-side', 'closest-corner', 'farthest-side', 'farthest-corner'],\n        title: \"Extent\"\n    },\n    isFlipped: {\n        type: framer_1.ControlType.Boolean,\n        title: \"Flip color\",\n        hidden(props) {\n            window[\"__checkBudget__\"]();\n            if (!props.isRandom) {\n                return false;\n            }\n            else {\n                return true;\n            }\n        }\n    },\n    isRandom: { type: framer_1.ControlType.Boolean, title: \"Random\" },\n    xPos: {\n        type: framer_1.ControlType.Number,\n        title: \"X\"\n    },\n    yPos: {\n        type: framer_1.ControlType.Number,\n        title: \"Y\"\n    },\n    amount: { type: framer_1.ControlType.Number, min: 2, max: 5, title: \"Colors\" },\n    color1: { type: framer_1.ControlType.Color, title: \"Color 1\" },\n    color2: { type: framer_1.ControlType.Color, title: \"Color 2\" },\n    color3: {\n        type: framer_1.ControlType.Color,\n        title: \"Color 3\",\n        hidden(props) {\n            window[\"__checkBudget__\"]();\n            return props.amount >= 3 ? false : true;\n        }\n    },\n    color4: {\n        type: framer_1.ControlType.Color,\n        title: \"Color 4\",\n        hidden(props) {\n            window[\"__checkBudget__\"]();\n            return props.amount >= 4 ? false : true;\n        }\n    },\n    color5: {\n        type: framer_1.ControlType.Color,\n        title: \"Color 5\",\n        hidden(props) {\n            window[\"__checkBudget__\"]();\n            return props.amount >= 5 ? false : true;\n        }\n    }\n};\nexports.Radial_gradient = Radial_gradient;\nexports.__info__ = [{ name: \"Radial_gradient\", children: false, type: \"component\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1JhZGlhbF9ncmFkaWVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELDZCQUE2Qiw4Q0FBOEMsRUFBRTtBQUNySSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0EsOENBQThDLE1BQU07QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0EsbURBQW1ELE1BQU07QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHlEQUF5RDtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyw0QkFBNEI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNENBQTRDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxlQUFlLHNEQUFzRDtBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGFBQWEscUVBQXFFO0FBQ2xGLGFBQWEscURBQXFEO0FBQ2xFLGFBQWEscURBQXFEO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDhEQUE4RCIsImZpbGUiOiIuL2NvZGUvUmFkaWFsX2dyYWRpZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBmcmFtZXJfMSA9IHJlcXVpcmUoXCJmcmFtZXJcIik7XG5jbGFzcyBSYWRpYWxfZ3JhZGllbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmFsbENvbG9ycyA9IFtdO1xuICAgIH1cbiAgICByYW5kb21BcnJheShsZW5ndGgpIHtcbiAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgIHJldHVybiBBcnJheS5hcHBseShudWxsLCBBcnJheShsZW5ndGgpKS5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICByZXR1cm4gXCIjMDAwMDAwXCIucmVwbGFjZSgvMC9nLCBmdW5jdGlvbiAoKSB7IHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpOyByZXR1cm4gKH5+KE1hdGgucmFuZG9tKCkgKiAxNikpLnRvU3RyaW5nKDE2KTsgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICB0aGlzLmFsbENvbG9ycy5sZW5ndGggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmFtb3VudDsgaSsrKSB7XG4gICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgIHRoaXMuYWxsQ29sb3JzLnB1c2gocHJvcHNbYGNvbG9yJHtpICsgMX1gXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLmFtb3VudDsgaSsrKSB7XG4gICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgIHRoaXMuYWxsQ29sb3JzLnB1c2godGhpcy5wcm9wc1tgY29sb3Ike2kgKyAxfWBdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICBjb25zdCB7IGV4dGVudCwgaXNGbGlwcGVkLCBzaGFwZSwgeFBvcywgeVBvcywgaXNSYW5kb20sIGFtb3VudCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGZpbmFsQ29sb3I7XG4gICAgICAgIGlzRmxpcHBlZCA/IGZpbmFsQ29sb3IgPSB0aGlzLmFsbENvbG9ycyA6IGZpbmFsQ29sb3IgPSB0aGlzLmFsbENvbG9ycy5yZXZlcnNlKCk7XG4gICAgICAgIGlzUmFuZG9tID8gZmluYWxDb2xvciA9IHRoaXMucmFuZG9tQXJyYXkoYW1vdW50KSA6IGZpbmFsQ29sb3IgPSB0aGlzLmFsbENvbG9ycztcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJy13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCcgKyB4UG9zICsgJyUgJyArIHlQb3MgKyAnJSwnICsgc2hhcGUgKyAnICcgKyBleHRlbnQgKyAnLCAnICsgZmluYWxDb2xvciArICcpJ1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGtleTogZXh0ZW50LCBzdHlsZTogc3R5bGUgfSk7XG4gICAgfVxufVxuLy8gU2V0IGRlZmF1bHQgcHJvcGVydGllc1xuUmFkaWFsX2dyYWRpZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBleHRlbnQ6ICdmYXJ0aGVzdC1jb3JuZXInLFxuICAgIHNoYXBlOiAnZWxsaXBzZScsXG4gICAgaXNGbGlwcGVkOiBmYWxzZSxcbiAgICBpc1JhbmRvbUNvbG9yOiBmYWxzZSxcbiAgICBjb2xvcjE6IFwiI0ZCQUQ2NlwiLFxuICAgIGNvbG9yMjogXCIjRjcwMTAzXCIsXG4gICAgY29sb3IzOiBcIiM0RTI0NkZcIixcbiAgICBjb2xvcjQ6IFwiIzAxMzY5RlwiLFxuICAgIGNvbG9yNTogXCIjMkU1M0ZBXCIsXG4gICAgYW1vdW50OiAzLFxuICAgIHhQb3M6IDUwLFxuICAgIHlQb3M6IDUwXG59O1xuLy8gSXRlbXMgc2hvd24gaW4gcHJvcGVydHkgcGFuZWxcblJhZGlhbF9ncmFkaWVudC5wcm9wZXJ0eUNvbnRyb2xzID0ge1xuICAgIC8vIGNvbG9yQXJyYXk6IHsgdHlwZTogQ29udHJvbFR5cGUuU3RyaW5nLCB0aXRsZTogXCJDb2xvcnNcIiB9LFxuICAgIHNoYXBlOiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLkVudW0sXG4gICAgICAgIG9wdGlvbnM6IFsnY2lyY2xlJywgJ2VsbGlwc2UnXSxcbiAgICAgICAgdGl0bGU6IFwiU2hhcGVcIlxuICAgIH0sXG4gICAgZXh0ZW50OiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLkVudW0sXG4gICAgICAgIG9wdGlvbnM6IFsnY2xvc2VzdC1zaWRlJywgJ2Nsb3Nlc3QtY29ybmVyJywgJ2ZhcnRoZXN0LXNpZGUnLCAnZmFydGhlc3QtY29ybmVyJ10sXG4gICAgICAgIHRpdGxlOiBcIkV4dGVudFwiXG4gICAgfSxcbiAgICBpc0ZsaXBwZWQ6IHtcbiAgICAgICAgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuQm9vbGVhbixcbiAgICAgICAgdGl0bGU6IFwiRmxpcCBjb2xvclwiLFxuICAgICAgICBoaWRkZW4ocHJvcHMpIHtcbiAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgaWYgKCFwcm9wcy5pc1JhbmRvbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBpc1JhbmRvbTogeyB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5Cb29sZWFuLCB0aXRsZTogXCJSYW5kb21cIiB9LFxuICAgIHhQb3M6IHtcbiAgICAgICAgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuTnVtYmVyLFxuICAgICAgICB0aXRsZTogXCJYXCJcbiAgICB9LFxuICAgIHlQb3M6IHtcbiAgICAgICAgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuTnVtYmVyLFxuICAgICAgICB0aXRsZTogXCJZXCJcbiAgICB9LFxuICAgIGFtb3VudDogeyB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5OdW1iZXIsIG1pbjogMiwgbWF4OiA1LCB0aXRsZTogXCJDb2xvcnNcIiB9LFxuICAgIGNvbG9yMTogeyB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5Db2xvciwgdGl0bGU6IFwiQ29sb3IgMVwiIH0sXG4gICAgY29sb3IyOiB7IHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLkNvbG9yLCB0aXRsZTogXCJDb2xvciAyXCIgfSxcbiAgICBjb2xvcjM6IHtcbiAgICAgICAgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuQ29sb3IsXG4gICAgICAgIHRpdGxlOiBcIkNvbG9yIDNcIixcbiAgICAgICAgaGlkZGVuKHByb3BzKSB7XG4gICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9wcy5hbW91bnQgPj0gMyA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29sb3I0OiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLkNvbG9yLFxuICAgICAgICB0aXRsZTogXCJDb2xvciA0XCIsXG4gICAgICAgIGhpZGRlbihwcm9wcykge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICByZXR1cm4gcHJvcHMuYW1vdW50ID49IDQgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbG9yNToge1xuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5Db2xvcixcbiAgICAgICAgdGl0bGU6IFwiQ29sb3IgNVwiLFxuICAgICAgICBoaWRkZW4ocHJvcHMpIHtcbiAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgcmV0dXJuIHByb3BzLmFtb3VudCA+PSA1ID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydHMuUmFkaWFsX2dyYWRpZW50ID0gUmFkaWFsX2dyYWRpZW50O1xuZXhwb3J0cy5fX2luZm9fXyA9IFt7IG5hbWU6IFwiUmFkaWFsX2dyYWRpZW50XCIsIGNoaWxkcmVuOiBmYWxzZSwgdHlwZTogXCJjb21wb25lbnRcIiB9XTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./code/Radial_gradient.tsx\n");

/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["framer"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"0.8.0","main":"build/framer.js","types":"build/framer.d.ts","author":"Framer","license":"MIT","devDependencies":{"@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/node":"^9.6.0","@types/react":"16.3.12","@types/react-dom":"^16.0.5","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","dts-bundle":"^0.7.3","enzyme":"^3.3.0","enzyme-adapter-react-16":"^1.1.1","fork-ts-checker-webpack-plugin":"^0.4.1","hoist-non-react-statics":"^2.5.0","jest":"^23.1.0","jest-diff":"^22.0.3","jest-junit":"^3.4.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.3.2","react-dev-utils":"^5.0.1","react-dom":"^16.3.2","ts-jest":"^22.4.5","ts-loader":"^4.1.0","tslint":"^5.10.0","tslint-microsoft-contrib":"^5.0.3","typescript":"^3.0.1","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^2.0.13","webpack-dev-server":"^3.1.4","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.3.2","react-dom":"^16.3.2"},"dependencies":{"draft-js":"0.10.4","eventemitter3":"^3.1.0","hsluv":"^0.0.3","immutable":"^3.8.2"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page","children":true},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneX","type":"device"},{"name":"FramerGoogleNexus4","type":"device"},{"name":"FramerGoogleNexus5X","type":"device"},{"name":"FramerGoogleNexus6","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerHTCOneA9","type":"device"},{"name":"FramerMicrosoftLumia950","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS8","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"}]},"scripts":{"coverage":"jest --config jest.json --coverage","test":"jest --config jest.json","watch":"jest --config jest.json --watch"}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, name, version, default */
/***/ (function(module) {

module.exports = {"main":"build/index.js","license":"MIT","devDependencies":{"@types/react":"^16.0.31","framer":"^0.8.0","randomcolor":"^0.5.3"},"peerDependencies":{"framer":"^0.8.0","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"1c7dae13-e3cc-493d-bc66-b41425fe2272","displayName":"Radial Gradient"},"author":"Sebastian Graz","dependencies":{},"name":"@framer/graz.radial-gradient","version":"1.3.0"};

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});


/***/ }),

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Children.tsx": "./code/Children.tsx",
	"./Examples.tsx": "./code/Examples.tsx",
	"./canvas.tsx": "./code/canvas.tsx",
	"./test.tsx": "./code/test.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/Children.tsx":
/*!***************************!*\
  !*** ./code/Children.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nconst style = {\n    height: \"100%\",\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\",\n    textAlign: \"center\",\n    color: \"white\",\n    overflow: \"hidden\",\n    borderRadius: \"10px\",\n};\nclass Children extends React.Component {\n    render() {\n        window[\"__checkBudget__\"]();\n        return React.createElement(\"div\", { style: style }, this.props.children);\n    }\n}\n// Set default properties\nChildren.defaultProps = {\n    text: \"Hello World!\"\n};\n// Items shown in property panel\nChildren.propertyControls = {\n    text: { type: framer_1.ControlType.String, title: \"Title\" },\n};\nexports.Children = Children;\nexports.__info__ = [{ name: \"Children\", children: true, type: \"component\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL0NoaWxkcmVuLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxlQUFlO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9EQUFvRDtBQUMvRDtBQUNBO0FBQ0EscUJBQXFCLHNEQUFzRCIsImZpbGUiOiIuL2NvZGUvQ2hpbGRyZW4udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IGZyYW1lcl8xID0gcmVxdWlyZShcImZyYW1lclwiKTtcbmNvbnN0IHN0eWxlID0ge1xuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxufTtcbmNsYXNzIENoaWxkcmVuIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZSB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG59XG4vLyBTZXQgZGVmYXVsdCBwcm9wZXJ0aWVzXG5DaGlsZHJlbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGV4dDogXCJIZWxsbyBXb3JsZCFcIlxufTtcbi8vIEl0ZW1zIHNob3duIGluIHByb3BlcnR5IHBhbmVsXG5DaGlsZHJlbi5wcm9wZXJ0eUNvbnRyb2xzID0ge1xuICAgIHRleHQ6IHsgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuU3RyaW5nLCB0aXRsZTogXCJUaXRsZVwiIH0sXG59O1xuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5fX2luZm9fXyA9IFt7IG5hbWU6IFwiQ2hpbGRyZW5cIiwgY2hpbGRyZW46IHRydWUsIHR5cGU6IFwiY29tcG9uZW50XCIgfV07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./code/Children.tsx\n");

/***/ }),

/***/ "./code/Examples.tsx":
/*!***************************!*\
  !*** ./code/Examples.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nconst data = framer_1.Data({ toggle: true, scale: framer_1.Animatable(1), opacity: framer_1.Animatable(1), rotation: framer_1.Animatable(0), rotationY: framer_1.Animatable(0) });\nexports.Scale = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        scale: data.scale,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            data.scale.set(0.6);\n            framer_1.animate.spring(data.scale, 1);\n        },\n    };\n};\nexports.Rotate = props => {\n    window[\"__checkBudget__\"]();\n    data.rotation.set(props.rotation);\n    return {\n        rotation: data.rotation,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            framer_1.animate.spring(data.rotation, data.rotation.get() + 90, {\n                tension: 250,\n                friction: 20,\n            });\n        },\n    };\n};\nexports.Fade = props => {\n    window[\"__checkBudget__\"]();\n    data.opacity.set(props.opacity);\n    return {\n        opacity: data.opacity,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            framer_1.animate.linear(data.opacity, 0, 0.2);\n        },\n    };\n};\nexports.FlipOutput = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        rotationY: data.rotationY,\n    };\n};\nexports.FlipInput = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        onTap() {\n            window[\"__checkBudget__\"]();\n            const toggle = data.toggle;\n            framer_1.animate.spring({ rotationY: data.rotationY }, {\n                rotationY: toggle ? 360 : 0,\n            }, { tension: 200, friction: 20 });\n            data.toggle = !toggle;\n        },\n    };\n};\nexports.__info__ = [{ name: \"Scale\", type: \"override\" }, { name: \"Rotate\", type: \"override\" }, { name: \"Fade\", type: \"override\" }, { name: \"FlipOutput\", type: \"override\" }, { name: \"FlipInput\", type: \"override\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL0V4YW1wbGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsNEJBQTRCLG9KQUFvSjtBQUNoTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw0QkFBNEI7QUFDakU7QUFDQSxhQUFhLEdBQUcsNkJBQTZCO0FBQzdDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxxQkFBcUIsa0NBQWtDLEdBQUcsbUNBQW1DLEdBQUcsaUNBQWlDLEdBQUcsdUNBQXVDLEdBQUcsc0NBQXNDIiwiZmlsZSI6Ii4vY29kZS9FeGFtcGxlcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZyYW1lcl8xID0gcmVxdWlyZShcImZyYW1lclwiKTtcbmNvbnN0IGRhdGEgPSBmcmFtZXJfMS5EYXRhKHsgdG9nZ2xlOiB0cnVlLCBzY2FsZTogZnJhbWVyXzEuQW5pbWF0YWJsZSgxKSwgb3BhY2l0eTogZnJhbWVyXzEuQW5pbWF0YWJsZSgxKSwgcm90YXRpb246IGZyYW1lcl8xLkFuaW1hdGFibGUoMCksIHJvdGF0aW9uWTogZnJhbWVyXzEuQW5pbWF0YWJsZSgwKSB9KTtcbmV4cG9ydHMuU2NhbGUgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NhbGU6IGRhdGEuc2NhbGUsXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBkYXRhLnNjYWxlLnNldCgwLjYpO1xuICAgICAgICAgICAgZnJhbWVyXzEuYW5pbWF0ZS5zcHJpbmcoZGF0YS5zY2FsZSwgMSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLlJvdGF0ZSA9IHByb3BzID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICBkYXRhLnJvdGF0aW9uLnNldChwcm9wcy5yb3RhdGlvbik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm90YXRpb246IGRhdGEucm90YXRpb24sXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLnNwcmluZyhkYXRhLnJvdGF0aW9uLCBkYXRhLnJvdGF0aW9uLmdldCgpICsgOTAsIHtcbiAgICAgICAgICAgICAgICB0ZW5zaW9uOiAyNTAsXG4gICAgICAgICAgICAgICAgZnJpY3Rpb246IDIwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLkZhZGUgPSBwcm9wcyA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgZGF0YS5vcGFjaXR5LnNldChwcm9wcy5vcGFjaXR5KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiBkYXRhLm9wYWNpdHksXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLmxpbmVhcihkYXRhLm9wYWNpdHksIDAsIDAuMik7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLkZsaXBPdXRwdXQgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm90YXRpb25ZOiBkYXRhLnJvdGF0aW9uWSxcbiAgICB9O1xufTtcbmV4cG9ydHMuRmxpcElucHV0ID0gKCkgPT4ge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBjb25zdCB0b2dnbGUgPSBkYXRhLnRvZ2dsZTtcbiAgICAgICAgICAgIGZyYW1lcl8xLmFuaW1hdGUuc3ByaW5nKHsgcm90YXRpb25ZOiBkYXRhLnJvdGF0aW9uWSB9LCB7XG4gICAgICAgICAgICAgICAgcm90YXRpb25ZOiB0b2dnbGUgPyAzNjAgOiAwLFxuICAgICAgICAgICAgfSwgeyB0ZW5zaW9uOiAyMDAsIGZyaWN0aW9uOiAyMCB9KTtcbiAgICAgICAgICAgIGRhdGEudG9nZ2xlID0gIXRvZ2dsZTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcbmV4cG9ydHMuX19pbmZvX18gPSBbeyBuYW1lOiBcIlNjYWxlXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiUm90YXRlXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiRmFkZVwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIkZsaXBPdXRwdXRcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJGbGlwSW5wdXRcIiwgdHlwZTogXCJvdmVycmlkZVwiIH1dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/Examples.tsx\n");

/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared(); // CANVAS_DATA;
exports.Gj = framer_1.createDesignComponent(canvas, "id_P_a8uHyP1", {}, 34, 34);
exports.__info__ = [];


/***/ }),

/***/ "./code/test.tsx":
/*!***********************!*\
  !*** ./code/test.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nconst style = {\n    height: \"100%\",\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\",\n    textAlign: \"center\",\n    color: \"#8855FF\",\n    background: \"rgba(136, 85, 255, 0.1)\",\n    overflow: \"hidden\",\n};\nclass test extends React.Component {\n    render() {\n        window[\"__checkBudget__\"]();\n        return React.createElement(\"div\", { style: style }, this.props.text);\n    }\n}\n// Set default properties\ntest.defaultProps = {\n    text: \"Hello World!\"\n};\n// Items shown in property panel\ntest.propertyControls = {\n    text: { type: framer_1.ControlType.String, title: \"Text\" },\n};\nexports.test = test;\nexports.__info__ = [{ name: \"test\", children: false, type: \"component\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL3Rlc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGVBQWU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbURBQW1EO0FBQzlEO0FBQ0E7QUFDQSxxQkFBcUIsbURBQW1EIiwiZmlsZSI6Ii4vY29kZS90ZXN0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBmcmFtZXJfMSA9IHJlcXVpcmUoXCJmcmFtZXJcIik7XG5jb25zdCBzdHlsZSA9IHtcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGNvbG9yOiBcIiM4ODU1RkZcIixcbiAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMTM2LCA4NSwgMjU1LCAwLjEpXCIsXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG59O1xuY2xhc3MgdGVzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGUgfSwgdGhpcy5wcm9wcy50ZXh0KTtcbiAgICB9XG59XG4vLyBTZXQgZGVmYXVsdCBwcm9wZXJ0aWVzXG50ZXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0ZXh0OiBcIkhlbGxvIFdvcmxkIVwiXG59O1xuLy8gSXRlbXMgc2hvd24gaW4gcHJvcGVydHkgcGFuZWxcbnRlc3QucHJvcGVydHlDb250cm9scyA9IHtcbiAgICB0ZXh0OiB7IHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLlN0cmluZywgdGl0bGU6IFwiVGV4dFwiIH0sXG59O1xuZXhwb3J0cy50ZXN0ID0gdGVzdDtcbmV4cG9ydHMuX19pbmZvX18gPSBbeyBuYW1lOiBcInRlc3RcIiwgY2hpbGRyZW46IGZhbHNlLCB0eXBlOiBcImNvbXBvbmVudFwiIH1dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/test.tsx\n");

/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["@framer/graz.radial-gradient"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/graz.radial-gradient */ "../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/graz.radial-gradient/build/index.js")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"main":"build/index.js","license":"MIT","devDependencies":{"@types/react":"^16.0.31","framer":"^0.8.0","randomcolor":"^0.5.3"},"peerDependencies":{"framer":"^0.8.0","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"1c7dae13-e3cc-493d-bc66-b41425fe2272","displayName":"Radial Gradient"},"author":"Sebastian Graz","dependencies":{},"name":"@framer/graz.radial-gradient","version":"1.4.0","design":{"root":{"__class":"RootNode","children":[{"__class":"ShapeContainerNode","aspectRatio":null,"autoSize":true,"bottom":null,"centerAnchorX":0,"centerAnchorY":0,"children":[{"__class":"OvalShapeNode","aspectRatio":null,"boxShadows":[],"children":[],"exportOptions":[],"fillColor":"rgba(73, 89, 89, 1.00)","fillEnabled":true,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"id":"XhgnfRD_U","lineCap":"butt","lineJoin":"miter","locked":false,"name":null,"opacity":1,"originalid":null,"parentid":"twyU3Ukdq","rotation":0,"strokeAlignment":"center","strokeColor":"#0AF","strokeDashArray":"0","strokeDashOffset":0,"strokeEnabled":0,"strokeMiterLimit":4,"strokeWidth":1,"visible":true,"width":150,"x":0,"y":0}],"constraintsLocked":false,"exportIncludesBackground":false,"exportOptions":[],"fillColor":"#FFF","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"heightType":0,"id":"twyU3Ukdq","left":1184,"locked":false,"name":null,"navigationTarget":null,"navigationTransition":"push","navigationTransitionDirection":"left","originalid":null,"parentid":"vdQBz0R6S","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":null,"rotation":0,"top":1206,"visible":true,"width":150,"widthType":0},{"__class":"ShapeContainerNode","aspectRatio":null,"autoSize":true,"bottom":null,"centerAnchorX":0,"centerAnchorY":0,"children":[{"__class":"OvalShapeNode","aspectRatio":null,"boxShadows":[],"children":[],"exportOptions":[],"fillColor":"rgba(132, 20, 42, 1.00)","fillEnabled":true,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"id":"G3lUsfJqX","lineCap":"butt","lineJoin":"miter","locked":false,"name":null,"opacity":1,"originalid":null,"parentid":"AadvZ3nst","rotation":0,"strokeAlignment":"center","strokeColor":"#0AF","strokeDashArray":"0","strokeDashOffset":0,"strokeEnabled":0,"strokeMiterLimit":4,"strokeWidth":1,"visible":true,"width":150,"x":0,"y":0}],"constraintsLocked":false,"exportIncludesBackground":false,"exportOptions":[],"fillColor":"#FFF","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"heightType":0,"id":"AadvZ3nst","left":1344,"locked":false,"name":null,"navigationTarget":null,"navigationTransition":"push","navigationTransitionDirection":"left","originalid":null,"parentid":"vdQBz0R6S","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":null,"rotation":0,"top":1206,"visible":true,"width":150,"widthType":0},{"__class":"ShapeContainerNode","aspectRatio":null,"autoSize":true,"bottom":null,"centerAnchorX":0,"centerAnchorY":0,"children":[{"__class":"OvalShapeNode","aspectRatio":null,"boxShadows":[],"children":[],"exportOptions":[],"fillColor":"rgba(234, 1, 30, 1.00)","fillEnabled":true,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"id":"ee5xmQzRW","lineCap":"butt","lineJoin":"miter","locked":false,"name":null,"opacity":1,"originalid":null,"parentid":"HLv1gb8ma","rotation":0,"strokeAlignment":"center","strokeColor":"#0AF","strokeDashArray":"0","strokeDashOffset":0,"strokeEnabled":0,"strokeMiterLimit":4,"strokeWidth":1,"visible":true,"width":150,"x":0,"y":0}],"constraintsLocked":false,"exportIncludesBackground":false,"exportOptions":[],"fillColor":"#FFF","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"heightType":0,"id":"HLv1gb8ma","left":1504,"locked":false,"name":null,"navigationTarget":null,"navigationTransition":"push","navigationTransitionDirection":"left","originalid":null,"parentid":"vdQBz0R6S","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":null,"rotation":0,"top":1206,"visible":true,"width":150,"widthType":0},{"__class":"ShapeContainerNode","aspectRatio":null,"autoSize":true,"bottom":null,"centerAnchorX":0,"centerAnchorY":0,"children":[{"__class":"OvalShapeNode","aspectRatio":null,"boxShadows":[],"children":[],"exportOptions":[],"fillColor":"rgba(151, 54, 175, 1.00)","fillEnabled":true,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"id":"iVpBQBWYj","lineCap":"butt","lineJoin":"miter","locked":false,"name":null,"opacity":1,"originalid":null,"parentid":"YbPvNWFN4","rotation":0,"strokeAlignment":"center","strokeColor":"#0AF","strokeDashArray":"0","strokeDashOffset":0,"strokeEnabled":0,"strokeMiterLimit":4,"strokeWidth":1,"visible":true,"width":150,"x":0,"y":0}],"constraintsLocked":false,"exportIncludesBackground":false,"exportOptions":[],"fillColor":"#FFF","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"heightType":0,"id":"YbPvNWFN4","left":1184,"locked":false,"name":null,"navigationTarget":null,"navigationTransition":"push","navigationTransitionDirection":"left","originalid":null,"parentid":"vdQBz0R6S","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":null,"rotation":0,"top":1420,"visible":true,"width":150,"widthType":0},{"__class":"ShapeContainerNode","aspectRatio":null,"autoSize":true,"bottom":null,"centerAnchorX":0,"centerAnchorY":0,"children":[{"__class":"OvalShapeNode","aspectRatio":null,"boxShadows":[],"children":[],"exportOptions":[],"fillColor":"rgba(54, 251, 187, 1.00)","fillEnabled":true,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"id":"JFnSyxOj3","lineCap":"butt","lineJoin":"miter","locked":false,"name":null,"opacity":1,"originalid":null,"parentid":"Ib61u2oHw","rotation":0,"strokeAlignment":"center","strokeColor":"#0AF","strokeDashArray":"0","strokeDashOffset":0,"strokeEnabled":0,"strokeMiterLimit":4,"strokeWidth":1,"visible":true,"width":150,"x":0,"y":0}],"constraintsLocked":false,"exportIncludesBackground":false,"exportOptions":[],"fillColor":"#FFF","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"heightType":0,"id":"Ib61u2oHw","left":1024,"locked":false,"name":null,"navigationTarget":null,"navigationTransition":"push","navigationTransitionDirection":"left","originalid":null,"parentid":"vdQBz0R6S","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":null,"rotation":0,"top":1644,"visible":true,"width":150,"widthType":0},{"__class":"ShapeContainerNode","aspectRatio":null,"autoSize":true,"bottom":null,"centerAnchorX":0,"centerAnchorY":0,"children":[{"__class":"OvalShapeNode","aspectRatio":null,"boxShadows":[],"children":[],"exportOptions":[],"fillColor":"rgba(30, 98, 125, 1.00)","fillEnabled":true,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"id":"W3zWKEIMW","lineCap":"butt","lineJoin":"miter","locked":false,"name":null,"opacity":1,"originalid":null,"parentid":"VKbfAREaR","rotation":0,"strokeAlignment":"center","strokeColor":"#0AF","strokeDashArray":"0","strokeDashOffset":0,"strokeEnabled":0,"strokeMiterLimit":4,"strokeWidth":1,"visible":true,"width":150,"x":0,"y":0}],"constraintsLocked":false,"exportIncludesBackground":false,"exportOptions":[],"fillColor":"#FFF","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"heightType":0,"id":"VKbfAREaR","left":1184,"locked":false,"name":null,"navigationTarget":null,"navigationTransition":"push","navigationTransitionDirection":"left","originalid":null,"parentid":"vdQBz0R6S","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":null,"rotation":0,"top":1644,"visible":true,"width":150,"widthType":0},{"__class":"ShapeContainerNode","aspectRatio":null,"autoSize":true,"bottom":null,"centerAnchorX":0,"centerAnchorY":0,"children":[{"__class":"OvalShapeNode","aspectRatio":null,"boxShadows":[],"children":[],"exportOptions":[],"fillColor":"rgba(242, 18, 108, 1.00)","fillEnabled":true,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"id":"JQhF2CwDx","lineCap":"butt","lineJoin":"miter","locked":false,"name":null,"opacity":1,"originalid":null,"parentid":"t5oYApcTY","rotation":0,"strokeAlignment":"center","strokeColor":"#0AF","strokeDashArray":"0","strokeDashOffset":0,"strokeEnabled":0,"strokeMiterLimit":4,"strokeWidth":1,"visible":true,"width":150,"x":0,"y":0}],"constraintsLocked":false,"exportIncludesBackground":false,"exportOptions":[],"fillColor":"#FFF","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"heightType":0,"id":"t5oYApcTY","left":1344,"locked":false,"name":null,"navigationTarget":null,"navigationTransition":"push","navigationTransitionDirection":"left","originalid":null,"parentid":"vdQBz0R6S","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":null,"rotation":0,"top":1644,"visible":true,"width":150,"widthType":0},{"__class":"ShapeContainerNode","aspectRatio":null,"autoSize":true,"bottom":null,"centerAnchorX":0,"centerAnchorY":0,"children":[{"__class":"OvalShapeNode","aspectRatio":null,"boxShadows":[],"children":[],"exportOptions":[],"fillColor":"rgba(49, 2, 46, 1.00)","fillEnabled":true,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"id":"QO8UgkAep","lineCap":"butt","lineJoin":"miter","locked":false,"name":null,"opacity":1,"originalid":null,"parentid":"i7yMLs_qp","rotation":0,"strokeAlignment":"center","strokeColor":"#0AF","strokeDashArray":"0","strokeDashOffset":0,"strokeEnabled":0,"strokeMiterLimit":4,"strokeWidth":1,"visible":true,"width":150,"x":0,"y":0}],"constraintsLocked":false,"exportIncludesBackground":false,"exportOptions":[],"fillColor":"#FFF","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"heightType":0,"id":"i7yMLs_qp","left":1504,"locked":false,"name":null,"navigationTarget":null,"navigationTransition":"push","navigationTransitionDirection":"left","originalid":null,"parentid":"vdQBz0R6S","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":null,"rotation":0,"top":1644,"visible":true,"width":150,"widthType":0},{"__class":"ShapeContainerNode","aspectRatio":null,"autoSize":true,"bottom":null,"centerAnchorX":0,"centerAnchorY":0,"children":[{"__class":"OvalShapeNode","aspectRatio":null,"boxShadows":[],"children":[],"exportOptions":[],"fillColor":"rgba(251, 173, 102, 1.00)","fillEnabled":true,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"id":"VHEV42v5F","lineCap":"butt","lineJoin":"miter","locked":false,"name":null,"opacity":1,"originalid":null,"parentid":"ZPwSHLNBG","rotation":0,"strokeAlignment":"center","strokeColor":"#0AF","strokeDashArray":"0","strokeDashOffset":0,"strokeEnabled":0,"strokeMiterLimit":4,"strokeWidth":1,"visible":true,"width":150,"x":0,"y":0}],"constraintsLocked":false,"exportIncludesBackground":false,"exportOptions":[],"fillColor":"#FFF","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"heightType":0,"id":"ZPwSHLNBG","left":1024,"locked":false,"name":null,"navigationTarget":null,"navigationTransition":"push","navigationTransitionDirection":"left","originalid":null,"parentid":"vdQBz0R6S","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":null,"rotation":0,"top":1858,"visible":true,"width":150,"widthType":0},{"__class":"ShapeContainerNode","aspectRatio":null,"autoSize":true,"bottom":null,"centerAnchorX":0,"centerAnchorY":0,"children":[{"__class":"OvalShapeNode","aspectRatio":null,"boxShadows":[],"children":[],"exportOptions":[],"fillColor":"rgba(247, 1, 3, 1.00)","fillEnabled":true,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"id":"VkssQJlng","lineCap":"butt","lineJoin":"miter","locked":false,"name":null,"opacity":1,"originalid":null,"parentid":"PAbS2Q2zB","rotation":0,"strokeAlignment":"center","strokeColor":"#0AF","strokeDashArray":"0","strokeDashOffset":0,"strokeEnabled":0,"strokeMiterLimit":4,"strokeWidth":1,"visible":true,"width":150,"x":0,"y":0}],"constraintsLocked":false,"exportIncludesBackground":false,"exportOptions":[],"fillColor":"#FFF","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"heightType":0,"id":"PAbS2Q2zB","left":1184,"locked":false,"name":null,"navigationTarget":null,"navigationTransition":"push","navigationTransitionDirection":"left","originalid":null,"parentid":"vdQBz0R6S","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":null,"rotation":0,"top":1858,"visible":true,"width":150,"widthType":0},{"__class":"ShapeContainerNode","aspectRatio":null,"autoSize":true,"bottom":null,"centerAnchorX":0,"centerAnchorY":0,"children":[{"__class":"OvalShapeNode","aspectRatio":null,"boxShadows":[],"children":[],"exportOptions":[],"fillColor":"rgba(78, 36, 111, 1.00)","fillEnabled":true,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"id":"IvjdzDeu5","lineCap":"butt","lineJoin":"miter","locked":false,"name":null,"opacity":1,"originalid":null,"parentid":"gTJwBs5_m","rotation":0,"strokeAlignment":"center","strokeColor":"#0AF","strokeDashArray":"0","strokeDashOffset":0,"strokeEnabled":0,"strokeMiterLimit":4,"strokeWidth":1,"visible":true,"width":150,"x":0,"y":0}],"constraintsLocked":false,"exportIncludesBackground":false,"exportOptions":[],"fillColor":"#FFF","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"heightType":0,"id":"gTJwBs5_m","left":1344,"locked":false,"name":null,"navigationTarget":null,"navigationTransition":"push","navigationTransitionDirection":"left","originalid":null,"parentid":"vdQBz0R6S","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":null,"rotation":0,"top":1858,"visible":true,"width":150,"widthType":0},{"__class":"ShapeContainerNode","aspectRatio":null,"autoSize":true,"bottom":null,"centerAnchorX":0,"centerAnchorY":0,"children":[{"__class":"OvalShapeNode","aspectRatio":null,"boxShadows":[],"children":[],"exportOptions":[],"fillColor":"rgba(0, 54, 159, 1.00)","fillEnabled":true,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"id":"ZWXrS6pBy","lineCap":"butt","lineJoin":"miter","locked":false,"name":null,"opacity":1,"originalid":null,"parentid":"FWWs45cMn","rotation":0,"strokeAlignment":"center","strokeColor":"#0AF","strokeDashArray":"0","strokeDashOffset":0,"strokeEnabled":0,"strokeMiterLimit":4,"strokeWidth":1,"visible":true,"width":150,"x":0,"y":0}],"constraintsLocked":false,"exportIncludesBackground":false,"exportOptions":[],"fillColor":"#FFF","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"heightType":0,"id":"FWWs45cMn","left":1504,"locked":false,"name":null,"navigationTarget":null,"navigationTransition":"push","navigationTransitionDirection":"left","originalid":null,"parentid":"vdQBz0R6S","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":null,"rotation":0,"top":1858,"visible":true,"width":150,"widthType":0},{"__class":"ShapeContainerNode","aspectRatio":null,"autoSize":true,"bottom":null,"centerAnchorX":0,"centerAnchorY":0,"children":[{"__class":"OvalShapeNode","aspectRatio":null,"boxShadows":[],"children":[],"exportOptions":[],"fillColor":"rgba(251, 13, 92, 1.00)","fillEnabled":true,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"id":"DWHBO9x8X","lineCap":"butt","lineJoin":"miter","locked":false,"name":null,"opacity":1,"originalid":null,"parentid":"DYfMHSvmu","rotation":0,"strokeAlignment":"center","strokeColor":"#0AF","strokeDashArray":"0","strokeDashOffset":0,"strokeEnabled":0,"strokeMiterLimit":4,"strokeWidth":1,"visible":true,"width":150,"x":0,"y":0}],"constraintsLocked":false,"exportIncludesBackground":false,"exportOptions":[],"fillColor":"#FFF","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"heightType":0,"id":"DYfMHSvmu","left":1024,"locked":false,"name":null,"navigationTarget":null,"navigationTransition":"push","navigationTransitionDirection":"left","originalid":null,"parentid":"vdQBz0R6S","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":null,"rotation":0,"top":2072,"visible":true,"width":150,"widthType":0},{"__class":"ShapeContainerNode","aspectRatio":null,"autoSize":true,"bottom":null,"centerAnchorX":0,"centerAnchorY":0,"children":[{"__class":"OvalShapeNode","aspectRatio":null,"boxShadows":[],"children":[],"exportOptions":[],"fillColor":"rgba(6, 20, 186, 1.00)","fillEnabled":true,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"id":"lZxdQsQKI","lineCap":"butt","lineJoin":"miter","locked":false,"name":null,"opacity":1,"originalid":null,"parentid":"R_qZFdcVV","rotation":0,"strokeAlignment":"center","strokeColor":"#0AF","strokeDashArray":"0","strokeDashOffset":0,"strokeEnabled":0,"strokeMiterLimit":4,"strokeWidth":1,"visible":true,"width":150,"x":0,"y":0}],"constraintsLocked":false,"exportIncludesBackground":false,"exportOptions":[],"fillColor":"#FFF","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"heightType":0,"id":"R_qZFdcVV","left":1184,"locked":false,"name":null,"navigationTarget":null,"navigationTransition":"push","navigationTransitionDirection":"left","originalid":null,"parentid":"vdQBz0R6S","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":null,"rotation":0,"top":2072,"visible":true,"width":150,"widthType":0},{"__class":"ShapeContainerNode","aspectRatio":null,"autoSize":true,"bottom":null,"centerAnchorX":0,"centerAnchorY":0,"children":[{"__class":"OvalShapeNode","aspectRatio":null,"boxShadows":[],"children":[],"exportOptions":[],"fillColor":"rgba(21, 241, 167, 1.00)","fillEnabled":true,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"id":"l_MMKN95b","lineCap":"butt","lineJoin":"miter","locked":false,"name":null,"opacity":1,"originalid":null,"parentid":"KFZhdc7eE","rotation":0,"strokeAlignment":"center","strokeColor":"#0AF","strokeDashArray":"0","strokeDashOffset":0,"strokeEnabled":0,"strokeMiterLimit":4,"strokeWidth":1,"visible":true,"width":150,"x":0,"y":0}],"constraintsLocked":false,"exportIncludesBackground":false,"exportOptions":[],"fillColor":"#FFF","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"heightType":0,"id":"KFZhdc7eE","left":1344,"locked":false,"name":null,"navigationTarget":null,"navigationTransition":"push","navigationTransitionDirection":"left","originalid":null,"parentid":"vdQBz0R6S","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":null,"rotation":0,"top":2072,"visible":true,"width":150,"widthType":0},{"__class":"ShapeContainerNode","aspectRatio":null,"autoSize":true,"bottom":null,"centerAnchorX":0,"centerAnchorY":0,"children":[{"__class":"OvalShapeNode","aspectRatio":null,"boxShadows":[],"children":[],"exportOptions":[],"fillColor":"rgba(0, 170, 255, 1.00)","fillEnabled":true,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"id":"R6JmnyL6a","lineCap":"butt","lineJoin":"miter","locked":false,"name":null,"opacity":1,"originalid":null,"parentid":"ZcvwNflbi","rotation":0,"strokeAlignment":"center","strokeColor":"#0AF","strokeDashArray":"0","strokeDashOffset":0,"strokeEnabled":0,"strokeMiterLimit":4,"strokeWidth":1,"visible":true,"width":150,"x":0,"y":0}],"constraintsLocked":false,"exportIncludesBackground":false,"exportOptions":[],"fillColor":"#FFF","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"heightType":0,"id":"ZcvwNflbi","left":1184,"locked":false,"name":null,"navigationTarget":null,"navigationTransition":"push","navigationTransitionDirection":"left","originalid":null,"parentid":"vdQBz0R6S","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":null,"rotation":0,"top":2376,"visible":true,"width":150,"widthType":0},{"__class":"ShapeContainerNode","aspectRatio":null,"autoSize":true,"bottom":null,"centerAnchorX":0,"centerAnchorY":0,"children":[{"__class":"OvalShapeNode","aspectRatio":null,"boxShadows":[],"children":[],"exportOptions":[],"fillColor":"rgba(1, 85, 255, 1.00)","fillEnabled":true,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"id":"zHSgEwwAm","lineCap":"butt","lineJoin":"miter","locked":false,"name":null,"opacity":1,"originalid":null,"parentid":"urxsDzZsJ","rotation":0,"strokeAlignment":"center","strokeColor":"#0AF","strokeDashArray":"0","strokeDashOffset":0,"strokeEnabled":0,"strokeMiterLimit":4,"strokeWidth":1,"visible":true,"width":150,"x":0,"y":0}],"constraintsLocked":false,"exportIncludesBackground":false,"exportOptions":[],"fillColor":"#FFF","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","height":150,"heightType":0,"id":"urxsDzZsJ","left":1344,"locked":false,"name":null,"navigationTarget":null,"navigationTransition":"push","navigationTransitionDirection":"left","originalid":null,"parentid":"vdQBz0R6S","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":null,"rotation":0,"top":2376,"visible":true,"width":150,"widthType":0},{"__class":"CodeComponentNode","aspectRatio":null,"blur":12,"blurEnabled":0,"blurType":"layer","borderBottom":1,"borderColor":"#222","borderEnabled":0,"borderLeft":1,"borderPerSide":false,"borderRight":1,"borderStyle":"solid","borderTop":1,"borderWidth":1,"bottom":null,"boxShadows":[],"brightness":100,"brightnessEnabled":0,"centerAnchorX":0,"centerAnchorY":0,"children":[],"clip":true,"codeComponentIdentifier":"./Radial_gradient.tsx_Radial_gradient","codeComponentProps":{"amount":3,"color1":"hsl(253, 82%, 22%)","color2":"#F70103","color3":"#4E246F","color4":"#01369F","color5":"#2E53FA","extent":"closest-side","isFlipped":false,"isRandom":false,"shape":"ellipse","xPos":33,"yPos":31},"codeOverrideEnabled":false,"constraintsLocked":false,"contrast":100,"contrastEnabled":0,"exportOptions":[],"fillColor":"rgba(255,255,255,1)","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","grayscale":0,"grayScaleEnabled":0,"height":200,"heightType":0,"hueRotate":0,"hueRotateEnabled":0,"id":"m9_COiu9C","intrinsicHeight":null,"intrinsicWidth":null,"invert":0,"invertEnabled":0,"left":292,"locked":false,"name":null,"opacity":1,"originalid":null,"parentid":"vdQBz0R6S","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusIsRelative":false,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":null,"rotation":0,"saturate":100,"saturateEnabled":0,"sepia":0,"sepiaEnabled":0,"top":1060,"visible":true,"width":708,"widthType":0}],"id":"vdQBz0R6S","name":null,"originalid":null,"parentid":null,"visible":false},"version":47}}
                    return package
                }

                packages["framer"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"0.10.1","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --config jest.json --coverage","test":"jest --config jest.json","watch":"jest --config jest.json --watch"},"devDependencies":{"@microsoft/api-documenter":"^1.5.47","@microsoft/api-extractor":"^7.0.2","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/node":"^9.6.0","@types/react":"^16","@types/react-dom":"^16","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.3.0","enzyme-adapter-react-16":"^1.1.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^22.0.3","jest-junit":"^3.4.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"~16.4","react-dev-utils":"^5.0.1","react-dom":"~16.4","semver":"^5.6.0","ts-jest":"^22.4.5","ts-loader":"^4.1.0","typescript":"^3.0.1","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^2.0.13","webpack-dev-server":"^3.1.4","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.3","react-dom":"^16.3"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, default */
/***/ (function(module) {

module.exports = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.4.16","framer":"^0.10.1"},"peerDependencies":{"framer":"^0.10.1","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"bcd5b011-60dd-40fd-800a-6de57d8f2681"},"author":"Hi schmid","dependencies":{"@framer/graz.radial-gradient":"^1.4.0"}};

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});