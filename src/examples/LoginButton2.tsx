import React from 'react';
interface Props {}

class LoginButton2 extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    // This syntax ensures `this` is bound within handleClick.
    handleClick = (e: React.MouseEvent<HTMLElement>, secondParam: string) => {
        console.log('this is:', this);
        console.log('my event:', e.target);
        console.log('my other param:', secondParam);
    };

    render() {
        return (
            <button onClick={(e) => this.handleClick(e, 'something')}>
                Click me
            </button>
        );
    }
}

export default LoginButton2;



