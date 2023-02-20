import React from 'react';
import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
        <div className='footer'>
            <p>Active tasks: {this.props.backlog.length}</p>
            <p>Finished tasks: {this.props.finished.length}</p>
        </div>
        )
    }
}
export default Footer;

