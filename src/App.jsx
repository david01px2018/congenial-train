import React from 'react';

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Deal Mate AI</h1>
      <p>A versatile Chrome extension empowering users with AI agents to negotiate the best deals, from marketplace purchases to real estate, healthcare, and more.</p>
      <a href="#" className="cta-button">Coming Soon</a>
      <footer className="powered-by">
        <p>Powered by:{' '}
          <a href="https://dendrite.systems" target="_blank" rel="noopener noreferrer">Dendrite</a> |{' '}
          <a href="https://www.together.ai" target="_blank" rel="noopener noreferrer">Together.ai</a> |{' '}
          <a href="https://ai.meta.com/llama/" target="_blank" rel="noopener noreferrer">LLaMA 3.1</a>
        </p>
      </footer>
    </div>
  );
}
