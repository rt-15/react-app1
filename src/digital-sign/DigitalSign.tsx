import React from 'react';

interface Props {
    sentence: string;
    changePerMillisecond: number;

}

interface State {
    words: Array<string>;
    wordsCounter: number;
}

class DigitalSign extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);
        this.state = {
            words: this.props.sentence.split(" "),
            wordsCounter: 0,
        };
    }

    timerId: any = -1;

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    componentDidMount(): void {
        this.timerId = setInterval(
            () => this.displayNextWord(),
            this.props.changePerMillisecond
        )
    }

    displayNextWord () {
        // console.log('wordsCounter=', this.state.wordsCounter);

        const nextCounter =
            (this.state.wordsCounter === this.state.words.length-1) ?
                0 : this.state.wordsCounter +1;

        this.setState({
            wordsCounter: nextCounter
        })
    }

    render() {
        return (
            <h1 className="text-center p-5 bg-secondary text-white">
                {this.state.words[this.state.wordsCounter]}
            </h1>
        );
    }
}

export default DigitalSign;