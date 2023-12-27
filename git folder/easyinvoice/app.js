const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/data', (req, res) => {

    var cartData = [
        {
            "quantity": 2,
            "description": "Fancy bag",
            "tax-rate": 0,
            "price": 3000,
        },
        {
            "quantity": 4,
            "description": "New Age Charger",
            "tax-rate": 0,
            "price": 1000
        },
        {
            "quantity": 1,
            "description": "Wig",
            "tax-rate": 0,
            "price": 66000
        }
    ]

    var text = "2nd Mar 2023"
    res.json( text)
})

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/data2', (req, res) => {
    var text = "2nd Mar 2023"
    var cartData = [
        {
            "quantity": 2,
            "description": "Fancy bag",
            "tax-rate": 0,
            "price": 3000,
        },
        {
            "quantity": 4,
            "description": "New Age Charger",
            "tax-rate": 0,
            "price": 1000
        },
        {
            "quantity": 1,
            "description": "Wig",
            "tax-rate": 0,
            "price": 66000
        }
    ]
    res.json( cartData)})

app.listen(3000, () => {
    console.log('server at 3000...');
    
})





// var data = {};
// easyinvoice.createInvoice(data, function (result) {
//     easyinvoice.download('myInvoice.pdf', result.pdf);
//     //	you can download like this as well:
//     //	easyinvoice.download();
//     //	easyinvoice.download('myInvoice.pdf');   
// });