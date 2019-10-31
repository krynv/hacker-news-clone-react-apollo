import React from 'react'

class Link extends React.Component {
    render() {
        return (
            <div>
                {this.props.link.description} ({this.props.link.url})
            </div>
        )
    }
}

export default Link;