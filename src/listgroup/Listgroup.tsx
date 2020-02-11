import React from 'react';
import ListgroupItem from "./ListgroupItem";


interface Props {
    listColor: string;
}

class Listgroup extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <ul className="list-group">
                <ListgroupItem text="Cras justo odio" color={this.props.listColor} />
                <ListgroupItem text="Second" color={this.props.listColor} />
                <ListgroupItem text="Three" />
            </ul>
        );
    }
}

export default Listgroup;



