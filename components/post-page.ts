import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "./getPostMetadata";
import markdown, { getCodeString } from '@wcj/markdown-to-html';


const getPostContent = (slug) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  };

const PostPage = (postName: any) => {
  const slug = postName;

  const post = getPostContent(slug);
  return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="google-site-verification" content="wRnjLmAfsq40YMI3HuaNCsqSyThhMhNZ9DyuZj0zuig" />
  <title>Rakshit's Personal Site</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <div class="container">
    <header>
      <h1>Rakshit Kr. Singh</h1>
      <nav>
        <a href="../index.html">Home</a>
        <a href="../about.html">About</a>
        <a href="../projects.html">Projects</a>
        <a href="../posts.html">Blog</a>
        <a href="../contact.html">Contact</a>
      </nav>
    </header>

    <section class="about section">
      <h2>${post.data.title}</h2>
      <p>${post.data.subtitle}</p>
    </section>

    ${markdown(post.content)}

    <footer>
      <p>&copy; 2024 Rakshit | Built with HTML, CSS and Python</p>
    </footer>
  </div>
</body>

</html>
  `;
};

export default PostPage;

