// src/MarkdownEditor.js
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdownText, setMarkdownText] = useState(`# Welcome to Markdown Previewer!

  Edit the text below to see real-time previews.

  **Format your text using the toolbar or shortcuts!**

  `);

  const handleInputChange = (event) => {
    setMarkdownText(event.target.value);
  };

  return (
    <div className="markdown-container">
      <div>
      <img className="logo" src="https://gdscsrm.com/assets/img/logo.png" alt="My Logo" />
    </div>
      <div className ="head">
      <h1>
        Quickmark Preview
      </h1>
    </div>
      <div className="markdown-editor">
        <h3>Editor</h3>
        <textarea
          value={markdownText}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="markdown-preview">
        <h3>Preview</h3>
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </div>
      </div>
  );

};

export default MarkdownEditor;