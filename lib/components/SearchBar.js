import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider'
class SearchBar extends Component {
    state= {
        searchTerm: ''
    };
    doSearch= debounce(()=> {
        this.props.store.setSearchTerm(this.state.searchTerm);
    }, 300)
    handleSearch= (event)=> {
        this.setState({searchTerm: event.target.value}, ()=> {
            this.doSearch();
        })
    }
    render() {
        return (
            <div>
                <input
                    type="search"
                    placeholder="Enter Search Term"
                    onChange={this.handleSearch}
                    value= {this.state.searchTerm}
                />
            </div>
        );
    }
}

export default storeProvider()(SearchBar);