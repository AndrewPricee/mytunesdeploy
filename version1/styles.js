(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./src/styles.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/styles.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=PT+Sans');\r\n\r\n/* CSS Variables */\r\n\r\n:root {\r\n  --primary-color: #b90415;\r\n  --primary-color-hover: #d3071b;\r\n  --secondary-color: #103063;\r\n  --secondary-color-hover: #143f85;\r\n  --light-color: #f4f4f4;\r\n}\r\n\r\nbody {\r\n  font-family: 'PT Sans', sans-serif;\r\n  background-color: #252529;\r\n  margin: 0;\r\n  color: #fff;\r\n  line-height: 1.6;\r\n}\r\n\r\n.form-control{\r\n  width: 40%;\r\n  position: absolute;\r\n  left: 30%;\r\n}\r\n\r\n.media{\r\n  margin-top: 5%;\r\n}\r\n\r\n.homeimg {\r\n  width: 100%;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #ccc;\r\n}\r\n\r\na:hover{\r\n  text-decoration: none !important;\r\n  color: #ccc !important;\r\n}\r\n\r\n/* Section */\r\n\r\n.section {\r\n  padding: 2rem 0;\r\n}\r\n\r\n.section-head {\r\n  font-size: 2.5rem;\r\n  margin: 0;\r\n  margin-top: 2%;\r\n}\r\n\r\n.section h3 {\r\n  font-size: 2rem;\r\n}\r\n\r\nsection#entertainment {\r\n  background: url('section-bg.jpg') no-repeat bottom/cover;\r\n  padding: 10rem 0;\r\n}\r\n\r\n.gift-cards {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  grid-gap: 20px;\r\n  -ms-grid-columns: (1fr)[2];\r\n      grid-template-columns: repeat(2, 1fr);\r\n  text-align: left;\r\n  \r\n}\r\n\r\n.gift-cards a{\r\n  color: orange;\r\n}\r\n\r\n/* Showcase */\r\n\r\n#showcase {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('showcase.jpg') no-repeat center/cover;\r\n  width: 100%;\r\n  height: 100vh;\r\n  position: relative;\r\n  overflow-y: hidden;\r\n  text-shadow: 2px 1px #252529;\r\n}\r\n\r\n#showcase .container {\r\n  margin-top: 25vh;\r\n}\r\n\r\n#showcase h1 {\r\n  font-size: 4rem;\r\n  margin-bottom: 0;\r\n}\r\n\r\n#showcase h2 {\r\n  font-size: 2rem;\r\n}\r\n\r\n/* Footer */\r\n\r\nfooter .footer-cols {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  grid-gap: 20px;\r\n  -ms-grid-columns: (1fr)[4];\r\n      grid-template-columns: repeat(4, 1fr);\r\n  padding: 2rem;\r\n  text-align: left;\r\n  font-size: 14px;\r\n}\r\n\r\nfooter .footer-cols ul {\r\n  list-style: none;\r\n}\r\n\r\nfooter .footer-cols ul li:first-child {\r\n  font-size: 1.2rem;\r\n  padding-bottom: 0.5rem;\r\n  border-bottom: #444 solid 1px;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nfooter .footer-bottom {\r\n  background: #333;\r\n  padding: 1rem;\r\n}\r\n\r\n/* Utility Classes */\r\n\r\n.container {\r\n  max-width: 1180px;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n  padding: 0 3rem;\r\n}\r\n\r\n.lead {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n/* Buttons */\r\n\r\n.btn {\r\n  padding: 1rem;\r\n  color: #fff;\r\n  display: inline-block;\r\n  border: none !important;\r\n}\r\n\r\n.btn-primary {\r\n  background: var(--primary-color);\r\n}\r\n\r\n.btn-primary:hover {\r\n  background: var(--primary-color-hover);\r\n}\r\n\r\n.btn-secondary {\r\n  background: var(--secondary-color);\r\n}\r\n\r\n.btn-secondary:hover {\r\n  background: var(--secondary-color-hover);\r\n}\r\n\r\n/* Text colors */\r\n\r\n.text-primary {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.text-secondary {\r\n  color: var(--secondary-color);\r\n}\r\n\r\n.text-light {\r\n  color: var(--light-color);\r\n}\r\n\r\n.bg-light {\r\n  background: var(--light-color);\r\n  color: #333;\r\n}\r\n\r\n.mb {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.mt {\r\n  margin-top: 1rem;\r\n}\r\n\r\n/* Navigation */\r\n\r\nnav {\r\n  height: 40px;\r\n  width: 100%;\r\n  background-color: #333;\r\n  color: #eee;\r\n  position: fixed;\r\n}\r\n\r\nnav ul {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nnav li {\r\n  display: inline;\r\n}\r\n\r\nnav a {\r\n  display: inline-block;\r\n  width: 100px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  padding: 10px 0;\r\n  color: #eee;\r\n  text-decoration: none;\r\n}\r\n\r\nnav li:hover {\r\n  background-color: #444;\r\n  text-decoration: none !important;\r\n  color: #ccc !important;\r\n}\r\n\r\nnav a#openup {\r\n  display: none;\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .hide-on-small {\r\n    display: none;\r\n  }\r\n\r\n  #showcase {\r\n    height: 50vh;\r\n  }\r\n\r\n  #showcase .container {\r\n    margin-top: 15vh;\r\n  }\r\n\r\n  #showcase h1 {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  #showcase h2 {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  nav {\r\n    height: auto;\r\n    border-bottom: 0;\r\n  }\r\n  nav ul {\r\n    display: none;\r\n    height: auto;\r\n  }\r\n  nav li {\r\n    width: 100%;\r\n    float: left;\r\n    position: relative;\r\n  }\r\n  nav a {\r\n    text-align: left;\r\n    width: 100%;\r\n    text-indent: 25px;\r\n    background: #333;\r\n    border-bottom: 1px solid #555;\r\n  }\r\n  nav a:hover {\r\n    background: #444;\r\n  }\r\n  nav a#openup:after {\r\n    content: '|||';\r\n    transform: rotate(-90deg);\r\n    -ms-transform: rotate(-90deg);\r\n    /* IE 9 */\r\n    -webkit-transform: rotate(-90deg);\r\n    /* Safari and Chrome */\r\n    width: 30px;\r\n    height: 30px;\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 20px;\r\n  }\r\n  nav a#openup {\r\n    display: block;\r\n    background-color: #333;\r\n    width: 100%;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n.cf:before,\r\n.cf:after {\r\n  content: '';\r\n  display: table;\r\n}\r\n\r\n.cf:after {\r\n  clear: both;\r\n}\r\n\r\n.cf {\r\n  zoom: 1;\r\n}\r\n\r\n@media screen and (max-width: 780px) {\r\n  .gift-cards {\r\n    -ms-grid-columns: 1fr;\r\n        grid-template-columns: 1fr;\r\n  }\r\n\r\n  footer .footer-cols {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-height: 580px) {\r\n  #showcase p.lead {\r\n    display: none;\r\n  }\r\n}\r\n\r\n#glimpse{\r\n  position: relative;\r\n  float: right;\r\n  margin-right: 5%; \r\n  padding: 0;\r\n}\r\n\r\n#small{\r\n  font-size: 80%;\r\n}"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\mytunes\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map