
var y = GenerarNumero(10,30);
document.write(y);

function GenerarNumero(min, max) 
{
	var n;
	n=Math.floor(Math.random()*(max-min+1))+min;
	return n;
}