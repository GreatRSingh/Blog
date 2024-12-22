import markdown
import sys

def generate_html(template_path, markdown_path, output_path):
    # Read the template
    with open(template_path, 'r') as file:
        template = file.read()
    
    # Read the markdown content
    with open(markdown_path, 'r') as file:
        md_content = file.read()
    
    # Convert markdown to HTML
    html_content = markdown.markdown(md_content)
    
    # Inject content into template
    final_html = template.replace("{{ content }}", html_content)
    
    # Use first markdown heading as title
    first_heading = md_content.splitlines()[0].replace("# ", "").strip()
    final_html = final_html.replace("{{ title }}", first_heading)
    
    # Write the output HTML file
    with open(output_path, 'w') as file:
        file.write(final_html)
    
    print(f"Generated: {output_path}")

# Example usage: python generate.py template.html post.md output.html
if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: python generate.py template.html post.md output.html")
    else:
        generate_html(sys.argv[1], sys.argv[2], sys.argv[3])
