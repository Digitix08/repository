//this script is meant to detect site path for mobile/desktop redirects
//DO NOT MOVE FROM ROOT OF (sub)SITE
function rootcheck(){
	var path = window.location.pathname;
	path = path.substring(0, path.length - 9);
	return path;
}