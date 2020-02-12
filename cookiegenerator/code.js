var fortunes = [                             
  "The fortune you seek is in another cookie.",
  "A closed mouth gathers no feet.",
  "The road to riches is paved with homework.",
  "Someone will invite you to a Karaoke party.",           //Array of fortune outcomes is created
  "Don't let statistics do a number on you.",                  
  "You think it's a secret, but they know.",
  "You will be hungry again in one hour.",
  "Avoid taking unnecessary gambles. Lucky numbers: 12, 15, 23, 28, 37",
  "We don't know the future, but here's a cookie.",
  "He who throws dirt is losing ground.",
  "An alien of some sort will be appearing to you shortly.",
  "A foolish man listens to his heart. A wise man listens to cookies.",
  "You will die alone and poorly dressed."
];

function newCookie() {
	var randomNumber = Math.floor(Math.random() * (fortunes.length));               //Random cookie is chosen by picking a random number from the length of the fortune array
	document.getElementById('Display').innerHTML = fortunes[randomNumber];
	
	
}