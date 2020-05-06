import React, { Component } from 'react';
import debounce from 'lodash.debounce';
class SearchBar extends Component {
    state= {
        searchTerm: ''
    };
    doSearch= debounce(()=> {
        this.props.doSearch(this.state.searchTerm);
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

export default SearchBar;