const fs = require('fs');
const globalConfig = require('./config.js');
const getMap = new Map();
const postMap = new Map();

function init(app){
	const dirs = fs.readdirSync(`./${globalConfig['web_path']}`);
	dirs.forEach( dir =>{
		const mapCollector = require(`./${globalConfig['web_path']}/${dir}`);
		if(mapCollector.getMap){
			for(const [key, value] of mapCollector.getMap){
				if(getMap.get('key') == null){
					app.get(key, value);
				}else{
					throw new Error('接口名url重复:' + key);
				}
			}
		}
		if(mapCollector.postMap){
			for(const [key, value] of mapCollector.postMap){
				if(postMap.get('key') == null){
					app.post(key, value);
				}else{
					throw new Error('接口名url重复:' + key);
				}
			}
		}
	})
}

module.exports = {
	init
}
