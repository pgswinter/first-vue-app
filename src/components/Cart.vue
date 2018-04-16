<template>
	<div class="cart column">
	    <div class="card">
	      	<div class="card-image">
	        	<figure class="image is-4by3">
	          		<img v-bind:src="item.image">
	        	</figure>
	      	</div>
	      	<div class="card-content">
		        <div class="media">
		          		<div class="media-left">
				            <figure class="image is-48x48">
				              <img v-bind:src="item.image">
				            </figure>
		          		</div>
		          	<div class="media-content">
			            <p class="title is-4">{{item.title}}</p>
			            <p class="subtitle is-6">$ {{item.price}}</p>
		        	</div>
		    	</div>

		        <div class="content">
		        	<p>{{item.description}}</p>
		          	<p>Quantity: {{item.quantity}}</p>
		        </div>
	      	</div>
	      	<div class="control-button">
	          <button v-on:click="increase()">+</button>
	          <button v-on:click="decrease()">-</button>
	        </div>
	    </div>
	</div>
</template>
<script>
	import _ from 'lodash'
  	import dataCart from '../dataCart'
	export default {
		name: "Cart",
		props: ['item'],
		data(){
			return{
				items: dataCart.data.cart
			}
		},
		methods: {
			increase(){
				dataCart.increase(this.item)
			},
			decrease(){
				dataCart.decrease(this.item)
			}
    	},
	}
</script>