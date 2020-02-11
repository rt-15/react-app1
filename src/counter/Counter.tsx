import React from 'react';

interface Props {
    increment: number;
}

interface State {
    count: number;
}

class Counter extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    timerId: any = -1;

    // before
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    // after
    componentDidMount() {
        this.timerId = setInterval(
            () => this.increment(),
            1000
        );
    }

    increment() {
        // set state
        this.setState({
            count: this.state.count + this.props.increment
        });
    }


    render() {
        return (
            <div>
                {/*get state*/}
                <div>{this.state.count}</div>
            </div>
        );
    }
}

export default Counter;
