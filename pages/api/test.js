var fs = require('fs')
const path = './mynewfile2.txt'
export default function handler(req, res) {

    if (fs.existsSync(path)) {
        res.status(200).json({ text: 'file exist' })
    } else {
        res.status(200).json({ text: 'file not exist' })
    }
   



    // fs.writeFile('mynewfile2.txt', 'This is my text updated files added s', function (err) {
    //     if (err) throw err;
    //     res.status(200).json({ text: 'Hello' })
    //   });
        
   
  }