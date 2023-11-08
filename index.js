const Axios 			= require("axios")
const Info				= require("./Config.json")

if (Info.Collection == "") return console.log("Collection Empty")
if (Info.Token == "") return console.log("Token Empty")

Axios.patch("https://discord.com/api/v9/users/@me/settings-proto/2", {
	"settings": Info.Collection
}, {
	headers: {
		"Content-Type": "application/json",
		"Authorization": Info.Token,
	}
})

.then(Response => console.log(Response.data))
.catch(Error => console.error(Error))