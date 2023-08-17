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

module.exports = {
    normalizeURL
}