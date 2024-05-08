const mongoose=require('mongoose')

  mongoose
    .connect("mongodb+srv://sahilshukla20034:c4vGDgdRQIqZJHIo@cluster0.viwu53m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      dbName: "Bakeryweb",
    })
    .then(() => {
      console.log("Connected to MongoDB.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });