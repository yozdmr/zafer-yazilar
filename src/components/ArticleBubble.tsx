import React from 'react';
import '../css/ArticleBubble.css';

interface ArticleBubbleProps {
    name: string;
    date: string;
    content: string;
}

const ArticleBubble: React.FC<ArticleBubbleProps> = ({ name, date, content }) => {
    return (
        <div className="article-bubble">
            <div className="article-header">
                <h2>{name}</h2>
                <p>{date}</p>
            </div>
            <div className="article-content">
                <p>{content}</p>
            </div>
        </div>
    );
};

export default ArticleBubble;