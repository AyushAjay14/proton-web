const express = require("express");
const path = require("path");
const app = express();
const staticpath = path.join(__dirname , "../public");
app.use(express.static(staticpath));
app.get("/" , (req , resp) => {
    resp.send("Hello...");
});
app.listen(process.env.PORT || 8000 , () => {
    console.log(`listening..`);
});