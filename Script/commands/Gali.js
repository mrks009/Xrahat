const fs = require("fs");
module.exports.config = {
	name: "gali",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "🔰𝐑𝐀𝐇𝐀𝐓 𝐈𝐒𝐋𝐀𝐌🔰", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "abal",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Rahat Bokasoda")==0 || event.body.indexOf("রাহাদ বোকাচোদা")==0 || event.body.indexOf("বোকাচোদা")==0 || event.body.indexOf("Rahat nodir pola")==0 || event.body.indexOf("bc")==0 || event.body.indexOf("Rahat re chudi")==0 ||
event.body.indexOf("khanki")==0 || event.body.indexOf("murgi")==0 || event.body.indexOf("Rahat Abal")==0 ||
event.body.indexOf("mc")==0 || event.body.indexOf("Rahat re chod")==0 || event.body.indexOf("Rahat Abal")==0 ||
event.body.indexOf("magir pola")==0 || event.body.indexOf("chudi")==0 || event.body.indexOf("চুদি")==0 ||
event.body.indexOf("magi")==0 || event.body.indexOf("রাহাদ কে চুদি")==0 || event.body.indexOf("Rahat ke chudi")==0 ||
event.body.indexOf("মাগীর পোলা")==0 || event.body.indexOf("মাগী")==0 || event.body.indexOf("bal")==0 ||
event.body.indexOf("বাল")==0 || event.body.indexOf("bokachoda")==0 || event.body.indexOf("fuck")==0 || event.body.indexOf("ফাক")==0 || event.body.indexOf("রাহাত আবাল")==0 ||
event.body.indexOf("রাহাতরে চুদি")==0 || event.body.indexOf("চুদির ভাই")==0 || event.body.indexOf("abal")==0 ||
event.body.indexOf("Rahat Boakachoda")==0 || event.body.indexOf("@Rahat Islam aye mangger")==0 || event.body.indexOf("Rahat re chudi")==0 || event.body.indexOf("🥵🥵🥵")==0) {
		var msg = {
				body: "তোর মতো বোকাচোদা রে Mehedi Boss চু*দা বাদ দিছে🥹🥱😈",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
