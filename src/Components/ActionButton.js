import React from 'react'

import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';


class ActionButton extends React.Component {

    render() {
        let display = this.props.icon
        if (this.props.selected) {
            display = this.props.selectedIcon
        }

        return (
            <Tooltip title={this.props.toolTip} style={{visibility: this.props.visibility ? this.props.visibility : "visible"}}>
                <IconButton aria-label={this.props.label} onClick={(event) => this.props.onButtonClick(event)}>
                    {display}
                </IconButton>
            </Tooltip>

        )
    }
}

export default ActionButton