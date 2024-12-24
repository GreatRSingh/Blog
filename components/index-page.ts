import getPostMetadata from "./getPostMetadata";

const HomePage = () => {

  const postMetadata = getPostMetadata();

  let postPreview = `
                <ul>
  `
  
  for (let i = 0; i < postMetadata.length; i++) {
    postPreview += `
                    <li>
                    <a href="${'posts/' + postMetadata[i].slug + '.html'}">${postMetadata[i].title}</a> [${postMetadata[i].date}]
                    <p class="subtitle">${postMetadata[i].subtitle}</p>
                    </li>
    `
  }
  postPreview += `
                </ul>
  `

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="google-site-verification" content="wRnjLmAfsq40YMI3HuaNCsqSyThhMhNZ9DyuZj0zuig" />
    <meta name="description" content="A personal blog by Rakshit exploring a variety of topics from Pokémon to everyday life. Featuring a simple, old-school design with markdown-rendered posts and a nostalgic feel." />    <title>Rakshit's Personal Site</title>
    <link rel="stylesheet" href="style/mobile.css" media="(max-width: 800px)">
    <link rel="stylesheet" href="style/desktop.css" media="(min-width: 800px)">
    <link rel="canonical" href="https://greatrsingh.in/">
</head>
<body>
    <div class="container">
        <header>
            <h1>Rakshit Kr. Singh</h1>
            <nav>
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="projects.html">Projects</a>
                <a href="posts.html">Blog</a>
                <a href="contact.html">Contact</a>
            </nav>
        </header>
        
        <section class="about section">
            <h2>About Me</h2>
            <p>Hello! I'm Rakshit, an ML Engineer passionate about building things and exploring the world of Pokémon. I love contributing to open-source projects and sharing my thoughts through writing.</p>
        </section>
        
        <section class="projects section">
            <h2>Projects</h2>
            <ul>
                <li>
                    <a href="projects/ml4e.html">ML4E - Machine Learning for Everyone</a>
                    <p class="subtitle">A community-driven initiative to make ML accessible to all.</p>
                </li>
                <li>
                    <a href="projects/gsoc.html">Google Summer of Code 2023</a>
                    <p class="subtitle">My journey and contributions to open-source during GSoC.</p>
                </li>
            </ul>
        </section>
        
        <section class="recent-posts section">
            <h2>Recent Blog Posts</h2>
            ${postPreview}
        </section>
        
        <footer>
            <p>&copy; 2024 Rakshit | Built with HTML, CSS and Python</p>
        </footer>
    </div>
</body>
</html>`
  ;
};

export default HomePage;
