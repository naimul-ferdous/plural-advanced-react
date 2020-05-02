import React from 'react';
import ArticleList from './ArticleList';

class App extends React.Component {
    state= this.props.store.getState();
    render() {
        debugger;
        return (
            <ArticleList 
                articles= {this.state.articles}
                store= {this.props.store}
            />
        );
    }
}

export default App;