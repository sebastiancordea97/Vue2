var app = new Vue({
    el: '#app',

    data: {
        product: 'Socks',
        image: '/assets/vmSocks-green-onWhite.jpg',
        link: 'https://mero.ro/p/the-barber-spot',
        inventory: 9,
        onSale: true,
        details: ["80% cotton", "20% Poly", "Gender-neutral"],
        variants: [
            {
                variantId: 1,
                variantColor: 'green',
                variantImage: '/assets/vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 2,
                variantColor: 'blue',
                variantImage: '/assets/vmSocks-blue-onWhite.jpg'
            }
        ],
        cart: 0,
    },

    methods: {
        addToCart() {
            this.cart += 1
        },

        subFromCart() {
            this.cart -= 1
        },

        updateImage: function (image) {
            this.image = image
        }
    }
})