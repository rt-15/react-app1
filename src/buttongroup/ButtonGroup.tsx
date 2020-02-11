import React from 'react';

interface GroupProps {
    leftButtonText: string;
    middleButtonText: string;
    rightButtonText: string;
    groupCss?: string;
    btnColor: string;
}

class ButtonGroup extends React.Component<GroupProps> {
    constructor(props: GroupProps) {
        super(props);
    }

    render() {
        const {
            leftButtonText,
            middleButtonText,
            rightButtonText,
            groupCss,
            btnColor } = this.props;

        // var btnColor = this.props.btnColor;

        return (
            <div className={`btn-group ${groupCss}`} role="group" aria-label="Basic example">
                <button type="button" className={`btn ${btnColor}`}>
                    {leftButtonText}
                </button>
                <button type="button" className={`btn ${btnColor}`}>
                    {middleButtonText}
                </button>
                <button type="button" className={`btn ${btnColor}`}>
                    {rightButtonText}
                </button>
            </div>
        );
    }
}

export default ButtonGroup;