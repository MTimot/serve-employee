import express from "express";
import cors from "cors";
const app = express();

const sampleEmployee = {
	name: {
		first: "ChAAAAAAAAAAAAAAAAAlie",
		last: "Thompson",
	},
	email: "charlie.thompson@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
	},
};
app.use(cors({ origin: ["http://localhost:5174"] }));
app.get("/api/employees", (req, res) => {
	res.json({ result: [sampleEmployee] });
});
const port = 3310;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
