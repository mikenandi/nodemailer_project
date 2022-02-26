const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "gudsurvey@gmail.com",
		pass: "love&*tech0145",
	},
})

let mailOptions = {
	from: "gudsurvey@gmail.com",
	to: "mike12og@gmail.com",
	subject: "Testing nodemailer",
	text: "hey there this is to notify that we are now using the new app in our tech stack we are happy to see you as our new customer",
}

transporter.sendMail(mailOptions, (err, data) => {
	if (err) {
		console.log("email was not sent", err)
	} else {
		console.log("email was sent")
	}
})
