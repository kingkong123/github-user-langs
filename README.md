GitHub User Langs jQuery Plugin
=========

Requirements: jQuery (tested on 1.10.1 and 1.10.2)

##Init the Plugin
```javascript
var githublangs = new $.GithubUserApi({
    user: 'your-username',
    includedForks: true, // repo list includes the forks list (default: true)
    repoSort: 'forks', // how the repo being sorted **Default sort**: created, updated, pushed, full_name. **Custom Sort**: forks, watchers, open_issues, size (default: "full_name")
    repoDirection: 'asc', // sorting direction (default: "asc")
    langSort: 'size', // language list sorting: name, size (default: "name")
    langDirection: 'desc', // sorting direction (default: "asc")
});
```
##Get User Info

The getUserInfo requires a callback function for handling the results from GitHub.
```javascript
githublangs.getUserInfo(function(result){
	/* result object:
	{
		success: true,
		message: '', // error message
		data: {} // GitHub API user data Reference: http://developer.github.com/v3/users/
	} */
})
```

##Get User's Repos

The getAllRepos requires a callback function for handling the results from GitHub.
```javascript
githublangs.getAllRepos(function(result){
	/* result object:
	{
		success: true,
		message: '', // error message
		data: {} // GitHub API List user repositories Reference: http://developer.github.com/v3/repos/
	} */
})
```

##Get User Languages' bytes of code

The getAllLangs requires a callback function for handling the results from GitHub.
*Note: the getAllLangs function will be call after "getAllRepos" is completed.
```javascript
githublangs.getAllLangs(function(result){
	/* result object:
	{
		success: false,
		message: "", // error message
		data: [
			{ name: "languageName1", size: 123456},
			{ name: "languageName2", size: 234567}
		]
	} */
})
```

=========
By [Kingkong123](http://kingkong123.github.io/)
