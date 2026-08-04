import type { MetadataRoute } from 'next'
import { getBlogs } from '@/lib/blogs'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getBlogs()

  const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `https://jdgayagoy.is-a.dev/blogs/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [
    {
      url: 'https://jdgayagoy.is-a.dev',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://jdgayagoy.is-a.dev/projects',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://jdgayagoy.is-a.dev/blogs',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogEntries,
  ]
}
