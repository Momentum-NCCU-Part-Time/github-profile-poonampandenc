const gitApiUrl = "https://api.github.com/users/poonampandenc";
const reposApiUrl = "https://api.github.com/users/poonampandenc/repos";
let container = document.querySelector('.container')

fetch(gitApiUrl)
.then((response) => {
    return response.json();
    }
)
.then ((parsedJsonResponse) => {
    console.log(parsedJsonResponse);

let profilePic = document.createElement('img');
profilePic.src = parsedJsonResponse.avatar_url;
container.appendChild(profilePic);

let profileName = document.createElement('h1');
profileName.innerText = parsedJsonResponse.name;
container.appendChild(profileName);

let location = document.createElement('h2');
location.innerText = "Location: " + parsedJsonResponse.location;
container.appendChild(location);

let gitHubUrl = document.createElement('h3');
gitHubUrl.innerText = "GitHub URL: ";
container.appendChild(gitHubUrl);

let gitUrlLink = document.createElement('a');
gitUrlLink.innerHTML = parsedJsonResponse.login;
gitUrlLink.href = parsedJsonResponse.html_url;
gitHubUrl.appendChild(gitUrlLink);

let gitHubUserName = document.createElement('h3');
gitHubUserName.innerText = "GitHub username: " + parsedJsonResponse.login;
container.appendChild(gitHubUserName);

let gitHubRepos = document.createElement('h1');
gitHubRepos.innerText = "GitHub Repos";
container.appendChild(gitHubRepos);

let reposApiUrl = document.createElement('ul');
reposApiUrl.innerText = "";
gitHubRepos.appendChild(reposApiUrl)
    }
)
// .then ((parsedJsonResponse) => {
//     console.log(parsedJsonResponse)
// }
// )
