<template>
	<div>
		<p>
			<!-- use router-link component for navigation. -->
			<!-- specify the link by passing the `to` prop. -->
			<!-- `<router-link>` will be rendered as an `<a>` tag by default -->
			<!-- <router-link to="/">Home</router-link>
			<router-link to="/detail">Detail</router-link> -->
			<!-- <font-awesome-icon icon="cart-plus" /> -->
		</p>
		<!-- route outlet -->
		<!-- component matched by the route will render here -->
		<router-view></router-view>
	</div>
</template>

<script>
	// import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
	export default{
		name: 'Navigation',
		components:{
			// FontAwesomeIcon
		}
	}
</script>