import React from 'react';

interface Props {
    handlePriceChange: Function;
}

interface State {
    selectedPrice: number;
}

class ProductsList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedPrice: 0
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const price = +e.target.value;

        this.setState({
            selectedPrice: price
        });

        this.props.handlePriceChange(price);
    };

    render() {
        return (
            <label>
                Pick a product:
                <select value={this.state.selectedPrice}
                        onChange={this.handleChange}>
                    <option value={0} />
                    <option value={2}>Grapefruit: $2</option>
                    <option value={3}>Lime: $3</option>
                    <option value={8}>Coconut: $8</option>
                    <option value={12}>Mango: $12</option>
                </select>
            </label>
        );
    }
}

export default ProductsList;



