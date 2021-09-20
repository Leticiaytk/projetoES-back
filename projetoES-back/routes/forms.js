var express = require('express');
var router = express.Router();


router.post('/forms', function (req, res, next) {
    pool.getConnection(function (err, connection) {
        var dados = req.body;  
        var nome = dados.nome;
        var email = dados.email;
        var orientador = dados.orientador;
        var numero = dados.numero;
        var curriculum = dados.curriculum;
        var att = dados.att;
        var curso = dados.curso;
        var ultresult = dados.ultresult;
        var semestre = dados.semestre;
        var aprovobrig = dados.aprovobrig;
        var aprovopt = dados.aprovopt;
        var divulg = dados.divulg;
        var reprovini = dados.reprovini;
        var reprovult = dados.reprovult;
        var aprovprofi = dados.aprovprofi;
        var examequali = dados.examequali;
        var limitequali = dados.limitequali;
        var tempodep = dados.tempodep;
        var artpubli = dados.artpubli;
        var artaguard = dados.artaguard;
        var artsubmi = dados.artsubmi;
        var estpesq = dados.estpesq;
        var congnac = dados.congnac;
        var conginter = dados.conginter;
        var pesqext = dados.pesqext;
        var decla = dados.decla;
        var comentorient = dados.comentorient;





        connection.query(
            "INSERT INTO relatorio (nome, email, orientador, numero, curriculum, att, curso, ultresult, semestre, aprovobrig, aprovopt, divulg, reprovini, reprovult, aprovprofi, examequali, limitequali, tempodep, artpubli, artaguard, artsubmi, estpesq, congnac, conginter, pesqext, decla, comentorient) VALUES ('"
            + nome + "','"
            + email + "','"
            + orientador + "','"
            + numero + "','"
            + curriculum + "','"
            + att + "','"
            + curso + "','"
            + ultresult + "','"
            + semestre + "','"
            + aprovobrig + "','"
            + aprovopt + "','"
            + divulg + "','"
            + reprovini + "','"
            + reprovult + "','"
            + aprovprofi + "','"
            + examequali + "','"
            + limitequali + "','"
            + tempodep + "','"
            + artpubli + "','"
            + artaguard + "','"
            + artsubmi + "','"
            + estpesq + "','"
            + congnac + "','"
            + conginter + "','"
            + pesqext + "','"
            + decla + "','"
            + comentorient +
            "')", function (err, rows) {

                if (rows.affectedRows) {
                    connection.query("SELECT * FROM relatorio WHERE email='" + rows.insertId
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
