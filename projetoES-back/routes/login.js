var express = require('express');
var router = express.Router();

router.post('/', function (request, response,) {
	pool.getConnection(function (err, connection) {
		var email = request.body.email;
		var senha = request.body.senha;
	
		if (email && senha) {
			connection.query('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha], function(error, results, fields) {
				if (results.length > 0) {
					response.send({
						logged: true
					})
				} else {
					response.send({
						logged: false
					})
				}			
				response.end();
			});
		} 
     });
});
router.get('/', function(request, response) {
	response.send('MÉTODO GET NÃO ENCONTRADO!');
	response.end();
});

//app.listen(3000);

module.exports = router;