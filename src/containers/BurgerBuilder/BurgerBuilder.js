import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/--Build_Control--'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat:1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchasable:false,
        purchasing: false
    }
 updatePurchaseState(ingredients) {
     const sum = Object.keys (ingredients)
     .map( igkey => {
         return ingredients[igkey];
     })
     .reduce((sum , el) => {
         return sum + el;
     }, 0);

     this.setState({ purchasable: sum > 0});
    }

    addIngredientHandler = ( type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;
        const priceAddition =   INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + pricreAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

removeIngredientHandler = ( type ) => {
    const oldCount = this.state.ingredients[type];
    if ( oldCount <= 0) {
        return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
        ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCount;
    const priceDedution = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState( { totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
}

purchaseHandler = () => {
    this.setState({purchasing: true});
}

purchasableCancelHandler = () => {
    this.setState({purchasing: false});
}

purchaseContinueHandler = () => {
    alert('Voce vai continuar!!!');
}

render() {
    const disabledInfo = {
        ...this.state.ingredients
    };
    for ( let key in disabledInfo ) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }
    // {salad: true , meat: false, ...}

    return (
        <React.Fragment>
           <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
            <OrderSummary 
             ingredients={this.state.ingredients}
             price={this.state.totalPrice}
             purchaseCancelled={this.purchaseCancelHandler}
             purchaseContinued={this.purchaseContinueHandler}
             />
           </Modal>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls 
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredient}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
            price={this.state.totalPrice}            />
        </React.Fragment>
    );
}



}

export default BurgerBuilder;