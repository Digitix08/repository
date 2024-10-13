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
function checkPrompt() {
	var darkmode = getCookie("prompt");
	if(prompt == "accept")return;
	else{
		const newDiv = document.createElement("div");
		newDiv.style= "position:fixed; width: 100%; height: 100px; z-index: 1; left: 0px; bottom: 0px; background-color: #C0C0C0;";
		newDiv.id= "prompt";
		document.body.appendChild(newDiv);
		document.getElementById("prompt").innerHTML += `To use &quot;premium&quot; features such as dark theme you <strong>MUST</strong> agree to save <strong>LOCAL</strong> cookies containing the theme preference<br>
		Do you want to use cookies?<br>
		<img id="img2" alt="Yes" fp-style="fp-btn: Border Bottom 2; fp-font-size: 20" fp-title="Yes" height="40" onclick="promptRemove(1)" onmousedown="FP_swapImg(1,0,/*id*/'img2',/*url*/'images/buttons/button14.jpg')" onmouseout="FP_swapImg(0,0,/*id*/'img2',/*url*/'images/buttons/button1E.jpg')" onmouseover="FP_swapImg(1,0,/*id*/'img2',/*url*/'images/buttons/button1F.jpg')" onmouseup="FP_swapImg(0,0,/*id*/'img2',/*url*/'images/buttons/button1F.jpg')" src="images/buttons/button1E.jpg" style="border: 0" width="200"><img id="img3" alt="No" fp-style="fp-btn: Border Bottom 3; fp-font-size: 20" fp-title="No" height="40" onclick="promptRemove(0)" onmousedown="FP_swapImg(1,0,/*id*/'img3',/*url*/'images/buttons/button1D.jpg')" onmouseout="FP_swapImg(0,0,/*id*/'img3',/*url*/'images/buttons/button1B.jpg')" onmouseover="FP_swapImg(1,0,/*id*/'img3',/*url*/'images/buttons/button1C.jpg')" onmouseup="FP_swapImg(0,0,/*id*/'img3',/*url*/'images/buttons/button1C.jpg')" src="images/buttons/button1B.jpg" style="border: 0" width="200">`;
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
