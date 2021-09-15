Vue.component('products-list', {
    props: ['products'],
    template: `<ul class="products__list products__list-catalog-grid">
                    <product v-for="item of products"
                    :key="item.id_product"
                    :product="item"></product>
                </ul>`
})

Vue.component('product', {
    props: ['product'],
    template: `<li class="products__item">
    <div class="products__item-img-wrapper">
        <img class="products__item-img" :src=product.img_product alt="card1" width="360" height="420">
    </div>
    <h3 class="products__item-heading">{{ product.title_product }}</h3>
    <p class="products__item-text">{{ product.text_product }}</p>
    <p class="products__item-text-pink">$ {{ product.price_product }}.00 </p>
    <button @click="$root.addToCart(product)" class="products__item-button" type="button">Add to Cart</button>
</li>`
})