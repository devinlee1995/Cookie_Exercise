document.getElementById('submit').onclick=function(){
	var username = document.getElementById('name').value;
	if (Cookies.get(username) == null) {
		Cookies.set("name", username);
	}
	if (Cookies.get('name') != null) {
		document.getElementById('info').innerHTML = "Welcome " + Cookies.get('name');
}

};
