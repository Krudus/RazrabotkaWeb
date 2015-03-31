function route(handle, pathname, response) {

  if (typeof handle[pathname] === 'function') {
    handle[pathname](response);
  } else {
  	response.writeHead(404);
  	response.write("404");
  	response.end();
  }
}

exports.route = route;