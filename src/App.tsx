import React from 'react';
import ArticleContainer from './components/ArticleContainer.tsx';

function App() {
    // Sample list of articles for testing
    const articles = [
        { id: 1, name: "React Basics", date: "2024-01-23", content: "Introduction to React and JSX." },
        { id: 2, name: "State & Props", date: "2024-01-22", content: "Understanding state and props in React." },
        { id: 3, name: "Hooks in React", date: "2024-01-21", content: "Overview of React hooks like useState and useEffect." }
    ];

    return (
    <div>
        <h1>Article List</h1>
        <ArticleContainer articles={articles} />
    </div>
    );
}

export default App;
