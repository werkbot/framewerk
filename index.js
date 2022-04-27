function setCSSVar(element, name, value){
	element.style.setProperty('--' + name, value);
}

function injectButtonStyles(variants){
	var injectedStylesheet = (function() {
		var style = document.createElement('style');
		style.appendChild(document.createTextNode(''));
		document.head.appendChild(style);
		return style.sheet;
	})();

	for(var btnClass in variants){
		var btnStyleString = `.${btnClass}{`;
		var btnHoverStyleString = `.${btnClass}:hover{`;
		var btnStyleRules = variants[btnClass];
		for(var btnStyleRule in btnStyleRules){
			var btnStyleValue = btnStyleRules[btnStyleRule];
			if(btnStyleRule == 'hoverStyle'){
				var btnHoverStyleRules = btnStyleRules.hoverStyle;
				for(var btnHoverStyleRule in btnHoverStyleRules){
					var btnHoverStyleValue = btnHoverStyleRules[btnHoverStyleRule];
					btnHoverStyleString += `${btnHoverStyleRule}: var(--componentButtonProperties_variants_${btnClass}_hoverStyle_${btnHoverStyleRule}, ${btnHoverStyleValue}) !important;`
				}
			} else {
				btnStyleString += `${btnStyleRule}: var(--componentButtonProperties_variants_${btnClass}_${btnStyleRule}, ${btnStyleValue}) !important;`
			}
		}
		btnStyleString += '}';
		btnHoverStyleString += '}';
		injectedStylesheet.insertRule(btnStyleString, 0);
		injectedStylesheet.insertRule(btnHoverStyleString, 0);
	}
}

function recursivelySetCSSVars(element, config, scopePrefix = ''){
	for(var prop in config){
		if(typeof config[prop] == 'object'){
			var componentConfig = config[prop];
			if(prop == 'variants'){
				injectButtonStyles(config.variants);
			}
			recursivelySetCSSVars(element, componentConfig, scopePrefix ? scopePrefix + '_' + prop : prop);
		} else {
			setCSSVar(element, scopePrefix ? scopePrefix + '_' + prop : prop, config[prop]);
		}
	}
}

const initFramewerk = (includeStyles = true) => {
	includeStyles ? require('./dist/framewerk.js') : require('./dist/framewerk-no-styles.js');
}

const customizeFramewerk = (config = null, elementOrSelector = null) => {
	let element;
	if(elementOrSelector){
		if(typeof elementOrSelector == 'string'){
			element = document.querySelector(elementOrSelector);
		} else {
			element = elementOrSelector;
		}
	} else {
		element = document.querySelector(':root');
	}
	if(config){
		recursivelySetCSSVars(element, config);
	}
}


/*
	Import with one of the following
	const framewerk = require('werkbot-framewerk');
	import framewerk from 'werkbot-framewerk'
*/
module.exports = (config = null, element = null, includeStyles = true) => {
	initFramewerk(includeStyles);
	customizeFramewerk(config, element);
}

/*
	Import with one of the following
	const { initFramewerk } = require('werkbot-framewerk');
	import { initFramewerk } from 'werkbot-framewerk';
*/
module.exports.initFramewerk = initFramewerk;


/*
	Import with one of the following
	const { customizeFramewerk } = require('werkbot-framewerk');
	import { customizeFramewerk } from 'werkbot-framewerk';
*/
module.exports.customizeFramewerk = customizeFramewerk;