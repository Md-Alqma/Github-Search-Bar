function navbar() {
    return `<div id="navbar">
    <div id="left">
        <div class="logo">
            <a href="./index.html">
                <img src="./images/github.png" height="50" alt="">
            </a>
        </div>
        <div class="seachbar">
            <input type="text" id="searchInput" placeholder="Search or jump to...">
        </div>
        <div class="menus">
            <a href="">Pull requests</a>
            <a href="">Issues</a>
            <a href="">Marketplace</a>
            <a href="">Explorer</a>
        </div>
    </div>
    <div id="right">
        <img src="./images/profile.png" id="profile-icon" height="35" alt="">
    </div>
</div>`
}

export default navbar;