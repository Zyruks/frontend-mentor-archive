"use strict";

module.exports = {
  extends: ["stylelint-config-standard-scss"],
  plugins: [
    "stylelint-order",
    "stylelint-config-rational-order/plugin",
    "stylelint-scss",
    "stylelint-color-format",
    "stylelint-group-selectors",
    "stylelint-images",
    "stylelint-selector-no-empty",
    "stylelint-suitcss",
    "stylelint-use-logical-spec",
  ],
  rules: {
    //! Avoid Error Rules
    //? Color
    "color-no-invalid-hex": true, // Disallow invalid hex colors

    //?Font Family
    "font-family-no-duplicate-names": true, // Disallow duplicate font family names.
    "font-family-no-missing-generic-family-keyword": true, // Disallow missing generic families in lists of font family names.

    //?Named grid areas
    "named-grid-areas-no-invalid": true, // Disallow invalid named grid areas.

    //? Function
    "function-calc-no-unspaced-operator": true, // Disallow an un-spaced operator within calc functions.
    "function-linear-gradient-no-nonstandard-direction": true, // Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.
    "function-no-unknown": null, // Disallow unknown functions.

    //? String
    "string-no-newline": true, // Disallow (unescaped) newlines in strings.

    //? Unit
    "unit-no-unknown": true, // Disallow unknown units.

    //? Custom Property
    "custom-property-no-missing-var-function": true, // Disallow missing var function for custom properties.

    //? Property
    "property-no-unknown": true, // Disallow unknown properties

    //? Keyframe declaration
    "keyframe-declaration-no-important": true, // Disallow !important within keyframe declarations

    //? Keyframe block
    "keyframe-block-no-duplicate-selectors": true, // Disallow duplicate selectors within keyframe blocks.

    //? Declaration Block
    "declaration-block-no-duplicate-custom-properties": true, // Disallow duplicate custom properties within declaration blocks.
    "declaration-block-no-duplicate-properties": true, // Disallow duplicate properties within declaration blocks.
    "declaration-block-no-shorthand-property-overrides": true, // Disallow shorthand properties that override related longhand properties.

    //? Block
    "block-no-empty": true, // Disallow empty block.

    //? Selector
    "selector-pseudo-class-no-unknown": true, // Disallow unknown pseudo-class selectors.
    "selector-pseudo-element-no-unknown": true, // Disallow unknown pseudo-element selectors
    "selector-type-no-unknown": true, // Disallow unknown type selectors.

    //? Media Feature
    "media-feature-name-no-unknown": true, //Disallow unknown media feature names.

    //? At-rule
    "at-rule-no-unknown": null, // Disallow unknown at-rules..

    //? Comment
    "comment-no-empty": true, //Disallow empty comments.

    //? General / Sheet
    "no-descending-specificity": true, // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
    "no-duplicate-at-import-rules": true, // Disallow duplicate @import rules within a stylesheet.
    "no-duplicate-selectors": true, // Disallow duplicate selectors within a stylesheet.
    "no-empty-source": true, // Disallow empty sources.
    "no-invalid-double-slash-comments": true, // Disallow double-slash comments (//...) which are not supported by CSS.
    "no-invalid-position-at-import-rule": true, // Disallow invalid position @import rules within a stylesheet.

    //! Enforce conventions

    //? Alpha Value
    "alpha-value-notation": "percentage", //Specify percentage or number notation for alpha-values //? (Autofixable).

    //? Hue
    "hue-degree-notation": "angle", //Specify number or angle notation for degree hues. //? (Autofixable).

    //? Color
    "color-function-notation": "legacy", //Specify modern or legacy notation for applicable color-functions //? (Autofixable).
    "color-hex-alpha": "never", //Require or disallow alpha channel for hex colors.
    "color-hex-length": "long", //Specify short or long notation for hex colors //? (Autofixable).
    "color-named": "never", //Require (where possible) or disallow named colors.
    "color-no-hex": true, //Disallow hex colors.

    //? Length
    "length-zero-no-unit": [true, { ignore: ["custom-properties"] }], //Disallow units for zero lengths //?(Autofixable).

    //? Font family
    "font-family-name-quotes": "always-where-recommended", // Specify whether or not quotation marks should be used around font family names //? (Autofixable).

    //? Font weight
    "font-weight-notation": "numeric", //Require numeric or named (where possible) font-weight values. Also, when named values are expected, require only valid names.
    //? Function
    // "function-allowed-list": ["scale","rgb"], //Specify a list of allowed functions.  //! Not Activated
    "function-disallowed-list": [""], //Specify a list of disallowed functions.
    "function-url-no-scheme-relative": true, //Disallow scheme-relative urls.
    "function-url-quotes": ["always", { except: ["empty"] }], //Require or disallow quotes for urls.
    // "function-url-scheme-allowed-list": ["/^http/"], // Specify a list of allowed URL schemes. //! Not Activated
    "function-url-scheme-disallowed-list": ["ftp"], //Specify a list of disallowed URL schemes. //! Check URL Scheme

    //? Keyframes
    "keyframes-name-pattern": "key-.+", //Specify a pattern for keyframe names. //! Check for a better pattern

    //? Number
    "number-max-precision": 4, //Limit the number of decimal places allowed in numbers.

    //? Time
    "time-min-milliseconds": [100, { ignore: ["delay"] }], //Specify the minimum number of milliseconds for time values.

    //? Unit
    //"unit-allowed-list": ["px", "em", "deg"] //Specify a list of allowed units. //! Not Activated
    "unit-disallowed-list": [
      ["px"],
      { ignoreProperties: { px: ["font-size", "/^border/"], vmin: "width" } },
    ], //Specify a list of disallowed units.

    //? Shorthand property
    "shorthand-property-no-redundant-values": true, // Disallow redundant values in shorthand properties //?(Autofixable).

    //? Value
    "value-no-vendor-prefix": true, //Disallow vendor prefixes for values //?(Autofixable).

    //? Custom property
    // "custom-property-pattern": "foo-.+", //Specify a pattern for custom properties. //! Check more about this

    //? Property
    //"property-allowed-list":["display", "animation", "/^background/"], //Specify a list of allowed properties.//! Disable
    //"property-disallowed-list": ["text-rendering", "animation", "/^background/"],//Specify a list of disallowed properties.//! Disable
    "property-no-vendor-prefix": true, //Disallow vendor prefixes for properties //?(Autofixable).

    //? Declaration
    "declaration-no-important": true, //Disallow !important within declarations.
    // "declaration-property-max-values": {"border": 2,"/^margin/": 1, }, // Limit the number of values for a list of properties within declarations. //! Disable
    // "declaration-property-unit-allowed-list": { "font-size": ["em", "px"], "/^animation/": "s", "line-height": []} , //Specify a list of allowed property and unit pairs within declarations. //! Disable
    //	"declaration-property-unit-disallowed-list":{"font-size": ["em", "px"],"/^animation/": "s"} ,// Specify a list of disallowed property and unit pairs within declarations. //! Disable
    // "declaration-property-value-allowed-list": {	"transform": ["/scale/"],		"whitespace": "nowrap",	"/color/": ["/^green/"]},//Specify a list of allowed property and value pairs within declarations. //! Disable
    // "declaration-property-value-disallowed-list": {"transform": ["/scale3d/", "/rotate3d/", "/translate3d/"],"position": "fixed","color": ["/^green/"],"/^animation/": ["/ease/"]} // Specify a list of disallowed property and value pairs within declarations. //! Disable

    //? Declaration block
    "declaration-block-no-redundant-longhand-properties": true, //Disallow longhand properties that can be combined into one shorthand property.
    "declaration-block-single-line-max-declarations": 1, //Limit the number of declarations within a single-line declaration block.

    //? Selector
    //"selector-attribute-name-disallowed-list": ["class", "id", "/^data-/"], //Specify a list of disallowed attribute names.//!Disable
    //"selector-attribute-operator-allowed-list":["=", "|="], //Specify a list of allowed attribute operators.//! Disable
    // "selector-attribute-operator-disallowed-list":["*="], //Specify a list of disallowed attribute operators. // !Disable
    "selector-attribute-quotes": "always", //Require or disallow quotes for attribute values.
    "selector-class-pattern": "[a-z]+", //Specify a pattern for class selectors. // !Disable
    // "selector-combinator-allowed-list":[">", " "], //Specify a list of allowed combinators. // !Disable
    // "selector-combinator-disallowed-list":[">", " "], //Specify a list of disallowed combinators. // !Disable
    // "selector-disallowed-list":["a > .foo", "/\\[data-.+]/"], //Specify a list of disallowed selectors. // !Disable
    // "selector-id-pattern":"foo-[a-z]+", //Specify a pattern for ID selectors. // !Disable
    "selector-max-attribute": 4, //Limit the number of attribute selectors in a selector.
    "selector-max-class": 2, //Limit the number of classes in a selector.
    "selector-max-compound-selectors": 3, //Limit the number of compound selectors in a selector.
    "selector-max-id": 0, //Limit the number of ID selectors in a selector.
    "selector-max-pseudo-class": 2, //Limit the number of pseudo-classes in a selector.
    "selector-max-specificity": "0,3,0", //Limit the specificity of selectors. //! ReCheck this
    "selector-max-type": 2, //Limit the number of type in a selector.
    "selector-max-universal": 1, //Limit the number of universal selectors in a selector.
    "selector-nested-pattern": null, //"^&:(?:hover|focus|)$", Specify a pattern for the selectors of rules nested within rules.
    "selector-no-qualifying-type": [true, { ignore: ["attribute"] }], //Disallow qualifying a selector by type.
    "selector-no-vendor-prefix": true, //Disallow vendor prefixes for selectors (Autofixable).
    "selector-not-notation": "complex", //Specify simple or complex notation for :not() pseudo-classes (Autofixable).
    // "selector-pseudo-class-allowed-list":["hover", "/^nth-/"], //Specify a list of allowed pseudo-class selectors. //! Disable
    // "selector-pseudo-class-disallowed-list":["hover", "/^nth-/"], // Specify a list of disallowed pseudo-class selectors. //! Disable
    // "selector-pseudo-element-allowed-list":["before", "/^my-/i"], //Specify a list of allowed pseudo-element selectors. //! Disable
    "selector-pseudo-element-colon-notation": "double", //Specify single or double colon notation for applicable pseudo-elements //?(Autofixable).
    // "selector-pseudo-element-disallowed-list":["before", "/^my-/i"], //Specify a list of disallowed pseudo-element selectors.//! Disable

    //? Rules
    // "rule-selector-property-disallowed-list": {"a": ["color", "/margin/"],"/foo/": "/size/"}, //Specify a list of disallowed properties for selectors within rules. //! Disable

    //? Media feature
    //"media-feature-name-allowed-list": ["max-width", "/^my-/"], //Specify a list of allowed media feature names.
    // "media-feature-name-disallowed-list": ["max-width", "/^my-/"], //Specify a list of disallowed media feature names.
    "media-feature-name-no-vendor-prefix": true, //Disallow vendor prefixes for media feature names //?(Autofixable).
    // "media-feature-name-value-allowed-list":{"min-width": ["768px", "1024px"],"/resolution/": "/dpcm$/"}, //Specify a list of allowed media feature name and value pairs. //! Disable

    //? Custom media
    // "custom-media-pattern": "foo-.+", //Specify a pattern for custom media query names. //!Disable

    //? At-rule
    //"at-rule-allowed-list": ["extend", "keyframes"], //Specify a list of allowed at-rules. //!Disable
    // "at-rule-disallowed-list": ["extend", "keyframes"], //Specify a list of disallowed at-rules. //!Disable
    "at-rule-no-vendor-prefix": true, //Disallow vendor prefixes for at-rules (Autofixable).
    // "at-rule-property-required-list": {"font-face": ["font-display", "font-family", "font-style"]}, //Specify a list of required properties for an at-rule. //!Disable Want to activate it.

    //? Comment
    // "comment-pattern": "foo .+", //Specify a pattern for comments. //!Disable
    // "comment-word-disallowed-list": ["/^TODO:/", "badword"], //Specify a list of disallowed words within comments. //!Disable

    //? General / Sheet
    "max-nesting-depth": [2, { ignore: ["blockless-at-rules"] }], //Limit the depth of nesting.
    "no-irregular-whitespace": true, //Disallow irregular whitespace.
    "no-unknown-animations": null, //Disallow unknown animations.
    // "unicode-bom": "always", //Require or disallow Unicode BOM.  //! Need to check what is unicode-bom

    /*------------------------------------*\
			//? #Not Handle by Pretty Printers
		\*------------------------------------*/

    //? Value
    // "value-keyword-case": "lower", // Specify lowercase or uppercase for keywords values //?(Autofixable).
    //? Function
    //"function-name-case": "lower", //Specify lowercase or uppercase for function names //?(Autofixable).
    //? Custom Property
    // "custom-property-empty-line-before":"always", //Require or disallow an empty line before custom properties //?(Autofixable).
    //? Selector
    // "selector-type-case":"lower", //Specify lowercase or uppercase for type selectors //?(Autofixable).
    //? Rule
    // "rule-empty-line-before":"always-multi-line", //Require or disallow an empty line before rules //?(Autofixable).
    //? At-Rule
    // "at-rule-empty-line-before": "always", //Require or disallow an empty line before at-rules //?(Autofixable).
    //? Comment
    // "comment-empty-line-before": "always", //Require or disallow an empty line before comments //?(Autofixable).
    // "comment-whitespace-inside": "always", //Require or disallow whitespace on the inside of comment markers //?(Autofixable).

    /*------------------------------------*\
		//? #Not Handle by Pretty Printers END
		\*------------------------------------*/

    /*------------------------------------*\
		//? #Stylelint CSS Plugin 
		\*------------------------------------*/
    //? Function

    //? Comments
    "scss/double-slash-comment-empty-line-before": "always", //Require or disallow an empty line before //-comments //? (Autofixable).
    "scss/double-slash-comment-whitespace-inside": "always", //Require or disallow whitespace after the // in //-comments
    "scss/comment-no-empty": true, //Disallow empty comments.

    //? General Sheet
    "scss/no-duplicate-dollar-variables": [
      true,
      {
        ignoreInsideAtRules: ["if", "mixin"],
        ignoreInside: ["nested-at-rule", "at-rule"],
      },
    ],

    /*------------------------------------*\
		//? #Stylelint CSS Plugin End
		\*------------------------------------*/
    "declaration-empty-line-before": null,

    /*------------------------------------*\
		//? #Order Plugin 
		\*------------------------------------*/
    "order/properties-order": [],
    "plugin/rational-order": [
      true,
      {
        "border-in-box-model": true,
        "empty-line-between-groups": true,
      },
    ],
    /*------------------------------------*\
		//? #Order Plugin End
		\*------------------------------------*/
    /*------------------------------------*\
		//? #Color Plugin
		\*------------------------------------*/
    "color-format/format": {
      format: "hsla",
    },
    /*------------------------------------*\
		//? #Color Plugin End
		\*------------------------------------*/

    /*------------------------------------*\
		//? #group-selectors plugin End
		\*------------------------------------*/
    "plugin/stylelint-group-selectors": true, //Identify the selectors, which can be grouped, as they have same set of properties and values.
    /*------------------------------------*\
		//? #group-selectors plugin End
		\*------------------------------------*/
    /*------------------------------------*\
		//? #plugin 
		\*------------------------------------*/
    "images/broken": true,
    "plugin/stylelint-selector-no-empty": true,

    //? suitcss
    "suitcss/custom-property-no-outside-root": true,
    "suitcss/root-no-standard-properties": true,
    "suitcss/selector-root-no-composition": true,

    "liberty/use-logical-spec": "always",
    /*------------------------------------*\
		//? #plugin end
		\*------------------------------------*/
  },
};
