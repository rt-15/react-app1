import React from 'react';
interface Props {}

class GetJson extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }

    sendRequest () {
        fetch('example.json')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
    };

    render() {
        return (
            <button onClick={this.sendRequest}>
                Get JSON
            </button>
        );
    }
}

export default GetJson;



