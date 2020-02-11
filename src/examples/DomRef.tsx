import React from 'react';
interface Props {}

class DomRef extends React.Component<Props> {
    inputField:any;

    constructor(props: Props) {
        super(props);
        this.inputField = React.createRef();
    }

    componentDidMount() {
        this.inputField.current.focus();
    }

    render() {
        return (
            <div>
                <div><input type="text" ref={this.inputField} /></div>
                <div><input type="password" /></div>
            </div>
        );
    }
}

export default DomRef;



