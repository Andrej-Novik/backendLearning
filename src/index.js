import app from "./delivery/index.js"

const PORT = 4000;

async function main() {
	await app.listen(PORT, () => console.log(`server start in ` + PORT))
}

main()