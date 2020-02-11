import React from 'react';
import ListgroupItem from "./ListgroupItem";


interface Props {
    items: Array<string> // ['first', 'second', 'third']
}

class Listgroup2 extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <ul className="list-group">
                {
                    this.props.items.map((item:string, index) => {
                        return <ListgroupItem key={index} text={item} />
                    })
                }
            </ul>
        );
    }
}

export default Listgroup2;



