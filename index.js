function setCSSVar(element, name, value){
	element.style.setProperty('--' + name, value);
}

const customizeFramewerk = (config = null, elementSelector = null) => {
	let element;
	if(elementSelector){
		element = document.querySelector(elementSelector);
	} else {
		element = document.querySelector(':root');
	}
	if(config){
		for(var prop in config){
			if(typeof config[prop] == 'object'){
				var componentConfig = config[prop];
				for(var componentProp in componentConfig){
					setCSSVar(element, prop + '_' + componentProp, componentConfig[componentProp]);
				}
			} else {
				setCSSVar(element, prop, config[prop]);
			}
		}
	}
}


/*
	Import with one of the following
	const framewerk = require('framewerk');
	import framewerk from 'framewerk'
*/
module.exports = (config = null, element = null) => {
	require('./dist/framewerk.js')
	customizeFramewerk(config, element);
}

/*
	Import with one of the following
	const { initFramewerk } = require('framewerk');
	import { initFramewerk } from 'framewerk';
*/
module.exports.initFramewerk = () => require('./dist/framewerk.js');


/*
	Import with one of the following
	const { customizeFramewerk } = require('framewerk');
	import { customizeFramewerk } from 'framewerk';
*/
module.exports.customizeFramewerk = customizeFramewerk;