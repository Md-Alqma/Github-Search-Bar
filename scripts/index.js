import navbar from '../components/navbar.js';

document.querySelector('#navContainer').innerHTML = navbar();

let searchWord = document.querySelector('#searchInput');



const fetchUserData = async (e) => {
    // event.preventDefault();
    let userName = document.querySelector('#searchInput').value;
    if (e.key === 'Enter') {
        try {
            let res = await fetch(`https://api.github.com/users/${userName}`);
            let data = await res.json();
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
    }
    
}

searchWord.addEventListener('keypress', fetchUserData);

