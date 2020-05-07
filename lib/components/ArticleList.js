import React from 'react';
import Article from "./Article";
class ArticleList extends React.PureComponent {
    render() {
        const props= this.props;
        return (
            <div>
                {Object.values(props.articles).map(article => (
                    <Article
                        key={article.id}
                        article={article}
                        store={props.store}
                    />
                ))}
            </div>
        );
    }
};

export default ArticleList;