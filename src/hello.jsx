import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component {
    render() {
        return (
            <div>
            hello     
            </div>
        )
    }
}

ReactDOM.render(<Hello />, document.getElementById('app'))
