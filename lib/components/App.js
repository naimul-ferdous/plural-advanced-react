import React from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';
import Timestamp from './Timestamp';

// import Perf from 'react-addons-perf';  //react-addons-perf no longer works at all in React 16
// if(typeof window !== undefined) {
//     window.Perf= Perf;
// }
class App extends React.PureComponent {
    static childContextTypes = {
        store: PropTypes.object
    }
    getChildContext() {
        return {
            store: this.props.store
        }
    }
    state = this.props.store.getState();
    onStoreChange = () => {
        this.setState(this.props.store.getState())
    }
    componentDidMount() {
        this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
        this.props.store.startClock()
    }

    componentWillUnmount() {
        this.props.store.unsubscribe(this.subscriptionId)
    }

    render() {
        let { articles, searchTerm } = this.state;
        const searchRE = new RegExp(searchTerm, 'i');
        if (searchTerm) {
            articles = pickBy(articles, (value) => {
                return value.title.match(searchRE)
                    || value.body.match(searchRE)
            })
        }
        return (
            <div>
                <Timestamp />
                <SearchBar />
                <ArticleList
                    articles={articles}
                    store={this.props.store}
                />
            </div>
        );
    }
}

export default App;