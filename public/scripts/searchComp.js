Vue.component('search', {
    props: ['userSearch'],
    template: `<form class="header__wrapper-search search-form" @submit.prevent="$root.filter" action="#">
    <input class="search-form__input" v-model='userSearch' placeholder="Искать здесь..." type="search">
    <button class="search-form__button" type="submit"><img class="header__loupe" src="imgs/loupe.svg"
            alt="loupe" width="26" height="27"></button>
</form>`
})