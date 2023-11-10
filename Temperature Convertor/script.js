function convert() {
	var Celsius = document.getElementById("Celsius").value;
	var Fahrenheit = Celsius * 1.8 + 32;
	document.getElementById("Fahrenheit").value = Fahrenheit.toFixed(2);
}
