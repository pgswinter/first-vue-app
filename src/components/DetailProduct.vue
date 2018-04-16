<template>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Detail Products
          </h1>
          <div class="columns">
              <div class="column is-half">
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="column is-half">
                <div class="content">
                  <p>Product Name</p>
                  <p>Price: $1.00</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, illum porro sit, labore animi saepe vero non harum cum doloremque accusamus deleniti accusantium totam voluptatem perspiciatis similique consequuntur autem hic!</p>
                  <a class="button is-primary" href="#">Mua</a>
                  <router-link class="button is-link" to="/">Back to Home</router-link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
	export default {
		name: 'DetailProduct'
	}
</script>

<style scoped>
    *{
        text-align: left;
    }
</style>