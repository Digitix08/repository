function setCookie(cname, cvalue, cname2, cvalue2){
	const d = new Date();
//	d.setTime(d.getTime() + (exdays*24*60*60*1000));
//	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + cname2 + "=" + cvalue2 + ";path=/";
}
function getCookie(cname) {
	var name=cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var cookie=decodedCookie.split(';');
	for(var i=0; i<cookie.length;i++){
		var c=cookie[i];
		while (c.charAt(0)==' '){
			c=c.substring(1);
		}
		if(c.indexOf(name)==0){
			return c.substring(name.length, c.length);
		}
	}	
return"";
}
