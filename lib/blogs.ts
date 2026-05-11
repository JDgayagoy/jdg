import fs from 'fs';
import path from 'path';

export interface Blog {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    content: string;
    image: string;
}

export async function getBlogs(): Promise<Blog[]> {
    const blogDir = path.join(process.cwd(), 'public', 'blog');

    // Check if directory exists
    if (!fs.existsSync(blogDir)) {
        return [];
    }

    const files = fs.readdirSync(blogDir);
    const blogs: Blog[] = [];

    for (const file of files) {
        if (file.endsWith('.md')) {
            const filePath = path.join(blogDir, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const slug = file.replace('.md', '');

            // Basic parsing since no frontmatter
            const lines = content.split('\n');
            const title = lines[0].replace('# ', '').trim() || slug;

            // Extract first paragraph for excerpt
            let excerpt = "";
            for (let i = 1; i < lines.length; i++) {
                const line = lines[i].trim();
                if (line && !line.startsWith('>') && !line.startsWith('---') && !line.startsWith('#') && !line.startsWith('**')) {
                    excerpt = line;
                    break;
                }
            }

            // Determine image based on slug
            let image = '/images/blog1.webp';
            if (slug === 'self-hosted-n8n') {
                image = '/images/selfhostn8n.jpg';
            } else if (slug === 'internship') {
                image = '/images/internship.jpg';
            }

            // Determine date and category
            let date = "May 2, 2026";
            let category = "Tutorial";
            
            if (slug === 'internship') {
                date = "May 3, 2026";
                category = "Career";
            }

            blogs.push({
                slug,
                title,
                excerpt,
                date,
                readTime: "5 min read",
                category,
                content,
                image
            });
        }
    }

    return blogs;
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
    const filePath = path.join(process.cwd(), 'public', 'blog', `${slug}.md`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const title = lines[0].replace('# ', '').trim() || slug;

    let excerpt = "";
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line && !line.startsWith('>') && !line.startsWith('---') && !line.startsWith('#') && !line.startsWith('**')) {
            excerpt = line;
            break;
        }
    }

    // Determine image based on slug
    let image = '/images/blog1.webp';
    if (slug === 'self-hosted-n8n') {
        image = '/images/blog_n8n_deployment.png';
    } else if (slug === 'internship') {
        image = '/images/internship.jpg';
    }

    // Determine date and category
    let date = "May 2, 2026";
    let category = "Tutorial";
    
    if (slug === 'internship') {
        date = "May 3, 2026";
        category = "Career";
    }

    return {
        slug,
        title,
        excerpt,
        date,
        readTime: "5 min read",
        category,
        content,
        image
    };
}

