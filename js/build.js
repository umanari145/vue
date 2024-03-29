/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	window.$ = global.jQuery = __webpack_require__(1);
	window.Tether = __webpack_require__(2);
	window.Popper = __webpack_require__(3);
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"bootstrap\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	window.Sugar = __webpack_require__(5)


	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.6.0
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright OpenJS Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2021-03-02T17:08Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var flat = arr.flat ? function( array ) {
		return arr.flat.call( array );
	} : function( array ) {
		return arr.concat.apply( [], array );
	};


	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};

	var isFunction = function isFunction( obj ) {

			// Support: Chrome <=57, Firefox <=52
			// In some browsers, typeof returns "function" for HTML <object> elements
			// (i.e., `typeof document.createElement( "object" ) === "function"`).
			// We don't want to classify *any* DOM node as a function.
			// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
			// Plus for old WebKit, typeof returns "function" for HTML collections
			// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
			return typeof obj === "function" && typeof obj.nodeType !== "number" &&
				typeof obj.item !== "function";
		};


	var isWindow = function isWindow( obj ) {
			return obj != null && obj === obj.window;
		};


	var document = window.document;



		var preservedScriptAttributes = {
			type: true,
			src: true,
			nonce: true,
			noModule: true
		};

		function DOMEval( code, node, doc ) {
			doc = doc || document;

			var i, val,
				script = doc.createElement( "script" );

			script.text = code;
			if ( node ) {
				for ( i in preservedScriptAttributes ) {

					// Support: Firefox 64+, Edge 18+
					// Some browsers don't support the "nonce" property on scripts.
					// On the other hand, just using `getAttribute` is not enough as
					// the `nonce` attribute is reset to an empty string whenever it
					// becomes browsing-context connected.
					// See https://github.com/whatwg/html/issues/2369
					// See https://html.spec.whatwg.org/#nonce-attributes
					// The `node.getAttribute` check was added for the sake of
					// `jQuery.globalEval` so that it can fake a nonce-containing node
					// via an object.
					val = node[ i ] || node.getAttribute && node.getAttribute( i );
					if ( val ) {
						script.setAttribute( i, val );
					}
				}
			}
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}


	function toType( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.6.0",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {

			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}

			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		even: function() {
			return this.pushStack( jQuery.grep( this, function( _elem, i ) {
				return ( i + 1 ) % 2;
			} ) );
		},

		odd: function() {
			return this.pushStack( jQuery.grep( this, function( _elem, i ) {
				return i % 2;
			} ) );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					copy = options[ name ];

					// Prevent Object.prototype pollution
					// Prevent never-ending loop
					if ( name === "__proto__" || target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = Array.isArray( copy ) ) ) ) {
						src = target[ name ];

						// Ensure proper type for the source value
						if ( copyIsArray && !Array.isArray( src ) ) {
							clone = [];
						} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
							clone = {};
						} else {
							clone = src;
						}
						copyIsArray = false;

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		// Evaluates a script in a provided context; falls back to the global one
		// if not specified.
		globalEval: function( code, options, doc ) {
			DOMEval( code, { nonce: options && options.nonce }, doc );
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
							[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return flat( ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
		function( _i, name ) {
			class2type[ "[object " + name + "]" ] = name.toLowerCase();
		} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = toType( obj );

		if ( isFunction( obj ) || isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.6
	 * https://sizzlejs.com/
	 *
	 * Copyright JS Foundation and other contributors
	 * Released under the MIT license
	 * https://js.foundation/
	 *
	 * Date: 2021-02-16
	 */
	( function( window ) {
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		nonnativeSelectorCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ( {} ).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		pushNative = arr.push,
		push = arr.push,
		slice = arr.slice,

		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[ i ] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
			"ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
		identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
			"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +

			// "Attribute values must be CSS identifiers [capture 5]
			// or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
			whitespace + "*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +

			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
			whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
			"*" ),
		rdescend = new RegExp( whitespace + "|>" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
				whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
				whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace +
				"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
				"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rhtml = /HTML$/i,
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
		funescape = function( escape, nonHex ) {
			var high = "0x" + escape.slice( 1 ) - 0x10000;

			return nonHex ?

				// Strip the backslash prefix from a non-hex escape sequence
				nonHex :

				// Replace a hexadecimal escape sequence with the encoded Unicode code point
				// Support: IE <=11+
				// For values outside the Basic Multilingual Plane (BMP), manually construct a
				// surrogate pair
				high < 0 ?
					String.fromCharCode( high + 0x10000 ) :
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" +
					ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		inDisabledFieldset = addCombinator(
			function( elem ) {
				return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			( arr = slice.call( preferredDoc.childNodes ) ),
			preferredDoc.childNodes
		);

		// Support: Android<4.0
		// Detect silently failing push.apply
		// eslint-disable-next-line no-unused-expressions
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				pushNative.apply( target, slice.call( els ) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;

				// Can't trust NodeList.length
				while ( ( target[ j++ ] = els[ i++ ] ) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
			setDocument( context );
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

					// ID selector
					if ( ( m = match[ 1 ] ) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( ( elem = context.getElementById( m ) ) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && ( elem = newContext.getElementById( m ) ) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[ 2 ] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!nonnativeSelectorCache[ selector + " " ] &&
					( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

					// Support: IE 8 only
					// Exclude object elements
					( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

					newSelector = selector;
					newContext = context;

					// qSA considers elements outside a scoping root when evaluating child or
					// descendant combinators, which is not what we want.
					// In such cases, we work around the behavior by prefixing every selector in the
					// list with an ID selector referencing the scope context.
					// The technique has to be used as well when a leading combinator is used
					// as such selectors are not recognized by querySelectorAll.
					// Thanks to Andrew Dupont for this technique.
					if ( nodeType === 1 &&
						( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;

						// We can use :scope instead of the ID hack if the browser
						// supports it & if we're not changing the context.
						if ( newContext !== context || !support.scope ) {

							// Capture the context ID, setting it first if necessary
							if ( ( nid = context.getAttribute( "id" ) ) ) {
								nid = nid.replace( rcssescape, fcssescape );
							} else {
								context.setAttribute( "id", ( nid = expando ) );
							}
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
								toSelector( groups[ i ] );
						}
						newSelector = groups.join( "," );
					}

					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
						nonnativeSelectorCache( selector, true );
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {

			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {

				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return ( cache[ key + " " ] = value );
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement( "fieldset" );

		try {
			return !!fn( el );
		} catch ( e ) {
			return false;
		} finally {

			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}

			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split( "|" ),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[ i ] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( ( cur = cur.nextSibling ) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return ( name === "input" || name === "button" ) && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {

		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {

				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {

					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}

					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
				}

				return elem.disabled === disabled;

			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}

			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction( function( argument ) {
			argument = +argument;
			return markFunction( function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
						seed[ j ] = !( matches[ j ] = seed[ j ] );
					}
				}
			} );
		} );
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		var namespace = elem && elem.namespaceURI,
			docElem = elem && ( elem.ownerDocument || elem ).documentElement;

		// Support: IE <=8
		// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
		// https://bugs.jquery.com/ticket/4833
		return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9 - 11+, Edge 12 - 18+
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		if ( preferredDoc != document &&
			( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
		// Safari 4 - 5 only, Opera <=11.6 - 12.x only
		// IE/Edge & older browsers don't support the :scope pseudo-class.
		// Support: Safari 6.0 only
		// Safari 6.0 supports :scope but it's an alias of :root there.
		support.scope = assert( function( el ) {
			docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
			return typeof el.querySelectorAll !== "undefined" &&
				!el.querySelectorAll( ":scope fieldset div" ).length;
		} );

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert( function( el ) {
			el.className = "i";
			return !el.getAttribute( "className" );
		} );

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert( function( el ) {
			el.appendChild( document.createComment( "" ) );
			return !el.getElementsByTagName( "*" ).length;
		} );

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert( function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		} );

		// ID filter and find
		if ( support.getById ) {
			Expr.filter[ "ID" ] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute( "id" ) === attrId;
				};
			};
			Expr.find[ "ID" ] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter[ "ID" ] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode( "id" );
					return node && node.value === attrId;
				};
			};

			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find[ "ID" ] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );

					if ( elem ) {

						// Verify the id attribute
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}

						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( ( elem = elems[ i++ ] ) ) {
							node = elem.getAttributeNode( "id" );
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}

					return [];
				}
			};
		}

		// Tag
		Expr.find[ "TAG" ] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,

					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( ( elem = results[ i++ ] ) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert( function( el ) {

				var input;

				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll( "[selected]" ).length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push( "~=" );
				}

				// Support: IE 11+, Edge 15 - 18+
				// IE 11/Edge don't find elements on a `[name='']` query in some cases.
				// Adding a temporary attribute to the document before the selection works
				// around the issue.
				// Interestingly, IE 10 & older don't seem to have the issue.
				input = document.createElement( "input" );
				input.setAttribute( "name", "" );
				el.appendChild( input );
				if ( !el.querySelectorAll( "[name='']" ).length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
						whitespace + "*(?:''|\"\")" );
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll( ":checked" ).length ) {
					rbuggyQSA.push( ":checked" );
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push( ".#.+[+~]" );
				}

				// Support: Firefox <=3.6 - 5 only
				// Old Firefox doesn't throw on a badly-escaped identifier.
				el.querySelectorAll( "\\\f" );
				rbuggyQSA.push( "[\\r\\n\\f]" );
			} );

			assert( function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement( "input" );
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll( "[name=d]" ).length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: Opera 10 - 11 only
				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll( "*,:x" );
				rbuggyQSA.push( ",.*:" );
			} );
		}

		if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector ) ) ) ) {

			assert( function( el ) {

				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			} );
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				) );
			} :
			function( a, b ) {
				if ( b ) {
					while ( ( b = b.parentNode ) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

				// Choose the first element that is related to our preferred document
				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				if ( a == document || a.ownerDocument == preferredDoc &&
					contains( preferredDoc, a ) ) {
					return -1;
				}

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				if ( b == document || b.ownerDocument == preferredDoc &&
					contains( preferredDoc, b ) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {

			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				/* eslint-disable eqeqeq */
				return a == document ? -1 :
					b == document ? 1 :
					/* eslint-enable eqeqeq */
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( ( cur = cur.parentNode ) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( ( cur = cur.parentNode ) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[ i ] === bp[ i ] ) {
				i++;
			}

			return i ?

				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[ i ], bp[ i ] ) :

				// Otherwise nodes in our document sort first
				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				/* eslint-disable eqeqeq */
				ap[ i ] == preferredDoc ? -1 :
				bp[ i ] == preferredDoc ? 1 :
				/* eslint-enable eqeqeq */
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		setDocument( elem );

		if ( support.matchesSelector && documentIsHTML &&
			!nonnativeSelectorCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||

					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch ( e ) {
				nonnativeSelectorCache( expr, true );
			}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {

		// Set document vars if needed
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		if ( ( context.ownerDocument || context ) != document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {

		// Set document vars if needed
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		if ( ( elem.ownerDocument || elem ) != document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],

			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return ( sel + "" ).replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( ( elem = results[ i++ ] ) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {

			// If no nodeType, this is expected to be an array
			while ( ( node = elem[ i++ ] ) ) {

				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {

				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}

		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[ 1 ] = match[ 1 ].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
					match[ 5 ] || "" ).replace( runescape, funescape );

				if ( match[ 2 ] === "~=" ) {
					match[ 3 ] = " " + match[ 3 ] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {

				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[ 1 ] = match[ 1 ].toLowerCase();

				if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

					// nth-* requires argument
					if ( !match[ 3 ] ) {
						Sizzle.error( match[ 0 ] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[ 4 ] = +( match[ 4 ] ?
						match[ 5 ] + ( match[ 6 ] || 1 ) :
						2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
					match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

					// other types prohibit arguments
				} else if ( match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[ 6 ] && match[ 2 ];

				if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[ 3 ] ) {
					match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&

					// Get excess from tokenize (recursively)
					( excess = tokenize( unquoted, true ) ) &&

					// advance to the next closing parenthesis
					( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

					// excess is a negative index
					match[ 0 ] = match[ 0 ].slice( 0, excess );
					match[ 2 ] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() {
						return true;
					} :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					( pattern = new RegExp( "(^|" + whitespace +
						")" + className + "(" + whitespace + "|$)" ) ) && classCache(
							className, function( elem ) {
								return pattern.test(
									typeof elem.className === "string" && elem.className ||
									typeof elem.getAttribute !== "undefined" &&
										elem.getAttribute( "class" ) ||
									""
								);
					} );
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					/* eslint-disable max-len */

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
					/* eslint-enable max-len */

				};
			},

			"CHILD": function( type, what, _argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, _context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( ( node = node[ dir ] ) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}

									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( ( node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {

								// Use previously-cached element index if available
								if ( useCache ) {

									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || ( node[ expando ] = {} );

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										( outerCache[ node.uniqueID ] = {} );

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {

									// Use the same loop as above to seek `elem` from the start
									while ( ( node = ++nodeIndex && node && node[ dir ] ||
										( diff = nodeIndex = 0 ) || start.pop() ) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] ||
													( node[ expando ] = {} );

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													( outerCache[ node.uniqueID ] = {} );

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {

				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction( function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[ i ] );
								seed[ idx ] = !( matches[ idx ] = matched[ i ] );
							}
						} ) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {

			// Potentially complex pseudos
			"not": markFunction( function( selector ) {

				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction( function( seed, matches, _context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( ( elem = unmatched[ i ] ) ) {
								seed[ i ] = !( matches[ i ] = elem );
							}
						}
					} ) :
					function( elem, _context, xml ) {
						input[ 0 ] = elem;
						matcher( input, null, xml, results );

						// Don't keep the element (issue #299)
						input[ 0 ] = null;
						return !results.pop();
					};
			} ),

			"has": markFunction( function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			} ),

			"contains": markFunction( function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
				};
			} ),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {

				// lang value must be a valid identifier
				if ( !ridentifier.test( lang || "" ) ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( ( elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
					return false;
				};
			} ),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement &&
					( !document.hasFocus || document.hasFocus() ) &&
					!!( elem.type || elem.href || ~elem.tabIndex );
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {

				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return ( nodeName === "input" && !!elem.checked ) ||
					( nodeName === "option" && !!elem.selected );
			},

			"selected": function( elem ) {

				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					// eslint-disable-next-line no-unused-expressions
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {

				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos[ "empty" ]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( ( attr = elem.getAttribute( "type" ) ) == null ||
						attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo( function() {
				return [ 0 ];
			} ),

			"last": createPositionalPseudo( function( _matchIndexes, length ) {
				return [ length - 1 ];
			} ),

			"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			} ),

			"even": createPositionalPseudo( function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			} ),

			"odd": createPositionalPseudo( function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			} ),

			"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
				var i = argument < 0 ?
					argument + length :
					argument > length ?
						length :
						argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			} ),

			"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			} )
		}
	};

	Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
				if ( match ) {

					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[ 0 ].length ) || soFar;
				}
				groups.push( ( tokens = [] ) );
			}

			matched = false;

			// Combinators
			if ( ( match = rcombinators.exec( soFar ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,

					// Cast descendant combinators to space
					type: match[ 0 ].replace( rtrim, " " )
				} );
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
					( match = preFilters[ type ]( match ) ) ) ) {
					matched = match.shift();
					tokens.push( {
						value: matched,
						type: type,
						matches: match
					} );
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :

				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[ i ].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?

			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( ( elem = elem[ dir ] ) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( ( elem = elem[ dir ] ) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || ( elem[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] ||
								( outerCache[ elem.uniqueID ] = {} );

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( ( oldCache = uniqueCache[ key ] ) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return ( newCache[ 2 ] = oldCache[ 2 ] );
							} else {

								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[ i ]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[ 0 ];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[ i ], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( ( elem = unmatched[ i ] ) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction( function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts(
					selector || "*",
					context.nodeType ? [ context ] : context,
					[]
				),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?

					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( ( elem = temp[ i ] ) ) {
						matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {

						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( ( elem = matcherOut[ i ] ) ) {

								// Restore matcherIn since elem is not yet a final match
								temp.push( ( matcherIn[ i ] = elem ) );
							}
						}
						postFinder( null, ( matcherOut = [] ), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) &&
							( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

							seed[ temp ] = !( results[ temp ] = elem );
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		} );
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[ 0 ].type ],
			implicitRelative = leadingRelative || Expr.relative[ " " ],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					( checkContext = context ).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );

				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
				matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
			} else {
				matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {

					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[ j ].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(

						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens
							.slice( 0, i - 1 )
							.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,

					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
					len = elems.length;

				if ( outermost ) {

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					outermostContext = context == document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;

						// Support: IE 11+, Edge 17 - 18+
						// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
						// two documents; shallow comparisons work.
						// eslint-disable-next-line eqeqeq
						if ( !context && elem.ownerDocument != document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( ( matcher = elementMatchers[ j++ ] ) ) {
							if ( matcher( elem, context || document, xml ) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {

						// They will have gone through all possible matchers
						if ( ( elem = !matcher && elem ) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( ( matcher = setMatchers[ j++ ] ) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {

						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
									setMatched[ i ] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {

			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[ i ] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache(
				selector,
				matcherFromGroupMatchers( elementMatchers, setMatchers )
			);

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( ( selector = compiled.selector || selector ) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[ 0 ] = match[ 0 ].slice( 0 );
			if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

				context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
					.replace( runescape, funescape ), context ) || [] )[ 0 ];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[ i ];

				// Abort if we hit a combinator
				if ( Expr.relative[ ( type = token.type ) ] ) {
					break;
				}
				if ( ( find = Expr.find[ type ] ) ) {

					// Search, expanding context for leading sibling combinators
					if ( ( seed = find(
						token.matches[ 0 ].replace( runescape, funescape ),
						rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
							context
					) ) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert( function( el ) {

		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
	} );

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert( function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute( "href" ) === "#";
	} ) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		} );
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert( function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	} ) ) {
		addHandle( "value", function( elem, _name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		} );
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert( function( el ) {
		return el.getAttribute( "disabled" ) == null;
	} ) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
					( val = elem.getAttributeNode( name ) ) && val.specified ?
						val.value :
						null;
			}
		} );
	}

	return Sizzle;

	} )( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;



	function nodeName( elem, name ) {

		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

	}
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}

		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}

		// Filtered directly for both simple and complex selectors
		return jQuery.filter( qualifier, elements, not );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}

		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, _i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, _i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, _i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			if ( elem.contentDocument != null &&

				// Support: IE 11+
				// <object> elements with no `data` attribute has an object
				// `contentDocument` with a `null` prototype.
				getProto( elem.contentDocument ) ) {

				return elem.contentDocument;
			}

			// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
			// Treat the template element as a regular one in browsers that
			// don't support it.
			if ( nodeName( elem, "template" ) ) {
				elem = elem.content || elem;
			}

			return jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = locked || options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && toType( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject, noValue ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
				// * false: [ value ].slice( 0 ) => resolve( value )
				// * true: [ value ].slice( 1 ) => resolve()
				resolve.apply( undefined, [ value ].slice( noValue ) );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.apply( undefined, [ value ] );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( _i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// rejected_handlers.disable
						// fulfilled_handlers.disable
						tuples[ 3 - i ][ 3 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock,

						// progress_handlers.lock
						tuples[ 0 ][ 3 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the primary Deferred
				primary = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							primary.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
					!remaining );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( primary.state() === "pending" ||
					isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return primary.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
			}

			return primary.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( toType( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, _key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
							value :
							value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		if ( chainable ) {
			return elems;
		}

		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}

		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};


	// Matches dashed string for camelizing
	var rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g;

	// Used by camelCase as callback to replace()
	function fcamelCase( _all, letter ) {
		return letter.toUpperCase();
	}

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 15
	// Microsoft forgot to hump their vendor prefix (#9572)
	function camelCase( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	}
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( Array.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( camelCase );
				} else {
					key = camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}

		if ( data === "false" ) {
			return false;
		}

		if ( data === "null" ) {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}

		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}

		return data;
	}

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || Array.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var documentElement = document.documentElement;



		var isAttached = function( elem ) {
				return jQuery.contains( elem.ownerDocument, elem );
			},
			composed = { composed: true };

		// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
		// Check attachment across shadow DOM boundaries when possible (gh-3504)
		// Support: iOS 10.0-10.2 only
		// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
		// leading to errors. We need to check for `getRootNode`.
		if ( documentElement.getRootNode ) {
			isAttached = function( elem ) {
				return jQuery.contains( elem.ownerDocument, elem ) ||
					elem.getRootNode( composed ) === elem.ownerDocument;
			};
		}
	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				isAttached( elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted, scale,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = elem.nodeType &&
				( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Support: Firefox <=54
			// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
			initial = initial / 2;

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			while ( maxIterations-- ) {

				// Evaluate and update our best guess (doubling guesses that zero out).
				// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
				jQuery.style( elem, prop, initialInUnit + unit );
				if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
					maxIterations = 0;
				}
				initialInUnit = initialInUnit / scale;

			}

			initialInUnit = initialInUnit * 2;
			jQuery.style( elem, prop, initialInUnit + unit );

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

	var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

		// Support: IE <=9 only
		// IE <=9 replaces <option> tags with their contents when inserted outside of
		// the select element.
		div.innerHTML = "<option></option>";
		support.option = !!div.lastChild;
	} )();


	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	// Support: IE <=9 only
	if ( !support.option ) {
		wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
	}


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );

		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );

		} else {
			ret = [];
		}

		if ( tag === undefined || tag && nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}

		return ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, attached, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( toType( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			attached = isAttached( elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( attached ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 - 11+
	// focus() and blur() are asynchronous, except when they are no-op.
	// So expect focus to be synchronous when the element is already active,
	// and blur to be synchronous when the element is not already active.
	// (focus and blur are always synchronous in other supported browsers,
	// this just defines when we can count on it).
	function expectSync( elem, type ) {
		return ( elem === safeActiveElement() ) === ( type === "focus" );
	}

	// Support: IE <=9 only
	// Accessing document.activeElement can throw unexpectedly
	// https://bugs.jquery.com/ticket/13393
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Only attach events to objects that accept data
			if ( !acceptData( elem ) ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = Object.create( null );
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),

				// Make a writable jQuery.Event from the native event object
				event = jQuery.event.fix( nativeEvent ),

				handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// If the event is namespaced, then each handler is only invoked if it is
					// specially universal or its namespaces are a superset of the event's.
					if ( !event.rnamespace || handleObj.namespace === false ||
						event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			if ( delegateCount &&

				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&

				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
							return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
							return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			click: {

				// Utilize native event to ensure correct state for checkable inputs
				setup: function( data ) {

					// For mutual compressibility with _default, replace `this` access with a local var.
					// `|| data` is dead code meant only to preserve the variable through minification.
					var el = this || data;

					// Claim the first handler
					if ( rcheckableType.test( el.type ) &&
						el.click && nodeName( el, "input" ) ) {

						// dataPriv.set( el, "click", ... )
						leverageNative( el, "click", returnTrue );
					}

					// Return false to allow normal processing in the caller
					return false;
				},
				trigger: function( data ) {

					// For mutual compressibility with _default, replace `this` access with a local var.
					// `|| data` is dead code meant only to preserve the variable through minification.
					var el = this || data;

					// Force setup before triggering a click
					if ( rcheckableType.test( el.type ) &&
						el.click && nodeName( el, "input" ) ) {

						leverageNative( el, "click" );
					}

					// Return non-false to allow normal event-path propagation
					return true;
				},

				// For cross-browser consistency, suppress native .click() on links
				// Also prevent it if we're currently inside a leveraged native-event stack
				_default: function( event ) {
					var target = event.target;
					return rcheckableType.test( target.type ) &&
						target.click && nodeName( target, "input" ) &&
						dataPriv.get( target, "click" ) ||
						nodeName( target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	// Ensure the presence of an event listener that handles manually-triggered
	// synthetic events by interrupting progress until reinvoked in response to
	// *native* events that it fires directly, ensuring that state changes have
	// already occurred before other listeners are invoked.
	function leverageNative( el, type, expectSync ) {

		// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
		if ( !expectSync ) {
			if ( dataPriv.get( el, type ) === undefined ) {
				jQuery.event.add( el, type, returnTrue );
			}
			return;
		}

		// Register the controller as a special universal handler for all event namespaces
		dataPriv.set( el, type, false );
		jQuery.event.add( el, type, {
			namespace: false,
			handler: function( event ) {
				var notAsync, result,
					saved = dataPriv.get( this, type );

				if ( ( event.isTrigger & 1 ) && this[ type ] ) {

					// Interrupt processing of the outer synthetic .trigger()ed event
					// Saved data should be false in such cases, but might be a leftover capture object
					// from an async native handler (gh-4350)
					if ( !saved.length ) {

						// Store arguments for use when handling the inner native event
						// There will always be at least one argument (an event object), so this array
						// will not be confused with a leftover capture object.
						saved = slice.call( arguments );
						dataPriv.set( this, type, saved );

						// Trigger the native event and capture its result
						// Support: IE <=9 - 11+
						// focus() and blur() are asynchronous
						notAsync = expectSync( this, type );
						this[ type ]();
						result = dataPriv.get( this, type );
						if ( saved !== result || notAsync ) {
							dataPriv.set( this, type, false );
						} else {
							result = {};
						}
						if ( saved !== result ) {

							// Cancel the outer synthetic event
							event.stopImmediatePropagation();
							event.preventDefault();

							// Support: Chrome 86+
							// In Chrome, if an element having a focusout handler is blurred by
							// clicking outside of it, it invokes the handler synchronously. If
							// that handler calls `.remove()` on the element, the data is cleared,
							// leaving `result` undefined. We need to guard against this.
							return result && result.value;
						}

					// If this is an inner synthetic event for an event with a bubbling surrogate
					// (focus or blur), assume that the surrogate already propagated from triggering the
					// native event and prevent that from happening again here.
					// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
					// bubbling surrogate propagates *after* the non-bubbling base), but that seems
					// less bad than duplication.
					} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
						event.stopPropagation();
					}

				// If this is a native event triggered above, everything is now in order
				// Fire an inner synthetic event with the original arguments
				} else if ( saved.length ) {

					// ...and capture the result
					dataPriv.set( this, type, {
						value: jQuery.event.trigger(

							// Support: IE <=9 - 11+
							// Extend with the prototype to reset the above stopImmediatePropagation()
							jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
							saved.slice( 1 ),
							this
						)
					} );

					// Abort handling of the native event
					event.stopImmediatePropagation();
				}
			}
		} );
	}

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || Date.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		code: true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,
		which: true
	}, jQuery.event.addProp );

	jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
		jQuery.event.special[ type ] = {

			// Utilize native event if possible so blur/focus sequence is correct
			setup: function() {

				// Claim the first handler
				// dataPriv.set( this, "focus", ... )
				// dataPriv.set( this, "blur", ... )
				leverageNative( this, type, expectSync );

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function() {

				// Force setup before trigger
				leverageNative( this, type );

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// Suppress native focus or blur as it's already being fired
			// in leverageNative.
			_default: function() {
				return true;
			},

			delegateType: delegateType
		};
	} );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		// Support: IE <=10 - 11, Edge 12 - 13 only
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Prefer a tbody over its parent table for containing new rows
	function manipulationTarget( elem, content ) {
		if ( nodeName( elem, "table" ) &&
			nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
			elem.type = elem.type.slice( 5 );
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.get( src );
			events = pdataOld.events;

			if ( events ) {
				dataPriv.remove( dest, "handle events" );

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = flat( args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			valueIsFunction = isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( valueIsFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( valueIsFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl && !node.noModule ) {
									jQuery._evalUrl( node.src, {
										nonce: node.nonce || node.getAttribute( "nonce" )
									}, doc );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && isAttached( node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html;
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = isAttached( elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.call( elem );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
				"margin-top:1px;padding:0;border:0";
			div.style.cssText =
				"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
				"margin:auto;border:1px;padding:1px;" +
				"width:60%;top:1%";
			documentElement.appendChild( container ).appendChild( div );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

			// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
			// Some styles come back with percentage values, even though they shouldn't
			div.style.right = "60%";
			pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

			// Support: IE 9 - 11 only
			// Detect misreporting of content dimensions for box-sizing:border-box elements
			boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

			// Support: IE 9 only
			// Detect overflow:scroll screwiness (gh-3699)
			// Support: Chrome <=64
			// Don't get tricked when zoom affects offsetWidth (gh-4029)
			div.style.position = "absolute";
			scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		function roundPixelMeasures( measure ) {
			return Math.round( parseFloat( measure ) );
		}

		var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
			reliableTrDimensionsVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		jQuery.extend( support, {
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelBoxStyles: function() {
				computeStyleTests();
				return pixelBoxStylesVal;
			},
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			},
			scrollboxSize: function() {
				computeStyleTests();
				return scrollboxSizeVal;
			},

			// Support: IE 9 - 11+, Edge 15 - 18+
			// IE/Edge misreport `getComputedStyle` of table rows with width/height
			// set in CSS while `offset*` properties report correct values.
			// Behavior in IE 9 is more subtle than in newer versions & it passes
			// some versions of this test; make sure not to make it pass there!
			//
			// Support: Firefox 70+
			// Only Firefox includes border widths
			// in computed dimensions. (gh-4529)
			reliableTrDimensions: function() {
				var table, tr, trChild, trStyle;
				if ( reliableTrDimensionsVal == null ) {
					table = document.createElement( "table" );
					tr = document.createElement( "tr" );
					trChild = document.createElement( "div" );

					table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
					tr.style.cssText = "border:1px solid";

					// Support: Chrome 86+
					// Height set through cssText does not get applied.
					// Computed height then comes back as 0.
					tr.style.height = "1px";
					trChild.style.height = "9px";

					// Support: Android 8 Chrome 86+
					// In our bodyBackground.html iframe,
					// display for all div elements is set to "inline",
					// which causes a problem only in Android 8 Chrome 86.
					// Ensuring the div is display: block
					// gets around this issue.
					trChild.style.display = "block";

					documentElement
						.appendChild( table )
						.appendChild( tr )
						.appendChild( trChild );

					trStyle = window.getComputedStyle( tr );
					reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
						parseInt( trStyle.borderTopWidth, 10 ) +
						parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

					documentElement.removeChild( table );
				}
				return reliableTrDimensionsVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,

			// Support: Firefox 51+
			// Retrieving style before computed somehow
			// fixes an issue with getting wrong values
			// on detached elements
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is needed for:
		//   .css('filter') (IE 9 only, #12537)
		//   .css('--customProperty) (#3144)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !isAttached( elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style,
		vendorProps = {};

	// Return a vendor-prefixed property or undefined
	function vendorPropName( name ) {

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
	function finalPropName( name ) {
		var final = jQuery.cssProps[ name ] || vendorProps[ name ];

		if ( final ) {
			return final;
		}
		if ( name in emptyStyle ) {
			return name;
		}
		return vendorProps[ name ] = vendorPropName( name ) || name;
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rcustomProp = /^--/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		};

	function setPositiveNumber( _elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
		var i = dimension === "width" ? 1 : 0,
			extra = 0,
			delta = 0;

		// Adjustment may not be necessary
		if ( box === ( isBorderBox ? "border" : "content" ) ) {
			return 0;
		}

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin
			if ( box === "margin" ) {
				delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
			}

			// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
			if ( !isBorderBox ) {

				// Add padding
				delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// For "border" or "margin", add border
				if ( box !== "padding" ) {
					delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

				// But still keep track of it otherwise
				} else {
					extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}

			// If we get here with a border-box (content + padding + border), we're seeking "content" or
			// "padding" or "margin"
			} else {

				// For "content", subtract padding
				if ( box === "content" ) {
					delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// For "content" or "padding", subtract border
				if ( box !== "margin" ) {
					delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		// Account for positive content-box scroll gutter when requested by providing computedVal
		if ( !isBorderBox && computedVal >= 0 ) {

			// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
			// Assuming integer scroll gutter, subtract the rest and round down
			delta += Math.max( 0, Math.ceil(
				elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
				computedVal -
				delta -
				extra -
				0.5

			// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
			// Use an explicit zero to avoid NaN (gh-3964)
			) ) || 0;
		}

		return delta;
	}

	function getWidthOrHeight( elem, dimension, extra ) {

		// Start with computed style
		var styles = getStyles( elem ),

			// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
			// Fake content-box until we know it's needed to know the true value.
			boxSizingNeeded = !support.boxSizingReliable() || extra,
			isBorderBox = boxSizingNeeded &&
				jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
			valueIsBorderBox = isBorderBox,

			val = curCSS( elem, dimension, styles ),
			offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

		// Support: Firefox <=54
		// Return a confounding non-pixel value or feign ignorance, as appropriate.
		if ( rnumnonpx.test( val ) ) {
			if ( !extra ) {
				return val;
			}
			val = "auto";
		}


		// Support: IE 9 - 11 only
		// Use offsetWidth/offsetHeight for when box sizing is unreliable.
		// In those cases, the computed value can be trusted to be border-box.
		if ( ( !support.boxSizingReliable() && isBorderBox ||

			// Support: IE 10 - 11+, Edge 15 - 18+
			// IE/Edge misreport `getComputedStyle` of table rows with width/height
			// set in CSS while `offset*` properties report correct values.
			// Interestingly, in some cases IE 9 doesn't suffer from this issue.
			!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

			// Fall back to offsetWidth/offsetHeight when value is "auto"
			// This happens for inline elements with no explicit setting (gh-3571)
			val === "auto" ||

			// Support: Android <=4.1 - 4.3 only
			// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
			!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

			// Make sure the element is visible & connected
			elem.getClientRects().length ) {

			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

			// Where available, offsetWidth/offsetHeight approximate border box dimensions.
			// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
			// retrieved value as a content box dimension.
			valueIsBorderBox = offsetProp in elem;
			if ( valueIsBorderBox ) {
				val = elem[ offsetProp ];
			}
		}

		// Normalize "" and auto
		val = parseFloat( val ) || 0;

		// Adjust for the element's box model
		return ( val +
			boxModelAdjustment(
				elem,
				dimension,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles,

				// Provide the current computed size to request scroll gutter calculation (gh-3589)
				val
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"gridArea": true,
			"gridColumn": true,
			"gridColumnEnd": true,
			"gridColumnStart": true,
			"gridRow": true,
			"gridRowEnd": true,
			"gridRowStart": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = camelCase( name ),
				isCustomProp = rcustomProp.test( name ),
				style = elem.style;

			// Make sure that we're working with the right name. We don't
			// want to query the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
				// "px" to a few hardcoded values.
				if ( type === "number" && !isCustomProp ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					if ( isCustomProp ) {
						style.setProperty( name, value );
					} else {
						style[ name ] = value;
					}
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = camelCase( name ),
				isCustomProp = rcustomProp.test( name );

			// Make sure that we're working with the right name. We don't
			// want to modify the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}

			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( _i, dimension ) {
		jQuery.cssHooks[ dimension ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = getStyles( elem ),

					// Only read styles.position if the test has a chance to fail
					// to avoid forcing a reflow.
					scrollboxSizeBuggy = !support.scrollboxSize() &&
						styles.position === "absolute",

					// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
					boxSizingNeeded = scrollboxSizeBuggy || extra,
					isBorderBox = boxSizingNeeded &&
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					subtract = extra ?
						boxModelAdjustment(
							elem,
							dimension,
							extra,
							isBorderBox,
							styles
						) :
						0;

				// Account for unreliable border-box dimensions by comparing offset* to computed and
				// faking a content-box to get border and padding (gh-3699)
				if ( isBorderBox && scrollboxSizeBuggy ) {
					subtract -= Math.ceil(
						elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
						parseFloat( styles[ dimension ] ) -
						boxModelAdjustment( elem, dimension, "border", false, styles ) -
						0.5
					);
				}

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ dimension ] = value;
					value = jQuery.css( elem, dimension );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
				) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( prefix !== "margin" ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( Array.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
						tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, inProgress,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function schedule() {
		if ( inProgress ) {
			if ( document.hidden === false && window.requestAnimationFrame ) {
				window.requestAnimationFrame( schedule );
			} else {
				window.setTimeout( schedule, jQuery.fx.interval );
			}

			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = Date.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 15
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY and Edge just mirrors
			// the overflowX value there.
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

					/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( Array.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				// If there's more to do, yield
				if ( percent < 1 && length ) {
					return remaining;
				}

				// If this was an empty animation, synthesize a final progress notification
				if ( !length ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
				}

				// Resolve the animation and report its conclusion
				deferred.resolveWith( elem, [ animation ] );
				return false;
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						result.stop.bind( result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		// Attach callbacks from options
		animation
			.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		return animation;
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !isFunction( easing ) && easing
		};

		// Go to the end state if fx are off
		if ( jQuery.fx.off ) {
			opt.duration = 0;

		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];

				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};

			doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = Date.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Run the timer and safely remove it when done (allowing for external removal)
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		jQuery.fx.start();
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( inProgress ) {
			return;
		}

		inProgress = true;
		schedule();
	};

	jQuery.fx.stop = function() {
		inProgress = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,

				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}

					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




		// Strip and collapse whitespace according to HTML spec
		// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}


	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	function classesToArray( value ) {
		if ( Array.isArray( value ) ) {
			return value;
		}
		if ( typeof value === "string" ) {
			return value.match( rnothtmlwhite ) || [];
		}
		return [];
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			classes = classesToArray( value );

			if ( classes.length ) {
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			classes = classesToArray( value );

			if ( classes.length ) {
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value,
				isValidValue = type === "string" || Array.isArray( value );

			if ( typeof stateVal === "boolean" && isValidValue ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( isValidValue ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = classesToArray( value );

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
								"" :
								dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, valueIsFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			valueIsFunction = isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( valueIsFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( Array.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;

					if ( index < 0 ) {
						i = max;

					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( Array.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	support.focusin = "onfocusin" in window;


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		stopPropagationCallback = function( e ) {
			e.stopPropagation();
		};

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = lastElement = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
				lastElement = cur;
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;

						if ( event.isPropagationStopped() ) {
							lastElement.addEventListener( type, stopPropagationCallback );
						}

						elem[ type ]();

						if ( event.isPropagationStopped() ) {
							lastElement.removeEventListener( type, stopPropagationCallback );
						}

						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {

					// Handle: regular nodes (via `this.ownerDocument`), window
					// (via `this.document`) & document (via `this`).
					var doc = this.ownerDocument || this.document || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this.document || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = { guid: Date.now() };

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, parserErrorElem;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {}

		parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
		if ( !xml || parserErrorElem ) {
			jQuery.error( "Invalid XML: " + (
				parserErrorElem ?
					jQuery.map( parserErrorElem.childNodes, function( el ) {
						return el.textContent;
					} ).join( "\n" ) :
					data
			) );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( Array.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && toType( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		if ( a == null ) {
			return "";
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} ).filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} ).map( function( _i, elem ) {
				var val = jQuery( this ).val();

				if ( val == null ) {
					return null;
				}

				if ( Array.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}

				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );

	originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

			if ( isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
										( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
											.concat( match[ 2 ] );
								}
							}
							match = responseHeaders[ key.toLowerCase() + " " ];
						}
						return match == null ? null : match.join( ", " );
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 15
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available and should be processed, append data to url
				if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
						uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Use a noop converter for missing script but not if jsonp
				if ( !isSuccess &&
					jQuery.inArray( "script", s.dataTypes ) > -1 &&
					jQuery.inArray( "json", s.dataTypes ) < 0 ) {
					s.converters[ "text script" ] = function() {};
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( _i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );

	jQuery.ajaxPrefilter( function( s ) {
		var i;
		for ( i in s.headers ) {
			if ( i.toLowerCase() === "content-type" ) {
				s.contentType = s.headers[ i ] || "";
			}
		}
	} );


	jQuery._evalUrl = function( url, options, doc ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,

			// Only evaluate the response if it is successful (gh-4126)
			// dataFilter is not invoked for failure responses, so using it instead
			// of the default converter is kludgy but it works.
			converters: {
				"text script": function() {}
			},
			dataFilter: function( response ) {
				jQuery.globalEval( response, options, doc );
			}
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var htmlIsFunction = isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.ontimeout =
										xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain or forced-by-attrs requests
		if ( s.crossDomain || s.scriptAttrs ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" )
						.attr( s.scriptAttrs || {} )
						.prop( { charset: s.scriptCharset, src: s.url } )
						.on( "load error", callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						} );

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {

		// offset() relates an element's border box to the document origin
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var rect, win,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			// Get document-relative position by adding viewport scroll to viewport-relative gBCR
			rect = elem.getBoundingClientRect();
			win = elem.ownerDocument.defaultView;
			return {
				top: rect.top + win.pageYOffset,
				left: rect.left + win.pageXOffset
			};
		},

		// position() relates an element's margin box to its offset parent's padding box
		// This corresponds to the behavior of CSS absolute positioning
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset, doc,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// position:fixed elements are offset from the viewport, which itself always has zero offset
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume position:fixed implies availability of getBoundingClientRect
				offset = elem.getBoundingClientRect();

			} else {
				offset = this.offset();

				// Account for the *real* offset parent, which can be the document or its root element
				// when a statically positioned element is identified
				doc = elem.ownerDocument;
				offsetParent = elem.offsetParent || doc.documentElement;
				while ( offsetParent &&
					( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
					jQuery.css( offsetParent, "position" ) === "static" ) {

					offsetParent = offsetParent.parentNode;
				}
				if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

					// Incorporate borders into its offset, since they are outside its content origin
					parentOffset = jQuery( offsetParent ).offset();
					parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
					parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
				}
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {

				// Coalesce documents and windows
				var win;
				if ( isWindow( elem ) ) {
					win = elem;
				} else if ( elem.nodeType === 9 ) {
					win = elem.defaultView;
				}

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( _i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( {
			padding: "inner" + name,
			content: type,
			"": "outer" + name
		}, function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( _i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},

		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );

	jQuery.each(
		( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( _i, name ) {

			// Handle event binding
			jQuery.fn[ name ] = function( data, fn ) {
				return arguments.length > 0 ?
					this.on( name, null, data, fn ) :
					this.trigger( name );
			};
		}
	);




	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

	// Bind a function to a context, optionally partially applying any
	// arguments.
	// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
	// However, it is not slated for removal any time soon
	jQuery.proxy = function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	};

	jQuery.holdReady = function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	};
	jQuery.isArray = Array.isArray;
	jQuery.parseJSON = JSON.parse;
	jQuery.nodeName = nodeName;
	jQuery.isFunction = isFunction;
	jQuery.isWindow = isWindow;
	jQuery.camelCase = camelCase;
	jQuery.type = toType;

	jQuery.now = Date.now;

	jQuery.isNumeric = function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	};

	jQuery.trim = function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	};



	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( typeof noGlobal === "undefined" ) {
		window.jQuery = window.$ = jQuery;
	}




	return jQuery;
	} );


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/*! tether 2.0.0 */

	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Tether = factory());
	}(this, (function () { 'use strict';

	  function _inheritsLoose(subClass, superClass) {
	    subClass.prototype = Object.create(superClass.prototype);
	    subClass.prototype.constructor = subClass;

	    _setPrototypeOf(subClass, superClass);
	  }

	  function _setPrototypeOf(o, p) {
	    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    return _setPrototypeOf(o, p);
	  }

	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  /**
	   * Checks if `value` is classified as a `Function` object.
	   * @param {*} value The param to check if it is a function
	   */
	  function isFunction(value) {
	    return typeof value === 'function';
	  }
	  /**
	   * Checks if `value` is classified as a `Number` object.
	   * @param {*} value The param to check if it is a number
	   */

	  function isNumber(value) {
	    return typeof value === 'number';
	  }
	  /**
	   * Checks if `value` is classified as an `Object`.
	   * @param {*} value The param to check if it is an object
	   */

	  function isObject(value) {
	    return typeof value === 'object';
	  }
	  /**
	   * Checks if `value` is classified as a `String` object.
	   * @param {*} value The param to check if it is a string
	   */

	  function isString(value) {
	    return typeof value === 'string';
	  }
	  /**
	   * Checks if `value` is undefined.
	   * @param {*} value The param to check if it is undefined
	   */

	  function isUndefined(value) {
	    return value === undefined;
	  }

	  function addClass(el, name) {
	    name.split(' ').forEach(function (cls) {
	      if (cls.trim()) {
	        el.classList.add(cls);
	      }
	    });
	  }
	  /**
	   * Get class string based on previously determined classes
	   * @param  {String} [key=''] - default value for the classes object
	   * @param  {Object} classes
	   * @param  {String} classPrefix
	   */

	  function getClass(key, classes, classPrefix) {
	    if (key === void 0) {
	      key = '';
	    }

	    if (!isUndefined(classes) && !isUndefined(classes[key])) {
	      if (classes[key] === false) {
	        return '';
	      }

	      return classes[key];
	    } else if (classPrefix) {
	      return classPrefix + "-" + key;
	    } else {
	      return key;
	    }
	  }
	  function removeClass(el, name) {
	    name.split(' ').forEach(function (cls) {
	      if (cls.trim()) {
	        el.classList.remove(cls);
	      }
	    });
	  }
	  function updateClasses(el, add, all) {
	    // Of the set of 'all' classes, we need the 'add' classes, and only the
	    // 'add' classes to be set.
	    all.forEach(function (cls) {
	      if (add.indexOf(cls) === -1 && el.classList.contains(cls)) {
	        removeClass(el, cls);
	      }
	    });
	    add.forEach(function (cls) {
	      if (!el.classList.contains(cls)) {
	        addClass(el, cls);
	      }
	    });
	  }

	  var deferred = [];
	  function defer(fn) {
	    deferred.push(fn);
	  }
	  function flush() {
	    var fn; // eslint-disable-next-line

	    while (fn = deferred.pop()) {
	      fn();
	    }
	  }

	  var _scrollBarSize = null;
	  function extend(out) {
	    if (out === void 0) {
	      out = {};
	    }

	    var args = [];
	    Array.prototype.push.apply(args, arguments);
	    args.slice(1).forEach(function (obj) {
	      if (obj) {
	        for (var key in obj) {
	          if ({}.hasOwnProperty.call(obj, key)) {
	            out[key] = obj[key];
	          }
	        }
	      }
	    });
	    return out;
	  }
	  function getScrollBarSize() {
	    if (_scrollBarSize) {
	      return _scrollBarSize;
	    }

	    var inner = document.createElement('div');
	    inner.style.width = '100%';
	    inner.style.height = '200px';
	    var outer = document.createElement('div');
	    extend(outer.style, {
	      position: 'absolute',
	      top: 0,
	      left: 0,
	      pointerEvents: 'none',
	      visibility: 'hidden',
	      width: '200px',
	      height: '150px',
	      overflow: 'hidden'
	    });
	    outer.appendChild(inner);
	    document.body.appendChild(outer);
	    var widthContained = inner.offsetWidth;
	    outer.style.overflow = 'scroll';
	    var widthScroll = inner.offsetWidth;

	    if (widthContained === widthScroll) {
	      widthScroll = outer.clientWidth;
	    }

	    document.body.removeChild(outer);
	    var width = widthContained - widthScroll;
	    _scrollBarSize = {
	      width: width,
	      height: width
	    };
	    return _scrollBarSize;
	  }
	  var uniqueId = function () {
	    var id = 0;
	    return function () {
	      return ++id;
	    };
	  }();

	  var zeroPosCache = {};
	  var zeroElement = null;
	  function getBounds(body, el) {
	    var doc;

	    if (el === document) {
	      doc = document;
	      el = document.documentElement;
	    } else {
	      doc = el.ownerDocument;
	    }

	    var docEl = doc.documentElement;

	    var box = _getActualBoundingClientRect(el);

	    var origin = _getOrigin(body);

	    box.top -= origin.top;
	    box.left -= origin.left;

	    if (isUndefined(box.width)) {
	      box.width = document.body.scrollWidth - box.left - box.right;
	    }

	    if (isUndefined(box.height)) {
	      box.height = document.body.scrollHeight - box.top - box.bottom;
	    }

	    box.top = box.top - docEl.clientTop;
	    box.left = box.left - docEl.clientLeft;
	    box.right = doc.body.clientWidth - box.width - box.left;
	    box.bottom = doc.body.clientHeight - box.height - box.top;
	    return box;
	  }
	  /**
	   * Gets bounds for when target modifiier is 'scroll-handle'
	   * @param target
	   * @return {{left: number, width: number, height: number}}
	   */

	  function getScrollHandleBounds(body, target) {
	    var bounds; // We have to do the check for the scrollTop and if target === document.body here and set to variables
	    // because we may reset target below.

	    var targetScrollTop = target.scrollTop;
	    var targetIsBody = target === document.body;

	    if (targetIsBody) {
	      target = document.documentElement;
	      bounds = {
	        left: pageXOffset,
	        top: pageYOffset,
	        height: innerHeight,
	        width: innerWidth
	      };
	    } else {
	      bounds = getBounds(body, target);
	    }

	    var style = getComputedStyle(target);
	    var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || !targetIsBody;
	    var scrollBottom = 0;

	    if (hasBottomScroll) {
	      scrollBottom = 15;
	    }

	    var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;
	    var out = {
	      width: 15,
	      height: height * 0.975 * (height / target.scrollHeight),
	      left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
	    };
	    var fitAdj = 0;

	    if (height < 408 && targetIsBody) {
	      fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
	    }

	    if (!targetIsBody) {
	      out.height = Math.max(out.height, 24);
	    }

	    var scrollPercentage = targetScrollTop / (target.scrollHeight - height);
	    out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

	    if (targetIsBody) {
	      out.height = Math.max(out.height, 24);
	    }

	    return out;
	  }
	  /**
	   * Gets bounds for when target modifiier is 'visible
	   * @param target
	   * @return {{top: *, left: *, width: *, height: *}}
	   */

	  function getVisibleBounds(body, target) {
	    if (target === document.body) {
	      return {
	        top: pageYOffset,
	        left: pageXOffset,
	        height: innerHeight,
	        width: innerWidth
	      };
	    } else {
	      var bounds = getBounds(body, target);
	      var out = {
	        height: bounds.height,
	        width: bounds.width,
	        top: bounds.top,
	        left: bounds.left
	      };
	      out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
	      out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
	      out.height = Math.min(innerHeight, out.height);
	      out.height -= 2;
	      out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
	      out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
	      out.width = Math.min(innerWidth, out.width);
	      out.width -= 2;

	      if (out.top < pageYOffset) {
	        out.top = pageYOffset;
	      }

	      if (out.left < pageXOffset) {
	        out.left = pageXOffset;
	      }

	      return out;
	    }
	  }
	  function removeUtilElements(body) {
	    if (zeroElement) {
	      body.removeChild(zeroElement);
	    }

	    zeroElement = null;
	  }
	  /**
	   * Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
	   * if the element lies within a nested document (<frame> or <iframe>-like).
	   * @param node
	   */

	  function _getActualBoundingClientRect(node) {
	    var boundingRect = node.getBoundingClientRect(); // The original object returned by getBoundingClientRect is immutable, so we clone it
	    // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9

	    var rect = {};

	    for (var k in boundingRect) {
	      rect[k] = boundingRect[k];
	    }

	    try {
	      if (node.ownerDocument !== document) {
	        var frameElement = node.ownerDocument.defaultView.frameElement;

	        if (frameElement) {
	          var frameRect = _getActualBoundingClientRect(frameElement);

	          rect.top += frameRect.top;
	          rect.bottom += frameRect.top;
	          rect.left += frameRect.left;
	          rect.right += frameRect.left;
	        }
	      }
	    } catch (err) {// Ignore "Access is denied" in IE11/Edge
	    }

	    return rect;
	  }

	  function _getOrigin(body) {
	    // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
	    // jitter as the user scrolls that messes with our ability to detect if two positions
	    // are equivilant or not.  We place an element at the top left of the page that will
	    // get the same jitter, so we can cancel the two out.
	    var node = zeroElement;

	    if (!node || !body.contains(node)) {
	      node = document.createElement('div');
	      node.setAttribute('data-tether-id', uniqueId());
	      extend(node.style, {
	        top: 0,
	        left: 0,
	        position: 'absolute'
	      });
	      body.appendChild(node);
	      zeroElement = node;
	    }

	    var id = node.getAttribute('data-tether-id');

	    if (isUndefined(zeroPosCache[id])) {
	      zeroPosCache[id] = _getActualBoundingClientRect(node); // Clear the cache when this position call is done

	      defer(function () {
	        delete zeroPosCache[id];
	      });
	    }

	    return zeroPosCache[id];
	  }

	  var Abutment = {
	    position: function position(_ref) {
	      var _this = this;

	      var top = _ref.top,
	          left = _ref.left;

	      var _this$cache = this.cache('element-bounds', function () {
	        return getBounds(_this.element);
	      }),
	          height = _this$cache.height,
	          width = _this$cache.width;

	      var targetPos = this.getTargetBounds();
	      var bottom = top + height;
	      var right = left + width;
	      var abutted = [];

	      if (top <= targetPos.bottom && bottom >= targetPos.top) {
	        ['left', 'right'].forEach(function (side) {
	          var targetPosSide = targetPos[side];

	          if (targetPosSide === left || targetPosSide === right) {
	            abutted.push(side);
	          }
	        });
	      }

	      if (left <= targetPos.right && right >= targetPos.left) {
	        ['top', 'bottom'].forEach(function (side) {
	          var targetPosSide = targetPos[side];

	          if (targetPosSide === top || targetPosSide === bottom) {
	            abutted.push(side);
	          }
	        });
	      }

	      var sides = ['left', 'top', 'right', 'bottom'];
	      var _this$options = this.options,
	          classes = _this$options.classes,
	          classPrefix = _this$options.classPrefix;
	      this.all.push(getClass('abutted', classes, classPrefix));
	      sides.forEach(function (side) {
	        _this.all.push(getClass('abutted', classes, classPrefix) + "-" + side);
	      });

	      if (abutted.length) {
	        this.add.push(getClass('abutted', classes, classPrefix));
	      }

	      abutted.forEach(function (side) {
	        _this.add.push(getClass('abutted', classes, classPrefix) + "-" + side);
	      });
	      defer(function () {
	        if (!(_this.options.addTargetClasses === false)) {
	          updateClasses(_this.target, _this.add, _this.all);
	        }

	        updateClasses(_this.element, _this.add, _this.all);
	      });
	      return true;
	    }
	  };

	  var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];
	  /**
	   * Returns an array of bounds of the format [left, top, right, bottom]
	   * @param tether
	   * @param to
	   * @return {*[]|HTMLElement|ActiveX.IXMLDOMElement}
	   */

	  function getBoundingRect(body, tether, to) {
	    // arg to is required
	    if (!to) {
	      return null;
	    }

	    if (to === 'scrollParent') {
	      to = tether.scrollParents[0];
	    } else if (to === 'window') {
	      to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
	    }

	    if (to === document) {
	      to = to.documentElement;
	    }

	    if (!isUndefined(to.nodeType)) {
	      var node = to;
	      var size = getBounds(body, to);
	      var pos = size;
	      var style = getComputedStyle(to);
	      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top]; // Account any parent Frames scroll offset

	      if (node.ownerDocument !== document) {
	        var win = node.ownerDocument.defaultView;
	        to[0] += win.pageXOffset;
	        to[1] += win.pageYOffset;
	        to[2] += win.pageXOffset;
	        to[3] += win.pageYOffset;
	      }

	      BOUNDS_FORMAT.forEach(function (side, i) {
	        side = side[0].toUpperCase() + side.substr(1);

	        if (side === 'Top' || side === 'Left') {
	          to[i] += parseFloat(style["border" + side + "Width"]);
	        } else {
	          to[i] -= parseFloat(style["border" + side + "Width"]);
	        }
	      });
	    }

	    return to;
	  }
	  /**
	   * Add out of bounds classes to the list of classes we add to tether
	   * @param {string[]} oob An array of directions that are out of bounds
	   * @param {string[]} addClasses The array of classes to add to Tether
	   * @param {string[]} classes The array of class types for Tether
	   * @param {string} classPrefix The prefix to add to the front of the class
	   * @param {string} outOfBoundsClass The class to apply when out of bounds
	   * @private
	   */


	  function _addOutOfBoundsClass(oob, addClasses, classes, classPrefix, outOfBoundsClass) {
	    if (oob.length) {
	      var oobClass;

	      if (!isUndefined(outOfBoundsClass)) {
	        oobClass = outOfBoundsClass;
	      } else {
	        oobClass = getClass('out-of-bounds', classes, classPrefix);
	      }

	      addClasses.push(oobClass);
	      oob.forEach(function (side) {
	        addClasses.push(oobClass + "-" + side);
	      });
	    }
	  }
	  /**
	   * Calculates if out of bounds or pinned in the X direction.
	   *
	   * @param {number} left
	   * @param {number[]} bounds Array of bounds of the format [left, top, right, bottom]
	   * @param {number} width
	   * @param pin
	   * @param pinned
	   * @param {string[]} oob
	   * @return {number}
	   * @private
	   */


	  function _calculateOOBAndPinnedLeft(left, bounds, width, pin, pinned, oob) {
	    if (left < bounds[0]) {
	      if (pin.indexOf('left') >= 0) {
	        left = bounds[0];
	        pinned.push('left');
	      } else {
	        oob.push('left');
	      }
	    }

	    if (left + width > bounds[2]) {
	      if (pin.indexOf('right') >= 0) {
	        left = bounds[2] - width;
	        pinned.push('right');
	      } else {
	        oob.push('right');
	      }
	    }

	    return left;
	  }
	  /**
	   * Calculates if out of bounds or pinned in the Y direction.
	   *
	   * @param {number} top
	   * @param {number[]} bounds Array of bounds of the format [left, top, right, bottom]
	   * @param {number} height
	   * @param pin
	   * @param {string[]} pinned
	   * @param {string[]} oob
	   * @return {number}
	   * @private
	   */


	  function _calculateOOBAndPinnedTop(top, bounds, height, pin, pinned, oob) {
	    if (top < bounds[1]) {
	      if (pin.indexOf('top') >= 0) {
	        top = bounds[1];
	        pinned.push('top');
	      } else {
	        oob.push('top');
	      }
	    }

	    if (top + height > bounds[3]) {
	      if (pin.indexOf('bottom') >= 0) {
	        top = bounds[3] - height;
	        pinned.push('bottom');
	      } else {
	        oob.push('bottom');
	      }
	    }

	    return top;
	  }
	  /**
	   * Flip X "together"
	   * @param {object} tAttachment The target attachment
	   * @param {object} eAttachment The element attachment
	   * @param {number[]} bounds Array of bounds of the format [left, top, right, bottom]
	   * @param {number} width
	   * @param targetWidth
	   * @param {number} left
	   * @private
	   */


	  function _flipXTogether(tAttachment, eAttachment, bounds, width, targetWidth, left) {
	    if (left < bounds[0] && tAttachment.left === 'left') {
	      if (eAttachment.left === 'right') {
	        left += targetWidth;
	        tAttachment.left = 'right';
	        left += width;
	        eAttachment.left = 'left';
	      } else if (eAttachment.left === 'left') {
	        left += targetWidth;
	        tAttachment.left = 'right';
	        left -= width;
	        eAttachment.left = 'right';
	      }
	    } else if (left + width > bounds[2] && tAttachment.left === 'right') {
	      if (eAttachment.left === 'left') {
	        left -= targetWidth;
	        tAttachment.left = 'left';
	        left -= width;
	        eAttachment.left = 'right';
	      } else if (eAttachment.left === 'right') {
	        left -= targetWidth;
	        tAttachment.left = 'left';
	        left += width;
	        eAttachment.left = 'left';
	      }
	    } else if (tAttachment.left === 'center') {
	      if (left + width > bounds[2] && eAttachment.left === 'left') {
	        left -= width;
	        eAttachment.left = 'right';
	      } else if (left < bounds[0] && eAttachment.left === 'right') {
	        left += width;
	        eAttachment.left = 'left';
	      }
	    }

	    return left;
	  }
	  /**
	   * Flip Y "together"
	   * @param {object} tAttachment The target attachment
	   * @param {object} eAttachment The element attachment
	   * @param {number[]} bounds Array of bounds of the format [left, top, right, bottom]
	   * @param {number} height
	   * @param targetHeight
	   * @param {number} top
	   * @private
	   */


	  function _flipYTogether(tAttachment, eAttachment, bounds, height, targetHeight, top) {
	    if (tAttachment.top === 'top') {
	      if (eAttachment.top === 'bottom' && top < bounds[1]) {
	        top += targetHeight;
	        tAttachment.top = 'bottom';
	        top += height;
	        eAttachment.top = 'top';
	      } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
	        top -= height - targetHeight;
	        tAttachment.top = 'bottom';
	        eAttachment.top = 'bottom';
	      }
	    }

	    if (tAttachment.top === 'bottom') {
	      if (eAttachment.top === 'top' && top + height > bounds[3]) {
	        top -= targetHeight;
	        tAttachment.top = 'top';
	        top -= height;
	        eAttachment.top = 'bottom';
	      } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
	        top += height - targetHeight;
	        tAttachment.top = 'top';
	        eAttachment.top = 'top';
	      }
	    }

	    if (tAttachment.top === 'middle') {
	      if (top + height > bounds[3] && eAttachment.top === 'top') {
	        top -= height;
	        eAttachment.top = 'bottom';
	      } else if (top < bounds[1] && eAttachment.top === 'bottom') {
	        top += height;
	        eAttachment.top = 'top';
	      }
	    }

	    return top;
	  }
	  /**
	   * Get all the initial classes
	   * @param classes
	   * @param {string} classPrefix
	   * @param constraints
	   * @return {[*, *]}
	   * @private
	   */


	  function _getAllClasses(classes, classPrefix, constraints) {
	    var allClasses = [getClass('pinned', classes, classPrefix), getClass('out-of-bounds', classes, classPrefix)];
	    constraints.forEach(function (constraint) {
	      var outOfBoundsClass = constraint.outOfBoundsClass,
	          pinnedClass = constraint.pinnedClass;

	      if (outOfBoundsClass) {
	        allClasses.push(outOfBoundsClass);
	      }

	      if (pinnedClass) {
	        allClasses.push(pinnedClass);
	      }
	    });
	    allClasses.forEach(function (cls) {
	      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
	        allClasses.push(cls + "-" + side);
	      });
	    });
	    return allClasses;
	  }

	  var Constraint = {
	    position: function position(_ref) {
	      var _this = this;

	      var top = _ref.top,
	          left = _ref.left,
	          targetAttachment = _ref.targetAttachment;

	      if (!this.options.constraints) {
	        return true;
	      }

	      var _this$cache = this.cache('element-bounds', function () {
	        return getBounds(_this.bodyElement, _this.element);
	      }),
	          height = _this$cache.height,
	          width = _this$cache.width;

	      if (width === 0 && height === 0 && !isUndefined(this.lastSize)) {
	        // Handle the item getting hidden as a result of our positioning without glitching
	        // the classes in and out
	        var _this$lastSize = this.lastSize;
	        width = _this$lastSize.width;
	        height = _this$lastSize.height;
	      }

	      var targetSize = this.cache('target-bounds', function () {
	        return _this.getTargetBounds();
	      });
	      var targetHeight = targetSize.height,
	          targetWidth = targetSize.width;
	      var _this$options = this.options,
	          classes = _this$options.classes,
	          classPrefix = _this$options.classPrefix;

	      var allClasses = _getAllClasses(classes, classPrefix, this.options.constraints);

	      var addClasses = [];
	      var tAttachment = extend({}, targetAttachment);
	      var eAttachment = extend({}, this.attachment);
	      this.options.constraints.forEach(function (constraint) {
	        var to = constraint.to,
	            attachment = constraint.attachment,
	            pin = constraint.pin;

	        if (isUndefined(attachment)) {
	          attachment = '';
	        }

	        var changeAttachX, changeAttachY;

	        if (attachment.indexOf(' ') >= 0) {
	          var _attachment$split = attachment.split(' ');

	          changeAttachY = _attachment$split[0];
	          changeAttachX = _attachment$split[1];
	        } else {
	          changeAttachX = changeAttachY = attachment;
	        }

	        var bounds = getBoundingRect(_this.bodyElement, _this, to);

	        if (changeAttachY === 'target' || changeAttachY === 'both') {
	          if (top < bounds[1] && tAttachment.top === 'top') {
	            top += targetHeight;
	            tAttachment.top = 'bottom';
	          }

	          if (top + height > bounds[3] && tAttachment.top === 'bottom') {
	            top -= targetHeight;
	            tAttachment.top = 'top';
	          }
	        }

	        if (changeAttachY === 'together') {
	          top = _flipYTogether(tAttachment, eAttachment, bounds, height, targetHeight, top);
	        }

	        if (changeAttachX === 'target' || changeAttachX === 'both') {
	          if (left < bounds[0] && tAttachment.left === 'left') {
	            left += targetWidth;
	            tAttachment.left = 'right';
	          }

	          if (left + width > bounds[2] && tAttachment.left === 'right') {
	            left -= targetWidth;
	            tAttachment.left = 'left';
	          }
	        }

	        if (changeAttachX === 'together') {
	          left = _flipXTogether(tAttachment, eAttachment, bounds, width, targetWidth, left);
	        }

	        if (changeAttachY === 'element' || changeAttachY === 'both') {
	          if (top < bounds[1] && eAttachment.top === 'bottom') {
	            top += height;
	            eAttachment.top = 'top';
	          }

	          if (top + height > bounds[3] && eAttachment.top === 'top') {
	            top -= height;
	            eAttachment.top = 'bottom';
	          }
	        }

	        if (changeAttachX === 'element' || changeAttachX === 'both') {
	          if (left < bounds[0]) {
	            if (eAttachment.left === 'right') {
	              left += width;
	              eAttachment.left = 'left';
	            } else if (eAttachment.left === 'center') {
	              left += width / 2;
	              eAttachment.left = 'left';
	            }
	          }

	          if (left + width > bounds[2]) {
	            if (eAttachment.left === 'left') {
	              left -= width;
	              eAttachment.left = 'right';
	            } else if (eAttachment.left === 'center') {
	              left -= width / 2;
	              eAttachment.left = 'right';
	            }
	          }
	        }

	        if (isString(pin)) {
	          pin = pin.split(',').map(function (p) {
	            return p.trim();
	          });
	        } else if (pin === true) {
	          pin = ['top', 'left', 'right', 'bottom'];
	        }

	        pin = pin || [];
	        var pinned = [];
	        var oob = [];
	        left = _calculateOOBAndPinnedLeft(left, bounds, width, pin, pinned, oob);
	        top = _calculateOOBAndPinnedTop(top, bounds, height, pin, pinned, oob);

	        if (pinned.length) {
	          var pinnedClass;

	          if (!isUndefined(_this.options.pinnedClass)) {
	            pinnedClass = _this.options.pinnedClass;
	          } else {
	            pinnedClass = getClass('pinned', classes, classPrefix);
	          }

	          addClasses.push(pinnedClass);
	          pinned.forEach(function (side) {
	            addClasses.push(pinnedClass + "-" + side);
	          });
	        }

	        _addOutOfBoundsClass(oob, addClasses, classes, classPrefix, _this.options.outOfBoundsClass);

	        if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
	          eAttachment.left = tAttachment.left = false;
	        }

	        if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
	          eAttachment.top = tAttachment.top = false;
	        }

	        if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
	          _this.updateAttachClasses(eAttachment, tAttachment);

	          _this.trigger('update', {
	            attachment: eAttachment,
	            targetAttachment: tAttachment
	          });
	        }
	      });
	      defer(function () {
	        if (!(_this.options.addTargetClasses === false)) {
	          updateClasses(_this.target, addClasses, allClasses);
	        }

	        updateClasses(_this.element, addClasses, allClasses);
	      });
	      return {
	        top: top,
	        left: left
	      };
	    }
	  };

	  var Shift = {
	    position: function position(_ref) {
	      var top = _ref.top,
	          left = _ref.left;

	      if (!this.options.shift) {
	        return;
	      }

	      var shift = this.options.shift;

	      if (isFunction(shift)) {
	        shift = shift.call(this, {
	          top: top,
	          left: left
	        });
	      }

	      var shiftTop, shiftLeft;

	      if (isString(shift)) {
	        shift = shift.split(' ');
	        shift[1] = shift[1] || shift[0];
	        var _shift = shift;
	        shiftTop = _shift[0];
	        shiftLeft = _shift[1];
	        shiftTop = parseFloat(shiftTop, 10);
	        shiftLeft = parseFloat(shiftLeft, 10);
	      } else {
	        var _ref2 = [shift.top, shift.left];
	        shiftTop = _ref2[0];
	        shiftLeft = _ref2[1];
	      }

	      top += shiftTop;
	      left += shiftLeft;
	      return {
	        top: top,
	        left: left
	      };
	    }
	  };

	  var Evented = /*#__PURE__*/function () {
	    function Evented() {}

	    var _proto = Evented.prototype;

	    _proto.on = function on(event, handler, ctx, once) {
	      if (once === void 0) {
	        once = false;
	      }

	      if (isUndefined(this.bindings)) {
	        this.bindings = {};
	      }

	      if (isUndefined(this.bindings[event])) {
	        this.bindings[event] = [];
	      }

	      this.bindings[event].push({
	        handler: handler,
	        ctx: ctx,
	        once: once
	      });
	      return this;
	    };

	    _proto.once = function once(event, handler, ctx) {
	      return this.on(event, handler, ctx, true);
	    };

	    _proto.off = function off(event, handler) {
	      var _this = this;

	      if (isUndefined(this.bindings) || isUndefined(this.bindings[event])) {
	        return this;
	      }

	      if (isUndefined(handler)) {
	        delete this.bindings[event];
	      } else {
	        this.bindings[event].forEach(function (binding, index) {
	          if (binding.handler === handler) {
	            _this.bindings[event].splice(index, 1);
	          }
	        });
	      }

	      return this;
	    };

	    _proto.trigger = function trigger(event) {
	      var _this2 = this;

	      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      if (!isUndefined(this.bindings) && this.bindings[event]) {
	        this.bindings[event].forEach(function (binding, index) {
	          var ctx = binding.ctx,
	              handler = binding.handler,
	              once = binding.once;
	          var context = ctx || _this2;
	          handler.apply(context, args);

	          if (once) {
	            _this2.bindings[event].splice(index, 1);
	          }
	        });
	      }

	      return this;
	    };

	    return Evented;
	  }();

	  var MIRROR_LR = {
	    center: 'center',
	    left: 'right',
	    right: 'left'
	  };
	  var MIRROR_TB = {
	    middle: 'middle',
	    top: 'bottom',
	    bottom: 'top'
	  };
	  var OFFSET_MAP = {
	    top: 0,
	    left: 0,
	    middle: '50%',
	    center: '50%',
	    bottom: '100%',
	    right: '100%'
	  };
	  function addOffset() {
	    var out = {
	      top: 0,
	      left: 0
	    };

	    for (var _len = arguments.length, offsets = new Array(_len), _key = 0; _key < _len; _key++) {
	      offsets[_key] = arguments[_key];
	    }

	    offsets.forEach(function (_ref) {
	      var top = _ref.top,
	          left = _ref.left;

	      if (isString(top)) {
	        top = parseFloat(top);
	      }

	      if (isString(left)) {
	        left = parseFloat(left);
	      }

	      out.top += top;
	      out.left += left;
	    });
	    return out;
	  }
	  function attachmentToOffset(attachment) {
	    var left = attachment.left,
	        top = attachment.top;

	    if (!isUndefined(OFFSET_MAP[attachment.left])) {
	      left = OFFSET_MAP[attachment.left];
	    }

	    if (!isUndefined(OFFSET_MAP[attachment.top])) {
	      top = OFFSET_MAP[attachment.top];
	    }

	    return {
	      left: left,
	      top: top
	    };
	  }
	  function autoToFixedAttachment(attachment, relativeToAttachment) {
	    var left = attachment.left,
	        top = attachment.top;

	    if (left === 'auto') {
	      left = MIRROR_LR[relativeToAttachment.left];
	    }

	    if (top === 'auto') {
	      top = MIRROR_TB[relativeToAttachment.top];
	    }

	    return {
	      left: left,
	      top: top
	    };
	  }
	  function offsetToPx(offset, size) {
	    if (isString(offset.left) && offset.left.indexOf('%') !== -1) {
	      offset.left = parseFloat(offset.left) / 100 * size.width;
	    }

	    if (isString(offset.top) && offset.top.indexOf('%') !== -1) {
	      offset.top = parseFloat(offset.top) / 100 * size.height;
	    }

	    return offset;
	  }
	  function parseTopLeft(value) {
	    var _value$split = value.split(' '),
	        top = _value$split[0],
	        left = _value$split[1];

	    return {
	      top: top,
	      left: left
	    };
	  }

	  function getScrollParents(el) {
	    // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
	    var computedStyle = getComputedStyle(el) || {};
	    var position = computedStyle.position;
	    var parents = [];

	    if (position === 'fixed') {
	      return [el];
	    }

	    var parent = el;

	    while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
	      var style = void 0;

	      try {
	        style = getComputedStyle(parent);
	      } catch (err) {// Intentionally blank
	      }

	      if (isUndefined(style) || style === null) {
	        parents.push(parent);
	        return parents;
	      }

	      var _style = style,
	          overflow = _style.overflow,
	          overflowX = _style.overflowX,
	          overflowY = _style.overflowY;

	      if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
	        if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
	          parents.push(parent);
	        }
	      }
	    }

	    parents.push(el.ownerDocument.body); // If the node is within a frame, account for the parent window scroll

	    if (el.ownerDocument !== document) {
	      parents.push(el.ownerDocument.defaultView);
	    }

	    return parents;
	  }
	  function getOffsetParent(el) {
	    return el.offsetParent || document.documentElement;
	  }

	  var TetherBase = {
	    modules: [Constraint, Abutment, Shift]
	  };

	  function isFullscreenElement(e) {
	    var d = e.ownerDocument;
	    var fe = d.fullscreenElement || d.webkitFullscreenElement || d.mozFullScreenElement || d.msFullscreenElement;
	    return fe === e;
	  }

	  function within(a, b, diff) {
	    if (diff === void 0) {
	      diff = 1;
	    }

	    return a + diff >= b && b >= a - diff;
	  }

	  var transformKey = function () {
	    if (isUndefined(document)) {
	      return '';
	    }

	    var el = document.createElement('div');
	    var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];

	    for (var i = 0; i < transforms.length; ++i) {
	      var key = transforms[i];

	      if (el.style[key] !== undefined) {
	        return key;
	      }
	    }
	  }();

	  var tethers = [];

	  var position = function position() {
	    tethers.forEach(function (tether) {
	      tether.position(false);
	    });
	    flush();
	  };

	  function now() {
	    return performance.now();
	  }

	  (function () {
	    var lastCall = null;
	    var lastDuration = null;
	    var pendingTimeout = null;

	    var tick = function tick() {
	      if (!isUndefined(lastDuration) && lastDuration > 16) {
	        // We voluntarily throttle ourselves if we can't manage 60fps
	        lastDuration = Math.min(lastDuration - 16, 250); // Just in case this is the last event, remember to position just once more

	        pendingTimeout = setTimeout(tick, 250);
	        return;
	      }

	      if (!isUndefined(lastCall) && now() - lastCall < 10) {
	        // Some browsers call events a little too frequently, refuse to run more than is reasonable
	        return;
	      }

	      if (pendingTimeout != null) {
	        clearTimeout(pendingTimeout);
	        pendingTimeout = null;
	      }

	      lastCall = now();
	      position();
	      lastDuration = now() - lastCall;
	    };

	    if (!isUndefined(window) && !isUndefined(window.addEventListener)) {
	      ['resize', 'scroll', 'touchmove'].forEach(function (event) {
	        window.addEventListener(event, tick);
	      });
	    }
	  })();

	  var TetherClass = /*#__PURE__*/function (_Evented) {
	    _inheritsLoose(TetherClass, _Evented);

	    function TetherClass(options) {
	      var _this;

	      _this = _Evented.call(this) || this;
	      _this.position = _this.position.bind(_assertThisInitialized(_this));
	      tethers.push(_assertThisInitialized(_this));
	      _this.history = [];

	      _this.setOptions(options, false);

	      TetherBase.modules.forEach(function (module) {
	        if (!isUndefined(module.initialize)) {
	          module.initialize.call(_assertThisInitialized(_this));
	        }
	      });

	      _this.position();

	      return _this;
	    }

	    var _proto = TetherClass.prototype;

	    _proto.setOptions = function setOptions(options, pos) {
	      var _this2 = this;

	      if (pos === void 0) {
	        pos = true;
	      }

	      var defaults = {
	        offset: '0 0',
	        targetOffset: '0 0',
	        targetAttachment: 'auto auto',
	        classPrefix: 'tether',
	        bodyElement: document.body
	      };
	      this.options = extend(defaults, options);
	      var _this$options = this.options,
	          element = _this$options.element,
	          target = _this$options.target,
	          targetModifier = _this$options.targetModifier,
	          bodyElement = _this$options.bodyElement;
	      this.element = element;
	      this.target = target;
	      this.targetModifier = targetModifier;

	      if (typeof bodyElement === 'string') {
	        bodyElement = document.querySelector(bodyElement);
	      }

	      this.bodyElement = bodyElement;

	      if (this.target === 'viewport') {
	        this.target = document.body;
	        this.targetModifier = 'visible';
	      } else if (this.target === 'scroll-handle') {
	        this.target = document.body;
	        this.targetModifier = 'scroll-handle';
	      }

	      ['element', 'target'].forEach(function (key) {
	        if (isUndefined(_this2[key])) {
	          throw new Error('Tether Error: Both element and target must be defined');
	        }

	        if (!isUndefined(_this2[key].jquery)) {
	          _this2[key] = _this2[key][0];
	        } else if (isString(_this2[key])) {
	          _this2[key] = document.querySelector(_this2[key]);
	        }
	      });

	      this._addClasses();

	      if (!this.options.attachment) {
	        throw new Error('Tether Error: You must provide an attachment');
	      }

	      this.targetAttachment = parseTopLeft(this.options.targetAttachment);
	      this.attachment = parseTopLeft(this.options.attachment);
	      this.offset = parseTopLeft(this.options.offset);
	      this.targetOffset = parseTopLeft(this.options.targetOffset);

	      if (!isUndefined(this.scrollParents)) {
	        this.disable();
	      }

	      if (this.targetModifier === 'scroll-handle') {
	        this.scrollParents = [this.target];
	      } else {
	        this.scrollParents = getScrollParents(this.target);
	      }

	      if (!(this.options.enabled === false)) {
	        this.enable(pos);
	      }
	    };

	    _proto.getTargetBounds = function getTargetBounds() {
	      if (!isUndefined(this.targetModifier)) {
	        if (this.targetModifier === 'visible') {
	          return getVisibleBounds(this.bodyElement, this.target);
	        } else if (this.targetModifier === 'scroll-handle') {
	          return getScrollHandleBounds(this.bodyElement, this.target);
	        }
	      } else {
	        return getBounds(this.bodyElement, this.target);
	      }
	    };

	    _proto.clearCache = function clearCache() {
	      this._cache = {};
	    };

	    _proto.cache = function cache(k, getter) {
	      // More than one module will often need the same DOM info, so
	      // we keep a cache which is cleared on each position call
	      if (isUndefined(this._cache)) {
	        this._cache = {};
	      }

	      if (isUndefined(this._cache[k])) {
	        this._cache[k] = getter.call(this);
	      }

	      return this._cache[k];
	    };

	    _proto.enable = function enable(pos) {
	      var _this3 = this;

	      if (pos === void 0) {
	        pos = true;
	      }

	      var _this$options2 = this.options,
	          classes = _this$options2.classes,
	          classPrefix = _this$options2.classPrefix;

	      if (!(this.options.addTargetClasses === false)) {
	        addClass(this.target, getClass('enabled', classes, classPrefix));
	      }

	      addClass(this.element, getClass('enabled', classes, classPrefix));
	      this.enabled = true;
	      this.scrollParents.forEach(function (parent) {
	        if (parent !== _this3.target.ownerDocument) {
	          parent.addEventListener('scroll', _this3.position);
	        }
	      });

	      if (pos) {
	        this.position();
	      }
	    };

	    _proto.disable = function disable() {
	      var _this4 = this;

	      var _this$options3 = this.options,
	          classes = _this$options3.classes,
	          classPrefix = _this$options3.classPrefix;
	      removeClass(this.target, getClass('enabled', classes, classPrefix));
	      removeClass(this.element, getClass('enabled', classes, classPrefix));
	      this.enabled = false;

	      if (!isUndefined(this.scrollParents)) {
	        this.scrollParents.forEach(function (parent) {
	          if (parent && parent.removeEventListener) {
	            parent.removeEventListener('scroll', _this4.position);
	          }
	        });
	      }
	    };

	    _proto.destroy = function destroy() {
	      var _this5 = this;

	      this.disable();

	      this._removeClasses();

	      tethers.forEach(function (tether, i) {
	        if (tether === _this5) {
	          tethers.splice(i, 1);
	        }
	      }); // Remove any elements we were using for convenience from the DOM

	      if (tethers.length === 0) {
	        removeUtilElements(this.bodyElement);
	      }
	    };

	    _proto.updateAttachClasses = function updateAttachClasses(elementAttach, targetAttach) {
	      var _this6 = this;

	      elementAttach = elementAttach || this.attachment;
	      targetAttach = targetAttach || this.targetAttachment;
	      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];
	      var _this$options4 = this.options,
	          classes = _this$options4.classes,
	          classPrefix = _this$options4.classPrefix;

	      if (!isUndefined(this._addAttachClasses) && this._addAttachClasses.length) {
	        // updateAttachClasses can be called more than once in a position call, so
	        // we need to clean up after ourselves such that when the last defer gets
	        // ran it doesn't add any extra classes from previous calls.
	        this._addAttachClasses.splice(0, this._addAttachClasses.length);
	      }

	      if (isUndefined(this._addAttachClasses)) {
	        this._addAttachClasses = [];
	      }

	      this.add = this._addAttachClasses;

	      if (elementAttach.top) {
	        this.add.push(getClass('element-attached', classes, classPrefix) + "-" + elementAttach.top);
	      }

	      if (elementAttach.left) {
	        this.add.push(getClass('element-attached', classes, classPrefix) + "-" + elementAttach.left);
	      }

	      if (targetAttach.top) {
	        this.add.push(getClass('target-attached', classes, classPrefix) + "-" + targetAttach.top);
	      }

	      if (targetAttach.left) {
	        this.add.push(getClass('target-attached', classes, classPrefix) + "-" + targetAttach.left);
	      }

	      this.all = [];
	      sides.forEach(function (side) {
	        _this6.all.push(getClass('element-attached', classes, classPrefix) + "-" + side);

	        _this6.all.push(getClass('target-attached', classes, classPrefix) + "-" + side);
	      });
	      defer(function () {
	        if (isUndefined(_this6._addAttachClasses)) {
	          return;
	        }

	        updateClasses(_this6.element, _this6._addAttachClasses, _this6.all);

	        if (!(_this6.options.addTargetClasses === false)) {
	          updateClasses(_this6.target, _this6._addAttachClasses, _this6.all);
	        }

	        delete _this6._addAttachClasses;
	      });
	    };

	    _proto.position = function position(flushChanges) {
	      var _this7 = this;

	      if (flushChanges === void 0) {
	        flushChanges = true;
	      }

	      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
	      // tethers (in which case call Tether.Utils.flush yourself when you're done)
	      if (!this.enabled) {
	        return;
	      }

	      this.clearCache(); // Turn 'auto' attachments into the appropriate corner or edge

	      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);
	      this.updateAttachClasses(this.attachment, targetAttachment);
	      var elementPos = this.cache('element-bounds', function () {
	        return getBounds(_this7.bodyElement, _this7.element);
	      });
	      var width = elementPos.width,
	          height = elementPos.height;

	      if (width === 0 && height === 0 && !isUndefined(this.lastSize)) {
	        // We cache the height and width to make it possible to position elements that are
	        // getting hidden.
	        var _this$lastSize = this.lastSize;
	        width = _this$lastSize.width;
	        height = _this$lastSize.height;
	      } else {
	        this.lastSize = {
	          width: width,
	          height: height
	        };
	      }

	      var targetPos = this.cache('target-bounds', function () {
	        return _this7.getTargetBounds();
	      });
	      var targetSize = targetPos; // Get an actual px offset from the attachment

	      var offset = offsetToPx(attachmentToOffset(this.attachment), {
	        width: width,
	        height: height
	      });
	      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);
	      var manualOffset = offsetToPx(this.offset, {
	        width: width,
	        height: height
	      });
	      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize); // Add the manually provided offset

	      offset = addOffset(offset, manualOffset);
	      targetOffset = addOffset(targetOffset, manualTargetOffset); // It's now our goal to make (element position + offset) == (target position + target offset)

	      var left = targetPos.left + targetOffset.left - offset.left;
	      var top = targetPos.top + targetOffset.top - offset.top;

	      for (var i = 0; i < TetherBase.modules.length; ++i) {
	        var module = TetherBase.modules[i];
	        var ret = module.position.call(this, {
	          left: left,
	          top: top,
	          targetAttachment: targetAttachment,
	          targetPos: targetPos,
	          elementPos: elementPos,
	          offset: offset,
	          targetOffset: targetOffset,
	          manualOffset: manualOffset,
	          manualTargetOffset: manualTargetOffset,
	          scrollbarSize: scrollbarSize,
	          attachment: this.attachment
	        });

	        if (ret === false) {
	          return false;
	        } else if (isUndefined(ret) || !isObject(ret)) {
	          continue;
	        } else {
	          top = ret.top;
	          left = ret.left;
	        }
	      } // We describe the position three different ways to give the optimizer
	      // a chance to decide the best possible way to position the element
	      // with the fewest repaints.


	      var next = {
	        // It's position relative to the page (absolute positioning when
	        // the element is a child of the body)
	        page: {
	          top: top,
	          left: left
	        },
	        // It's position relative to the viewport (fixed positioning)
	        viewport: {
	          top: top - pageYOffset,
	          bottom: pageYOffset - top - height + innerHeight,
	          left: left - pageXOffset,
	          right: pageXOffset - left - width + innerWidth
	        }
	      };
	      var doc = this.target.ownerDocument;
	      var win = doc.defaultView;
	      var scrollbarSize;

	      if (win.innerHeight > doc.documentElement.clientHeight) {
	        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	        next.viewport.bottom -= scrollbarSize.height;
	      }

	      if (win.innerWidth > doc.documentElement.clientWidth) {
	        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	        next.viewport.right -= scrollbarSize.width;
	      }

	      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
	        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
	        next.page.bottom = doc.body.scrollHeight - top - height;
	        next.page.right = doc.body.scrollWidth - left - width;
	      }

	      if (!isUndefined(this.options.optimizations) && this.options.optimizations.moveElement !== false && isUndefined(this.targetModifier)) {
	        var offsetParent = this.cache('target-offsetparent', function () {
	          return getOffsetParent(_this7.target);
	        });
	        var offsetPosition = this.cache('target-offsetparent-bounds', function () {
	          return getBounds(_this7.bodyElement, offsetParent);
	        });
	        var offsetParentStyle = getComputedStyle(offsetParent);
	        var offsetParentSize = offsetPosition;
	        var offsetBorder = {};
	        ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
	          offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle["border" + side + "Width"]);
	        });
	        offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
	        offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

	        if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
	          if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
	            // We're within the visible part of the target's scroll parent
	            var scrollLeft = offsetParent.scrollLeft,
	                scrollTop = offsetParent.scrollTop; // It's position relative to the target's offset parent (absolute positioning when
	            // the element is moved to be a child of the target's offset parent).

	            next.offset = {
	              top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
	              left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
	            };
	          }
	        }
	      } // We could also travel up the DOM and try each containing context, rather than only
	      // looking at the body, but we're gonna get diminishing returns.


	      this.move(next);
	      this.history.unshift(next);

	      if (this.history.length > 3) {
	        this.history.pop();
	      }

	      if (flushChanges) {
	        flush();
	      }

	      return true;
	    } // THE ISSUE
	    ;

	    _proto.move = function move(pos) {
	      var _this8 = this;

	      if (isUndefined(this.element.parentNode)) {
	        return;
	      }

	      var same = {};

	      for (var type in pos) {
	        same[type] = {};

	        for (var key in pos[type]) {
	          var found = false;

	          for (var i = 0; i < this.history.length; ++i) {
	            var point = this.history[i];

	            if (!isUndefined(point[type]) && !within(point[type][key], pos[type][key])) {
	              found = true;
	              break;
	            }
	          }

	          if (!found) {
	            same[type][key] = true;
	          }
	        }
	      }

	      var css = {
	        top: '',
	        left: '',
	        right: '',
	        bottom: ''
	      };

	      var transcribe = function transcribe(_same, _pos) {
	        var hasOptimizations = !isUndefined(_this8.options.optimizations);
	        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;

	        if (gpu !== false) {
	          var yPos, xPos;

	          if (_same.top) {
	            css.top = 0;
	            yPos = _pos.top;
	          } else {
	            css.bottom = 0;
	            yPos = -_pos.bottom;
	          }

	          if (_same.left) {
	            css.left = 0;
	            xPos = _pos.left;
	          } else {
	            css.right = 0;
	            xPos = -_pos.right;
	          }

	          if (isNumber(window.devicePixelRatio) && devicePixelRatio % 1 === 0) {
	            xPos = Math.round(xPos * devicePixelRatio) / devicePixelRatio;
	            yPos = Math.round(yPos * devicePixelRatio) / devicePixelRatio;
	          }

	          css[transformKey] = "translateX(" + xPos + "px) translateY(" + yPos + "px)";

	          if (transformKey !== 'msTransform') {
	            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
	            // but IE9 doesn't support 3d transforms and will choke.
	            css[transformKey] += ' translateZ(0)';
	          }
	        } else {
	          if (_same.top) {
	            css.top = _pos.top + "px";
	          } else {
	            css.bottom = _pos.bottom + "px";
	          }

	          if (_same.left) {
	            css.left = _pos.left + "px";
	          } else {
	            css.right = _pos.right + "px";
	          }
	        }
	      };

	      var hasOptimizations = !isUndefined(this.options.optimizations);
	      var allowPositionFixed = true;

	      if (hasOptimizations && this.options.optimizations.allowPositionFixed === false) {
	        allowPositionFixed = false;
	      }

	      var moved = false;

	      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
	        css.position = 'absolute';
	        transcribe(same.page, pos.page);
	      } else if (allowPositionFixed && (same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
	        css.position = 'fixed';
	        transcribe(same.viewport, pos.viewport);
	      } else if (!isUndefined(same.offset) && same.offset.top && same.offset.left) {
	        css.position = 'absolute';
	        var offsetParent = this.cache('target-offsetparent', function () {
	          return getOffsetParent(_this8.target);
	        });

	        if (getOffsetParent(this.element) !== offsetParent) {
	          defer(function () {
	            _this8.element.parentNode.removeChild(_this8.element);

	            offsetParent.appendChild(_this8.element);
	          });
	        }

	        transcribe(same.offset, pos.offset);
	        moved = true;
	      } else {
	        css.position = 'absolute';
	        transcribe({
	          top: true,
	          left: true
	        }, pos.page);
	      }

	      if (!moved) {
	        if (this.options.bodyElement) {
	          if (this.element.parentNode !== this.options.bodyElement) {
	            this.options.bodyElement.appendChild(this.element);
	          }
	        } else {
	          var offsetParentIsBody = true;
	          var currentNode = this.element.parentNode;

	          while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY' && !isFullscreenElement(currentNode)) {
	            if (getComputedStyle(currentNode).position !== 'static') {
	              offsetParentIsBody = false;
	              break;
	            }

	            currentNode = currentNode.parentNode;
	          }

	          if (!offsetParentIsBody) {
	            this.element.parentNode.removeChild(this.element);
	            this.element.ownerDocument.body.appendChild(this.element);
	          }
	        }
	      } // Any css change will trigger a repaint, so let's avoid one if nothing changed


	      var writeCSS = {};
	      var write = false;

	      for (var _key in css) {
	        var val = css[_key];
	        var elVal = this.element.style[_key];

	        if (elVal !== val) {
	          write = true;
	          writeCSS[_key] = val;
	        }
	      }

	      if (write) {
	        defer(function () {
	          extend(_this8.element.style, writeCSS);

	          _this8.trigger('repositioned');
	        });
	      }
	    };

	    _proto._addClasses = function _addClasses() {
	      var _this$options5 = this.options,
	          classes = _this$options5.classes,
	          classPrefix = _this$options5.classPrefix;
	      addClass(this.element, getClass('element', classes, classPrefix));

	      if (!(this.options.addTargetClasses === false)) {
	        addClass(this.target, getClass('target', classes, classPrefix));
	      }
	    };

	    _proto._removeClasses = function _removeClasses() {
	      var _this9 = this;

	      var _this$options6 = this.options,
	          classes = _this$options6.classes,
	          classPrefix = _this$options6.classPrefix;
	      removeClass(this.element, getClass('element', classes, classPrefix));

	      if (!(this.options.addTargetClasses === false)) {
	        removeClass(this.target, getClass('target', classes, classPrefix));
	      }

	      this.all.forEach(function (className) {
	        _this9.element.classList.remove(className);

	        _this9.target.classList.remove(className);
	      });
	    };

	    return TetherClass;
	  }(Evented);

	  TetherClass.modules = [];
	  TetherBase.position = position;
	  var Tether = extend(TetherClass, TetherBase);
	  Tether.modules.push({
	    initialize: function initialize() {
	      var _this10 = this;

	      var _this$options7 = this.options,
	          classes = _this$options7.classes,
	          classPrefix = _this$options7.classPrefix;
	      this.markers = {};
	      ['target', 'element'].forEach(function (type) {
	        var el = document.createElement('div');
	        el.className = getClass(type + "-marker", classes, classPrefix);
	        var dot = document.createElement('div');
	        dot.className = getClass('marker-dot', classes, classPrefix);
	        el.appendChild(dot);

	        _this10[type].appendChild(el);

	        _this10.markers[type] = {
	          dot: dot,
	          el: el
	        };
	      });
	    },
	    position: function position(_ref) {
	      var manualOffset = _ref.manualOffset,
	          manualTargetOffset = _ref.manualTargetOffset;
	      var offsets = {
	        element: manualOffset,
	        target: manualTargetOffset
	      };

	      for (var type in offsets) {
	        var offset = offsets[type];

	        for (var side in offset) {
	          var _this$markers$type$do;

	          var val = offset[side];

	          if (!isString(val) || val.indexOf('%') === -1 && val.indexOf('px') === -1) {
	            val += 'px';
	          }

	          if (this.markers[type] && ((_this$markers$type$do = this.markers[type].dot) == null ? void 0 : _this$markers$type$do.style[side]) !== val) {
	            this.markers[type].dot.style[side] = val;
	          }
	        }
	      }

	      return true;
	    }
	  });

	  return Tether;

	})));
	//# sourceMappingURL=tether.js.map


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**!
	 * @fileOverview Kickass library to create and place poppers near their reference elements.
	 * @version 1.16.1
	 * @license
	 * Copyright (c) 2016 Federico Zivolo and contributors
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 * SOFTWARE.
	 */
	(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.Popper = factory());
	}(this, (function () { 'use strict';

	var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

	var timeoutDuration = function () {
	  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
	  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
	    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
	      return 1;
	    }
	  }
	  return 0;
	}();

	function microtaskDebounce(fn) {
	  var called = false;
	  return function () {
	    if (called) {
	      return;
	    }
	    called = true;
	    window.Promise.resolve().then(function () {
	      called = false;
	      fn();
	    });
	  };
	}

	function taskDebounce(fn) {
	  var scheduled = false;
	  return function () {
	    if (!scheduled) {
	      scheduled = true;
	      setTimeout(function () {
	        scheduled = false;
	        fn();
	      }, timeoutDuration);
	    }
	  };
	}

	var supportsMicroTasks = isBrowser && window.Promise;

	/**
	* Create a debounced version of a method, that's asynchronously deferred
	* but called in the minimum time possible.
	*
	* @method
	* @memberof Popper.Utils
	* @argument {Function} fn
	* @returns {Function}
	*/
	var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

	/**
	 * Check if the given variable is a function
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Any} functionToCheck - variable to check
	 * @returns {Boolean} answer to: is a function?
	 */
	function isFunction(functionToCheck) {
	  var getType = {};
	  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	}

	/**
	 * Get CSS computed property of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Eement} element
	 * @argument {String} property
	 */
	function getStyleComputedProperty(element, property) {
	  if (element.nodeType !== 1) {
	    return [];
	  }
	  // NOTE: 1 DOM access here
	  var window = element.ownerDocument.defaultView;
	  var css = window.getComputedStyle(element, null);
	  return property ? css[property] : css;
	}

	/**
	 * Returns the parentNode or the host of the element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} parent
	 */
	function getParentNode(element) {
	  if (element.nodeName === 'HTML') {
	    return element;
	  }
	  return element.parentNode || element.host;
	}

	/**
	 * Returns the scrolling parent of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} scroll parent
	 */
	function getScrollParent(element) {
	  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
	  if (!element) {
	    return document.body;
	  }

	  switch (element.nodeName) {
	    case 'HTML':
	    case 'BODY':
	      return element.ownerDocument.body;
	    case '#document':
	      return element.body;
	  }

	  // Firefox want us to check `-x` and `-y` variations as well

	  var _getStyleComputedProp = getStyleComputedProperty(element),
	      overflow = _getStyleComputedProp.overflow,
	      overflowX = _getStyleComputedProp.overflowX,
	      overflowY = _getStyleComputedProp.overflowY;

	  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
	    return element;
	  }

	  return getScrollParent(getParentNode(element));
	}

	/**
	 * Returns the reference node of the reference object, or the reference object itself.
	 * @method
	 * @memberof Popper.Utils
	 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
	 * @returns {Element} parent
	 */
	function getReferenceNode(reference) {
	  return reference && reference.referenceNode ? reference.referenceNode : reference;
	}

	var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
	var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

	/**
	 * Determines if the browser is Internet Explorer
	 * @method
	 * @memberof Popper.Utils
	 * @param {Number} version to check
	 * @returns {Boolean} isIE
	 */
	function isIE(version) {
	  if (version === 11) {
	    return isIE11;
	  }
	  if (version === 10) {
	    return isIE10;
	  }
	  return isIE11 || isIE10;
	}

	/**
	 * Returns the offset parent of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} offset parent
	 */
	function getOffsetParent(element) {
	  if (!element) {
	    return document.documentElement;
	  }

	  var noOffsetParent = isIE(10) ? document.body : null;

	  // NOTE: 1 DOM access here
	  var offsetParent = element.offsetParent || null;
	  // Skip hidden elements which don't have an offsetParent
	  while (offsetParent === noOffsetParent && element.nextElementSibling) {
	    offsetParent = (element = element.nextElementSibling).offsetParent;
	  }

	  var nodeName = offsetParent && offsetParent.nodeName;

	  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
	    return element ? element.ownerDocument.documentElement : document.documentElement;
	  }

	  // .offsetParent will return the closest TH, TD or TABLE in case
	  // no offsetParent is present, I hate this job...
	  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
	    return getOffsetParent(offsetParent);
	  }

	  return offsetParent;
	}

	function isOffsetContainer(element) {
	  var nodeName = element.nodeName;

	  if (nodeName === 'BODY') {
	    return false;
	  }
	  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
	}

	/**
	 * Finds the root node (document, shadowDOM root) of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} node
	 * @returns {Element} root node
	 */
	function getRoot(node) {
	  if (node.parentNode !== null) {
	    return getRoot(node.parentNode);
	  }

	  return node;
	}

	/**
	 * Finds the offset parent common to the two provided nodes
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element1
	 * @argument {Element} element2
	 * @returns {Element} common offset parent
	 */
	function findCommonOffsetParent(element1, element2) {
	  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
	  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
	    return document.documentElement;
	  }

	  // Here we make sure to give as "start" the element that comes first in the DOM
	  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
	  var start = order ? element1 : element2;
	  var end = order ? element2 : element1;

	  // Get common ancestor container
	  var range = document.createRange();
	  range.setStart(start, 0);
	  range.setEnd(end, 0);
	  var commonAncestorContainer = range.commonAncestorContainer;

	  // Both nodes are inside #document

	  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
	    if (isOffsetContainer(commonAncestorContainer)) {
	      return commonAncestorContainer;
	    }

	    return getOffsetParent(commonAncestorContainer);
	  }

	  // one of the nodes is inside shadowDOM, find which one
	  var element1root = getRoot(element1);
	  if (element1root.host) {
	    return findCommonOffsetParent(element1root.host, element2);
	  } else {
	    return findCommonOffsetParent(element1, getRoot(element2).host);
	  }
	}

	/**
	 * Gets the scroll value of the given element in the given side (top and left)
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @argument {String} side `top` or `left`
	 * @returns {number} amount of scrolled pixels
	 */
	function getScroll(element) {
	  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

	  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
	  var nodeName = element.nodeName;

	  if (nodeName === 'BODY' || nodeName === 'HTML') {
	    var html = element.ownerDocument.documentElement;
	    var scrollingElement = element.ownerDocument.scrollingElement || html;
	    return scrollingElement[upperSide];
	  }

	  return element[upperSide];
	}

	/*
	 * Sum or subtract the element scroll values (left and top) from a given rect object
	 * @method
	 * @memberof Popper.Utils
	 * @param {Object} rect - Rect object you want to change
	 * @param {HTMLElement} element - The element from the function reads the scroll values
	 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
	 * @return {Object} rect - The modifier rect object
	 */
	function includeScroll(rect, element) {
	  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	  var scrollTop = getScroll(element, 'top');
	  var scrollLeft = getScroll(element, 'left');
	  var modifier = subtract ? -1 : 1;
	  rect.top += scrollTop * modifier;
	  rect.bottom += scrollTop * modifier;
	  rect.left += scrollLeft * modifier;
	  rect.right += scrollLeft * modifier;
	  return rect;
	}

	/*
	 * Helper to detect borders of a given element
	 * @method
	 * @memberof Popper.Utils
	 * @param {CSSStyleDeclaration} styles
	 * Result of `getStyleComputedProperty` on the given element
	 * @param {String} axis - `x` or `y`
	 * @return {number} borders - The borders size of the given axis
	 */

	function getBordersSize(styles, axis) {
	  var sideA = axis === 'x' ? 'Left' : 'Top';
	  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

	  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
	}

	function getSize(axis, body, html, computedStyle) {
	  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
	}

	function getWindowSizes(document) {
	  var body = document.body;
	  var html = document.documentElement;
	  var computedStyle = isIE(10) && getComputedStyle(html);

	  return {
	    height: getSize('Height', body, html, computedStyle),
	    width: getSize('Width', body, html, computedStyle)
	  };
	}

	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();





	var defineProperty = function (obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	/**
	 * Given element offsets, generate an output similar to getBoundingClientRect
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Object} offsets
	 * @returns {Object} ClientRect like output
	 */
	function getClientRect(offsets) {
	  return _extends({}, offsets, {
	    right: offsets.left + offsets.width,
	    bottom: offsets.top + offsets.height
	  });
	}

	/**
	 * Get bounding client rect of given element
	 * @method
	 * @memberof Popper.Utils
	 * @param {HTMLElement} element
	 * @return {Object} client rect
	 */
	function getBoundingClientRect(element) {
	  var rect = {};

	  // IE10 10 FIX: Please, don't ask, the element isn't
	  // considered in DOM in some circumstances...
	  // This isn't reproducible in IE10 compatibility mode of IE11
	  try {
	    if (isIE(10)) {
	      rect = element.getBoundingClientRect();
	      var scrollTop = getScroll(element, 'top');
	      var scrollLeft = getScroll(element, 'left');
	      rect.top += scrollTop;
	      rect.left += scrollLeft;
	      rect.bottom += scrollTop;
	      rect.right += scrollLeft;
	    } else {
	      rect = element.getBoundingClientRect();
	    }
	  } catch (e) {}

	  var result = {
	    left: rect.left,
	    top: rect.top,
	    width: rect.right - rect.left,
	    height: rect.bottom - rect.top
	  };

	  // subtract scrollbar size from sizes
	  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
	  var width = sizes.width || element.clientWidth || result.width;
	  var height = sizes.height || element.clientHeight || result.height;

	  var horizScrollbar = element.offsetWidth - width;
	  var vertScrollbar = element.offsetHeight - height;

	  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
	  // we make this check conditional for performance reasons
	  if (horizScrollbar || vertScrollbar) {
	    var styles = getStyleComputedProperty(element);
	    horizScrollbar -= getBordersSize(styles, 'x');
	    vertScrollbar -= getBordersSize(styles, 'y');

	    result.width -= horizScrollbar;
	    result.height -= vertScrollbar;
	  }

	  return getClientRect(result);
	}

	function getOffsetRectRelativeToArbitraryNode(children, parent) {
	  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	  var isIE10 = isIE(10);
	  var isHTML = parent.nodeName === 'HTML';
	  var childrenRect = getBoundingClientRect(children);
	  var parentRect = getBoundingClientRect(parent);
	  var scrollParent = getScrollParent(children);

	  var styles = getStyleComputedProperty(parent);
	  var borderTopWidth = parseFloat(styles.borderTopWidth);
	  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

	  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
	  if (fixedPosition && isHTML) {
	    parentRect.top = Math.max(parentRect.top, 0);
	    parentRect.left = Math.max(parentRect.left, 0);
	  }
	  var offsets = getClientRect({
	    top: childrenRect.top - parentRect.top - borderTopWidth,
	    left: childrenRect.left - parentRect.left - borderLeftWidth,
	    width: childrenRect.width,
	    height: childrenRect.height
	  });
	  offsets.marginTop = 0;
	  offsets.marginLeft = 0;

	  // Subtract margins of documentElement in case it's being used as parent
	  // we do this only on HTML because it's the only element that behaves
	  // differently when margins are applied to it. The margins are included in
	  // the box of the documentElement, in the other cases not.
	  if (!isIE10 && isHTML) {
	    var marginTop = parseFloat(styles.marginTop);
	    var marginLeft = parseFloat(styles.marginLeft);

	    offsets.top -= borderTopWidth - marginTop;
	    offsets.bottom -= borderTopWidth - marginTop;
	    offsets.left -= borderLeftWidth - marginLeft;
	    offsets.right -= borderLeftWidth - marginLeft;

	    // Attach marginTop and marginLeft because in some circumstances we may need them
	    offsets.marginTop = marginTop;
	    offsets.marginLeft = marginLeft;
	  }

	  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
	    offsets = includeScroll(offsets, parent);
	  }

	  return offsets;
	}

	function getViewportOffsetRectRelativeToArtbitraryNode(element) {
	  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  var html = element.ownerDocument.documentElement;
	  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
	  var width = Math.max(html.clientWidth, window.innerWidth || 0);
	  var height = Math.max(html.clientHeight, window.innerHeight || 0);

	  var scrollTop = !excludeScroll ? getScroll(html) : 0;
	  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

	  var offset = {
	    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
	    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
	    width: width,
	    height: height
	  };

	  return getClientRect(offset);
	}

	/**
	 * Check if the given element is fixed or is inside a fixed parent
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @argument {Element} customContainer
	 * @returns {Boolean} answer to "isFixed?"
	 */
	function isFixed(element) {
	  var nodeName = element.nodeName;
	  if (nodeName === 'BODY' || nodeName === 'HTML') {
	    return false;
	  }
	  if (getStyleComputedProperty(element, 'position') === 'fixed') {
	    return true;
	  }
	  var parentNode = getParentNode(element);
	  if (!parentNode) {
	    return false;
	  }
	  return isFixed(parentNode);
	}

	/**
	 * Finds the first parent of an element that has a transformed property defined
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} first transformed parent or documentElement
	 */

	function getFixedPositionOffsetParent(element) {
	  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
	  if (!element || !element.parentElement || isIE()) {
	    return document.documentElement;
	  }
	  var el = element.parentElement;
	  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
	    el = el.parentElement;
	  }
	  return el || document.documentElement;
	}

	/**
	 * Computed the boundaries limits and return them
	 * @method
	 * @memberof Popper.Utils
	 * @param {HTMLElement} popper
	 * @param {HTMLElement} reference
	 * @param {number} padding
	 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
	 * @param {Boolean} fixedPosition - Is in fixed position mode
	 * @returns {Object} Coordinates of the boundaries
	 */
	function getBoundaries(popper, reference, padding, boundariesElement) {
	  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

	  // NOTE: 1 DOM access here

	  var boundaries = { top: 0, left: 0 };
	  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

	  // Handle viewport case
	  if (boundariesElement === 'viewport') {
	    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
	  } else {
	    // Handle other cases based on DOM element used as boundaries
	    var boundariesNode = void 0;
	    if (boundariesElement === 'scrollParent') {
	      boundariesNode = getScrollParent(getParentNode(reference));
	      if (boundariesNode.nodeName === 'BODY') {
	        boundariesNode = popper.ownerDocument.documentElement;
	      }
	    } else if (boundariesElement === 'window') {
	      boundariesNode = popper.ownerDocument.documentElement;
	    } else {
	      boundariesNode = boundariesElement;
	    }

	    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

	    // In case of HTML, we need a different computation
	    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
	      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
	          height = _getWindowSizes.height,
	          width = _getWindowSizes.width;

	      boundaries.top += offsets.top - offsets.marginTop;
	      boundaries.bottom = height + offsets.top;
	      boundaries.left += offsets.left - offsets.marginLeft;
	      boundaries.right = width + offsets.left;
	    } else {
	      // for all the other DOM elements, this one is good
	      boundaries = offsets;
	    }
	  }

	  // Add paddings
	  padding = padding || 0;
	  var isPaddingNumber = typeof padding === 'number';
	  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
	  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
	  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
	  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

	  return boundaries;
	}

	function getArea(_ref) {
	  var width = _ref.width,
	      height = _ref.height;

	  return width * height;
	}

	/**
	 * Utility used to transform the `auto` placement to the placement with more
	 * available space.
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
	  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

	  if (placement.indexOf('auto') === -1) {
	    return placement;
	  }

	  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

	  var rects = {
	    top: {
	      width: boundaries.width,
	      height: refRect.top - boundaries.top
	    },
	    right: {
	      width: boundaries.right - refRect.right,
	      height: boundaries.height
	    },
	    bottom: {
	      width: boundaries.width,
	      height: boundaries.bottom - refRect.bottom
	    },
	    left: {
	      width: refRect.left - boundaries.left,
	      height: boundaries.height
	    }
	  };

	  var sortedAreas = Object.keys(rects).map(function (key) {
	    return _extends({
	      key: key
	    }, rects[key], {
	      area: getArea(rects[key])
	    });
	  }).sort(function (a, b) {
	    return b.area - a.area;
	  });

	  var filteredAreas = sortedAreas.filter(function (_ref2) {
	    var width = _ref2.width,
	        height = _ref2.height;
	    return width >= popper.clientWidth && height >= popper.clientHeight;
	  });

	  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

	  var variation = placement.split('-')[1];

	  return computedPlacement + (variation ? '-' + variation : '');
	}

	/**
	 * Get offsets to the reference element
	 * @method
	 * @memberof Popper.Utils
	 * @param {Object} state
	 * @param {Element} popper - the popper element
	 * @param {Element} reference - the reference element (the popper will be relative to this)
	 * @param {Element} fixedPosition - is in fixed position mode
	 * @returns {Object} An object containing the offsets which will be applied to the popper
	 */
	function getReferenceOffsets(state, popper, reference) {
	  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
	  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
	}

	/**
	 * Get the outer sizes of the given element (offset size + margins)
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Object} object containing width and height properties
	 */
	function getOuterSizes(element) {
	  var window = element.ownerDocument.defaultView;
	  var styles = window.getComputedStyle(element);
	  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
	  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
	  var result = {
	    width: element.offsetWidth + y,
	    height: element.offsetHeight + x
	  };
	  return result;
	}

	/**
	 * Get the opposite placement of the given one
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} placement
	 * @returns {String} flipped placement
	 */
	function getOppositePlacement(placement) {
	  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
	  return placement.replace(/left|right|bottom|top/g, function (matched) {
	    return hash[matched];
	  });
	}

	/**
	 * Get offsets to the popper
	 * @method
	 * @memberof Popper.Utils
	 * @param {Object} position - CSS position the Popper will get applied
	 * @param {HTMLElement} popper - the popper element
	 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
	 * @param {String} placement - one of the valid placement options
	 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
	 */
	function getPopperOffsets(popper, referenceOffsets, placement) {
	  placement = placement.split('-')[0];

	  // Get popper node sizes
	  var popperRect = getOuterSizes(popper);

	  // Add position, width and height to our offsets object
	  var popperOffsets = {
	    width: popperRect.width,
	    height: popperRect.height
	  };

	  // depending by the popper placement we have to compute its offsets slightly differently
	  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
	  var mainSide = isHoriz ? 'top' : 'left';
	  var secondarySide = isHoriz ? 'left' : 'top';
	  var measurement = isHoriz ? 'height' : 'width';
	  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

	  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
	  if (placement === secondarySide) {
	    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
	  } else {
	    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
	  }

	  return popperOffsets;
	}

	/**
	 * Mimics the `find` method of Array
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Array} arr
	 * @argument prop
	 * @argument value
	 * @returns index or -1
	 */
	function find(arr, check) {
	  // use native find if supported
	  if (Array.prototype.find) {
	    return arr.find(check);
	  }

	  // use `filter` to obtain the same behavior of `find`
	  return arr.filter(check)[0];
	}

	/**
	 * Return the index of the matching object
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Array} arr
	 * @argument prop
	 * @argument value
	 * @returns index or -1
	 */
	function findIndex(arr, prop, value) {
	  // use native findIndex if supported
	  if (Array.prototype.findIndex) {
	    return arr.findIndex(function (cur) {
	      return cur[prop] === value;
	    });
	  }

	  // use `find` + `indexOf` if `findIndex` isn't supported
	  var match = find(arr, function (obj) {
	    return obj[prop] === value;
	  });
	  return arr.indexOf(match);
	}

	/**
	 * Loop trough the list of modifiers and run them in order,
	 * each of them will then edit the data object.
	 * @method
	 * @memberof Popper.Utils
	 * @param {dataObject} data
	 * @param {Array} modifiers
	 * @param {String} ends - Optional modifier name used as stopper
	 * @returns {dataObject}
	 */
	function runModifiers(modifiers, data, ends) {
	  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

	  modifiersToRun.forEach(function (modifier) {
	    if (modifier['function']) {
	      // eslint-disable-line dot-notation
	      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
	    }
	    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
	    if (modifier.enabled && isFunction(fn)) {
	      // Add properties to offsets to make them a complete clientRect object
	      // we do this before each modifier to make sure the previous one doesn't
	      // mess with these values
	      data.offsets.popper = getClientRect(data.offsets.popper);
	      data.offsets.reference = getClientRect(data.offsets.reference);

	      data = fn(data, modifier);
	    }
	  });

	  return data;
	}

	/**
	 * Updates the position of the popper, computing the new offsets and applying
	 * the new style.<br />
	 * Prefer `scheduleUpdate` over `update` because of performance reasons.
	 * @method
	 * @memberof Popper
	 */
	function update() {
	  // if popper is destroyed, don't perform any further update
	  if (this.state.isDestroyed) {
	    return;
	  }

	  var data = {
	    instance: this,
	    styles: {},
	    arrowStyles: {},
	    attributes: {},
	    flipped: false,
	    offsets: {}
	  };

	  // compute reference element offsets
	  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

	  // compute auto placement, store placement inside the data object,
	  // modifiers will be able to edit `placement` if needed
	  // and refer to originalPlacement to know the original value
	  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

	  // store the computed placement inside `originalPlacement`
	  data.originalPlacement = data.placement;

	  data.positionFixed = this.options.positionFixed;

	  // compute the popper offsets
	  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

	  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

	  // run the modifiers
	  data = runModifiers(this.modifiers, data);

	  // the first `update` will call `onCreate` callback
	  // the other ones will call `onUpdate` callback
	  if (!this.state.isCreated) {
	    this.state.isCreated = true;
	    this.options.onCreate(data);
	  } else {
	    this.options.onUpdate(data);
	  }
	}

	/**
	 * Helper used to know if the given modifier is enabled.
	 * @method
	 * @memberof Popper.Utils
	 * @returns {Boolean}
	 */
	function isModifierEnabled(modifiers, modifierName) {
	  return modifiers.some(function (_ref) {
	    var name = _ref.name,
	        enabled = _ref.enabled;
	    return enabled && name === modifierName;
	  });
	}

	/**
	 * Get the prefixed supported property name
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} property (camelCase)
	 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
	 */
	function getSupportedPropertyName(property) {
	  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
	  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

	  for (var i = 0; i < prefixes.length; i++) {
	    var prefix = prefixes[i];
	    var toCheck = prefix ? '' + prefix + upperProp : property;
	    if (typeof document.body.style[toCheck] !== 'undefined') {
	      return toCheck;
	    }
	  }
	  return null;
	}

	/**
	 * Destroys the popper.
	 * @method
	 * @memberof Popper
	 */
	function destroy() {
	  this.state.isDestroyed = true;

	  // touch DOM only if `applyStyle` modifier is enabled
	  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
	    this.popper.removeAttribute('x-placement');
	    this.popper.style.position = '';
	    this.popper.style.top = '';
	    this.popper.style.left = '';
	    this.popper.style.right = '';
	    this.popper.style.bottom = '';
	    this.popper.style.willChange = '';
	    this.popper.style[getSupportedPropertyName('transform')] = '';
	  }

	  this.disableEventListeners();

	  // remove the popper if user explicitly asked for the deletion on destroy
	  // do not use `remove` because IE11 doesn't support it
	  if (this.options.removeOnDestroy) {
	    this.popper.parentNode.removeChild(this.popper);
	  }
	  return this;
	}

	/**
	 * Get the window associated with the element
	 * @argument {Element} element
	 * @returns {Window}
	 */
	function getWindow(element) {
	  var ownerDocument = element.ownerDocument;
	  return ownerDocument ? ownerDocument.defaultView : window;
	}

	function attachToScrollParents(scrollParent, event, callback, scrollParents) {
	  var isBody = scrollParent.nodeName === 'BODY';
	  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
	  target.addEventListener(event, callback, { passive: true });

	  if (!isBody) {
	    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
	  }
	  scrollParents.push(target);
	}

	/**
	 * Setup needed event listeners used to update the popper position
	 * @method
	 * @memberof Popper.Utils
	 * @private
	 */
	function setupEventListeners(reference, options, state, updateBound) {
	  // Resize event listener on window
	  state.updateBound = updateBound;
	  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

	  // Scroll event listener on scroll parents
	  var scrollElement = getScrollParent(reference);
	  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
	  state.scrollElement = scrollElement;
	  state.eventsEnabled = true;

	  return state;
	}

	/**
	 * It will add resize/scroll events and start recalculating
	 * position of the popper element when they are triggered.
	 * @method
	 * @memberof Popper
	 */
	function enableEventListeners() {
	  if (!this.state.eventsEnabled) {
	    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
	  }
	}

	/**
	 * Remove event listeners used to update the popper position
	 * @method
	 * @memberof Popper.Utils
	 * @private
	 */
	function removeEventListeners(reference, state) {
	  // Remove resize event listener on window
	  getWindow(reference).removeEventListener('resize', state.updateBound);

	  // Remove scroll event listener on scroll parents
	  state.scrollParents.forEach(function (target) {
	    target.removeEventListener('scroll', state.updateBound);
	  });

	  // Reset state
	  state.updateBound = null;
	  state.scrollParents = [];
	  state.scrollElement = null;
	  state.eventsEnabled = false;
	  return state;
	}

	/**
	 * It will remove resize/scroll events and won't recalculate popper position
	 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
	 * unless you call `update` method manually.
	 * @method
	 * @memberof Popper
	 */
	function disableEventListeners() {
	  if (this.state.eventsEnabled) {
	    cancelAnimationFrame(this.scheduleUpdate);
	    this.state = removeEventListeners(this.reference, this.state);
	  }
	}

	/**
	 * Tells if a given input is a number
	 * @method
	 * @memberof Popper.Utils
	 * @param {*} input to check
	 * @return {Boolean}
	 */
	function isNumeric(n) {
	  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
	}

	/**
	 * Set the style to the given popper
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element - Element to apply the style to
	 * @argument {Object} styles
	 * Object with a list of properties and values which will be applied to the element
	 */
	function setStyles(element, styles) {
	  Object.keys(styles).forEach(function (prop) {
	    var unit = '';
	    // add unit if the value is numeric and is one of the following
	    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
	      unit = 'px';
	    }
	    element.style[prop] = styles[prop] + unit;
	  });
	}

	/**
	 * Set the attributes to the given popper
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element - Element to apply the attributes to
	 * @argument {Object} styles
	 * Object with a list of properties and values which will be applied to the element
	 */
	function setAttributes(element, attributes) {
	  Object.keys(attributes).forEach(function (prop) {
	    var value = attributes[prop];
	    if (value !== false) {
	      element.setAttribute(prop, attributes[prop]);
	    } else {
	      element.removeAttribute(prop);
	    }
	  });
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} data.styles - List of style properties - values to apply to popper element
	 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The same data object
	 */
	function applyStyle(data) {
	  // any property present in `data.styles` will be applied to the popper,
	  // in this way we can make the 3rd party modifiers add custom styles to it
	  // Be aware, modifiers could override the properties defined in the previous
	  // lines of this modifier!
	  setStyles(data.instance.popper, data.styles);

	  // any property present in `data.attributes` will be applied to the popper,
	  // they will be set as HTML attributes of the element
	  setAttributes(data.instance.popper, data.attributes);

	  // if arrowElement is defined and arrowStyles has some properties
	  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
	    setStyles(data.arrowElement, data.arrowStyles);
	  }

	  return data;
	}

	/**
	 * Set the x-placement attribute before everything else because it could be used
	 * to add margins to the popper margins needs to be calculated to get the
	 * correct popper offsets.
	 * @method
	 * @memberof Popper.modifiers
	 * @param {HTMLElement} reference - The reference element used to position the popper
	 * @param {HTMLElement} popper - The HTML element used as popper
	 * @param {Object} options - Popper.js options
	 */
	function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
	  // compute reference element offsets
	  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

	  // compute auto placement, store placement inside the data object,
	  // modifiers will be able to edit `placement` if needed
	  // and refer to originalPlacement to know the original value
	  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

	  popper.setAttribute('x-placement', placement);

	  // Apply `position` to popper before anything else because
	  // without the position applied we can't guarantee correct computations
	  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

	  return options;
	}

	/**
	 * @function
	 * @memberof Popper.Utils
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
	 * @returns {Object} The popper's position offsets rounded
	 *
	 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
	 * good as it can be within reason.
	 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
	 *
	 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
	 * as well on High DPI screens).
	 *
	 * Firefox prefers no rounding for positioning and does not have blurriness on
	 * high DPI screens.
	 *
	 * Only horizontal placement and left/right values need to be considered.
	 */
	function getRoundedOffsets(data, shouldRound) {
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;
	  var round = Math.round,
	      floor = Math.floor;

	  var noRound = function noRound(v) {
	    return v;
	  };

	  var referenceWidth = round(reference.width);
	  var popperWidth = round(popper.width);

	  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
	  var isVariation = data.placement.indexOf('-') !== -1;
	  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
	  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

	  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
	  var verticalToInteger = !shouldRound ? noRound : round;

	  return {
	    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
	    top: verticalToInteger(popper.top),
	    bottom: verticalToInteger(popper.bottom),
	    right: horizontalToInteger(popper.right)
	  };
	}

	var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function computeStyle(data, options) {
	  var x = options.x,
	      y = options.y;
	  var popper = data.offsets.popper;

	  // Remove this legacy support in Popper.js v2

	  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
	    return modifier.name === 'applyStyle';
	  }).gpuAcceleration;
	  if (legacyGpuAccelerationOption !== undefined) {
	    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
	  }
	  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

	  var offsetParent = getOffsetParent(data.instance.popper);
	  var offsetParentRect = getBoundingClientRect(offsetParent);

	  // Styles
	  var styles = {
	    position: popper.position
	  };

	  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

	  var sideA = x === 'bottom' ? 'top' : 'bottom';
	  var sideB = y === 'right' ? 'left' : 'right';

	  // if gpuAcceleration is set to `true` and transform is supported,
	  //  we use `translate3d` to apply the position to the popper we
	  // automatically use the supported prefixed version if needed
	  var prefixedProperty = getSupportedPropertyName('transform');

	  // now, let's make a step back and look at this code closely (wtf?)
	  // If the content of the popper grows once it's been positioned, it
	  // may happen that the popper gets misplaced because of the new content
	  // overflowing its reference element
	  // To avoid this problem, we provide two options (x and y), which allow
	  // the consumer to define the offset origin.
	  // If we position a popper on top of a reference element, we can set
	  // `x` to `top` to make the popper grow towards its top instead of
	  // its bottom.
	  var left = void 0,
	      top = void 0;
	  if (sideA === 'bottom') {
	    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
	    // and not the bottom of the html element
	    if (offsetParent.nodeName === 'HTML') {
	      top = -offsetParent.clientHeight + offsets.bottom;
	    } else {
	      top = -offsetParentRect.height + offsets.bottom;
	    }
	  } else {
	    top = offsets.top;
	  }
	  if (sideB === 'right') {
	    if (offsetParent.nodeName === 'HTML') {
	      left = -offsetParent.clientWidth + offsets.right;
	    } else {
	      left = -offsetParentRect.width + offsets.right;
	    }
	  } else {
	    left = offsets.left;
	  }
	  if (gpuAcceleration && prefixedProperty) {
	    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
	    styles[sideA] = 0;
	    styles[sideB] = 0;
	    styles.willChange = 'transform';
	  } else {
	    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
	    var invertTop = sideA === 'bottom' ? -1 : 1;
	    var invertLeft = sideB === 'right' ? -1 : 1;
	    styles[sideA] = top * invertTop;
	    styles[sideB] = left * invertLeft;
	    styles.willChange = sideA + ', ' + sideB;
	  }

	  // Attributes
	  var attributes = {
	    'x-placement': data.placement
	  };

	  // Update `data` attributes, styles and arrowStyles
	  data.attributes = _extends({}, attributes, data.attributes);
	  data.styles = _extends({}, styles, data.styles);
	  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

	  return data;
	}

	/**
	 * Helper used to know if the given modifier depends from another one.<br />
	 * It checks if the needed modifier is listed and enabled.
	 * @method
	 * @memberof Popper.Utils
	 * @param {Array} modifiers - list of modifiers
	 * @param {String} requestingName - name of requesting modifier
	 * @param {String} requestedName - name of requested modifier
	 * @returns {Boolean}
	 */
	function isModifierRequired(modifiers, requestingName, requestedName) {
	  var requesting = find(modifiers, function (_ref) {
	    var name = _ref.name;
	    return name === requestingName;
	  });

	  var isRequired = !!requesting && modifiers.some(function (modifier) {
	    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
	  });

	  if (!isRequired) {
	    var _requesting = '`' + requestingName + '`';
	    var requested = '`' + requestedName + '`';
	    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
	  }
	  return isRequired;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function arrow(data, options) {
	  var _data$offsets$arrow;

	  // arrow depends on keepTogether in order to work
	  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
	    return data;
	  }

	  var arrowElement = options.element;

	  // if arrowElement is a string, suppose it's a CSS selector
	  if (typeof arrowElement === 'string') {
	    arrowElement = data.instance.popper.querySelector(arrowElement);

	    // if arrowElement is not found, don't run the modifier
	    if (!arrowElement) {
	      return data;
	    }
	  } else {
	    // if the arrowElement isn't a query selector we must check that the
	    // provided DOM node is child of its popper node
	    if (!data.instance.popper.contains(arrowElement)) {
	      console.warn('WARNING: `arrow.element` must be child of its popper element!');
	      return data;
	    }
	  }

	  var placement = data.placement.split('-')[0];
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;

	  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

	  var len = isVertical ? 'height' : 'width';
	  var sideCapitalized = isVertical ? 'Top' : 'Left';
	  var side = sideCapitalized.toLowerCase();
	  var altSide = isVertical ? 'left' : 'top';
	  var opSide = isVertical ? 'bottom' : 'right';
	  var arrowElementSize = getOuterSizes(arrowElement)[len];

	  //
	  // extends keepTogether behavior making sure the popper and its
	  // reference have enough pixels in conjunction
	  //

	  // top/left side
	  if (reference[opSide] - arrowElementSize < popper[side]) {
	    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
	  }
	  // bottom/right side
	  if (reference[side] + arrowElementSize > popper[opSide]) {
	    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
	  }
	  data.offsets.popper = getClientRect(data.offsets.popper);

	  // compute center of the popper
	  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

	  // Compute the sideValue using the updated popper offsets
	  // take popper margin in account because we don't have this info available
	  var css = getStyleComputedProperty(data.instance.popper);
	  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
	  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
	  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

	  // prevent arrowElement from being placed not contiguously to its popper
	  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

	  data.arrowElement = arrowElement;
	  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

	  return data;
	}

	/**
	 * Get the opposite placement variation of the given one
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} placement variation
	 * @returns {String} flipped placement variation
	 */
	function getOppositeVariation(variation) {
	  if (variation === 'end') {
	    return 'start';
	  } else if (variation === 'start') {
	    return 'end';
	  }
	  return variation;
	}

	/**
	 * List of accepted placements to use as values of the `placement` option.<br />
	 * Valid placements are:
	 * - `auto`
	 * - `top`
	 * - `right`
	 * - `bottom`
	 * - `left`
	 *
	 * Each placement can have a variation from this list:
	 * - `-start`
	 * - `-end`
	 *
	 * Variations are interpreted easily if you think of them as the left to right
	 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
	 * is right.<br />
	 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
	 *
	 * Some valid examples are:
	 * - `top-end` (on top of reference, right aligned)
	 * - `right-start` (on right of reference, top aligned)
	 * - `bottom` (on bottom, centered)
	 * - `auto-end` (on the side with more space available, alignment depends by placement)
	 *
	 * @static
	 * @type {Array}
	 * @enum {String}
	 * @readonly
	 * @method placements
	 * @memberof Popper
	 */
	var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

	// Get rid of `auto` `auto-start` and `auto-end`
	var validPlacements = placements.slice(3);

	/**
	 * Given an initial placement, returns all the subsequent placements
	 * clockwise (or counter-clockwise).
	 *
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} placement - A valid placement (it accepts variations)
	 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
	 * @returns {Array} placements including their variations
	 */
	function clockwise(placement) {
	  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  var index = validPlacements.indexOf(placement);
	  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
	  return counter ? arr.reverse() : arr;
	}

	var BEHAVIORS = {
	  FLIP: 'flip',
	  CLOCKWISE: 'clockwise',
	  COUNTERCLOCKWISE: 'counterclockwise'
	};

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function flip(data, options) {
	  // if `inner` modifier is enabled, we can't use the `flip` modifier
	  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
	    return data;
	  }

	  if (data.flipped && data.placement === data.originalPlacement) {
	    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
	    return data;
	  }

	  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

	  var placement = data.placement.split('-')[0];
	  var placementOpposite = getOppositePlacement(placement);
	  var variation = data.placement.split('-')[1] || '';

	  var flipOrder = [];

	  switch (options.behavior) {
	    case BEHAVIORS.FLIP:
	      flipOrder = [placement, placementOpposite];
	      break;
	    case BEHAVIORS.CLOCKWISE:
	      flipOrder = clockwise(placement);
	      break;
	    case BEHAVIORS.COUNTERCLOCKWISE:
	      flipOrder = clockwise(placement, true);
	      break;
	    default:
	      flipOrder = options.behavior;
	  }

	  flipOrder.forEach(function (step, index) {
	    if (placement !== step || flipOrder.length === index + 1) {
	      return data;
	    }

	    placement = data.placement.split('-')[0];
	    placementOpposite = getOppositePlacement(placement);

	    var popperOffsets = data.offsets.popper;
	    var refOffsets = data.offsets.reference;

	    // using floor because the reference offsets may contain decimals we are not going to consider here
	    var floor = Math.floor;
	    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

	    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
	    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
	    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
	    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

	    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

	    // flip the variation if required
	    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

	    // flips variation if reference element overflows boundaries
	    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

	    // flips variation if popper content overflows boundaries
	    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

	    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

	    if (overlapsRef || overflowsBoundaries || flippedVariation) {
	      // this boolean to detect any flip loop
	      data.flipped = true;

	      if (overlapsRef || overflowsBoundaries) {
	        placement = flipOrder[index + 1];
	      }

	      if (flippedVariation) {
	        variation = getOppositeVariation(variation);
	      }

	      data.placement = placement + (variation ? '-' + variation : '');

	      // this object contains `position`, we want to preserve it along with
	      // any additional property we may add in the future
	      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

	      data = runModifiers(data.instance.modifiers, data, 'flip');
	    }
	  });
	  return data;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function keepTogether(data) {
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;

	  var placement = data.placement.split('-')[0];
	  var floor = Math.floor;
	  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
	  var side = isVertical ? 'right' : 'bottom';
	  var opSide = isVertical ? 'left' : 'top';
	  var measurement = isVertical ? 'width' : 'height';

	  if (popper[side] < floor(reference[opSide])) {
	    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
	  }
	  if (popper[opSide] > floor(reference[side])) {
	    data.offsets.popper[opSide] = floor(reference[side]);
	  }

	  return data;
	}

	/**
	 * Converts a string containing value + unit into a px value number
	 * @function
	 * @memberof {modifiers~offset}
	 * @private
	 * @argument {String} str - Value + unit string
	 * @argument {String} measurement - `height` or `width`
	 * @argument {Object} popperOffsets
	 * @argument {Object} referenceOffsets
	 * @returns {Number|String}
	 * Value in pixels, or original string if no values were extracted
	 */
	function toValue(str, measurement, popperOffsets, referenceOffsets) {
	  // separate value from unit
	  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
	  var value = +split[1];
	  var unit = split[2];

	  // If it's not a number it's an operator, I guess
	  if (!value) {
	    return str;
	  }

	  if (unit.indexOf('%') === 0) {
	    var element = void 0;
	    switch (unit) {
	      case '%p':
	        element = popperOffsets;
	        break;
	      case '%':
	      case '%r':
	      default:
	        element = referenceOffsets;
	    }

	    var rect = getClientRect(element);
	    return rect[measurement] / 100 * value;
	  } else if (unit === 'vh' || unit === 'vw') {
	    // if is a vh or vw, we calculate the size based on the viewport
	    var size = void 0;
	    if (unit === 'vh') {
	      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	    } else {
	      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	    }
	    return size / 100 * value;
	  } else {
	    // if is an explicit pixel unit, we get rid of the unit and keep the value
	    // if is an implicit unit, it's px, and we return just the value
	    return value;
	  }
	}

	/**
	 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
	 * @function
	 * @memberof {modifiers~offset}
	 * @private
	 * @argument {String} offset
	 * @argument {Object} popperOffsets
	 * @argument {Object} referenceOffsets
	 * @argument {String} basePlacement
	 * @returns {Array} a two cells array with x and y offsets in numbers
	 */
	function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
	  var offsets = [0, 0];

	  // Use height if placement is left or right and index is 0 otherwise use width
	  // in this way the first offset will use an axis and the second one
	  // will use the other one
	  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

	  // Split the offset string to obtain a list of values and operands
	  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
	  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
	    return frag.trim();
	  });

	  // Detect if the offset string contains a pair of values or a single one
	  // they could be separated by comma or space
	  var divider = fragments.indexOf(find(fragments, function (frag) {
	    return frag.search(/,|\s/) !== -1;
	  }));

	  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
	    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
	  }

	  // If divider is found, we divide the list of values and operands to divide
	  // them by ofset X and Y.
	  var splitRegex = /\s*,\s*|\s+/;
	  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

	  // Convert the values with units to absolute pixels to allow our computations
	  ops = ops.map(function (op, index) {
	    // Most of the units rely on the orientation of the popper
	    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
	    var mergeWithPrevious = false;
	    return op
	    // This aggregates any `+` or `-` sign that aren't considered operators
	    // e.g.: 10 + +5 => [10, +, +5]
	    .reduce(function (a, b) {
	      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
	        a[a.length - 1] = b;
	        mergeWithPrevious = true;
	        return a;
	      } else if (mergeWithPrevious) {
	        a[a.length - 1] += b;
	        mergeWithPrevious = false;
	        return a;
	      } else {
	        return a.concat(b);
	      }
	    }, [])
	    // Here we convert the string values into number values (in px)
	    .map(function (str) {
	      return toValue(str, measurement, popperOffsets, referenceOffsets);
	    });
	  });

	  // Loop trough the offsets arrays and execute the operations
	  ops.forEach(function (op, index) {
	    op.forEach(function (frag, index2) {
	      if (isNumeric(frag)) {
	        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
	      }
	    });
	  });
	  return offsets;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @argument {Number|String} options.offset=0
	 * The offset value as described in the modifier description
	 * @returns {Object} The data object, properly modified
	 */
	function offset(data, _ref) {
	  var offset = _ref.offset;
	  var placement = data.placement,
	      _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;

	  var basePlacement = placement.split('-')[0];

	  var offsets = void 0;
	  if (isNumeric(+offset)) {
	    offsets = [+offset, 0];
	  } else {
	    offsets = parseOffset(offset, popper, reference, basePlacement);
	  }

	  if (basePlacement === 'left') {
	    popper.top += offsets[0];
	    popper.left -= offsets[1];
	  } else if (basePlacement === 'right') {
	    popper.top += offsets[0];
	    popper.left += offsets[1];
	  } else if (basePlacement === 'top') {
	    popper.left += offsets[0];
	    popper.top -= offsets[1];
	  } else if (basePlacement === 'bottom') {
	    popper.left += offsets[0];
	    popper.top += offsets[1];
	  }

	  data.popper = popper;
	  return data;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function preventOverflow(data, options) {
	  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

	  // If offsetParent is the reference element, we really want to
	  // go one step up and use the next offsetParent as reference to
	  // avoid to make this modifier completely useless and look like broken
	  if (data.instance.reference === boundariesElement) {
	    boundariesElement = getOffsetParent(boundariesElement);
	  }

	  // NOTE: DOM access here
	  // resets the popper's position so that the document size can be calculated excluding
	  // the size of the popper element itself
	  var transformProp = getSupportedPropertyName('transform');
	  var popperStyles = data.instance.popper.style; // assignment to help minification
	  var top = popperStyles.top,
	      left = popperStyles.left,
	      transform = popperStyles[transformProp];

	  popperStyles.top = '';
	  popperStyles.left = '';
	  popperStyles[transformProp] = '';

	  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

	  // NOTE: DOM access here
	  // restores the original style properties after the offsets have been computed
	  popperStyles.top = top;
	  popperStyles.left = left;
	  popperStyles[transformProp] = transform;

	  options.boundaries = boundaries;

	  var order = options.priority;
	  var popper = data.offsets.popper;

	  var check = {
	    primary: function primary(placement) {
	      var value = popper[placement];
	      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
	        value = Math.max(popper[placement], boundaries[placement]);
	      }
	      return defineProperty({}, placement, value);
	    },
	    secondary: function secondary(placement) {
	      var mainSide = placement === 'right' ? 'left' : 'top';
	      var value = popper[mainSide];
	      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
	        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
	      }
	      return defineProperty({}, mainSide, value);
	    }
	  };

	  order.forEach(function (placement) {
	    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
	    popper = _extends({}, popper, check[side](placement));
	  });

	  data.offsets.popper = popper;

	  return data;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function shift(data) {
	  var placement = data.placement;
	  var basePlacement = placement.split('-')[0];
	  var shiftvariation = placement.split('-')[1];

	  // if shift shiftvariation is specified, run the modifier
	  if (shiftvariation) {
	    var _data$offsets = data.offsets,
	        reference = _data$offsets.reference,
	        popper = _data$offsets.popper;

	    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
	    var side = isVertical ? 'left' : 'top';
	    var measurement = isVertical ? 'width' : 'height';

	    var shiftOffsets = {
	      start: defineProperty({}, side, reference[side]),
	      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
	    };

	    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
	  }

	  return data;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function hide(data) {
	  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
	    return data;
	  }

	  var refRect = data.offsets.reference;
	  var bound = find(data.instance.modifiers, function (modifier) {
	    return modifier.name === 'preventOverflow';
	  }).boundaries;

	  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
	    // Avoid unnecessary DOM access if visibility hasn't changed
	    if (data.hide === true) {
	      return data;
	    }

	    data.hide = true;
	    data.attributes['x-out-of-boundaries'] = '';
	  } else {
	    // Avoid unnecessary DOM access if visibility hasn't changed
	    if (data.hide === false) {
	      return data;
	    }

	    data.hide = false;
	    data.attributes['x-out-of-boundaries'] = false;
	  }

	  return data;
	}

	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */
	function inner(data) {
	  var placement = data.placement;
	  var basePlacement = placement.split('-')[0];
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;

	  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

	  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

	  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

	  data.placement = getOppositePlacement(placement);
	  data.offsets.popper = getClientRect(popper);

	  return data;
	}

	/**
	 * Modifier function, each modifier can have a function of this type assigned
	 * to its `fn` property.<br />
	 * These functions will be called on each update, this means that you must
	 * make sure they are performant enough to avoid performance bottlenecks.
	 *
	 * @function ModifierFn
	 * @argument {dataObject} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {dataObject} The data object, properly modified
	 */

	/**
	 * Modifiers are plugins used to alter the behavior of your poppers.<br />
	 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
	 * needed by the library.
	 *
	 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
	 * All the other properties are configurations that could be tweaked.
	 * @namespace modifiers
	 */
	var modifiers = {
	  /**
	   * Modifier used to shift the popper on the start or end of its reference
	   * element.<br />
	   * It will read the variation of the `placement` property.<br />
	   * It can be one either `-end` or `-start`.
	   * @memberof modifiers
	   * @inner
	   */
	  shift: {
	    /** @prop {number} order=100 - Index used to define the order of execution */
	    order: 100,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: shift
	  },

	  /**
	   * The `offset` modifier can shift your popper on both its axis.
	   *
	   * It accepts the following units:
	   * - `px` or unit-less, interpreted as pixels
	   * - `%` or `%r`, percentage relative to the length of the reference element
	   * - `%p`, percentage relative to the length of the popper element
	   * - `vw`, CSS viewport width unit
	   * - `vh`, CSS viewport height unit
	   *
	   * For length is intended the main axis relative to the placement of the popper.<br />
	   * This means that if the placement is `top` or `bottom`, the length will be the
	   * `width`. In case of `left` or `right`, it will be the `height`.
	   *
	   * You can provide a single value (as `Number` or `String`), or a pair of values
	   * as `String` divided by a comma or one (or more) white spaces.<br />
	   * The latter is a deprecated method because it leads to confusion and will be
	   * removed in v2.<br />
	   * Additionally, it accepts additions and subtractions between different units.
	   * Note that multiplications and divisions aren't supported.
	   *
	   * Valid examples are:
	   * ```
	   * 10
	   * '10%'
	   * '10, 10'
	   * '10%, 10'
	   * '10 + 10%'
	   * '10 - 5vh + 3%'
	   * '-10px + 5vh, 5px - 6%'
	   * ```
	   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
	   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
	   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  offset: {
	    /** @prop {number} order=200 - Index used to define the order of execution */
	    order: 200,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: offset,
	    /** @prop {Number|String} offset=0
	     * The offset value as described in the modifier description
	     */
	    offset: 0
	  },

	  /**
	   * Modifier used to prevent the popper from being positioned outside the boundary.
	   *
	   * A scenario exists where the reference itself is not within the boundaries.<br />
	   * We can say it has "escaped the boundaries" — or just "escaped".<br />
	   * In this case we need to decide whether the popper should either:
	   *
	   * - detach from the reference and remain "trapped" in the boundaries, or
	   * - if it should ignore the boundary and "escape with its reference"
	   *
	   * When `escapeWithReference` is set to`true` and reference is completely
	   * outside its boundaries, the popper will overflow (or completely leave)
	   * the boundaries in order to remain attached to the edge of the reference.
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  preventOverflow: {
	    /** @prop {number} order=300 - Index used to define the order of execution */
	    order: 300,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: preventOverflow,
	    /**
	     * @prop {Array} [priority=['left','right','top','bottom']]
	     * Popper will try to prevent overflow following these priorities by default,
	     * then, it could overflow on the left and on top of the `boundariesElement`
	     */
	    priority: ['left', 'right', 'top', 'bottom'],
	    /**
	     * @prop {number} padding=5
	     * Amount of pixel used to define a minimum distance between the boundaries
	     * and the popper. This makes sure the popper always has a little padding
	     * between the edges of its container
	     */
	    padding: 5,
	    /**
	     * @prop {String|HTMLElement} boundariesElement='scrollParent'
	     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
	     * `viewport` or any DOM element.
	     */
	    boundariesElement: 'scrollParent'
	  },

	  /**
	   * Modifier used to make sure the reference and its popper stay near each other
	   * without leaving any gap between the two. Especially useful when the arrow is
	   * enabled and you want to ensure that it points to its reference element.
	   * It cares only about the first axis. You can still have poppers with margin
	   * between the popper and its reference element.
	   * @memberof modifiers
	   * @inner
	   */
	  keepTogether: {
	    /** @prop {number} order=400 - Index used to define the order of execution */
	    order: 400,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: keepTogether
	  },

	  /**
	   * This modifier is used to move the `arrowElement` of the popper to make
	   * sure it is positioned between the reference element and its popper element.
	   * It will read the outer size of the `arrowElement` node to detect how many
	   * pixels of conjunction are needed.
	   *
	   * It has no effect if no `arrowElement` is provided.
	   * @memberof modifiers
	   * @inner
	   */
	  arrow: {
	    /** @prop {number} order=500 - Index used to define the order of execution */
	    order: 500,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: arrow,
	    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
	    element: '[x-arrow]'
	  },

	  /**
	   * Modifier used to flip the popper's placement when it starts to overlap its
	   * reference element.
	   *
	   * Requires the `preventOverflow` modifier before it in order to work.
	   *
	   * **NOTE:** this modifier will interrupt the current update cycle and will
	   * restart it if it detects the need to flip the placement.
	   * @memberof modifiers
	   * @inner
	   */
	  flip: {
	    /** @prop {number} order=600 - Index used to define the order of execution */
	    order: 600,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: flip,
	    /**
	     * @prop {String|Array} behavior='flip'
	     * The behavior used to change the popper's placement. It can be one of
	     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
	     * placements (with optional variations)
	     */
	    behavior: 'flip',
	    /**
	     * @prop {number} padding=5
	     * The popper will flip if it hits the edges of the `boundariesElement`
	     */
	    padding: 5,
	    /**
	     * @prop {String|HTMLElement} boundariesElement='viewport'
	     * The element which will define the boundaries of the popper position.
	     * The popper will never be placed outside of the defined boundaries
	     * (except if `keepTogether` is enabled)
	     */
	    boundariesElement: 'viewport',
	    /**
	     * @prop {Boolean} flipVariations=false
	     * The popper will switch placement variation between `-start` and `-end` when
	     * the reference element overlaps its boundaries.
	     *
	     * The original placement should have a set variation.
	     */
	    flipVariations: false,
	    /**
	     * @prop {Boolean} flipVariationsByContent=false
	     * The popper will switch placement variation between `-start` and `-end` when
	     * the popper element overlaps its reference boundaries.
	     *
	     * The original placement should have a set variation.
	     */
	    flipVariationsByContent: false
	  },

	  /**
	   * Modifier used to make the popper flow toward the inner of the reference element.
	   * By default, when this modifier is disabled, the popper will be placed outside
	   * the reference element.
	   * @memberof modifiers
	   * @inner
	   */
	  inner: {
	    /** @prop {number} order=700 - Index used to define the order of execution */
	    order: 700,
	    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
	    enabled: false,
	    /** @prop {ModifierFn} */
	    fn: inner
	  },

	  /**
	   * Modifier used to hide the popper when its reference element is outside of the
	   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
	   * be used to hide with a CSS selector the popper when its reference is
	   * out of boundaries.
	   *
	   * Requires the `preventOverflow` modifier before it in order to work.
	   * @memberof modifiers
	   * @inner
	   */
	  hide: {
	    /** @prop {number} order=800 - Index used to define the order of execution */
	    order: 800,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: hide
	  },

	  /**
	   * Computes the style that will be applied to the popper element to gets
	   * properly positioned.
	   *
	   * Note that this modifier will not touch the DOM, it just prepares the styles
	   * so that `applyStyle` modifier can apply it. This separation is useful
	   * in case you need to replace `applyStyle` with a custom implementation.
	   *
	   * This modifier has `850` as `order` value to maintain backward compatibility
	   * with previous versions of Popper.js. Expect the modifiers ordering method
	   * to change in future major versions of the library.
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  computeStyle: {
	    /** @prop {number} order=850 - Index used to define the order of execution */
	    order: 850,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: computeStyle,
	    /**
	     * @prop {Boolean} gpuAcceleration=true
	     * If true, it uses the CSS 3D transformation to position the popper.
	     * Otherwise, it will use the `top` and `left` properties
	     */
	    gpuAcceleration: true,
	    /**
	     * @prop {string} [x='bottom']
	     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
	     * Change this if your popper should grow in a direction different from `bottom`
	     */
	    x: 'bottom',
	    /**
	     * @prop {string} [x='left']
	     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
	     * Change this if your popper should grow in a direction different from `right`
	     */
	    y: 'right'
	  },

	  /**
	   * Applies the computed styles to the popper element.
	   *
	   * All the DOM manipulations are limited to this modifier. This is useful in case
	   * you want to integrate Popper.js inside a framework or view library and you
	   * want to delegate all the DOM manipulations to it.
	   *
	   * Note that if you disable this modifier, you must make sure the popper element
	   * has its position set to `absolute` before Popper.js can do its work!
	   *
	   * Just disable this modifier and define your own to achieve the desired effect.
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  applyStyle: {
	    /** @prop {number} order=900 - Index used to define the order of execution */
	    order: 900,
	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,
	    /** @prop {ModifierFn} */
	    fn: applyStyle,
	    /** @prop {Function} */
	    onLoad: applyStyleOnLoad,
	    /**
	     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
	     * @prop {Boolean} gpuAcceleration=true
	     * If true, it uses the CSS 3D transformation to position the popper.
	     * Otherwise, it will use the `top` and `left` properties
	     */
	    gpuAcceleration: undefined
	  }
	};

	/**
	 * The `dataObject` is an object containing all the information used by Popper.js.
	 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
	 * @name dataObject
	 * @property {Object} data.instance The Popper.js instance
	 * @property {String} data.placement Placement applied to popper
	 * @property {String} data.originalPlacement Placement originally defined on init
	 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
	 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
	 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
	 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
	 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
	 * @property {Object} data.boundaries Offsets of the popper boundaries
	 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
	 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
	 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
	 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
	 */

	/**
	 * Default options provided to Popper.js constructor.<br />
	 * These can be overridden using the `options` argument of Popper.js.<br />
	 * To override an option, simply pass an object with the same
	 * structure of the `options` object, as the 3rd argument. For example:
	 * ```
	 * new Popper(ref, pop, {
	 *   modifiers: {
	 *     preventOverflow: { enabled: false }
	 *   }
	 * })
	 * ```
	 * @type {Object}
	 * @static
	 * @memberof Popper
	 */
	var Defaults = {
	  /**
	   * Popper's placement.
	   * @prop {Popper.placements} placement='bottom'
	   */
	  placement: 'bottom',

	  /**
	   * Set this to true if you want popper to position it self in 'fixed' mode
	   * @prop {Boolean} positionFixed=false
	   */
	  positionFixed: false,

	  /**
	   * Whether events (resize, scroll) are initially enabled.
	   * @prop {Boolean} eventsEnabled=true
	   */
	  eventsEnabled: true,

	  /**
	   * Set to true if you want to automatically remove the popper when
	   * you call the `destroy` method.
	   * @prop {Boolean} removeOnDestroy=false
	   */
	  removeOnDestroy: false,

	  /**
	   * Callback called when the popper is created.<br />
	   * By default, it is set to no-op.<br />
	   * Access Popper.js instance with `data.instance`.
	   * @prop {onCreate}
	   */
	  onCreate: function onCreate() {},

	  /**
	   * Callback called when the popper is updated. This callback is not called
	   * on the initialization/creation of the popper, but only on subsequent
	   * updates.<br />
	   * By default, it is set to no-op.<br />
	   * Access Popper.js instance with `data.instance`.
	   * @prop {onUpdate}
	   */
	  onUpdate: function onUpdate() {},

	  /**
	   * List of modifiers used to modify the offsets before they are applied to the popper.
	   * They provide most of the functionalities of Popper.js.
	   * @prop {modifiers}
	   */
	  modifiers: modifiers
	};

	/**
	 * @callback onCreate
	 * @param {dataObject} data
	 */

	/**
	 * @callback onUpdate
	 * @param {dataObject} data
	 */

	// Utils
	// Methods
	var Popper = function () {
	  /**
	   * Creates a new Popper.js instance.
	   * @class Popper
	   * @param {Element|referenceObject} reference - The reference element used to position the popper
	   * @param {Element} popper - The HTML / XML element used as the popper
	   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
	   * @return {Object} instance - The generated Popper.js instance
	   */
	  function Popper(reference, popper) {
	    var _this = this;

	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    classCallCheck(this, Popper);

	    this.scheduleUpdate = function () {
	      return requestAnimationFrame(_this.update);
	    };

	    // make update() debounced, so that it only runs at most once-per-tick
	    this.update = debounce(this.update.bind(this));

	    // with {} we create a new object with the options inside it
	    this.options = _extends({}, Popper.Defaults, options);

	    // init state
	    this.state = {
	      isDestroyed: false,
	      isCreated: false,
	      scrollParents: []
	    };

	    // get reference and popper elements (allow jQuery wrappers)
	    this.reference = reference && reference.jquery ? reference[0] : reference;
	    this.popper = popper && popper.jquery ? popper[0] : popper;

	    // Deep merge modifiers options
	    this.options.modifiers = {};
	    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
	      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
	    });

	    // Refactoring modifiers' list (Object => Array)
	    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
	      return _extends({
	        name: name
	      }, _this.options.modifiers[name]);
	    })
	    // sort the modifiers by order
	    .sort(function (a, b) {
	      return a.order - b.order;
	    });

	    // modifiers have the ability to execute arbitrary code when Popper.js get inited
	    // such code is executed in the same order of its modifier
	    // they could add new properties to their options configuration
	    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
	    this.modifiers.forEach(function (modifierOptions) {
	      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
	        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
	      }
	    });

	    // fire the first update to position the popper in the right place
	    this.update();

	    var eventsEnabled = this.options.eventsEnabled;
	    if (eventsEnabled) {
	      // setup event listeners, they will take care of update the position in specific situations
	      this.enableEventListeners();
	    }

	    this.state.eventsEnabled = eventsEnabled;
	  }

	  // We can't use class properties because they don't get listed in the
	  // class prototype and break stuff like Sinon stubs


	  createClass(Popper, [{
	    key: 'update',
	    value: function update$$1() {
	      return update.call(this);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy$$1() {
	      return destroy.call(this);
	    }
	  }, {
	    key: 'enableEventListeners',
	    value: function enableEventListeners$$1() {
	      return enableEventListeners.call(this);
	    }
	  }, {
	    key: 'disableEventListeners',
	    value: function disableEventListeners$$1() {
	      return disableEventListeners.call(this);
	    }

	    /**
	     * Schedules an update. It will run on the next UI update available.
	     * @method scheduleUpdate
	     * @memberof Popper
	     */


	    /**
	     * Collection of utilities useful when writing custom modifiers.
	     * Starting from version 1.7, this method is available only if you
	     * include `popper-utils.js` before `popper.js`.
	     *
	     * **DEPRECATION**: This way to access PopperUtils is deprecated
	     * and will be removed in v2! Use the PopperUtils module directly instead.
	     * Due to the high instability of the methods contained in Utils, we can't
	     * guarantee them to follow semver. Use them at your own risk!
	     * @static
	     * @private
	     * @type {Object}
	     * @deprecated since version 1.8
	     * @member Utils
	     * @memberof Popper
	     */

	  }]);
	  return Popper;
	}();

	/**
	 * The `referenceObject` is an object that provides an interface compatible with Popper.js
	 * and lets you use it as replacement of a real DOM node.<br />
	 * You can use this method to position a popper relatively to a set of coordinates
	 * in case you don't have a DOM node to use as reference.
	 *
	 * ```
	 * new Popper(referenceObject, popperNode);
	 * ```
	 *
	 * NB: This feature isn't supported in Internet Explorer 10.
	 * @name referenceObject
	 * @property {Function} data.getBoundingClientRect
	 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
	 * @property {number} data.clientWidth
	 * An ES6 getter that will return the width of the virtual reference element.
	 * @property {number} data.clientHeight
	 * An ES6 getter that will return the height of the virtual reference element.
	 */


	Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
	Popper.placements = placements;
	Popper.Defaults = Defaults;

	return Popper;

	})));
	//# sourceMappingURL=popper.js.map

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(6);
	__webpack_require__(144);
	__webpack_require__(199);
	__webpack_require__(274);
	__webpack_require__(344);
	__webpack_require__(428);
	__webpack_require__(719);
	__webpack_require__(772);
	__webpack_require__(794);

	module.exports = __webpack_require__(8);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// Instance Methods
	__webpack_require__(7);
	__webpack_require__(25);
	__webpack_require__(34);
	__webpack_require__(35);
	__webpack_require__(41);
	__webpack_require__(43);
	__webpack_require__(45);
	__webpack_require__(46);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(77);
	__webpack_require__(79);
	__webpack_require__(85);
	__webpack_require__(86);
	__webpack_require__(87);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(90);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(103);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(112);
	__webpack_require__(113);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(127);
	__webpack_require__(130);
	__webpack_require__(132);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(142);
	__webpack_require__(143);

	module.exports = __webpack_require__(8);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    getEntriesForIndexes = __webpack_require__(9);

	Sugar.String.defineInstance({

	  'at': function(str, index, loop) {
	    return getEntriesForIndexes(str, index, loop, true);
	  }

	});

	module.exports = Sugar.String.at;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
	 *  Sugar v2.0.6
	 *
	 *  Freely distributable and licensed under the MIT-style license.
	 *  Copyright (c) Andrew Plummer
	 *  https://sugarjs.com/
	 *
	 * ---------------------------- */
	(function() {
	  'use strict';

	  /***
	   * @module Core
	   * @description Core functionality including the ability to define methods and
	   *              extend onto natives.
	   *
	   ***/

	  // The global to export.
	  var Sugar;

	  // The name of Sugar in the global namespace.
	  var SUGAR_GLOBAL = 'Sugar';

	  // Natives available on initialization. Letting Object go first to ensure its
	  // global is set by the time the rest are checking for chainable Object methods.
	  var NATIVE_NAMES = 'Object Number String Array Date RegExp Function';

	  // Static method flag
	  var STATIC   = 0x1;

	  // Instance method flag
	  var INSTANCE = 0x2;

	  // IE8 has a broken defineProperty but no defineProperties so this saves a try/catch.
	  var PROPERTY_DESCRIPTOR_SUPPORT = !!(Object.defineProperty && Object.defineProperties);

	  var globalContext = getGlobal();

	  // Whether object instance methods can be mapped to the prototype.
	  var allowObjectPrototype = false;

	  // A map from Array to SugarArray.
	  var namespacesByName = {};

	  // A map from [object Object] to namespace.
	  var namespacesByClassString = {};

	  // Defining properties.
	  // istanbul ignore next
	  var defineProperty = PROPERTY_DESCRIPTOR_SUPPORT ?  Object.defineProperty : definePropertyShim;

	  // A default chainable class for unknown types.
	  var DefaultChainable = getNewChainableClass('Chainable');


	  // Global methods

	  function getGlobal() {
	    // Get global context by keyword here to avoid issues with libraries
	    // that can potentially alter this script's context object.
	    return testGlobal(typeof global !== 'undefined' && global) ||
	           testGlobal(typeof window !== 'undefined' && window);
	  }

	  function testGlobal(obj) {
	    // Note that Rhino uses a different "global" keyword so perform an
	    // extra check here to ensure that it's actually the global object.
	    return obj && obj.Object === Object ? obj : null;
	  }

	  function setupGlobal() {
	    Sugar = globalContext[SUGAR_GLOBAL];
	    // istanbul ignore if
	    if (Sugar) {
	      // Reuse already defined Sugar global object.
	      return;
	    }
	    Sugar = function(arg) {
	      forEachProperty(Sugar, function(sugarNamespace, name) {
	        // Although only the only enumerable properties on the global
	        // object are Sugar namespaces, environments that can't set
	        // non-enumerable properties will step through the utility methods
	        // as well here, so use this check to only allow true namespaces.
	        if (hasOwn(namespacesByName, name)) {
	          sugarNamespace.extend(arg);
	        }
	      });
	      return Sugar;
	    };
	    // istanbul ignore else
	    if (typeof module !== 'undefined' && module.exports) {
	      // Node or webpack environment
	      module.exports = Sugar;
	    } else {
	      // Unwrapped browser environment
	      try {
	        globalContext[SUGAR_GLOBAL] = Sugar;
	      } catch (e) {
	        // Contexts such as QML have a read-only global context.
	      }
	    }
	    forEachProperty(NATIVE_NAMES.split(' '), function(name) {
	      createNamespace(name);
	    });
	    setGlobalProperties();
	  }

	  /***
	   * @method createNamespace(name)
	   * @returns SugarNamespace
	   * @namespace Sugar
	   * @short Creates a new Sugar namespace.
	   * @extra This method is for plugin developers who want to define methods to be
	   *        used with natives that Sugar does not handle by default. The new
	   *        namespace will appear on the `Sugar` global with all the methods of
	   *        normal namespaces, including the ability to define new methods. When
	   *        extended, any defined methods will be mapped to `name` in the global
	   *        context.
	   *
	   * @example
	   *
	   *   Sugar.createNamespace('Boolean');
	   *
	   * @param {string} name - The namespace name.
	   *
	   ***/
	  function createNamespace(name) {

	    // Is the current namespace Object?
	    var isObject = name === 'Object';

	    // A Sugar namespace is also a chainable class: Sugar.Array, etc.
	    var sugarNamespace = getNewChainableClass(name, true);

	    /***
	     * @method extend([opts])
	     * @returns Sugar
	     * @namespace Sugar
	     * @short Extends Sugar defined methods onto natives.
	     * @extra This method can be called on individual namespaces like
	     *        `Sugar.Array` or on the `Sugar` global itself, in which case
	     *        [opts] will be forwarded to each `extend` call. For more,
	     *        see `extending`.
	     *
	     * @options
	     *
	     *   methods           An array of method names to explicitly extend.
	     *
	     *   except            An array of method names or global namespaces (`Array`,
	     *                     `String`) to explicitly exclude. Namespaces should be the
	     *                     actual global objects, not strings.
	     *
	     *   namespaces        An array of global namespaces (`Array`, `String`) to
	     *                     explicitly extend. Namespaces should be the actual
	     *                     global objects, not strings.
	     *
	     *   enhance           A shortcut to disallow all "enhance" flags at once
	     *                     (flags listed below). For more, see `enhanced methods`.
	     *                     Default is `true`.
	     *
	     *   enhanceString     A boolean allowing String enhancements. Default is `true`.
	     *
	     *   enhanceArray      A boolean allowing Array enhancements. Default is `true`.
	     *
	     *   objectPrototype   A boolean allowing Sugar to extend Object.prototype
	     *                     with instance methods. This option is off by default
	     *                     and should generally not be used except with caution.
	     *                     For more, see `object methods`.
	     *
	     * @example
	     *
	     *   Sugar.Array.extend();
	     *   Sugar.extend();
	     *
	     * @option {Array<string>} [methods]
	     * @option {Array<string|NativeConstructor>} [except]
	     * @option {Array<NativeConstructor>} [namespaces]
	     * @option {boolean} [enhance]
	     * @option {boolean} [enhanceString]
	     * @option {boolean} [enhanceArray]
	     * @option {boolean} [objectPrototype]
	     * @param {ExtendOptions} [opts]
	     *
	     ***
	     * @method extend([opts])
	     * @returns SugarNamespace
	     * @namespace SugarNamespace
	     * @short Extends Sugar defined methods for a specific namespace onto natives.
	     * @param {ExtendOptions} [opts]
	     *
	     ***/
	    var extend = function (opts) {

	      var nativeClass = globalContext[name], nativeProto = nativeClass.prototype;
	      var staticMethods = {}, instanceMethods = {}, methodsByName;

	      function objectRestricted(name, target) {
	        return isObject && target === nativeProto &&
	               (!allowObjectPrototype || name === 'get' || name === 'set');
	      }

	      function arrayOptionExists(field, val) {
	        var arr = opts[field];
	        if (arr) {
	          for (var i = 0, el; el = arr[i]; i++) {
	            if (el === val) {
	              return true;
	            }
	          }
	        }
	        return false;
	      }

	      function arrayOptionExcludes(field, val) {
	        return opts[field] && !arrayOptionExists(field, val);
	      }

	      function disallowedByFlags(methodName, target, flags) {
	        // Disallowing methods by flag currently only applies if methods already
	        // exist to avoid enhancing native methods, as aliases should still be
	        // extended (i.e. Array#all should still be extended even if Array#every
	        // is being disallowed by a flag).
	        if (!target[methodName] || !flags) {
	          return false;
	        }
	        for (var i = 0; i < flags.length; i++) {
	          if (opts[flags[i]] === false) {
	            return true;
	          }
	        }
	      }

	      function namespaceIsExcepted() {
	        return arrayOptionExists('except', nativeClass) ||
	               arrayOptionExcludes('namespaces', nativeClass);
	      }

	      function methodIsExcepted(methodName) {
	        return arrayOptionExists('except', methodName);
	      }

	      function canExtend(methodName, method, target) {
	        return !objectRestricted(methodName, target) &&
	               !disallowedByFlags(methodName, target, method.flags) &&
	               !methodIsExcepted(methodName);
	      }

	      opts = opts || {};
	      methodsByName = opts.methods;

	      if (namespaceIsExcepted()) {
	        return;
	      } else if (isObject && typeof opts.objectPrototype === 'boolean') {
	        // Store "objectPrototype" flag for future reference.
	        allowObjectPrototype = opts.objectPrototype;
	      }

	      forEachProperty(methodsByName || sugarNamespace, function(method, methodName) {
	        if (methodsByName) {
	          // If we have method names passed in an array,
	          // then we need to flip the key and value here
	          // and find the method in the Sugar namespace.
	          methodName = method;
	          method = sugarNamespace[methodName];
	        }
	        if (hasOwn(method, 'instance') && canExtend(methodName, method, nativeProto)) {
	          instanceMethods[methodName] = method.instance;
	        }
	        if(hasOwn(method, 'static') && canExtend(methodName, method, nativeClass)) {
	          staticMethods[methodName] = method;
	        }
	      });

	      // Accessing the extend target each time instead of holding a reference as
	      // it may have been overwritten (for example Date by Sinon). Also need to
	      // access through the global to allow extension of user-defined namespaces.
	      extendNative(nativeClass, staticMethods);
	      extendNative(nativeProto, instanceMethods);

	      if (!methodsByName) {
	        // If there are no method names passed, then
	        // all methods in the namespace will be extended
	        // to the native. This includes all future defined
	        // methods, so add a flag here to check later.
	        setProperty(sugarNamespace, 'active', true);
	      }
	      return sugarNamespace;
	    };

	    function defineWithOptionCollect(methodName, instance, args) {
	      setProperty(sugarNamespace, methodName, function(arg1, arg2, arg3) {
	        var opts = collectDefineOptions(arg1, arg2, arg3);
	        defineMethods(sugarNamespace, opts.methods, instance, args, opts.last);
	        return sugarNamespace;
	      });
	    }

	    /***
	     * @method defineStatic(methods)
	     * @returns SugarNamespace
	     * @namespace SugarNamespace
	     * @short Defines static methods on the namespace that can later be extended
	     *        onto the native globals.
	     * @extra Accepts either a single object mapping names to functions, or name
	     *        and function as two arguments. If `extend` was previously called
	     *        with no arguments, the method will be immediately mapped to its
	     *        native when defined.
	     *
	     * @example
	     *
	     *   Sugar.Number.defineStatic({
	     *     isOdd: function (num) {
	     *       return num % 2 === 1;
	     *     }
	     *   });
	     *
	     * @signature defineStatic(methodName, methodFn)
	     * @param {Object} methods - Methods to be defined.
	     * @param {string} methodName - Name of a single method to be defined.
	     * @param {Function} methodFn - Function body of a single method to be defined.
	     ***/
	    defineWithOptionCollect('defineStatic', STATIC);

	    /***
	     * @method defineInstance(methods)
	     * @returns SugarNamespace
	     * @namespace SugarNamespace
	     * @short Defines methods on the namespace that can later be extended as
	     *        instance methods onto the native prototype.
	     * @extra Accepts either a single object mapping names to functions, or name
	     *        and function as two arguments. All functions should accept the
	     *        native for which they are mapped as their first argument, and should
	     *        never refer to `this`. If `extend` was previously called with no
	     *        arguments, the method will be immediately mapped to its native when
	     *        defined.
	     *
	     *        Methods cannot accept more than 4 arguments in addition to the
	     *        native (5 arguments total). Any additional arguments will not be
	     *        mapped. If the method needs to accept unlimited arguments, use
	     *        `defineInstanceWithArguments`. Otherwise if more options are
	     *        required, use an options object instead.
	     *
	     * @example
	     *
	     *   Sugar.Number.defineInstance({
	     *     square: function (num) {
	     *       return num * num;
	     *     }
	     *   });
	     *
	     * @signature defineInstance(methodName, methodFn)
	     * @param {Object} methods - Methods to be defined.
	     * @param {string} methodName - Name of a single method to be defined.
	     * @param {Function} methodFn - Function body of a single method to be defined.
	     ***/
	    defineWithOptionCollect('defineInstance', INSTANCE);

	    /***
	     * @method defineInstanceAndStatic(methods)
	     * @returns SugarNamespace
	     * @namespace SugarNamespace
	     * @short A shortcut to define both static and instance methods on the namespace.
	     * @extra This method is intended for use with `Object` instance methods. Sugar
	     *        will not map any methods to `Object.prototype` by default, so defining
	     *        instance methods as static helps facilitate their proper use.
	     *
	     * @example
	     *
	     *   Sugar.Object.defineInstanceAndStatic({
	     *     isAwesome: function (obj) {
	     *       // check if obj is awesome!
	     *     }
	     *   });
	     *
	     * @signature defineInstanceAndStatic(methodName, methodFn)
	     * @param {Object} methods - Methods to be defined.
	     * @param {string} methodName - Name of a single method to be defined.
	     * @param {Function} methodFn - Function body of a single method to be defined.
	     ***/
	    defineWithOptionCollect('defineInstanceAndStatic', INSTANCE | STATIC);


	    /***
	     * @method defineStaticWithArguments(methods)
	     * @returns SugarNamespace
	     * @namespace SugarNamespace
	     * @short Defines static methods that collect arguments.
	     * @extra This method is identical to `defineStatic`, except that when defined
	     *        methods are called, they will collect any arguments past `n - 1`,
	     *        where `n` is the number of arguments that the method accepts.
	     *        Collected arguments will be passed to the method in an array
	     *        as the last argument defined on the function.
	     *
	     * @example
	     *
	     *   Sugar.Number.defineStaticWithArguments({
	     *     addAll: function (num, args) {
	     *       for (var i = 0; i < args.length; i++) {
	     *         num += args[i];
	     *       }
	     *       return num;
	     *     }
	     *   });
	     *
	     * @signature defineStaticWithArguments(methodName, methodFn)
	     * @param {Object} methods - Methods to be defined.
	     * @param {string} methodName - Name of a single method to be defined.
	     * @param {Function} methodFn - Function body of a single method to be defined.
	     ***/
	    defineWithOptionCollect('defineStaticWithArguments', STATIC, true);

	    /***
	     * @method defineInstanceWithArguments(methods)
	     * @returns SugarNamespace
	     * @namespace SugarNamespace
	     * @short Defines instance methods that collect arguments.
	     * @extra This method is identical to `defineInstance`, except that when
	     *        defined methods are called, they will collect any arguments past
	     *        `n - 1`, where `n` is the number of arguments that the method
	     *        accepts. Collected arguments will be passed to the method as the
	     *        last argument defined on the function.
	     *
	     * @example
	     *
	     *   Sugar.Number.defineInstanceWithArguments({
	     *     addAll: function (num, args) {
	     *       for (var i = 0; i < args.length; i++) {
	     *         num += args[i];
	     *       }
	     *       return num;
	     *     }
	     *   });
	     *
	     * @signature defineInstanceWithArguments(methodName, methodFn)
	     * @param {Object} methods - Methods to be defined.
	     * @param {string} methodName - Name of a single method to be defined.
	     * @param {Function} methodFn - Function body of a single method to be defined.
	     ***/
	    defineWithOptionCollect('defineInstanceWithArguments', INSTANCE, true);

	    /***
	     * @method defineStaticPolyfill(methods)
	     * @returns SugarNamespace
	     * @namespace SugarNamespace
	     * @short Defines static methods that are mapped onto the native if they do
	     *        not already exist.
	     * @extra Intended only for use creating polyfills that follow the ECMAScript
	     *        spec. Accepts either a single object mapping names to functions, or
	     *        name and function as two arguments. Note that polyfill methods will
	     *        be immediately mapped onto their native prototype regardless of the
	     *        use of `extend`.
	     *
	     * @example
	     *
	     *   Sugar.Object.defineStaticPolyfill({
	     *     keys: function (obj) {
	     *       // get keys!
	     *     }
	     *   });
	     *
	     * @signature defineStaticPolyfill(methodName, methodFn)
	     * @param {Object} methods - Methods to be defined.
	     * @param {string} methodName - Name of a single method to be defined.
	     * @param {Function} methodFn - Function body of a single method to be defined.
	     ***/
	    setProperty(sugarNamespace, 'defineStaticPolyfill', function(arg1, arg2, arg3) {
	      var opts = collectDefineOptions(arg1, arg2, arg3);
	      extendNative(globalContext[name], opts.methods, true, opts.last);
	      return sugarNamespace;
	    });

	    /***
	     * @method defineInstancePolyfill(methods)
	     * @returns SugarNamespace
	     * @namespace SugarNamespace
	     * @short Defines instance methods that are mapped onto the native prototype
	     *        if they do not already exist.
	     * @extra Intended only for use creating polyfills that follow the ECMAScript
	     *        spec. Accepts either a single object mapping names to functions, or
	     *        name and function as two arguments. This method differs from
	     *        `defineInstance` as there is no static signature (as the method
	     *        is mapped as-is to the native), so it should refer to its `this`
	     *        object. Note that polyfill methods will be immediately mapped onto
	     *        their native prototype regardless of the use of `extend`.
	     *
	     * @example
	     *
	     *   Sugar.Array.defineInstancePolyfill({
	     *     indexOf: function (arr, el) {
	     *       // index finding code here!
	     *     }
	     *   });
	     *
	     * @signature defineInstancePolyfill(methodName, methodFn)
	     * @param {Object} methods - Methods to be defined.
	     * @param {string} methodName - Name of a single method to be defined.
	     * @param {Function} methodFn - Function body of a single method to be defined.
	     ***/
	    setProperty(sugarNamespace, 'defineInstancePolyfill', function(arg1, arg2, arg3) {
	      var opts = collectDefineOptions(arg1, arg2, arg3);
	      extendNative(globalContext[name].prototype, opts.methods, true, opts.last);
	      // Map instance polyfills to chainable as well.
	      forEachProperty(opts.methods, function(fn, methodName) {
	        defineChainableMethod(sugarNamespace, methodName, fn);
	      });
	      return sugarNamespace;
	    });

	    /***
	     * @method alias(toName, from)
	     * @returns SugarNamespace
	     * @namespace SugarNamespace
	     * @short Aliases one Sugar method to another.
	     *
	     * @example
	     *
	     *   Sugar.Array.alias('all', 'every');
	     *
	     * @signature alias(toName, fn)
	     * @param {string} toName - Name for new method.
	     * @param {string|Function} from - Method to alias, or string shortcut.
	     ***/
	    setProperty(sugarNamespace, 'alias', function(name, source) {
	      var method = typeof source === 'string' ? sugarNamespace[source] : source;
	      setMethod(sugarNamespace, name, method);
	      return sugarNamespace;
	    });

	    // Each namespace can extend only itself through its .extend method.
	    setProperty(sugarNamespace, 'extend', extend);

	    // Cache the class to namespace relationship for later use.
	    namespacesByName[name] = sugarNamespace;
	    namespacesByClassString['[object ' + name + ']'] = sugarNamespace;

	    mapNativeToChainable(name);
	    mapObjectChainablesToNamespace(sugarNamespace);


	    // Export
	    return Sugar[name] = sugarNamespace;
	  }

	  function setGlobalProperties() {
	    setProperty(Sugar, 'VERSION', '2.0.6');
	    setProperty(Sugar, 'extend', Sugar);
	    setProperty(Sugar, 'toString', toString);
	    setProperty(Sugar, 'createNamespace', createNamespace);

	    setProperty(Sugar, 'util', {
	      'hasOwn': hasOwn,
	      'getOwn': getOwn,
	      'setProperty': setProperty,
	      'classToString': classToString,
	      'defineProperty': defineProperty,
	      'forEachProperty': forEachProperty,
	      'mapNativeToChainable': mapNativeToChainable
	    });
	  }

	  function toString() {
	    return SUGAR_GLOBAL;
	  }


	  // Defining Methods

	  function defineMethods(sugarNamespace, methods, type, args, flags) {
	    forEachProperty(methods, function(method, methodName) {
	      var instanceMethod, staticMethod = method;
	      if (args) {
	        staticMethod = wrapMethodWithArguments(method);
	      }
	      if (flags) {
	        staticMethod.flags = flags;
	      }

	      // A method may define its own custom implementation, so
	      // make sure that's not the case before creating one.
	      if (type & INSTANCE && !method.instance) {
	        instanceMethod = wrapInstanceMethod(method, args);
	        setProperty(staticMethod, 'instance', instanceMethod);
	      }

	      if (type & STATIC) {
	        setProperty(staticMethod, 'static', true);
	      }

	      setMethod(sugarNamespace, methodName, staticMethod);

	      if (sugarNamespace.active) {
	        // If the namespace has been activated (.extend has been called),
	        // then map this method as well.
	        sugarNamespace.extend(methodName);
	      }
	    });
	  }

	  function collectDefineOptions(arg1, arg2, arg3) {
	    var methods, last;
	    if (typeof arg1 === 'string') {
	      methods = {};
	      methods[arg1] = arg2;
	      last = arg3;
	    } else {
	      methods = arg1;
	      last = arg2;
	    }
	    return {
	      last: last,
	      methods: methods
	    };
	  }

	  function wrapInstanceMethod(fn, args) {
	    return args ? wrapMethodWithArguments(fn, true) : wrapInstanceMethodFixed(fn);
	  }

	  function wrapMethodWithArguments(fn, instance) {
	    // Functions accepting enumerated arguments will always have "args" as the
	    // last argument, so subtract one from the function length to get the point
	    // at which to start collecting arguments. If this is an instance method on
	    // a prototype, then "this" will be pushed into the arguments array so start
	    // collecting 1 argument earlier.
	    var startCollect = fn.length - 1 - (instance ? 1 : 0);
	    return function() {
	      var args = [], collectedArgs = [], len;
	      if (instance) {
	        args.push(this);
	      }
	      len = Math.max(arguments.length, startCollect);
	      // Optimized: no leaking arguments
	      for (var i = 0; i < len; i++) {
	        if (i < startCollect) {
	          args.push(arguments[i]);
	        } else {
	          collectedArgs.push(arguments[i]);
	        }
	      }
	      args.push(collectedArgs);
	      return fn.apply(this, args);
	    };
	  }

	  function wrapInstanceMethodFixed(fn) {
	    switch(fn.length) {
	      // Wrapped instance methods will always be passed the instance
	      // as the first argument, but requiring the argument to be defined
	      // may cause confusion here, so return the same wrapped function regardless.
	      case 0:
	      case 1:
	        return function() {
	          return fn(this);
	        };
	      case 2:
	        return function(a) {
	          return fn(this, a);
	        };
	      case 3:
	        return function(a, b) {
	          return fn(this, a, b);
	        };
	      case 4:
	        return function(a, b, c) {
	          return fn(this, a, b, c);
	        };
	      case 5:
	        return function(a, b, c, d) {
	          return fn(this, a, b, c, d);
	        };
	    }
	  }

	  // Method helpers

	  function extendNative(target, source, polyfill, override) {
	    forEachProperty(source, function(method, name) {
	      if (polyfill && !override && target[name]) {
	        // Method exists, so bail.
	        return;
	      }
	      setProperty(target, name, method);
	    });
	  }

	  function setMethod(sugarNamespace, methodName, method) {
	    sugarNamespace[methodName] = method;
	    if (method.instance) {
	      defineChainableMethod(sugarNamespace, methodName, method.instance, true);
	    }
	  }


	  // Chainables

	  function getNewChainableClass(name) {
	    var fn = function SugarChainable(obj, arg) {
	      if (!(this instanceof fn)) {
	        return new fn(obj, arg);
	      }
	      if (this.constructor !== fn) {
	        // Allow modules to define their own constructors.
	        obj = this.constructor.apply(obj, arguments);
	      }
	      this.raw = obj;
	    };
	    setProperty(fn, 'toString', function() {
	      return SUGAR_GLOBAL + name;
	    });
	    setProperty(fn.prototype, 'valueOf', function() {
	      return this.raw;
	    });
	    return fn;
	  }

	  function defineChainableMethod(sugarNamespace, methodName, fn) {
	    var wrapped = wrapWithChainableResult(fn), existing, collision, dcp;
	    dcp = DefaultChainable.prototype;
	    existing = dcp[methodName];

	    // If the method was previously defined on the default chainable, then a
	    // collision exists, so set the method to a disambiguation function that will
	    // lazily evaluate the object and find it's associated chainable. An extra
	    // check is required to avoid false positives from Object inherited methods.
	    collision = existing && existing !== Object.prototype[methodName];

	    // The disambiguation function is only required once.
	    if (!existing || !existing.disambiguate) {
	      dcp[methodName] = collision ? disambiguateMethod(methodName) : wrapped;
	    }

	    // The target chainable always receives the wrapped method. Additionally,
	    // if the target chainable is Sugar.Object, then map the wrapped method
	    // to all other namespaces as well if they do not define their own method
	    // of the same name. This way, a Sugar.Number will have methods like
	    // isEqual that can be called on any object without having to traverse up
	    // the prototype chain and perform disambiguation, which costs cycles.
	    // Note that the "if" block below actually does nothing on init as Object
	    // goes first and no other namespaces exist yet. However it needs to be
	    // here as Object instance methods defined later also need to be mapped
	    // back onto existing namespaces.
	    sugarNamespace.prototype[methodName] = wrapped;
	    if (sugarNamespace === Sugar.Object) {
	      mapObjectChainableToAllNamespaces(methodName, wrapped);
	    }
	  }

	  function mapObjectChainablesToNamespace(sugarNamespace) {
	    forEachProperty(Sugar.Object && Sugar.Object.prototype, function(val, methodName) {
	      if (typeof val === 'function') {
	        setObjectChainableOnNamespace(sugarNamespace, methodName, val);
	      }
	    });
	  }

	  function mapObjectChainableToAllNamespaces(methodName, fn) {
	    forEachProperty(namespacesByName, function(sugarNamespace) {
	      setObjectChainableOnNamespace(sugarNamespace, methodName, fn);
	    });
	  }

	  function setObjectChainableOnNamespace(sugarNamespace, methodName, fn) {
	    var proto = sugarNamespace.prototype;
	    if (!hasOwn(proto, methodName)) {
	      proto[methodName] = fn;
	    }
	  }

	  function wrapWithChainableResult(fn) {
	    return function() {
	      return new DefaultChainable(fn.apply(this.raw, arguments));
	    };
	  }

	  function disambiguateMethod(methodName) {
	    var fn = function() {
	      var raw = this.raw, sugarNamespace;
	      if (raw != null) {
	        // Find the Sugar namespace for this unknown.
	        sugarNamespace = namespacesByClassString[classToString(raw)];
	      }
	      if (!sugarNamespace) {
	        // If no sugarNamespace can be resolved, then default
	        // back to Sugar.Object so that undefined and other
	        // non-supported types can still have basic object
	        // methods called on them, such as type checks.
	        sugarNamespace = Sugar.Object;
	      }

	      return new sugarNamespace(raw)[methodName].apply(this, arguments);
	    };
	    fn.disambiguate = true;
	    return fn;
	  }

	  function mapNativeToChainable(name, methodNames) {
	    var sugarNamespace = namespacesByName[name],
	        nativeProto = globalContext[name].prototype;

	    if (!methodNames && ownPropertyNames) {
	      methodNames = ownPropertyNames(nativeProto);
	    }

	    forEachProperty(methodNames, function(methodName) {
	      if (nativeMethodProhibited(methodName)) {
	        // Sugar chainables have their own constructors as well as "valueOf"
	        // methods, so exclude them here. The __proto__ argument should be trapped
	        // by the function check below, however simply accessing this property on
	        // Object.prototype causes QML to segfault, so pre-emptively excluding it.
	        return;
	      }
	      try {
	        var fn = nativeProto[methodName];
	        if (typeof fn !== 'function') {
	          // Bail on anything not a function.
	          return;
	        }
	      } catch (e) {
	        // Function.prototype has properties that
	        // will throw errors when accessed.
	        return;
	      }
	      defineChainableMethod(sugarNamespace, methodName, fn);
	    });
	  }

	  function nativeMethodProhibited(methodName) {
	    return methodName === 'constructor' ||
	           methodName === 'valueOf' ||
	           methodName === '__proto__';
	  }


	  // Util

	  // Internal references
	  var ownPropertyNames = Object.getOwnPropertyNames,
	      internalToString = Object.prototype.toString,
	      internalHasOwnProperty = Object.prototype.hasOwnProperty;

	  // Defining this as a variable here as the ES5 module
	  // overwrites it to patch DONTENUM.
	  var forEachProperty = function (obj, fn) {
	    for(var key in obj) {
	      if (!hasOwn(obj, key)) continue;
	      if (fn.call(obj, obj[key], key, obj) === false) break;
	    }
	  };

	  // istanbul ignore next
	  function definePropertyShim(obj, prop, descriptor) {
	    obj[prop] = descriptor.value;
	  }

	  function setProperty(target, name, value, enumerable) {
	    defineProperty(target, name, {
	      value: value,
	      enumerable: !!enumerable,
	      configurable: true,
	      writable: true
	    });
	  }

	  // PERF: Attempts to speed this method up get very Heisenbergy. Quickly
	  // returning based on typeof works for primitives, but slows down object
	  // types. Even === checks on null and undefined (no typeof) will end up
	  // basically breaking even. This seems to be as fast as it can go.
	  function classToString(obj) {
	    return internalToString.call(obj);
	  }

	  function hasOwn(obj, prop) {
	    return !!obj && internalHasOwnProperty.call(obj, prop);
	  }

	  function getOwn(obj, prop) {
	    if (hasOwn(obj, prop)) {
	      return obj[prop];
	    }
	  }

	  setupGlobal();

	  /***
	   * @module Common
	   * @description Internal utility and common methods.
	   ***/

	  // Flag allowing native methods to be enhanced.
	  var ENHANCEMENTS_FLAG = 'enhance';

	  // For type checking, etc. Excludes object as this is more nuanced.
	  var NATIVE_TYPES = 'Boolean Number String Date RegExp Function Array Error Set Map';

	  // Do strings have no keys?
	  var NO_KEYS_IN_STRING_OBJECTS = !('0' in Object('a'));

	  // Prefix for private properties.
	  var PRIVATE_PROP_PREFIX = '_sugar_';

	  // Matches 1..2 style ranges in properties.
	  var PROPERTY_RANGE_REG = /^(.*?)\[([-\d]*)\.\.([-\d]*)\](.*)$/;

	  // WhiteSpace/LineTerminator as defined in ES5.1 plus Unicode characters in the Space, Separator category.
	  var TRIM_CHARS = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u2028\u2029\u3000\uFEFF';

	  // Regex for matching a formatted string.
	  var STRING_FORMAT_REG = /([{}])\1|{([^}]*)}|(%)%|(%(\w*))/g;

	  // Common chars
	  var HALF_WIDTH_ZERO = 0x30,
	      FULL_WIDTH_ZERO = 0xff10,
	      HALF_WIDTH_PERIOD   = '.',
	      FULL_WIDTH_PERIOD   = '．',
	      HALF_WIDTH_COMMA    = ',',
	      OPEN_BRACE  = '{',
	      CLOSE_BRACE = '}';

	  // Namespace aliases
	  var sugarObject   = Sugar.Object,
	      sugarArray    = Sugar.Array,
	      sugarDate     = Sugar.Date,
	      sugarString   = Sugar.String,
	      sugarNumber   = Sugar.Number,
	      sugarFunction = Sugar.Function,
	      sugarRegExp   = Sugar.RegExp;

	  // Class checks
	  var isSerializable,
	      isBoolean, isNumber, isString,
	      isDate, isRegExp, isFunction,
	      isArray, isSet, isMap, isError;

	  function buildClassChecks() {

	    var knownTypes = {};

	    function addCoreTypes() {

	      var names = spaceSplit(NATIVE_TYPES);

	      isBoolean = buildPrimitiveClassCheck(names[0]);
	      isNumber  = buildPrimitiveClassCheck(names[1]);
	      isString  = buildPrimitiveClassCheck(names[2]);

	      isDate   = buildClassCheck(names[3]);
	      isRegExp = buildClassCheck(names[4]);

	      // Wanted to enhance performance here by using simply "typeof"
	      // but Firefox has two major issues that make this impossible,
	      // one fixed, the other not, so perform a full class check here.
	      //
	      // 1. Regexes can be typeof "function" in FF < 3
	      //    https://bugzilla.mozilla.org/show_bug.cgi?id=61911 (fixed)
	      //
	      // 2. HTMLEmbedElement and HTMLObjectElement are be typeof "function"
	      //    https://bugzilla.mozilla.org/show_bug.cgi?id=268945 (won't fix)
	      isFunction = buildClassCheck(names[5]);

	      // istanbul ignore next
	      isArray = Array.isArray || buildClassCheck(names[6]);
	      isError = buildClassCheck(names[7]);

	      isSet = buildClassCheck(names[8], typeof Set !== 'undefined' && Set);
	      isMap = buildClassCheck(names[9], typeof Map !== 'undefined' && Map);

	      // Add core types as known so that they can be checked by value below,
	      // notably excluding Functions and adding Arguments and Error.
	      addKnownType('Arguments');
	      addKnownType(names[0]);
	      addKnownType(names[1]);
	      addKnownType(names[2]);
	      addKnownType(names[3]);
	      addKnownType(names[4]);
	      addKnownType(names[6]);

	    }

	    function addArrayTypes() {
	      var types = 'Int8 Uint8 Uint8Clamped Int16 Uint16 Int32 Uint32 Float32 Float64';
	      forEach(spaceSplit(types), function(str) {
	        addKnownType(str + 'Array');
	      });
	    }

	    function addKnownType(className) {
	      var str = '[object '+ className +']';
	      knownTypes[str] = true;
	    }

	    function isKnownType(className) {
	      return knownTypes[className];
	    }

	    function buildClassCheck(className, globalObject) {
	      // istanbul ignore if
	      if (globalObject && isClass(new globalObject, 'Object')) {
	        return getConstructorClassCheck(globalObject);
	      } else {
	        return getToStringClassCheck(className);
	      }
	    }

	    // Map and Set may be [object Object] in certain IE environments.
	    // In this case we need to perform a check using the constructor
	    // instead of Object.prototype.toString.
	    // istanbul ignore next
	    function getConstructorClassCheck(obj) {
	      var ctorStr = String(obj);
	      return function(obj) {
	        return String(obj.constructor) === ctorStr;
	      };
	    }

	    function getToStringClassCheck(className) {
	      return function(obj, str) {
	        // perf: Returning up front on instanceof appears to be slower.
	        return isClass(obj, className, str);
	      };
	    }

	    function buildPrimitiveClassCheck(className) {
	      var type = className.toLowerCase();
	      return function(obj) {
	        var t = typeof obj;
	        return t === type || t === 'object' && isClass(obj, className);
	      };
	    }

	    addCoreTypes();
	    addArrayTypes();

	    isSerializable = function(obj, className) {
	      // Only known objects can be serialized. This notably excludes functions,
	      // host objects, Symbols (which are matched by reference), and instances
	      // of classes. The latter can arguably be matched by value, but
	      // distinguishing between these and host objects -- which should never be
	      // compared by value -- is very tricky so not dealing with it here.
	      return isKnownType(className) || isPlainObject(obj, className);
	    };

	  }

	  function isClass(obj, className, str) {
	    if (!str) {
	      str = classToString(obj);
	    }
	    return str === '[object '+ className +']';
	  }

	  // Wrapping the core's "define" methods to
	  // save a few bytes in the minified script.
	  function wrapNamespace(method) {
	    return function(sugarNamespace, arg1, arg2) {
	      sugarNamespace[method](arg1, arg2);
	    };
	  }

	  // Method define aliases
	  var alias                       = wrapNamespace('alias'),
	      defineStatic                = wrapNamespace('defineStatic'),
	      defineInstance              = wrapNamespace('defineInstance'),
	      defineStaticPolyfill        = wrapNamespace('defineStaticPolyfill'),
	      defineInstancePolyfill      = wrapNamespace('defineInstancePolyfill'),
	      defineInstanceAndStatic     = wrapNamespace('defineInstanceAndStatic'),
	      defineInstanceWithArguments = wrapNamespace('defineInstanceWithArguments');

	  function defineInstanceSimilar(sugarNamespace, set, fn, flags) {
	    defineInstance(sugarNamespace, collectSimilarMethods(set, fn), flags);
	  }

	  function defineInstanceAndStaticSimilar(sugarNamespace, set, fn, flags) {
	    defineInstanceAndStatic(sugarNamespace, collectSimilarMethods(set, fn), flags);
	  }

	  function collectSimilarMethods(set, fn) {
	    var methods = {};
	    if (isString(set)) {
	      set = spaceSplit(set);
	    }
	    forEach(set, function(el, i) {
	      fn(methods, el, i);
	    });
	    return methods;
	  }

	  // This song and dance is to fix methods to a different length
	  // from what they actually accept in order to stay in line with
	  // spec. Additionally passing argument length, as some methods
	  // throw assertion errors based on this (undefined check is not
	  // enough). Fortunately for now spec is such that passing 3
	  // actual arguments covers all requirements. Note that passing
	  // the argument length also forces the compiler to not rewrite
	  // length of the compiled function.
	  function fixArgumentLength(fn) {
	    var staticFn = function(a) {
	      var args = arguments;
	      return fn(a, args[1], args[2], args.length - 1);
	    };
	    staticFn.instance = function(b) {
	      var args = arguments;
	      return fn(this, b, args[1], args.length);
	    };
	    return staticFn;
	  }

	  function defineAccessor(namespace, name, fn) {
	    setProperty(namespace, name, fn);
	  }

	  function defineOptionsAccessor(namespace, defaults) {
	    var obj = simpleClone(defaults);

	    function getOption(name) {
	      return obj[name];
	    }

	    function setOption(arg1, arg2) {
	      var options;
	      if (arguments.length === 1) {
	        options = arg1;
	      } else {
	        options = {};
	        options[arg1] = arg2;
	      }
	      forEachProperty(options, function(val, name) {
	        if (val === null) {
	          val = defaults[name];
	        }
	        obj[name] = val;
	      });
	    }

	    defineAccessor(namespace, 'getOption', getOption);
	    defineAccessor(namespace, 'setOption', setOption);
	    return getOption;
	  }

	  // For methods defined directly on the prototype like Range
	  function defineOnPrototype(ctor, methods) {
	    var proto = ctor.prototype;
	    forEachProperty(methods, function(val, key) {
	      proto[key] = val;
	    });
	  }

	  // Argument helpers

	  function assertArgument(exists) {
	    if (!exists) {
	      throw new TypeError('Argument required');
	    }
	  }

	  function assertCallable(obj) {
	    if (!isFunction(obj)) {
	      throw new TypeError('Function is not callable');
	    }
	  }

	  function assertArray(obj) {
	    if (!isArray(obj)) {
	      throw new TypeError('Array required');
	    }
	  }

	  function assertWritable(obj) {
	    if (isPrimitive(obj)) {
	      // If strict mode is active then primitives will throw an
	      // error when attempting to write properties. We can't be
	      // sure if strict mode is available, so pre-emptively
	      // throw an error here to ensure consistent behavior.
	      throw new TypeError('Property cannot be written');
	    }
	  }

	  // Coerces an object to a positive integer.
	  // Does not allow Infinity.
	  function coercePositiveInteger(n) {
	    n = +n || 0;
	    if (n < 0 || !isNumber(n) || !isFinite(n)) {
	      throw new RangeError('Invalid number');
	    }
	    return trunc(n);
	  }


	  // General helpers

	  function isDefined(o) {
	    return o !== undefined;
	  }

	  function isUndefined(o) {
	    return o === undefined;
	  }

	  function privatePropertyAccessor(key) {
	    var privateKey = PRIVATE_PROP_PREFIX + key;
	    return function(obj, val) {
	      if (arguments.length > 1) {
	        setProperty(obj, privateKey, val);
	        return obj;
	      }
	      return obj[privateKey];
	    };
	  }

	  function setChainableConstructor(sugarNamespace, createFn) {
	    sugarNamespace.prototype.constructor = function() {
	      return createFn.apply(this, arguments);
	    };
	  }

	  // Fuzzy matching helpers

	  function getMatcher(f) {
	    if (!isPrimitive(f)) {
	      var className = classToString(f);
	      if (isRegExp(f, className)) {
	        return regexMatcher(f);
	      } else if (isDate(f, className)) {
	        return dateMatcher(f);
	      } else if (isFunction(f, className)) {
	        return functionMatcher(f);
	      } else if (isPlainObject(f, className)) {
	        return fuzzyMatcher(f);
	      }
	    }
	    // Default is standard isEqual
	    return defaultMatcher(f);
	  }

	  function fuzzyMatcher(obj) {
	    var matchers = {};
	    return function(el, i, arr) {
	      var matched = true;
	      if (!isObjectType(el)) {
	        return false;
	      }
	      forEachProperty(obj, function(val, key) {
	        matchers[key] = getOwn(matchers, key) || getMatcher(val);
	        if (matchers[key].call(arr, el[key], i, arr) === false) {
	          matched = false;
	        }
	        return matched;
	      });
	      return matched;
	    };
	  }

	  function defaultMatcher(f) {
	    return function(el) {
	      return isEqual(el, f);
	    };
	  }

	  function regexMatcher(reg) {
	    reg = RegExp(reg);
	    return function(el) {
	      return reg.test(el);
	    };
	  }

	  function dateMatcher(d) {
	    var ms = d.getTime();
	    return function(el) {
	      return !!(el && el.getTime) && el.getTime() === ms;
	    };
	  }

	  function functionMatcher(fn) {
	    return function(el, i, arr) {
	      // Return true up front if match by reference
	      return el === fn || fn.call(arr, el, i, arr);
	    };
	  }

	  // Object helpers

	  function getKeys(obj) {
	    return Object.keys(obj);
	  }

	  function deepHasProperty(obj, key, any) {
	    return handleDeepProperty(obj, key, any, true);
	  }

	  function deepGetProperty(obj, key, any) {
	    return handleDeepProperty(obj, key, any, false);
	  }

	  function deepSetProperty(obj, key, val) {
	    handleDeepProperty(obj, key, false, false, true, false, val);
	    return obj;
	  }

	  function handleDeepProperty(obj, key, any, has, fill, fillLast, val) {
	    var ns, bs, ps, cbi, set, isLast, isPush, isIndex, nextIsIndex, exists;
	    ns = obj;
	    if (key == null) return;

	    if (isObjectType(key)) {
	      // Allow array and array-like accessors
	      bs = [key];
	    } else {
	      key = String(key);
	      if (key.indexOf('..') !== -1) {
	        return handleArrayIndexRange(obj, key, any, val);
	      }
	      bs = key.split('[');
	    }

	    set = isDefined(val);

	    for (var i = 0, blen = bs.length; i < blen; i++) {
	      ps = bs[i];

	      if (isString(ps)) {
	        ps = periodSplit(ps);
	      }

	      for (var j = 0, plen = ps.length; j < plen; j++) {
	        key = ps[j];

	        // Is this the last key?
	        isLast = i === blen - 1 && j === plen - 1;

	        // Index of the closing ]
	        cbi = key.indexOf(']');

	        // Is the key an array index?
	        isIndex = cbi !== -1;

	        // Is this array push syntax "[]"?
	        isPush = set && cbi === 0;

	        // If the bracket split was successful and this is the last element
	        // in the dot split, then we know the next key will be an array index.
	        nextIsIndex = blen > 1 && j === plen - 1;

	        if (isPush) {
	          // Set the index to the end of the array
	          key = ns.length;
	        } else if (isIndex) {
	          // Remove the closing ]
	          key = key.slice(0, -1);
	        }

	        // If the array index is less than 0, then
	        // add its length to allow negative indexes.
	        if (isIndex && key < 0) {
	          key = +key + ns.length;
	        }

	        // Bracket keys may look like users[5] or just [5], so the leading
	        // characters are optional. We can enter the namespace if this is the
	        // 2nd part, if there is only 1 part, or if there is an explicit key.
	        if (i || key || blen === 1) {

	          // TODO: need to be sure this check handles ''.length when
	          // we refactor.
	          exists = any ? key in Object(ns) : hasOwn(ns, key);

	          // Non-existent namespaces are only filled if they are intermediate
	          // (not at the end) or explicitly filling the last.
	          if (fill && (!isLast || fillLast) && !exists) {
	            // For our purposes, last only needs to be an array.
	            ns = ns[key] = nextIsIndex || (fillLast && isLast) ? [] : {};
	            continue;
	          }

	          if (has) {
	            if (isLast || !exists) {
	              return exists;
	            }
	          } else if (set && isLast) {
	            assertWritable(ns);
	            ns[key] = val;
	          }

	          ns = exists ? ns[key] : undefined;
	        }

	      }
	    }
	    return ns;
	  }

	  // Get object property with support for 0..1 style range notation.
	  function handleArrayIndexRange(obj, key, any, val) {
	    var match, start, end, leading, trailing, arr, set;
	    match = key.match(PROPERTY_RANGE_REG);
	    if (!match) {
	      return;
	    }

	    set = isDefined(val);
	    leading = match[1];

	    if (leading) {
	      arr = handleDeepProperty(obj, leading, any, false, set ? true : false, true);
	    } else {
	      arr = obj;
	    }

	    assertArray(arr);

	    trailing = match[4];
	    start    = match[2] ? +match[2] : 0;
	    end      = match[3] ? +match[3] : arr.length;

	    // A range of 0..1 is inclusive, so we need to add 1 to the end. If this
	    // pushes the index from -1 to 0, then set it to the full length of the
	    // array, otherwise it will return nothing.
	    end = end === -1 ? arr.length : end + 1;

	    if (set) {
	      for (var i = start; i < end; i++) {
	        handleDeepProperty(arr, i + trailing, any, false, true, false, val);
	      }
	    } else {
	      arr = arr.slice(start, end);

	      // If there are trailing properties, then they need to be mapped for each
	      // element in the array.
	      if (trailing) {
	        if (trailing.charAt(0) === HALF_WIDTH_PERIOD) {
	          // Need to chomp the period if one is trailing after the range. We
	          // can't do this at the regex level because it will be required if
	          // we're setting the value as it needs to be concatentated together
	          // with the array index to be set.
	          trailing = trailing.slice(1);
	        }
	        return map(arr, function(el) {
	          return handleDeepProperty(el, trailing);
	        });
	      }
	    }
	    return arr;
	  }

	  function getOwnKey(obj, key) {
	    if (hasOwn(obj, key)) {
	      return key;
	    }
	  }

	  function hasProperty(obj, prop) {
	    return !isPrimitive(obj) && prop in obj;
	  }

	  function isObjectType(obj, type) {
	    return !!obj && (type || typeof obj) === 'object';
	  }

	  function isPrimitive(obj, type) {
	    type = type || typeof obj;
	    return obj == null || type === 'string' || type === 'number' || type === 'boolean';
	  }

	  function isPlainObject(obj, className) {
	    return isObjectType(obj) &&
	           isClass(obj, 'Object', className) &&
	           hasValidPlainObjectPrototype(obj) &&
	           hasOwnEnumeratedProperties(obj);
	  }

	  function hasValidPlainObjectPrototype(obj) {
	    var hasToString = 'toString' in obj;
	    var hasConstructor = 'constructor' in obj;
	    // An object created with Object.create(null) has no methods in the
	    // prototype chain, so check if any are missing. The additional hasToString
	    // check is for false positives on some host objects in old IE which have
	    // toString but no constructor. If the object has an inherited constructor,
	    // then check if it is Object (the "isPrototypeOf" tapdance here is a more
	    // robust way of ensuring this if the global has been hijacked). Note that
	    // accessing the constructor directly (without "in" or "hasOwnProperty")
	    // will throw a permissions error in IE8 on cross-domain windows.
	    return (!hasConstructor && !hasToString) ||
	            (hasConstructor && !hasOwn(obj, 'constructor') &&
	             hasOwn(obj.constructor.prototype, 'isPrototypeOf'));
	  }

	  function hasOwnEnumeratedProperties(obj) {
	    // Plain objects are generally defined as having enumerated properties
	    // all their own, however in early IE environments without defineProperty,
	    // there may also be enumerated methods in the prototype chain, so check
	    // for both of these cases.
	    var objectProto = Object.prototype;
	    for (var key in obj) {
	      var val = obj[key];
	      if (!hasOwn(obj, key) && val !== objectProto[key]) {
	        return false;
	      }
	    }
	    return true;
	  }

	  function simpleRepeat(n, fn) {
	    for (var i = 0; i < n; i++) {
	      fn(i);
	    }
	  }

	  function simpleClone(obj) {
	    return simpleMerge({}, obj);
	  }

	  // TODO: Use Object.assign here going forward.
	  function simpleMerge(target, source) {
	    forEachProperty(source, function(val, key) {
	      target[key] = val;
	    });
	    return target;
	  }

	  // Make primtives types like strings into objects.
	  function coercePrimitiveToObject(obj) {
	    if (isPrimitive(obj)) {
	      obj = Object(obj);
	    }
	    // istanbul ignore next
	    if (NO_KEYS_IN_STRING_OBJECTS && isString(obj)) {
	      forceStringCoercion(obj);
	    }
	    return obj;
	  }

	  // Force strings to have their indexes set in
	  // environments that don't do this automatically.
	  // istanbul ignore next
	  function forceStringCoercion(obj) {
	    var i = 0, chr;
	    while (chr = obj.charAt(i)) {
	      obj[i++] = chr;
	    }
	  }

	  // Equality helpers

	  // Perf
	  function isEqual(a, b, stack) {
	    var aClass, bClass;
	    if (a === b) {
	      // Return quickly up front when matched by reference,
	      // but be careful about 0 !== -0.
	      return a !== 0 || 1 / a === 1 / b;
	    }
	    aClass = classToString(a);
	    bClass = classToString(b);
	    if (aClass !== bClass) {
	      return false;
	    }

	    if (isSerializable(a, aClass) && isSerializable(b, bClass)) {
	      return objectIsEqual(a, b, aClass, stack);
	    } else if (isSet(a, aClass) && isSet(b, bClass)) {
	      return a.size === b.size && isEqual(setToArray(a), setToArray(b), stack);
	    } else if (isMap(a, aClass) && isMap(b, bClass)) {
	      return a.size === b.size && isEqual(mapToArray(a), mapToArray(b), stack);
	    } else if (isError(a, aClass) && isError(b, bClass)) {
	      return a.toString() === b.toString();
	    }

	    return false;
	  }

	  // Perf
	  function objectIsEqual(a, b, aClass, stack) {
	    var aType = typeof a, bType = typeof b, propsEqual, count;
	    if (aType !== bType) {
	      return false;
	    }
	    if (isObjectType(a.valueOf())) {
	      if (a.length !== b.length) {
	        // perf: Quickly returning up front for arrays.
	        return false;
	      }
	      count = 0;
	      propsEqual = true;
	      iterateWithCyclicCheck(a, false, stack, function(key, val, cyc, stack) {
	        if (!cyc && (!(key in b) || !isEqual(val, b[key], stack))) {
	          propsEqual = false;
	        }
	        count++;
	        return propsEqual;
	      });
	      if (!propsEqual || count !== getKeys(b).length) {
	        return false;
	      }
	    }
	    // Stringifying the value handles NaN, wrapped primitives, dates, and errors in one go.
	    return a.valueOf().toString() === b.valueOf().toString();
	  }

	  // Serializes an object in a way that will provide a token unique
	  // to the type, class, and value of an object. Host objects, class
	  // instances etc, are not serializable, and are held in an array
	  // of references that will return the index as a unique identifier
	  // for the object. This array is passed from outside so that the
	  // calling function can decide when to dispose of this array.
	  function serializeInternal(obj, refs, stack) {
	    var type = typeof obj, sign = '', className, value, ref;

	    // Return up front on
	    if (1 / obj === -Infinity) {
	      sign = '-';
	    }

	    // Return quickly for primitives to save cycles
	    if (isPrimitive(obj, type) && !isRealNaN(obj)) {
	      return type + sign + obj;
	    }

	    className = classToString(obj);

	    if (!isSerializable(obj, className)) {
	      ref = indexOf(refs, obj);
	      if (ref === -1) {
	        ref = refs.length;
	        refs.push(obj);
	      }
	      return ref;
	    } else if (isObjectType(obj)) {
	      value = serializeDeep(obj, refs, stack) + obj.toString();
	    } else if (obj.valueOf) {
	      value = obj.valueOf();
	    }
	    return type + className + sign + value;
	  }

	  function serializeDeep(obj, refs, stack) {
	    var result = '';
	    iterateWithCyclicCheck(obj, true, stack, function(key, val, cyc, stack) {
	      result += cyc ? 'CYC' : key + serializeInternal(val, refs, stack);
	    });
	    return result;
	  }

	  function iterateWithCyclicCheck(obj, sortedKeys, stack, fn) {

	    function next(val, key) {
	      var cyc = false;

	      // Allowing a step into the structure before triggering this check to save
	      // cycles on standard JSON structures and also to try as hard as possible to
	      // catch basic properties that may have been modified.
	      if (stack.length > 1) {
	        var i = stack.length;
	        while (i--) {
	          if (stack[i] === val) {
	            cyc = true;
	          }
	        }
	      }

	      stack.push(val);
	      fn(key, val, cyc, stack);
	      stack.pop();
	    }

	    function iterateWithSortedKeys() {
	      // Sorted keys is required for serialization, where object order
	      // does not matter but stringified order does.
	      var arr = getKeys(obj).sort(), key;
	      for (var i = 0; i < arr.length; i++) {
	        key = arr[i];
	        next(obj[key], arr[i]);
	      }
	    }

	    // This method for checking for cyclic structures was egregiously stolen from
	    // the ingenious method by @kitcambridge from the Underscore script:
	    // https://github.com/documentcloud/underscore/issues/240
	    if (!stack) {
	      stack = [];
	    }

	    if (sortedKeys) {
	      iterateWithSortedKeys();
	    } else {
	      forEachProperty(obj, next);
	    }
	  }


	  // Array helpers

	  function isArrayIndex(n) {
	    return n >>> 0 == n && n != 0xFFFFFFFF;
	  }

	  function iterateOverSparseArray(arr, fn, fromIndex, loop) {
	    var indexes = getSparseArrayIndexes(arr, fromIndex, loop), index;
	    for (var i = 0, len = indexes.length; i < len; i++) {
	      index = indexes[i];
	      fn.call(arr, arr[index], index, arr);
	    }
	    return arr;
	  }

	  // It's unclear whether or not sparse arrays qualify as "simple enumerables".
	  // If they are not, however, the wrapping function will be deoptimized, so
	  // isolate here (also to share between es5 and array modules).
	  function getSparseArrayIndexes(arr, fromIndex, loop, fromRight) {
	    var indexes = [], i;
	    for (i in arr) {
	      // istanbul ignore next
	      if (isArrayIndex(i) && (loop || (fromRight ? i <= fromIndex : i >= fromIndex))) {
	        indexes.push(+i);
	      }
	    }
	    indexes.sort(function(a, b) {
	      var aLoop = a > fromIndex;
	      var bLoop = b > fromIndex;
	      // This block cannot be reached unless ES5 methods are being shimmed.
	      // istanbul ignore if
	      if (aLoop !== bLoop) {
	        return aLoop ? -1 : 1;
	      }
	      return a - b;
	    });
	    return indexes;
	  }

	  function getEntriesForIndexes(obj, find, loop, isString) {
	    var result, length = obj.length;
	    if (!isArray(find)) {
	      return entryAtIndex(obj, find, length, loop, isString);
	    }
	    result = new Array(find.length);
	    forEach(find, function(index, i) {
	      result[i] = entryAtIndex(obj, index, length, loop, isString);
	    });
	    return result;
	  }

	  function getNormalizedIndex(index, length, loop) {
	    if (index && loop) {
	      index = index % length;
	    }
	    if (index < 0) index = length + index;
	    return index;
	  }

	  function entryAtIndex(obj, index, length, loop, isString) {
	    index = getNormalizedIndex(index, length, loop);
	    return isString ? obj.charAt(index) : obj[index];
	  }

	  function mapWithShortcuts(el, f, context, mapArgs) {
	    if (!f) {
	      return el;
	    } else if (f.apply) {
	      return f.apply(context, mapArgs);
	    } else if (isArray(f)) {
	      return map(f, function(m) {
	        return mapWithShortcuts(el, m, context, mapArgs);
	      });
	    } else if (isFunction(el[f])) {
	      return el[f].call(el);
	    } else {
	      return deepGetProperty(el, f, true);
	    }
	  }

	  function spaceSplit(str) {
	    return str.split(' ');
	  }

	  function commaSplit(str) {
	    return str.split(HALF_WIDTH_COMMA);
	  }

	  function periodSplit(str) {
	    return str.split(HALF_WIDTH_PERIOD);
	  }

	  function forEach(arr, fn) {
	    for (var i = 0, len = arr.length; i < len; i++) {
	      if (!(i in arr)) {
	        return iterateOverSparseArray(arr, fn, i);
	      }
	      fn(arr[i], i);
	    }
	  }

	  function filter(arr, fn) {
	    var result = [];
	    for (var i = 0, len = arr.length; i < len; i++) {
	      var el = arr[i];
	      if (i in arr && fn(el, i)) {
	        result.push(el);
	      }
	    }
	    return result;
	  }

	  function map(arr, fn) {
	    // perf: Not using fixed array len here as it may be sparse.
	    var result = [];
	    for (var i = 0, len = arr.length; i < len; i++) {
	      if (i in arr) {
	        result.push(fn(arr[i], i));
	      }
	    }
	    return result;
	  }

	  function indexOf(arr, el) {
	    for (var i = 0, len = arr.length; i < len; i++) {
	      if (i in arr && arr[i] === el) return i;
	    }
	    return -1;
	  }

	  // Number helpers

	  // istanbul ignore next
	  var trunc = Math.trunc || function(n) {
	    if (n === 0 || !isFinite(n)) return n;
	    return n < 0 ? ceil(n) : floor(n);
	  };

	  function isRealNaN(obj) {
	    // This is only true of NaN
	    return obj != null && obj !== obj;
	  }

	  function withPrecision(val, precision, fn) {
	    var multiplier = pow(10, abs(precision || 0));
	    fn = fn || round;
	    if (precision < 0) multiplier = 1 / multiplier;
	    return fn(val * multiplier) / multiplier;
	  }

	  function padNumber(num, place, sign, base, replacement) {
	    var str = abs(num).toString(base || 10);
	    str = repeatString(replacement || '0', place - str.replace(/\.\d+/, '').length) + str;
	    if (sign || num < 0) {
	      str = (num < 0 ? '-' : '+') + str;
	    }
	    return str;
	  }

	  function getOrdinalSuffix(num) {
	    if (num >= 11 && num <= 13) {
	      return 'th';
	    } else {
	      switch(num % 10) {
	        case 1:  return 'st';
	        case 2:  return 'nd';
	        case 3:  return 'rd';
	        default: return 'th';
	      }
	    }
	  }

	  // Fullwidth number helpers
	  var fullWidthNumberReg, fullWidthNumberMap, fullWidthNumbers;

	  function buildFullWidthNumber() {
	    var fwp = FULL_WIDTH_PERIOD, hwp = HALF_WIDTH_PERIOD, hwc = HALF_WIDTH_COMMA, fwn = '';
	    fullWidthNumberMap = {};
	    for (var i = 0, digit; i <= 9; i++) {
	      digit = chr(i + FULL_WIDTH_ZERO);
	      fwn += digit;
	      fullWidthNumberMap[digit] = chr(i + HALF_WIDTH_ZERO);
	    }
	    fullWidthNumberMap[hwc] = '';
	    fullWidthNumberMap[fwp] = hwp;
	    // Mapping this to itself to capture it easily
	    // in stringToNumber to detect decimals later.
	    fullWidthNumberMap[hwp] = hwp;
	    fullWidthNumberReg = allCharsReg(fwn + fwp + hwc + hwp);
	    fullWidthNumbers = fwn;
	  }

	  // Takes into account full-width characters, commas, and decimals.
	  function stringToNumber(str, base) {
	    var sanitized, isDecimal;
	    sanitized = str.replace(fullWidthNumberReg, function(chr) {
	      var replacement = getOwn(fullWidthNumberMap, chr);
	      if (replacement === HALF_WIDTH_PERIOD) {
	        isDecimal = true;
	      }
	      return replacement;
	    });
	    return isDecimal ? parseFloat(sanitized) : parseInt(sanitized, base || 10);
	  }

	  // Math aliases
	  var abs   = Math.abs,
	      pow   = Math.pow,
	      min   = Math.min,
	      max   = Math.max,
	      ceil  = Math.ceil,
	      floor = Math.floor,
	      round = Math.round;


	  // String helpers

	  var chr = String.fromCharCode;

	  function trim(str) {
	    return str.trim();
	  }

	  function repeatString(str, num) {
	    var result = '';
	    str = str.toString();
	    while (num > 0) {
	      if (num & 1) {
	        result += str;
	      }
	      if (num >>= 1) {
	        str += str;
	      }
	    }
	    return result;
	  }

	  function simpleCapitalize(str) {
	    return str.charAt(0).toUpperCase() + str.slice(1);
	  }

	  function createFormatMatcher(bracketMatcher, percentMatcher, precheck) {

	    var reg = STRING_FORMAT_REG;
	    var compileMemoized = memoizeFunction(compile);

	    function getToken(format, match) {
	      var get, token, literal, fn;
	      var bKey = match[2];
	      var pLit = match[3];
	      var pKey = match[5];
	      if (match[4] && percentMatcher) {
	        token = pKey;
	        get = percentMatcher;
	      } else if (bKey) {
	        token = bKey;
	        get = bracketMatcher;
	      } else if (pLit && percentMatcher) {
	        literal = pLit;
	      } else {
	        literal = match[1] || match[0];
	      }
	      if (get) {
	        assertPassesPrecheck(precheck, bKey, pKey);
	        fn = function(obj, opt) {
	          return get(obj, token, opt);
	        };
	      }
	      format.push(fn || getLiteral(literal));
	    }

	    function getSubstring(format, str, start, end) {
	      if (end > start) {
	        var sub = str.slice(start, end);
	        assertNoUnmatched(sub, OPEN_BRACE);
	        assertNoUnmatched(sub, CLOSE_BRACE);
	        format.push(function() {
	          return sub;
	        });
	      }
	    }

	    function getLiteral(str) {
	      return function() {
	        return str;
	      };
	    }

	    function assertPassesPrecheck(precheck, bt, pt) {
	      if (precheck && !precheck(bt, pt)) {
	        throw new TypeError('Invalid token '+ (bt || pt) +' in format string');
	      }
	    }

	    function assertNoUnmatched(str, chr) {
	      if (str.indexOf(chr) !== -1) {
	        throw new TypeError('Unmatched '+ chr +' in format string');
	      }
	    }

	    function compile(str) {
	      var format = [], lastIndex = 0, match;
	      reg.lastIndex = 0;
	      while(match = reg.exec(str)) {
	        getSubstring(format, str, lastIndex, match.index);
	        getToken(format, match);
	        lastIndex = reg.lastIndex;
	      }
	      getSubstring(format, str, lastIndex, str.length);
	      return format;
	    }

	    return function(str, obj, opt) {
	      var format = compileMemoized(str), result = '';
	      for (var i = 0; i < format.length; i++) {
	        result += format[i](obj, opt);
	      }
	      return result;
	    };
	  }

	  // Inflection helper

	  var Inflections = {};

	  function getAcronym(str) {
	    // istanbul ignore next
	    return Inflections.acronyms && Inflections.acronyms.find(str);
	  }

	  function getHumanWord(str) {
	    // istanbul ignore next
	    return Inflections.human && Inflections.human.find(str);
	  }

	  function runHumanRules(str) {
	    // istanbul ignore next
	    return Inflections.human && Inflections.human.runRules(str) || str;
	  }

	  // RegExp helpers

	  function allCharsReg(src) {
	    return RegExp('[' + src + ']', 'g');
	  }

	  function getRegExpFlags(reg, add) {
	    var flags = '';
	    add = add || '';
	    function checkFlag(prop, flag) {
	      if (prop || add.indexOf(flag) > -1) {
	        flags += flag;
	      }
	    }
	    checkFlag(reg.global, 'g');
	    checkFlag(reg.ignoreCase, 'i');
	    checkFlag(reg.multiline, 'm');
	    checkFlag(reg.sticky, 'y');
	    return flags;
	  }

	  function escapeRegExp(str) {
	    if (!isString(str)) str = String(str);
	    return str.replace(/([\\/'*+?|()[\]{}.^$-])/g,'\\$1');
	  }

	  // Date helpers

	  var _utc = privatePropertyAccessor('utc');

	  function callDateGet(d, method) {
	    return d['get' + (_utc(d) ? 'UTC' : '') + method]();
	  }

	  function callDateSet(d, method, value, safe) {
	    // "Safe" denotes not setting the date if the value is the same as what is
	    // currently set. In theory this should be a noop, however it will cause
	    // timezone shifts when in the middle of a DST fallback. This is unavoidable
	    // as the notation itself is ambiguous (i.e. there are two "1:00ams" on
	    // November 1st, 2015 in northern hemisphere timezones that follow DST),
	    // however when advancing or rewinding dates this can throw off calculations
	    // so avoiding this unintentional shifting on an opt-in basis.
	    if (safe && value === callDateGet(d, method, value)) {
	      return;
	    }
	    d['set' + (_utc(d) ? 'UTC' : '') + method](value);
	  }

	  // Memoization helpers

	  var INTERNAL_MEMOIZE_LIMIT = 1000;

	  // Note that attemps to consolidate this with Function#memoize
	  // ended up clunky as that is also serializing arguments. Separating
	  // these implementations turned out to be simpler.
	  function memoizeFunction(fn) {
	    var memo = {}, counter = 0;

	    return function(key) {
	      if (hasOwn(memo, key)) {
	        return memo[key];
	      }
	      // istanbul ignore if
	      if (counter === INTERNAL_MEMOIZE_LIMIT) {
	        memo = {};
	        counter = 0;
	      }
	      counter++;
	      return memo[key] = fn(key);
	    };
	  }

	  // ES6 helpers

	  function setToArray(set) {
	    var arr = new Array(set.size), i = 0;
	    set.forEach(function(val) {
	      arr[i++] = val;
	    });
	    return arr;
	  }

	  function mapToArray(map) {
	    var arr = new Array(map.size), i = 0;
	    map.forEach(function(val, key) {
	      arr[i++] = [key, val];
	    });
	    return arr;
	  }

	  buildClassChecks();
	  buildFullWidthNumber();

	  /***
	   * @module ES5
	   * @description Functions and polyfill methods that fix ES5 functionality. This
	   *              module is excluded from default builds, and can be included if
	   *              you need legacy browser support (IE8 and below).
	   *
	   ***/

	  // Non-enumerable properties on Object.prototype. In early JScript implementations
	  // (< IE9) these will shadow object properties and break for..in loops.
	  var DONT_ENUM_PROPS = [
	    'valueOf',
	    'toString',
	    'constructor',
	    'isPrototypeOf',
	    'hasOwnProperty',
	    'toLocaleString',
	    'propertyIsEnumerable'
	  ];

	  /***
	   * @fix
	   * @short Fixes DontEnum bug for iteration methods in < IE9.
	   ***/
	  function buildDontEnumFix() {
	    if (!({toString:1}).propertyIsEnumerable('toString')) {
	      var forEachEnumerableProperty = forEachProperty;
	      forEachProperty = function(obj, fn) {
	        forEachEnumerableProperty(obj, fn);
	        for (var i = 0, key; key = DONT_ENUM_PROPS[i]; i++) {
	          if (hasOwn(obj, key)) {
	            if(fn.call(obj, obj[key], key, obj) === false) break;
	          }
	        }
	      };
	    }
	  }

	  /***
	   * @fix
	   * @short Adds native methods to chainables in < IE9.
	   ***/
	  function buildChainableNativeMethodsFix() {
	    if (!Object.getOwnPropertyNames) {
	      defineNativeMethodsOnChainable();
	    }
	  }

	  // Polyfilled methods will automatically be added to the chainable prototype.
	  // However, Object.getOwnPropertyNames cannot be shimmed for non-enumerable
	  // properties, so if it does not exist, then the only way to access native
	  // methods previous to ES5 is to provide them as a list of tokens here.
	  function defineNativeMethodsOnChainable() {

	    var nativeTokens = {
	      'Function': 'apply,call',
	      'RegExp':   'compile,exec,test',
	      'Number':   'toExponential,toFixed,toLocaleString,toPrecision',
	      'Object':   'hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString',
	      'Array':    'concat,join,pop,push,reverse,shift,slice,sort,splice,toLocaleString,unshift',
	      'Date':     'getTime,getTimezoneOffset,setTime,toDateString,toGMTString,toLocaleDateString,toLocaleString,toLocaleTimeString,toTimeString,toUTCString',
	      'String':   'anchor,big,blink,bold,charAt,charCodeAt,concat,fixed,fontcolor,fontsize,indexOf,italics,lastIndexOf,link,localeCompare,match,replace,search,slice,small,split,strike,sub,substr,substring,sup,toLocaleLowerCase,toLocaleUpperCase,toLowerCase,toUpperCase'
	    };

	    var dateTokens = 'FullYear,Month,Date,Hours,Minutes,Seconds,Milliseconds'.split(',');

	    function addDateTokens(prefix, arr) {
	      for (var i = 0; i < dateTokens.length; i++) {
	        arr.push(prefix + dateTokens[i]);
	      }
	    }

	    forEachProperty(nativeTokens, function(str, name) {
	      var tokens = str.split(',');
	      if (name === 'Date') {
	        addDateTokens('get', tokens);
	        addDateTokens('set', tokens);
	        addDateTokens('getUTC', tokens);
	        addDateTokens('setUTC', tokens);
	      }
	      tokens.push('toString');
	      mapNativeToChainable(name, tokens);
	    });

	  }


	  buildDontEnumFix();
	  buildChainableNativeMethodsFix();


	  /*** @namespace Object ***/

	  function assertNonNull(obj) {
	    if (obj == null) {
	      throw new TypeError('Object required');
	    }
	  }

	  defineStaticPolyfill(sugarObject, {

	    'keys': function(obj) {
	      var keys = [];
	      assertNonNull(obj);
	      forEachProperty(coercePrimitiveToObject(obj), function(val, key) {
	        keys.push(key);
	      });
	      return keys;
	    }

	  });


	  /*** @namespace Array ***/

	  function arrayIndexOf(arr, search, fromIndex, fromRight) {
	    var length = arr.length, defaultFromIndex, index, increment;

	    increment = fromRight ? -1 : 1;
	    defaultFromIndex = fromRight ? length - 1 : 0;
	    fromIndex = trunc(fromIndex);
	    if (!fromIndex && fromIndex !== 0) {
	      fromIndex = defaultFromIndex;
	    }
	    if (fromIndex < 0) {
	      fromIndex = length + fromIndex;
	    }
	    if ((!fromRight && fromIndex < 0) || (fromRight && fromIndex >= length)) {
	      fromIndex = defaultFromIndex;
	    }

	    index = fromIndex;

	    while((fromRight && index >= 0) || (!fromRight && index < length)) {
	      if (!(index in arr)) {
	        return sparseIndexOf(arr, search, fromIndex, fromRight);
	      }
	      if (isArrayIndex(index) && arr[index] === search) {
	        return index;
	      }
	      index += increment;
	    }
	    return -1;
	  }

	  function sparseIndexOf(arr, search, fromIndex, fromRight) {
	    var indexes = getSparseArrayIndexes(arr, fromIndex, false, fromRight), index;
	    indexes.sort(function(a, b) {
	      return fromRight ? b - a : a - b;
	    });
	    while ((index = indexes.shift()) !== undefined) {
	      if (arr[index] === search) {
	        return +index;
	      }
	    }
	    return -1;
	  }

	  function arrayReduce(arr, fn, initialValue, fromRight) {
	    var length = arr.length, count = 0, defined = isDefined(initialValue), result, index;
	    assertCallable(fn);
	    if (length == 0 && !defined) {
	      throw new TypeError('Reduce called on empty array with no initial value');
	    } else if (defined) {
	      result = initialValue;
	    } else {
	      result = arr[fromRight ? length - 1 : count];
	      count++;
	    }
	    while(count < length) {
	      index = fromRight ? length - count - 1 : count;
	      if (index in arr) {
	        result = fn(result, arr[index], index, arr);
	      }
	      count++;
	    }
	    return result;
	  }

	  defineStaticPolyfill(sugarArray, {

	    /***
	     *
	     * @method isArray(obj)
	     * @returns Boolean
	     * @polyfill ES5
	     * @static
	     * @short Returns true if `obj` is an Array.
	     *
	     * @example
	     *
	     *   Array.isArray(3)        -> false
	     *   Array.isArray(true)     -> false
	     *   Array.isArray('wasabi') -> false
	     *   Array.isArray([1,2,3])  -> true
	     *
	     ***/
	    'isArray': function(obj) {
	      return isArray(obj);
	    }

	  });

	  defineInstancePolyfill(sugarArray, {

	    'every': function(fn) {
	      // Force compiler to respect argument length.
	      var argLen = arguments.length, context = arguments[1];
	      var length = this.length, index = 0;
	      assertCallable(fn);
	      while(index < length) {
	        if (index in this && !fn.call(context, this[index], index, this)) {
	          return false;
	        }
	        index++;
	      }
	      return true;
	    },

	    'some': function(fn) {
	      // Force compiler to respect argument length.
	      var argLen = arguments.length, context = arguments[1];
	      var length = this.length, index = 0;
	      assertCallable(fn);
	      while(index < length) {
	        if (index in this && fn.call(context, this[index], index, this)) {
	          return true;
	        }
	        index++;
	      }
	      return false;
	    },

	    'map': function(fn) {
	      // Force compiler to respect argument length.
	      var argLen = arguments.length, context = arguments[1];
	      var length = this.length, index = 0, result = new Array(length);
	      assertCallable(fn);
	      while(index < length) {
	        if (index in this) {
	          result[index] = fn.call(context, this[index], index, this);
	        }
	        index++;
	      }
	      return result;
	    },

	    'filter': function(fn) {
	      // Force compiler to respect argument length.
	      var argLen = arguments.length, context = arguments[1];
	      var length = this.length, index = 0, result = [];
	      assertCallable(fn);
	      while(index < length) {
	        if (index in this && fn.call(context, this[index], index, this)) {
	          result.push(this[index]);
	        }
	        index++;
	      }
	      return result;
	    },

	    /***
	     * @method indexOf(search, [fromIndex] = 0)
	     * @returns Number
	     * @polyfill ES5
	     * @short Searches the array and returns the first index where `search` occurs,
	     *        or `-1` if the element is not found.
	     * @extra [fromIndex] is the index from which to begin the search. This
	     *        method performs a simple strict equality comparison on `search`.
	     *        Sugar does not enhance this method to support `enhanced matching`.
	     *        For such functionality, use the `findIndex` method instead.
	     *
	     * @example
	     *
	     *   [1,2,3].indexOf(3) -> 1
	     *   [1,2,3].indexOf(7) -> -1
	     *
	     ***/
	    'indexOf': function(search) {
	      // Force compiler to respect argument length.
	      var argLen = arguments.length, fromIndex = arguments[1];
	      if (isString(this)) return this.indexOf(search, fromIndex);
	      return arrayIndexOf(this, search, fromIndex);
	    },

	    /***
	     * @method lastIndexOf(search, [fromIndex] = array.length - 1)
	     * @returns Number
	     * @polyfill ES5
	     * @short Searches the array from the end and returns the first index where
	     *        `search` occurs, or `-1` if the element is not found.
	     * @extra [fromIndex] is the index from which to begin the search. This method
	     *        performs a simple strict equality comparison on `search`.
	     *        Sugar does not enhance this method to support `enhanced matching`.
	     *
	     * @example
	     *
	     *   [1,2,1].lastIndexOf(1) -> 2
	     *   [1,2,1].lastIndexOf(7) -> -1
	     *
	     ***/
	    'lastIndexOf': function(search) {
	      // Force compiler to respect argument length.
	      var argLen = arguments.length, fromIndex = arguments[1];
	      if (isString(this)) return this.lastIndexOf(search, fromIndex);
	      return arrayIndexOf(this, search, fromIndex, true);
	    },

	    /***
	     * @method forEach([eachFn], [context])
	     * @polyfill ES5
	     * @short Iterates over the array, calling [eachFn] on each loop.
	     * @extra [context] becomes the `this` object.
	     *
	     * @callback eachFn
	     *
	     *   el   The element of the current iteration.
	     *   i    The index of the current iteration.
	     *   arr  A reference to the array.
	     *
	     * @example
	     *
	     *   ['a','b','c'].forEach(function(a) {
	     *     // Called 3 times: 'a','b','c'
	     *   });
	     *
	     ***/
	    'forEach': function(eachFn) {
	      // Force compiler to respect argument length.
	      var argLen = arguments.length, context = arguments[1];
	      var length = this.length, index = 0;
	      assertCallable(eachFn);
	      while(index < length) {
	        if (index in this) {
	          eachFn.call(context, this[index], index, this);
	        }
	        index++;
	      }
	    },

	    /***
	     * @method reduce(reduceFn, [init])
	     * @returns Mixed
	     * @polyfill ES5
	     * @short Reduces the array to a single result.
	     * @extra This operation is sometimes called "accumulation", as it takes the
	     *        result of the last iteration of `reduceFn` and passes it as the first
	     *        argument to the next iteration, "accumulating" that value as it goes.
	     *        The return value of this method will be the return value of the final
	     *        iteration of `reduceFn`. If [init] is passed, it will be the initial
	     *        "accumulator" (the first argument). If [init] is not passed, then it
	     *        will take the first element in the array, and `reduceFn` will not be
	     *        called for that element.
	     *
	     * @callback reduceFn
	     *
	     *   acc  The "accumulator". Either [init], the result of the last iteration
	     *        of `reduceFn`, or the first element of the array.
	     *   el   The current element for this iteration.
	     *   idx  The current index for this iteration.
	     *   arr  A reference to the array.
	     *
	     * @example
	     *
	     *   [1,2,3].reduce(function(a, b) {
	     *     return a - b; // 1 - 2 - 3
	     *   });
	     *
	     *   [1,2,3].reduce(function(a, b) {
	     *     return a - b; // 100 - 1 - 2 - 3
	     *   }, 100);
	     *
	     ***/
	    'reduce': function(reduceFn) {
	      // Force compiler to respect argument length.
	      var argLen = arguments.length, context = arguments[1];
	      return arrayReduce(this, reduceFn, context);
	    },

	    /***
	     * @method reduceRight([reduceFn], [init])
	     * @returns Mixed
	     * @polyfill ES5
	     * @short Similar to `Array#reduce`, but operates on the elements in reverse.
	     *
	     * @callback reduceFn
	     *
	     *   acc  The "accumulator", either [init], the result of the last iteration
	     *        of `reduceFn`, or the last element of the array.
	     *   el   The current element for this iteration.
	     *   idx  The current index for this iteration.
	     *   arr  A reference to the array.
	     *
	     * @example
	     *
	     *   [1,2,3].reduceRight(function(a, b) {
	     *     return a - b; // 3 - 2 - 1
	     *   });
	     *
	     *   [1,2,3].reduceRight(function(a, b) {
	     *     return a - b; // 100 - 3 - 2 - 1
	     *   }, 100);
	     *
	     *
	     ***/
	    'reduceRight': function(reduceFn) {
	      // Force compiler to respect argument length.
	      var argLen = arguments.length, context = arguments[1];
	      return arrayReduce(this, reduceFn, context, true);
	    }

	  });


	  /*** @namespace String ***/

	  var TRIM_REG = RegExp('^[' + TRIM_CHARS + ']+|['+ TRIM_CHARS +']+$', 'g');

	  defineInstancePolyfill(sugarString, {
	    /***
	     * @method trim()
	     * @returns String
	     * @polyfill ES5
	     * @short Removes leading and trailing whitespace from the string.
	     * @extra Whitespace is defined as line breaks, tabs, and any character in the
	     *        "Space, Separator" Unicode category, conforming to the the ES5 spec.
	     *
	     * @example
	     *
	     *   '   wasabi   '.trim()      -> 'wasabi'
	     *   '   wasabi   '.trimLeft()  -> 'wasabi   '
	     *   '   wasabi   '.trimRight() -> '   wasabi'
	     *
	     ***/
	    'trim': function() {
	      return this.toString().replace(TRIM_REG, '');
	    }
	  });


	  /*** @namespace Function ***/

	  defineInstancePolyfill(sugarFunction, {

	     /***
	     * @method bind(context, [arg1], ...)
	     * @returns Function
	     * @polyfill ES5
	     * @short Binds `context` as the `this` object for the function when it is
	     *        called. Also allows currying an unlimited number of parameters.
	     * @extra "currying" means setting parameters ([arg1], [arg2], etc.) ahead of
	     *        time so that they are passed when the function is called later. If
	     *        you pass additional parameters when the function is actually called,
	     *        they will be added to the end of the curried parameters.
	     *
	     * @example
	     *
	     *   logThis.bind('woof')()   -> logs 'woof' as its this object
	     *   addArgs.bind(1, 2, 3)()  -> returns 5 with 1 as the this object
	     *   addArgs.bind(1)(2, 3, 4) -> returns 9
	     *
	     ***/
	    'bind': function(context) {
	      // Optimized: no leaking arguments
	      var boundArgs = []; for(var $i = 1, $len = arguments.length; $i < $len; $i++) boundArgs.push(arguments[$i]);
	      var fn = this, bound;
	      assertCallable(this);
	      bound = function() {
	        // Optimized: no leaking arguments
	        var args = []; for(var $i = 0, $len = arguments.length; $i < $len; $i++) args.push(arguments[$i]);
	        return fn.apply(fn.prototype && this instanceof fn ? this : context, boundArgs.concat(args));
	      };
	      bound.prototype = this.prototype;
	      return bound;
	    }

	  });


	  /*** @namespace Date ***/

	  defineStaticPolyfill(sugarDate, {

	     /***
	     * @method now()
	     * @returns String
	     * @polyfill ES5
	     * @static
	     * @short Returns the current time as a Unix timestamp.
	     * @extra The number of milliseconds since January 1st, 1970 00:00:00 (UTC).
	     *
	     * @example
	     *
	     *   Date.now() -> ex. 1311938296231
	     *
	     ***/
	    'now': function() {
	      return new Date().getTime();
	    }

	  });

	  function hasISOSupport() {
	    var d = new Date(Date.UTC(2000, 0));
	    return !!d.toISOString && d.toISOString() === '2000-01-01T00:00:00.000Z';
	  }

	  defineInstancePolyfill(sugarDate, {

	     /***
	     * @method toISOString()
	     * @returns String
	     * @polyfill ES5
	     * @short Formats the string to ISO8601 format.
	     * @extra This will always format as UTC time.
	     *
	     * @example
	     *
	     *   Date.create().toISOString() -> ex. 2011-07-05 12:24:55.528Z
	     *
	     ***/
	    'toISOString': function() {
	      return padNumber(this.getUTCFullYear(), 4) + '-' +
	             padNumber(this.getUTCMonth() + 1, 2) + '-' +
	             padNumber(this.getUTCDate(), 2) + 'T' +
	             padNumber(this.getUTCHours(), 2) + ':' +
	             padNumber(this.getUTCMinutes(), 2) + ':' +
	             padNumber(this.getUTCSeconds(), 2) + '.' +
	             padNumber(this.getUTCMilliseconds(), 3) + 'Z';
	    },

	     /***
	     * @method toJSON([key])
	     * @returns String
	     * @polyfill ES5
	     * @short Returns a JSON representation of the date.
	     * @extra This is effectively an alias for `toISOString`. Will always return
	     *        the date in UTC time. [key] is ignored.
	     *
	     * @example
	     *
	     *   Date.create().toJSON() -> ex. 2011-07-05 12:24:55.528Z
	     *
	     ***/
	    'toJSON': function(key) {
	      // Force compiler to respect argument length.
	      var argLen = arguments.length;
	      return this.toISOString(key);
	    }

	  }, !hasISOSupport());

	}).call(this);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var forEach = __webpack_require__(10),
	    classChecks = __webpack_require__(14),
	    entryAtIndex = __webpack_require__(23);

	var isArray = classChecks.isArray;

	function getEntriesForIndexes(obj, find, loop, isString) {
	  var result, length = obj.length;
	  if (!isArray(find)) {
	    return entryAtIndex(obj, find, length, loop, isString);
	  }
	  result = new Array(find.length);
	  forEach(find, function(index, i) {
	    result[i] = entryAtIndex(obj, index, length, loop, isString);
	  });
	  return result;
	}

	module.exports = getEntriesForIndexes;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var iterateOverSparseArray = __webpack_require__(11);

	function forEach(arr, fn) {
	  for (var i = 0, len = arr.length; i < len; i++) {
	    if (!(i in arr)) {
	      return iterateOverSparseArray(arr, fn, i);
	    }
	    fn(arr[i], i);
	  }
	}

	module.exports = forEach;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getSparseArrayIndexes = __webpack_require__(12);

	function iterateOverSparseArray(arr, fn, fromIndex, loop) {
	  var indexes = getSparseArrayIndexes(arr, fromIndex, loop), index;
	  for (var i = 0, len = indexes.length; i < len; i++) {
	    index = indexes[i];
	    fn.call(arr, arr[index], index, arr);
	  }
	  return arr;
	}

	module.exports = iterateOverSparseArray;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var isArrayIndex = __webpack_require__(13);

	function getSparseArrayIndexes(arr, fromIndex, loop, fromRight) {
	  var indexes = [], i;
	  for (i in arr) {
	    // istanbul ignore next
	    if (isArrayIndex(i) && (loop || (fromRight ? i <= fromIndex : i >= fromIndex))) {
	      indexes.push(+i);
	    }
	  }
	  indexes.sort(function(a, b) {
	    var aLoop = a > fromIndex;
	    var bLoop = b > fromIndex;
	    // This block cannot be reached unless ES5 methods are being shimmed.
	    // istanbul ignore if
	    if (aLoop !== bLoop) {
	      return aLoop ? -1 : 1;
	    }
	    return a - b;
	  });
	  return indexes;
	}

	module.exports = getSparseArrayIndexes;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	function isArrayIndex(n) {
	  return n >>> 0 == n && n != 0xFFFFFFFF;
	}

	module.exports = isArrayIndex;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var NATIVE_TYPES = __webpack_require__(15),
	    forEach = __webpack_require__(10),
	    isClass = __webpack_require__(16),
	    spaceSplit = __webpack_require__(18),
	    isPlainObject = __webpack_require__(19);

	var isSerializable,
	    isBoolean, isNumber, isString,
	    isDate, isRegExp, isFunction,
	    isArray, isSet, isMap, isError;

	function buildClassChecks() {

	  var knownTypes = {};

	  function addCoreTypes() {

	    var names = spaceSplit(NATIVE_TYPES);

	    isBoolean = buildPrimitiveClassCheck(names[0]);
	    isNumber  = buildPrimitiveClassCheck(names[1]);
	    isString  = buildPrimitiveClassCheck(names[2]);

	    isDate   = buildClassCheck(names[3]);
	    isRegExp = buildClassCheck(names[4]);

	    // Wanted to enhance performance here by using simply "typeof"
	    // but Firefox has two major issues that make this impossible,
	    // one fixed, the other not, so perform a full class check here.
	    //
	    // 1. Regexes can be typeof "function" in FF < 3
	    //    https://bugzilla.mozilla.org/show_bug.cgi?id=61911 (fixed)
	    //
	    // 2. HTMLEmbedElement and HTMLObjectElement are be typeof "function"
	    //    https://bugzilla.mozilla.org/show_bug.cgi?id=268945 (won't fix)
	    isFunction = buildClassCheck(names[5]);

	    // istanbul ignore next
	    isArray = Array.isArray || buildClassCheck(names[6]);
	    isError = buildClassCheck(names[7]);

	    isSet = buildClassCheck(names[8], typeof Set !== 'undefined' && Set);
	    isMap = buildClassCheck(names[9], typeof Map !== 'undefined' && Map);

	    // Add core types as known so that they can be checked by value below,
	    // notably excluding Functions and adding Arguments and Error.
	    addKnownType('Arguments');
	    addKnownType(names[0]);
	    addKnownType(names[1]);
	    addKnownType(names[2]);
	    addKnownType(names[3]);
	    addKnownType(names[4]);
	    addKnownType(names[6]);

	  }

	  function addArrayTypes() {
	    var types = 'Int8 Uint8 Uint8Clamped Int16 Uint16 Int32 Uint32 Float32 Float64';
	    forEach(spaceSplit(types), function(str) {
	      addKnownType(str + 'Array');
	    });
	  }

	  function addKnownType(className) {
	    var str = '[object '+ className +']';
	    knownTypes[str] = true;
	  }

	  function isKnownType(className) {
	    return knownTypes[className];
	  }

	  function buildClassCheck(className, globalObject) {
	    // istanbul ignore if
	    if (globalObject && isClass(new globalObject, 'Object')) {
	      return getConstructorClassCheck(globalObject);
	    } else {
	      return getToStringClassCheck(className);
	    }
	  }

	  // Map and Set may be [object Object] in certain IE environments.
	  // In this case we need to perform a check using the constructor
	  // instead of Object.prototype.toString.
	  // istanbul ignore next
	  function getConstructorClassCheck(obj) {
	    var ctorStr = String(obj);
	    return function(obj) {
	      return String(obj.constructor) === ctorStr;
	    };
	  }

	  function getToStringClassCheck(className) {
	    return function(obj, str) {
	      // perf: Returning up front on instanceof appears to be slower.
	      return isClass(obj, className, str);
	    };
	  }

	  function buildPrimitiveClassCheck(className) {
	    var type = className.toLowerCase();
	    return function(obj) {
	      var t = typeof obj;
	      return t === type || t === 'object' && isClass(obj, className);
	    };
	  }

	  addCoreTypes();
	  addArrayTypes();

	  isSerializable = function(obj, className) {
	    // Only known objects can be serialized. This notably excludes functions,
	    // host objects, Symbols (which are matched by reference), and instances
	    // of classes. The latter can arguably be matched by value, but
	    // distinguishing between these and host objects -- which should never be
	    // compared by value -- is very tricky so not dealing with it here.
	    return isKnownType(className) || isPlainObject(obj, className);
	  };

	}

	buildClassChecks();

	module.exports = {
	  isSerializable: isSerializable,
	  isBoolean: isBoolean,
	  isNumber: isNumber,
	  isString: isString,
	  isDate: isDate,
	  isRegExp: isRegExp,
	  isFunction: isFunction,
	  isArray: isArray,
	  isSet: isSet,
	  isMap: isMap,
	  isError: isError
	};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = 'Boolean Number String Date RegExp Function Array Error Set Map';

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var coreUtilityAliases = __webpack_require__(17);

	var classToString = coreUtilityAliases.classToString;

	function isClass(obj, className, str) {
	  if (!str) {
	    str = classToString(obj);
	  }
	  return str === '[object '+ className +']';
	}

	module.exports = isClass;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	module.exports = {
	  hasOwn: Sugar.util.hasOwn,
	  getOwn: Sugar.util.getOwn,
	  setProperty: Sugar.util.setProperty,
	  classToString: Sugar.util.classToString,
	  defineProperty: Sugar.util.defineProperty,
	  forEachProperty: Sugar.util.forEachProperty,
	  mapNativeToChainable: Sugar.util.mapNativeToChainable
	};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';

	function spaceSplit(str) {
	  return str.split(' ');
	}

	module.exports = spaceSplit;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var isClass = __webpack_require__(16),
	    isObjectType = __webpack_require__(20),
	    hasOwnEnumeratedProperties = __webpack_require__(21),
	    hasValidPlainObjectPrototype = __webpack_require__(22);

	function isPlainObject(obj, className) {
	  return isObjectType(obj) &&
	         isClass(obj, 'Object', className) &&
	         hasValidPlainObjectPrototype(obj) &&
	         hasOwnEnumeratedProperties(obj);
	}

	module.exports = isPlainObject;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';

	function isObjectType(obj, type) {
	  return !!obj && (type || typeof obj) === 'object';
	}

	module.exports = isObjectType;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var coreUtilityAliases = __webpack_require__(17);

	var hasOwn = coreUtilityAliases.hasOwn;

	function hasOwnEnumeratedProperties(obj) {
	  // Plain objects are generally defined as having enumerated properties
	  // all their own, however in early IE environments without defineProperty,
	  // there may also be enumerated methods in the prototype chain, so check
	  // for both of these cases.
	  var objectProto = Object.prototype;
	  for (var key in obj) {
	    var val = obj[key];
	    if (!hasOwn(obj, key) && val !== objectProto[key]) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = hasOwnEnumeratedProperties;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var coreUtilityAliases = __webpack_require__(17);

	var hasOwn = coreUtilityAliases.hasOwn;

	function hasValidPlainObjectPrototype(obj) {
	  var hasToString = 'toString' in obj;
	  var hasConstructor = 'constructor' in obj;
	  // An object created with Object.create(null) has no methods in the
	  // prototype chain, so check if any are missing. The additional hasToString
	  // check is for false positives on some host objects in old IE which have
	  // toString but no constructor. If the object has an inherited constructor,
	  // then check if it is Object (the "isPrototypeOf" tapdance here is a more
	  // robust way of ensuring this if the global has been hijacked). Note that
	  // accessing the constructor directly (without "in" or "hasOwnProperty")
	  // will throw a permissions error in IE8 on cross-domain windows.
	  return (!hasConstructor && !hasToString) ||
	          (hasConstructor && !hasOwn(obj, 'constructor') &&
	           hasOwn(obj.constructor.prototype, 'isPrototypeOf'));
	}

	module.exports = hasValidPlainObjectPrototype;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getNormalizedIndex = __webpack_require__(24);

	function entryAtIndex(obj, index, length, loop, isString) {
	  index = getNormalizedIndex(index, length, loop);
	  return isString ? obj.charAt(index) : obj[index];
	}

	module.exports = entryAtIndex;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';

	function getNormalizedIndex(index, length, loop) {
	  if (index && loop) {
	    index = index % length;
	  }
	  if (index < 0) index = length + index;
	  return index;
	}

	module.exports = getNormalizedIndex;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    stringCamelize = __webpack_require__(26);

	Sugar.String.defineInstance({

	  'camelize': function(str, upper) {
	    return stringCamelize(str, upper);
	  }

	});

	module.exports = Sugar.String.camelize;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var CAMELIZE_REG = __webpack_require__(27),
	    getAcronym = __webpack_require__(28),
	    stringUnderscore = __webpack_require__(30),
	    stringCapitalize = __webpack_require__(31);

	function stringCamelize(str, upper) {
	  str = stringUnderscore(str);
	  return str.replace(CAMELIZE_REG, function(match, pre, word, index) {
	    var cap = upper !== false || index > 0, acronym;
	    acronym = getAcronym(word);
	    // istanbul ignore if
	    if (acronym && cap) {
	      return acronym;
	    }
	    return cap ? stringCapitalize(word, true) : word;
	  });
	}

	module.exports = stringCamelize;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = /(^|_)([^_]+)/g;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Inflections = __webpack_require__(29);

	function getAcronym(str) {
	  // istanbul ignore next
	  return Inflections.acronyms && Inflections.acronyms.find(str);
	}

	module.exports = getAcronym;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Inflections = __webpack_require__(29);

	function stringUnderscore(str) {
	  var areg = Inflections.acronyms && Inflections.acronyms.reg;
	  // istanbul ignore if
	  if (areg) {
	    str = str.replace(areg, function(acronym, index) {
	      return (index > 0 ? '_' : '') + acronym.toLowerCase();
	    })
	  }
	  return str
	    .replace(/[-\s]+/g, '_')
	    .replace(/([A-Z\d]+)([A-Z][a-z])/g,'$1_$2')
	    .replace(/([a-z\d])([A-Z])/g,'$1_$2')
	    .toLowerCase();
	}

	module.exports = stringUnderscore;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var CAPITALIZE_REG = __webpack_require__(32),
	    simpleCapitalize = __webpack_require__(33);

	function stringCapitalize(str, downcase, all) {
	  if (downcase) {
	    str = str.toLowerCase();
	  }
	  return all ? str.replace(CAPITALIZE_REG, simpleCapitalize) : simpleCapitalize(str);
	}

	module.exports = stringCapitalize;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = /[^\u0000-\u0040\u005B-\u0060\u007B-\u007F]+('s)?/g;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	'use strict';

	function simpleCapitalize(str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	}

	module.exports = simpleCapitalize;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    stringCapitalize = __webpack_require__(31);

	Sugar.String.defineInstance({

	  'capitalize': function(str, lower, all) {
	    return stringCapitalize(str, lower, all);
	  }

	});

	module.exports = Sugar.String.capitalize;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    stringEach = __webpack_require__(36);

	Sugar.String.defineInstance({

	  'chars': function(str, search, eachCharFn) {
	    return stringEach(str, search, eachCharFn);
	  }

	});

	module.exports = Sugar.String.chars;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var isDefined = __webpack_require__(37),
	    classChecks = __webpack_require__(14),
	    escapeRegExp = __webpack_require__(38),
	    getRegExpFlags = __webpack_require__(39),
	    runGlobalMatch = __webpack_require__(40);

	var isString = classChecks.isString,
	    isRegExp = classChecks.isRegExp,
	    isFunction = classChecks.isFunction;

	function stringEach(str, search, fn) {
	  var chunks, chunk, reg, result = [];
	  if (isFunction(search)) {
	    fn = search;
	    reg = /[\s\S]/g;
	  } else if (!search) {
	    reg = /[\s\S]/g;
	  } else if (isString(search)) {
	    reg = RegExp(escapeRegExp(search), 'gi');
	  } else if (isRegExp(search)) {
	    reg = RegExp(search.source, getRegExpFlags(search, 'g'));
	  }
	  // Getting the entire array of chunks up front as we need to
	  // pass this into the callback function as an argument.
	  chunks = runGlobalMatch(str, reg);

	  if (chunks) {
	    for(var i = 0, len = chunks.length, r; i < len; i++) {
	      chunk = chunks[i];
	      result[i] = chunk;
	      if (fn) {
	        r = fn.call(str, chunk, i, chunks);
	        if (r === false) {
	          break;
	        } else if (isDefined(r)) {
	          result[i] = r;
	        }
	      }
	    }
	  }
	  return result;
	}

	module.exports = stringEach;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	'use strict';

	function isDefined(o) {
	  return o !== undefined;
	}

	module.exports = isDefined;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classChecks = __webpack_require__(14);

	var isString = classChecks.isString;

	function escapeRegExp(str) {
	  if (!isString(str)) str = String(str);
	  return str.replace(/([\\/'*+?|()[\]{}.^$-])/g,'\\$1');
	}

	module.exports = escapeRegExp;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	'use strict';

	function getRegExpFlags(reg, add) {
	  var flags = '';
	  add = add || '';
	  function checkFlag(prop, flag) {
	    if (prop || add.indexOf(flag) > -1) {
	      flags += flag;
	    }
	  }
	  checkFlag(reg.global, 'g');
	  checkFlag(reg.ignoreCase, 'i');
	  checkFlag(reg.multiline, 'm');
	  checkFlag(reg.sticky, 'y');
	  return flags;
	}

	module.exports = getRegExpFlags;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	'use strict';

	function runGlobalMatch(str, reg) {
	  var result = [], match, lastLastIndex;
	  while ((match = reg.exec(str)) != null) {
	    if (reg.lastIndex === lastLastIndex) {
	      reg.lastIndex += 1;
	    } else {
	      result.push(match[0]);
	    }
	    lastLastIndex = reg.lastIndex;
	  }
	  return result;
	}

	module.exports = runGlobalMatch;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    stringCodes = __webpack_require__(42);

	Sugar.String.defineInstance({

	  'codes': function(str, eachCodeFn) {
	    return stringCodes(str, eachCodeFn);
	  }

	});

	module.exports = Sugar.String.codes;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	'use strict';

	function stringCodes(str, fn) {
	  var codes = new Array(str.length), i, len;
	  for(i = 0, len = str.length; i < len; i++) {
	    var code = str.charCodeAt(i);
	    codes[i] = code;
	    if (fn) {
	      fn.call(str, code, i, str);
	    }
	  }
	  return codes;
	}

	module.exports = stringCodes;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    trim = __webpack_require__(44);

	Sugar.String.defineInstance({

	  'compact': function(str) {
	    return trim(str).replace(/([\r\n\s　])+/g, function(match, whitespace) {
	      return whitespace === '　' ? whitespace : ' ';
	    });
	  }

	});

	module.exports = Sugar.String.compact;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	'use strict';

	function trim(str) {
	  return str.trim();
	}

	module.exports = trim;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    stringUnderscore = __webpack_require__(30);

	Sugar.String.defineInstance({

	  'dasherize': function(str) {
	    return stringUnderscore(str).replace(/_/g, '-');
	  }

	});

	module.exports = Sugar.String.dasherize;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    base64 = __webpack_require__(47);

	var decodeBase64 = base64.decodeBase64;

	Sugar.String.defineInstance({

	  'decodeBase64': function(str) {
	    return decodeBase64(str);
	  }

	});

	module.exports = Sugar.String.decodeBase64;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var chr = __webpack_require__(52);

	var encodeBase64, decodeBase64;

	function buildBase64() {
	  var encodeAscii, decodeAscii;

	  // istanbul ignore next
	  function catchEncodingError(fn) {
	    return function(str) {
	      try {
	        return fn(str);
	      } catch(e) {
	        return '';
	      }
	    };
	  }

	  // istanbul ignore if
	  if (typeof Buffer !== 'undefined') {
	    encodeBase64 = function(str) {
	      return Buffer.from(str).toString('base64');
	    };
	    decodeBase64 = function(str) {
	      return Buffer.from(str, 'base64').toString('utf8');
	    };
	    return;
	  }

	  // istanbul ignore if
	  if (typeof btoa !== 'undefined') {
	    encodeAscii = catchEncodingError(btoa);
	    decodeAscii = catchEncodingError(atob);
	  } else {
	    var key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	    var base64reg = /[^A-Za-z0-9\+\/\=]/g;
	    encodeAscii = function(str) {
	      var output = '';
	      var chr1, chr2, chr3;
	      var enc1, enc2, enc3, enc4;
	      var i = 0;
	      do {
	        chr1 = str.charCodeAt(i++);
	        chr2 = str.charCodeAt(i++);
	        chr3 = str.charCodeAt(i++);
	        enc1 = chr1 >> 2;
	        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
	        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
	        enc4 = chr3 & 63;
	        if (isNaN(chr2)) {
	          enc3 = enc4 = 64;
	        } else if (isNaN(chr3)) {
	          enc4 = 64;
	        }
	        output += key.charAt(enc1);
	        output += key.charAt(enc2);
	        output += key.charAt(enc3);
	        output += key.charAt(enc4);
	        chr1 = chr2 = chr3 = '';
	        enc1 = enc2 = enc3 = enc4 = '';
	      } while (i < str.length);
	      return output;
	    };
	    decodeAscii = function(input) {
	      var output = '';
	      var chr1, chr2, chr3;
	      var enc1, enc2, enc3, enc4;
	      var i = 0;
	      if (input.match(base64reg)) {
	        return '';
	      }
	      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
	      do {
	        enc1 = key.indexOf(input.charAt(i++));
	        enc2 = key.indexOf(input.charAt(i++));
	        enc3 = key.indexOf(input.charAt(i++));
	        enc4 = key.indexOf(input.charAt(i++));
	        chr1 = (enc1 << 2) | (enc2 >> 4);
	        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
	        chr3 = ((enc3 & 3) << 6) | enc4;
	        output = output + chr(chr1);
	        if (enc3 != 64) {
	          output = output + chr(chr2);
	        }
	        if (enc4 != 64) {
	          output = output + chr(chr3);
	        }
	        chr1 = chr2 = chr3 = '';
	        enc1 = enc2 = enc3 = enc4 = '';
	      } while (i < input.length);
	      return output;
	    };
	  }
	  encodeBase64 = function(str) {
	    return encodeAscii(unescape(encodeURIComponent(str)));
	  };
	  decodeBase64 = function(str) {
	    return decodeURIComponent(escape(decodeAscii(str)));
	  };
	}

	buildBase64();

	module.exports = {
	  encodeBase64: encodeBase64,
	  decodeBase64: decodeBase64
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48).Buffer))

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(49)
	var ieee754 = __webpack_require__(50)
	var isArray = __webpack_require__(51)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()

	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192 // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}

	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)

	  var actual = that.write(string, encoding)

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len)
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}

	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8'

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true

	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0

	  if (this === target) return 0

	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)

	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }

	  return len
	}

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0

	  if (!val) val = 0

	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }

	  return this
	}

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	'use strict'

	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray

	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}

	// Support decoding URL-safe base64 strings, as Node.js does.
	// See: https://en.wikipedia.org/wiki/Base64#URL_applications
	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63

	function getLens (b64) {
	  var len = b64.length

	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // Trim off extra bytes after placeholder bytes are found
	  // See: https://github.com/beatgammit/base64-js/issues/42
	  var validLen = b64.indexOf('=')
	  if (validLen === -1) validLen = len

	  var placeHoldersLen = validLen === len
	    ? 0
	    : 4 - (validLen % 4)

	  return [validLen, placeHoldersLen]
	}

	// base64 is 4/3 + up to two characters of the original data
	function byteLength (b64) {
	  var lens = getLens(b64)
	  var validLen = lens[0]
	  var placeHoldersLen = lens[1]
	  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
	}

	function _byteLength (b64, validLen, placeHoldersLen) {
	  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
	}

	function toByteArray (b64) {
	  var tmp
	  var lens = getLens(b64)
	  var validLen = lens[0]
	  var placeHoldersLen = lens[1]

	  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

	  var curByte = 0

	  // if there are placeholders, only get up to the last complete 4 chars
	  var len = placeHoldersLen > 0
	    ? validLen - 4
	    : validLen

	  var i
	  for (i = 0; i < len; i += 4) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 18) |
	      (revLookup[b64.charCodeAt(i + 1)] << 12) |
	      (revLookup[b64.charCodeAt(i + 2)] << 6) |
	      revLookup[b64.charCodeAt(i + 3)]
	    arr[curByte++] = (tmp >> 16) & 0xFF
	    arr[curByte++] = (tmp >> 8) & 0xFF
	    arr[curByte++] = tmp & 0xFF
	  }

	  if (placeHoldersLen === 2) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 2) |
	      (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[curByte++] = tmp & 0xFF
	  }

	  if (placeHoldersLen === 1) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 10) |
	      (revLookup[b64.charCodeAt(i + 1)] << 4) |
	      (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[curByte++] = (tmp >> 8) & 0xFF
	    arr[curByte++] = tmp & 0xFF
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] +
	    lookup[num >> 12 & 0x3F] +
	    lookup[num >> 6 & 0x3F] +
	    lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp =
	      ((uint8[i] << 16) & 0xFF0000) +
	      ((uint8[i + 1] << 8) & 0xFF00) +
	      (uint8[i + 2] & 0xFF)
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    parts.push(
	      lookup[tmp >> 2] +
	      lookup[(tmp << 4) & 0x3F] +
	      '=='
	    )
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
	    parts.push(
	      lookup[tmp >> 10] +
	      lookup[(tmp >> 4) & 0x3F] +
	      lookup[(tmp << 2) & 0x3F] +
	      '='
	    )
	  }

	  return parts.join('')
	}


/***/ }),
/* 50 */
/***/ (function(module, exports) {

	/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = (nBytes * 8) - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = (nBytes * 8) - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = ((value * c) - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ }),
/* 51 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = String.fromCharCode;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    base64 = __webpack_require__(47);

	var encodeBase64 = base64.encodeBase64;

	Sugar.String.defineInstance({

	  'encodeBase64': function(str) {
	    return encodeBase64(str);
	  }

	});

	module.exports = Sugar.String.encodeBase64;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    HTML_ESCAPE_REG = __webpack_require__(55),
	    HTMLToEntityMap = __webpack_require__(56),
	    coreUtilityAliases = __webpack_require__(17);

	var getOwn = coreUtilityAliases.getOwn;

	Sugar.String.defineInstance({

	  'escapeHTML': function(str) {
	    return str.replace(HTML_ESCAPE_REG, function(chr) {
	      return getOwn(HTMLToEntityMap, chr);
	    });
	  }

	});

	module.exports = Sugar.String.escapeHTML;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = /[&<>]/g;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var HTMLFromEntityMap = __webpack_require__(57),
	    coreUtilityAliases = __webpack_require__(17);

	var forEachProperty = coreUtilityAliases.forEachProperty;

	var HTMLToEntityMap;

	function buildEntities() {
	  HTMLToEntityMap = {};
	  forEachProperty(HTMLFromEntityMap, function(val, key) {
	    HTMLToEntityMap[val] = '&' + key + ';';
	  });
	}

	buildEntities();

	module.exports = HTMLToEntityMap;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	'use strict';

	var HTMLFromEntityMap = {
	  'lt':    '<',
	  'gt':    '>',
	  'amp':   '&',
	  'nbsp':  ' ',
	  'quot':  '"',
	  'apos':  "'"
	};

	module.exports = HTMLFromEntityMap;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	Sugar.String.defineInstance({

	  'escapeURL': function(str, param) {
	    return param ? encodeURIComponent(str) : encodeURI(str);
	  }

	});

	module.exports = Sugar.String.escapeURL;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    isUndefined = __webpack_require__(60);

	Sugar.String.defineInstance({

	  'first': function(str, num) {
	    if (isUndefined(num)) num = 1;
	    return str.substr(0, num);
	  }

	});

	module.exports = Sugar.String.first;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	'use strict';

	function isUndefined(o) {
	  return o === undefined;
	}

	module.exports = isUndefined;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    stringEach = __webpack_require__(36);

	Sugar.String.defineInstance({

	  'forEach': function(str, search, eachFn) {
	    return stringEach(str, search, eachFn);
	  }

	});

	module.exports = Sugar.String.forEach;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    isObjectType = __webpack_require__(20),
	    stringFormatMatcher = __webpack_require__(63);

	Sugar.String.defineInstanceWithArguments({

	  'format': function(str, args) {
	    var arg1 = args[0] && args[0].valueOf();
	    // Unwrap if a single object is passed in.
	    if (args.length === 1 && isObjectType(arg1)) {
	      args = arg1;
	    }
	    return stringFormatMatcher(str, args);
	  }

	});

	module.exports = Sugar.String.format;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var deepGetProperty = __webpack_require__(64),
	    createFormatMatcher = __webpack_require__(73);

	module.exports = createFormatMatcher(deepGetProperty);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var handleDeepProperty = __webpack_require__(65);

	function deepGetProperty(obj, key, any) {
	  return handleDeepProperty(obj, key, any, false);
	}

	module.exports = deepGetProperty;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var PROPERTY_RANGE_REG = __webpack_require__(66),
	    CommonChars = __webpack_require__(67),
	    map = __webpack_require__(68),
	    isDefined = __webpack_require__(37),
	    classChecks = __webpack_require__(14),
	    periodSplit = __webpack_require__(69),
	    assertArray = __webpack_require__(70),
	    isObjectType = __webpack_require__(20),
	    assertWritable = __webpack_require__(71),
	    coreUtilityAliases = __webpack_require__(17);

	var isString = classChecks.isString,
	    hasOwn = coreUtilityAliases.hasOwn,
	    HALF_WIDTH_PERIOD = CommonChars.HALF_WIDTH_PERIOD;

	function handleDeepProperty(obj, key, any, has, fill, fillLast, val) {
	  var ns, bs, ps, cbi, set, isLast, isPush, isIndex, nextIsIndex, exists;
	  ns = obj;
	  if (key == null) return;

	  if (isObjectType(key)) {
	    // Allow array and array-like accessors
	    bs = [key];
	  } else {
	    key = String(key);
	    if (key.indexOf('..') !== -1) {
	      return handleArrayIndexRange(obj, key, any, val);
	    }
	    bs = key.split('[');
	  }

	  set = isDefined(val);

	  for (var i = 0, blen = bs.length; i < blen; i++) {
	    ps = bs[i];

	    if (isString(ps)) {
	      ps = periodSplit(ps);
	    }

	    for (var j = 0, plen = ps.length; j < plen; j++) {
	      key = ps[j];

	      // Is this the last key?
	      isLast = i === blen - 1 && j === plen - 1;

	      // Index of the closing ]
	      cbi = key.indexOf(']');

	      // Is the key an array index?
	      isIndex = cbi !== -1;

	      // Is this array push syntax "[]"?
	      isPush = set && cbi === 0;

	      // If the bracket split was successful and this is the last element
	      // in the dot split, then we know the next key will be an array index.
	      nextIsIndex = blen > 1 && j === plen - 1;

	      if (isPush) {
	        // Set the index to the end of the array
	        key = ns.length;
	      } else if (isIndex) {
	        // Remove the closing ]
	        key = key.slice(0, -1);
	      }

	      // If the array index is less than 0, then
	      // add its length to allow negative indexes.
	      if (isIndex && key < 0) {
	        key = +key + ns.length;
	      }

	      // Bracket keys may look like users[5] or just [5], so the leading
	      // characters are optional. We can enter the namespace if this is the
	      // 2nd part, if there is only 1 part, or if there is an explicit key.
	      if (i || key || blen === 1) {

	        // TODO: need to be sure this check handles ''.length when
	        // we refactor.
	        exists = any ? key in Object(ns) : hasOwn(ns, key);

	        // Non-existent namespaces are only filled if they are intermediate
	        // (not at the end) or explicitly filling the last.
	        if (fill && (!isLast || fillLast) && !exists) {
	          // For our purposes, last only needs to be an array.
	          ns = ns[key] = nextIsIndex || (fillLast && isLast) ? [] : {};
	          continue;
	        }

	        if (has) {
	          if (isLast || !exists) {
	            return exists;
	          }
	        } else if (set && isLast) {
	          assertWritable(ns);
	          ns[key] = val;
	        }

	        ns = exists ? ns[key] : undefined;
	      }

	    }
	  }
	  return ns;
	}

	function handleArrayIndexRange(obj, key, any, val) {
	  var match, start, end, leading, trailing, arr, set;
	  match = key.match(PROPERTY_RANGE_REG);
	  if (!match) {
	    return;
	  }

	  set = isDefined(val);
	  leading = match[1];

	  if (leading) {
	    arr = handleDeepProperty(obj, leading, any, false, set ? true : false, true);
	  } else {
	    arr = obj;
	  }

	  assertArray(arr);

	  trailing = match[4];
	  start    = match[2] ? +match[2] : 0;
	  end      = match[3] ? +match[3] : arr.length;

	  // A range of 0..1 is inclusive, so we need to add 1 to the end. If this
	  // pushes the index from -1 to 0, then set it to the full length of the
	  // array, otherwise it will return nothing.
	  end = end === -1 ? arr.length : end + 1;

	  if (set) {
	    for (var i = start; i < end; i++) {
	      handleDeepProperty(arr, i + trailing, any, false, true, false, val);
	    }
	  } else {
	    arr = arr.slice(start, end);

	    // If there are trailing properties, then they need to be mapped for each
	    // element in the array.
	    if (trailing) {
	      if (trailing.charAt(0) === HALF_WIDTH_PERIOD) {
	        // Need to chomp the period if one is trailing after the range. We
	        // can't do this at the regex level because it will be required if
	        // we're setting the value as it needs to be concatentated together
	        // with the array index to be set.
	        trailing = trailing.slice(1);
	      }
	      return map(arr, function(el) {
	        return handleDeepProperty(el, trailing);
	      });
	    }
	  }
	  return arr;
	}

	module.exports = handleDeepProperty;

/***/ }),
/* 66 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = /^(.*?)\[([-\d]*)\.\.([-\d]*)\](.*)$/;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	  HALF_WIDTH_ZERO: 0x30,
	  FULL_WIDTH_ZERO: 0xff10,
	  HALF_WIDTH_PERIOD: '.',
	  FULL_WIDTH_PERIOD: '．',
	  HALF_WIDTH_COMMA: ',',
	  OPEN_BRACE: '{',
	  CLOSE_BRACE: '}'
	};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	'use strict';

	function map(arr, fn) {
	  // perf: Not using fixed array len here as it may be sparse.
	  var result = [];
	  for (var i = 0, len = arr.length; i < len; i++) {
	    if (i in arr) {
	      result.push(fn(arr[i], i));
	    }
	  }
	  return result;
	}

	module.exports = map;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var CommonChars = __webpack_require__(67);

	var HALF_WIDTH_PERIOD = CommonChars.HALF_WIDTH_PERIOD;

	function periodSplit(str) {
	  return str.split(HALF_WIDTH_PERIOD);
	}

	module.exports = periodSplit;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classChecks = __webpack_require__(14);

	var isArray = classChecks.isArray;

	function assertArray(obj) {
	  if (!isArray(obj)) {
	    throw new TypeError('Array required');
	  }
	}

	module.exports = assertArray;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var isPrimitive = __webpack_require__(72);

	function assertWritable(obj) {
	  if (isPrimitive(obj)) {
	    // If strict mode is active then primitives will throw an
	    // error when attempting to write properties. We can't be
	    // sure if strict mode is available, so pre-emptively
	    // throw an error here to ensure consistent behavior.
	    throw new TypeError('Property cannot be written');
	  }
	}

	module.exports = assertWritable;

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	'use strict';

	function isPrimitive(obj, type) {
	  type = type || typeof obj;
	  return obj == null || type === 'string' || type === 'number' || type === 'boolean';
	}

	module.exports = isPrimitive;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var STRING_FORMAT_REG = __webpack_require__(74),
	    CommonChars = __webpack_require__(67),
	    memoizeFunction = __webpack_require__(75);

	var OPEN_BRACE = CommonChars.OPEN_BRACE,
	    CLOSE_BRACE = CommonChars.CLOSE_BRACE;

	function createFormatMatcher(bracketMatcher, percentMatcher, precheck) {

	  var reg = STRING_FORMAT_REG;
	  var compileMemoized = memoizeFunction(compile);

	  function getToken(format, match) {
	    var get, token, literal, fn;
	    var bKey = match[2];
	    var pLit = match[3];
	    var pKey = match[5];
	    if (match[4] && percentMatcher) {
	      token = pKey;
	      get = percentMatcher;
	    } else if (bKey) {
	      token = bKey;
	      get = bracketMatcher;
	    } else if (pLit && percentMatcher) {
	      literal = pLit;
	    } else {
	      literal = match[1] || match[0];
	    }
	    if (get) {
	      assertPassesPrecheck(precheck, bKey, pKey);
	      fn = function(obj, opt) {
	        return get(obj, token, opt);
	      };
	    }
	    format.push(fn || getLiteral(literal));
	  }

	  function getSubstring(format, str, start, end) {
	    if (end > start) {
	      var sub = str.slice(start, end);
	      assertNoUnmatched(sub, OPEN_BRACE);
	      assertNoUnmatched(sub, CLOSE_BRACE);
	      format.push(function() {
	        return sub;
	      });
	    }
	  }

	  function getLiteral(str) {
	    return function() {
	      return str;
	    };
	  }

	  function assertPassesPrecheck(precheck, bt, pt) {
	    if (precheck && !precheck(bt, pt)) {
	      throw new TypeError('Invalid token '+ (bt || pt) +' in format string');
	    }
	  }

	  function assertNoUnmatched(str, chr) {
	    if (str.indexOf(chr) !== -1) {
	      throw new TypeError('Unmatched '+ chr +' in format string');
	    }
	  }

	  function compile(str) {
	    var format = [], lastIndex = 0, match;
	    reg.lastIndex = 0;
	    while(match = reg.exec(str)) {
	      getSubstring(format, str, lastIndex, match.index);
	      getToken(format, match);
	      lastIndex = reg.lastIndex;
	    }
	    getSubstring(format, str, lastIndex, str.length);
	    return format;
	  }

	  return function(str, obj, opt) {
	    var format = compileMemoized(str), result = '';
	    for (var i = 0; i < format.length; i++) {
	      result += format[i](obj, opt);
	    }
	    return result;
	  };
	}

	module.exports = createFormatMatcher;

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = /([{}])\1|{([^}]*)}|(%)%|(%(\w*))/g;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var INTERNAL_MEMOIZE_LIMIT = __webpack_require__(76),
	    coreUtilityAliases = __webpack_require__(17);

	var hasOwn = coreUtilityAliases.hasOwn;

	function memoizeFunction(fn) {
	  var memo = {}, counter = 0;

	  return function(key) {
	    if (hasOwn(memo, key)) {
	      return memo[key];
	    }
	    // istanbul ignore if
	    if (counter === INTERNAL_MEMOIZE_LIMIT) {
	      memo = {};
	      counter = 0;
	    }
	    counter++;
	    return memo[key] = fn(key);
	  };
	}

	module.exports = memoizeFunction;

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = 1000;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    numberOrIndex = __webpack_require__(78);

	Sugar.String.defineInstance({

	  'from': function(str, from) {
	    return str.slice(numberOrIndex(str, from, true));
	  }

	});

	module.exports = Sugar.String.from;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classChecks = __webpack_require__(14);

	var isString = classChecks.isString;

	function numberOrIndex(str, n, from) {
	  if (isString(n)) {
	    n = str.indexOf(n);
	    if (n === -1) {
	      n = from ? str.length : 0;
	    }
	  }
	  return n;
	}

	module.exports = numberOrIndex;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    ENHANCEMENTS_FLAG = __webpack_require__(80),
	    STRING_ENHANCEMENTS_FLAG = __webpack_require__(81),
	    fixArgumentLength = __webpack_require__(82),
	    callIncludesWithRegexSupport = __webpack_require__(83);

	Sugar.String.defineInstance({

	  'includes': fixArgumentLength(callIncludesWithRegexSupport)

	}, [ENHANCEMENTS_FLAG, STRING_ENHANCEMENTS_FLAG]);

	module.exports = Sugar.String.includes;

/***/ }),
/* 80 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = 'enhance';

/***/ }),
/* 81 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = 'enhanceString';

/***/ }),
/* 82 */
/***/ (function(module, exports) {

	'use strict';

	function fixArgumentLength(fn) {
	  var staticFn = function(a) {
	    var args = arguments;
	    return fn(a, args[1], args[2], args.length - 1);
	  };
	  staticFn.instance = function(b) {
	    var args = arguments;
	    return fn(this, b, args[1], args.length);
	  };
	  return staticFn;
	}

	module.exports = fixArgumentLength;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classChecks = __webpack_require__(14),
	    nativeIncludes = __webpack_require__(84);

	var isRegExp = classChecks.isRegExp;

	function callIncludesWithRegexSupport(str, search, position) {
	  if (!isRegExp(search)) {
	    return nativeIncludes.call(str, search, position);
	  }
	  if (position) {
	    str = str.slice(position);
	  }
	  return search.test(str);
	}

	module.exports = callIncludesWithRegexSupport;

/***/ }),
/* 84 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = String.prototype.includes;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    isUndefined = __webpack_require__(60);

	Sugar.String.defineInstance({

	  'insert': function(str, substr, index) {
	    index = isUndefined(index) ? str.length : index;
	    return str.slice(0, index) + substr + str.slice(index);
	  }

	});

	module.exports = Sugar.String.insert;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    trim = __webpack_require__(44);

	Sugar.String.defineInstance({

	  'isBlank': function(str) {
	    return trim(str).length === 0;
	  }

	});

	module.exports = Sugar.String.isBlank;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	Sugar.String.defineInstance({

	  'isEmpty': function(str) {
	    return str.length === 0;
	  }

	});

	module.exports = Sugar.String.isEmpty;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    isUndefined = __webpack_require__(60);

	Sugar.String.defineInstance({

	  'last': function(str, num) {
	    if (isUndefined(num)) num = 1;
	    var start = str.length - num < 0 ? 0 : str.length - num;
	    return str.substr(start);
	  }

	});

	module.exports = Sugar.String.last;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    trim = __webpack_require__(44),
	    stringEach = __webpack_require__(36);

	Sugar.String.defineInstance({

	  'lines': function(str, eachLineFn) {
	    return stringEach(trim(str), /^.*$/gm, eachLineFn);
	  }

	});

	module.exports = Sugar.String.lines;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    padString = __webpack_require__(91),
	    mathAliases = __webpack_require__(93),
	    coercePositiveInteger = __webpack_require__(94);

	var max = mathAliases.max,
	    ceil = mathAliases.ceil,
	    floor = mathAliases.floor;

	Sugar.String.defineInstance({

	  'pad': function(str, num, padding) {
	    var half, front, back;
	    num   = coercePositiveInteger(num);
	    half  = max(0, num - str.length) / 2;
	    front = floor(half);
	    back  = ceil(half);
	    return padString(front, padding) + str + padString(back, padding);
	  }

	});

	module.exports = Sugar.String.pad;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var isDefined = __webpack_require__(37),
	    repeatString = __webpack_require__(92);

	function padString(num, padding) {
	  return repeatString(isDefined(padding) ? padding : ' ', num);
	}

	module.exports = padString;

/***/ }),
/* 92 */
/***/ (function(module, exports) {

	'use strict';

	function repeatString(str, num) {
	  var result = '';
	  str = str.toString();
	  while (num > 0) {
	    if (num & 1) {
	      result += str;
	    }
	    if (num >>= 1) {
	      str += str;
	    }
	  }
	  return result;
	}

	module.exports = repeatString;

/***/ }),
/* 93 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	  abs: Math.abs,
	  pow: Math.pow,
	  min: Math.min,
	  max: Math.max,
	  ceil: Math.ceil,
	  floor: Math.floor,
	  round: Math.round
	};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var trunc = __webpack_require__(95),
	    classChecks = __webpack_require__(14);

	var isNumber = classChecks.isNumber;

	function coercePositiveInteger(n) {
	  n = +n || 0;
	  if (n < 0 || !isNumber(n) || !isFinite(n)) {
	    throw new RangeError('Invalid number');
	  }
	  return trunc(n);
	}

	module.exports = coercePositiveInteger;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var mathAliases = __webpack_require__(93);

	var ceil = mathAliases.ceil,
	    floor = mathAliases.floor;

	var trunc = Math.trunc || function(n) {
	  if (n === 0 || !isFinite(n)) return n;
	  return n < 0 ? ceil(n) : floor(n);
	};

	module.exports = trunc;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    padString = __webpack_require__(91),
	    mathAliases = __webpack_require__(93),
	    coercePositiveInteger = __webpack_require__(94);

	var max = mathAliases.max;

	Sugar.String.defineInstance({

	  'padLeft': function(str, num, padding) {
	    num = coercePositiveInteger(num);
	    return padString(max(0, num - str.length), padding) + str;
	  }

	});

	module.exports = Sugar.String.padLeft;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    padString = __webpack_require__(91),
	    mathAliases = __webpack_require__(93),
	    coercePositiveInteger = __webpack_require__(94);

	var max = mathAliases.max;

	Sugar.String.defineInstance({

	  'padRight': function(str, num, padding) {
	    num = coercePositiveInteger(num);
	    return str + padString(max(0, num - str.length), padding);
	  }

	});

	module.exports = Sugar.String.padRight;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    stringParameterize = __webpack_require__(99);

	Sugar.String.defineInstance({

	  'parameterize': function(str, separator) {
	    return stringParameterize(str, separator);
	  }

	});

	module.exports = Sugar.String.parameterize;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var escapeRegExp = __webpack_require__(38);

	function stringParameterize(str, separator) {
	  if (separator === undefined) separator = '-';
	  str = str.replace(/[^a-z0-9\-_]+/gi, separator);
	  if (separator) {
	    var reg = RegExp('^{s}+|{s}+$|({s}){s}+'.split('{s}').join(escapeRegExp(separator)), 'g');
	    str = str.replace(reg, '$1');
	  }
	  return encodeURI(str.toLowerCase());
	}

	module.exports = stringParameterize;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	Sugar.String.defineInstance({

	  'remove': function(str, f) {
	    return str.replace(f, '');
	  }

	});

	module.exports = Sugar.String.remove;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    stringReplaceAll = __webpack_require__(102);

	Sugar.String.defineInstance({

	  'removeAll': function(str, f) {
	    return stringReplaceAll(str, f);
	  }

	});

	module.exports = Sugar.String.removeAll;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classChecks = __webpack_require__(14),
	    escapeRegExp = __webpack_require__(38),
	    getRegExpFlags = __webpack_require__(39);

	var isString = classChecks.isString;

	function stringReplaceAll(str, f, replace) {
	  var i = 0, tokens;
	  if (isString(f)) {
	    f = RegExp(escapeRegExp(f), 'g');
	  } else if (f && !f.global) {
	    f = RegExp(f.source, getRegExpFlags(f, 'g'));
	  }
	  if (!replace) {
	    replace = '';
	  } else {
	    tokens = replace;
	    replace = function() {
	      var t = tokens[i++];
	      return t != null ? t : '';
	    };
	  }
	  return str.replace(f, replace);
	}

	module.exports = stringReplaceAll;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    replaceTags = __webpack_require__(104);

	Sugar.String.defineInstance({

	  'removeTags': function(str, tag, replace) {
	    return replaceTags(str, tag, replace, false);
	  }

	});

	module.exports = Sugar.String.removeTags;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var map = __webpack_require__(68),
	    classChecks = __webpack_require__(14),
	    escapeRegExp = __webpack_require__(38),
	    runTagReplacements = __webpack_require__(105);

	var isString = classChecks.isString;

	function replaceTags(str, find, replacement, strip) {
	  var tags = isString(find) ? [find] : find, reg, src;
	  tags = map(tags || [], function(t) {
	    return escapeRegExp(t);
	  }).join('|');
	  src = tags.replace('all', '') || '[^\\s>]+';
	  src = '<(\\/)?(' + src + ')(\\s+[^<>]*?)?\\s*(\\/)?>';
	  reg = RegExp(src, 'gi');
	  return runTagReplacements(str.toString(), reg, strip, replacement);
	}

	module.exports = replaceTags;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var tagIsVoid = __webpack_require__(106),
	    classChecks = __webpack_require__(14);

	var isString = classChecks.isString;

	function runTagReplacements(str, reg, strip, replacement, fullString) {

	  var match;
	  var result = '';
	  var currentIndex = 0;
	  var openTagName;
	  var openTagAttributes;
	  var openTagCount = 0;

	  function processTag(index, tagName, attributes, tagLength, isVoid) {
	    var content = str.slice(currentIndex, index), s = '', r = '';
	    if (isString(replacement)) {
	      r = replacement;
	    } else if (replacement) {
	      r = replacement.call(fullString, tagName, content, attributes, fullString) || '';
	    }
	    if (strip) {
	      s = r;
	    } else {
	      content = r;
	    }
	    if (content) {
	      content = runTagReplacements(content, reg, strip, replacement, fullString);
	    }
	    result += s + content + (isVoid ? '' : s);
	    currentIndex = index + (tagLength || 0);
	  }

	  fullString = fullString || str;
	  reg = RegExp(reg.source, 'gi');

	  while(match = reg.exec(str)) {

	    var tagName         = match[2];
	    var attributes      = (match[3]|| '').slice(1);
	    var isClosingTag    = !!match[1];
	    var isSelfClosing   = !!match[4];
	    var tagLength       = match[0].length;
	    var isVoid          = tagIsVoid(tagName);
	    var isOpeningTag    = !isClosingTag && !isSelfClosing && !isVoid;
	    var isSameAsCurrent = tagName === openTagName;

	    if (!openTagName) {
	      result += str.slice(currentIndex, match.index);
	      currentIndex = match.index;
	    }

	    if (isOpeningTag) {
	      if (!openTagName) {
	        openTagName = tagName;
	        openTagAttributes = attributes;
	        openTagCount++;
	        currentIndex += tagLength;
	      } else if (isSameAsCurrent) {
	        openTagCount++;
	      }
	    } else if (isClosingTag && isSameAsCurrent) {
	      openTagCount--;
	      if (openTagCount === 0) {
	        processTag(match.index, openTagName, openTagAttributes, tagLength, isVoid);
	        openTagName       = null;
	        openTagAttributes = null;
	      }
	    } else if (!openTagName) {
	      processTag(match.index, tagName, attributes, tagLength, isVoid);
	    }
	  }
	  if (openTagName) {
	    processTag(str.length, openTagName, openTagAttributes);
	  }
	  result += str.slice(currentIndex);
	  return result;
	}

	module.exports = runTagReplacements;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var HTML_VOID_ELEMENTS = __webpack_require__(107),
	    indexOf = __webpack_require__(108);

	function tagIsVoid(tag) {
	  return indexOf(HTML_VOID_ELEMENTS, tag.toLowerCase()) !== -1;
	}

	module.exports = tagIsVoid;

/***/ }),
/* 107 */
/***/ (function(module, exports) {

	'use strict';

	var HTML_VOID_ELEMENTS = [
	  'area','base','br','col','command','embed','hr','img',
	  'input','keygen','link','meta','param','source','track','wbr'
	];

	module.exports = HTML_VOID_ELEMENTS;

/***/ }),
/* 108 */
/***/ (function(module, exports) {

	'use strict';

	function indexOf(arr, el) {
	  for (var i = 0, len = arr.length; i < len; i++) {
	    if (i in arr && arr[i] === el) return i;
	  }
	  return -1;
	}

	module.exports = indexOf;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    stringReplaceAll = __webpack_require__(102);

	Sugar.String.defineInstanceWithArguments({

	  'replaceAll': function(str, f, args) {
	    return stringReplaceAll(str, f, args);
	  }

	});

	module.exports = Sugar.String.replaceAll;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    reverseString = __webpack_require__(111);

	Sugar.String.defineInstance({

	  'reverse': function(str) {
	    return reverseString(str);
	  }

	});

	module.exports = Sugar.String.reverse;

/***/ }),
/* 111 */
/***/ (function(module, exports) {

	'use strict';

	function reverseString(str) {
	  return str.split('').reverse().join('');
	}

	module.exports = reverseString;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    chr = __webpack_require__(52),
	    stringCodes = __webpack_require__(42);

	Sugar.String.defineInstance({

	  'shift': function(str, n) {
	    var result = '';
	    n = n || 0;
	    stringCodes(str, function(c) {
	      result += chr(c + n);
	    });
	    return result;
	  }

	});

	module.exports = Sugar.String.shift;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    stringSpacify = __webpack_require__(114);

	Sugar.String.defineInstance({

	  'spacify': function(str) {
	    return stringSpacify(str);
	  }

	});

	module.exports = Sugar.String.spacify;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var stringUnderscore = __webpack_require__(30);

	function stringSpacify(str) {
	  return stringUnderscore(str).replace(/_/g, ' ');
	}

	module.exports = stringSpacify;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    replaceTags = __webpack_require__(104);

	Sugar.String.defineInstance({

	  'stripTags': function(str, tag, replace) {
	    return replaceTags(str, tag, replace, true);
	  }

	});

	module.exports = Sugar.String.stripTags;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    stringTitleize = __webpack_require__(117);

	Sugar.String.defineInstance({

	  'titleize': function(str) {
	    return stringTitleize(str);
	  }

	});

	module.exports = Sugar.String.titleize;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var DOWNCASED_WORDS = __webpack_require__(118),
	    indexOf = __webpack_require__(108),
	    eachWord = __webpack_require__(119),
	    getAcronym = __webpack_require__(28),
	    getHumanWord = __webpack_require__(120),
	    runHumanRules = __webpack_require__(121),
	    stringSpacify = __webpack_require__(114),
	    stringCapitalize = __webpack_require__(31);

	function stringTitleize(str) {
	  var fullStopPunctuation = /[.:;!]$/, lastHadPunctuation;
	  str = runHumanRules(str);
	  str = stringSpacify(str);
	  return eachWord(str, function(word, index, words) {
	    word = getHumanWord(word) || word;
	    word = getAcronym(word) || word;
	    var hasPunctuation, isFirstOrLast;
	    var first = index == 0, last = index == words.length - 1;
	    hasPunctuation = fullStopPunctuation.test(word);
	    isFirstOrLast = first || last || hasPunctuation || lastHadPunctuation;
	    lastHadPunctuation = hasPunctuation;
	    if (isFirstOrLast || indexOf(DOWNCASED_WORDS, word) === -1) {
	      return stringCapitalize(word, false, true);
	    } else {
	      return word;
	    }
	  }).join(' ');
	}

	module.exports = stringTitleize;

/***/ }),
/* 118 */
/***/ (function(module, exports) {

	'use strict';

	var DOWNCASED_WORDS = [
	  'and', 'or', 'nor', 'a', 'an', 'the', 'so', 'but', 'to', 'of', 'at',
	  'by', 'from', 'into', 'on', 'onto', 'off', 'out', 'in', 'over',
	  'with', 'for'
	];

	module.exports = DOWNCASED_WORDS;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var trim = __webpack_require__(44),
	    stringEach = __webpack_require__(36);

	function eachWord(str, fn) {
	  return stringEach(trim(str), /\S+/g, fn);
	}

	module.exports = eachWord;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Inflections = __webpack_require__(29);

	function getHumanWord(str) {
	  // istanbul ignore next
	  return Inflections.human && Inflections.human.find(str);
	}

	module.exports = getHumanWord;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Inflections = __webpack_require__(29);

	function runHumanRules(str) {
	  // istanbul ignore next
	  return Inflections.human && Inflections.human.runRules(str) || str;
	}

	module.exports = runHumanRules;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    isUndefined = __webpack_require__(60),
	    numberOrIndex = __webpack_require__(78);

	Sugar.String.defineInstance({

	  'to': function(str, to) {
	    if (isUndefined(to)) to = str.length;
	    return str.slice(0, numberOrIndex(str, to));
	  }

	});

	module.exports = Sugar.String.to;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    stringToNumber = __webpack_require__(124);

	Sugar.String.defineInstance({

	  'toNumber': function(str, base) {
	    return stringToNumber(str, base);
	  }

	});

	module.exports = Sugar.String.toNumber;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var CommonChars = __webpack_require__(67),
	    coreUtilityAliases = __webpack_require__(17),
	    fullwidthNumberHelpers = __webpack_require__(125);

	var fullWidthNumberReg = fullwidthNumberHelpers.fullWidthNumberReg,
	    fullWidthNumberMap = fullwidthNumberHelpers.fullWidthNumberMap,
	    getOwn = coreUtilityAliases.getOwn,
	    HALF_WIDTH_PERIOD = CommonChars.HALF_WIDTH_PERIOD;

	function stringToNumber(str, base) {
	  var sanitized, isDecimal;
	  sanitized = str.replace(fullWidthNumberReg, function(chr) {
	    var replacement = getOwn(fullWidthNumberMap, chr);
	    if (replacement === HALF_WIDTH_PERIOD) {
	      isDecimal = true;
	    }
	    return replacement;
	  });
	  return isDecimal ? parseFloat(sanitized) : parseInt(sanitized, base || 10);
	}

	module.exports = stringToNumber;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var CommonChars = __webpack_require__(67),
	    chr = __webpack_require__(52),
	    allCharsReg = __webpack_require__(126);

	var HALF_WIDTH_ZERO = CommonChars.HALF_WIDTH_ZERO,
	    FULL_WIDTH_ZERO = CommonChars.FULL_WIDTH_ZERO,
	    HALF_WIDTH_PERIOD = CommonChars.HALF_WIDTH_PERIOD,
	    FULL_WIDTH_PERIOD = CommonChars.FULL_WIDTH_PERIOD,
	    HALF_WIDTH_COMMA = CommonChars.HALF_WIDTH_COMMA;

	var fullWidthNumberReg, fullWidthNumberMap, fullWidthNumbers;

	function buildFullWidthNumber() {
	  var fwp = FULL_WIDTH_PERIOD, hwp = HALF_WIDTH_PERIOD, hwc = HALF_WIDTH_COMMA, fwn = '';
	  fullWidthNumberMap = {};
	  for (var i = 0, digit; i <= 9; i++) {
	    digit = chr(i + FULL_WIDTH_ZERO);
	    fwn += digit;
	    fullWidthNumberMap[digit] = chr(i + HALF_WIDTH_ZERO);
	  }
	  fullWidthNumberMap[hwc] = '';
	  fullWidthNumberMap[fwp] = hwp;
	  // Mapping this to itself to capture it easily
	  // in stringToNumber to detect decimals later.
	  fullWidthNumberMap[hwp] = hwp;
	  fullWidthNumberReg = allCharsReg(fwn + fwp + hwc + hwp);
	  fullWidthNumbers = fwn;
	}

	buildFullWidthNumber();

	module.exports = {
	  fullWidthNumberReg: fullWidthNumberReg,
	  fullWidthNumberMap: fullWidthNumberMap,
	  fullWidthNumbers: fullWidthNumbers
	};

/***/ }),
/* 126 */
/***/ (function(module, exports) {

	'use strict';

	function allCharsReg(src) {
	  return RegExp('[' + src + ']', 'g');
	}

	module.exports = allCharsReg;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    LEFT_TRIM_REG = __webpack_require__(128);

	Sugar.String.defineInstance({

	  'trimLeft': function(str) {
	    return str.replace(LEFT_TRIM_REG, '');
	  }

	});

	module.exports = Sugar.String.trimLeft;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var TRIM_CHARS = __webpack_require__(129);

	module.exports = RegExp('^['+ TRIM_CHARS +']+');

/***/ }),
/* 129 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u2028\u2029\u3000\uFEFF';

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    RIGHT_TRIM_REG = __webpack_require__(131);

	Sugar.String.defineInstance({

	  'trimRight': function(str) {
	    return str.replace(RIGHT_TRIM_REG, '');
	  }

	});

	module.exports = Sugar.String.trimRight;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var TRIM_CHARS = __webpack_require__(129);

	module.exports = RegExp('['+ TRIM_CHARS +']+$');

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    truncateString = __webpack_require__(133);

	Sugar.String.defineInstance({

	  'truncate': function(str, length, from, ellipsis) {
	    return truncateString(str, length, from, ellipsis);
	  }

	});

	module.exports = Sugar.String.truncate;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var isUndefined = __webpack_require__(60),
	    mathAliases = __webpack_require__(93),
	    truncateOnWord = __webpack_require__(134);

	var ceil = mathAliases.ceil,
	    floor = mathAliases.floor;

	function truncateString(str, length, from, ellipsis, split) {
	  var str1, str2, len1, len2;
	  if (str.length <= length) {
	    return str.toString();
	  }
	  ellipsis = isUndefined(ellipsis) ? '...' : ellipsis;
	  switch(from) {
	    case 'left':
	      str2 = split ? truncateOnWord(str, length, true) : str.slice(str.length - length);
	      return ellipsis + str2;
	    case 'middle':
	      len1 = ceil(length / 2);
	      len2 = floor(length / 2);
	      str1 = split ? truncateOnWord(str, len1) : str.slice(0, len1);
	      str2 = split ? truncateOnWord(str, len2, true) : str.slice(str.length - len2);
	      return str1 + ellipsis + str2;
	    default:
	      str1 = split ? truncateOnWord(str, length) : str.slice(0, length);
	      return str1 + ellipsis;
	  }
	}

	module.exports = truncateString;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var TRUNC_REG = __webpack_require__(135),
	    filter = __webpack_require__(136),
	    reverseString = __webpack_require__(111);

	function truncateOnWord(str, limit, fromLeft) {
	  if (fromLeft) {
	    return reverseString(truncateOnWord(reverseString(str), limit));
	  }
	  var words = str.split(TRUNC_REG);
	  var count = 0;
	  return filter(words, function(word) {
	    count += word.length;
	    return count <= limit;
	  }).join('');
	}

	module.exports = truncateOnWord;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var TRIM_CHARS = __webpack_require__(129);

	module.exports = RegExp('(?=[' + TRIM_CHARS + '])');

/***/ }),
/* 136 */
/***/ (function(module, exports) {

	'use strict';

	function filter(arr, fn) {
	  var result = [];
	  for (var i = 0, len = arr.length; i < len; i++) {
	    var el = arr[i];
	    if (i in arr && fn(el, i)) {
	      result.push(el);
	    }
	  }
	  return result;
	}

	module.exports = filter;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    truncateString = __webpack_require__(133);

	Sugar.String.defineInstance({

	  'truncateOnWord': function(str, length, from, ellipsis) {
	    return truncateString(str, length, from, ellipsis, true);
	  }

	});

	module.exports = Sugar.String.truncateOnWord;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    stringUnderscore = __webpack_require__(30);

	Sugar.String.defineInstance({

	  'underscore': function(str) {
	    return stringUnderscore(str);
	  }

	});

	module.exports = Sugar.String.underscore;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    unescapeHTML = __webpack_require__(140);

	Sugar.String.defineInstance({

	  'unescapeHTML': function(str) {
	    return unescapeHTML(str);
	  }

	});

	module.exports = Sugar.String.unescapeHTML;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var HTML_ENTITY_REG = __webpack_require__(141),
	    HTMLFromEntityMap = __webpack_require__(57),
	    chr = __webpack_require__(52);

	function unescapeHTML(str) {
	  return str.replace(HTML_ENTITY_REG, function(full, hex, code) {
	    var special = HTMLFromEntityMap[code];
	    return special || chr(hex ? parseInt(code, 16) : +code);
	  });
	}

	module.exports = unescapeHTML;

/***/ }),
/* 141 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = /&#?(x)?([\w\d]{0,5});/gi;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	Sugar.String.defineInstance({

	  'unescapeURL': function(str, param) {
	    return param ? decodeURI(str) : decodeURIComponent(str);
	  }

	});

	module.exports = Sugar.String.unescapeURL;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    trim = __webpack_require__(44),
	    stringEach = __webpack_require__(36);

	Sugar.String.defineInstance({

	  'words': function(str, eachWordFn) {
	    return stringEach(trim(str), /\S+/g, eachWordFn);
	  }

	});

	module.exports = Sugar.String.words;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// Static Methods
	__webpack_require__(145);

	// Instance Methods
	__webpack_require__(146);
	__webpack_require__(159);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(168);
	__webpack_require__(169);
	__webpack_require__(170);
	__webpack_require__(172);
	__webpack_require__(173);
	__webpack_require__(174);
	__webpack_require__(175);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(179);
	__webpack_require__(181);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(185);
	__webpack_require__(186);
	__webpack_require__(187);
	__webpack_require__(189);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(192);
	__webpack_require__(193);
	__webpack_require__(194);
	__webpack_require__(195);
	__webpack_require__(196);

	// Accessors
	__webpack_require__(197);
	__webpack_require__(198);

	module.exports = __webpack_require__(8);

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    trunc = __webpack_require__(95),
	    mathAliases = __webpack_require__(93),
	    isUndefined = __webpack_require__(60);

	var min = mathAliases.min,
	    max = mathAliases.max;

	Sugar.Number.defineStatic({

	  'random': function(n1, n2) {
	    var minNum, maxNum;
	    if (arguments.length == 1) n2 = n1, n1 = 0;
	    minNum = min(n1 || 0, isUndefined(n2) ? 1 : n2);
	    maxNum = max(n1 || 0, isUndefined(n2) ? 1 : n2) + 1;
	    return trunc((Math.random() * (maxNum - minNum)) + minNum);
	  }

	});

	module.exports = Sugar.Number.random;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    AbbreviationUnits = __webpack_require__(147),
	    abbreviateNumber = __webpack_require__(148);

	var BASIC_UNITS = AbbreviationUnits.BASIC_UNITS;

	Sugar.Number.defineInstance({

	  'abbr': function(n, precision) {
	    return abbreviateNumber(n, precision, BASIC_UNITS);
	  }

	});

	module.exports = Sugar.Number.abbr;

/***/ }),
/* 147 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	  BASIC_UNITS: '|kmbt',
	  MEMORY_UNITS: '|KMGTPE',
	  MEMORY_BINARY_UNITS: '|,Ki,Mi,Gi,Ti,Pi,Ei',
	  METRIC_UNITS_SHORT: 'nμm|k',
	  METRIC_UNITS_FULL: 'yzafpnμm|KMGTPEZY'
	};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var commaSplit = __webpack_require__(149),
	    mathAliases = __webpack_require__(93),
	    numberFormat = __webpack_require__(150),
	    withPrecision = __webpack_require__(151);

	var abs = mathAliases.abs,
	    pow = mathAliases.pow,
	    min = mathAliases.min,
	    max = mathAliases.max,
	    floor = mathAliases.floor;

	function abbreviateNumber(num, precision, ustr, bytes) {
	  var fixed        = num.toFixed(20),
	      decimalPlace = fixed.search(/\./),
	      numeralPlace = fixed.search(/[1-9]/),
	      significant  = decimalPlace - numeralPlace,
	      units, unit, mid, i, divisor;
	  if (significant > 0) {
	    significant -= 1;
	  }
	  units = commaSplit(ustr);
	  if (units.length === 1) {
	    units = ustr.split('');
	  }
	  mid = units.indexOf('|');
	  if (mid === -1) {
	    // Skipping the placeholder means the units should start from zero,
	    // otherwise assume they end at zero.
	    mid = units[0] === '_' ? 0 : units.length;
	  }
	  i = max(min(floor(significant / 3), units.length - mid - 1), -mid);
	  unit = units[i + mid];
	  while (unit === '_') {
	    i += i < 0 ? -1 : 1;
	    unit = units[i + mid];
	  }
	  if (unit === '|') {
	    unit = '';
	  }
	  if (significant < -9) {
	    precision = abs(significant) - 9;
	  }
	  divisor = bytes ? pow(2, 10 * i) : pow(10, i * 3);
	  return numberFormat(withPrecision(num / divisor, precision || 0)) + unit;
	}

	module.exports = abbreviateNumber;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var CommonChars = __webpack_require__(67);

	var HALF_WIDTH_COMMA = CommonChars.HALF_WIDTH_COMMA;

	function commaSplit(str) {
	  return str.split(HALF_WIDTH_COMMA);
	}

	module.exports = commaSplit;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classChecks = __webpack_require__(14),
	    mathAliases = __webpack_require__(93),
	    periodSplit = __webpack_require__(69),
	    repeatString = __webpack_require__(92),
	    withPrecision = __webpack_require__(151),
	    _numberOptions = __webpack_require__(152);

	var isNumber = classChecks.isNumber,
	    max = mathAliases.max;

	function numberFormat(num, place) {
	  var result = '', thousands, decimal, fraction, integer, split, str;

	  decimal   = _numberOptions('decimal');
	  thousands = _numberOptions('thousands');

	  if (isNumber(place)) {
	    str = withPrecision(num, place || 0).toFixed(max(place, 0));
	  } else {
	    str = num.toString();
	  }

	  str = str.replace(/^-/, '');
	  split    = periodSplit(str);
	  integer  = split[0];
	  fraction = split[1];
	  if (/e/.test(str)) {
	    result = str;
	  } else {
	    for(var i = integer.length; i > 0; i -= 3) {
	      if (i < integer.length) {
	        result = thousands + result;
	      }
	      result = integer.slice(max(0, i - 3), i) + result;
	    }
	  }
	  if (fraction) {
	    result += decimal + repeatString('0', (place || 0) - fraction.length) + fraction;
	  }
	  return (num < 0 ? '-' : '') + result;
	}

	module.exports = numberFormat;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var mathAliases = __webpack_require__(93);

	var abs = mathAliases.abs,
	    pow = mathAliases.pow,
	    round = mathAliases.round;

	function withPrecision(val, precision, fn) {
	  var multiplier = pow(10, abs(precision || 0));
	  fn = fn || round;
	  if (precision < 0) multiplier = 1 / multiplier;
	  return fn(val * multiplier) / multiplier;
	}

	module.exports = withPrecision;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var NUMBER_OPTIONS = __webpack_require__(153),
	    namespaceAliases = __webpack_require__(154),
	    defineOptionsAccessor = __webpack_require__(155);

	var sugarNumber = namespaceAliases.sugarNumber;

	module.exports = defineOptionsAccessor(sugarNumber, NUMBER_OPTIONS);

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var CommonChars = __webpack_require__(67);

	var HALF_WIDTH_PERIOD = CommonChars.HALF_WIDTH_PERIOD,
	    HALF_WIDTH_COMMA = CommonChars.HALF_WIDTH_COMMA;

	var NUMBER_OPTIONS = {
	  'decimal': HALF_WIDTH_PERIOD,
	  'thousands': HALF_WIDTH_COMMA
	};

	module.exports = NUMBER_OPTIONS;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	module.exports = {
	  sugarObject: Sugar.Object,
	  sugarArray: Sugar.Array,
	  sugarDate: Sugar.Date,
	  sugarString: Sugar.String,
	  sugarNumber: Sugar.Number,
	  sugarFunction: Sugar.Function,
	  sugarRegExp: Sugar.RegExp
	};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var simpleClone = __webpack_require__(156),
	    defineAccessor = __webpack_require__(158),
	    coreUtilityAliases = __webpack_require__(17);

	var forEachProperty = coreUtilityAliases.forEachProperty;

	function defineOptionsAccessor(namespace, defaults) {
	  var obj = simpleClone(defaults);

	  function getOption(name) {
	    return obj[name];
	  }

	  function setOption(arg1, arg2) {
	    var options;
	    if (arguments.length === 1) {
	      options = arg1;
	    } else {
	      options = {};
	      options[arg1] = arg2;
	    }
	    forEachProperty(options, function(val, name) {
	      if (val === null) {
	        val = defaults[name];
	      }
	      obj[name] = val;
	    });
	  }

	  defineAccessor(namespace, 'getOption', getOption);
	  defineAccessor(namespace, 'setOption', setOption);
	  return getOption;
	}

	module.exports = defineOptionsAccessor;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var simpleMerge = __webpack_require__(157);

	function simpleClone(obj) {
	  return simpleMerge({}, obj);
	}

	module.exports = simpleClone;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var coreUtilityAliases = __webpack_require__(17);

	var forEachProperty = coreUtilityAliases.forEachProperty;

	function simpleMerge(target, source) {
	  forEachProperty(source, function(val, key) {
	    target[key] = val;
	  });
	  return target;
	}

	module.exports = simpleMerge;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var coreUtilityAliases = __webpack_require__(17);

	var setProperty = coreUtilityAliases.setProperty;

	function defineAccessor(namespace, name, fn) {
	  setProperty(namespace, name, fn);
	}

	module.exports = defineAccessor;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(160);

	module.exports = Sugar.Number.abs;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var buildMathAliases = __webpack_require__(161);

	buildMathAliases();

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var namespaceAliases = __webpack_require__(154),
	    defineInstanceSimilar = __webpack_require__(162);

	var sugarNumber = namespaceAliases.sugarNumber;

	function buildMathAliases() {
	  defineInstanceSimilar(sugarNumber, 'abs pow sin asin cos acos tan atan exp pow sqrt', function(methods, name) {
	    methods[name] = function(n, arg) {
	      // Note that .valueOf() here is only required due to a
	      // very strange bug in iOS7 that only occurs occasionally
	      // in which Math.abs() called on non-primitive numbers
	      // returns a completely different number (Issue #400)
	      return Math[name](n.valueOf(), arg);
	    };
	  });
	}

	module.exports = buildMathAliases;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var methodDefineAliases = __webpack_require__(163),
	    collectSimilarMethods = __webpack_require__(165);

	var defineInstance = methodDefineAliases.defineInstance;

	function defineInstanceSimilar(sugarNamespace, set, fn, flags) {
	  defineInstance(sugarNamespace, collectSimilarMethods(set, fn), flags);
	}

	module.exports = defineInstanceSimilar;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var wrapNamespace = __webpack_require__(164);

	module.exports = {
	  alias: wrapNamespace('alias'),
	  defineStatic: wrapNamespace('defineStatic'),
	  defineInstance: wrapNamespace('defineInstance'),
	  defineStaticPolyfill: wrapNamespace('defineStaticPolyfill'),
	  defineInstancePolyfill: wrapNamespace('defineInstancePolyfill'),
	  defineInstanceAndStatic: wrapNamespace('defineInstanceAndStatic'),
	  defineInstanceWithArguments: wrapNamespace('defineInstanceWithArguments')
	};

/***/ }),
/* 164 */
/***/ (function(module, exports) {

	'use strict';

	function wrapNamespace(method) {
	  return function(sugarNamespace, arg1, arg2) {
	    sugarNamespace[method](arg1, arg2);
	  };
	}

	module.exports = wrapNamespace;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var forEach = __webpack_require__(10),
	    spaceSplit = __webpack_require__(18),
	    classChecks = __webpack_require__(14);

	var isString = classChecks.isString;

	function collectSimilarMethods(set, fn) {
	  var methods = {};
	  if (isString(set)) {
	    set = spaceSplit(set);
	  }
	  forEach(set, function(el, i) {
	    fn(methods, el, i);
	  });
	  return methods;
	}

	module.exports = collectSimilarMethods;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(160);

	module.exports = Sugar.Number.acos;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(160);

	module.exports = Sugar.Number.asin;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(160);

	module.exports = Sugar.Number.atan;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    AbbreviationUnits = __webpack_require__(147),
	    abbreviateNumber = __webpack_require__(148);

	var MEMORY_UNITS = AbbreviationUnits.MEMORY_UNITS,
	    MEMORY_BINARY_UNITS = AbbreviationUnits.MEMORY_BINARY_UNITS;

	Sugar.Number.defineInstance({

	  'bytes': function(n, precision, binary, units) {
	    if (units === 'binary' || (!units && binary)) {
	      units = MEMORY_BINARY_UNITS;
	    } else if(units === 'si' || !units) {
	      units = MEMORY_UNITS;
	    }
	    return abbreviateNumber(n, precision, units, binary) + 'B';
	  }

	});

	module.exports = Sugar.Number.bytes;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    mathAliases = __webpack_require__(93),
	    createRoundingFunction = __webpack_require__(171);

	var ceil = mathAliases.ceil;

	Sugar.Number.defineInstance({

	  'ceil': createRoundingFunction(ceil)

	});

	module.exports = Sugar.Number.ceil;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var withPrecision = __webpack_require__(151);

	function createRoundingFunction(fn) {
	  return function(n, precision) {
	    return precision ? withPrecision(n, precision, fn) : fn(n);
	  };
	}

	module.exports = createRoundingFunction;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    chr = __webpack_require__(52);

	Sugar.Number.defineInstance({

	  'chr': function(n) {
	    return chr(n);
	  }

	});

	module.exports = Sugar.Number.chr;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(160);

	module.exports = Sugar.Number.cos;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(160);

	module.exports = Sugar.Number.exp;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    mathAliases = __webpack_require__(93),
	    createRoundingFunction = __webpack_require__(171);

	var floor = mathAliases.floor;

	Sugar.Number.defineInstance({

	  'floor': createRoundingFunction(floor)

	});

	module.exports = Sugar.Number.floor;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    numberFormat = __webpack_require__(150);

	Sugar.Number.defineInstance({

	  'format': function(n, place) {
	    return numberFormat(n, place);
	  }

	});

	module.exports = Sugar.Number.format;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    padNumber = __webpack_require__(178);

	Sugar.Number.defineInstance({

	  'hex': function(n, pad) {
	    return padNumber(n, pad || 1, false, 16);
	  }

	});

	module.exports = Sugar.Number.hex;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var mathAliases = __webpack_require__(93),
	    repeatString = __webpack_require__(92);

	var abs = mathAliases.abs;

	function padNumber(num, place, sign, base, replacement) {
	  var str = abs(num).toString(base || 10);
	  str = repeatString(replacement || '0', place - str.replace(/\.\d+/, '').length) + str;
	  if (sign || num < 0) {
	    str = (num < 0 ? '-' : '+') + str;
	  }
	  return str;
	}

	module.exports = padNumber;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    isMultipleOf = __webpack_require__(180);

	Sugar.Number.defineInstance({

	  'isEven': function(n) {
	    return isMultipleOf(n, 2);
	  }

	});

	module.exports = Sugar.Number.isEven;

/***/ }),
/* 180 */
/***/ (function(module, exports) {

	'use strict';

	function isMultipleOf(n1, n2) {
	  return n1 % n2 === 0;
	}

	module.exports = isMultipleOf;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    isInteger = __webpack_require__(182);

	Sugar.Number.defineInstance({

	  'isInteger': function(n) {
	    return isInteger(n);
	  }

	});

	module.exports = Sugar.Number.isInteger;

/***/ }),
/* 182 */
/***/ (function(module, exports) {

	'use strict';

	function isInteger(n) {
	  return n % 1 === 0;
	}

	module.exports = isInteger;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    isMultipleOf = __webpack_require__(180);

	Sugar.Number.defineInstance({

	  'isMultipleOf': function(n, num) {
	    return isMultipleOf(n, num);
	  }

	});

	module.exports = Sugar.Number.isMultipleOf;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    isInteger = __webpack_require__(182),
	    isMultipleOf = __webpack_require__(180);

	Sugar.Number.defineInstance({

	  'isOdd': function(n) {
	    return isInteger(n) && !isMultipleOf(n, 2);
	  }

	});

	module.exports = Sugar.Number.isOdd;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	Sugar.Number.defineInstance({

	  'log': function(n, base) {
	    return Math.log(n) / (base ? Math.log(base) : 1);
	  }

	});

	module.exports = Sugar.Number.log;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    AbbreviationUnits = __webpack_require__(147),
	    abbreviateNumber = __webpack_require__(148);

	var METRIC_UNITS_SHORT = AbbreviationUnits.METRIC_UNITS_SHORT,
	    METRIC_UNITS_FULL = AbbreviationUnits.METRIC_UNITS_FULL;

	Sugar.Number.defineInstance({

	  'metric': function(n, precision, units) {
	    if (units === 'all') {
	      units = METRIC_UNITS_FULL;
	    } else if (!units) {
	      units = METRIC_UNITS_SHORT;
	    }
	    return abbreviateNumber(n, precision, units);
	  }

	});

	module.exports = Sugar.Number.metric;

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    mathAliases = __webpack_require__(93),
	    getOrdinalSuffix = __webpack_require__(188);

	var abs = mathAliases.abs;

	Sugar.Number.defineInstance({

	  'ordinalize': function(n) {
	    var num = abs(n), last = +num.toString().slice(-2);
	    return n + getOrdinalSuffix(last);
	  }

	});

	module.exports = Sugar.Number.ordinalize;

/***/ }),
/* 188 */
/***/ (function(module, exports) {

	'use strict';

	function getOrdinalSuffix(num) {
	  if (num >= 11 && num <= 13) {
	    return 'th';
	  } else {
	    switch(num % 10) {
	      case 1:  return 'st';
	      case 2:  return 'nd';
	      case 3:  return 'rd';
	      default: return 'th';
	    }
	  }
	}

	module.exports = getOrdinalSuffix;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    padNumber = __webpack_require__(178);

	Sugar.Number.defineInstance({

	  'pad': function(n, place, sign, base) {
	    return padNumber(n, place, sign, base);
	  }

	});

	module.exports = Sugar.Number.pad;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(160);

	module.exports = Sugar.Number.pow;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    mathAliases = __webpack_require__(93),
	    createRoundingFunction = __webpack_require__(171);

	var round = mathAliases.round;

	Sugar.Number.defineInstance({

	  'round': createRoundingFunction(round)

	});

	module.exports = Sugar.Number.round;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(160);

	module.exports = Sugar.Number.sin;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(160);

	module.exports = Sugar.Number.sqrt;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(160);

	module.exports = Sugar.Number.tan;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    isDefined = __webpack_require__(37);

	Sugar.Number.defineInstance({

	  'times': function(n, indexMapFn) {
	    var arr, result;
	    for(var i = 0; i < n; i++) {
	      result = indexMapFn.call(n, i);
	      if (isDefined(result)) {
	        if (!arr) {
	          arr = [];
	        }
	        arr.push(result);
	      }
	    }
	    return arr;
	  }

	});

	module.exports = Sugar.Number.times;

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	Sugar.Number.defineInstance({

	  'toNumber': function(n) {
	    return n.valueOf();
	  }

	});

	module.exports = Sugar.Number.toNumber;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    _numberOptions = __webpack_require__(152);

	module.exports = Sugar.Number.getOption;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    _numberOptions = __webpack_require__(152);

	module.exports = Sugar.Number.setOption;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// Static Methods
	__webpack_require__(200);
	__webpack_require__(201);

	// Instance Methods
	__webpack_require__(208);
	__webpack_require__(210);
	__webpack_require__(211);
	__webpack_require__(212);
	__webpack_require__(213);
	__webpack_require__(215);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(234);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(242);
	__webpack_require__(243);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(251);
	__webpack_require__(262);
	__webpack_require__(263);
	__webpack_require__(264);
	__webpack_require__(269);
	__webpack_require__(270);

	// Aliases
	__webpack_require__(271);

	// Accessors
	__webpack_require__(272);
	__webpack_require__(273);

	module.exports = __webpack_require__(8);

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    coercePositiveInteger = __webpack_require__(94);

	Sugar.Array.defineStatic({

	  'construct': function(n, indexMapFn) {
	    n = coercePositiveInteger(n);
	    return Array.from(new Array(n), function(el, i) {
	      return indexMapFn && indexMapFn(i);
	    });
	  }

	});

	module.exports = Sugar.Array.construct;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    arrayCreate = __webpack_require__(202);

	__webpack_require__(205);

	Sugar.Array.defineStatic({

	  'create': function(obj, clone) {
	    return arrayCreate(obj, clone);
	  }

	});

	module.exports = Sugar.Array.create;

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var isDefined = __webpack_require__(37),
	    arrayClone = __webpack_require__(203),
	    classChecks = __webpack_require__(14),
	    isObjectType = __webpack_require__(20),
	    isArrayOrInherited = __webpack_require__(204);

	var isString = classChecks.isString;

	function arrayCreate(obj, clone) {
	  var arr;
	  if (isArrayOrInherited(obj)) {
	    arr = clone ? arrayClone(obj) : obj;
	  } else if (isObjectType(obj) || isString(obj)) {
	    arr = Array.from(obj);
	  } else if (isDefined(obj)) {
	    arr = [obj];
	  }
	  return arr || [];
	}

	module.exports = arrayCreate;

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var forEach = __webpack_require__(10);

	function arrayClone(arr) {
	  var clone = new Array(arr.length);
	  forEach(arr, function(el, i) {
	    clone[i] = el;
	  });
	  return clone;
	}

	module.exports = arrayClone;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classChecks = __webpack_require__(14);

	var isArray = classChecks.isArray;

	function isArrayOrInherited(obj) {
	  return obj && obj.constructor && isArray(obj.constructor.prototype);
	}

	module.exports = isArrayOrInherited;

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var setArrayChainableConstructor = __webpack_require__(206);

	setArrayChainableConstructor();

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var arrayCreate = __webpack_require__(202),
	    namespaceAliases = __webpack_require__(154),
	    setChainableConstructor = __webpack_require__(207);

	var sugarArray = namespaceAliases.sugarArray;

	function setArrayChainableConstructor() {
	  setChainableConstructor(sugarArray, arrayCreate);
	}

	module.exports = setArrayChainableConstructor;

/***/ }),
/* 207 */
/***/ (function(module, exports) {

	'use strict';

	function setChainableConstructor(sugarNamespace, createFn) {
	  sugarNamespace.prototype.constructor = function() {
	    return createFn.apply(this, arguments);
	  };
	}

	module.exports = setChainableConstructor;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    arrayClone = __webpack_require__(203),
	    arrayAppend = __webpack_require__(209);

	Sugar.Array.defineInstance({

	  'add': function(arr, item, index) {
	    return arrayAppend(arrayClone(arr), item, index);
	  }

	});

	module.exports = Sugar.Array.add;

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var isDefined = __webpack_require__(37);

	function arrayAppend(arr, el, index) {
	  var spliceArgs;
	  index = +index;
	  if (isNaN(index)) {
	    index = arr.length;
	  }
	  spliceArgs = [index, 0];
	  if (isDefined(el)) {
	    spliceArgs = spliceArgs.concat(el);
	  }
	  arr.splice.apply(arr, spliceArgs);
	  return arr;
	}

	module.exports = arrayAppend;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    arrayAppend = __webpack_require__(209);

	Sugar.Array.defineInstance({

	  'append': function(arr, item, index) {
	    return arrayAppend(arr, item, index);
	  }

	});

	module.exports = Sugar.Array.append;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    getEntriesForIndexes = __webpack_require__(9);

	Sugar.Array.defineInstance({

	  'at': function(arr, index, loop) {
	    return getEntriesForIndexes(arr, index, loop);
	  }

	});

	module.exports = Sugar.Array.at;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    arrayClone = __webpack_require__(203);

	Sugar.Array.defineInstance({

	  'clone': function(arr) {
	    return arrayClone(arr);
	  }

	});

	module.exports = Sugar.Array.clone;

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    arrayCompact = __webpack_require__(214);

	Sugar.Array.defineInstance({

	  'compact': function(arr, all) {
	    return arrayCompact(arr, all);
	  }

	});

	module.exports = Sugar.Array.compact;

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var filter = __webpack_require__(136);

	function arrayCompact(arr, all) {
	  return filter(arr, function(el) {
	    return el || (!all && el != null && el.valueOf() === el.valueOf());
	  });
	}

	module.exports = arrayCompact;

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    arrayExclude = __webpack_require__(216);

	Sugar.Array.defineInstance({

	  'exclude': function(arr, f) {
	    return arrayExclude(arr, f);
	  }

	});

	module.exports = Sugar.Array.exclude;

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getMatcher = __webpack_require__(217);

	function arrayExclude(arr, f) {
	  var result = [], matcher = getMatcher(f);
	  for (var i = 0; i < arr.length; i++) {
	    if (!matcher(arr[i], i, arr)) {
	      result.push(arr[i]);
	    }
	  }
	  return result;
	}

	module.exports = arrayExclude;

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var isPrimitive = __webpack_require__(72),
	    classChecks = __webpack_require__(14),
	    dateMatcher = __webpack_require__(218),
	    regexMatcher = __webpack_require__(219),
	    isObjectType = __webpack_require__(20),
	    isPlainObject = __webpack_require__(19),
	    defaultMatcher = __webpack_require__(220),
	    functionMatcher = __webpack_require__(226),
	    coreUtilityAliases = __webpack_require__(17);

	var getOwn = coreUtilityAliases.getOwn,
	    classToString = coreUtilityAliases.classToString,
	    forEachProperty = coreUtilityAliases.forEachProperty,
	    isDate = classChecks.isDate,
	    isRegExp = classChecks.isRegExp,
	    isFunction = classChecks.isFunction;

	function getMatcher(f) {
	  if (!isPrimitive(f)) {
	    var className = classToString(f);
	    if (isRegExp(f, className)) {
	      return regexMatcher(f);
	    } else if (isDate(f, className)) {
	      return dateMatcher(f);
	    } else if (isFunction(f, className)) {
	      return functionMatcher(f);
	    } else if (isPlainObject(f, className)) {
	      return fuzzyMatcher(f);
	    }
	  }
	  // Default is standard isEqual
	  return defaultMatcher(f);
	}

	function fuzzyMatcher(obj) {
	  var matchers = {};
	  return function(el, i, arr) {
	    var matched = true;
	    if (!isObjectType(el)) {
	      return false;
	    }
	    forEachProperty(obj, function(val, key) {
	      matchers[key] = getOwn(matchers, key) || getMatcher(val);
	      if (matchers[key].call(arr, el[key], i, arr) === false) {
	        matched = false;
	      }
	      return matched;
	    });
	    return matched;
	  };
	}

	module.exports = getMatcher;

/***/ }),
/* 218 */
/***/ (function(module, exports) {

	'use strict';

	function dateMatcher(d) {
	  var ms = d.getTime();
	  return function(el) {
	    return !!(el && el.getTime) && el.getTime() === ms;
	  };
	}

	module.exports = dateMatcher;

/***/ }),
/* 219 */
/***/ (function(module, exports) {

	'use strict';

	function regexMatcher(reg) {
	  reg = RegExp(reg);
	  return function(el) {
	    return reg.test(el);
	  };
	}

	module.exports = regexMatcher;

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var isEqual = __webpack_require__(221);

	function defaultMatcher(f) {
	  return function(el) {
	    return isEqual(el, f);
	  };
	}

	module.exports = defaultMatcher;

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getKeys = __webpack_require__(222),
	    setToArray = __webpack_require__(223),
	    mapToArray = __webpack_require__(224),
	    classChecks = __webpack_require__(14),
	    isObjectType = __webpack_require__(20),
	    coreUtilityAliases = __webpack_require__(17),
	    iterateWithCyclicCheck = __webpack_require__(225);

	var classToString = coreUtilityAliases.classToString,
	    isSerializable = classChecks.isSerializable,
	    isSet = classChecks.isSet,
	    isMap = classChecks.isMap,
	    isError = classChecks.isError;

	function isEqual(a, b, stack) {
	  var aClass, bClass;
	  if (a === b) {
	    // Return quickly up front when matched by reference,
	    // but be careful about 0 !== -0.
	    return a !== 0 || 1 / a === 1 / b;
	  }
	  aClass = classToString(a);
	  bClass = classToString(b);
	  if (aClass !== bClass) {
	    return false;
	  }

	  if (isSerializable(a, aClass) && isSerializable(b, bClass)) {
	    return objectIsEqual(a, b, aClass, stack);
	  } else if (isSet(a, aClass) && isSet(b, bClass)) {
	    return a.size === b.size && isEqual(setToArray(a), setToArray(b), stack);
	  } else if (isMap(a, aClass) && isMap(b, bClass)) {
	    return a.size === b.size && isEqual(mapToArray(a), mapToArray(b), stack);
	  } else if (isError(a, aClass) && isError(b, bClass)) {
	    return a.toString() === b.toString();
	  }

	  return false;
	}

	function objectIsEqual(a, b, aClass, stack) {
	  var aType = typeof a, bType = typeof b, propsEqual, count;
	  if (aType !== bType) {
	    return false;
	  }
	  if (isObjectType(a.valueOf())) {
	    if (a.length !== b.length) {
	      // perf: Quickly returning up front for arrays.
	      return false;
	    }
	    count = 0;
	    propsEqual = true;
	    iterateWithCyclicCheck(a, false, stack, function(key, val, cyc, stack) {
	      if (!cyc && (!(key in b) || !isEqual(val, b[key], stack))) {
	        propsEqual = false;
	      }
	      count++;
	      return propsEqual;
	    });
	    if (!propsEqual || count !== getKeys(b).length) {
	      return false;
	    }
	  }
	  // Stringifying the value handles NaN, wrapped primitives, dates, and errors in one go.
	  return a.valueOf().toString() === b.valueOf().toString();
	}

	module.exports = isEqual;

/***/ }),
/* 222 */
/***/ (function(module, exports) {

	'use strict';

	function getKeys(obj) {
	  return Object.keys(obj);
	}

	module.exports = getKeys;

/***/ }),
/* 223 */
/***/ (function(module, exports) {

	'use strict';

	function setToArray(set) {
	  var arr = new Array(set.size), i = 0;
	  set.forEach(function(val) {
	    arr[i++] = val;
	  });
	  return arr;
	}

	module.exports = setToArray;

/***/ }),
/* 224 */
/***/ (function(module, exports) {

	'use strict';

	function mapToArray(map) {
	  var arr = new Array(map.size), i = 0;
	  map.forEach(function(val, key) {
	    arr[i++] = [key, val];
	  });
	  return arr;
	}

	module.exports = mapToArray;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getKeys = __webpack_require__(222),
	    coreUtilityAliases = __webpack_require__(17);

	var forEachProperty = coreUtilityAliases.forEachProperty;

	function iterateWithCyclicCheck(obj, sortedKeys, stack, fn) {

	  function next(val, key) {
	    var cyc = false;

	    // Allowing a step into the structure before triggering this check to save
	    // cycles on standard JSON structures and also to try as hard as possible to
	    // catch basic properties that may have been modified.
	    if (stack.length > 1) {
	      var i = stack.length;
	      while (i--) {
	        if (stack[i] === val) {
	          cyc = true;
	        }
	      }
	    }

	    stack.push(val);
	    fn(key, val, cyc, stack);
	    stack.pop();
	  }

	  function iterateWithSortedKeys() {
	    // Sorted keys is required for serialization, where object order
	    // does not matter but stringified order does.
	    var arr = getKeys(obj).sort(), key;
	    for (var i = 0; i < arr.length; i++) {
	      key = arr[i];
	      next(obj[key], arr[i]);
	    }
	  }

	  // This method for checking for cyclic structures was egregiously stolen from
	  // the ingenious method by @kitcambridge from the Underscore script:
	  // https://github.com/documentcloud/underscore/issues/240
	  if (!stack) {
	    stack = [];
	  }

	  if (sortedKeys) {
	    iterateWithSortedKeys();
	  } else {
	    forEachProperty(obj, next);
	  }
	}

	module.exports = iterateWithCyclicCheck;

/***/ }),
/* 226 */
/***/ (function(module, exports) {

	'use strict';

	function functionMatcher(fn) {
	  return function(el, i, arr) {
	    // Return true up front if match by reference
	    return el === fn || fn.call(arr, el, i, arr);
	  };
	}

	module.exports = functionMatcher;

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    isUndefined = __webpack_require__(60);

	Sugar.Array.defineInstance({

	  'first': function(arr, num) {
	    if (isUndefined(num)) return arr[0];
	    if (num < 0) num = 0;
	    return arr.slice(0, num);
	  }

	});

	module.exports = Sugar.Array.first;

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    arrayFlatten = __webpack_require__(229);

	Sugar.Array.defineInstance({

	  'flatten': function(arr, limit) {
	    return arrayFlatten(arr, limit);
	  }

	});

	module.exports = Sugar.Array.flatten;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var forEach = __webpack_require__(10),
	    classChecks = __webpack_require__(14);

	var isArray = classChecks.isArray;

	function arrayFlatten(arr, level, current) {
	  var result = [];
	  level = level || Infinity;
	  current = current || 0;
	  forEach(arr, function(el) {
	    if (isArray(el) && current < level) {
	      result = result.concat(arrayFlatten(el, level, current + 1));
	    } else {
	      result.push(el);
	    }
	  });
	  return result;
	}

	module.exports = arrayFlatten;

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	Sugar.Array.defineInstance({

	  'from': function(arr, num) {
	    return arr.slice(num);
	  }

	});

	module.exports = Sugar.Array.from;

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    arrayGroupBy = __webpack_require__(232);

	Sugar.Array.defineInstance({

	  'groupBy': function(arr, map, groupFn) {
	    return arrayGroupBy(arr, map, groupFn);
	  }

	});

	module.exports = Sugar.Array.groupBy;

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var forEach = __webpack_require__(10),
	    mapWithShortcuts = __webpack_require__(233),
	    coreUtilityAliases = __webpack_require__(17);

	var hasOwn = coreUtilityAliases.hasOwn,
	    forEachProperty = coreUtilityAliases.forEachProperty;

	function arrayGroupBy(arr, map, fn) {
	  var result = {}, key;
	  forEach(arr, function(el, i) {
	    key = mapWithShortcuts(el, map, arr, [el, i, arr]);
	    if (!hasOwn(result, key)) {
	      result[key] = [];
	    }
	    result[key].push(el);
	  });
	  if (fn) {
	    forEachProperty(result, fn);
	  }
	  return result;
	}

	module.exports = arrayGroupBy;

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var map = __webpack_require__(68),
	    classChecks = __webpack_require__(14),
	    deepGetProperty = __webpack_require__(64);

	var isFunction = classChecks.isFunction,
	    isArray = classChecks.isArray;

	function mapWithShortcuts(el, f, context, mapArgs) {
	  if (!f) {
	    return el;
	  } else if (f.apply) {
	    return f.apply(context, mapArgs);
	  } else if (isArray(f)) {
	    return map(f, function(m) {
	      return mapWithShortcuts(el, m, context, mapArgs);
	    });
	  } else if (isFunction(el[f])) {
	    return el[f].call(el);
	  } else {
	    return deepGetProperty(el, f, true);
	  }
	}

	module.exports = mapWithShortcuts;

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    isDefined = __webpack_require__(37),
	    mathAliases = __webpack_require__(93),
	    simpleRepeat = __webpack_require__(235);

	var ceil = mathAliases.ceil;

	Sugar.Array.defineInstance({

	  'inGroups': function(arr, num, padding) {
	    var pad = isDefined(padding);
	    var result = new Array(num);
	    var divisor = ceil(arr.length / num);
	    simpleRepeat(num, function(i) {
	      var index = i * divisor;
	      var group = arr.slice(index, index + divisor);
	      if (pad && group.length < divisor) {
	        simpleRepeat(divisor - group.length, function() {
	          group.push(padding);
	        });
	      }
	      result[i] = group;
	    });
	    return result;
	  }

	});

	module.exports = Sugar.Array.inGroups;

/***/ }),
/* 235 */
/***/ (function(module, exports) {

	'use strict';

	function simpleRepeat(n, fn) {
	  for (var i = 0; i < n; i++) {
	    fn(i);
	  }
	}

	module.exports = simpleRepeat;

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    isUndefined = __webpack_require__(60),
	    mathAliases = __webpack_require__(93),
	    simpleRepeat = __webpack_require__(235);

	var ceil = mathAliases.ceil;

	Sugar.Array.defineInstance({

	  'inGroupsOf': function(arr, num, padding) {
	    var result = [], len = arr.length, group;
	    if (len === 0 || num === 0) return arr;
	    if (isUndefined(num)) num = 1;
	    if (isUndefined(padding)) padding = null;
	    simpleRepeat(ceil(len / num), function(i) {
	      group = arr.slice(num * i, num * i + num);
	      while(group.length < num) {
	        group.push(padding);
	      }
	      result.push(group);
	    });
	    return result;
	  }

	});

	module.exports = Sugar.Array.inGroupsOf;

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    arrayIntersectOrSubtract = __webpack_require__(238);

	Sugar.Array.defineInstance({

	  'intersect': function(arr1, arr2) {
	    return arrayIntersectOrSubtract(arr1, arr2, false);
	  }

	});

	module.exports = Sugar.Array.intersect;

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var forEach = __webpack_require__(10),
	    arrayWrap = __webpack_require__(239),
	    classChecks = __webpack_require__(14),
	    serializeInternal = __webpack_require__(240),
	    coreUtilityAliases = __webpack_require__(17);

	var isArray = classChecks.isArray,
	    hasOwn = coreUtilityAliases.hasOwn;

	function arrayIntersectOrSubtract(arr1, arr2, subtract) {
	  var result = [], obj = {}, refs = [];
	  if (!isArray(arr2)) {
	    arr2 = arrayWrap(arr2);
	  }
	  forEach(arr2, function(el) {
	    obj[serializeInternal(el, refs)] = true;
	  });
	  forEach(arr1, function(el) {
	    var key = serializeInternal(el, refs);
	    if (hasOwn(obj, key) !== subtract) {
	      delete obj[key];
	      result.push(el);
	    }
	  });
	  return result;
	}

	module.exports = arrayIntersectOrSubtract;

/***/ }),
/* 239 */
/***/ (function(module, exports) {

	'use strict';

	function arrayWrap(obj) {
	  var arr = [];
	  arr.push(obj);
	  return arr;
	}

	module.exports = arrayWrap;

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var indexOf = __webpack_require__(108),
	    isRealNaN = __webpack_require__(241),
	    isPrimitive = __webpack_require__(72),
	    classChecks = __webpack_require__(14),
	    isObjectType = __webpack_require__(20),
	    coreUtilityAliases = __webpack_require__(17),
	    iterateWithCyclicCheck = __webpack_require__(225);

	var classToString = coreUtilityAliases.classToString,
	    isSerializable = classChecks.isSerializable;

	function serializeInternal(obj, refs, stack) {
	  var type = typeof obj, sign = '', className, value, ref;

	  // Return up front on
	  if (1 / obj === -Infinity) {
	    sign = '-';
	  }

	  // Return quickly for primitives to save cycles
	  if (isPrimitive(obj, type) && !isRealNaN(obj)) {
	    return type + sign + obj;
	  }

	  className = classToString(obj);

	  if (!isSerializable(obj, className)) {
	    ref = indexOf(refs, obj);
	    if (ref === -1) {
	      ref = refs.length;
	      refs.push(obj);
	    }
	    return ref;
	  } else if (isObjectType(obj)) {
	    value = serializeDeep(obj, refs, stack) + obj.toString();
	  } else if (obj.valueOf) {
	    value = obj.valueOf();
	  }
	  return type + className + sign + value;
	}

	function serializeDeep(obj, refs, stack) {
	  var result = '';
	  iterateWithCyclicCheck(obj, true, stack, function(key, val, cyc, stack) {
	    result += cyc ? 'CYC' : key + serializeInternal(val, refs, stack);
	  });
	  return result;
	}

	module.exports = serializeInternal;

/***/ }),
/* 241 */
/***/ (function(module, exports) {

	'use strict';

	function isRealNaN(obj) {
	  // This is only true of NaN
	  return obj != null && obj !== obj;
	}

	module.exports = isRealNaN;

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	Sugar.Array.defineInstance({

	  'isEmpty': function(arr) {
	    return arr.length === 0;
	  }

	});

	module.exports = Sugar.Array.isEmpty;

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    isEqual = __webpack_require__(221);

	Sugar.Array.defineInstance({

	  'isEqual': function(a, b) {
	    return isEqual(a, b);
	  }

	});

	module.exports = Sugar.Array.isEqual;

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    isUndefined = __webpack_require__(60);

	Sugar.Array.defineInstance({

	  'last': function(arr, num) {
	    if (isUndefined(num)) return arr[arr.length - 1];
	    var start = arr.length - num < 0 ? 0 : arr.length - num;
	    return arr.slice(start);
	  }

	});

	module.exports = Sugar.Array.last;

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    arrayRemove = __webpack_require__(246);

	Sugar.Array.defineInstance({

	  'remove': function(arr, f) {
	    return arrayRemove(arr, f);
	  }

	});

	module.exports = Sugar.Array.remove;

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getMatcher = __webpack_require__(217);

	function arrayRemove(arr, f) {
	  var matcher = getMatcher(f), i = 0;
	  while(i < arr.length) {
	    if (matcher(arr[i], i, arr)) {
	      arr.splice(i, 1);
	    } else {
	      i++;
	    }
	  }
	  return arr;
	}

	module.exports = arrayRemove;

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    isUndefined = __webpack_require__(60);

	Sugar.Array.defineInstance({

	  'removeAt': function(arr, start, end) {
	    if (isUndefined(start)) return arr;
	    if (isUndefined(end))   end = start;
	    arr.splice(start, end - start + 1);
	    return arr;
	  }

	});

	module.exports = Sugar.Array.removeAt;

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    trunc = __webpack_require__(95),
	    arrayClone = __webpack_require__(203),
	    classChecks = __webpack_require__(14),
	    isUndefined = __webpack_require__(60),
	    mathAliases = __webpack_require__(93);

	var isBoolean = classChecks.isBoolean,
	    min = mathAliases.min;

	Sugar.Array.defineInstance({

	  'sample': function(arr, arg1, arg2) {
	    var result = [], num, remove, single;
	    if (isBoolean(arg1)) {
	      remove = arg1;
	    } else {
	      num = arg1;
	      remove = arg2;
	    }
	    if (isUndefined(num)) {
	      num = 1;
	      single = true;
	    }
	    if (!remove) {
	      arr = arrayClone(arr);
	    }
	    num = min(num, arr.length);
	    for (var i = 0, index; i < num; i++) {
	      index = trunc(Math.random() * arr.length);
	      result.push(arr[index]);
	      arr.splice(index, 1);
	    }
	    return single ? result[0] : result;
	  }

	});

	module.exports = Sugar.Array.sample;

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    arrayShuffle = __webpack_require__(250);

	Sugar.Array.defineInstance({

	  'shuffle': function(arr) {
	    return arrayShuffle(arr);
	  }

	});

	module.exports = Sugar.Array.shuffle;

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var arrayClone = __webpack_require__(203);

	function arrayShuffle(arr) {
	  arr = arrayClone(arr);
	  var i = arr.length, j, x;
	  while(i) {
	    j = (Math.random() * i) | 0;
	    x = arr[--i];
	    arr[i] = arr[j];
	    arr[j] = x;
	  }
	  return arr;
	}

	module.exports = arrayShuffle;

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    compareValue = __webpack_require__(252),
	    mapWithShortcuts = __webpack_require__(233);

	Sugar.Array.defineInstance({

	  'sortBy': function(arr, map, desc) {
	    arr.sort(function(a, b) {
	      var aProperty = mapWithShortcuts(a, map, arr, [a]);
	      var bProperty = mapWithShortcuts(b, map, arr, [b]);
	      return compareValue(aProperty, bProperty) * (desc ? -1 : 1);
	    });
	    return arr;
	  }

	});

	module.exports = Sugar.Array.sortBy;

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var ARRAY_OPTIONS = __webpack_require__(253),
	    classChecks = __webpack_require__(14);

	var isString = classChecks.isString,
	    isArray = classChecks.isArray,
	    _arrayOptions = ARRAY_OPTIONS._arrayOptions;

	function compareValue(aVal, bVal) {
	  var cmp, i, collate;
	  if (isString(aVal) && isString(bVal)) {
	    collate = _arrayOptions('sortCollate');
	    return collate(aVal, bVal);
	  } else if (isArray(aVal) && isArray(bVal)) {
	    if (aVal.length < bVal.length) {
	      return -1;
	    } else if (aVal.length > bVal.length) {
	      return 1;
	    } else {
	      for(i = 0; i < aVal.length; i++) {
	        cmp = compareValue(aVal[i], bVal[i]);
	        if (cmp !== 0) {
	          return cmp;
	        }
	      }
	      return 0;
	    }
	  }
	  return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
	}

	module.exports = compareValue;

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getSortOrder = __webpack_require__(254),
	    codeIsNumeral = __webpack_require__(255),
	    stringToNumber = __webpack_require__(124),
	    namespaceAliases = __webpack_require__(154),
	    getSortOrderIndex = __webpack_require__(258),
	    getSortEquivalents = __webpack_require__(259),
	    defineOptionsAccessor = __webpack_require__(155),
	    getCollationCharacter = __webpack_require__(260),
	    getCollationReadyString = __webpack_require__(261);

	var sugarArray = namespaceAliases.sugarArray;

	var ARRAY_OPTIONS = {
	  'sortIgnore':      null,
	  'sortNatural':     true,
	  'sortIgnoreCase':  true,
	  'sortOrder':       getSortOrder(),
	  'sortCollate':     collateStrings,
	  'sortEquivalents': getSortEquivalents()
	};

	var _arrayOptions = defineOptionsAccessor(sugarArray, ARRAY_OPTIONS);

	function collateStrings(a, b) {
	  var aValue, bValue, aChar, bChar, aEquiv, bEquiv, index = 0, tiebreaker = 0;

	  var sortOrder       = _arrayOptions('sortOrder');
	  var sortIgnore      = _arrayOptions('sortIgnore');
	  var sortNatural     = _arrayOptions('sortNatural');
	  var sortIgnoreCase  = _arrayOptions('sortIgnoreCase');
	  var sortEquivalents = _arrayOptions('sortEquivalents');

	  a = getCollationReadyString(a, sortIgnore, sortIgnoreCase);
	  b = getCollationReadyString(b, sortIgnore, sortIgnoreCase);

	  do {

	    aChar  = getCollationCharacter(a, index, sortEquivalents);
	    bChar  = getCollationCharacter(b, index, sortEquivalents);
	    aValue = getSortOrderIndex(aChar, sortOrder);
	    bValue = getSortOrderIndex(bChar, sortOrder);

	    if (aValue === -1 || bValue === -1) {
	      aValue = a.charCodeAt(index) || null;
	      bValue = b.charCodeAt(index) || null;
	      if (sortNatural && codeIsNumeral(aValue) && codeIsNumeral(bValue)) {
	        aValue = stringToNumber(a.slice(index));
	        bValue = stringToNumber(b.slice(index));
	      }
	    } else {
	      aEquiv = aChar !== a.charAt(index);
	      bEquiv = bChar !== b.charAt(index);
	      if (aEquiv !== bEquiv && tiebreaker === 0) {
	        tiebreaker = aEquiv - bEquiv;
	      }
	    }
	    index += 1;
	  } while(aValue != null && bValue != null && aValue === bValue);
	  if (aValue === bValue) return tiebreaker;
	  return aValue - bValue;
	}

	module.exports = {
	  ARRAY_OPTIONS: ARRAY_OPTIONS,
	  _arrayOptions: _arrayOptions
	};

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var map = __webpack_require__(68);

	function getSortOrder() {
	  var order = 'AÁÀÂÃĄBCĆČÇDĎÐEÉÈĚÊËĘFGĞHıIÍÌİÎÏJKLŁMNŃŇÑOÓÒÔPQRŘSŚŠŞTŤUÚÙŮÛÜVWXYÝZŹŻŽÞÆŒØÕÅÄÖ';
	  return map(order.split(''), function(str) {
	    return str + str.toLowerCase();
	  }).join('');
	}

	module.exports = getSortOrder;

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var HALF_WIDTH_NINE = __webpack_require__(256),
	    FULL_WIDTH_NINE = __webpack_require__(257),
	    CommonChars = __webpack_require__(67);

	var HALF_WIDTH_ZERO = CommonChars.HALF_WIDTH_ZERO,
	    FULL_WIDTH_ZERO = CommonChars.FULL_WIDTH_ZERO;

	function codeIsNumeral(code) {
	  return (code >= HALF_WIDTH_ZERO && code <= HALF_WIDTH_NINE) ||
	         (code >= FULL_WIDTH_ZERO && code <= FULL_WIDTH_NINE);
	}

	module.exports = codeIsNumeral;

/***/ }),
/* 256 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = 0x39;

/***/ }),
/* 257 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = 0xff19;

/***/ }),
/* 258 */
/***/ (function(module, exports) {

	'use strict';

	function getSortOrderIndex(chr, sortOrder) {
	  if (!chr) {
	    return null;
	  } else {
	    return sortOrder.indexOf(chr);
	  }
	}

	module.exports = getSortOrderIndex;

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var forEach = __webpack_require__(10),
	    spaceSplit = __webpack_require__(18);

	function getSortEquivalents() {
	  var equivalents = {};
	  forEach(spaceSplit('AÁÀÂÃÄ CÇ EÉÈÊË IÍÌİÎÏ OÓÒÔÕÖ Sß UÚÙÛÜ'), function(set) {
	    var first = set.charAt(0);
	    forEach(set.slice(1).split(''), function(chr) {
	      equivalents[chr] = first;
	      equivalents[chr.toLowerCase()] = first.toLowerCase();
	    });
	  });
	  return equivalents;
	}

	module.exports = getSortEquivalents;

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var coreUtilityAliases = __webpack_require__(17);

	var getOwn = coreUtilityAliases.getOwn;

	function getCollationCharacter(str, index, sortEquivalents) {
	  var chr = str.charAt(index);
	  return getOwn(sortEquivalents, chr) || chr;
	}

	module.exports = getCollationCharacter;

/***/ }),
/* 261 */
/***/ (function(module, exports) {

	'use strict';

	function getCollationReadyString(str, sortIgnore, sortIgnoreCase) {
	  if (sortIgnoreCase) {
	    str = str.toLowerCase();
	  }
	  if (sortIgnore) {
	    str = str.replace(sortIgnore, '');
	  }
	  return str;
	}

	module.exports = getCollationReadyString;

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    arrayIntersectOrSubtract = __webpack_require__(238);

	Sugar.Array.defineInstance({

	  'subtract': function(arr, item) {
	    return arrayIntersectOrSubtract(arr, item, true);
	  }

	});

	module.exports = Sugar.Array.subtract;

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    isUndefined = __webpack_require__(60);

	Sugar.Array.defineInstance({

	  'to': function(arr, num) {
	    if (isUndefined(num)) num = arr.length;
	    return arr.slice(0, num);
	  }

	});

	module.exports = Sugar.Array.to;

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    arrayUnique = __webpack_require__(265),
	    arrayConcat = __webpack_require__(266);

	Sugar.Array.defineInstance({

	  'union': function(arr1, arr2) {
	    return arrayUnique(arrayConcat(arr1, arr2));
	  }

	});

	module.exports = Sugar.Array.union;

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var forEach = __webpack_require__(10),
	    mapWithShortcuts = __webpack_require__(233),
	    serializeInternal = __webpack_require__(240),
	    coreUtilityAliases = __webpack_require__(17);

	var hasOwn = coreUtilityAliases.hasOwn;

	function arrayUnique(arr, map) {
	  var result = [], obj = {}, refs = [];
	  forEach(arr, function(el, i) {
	    var transformed = map ? mapWithShortcuts(el, map, arr, [el, i, arr]) : el;
	    var key = serializeInternal(transformed, refs);
	    if (!hasOwn(obj, key)) {
	      result.push(el);
	      obj[key] = true;
	    }
	  });
	  return result;
	}

	module.exports = arrayUnique;

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var HAS_CONCAT_BUG = __webpack_require__(267),
	    arraySafeConcat = __webpack_require__(268);

	function arrayConcat(arr1, arr2) {
	  // istanbul ignore if
	  if (HAS_CONCAT_BUG) {
	    return arraySafeConcat(arr1, arr2);
	  }
	  return arr1.concat(arr2);
	}

	module.exports = arrayConcat;

/***/ }),
/* 267 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = !('0' in [].concat(undefined).concat());

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var forEach = __webpack_require__(10),
	    arrayClone = __webpack_require__(203),
	    classChecks = __webpack_require__(14);

	var isArray = classChecks.isArray;

	function arraySafeConcat(arr, arg) {
	  var result = arrayClone(arr), len = result.length, arr2;
	  arr2 = isArray(arg) ? arg : [arg];
	  result.length += arr2.length;
	  forEach(arr2, function(el, i) {
	    result[len + i] = el;
	  });
	  return result;
	}

	module.exports = arraySafeConcat;

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    arrayUnique = __webpack_require__(265);

	Sugar.Array.defineInstance({

	  'unique': function(arr, map) {
	    return arrayUnique(arr, map);
	  }

	});

	module.exports = Sugar.Array.unique;

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    map = __webpack_require__(68);

	Sugar.Array.defineInstanceWithArguments({

	  'zip': function(arr, args) {
	    return map(arr, function(el, i) {
	      return [el].concat(map(args, function(k) {
	        return (i in k) ? k[i] : null;
	      }));
	    });
	  }

	});

	module.exports = Sugar.Array.zip;

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    append = __webpack_require__(210);

	Sugar.Array.alias('insert', 'append');

	module.exports = Sugar.Array.insert;

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    ARRAY_OPTIONS = __webpack_require__(253);

	var _arrayOptions = ARRAY_OPTIONS._arrayOptions;

	module.exports = Sugar.Array.getOption;

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    ARRAY_OPTIONS = __webpack_require__(253);

	var _arrayOptions = ARRAY_OPTIONS._arrayOptions;

	module.exports = Sugar.Array.setOption;

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// Static Methods
	__webpack_require__(275);
	__webpack_require__(278);
	__webpack_require__(280);
	__webpack_require__(283);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(289);
	__webpack_require__(293);
	__webpack_require__(295);
	__webpack_require__(296);
	__webpack_require__(298);
	__webpack_require__(299);
	__webpack_require__(300);
	__webpack_require__(302);
	__webpack_require__(304);
	__webpack_require__(305);

	// Instance Methods
	__webpack_require__(307);
	__webpack_require__(308);
	__webpack_require__(315);
	__webpack_require__(317);
	__webpack_require__(321);
	__webpack_require__(322);
	__webpack_require__(323);
	__webpack_require__(324);
	__webpack_require__(325);
	__webpack_require__(326);
	__webpack_require__(327);
	__webpack_require__(328);
	__webpack_require__(329);
	__webpack_require__(332);
	__webpack_require__(333);
	__webpack_require__(334);
	__webpack_require__(335);
	__webpack_require__(336);
	__webpack_require__(337);
	__webpack_require__(339);
	__webpack_require__(340);
	__webpack_require__(341);
	__webpack_require__(342);
	__webpack_require__(343);

	module.exports = __webpack_require__(8);

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    average = __webpack_require__(276);

	Sugar.Object.defineInstanceAndStatic({

	  'average': function(obj, map) {
	    return average(obj, map);
	  }

	});

	module.exports = Sugar.Object.average;

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var enumerateWithMapping = __webpack_require__(277);

	function average(obj, map) {
	  var sum = 0, count = 0;
	  enumerateWithMapping(obj, map, function(val) {
	    sum += val;
	    count++;
	  });
	  // Prevent divide by 0
	  return sum / (count || 1);
	}

	module.exports = average;

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classChecks = __webpack_require__(14),
	    isArrayIndex = __webpack_require__(13),
	    mapWithShortcuts = __webpack_require__(233),
	    coreUtilityAliases = __webpack_require__(17);

	var isArray = classChecks.isArray,
	    forEachProperty = coreUtilityAliases.forEachProperty;

	function enumerateWithMapping(obj, map, fn) {
	  var arrayIndexes = isArray(obj);
	  forEachProperty(obj, function(val, key) {
	    if (arrayIndexes) {
	      if (!isArrayIndex(key)) {
	        return;
	      }
	      key = +key;
	    }
	    var mapped = mapWithShortcuts(val, map, obj, [val, key, obj]);
	    fn(mapped, key);
	  });
	}

	module.exports = enumerateWithMapping;

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    objectCount = __webpack_require__(279);

	Sugar.Object.defineInstanceAndStatic({

	  'count': function(obj, f) {
	    return objectCount(obj, f);
	  }

	});

	module.exports = Sugar.Object.count;

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getMatcher = __webpack_require__(217),
	    coreUtilityAliases = __webpack_require__(17);

	var forEachProperty = coreUtilityAliases.forEachProperty;

	function objectCount(obj, f) {
	  var matcher = getMatcher(f), count = 0;
	  forEachProperty(obj, function(val, key) {
	    if (matcher(val, key, obj)) {
	      count++;
	    }
	  });
	  return count;
	}

	module.exports = objectCount;

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    objectMatchers = __webpack_require__(281);

	var objectEvery = objectMatchers.objectEvery;

	Sugar.Object.defineInstanceAndStatic({

	  'every': objectEvery

	});

	module.exports = Sugar.Object.every;

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var wrapObjectMatcher = __webpack_require__(282);

	module.exports = {
	  objectSome: wrapObjectMatcher('some'),
	  objectFind: wrapObjectMatcher('find'),
	  objectEvery: wrapObjectMatcher('every')
	};

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getKeys = __webpack_require__(222),
	    getMatcher = __webpack_require__(217);

	function wrapObjectMatcher(name) {
	  var nativeFn = Array.prototype[name];
	  return function(obj, f) {
	    var matcher = getMatcher(f);
	    return nativeFn.call(getKeys(obj), function(key) {
	      return matcher(obj[key], key, obj);
	    });
	  };
	}

	module.exports = wrapObjectMatcher;

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    objectFilter = __webpack_require__(284);

	Sugar.Object.defineInstanceAndStatic({

	  'filter': function(obj, f) {
	    return objectFilter(obj, f);
	  }

	});

	module.exports = Sugar.Object.filter;

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getMatcher = __webpack_require__(217),
	    coreUtilityAliases = __webpack_require__(17);

	var forEachProperty = coreUtilityAliases.forEachProperty;

	function objectFilter(obj, f) {
	  var matcher = getMatcher(f), result = {};
	  forEachProperty(obj, function(val, key) {
	    if (matcher(val, key, obj)) {
	      result[key] = val;
	    }
	  });
	  return result;
	}

	module.exports = objectFilter;

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    objectMatchers = __webpack_require__(281);

	var objectFind = objectMatchers.objectFind;

	Sugar.Object.defineInstanceAndStatic({

	  'find': objectFind

	});

	module.exports = Sugar.Object.find;

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    objectForEach = __webpack_require__(287);

	Sugar.Object.defineInstanceAndStatic({

	  'forEach': function(obj, eachFn) {
	    return objectForEach(obj, eachFn);
	  }

	});

	module.exports = Sugar.Object.forEach;

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var assertCallable = __webpack_require__(288),
	    coreUtilityAliases = __webpack_require__(17);

	var forEachProperty = coreUtilityAliases.forEachProperty;

	function objectForEach(obj, fn) {
	  assertCallable(fn);
	  forEachProperty(obj, function(val, key) {
	    fn(val, key, obj);
	  });
	  return obj;
	}

	module.exports = objectForEach;

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classChecks = __webpack_require__(14);

	var isFunction = classChecks.isFunction;

	function assertCallable(obj) {
	  if (!isFunction(obj)) {
	    throw new TypeError('Function is not callable');
	  }
	}

	module.exports = assertCallable;

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    getLeastOrMost = __webpack_require__(290);

	Sugar.Object.defineInstanceAndStatic({

	  'least': function(obj, all, map) {
	    return getLeastOrMost(obj, all, map, false, true);
	  }

	});

	module.exports = Sugar.Object.least;

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classChecks = __webpack_require__(14),
	    getMinOrMax = __webpack_require__(291),
	    serializeInternal = __webpack_require__(240),
	    coreUtilityAliases = __webpack_require__(17),
	    enumerateWithMapping = __webpack_require__(277),
	    getReducedMinMaxResult = __webpack_require__(292);

	var isBoolean = classChecks.isBoolean,
	    getOwn = coreUtilityAliases.getOwn,
	    forEachProperty = coreUtilityAliases.forEachProperty;

	function getLeastOrMost(obj, arg1, arg2, most, asObject) {
	  var group = {}, refs = [], minMaxResult, result, all, map;
	  if (isBoolean(arg1)) {
	    all = arg1;
	    map = arg2;
	  } else {
	    map = arg1;
	  }
	  enumerateWithMapping(obj, map, function(val, key) {
	    var groupKey = serializeInternal(val, refs);
	    var arr = getOwn(group, groupKey) || [];
	    arr.push(asObject ? key : obj[key]);
	    group[groupKey] = arr;
	  });
	  minMaxResult = getMinOrMax(group, !!all, 'length', most, true);
	  if (all) {
	    result = [];
	    // Flatten result
	    forEachProperty(minMaxResult, function(val) {
	      result = result.concat(val);
	    });
	  } else {
	    result = getOwn(group, minMaxResult);
	  }
	  return getReducedMinMaxResult(result, obj, all, asObject);
	}

	module.exports = getLeastOrMost;

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classChecks = __webpack_require__(14),
	    isUndefined = __webpack_require__(60),
	    enumerateWithMapping = __webpack_require__(277),
	    getReducedMinMaxResult = __webpack_require__(292);

	var isBoolean = classChecks.isBoolean;

	function getMinOrMax(obj, arg1, arg2, max, asObject) {
	  var result = [], pushVal, edge, all, map;
	  if (isBoolean(arg1)) {
	    all = arg1;
	    map = arg2;
	  } else {
	    map = arg1;
	  }
	  enumerateWithMapping(obj, map, function(val, key) {
	    if (isUndefined(val)) {
	      throw new TypeError('Cannot compare with undefined');
	    }
	    pushVal = asObject ? key : obj[key];
	    if (val === edge) {
	      result.push(pushVal);
	    } else if (isUndefined(edge) || (max && val > edge) || (!max && val < edge)) {
	      result = [pushVal];
	      edge = val;
	    }
	  });
	  return getReducedMinMaxResult(result, obj, all, asObject);
	}

	module.exports = getMinOrMax;

/***/ }),
/* 292 */
/***/ (function(module, exports) {

	'use strict';

	function getReducedMinMaxResult(result, obj, all, asObject) {
	  if (asObject && all) {
	    // The method has returned an array of keys so use this array
	    // to build up the resulting object in the form we want it in.
	    return result.reduce(function(o, key) {
	      o[key] = obj[key];
	      return o;
	    }, {});
	  } else if (result && !all) {
	    result = result[0];
	  }
	  return result;
	}

	module.exports = getReducedMinMaxResult;

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    objectMap = __webpack_require__(294);

	Sugar.Object.defineInstanceAndStatic({

	  'map': function(obj, map) {
	    return objectMap(obj, map);
	  }

	});

	module.exports = Sugar.Object.map;

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var mapWithShortcuts = __webpack_require__(233),
	    coreUtilityAliases = __webpack_require__(17);

	var forEachProperty = coreUtilityAliases.forEachProperty;

	function objectMap(obj, map) {
	  var result = {};
	  forEachProperty(obj, function(val, key) {
	    result[key] = mapWithShortcuts(val, map, obj, [val, key, obj]);
	  });
	  return result;
	}

	module.exports = objectMap;

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    getMinOrMax = __webpack_require__(291);

	Sugar.Object.defineInstanceAndStatic({

	  'max': function(obj, all, map) {
	    return getMinOrMax(obj, all, map, true, true);
	  }

	});

	module.exports = Sugar.Object.max;

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    median = __webpack_require__(297);

	Sugar.Object.defineInstanceAndStatic({

	  'median': function(obj, map) {
	    return median(obj, map);
	  }

	});

	module.exports = Sugar.Object.median;

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var trunc = __webpack_require__(95),
	    enumerateWithMapping = __webpack_require__(277);

	function median(obj, map) {
	  var result = [], middle, len;
	  enumerateWithMapping(obj, map, function(val) {
	    result.push(val);
	  });
	  len = result.length;
	  if (!len) return 0;
	  result.sort(function(a, b) {
	    // IE7 will throw errors on non-numbers!
	    return (a || 0) - (b || 0);
	  });
	  middle = trunc(len / 2);
	  return len % 2 ? result[middle] : (result[middle - 1] + result[middle]) / 2;
	}

	module.exports = median;

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    getMinOrMax = __webpack_require__(291);

	Sugar.Object.defineInstanceAndStatic({

	  'min': function(obj, all, map) {
	    return getMinOrMax(obj, all, map, false, true);
	  }

	});

	module.exports = Sugar.Object.min;

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    getLeastOrMost = __webpack_require__(290);

	Sugar.Object.defineInstanceAndStatic({

	  'most': function(obj, all, map) {
	    return getLeastOrMost(obj, all, map, true, true);
	  }

	});

	module.exports = Sugar.Object.most;

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    objectNone = __webpack_require__(301);

	Sugar.Object.defineInstanceAndStatic({

	  'none': function(obj, f) {
	    return objectNone(obj, f);
	  }

	});

	module.exports = Sugar.Object.none;

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var objectMatchers = __webpack_require__(281);

	var objectSome = objectMatchers.objectSome;

	function objectNone(obj, f) {
	  return !objectSome(obj, f);
	}

	module.exports = objectNone;

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    objectReduce = __webpack_require__(303);

	Sugar.Object.defineInstanceAndStatic({

	  'reduce': function(obj, fn, init) {
	    return objectReduce(obj, fn, init);
	  }

	});

	module.exports = Sugar.Object.reduce;

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var isDefined = __webpack_require__(37),
	    coreUtilityAliases = __webpack_require__(17);

	var forEachProperty = coreUtilityAliases.forEachProperty;

	function objectReduce(obj, fn, acc) {
	  var init = isDefined(acc);
	  forEachProperty(obj, function(val, key) {
	    if (!init) {
	      acc = val;
	      init = true;
	      return;
	    }
	    acc = fn(acc, val, key, obj);
	  });
	  return acc;
	}

	module.exports = objectReduce;

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    objectMatchers = __webpack_require__(281);

	var objectSome = objectMatchers.objectSome;

	Sugar.Object.defineInstanceAndStatic({

	  'some': objectSome

	});

	module.exports = Sugar.Object.some;

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    sum = __webpack_require__(306);

	Sugar.Object.defineInstanceAndStatic({

	  'sum': function(obj, map) {
	    return sum(obj, map);
	  }

	});

	module.exports = Sugar.Object.sum;

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var enumerateWithMapping = __webpack_require__(277);

	function sum(obj, map) {
	  var sum = 0;
	  enumerateWithMapping(obj, map, function(val) {
	    sum += val;
	  });
	  return sum;
	}

	module.exports = sum;

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    average = __webpack_require__(276);

	Sugar.Array.defineInstance({

	  'average': function(arr, map) {
	    return average(arr, map);
	  }

	});

	module.exports = Sugar.Array.average;

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    arrayCount = __webpack_require__(309),
	    fixArgumentLength = __webpack_require__(82);

	Sugar.Array.defineInstance({

	  'count': fixArgumentLength(arrayCount)

	});

	module.exports = Sugar.Array.count;

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var isUndefined = __webpack_require__(60),
	    enhancedMatcherMethods = __webpack_require__(310);

	var enhancedFilter = enhancedMatcherMethods.enhancedFilter;

	function arrayCount(arr, f) {
	  if (isUndefined(f)) {
	    return arr.length;
	  }
	  return enhancedFilter.apply(this, arguments).length;
	}

	module.exports = arrayCount;

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var buildEnhancedMatching = __webpack_require__(311);

	module.exports = {
	  enhancedFind: buildEnhancedMatching('find'),
	  enhancedSome: buildEnhancedMatching('some'),
	  enhancedEvery: buildEnhancedMatching('every'),
	  enhancedFilter: buildEnhancedMatching('filter'),
	  enhancedFindIndex: buildEnhancedMatching('findIndex')
	};

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var enhancedMatching = __webpack_require__(312),
	    wrapNativeArrayMethod = __webpack_require__(313);

	function buildEnhancedMatching(name) {
	  return wrapNativeArrayMethod(name, enhancedMatching);
	}

	module.exports = buildEnhancedMatching;

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getMatcher = __webpack_require__(217),
	    classChecks = __webpack_require__(14);

	var isFunction = classChecks.isFunction;

	function enhancedMatching(f) {
	  var matcher;
	  if (isFunction(f)) {
	    return f;
	  }
	  matcher = getMatcher(f);
	  return function(el, i, arr) {
	    return matcher(el, i, arr);
	  };
	}

	module.exports = enhancedMatching;

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var assertArgument = __webpack_require__(314);

	function wrapNativeArrayMethod(methodName, wrapper) {
	  var nativeFn = Array.prototype[methodName];
	  return function(arr, f, context, argsLen) {
	    var args = new Array(2);
	    assertArgument(argsLen > 0);
	    args[0] = wrapper(f, context);
	    args[1] = context;
	    return nativeFn.apply(arr, args);
	  };
	}

	module.exports = wrapNativeArrayMethod;

/***/ }),
/* 314 */
/***/ (function(module, exports) {

	'use strict';

	function assertArgument(exists) {
	  if (!exists) {
	    throw new TypeError('Argument required');
	  }
	}

	module.exports = assertArgument;

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    ENHANCEMENTS_FLAG = __webpack_require__(80),
	    ARRAY_ENHANCEMENTS_FLAG = __webpack_require__(316),
	    fixArgumentLength = __webpack_require__(82),
	    enhancedMatcherMethods = __webpack_require__(310);

	var enhancedEvery = enhancedMatcherMethods.enhancedEvery;

	Sugar.Array.defineInstance({

	  'every': fixArgumentLength(enhancedEvery)

	}, [ENHANCEMENTS_FLAG, ARRAY_ENHANCEMENTS_FLAG]);

	module.exports = Sugar.Array.every;

/***/ }),
/* 316 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = 'enhanceArray';

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(318);

	module.exports = Sugar.Array.everyFromIndex;

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var buildFromIndexMethods = __webpack_require__(319);

	buildFromIndexMethods();

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var forEach = __webpack_require__(10),
	    spaceSplit = __webpack_require__(18),
	    classChecks = __webpack_require__(14),
	    mathAliases = __webpack_require__(93),
	    assertArgument = __webpack_require__(314),
	    enhancedMapping = __webpack_require__(320),
	    namespaceAliases = __webpack_require__(154),
	    enhancedMatching = __webpack_require__(312),
	    getNormalizedIndex = __webpack_require__(24),
	    coreUtilityAliases = __webpack_require__(17),
	    methodDefineAliases = __webpack_require__(163);

	var forEachProperty = coreUtilityAliases.forEachProperty,
	    defineInstanceWithArguments = methodDefineAliases.defineInstanceWithArguments,
	    sugarArray = namespaceAliases.sugarArray,
	    min = mathAliases.min,
	    max = mathAliases.max,
	    isBoolean = classChecks.isBoolean;

	function buildFromIndexMethods() {

	  var methods = {
	    'forEach': {
	      base: forEachAsNative
	    },
	    'map': {
	      wrapper: enhancedMapping
	    },
	    'some every': {
	      wrapper: enhancedMatching
	    },
	    'findIndex': {
	      wrapper: enhancedMatching,
	      result: indexResult
	    },
	    'reduce': {
	      apply: applyReduce
	    },
	    'filter find': {
	      wrapper: enhancedMatching
	    },
	    'reduceRight': {
	      apply: applyReduce,
	      slice: sliceArrayFromRight,
	      clamp: clampStartIndexFromRight
	    }
	  };

	  forEachProperty(methods, function(opts, key) {
	    forEach(spaceSplit(key), function(baseName) {
	      var methodName = baseName + 'FromIndex';
	      var fn = createFromIndexWithOptions(baseName, opts);
	      defineInstanceWithArguments(sugarArray, methodName, fn);
	    });
	  });

	  function forEachAsNative(fn) {
	    forEach(this, fn);
	  }

	  // Methods like filter and find have a direct association between the value
	  // returned by the callback and the element of the current iteration. This
	  // means that when looping, array elements must match the actual index for
	  // which they are being called, so the array must be sliced. This is not the
	  // case for methods like forEach and map, which either do not use return
	  // values or use them in a way that simply getting the element at a shifted
	  // index will not affect the final return value. However, these methods will
	  // still fail on sparse arrays, so always slicing them here. For example, if
	  // "forEachFromIndex" were to be called on [1,,2] from index 1, although the
	  // actual index 1 would itself would be skipped, when the array loops back to
	  // index 0, shifting it by adding 1 would result in the element for that
	  // iteration being undefined. For shifting to work, all gaps in the array
	  // between the actual index and the shifted index would have to be accounted
	  // for. This is infeasible and is easily solved by simply slicing the actual
	  // array instead so that gaps align. Note also that in the case of forEach,
	  // we are using the internal function which handles sparse arrays in a way
	  // that does not increment the index, and so is highly optimized compared to
	  // the others here, which are simply going through the native implementation.
	  function sliceArrayFromLeft(arr, startIndex, loop) {
	    var result = arr;
	    if (startIndex) {
	      result = arr.slice(startIndex);
	      if (loop) {
	        result = result.concat(arr.slice(0, startIndex));
	      }
	    }
	    return result;
	  }

	  // When iterating from the right, indexes are effectively shifted by 1.
	  // For example, iterating from the right from index 2 in an array of 3
	  // should also include the last element in the array. This matches the
	  // "lastIndexOf" method which also iterates from the right.
	  function sliceArrayFromRight(arr, startIndex, loop) {
	    if (!loop) {
	      startIndex += 1;
	      arr = arr.slice(0, max(0, startIndex));
	    }
	    return arr;
	  }

	  function clampStartIndex(startIndex, len) {
	    return min(len, max(0, startIndex));
	  }

	  // As indexes are shifted by 1 when starting from the right, clamping has to
	  // go down to -1 to accommodate the full range of the sliced array.
	  function clampStartIndexFromRight(startIndex, len) {
	    return min(len, max(-1, startIndex));
	  }

	  function applyReduce(arr, startIndex, fn, context, len, loop) {
	    return function(acc, val, i) {
	      i = getNormalizedIndex(i + startIndex, len, loop);
	      return fn.call(arr, acc, val, i, arr);
	    };
	  }

	  function applyEach(arr, startIndex, fn, context, len, loop) {
	    return function(el, i) {
	      i = getNormalizedIndex(i + startIndex, len, loop);
	      return fn.call(context, arr[i], i, arr);
	    };
	  }

	  function indexResult(result, startIndex, len) {
	    if (result !== -1) {
	      result = (result + startIndex) % len;
	    }
	    return result;
	  }

	  function createFromIndexWithOptions(methodName, opts) {

	    var baseFn = opts.base || Array.prototype[methodName],
	        applyCallback = opts.apply || applyEach,
	        sliceArray = opts.slice || sliceArrayFromLeft,
	        clampIndex = opts.clamp || clampStartIndex,
	        getResult = opts.result,
	        wrapper = opts.wrapper;

	    return function(arr, startIndex, args) {
	      var callArgs = [], argIndex = 0, lastArg, result, len, loop, fn;
	      len = arr.length;
	      if (isBoolean(args[0])) {
	        loop = args[argIndex++];
	      }
	      fn = args[argIndex++];
	      lastArg = args[argIndex];
	      if (startIndex < 0) {
	        startIndex += len;
	      }
	      startIndex = clampIndex(startIndex, len);
	      assertArgument(args.length);
	      fn = wrapper ? wrapper(fn, lastArg) : fn;
	      callArgs.push(applyCallback(arr, startIndex, fn, lastArg, len, loop));
	      if (lastArg) {
	        callArgs.push(lastArg);
	      }
	      result = baseFn.apply(sliceArray(arr, startIndex, loop), callArgs);
	      if (getResult) {
	        result = getResult(result, startIndex, len);
	      }
	      return result;
	    };
	  }
	}

	module.exports = buildFromIndexMethods;

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classChecks = __webpack_require__(14),
	    mapWithShortcuts = __webpack_require__(233);

	var isFunction = classChecks.isFunction;

	function enhancedMapping(map, context) {
	  if (isFunction(map)) {
	    return map;
	  } else if (map) {
	    return function(el, i, arr) {
	      return mapWithShortcuts(el, map, context, [el, i, arr]);
	    };
	  }
	}

	module.exports = enhancedMapping;

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    ENHANCEMENTS_FLAG = __webpack_require__(80),
	    ARRAY_ENHANCEMENTS_FLAG = __webpack_require__(316),
	    fixArgumentLength = __webpack_require__(82),
	    enhancedMatcherMethods = __webpack_require__(310);

	var enhancedFilter = enhancedMatcherMethods.enhancedFilter;

	Sugar.Array.defineInstance({

	  'filter': fixArgumentLength(enhancedFilter)

	}, [ENHANCEMENTS_FLAG, ARRAY_ENHANCEMENTS_FLAG]);

	module.exports = Sugar.Array.filter;

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(318);

	module.exports = Sugar.Array.filterFromIndex;

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    ENHANCEMENTS_FLAG = __webpack_require__(80),
	    ARRAY_ENHANCEMENTS_FLAG = __webpack_require__(316),
	    fixArgumentLength = __webpack_require__(82),
	    enhancedMatcherMethods = __webpack_require__(310);

	var enhancedFind = enhancedMatcherMethods.enhancedFind;

	Sugar.Array.defineInstance({

	  'find': fixArgumentLength(enhancedFind)

	}, [ENHANCEMENTS_FLAG, ARRAY_ENHANCEMENTS_FLAG]);

	module.exports = Sugar.Array.find;

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(318);

	module.exports = Sugar.Array.findFromIndex;

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    ENHANCEMENTS_FLAG = __webpack_require__(80),
	    ARRAY_ENHANCEMENTS_FLAG = __webpack_require__(316),
	    fixArgumentLength = __webpack_require__(82),
	    enhancedMatcherMethods = __webpack_require__(310);

	var enhancedFindIndex = enhancedMatcherMethods.enhancedFindIndex;

	Sugar.Array.defineInstance({

	  'findIndex': fixArgumentLength(enhancedFindIndex)

	}, [ENHANCEMENTS_FLAG, ARRAY_ENHANCEMENTS_FLAG]);

	module.exports = Sugar.Array.findIndex;

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(318);

	module.exports = Sugar.Array.findIndexFromIndex;

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(318);

	module.exports = Sugar.Array.forEachFromIndex;

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    getLeastOrMost = __webpack_require__(290);

	Sugar.Array.defineInstance({

	  'least': function(arr, all, map) {
	    return getLeastOrMost(arr, all, map);
	  }

	});

	module.exports = Sugar.Array.least;

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    ENHANCEMENTS_FLAG = __webpack_require__(80),
	    ARRAY_ENHANCEMENTS_FLAG = __webpack_require__(316),
	    enhancedMap = __webpack_require__(330),
	    fixArgumentLength = __webpack_require__(82);

	Sugar.Array.defineInstance({

	  'map': fixArgumentLength(enhancedMap)

	}, [ENHANCEMENTS_FLAG, ARRAY_ENHANCEMENTS_FLAG]);

	module.exports = Sugar.Array.map;

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var buildEnhancedMapping = __webpack_require__(331);

	module.exports = buildEnhancedMapping('map');

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var enhancedMapping = __webpack_require__(320),
	    wrapNativeArrayMethod = __webpack_require__(313);

	function buildEnhancedMapping(name) {
	  return wrapNativeArrayMethod(name, enhancedMapping);
	}

	module.exports = buildEnhancedMapping;

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(318);

	module.exports = Sugar.Array.mapFromIndex;

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    getMinOrMax = __webpack_require__(291);

	Sugar.Array.defineInstance({

	  'max': function(arr, all, map) {
	    return getMinOrMax(arr, all, map, true);
	  }

	});

	module.exports = Sugar.Array.max;

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    median = __webpack_require__(297);

	Sugar.Array.defineInstance({

	  'median': function(arr, map) {
	    return median(arr, map);
	  }

	});

	module.exports = Sugar.Array.median;

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    getMinOrMax = __webpack_require__(291);

	Sugar.Array.defineInstance({

	  'min': function(arr, all, map) {
	    return getMinOrMax(arr, all, map);
	  }

	});

	module.exports = Sugar.Array.min;

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    getLeastOrMost = __webpack_require__(290);

	Sugar.Array.defineInstance({

	  'most': function(arr, all, map) {
	    return getLeastOrMost(arr, all, map, true);
	  }

	});

	module.exports = Sugar.Array.most;

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    arrayNone = __webpack_require__(338),
	    fixArgumentLength = __webpack_require__(82);

	Sugar.Array.defineInstance({

	  'none': fixArgumentLength(arrayNone)

	});

	module.exports = Sugar.Array.none;

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var enhancedMatcherMethods = __webpack_require__(310);

	var enhancedSome = enhancedMatcherMethods.enhancedSome;

	function arrayNone() {
	  return !enhancedSome.apply(this, arguments);
	}

	module.exports = arrayNone;

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(318);

	module.exports = Sugar.Array.reduceFromIndex;

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(318);

	module.exports = Sugar.Array.reduceRightFromIndex;

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    ENHANCEMENTS_FLAG = __webpack_require__(80),
	    ARRAY_ENHANCEMENTS_FLAG = __webpack_require__(316),
	    fixArgumentLength = __webpack_require__(82),
	    enhancedMatcherMethods = __webpack_require__(310);

	var enhancedSome = enhancedMatcherMethods.enhancedSome;

	Sugar.Array.defineInstance({

	  'some': fixArgumentLength(enhancedSome)

	}, [ENHANCEMENTS_FLAG, ARRAY_ENHANCEMENTS_FLAG]);

	module.exports = Sugar.Array.some;

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(318);

	module.exports = Sugar.Array.someFromIndex;

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    sum = __webpack_require__(306);

	Sugar.Array.defineInstance({

	  'sum': function(arr, map) {
	    return sum(arr, map);
	  }

	});

	module.exports = Sugar.Array.sum;

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// Static Methods
	__webpack_require__(345);
	__webpack_require__(359);
	__webpack_require__(361);
	__webpack_require__(362);
	__webpack_require__(364);
	__webpack_require__(366);
	__webpack_require__(376);
	__webpack_require__(377);
	__webpack_require__(379);
	__webpack_require__(381);
	__webpack_require__(382);
	__webpack_require__(385);
	__webpack_require__(389);
	__webpack_require__(390);
	__webpack_require__(391);
	__webpack_require__(394);
	__webpack_require__(395);
	__webpack_require__(396);
	__webpack_require__(397);
	__webpack_require__(398);
	__webpack_require__(399);
	__webpack_require__(400);
	__webpack_require__(401);
	__webpack_require__(402);
	__webpack_require__(403);
	__webpack_require__(404);
	__webpack_require__(405);
	__webpack_require__(409);
	__webpack_require__(411);
	__webpack_require__(413);
	__webpack_require__(415);
	__webpack_require__(416);
	__webpack_require__(417);
	__webpack_require__(419);
	__webpack_require__(425);

	// Instance Methods
	__webpack_require__(427);

	module.exports = __webpack_require__(8);

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    clone = __webpack_require__(346),
	    mergeWithOptions = __webpack_require__(358);

	Sugar.Object.defineInstanceAndStatic({

	  'add': function(obj1, obj2, opts) {
	    return mergeWithOptions(clone(obj1), obj2, opts);
	  }

	});

	module.exports = Sugar.Object.add;

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var objectMerge = __webpack_require__(347),
	    getNewObjectForMerge = __webpack_require__(349);

	function clone(source, deep) {
	  var target = getNewObjectForMerge(source);
	  return objectMerge(target, source, deep, true, true, true);
	}

	module.exports = clone;

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    isDefined = __webpack_require__(37),
	    classChecks = __webpack_require__(14),
	    isPrimitive = __webpack_require__(72),
	    isUndefined = __webpack_require__(60),
	    isObjectType = __webpack_require__(20),
	    coreUtilityAliases = __webpack_require__(17),
	    getOwnPropertyNames = __webpack_require__(348),
	    getNewObjectForMerge = __webpack_require__(349),
	    iterateOverProperties = __webpack_require__(350),
	    coercePrimitiveToObject = __webpack_require__(354),
	    mergeByPropertyDescriptor = __webpack_require__(357);

	var isDate = classChecks.isDate,
	    isRegExp = classChecks.isRegExp,
	    isFunction = classChecks.isFunction,
	    getOwn = coreUtilityAliases.getOwn;

	function objectMerge(target, source, deep, resolve, hidden, descriptor) {
	  var resolveByFunction = isFunction(resolve), resolveConflicts = resolve !== false;

	  if (isUndefined(target)) {
	    target = getNewObjectForMerge(source);
	  } else if (resolveConflicts && isDate(target) && isDate(source)) {
	    // A date's timestamp is a property that can only be reached through its
	    // methods, so actively set it up front if both are dates.
	    target.setTime(source.getTime());
	  }

	  if (isPrimitive(target)) {
	    // Will not merge into a primitive type, so simply override.
	    return source;
	  }

	  // If the source object is a primitive
	  // type then coerce it into an object.
	  if (isPrimitive(source)) {
	    source = coercePrimitiveToObject(source);
	  }

	  iterateOverProperties(hidden, source, function(val, key) {
	    var sourceVal, targetVal, resolved, goDeep, result;

	    sourceVal = source[key];

	    // We are iterating over properties of the source, so hasOwnProperty on
	    // it is guaranteed to always be true. However, the target may happen to
	    // have properties in its prototype chain that should not be considered
	    // as conflicts.
	    targetVal = getOwn(target, key);

	    if (resolveByFunction) {
	      result = resolve(key, targetVal, sourceVal, target, source);
	      if (isUndefined(result)) {
	        // Result is undefined so do not merge this property.
	        return;
	      } else if (isDefined(result) && result !== Sugar) {
	        // If the source returns anything except undefined, then the conflict
	        // has been resolved, so don't continue traversing into the object. If
	        // the returned value is the Sugar global object, then allowing Sugar
	        // to resolve the conflict, so continue on.
	        sourceVal = result;
	        resolved = true;
	      }
	    } else if (isUndefined(sourceVal)) {
	      // Will not merge undefined.
	      return;
	    }

	    // Regex properties are read-only, so intentionally disallowing deep
	    // merging for now. Instead merge by reference even if deep.
	    goDeep = !resolved && deep && isObjectType(sourceVal) && !isRegExp(sourceVal);

	    if (!goDeep && !resolveConflicts && isDefined(targetVal)) {
	      return;
	    }

	    if (goDeep) {
	      sourceVal = objectMerge(targetVal, sourceVal, deep, resolve, hidden, descriptor);
	    }

	    // getOwnPropertyNames is standing in as
	    // a test for property descriptor support
	    if (getOwnPropertyNames && descriptor) {
	      mergeByPropertyDescriptor(target, source, key, sourceVal);
	    } else {
	      target[key] = sourceVal;
	    }

	  });
	  return target;
	}

	module.exports = objectMerge;

/***/ }),
/* 348 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = Object.getOwnPropertyNames;

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classChecks = __webpack_require__(14),
	    isPrimitive = __webpack_require__(72),
	    isPlainObject = __webpack_require__(19),
	    getRegExpFlags = __webpack_require__(39),
	    coreUtilityAliases = __webpack_require__(17);

	var classToString = coreUtilityAliases.classToString,
	    isDate = classChecks.isDate,
	    isRegExp = classChecks.isRegExp,
	    isArray = classChecks.isArray;

	function getNewObjectForMerge(source) {
	  var klass = classToString(source);
	  // Primitive types, dates, and regexes have no "empty" state. If they exist
	  // at all, then they have an associated value. As we are only creating new
	  // objects when they don't exist in the target, these values can come alone
	  // for the ride when created.
	  if (isArray(source, klass)) {
	    return [];
	  } else if (isPlainObject(source, klass)) {
	    return {};
	  } else if (isDate(source, klass)) {
	    return new Date(source.getTime());
	  } else if (isRegExp(source, klass)) {
	    return RegExp(source.source, getRegExpFlags(source));
	  } else if (isPrimitive(source && source.valueOf())) {
	    return source;
	  }
	  // If the object is not of a known type, then simply merging its
	  // properties into a plain object will result in something different
	  // (it will not respond to instanceof operator etc). Similarly we don't
	  // want to call a constructor here as we can't know for sure what the
	  // original constructor was called with (Events etc), so throw an
	  // error here instead. Non-standard types can be handled if either they
	  // already exist and simply have their properties merged, if the merge
	  // is not deep so their references will simply be copied over, or if a
	  // resolve function is used to assist the merge.
	  throw new TypeError('Must be a basic data type');
	}

	module.exports = getNewObjectForMerge;

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var iterateOverKeys = __webpack_require__(351),
	    coreUtilityAliases = __webpack_require__(17),
	    getOwnPropertyNames = __webpack_require__(348),
	    getOwnPropertySymbols = __webpack_require__(353);

	var forEachProperty = coreUtilityAliases.forEachProperty;

	function iterateOverProperties(hidden, obj, fn) {
	  if (getOwnPropertyNames && hidden) {
	    iterateOverKeys(getOwnPropertyNames, obj, fn, hidden);
	  } else {
	    forEachProperty(obj, fn);
	  }
	  if (getOwnPropertySymbols) {
	    iterateOverKeys(getOwnPropertySymbols, obj, fn, hidden);
	  }
	}

	module.exports = iterateOverProperties;

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getOwnPropertyDescriptor = __webpack_require__(352);

	function iterateOverKeys(getFn, obj, fn, hidden) {
	  var keys = getFn(obj), desc;
	  for (var i = 0, key; key = keys[i]; i++) {
	    desc = getOwnPropertyDescriptor(obj, key);
	    if (desc.enumerable || hidden) {
	      fn(obj[key], key);
	    }
	  }
	}

	module.exports = iterateOverKeys;

/***/ }),
/* 352 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = Object.getOwnPropertyDescriptor;

/***/ }),
/* 353 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = Object.getOwnPropertySymbols;

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var NO_KEYS_IN_STRING_OBJECTS = __webpack_require__(355),
	    isPrimitive = __webpack_require__(72),
	    classChecks = __webpack_require__(14),
	    forceStringCoercion = __webpack_require__(356);

	var isString = classChecks.isString;

	function coercePrimitiveToObject(obj) {
	  if (isPrimitive(obj)) {
	    obj = Object(obj);
	  }
	  // istanbul ignore next
	  if (NO_KEYS_IN_STRING_OBJECTS && isString(obj)) {
	    forceStringCoercion(obj);
	  }
	  return obj;
	}

	module.exports = coercePrimitiveToObject;

/***/ }),
/* 355 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = !('0' in Object('a'));

/***/ }),
/* 356 */
/***/ (function(module, exports) {

	'use strict';

	function forceStringCoercion(obj) {
	  var i = 0, chr;
	  while (chr = obj.charAt(i)) {
	    obj[i++] = chr;
	  }
	}

	module.exports = forceStringCoercion;

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var isDefined = __webpack_require__(37),
	    coreUtilityAliases = __webpack_require__(17),
	    getOwnPropertyDescriptor = __webpack_require__(352);

	var defineProperty = coreUtilityAliases.defineProperty;

	function mergeByPropertyDescriptor(target, source, prop, sourceVal) {
	  var descriptor = getOwnPropertyDescriptor(source, prop);
	  if (isDefined(descriptor.value)) {
	    descriptor.value = sourceVal;
	  }
	  defineProperty(target, prop, descriptor);
	}

	module.exports = mergeByPropertyDescriptor;

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var objectMerge = __webpack_require__(347);

	function mergeWithOptions(target, source, opts) {
	  opts = opts || {};
	  return objectMerge(target, source, opts.deep, opts.resolve, opts.hidden, opts.descriptor);
	}

	module.exports = mergeWithOptions;

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    clone = __webpack_require__(346),
	    mergeAll = __webpack_require__(360);

	Sugar.Object.defineInstanceAndStatic({

	  'addAll': function(obj, sources, opts) {
	    return mergeAll(clone(obj), sources, opts);
	  }

	});

	module.exports = Sugar.Object.addAll;

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var forEach = __webpack_require__(10),
	    classChecks = __webpack_require__(14),
	    mergeWithOptions = __webpack_require__(358);

	var isArray = classChecks.isArray;

	function mergeAll(target, sources, opts) {
	  if (!isArray(sources)) {
	    sources = [sources];
	  }
	  forEach(sources, function(source) {
	    return mergeWithOptions(target, source, opts);
	  });
	  return target;
	}

	module.exports = mergeAll;

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    clone = __webpack_require__(346);

	Sugar.Object.defineInstanceAndStatic({

	  'clone': function(obj, deep) {
	    return clone(obj, deep);
	  }

	});

	module.exports = Sugar.Object.clone;

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    defaults = __webpack_require__(363);

	Sugar.Object.defineInstanceAndStatic({

	  'defaults': function(target, sources, opts) {
	    return defaults(target, sources, opts);
	  }

	});

	module.exports = Sugar.Object.defaults;

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var mergeAll = __webpack_require__(360);

	function defaults(target, sources, opts) {
	  opts = opts || {};
	  opts.resolve = opts.resolve || false;
	  return mergeAll(target, sources, opts);
	}

	module.exports = defaults;

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    objectExclude = __webpack_require__(365);

	Sugar.Object.defineInstanceAndStatic({

	  'exclude': function(obj, f) {
	    return objectExclude(obj, f);
	  }

	});

	module.exports = Sugar.Object.exclude;

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getMatcher = __webpack_require__(217),
	    coreUtilityAliases = __webpack_require__(17);

	var forEachProperty = coreUtilityAliases.forEachProperty;

	function objectExclude(obj, f) {
	  var result = {};
	  var matcher = getMatcher(f);
	  forEachProperty(obj, function(val, key) {
	    if (!matcher(val, key, obj)) {
	      result[key] = val;
	    }
	  });
	  return result;
	}

	module.exports = objectExclude;

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    fromQueryStringWithOptions = __webpack_require__(367);

	Sugar.Object.defineStatic({

	  'fromQueryString': function(obj, options) {
	    return fromQueryStringWithOptions(obj, options);
	  }

	});

	module.exports = Sugar.Object.fromQueryString;

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var forEach = __webpack_require__(10),
	    parseQueryComponent = __webpack_require__(368);

	function fromQueryStringWithOptions(obj, opts) {
	  var str = String(obj || '').replace(/^.*?\?/, ''), result = {}, auto;
	  opts = opts || {};
	  if (str) {
	    forEach(str.split('&'), function(p) {
	      var split = p.split('=');
	      var key = decodeURIComponent(split[0]);
	      var val = split.length === 2 ? decodeURIComponent(split[1]) : '';
	      auto = opts.auto !== false;
	      parseQueryComponent(result, key, val, opts.deep, auto, opts.separator, opts.transform);
	    });
	  }
	  return result;
	}

	module.exports = fromQueryStringWithOptions;

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var DEEP_QUERY_STRING_REG = __webpack_require__(369),
	    setQueryProperty = __webpack_require__(370),
	    mapQuerySeparatorToKeys = __webpack_require__(374),
	    parseDeepQueryComponent = __webpack_require__(375);

	function parseQueryComponent(obj, key, val, deep, auto, separator, transform) {
	  var match;
	  if (separator) {
	    key = mapQuerySeparatorToKeys(key, separator);
	    deep = true;
	  }
	  if (deep === true && (match = key.match(DEEP_QUERY_STRING_REG))) {
	    parseDeepQueryComponent(obj, match, val, deep, auto, separator, transform);
	  } else {
	    setQueryProperty(obj, key, val, auto, transform);
	  }
	}

	module.exports = parseQueryComponent;

/***/ }),
/* 369 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = /^(.+?)(\[.*\])$/;

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var isDefined = __webpack_require__(37),
	    getQueryValueAuto = __webpack_require__(371);

	function setQueryProperty(obj, key, val, auto, transform) {
	  var fnValue;
	  if (transform) {
	    fnValue = transform(val, key, obj);
	  }
	  if (isDefined(fnValue)) {
	    val = fnValue;
	  } else if (auto) {
	    val = getQueryValueAuto(obj, key, val);
	  }
	  obj[key] = val;
	}

	module.exports = setQueryProperty;

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classChecks = __webpack_require__(14),
	    stringIsDecimal = __webpack_require__(372),
	    coreUtilityAliases = __webpack_require__(17);

	var getOwn = coreUtilityAliases.getOwn,
	    isArray = classChecks.isArray;

	function getQueryValueAuto(obj, key, val) {
	  if (!val) {
	    return null;
	  } else if (val === 'true') {
	    return true;
	  } else if (val === 'false') {
	    return false;
	  }
	  var num = +val;
	  if (!isNaN(num) && stringIsDecimal(val)) {
	    return num;
	  }
	  var existing = getOwn(obj, key);
	  if (val && existing) {
	    return isArray(existing) ? existing.concat(val) : [existing, val];
	  }
	  return val;
	}

	module.exports = getQueryValueAuto;

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var NON_DECIMAL_REG = __webpack_require__(373);

	function stringIsDecimal(str) {
	  return str !== '' && !NON_DECIMAL_REG.test(str);
	}

	module.exports = stringIsDecimal;

/***/ }),
/* 373 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = /[^\d.-]/;

/***/ }),
/* 374 */
/***/ (function(module, exports) {

	'use strict';

	function mapQuerySeparatorToKeys(key, separator) {
	  var split = key.split(separator), result = split[0];
	  for (var i = 1, len = split.length; i < len; i++) {
	    result += '[' + split[i] + ']';
	  }
	  return result;
	}

	module.exports = mapQuerySeparatorToKeys;

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var forEach = __webpack_require__(10),
	    setQueryProperty = __webpack_require__(370),
	    coreUtilityAliases = __webpack_require__(17);

	var hasOwn = coreUtilityAliases.hasOwn,
	    getOwn = coreUtilityAliases.getOwn;

	function parseDeepQueryComponent(obj, match, val, deep, auto, separator, transform) {
	  var key = match[1];
	  var inner = match[2].slice(1, -1).split('][');
	  forEach(inner, function(k) {
	    if (!hasOwn(obj, key)) {
	      obj[key] = k ? {} : [];
	    }
	    obj = getOwn(obj, key);
	    key = k ? k : obj.length.toString();
	  });
	  setQueryProperty(obj, key, val, auto, transform);
	}

	module.exports = parseDeepQueryComponent;

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    deepGetProperty = __webpack_require__(64);

	Sugar.Object.defineInstanceAndStatic({

	  'get': function(obj, key, any) {
	    return deepGetProperty(obj, key, any);
	  }

	});

	module.exports = Sugar.Object.get;

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    deepHasProperty = __webpack_require__(378);

	Sugar.Object.defineInstanceAndStatic({

	  'has': function(obj, key, any) {
	    return deepHasProperty(obj, key, any);
	  }

	});

	module.exports = Sugar.Object.has;

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var handleDeepProperty = __webpack_require__(65);

	function deepHasProperty(obj, key, any) {
	  return handleDeepProperty(obj, key, any, true);
	}

	module.exports = deepHasProperty;

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    objectIntersectOrSubtract = __webpack_require__(380);

	Sugar.Object.defineInstanceAndStatic({

	  'intersect': function(obj1, obj2) {
	    return objectIntersectOrSubtract(obj1, obj2, false);
	  }

	});

	module.exports = Sugar.Object.intersect;

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var isEqual = __webpack_require__(221),
	    objectMerge = __webpack_require__(347),
	    isObjectType = __webpack_require__(20),
	    coercePrimitiveToObject = __webpack_require__(354);

	function objectIntersectOrSubtract(obj1, obj2, subtract) {
	  if (!isObjectType(obj1)) {
	    return subtract ? obj1 : {};
	  }
	  obj2 = coercePrimitiveToObject(obj2);
	  function resolve(key, val, val1) {
	    var exists = key in obj2 && isEqual(val1, obj2[key]);
	    if (exists !== subtract) {
	      return val1;
	    }
	  }
	  return objectMerge({}, obj1, false, resolve);
	}

	module.exports = objectIntersectOrSubtract;

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    coreUtilityAliases = __webpack_require__(17);

	var hasOwn = coreUtilityAliases.hasOwn,
	    forEachProperty = coreUtilityAliases.forEachProperty;

	Sugar.Object.defineInstanceAndStatic({

	  'invert': function(obj, multi) {
	    var result = {};
	    multi = multi === true;
	    forEachProperty(obj, function(val, key) {
	      if (hasOwn(result, val) && multi) {
	        result[val].push(key);
	      } else if (multi) {
	        result[val] = [key];
	      } else {
	        result[val] = key;
	      }
	    });
	    return result;
	  }

	});

	module.exports = Sugar.Object.invert;

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    isArguments = __webpack_require__(383);

	Sugar.Object.defineInstanceAndStatic({

	  'isArguments': function(obj) {
	    return isArguments(obj);
	  }

	});

	module.exports = Sugar.Object.isArguments;

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var hasProperty = __webpack_require__(384),
	    coreUtilityAliases = __webpack_require__(17);

	var classToString = coreUtilityAliases.classToString;

	function isArguments(obj, className) {
	  className = className || classToString(obj);
	  // .callee exists on Arguments objects in < IE8
	  return hasProperty(obj, 'length') && (className === '[object Arguments]' || !!obj.callee);
	}

	module.exports = isArguments;

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var isPrimitive = __webpack_require__(72);

	function hasProperty(obj, prop) {
	  return !isPrimitive(obj) && prop in obj;
	}

	module.exports = hasProperty;

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(386);

	module.exports = Sugar.Object.isArray;

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var buildClassCheckMethods = __webpack_require__(387);

	buildClassCheckMethods();

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var NATIVE_TYPES = __webpack_require__(15),
	    classChecks = __webpack_require__(14),
	    namespaceAliases = __webpack_require__(154),
	    defineInstanceAndStaticSimilar = __webpack_require__(388);

	var isBoolean = classChecks.isBoolean,
	    isNumber = classChecks.isNumber,
	    isString = classChecks.isString,
	    isDate = classChecks.isDate,
	    isRegExp = classChecks.isRegExp,
	    isFunction = classChecks.isFunction,
	    isArray = classChecks.isArray,
	    isSet = classChecks.isSet,
	    isMap = classChecks.isMap,
	    isError = classChecks.isError,
	    sugarObject = namespaceAliases.sugarObject;

	function buildClassCheckMethods() {
	  var checks = [isBoolean, isNumber, isString, isDate, isRegExp, isFunction, isArray, isError, isSet, isMap];
	  defineInstanceAndStaticSimilar(sugarObject, NATIVE_TYPES, function(methods, name, i) {
	    methods['is' + name] = checks[i];
	  });
	}

	module.exports = buildClassCheckMethods;

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var methodDefineAliases = __webpack_require__(163),
	    collectSimilarMethods = __webpack_require__(165);

	var defineInstanceAndStatic = methodDefineAliases.defineInstanceAndStatic;

	function defineInstanceAndStaticSimilar(sugarNamespace, set, fn, flags) {
	  defineInstanceAndStatic(sugarNamespace, collectSimilarMethods(set, fn), flags);
	}

	module.exports = defineInstanceAndStaticSimilar;

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(386);

	module.exports = Sugar.Object.isBoolean;

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(386);

	module.exports = Sugar.Object.isDate;

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    objectSize = __webpack_require__(392);

	Sugar.Object.defineInstanceAndStatic({

	  'isEmpty': function(obj) {
	    return objectSize(obj) === 0;
	  }

	});

	module.exports = Sugar.Object.isEmpty;

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getKeysWithObjectCoercion = __webpack_require__(393);

	function objectSize(obj) {
	  return getKeysWithObjectCoercion(obj).length;
	}

	module.exports = objectSize;

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getKeys = __webpack_require__(222),
	    coercePrimitiveToObject = __webpack_require__(354);

	function getKeysWithObjectCoercion(obj) {
	  return getKeys(coercePrimitiveToObject(obj));
	}

	module.exports = getKeysWithObjectCoercion;

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    isEqual = __webpack_require__(221);

	Sugar.Object.defineInstanceAndStatic({

	  'isEqual': function(obj1, obj2) {
	    return isEqual(obj1, obj2);
	  }

	});

	module.exports = Sugar.Object.isEqual;

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(386);

	module.exports = Sugar.Object.isError;

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(386);

	module.exports = Sugar.Object.isFunction;

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(386);

	module.exports = Sugar.Object.isMap;

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(386);

	module.exports = Sugar.Object.isNumber;

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    isPlainObject = __webpack_require__(19);

	Sugar.Object.defineInstanceAndStatic({

	  'isObject': function(obj) {
	    return isPlainObject(obj);
	  }

	});

	module.exports = Sugar.Object.isObject;

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(386);

	module.exports = Sugar.Object.isRegExp;

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(386);

	module.exports = Sugar.Object.isSet;

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(386);

	module.exports = Sugar.Object.isString;

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    mergeWithOptions = __webpack_require__(358);

	Sugar.Object.defineInstanceAndStatic({

	  'merge': function(target, source, opts) {
	    return mergeWithOptions(target, source, opts);
	  }

	});

	module.exports = Sugar.Object.merge;

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    mergeAll = __webpack_require__(360);

	Sugar.Object.defineInstanceAndStatic({

	  'mergeAll': function(target, sources, opts) {
	    return mergeAll(target, sources, opts);
	  }

	});

	module.exports = Sugar.Object.mergeAll;

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    objectReject = __webpack_require__(406);

	Sugar.Object.defineInstanceAndStatic({

	  'reject': function(obj, f) {
	    return objectReject(obj, f);
	  }

	});

	module.exports = Sugar.Object.reject;

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var selectFromObject = __webpack_require__(407);

	function objectReject(obj, f) {
	  return selectFromObject(obj, f, false);
	}

	module.exports = objectReject;

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var matchInObject = __webpack_require__(408),
	    coreUtilityAliases = __webpack_require__(17);

	var forEachProperty = coreUtilityAliases.forEachProperty;

	function selectFromObject(obj, f, select) {
	  var match, result = {};
	  f = [].concat(f);
	  forEachProperty(obj, function(val, key) {
	    match = false;
	    for (var i = 0; i < f.length; i++) {
	      if (matchInObject(f[i], key)) {
	        match = true;
	      }
	    }
	    if (match === select) {
	      result[key] = val;
	    }
	  });
	  return result;
	}

	module.exports = selectFromObject;

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classChecks = __webpack_require__(14),
	    isObjectType = __webpack_require__(20);

	var isRegExp = classChecks.isRegExp;

	function matchInObject(match, key) {
	  if (isRegExp(match)) {
	    return match.test(key);
	  } else if (isObjectType(match)) {
	    return key in match;
	  } else {
	    return key === String(match);
	  }
	}

	module.exports = matchInObject;

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    objectRemove = __webpack_require__(410);

	Sugar.Object.defineInstanceAndStatic({

	  'remove': function(obj, f) {
	    return objectRemove(obj, f);
	  }

	});

	module.exports = Sugar.Object.remove;

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getMatcher = __webpack_require__(217),
	    coreUtilityAliases = __webpack_require__(17);

	var forEachProperty = coreUtilityAliases.forEachProperty;

	function objectRemove(obj, f) {
	  var matcher = getMatcher(f);
	  forEachProperty(obj, function(val, key) {
	    if (matcher(val, key, obj)) {
	      delete obj[key];
	    }
	  });
	  return obj;
	}

	module.exports = objectRemove;

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    objectSelect = __webpack_require__(412);

	Sugar.Object.defineInstanceAndStatic({

	  'select': function(obj, f) {
	    return objectSelect(obj, f);
	  }

	});

	module.exports = Sugar.Object.select;

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var selectFromObject = __webpack_require__(407);

	function objectSelect(obj, f) {
	  return selectFromObject(obj, f, true);
	}

	module.exports = objectSelect;

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    deepSetProperty = __webpack_require__(414);

	Sugar.Object.defineInstanceAndStatic({

	  'set': function(obj, key, val) {
	    return deepSetProperty(obj, key, val);
	  }

	});

	module.exports = Sugar.Object.set;

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var handleDeepProperty = __webpack_require__(65);

	function deepSetProperty(obj, key, val) {
	  handleDeepProperty(obj, key, false, false, true, false, val);
	  return obj;
	}

	module.exports = deepSetProperty;

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    objectSize = __webpack_require__(392);

	Sugar.Object.defineInstanceAndStatic({

	  'size': function(obj) {
	    return objectSize(obj);
	  }

	});

	module.exports = Sugar.Object.size;

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    objectIntersectOrSubtract = __webpack_require__(380);

	Sugar.Object.defineInstanceAndStatic({

	  'subtract': function(obj1, obj2) {
	    return objectIntersectOrSubtract(obj1, obj2, true);
	  }

	});

	module.exports = Sugar.Object.subtract;

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    tap = __webpack_require__(418);

	Sugar.Object.defineInstanceAndStatic({

	  'tap': function(obj, arg) {
	    return tap(obj, arg);
	  }

	});

	module.exports = Sugar.Object.tap;

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classChecks = __webpack_require__(14);

	var isFunction = classChecks.isFunction;

	function tap(obj, arg) {
	  var fn = arg;
	  if (!isFunction(arg)) {
	    fn = function() {
	      if (arg) obj[arg]();
	    };
	  }
	  fn.call(obj, obj);
	  return obj;
	}

	module.exports = tap;

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    toQueryStringWithOptions = __webpack_require__(420);

	Sugar.Object.defineInstanceAndStatic({

	  'toQueryString': function(obj, options) {
	    return toQueryStringWithOptions(obj, options);
	  }

	});

	module.exports = Sugar.Object.toQueryString;

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var isUndefined = __webpack_require__(60),
	    toQueryString = __webpack_require__(421);

	function toQueryStringWithOptions(obj, opts) {
	  opts = opts || {};
	  if (isUndefined(opts.separator)) {
	    opts.separator = '_';
	  }
	  return toQueryString(obj, opts.deep, opts.transform, opts.prefix || '', opts.separator);
	}

	module.exports = toQueryStringWithOptions;

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classChecks = __webpack_require__(14),
	    isObjectType = __webpack_require__(20),
	    internalToString = __webpack_require__(422),
	    coreUtilityAliases = __webpack_require__(17),
	    getURIComponentValue = __webpack_require__(423),
	    sanitizeURIComponent = __webpack_require__(424);

	var isArray = classChecks.isArray,
	    forEachProperty = coreUtilityAliases.forEachProperty;

	function toQueryString(obj, deep, transform, prefix, separator) {
	  if (isArray(obj)) {
	    return collectArrayAsQueryString(obj, deep, transform, prefix, separator);
	  } else if (isObjectType(obj) && obj.toString === internalToString) {
	    return collectObjectAsQueryString(obj, deep, transform, prefix, separator);
	  } else if (prefix) {
	    return getURIComponentValue(obj, prefix, transform);
	  }
	  return '';
	}

	function collectArrayAsQueryString(arr, deep, transform, prefix, separator) {
	  var el, qc, key, result = [];
	  // Intentionally treating sparse arrays as dense here by avoiding map,
	  // otherwise indexes will shift during the process of serialization.
	  for (var i = 0, len = arr.length; i < len; i++) {
	    el = arr[i];
	    key = prefix + (prefix && deep ? '[]' : '');
	    if (!key && !isObjectType(el)) {
	      // If there is no key, then the values of the array should be
	      // considered as null keys, so use them instead;
	      qc = sanitizeURIComponent(el);
	    } else {
	      qc = toQueryString(el, deep, transform, key, separator);
	    }
	    result.push(qc);
	  }
	  return result.join('&');
	}

	function collectObjectAsQueryString(obj, deep, transform, prefix, separator) {
	  var result = [];
	  forEachProperty(obj, function(val, key) {
	    var fullKey;
	    if (prefix && deep) {
	      fullKey = prefix + '[' + key + ']';
	    } else if (prefix) {
	      fullKey = prefix + separator + key;
	    } else {
	      fullKey = key;
	    }
	    result.push(toQueryString(val, deep, transform, fullKey, separator));
	  });
	  return result.join('&');
	}

	module.exports = toQueryString;

/***/ }),
/* 422 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = Object.prototype.toString;

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classChecks = __webpack_require__(14),
	    sanitizeURIComponent = __webpack_require__(424);

	var isDate = classChecks.isDate;

	function getURIComponentValue(obj, prefix, transform) {
	  var value;
	  if (transform) {
	    value = transform(obj, prefix);
	  } else if (isDate(obj)) {
	    value = obj.getTime();
	  } else {
	    value = obj;
	  }
	  return sanitizeURIComponent(prefix) + '=' + sanitizeURIComponent(value);
	}

	module.exports = getURIComponentValue;

/***/ }),
/* 424 */
/***/ (function(module, exports) {

	'use strict';

	function sanitizeURIComponent(obj) {
	  // undefined, null, and NaN are represented as a blank string,
	  // while false and 0 are stringified.
	  return !obj && obj !== false && obj !== 0 ? '' : encodeURIComponent(obj);
	}

	module.exports = sanitizeURIComponent;

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    getValues = __webpack_require__(426);

	Sugar.Object.defineInstanceAndStatic({

	  'values': function(obj) {
	    return getValues(obj);
	  }

	});

	module.exports = Sugar.Object.values;

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var coreUtilityAliases = __webpack_require__(17);

	var forEachProperty = coreUtilityAliases.forEachProperty;

	function getValues(obj) {
	  var values = [];
	  forEachProperty(obj, function(val) {
	    values.push(val);
	  });
	  return values;
	}

	module.exports = getValues;

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    getKeys = __webpack_require__(222);

	Sugar.Object.defineInstance({

	  'keys': function(obj) {
	    return getKeys(obj);
	  }

	});

	module.exports = Sugar.Object.keys;

/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// Static Methods
	__webpack_require__(429);
	__webpack_require__(459);
	__webpack_require__(502);
	__webpack_require__(503);
	__webpack_require__(504);
	__webpack_require__(505);
	__webpack_require__(506);

	// Instance Methods
	__webpack_require__(507);
	__webpack_require__(510);
	__webpack_require__(511);
	__webpack_require__(512);
	__webpack_require__(513);
	__webpack_require__(514);
	__webpack_require__(515);
	__webpack_require__(516);
	__webpack_require__(517);
	__webpack_require__(518);
	__webpack_require__(519);
	__webpack_require__(520);
	__webpack_require__(521);
	__webpack_require__(522);
	__webpack_require__(523);
	__webpack_require__(524);
	__webpack_require__(525);
	__webpack_require__(526);
	__webpack_require__(527);
	__webpack_require__(528);
	__webpack_require__(529);
	__webpack_require__(530);
	__webpack_require__(531);
	__webpack_require__(532);
	__webpack_require__(533);
	__webpack_require__(534);
	__webpack_require__(535);
	__webpack_require__(536);
	__webpack_require__(537);
	__webpack_require__(538);
	__webpack_require__(539);
	__webpack_require__(540);
	__webpack_require__(541);
	__webpack_require__(542);
	__webpack_require__(543);
	__webpack_require__(544);
	__webpack_require__(545);
	__webpack_require__(546);
	__webpack_require__(547);
	__webpack_require__(548);
	__webpack_require__(549);
	__webpack_require__(550);
	__webpack_require__(551);
	__webpack_require__(552);
	__webpack_require__(553);
	__webpack_require__(554);
	__webpack_require__(555);
	__webpack_require__(556);
	__webpack_require__(557);
	__webpack_require__(558);
	__webpack_require__(559);
	__webpack_require__(560);
	__webpack_require__(561);
	__webpack_require__(562);
	__webpack_require__(563);
	__webpack_require__(564);
	__webpack_require__(565);
	__webpack_require__(566);
	__webpack_require__(567);
	__webpack_require__(568);
	__webpack_require__(569);
	__webpack_require__(570);
	__webpack_require__(571);
	__webpack_require__(572);
	__webpack_require__(573);
	__webpack_require__(574);
	__webpack_require__(575);
	__webpack_require__(576);
	__webpack_require__(577);
	__webpack_require__(578);
	__webpack_require__(579);
	__webpack_require__(580);
	__webpack_require__(581);
	__webpack_require__(582);
	__webpack_require__(583);
	__webpack_require__(584);
	__webpack_require__(585);
	__webpack_require__(586);
	__webpack_require__(587);
	__webpack_require__(588);
	__webpack_require__(589);
	__webpack_require__(590);
	__webpack_require__(595);
	__webpack_require__(596);
	__webpack_require__(597);
	__webpack_require__(598);
	__webpack_require__(599);
	__webpack_require__(600);
	__webpack_require__(601);
	__webpack_require__(602);
	__webpack_require__(607);
	__webpack_require__(608);
	__webpack_require__(609);
	__webpack_require__(610);
	__webpack_require__(611);
	__webpack_require__(612);
	__webpack_require__(613);
	__webpack_require__(614);
	__webpack_require__(615);
	__webpack_require__(616);
	__webpack_require__(617);
	__webpack_require__(618);
	__webpack_require__(619);
	__webpack_require__(620);
	__webpack_require__(621);
	__webpack_require__(622);
	__webpack_require__(623);
	__webpack_require__(636);
	__webpack_require__(638);
	__webpack_require__(639);
	__webpack_require__(640);
	__webpack_require__(641);
	__webpack_require__(642);
	__webpack_require__(643);
	__webpack_require__(644);
	__webpack_require__(645);
	__webpack_require__(646);
	__webpack_require__(649);
	__webpack_require__(650);
	__webpack_require__(651);
	__webpack_require__(652);
	__webpack_require__(655);
	__webpack_require__(656);
	__webpack_require__(657);
	__webpack_require__(658);
	__webpack_require__(659);
	__webpack_require__(660);
	__webpack_require__(661);
	__webpack_require__(662);
	__webpack_require__(663);
	__webpack_require__(664);
	__webpack_require__(665);
	__webpack_require__(666);
	__webpack_require__(667);
	__webpack_require__(668);
	__webpack_require__(669);
	__webpack_require__(670);
	__webpack_require__(671);
	__webpack_require__(672);
	__webpack_require__(673);
	__webpack_require__(674);
	__webpack_require__(676);
	__webpack_require__(677);
	__webpack_require__(678);
	__webpack_require__(679);
	__webpack_require__(680);
	__webpack_require__(681);
	__webpack_require__(682);
	__webpack_require__(683);
	__webpack_require__(684);
	__webpack_require__(685);
	__webpack_require__(686);
	__webpack_require__(687);
	__webpack_require__(688);
	__webpack_require__(689);
	__webpack_require__(690);
	__webpack_require__(691);
	__webpack_require__(692);
	__webpack_require__(693);
	__webpack_require__(694);
	__webpack_require__(697);
	__webpack_require__(698);
	__webpack_require__(700);
	__webpack_require__(701);
	__webpack_require__(702);
	__webpack_require__(703);
	__webpack_require__(704);
	__webpack_require__(705);
	__webpack_require__(706);
	__webpack_require__(707);
	__webpack_require__(708);
	__webpack_require__(709);
	__webpack_require__(710);
	__webpack_require__(711);
	__webpack_require__(712);
	__webpack_require__(713);
	__webpack_require__(714);
	__webpack_require__(715);
	__webpack_require__(716);

	// Accessors
	__webpack_require__(717);
	__webpack_require__(718);

	module.exports = __webpack_require__(8);

/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    LocaleHelpers = __webpack_require__(430);

	var localeManager = LocaleHelpers.localeManager;

	Sugar.Date.defineStatic({

	  'addLocale': function(code, set) {
	    return localeManager.add(code, set);
	  }

	});

	module.exports = Sugar.Date.addLocale;

/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var LazyLoadedLocales = __webpack_require__(431),
	    AmericanEnglishDefinition = __webpack_require__(435),
	    getNewLocale = __webpack_require__(437);

	var English, localeManager;

	function buildLocales() {

	  function LocaleManager(loc) {
	    this.locales = {};
	    this.add(loc);
	  }

	  LocaleManager.prototype = {

	    get: function(code, fallback) {
	      var loc = this.locales[code];
	      if (!loc && LazyLoadedLocales[code]) {
	        loc = this.add(code, LazyLoadedLocales[code]);
	      } else if (!loc && code) {
	        loc = this.locales[code.slice(0, 2)];
	      }
	      return loc || fallback === false ? loc : this.current;
	    },

	    getAll: function() {
	      return this.locales;
	    },

	    set: function(code) {
	      var loc = this.get(code, false);
	      if (!loc) {
	        throw new TypeError('Invalid Locale: ' + code);
	      }
	      return this.current = loc;
	    },

	    add: function(code, def) {
	      if (!def) {
	        def = code;
	        code = def.code;
	      } else {
	        def.code = code;
	      }
	      var loc = def.compiledFormats ? def : getNewLocale(def);
	      this.locales[code] = loc;
	      if (!this.current) {
	        this.current = loc;
	      }
	      return loc;
	    },

	    remove: function(code) {
	      if (this.current.code === code) {
	        this.current = this.get('en');
	      }
	      return delete this.locales[code];
	    }

	  };

	  // Sorry about this guys...
	  English = getNewLocale(AmericanEnglishDefinition);
	  localeManager = new LocaleManager(English);
	}

	buildLocales();

	module.exports = {
	  English: English,
	  localeManager: localeManager
	};

/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var BritishEnglishDefinition = __webpack_require__(432),
	    AmericanEnglishDefinition = __webpack_require__(435),
	    CanadianEnglishDefinition = __webpack_require__(436);

	var LazyLoadedLocales = {
	  'en-US': AmericanEnglishDefinition,
	  'en-GB': BritishEnglishDefinition,
	  'en-AU': BritishEnglishDefinition,
	  'en-CA': CanadianEnglishDefinition
	};

	module.exports = LazyLoadedLocales;

/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getEnglishVariant = __webpack_require__(433);

	var BritishEnglishDefinition = getEnglishVariant({
	  'short':  '{dd}/{MM}/{yyyy}',
	  'medium': '{d} {Month} {yyyy}',
	  'long':   '{d} {Month} {yyyy} {H}:{mm}',
	  'full':   '{Weekday}, {d} {Month}, {yyyy} {time}',
	  'stamp':  '{Dow} {d} {Mon} {yyyy} {time}'
	});

	module.exports = BritishEnglishDefinition;

/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var EnglishLocaleBaseDefinition = __webpack_require__(434),
	    simpleMerge = __webpack_require__(157),
	    simpleClone = __webpack_require__(156);

	function getEnglishVariant(v) {
	  return simpleMerge(simpleClone(EnglishLocaleBaseDefinition), v);
	}

	module.exports = getEnglishVariant;

/***/ }),
/* 434 */
/***/ (function(module, exports) {

	'use strict';

	var EnglishLocaleBaseDefinition = {
	  'code': 'en',
	  'plural': true,
	  'timeMarkers': 'at',
	  'ampm': 'AM|A.M.|a,PM|P.M.|p',
	  'units': 'millisecond:|s,second:|s,minute:|s,hour:|s,day:|s,week:|s,month:|s,year:|s',
	  'months': 'Jan:uary|,Feb:ruary|,Mar:ch|,Apr:il|,May,Jun:e|,Jul:y|,Aug:ust|,Sep:tember|t|,Oct:ober|,Nov:ember|,Dec:ember|',
	  'weekdays': 'Sun:day|,Mon:day|,Tue:sday|,Wed:nesday|,Thu:rsday|,Fri:day|,Sat:urday|+weekend',
	  'numerals': 'zero,one|first,two|second,three|third,four:|th,five|fifth,six:|th,seven:|th,eight:|h,nin:e|th,ten:|th',
	  'articles': 'a,an,the',
	  'tokens': 'the,st|nd|rd|th,of|in,a|an,on',
	  'time': '{H}:{mm}',
	  'past': '{num} {unit} {sign}',
	  'future': '{num} {unit} {sign}',
	  'duration': '{num} {unit}',
	  'modifiers': [
	    { 'name': 'half',   'src': 'half', 'value': .5 },
	    { 'name': 'midday', 'src': 'noon', 'value': 12 },
	    { 'name': 'midday', 'src': 'midnight', 'value': 24 },
	    { 'name': 'day',    'src': 'yesterday', 'value': -1 },
	    { 'name': 'day',    'src': 'today|tonight', 'value': 0 },
	    { 'name': 'day',    'src': 'tomorrow', 'value': 1 },
	    { 'name': 'sign',   'src': 'ago|before', 'value': -1 },
	    { 'name': 'sign',   'src': 'from now|after|from|in|later', 'value': 1 },
	    { 'name': 'edge',   'src': 'first day|first|beginning', 'value': -2 },
	    { 'name': 'edge',   'src': 'last day', 'value': 1 },
	    { 'name': 'edge',   'src': 'end|last', 'value': 2 },
	    { 'name': 'shift',  'src': 'last', 'value': -1 },
	    { 'name': 'shift',  'src': 'the|this', 'value': 0 },
	    { 'name': 'shift',  'src': 'next', 'value': 1 }
	  ],
	  'parse': [
	    '(?:just)? now',
	    '{shift} {unit:5-7}',
	    '{months?} {year}',
	    '{midday} {4?} {day|weekday}',
	    '{months},?[-.\\/\\s]?{year?}',
	    '{edge} of (?:day)? {day|weekday}',
	    '{0} {num}{1?} {weekday} {2} {months},? {year?}',
	    '{shift?} {day?} {weekday?} (?:at)? {midday}',
	    '{sign?} {3?} {half} {3?} {unit:3-4|unit:7} {sign?}',
	    '{0?} {edge} {weekday?} {2} {shift?} {unit:4-7?} {months?},? {year?}'
	  ],
	  'timeParse': [
	    '{day|weekday}',
	    '{shift} {unit:5?} {weekday}',
	    '{0?} {date}{1?} {2?} {months?}',
	    '{weekday} {2?} {shift} {unit:5}',
	    '{0?} {num} {2?} {months}\\.?,? {year?}',
	    '{num?} {unit:4-5} {sign} {day|weekday}',
	    '{0|months} {date?}{1?} of {shift} {unit:6-7}',
	    '{0?} {num}{1?} {weekday} of {shift} {unit:6}',
	    '{year?}[-.\\/\\s]?{months}[-.\\/\\s]{date}',
	    '{date}[-.\\/\\s]{months}(?:[-.\\/\\s]{year|yy})?',
	    '{weekday?}\\.?,? {months}\\.?,? {date}{1?},? {year?}',
	    '{weekday?}\\.?,? {date} {months} {year}'
	  ],
	  'timeFrontParse': [
	    '{sign} {num} {unit}',
	    '{num} {unit} {sign}',
	    '{4?} {day|weekday}'
	  ]
	};

	module.exports = EnglishLocaleBaseDefinition;

/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getEnglishVariant = __webpack_require__(433);

	var AmericanEnglishDefinition = getEnglishVariant({
	  'mdy': true,
	  'firstDayOfWeek': 0,
	  'firstDayOfWeekYear': 1,
	  'short':  '{MM}/{dd}/{yyyy}',
	  'medium': '{Month} {d}, {yyyy}',
	  'long':   '{Month} {d}, {yyyy} {time}',
	  'full':   '{Weekday}, {Month} {d}, {yyyy} {time}',
	  'stamp':  '{Dow} {Mon} {d} {yyyy} {time}',
	  'time':   '{h}:{mm} {TT}'
	});

	module.exports = AmericanEnglishDefinition;

/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getEnglishVariant = __webpack_require__(433);

	var CanadianEnglishDefinition = getEnglishVariant({
	  'short':  '{yyyy}-{MM}-{dd}',
	  'medium': '{d} {Month}, {yyyy}',
	  'long':   '{d} {Month}, {yyyy} {H}:{mm}',
	  'full':   '{Weekday}, {d} {Month}, {yyyy} {time}',
	  'stamp':  '{Dow} {d} {Mon} {yyyy} {time}'
	});

	module.exports = CanadianEnglishDefinition;

/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var LOCALE_ARRAY_FIELDS = __webpack_require__(438),
	    ISODefaults = __webpack_require__(439),
	    CoreParsingTokens = __webpack_require__(440),
	    CoreParsingFormats = __webpack_require__(441),
	    LocalizedParsingTokens = __webpack_require__(442),
	    map = __webpack_require__(68),
	    filter = __webpack_require__(136),
	    forEach = __webpack_require__(10),
	    isDefined = __webpack_require__(37),
	    commaSplit = __webpack_require__(149),
	    classChecks = __webpack_require__(14),
	    mathAliases = __webpack_require__(93),
	    isUndefined = __webpack_require__(60),
	    simpleMerge = __webpack_require__(157),
	    getOrdinalSuffix = __webpack_require__(188),
	    getArrayWithOffset = __webpack_require__(443),
	    getRegNonCapturing = __webpack_require__(444),
	    coreUtilityAliases = __webpack_require__(17),
	    iterateOverDateUnits = __webpack_require__(445),
	    arrayToRegAlternates = __webpack_require__(455),
	    fullwidthNumberHelpers = __webpack_require__(125),
	    getAdjustedUnitForNumber = __webpack_require__(456),
	    getParsingTokenWithSuffix = __webpack_require__(458);

	var hasOwn = coreUtilityAliases.hasOwn,
	    getOwn = coreUtilityAliases.getOwn,
	    forEachProperty = coreUtilityAliases.forEachProperty,
	    fullWidthNumberMap = fullwidthNumberHelpers.fullWidthNumberMap,
	    fullWidthNumbers = fullwidthNumberHelpers.fullWidthNumbers,
	    pow = mathAliases.pow,
	    max = mathAliases.max,
	    ISO_FIRST_DAY_OF_WEEK = ISODefaults.ISO_FIRST_DAY_OF_WEEK,
	    ISO_FIRST_DAY_OF_WEEK_YEAR = ISODefaults.ISO_FIRST_DAY_OF_WEEK_YEAR,
	    isString = classChecks.isString,
	    isFunction = classChecks.isFunction;

	function getNewLocale(def) {

	  function Locale(def) {
	    this.init(def);
	  }

	  Locale.prototype = {

	    getMonthName: function(n, alternate) {
	      if (this.monthSuffix) {
	        return (n + 1) + this.monthSuffix;
	      }
	      return getArrayWithOffset(this.months, n, alternate, 12);
	    },

	    getWeekdayName: function(n, alternate) {
	      return getArrayWithOffset(this.weekdays, n, alternate, 7);
	    },

	    // TODO: rename to parse in next major version
	    parseValue: function(str, param) {
	      var map = this[param + 'Map'];
	      if (hasOwn(map, str)) {
	        return map[str];
	      }
	      return this.parseNumber(str, param);
	    },

	    // TODO: analyze performance of parsing first vs checking
	    // numeralMap first.
	    parseNumber: function(str, param) {
	      var val;

	      // Simple numerals such as "one" are mapped directly in
	      // the numeral map so catch up front if there is a match.
	      if (hasOwn(this.numeralMap, str)) {
	        val = this.numeralMap[str];
	      }

	      // TODO: perf test isNaN vs other methods
	      if (isNaN(val)) {
	        val = this.parseRegularNumerals(str);
	      }

	      if (isNaN(val)) {
	        val = this.parseIrregularNumerals(str);
	      }

	      if (param === 'month') {
	        // Months are the only numeric date field
	        // whose value is not the same as its number.
	        val -= 1;
	      }

	      return val;
	    },

	    // TODO: perf test returning up front if no regular decimals exist
	    parseRegularNumerals: function(str) {
	      // Allow decimals as commas and the minus-sign as per ISO-8601.
	      str = str.replace(/^−/, '-').replace(/,/, '.');

	      // The unary plus operator here shows better performance and handles
	      // every format that parseFloat does with the exception of trailing
	      // characters, which are guaranteed not to be in our string at this point.
	      return +str;
	    },

	    parseIrregularNumerals: function(str) {
	      var place = 1, num = 0, lastWasPlace, isPlace, numeral, digit, arr;

	      // Note that "numerals" that need to be converted through this method are
	      // all considered to be single characters in order to handle CJK. This
	      // method is by no means unique to CJK, but the complexity of handling
	      // inflections in non-CJK languages adds too much overhead for not enough
	      // value, so avoiding for now.
	      arr = str.split('');
	      for (var i = arr.length - 1; numeral = arr[i]; i--) {
	        digit = getOwn(this.numeralMap, numeral);
	        if (isUndefined(digit)) {
	          digit = getOwn(fullWidthNumberMap, numeral) || 0;
	        }
	        isPlace = digit > 0 && digit % 10 === 0;
	        if (isPlace) {
	          if (lastWasPlace) {
	            num += place;
	          }
	          if (i) {
	            place = digit;
	          } else {
	            num += digit;
	          }
	        } else {
	          num += digit * place;
	          place *= 10;
	        }
	        lastWasPlace = isPlace;
	      }
	      return num;
	    },

	    getOrdinal: function(n) {
	      var suffix = this.ordinalSuffix;
	      return suffix || getOrdinalSuffix(n);
	    },

	    getRelativeFormat: function(adu, type) {
	      return this.convertAdjustedToFormat(adu, type);
	    },

	    getDuration: function(ms) {
	      return this.convertAdjustedToFormat(getAdjustedUnitForNumber(max(0, ms)), 'duration');
	    },

	    getFirstDayOfWeek: function() {
	      var val = this.firstDayOfWeek;
	      return isDefined(val) ? val : ISO_FIRST_DAY_OF_WEEK;
	    },

	    getFirstDayOfWeekYear: function() {
	      return this.firstDayOfWeekYear || ISO_FIRST_DAY_OF_WEEK_YEAR;
	    },

	    convertAdjustedToFormat: function(adu, type) {
	      var sign, unit, mult,
	          num    = adu[0],
	          u      = adu[1],
	          ms     = adu[2],
	          format = this[type] || this.relative;
	      if (isFunction(format)) {
	        return format.call(this, num, u, ms, type);
	      }
	      mult = !this.plural || num === 1 ? 0 : 1;
	      unit = this.units[mult * 8 + u] || this.units[u];
	      sign = this[ms > 0 ? 'fromNow' : 'ago'];
	      return format.replace(/\{(.*?)\}/g, function(full, match) {
	        switch(match) {
	          case 'num': return num;
	          case 'unit': return unit;
	          case 'sign': return sign;
	        }
	      });
	    },

	    cacheFormat: function(dif, i) {
	      this.compiledFormats.splice(i, 1);
	      this.compiledFormats.unshift(dif);
	    },

	    addFormat: function(format) {
	      var loc = this, src, to;

	      function getTokenSrc(token) {
	        var suffix, src, tmp,
	            opt   = token.match(/\?$/),
	            nc    = token.match(/^(\d+)\??$/),
	            slice = token.match(/(\d)(?:-(\d))?/),
	            param = token.replace(/[^a-z]+$/i, '');

	        // Allowing alias tokens such as {time}
	        if (tmp = getOwn(loc.parsingAliases, param)) {
	          src = formatToSrc(tmp);
	          if (opt) {
	            src = getRegNonCapturing(src, true);
	          }
	          return src;
	        }

	        if (nc) {
	          src = loc.tokens[nc[1]];
	        } else if (tmp = getOwn(CoreParsingTokens, param)) {
	          src = tmp.src;
	          param = tmp.param || param;
	        } else {
	          tmp = getOwn(loc.parsingTokens, param) || getOwn(loc, param);

	          // Both the "months" array and the "month" parsing token can be accessed
	          // by either {month} or {months}, falling back as necessary, however
	          // regardless of whether or not a fallback occurs, the final field to
	          // be passed to addRawFormat must be normalized as singular.
	          param = param.replace(/s$/, '');

	          if (!tmp) {
	            tmp = getOwn(loc.parsingTokens, param) || getOwn(loc, param + 's');
	          }

	          if (isString(tmp)) {
	            src = tmp;
	            suffix = loc[param + 'Suffix'];
	          } else {

	            // This is a hack to temporarily disallow parsing of single character
	            // weekdays until the format can be changed to allow for this.
	            if (param === 'weekday' && loc.code === 'ko') {
	              tmp = filter(tmp, function(str) {
	                return str.length > 1;
	              });
	            }

	            if (slice) {
	              tmp = filter(tmp, function(m, i) {
	                var mod = i % (loc.units ? 8 : tmp.length);
	                return mod >= slice[1] && mod <= (slice[2] || slice[1]);
	              });
	            }
	            src = arrayToRegAlternates(tmp);
	          }
	        }
	        if (!src) {
	          return '';
	        }
	        if (nc) {
	          // Non-capturing tokens like {0}
	          src = getRegNonCapturing(src);
	        } else {
	          // Capturing group and add to parsed tokens
	          to.push(param);
	          src = '(' + src + ')';
	        }
	        if (suffix) {
	          // Date/time suffixes such as those in CJK
	          src = getParsingTokenWithSuffix(param, src, suffix);
	        }
	        if (opt) {
	          src += '?';
	        }
	        return src;
	      }

	      function formatToSrc(str) {

	        // Make spaces optional
	        str = str.replace(/ /g, ' ?');

	        str = str.replace(/\{([^,]+?)\}/g, function(match, token) {
	          var tokens = token.split('|');
	          if (tokens.length > 1) {
	            return getRegNonCapturing(map(tokens, getTokenSrc).join('|'));
	          } else {
	            return getTokenSrc(token);
	          }
	        });

	        return str;
	      }

	      function parseInputFormat() {
	        to = [];
	        src = formatToSrc(format);
	      }

	      parseInputFormat();
	      loc.addRawFormat(src, to);
	    },

	    addRawFormat: function(format, to) {
	      this.compiledFormats.unshift({
	        reg: RegExp('^ *' + format + ' *$', 'i'),
	        to: to
	      });
	    },

	    init: function(def) {
	      var loc = this;

	      // -- Initialization helpers

	      function initFormats() {
	        loc.compiledFormats = [];
	        loc.parsingAliases = {};
	        loc.parsingTokens = {};
	      }

	      function initDefinition() {
	        simpleMerge(loc, def);
	      }

	      function initArrayFields() {
	        forEach(LOCALE_ARRAY_FIELDS, function(name) {
	          var val = loc[name];
	          if (isString(val)) {
	            loc[name] = commaSplit(val);
	          } else if (!val) {
	            loc[name] = [];
	          }
	        });
	      }

	      // -- Value array build helpers

	      function buildValueArray(name, mod, map, fn) {
	        var field = name, all = [], setMap;
	        if (!loc[field]) {
	          field += 's';
	        }
	        if (!map) {
	          map = {};
	          setMap = true;
	        }
	        forAllAlternates(field, function(alt, j, i) {
	          var idx = j * mod + i, val;
	          val = fn ? fn(i) : i;
	          map[alt] = val;
	          map[alt.toLowerCase()] = val;
	          all[idx] = alt;
	        });
	        loc[field] = all;
	        if (setMap) {
	          loc[name + 'Map'] = map;
	        }
	      }

	      function forAllAlternates(field, fn) {
	        forEach(loc[field], function(str, i) {
	          forEachAlternate(str, function(alt, j) {
	            fn(alt, j, i);
	          });
	        });
	      }

	      function forEachAlternate(str, fn) {
	        var arr = map(str.split('+'), function(split) {
	          return split.replace(/(.+):(.+)$/, function(full, base, suffixes) {
	            return map(suffixes.split('|'), function(suffix) {
	              return base + suffix;
	            }).join('|');
	          });
	        }).join('|');
	        forEach(arr.split('|'), fn);
	      }

	      function buildNumerals() {
	        var map = {};
	        buildValueArray('numeral', 10, map);
	        buildValueArray('article', 1, map, function() {
	          return 1;
	        });
	        buildValueArray('placeholder', 4, map, function(n) {
	          return pow(10, n + 1);
	        });
	        loc.numeralMap = map;
	      }

	      function buildTimeFormats() {
	        loc.parsingAliases['time'] = getTimeFormat();
	        loc.parsingAliases['tzOffset'] = getTZOffsetFormat();
	      }

	      function getTimeFormat(standalone) {
	        var src, sep;
	        sep = getTimeSeparatorSrc(standalone);
	        if (loc.ampmFront) {
	          // "ampmFront" exists mostly for CJK locales, which also presume that
	          // time suffixes exist, allowing this to be a simpler regex.
	          src = '{ampm?} {hour} (?:{minute} (?::?{second})?)?';
	        } else if(loc.ampm.length) {
	          src = '{hour}(?:'+sep+'{minute?}(?:'+sep+'{second?})? {ampm?}| {ampm})';
	        } else {
	          src = '{hour}(?:'+sep+'{minute?}(?:'+sep+'{second?})?)';
	        }
	        return src;
	      }

	      function getTimeSeparatorSrc() {
	        if (loc.timeSeparator) {
	          return '[:' + loc.timeSeparator + ']';
	        } else {
	          return ':';
	        }
	      }

	      function getTZOffsetFormat() {
	        return '(?:{Z}|{GMT?}(?:{tzHour}(?::?{tzMinute}(?: \\([\\w\\s]+\\))?)?)?)?';
	      }

	      function buildParsingTokens() {
	        forEachProperty(LocalizedParsingTokens, function(token, name) {
	          var src = token.base ? getCoreTokensForBase(token.base) : token.src, arr;
	          if (token.requiresNumerals || loc.numeralUnits) {
	            src += getNumeralSrc();
	          }
	          arr = loc[name + 's'];
	          if (arr && arr.length) {
	            src += '|' + arrayToRegAlternates(arr);
	          }
	          loc.parsingTokens[name] = src;
	        });
	      }

	      function getCoreTokensForBase(base) {
	        return map(base.split('|'), function(key) {
	          return CoreParsingTokens[key].src;
	        }).join('|');
	      }

	      function getNumeralSrc() {
	        var all, src = '';
	        all = loc.numerals.concat(loc.placeholders).concat(loc.articles);
	        if (loc.allowsFullWidth) {
	          all = all.concat(fullWidthNumbers.split(''));
	        }
	        if (all.length) {
	          src = '|(?:' + arrayToRegAlternates(all) + ')+';
	        }
	        return src;
	      }

	      function buildTimeSuffixes() {
	        iterateOverDateUnits(function(unit, i) {
	          var token = loc.timeSuffixes[i];
	          if (token) {
	            loc[(unit.alias || unit.name) + 'Suffix'] = token;
	          }
	        });
	      }

	      function buildModifiers() {
	        forEach(loc.modifiers, function(modifier) {
	          var name = modifier.name, mapKey = name + 'Map', map;
	          map = loc[mapKey] || {};
	          forEachAlternate(modifier.src, function(alt, j) {
	            var token = getOwn(loc.parsingTokens, name), val = modifier.value;
	            map[alt] = val;
	            loc.parsingTokens[name] = token ? token + '|' + alt : alt;
	            if (modifier.name === 'sign' && j === 0) {
	              // Hooking in here to set the first "fromNow" or "ago" modifier
	              // directly on the locale, so that it can be reused in the
	              // relative format.
	              loc[val === 1 ? 'fromNow' : 'ago'] = alt;
	            }
	          });
	          loc[mapKey] = map;
	        });
	      }

	      // -- Format adding helpers

	      function addCoreFormats() {
	        forEach(CoreParsingFormats, function(df) {
	          var src = df.src;
	          if (df.localeCheck && !df.localeCheck(loc)) {
	            return;
	          }
	          if (df.mdy && loc.mdy) {
	            // Use the mm/dd/yyyy variant if it
	            // exists and the locale requires it
	            src = df.mdy;
	          }
	          if (df.time) {
	            // Core formats that allow time require the time
	            // reg on both sides, so add both versions here.
	            loc.addFormat(getFormatWithTime(src, true));
	            loc.addFormat(getFormatWithTime(src));
	          } else {
	            loc.addFormat(src);
	          }
	        });
	        loc.addFormat('{time}');
	      }

	      function addLocaleFormats() {
	        addFormatSet('parse');
	        addFormatSet('timeParse', true);
	        addFormatSet('timeFrontParse', true, true);
	      }

	      function addFormatSet(field, allowTime, timeFront) {
	        forEach(loc[field], function(format) {
	          if (allowTime) {
	            format = getFormatWithTime(format, timeFront);
	          }
	          loc.addFormat(format);
	        });
	      }

	      function getFormatWithTime(baseFormat, timeBefore) {
	        if (timeBefore) {
	          return getTimeBefore() + baseFormat;
	        }
	        return baseFormat + getTimeAfter();
	      }

	      function getTimeBefore() {
	        return getRegNonCapturing('{time}[,\\s\\u3000]', true);
	      }

	      function getTimeAfter() {
	        var markers = ',?[\\s\\u3000]', localized;
	        localized = arrayToRegAlternates(loc.timeMarkers);
	        if (localized) {
	          markers += '| (?:' + localized + ') ';
	        }
	        markers = getRegNonCapturing(markers, loc.timeMarkerOptional);
	        return getRegNonCapturing(markers + '{time}{tzOffset}', true);
	      }

	      initFormats();
	      initDefinition();
	      initArrayFields();

	      buildValueArray('month', 12);
	      buildValueArray('weekday', 7);
	      buildValueArray('unit', 8);
	      buildValueArray('ampm', 2);

	      buildNumerals();
	      buildTimeFormats();
	      buildParsingTokens();
	      buildTimeSuffixes();
	      buildModifiers();

	      // The order of these formats is important. Order is reversed so formats
	      // that are initialized later will take precedence. Generally, this means
	      // that more specific formats should come later.
	      addCoreFormats();
	      addLocaleFormats();

	    }

	  };

	  return new Locale(def);
	}

	module.exports = getNewLocale;

/***/ }),
/* 438 */
/***/ (function(module, exports) {

	'use strict';

	var LOCALE_ARRAY_FIELDS = [
	  'months', 'weekdays', 'units', 'numerals', 'placeholders',
	  'articles', 'tokens', 'timeMarkers', 'ampm', 'timeSuffixes',
	  'parse', 'timeParse', 'timeFrontParse', 'modifiers'
	];

	module.exports = LOCALE_ARRAY_FIELDS;

/***/ }),
/* 439 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	  ISO_FIRST_DAY_OF_WEEK: 1,
	  ISO_FIRST_DAY_OF_WEEK_YEAR: 4
	};

/***/ }),
/* 440 */
/***/ (function(module, exports) {

	'use strict';

	var CoreParsingTokens = {
	  'yyyy': {
	    param: 'year',
	    src: '[-−+]?\\d{4,6}'
	  },
	  'yy': {
	    param: 'year',
	    src: '\\d{2}'
	  },
	  'y': {
	    param: 'year',
	    src: '\\d'
	  },
	  'ayy': {
	    param: 'year',
	    src: '\'\\d{2}'
	  },
	  'MM': {
	    param: 'month',
	    src: '(?:1[012]|0?[1-9])'
	  },
	  'dd': {
	    param: 'date',
	    src: '(?:3[01]|[12][0-9]|0?[1-9])'
	  },
	  'hh': {
	    param: 'hour',
	    src: '(?:2[0-4]|[01]?[0-9])'
	  },
	  'mm': {
	    param: 'minute',
	    src: '[0-5]\\d'
	  },
	  'ss': {
	    param: 'second',
	    src: '[0-5]\\d(?:[,.]\\d+)?'
	  },
	  'tzHour': {
	    src: '[-−+](?:2[0-4]|[01]?[0-9])'
	  },
	  'tzMinute': {
	    src: '[0-5]\\d'
	  },
	  'iyyyy': {
	    param: 'year',
	    src: '(?:[-−+]?\\d{4}|[-−+]\\d{5,6})'
	  },
	  'ihh': {
	    param: 'hour',
	    src: '(?:2[0-4]|[01][0-9])(?:[,.]\\d+)?'
	  },
	  'imm': {
	    param: 'minute',
	    src: '[0-5]\\d(?:[,.]\\d+)?'
	  },
	  'GMT': {
	    param: 'utc',
	    src: 'GMT'
	  },
	  'Z': {
	    param: 'utc',
	    src: 'Z'
	  },
	  'timestamp': {
	    src: '\\d+'
	  }
	};

	module.exports = CoreParsingTokens;

/***/ }),
/* 441 */
/***/ (function(module, exports) {

	'use strict';

	var CoreParsingFormats = [
	  {
	    // 12-1978
	    // 08-1978 (MDY)
	    src: '{MM}[-.\\/]{yyyy}'
	  },
	  {
	    // 12/08/1978
	    // 08/12/1978 (MDY)
	    time: true,
	    src: '{dd}[-\\/]{MM}(?:[-\\/]{yyyy|yy|y})?',
	    mdy: '{MM}[-\\/]{dd}(?:[-\\/]{yyyy|yy|y})?'
	  },
	  {
	    // 12.08.1978
	    // 08.12.1978 (MDY)
	    time: true,
	    src: '{dd}\\.{MM}(?:\\.{yyyy|yy|y})?',
	    mdy: '{MM}\\.{dd}(?:\\.{yyyy|yy|y})?',
	    localeCheck: function(loc) {
	      // Do not allow this format if the locale
	      // uses a period as a time separator.
	      return loc.timeSeparator !== '.';
	    }
	  },
	  {
	    // 1975-08-25
	    time: true,
	    src: '{yyyy}[-.\\/]{MM}(?:[-.\\/]{dd})?'
	  },
	  {
	    // .NET JSON
	    src: '\\\\/Date\\({timestamp}(?:[-+]\\d{4,4})?\\)\\\\/'
	  },
	  {
	    // ISO-8601
	    src: '{iyyyy}(?:-?{MM}(?:-?{dd}(?:T{ihh}(?::?{imm}(?::?{ss})?)?)?)?)?{tzOffset?}'
	  }
	];

	module.exports = CoreParsingFormats;

/***/ }),
/* 442 */
/***/ (function(module, exports) {

	'use strict';

	var LocalizedParsingTokens = {
	  'year': {
	    base: 'yyyy|ayy',
	    requiresSuffix: true
	  },
	  'month': {
	    base: 'MM',
	    requiresSuffix: true
	  },
	  'date': {
	    base: 'dd',
	    requiresSuffix: true
	  },
	  'hour': {
	    base: 'hh',
	    requiresSuffixOr: ':'
	  },
	  'minute': {
	    base: 'mm'
	  },
	  'second': {
	    base: 'ss'
	  },
	  'num': {
	    src: '\\d+',
	    requiresNumerals: true
	  }
	};

	module.exports = LocalizedParsingTokens;

/***/ }),
/* 443 */
/***/ (function(module, exports) {

	'use strict';

	function getArrayWithOffset(arr, n, alternate, offset) {
	  var val;
	  if (alternate > 1) {
	    val = arr[n + (alternate - 1) * offset];
	  }
	  return val || arr[n];
	}

	module.exports = getArrayWithOffset;

/***/ }),
/* 444 */
/***/ (function(module, exports) {

	'use strict';

	function getRegNonCapturing(src, opt) {
	  if (src.length > 1) {
	    src = '(?:' + src + ')';
	  }
	  if (opt) {
	    src += '?';
	  }
	  return src;
	}

	module.exports = getRegNonCapturing;

/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var DateUnits = __webpack_require__(446),
	    DateUnitIndexes = __webpack_require__(454),
	    isUndefined = __webpack_require__(60);

	var YEAR_INDEX = DateUnitIndexes.YEAR_INDEX;

	function iterateOverDateUnits(fn, startIndex, endIndex) {
	  endIndex = endIndex || 0;
	  if (isUndefined(startIndex)) {
	    startIndex = YEAR_INDEX;
	  }
	  for (var index = startIndex; index >= endIndex; index--) {
	    if (fn(DateUnits[index], index) === false) {
	      break;
	    }
	  }
	}

	module.exports = iterateOverDateUnits;

/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getDaysInMonth = __webpack_require__(447);

	var DateUnits = [
	  {
	    name: 'millisecond',
	    method: 'Milliseconds',
	    multiplier: 1,
	    start: 0,
	    end: 999
	  },
	  {
	    name: 'second',
	    method: 'Seconds',
	    multiplier: 1000,
	    start: 0,
	    end: 59
	  },
	  {
	    name: 'minute',
	    method: 'Minutes',
	    multiplier: 60 * 1000,
	    start: 0,
	    end: 59
	  },
	  {
	    name: 'hour',
	    method: 'Hours',
	    multiplier: 60 * 60 * 1000,
	    start: 0,
	    end: 23
	  },
	  {
	    name: 'day',
	    alias: 'date',
	    method: 'Date',
	    ambiguous: true,
	    multiplier: 24 * 60 * 60 * 1000,
	    start: 1,
	    end: function(d) {
	      return getDaysInMonth(d);
	    }
	  },
	  {
	    name: 'week',
	    method: 'ISOWeek',
	    ambiguous: true,
	    multiplier: 7 * 24 * 60 * 60 * 1000
	  },
	  {
	    name: 'month',
	    method: 'Month',
	    ambiguous: true,
	    multiplier: 30.4375 * 24 * 60 * 60 * 1000,
	    start: 0,
	    end: 11
	  },
	  {
	    name: 'year',
	    method: 'FullYear',
	    ambiguous: true,
	    multiplier: 365.25 * 24 * 60 * 60 * 1000,
	    start: 0
	  }
	];

	module.exports = DateUnits;

/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getYear = __webpack_require__(448),
	    getMonth = __webpack_require__(453),
	    callDateGet = __webpack_require__(449);

	function getDaysInMonth(d) {
	  return 32 - callDateGet(new Date(getYear(d), getMonth(d), 32), 'Date');
	}

	module.exports = getDaysInMonth;

/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var callDateGet = __webpack_require__(449);

	function getYear(d) {
	  return callDateGet(d, 'FullYear');
	}

	module.exports = getYear;

/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _utc = __webpack_require__(450);

	function callDateGet(d, method) {
	  return d['get' + (_utc(d) ? 'UTC' : '') + method]();
	}

	module.exports = callDateGet;

/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var privatePropertyAccessor = __webpack_require__(451);

	module.exports = privatePropertyAccessor('utc');

/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var PRIVATE_PROP_PREFIX = __webpack_require__(452),
	    coreUtilityAliases = __webpack_require__(17);

	var setProperty = coreUtilityAliases.setProperty;

	function privatePropertyAccessor(key) {
	  var privateKey = PRIVATE_PROP_PREFIX + key;
	  return function(obj, val) {
	    if (arguments.length > 1) {
	      setProperty(obj, privateKey, val);
	      return obj;
	    }
	    return obj[privateKey];
	  };
	}

	module.exports = privatePropertyAccessor;

/***/ }),
/* 452 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = '_sugar_';

/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var callDateGet = __webpack_require__(449);

	function getMonth(d) {
	  return callDateGet(d, 'Month');
	}

	module.exports = getMonth;

/***/ }),
/* 454 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = {
	  HOURS_INDEX: 3,
	  DAY_INDEX: 4,
	  WEEK_INDEX: 5,
	  MONTH_INDEX: 6,
	  YEAR_INDEX: 7
	};

/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var map = __webpack_require__(68),
	    escapeRegExp = __webpack_require__(38);

	function arrayToRegAlternates(arr) {
	  var joined = arr.join('');
	  if (!arr || !arr.length) {
	    return '';
	  }
	  if (joined.length === arr.length) {
	    return '[' + joined + ']';
	  }
	  // map handles sparse arrays so no need to compact the array here.
	  return map(arr, escapeRegExp).join('|');
	}

	module.exports = arrayToRegAlternates;

/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var trunc = __webpack_require__(95),
	    withPrecision = __webpack_require__(151),
	    getAdjustedUnit = __webpack_require__(457);

	function getAdjustedUnitForNumber(ms) {
	  return getAdjustedUnit(ms, function(unit) {
	    return trunc(withPrecision(ms / unit.multiplier, 1));
	  });
	}

	module.exports = getAdjustedUnitForNumber;

/***/ }),
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var mathAliases = __webpack_require__(93),
	    iterateOverDateUnits = __webpack_require__(445);

	var abs = mathAliases.abs;

	function getAdjustedUnit(ms, fn) {
	  var unitIndex = 0, value = 0;
	  iterateOverDateUnits(function(unit, i) {
	    value = abs(fn(unit));
	    if (value >= 1) {
	      unitIndex = i;
	      return false;
	    }
	  });
	  return [value, unitIndex, ms];
	}

	module.exports = getAdjustedUnit;

/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var LocalizedParsingTokens = __webpack_require__(442),
	    getRegNonCapturing = __webpack_require__(444);

	function getParsingTokenWithSuffix(field, src, suffix) {
	  var token = LocalizedParsingTokens[field];
	  if (token.requiresSuffix) {
	    src = getRegNonCapturing(src + getRegNonCapturing(suffix));
	  } else if (token.requiresSuffixOr) {
	    src += getRegNonCapturing(token.requiresSuffixOr + '|' + suffix);
	  } else {
	    src += getRegNonCapturing(suffix, true);
	  }
	  return src;
	}

	module.exports = getParsingTokenWithSuffix;

/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    createDate = __webpack_require__(460);

	__webpack_require__(500);

	Sugar.Date.defineStatic({

	  'create': function(d, options) {
	    return createDate(d, options);
	  }

	});

	module.exports = Sugar.Date.create;

/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getExtendedDate = __webpack_require__(461);

	function createDate(d, options, forceClone) {
	  return getExtendedDate(null, d, options, forceClone).date;
	}

	module.exports = createDate;

/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var MINUTES = __webpack_require__(462),
	    ABBREVIATED_YEAR_REG = __webpack_require__(463),
	    LocaleHelpers = __webpack_require__(430),
	    DateUnitIndexes = __webpack_require__(454),
	    _utc = __webpack_require__(450),
	    trunc = __webpack_require__(95),
	    forEach = __webpack_require__(10),
	    tzOffset = __webpack_require__(464),
	    isDefined = __webpack_require__(37),
	    resetTime = __webpack_require__(465),
	    getNewDate = __webpack_require__(470),
	    updateDate = __webpack_require__(474),
	    setWeekday = __webpack_require__(477),
	    simpleMerge = __webpack_require__(157),
	    advanceDate = __webpack_require__(492),
	    isUndefined = __webpack_require__(60),
	    classChecks = __webpack_require__(14),
	    dateIsValid = __webpack_require__(493),
	    simpleClone = __webpack_require__(156),
	    isObjectType = __webpack_require__(20),
	    moveToEndOfUnit = __webpack_require__(494),
	    deleteDateParam = __webpack_require__(496),
	    coreUtilityAliases = __webpack_require__(17),
	    moveToBeginningOfUnit = __webpack_require__(497),
	    iterateOverDateParams = __webpack_require__(488),
	    getYearFromAbbreviation = __webpack_require__(498),
	    iterateOverHigherDateParams = __webpack_require__(499);

	var isNumber = classChecks.isNumber,
	    isString = classChecks.isString,
	    isDate = classChecks.isDate,
	    getOwn = coreUtilityAliases.getOwn,
	    English = LocaleHelpers.English,
	    localeManager = LocaleHelpers.localeManager,
	    DAY_INDEX = DateUnitIndexes.DAY_INDEX,
	    WEEK_INDEX = DateUnitIndexes.WEEK_INDEX,
	    MONTH_INDEX = DateUnitIndexes.MONTH_INDEX,
	    YEAR_INDEX = DateUnitIndexes.YEAR_INDEX;

	function getExtendedDate(contextDate, d, opt, forceClone) {

	  // Locals
	  var date, set, loc, afterCallbacks, relative, weekdayDir;

	  // Options
	  var optPrefer, optLocale, optFromUTC, optSetUTC, optParams, optClone;

	  afterCallbacks = [];

	  setupOptions(opt);

	  function setupOptions(opt) {
	    opt = isString(opt) ? { locale: opt } : opt || {};
	    optPrefer  = +!!getOwn(opt, 'future') - +!!getOwn(opt, 'past');
	    optLocale  = getOwn(opt, 'locale');
	    optFromUTC = getOwn(opt, 'fromUTC');
	    optSetUTC  = getOwn(opt, 'setUTC');
	    optParams  = getOwn(opt, 'params');
	    optClone   = getOwn(opt, 'clone');
	  }

	  function parseFormatValues(match, dif) {
	    var set = optParams || {};
	    forEach(dif.to, function(param, i) {
	      var str = match[i + 1], val;
	      if (!str) return;

	      val = parseIrregular(str, param);

	      if (isUndefined(val)) {
	        val = loc.parseValue(str, param);
	      }

	      set[param] = val;
	    });
	    return set;
	  }

	  function parseIrregular(str, param) {
	    if (param === 'utc') {
	      return 1;
	    } else if (param === 'year') {
	      var match = str.match(ABBREVIATED_YEAR_REG);
	      if (match) {
	        return getYearFromAbbreviation(match[1], date, optPrefer);
	      }
	    }
	  }

	  // Force the UTC flags to be true if the source date
	  // date is UTC, as they will be overwritten later.
	  function cloneDateByFlag(d, clone) {
	    if (_utc(d) && !isDefined(optFromUTC)) {
	      optFromUTC = true;
	    }
	    if (_utc(d) && !isDefined(optSetUTC)) {
	      optSetUTC = true;
	    }
	    if (clone) {
	      d = new Date(d.getTime());
	    }
	    return d;
	  }

	  function afterDateSet(fn) {
	    afterCallbacks.push(fn);
	  }

	  function fireCallbacks() {
	    forEach(afterCallbacks, function(fn) {
	      fn.call();
	    });
	  }

	  function parseStringDate(str) {

	    str = str.toLowerCase();

	    // The act of getting the locale will initialize
	    // if it is missing and add the required formats.
	    loc = localeManager.get(optLocale);

	    for (var i = 0, dif, match; dif = loc.compiledFormats[i]; i++) {
	      match = str.match(dif.reg);
	      if (match) {

	        // Note that caching the format will modify the compiledFormats array
	        // which is not a good idea to do inside its for loop, however we
	        // know at this point that we have a matched format and that we will
	        // break out below, so simpler to do it here.
	        loc.cacheFormat(dif, i);

	        set = parseFormatValues(match, dif);

	        if (isDefined(set.timestamp)) {
	          date.setTime(set.timestamp);
	          break;
	        }

	        if (isDefined(set.ampm)) {
	          handleAmpm(set.ampm);
	        }

	        if (set.utc || isDefined(set.tzHour)) {
	          handleTimezoneOffset(set.tzHour, set.tzMinute);
	        }

	        if (isDefined(set.shift) && isUndefined(set.unit)) {
	          // "next january", "next monday", etc
	          handleUnitlessShift();
	        }

	        if (isDefined(set.num) && isUndefined(set.unit)) {
	          // "the second of January", etc
	          handleUnitlessNum(set.num);
	        }

	        if (set.midday) {
	          // "noon" and "midnight"
	          handleMidday(set.midday);
	        }

	        if (isDefined(set.day)) {
	          // Relative day localizations such as "today" and "tomorrow".
	          handleRelativeDay(set.day);
	        }

	        if (isDefined(set.unit)) {
	          // "3 days ago", etc
	          handleRelativeUnit(set.unit);
	        }

	        if (set.edge) {
	          // "the end of January", etc
	          handleEdge(set.edge, set);
	        }

	        break;
	      }
	    }

	    if (!set) {
	      // TODO: remove in next major version
	      // Fall back to native parsing
	      date = new Date(str);
	      if (optFromUTC && dateIsValid(date)) {
	        // Falling back to system date here which cannot be parsed as UTC,
	        // so if we're forcing UTC then simply add the offset.
	        date.setTime(date.getTime() + (tzOffset(date) * MINUTES));
	      }
	    } else if (relative) {
	      updateDate(date, set, false, 1);
	    } else {
	      updateDate(date, set, true, 0, optPrefer, weekdayDir, contextDate);
	    }
	    fireCallbacks();
	    return date;
	  }

	  function handleAmpm(ampm) {
	    if (ampm === 1 && set.hour < 12) {
	      // If the time is 1pm-11pm advance the time by 12 hours.
	      set.hour += 12;
	    } else if (ampm === 0 && set.hour === 12) {
	      // If it is 12:00am then set the hour to 0.
	      set.hour = 0;
	    }
	  }

	  function handleTimezoneOffset(tzHour, tzMinute) {
	    // Adjust for timezone offset
	    _utc(date, true);

	    // Sign is parsed as part of the hour, so flip
	    // the minutes if it's negative.

	    if (tzHour < 0) {
	      tzMinute *= -1;
	    }

	    var offset = tzHour * 60 + (tzMinute || 0);
	    if (offset) {
	      set.minute = (set.minute || 0) - offset;
	    }
	  }

	  function handleUnitlessShift() {
	    if (isDefined(set.month)) {
	      // "next January"
	      set.unit = YEAR_INDEX;
	    } else if (isDefined(set.weekday)) {
	      // "next Monday"
	      set.unit = WEEK_INDEX;
	    }
	  }

	  function handleUnitlessNum(num) {
	    if (isDefined(set.weekday)) {
	      // "The second Tuesday of March"
	      setOrdinalWeekday(num);
	    } else if (isDefined(set.month)) {
	      // "The second of March"
	      set.date = set.num;
	    }
	  }

	  function handleMidday(hour) {
	    set.hour = hour % 24;
	    if (hour > 23) {
	      // If the date has hours past 24, we need to prevent it from traversing
	      // into a new day as that would make it being part of a new week in
	      // ambiguous dates such as "Monday".
	      afterDateSet(function() {
	        advanceDate(date, 'date', trunc(hour / 24));
	      });
	    }
	  }

	  function handleRelativeDay() {
	    resetTime(date);
	    if (isUndefined(set.unit)) {
	      set.unit = DAY_INDEX;
	      set.num  = set.day;
	      delete set.day;
	    }
	  }

	  function handleRelativeUnit(unitIndex) {
	    var num;

	    if (isDefined(set.num)) {
	      num = set.num;
	    } else if (isDefined(set.edge) && isUndefined(set.shift)) {
	      num = 0;
	    } else {
	      num = 1;
	    }

	    // If a weekday is defined, there are 3 possible formats being applied:
	    //
	    // 1. "the day after monday": unit is days
	    // 2. "next monday": short for "next week monday", unit is weeks
	    // 3. "the 2nd monday of next month": unit is months
	    //
	    // In the first case, we need to set the weekday up front, as the day is
	    // relative to it. The second case also needs to be handled up front for
	    // formats like "next monday at midnight" which will have its weekday reset
	    // if not set up front. The last case will set up the params necessary to
	    // shift the weekday and allow separateAbsoluteUnits below to handle setting
	    // it after the date has been shifted.
	    if(isDefined(set.weekday)) {
	      if(unitIndex === MONTH_INDEX) {
	        setOrdinalWeekday(num);
	        num = 1;
	      } else {
	        updateDate(date, { weekday: set.weekday }, true);
	        delete set.weekday;
	      }
	    }

	    if (set.half) {
	      // Allow localized "half" as a standalone colloquialism. Purposely avoiding
	      // the locale number system to reduce complexity. The units "month" and
	      // "week" are purposely excluded in the English date formats below, as
	      // "half a week" and "half a month" are meaningless as exact dates.
	      num *= set.half;
	    }

	    if (isDefined(set.shift)) {
	      // Shift and unit, ie "next month", "last week", etc.
	      num *= set.shift;
	    } else if (set.sign) {
	      // Unit and sign, ie "months ago", "weeks from now", etc.
	      num *= set.sign;
	    }

	    if (isDefined(set.day)) {
	      // "the day after tomorrow"
	      num += set.day;
	      delete set.day;
	    }

	    // Formats like "the 15th of last month" or "6:30pm of next week"
	    // contain absolute units in addition to relative ones, so separate
	    // them here, remove them from the params, and set up a callback to
	    // set them after the relative ones have been set.
	    separateAbsoluteUnits(unitIndex);

	    // Finally shift the unit.
	    set[English.units[unitIndex]] = num;
	    relative = true;
	  }

	  function handleEdge(edge, params) {
	    var edgeIndex = params.unit, weekdayOfMonth;
	    if (!edgeIndex) {
	      // If we have "the end of January", then we need to find the unit index.
	      iterateOverHigherDateParams(params, function(unitName, val, unit, i) {
	        if (unitName === 'weekday' && isDefined(params.month)) {
	          // If both a month and weekday exist, then we have a format like
	          // "the last tuesday in November, 2012", where the "last" is still
	          // relative to the end of the month, so prevent the unit "weekday"
	          // from taking over.
	          return;
	        }
	        edgeIndex = i;
	      });
	    }
	    if (edgeIndex === MONTH_INDEX && isDefined(params.weekday)) {
	      // If a weekday in a month exists (as described above),
	      // then set it up to be set after the date has been shifted.
	      weekdayOfMonth = params.weekday;
	      delete params.weekday;
	    }
	    afterDateSet(function() {
	      var stopIndex;
	      // "edge" values that are at the very edge are "2" so the beginning of the
	      // year is -2 and the end of the year is 2. Conversely, the "last day" is
	      // actually 00:00am so it is 1. -1 is reserved but unused for now.
	      if (edge < 0) {
	        moveToBeginningOfUnit(date, edgeIndex, optLocale);
	      } else if (edge > 0) {
	        if (edge === 1) {
	          stopIndex = DAY_INDEX;
	          moveToBeginningOfUnit(date, DAY_INDEX);
	        }
	        moveToEndOfUnit(date, edgeIndex, optLocale, stopIndex);
	      }
	      if (isDefined(weekdayOfMonth)) {
	        setWeekday(date, weekdayOfMonth, -edge);
	        resetTime(date);
	      }
	    });
	    if (edgeIndex === MONTH_INDEX) {
	      params.specificity = DAY_INDEX;
	    } else {
	      params.specificity = edgeIndex - 1;
	    }
	  }

	  function setOrdinalWeekday(num) {
	    // If we have "the 2nd Tuesday of June", then pass the "weekdayDir"
	    // flag along to updateDate so that the date does not accidentally traverse
	    // into the previous month. This needs to be independent of the "prefer"
	    // flag because we are only ensuring that the weekday is in the future, not
	    // the entire date.
	    set.weekday = 7 * (num - 1) + set.weekday;
	    set.date = 1;
	    weekdayDir = 1;
	  }

	  function separateAbsoluteUnits(unitIndex) {
	    var params;

	    iterateOverDateParams(set, function(name, val, unit, i) {
	      // If there is a time unit set that is more specific than
	      // the matched unit we have a string like "5:30am in 2 minutes",
	      // which is meaningless, so invalidate the date...
	      if (i >= unitIndex) {
	        date.setTime(NaN);
	        return false;
	      } else if (i < unitIndex) {
	        // ...otherwise set the params to set the absolute date
	        // as a callback after the relative date has been set.
	        params = params || {};
	        params[name] = val;
	        deleteDateParam(set, name);
	      }
	    });
	    if (params) {
	      afterDateSet(function() {
	        updateDate(date, params, true, 0, false, weekdayDir);
	        if (optParams) {
	          simpleMerge(optParams, params);
	        }
	      });
	      if (set.edge) {
	        // "the end of March of next year"
	        handleEdge(set.edge, params);
	        delete set.edge;
	      }
	    }
	  }

	  if (contextDate && d) {
	    // If a context date is passed ("get" and "unitsFromNow"),
	    // then use it as the starting point.
	    date = cloneDateByFlag(contextDate, true);
	  } else {
	    date = getNewDate();
	  }

	  _utc(date, optFromUTC);

	  if (isString(d)) {
	    date = parseStringDate(d);
	  } else if (isDate(d)) {
	    date = cloneDateByFlag(d, optClone || forceClone);
	  } else if (isObjectType(d)) {
	    set = simpleClone(d);
	    updateDate(date, set, true);
	  } else if (isNumber(d) || d === null) {
	    date.setTime(d);
	  }
	  // A date created by parsing a string presumes that the format *itself* is
	  // UTC, but not that the date, once created, should be manipulated as such. In
	  // other words, if you are creating a date object from a server time
	  // "2012-11-15T12:00:00Z", in the majority of cases you are using it to create
	  // a date that will, after creation, be manipulated as local, so reset the utc
	  // flag here unless "setUTC" is also set.
	  _utc(date, !!optSetUTC);
	  return {
	    set: set,
	    date: date
	  };
	}

	module.exports = getExtendedDate;

/***/ }),
/* 462 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = 60 * 1000;

/***/ }),
/* 463 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = /^'?(\d{1,2})$/;

/***/ }),
/* 464 */
/***/ (function(module, exports) {

	'use strict';

	function tzOffset(d) {
	  return d.getTimezoneOffset();
	}

	module.exports = tzOffset;

/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var DateUnitIndexes = __webpack_require__(454),
	    setUnitAndLowerToEdge = __webpack_require__(466);

	var HOURS_INDEX = DateUnitIndexes.HOURS_INDEX;

	function resetTime(d) {
	  return setUnitAndLowerToEdge(d, HOURS_INDEX);
	}

	module.exports = resetTime;

/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var isDefined = __webpack_require__(37),
	    classChecks = __webpack_require__(14),
	    callDateSet = __webpack_require__(467),
	    walkUnitDown = __webpack_require__(468);

	var isFunction = classChecks.isFunction;

	function setUnitAndLowerToEdge(d, startIndex, stopIndex, end) {
	  walkUnitDown(startIndex, function(unit, i) {
	    var val = end ? unit.end : unit.start;
	    if (isFunction(val)) {
	      val = val(d);
	    }
	    callDateSet(d, unit.method, val);
	    return !isDefined(stopIndex) || i > stopIndex;
	  });
	  return d;
	}

	module.exports = setUnitAndLowerToEdge;

/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _utc = __webpack_require__(450),
	    callDateGet = __webpack_require__(449);

	function callDateSet(d, method, value, safe) {
	  // "Safe" denotes not setting the date if the value is the same as what is
	  // currently set. In theory this should be a noop, however it will cause
	  // timezone shifts when in the middle of a DST fallback. This is unavoidable
	  // as the notation itself is ambiguous (i.e. there are two "1:00ams" on
	  // November 1st, 2015 in northern hemisphere timezones that follow DST),
	  // however when advancing or rewinding dates this can throw off calculations
	  // so avoiding this unintentional shifting on an opt-in basis.
	  if (safe && value === callDateGet(d, method, value)) {
	    return;
	  }
	  d['set' + (_utc(d) ? 'UTC' : '') + method](value);
	}

	module.exports = callDateSet;

/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var DateUnits = __webpack_require__(446),
	    getLowerUnitIndex = __webpack_require__(469);

	function walkUnitDown(unitIndex, fn) {
	  while (unitIndex >= 0) {
	    if (fn(DateUnits[unitIndex], unitIndex) === false) {
	      break;
	    }
	    unitIndex = getLowerUnitIndex(unitIndex);
	  }
	}

	module.exports = walkUnitDown;

/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var DateUnitIndexes = __webpack_require__(454);

	var HOURS_INDEX = DateUnitIndexes.HOURS_INDEX,
	    DAY_INDEX = DateUnitIndexes.DAY_INDEX,
	    WEEK_INDEX = DateUnitIndexes.WEEK_INDEX,
	    MONTH_INDEX = DateUnitIndexes.MONTH_INDEX;

	function getLowerUnitIndex(index) {
	  if (index === MONTH_INDEX) {
	    return DAY_INDEX;
	  } else if (index === WEEK_INDEX) {
	    return HOURS_INDEX;
	  }
	  return index - 1;
	}

	module.exports = getLowerUnitIndex;

/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _dateOptions = __webpack_require__(471);

	function getNewDate() {
	  return _dateOptions('newDateInternal')();
	}

	module.exports = getNewDate;

/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var DATE_OPTIONS = __webpack_require__(472),
	    namespaceAliases = __webpack_require__(154),
	    defineOptionsAccessor = __webpack_require__(155);

	var sugarDate = namespaceAliases.sugarDate;

	module.exports = defineOptionsAccessor(sugarDate, DATE_OPTIONS);

/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var defaultNewDate = __webpack_require__(473);

	var DATE_OPTIONS = {
	  'newDateInternal': defaultNewDate
	};

	module.exports = DATE_OPTIONS;

/***/ }),
/* 473 */
/***/ (function(module, exports) {

	'use strict';

	function defaultNewDate() {
	  return new Date;
	}

	module.exports = defaultNewDate;

/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var DateUnits = __webpack_require__(446),
	    DateUnitIndexes = __webpack_require__(454),
	    trunc = __webpack_require__(95),
	    setDate = __webpack_require__(475),
	    getDate = __webpack_require__(476),
	    getMonth = __webpack_require__(453),
	    getNewDate = __webpack_require__(470),
	    setWeekday = __webpack_require__(477),
	    mathAliases = __webpack_require__(93),
	    callDateGet = __webpack_require__(449),
	    classChecks = __webpack_require__(14),
	    resetLowerUnits = __webpack_require__(479),
	    getLowerUnitIndex = __webpack_require__(469),
	    getHigherUnitIndex = __webpack_require__(480),
	    callDateSetWithWeek = __webpack_require__(481),
	    iterateOverDateParams = __webpack_require__(488);

	var DAY_INDEX = DateUnitIndexes.DAY_INDEX,
	    WEEK_INDEX = DateUnitIndexes.WEEK_INDEX,
	    MONTH_INDEX = DateUnitIndexes.MONTH_INDEX,
	    YEAR_INDEX = DateUnitIndexes.YEAR_INDEX,
	    round = mathAliases.round,
	    isNumber = classChecks.isNumber;

	function updateDate(d, params, reset, advance, prefer, weekdayDir, contextDate) {
	  var upperUnitIndex;

	  function setUpperUnit(unitName, unitIndex) {
	    if (prefer && !upperUnitIndex) {
	      if (unitName === 'weekday') {
	        upperUnitIndex = WEEK_INDEX;
	      } else {
	        upperUnitIndex = getHigherUnitIndex(unitIndex);
	      }
	    }
	  }

	  function setSpecificity(unitIndex) {
	    // Other functions may preemptively set the specificity before arriving
	    // here so concede to them if they have already set more specific units.
	    if (unitIndex > params.specificity) {
	      return;
	    }
	    params.specificity = unitIndex;
	  }

	  function canDisambiguate() {
	    if (!upperUnitIndex || upperUnitIndex > YEAR_INDEX) {
	      return;
	    }

	    switch(prefer) {
	      case -1: return d >= (contextDate || getNewDate());
	      case  1: return d <= (contextDate || getNewDate());
	    }
	  }

	  function disambiguateHigherUnit() {
	    var unit = DateUnits[upperUnitIndex];
	    advance = prefer;
	    setUnit(unit.name, 1, unit, upperUnitIndex);
	  }

	  function handleFraction(unit, unitIndex, fraction) {
	    if (unitIndex) {
	      var lowerUnit = DateUnits[getLowerUnitIndex(unitIndex)];
	      var val = round(unit.multiplier / lowerUnit.multiplier * fraction);
	      params[lowerUnit.name] = val;
	    }
	  }

	  function monthHasShifted(d, targetMonth) {
	    if (targetMonth < 0) {
	      targetMonth = targetMonth % 12 + 12;
	    }
	    return targetMonth % 12 !== getMonth(d);
	  }

	  function setUnit(unitName, value, unit, unitIndex) {
	    var method = unit.method, checkMonth, fraction;

	    setUpperUnit(unitName, unitIndex);
	    setSpecificity(unitIndex);

	    fraction = value % 1;
	    if (fraction) {
	      handleFraction(unit, unitIndex, fraction);
	      value = trunc(value);
	    }

	    if (unitName === 'weekday') {
	      if (!advance) {
	        // Weekdays are always considered absolute units so simply set them
	        // here even if it is an "advance" operation. This is to help avoid
	        // ambiguous meanings in "advance" as well as to neatly allow formats
	        // like "Wednesday of next week" without more complex logic.
	        setWeekday(d, value, weekdayDir);
	      }
	      return;
	    }
	    checkMonth = unitIndex === MONTH_INDEX && getDate(d) > 28;

	    // If we are advancing or rewinding, then we need we need to set the
	    // absolute time if the unit is "hours" or less. This is due to the fact
	    // that setting by method is ambiguous during DST shifts. For example,
	    // 1:00am on November 1st 2015 occurs twice in North American timezones
	    // with DST, the second time being after the clocks are rolled back at
	    // 2:00am. When springing forward this is automatically handled as there
	    // is no 2:00am so the date automatically jumps to 3:00am. However, when
	    // rolling back, setHours(2) will always choose the first "2am" even if
	    // the date is currently set to the second, causing unintended jumps.
	    // This ambiguity is unavoidable when setting dates as the notation is
	    // ambiguous. However when advancing, we clearly want the resulting date
	    // to be an acutal hour ahead, which can only be accomplished by setting
	    // the absolute time. Conversely, any unit higher than "hours" MUST use
	    // the internal set methods, as they are ambiguous as absolute units of
	    // time. Years may be 365 or 366 days depending on leap years, months are
	    // all over the place, and even days may be 23-25 hours depending on DST
	    // shifts. Finally, note that the kind of jumping described above will
	    // occur when calling ANY "set" method on the date and will occur even if
	    // the value being set is identical to the one currently set (i.e.
	    // setHours(2) on a date at 2am may not be a noop). This is precarious,
	    // so avoiding this situation in callDateSet by checking up front that
	    // the value is not the same before setting.
	    if (advance && !unit.ambiguous) {
	      d.setTime(d.getTime() + (value * advance * unit.multiplier));
	      return;
	    } else if (advance) {
	      if (unitIndex === WEEK_INDEX) {
	        value *= 7;
	        method = DateUnits[DAY_INDEX].method;
	      }
	      value = (value * advance) + callDateGet(d, method);
	    }
	    callDateSetWithWeek(d, method, value, advance);
	    if (checkMonth && monthHasShifted(d, value)) {
	      // As we are setting the units in reverse order, there is a chance that
	      // our date may accidentally traverse into a new month, such as setting
	      // { month: 1, date 15 } on January 31st. Check for this here and reset
	      // the date to the last day of the previous month if this has happened.
	      setDate(d, 0);
	    }
	  }

	  if (isNumber(params) && advance) {
	    // If param is a number and advancing, the number is in milliseconds.
	    params = { millisecond: params };
	  } else if (isNumber(params)) {
	    // Otherwise just set the timestamp and return.
	    d.setTime(params);
	    return d;
	  }

	  iterateOverDateParams(params, setUnit);

	  if (reset && params.specificity) {
	    resetLowerUnits(d, params.specificity);
	  }

	  // If past or future is preferred, then the process of "disambiguation" will
	  // ensure that an ambiguous time/date ("4pm", "thursday", "June", etc.) will
	  // be in the past or future. Weeks are only considered ambiguous if there is
	  // a weekday, i.e. "thursday" is an ambiguous week, but "the 4th" is an
	  // ambiguous month.
	  if (canDisambiguate()) {
	    disambiguateHigherUnit();
	  }
	  return d;
	}

	module.exports = updateDate;

/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var callDateSet = __webpack_require__(467);

	function setDate(d, val) {
	  callDateSet(d, 'Date', val);
	}

	module.exports = setDate;

/***/ }),
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var callDateGet = __webpack_require__(449);

	function getDate(d) {
	  return callDateGet(d, 'Date');
	}

	module.exports = getDate;

/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var setDate = __webpack_require__(475),
	    getDate = __webpack_require__(476),
	    getWeekday = __webpack_require__(478),
	    classChecks = __webpack_require__(14),
	    mathAliases = __webpack_require__(93);

	var isNumber = classChecks.isNumber,
	    abs = mathAliases.abs;

	function setWeekday(d, dow, dir) {
	  if (!isNumber(dow)) return;
	  var currentWeekday = getWeekday(d);
	  if (dir) {
	    // Allow a "direction" parameter to determine whether a weekday can
	    // be set beyond the current weekday in either direction.
	    var ndir = dir > 0 ? 1 : -1;
	    var offset = dow % 7 - currentWeekday;
	    if (offset && offset / abs(offset) !== ndir) {
	      dow += 7 * ndir;
	    }
	  }
	  setDate(d, getDate(d) + dow - currentWeekday);
	  return d.getTime();
	}

	module.exports = setWeekday;

/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var callDateGet = __webpack_require__(449);

	function getWeekday(d) {
	  return callDateGet(d, 'Day');
	}

	module.exports = getWeekday;

/***/ }),
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getLowerUnitIndex = __webpack_require__(469),
	    setUnitAndLowerToEdge = __webpack_require__(466);

	function resetLowerUnits(d, unitIndex) {
	  return setUnitAndLowerToEdge(d, getLowerUnitIndex(unitIndex));
	}

	module.exports = resetLowerUnits;

/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var DateUnitIndexes = __webpack_require__(454);

	var DAY_INDEX = DateUnitIndexes.DAY_INDEX,
	    MONTH_INDEX = DateUnitIndexes.MONTH_INDEX;

	function getHigherUnitIndex(index) {
	  return index === DAY_INDEX ? MONTH_INDEX : index + 1;
	}

	module.exports = getHigherUnitIndex;

/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var callDateSet = __webpack_require__(467),
	    setISOWeekNumber = __webpack_require__(482);

	function callDateSetWithWeek(d, method, value, safe) {
	  if (method === 'ISOWeek') {
	    setISOWeekNumber(d, value);
	  } else {
	    callDateSet(d, method, value, safe);
	  }
	}

	module.exports = callDateSetWithWeek;

/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var ISODefaults = __webpack_require__(439),
	    getDate = __webpack_require__(476),
	    setDate = __webpack_require__(475),
	    setYear = __webpack_require__(483),
	    getYear = __webpack_require__(448),
	    getMonth = __webpack_require__(453),
	    setMonth = __webpack_require__(484),
	    cloneDate = __webpack_require__(485),
	    getWeekday = __webpack_require__(478),
	    setWeekday = __webpack_require__(477),
	    classChecks = __webpack_require__(14),
	    moveToFirstDayOfWeekYear = __webpack_require__(486);

	var isNumber = classChecks.isNumber,
	    ISO_FIRST_DAY_OF_WEEK = ISODefaults.ISO_FIRST_DAY_OF_WEEK,
	    ISO_FIRST_DAY_OF_WEEK_YEAR = ISODefaults.ISO_FIRST_DAY_OF_WEEK_YEAR;

	function setISOWeekNumber(d, num) {
	  if (isNumber(num)) {
	    // Intentionally avoiding updateDate here to prevent circular dependencies.
	    var isoWeek = cloneDate(d), dow = getWeekday(d);
	    moveToFirstDayOfWeekYear(isoWeek, ISO_FIRST_DAY_OF_WEEK, ISO_FIRST_DAY_OF_WEEK_YEAR);
	    setDate(isoWeek, getDate(isoWeek) + 7 * (num - 1));
	    setYear(d, getYear(isoWeek));
	    setMonth(d, getMonth(isoWeek));
	    setDate(d, getDate(isoWeek));
	    setWeekday(d, dow || 7);
	  }
	  return d.getTime();
	}

	module.exports = setISOWeekNumber;

/***/ }),
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var callDateSet = __webpack_require__(467);

	function setYear(d, val) {
	  callDateSet(d, 'FullYear', val);
	}

	module.exports = setYear;

/***/ }),
/* 484 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var callDateSet = __webpack_require__(467);

	function setMonth(d, val) {
	  callDateSet(d, 'Month', val);
	}

	module.exports = setMonth;

/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _utc = __webpack_require__(450);

	function cloneDate(d) {
	  // Rhino environments have a bug where new Date(d) truncates
	  // milliseconds so need to call getTime() here.
	  var clone = new Date(d.getTime());
	  _utc(clone, !!_utc(d));
	  return clone;
	}

	module.exports = cloneDate;

/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var DateUnitIndexes = __webpack_require__(454),
	    setDate = __webpack_require__(475),
	    setUnitAndLowerToEdge = __webpack_require__(466),
	    moveToBeginningOfWeek = __webpack_require__(487);

	var MONTH_INDEX = DateUnitIndexes.MONTH_INDEX;

	function moveToFirstDayOfWeekYear(d, firstDayOfWeek, firstDayOfWeekYear) {
	  setUnitAndLowerToEdge(d, MONTH_INDEX);
	  setDate(d, firstDayOfWeekYear);
	  moveToBeginningOfWeek(d, firstDayOfWeek);
	}

	module.exports = moveToFirstDayOfWeekYear;

/***/ }),
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var setWeekday = __webpack_require__(477),
	    getWeekday = __webpack_require__(478),
	    mathAliases = __webpack_require__(93);

	var floor = mathAliases.floor;

	function moveToBeginningOfWeek(d, firstDayOfWeek) {
	  setWeekday(d, floor((getWeekday(d) - firstDayOfWeek) / 7) * 7 + firstDayOfWeek);
	  return d;
	}

	module.exports = moveToBeginningOfWeek;

/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var DateUnitIndexes = __webpack_require__(454),
	    isDefined = __webpack_require__(37),
	    getDateParam = __webpack_require__(489),
	    iterateOverDateUnits = __webpack_require__(445);

	var DAY_INDEX = DateUnitIndexes.DAY_INDEX;

	function iterateOverDateParams(params, fn, startIndex, endIndex) {

	  function run(name, unit, i) {
	    var val = getDateParam(params, name);
	    if (isDefined(val)) {
	      fn(name, val, unit, i);
	    }
	  }

	  iterateOverDateUnits(function (unit, i) {
	    var result = run(unit.name, unit, i);
	    if (result !== false && i === DAY_INDEX) {
	      // Check for "weekday", which has a distinct meaning
	      // in the context of setting a date, but has the same
	      // meaning as "day" as a unit of time.
	      result = run('weekday', unit, i);
	    }
	    return result;
	  }, startIndex, endIndex);

	}

	module.exports = iterateOverDateParams;

/***/ }),
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getDateParamKey = __webpack_require__(490),
	    coreUtilityAliases = __webpack_require__(17);

	var getOwn = coreUtilityAliases.getOwn;

	function getDateParam(params, key) {
	  return getOwn(params, getDateParamKey(params, key));
	}

	module.exports = getDateParam;

/***/ }),
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getOwnKey = __webpack_require__(491);

	function getDateParamKey(params, key) {
	  return getOwnKey(params, key) ||
	         getOwnKey(params, key + 's') ||
	         (key === 'day' && getOwnKey(params, 'date'));
	}

	module.exports = getDateParamKey;

/***/ }),
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var coreUtilityAliases = __webpack_require__(17);

	var hasOwn = coreUtilityAliases.hasOwn;

	function getOwnKey(obj, key) {
	  if (hasOwn(obj, key)) {
	    return key;
	  }
	}

	module.exports = getOwnKey;

/***/ }),
/* 492 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var updateDate = __webpack_require__(474);

	function advanceDate(d, unit, num, reset) {
	  var set = {};
	  set[unit] = num;
	  return updateDate(d, set, reset, 1);
	}

	module.exports = advanceDate;

/***/ }),
/* 493 */
/***/ (function(module, exports) {

	'use strict';

	function dateIsValid(d) {
	  return !isNaN(d.getTime());
	}

	module.exports = dateIsValid;

/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var LocaleHelpers = __webpack_require__(430),
	    DateUnitIndexes = __webpack_require__(454),
	    moveToEndOfWeek = __webpack_require__(495),
	    getLowerUnitIndex = __webpack_require__(469),
	    setUnitAndLowerToEdge = __webpack_require__(466);

	var WEEK_INDEX = DateUnitIndexes.WEEK_INDEX,
	    localeManager = LocaleHelpers.localeManager;

	function moveToEndOfUnit(d, unitIndex, localeCode, stopIndex) {
	  if (unitIndex === WEEK_INDEX) {
	    moveToEndOfWeek(d, localeManager.get(localeCode).getFirstDayOfWeek());
	  }
	  return setUnitAndLowerToEdge(d, getLowerUnitIndex(unitIndex), stopIndex, true);
	}

	module.exports = moveToEndOfUnit;

/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var setWeekday = __webpack_require__(477),
	    getWeekday = __webpack_require__(478),
	    mathAliases = __webpack_require__(93);

	var ceil = mathAliases.ceil;

	function moveToEndOfWeek(d, firstDayOfWeek) {
	  var target = firstDayOfWeek - 1;
	  setWeekday(d, ceil((getWeekday(d) - target) / 7) * 7 + target);
	  return d;
	}

	module.exports = moveToEndOfWeek;

/***/ }),
/* 496 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getDateParamKey = __webpack_require__(490);

	function deleteDateParam(params, key) {
	  delete params[getDateParamKey(params, key)];
	}

	module.exports = deleteDateParam;

/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var LocaleHelpers = __webpack_require__(430),
	    DateUnitIndexes = __webpack_require__(454),
	    getLowerUnitIndex = __webpack_require__(469),
	    moveToBeginningOfWeek = __webpack_require__(487),
	    setUnitAndLowerToEdge = __webpack_require__(466);

	var WEEK_INDEX = DateUnitIndexes.WEEK_INDEX,
	    localeManager = LocaleHelpers.localeManager;

	function moveToBeginningOfUnit(d, unitIndex, localeCode) {
	  if (unitIndex === WEEK_INDEX) {
	    moveToBeginningOfWeek(d, localeManager.get(localeCode).getFirstDayOfWeek());
	  }
	  return setUnitAndLowerToEdge(d, getLowerUnitIndex(unitIndex));
	}

	module.exports = moveToBeginningOfUnit;

/***/ }),
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getYear = __webpack_require__(448),
	    mathAliases = __webpack_require__(93);

	var abs = mathAliases.abs;

	function getYearFromAbbreviation(str, d, prefer) {
	  // Following IETF here, adding 1900 or 2000 depending on the last two digits.
	  // Note that this makes no accordance for what should happen after 2050, but
	  // intentionally ignoring this for now. https://www.ietf.org/rfc/rfc2822.txt
	  var val = +str, delta;
	  val += val < 50 ? 2000 : 1900;
	  if (prefer) {
	    delta = val - getYear(d);
	    if (delta / abs(delta) !== prefer) {
	      val += prefer * 100;
	    }
	  }
	  return val;
	}

	module.exports = getYearFromAbbreviation;

/***/ }),
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var DateUnitIndexes = __webpack_require__(454),
	    iterateOverDateParams = __webpack_require__(488);

	var DAY_INDEX = DateUnitIndexes.DAY_INDEX,
	    YEAR_INDEX = DateUnitIndexes.YEAR_INDEX;

	function iterateOverHigherDateParams(params, fn) {
	  iterateOverDateParams(params, fn, YEAR_INDEX, DAY_INDEX);
	}

	module.exports = iterateOverHigherDateParams;

/***/ }),
/* 500 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var setDateChainableConstructor = __webpack_require__(501);

	setDateChainableConstructor();

/***/ }),
/* 501 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var createDate = __webpack_require__(460),
	    namespaceAliases = __webpack_require__(154),
	    setChainableConstructor = __webpack_require__(207);

	var sugarDate = namespaceAliases.sugarDate;

	function setDateChainableConstructor() {
	  setChainableConstructor(sugarDate, createDate);
	}

	module.exports = setDateChainableConstructor;

/***/ }),
/* 502 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    LocaleHelpers = __webpack_require__(430),
	    getKeys = __webpack_require__(222);

	var localeManager = LocaleHelpers.localeManager;

	Sugar.Date.defineStatic({

	  'getAllLocaleCodes': function() {
	    return getKeys(localeManager.getAll());
	  }

	});

	module.exports = Sugar.Date.getAllLocaleCodes;

/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    LocaleHelpers = __webpack_require__(430);

	var localeManager = LocaleHelpers.localeManager;

	Sugar.Date.defineStatic({

	  'getAllLocales': function() {
	    return localeManager.getAll();
	  }

	});

	module.exports = Sugar.Date.getAllLocales;

/***/ }),
/* 504 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    LocaleHelpers = __webpack_require__(430);

	var localeManager = LocaleHelpers.localeManager;

	Sugar.Date.defineStatic({

	  'getLocale': function(code) {
	    return localeManager.get(code, !code);
	  }

	});

	module.exports = Sugar.Date.getLocale;

/***/ }),
/* 505 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    LocaleHelpers = __webpack_require__(430);

	var localeManager = LocaleHelpers.localeManager;

	Sugar.Date.defineStatic({

	  'removeLocale': function(code) {
	    return localeManager.remove(code);
	  }

	});

	module.exports = Sugar.Date.removeLocale;

/***/ }),
/* 506 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    LocaleHelpers = __webpack_require__(430);

	var localeManager = LocaleHelpers.localeManager;

	Sugar.Date.defineStatic({

	  'setLocale': function(code) {
	    return localeManager.set(code);
	  }

	});

	module.exports = Sugar.Date.setLocale;

/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.day;

/***/ }),
/* 508 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var buildNumberUnitMethods = __webpack_require__(509);

	buildNumberUnitMethods();

/***/ }),
/* 509 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var DateUnits = __webpack_require__(446),
	    createDate = __webpack_require__(460),
	    mathAliases = __webpack_require__(93),
	    advanceDate = __webpack_require__(492),
	    namespaceAliases = __webpack_require__(154),
	    defineInstanceSimilar = __webpack_require__(162);

	var sugarNumber = namespaceAliases.sugarNumber,
	    round = mathAliases.round;

	function buildNumberUnitMethods() {
	  defineInstanceSimilar(sugarNumber, DateUnits, function(methods, unit) {
	    var name = unit.name, base, after, before;
	    base = function(n) {
	      return round(n * unit.multiplier);
	    };
	    after = function(n, d, options) {
	      return advanceDate(createDate(d, options, true), name, n);
	    };
	    before = function(n, d, options) {
	      return advanceDate(createDate(d, options, true), name, -n);
	    };
	    methods[name] = base;
	    methods[name + 's'] = base;
	    methods[name + 'Before'] = before;
	    methods[name + 'sBefore'] = before;
	    methods[name + 'Ago'] = before;
	    methods[name + 'sAgo'] = before;
	    methods[name + 'After'] = after;
	    methods[name + 'sAfter'] = after;
	    methods[name + 'FromNow'] = after;
	    methods[name + 'sFromNow'] = after;
	  });
	}

	module.exports = buildNumberUnitMethods;

/***/ }),
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.dayAfter;

/***/ }),
/* 511 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.dayAgo;

/***/ }),
/* 512 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.dayBefore;

/***/ }),
/* 513 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.dayFromNow;

/***/ }),
/* 514 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.days;

/***/ }),
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.daysAfter;

/***/ }),
/* 516 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.daysAgo;

/***/ }),
/* 517 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.daysBefore;

/***/ }),
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.daysFromNow;

/***/ }),
/* 519 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    LocaleHelpers = __webpack_require__(430);

	var localeManager = LocaleHelpers.localeManager;

	Sugar.Number.defineInstance({

	  'duration': function(n, localeCode) {
	    return localeManager.get(localeCode).getDuration(n);
	  }

	});

	module.exports = Sugar.Number.duration;

/***/ }),
/* 520 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.hour;

/***/ }),
/* 521 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.hourAfter;

/***/ }),
/* 522 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.hourAgo;

/***/ }),
/* 523 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.hourBefore;

/***/ }),
/* 524 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.hourFromNow;

/***/ }),
/* 525 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.hours;

/***/ }),
/* 526 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.hoursAfter;

/***/ }),
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.hoursAgo;

/***/ }),
/* 528 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.hoursBefore;

/***/ }),
/* 529 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.hoursFromNow;

/***/ }),
/* 530 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.millisecond;

/***/ }),
/* 531 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.millisecondAfter;

/***/ }),
/* 532 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.millisecondAgo;

/***/ }),
/* 533 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.millisecondBefore;

/***/ }),
/* 534 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.millisecondFromNow;

/***/ }),
/* 535 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.milliseconds;

/***/ }),
/* 536 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.millisecondsAfter;

/***/ }),
/* 537 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.millisecondsAgo;

/***/ }),
/* 538 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.millisecondsBefore;

/***/ }),
/* 539 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.millisecondsFromNow;

/***/ }),
/* 540 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.minute;

/***/ }),
/* 541 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.minuteAfter;

/***/ }),
/* 542 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.minuteAgo;

/***/ }),
/* 543 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.minuteBefore;

/***/ }),
/* 544 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.minuteFromNow;

/***/ }),
/* 545 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.minutes;

/***/ }),
/* 546 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.minutesAfter;

/***/ }),
/* 547 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.minutesAgo;

/***/ }),
/* 548 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.minutesBefore;

/***/ }),
/* 549 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.minutesFromNow;

/***/ }),
/* 550 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.month;

/***/ }),
/* 551 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.monthAfter;

/***/ }),
/* 552 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.monthAgo;

/***/ }),
/* 553 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.monthBefore;

/***/ }),
/* 554 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.monthFromNow;

/***/ }),
/* 555 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.months;

/***/ }),
/* 556 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.monthsAfter;

/***/ }),
/* 557 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.monthsAgo;

/***/ }),
/* 558 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.monthsBefore;

/***/ }),
/* 559 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.monthsFromNow;

/***/ }),
/* 560 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.second;

/***/ }),
/* 561 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.secondAfter;

/***/ }),
/* 562 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.secondAgo;

/***/ }),
/* 563 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.secondBefore;

/***/ }),
/* 564 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.secondFromNow;

/***/ }),
/* 565 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.seconds;

/***/ }),
/* 566 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.secondsAfter;

/***/ }),
/* 567 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.secondsAgo;

/***/ }),
/* 568 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.secondsBefore;

/***/ }),
/* 569 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.secondsFromNow;

/***/ }),
/* 570 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.week;

/***/ }),
/* 571 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.weekAfter;

/***/ }),
/* 572 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.weekAgo;

/***/ }),
/* 573 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.weekBefore;

/***/ }),
/* 574 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.weekFromNow;

/***/ }),
/* 575 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.weeks;

/***/ }),
/* 576 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.weeksAfter;

/***/ }),
/* 577 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.weeksAgo;

/***/ }),
/* 578 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.weeksBefore;

/***/ }),
/* 579 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.weeksFromNow;

/***/ }),
/* 580 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.year;

/***/ }),
/* 581 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.yearAfter;

/***/ }),
/* 582 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.yearAgo;

/***/ }),
/* 583 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.yearBefore;

/***/ }),
/* 584 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.yearFromNow;

/***/ }),
/* 585 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.years;

/***/ }),
/* 586 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.yearsAfter;

/***/ }),
/* 587 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.yearsAgo;

/***/ }),
/* 588 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.yearsBefore;

/***/ }),
/* 589 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(508);

	module.exports = Sugar.Number.yearsFromNow;

/***/ }),
/* 590 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.addDays;

/***/ }),
/* 591 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var buildDateUnitMethods = __webpack_require__(592);

	buildDateUnitMethods();

/***/ }),
/* 592 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var DateUnits = __webpack_require__(446),
	    DateUnitIndexes = __webpack_require__(454),
	    forEach = __webpack_require__(10),
	    createDate = __webpack_require__(460),
	    compareDate = __webpack_require__(593),
	    advanceDate = __webpack_require__(492),
	    moveToEndOfUnit = __webpack_require__(494),
	    namespaceAliases = __webpack_require__(154),
	    simpleCapitalize = __webpack_require__(33),
	    moveToBeginningOfUnit = __webpack_require__(497),
	    defineInstanceSimilar = __webpack_require__(162),
	    getTimeDistanceForUnit = __webpack_require__(594);

	var sugarDate = namespaceAliases.sugarDate,
	    HOURS_INDEX = DateUnitIndexes.HOURS_INDEX,
	    DAY_INDEX = DateUnitIndexes.DAY_INDEX;

	function buildDateUnitMethods() {

	  defineInstanceSimilar(sugarDate, DateUnits, function(methods, unit, index) {
	    var name = unit.name, caps = simpleCapitalize(name);

	    if (index > DAY_INDEX) {
	      forEach(['Last','This','Next'], function(shift) {
	        methods['is' + shift + caps] = function(d, localeCode) {
	          return compareDate(d, shift + ' ' + name, 0, localeCode, { locale: 'en' });
	        };
	      });
	    }
	    if (index > HOURS_INDEX) {
	      methods['beginningOf' + caps] = function(d, localeCode) {
	        return moveToBeginningOfUnit(d, index, localeCode);
	      };
	      methods['endOf' + caps] = function(d, localeCode) {
	        return moveToEndOfUnit(d, index, localeCode);
	      };
	    }

	    methods['add' + caps + 's'] = function(d, num, reset) {
	      return advanceDate(d, name, num, reset);
	    };

	    var since = function(date, d, options) {
	      return getTimeDistanceForUnit(date, createDate(d, options, true), unit);
	    };
	    var until = function(date, d, options) {
	      return getTimeDistanceForUnit(createDate(d, options, true), date, unit);
	    };

	    methods[name + 'sAgo']   = methods[name + 'sUntil']   = until;
	    methods[name + 'sSince'] = methods[name + 'sFromNow'] = since;

	  });

	}

	module.exports = buildDateUnitMethods;

/***/ }),
/* 593 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var MINUTES = __webpack_require__(462),
	    DateUnits = __webpack_require__(446),
	    DateUnitIndexes = __webpack_require__(454),
	    _utc = __webpack_require__(450),
	    tzOffset = __webpack_require__(464),
	    cloneDate = __webpack_require__(485),
	    isDefined = __webpack_require__(37),
	    advanceDate = __webpack_require__(492),
	    dateIsValid = __webpack_require__(493),
	    moveToEndOfUnit = __webpack_require__(494),
	    getExtendedDate = __webpack_require__(461),
	    moveToBeginningOfUnit = __webpack_require__(497);

	var MONTH_INDEX = DateUnitIndexes.MONTH_INDEX;

	function compareDate(date, d, margin, localeCode, options) {
	  var loMargin = 0, hiMargin = 0, timezoneShift, compareEdges, override, min, max, p, t;

	  function getTimezoneShift() {
	    // If there is any specificity in the date then we're implicitly not
	    // checking absolute time, so ignore timezone shifts.
	    if (p.set && p.set.specificity) {
	      return 0;
	    }
	    return (tzOffset(p.date) - tzOffset(date)) * MINUTES;
	  }

	  function addSpecificUnit() {
	    var unit = DateUnits[p.set.specificity];
	    return advanceDate(cloneDate(p.date), unit.name, 1).getTime() - 1;
	  }

	  if (_utc(date)) {
	    options = options || {};
	    options.fromUTC = true;
	    options.setUTC = true;
	  }

	  p = getExtendedDate(null, d, options, true);

	  if (margin > 0) {
	    loMargin = hiMargin = margin;
	    override = true;
	  }
	  if (!dateIsValid(p.date)) return false;
	  if (p.set && p.set.specificity) {
	    if (isDefined(p.set.edge) || isDefined(p.set.shift)) {
	      compareEdges = true;
	      moveToBeginningOfUnit(p.date, p.set.specificity, localeCode);
	    }
	    if (compareEdges || p.set.specificity === MONTH_INDEX) {
	      max = moveToEndOfUnit(cloneDate(p.date), p.set.specificity, localeCode).getTime();
	    } else {
	      max = addSpecificUnit();
	    }
	    if (!override && isDefined(p.set.sign) && p.set.specificity) {
	      // If the time is relative, there can occasionally be an disparity between
	      // the relative date and "now", which it is being compared to, so set an
	      // extra margin to account for this.
	      loMargin = 50;
	      hiMargin = -50;
	    }
	  }
	  t   = date.getTime();
	  min = p.date.getTime();
	  max = max || min;
	  timezoneShift = getTimezoneShift();
	  // istanbul ignore if
	  if (timezoneShift) {
	    min -= timezoneShift;
	    max -= timezoneShift;
	  }
	  return t >= (min - loMargin) && t <= (max + hiMargin);
	}

	module.exports = compareDate;

/***/ }),
/* 594 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var trunc = __webpack_require__(95),
	    cloneDate = __webpack_require__(485),
	    advanceDate = __webpack_require__(492);

	function getTimeDistanceForUnit(d1, d2, unit) {
	  var fwd = d2 > d1, num, tmp;
	  if (!fwd) {
	    tmp = d2;
	    d2  = d1;
	    d1  = tmp;
	  }
	  num = d2 - d1;
	  if (unit.multiplier > 1) {
	    num = trunc(num / unit.multiplier);
	  }
	  // For higher order with potential ambiguity, use the numeric calculation
	  // as a starting point, then iterate until we pass the target date. Decrement
	  // starting point by 1 to prevent overshooting the date due to inconsistencies
	  // in ambiguous units numerically. For example, calculating the number of days
	  // from the beginning of the year to August 5th at 11:59:59 by doing a simple
	  // d2 - d1 will produce different results depending on whether or not a
	  // timezone shift was encountered due to DST, however that should not have an
	  // effect on our calculation here, so subtract by 1 to ensure that the
	  // starting point has not already overshot our target date.
	  if (unit.ambiguous) {
	    d1 = cloneDate(d1);
	    if (num) {
	      num -= 1;
	      advanceDate(d1, unit.name, num);
	    }
	    while (d1 < d2) {
	      advanceDate(d1, unit.name, 1);
	      if (d1 > d2) {
	        break;
	      }
	      num += 1;
	    }
	  }
	  return fwd ? -num : num;
	}

	module.exports = getTimeDistanceForUnit;

/***/ }),
/* 595 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.addHours;

/***/ }),
/* 596 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.addMilliseconds;

/***/ }),
/* 597 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.addMinutes;

/***/ }),
/* 598 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.addMonths;

/***/ }),
/* 599 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.addSeconds;

/***/ }),
/* 600 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.addWeeks;

/***/ }),
/* 601 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.addYears;

/***/ }),
/* 602 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    advanceDateWithArgs = __webpack_require__(603);

	Sugar.Date.defineInstanceWithArguments({

	  'advance': function(d, args) {
	    return advanceDateWithArgs(d, args, 1);
	  }

	});

	module.exports = Sugar.Date.advance;

/***/ }),
/* 603 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var updateDate = __webpack_require__(474),
	    collectUpdateDateArguments = __webpack_require__(604);

	function advanceDateWithArgs(d, args, dir) {
	  args = collectUpdateDateArguments(args, true);
	  return updateDate(d, args[0], args[1], dir);
	}

	module.exports = advanceDateWithArgs;

/***/ }),
/* 604 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classChecks = __webpack_require__(14),
	    simpleClone = __webpack_require__(156),
	    isObjectType = __webpack_require__(20),
	    getDateParamsFromString = __webpack_require__(605),
	    collectDateParamsFromArguments = __webpack_require__(606);

	var isNumber = classChecks.isNumber,
	    isString = classChecks.isString;

	function collectUpdateDateArguments(args, allowDuration) {
	  var arg1 = args[0], arg2 = args[1], params, reset;
	  if (allowDuration && isString(arg1)) {
	    params = getDateParamsFromString(arg1);
	    reset  = arg2;
	  } else if (isNumber(arg1) && isNumber(arg2)) {
	    params = collectDateParamsFromArguments(args);
	  } else {
	    params = isObjectType(arg1) ? simpleClone(arg1) : arg1;
	    reset  = arg2;
	  }
	  return [params, reset];
	}

	module.exports = collectUpdateDateArguments;

/***/ }),
/* 605 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var isUndefined = __webpack_require__(60);

	function getDateParamsFromString(str) {
	  var match, num, params = {};
	  match = str.match(/^(-?\d*[\d.]\d*)?\s?(\w+?)s?$/i);
	  if (match) {
	    if (isUndefined(num)) {
	      num = match[1] ? +match[1] : 1;
	    }
	    params[match[2].toLowerCase()] = num;
	  }
	  return params;
	}

	module.exports = getDateParamsFromString;

/***/ }),
/* 606 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var DateUnitIndexes = __webpack_require__(454),
	    isDefined = __webpack_require__(37),
	    walkUnitDown = __webpack_require__(468);

	var YEAR_INDEX = DateUnitIndexes.YEAR_INDEX;

	function collectDateParamsFromArguments(args) {
	  var params = {}, index = 0;
	  walkUnitDown(YEAR_INDEX, function(unit) {
	    var arg = args[index++];
	    if (isDefined(arg)) {
	      params[unit.name] = arg;
	    }
	  });
	  return params;
	}

	module.exports = collectDateParamsFromArguments;

/***/ }),
/* 607 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.beginningOfDay;

/***/ }),
/* 608 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    resetTime = __webpack_require__(465),
	    getWeekday = __webpack_require__(478),
	    setWeekday = __webpack_require__(477);

	Sugar.Date.defineInstance({

	  'beginningOfISOWeek': function(date) {
	    var day = getWeekday(date);
	    if (day === 0) {
	      day = -6;
	    } else if (day !== 1) {
	      day = 1;
	    }
	    setWeekday(date, day);
	    return resetTime(date);
	  }

	});

	module.exports = Sugar.Date.beginningOfISOWeek;

/***/ }),
/* 609 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.beginningOfMonth;

/***/ }),
/* 610 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.beginningOfWeek;

/***/ }),
/* 611 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.beginningOfYear;

/***/ }),
/* 612 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    cloneDate = __webpack_require__(485);

	Sugar.Date.defineInstance({

	  'clone': function(date) {
	    return cloneDate(date);
	  }

	});

	module.exports = Sugar.Date.clone;

/***/ }),
/* 613 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.daysAgo;

/***/ }),
/* 614 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.daysFromNow;

/***/ }),
/* 615 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    getDaysInMonth = __webpack_require__(447);

	Sugar.Date.defineInstance({

	  'daysInMonth': function(date) {
	    return getDaysInMonth(date);
	  }

	});

	module.exports = Sugar.Date.daysInMonth;

/***/ }),
/* 616 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.daysSince;

/***/ }),
/* 617 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.daysUntil;

/***/ }),
/* 618 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.endOfDay;

/***/ }),
/* 619 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    DateUnitIndexes = __webpack_require__(454),
	    getWeekday = __webpack_require__(478),
	    setWeekday = __webpack_require__(477),
	    moveToEndOfUnit = __webpack_require__(494);

	var DAY_INDEX = DateUnitIndexes.DAY_INDEX;

	Sugar.Date.defineInstance({

	  'endOfISOWeek': function(date) {
	    if (getWeekday(date) !== 0) {
	      setWeekday(date, 7);
	    }
	    return moveToEndOfUnit(date, DAY_INDEX);
	  }

	});

	module.exports = Sugar.Date.endOfISOWeek;

/***/ }),
/* 620 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.endOfMonth;

/***/ }),
/* 621 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.endOfWeek;

/***/ }),
/* 622 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.endOfYear;

/***/ }),
/* 623 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    dateFormat = __webpack_require__(624);

	Sugar.Date.defineInstance({

	  'format': function(date, f, localeCode) {
	    return dateFormat(date, f, localeCode);
	  }

	});

	module.exports = Sugar.Date.format;

/***/ }),
/* 624 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var CoreOutputFormats = __webpack_require__(625),
	    formattingTokens = __webpack_require__(626),
	    assertDateIsValid = __webpack_require__(635);

	var dateFormatMatcher = formattingTokens.dateFormatMatcher;

	function dateFormat(d, format, localeCode) {
	  assertDateIsValid(d);
	  format = CoreOutputFormats[format] || format || '{long}';
	  return dateFormatMatcher(format, d, localeCode);
	}

	module.exports = dateFormat;

/***/ }),
/* 625 */
/***/ (function(module, exports) {

	'use strict';

	var CoreOutputFormats = {
	  'ISO8601': '{yyyy}-{MM}-{dd}T{HH}:{mm}:{ss}.{SSS}{Z}',
	  'RFC1123': '{Dow}, {dd} {Mon} {yyyy} {HH}:{mm}:{ss} {ZZ}',
	  'RFC1036': '{Weekday}, {dd}-{Mon}-{yy} {HH}:{mm}:{ss} {ZZ}'
	};

	module.exports = CoreOutputFormats;

/***/ }),
/* 626 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var LocaleHelpers = __webpack_require__(430),
	    FormatTokensBase = __webpack_require__(627),
	    CoreOutputFormats = __webpack_require__(625),
	    forEach = __webpack_require__(10),
	    padNumber = __webpack_require__(178),
	    spaceSplit = __webpack_require__(18),
	    namespaceAliases = __webpack_require__(154),
	    coreUtilityAliases = __webpack_require__(17),
	    createFormatMatcher = __webpack_require__(73),
	    defineInstanceSimilar = __webpack_require__(162);

	var localeManager = LocaleHelpers.localeManager,
	    hasOwn = coreUtilityAliases.hasOwn,
	    getOwn = coreUtilityAliases.getOwn,
	    forEachProperty = coreUtilityAliases.forEachProperty,
	    sugarDate = namespaceAliases.sugarDate;

	var ldmlTokens, strfTokens;

	function buildDateFormatTokens() {

	  function addFormats(target, tokens, fn) {
	    if (tokens) {
	      forEach(spaceSplit(tokens), function(token) {
	        target[token] = fn;
	      });
	    }
	  }

	  function buildLowercase(get) {
	    return function(d, localeCode) {
	      return get(d, localeCode).toLowerCase();
	    };
	  }

	  function buildOrdinal(get) {
	    return function(d, localeCode) {
	      var n = get(d, localeCode);
	      return n + localeManager.get(localeCode).getOrdinal(n);
	    };
	  }

	  function buildPadded(get, padding) {
	    return function(d, localeCode) {
	      return padNumber(get(d, localeCode), padding);
	    };
	  }

	  function buildTwoDigits(get) {
	    return function(d, localeCode) {
	      return get(d, localeCode) % 100;
	    };
	  }

	  function buildAlias(alias) {
	    return function(d, localeCode) {
	      return dateFormatMatcher(alias, d, localeCode);
	    };
	  }

	  function buildAlternates(f) {
	    for (var n = 1; n <= 5; n++) {
	      buildAlternate(f, n);
	    }
	  }

	  function buildAlternate(f, n) {
	    var alternate = function(d, localeCode) {
	      return f.get(d, localeCode, n);
	    };
	    addFormats(ldmlTokens, f.ldml + n, alternate);
	    if (f.lowerToken) {
	      ldmlTokens[f.lowerToken + n] = buildLowercase(alternate);
	    }
	  }

	  function getIdentityFormat(name) {
	    return function(d, localeCode) {
	      var loc = localeManager.get(localeCode);
	      return dateFormatMatcher(loc[name], d, localeCode);
	    };
	  }

	  ldmlTokens = {};
	  strfTokens = {};

	  forEach(FormatTokensBase, function(f) {
	    var get = f.get, getPadded;
	    if (f.lowerToken) {
	      ldmlTokens[f.lowerToken] = buildLowercase(get);
	    }
	    if (f.ordinalToken) {
	      ldmlTokens[f.ordinalToken] = buildOrdinal(get, f);
	    }
	    if (f.ldmlPaddedToken) {
	      ldmlTokens[f.ldmlPaddedToken] = buildPadded(get, f.ldmlPaddedToken.length);
	    }
	    if (f.ldmlTwoDigitToken) {
	      ldmlTokens[f.ldmlTwoDigitToken] = buildPadded(buildTwoDigits(get), 2);
	    }
	    if (f.strfTwoDigitToken) {
	      strfTokens[f.strfTwoDigitToken] = buildPadded(buildTwoDigits(get), 2);
	    }
	    if (f.strfPadding) {
	      getPadded = buildPadded(get, f.strfPadding);
	    }
	    if (f.alias) {
	      get = buildAlias(f.alias);
	    }
	    if (f.allowAlternates) {
	      buildAlternates(f);
	    }
	    addFormats(ldmlTokens, f.ldml, get);
	    addFormats(strfTokens, f.strf, getPadded || get);
	  });

	  forEachProperty(CoreOutputFormats, function(src, name) {
	    addFormats(ldmlTokens, name, buildAlias(src));
	  });

	  defineInstanceSimilar(sugarDate, 'short medium long full', function(methods, name) {
	    var fn = getIdentityFormat(name);
	    addFormats(ldmlTokens, name, fn);
	    methods[name] = fn;
	  });

	  addFormats(ldmlTokens, 'time', getIdentityFormat('time'));
	  addFormats(ldmlTokens, 'stamp', getIdentityFormat('stamp'));
	}

	var dateFormatMatcher;

	function buildDateFormatMatcher() {

	  function getLdml(d, token, localeCode) {
	    return getOwn(ldmlTokens, token)(d, localeCode);
	  }

	  function getStrf(d, token, localeCode) {
	    return getOwn(strfTokens, token)(d, localeCode);
	  }

	  function checkDateToken(ldml, strf) {
	    return hasOwn(ldmlTokens, ldml) || hasOwn(strfTokens, strf);
	  }

	  // Format matcher for LDML or STRF tokens.
	  dateFormatMatcher = createFormatMatcher(getLdml, getStrf, checkDateToken);
	}

	buildDateFormatTokens();

	buildDateFormatMatcher();

	module.exports = {
	  ldmlTokens: ldmlTokens,
	  strfTokens: strfTokens,
	  dateFormatMatcher: dateFormatMatcher
	};

/***/ }),
/* 627 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var TIMEZONE_ABBREVIATION_REG = __webpack_require__(628),
	    LocaleHelpers = __webpack_require__(430),
	    DateUnitIndexes = __webpack_require__(454),
	    trunc = __webpack_require__(95),
	    getDate = __webpack_require__(476),
	    getYear = __webpack_require__(448),
	    getHours = __webpack_require__(629),
	    getMonth = __webpack_require__(453),
	    cloneDate = __webpack_require__(485),
	    padNumber = __webpack_require__(178),
	    getWeekday = __webpack_require__(478),
	    callDateGet = __webpack_require__(449),
	    mathAliases = __webpack_require__(93),
	    getWeekYear = __webpack_require__(630),
	    getUTCOffset = __webpack_require__(632),
	    getDaysSince = __webpack_require__(633),
	    getWeekNumber = __webpack_require__(631),
	    getMeridiemToken = __webpack_require__(634),
	    setUnitAndLowerToEdge = __webpack_require__(466);

	var localeManager = LocaleHelpers.localeManager,
	    MONTH_INDEX = DateUnitIndexes.MONTH_INDEX,
	    ceil = mathAliases.ceil;

	var FormatTokensBase = [
	  {
	    ldml: 'Dow',
	    strf: 'a',
	    lowerToken: 'dow',
	    get: function(d, localeCode) {
	      return localeManager.get(localeCode).getWeekdayName(getWeekday(d), 2);
	    }
	  },
	  {
	    ldml: 'Weekday',
	    strf: 'A',
	    lowerToken: 'weekday',
	    allowAlternates: true,
	    get: function(d, localeCode, alternate) {
	      return localeManager.get(localeCode).getWeekdayName(getWeekday(d), alternate);
	    }
	  },
	  {
	    ldml: 'Mon',
	    strf: 'b h',
	    lowerToken: 'mon',
	    get: function(d, localeCode) {
	      return localeManager.get(localeCode).getMonthName(getMonth(d), 2);
	    }
	  },
	  {
	    ldml: 'Month',
	    strf: 'B',
	    lowerToken: 'month',
	    allowAlternates: true,
	    get: function(d, localeCode, alternate) {
	      return localeManager.get(localeCode).getMonthName(getMonth(d), alternate);
	    }
	  },
	  {
	    strf: 'C',
	    get: function(d) {
	      return getYear(d).toString().slice(0, 2);
	    }
	  },
	  {
	    ldml: 'd date day',
	    strf: 'd',
	    strfPadding: 2,
	    ldmlPaddedToken: 'dd',
	    ordinalToken: 'do',
	    get: function(d) {
	      return getDate(d);
	    }
	  },
	  {
	    strf: 'e',
	    get: function(d) {
	      return padNumber(getDate(d), 2, false, 10, ' ');
	    }
	  },
	  {
	    ldml: 'H 24hr',
	    strf: 'H',
	    strfPadding: 2,
	    ldmlPaddedToken: 'HH',
	    get: function(d) {
	      return getHours(d);
	    }
	  },
	  {
	    ldml: 'h hours 12hr',
	    strf: 'I',
	    strfPadding: 2,
	    ldmlPaddedToken: 'hh',
	    get: function(d) {
	      return getHours(d) % 12 || 12;
	    }
	  },
	  {
	    ldml: 'D',
	    strf: 'j',
	    strfPadding: 3,
	    ldmlPaddedToken: 'DDD',
	    get: function(d) {
	      var s = setUnitAndLowerToEdge(cloneDate(d), MONTH_INDEX);
	      return getDaysSince(d, s) + 1;
	    }
	  },
	  {
	    ldml: 'M',
	    strf: 'm',
	    strfPadding: 2,
	    ordinalToken: 'Mo',
	    ldmlPaddedToken: 'MM',
	    get: function(d) {
	      return getMonth(d) + 1;
	    }
	  },
	  {
	    ldml: 'm minutes',
	    strf: 'M',
	    strfPadding: 2,
	    ldmlPaddedToken: 'mm',
	    get: function(d) {
	      return callDateGet(d, 'Minutes');
	    }
	  },
	  {
	    ldml: 'Q',
	    get: function(d) {
	      return ceil((getMonth(d) + 1) / 3);
	    }
	  },
	  {
	    ldml: 'TT',
	    strf: 'p',
	    get: function(d, localeCode) {
	      return getMeridiemToken(d, localeCode);
	    }
	  },
	  {
	    ldml: 'tt',
	    strf: 'P',
	    get: function(d, localeCode) {
	      return getMeridiemToken(d, localeCode).toLowerCase();
	    }
	  },
	  {
	    ldml: 'T',
	    lowerToken: 't',
	    get: function(d, localeCode) {
	      return getMeridiemToken(d, localeCode).charAt(0);
	    }
	  },
	  {
	    ldml: 's seconds',
	    strf: 'S',
	    strfPadding: 2,
	    ldmlPaddedToken: 'ss',
	    get: function(d) {
	      return callDateGet(d, 'Seconds');
	    }
	  },
	  {
	    ldml: 'S ms',
	    strfPadding: 3,
	    ldmlPaddedToken: 'SSS',
	    get: function(d) {
	      return callDateGet(d, 'Milliseconds');
	    }
	  },
	  {
	    ldml: 'e',
	    strf: 'u',
	    ordinalToken: 'eo',
	    get: function(d) {
	      return getWeekday(d) || 7;
	    }
	  },
	  {
	    strf: 'U',
	    strfPadding: 2,
	    get: function(d) {
	      // Sunday first, 0-53
	      return getWeekNumber(d, false, 0);
	    }
	  },
	  {
	    ldml: 'W',
	    strf: 'V',
	    strfPadding: 2,
	    ordinalToken: 'Wo',
	    ldmlPaddedToken: 'WW',
	    get: function(d) {
	      // Monday first, 1-53 (ISO8601)
	      return getWeekNumber(d, true);
	    }
	  },
	  {
	    strf: 'w',
	    get: function(d) {
	      return getWeekday(d);
	    }
	  },
	  {
	    ldml: 'w',
	    ordinalToken: 'wo',
	    ldmlPaddedToken: 'ww',
	    get: function(d, localeCode) {
	      // Locale dependent, 1-53
	      var loc = localeManager.get(localeCode),
	          dow = loc.getFirstDayOfWeek(localeCode),
	          doy = loc.getFirstDayOfWeekYear(localeCode);
	      return getWeekNumber(d, true, dow, doy);
	    }
	  },
	  {
	    strf: 'W',
	    strfPadding: 2,
	    get: function(d) {
	      // Monday first, 0-53
	      return getWeekNumber(d, false);
	    }
	  },
	  {
	    ldmlPaddedToken: 'gggg',
	    ldmlTwoDigitToken: 'gg',
	    get: function(d, localeCode) {
	      return getWeekYear(d, localeCode);
	    }
	  },
	  {
	    strf: 'G',
	    strfPadding: 4,
	    strfTwoDigitToken: 'g',
	    ldmlPaddedToken: 'GGGG',
	    ldmlTwoDigitToken: 'GG',
	    get: function(d, localeCode) {
	      return getWeekYear(d, localeCode, true);
	    }
	  },
	  {
	    ldml: 'year',
	    ldmlPaddedToken: 'yyyy',
	    ldmlTwoDigitToken: 'yy',
	    strf: 'Y',
	    strfPadding: 4,
	    strfTwoDigitToken: 'y',
	    get: function(d) {
	      return getYear(d);
	    }
	  },
	  {
	    ldml: 'ZZ',
	    strf: 'z',
	    get: function(d) {
	      return getUTCOffset(d);
	    }
	  },
	  {
	    ldml: 'X',
	    get: function(d) {
	      return trunc(d.getTime() / 1000);
	    }
	  },
	  {
	    ldml: 'x',
	    get: function(d) {
	      return d.getTime();
	    }
	  },
	  {
	    ldml: 'Z',
	    get: function(d) {
	      return getUTCOffset(d, true);
	    }
	  },
	  {
	    ldml: 'z',
	    strf: 'Z',
	    get: function(d) {
	      // Note that this is not accurate in all browsing environments!
	      // https://github.com/moment/moment/issues/162
	      // It will continue to be supported for Node and usage with the
	      // understanding that it may be blank.
	      var match = d.toString().match(TIMEZONE_ABBREVIATION_REG);
	      // istanbul ignore next
	      return match ? match[1] : '';
	    }
	  },
	  {
	    strf: 'D',
	    alias: '%m/%d/%y'
	  },
	  {
	    strf: 'F',
	    alias: '%Y-%m-%d'
	  },
	  {
	    strf: 'r',
	    alias: '%I:%M:%S %p'
	  },
	  {
	    strf: 'R',
	    alias: '%H:%M'
	  },
	  {
	    strf: 'T',
	    alias: '%H:%M:%S'
	  },
	  {
	    strf: 'x',
	    alias: '{short}'
	  },
	  {
	    strf: 'X',
	    alias: '{time}'
	  },
	  {
	    strf: 'c',
	    alias: '{stamp}'
	  }
	];

	module.exports = FormatTokensBase;

/***/ }),
/* 628 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = /\(([-+]\d{2,4}|\w{3,5})\)$/;

/***/ }),
/* 629 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var callDateGet = __webpack_require__(449);

	function getHours(d) {
	  return callDateGet(d, 'Hours');
	}

	module.exports = getHours;

/***/ }),
/* 630 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var LocaleHelpers = __webpack_require__(430),
	    getYear = __webpack_require__(448),
	    getMonth = __webpack_require__(453),
	    getWeekNumber = __webpack_require__(631);

	var localeManager = LocaleHelpers.localeManager;

	function getWeekYear(d, localeCode, iso) {
	  var year, month, firstDayOfWeek, firstDayOfWeekYear, week, loc;
	  year = getYear(d);
	  month = getMonth(d);
	  if (month === 0 || month === 11) {
	    if (!iso) {
	      loc = localeManager.get(localeCode);
	      firstDayOfWeek = loc.getFirstDayOfWeek(localeCode);
	      firstDayOfWeekYear = loc.getFirstDayOfWeekYear(localeCode);
	    }
	    week = getWeekNumber(d, false, firstDayOfWeek, firstDayOfWeekYear);
	    if (month === 0 && week === 0) {
	      year -= 1;
	    } else if (month === 11 && week === 1) {
	      year += 1;
	    }
	  }
	  return year;
	}

	module.exports = getWeekYear;

/***/ }),
/* 631 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var ISODefaults = __webpack_require__(439),
	    setDate = __webpack_require__(475),
	    getDate = __webpack_require__(476),
	    cloneDate = __webpack_require__(485),
	    isUndefined = __webpack_require__(60),
	    moveToEndOfWeek = __webpack_require__(495),
	    moveToBeginningOfWeek = __webpack_require__(487),
	    moveToFirstDayOfWeekYear = __webpack_require__(486);

	var ISO_FIRST_DAY_OF_WEEK = ISODefaults.ISO_FIRST_DAY_OF_WEEK,
	    ISO_FIRST_DAY_OF_WEEK_YEAR = ISODefaults.ISO_FIRST_DAY_OF_WEEK_YEAR;

	function getWeekNumber(d, allowPrevious, firstDayOfWeek, firstDayOfWeekYear) {
	  var isoWeek, n = 0;
	  if (isUndefined(firstDayOfWeek)) {
	    firstDayOfWeek = ISO_FIRST_DAY_OF_WEEK;
	  }
	  if (isUndefined(firstDayOfWeekYear)) {
	    firstDayOfWeekYear = ISO_FIRST_DAY_OF_WEEK_YEAR;
	  }
	  // Moving to the end of the week allows for forward year traversal, ie
	  // Dec 29 2014 is actually week 01 of 2015.
	  isoWeek = moveToEndOfWeek(cloneDate(d), firstDayOfWeek);
	  moveToFirstDayOfWeekYear(isoWeek, firstDayOfWeek, firstDayOfWeekYear);
	  if (allowPrevious && d < isoWeek) {
	    // If the date is still before the start of the year, then it should be
	    // the last week of the previous year, ie Jan 1 2016 is actually week 53
	    // of 2015, so move to the beginning of the week to traverse the year.
	    isoWeek = moveToBeginningOfWeek(cloneDate(d), firstDayOfWeek);
	    moveToFirstDayOfWeekYear(isoWeek, firstDayOfWeek, firstDayOfWeekYear);
	  }
	  while (isoWeek <= d) {
	    // Doing a very simple walk to get the week number.
	    setDate(isoWeek, getDate(isoWeek) + 7);
	    n++;
	  }
	  return n;
	}

	module.exports = getWeekNumber;

/***/ }),
/* 632 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _utc = __webpack_require__(450),
	    trunc = __webpack_require__(95),
	    tzOffset = __webpack_require__(464),
	    padNumber = __webpack_require__(178),
	    mathAliases = __webpack_require__(93);

	var abs = mathAliases.abs;

	function getUTCOffset(d, iso) {
	  var offset = _utc(d) ? 0 : tzOffset(d), hours, mins, colon;
	  colon  = iso === true ? ':' : '';
	  if (!offset && iso) return 'Z';
	  hours = padNumber(trunc(-offset / 60), 2, true);
	  mins = padNumber(abs(offset % 60), 2);
	  return  hours + colon + mins;
	}

	module.exports = getUTCOffset;

/***/ }),
/* 633 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var DateUnits = __webpack_require__(446),
	    DateUnitIndexes = __webpack_require__(454),
	    getTimeDistanceForUnit = __webpack_require__(594);

	var DAY_INDEX = DateUnitIndexes.DAY_INDEX;

	function getDaysSince(d1, d2) {
	  return getTimeDistanceForUnit(d1, d2, DateUnits[DAY_INDEX]);
	}

	module.exports = getDaysSince;

/***/ }),
/* 634 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var LocaleHelpers = __webpack_require__(430),
	    trunc = __webpack_require__(95),
	    getHours = __webpack_require__(629);

	var localeManager = LocaleHelpers.localeManager;

	function getMeridiemToken(d, localeCode) {
	  var hours = getHours(d);
	  return localeManager.get(localeCode).ampm[trunc(hours / 12)] || '';
	}

	module.exports = getMeridiemToken;

/***/ }),
/* 635 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var dateIsValid = __webpack_require__(493);

	function assertDateIsValid(d) {
	  if (!dateIsValid(d)) {
	    throw new TypeError('Date is not valid');
	  }
	}

	module.exports = assertDateIsValid;

/***/ }),
/* 636 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    createDateWithContext = __webpack_require__(637);

	Sugar.Date.defineInstance({

	  'get': function(date, d, options) {
	    return createDateWithContext(date, d, options);
	  }

	});

	module.exports = Sugar.Date.get;

/***/ }),
/* 637 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getExtendedDate = __webpack_require__(461);

	function createDateWithContext(contextDate, d, options, forceClone) {
	  return getExtendedDate(contextDate, d, options, forceClone).date;
	}

	module.exports = createDateWithContext;

/***/ }),
/* 638 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    getWeekNumber = __webpack_require__(631);

	Sugar.Date.defineInstance({

	  'getISOWeek': function(date) {
	    return getWeekNumber(date, true);
	  }

	});

	module.exports = Sugar.Date.getISOWeek;

/***/ }),
/* 639 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    getUTCOffset = __webpack_require__(632);

	Sugar.Date.defineInstance({

	  'getUTCOffset': function(date, iso) {
	    return getUTCOffset(date, iso);
	  }

	});

	module.exports = Sugar.Date.getUTCOffset;

/***/ }),
/* 640 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	Sugar.Date.defineInstance({

	  'getUTCWeekday': function(date) {
	    return date.getUTCDay();
	  }

	});

	module.exports = Sugar.Date.getUTCWeekday;

/***/ }),
/* 641 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    getWeekday = __webpack_require__(478);

	Sugar.Date.defineInstance({

	  'getWeekday': function(date) {
	    return getWeekday(date);
	  }

	});

	module.exports = Sugar.Date.getWeekday;

/***/ }),
/* 642 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.hoursAgo;

/***/ }),
/* 643 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.hoursFromNow;

/***/ }),
/* 644 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.hoursSince;

/***/ }),
/* 645 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.hoursUntil;

/***/ }),
/* 646 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    fullCompareDate = __webpack_require__(647);

	Sugar.Date.defineInstance({

	  'is': function(date, d, margin) {
	    return fullCompareDate(date, d, margin);
	  }

	});

	module.exports = Sugar.Date.is;

/***/ }),
/* 647 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var LocaleHelpers = __webpack_require__(430),
	    trim = __webpack_require__(44),
	    getMonth = __webpack_require__(453),
	    isDefined = __webpack_require__(37),
	    getNewDate = __webpack_require__(470),
	    compareDay = __webpack_require__(648),
	    getWeekday = __webpack_require__(478),
	    dateIsValid = __webpack_require__(493),
	    classChecks = __webpack_require__(14),
	    compareDate = __webpack_require__(593);

	var isString = classChecks.isString,
	    English = LocaleHelpers.English;

	function fullCompareDate(date, d, margin) {
	  var tmp;
	  if (!dateIsValid(date)) return;
	  if (isString(d)) {
	    d = trim(d).toLowerCase();
	    switch(true) {
	      case d === 'future':    return date.getTime() > getNewDate().getTime();
	      case d === 'past':      return date.getTime() < getNewDate().getTime();
	      case d === 'today':     return compareDay(date);
	      case d === 'tomorrow':  return compareDay(date,  1);
	      case d === 'yesterday': return compareDay(date, -1);
	      case d === 'weekday':   return getWeekday(date) > 0 && getWeekday(date) < 6;
	      case d === 'weekend':   return getWeekday(date) === 0 || getWeekday(date) === 6;

	      case (isDefined(tmp = English.weekdayMap[d])):
	        return getWeekday(date) === tmp;
	      case (isDefined(tmp = English.monthMap[d])):
	        return getMonth(date) === tmp;
	    }
	  }
	  return compareDate(date, d, margin);
	}

	module.exports = fullCompareDate;

/***/ }),
/* 648 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var setDate = __webpack_require__(475),
	    getDate = __webpack_require__(476),
	    getYear = __webpack_require__(448),
	    getMonth = __webpack_require__(453),
	    getNewDate = __webpack_require__(470);

	function compareDay(d, shift) {
	  var comp = getNewDate();
	  if (shift) {
	    setDate(comp, getDate(comp) + shift);
	  }
	  return getYear(d) === getYear(comp) &&
	         getMonth(d) === getMonth(comp) &&
	         getDate(d) === getDate(comp);
	}

	module.exports = compareDay;

/***/ }),
/* 649 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    createDate = __webpack_require__(460);

	Sugar.Date.defineInstance({

	  'isAfter': function(date, d, margin) {
	    return date.getTime() > createDate(d).getTime() - (margin || 0);
	  }

	});

	module.exports = Sugar.Date.isAfter;

/***/ }),
/* 650 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    createDate = __webpack_require__(460);

	Sugar.Date.defineInstance({

	  'isBefore': function(date, d, margin) {
	    return date.getTime() < createDate(d).getTime() + (margin || 0);
	  }

	});

	module.exports = Sugar.Date.isBefore;

/***/ }),
/* 651 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    createDate = __webpack_require__(460),
	    mathAliases = __webpack_require__(93);

	var min = mathAliases.min,
	    max = mathAliases.max;

	Sugar.Date.defineInstance({

	  'isBetween': function(date, d1, d2, margin) {
	    var t  = date.getTime();
	    var t1 = createDate(d1).getTime();
	    var t2 = createDate(d2).getTime();
	    var lo = min(t1, t2);
	    var hi = max(t1, t2);
	    margin = margin || 0;
	    return (lo - margin <= t) && (hi + margin >= t);
	  }

	});

	module.exports = Sugar.Date.isBetween;

/***/ }),
/* 652 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(653);

	module.exports = Sugar.Date.isFriday;

/***/ }),
/* 653 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var buildRelativeAliases = __webpack_require__(654);

	buildRelativeAliases();

/***/ }),
/* 654 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var LocaleHelpers = __webpack_require__(430),
	    spaceSplit = __webpack_require__(18),
	    fullCompareDate = __webpack_require__(647),
	    namespaceAliases = __webpack_require__(154),
	    defineInstanceSimilar = __webpack_require__(162);

	var English = LocaleHelpers.English,
	    sugarDate = namespaceAliases.sugarDate;

	function buildRelativeAliases() {
	  var special  = spaceSplit('Today Yesterday Tomorrow Weekday Weekend Future Past');
	  var weekdays = English.weekdays.slice(0, 7);
	  var months   = English.months.slice(0, 12);
	  var together = special.concat(weekdays).concat(months);
	  defineInstanceSimilar(sugarDate, together, function(methods, name) {
	    methods['is'+ name] = function(d) {
	      return fullCompareDate(d, name);
	    };
	  });
	}

	module.exports = buildRelativeAliases;

/***/ }),
/* 655 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(653);

	module.exports = Sugar.Date.isFuture;

/***/ }),
/* 656 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.isLastMonth;

/***/ }),
/* 657 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.isLastWeek;

/***/ }),
/* 658 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.isLastYear;

/***/ }),
/* 659 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    getYear = __webpack_require__(448);

	Sugar.Date.defineInstance({

	  'isLeapYear': function(date) {
	    var year = getYear(date);
	    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
	  }

	});

	module.exports = Sugar.Date.isLeapYear;

/***/ }),
/* 660 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(653);

	module.exports = Sugar.Date.isMonday;

/***/ }),
/* 661 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.isNextMonth;

/***/ }),
/* 662 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.isNextWeek;

/***/ }),
/* 663 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.isNextYear;

/***/ }),
/* 664 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(653);

	module.exports = Sugar.Date.isPast;

/***/ }),
/* 665 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(653);

	module.exports = Sugar.Date.isSaturday;

/***/ }),
/* 666 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(653);

	module.exports = Sugar.Date.isSunday;

/***/ }),
/* 667 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.isThisMonth;

/***/ }),
/* 668 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.isThisWeek;

/***/ }),
/* 669 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.isThisYear;

/***/ }),
/* 670 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(653);

	module.exports = Sugar.Date.isThursday;

/***/ }),
/* 671 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(653);

	module.exports = Sugar.Date.isToday;

/***/ }),
/* 672 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(653);

	module.exports = Sugar.Date.isTomorrow;

/***/ }),
/* 673 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(653);

	module.exports = Sugar.Date.isTuesday;

/***/ }),
/* 674 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    isUTC = __webpack_require__(675);

	Sugar.Date.defineInstance({

	  'isUTC': function(date) {
	    return isUTC(date);
	  }

	});

	module.exports = Sugar.Date.isUTC;

/***/ }),
/* 675 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _utc = __webpack_require__(450),
	    tzOffset = __webpack_require__(464);

	function isUTC(d) {
	  return !!_utc(d) || tzOffset(d) === 0;
	}

	module.exports = isUTC;

/***/ }),
/* 676 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    dateIsValid = __webpack_require__(493);

	Sugar.Date.defineInstance({

	  'isValid': function(date) {
	    return dateIsValid(date);
	  }

	});

	module.exports = Sugar.Date.isValid;

/***/ }),
/* 677 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(653);

	module.exports = Sugar.Date.isWednesday;

/***/ }),
/* 678 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(653);

	module.exports = Sugar.Date.isWeekday;

/***/ }),
/* 679 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(653);

	module.exports = Sugar.Date.isWeekend;

/***/ }),
/* 680 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(653);

	module.exports = Sugar.Date.isYesterday;

/***/ }),
/* 681 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	Sugar.Date.defineInstance({

	  'iso': function(date) {
	    return date.toISOString();
	  }

	});

	module.exports = Sugar.Date.iso;

/***/ }),
/* 682 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.millisecondsAgo;

/***/ }),
/* 683 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.millisecondsFromNow;

/***/ }),
/* 684 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.millisecondsSince;

/***/ }),
/* 685 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.millisecondsUntil;

/***/ }),
/* 686 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.minutesAgo;

/***/ }),
/* 687 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.minutesFromNow;

/***/ }),
/* 688 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.minutesSince;

/***/ }),
/* 689 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.minutesUntil;

/***/ }),
/* 690 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.monthsAgo;

/***/ }),
/* 691 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.monthsFromNow;

/***/ }),
/* 692 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.monthsSince;

/***/ }),
/* 693 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.monthsUntil;

/***/ }),
/* 694 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    dateRelative = __webpack_require__(695);

	Sugar.Date.defineInstance({

	  'relative': function(date, localeCode, relativeFn) {
	    return dateRelative(date, null, localeCode, relativeFn);
	  }

	});

	module.exports = Sugar.Date.relative;

/***/ }),
/* 695 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var LocaleHelpers = __webpack_require__(430),
	    dateFormat = __webpack_require__(624),
	    classChecks = __webpack_require__(14),
	    assertDateIsValid = __webpack_require__(635),
	    getAdjustedUnitForDate = __webpack_require__(696);

	var isFunction = classChecks.isFunction,
	    localeManager = LocaleHelpers.localeManager;

	function dateRelative(d, dRelative, arg1, arg2) {
	  var adu, format, type, localeCode, fn;
	  assertDateIsValid(d);
	  if (isFunction(arg1)) {
	    fn = arg1;
	  } else {
	    localeCode = arg1;
	    fn = arg2;
	  }
	  adu = getAdjustedUnitForDate(d, dRelative);
	  if (fn) {
	    format = fn.apply(d, adu.concat(localeManager.get(localeCode)));
	    if (format) {
	      return dateFormat(d, format, localeCode);
	    }
	  }
	  // Adjust up if time is in ms, as this doesn't
	  // look very good for a standard relative date.
	  if (adu[1] === 0) {
	    adu[1] = 1;
	    adu[0] = 1;
	  }
	  if (dRelative) {
	    type = 'duration';
	  } else if (adu[2] > 0) {
	    type = 'future';
	  } else {
	    type = 'past';
	  }
	  return localeManager.get(localeCode).getRelativeFormat(adu, type);
	}

	module.exports = dateRelative;

/***/ }),
/* 696 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var getNewDate = __webpack_require__(470),
	    mathAliases = __webpack_require__(93),
	    getAdjustedUnit = __webpack_require__(457),
	    getTimeDistanceForUnit = __webpack_require__(594);

	var abs = mathAliases.abs;

	function getAdjustedUnitForDate(d, dRelative) {
	  var ms;
	  if (!dRelative) {
	    dRelative = getNewDate();
	    if (d > dRelative) {
	      // If our date is greater than the one that we got from getNewDate, it
	      // means that we are finding the unit for a date that is in the future
	      // relative to now. However, often the incoming date was created in
	      // the same cycle as our comparison, but our "now" date will have been
	      // created an instant after it, creating situations where "5 minutes from
	      // now" becomes "4 minutes from now" in the same tick. To prevent this,
	      // subtract a buffer of 10ms to compensate.
	      dRelative = new Date(dRelative.getTime() - 10);
	    }
	  }
	  ms = d - dRelative;
	  return getAdjustedUnit(ms, function(u) {
	    return abs(getTimeDistanceForUnit(d, dRelative, u));
	  });
	}

	module.exports = getAdjustedUnitForDate;

/***/ }),
/* 697 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    createDate = __webpack_require__(460),
	    dateRelative = __webpack_require__(695);

	Sugar.Date.defineInstance({

	  'relativeTo': function(date, d, localeCode) {
	    return dateRelative(date, createDate(d), localeCode);
	  }

	});

	module.exports = Sugar.Date.relativeTo;

/***/ }),
/* 698 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    DateUnitIndexes = __webpack_require__(454),
	    moveToBeginningOfUnit = __webpack_require__(497),
	    getUnitIndexForParamName = __webpack_require__(699);

	var DAY_INDEX = DateUnitIndexes.DAY_INDEX;

	Sugar.Date.defineInstance({

	  'reset': function(date, unit, localeCode) {
	    var unitIndex = unit ? getUnitIndexForParamName(unit) : DAY_INDEX;
	    moveToBeginningOfUnit(date, unitIndex, localeCode);
	    return date;
	  }

	});

	module.exports = Sugar.Date.reset;

/***/ }),
/* 699 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var iterateOverDateParams = __webpack_require__(488);

	function getUnitIndexForParamName(name) {
	  var params = {}, unitIndex;
	  params[name] = 1;
	  iterateOverDateParams(params, function(name, val, unit, i) {
	    unitIndex = i;
	    return false;
	  });
	  return unitIndex;
	}

	module.exports = getUnitIndexForParamName;

/***/ }),
/* 700 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    advanceDateWithArgs = __webpack_require__(603);

	Sugar.Date.defineInstanceWithArguments({

	  'rewind': function(d, args) {
	    return advanceDateWithArgs(d, args, -1);
	  }

	});

	module.exports = Sugar.Date.rewind;

/***/ }),
/* 701 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.secondsAgo;

/***/ }),
/* 702 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.secondsFromNow;

/***/ }),
/* 703 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.secondsSince;

/***/ }),
/* 704 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.secondsUntil;

/***/ }),
/* 705 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    updateDate = __webpack_require__(474),
	    collectUpdateDateArguments = __webpack_require__(604);

	Sugar.Date.defineInstanceWithArguments({

	  'set': function(d, args) {
	    args = collectUpdateDateArguments(args);
	    return updateDate(d, args[0], args[1]);
	  }

	});

	module.exports = Sugar.Date.set;

/***/ }),
/* 706 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    setISOWeekNumber = __webpack_require__(482);

	Sugar.Date.defineInstance({

	  'setISOWeek': function(date, num) {
	    return setISOWeekNumber(date, num);
	  }

	});

	module.exports = Sugar.Date.setISOWeek;

/***/ }),
/* 707 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    _utc = __webpack_require__(450);

	Sugar.Date.defineInstance({

	  'setUTC': function(date, on) {
	    return _utc(date, on);
	  }

	});

	module.exports = Sugar.Date.setUTC;

/***/ }),
/* 708 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    setWeekday = __webpack_require__(477);

	Sugar.Date.defineInstance({

	  'setWeekday': function(date, dow) {
	    return setWeekday(date, dow);
	  }

	});

	module.exports = Sugar.Date.setWeekday;

/***/ }),
/* 709 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.weeksAgo;

/***/ }),
/* 710 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.weeksFromNow;

/***/ }),
/* 711 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.weeksSince;

/***/ }),
/* 712 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.weeksUntil;

/***/ }),
/* 713 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.yearsAgo;

/***/ }),
/* 714 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.yearsFromNow;

/***/ }),
/* 715 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.yearsSince;

/***/ }),
/* 716 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	__webpack_require__(591);

	module.exports = Sugar.Date.yearsUntil;

/***/ }),
/* 717 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    _dateOptions = __webpack_require__(471);

	module.exports = Sugar.Date.getOption;

/***/ }),
/* 718 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    _dateOptions = __webpack_require__(471);

	module.exports = Sugar.Date.setOption;

/***/ }),
/* 719 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// Static Methods
	__webpack_require__(720);
	__webpack_require__(734);
	__webpack_require__(736);

	// Instance Methods
	__webpack_require__(737);
	__webpack_require__(739);
	__webpack_require__(740);

	// Prototype Methods
	__webpack_require__(749);
	__webpack_require__(751);
	__webpack_require__(752);
	__webpack_require__(753);
	__webpack_require__(756);
	__webpack_require__(757);
	__webpack_require__(758);
	__webpack_require__(759);
	__webpack_require__(760);
	__webpack_require__(761);
	__webpack_require__(762);
	__webpack_require__(763);
	__webpack_require__(764);
	__webpack_require__(766);
	__webpack_require__(767);
	__webpack_require__(768);
	__webpack_require__(769);
	__webpack_require__(770);

	// Aliases
	__webpack_require__(771);

	module.exports = __webpack_require__(8);

/***/ }),
/* 720 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    DateRangeConstructor = __webpack_require__(721);

	Sugar.Date.defineStatic({

	  'range': DateRangeConstructor

	});

	module.exports = Sugar.Date.range;

/***/ }),
/* 721 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Range = __webpack_require__(722),
	    classChecks = __webpack_require__(14),
	    getDateForRange = __webpack_require__(725),
	    createDateRangeFromString = __webpack_require__(726);

	var isString = classChecks.isString;

	var DateRangeConstructor = function(start, end) {
	  if (arguments.length === 1 && isString(start)) {
	    return createDateRangeFromString(start);
	  }
	  return new Range(getDateForRange(start), getDateForRange(end));
	};

	module.exports = DateRangeConstructor;

/***/ }),
/* 722 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var cloneRangeMember = __webpack_require__(723);

	function Range(start, end) {
	  this.start = cloneRangeMember(start);
	  this.end   = cloneRangeMember(end);
	}

	module.exports = Range;

/***/ }),
/* 723 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classChecks = __webpack_require__(14),
	    getRangeMemberPrimitiveValue = __webpack_require__(724);

	var isDate = classChecks.isDate;

	function cloneRangeMember(m) {
	  if (isDate(m)) {
	    return new Date(m.getTime());
	  } else {
	    return getRangeMemberPrimitiveValue(m);
	  }
	}

	module.exports = cloneRangeMember;

/***/ }),
/* 724 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classChecks = __webpack_require__(14);

	var isDate = classChecks.isDate;

	function getRangeMemberPrimitiveValue(m) {
	  if (m == null) return m;
	  return isDate(m) ? m.getTime() : m.valueOf();
	}

	module.exports = getRangeMemberPrimitiveValue;

/***/ }),
/* 725 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classChecks = __webpack_require__(14),
	    namespaceAliases = __webpack_require__(154);

	var isDate = classChecks.isDate,
	    sugarDate = namespaceAliases.sugarDate;

	function getDateForRange(d) {
	  if (isDate(d)) {
	    return d;
	  } else if (d == null) {
	    return new Date();
	  } else if (sugarDate.create) {
	    return sugarDate.create(d);
	  }
	  return new Date(d);
	}

	module.exports = getDateForRange;

/***/ }),
/* 726 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Range = __webpack_require__(722),
	    DurationTextFormats = __webpack_require__(727),
	    incrementDate = __webpack_require__(730),
	    getDateForRange = __webpack_require__(725),
	    namespaceAliases = __webpack_require__(154),
	    getDateIncrementObject = __webpack_require__(732);

	var sugarDate = namespaceAliases.sugarDate,
	    RANGE_REG_FROM_TO = DurationTextFormats.RANGE_REG_FROM_TO,
	    RANGE_REG_REAR_DURATION = DurationTextFormats.RANGE_REG_REAR_DURATION,
	    RANGE_REG_FRONT_DURATION = DurationTextFormats.RANGE_REG_FRONT_DURATION;

	function createDateRangeFromString(str) {
	  var match, datetime, duration, dio, start, end;
	  if (sugarDate.get && (match = str.match(RANGE_REG_FROM_TO))) {
	    start = getDateForRange(match[1].replace('from', 'at'));
	    end = sugarDate.get(start, match[2]);
	    return new Range(start, end);
	  }
	  if (match = str.match(RANGE_REG_FRONT_DURATION)) {
	    duration = match[1];
	    datetime = match[2];
	  }
	  if (match = str.match(RANGE_REG_REAR_DURATION)) {
	    datetime = match[1];
	    duration = match[2];
	  }
	  if (datetime && duration) {
	    start = getDateForRange(datetime);
	    dio = getDateIncrementObject(duration);
	    end = incrementDate(start, dio[0], dio[1]);
	  } else {
	    start = str;
	  }
	  return new Range(getDateForRange(start), getDateForRange(end));
	}

	module.exports = createDateRangeFromString;

/***/ }),
/* 727 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var FULL_CAPTURED_DURATION = __webpack_require__(728);

	module.exports = {
	  RANGE_REG_FROM_TO: /(?:from)?\s*(.+)\s+(?:to|until)\s+(.+)$/i,
	  RANGE_REG_REAR_DURATION: RegExp('(.+)\\s*for\\s*' + FULL_CAPTURED_DURATION, 'i'),
	  RANGE_REG_FRONT_DURATION: RegExp('(?:for)?\\s*'+ FULL_CAPTURED_DURATION +'\\s*(?:starting)?\\s(?:at\\s)?(.+)', 'i')
	};

/***/ }),
/* 728 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var DURATION_UNITS = __webpack_require__(729);

	module.exports = '((?:\\d+)?\\s*(?:' + DURATION_UNITS + '))s?';

/***/ }),
/* 729 */
/***/ (function(module, exports) {

	'use strict';

	module.exports = 'year|month|week|day|hour|minute|second|millisecond';

/***/ }),
/* 730 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var MULTIPLIERS = __webpack_require__(731),
	    callDateSet = __webpack_require__(467),
	    callDateGet = __webpack_require__(449);

	function incrementDate(src, amount, unit) {
	  var mult = MULTIPLIERS[unit], d;
	  if (mult) {
	    d = new Date(src.getTime() + (amount * mult));
	  } else {
	    d = new Date(src);
	    callDateSet(d, unit, callDateGet(src, unit) + amount);
	  }
	  return d;
	}

	module.exports = incrementDate;

/***/ }),
/* 731 */
/***/ (function(module, exports) {

	'use strict';

	var MULTIPLIERS = {
	  'Hours': 60 * 60 * 1000,
	  'Minutes': 60 * 1000,
	  'Seconds': 1000,
	  'Milliseconds': 1
	};

	module.exports = MULTIPLIERS;

/***/ }),
/* 732 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var DURATION_REG = __webpack_require__(733),
	    classChecks = __webpack_require__(14),
	    simpleCapitalize = __webpack_require__(33);

	var isNumber = classChecks.isNumber;

	function getDateIncrementObject(amt) {
	  var match, val, unit;
	  if (isNumber(amt)) {
	    return [amt, 'Milliseconds'];
	  }
	  match = amt.match(DURATION_REG);
	  val = +match[1] || 1;
	  unit = simpleCapitalize(match[2].toLowerCase());
	  if (unit.match(/hour|minute|second/i)) {
	    unit += 's';
	  } else if (unit === 'Year') {
	    unit = 'FullYear';
	  } else if (unit === 'Week') {
	    unit = 'Date';
	    val *= 7;
	  } else if (unit === 'Day') {
	    unit = 'Date';
	  }
	  return [val, unit];
	}

	module.exports = getDateIncrementObject;

/***/ }),
/* 733 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var DURATION_UNITS = __webpack_require__(729);

	module.exports = RegExp('(\\d+)?\\s*('+ DURATION_UNITS +')s?', 'i');

/***/ }),
/* 734 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    PrimitiveRangeConstructor = __webpack_require__(735);

	Sugar.Number.defineStatic({

	  'range': PrimitiveRangeConstructor

	});

	module.exports = Sugar.Number.range;

/***/ }),
/* 735 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Range = __webpack_require__(722);

	var PrimitiveRangeConstructor = function(start, end) {
	  return new Range(start, end);
	};

	module.exports = PrimitiveRangeConstructor;

/***/ }),
/* 736 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    PrimitiveRangeConstructor = __webpack_require__(735);

	Sugar.String.defineStatic({

	  'range': PrimitiveRangeConstructor

	});

	module.exports = Sugar.String.range;

/***/ }),
/* 737 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    Range = __webpack_require__(722),
	    rangeClamp = __webpack_require__(738);

	Sugar.Number.defineInstance({

	  'cap': function(n, max) {
	    return rangeClamp(new Range(undefined, max), n);
	  }

	});

	module.exports = Sugar.Number.cap;

/***/ }),
/* 738 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var cloneRangeMember = __webpack_require__(723);

	function rangeClamp(range, obj) {
	  var clamped,
	      start = range.start,
	      end = range.end,
	      min = end < start ? end : start,
	      max = start > end ? start : end;
	  if (obj < min) {
	    clamped = min;
	  } else if (obj > max) {
	    clamped = max;
	  } else {
	    clamped = obj;
	  }
	  return cloneRangeMember(clamped);
	}

	module.exports = rangeClamp;

/***/ }),
/* 739 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    Range = __webpack_require__(722),
	    rangeClamp = __webpack_require__(738);

	Sugar.Number.defineInstance({

	  'clamp': function(n, start, end) {
	    return rangeClamp(new Range(start, end), n);
	  }

	});

	module.exports = Sugar.Number.clamp;

/***/ }),
/* 740 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    Range = __webpack_require__(722),
	    rangeEvery = __webpack_require__(741);

	Sugar.Number.defineInstance({

	  'upto': function(n, num, step, everyFn) {
	    return rangeEvery(new Range(n, num), step, false, everyFn);
	  }

	});

	module.exports = Sugar.Number.upto;

/***/ }),
/* 741 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classChecks = __webpack_require__(14),
	    rangeIsValid = __webpack_require__(742),
	    incrementDate = __webpack_require__(730),
	    incrementNumber = __webpack_require__(745),
	    incrementString = __webpack_require__(746),
	    getGreaterPrecision = __webpack_require__(747),
	    getDateIncrementObject = __webpack_require__(732);

	var isNumber = classChecks.isNumber,
	    isString = classChecks.isString,
	    isDate = classChecks.isDate,
	    isFunction = classChecks.isFunction;

	function rangeEvery(range, step, countOnly, fn) {
	  var increment,
	      precision,
	      dio,
	      unit,
	      start   = range.start,
	      end     = range.end,
	      inverse = end < start,
	      current = start,
	      index   = 0,
	      result  = [];

	  if (!rangeIsValid(range)) {
	    return countOnly ? NaN : [];
	  }
	  if (isFunction(step)) {
	    fn = step;
	    step = null;
	  }
	  step = step || 1;
	  if (isNumber(start)) {
	    precision = getGreaterPrecision(start, step);
	    increment = function() {
	      return incrementNumber(current, step, precision);
	    };
	  } else if (isString(start)) {
	    increment = function() {
	      return incrementString(current, step);
	    };
	  } else if (isDate(start)) {
	    dio  = getDateIncrementObject(step);
	    step = dio[0];
	    unit = dio[1];
	    increment = function() {
	      return incrementDate(current, step, unit);
	    };
	  }
	  // Avoiding infinite loops
	  if (inverse && step > 0) {
	    step *= -1;
	  }
	  while(inverse ? current >= end : current <= end) {
	    if (!countOnly) {
	      result.push(current);
	    }
	    if (fn) {
	      fn(current, index, range);
	    }
	    current = increment();
	    index++;
	  }
	  return countOnly ? index - 1 : result;
	}

	module.exports = rangeEvery;

/***/ }),
/* 742 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var isValidRangeMember = __webpack_require__(743);

	function rangeIsValid(range) {
	  return isValidRangeMember(range.start) &&
	         isValidRangeMember(range.end) &&
	         typeof range.start === typeof range.end;
	}

	module.exports = rangeIsValid;

/***/ }),
/* 743 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var valueIsNotInfinite = __webpack_require__(744),
	    getRangeMemberPrimitiveValue = __webpack_require__(724);

	function isValidRangeMember(m) {
	  var val = getRangeMemberPrimitiveValue(m);
	  return (!!val || val === 0) && valueIsNotInfinite(m);
	}

	module.exports = isValidRangeMember;

/***/ }),
/* 744 */
/***/ (function(module, exports) {

	'use strict';

	function valueIsNotInfinite(m) {
	  return m !== -Infinity && m !== Infinity;
	}

	module.exports = valueIsNotInfinite;

/***/ }),
/* 745 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var withPrecision = __webpack_require__(151);

	function incrementNumber(current, amount, precision) {
	  return withPrecision(current + amount, precision);
	}

	module.exports = incrementNumber;

/***/ }),
/* 746 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var chr = __webpack_require__(52);

	function incrementString(current, amount) {
	  return chr(current.charCodeAt(0) + amount);
	}

	module.exports = incrementString;

/***/ }),
/* 747 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var mathAliases = __webpack_require__(93),
	    getPrecision = __webpack_require__(748);

	var max = mathAliases.max;

	function getGreaterPrecision(n1, n2) {
	  return max(getPrecision(n1), getPrecision(n2));
	}

	module.exports = getGreaterPrecision;

/***/ }),
/* 748 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var periodSplit = __webpack_require__(69);

	function getPrecision(n) {
	  var split = periodSplit(n.toString());
	  return split[1] ? split[1].length : 0;
	}

	module.exports = getPrecision;

/***/ }),
/* 749 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Range = __webpack_require__(722),
	    rangeClamp = __webpack_require__(738),
	    defineOnPrototype = __webpack_require__(750);

	defineOnPrototype(Range, {

	  'clamp': function(el) {
	    return rangeClamp(this, el);
	  }

	});

	// This package does not export anything as it is
	// simply defining "clamp" on Range.prototype.

/***/ }),
/* 750 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var coreUtilityAliases = __webpack_require__(17);

	var forEachProperty = coreUtilityAliases.forEachProperty;

	function defineOnPrototype(ctor, methods) {
	  var proto = ctor.prototype;
	  forEachProperty(methods, function(val, key) {
	    proto[key] = val;
	  });
	}

	module.exports = defineOnPrototype;

/***/ }),
/* 751 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Range = __webpack_require__(722),
	    defineOnPrototype = __webpack_require__(750);

	defineOnPrototype(Range, {

	  'clone': function() {
	    return new Range(this.start, this.end);
	  }

	});

	// This package does not export anything as it is
	// simply defining "clone" on Range.prototype.

/***/ }),
/* 752 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Range = __webpack_require__(722),
	    defineOnPrototype = __webpack_require__(750);

	defineOnPrototype(Range, {

	  'contains': function(el) {
	    if (el == null) return false;
	    if (el.start && el.end) {
	      return el.start >= this.start && el.start <= this.end &&
	             el.end   >= this.start && el.end   <= this.end;
	    } else {
	      return el >= this.start && el <= this.end;
	    }
	  }

	});

	// This package does not export anything as it is
	// simply defining "contains" on Range.prototype.

/***/ }),
/* 753 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(754);

	// This package does not export anything as it is
	// simply defining "days" on Range.prototype.

/***/ }),
/* 754 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var buildDateRangeUnits = __webpack_require__(755);

	buildDateRangeUnits();

/***/ }),
/* 755 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var MULTIPLIERS = __webpack_require__(731),
	    DURATION_UNITS = __webpack_require__(729),
	    Range = __webpack_require__(722),
	    trunc = __webpack_require__(95),
	    forEach = __webpack_require__(10),
	    rangeEvery = __webpack_require__(741),
	    simpleCapitalize = __webpack_require__(33),
	    defineOnPrototype = __webpack_require__(750);

	function buildDateRangeUnits() {
	  var methods = {};
	  forEach(DURATION_UNITS.split('|'), function(unit, i) {
	    var name = unit + 's', mult, fn;
	    if (i < 4) {
	      fn = function() {
	        return rangeEvery(this, unit, true);
	      };
	    } else {
	      mult = MULTIPLIERS[simpleCapitalize(name)];
	      fn = function() {
	        return trunc((this.end - this.start) / mult);
	      };
	    }
	    methods[name] = fn;
	  });
	  defineOnPrototype(Range, methods);
	}

	module.exports = buildDateRangeUnits;

/***/ }),
/* 756 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Range = __webpack_require__(722),
	    rangeEvery = __webpack_require__(741),
	    defineOnPrototype = __webpack_require__(750);

	defineOnPrototype(Range, {

	  'every': function(amount, everyFn) {
	    return rangeEvery(this, amount, false, everyFn);
	  }

	});

	// This package does not export anything as it is
	// simply defining "every" on Range.prototype.

/***/ }),
/* 757 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(754);

	// This package does not export anything as it is
	// simply defining "hours" on Range.prototype.

/***/ }),
/* 758 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Range = __webpack_require__(722),
	    defineOnPrototype = __webpack_require__(750);

	defineOnPrototype(Range, {

	  'intersect': function(range) {
	    if (range.start > this.end || range.end < this.start) {
	      return new Range(NaN, NaN);
	    }
	    return new Range(
	      this.start > range.start ? this.start : range.start,
	      this.end   < range.end   ? this.end   : range.end
	    );
	  }

	});

	// This package does not export anything as it is
	// simply defining "intersect" on Range.prototype.

/***/ }),
/* 759 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Range = __webpack_require__(722),
	    rangeIsValid = __webpack_require__(742),
	    defineOnPrototype = __webpack_require__(750);

	defineOnPrototype(Range, {

	  'isValid': function() {
	    return rangeIsValid(this);
	  }

	});

	// This package does not export anything as it is
	// simply defining "isValid" on Range.prototype.

/***/ }),
/* 760 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(754);

	// This package does not export anything as it is
	// simply defining "milliseconds" on Range.prototype.

/***/ }),
/* 761 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(754);

	// This package does not export anything as it is
	// simply defining "minutes" on Range.prototype.

/***/ }),
/* 762 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(754);

	// This package does not export anything as it is
	// simply defining "months" on Range.prototype.

/***/ }),
/* 763 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(754);

	// This package does not export anything as it is
	// simply defining "seconds" on Range.prototype.

/***/ }),
/* 764 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Range = __webpack_require__(722),
	    mathAliases = __webpack_require__(93),
	    rangeIsValid = __webpack_require__(742),
	    defineOnPrototype = __webpack_require__(750),
	    getRangeMemberNumericValue = __webpack_require__(765);

	var abs = mathAliases.abs;

	defineOnPrototype(Range, {

	  'span': function() {
	    var n = getRangeMemberNumericValue(this.end) - getRangeMemberNumericValue(this.start);
	    return rangeIsValid(this) ? abs(n) + 1 : NaN;
	  }

	});

	// This package does not export anything as it is
	// simply defining "span" on Range.prototype.

/***/ }),
/* 765 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classChecks = __webpack_require__(14);

	var isString = classChecks.isString;

	function getRangeMemberNumericValue(m) {
	  return isString(m) ? m.charCodeAt(0) : m;
	}

	module.exports = getRangeMemberNumericValue;

/***/ }),
/* 766 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Range = __webpack_require__(722),
	    rangeEvery = __webpack_require__(741),
	    defineOnPrototype = __webpack_require__(750);

	defineOnPrototype(Range, {

	  'toArray': function() {
	    return rangeEvery(this);
	  }

	});

	// This package does not export anything as it is
	// simply defining "toArray" on Range.prototype.

/***/ }),
/* 767 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Range = __webpack_require__(722),
	    rangeIsValid = __webpack_require__(742),
	    defineOnPrototype = __webpack_require__(750);

	defineOnPrototype(Range, {

	  'toString': function() {
	    return rangeIsValid(this) ? this.start + '..' + this.end : 'Invalid Range';
	  }

	});

	// This package does not export anything as it is
	// simply defining "toString" on Range.prototype.

/***/ }),
/* 768 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Range = __webpack_require__(722),
	    defineOnPrototype = __webpack_require__(750);

	defineOnPrototype(Range, {

	  'union': function(range) {
	    return new Range(
	      this.start < range.start ? this.start : range.start,
	      this.end   > range.end   ? this.end   : range.end
	    );
	  }

	});

	// This package does not export anything as it is
	// simply defining "union" on Range.prototype.

/***/ }),
/* 769 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(754);

	// This package does not export anything as it is
	// simply defining "weeks" on Range.prototype.

/***/ }),
/* 770 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(754);

	// This package does not export anything as it is
	// simply defining "years" on Range.prototype.

/***/ }),
/* 771 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    upto = __webpack_require__(740);

	Sugar.Number.alias('downto', 'upto');

	module.exports = Sugar.Number.downto;

/***/ }),
/* 772 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// Instance Methods
	__webpack_require__(773);
	__webpack_require__(774);
	__webpack_require__(778);
	__webpack_require__(780);
	__webpack_require__(781);
	__webpack_require__(782);
	__webpack_require__(784);
	__webpack_require__(787);
	__webpack_require__(790);
	__webpack_require__(791);
	__webpack_require__(793);

	module.exports = __webpack_require__(8);

/***/ }),
/* 773 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    coercePositiveInteger = __webpack_require__(94);

	Sugar.Function.defineInstance({

	  'after': function(fn, num) {
	    var count = 0, collectedArgs = [];
	    num = coercePositiveInteger(num);
	    return function() {
	      // Optimized: no leaking arguments
	      var args = []; for(var $i = 0, $len = arguments.length; $i < $len; $i++) args.push(arguments[$i]);
	      collectedArgs.push(args);
	      count++;
	      if (count >= num) {
	        return fn.call(this, collectedArgs);
	      }
	    };
	  }

	});

	module.exports = Sugar.Function.after;

/***/ }),
/* 774 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    cancelFunction = __webpack_require__(775);

	Sugar.Function.defineInstance({

	  'cancel': function(fn) {
	    return cancelFunction(fn);
	  }

	});

	module.exports = Sugar.Function.cancel;

/***/ }),
/* 775 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _timers = __webpack_require__(776),
	    _canceled = __webpack_require__(777),
	    classChecks = __webpack_require__(14);

	var isArray = classChecks.isArray;

	function cancelFunction(fn) {
	  var timers = _timers(fn), timer;
	  if (isArray(timers)) {
	    while(timer = timers.shift()) {
	      clearTimeout(timer);
	    }
	  }
	  _canceled(fn, true);
	  return fn;
	}

	module.exports = cancelFunction;

/***/ }),
/* 776 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var privatePropertyAccessor = __webpack_require__(451);

	module.exports = privatePropertyAccessor('timers');

/***/ }),
/* 777 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var privatePropertyAccessor = __webpack_require__(451);

	module.exports = privatePropertyAccessor('canceled');

/***/ }),
/* 778 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    setDelay = __webpack_require__(779),
	    cancelFunction = __webpack_require__(775);

	Sugar.Function.defineInstance({

	  'debounce': function(fn, ms) {
	    function debounced() {
	      // Optimized: no leaking arguments
	      var args = []; for(var $i = 0, $len = arguments.length; $i < $len; $i++) args.push(arguments[$i]);
	      cancelFunction(debounced);
	      setDelay(debounced, ms, fn, this, args);
	    }
	    return debounced;
	  }

	});

	module.exports = Sugar.Function.debounce;

/***/ }),
/* 779 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _timers = __webpack_require__(776),
	    _canceled = __webpack_require__(777),
	    coercePositiveInteger = __webpack_require__(94);

	function setDelay(fn, ms, after, scope, args) {
	  // Delay of infinity is never called of course...
	  ms = coercePositiveInteger(ms || 0);
	  if (!_timers(fn)) {
	    _timers(fn, []);
	  }
	  // This is a workaround for <= IE8, which apparently has the
	  // ability to call timeouts in the queue on the same tick (ms?)
	  // even if functionally they have already been cleared.
	  _canceled(fn, false);
	  _timers(fn).push(setTimeout(function() {
	    if (!_canceled(fn)) {
	      after.apply(scope, args || []);
	    }
	  }, ms));
	}

	module.exports = setDelay;

/***/ }),
/* 780 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    setDelay = __webpack_require__(779);

	Sugar.Function.defineInstanceWithArguments({

	  'delay': function(fn, ms, args) {
	    setDelay(fn, ms, fn, fn, args);
	    return fn;
	  }

	});

	module.exports = Sugar.Function.delay;

/***/ }),
/* 781 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    setDelay = __webpack_require__(779);

	Sugar.Function.defineInstanceWithArguments({

	  'every': function(fn, ms, args) {
	    function execute () {
	      // Set the delay first here, so that cancel
	      // can be called within the executing function.
	      setDelay(fn, ms, execute);
	      fn.apply(fn, args);
	    }
	    setDelay(fn, ms, execute);
	    return fn;
	  }

	});

	module.exports = Sugar.Function.every;

/***/ }),
/* 782 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    createLazyFunction = __webpack_require__(783);

	Sugar.Function.defineInstance({

	  'lazy': function(fn, ms, immediate, limit) {
	    return createLazyFunction(fn, ms, immediate, limit);
	  }

	});

	module.exports = Sugar.Function.lazy;

/***/ }),
/* 783 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var setDelay = __webpack_require__(779),
	    mathAliases = __webpack_require__(93);

	var max = mathAliases.max,
	    ceil = mathAliases.ceil,
	    round = mathAliases.round;

	function createLazyFunction(fn, ms, immediate, limit) {
	  var queue = [], locked = false, execute, rounded, perExecution, result;
	  ms = ms || 1;
	  limit = limit || Infinity;
	  rounded = ceil(ms);
	  perExecution = round(rounded / ms) || 1;
	  execute = function() {
	    var queueLength = queue.length, maxPerRound;
	    if (queueLength == 0) return;
	    // Allow fractions of a millisecond by calling
	    // multiple times per actual timeout execution
	    maxPerRound = max(queueLength - perExecution, 0);
	    while(queueLength > maxPerRound) {
	      // Getting uber-meta here...
	      result = Function.prototype.apply.apply(fn, queue.shift());
	      queueLength--;
	    }
	    setDelay(lazy, rounded, function() {
	      locked = false;
	      execute();
	    });
	  };
	  function lazy() {
	    // If the execution has locked and it's immediate, then
	    // allow 1 less in the queue as 1 call has already taken place.
	    if (queue.length < limit - (locked && immediate ? 1 : 0)) {
	      // Optimized: no leaking arguments
	      var args = []; for(var $i = 0, $len = arguments.length; $i < $len; $i++) args.push(arguments[$i]);
	      queue.push([this, args]);
	    }
	    if (!locked) {
	      locked = true;
	      if (immediate) {
	        execute();
	      } else {
	        setDelay(lazy, rounded, execute);
	      }
	    }
	    // Return the memoized result
	    return result;
	  }
	  return lazy;
	}

	module.exports = createLazyFunction;

/***/ }),
/* 784 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    _lock = __webpack_require__(785),
	    _partial = __webpack_require__(786),
	    classChecks = __webpack_require__(14),
	    mathAliases = __webpack_require__(93);

	var isNumber = classChecks.isNumber,
	    min = mathAliases.min;

	Sugar.Function.defineInstance({

	  'lock': function(fn, n) {
	    var lockedFn;
	    if (_partial(fn)) {
	      _lock(fn, isNumber(n) ? n : null);
	      return fn;
	    }
	    lockedFn = function() {
	      arguments.length = min(_lock(lockedFn), arguments.length);
	      return fn.apply(this, arguments);
	    };
	    _lock(lockedFn, isNumber(n) ? n : fn.length);
	    return lockedFn;
	  }

	});

	module.exports = Sugar.Function.lock;

/***/ }),
/* 785 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var privatePropertyAccessor = __webpack_require__(451);

	module.exports = privatePropertyAccessor('lock');

/***/ }),
/* 786 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var privatePropertyAccessor = __webpack_require__(451);

	module.exports = privatePropertyAccessor('partial');

/***/ }),
/* 787 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    classChecks = __webpack_require__(14),
	    deepGetProperty = __webpack_require__(64),
	    collectArguments = __webpack_require__(788),
	    createHashedMemoizeFunction = __webpack_require__(789);

	var isNumber = classChecks.isNumber,
	    isString = classChecks.isString;

	Sugar.Function.defineInstance({

	  'memoize': function(fn, arg1, arg2) {
	    var hashFn, limit, prop;
	    if (isNumber(arg1)) {
	      limit = arg1;
	    } else {
	      hashFn = arg1;
	      limit  = arg2;
	    }
	    if (isString(hashFn)) {
	      prop = hashFn;
	      hashFn = function(obj) {
	        return deepGetProperty(obj, prop);
	      };
	    } else if (!hashFn) {
	      hashFn = collectArguments;
	    }
	    return createHashedMemoizeFunction(fn, hashFn, limit);
	  }

	});

	module.exports = Sugar.Function.memoize;

/***/ }),
/* 788 */
/***/ (function(module, exports) {

	'use strict';

	function collectArguments() {
	  var args = arguments, i = args.length, arr = new Array(i);
	  while (i--) {
	    arr[i] = args[i];
	  }
	  return arr;
	}

	module.exports = collectArguments;

/***/ }),
/* 789 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var serializeInternal = __webpack_require__(240),
	    coreUtilityAliases = __webpack_require__(17);

	var hasOwn = coreUtilityAliases.hasOwn,
	    getOwn = coreUtilityAliases.getOwn;

	function createHashedMemoizeFunction(fn, hashFn, limit) {
	  var map = {}, refs = [], counter = 0;
	  return function() {
	    var hashObj = hashFn.apply(this, arguments);
	    var key = serializeInternal(hashObj, refs);
	    if (hasOwn(map, key)) {
	      return getOwn(map, key);
	    }
	    if (counter === limit) {
	      map = {};
	      refs = [];
	      counter = 0;
	    }
	    counter++;
	    return map[key] = fn.apply(this, arguments);
	  };
	}

	module.exports = createHashedMemoizeFunction;

/***/ }),
/* 790 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	Sugar.Function.defineInstance({

	  'once': function(fn) {
	    var called = false, val;
	    return function() {
	      if (called) {
	        return val;
	      }
	      called = true;
	      return val = fn.apply(this, arguments);
	    };
	  }

	});

	module.exports = Sugar.Function.once;

/***/ }),
/* 791 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    _lock = __webpack_require__(785),
	    _partial = __webpack_require__(786),
	    isDefined = __webpack_require__(37),
	    classChecks = __webpack_require__(14),
	    mathAliases = __webpack_require__(93),
	    isObjectType = __webpack_require__(20),
	    createInstanceFromPrototype = __webpack_require__(792);

	var isNumber = classChecks.isNumber,
	    min = mathAliases.min;

	Sugar.Function.defineInstanceWithArguments({

	  'partial': function(fn, curriedArgs) {
	    var curriedLen = curriedArgs.length;
	    var partialFn = function() {
	      var argIndex = 0, applyArgs = [], self = this, lock = _lock(partialFn), result, i;
	      for (i = 0; i < curriedLen; i++) {
	        var arg = curriedArgs[i];
	        if (isDefined(arg)) {
	          applyArgs[i] = arg;
	        } else {
	          applyArgs[i] = arguments[argIndex++];
	        }
	      }
	      for (i = argIndex; i < arguments.length; i++) {
	        applyArgs.push(arguments[i]);
	      }
	      if (lock === null) {
	        lock = curriedLen;
	      }
	      if (isNumber(lock)) {
	        applyArgs.length = min(applyArgs.length, lock);
	      }
	      // If the bound "this" object is an instance of the partialed
	      // function, then "new" was used, so preserve the prototype
	      // so that constructor functions can also be partialed.
	      if (self instanceof partialFn) {
	        self = createInstanceFromPrototype(fn.prototype);
	        result = fn.apply(self, applyArgs);
	        // An explicit return value is allowed from constructors
	        // as long as they are of "object" type, so return the
	        // correct result here accordingly.
	        return isObjectType(result) ? result : self;
	      }
	      return fn.apply(self, applyArgs);
	    };
	    _partial(partialFn, true);
	    return partialFn;
	  }

	});

	module.exports = Sugar.Function.partial;

/***/ }),
/* 792 */
/***/ (function(module, exports) {

	'use strict';

	var createInstanceFromPrototype = Object.create || function(prototype) {
	  var ctor = function() {};
	  ctor.prototype = prototype;
	  return new ctor;
	};

	module.exports = createInstanceFromPrototype;

/***/ }),
/* 793 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    createLazyFunction = __webpack_require__(783);

	Sugar.Function.defineInstance({

	  'throttle': function(fn, ms) {
	    return createLazyFunction(fn, ms, true, 1);
	  }

	});

	module.exports = Sugar.Function.throttle;

/***/ }),
/* 794 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// Static Methods
	__webpack_require__(795);

	// Instance Methods
	__webpack_require__(796);
	__webpack_require__(797);
	__webpack_require__(798);
	__webpack_require__(799);

	module.exports = __webpack_require__(8);

/***/ }),
/* 795 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    escapeRegExp = __webpack_require__(38);

	Sugar.RegExp.defineStatic({

	  'escape': function(str) {
	    return escapeRegExp(str);
	  }

	});

	module.exports = Sugar.RegExp.escape;

/***/ }),
/* 796 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    getRegExpFlags = __webpack_require__(39);

	Sugar.RegExp.defineInstance({

	  'addFlags': function(r, flags) {
	    return RegExp(r.source, getRegExpFlags(r, flags));
	  }

	});

	module.exports = Sugar.RegExp.addFlags;

/***/ }),
/* 797 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    getRegExpFlags = __webpack_require__(39);

	Sugar.RegExp.defineInstance({

	  'getFlags': function(r) {
	    return getRegExpFlags(r);
	  }

	});

	module.exports = Sugar.RegExp.getFlags;

/***/ }),
/* 798 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8),
	    allCharsReg = __webpack_require__(126),
	    getRegExpFlags = __webpack_require__(39);

	Sugar.RegExp.defineInstance({

	  'removeFlags': function(r, flags) {
	    var reg = allCharsReg(flags);
	    return RegExp(r.source, getRegExpFlags(r).replace(reg, ''));
	  }

	});

	module.exports = Sugar.RegExp.removeFlags;

/***/ }),
/* 799 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Sugar = __webpack_require__(8);

	Sugar.RegExp.defineInstance({

	  'setFlags': function(r, flags) {
	    return RegExp(r.source, flags);
	  }

	});

	module.exports = Sugar.RegExp.setFlags;

/***/ })
/******/ ]);