import React from 'react';
interface Props {
    date?: Date;
}

class Clock extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
        this.state = {
            date: new Date(),
            text: ''
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
            () => this.tick(),
            1000
        );
    }

    tick() {
        const d = new Date();
        const time = d.getSeconds() % 2 === 0 ? 'even' : 'odd';

        // set state
        this.setState({
            date: new Date(),
            text: time
        });
    }

    render() {
        return (
            <div>
                {/*get state*/}
                <h1>{this.state.text}</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;
