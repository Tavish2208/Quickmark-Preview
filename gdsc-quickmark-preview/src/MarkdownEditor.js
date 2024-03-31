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

 const handleBold = () => {
  // Assuming you have a reference to the textarea element
  const textarea = document.querySelector('.markdown-editor textarea');
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const selectedText = textarea.value.substring(start, end);
 
  if (selectedText) {
     // If there's a selection, wrap it with **
     const newText = textarea.value.substring(0, start) + '**' + selectedText + '**' + textarea.value.substring(end);
     setMarkdownText(newText);
     // Update the cursor position to be inside the bold formatting
     textarea.selectionStart = start + 2;
     textarea.selectionEnd = end + 2;
  } else {
     // If there's no selection, insert ** at the cursor position
     const newText = textarea.value.substring(0, start) + '**' + textarea.value.substring(start);
     setMarkdownText(newText);
     // Move the cursor inside the bold formatting
     textarea.selectionStart = start + 2;
     textarea.selectionEnd = start + 2;
  }
 };

 const handleItalic = () => {
  // Assuming you have a reference to the textarea element
  const textarea = document.querySelector('.markdown-editor textarea');
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const selectedText = textarea.value.substring(start, end);
 
  if (selectedText) {
     // If there's a selection, wrap it with _
     const newText = textarea.value.substring(0, start) + '*' + selectedText + '*' + textarea.value.substring(end);
     setMarkdownText(newText);
     // Update the cursor position to be inside the italic formatting
     textarea.selectionStart = start + 1;
     textarea.selectionEnd = end + 1;
  } else {
     // If there's no selection, insert _ at the cursor position
     const newText = textarea.value.substring(0, start) + '*' + textarea.value.substring(start);
     setMarkdownText(newText);
     // Move the cursor inside the italic formatting
     textarea.selectionStart = start + 1;
     textarea.selectionEnd = start + 1;
  }
 };

 const handleHeader = (level) => {
  // Assuming you have a reference to the textarea element
  const textarea = document.querySelector('.markdown-editor textarea');
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const selectedText = textarea.value.substring(start, end);
 
  // Determine the header markdown syntax based on the level
  const headerSyntax = '#'.repeat(level) + '# ';
 
  if (selectedText) {
     // If there's a selection, wrap it with the header syntax
     const newText = textarea.value.substring(0, start) + headerSyntax + selectedText + textarea.value.substring(end);
     setMarkdownText(newText);
     // Update the cursor position to be after the header syntax
     textarea.selectionStart = start + headerSyntax.length;
     textarea.selectionEnd = end + headerSyntax.length;
  } else {
     // If there's no selection, insert the header syntax at the cursor position
     const newText = textarea.value.substring(0, start) + headerSyntax + textarea.value.substring(start);
     setMarkdownText(newText);
     // Move the cursor after the header syntax
     textarea.selectionStart = start + headerSyntax.length;
     textarea.selectionEnd = start + headerSyntax.length;
  }
  };

  const handleLink = () => {
    // Assuming you have a reference to the textarea element
    const textarea = document.querySelector('.markdown-editor textarea');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
   
    // Prompt the user to enter a URL and link text
    const url = prompt('Enter the URL for the link:');
    const linkText = prompt('Enter the link text:');
   
    // Determine the link markdown syntax
    const linkSyntax = `[${linkText}](${url})`;
   
    if (selectedText) {
       // If there's a selection, wrap it with the link syntax
       const newText = textarea.value.substring(0, start) + linkSyntax + textarea.value.substring(end);
       setMarkdownText(newText);
       // Update the cursor position to be after the link syntax
       textarea.selectionStart = start + linkSyntax.length;
       textarea.selectionEnd = end + linkSyntax.length;
    } else {
       // If there's no selection, insert the link syntax at the cursor position
       const newText = textarea.value.substring(0, start) + linkSyntax + textarea.value.substring(start);
       setMarkdownText(newText);
       // Move the cursor after the link syntax
       textarea.selectionStart = start + linkSyntax.length;
       textarea.selectionEnd = start + linkSyntax.length;
    }
    };

    const handleImage = () => {
      // Assuming you have a reference to the textarea element
      const textarea = document.querySelector('.markdown-editor textarea');
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
     
      // Prompt the user to enter an image URL and optionally alt text
      const url = prompt('Enter the image URL:');
      const altText = prompt('Enter the alt text (optional):');
     
      // Determine the image markdown syntax
      const imageSyntax = `![${altText || ''}](${url})`;
     
      // Insert the image markdown syntax at the cursor position
      const newText = textarea.value.substring(0, start) + imageSyntax + textarea.value.substring(end);
      setMarkdownText(newText);
     
      // Move the cursor after the image syntax
      textarea.selectionStart = start + imageSyntax.length;
      textarea.selectionEnd = start + imageSyntax.length;
      };

 // Add more formatting functions as needed

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
      <div className="toolbar">
        <button onClick={handleBold}>Bold</button>
        <button onClick={handleItalic}>Italic</button>
        <button onClick={handleHeader}>Header</button>
        <button onClick={handleLink}>Link</button>
        <button onClick={handleImage}>Image</button>
        {/* Add more buttons as needed */}
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
