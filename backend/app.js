const express = require('express');
const request = require('request');
const {spawn} = require('child_process');
const app = express();
const port = 5000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get("/getSensorData", function (req, res){
  /*request(
    "http://api.weatherstack.com/current?access_key=ead51fbdb8f7dd36081d168e206b6158&query=New%20York",
    function(error, response, body){
      if (!error && response.statusCode == 200){
        var parsedBody = JSON.parse(body);
        var temp = parsedBody["current"]["temperature"];
        res.send({temp});
      }
    }
  )*/


        var dataToSend;
        // spawn new child process to call the python script
        const python = spawn('python', ['./sensor_distance.py']);
        // collect data from script
        python.stdout.on('data', function (data) {
          //console.log('Obteniendo valores del script');
          dataToSend = data.toString();
        });
        // in close event we are sure that stream from child process is closed
        python.on('close', (code) => {
        //console.log(`Proceso hijo cerro todos los stdio con el codigo: ${code}`);
        // send data to browser
        res.send(dataToSend)
        });
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
}); 

/*` ALT+96
npm i nodemon --save
npm i concurrently --save
npm i axios --save
npm i child_process --save
npm i spawn --save

*/