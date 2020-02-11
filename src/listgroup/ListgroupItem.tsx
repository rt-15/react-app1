import React from 'react';

interface Props {
    color?: string;
    text: string;
}

class ListgroupItem extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <li className={`list-group-item ${this.props.color}`}>
                {this.props.text}
            </li>
        );
    }
}

export default ListgroupItem;



