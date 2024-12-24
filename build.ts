import fs from 'fs';
import PostPage, {generateStaticParams} from "./components/post-page";
import HomePage from "./components/index-page";


// Building Folder Structure
fs.mkdirSync('dist')
fs.mkdirSync('dist/posts')

// Copy the sitemap and style
fs.copyFileSync('sitemap.txt', 'dist/sitemap.txt');
fs.copyFileSync('style.css', 'dist/style.css');


const posts = generateStaticParams()

// Generate post pages
for (let i = 0; i < posts.length; i++) {
    const post_html = PostPage(posts[i].slug)
    fs.writeFile('dist/posts/' + posts[i].slug +'.html', post_html, (e) => {
        console.log(e)
    })
}

// Generate home page
const index_html = HomePage()
fs.writeFile('dist/' +'index.html', index_html, (e) => {
    console.log(e)
})