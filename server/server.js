//Dependencies being brought in

const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');
const port = 6969;
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://root:hratx47@jjhratx-fec-uz76u.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


//Middlewares being used
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());

//database connection

client.connect()
.then(() => {
    console.log("successfully connected to database")
})
.catch((err) => {
    console.log("error connecting to database:", err)
})

//Route Handling

app.get("/items/:id", (req, res) => {
    getStoreItems(req.params.id, (err, results) => {
        if (err) {
            console.log("there was an error in the server:" + err)
            res.status(404).end();
        } else {
        res.send(results);
        }
    });
});


//helper function
const getStoreItems = (id, callback) => {
      const collection = client.db("FEC").collection("relatedItems");
      let parsedId = parseInt(id);
      collection.findOne({itemId: parsedId})
      .then((item) => {
        return item.storeId
      })
      .then(async (storeId) => {
        const itemArray = await collection.find({ storeId: storeId }, { projection: 
            { singlePrice: 1, 
            _id: 0, 
            shopLogo: 1, 
            shopTotalSales: 1,
            shopStartYear: 1,
            shopCountry: 1,
            relatedItemImage: 1,
            storeName: 1,
            itemName: 1} }).toArray();
        return itemArray;
      })
      .then((results) => {
          callback(null, results)
      })
      .catch((err) => {
        console.log("there was an error:" + err)
      })
      // perform actions on the collection object
  };
//Connection

app.listen(port, () => {
    console.log("Connected on port 6969!");
});

