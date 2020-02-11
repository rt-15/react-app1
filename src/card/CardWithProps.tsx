import React from 'react';

type Props = {
    name: string
};

class CardWithProps extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    Hello, {this.props.name}
                </div>
            </div>
        );
    }
}

export default CardWithProps;