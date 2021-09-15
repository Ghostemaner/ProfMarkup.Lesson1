Vue.component('cart-list', {
    props: ['cartItems', "visibility"],
    template: `
        <div class="cart-list__wrapper">
            <cart-item v-for="item of cartItems" :key="item.id_product" :cart-item="item"></cart-item>
        </div>`
});

Vue.component('cart-item', {
    props: ['cartItem', 'attentionDeleteShow'],
    data: {
        value: ""
    },
    template: `
            <div class="cart-block">
                <div class="cart-block__img-wrapper cart-img"><img class="cart-img__img" :src="cartItem.img_product"
                        alt="card3"></div>
                <div class="cart-block__block-items cart-items">
                    <h3 class="cart-items__heading-cart">{{ cartItem.title_product }}</h3>
                    <ul class="cart-items__list-desc desc-items">
                        <li class="desc-items__item-price cart-info"><span class="cart-info__text">Price:
                            </span><span class="cart-info__value-pink">{{ cartItem.quantity*cartItem.price_product }}.00</span></li>
                        <li class="desc-items__item-color cart-info"><span class="cart-info__text">Color:
                            </span><span class="cart-info__value">{{ cartItem.color_product }}</span></li>
                        <li class="desc-items__item-size cart-info"><span class="cart-info__text">Size:
                            </span><span class="cart-info__value">{{ cartItem.size_product }}</span>
                        </li>
                        <li class="desc-items__item-quantity cart-info"><span class="cart-info__text">Quantity:
                            </span><input class="cart-info__value cart-info__value-input" type="text"
                                :placeholder="cartItem.quantity" required></li>
                    </ul>
                    <button class="cart-items__button-close" @click='$root.attentionDeleteShow = !attentionDeleteShow; $root.itemToDelete = cartItem' type="button"><img class="cart-items__img-close"
                            src="imgs/close-menu.svg" alt="close"></button>
                    </div>
                    
        </div>`
});

Vue.component("cart-button", {
    props: ["attentionAllDeleteShow"],
    template: `
            <div class="cart-list__button-wrapper">
                <button class="cart-clear-button" type="button" @click="$root.attentionAllDeleteShow = !attentionAllDeleteShow">Clear shopping cart</button>
                <a href="catalog.html"><button class="cart-continue-button" type="button">Continue shopping</button></a>
            </div>`
});

Vue.component('attention-delete', {
    props: ["visibility", 'cartItem'],
    template: `
            <div v-show="visibility" class="attention-conteiner overlay">
                <div class="attention-block">
                    <p class="attention-block__text">Are you sure you want to delete this product form cart?</p>
                    <div class="attention-block__wrap">
                        <button class="attention-block__wrap-button button-pink" type="button" @click="$root.removeFromCart($root.itemToDelete); $root.attentionDeleteShow = false">Yes</button>
                        <button class="attention-block__wrap-button" type="button" @click="$root.attentionDeleteShow = false">No</button>
                    </div>
                <div>
            </div>`
});

Vue.component('attention-alldelete', {
    props: ["visibility"],
    template: `
        <div v-show="visibility" class="attention-conteiner overlay">
            <div class="attention-block">
                <p class="attention-block__text">Are you sure you want to delete all products form cart?</p>
                <div class="attention-block__wrap">
                    <button class="attention-block__wrap-button button-pink" type="button" @click="$root.cartFiltered = [];$root.attentionAllDeleteShow = false">Yes</button>
                    <button class="attention-block__wrap-button" type="button" @click="$root.attentionAllDeleteShow = false">No</button>
                </div>
            <div>
        </div>`
});