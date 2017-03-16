var horoscope = [
	{
		sign: "aquarius",
		fortune: " Fun with friends, helping others, fighting for causes, intellectual conversation, a good listener",
		image: "img/aquarius.jpg",
	},
	{
		sign: "aries",
		fortune: "Comfortable clothes, taking on leadership roles, physical challenges, individual sports",
		image: "img/aries.jpg"
	},
	{
		sign: "cancer",
		fortune: "Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive",
		image: "img/cancer.jpg"
	},
	{
		sign: "capricorn",
		fortune: "Responsible, disciplined, self-control, good managers",
		image: "img/capricorn.jpg"
	},
	{
		sign: "gemini",
		fortune: " Music, books, magazines, chats with nearly anyone, short trips around the town",
		image: "img/gemini.jpg"
	},
	{
		sign: "leo",
		fortune: "Creative, passionate, generous, warm-hearted, cheerful, humorous",
		image: "img/leo.jpg"
	},
	{
		sign: "libra",
		fortune: "Harmony, gentleness, sharing with others, the outdoors",
		image: "img/libra.jpg"
	},
	{
		sign: "pisces",
		fortune: "Compassionate, artistic, intuitive, gentle, wise, musical",
		image: "img/pisces.jpg"
	},
	{
		sign: "sagittarius",
		fortune: " Generous, idealistic, great sense of humor",
		image: "img/sagittarius.jpg"
	},
	{
		sign: "scorpio",
		fortune: "Resourceful, brave, passionate, stubborn, a true friend",
		image: "img/scorpio.jpg"
	},
	{
		sign: "taurus",
		fortune: "Reliable, patient, practical, devoted, responsible, stable",
		image: "img/taurus.jpg"
	},
	{
		sign: "virgo",
		fortune: "Loyal, analytical, kind, hardworking, practical",
		image: "img/virgo.jpg"
	}
]


function zodiac() {

	var userdata = document.getElementById("userdata")

	console.log(userdata)
	console.log("users value is: " + userdata.value)


	for(i = 0; i < horoscope.length; i = i + 1) {

		console.log("users value lowercase is: " + userdata.value.toLowerCase())
  	console.log("current zodiac sign in loop is: " + horoscope[i].sign)


		if(userdata.value.toLowerCase() === horoscope[i].sign) {

			console.log("if statement ran")
			console.log("users typed in: " + userdata.value)
			console.log("current image value is: " + horoscope[i].image)
			console.log("current fortune value is: " + horoscope[i].fortune)


	document.getElementById("yourSign").innerHTML = userdata.value
  document.getElementById("icon").src = horoscope[i].image
  document.getElementById("yourzodiac").innerHTML = "You're best attributes are: " + horoscope[i].fortune
		  return
		}


		console.log("no matches were found, user failed to type in a correct horoscope sign")

		document.getElementById("yourSign").textContent = "check your spelling!"
		document.getElementById("yourzodiac").textContent = ""
		document.getElementById("icon").src = ""
		
	}

}
