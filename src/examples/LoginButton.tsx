import React from 'react';
interface Props {}

class LoginButton extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    // This syntax ensures `this` is bound within handleClick.
    handleClick = (e: React.MouseEvent<HTMLElement>, someParm: string) => {
        console.log('this is:', this);
        console.log('which button was clicked:', e.button);
        console.log(someParm);
    };

    render() {
        return (
            <button onClick={(e) => this.handleClick(e, 'something')}>
                Click me
            </button>
        );
    }
}

export default LoginButton;



