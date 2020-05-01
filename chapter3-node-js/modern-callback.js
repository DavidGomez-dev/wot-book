//jshint esversion:6
const express = require('express');
const bent = require('bent')

const app = express();
const getJSON = bent('json')




const logControler = (req, res, next) => {
  const getData = async url => {
    let tempjson = await getJSON(url+'/temperature');
    let lightjson = await getJSON(url+'/light');
    let logEntry = 'Temperature: ' + tempjson.temperature + ' Light: ' + lightjson.light;
    res.send(logEntry);
    // fs.appendFile('log.txt', logEntry + '\n', encoding = 'utf8', function (err) { //#C
    //   if (err) throw err;
    //   servResp.writeHeader(200, {"Content-Type": "text/plain"});
    //   servResp.write(logEntry);
    //   servResp.end();
  }
  getData('http://localhost:8686')
}

const indexControler = (req, res, next) => {
  res.send('Please use /log');
}


app.get('/', indexControler);

app.get('/log', logControler)

app.listen(3000, () => {
  //console.log(ORDERLIST_INTERVALS);
  console.log(' ');
  console.log('Listening on 3000');
});
