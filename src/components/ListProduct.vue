<template>
  <div class="column">
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
          {{item.description}}
          <router-link class="button is-link" to="/detail">Detail</router-link>
        </div>
      </div>
      <div class="control-button" >
        <button class="button is-primary" v-on:click="add(item)">Add to cart</button>
      </div>
    </div> 
  </div>
  
</template>

<script>
  import _ from 'lodash'
  import dataCart from '../dataCart'
  export default {
    props: ['item'],
    name: 'ListProduct',
    methods: {
      add(){
        dataCart.add(this.item)
      }
    },
    computed:{
      quantityCart(){
        var found = _.find(this.shared.cart, {id: this.item.id} )
        return found
      }
    }
  }
</script>

<style scoped>
    h1,h2{
        text-align: left;
    }
</style>