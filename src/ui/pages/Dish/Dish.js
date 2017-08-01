import React, { Component } from 'react'
import { connect } from 'react-redux'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import ShoppingIcon from './ShoppingIcon'
import './dish.css'

class Dish extends Component {

  buy = (dish , isInCart) => {
    if (isInCart) return
    console.log('buy...', dish)
    this.props.dispatch({ type: 'ADD_CART', dishId: this.props.match.params.dishId, dish: dish })
  }

  render(){
    if(Object.keys(this.props.dishes).length !== 0) {
      const { dishes } = this.props
      const { dishId } = this.props.match.params
      let dish = dishes[dishId]
      console.log('....xxx', this.props.cartDishes)
      let isInCart = Object.keys(this.props.cartDishes).includes(dishId)
      console.log('isInCart...', isInCart)
      return(
         <div className="dish">
           <TitleHeader title={dish.name} />
             <div className="dish-info">
               <div className="dish-img-wrap">
                 <div style={{ 'backgroundImage' : `url(${dish.poster})`}}
                   className="img">
                 </div>
               </div>
               <div className="dish-info-card">
                 <h1 className="dish-name">
                   {dish.name}
                 </h1>
                 <div className="price-tag">
                   {dish.price}<span className="unit">元</span>
                 </div>
                 <div onClick={() => this.buy(dish , isInCart)}
                   className="shopping-icon-wrap">
                  <ShoppingIcon color={ isInCart ? '#F86E67' : '#DEDEDE' }/>
                </div>
               </div>
             </div>
         </div>
      )
    }else {
      return null
    }
  }
}

const mapStateToProps = (state) => ({
  dishes: state.dish.all,
  cartDishes: state.cart.dishes
})

export default connect(mapStateToProps)(Dish)