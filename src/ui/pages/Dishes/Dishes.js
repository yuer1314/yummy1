import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Dishes extends Component {
  render(){
    const { dishes } = this.props
    if(Object.keys(dishes).length !== 0){
      console.log('+++++', Object.keys(dishes))
      return(
        <div className="dishes">
          { Object.keys(dishes).map(id => (
              <li key={id}>
                <Link to={`/dish/${id}`}>
                  {dishes[id].name }
                </Link>
              </li>
            ))
          }
        </div>
      )
    }else{
      return null
    }
  }
}

const mapStateToProps = (state) => ({
  dishes: state.dish.all
})

export default connect(mapStateToProps)(Dishes)