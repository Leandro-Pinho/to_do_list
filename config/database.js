const mongoose = require("mongoose");

try {
  mongoose
    .connect(
      "mongodb+srv://leandro:741OaE3xAavnzbNq@cluster0.3bwwd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("Conectado ao MongoDB"));
} catch (error) {
  console.log(error);
}

// USERNAME: leandro
// PASSWORD: 741OaE3xAavnzbNq
