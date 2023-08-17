const { crawlPage } = require("./crawl")

async function main() {
    if (process.argv.length < 3) {
        console.log('no website provided')
    }
    if (process.argv.length > 3) {
        console.log('too many args provided')
    }

    const baseURL = process.argv[2]

    console.log(`Starting crawl of: ${baseURL}...`)

    await crawlPage(baseURL, baseURL, {})
}

main()