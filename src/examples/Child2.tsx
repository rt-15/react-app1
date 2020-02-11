import React from 'react';

interface Props {
    countClicks: Function;
}

class Child2 extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <button onClick={()=>this.props.countClicks(0,1)}>Child #2</button>
        );
    }
}

export default Child2;



