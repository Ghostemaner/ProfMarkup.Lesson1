Vue.component('menu-nav', {
    props: ['visibility'],
    template: `
    <nav class="header__navigation-block" v-show="visibility">
    <button class="header__navigation-button" id="close"><img src="imgs/close-menu.svg"
            alt="close"></button>
    <h2 class="header__navigation-title">menu</h2>
    <ul class="header__navigation-list">
        <li class="header__navigation-item navigation-item">
            <a class="navigation-item__link" href="#">man</a>
            <ul class="navigation-item__sublist">
                <li><a class="navigation-item__sublist-link" href="#">Accessories</a></li>
                <li><a class="navigation-item__sublist-link" href="#">Bags</a></li>
                <li><a class="navigation-item__sublist-link" href="#">Denim</a></li>
                <li><a class="navigation-item__sublist-link" href="#">T-Shirts</a></li>
            </ul>
        </li>
        <li class="header__navigation-item navigation-item">
            <a class="navigation-item__link" href="#">woman</a>
            <ul class="navigation-item__sublist">
                <li><a class="navigation-item__sublist-link" href="#">Accessories</a></li>
                <li><a class="navigation-item__sublist-link" href="#">Jackets & Coats</a></li>
                <li><a class="navigation-item__sublist-link" href="#">Polos</a></li>
                <li><a class="navigation-item__sublist-link" href="#">T-Shirts</a></li>
                <li><a class="navigation-item__sublist-link" href="#">Shirts</a></li>
            </ul>
        </li>
        <li class="header__navigation-item navigation-item">
            <a class="navigation-item__link" href="#">kids</a>
            <ul class="navigation-item__sublist">
                <li><a class="navigation-item__sublist-link" href="#">Accessories</a></li>
                <li><a class="navigation-item__sublist-link" href="#">Jackets & Coats</a></li>
                <li><a class="navigation-item__sublist-link" href="#">Polos</a></li>
                <li><a class="navigation-item__sublist-link" href="#">T-Shirts</a></li>
                <li><a class="navigation-item__sublist-link" href="#">Shirts</a></li>
                <li><a class="navigation-item__sublist-link" href="#">Bags</a></li>
            </ul>
        </li>
    </ul>
</nav>`
});