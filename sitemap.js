function subfolder(){
	sel3remove();
	var sel2 = document.getElementById("Select2");
	if(sel2.value == "Snow%20boarder%20v1.0_web/")snowboarder();
	else if(sel2.value == "delivery%20driver%201.1_web/")delidriver();
	else if(sel2.value == "download/"||sel2.value == "games/")sub4lder();
	else if(sel2.value == "index-casete/"||sel2.value == "loginregister/")sub4lder();
	else if(sel2.value == "mobile/"||sel2.value == "school/")sub4lder();
	else if(sel2.value == "shop/")sub4lder();
	else if(sel2.value == "smartkey_mobile/")smartkeymobile();
	else if(sel2.value == "weird-ram/")sub4lder();
}
function sub4lder(){
	var twosel = document.getElementById("Select2");
	const newSelect = document.createElement("select");
	newSelect.id= "sel3";
	newSelect.innerHTML = "";
	document.getElementById("selectarea").append(newSelect);
	if(twosel.value == "account/")account("sel3");
	else if(twosel.value == "download/")download("sel3");
	else if(twosel.value == "games/")games("sel3");
	else if(twosel.value == "index-casete/")indexcasete("sel3");
	else if(twosel.value == "school/")school("sel3");
	else if(twosel.value == "shop/")shop("sel3");
	else if(twosel.value == "weird-ram/")weirdram("sel3");
}
function sel3remove(){
	if(document.getElementById("sel3"))
		{
			var sel3 = document.getElementById("sel3");
			sel3.remove();
		}
}
function slash(){
	var selectElement = document.getElementById("Select2")
	selectElement.innerHTML = "";
	selectElement.add(new Option ("404.html"));
	selectElement.add(new Option ("MINECRAFT.htm"));
	selectElement.add(new Option ("chrome%20urls.html"));
	selectElement.add(new Option ("controls.html"));
	selectElement.add(new Option ("google44d0c4e00351c23e.html"));
	selectElement.add(new Option ("index-old.htm"));
	selectElement.add(new Option ("index.htm"));
	selectElement.add(new Option ("photo_gallery.htm"));
	selectElement.add(new Option ("picviewer.html"));
	selectElement.add(new Option ("settings.html"));
	selectElement.add(new Option ("test.html"));
	selectElement.add(new Option ("useful_links.html"));
}
function account(sel){
	if(sel) selectElement = document.getElementById(sel);
	else var selectElement = document.getElementById("Select2");
	selectElement.innerHTML = "";
	selectElement.add(new Option ("login.html"));
	selectElement.add(new Option ("info2.html"));
	selectElement.add(new Option ("new_page_2.htm"));
	selectElement.add(new Option ("sorry.html"));
	selectElement.add(new Option ("user_registration.htm"));
}
function bview(){
	var selectElement = document.getElementById("Select2")
	selectElement.innerHTML = "";
	selectElement.add(new Option ("MINECRAFT.htm"));
	selectElement.add(new Option ("index.html"));
	selectElement.add(new Option ("useful_links.html"));
}
function download(sel){
	if(sel) selectElement = document.getElementById(sel);
	else var selectElement = document.getElementById("Select2")
	selectElement.innerHTML = "";
	selectElement.add(new Option ("download_android_apps.htm"));
	selectElement.add(new Option ("download_win_mobile_sofware.htm"));
	selectElement.add(new Option ("download_windows_software.htm"));
	selectElement.add(new Option ("index.htm"));
}
function games(sel){
	if(sel) selectElement = document.getElementById(sel);
	else var selectElement = document.getElementById("Select2");
	selectElement.innerHTML = "";
	selectElement.add(new Option ("Snow%20boarder%20v1.0_web/"));
	selectElement.add(new Option ("delivery%20driver%201.1_web/"));
	selectElement.add(new Option ("index.html"));
}
function snowboarder(){
	const newSelect = document.createElement("select");
	newSelect.id= "sel3";
	newSelect.innerHTML = "";
	newSelect.add(new Option ("index.html"));
	document.getElementById("selectarea").append(newSelect);
}
function delidriver(){
	const newSelect = document.createElement("select");
	newSelect.id= "sel3";
	newSelect.innerHTML = "";
	newSelect.add(new Option ("index.html"));
	document.getElementById("selectarea").append(newSelect);
}
function indexcasete(sel){
	if(sel) selectElement = document.getElementById(sel);
	else var selectElement = document.getElementById("Select2");
	selectElement.innerHTML = "";
	selectElement.add(new Option ("index.html"));
}
function mobile(){
	var selectElement = document.getElementById("Select2");
	selectElement.innerHTML = "";
	selectElement.add(new Option ("account/"));
	selectElement.add(new Option ("download/"));
	selectElement.add(new Option ("games/"));
	selectElement.add(new Option ("index-casete/"));
	selectElement.add(new Option ("mobile/"));
	selectElement.add(new Option ("school/"));
	selectElement.add(new Option ("shop/"));
	selectElement.add(new Option ("weird-ram/"));
	selectElement.add(new Option ("404.html"));
	selectElement.add(new Option ("MINECRAFT.htm"));
	selectElement.add(new Option ("chrome%20urls.html"));
	selectElement.add(new Option ("controls.html"));
	selectElement.add(new Option ("index.htm"));
	selectElement.add(new Option ("photo_gallery.htm"));
	selectElement.add(new Option ("settings.html"));
	selectElement.add(new Option ("test.html"));
	selectElement.add(new Option ("useful_links.html"));
}
function school(sel){
	if(sel) selectElement = document.getElementById(sel);
	else var selectElement = document.getElementById("Select2");
	selectElement.innerHTML = "";
	selectElement.add(new Option ("Componentele%20hardware%20ale%20unui%20pc.html"));
	selectElement.add(new Option ("Cr&#259;ciun(1).html"));
	selectElement.add(new Option ("Cr&#259;ciun.html"));
	selectElement.add(new Option ("STOP.html"));
	selectElement.add(new Option ("book12.html"));
	selectElement.add(new Option ("cpp-vii.html"));
	selectElement.add(new Option ("cpp-viii.html"));
	selectElement.add(new Option ("câni.html"));
	selectElement.add(new Option ("horar%20gabi(1).html"));
	selectElement.add(new Option ("horar%20gabi.html"));
	selectElement.add(new Option ("index.htm"));
	selectElement.add(new Option ("new%201.html"));
	selectElement.add(new Option ("romani_vreme_zoo.html"));
	selectElement.add(new Option ("typop%20retelewelo%20de%20cdwjdfh.html"));
}
function shop(sel){
	if(sel) selectElement = document.getElementById(sel);
	else var selectElement = document.getElementById("Select2");
	selectElement.innerHTML = "";
	selectElement.add(new Option ("smartkey_mobile/"));
	selectElement.add(new Option ("index.html"));
}
function smartkeymobile(){
	const newSelect = document.createElement("select");
	newSelect.id= "sel3";
	newSelect.innerHTML = "";
	newSelect.add(new Option ("index.html"));
	document.getElementById("selectarea").append(newSelect);
}
function weirdram(){
	var selectElement = document.getElementById("Select2");
	selectElement.innerHTML = "";
	selectElement.add(new Option ("index.html"));
}