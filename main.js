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
                variantColor: 'green'
            },
            {
                variantId: 2,
                variantColor: 'blue'
            }
        ]
    }
})