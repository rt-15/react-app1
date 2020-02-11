import React from 'react';

interface Props {
    countClicks: Function;
}

class Child1 extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <button onClick={()=>this.props.countClicks(1,0)}>Child #1</button>
        );
    }
}

export default Child1;



