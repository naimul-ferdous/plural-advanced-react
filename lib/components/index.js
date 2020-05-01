import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state= {
        answer: 42
    }
    asyncFunc= () => {
        return Promise.resolve(37);
    }
    async componentDidMount() {
        this.setState({
            answer: await this.asyncFunc()
        })
    }
    render() {
        return (
            <div>
                <h2>I wanna die lying in your arms. -- {this.state.answer}</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);