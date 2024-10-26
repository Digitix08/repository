addEventListener("DOMContentLoaded", (event) => {checkPrompt();})
function checkPrompt() {
	if(document.body) console.log("correct");
	else console.log("no");
	var prompt = getCookie("prompt");
	if(prompt != "accept"){
		const newDiv = document.createElement("div");
		newDiv.style= "position:fixed; width: 100%; z-index: 1; left: 0px; bottom: 0px; background-color: #C0C0C0;";
		newDiv.id= "prompt";
		document.getElementsByTagName("body")[0].append(newDiv);
		document.getElementById("prompt").innerHTML += "To use &quot;premium&quot; features such as dark theme you <strong>MUST</strong> agree to save <strong>LOCAL</strong> cookies containing the theme preference";
		document.getElementById("prompt").innerHTML += "<br>Do you want to use cookies?";
		document.getElementById("prompt").innerHTML += "<br><img id=\"img2\" alt=\"Yes\" fp-style=\"fp-btn: Border Bottom 2; fp-font-size: 20\" fp-title=;\"Yes\" height=\"40\" onclick=\"promptRemove(1)\" onmousedown=\"FP_swapImg(1,0,/*id*/'img2',/*url*/'https://digitix08.github.io/repository/images/buttons/button14.jpg')\" onmouseout=\"FP_swapImg(0,0,/*id*/'img2',/*url*/'https://digitix08.github.io/repository/images/buttons/button1E.jpg')\" onmouseover=\"FP_swapImg(1,0,/*id*/'img2',/*url*/'https://digitix08.github.io/repository/images/buttons/button1F.jpg')\" onmouseup=\"FP_swapImg(0,0,/*id*/'img2',/*url*/'https://digitix08.github.io/repository/images/buttons/button1F.jpg')\" src=\"https://digitix08.github.io/repository/images/buttons/button1E.jpg\" style=\"border: 0\" width=\"200\">";
		document.getElementById("prompt").innerHTML += "<img id=\"img3\" alt=\"No\" fp-style=\"fp-btn: Border Bottom 3; fp-font-size: 20\" fp-title=\"No\" height=\"40\" onclick=\"promptRemove(0)\" onmousedown=\"FP_swapImg(1,0,/*id*/'img3',/*url*/'https://digitix08.github.io/repository/images/buttons/button1D.jpg')\" onmouseout=\"FP_swapImg(0,0,/*id*/'img3',/*url*/'https://digitix08.github.io/repository/images/buttons/button1B.jpg')\" onmouseover=\"FP_swapImg(1,0,/*id*/'img3',/*url*/'https://digitix08.github.io/repository/images/buttons/button1C.jpg')\" onmouseup=\"FP_swapImg(0,0,/*id*/'img3',/*url*/'https://digitix08.github.io/repository/images/buttons/button1C.jpg')\" src=\"https://digitix08.github.io/repository/images/buttons/button1B.jpg\" style=\"border: 0\" width=\"200\">"
	}
};
function setCookie(cname, cvalue, exdays){
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};
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
};
function checkCookie(){
	if (darkmode == "yes"){
		var elements = document.getElementsByName("lnk");
		for (var i = 0; i < elements.length; i++) {
 			elements[i].style.color = "#AAB3FF";
		}
	}
};
function promptRemove(yes) {
	if(yes){
		document.getElementById("prompt").outerHTML = "";
		setCookie("prompt", "accept", 90);
		console.log("yes");
	}
	else {
		document.getElementById("prompt").outerHTML = "";
    }
};
