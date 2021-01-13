var fs = require('fs')
export default function handler(req, res) {
    fs.open('mynewfile2.txt', 'w', function (err, file) {
        if (err) throw err;
        res.status(200).json({ text: 'Hello' })
      });
  }