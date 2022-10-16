import navbar from "../components/navbar.js";

document.querySelector("#navContainer").innerHTML = navbar();

let searchWord = document.querySelector("#searchInput");

const fetchUserData = async (e) => {
  // event.preventDefault();
  let userName = document.querySelector("#searchInput").value;
  if (e.key === "Enter") {
    try {
      let res = await fetch(`https://api.github.com/users/${userName}`);
      let data = await res.json();
      console.log(data);

      let profile = document.querySelector("#profile-icon");
      profile.src = data.avatar_url;

      repoData(data.repos_url);
    } catch (error) {
      console.log(error);
    }
  }
};

searchWord.addEventListener("keypress", fetchUserData);

async function repoData(url) {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
  document.querySelector('#container').innerHTML = null;
    data.forEach((el) => {
        
    let div = document.createElement("div");

    let id = document.createElement("h4");
    id.innerHTML = el.id;

    let name = document.createElement("h3");
    name.innerHTML = el.name;

    let a = document.createElement("a");
      a.innerHTML = el.clone_url;
      a.href = a.innerHTML;
    a.style.color = "blue";

    div.append(id, name, a);

    document.querySelector("#container").append(div);
  });
}
