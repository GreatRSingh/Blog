// Create HTML as a string
const htmlContent = `
    <h1>Welcome to My Blog</h1>
    <p>This content is injected from JavaScript!</p>
`;

// Inject into the div with id 'content'
document.getElementById('content').innerHTML = htmlContent;
