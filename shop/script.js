function noStock() {
	if(prompt != "accept"){
		const bigDiv = document.createElement("div");
		bigDiv.style= "position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 10000;";
		bigDiv.id= "noclick"
		document.getElementsByTagName("body")[0].append(bigDiv);
		const newDiv = document.createElement("div");
		newDiv.style= "position:relative; z-index: 1; top:45%; margin: auto; height:100px; text-align: center; width:300px; background-color: #C0C0C0;";
		newDiv.id= "prompt";
		document.getElementById("noclick").append(newDiv);
		document.getElementById("prompt").innerHTML += "<strong style=\"font-size: x-large; color: #FF0000;\">OUT OF STOCK</strong><br>";
		document.getElementById("prompt").innerHTML += "<img id=\"img3\" alt=\"No\" fp-style=\"fp-btn: Border Bottom 3; fp-font-size: 20\" fp-title=\"No\" height=\"40\" onclick=\"promptRemove()\" onmousedown=\"FP_swapImg(1,0,/*id*/'img3',/*url*/'https://digitix08.github.io/repository/images/buttons/buttonD1.jpg')\" onmouseout=\"FP_swapImg(0,0,/*id*/'img3',/*url*/'https://digitix08.github.io/repository/images/buttons/buttonB1.jpg')\" onmouseover=\"FP_swapImg(1,0,/*id*/'img3',/*url*/'https://digitix08.github.io/repository/images/buttons/buttonC.jpg')\" onmouseup=\"FP_swapImg(0,0,/*id*/'img3',/*url*/'https://digitix08.github.io/repository/images/buttons/buttonC.jpg')\" src=\"https://digitix08.github.io/repository/images/buttons/buttonB1.jpg\" style=\"border: 0\" width=\"200\">"
	}
};
function promptRemove() {
	var prompt
	if (document.getElementById("noclick").parentNode) {
        document.getElementById("noclick").parentNode.removeChild(document.getElementById("noclick"));
    }
};
function FP_swapImg() {//v1.0
	var doc=document,args=arguments,elm,n; doc.$imgSwaps=new Array(); for(n=2; n<args.length;
	n+=2) { elm=FP_getObjectByID(args[n]); if(elm) { doc.$imgSwaps[doc.$imgSwaps.length]=elm;
	elm.$src=elm.src; elm.src=args[n+1]; } }
}
function FP_getObjectByID(id,o) {//v1.0
	var c,el,els,f,m,n; if(!o)o=document; if(o.getElementById) el=o.getElementById(id);
	else if(o.layers) c=o.layers; else if(o.all) el=o.all[id]; if(el) return el;
	if(o.id==id || o.name==id) return o; if(o.childNodes) c=o.childNodes; if(c)
	for(n=0; n<c.length; n++) { el=FP_getObjectByID(id,c[n]); if(el) return el; }
	f=o.forms; if(f) for(n=0; n<f.length; n++) { els=f[n].elements;
	for(m=0; m<els.length; m++){ el=FP_getObjectByID(id,els[n]); if(el) return el; } }
	return null;
}

