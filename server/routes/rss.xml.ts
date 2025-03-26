import RSS from 'rss'

const runtimeConfig = useRuntimeConfig();

const feed = new RSS({
    title: 'Sarva Lekh',
    site_url: runtimeConfig.public.domain,
    feed_url: `${runtimeConfig.public.domain}/rss.xml`,
})

export default defineEventHandler(async (event) => {
    const docs = await queryCollection(event, 'blog').all()

    for (const doc of docs) {
        feed.item({
            title: doc.title ?? '-',
            url: `${runtimeConfig.public.domain}${doc.path}`,
            date: doc.posted,
            description: doc.description,
        })
    }

    const feedString = feed.xml({ indent: true })
    setHeader(event, 'content-type', 'text/xml')
    return send(event, feedString)
})
