var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
function sendApiData(res){
	let info, 
			_info = fs.readFileSync(path.join(__dirname, `../apiDatas/books.json`), 'utf-8');
	if(_info){
			info = JSON.parse(_info);
	}else{
			info = {};
	}
	res.json(info);
}

router.get(`/books`, function(req, res){
	console.log(`/books`);
	sendApiData(res);
});

module.exports = router;
