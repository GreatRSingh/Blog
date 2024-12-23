import markdown
from markdown.extensions import Extension
from markdown.extensions.toc import TocExtension
from markdown.extensions.fenced_code import FencedCodeExtension
from markdown.extensions.nl2br import Nl2BrExtension
from markdown.extensions.extra import ExtraExtension
import sys

def generate_html(template_path, markdown_path, output_path):
    # Read the template
    with open(template_path, 'r', encoding='utf-8') as file:
        template = file.read()
    
    # Read the markdown content
    with open(markdown_path, 'r', encoding='utf-8') as file:
        md_content = file.read()
    
    # Convert markdown to HTML with extensions
    html_content = markdown.markdown(
        md_content,
        extensions=[
            'extra',  # Tables, footnotes, and more
            'toc',    # Table of contents
            'fenced_code',  # Code blocks
            'nl2br'   # Line breaks
        ]
    )
    
    # Inject content into template
    final_html = template.replace("{{ content }}", html_content)
    
    # Use first markdown heading as title
    title = "Untitled Post"
    for line in md_content.splitlines():
        if line.startswith("# "):  # First level heading
            title = line.replace("# ", "").strip()
            break
    
    final_html = final_html.replace("{{ title }}", title)
    
    # Write the output HTML file
    with open(output_path, 'w', encoding='utf-8') as file:
        file.write(final_html)
    
    print(f"Generated: {output_path}")

# Example usage: python generate.py template.html post.md output.html
if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python generate.py template.html post.md output.html")
    else:
        generate_html(sys.argv[1], sys.argv[2], sys.argv[3])
