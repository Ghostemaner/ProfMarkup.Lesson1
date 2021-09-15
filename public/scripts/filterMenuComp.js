Vue.component("filter-menu", {
    props: ['visibility'],

    template: `<div class="accordion navigation-filter__accordion accordion-block" v-show="visibility" id="accordionExample">
    <button id="filter-button-sub" @click="$root.showFilter = false" class="filter-litem__button"><span
            class="filter-litem__text filter-litem__text-modal">FILTER</span><img
            class="filter-litem__img filter-litem__img-modal" src="imgs/filter-modal.svg"
            alt="filter-modal"></button>
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                CATEGORY
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <ul>
                    <li class="accordion-body__categoty">Accessories</li>
                    <li class="accordion-body__categoty">Bags</li>
                    <li class="accordion-body__categoty">Denim</li>
                    <li class="accordion-body__categoty">Hoodies & Sweatshirts</li>
                    <li class="accordion-body__categoty">Jackets & Coats</li>
                    <li class="accordion-body__categoty">Polos</li>
                    <li class="accordion-body__categoty">Shoes</li>
                    <li class="accordion-body__categoty">Sweaters & Knits</li>
                    <li class="accordion-body__categoty">T-Shirts</li>
                    <li class="accordion-body__categoty">Tanks</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                BRAND
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <ul>
                    <li class="accordion-body__categoty">Accessories</li>
                    <li class="accordion-body__categoty">Bags</li>
                    <li class="accordion-body__categoty">Denim</li>
                    <li class="accordion-body__categoty">Hoodies & Sweatshirts</li>
                    <li class="accordion-body__categoty">Jackets & Coats</li>
                    <li class="accordion-body__categoty">Polos</li>
                    <li class="accordion-body__categoty">Shoes</li>
                    <li class="accordion-body__categoty">Sweaters & Knits</li>
                    <li class="accordion-body__categoty">T-Shirts</li>
                    <li class="accordion-body__categoty">Tanks</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                DESIGNER
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <ul>
                    <li class="accordion-body__categoty">Accessories</li>
                    <li class="accordion-body__categoty">Bags</li>
                    <li class="accordion-body__categoty">Denim</li>
                    <li class="accordion-body__categoty">Hoodies & Sweatshirts</li>
                    <li class="accordion-body__categoty">Jackets & Coats</li>
                    <li class="accordion-body__categoty">Polos</li>
                    <li class="accordion-body__categoty">Shoes</li>
                    <li class="accordion-body__categoty">Sweaters & Knits</li>
                    <li class="accordion-body__categoty">T-Shirts</li>
                    <li class="accordion-body__categoty">Tanks</li>
                </ul>
            </div>
        </div>
    </div>
</div>`
})