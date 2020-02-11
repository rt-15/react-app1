import React from 'react';

interface Props {
    handleItemsChange: Function;
}

interface State {
    numOfItems: number;
}

class Items extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            numOfItems: 0
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const items = +e.target.value;

        this.setState({
            numOfItems: items
        });

        this.props.handleItemsChange(items);
    };

    render() {
        return (
            <div>
                <label>
                    Number of items:
                    <input type="number"
                           min={0}
                           value={this.state.numOfItems}
                           onChange={this.handleChange} />
                </label>
            </div>
        );
    }
}

export default Items;



