module.exports = require('./dist/framewerk.js')

module.exports.initFramewerk = function(config = null){
	var root = document.querySelector(':root');
	function setCSSVar(name, value){
		root.style.setProperty('--' + name, value);
	}
	if(config){
		for(var prop in config){
			setCSSVar(prop, config[prop]);
		}
	}
}