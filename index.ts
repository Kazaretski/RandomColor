import express, {Express} from "express";
import { cp } from "fs";
import path from "path";
// ---------------------------------------
const app: Express = express();
function colorGenerator() {
    let values: number[] = [];
    for (let i = 0; i < 3; i++) {
        values.push(Math.floor(Math.random() * 255));
    }
    return values;
}
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("port", 3000);
app.get("/", (req, res) => {
    let color: number[] = colorGenerator();
    res.render("home", {color});
});
// ---------------------------------------
app.listen(app.get("port"), async() => {
    console.log(`[STATUS] Server started on http://localhost:${app.get("port")}`);
});
// ---------------------------------------
export{}