const header = new Vue({
    el: "#header",
    props: ["main"],
    data: {
        showMenu: false,
        userSearch: ''
    },
    methods: {
        filter() {
            let regexp = new RegExp(this.userSearch, 'i');
            main.$data.filtered = main.$data.products.filter(el => regexp.test(el.title_product));
            main.$data.cartFiltered = main.$data.cartItems.filter(el => regexp.test(el.title_product));
            main.$data.featureFiltered = main.$data.featureItems.filter(el => regexp.test(el.title_product))
        }
    }
});

const main = new Vue({
    el: "#main",
    data: {
        showFilter: false,
        products: [],
        filtered: [],
        cartItems: [],
        cartFiltered: [],
        featureItems: [],
        featureFiltered: [],
        attentionDeleteShow: false,
        attentionAllDeleteShow: false,
        itemToDelete: []
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error));
        },
        addToCart(item) {
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            if (find) {
                find.quantity++;
            } else {
                const prod = Object.assign({
                    quantity: 1
                }, item);
                this.cartItems.push(prod)
            }
        },
        removeFromCart(item) {
            console.log(item)
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                this.cartFiltered.splice(this.cartFiltered.indexOf(item), 1);
            }
        },
        getRandomFeature() {
            this.products.sort(function (a, b) {
                return Math.random() - 0.5
            });

            for (let i = 0; i < 6; i++) {
                this.featureItems.push(this.products[i]);
                this.featureFiltered.push(this.products[i]);
            }
        }
    },
    mounted() {
        this.getJson(`getCatalog.json`)
            .then(data => {
                for (let item of data) {
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
                this.getRandomFeature()
            });
        this.getJson(`getCatalog.json`)
            .then(data => {
                for (let item of data) {
                    this.$data.cartItems.push(item);
                    this.$data.cartFiltered.push(item);
                }
            });


    }
});

const footer = new Vue({
    el: "#footer",
    data: {

    },
    methods: {

    }
});

// let myCarousel = document.getElementById('carousel-main');

// myCarousel.addEventListener('slide.bs.carousel', function () {
//     //todo
// });

// //Localstorage test  
// localStorage.setItem("cart", '[]');


// LsAddToCart({
//     "id_product": 3,
//     "img_product": "imgs/card3.jpg",
//     "title_product": "ELLERY X M'O CAPSULE 3",
//     "text_product": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi",
//     "color_product": "Black-blue",
//     "size_product": "M",
//     "price_product": 52.00,
//     "quantity": 1
// });
// console.log(localStorage);

// function LsAddToCart(item) {

//     let LsCart = JSON.parse(localStorage.getItem('cart'));
//     console.log(localStorage);
//     LsCart.push(item);
//     localStorage.setItem('cart', JSON.stringify(LsCart));


// }

// function LsReadCart() {

//     //todo
//     return items;
// };