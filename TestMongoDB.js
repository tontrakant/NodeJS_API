var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const con = MongoClient.connect(url);
MongoClient.connect(url, (err, client) => {
    const db = client.db('NewDB')
    // db.collection('inventory').insertMany([
    //     {
    //         item: 'journal',
    //         qty: 25,
    //         tags: ['blank', 'red'],
    //         dim_cm: [14, 21]
    //     },
    //     {
    //         item: 'notebook',
    //         qty: 50,
    //         tags: ['red', 'blank'],
    //         dim_cm: [14, 21]
    //     },
    //     {
    //         item: 'paper',
    //         qty: 100,
    //         tags: ['red', 'blank', 'plain'],
    //         dim_cm: [14, 21]
    //     },
    //     {
    //         item: 'planner',
    //         qty: 75,
    //         tags: ['blank', 'red'],
    //         dim_cm: [22.85, 30]
    //     },
    //     {
    //         item: 'postcard',
    //         qty: 45,
    //         tags: ['blue'],
    //         dim_cm: [10, 15.25]
    //     }
    // ]);
    db.collection('inventory').find({
        dim_cm: { $gt: 15, $lt: 20 }
    }).toArray((err, items) => {
        console.log(items)
    })
})