import _ from 'lodash'

export default{
	data:{
		cart:[]
	},
	add(item){
		const found = _.find(this.data.cart,{id:item.id})
		this.data.cart.push({
			id: item.id,
	        title: item.title,
	        price: item.price,
	        image: item.image,
	        quantity: 1
		})
	},
	increase(item){
		const found = _.find(this.data.cart,{id:item.id})
		const index = _.indexOf(this.data.cart, found)
		this.data.cart[index].quantity++
	},
	decrease(item){
		const found = _.find(this.data.cart,{id:item.id})
		const index = _.indexOf(this.data.cart, found)
		if(this.data.cart[index].quantity == 1){
			this.data.cart.splice(index,1)
		}else{
			this.data.cart[index].quantity--	
		}
	}
}
