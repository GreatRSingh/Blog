import markdown
import sys
import os

def generate_html(template_folder_path, post_folder_path):
    """
    - Read the index-template.html
    - Recursively read files in posts folder
    """

    # Read the template
    templates = {}
    for templateName in os.listdir(template_folder_path):
        templatePath = os.path.join(template_folder_path, templateName)
        with open(templatePath, 'r') as file:
            templates[templateName] = file.read()

    postPreview = """
            <ul>
"""

    # Read the post contents
    for filename in os.listdir(post_folder_path):
        file_path = os.path.join(post_folder_path, filename)

        with open(file_path, 'r') as f:
            metadata, content = f.read().split('----')

            title, subtitle, date = metadata.splitlines()
            link = os.path.join('posts', filename.replace("md", "html"))
            
            postPreview += """
                <li>
                    <a href="{}">{}</a> [{}]
                    <p class="subtitle">{}</p>
                </li>
""".format(link, title, date, subtitle)
            

            postHeading = """
        <section class="about section">
            <h2>{}</h2>
            <p>{}</p>
        </section>
""".format(title, subtitle)
            
            postContent = markdown.markdown(content,         extensions=[
            'extra',  # Tables, footnotes, and more
            'toc',    # Table of contents
            'fenced_code',  # Code blocks
            'nl2br'   # Line breaks
        ])

            # Inject content into post-template
            post_html = templates['post-template.html'].replace("{{ post-heading-content }}", postHeading)
            post_html = post_html.replace("{{ post-body-content }}", postContent)

            # Write the output HTML file
            with open('dist/'+link, 'w') as file:
                file.write(post_html)
    
            print(f"Generated: {link}")




    postPreview += """
            </ul>
"""

    # Inject content into index-template
    index_html = templates['index-template.html'].replace("{{ post-preview-content }}", postPreview)
    
    # Write the output HTML file
    with open("dist/index.html", 'w') as file:
        file.write(index_html)
    
    print(f"Generated: {"dist/index.html"}")

# Example usage: python generate.py template.html post.md output.html
if __name__ == "__main__":
    generate_html("templates", "posts")
