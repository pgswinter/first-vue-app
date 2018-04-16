import Vue from 'vue'
import Router from 'vue-router'
import Product from '../container/Product.vue'
import DetailProduct from '../components/DetailProduct.vue'

Vue.use(Router)

export default new Router({
  	routes: [
    	{
			path: '/',
			name: 'Product',
			component: Product
    	},
    	{
			path: '/detail',
			name: 'DetailProduct',
			component: DetailProduct
    	}
  	]
})