import React from 'react';
import DataAPI from '../state-api';
import { data } from '../testData.json';
import ArticleList from './ArticleList';
import axios from 'axios';

const api= new DataAPI(data);

class App extends React.Component {
    state= {
        articles: this.props.initialData.articles,
        authors: this.props.initialData.authors
    }
    async componentDidMount() {
        const resp = await axios.get('/data');
        const api= new DataAPI(resp.data);
        this.setState(() => ({
            articles: api.getArticles(),
            authors: api.getAuthors()
        }));
    }
    articleActions= {
        lookUpAuthor: authorId=> this.state.authors[authorId],
    }
    render() {
        debugger;
        return (
            <ArticleList 
                articles= {this.state.articles}
                articleActions= {this.articleActions}
            />
        );
    }
}

export default App;