import fs from "fs";
import PostPage, {generateStaticParams} from "./components/post-page";
import HomePage from "./components/index-page";

const posts = generateStaticParams()

for (let i = 0; i < posts.length; i++) {
    const post_html = PostPage(posts[i].slug)
    fs.writeFile('dist/posts/' + posts[i].slug +'.html', post_html, (e) => {
        console.log(e)
    })
}

const index_html = HomePage()
fs.writeFile('dist/' +'index.html', index_html, (e) => {
    console.log(e)
})