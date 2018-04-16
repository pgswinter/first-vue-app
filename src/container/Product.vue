<template>
	<div class="columns">
      <list-product  v-for="item in product.items" v-bind:item="item"></list-product>
      <cart v-for="item in cart.items" v-bind:item="item"></cart>
    </div>
</template>

<script>
	import ListProduct from '../components/ListProduct.vue'
	import Cart from '../components/Cart.vue'
	import dataCart from '../dataCart'
	export default {
	  name: 'Product',
	  data(){
	    return {
	      product: {
	        items: [
	          {
	            id: 1,
	            title: 'Product 1',
	            price: '10',
	            image: 'https://bulma.io/images/placeholders/1280x960.png',
	            avatar:"https://bulma.io/images/placeholders/96x96.png",
	            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.',
	            quantity: 1
	          },
	          {
	            id: 2, 
	            title: 'Product 2',
	            price: '20',
	            image: 'https://bulma.io/images/placeholders/1280x960.png',
	            avatar:"https://bulma.io/images/placeholders/96x96.png",
	            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.',
	            quantity: 1
	          },
	          {
	            id: 3,
	            title: 'Product 3',
	            price: '30',
	            image: 'https://bulma.io/images/placeholders/1280x960.png',
	            avatar:"https://bulma.io/images/placeholders/96x96.png",
	            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.',
	            quantity: 1
	          }
	        ]
	      },
	      cart: {
	        items: dataCart.data.cart
	      }
	    }
	    
	  },
	  components: {
	    ListProduct,
	    Cart
	  }
	}
</script>