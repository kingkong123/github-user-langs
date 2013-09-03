function getUserName(){
    var url = window.location.search;
	var userName = url.replace("?", '');

    return userName;
}

function getLanguageClass(lang){
    return lang.replace('#', '-sharp').replace('++', 'pp').replace(' ', '-').replace('+', '-').toLowerCase();
}