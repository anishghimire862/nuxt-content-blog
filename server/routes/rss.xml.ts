import RSS from 'rss'

const feed = new RSS({
    title: 'Sarva Lekh',
    site_url: 'https://sarvalekh.com',
    feed_url: `https://sarvalekh.com/rss.xml`,
})

export default defineEventHandler(async (event) => {
    const docs = await queryCollection(event, 'blog').all()

    for (const doc of docs) {
        feed.item({
            title: doc.title ?? '-',
            url: `https://sarvalekh.com${doc.path}`,
            date: doc.posted,
            description: doc.description,
        })
    }

    const feedString = feed.xml({ indent: true })
    setHeader(event, 'content-type', 'text/xml')
    return send(event, feedString)
})
