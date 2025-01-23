import React from 'react';
import ArticleBubble from './ArticleBubble.tsx';
import '../css/ArticleContainer.css';

interface ArticleContainerProps {
    articles: Array<{ id: number; name: string; date: string; content: string }>;
}

const ArticleContainer: React.FC<ArticleContainerProps> = ({ articles }) => {
  return (
    <div className="article-container">
      {articles.map((article) => (
        <div key={article.id} className="flex">
          <ArticleBubble name={article.name} date={article.date} content={article.content} />
        </div>
      ))}
    </div>
  );
};

export default ArticleContainer;