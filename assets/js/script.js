function adcRick(){
	$(	"<li class=\"col-s-12 col-m-3 col-l-3 col-xl-3\">" +
		"<div class=\"card-box\">" +
			"<img src=\"assets/media/img/rickymorty.jpg\" onclick=\"adcRick()\" class=\"img-card\" alt=\"Rick & Morty\"/>"+		
			"<p> Rick and morty </p>"+
		"</div>"+
		"</li>").hide().appendTo('#listCards').slideToggle(1000);
}
function adcAdventure(){
	$(	"<li class=\"col-s-12 col-m-3 col-l-3 col-xl-3\">" +
		"<div class=\"card-box\">" +
			"<img src=\"assets/media/img/adventuretime.jpg\" onclick=\"adcAdventure()\" class=\"img-card\" alt=\"Adventure Time\"/>" +
			"<p>Hora de aventura</p>"+	
		"</div>"+
		"</li>").hide().appendTo('#listCards').slideToggle(1000);
}
function adcGumball(){
	$(	"<li class=\"col-s-12 col-m-3 col-l-3 col-xl-3\">" +
		"<div class=\"card-box\">" +
			"<img src=\"assets/media/img/gumball.jpg\" onclick=\"adcGumball()\" class=\"img-card\" alt=\"Mundo de Gumball\"/>"+		
			"<p> O incrível mundo de gumball </p>"+
		"</div>" +
		"</li>").hide().appendTo('#listCards').slideToggle(1000);
}
function adcPokemon(){
	$("<li class=\"col-s-12 col-m-3 col-l-3 col-xl-3\">" +
		"<div class=\"card-box\">" +
			"<img src=\"assets/media/img/pokemon.jpg\" onclick=\"adcPokemon()\" class=\"img-card\" alt=\"Pokemon\"/>"+		
			"<p> Pokémon </p>"+
		"</div>"+
		"</li>").hide().appendTo('#listCards').slideToggle(1000);
}
function adcSteven(){
	$("<li class=\"col-s-12 col-m-3 col-l-3 col-xl-3\">" +
		"<div class=\"card-box\">" +
			"<img src=\"assets/media/img/steven.jpg\" onclick=\"adcSteven()\" class=\"img-card\" alt=\"Steven\"/>"+		
			"<p> Steven </p>"+
		"</div>"+
		"</li>").hide().appendTo('#listCards').slideToggle(1000);
}