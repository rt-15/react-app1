import React from 'react';
import ProductsList from "./ProductsList";
import Items from "./Items";

interface Props {
}
interface State {
    productPrice: number;
    items: number;
    total: number;
}

class PriceCalc extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            productPrice: 0,
            items: 0,
            total: 0
        };
    }

    handlePriceChange = (price:number) => {
        this.setState({
            productPrice: price,
            items: this.state.items,
            total: this.state.items * price
        });
    };

    handleItemsChange = (numOfItems:number) => {
        this.setState({
            productPrice: this.state.productPrice,
            items: numOfItems,
            total: this.state.productPrice * numOfItems
        });
    };

    render() {
        return (
            <div>
                <ProductsList handlePriceChange={this.handlePriceChange} />
                <Items handleItemsChange={this.handleItemsChange} />
                <p>The total price is: {this.state.total}</p>
            </div>
        );
    }
}

export default PriceCalc;



