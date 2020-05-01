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
    }
    articleActions= {
        lookUpAuthor: authorId=> this.state.authors[authorId],
    }
    render() {
        return (
            <ArticleList 
                articles= {this.state.articles}
                articleActions= {this.articleActions}
            />
        );
    }
}

export default App;