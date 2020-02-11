import React from 'react';


class Card extends React.Component {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    Some text here
                </div>
            </div>
        );
    }
}

export default Card;