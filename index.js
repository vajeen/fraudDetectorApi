const express = require('express');
const mysql = require('mysql');

const app = express();
const uniqueFilename = require('unique-filename');
const fs = require('fs');
app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Content-Disposition");
    next();
});

const connection = mysql.createConnection({
    host: '172.19.6.232',
    user: 'root',
    password: 'icbt123',
    database: 'FRAUD',
    dateStrings: 'date'
});

connection.connect(err => {
    if (err) {
        return err;
    }
})

app.get('/', (req, res) => {
    res.send("Welcome to SIM-BOX Fraud Dashboard")
});

app.post('/api/download_dr', (req, res) => {
    const SELECT_DR = `SELECT MSISDN FROM (
SELECT * FROM M00 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M01 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M02 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M03 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M04 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M05 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M06 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M07 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M08 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M09 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M10 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M11 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M12 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M13 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M14 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M15 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M16 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M17 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M18 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M19 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M20 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M21 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M22 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M23 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M24 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M25 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M26 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M27 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M28 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M29 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M30 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M31 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M32 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M33 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M34 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M35 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M36 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M37 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M38 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M39 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M40 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M41 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M42 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M43 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M44 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M45 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M46 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M47 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M48 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M49 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M50 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M51 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M52 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M53 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M54 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M55 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M56 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M57 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M58 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M59 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M60 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M61 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M62 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M63 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M64 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M65 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M66 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M67 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M68 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M69 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M70 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M71 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M72 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M73 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M74 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M75 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M76 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M77 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M78 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M79 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M80 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M81 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M82 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M83 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M84 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M85 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M86 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M87 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M88 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M89 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M90 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M91 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M92 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M93 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M94 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M95 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M96 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M97 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M98 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}' UNION ALL
SELECT * FROM M99 WHERE DAY BETWEEN '${req.body.from.split('T')[0]}' AND  '${req.body.to.split('T')[0]}'
) SUB GROUP BY MSISDN;`;

    connection.query(SELECT_DR, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            var lines = ""
            if (results.length == 0) {
                return res.sendStatus(204)
            } else {
                for (var row in results) {
                    lines += results[row]['MSISDN'] + '\n'
                }
                var randomTmpfile = uniqueFilename(`${__dirname}/files/`, 'daterange')
                var filename = randomTmpfile + '.txt'
                // write to a new file named 2pac.txt
                fs.writeFileSync(filename, lines, (err) => {
                    // throws an error, you could also catch it here
                    if (err) throw err;
                });
                try {
                    res.download(filename);
                } catch (err) {
                    console.log(err);
                }
            }
        }
    });
});

app.post('/api/download_hour', (req, res) => {
    const SELECT_HOUR = `SELECT MSISDN FROM (
SELECT * FROM M00 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M01 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M02 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M03 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M04 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M05 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M06 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M07 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M08 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M09 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M10 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M11 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M12 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M13 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M14 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M15 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M16 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M17 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M18 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M19 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M20 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M21 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M22 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M23 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M24 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M25 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M26 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M27 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M28 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M29 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M30 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M31 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M32 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M33 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M34 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M35 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M36 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M37 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M38 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M39 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M40 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M41 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M42 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M43 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M44 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M45 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M46 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M47 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M48 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M49 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M50 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M51 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M52 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M53 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M54 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M55 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M56 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M57 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M58 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M59 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M60 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M61 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M62 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M63 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M64 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M65 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M66 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M67 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M68 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M69 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M70 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M71 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M72 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M73 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M74 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M75 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M76 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M77 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M78 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M79 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M80 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M81 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M82 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M83 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M84 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M85 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M86 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M87 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M88 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M89 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M90 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M91 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M92 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M93 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M94 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M95 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M96 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M97 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M98 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}' UNION ALL
SELECT * FROM M99 WHERE DAY='${req.body.date.split('T')[0]}' AND HOUR='${req.body.hour}'
) SUB GROUP BY MSISDN;`

    connection.query(SELECT_HOUR, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            if (results.length == 0) {
                return res.sendStatus(204)
            } else {
                var lines = ""
                for (var row in results) {
                    lines += results[row]['MSISDN'] + '\n'
                }
                var randomTmpfile = uniqueFilename(`${__dirname}/files/`, 'hourly')
                var filename = randomTmpfile + '.txt'
                // write to a new file named 2pac.txt
                fs.writeFileSync(filename, lines, (err) => {
                    // throws an error, you could also catch it here
                    if (err) throw err;
                });
                try {
                    res.download(filename);
                } catch (err) {
                    console.log(err);
                }
            }
        }
    });


});

app.get('/api/summary', (req, res) => {
    const SELECT_SUMMARY = "SELECT CONCAT(MONTH(DATE),'/',DAY(`DATE`),':',`HOUR`) AS DD,FRAUD,TOTAL from (SELECT * FROM (SELECT * FROM SUMMARY ORDER BY id DESC limit 24 ) sub order by id ASC) c"
    connection.query(SELECT_SUMMARY, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            //console.log(results)
            return res.json({
                data: results
            })
        }
    });
});

app.post('/api/summarydate', (req, res) => {
    const SELECT_SUMMARY = `SELECT CONCAT(MONTH(DATE),'/',DAY(DATE),':',HOUR) AS DD,FRAUD,TOTAL FROM SUMMARY where date>='${req.body.params.from.split('T')[0]}' and date<='${req.body.params.to.split('T')[0]}'`
    connection.query(SELECT_SUMMARY, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            //console.log(results)
            return res.json({
                data: results
            })
        }
    });
});

app.post('/api/mobilesearch', (req, res) => {
    table = 'M' + req.body.mobile.slice(-2)
    mobile = req.body.mobile.slice(-9)
    const SELECT_MOBILE = `SELECT * from ${table} where MSISDN=${mobile}`
    connection.query(SELECT_MOBILE, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            //console.log(results)
            return res.json({
                data: results
            })
        }
    });
});

app.listen(4000, () => {
    console.log("SIM-BOX Fraud Dashboard API Started")
});
