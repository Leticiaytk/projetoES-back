var express = require('express');
var router = express.Router();
//const bcrypt = require('bcrypt');

// Listar usuarios
router.get('/', function (req, res, next) {
    pool.getConnection(function (err, connection) {
        connection.query("SELECT * FROM usuarios", function (err, rows) {
            if (!err && rows.length > 0) {
                res.json(rows);
            } else {
                res.json([]);
            }
        });
    });
});  

// Buscar usuarios pelo email
router.get('/:email', function (req, res, next) {
    pool.getConnection(function (err, connection) {
        var email = req.params.email;
        connection.query("SELECT * FROM usuarios WHERE email='"
            + email + "' LIMIT 1", function (err, rows) {
                if (!err && rows.length > 0) {
                    res.json(rows);
                } else {
                    res.json([]);
                }
            });
    });
});   

// Cadastrar usuarios
router.post('/', function (req, res, next) {
    pool.getConnection(function (err, connection) {
        var dados = req.body;  
        var nome = dados.nome;
        var senha = dados.senha;
        var email = dados.email;

        connection.query(
            "INSERT INTO usuarios (nome, senha, email) VALUES ('"
            + nome + "','"
            + senha + "','"
            + email +
            "')", function (err, rows) {

                if (rows.affectedRows) {
                    connection.query("SELECT * FROM usuarios WHERE email='" + rows.insertId
                        + "' LIMIT 1", function (err, rows) {
                            if (!err && rows.length > 0) {
                                res.json(rows);
                            } else {
                                res.json([]);
                            }
                        });
                }
            });
    });
});  
module.exports = router;