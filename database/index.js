//May not even need this entire file, since the database is being served through the server file

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://root:hratx47@jjhratx-fec-uz76u.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const getStoreItems = (id, callback) => {
  client.connect(err => {

  if (err) {
    console.log("error connecting to database")
  } else {
    console.log("connected to database!");
    const db = client.db("FEC");
    const collection = client.db("FEC").collection("relatedItems");
    
    collection.findOne({itemId: id})
    .then((item) => {
      return item.storeId
    })
    .then(async (storeId) => {
      const itemArray = await collection.find({ storeId: storeId }, { projection: { singlePrice: 1, _id: 0 } }).toArray();
      console.log(itemArray);
      return itemArray;
    })
    .catch((err) => {
      console.log("there was an error:" + err)
    })
    // perform actions on the collection object
  }
});
};
//helper functions

// const findStoreByItemId = (db, id) => {
//   let collection = db.collection("relatedItems");

//   // let _storeId = findDocumentById(db, id);

//   // console.log(_storeId)

//   collection.find({storeId: id}).sort({itemId: 1}).toArray((err, docs) => {
//     if (err) {
//       callback(err, null);
//       console.log("could not retrieve item");
//     } else {
//       console.log("found the record");
//       console.log(docs)
//       callback(docs);
//     }
//   });
// };

// const findDocumentById = (db, id) => {
//   let collection = db.collection("relatedItems");

//   collection.findOne({itemId: id})
//   .then((data) => {
//     console.log(data.storeId)
//     return data.storeId
//   })
//   .catch((err) => {
//     console.log("there was an error:" + err)
//   })

// };

module.exports = {getStoreItems};