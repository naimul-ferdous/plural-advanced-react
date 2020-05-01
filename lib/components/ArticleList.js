import React from 'react';
import Article from "./Article";
const ArticleList = props => {
    console.log(Object.values(props.articles))
    return (
        <div>
            {Object.values(props.articles).map(article => (
                <Article
                    key={article.id}
                    article={article}
                    author={props.authors[article.authorId]}
                />
            ))}
        </div>
    );
};

export default ArticleList;