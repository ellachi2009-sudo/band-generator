// I am learning Git version control
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

let clickCount = 0;

function generateBandName() {
    const adjectives = ["Happy", "Crazy", "Silent"];
    const nouns = ["Lions", "Stars", "Tigers"];

    const randomAdjective =
        adjectives[Math.floor(Math.random() * adjectives.length)];

    const randomNoun =
        nouns[Math.floor(Math.random() * nouns.length)];

    return randomAdjective + " " + randomNoun;
}

app.get("/", (req, res) => {
    const bandName = generateBandName();

    res.render("index", {
        bandName: bandName,
        clickCount: clickCount
    });
});

app.post("/", (req, res) => {
  clickCount++;
    const bandName = generateBandName();

    res.render("index", {
        bandName: bandName,
         clickCount: clickCount
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
