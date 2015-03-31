
function start(response){
	console.log("request handler 'start' was called");
	
	var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form>'+
    '<p>'+
    'Введите число: <input type="number" name="number" autofocus>'+
    '</p>'+
	'<button type="button" onclick="result.value=number.value">output</button>'+
	'<textarea name="result"> </textarea>'+
	'</form>'+
    '</body>'+
    '</html>';


	response.writeHead(200);
	response.write(body);
	response.end();
	
}

function second(response){
	response.writeHead(200);
	response.write("second");
	response.end();
}

exports.start = start;
exports.second = second;