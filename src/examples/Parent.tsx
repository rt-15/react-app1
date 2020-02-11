import React from 'react';
import Child1 from "./Child1";
import Child2 from "./Child2";

interface Props {}
interface State {
    child1Clicks: number;
    child2Clicks: number;
}

class Parent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            child1Clicks: 0,
            child2Clicks: 0
        };
    }

    countClicks = (child1Click:number, child2Click:number) => {
        this.setState({
            child1Clicks: this.state.child1Clicks + child1Click,
            child2Clicks: this.state.child2Clicks + child2Click
        })
    };

    render() {
        return (
            <div>
                <p>
                    Total clicks on child #1: {this.state.child1Clicks}
                </p>
                <p>
                    Total clicks on child #2: {this.state.child2Clicks}
                </p>
                <div>
                    <Child1 countClicks={this.countClicks} />
                    <Child2 countClicks={this.countClicks} />
                </div>
            </div>
        );
    }
}

export default Parent;



