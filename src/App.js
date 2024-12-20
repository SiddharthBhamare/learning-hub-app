import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <header>
        <h1>Welcome to Your Learning Hub</h1>
        <p>Dive into the most comprehensive guides and tutorials, designed for excellence.</p>
      </header>
      <main>
        <div>
          <h2>Table of Contents</h2>
          <h3>Browse through the topics below to expand your knowledge and skills in programming:</h3>
        </div>
        <ul>
          <li><a href="/Pages/solid_principles.html">SOLID Principles</a></li>
          <li><a href="/Pages/oop_concepts.html">OOP Concepts</a></li>
          <li><a href="/Pages/design_patterns.html">Design Patterns</a></li>
          <li><a href="/Pages/aspnet_core.html">ASP.NET Core</a></li>
          <li><a href="/Pages/rabbitmq.html">RabbitMQ</a></li>
          <li><a href="/Pages/complete_identity_server_guide.html">Identity Server Guide</a></li>
          <li><a href="/Pages/multithreading.html">Multithreading and Parallel Programming</a></li>
          <li><a href="/Pages/graphql.html">GraphQL with HotChocolate</a></li>
          <li><a href="/Pages/cicd_xunit.html">CI/CD Pipelines and XUnit Basics</a></li>
          <li><a href="/Pages/sql.html">SQL</a></li>
          <li><a href="/Pages/postgresql.html">PostgreSQL</a></li>
        </ul>
      </main>
      <footer>
        <p>Made with 💻 and ❤️ for continuous learning. Keep exploring and evolving!</p>
      </footer>
    </Router>
  );
};

export default App;
