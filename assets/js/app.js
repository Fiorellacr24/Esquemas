var contenedor = document.getElementsByTagName("body")[0];

var rosado = document.createElement('div');
var lila = document.createElement('div');
var amarillo = document.createElement('div');
var negro = document.createElement('div');
var azul = document.createElement('div');
var verde = document.createElement('div');

	rosado.style.position = "relative";
	rosado.style.background = "#ed462f";
	rosado.style.width = "150px";
	rosado.style.height = "150px";
	rosado.style.margin = "15px";

	lila.style.position = "relative";
	lila.style.background = "#752e80";
	lila.style.width = "80px";
	lila.style.height = "82px";
	lila.style.top = "34px";
	lila.style.left = "37px";

	amarillo.style.position = "relative";
	amarillo.style.background = "#fff835";
	amarillo.style.width = "40px";
	amarillo.style.height = "40px";

	azul.style.position = "relative";
	azul.style.background = "#0048fb";
	azul.style.width = "150px";
	azul.style.height = "150px";
	azul.style.margin = "15px";

	verde.style.position = "relative";
	verde.style.background = "#387804";
	verde.style.width = "80px";
	verde.style.height = "82px";
	verde.style.top = "37px";
	verde.style.left = "37px";

	negro.style.position = "relative";
	negro.style.background = "#000";
	negro.style.width = "37px";
	negro.style.height = "37px";
	negro.style.bottom = "82px";

	rosado.appendChild(lila);
	lila.appendChild(amarillo);

	azul.appendChild(verde);
	azul.appendChild(negro);

	contenedor.appendChild(rosado);
	contenedor.appendChild(azul);
