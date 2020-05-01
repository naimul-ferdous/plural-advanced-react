import React from 'react';
import DataAPI from '../DataAPI';
import { data } from '../testData.json';
import ArticleList from './ArticleList';

const api= new DataAPI(data);

class App extends React.Component {
    constructor() {
        super();
        this.state= {
            articles: api.getArticles(),
            authors: api.getAuthors()
        }
        console.log(this.state)
    }
    render() {
        return (
            <ArticleList 
                articles= {this.state.articles}
                authors= {this.state.authors}
            />
        );
    }
}

export default App;