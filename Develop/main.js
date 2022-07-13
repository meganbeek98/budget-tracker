const MongoClient = require("mongodb").MongoClient;

const client = new MongoClient(process.env.ATLAS_URI, { useUnifiedTopology: true});

client.connect().then(result => {
    const database = client.db("budget-tracker");
    const collection = database.collection("budget-tracker")
    console.log(result);
}, error => {
    console.error(error);
});

(async () => {
    await client.connect();
    const database = client.db("budget-tracker");
    const collection = database.collection("budget-tracker");
    collection.insertOne({
        "name": "",
        "short_name":"",
        "description": "",
        "icons": [
            {
              "src": "icons/icon-72x72.png",
              "sizes": "72x72",
              "type": "image/png"
            },
            {
              "src": "icons/icon-96x96.png",
              "sizes": "96x96",
              "type": "image/png"
            },
            {
              "src": "icons/icon-128x128.png",
              "sizes": "128x128",
              "type": "image/png"
            },
            {
              "src": "icons/icon-144x144.png",
              "sizes": "144x144",
              "type": "image/png"
            },
            {
              "src": "icons/icon-152x152.png",
              "sizes": "152x152",
              "type": "image/png"
            },
            {
              "src": "icons/icon-192x192.png",
              "sizes": "192x192",
              "type": "image/png"
            },
            {
              "src": "icons/icon-384x384.png",
              "sizes": "384x384",
              "type": "image/png"
            },
            {
              "src": "icons/icon-512x512.png",
              "sizes": "512x512",
              "type": "image/png"
            }
      
          ],
        "theme_color": "#ffffff",
        "background_color": "#ffffff",
        "start_url": "/",
        "display": "standalone"
    })
})();