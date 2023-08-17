const { JSDOM } = require('jsdom')

function normalizeURL(url) {
    const nURL = new URL(url)
    let fullUrl = `${nURL.host}${nURL.pathname}`
    if (fullUrl.includes('www.')) {
        fullUrl = fullUrl.slice(4)
    }
    if (fullUrl.slice(-1) == "/") {
        fullUrl = fullUrl.slice(0, -1)
    }
    return fullUrl
}

function getURLsFromHTML(htmlBody, baseURL) {
    const urls = []
    const dom = new JSDOM(htmlBody)
    const aElements = dom.window.document.querySelectorAll('a')
    for (const aElement of aElements) {
        if (aElement.href.slice(0, 1) === '/') {
            try {
                urls.push(new URL(aElement.href, baseURL).href)
            } catch (err) {
                console.log(`${err.message}: ${aElement.href}`)
            }
        } else {
            try {
                urls.push(new URL(aElement.href).href)
            } catch (err) {
                console.log(`${err.message}: ${aElement.href}`)
            }
        }
    }
    return urls
}



module.exports = {
    normalizeURL,
    getURLsFromHTML
}