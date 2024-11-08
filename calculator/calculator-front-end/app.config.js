module.exports = {
	apps: [
		{
            name: "calc",
            script : "npx",
	        interpreter : "none",
            args : "serve dist --single"
        }
	]
}