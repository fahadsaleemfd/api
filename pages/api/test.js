var fs = require('fs')
export default function handler(req, res) {
    fs.writeFile('mynewfile2.txt', 'This is my text updated', function (err) {
        if (err) throw err;
        res.status(200).json({ text: 'Hello' })
      });
        
   
  }