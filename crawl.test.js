const { test, expect } = require('@jest/globals')
const { normalizeURL, getURLsFromHTML } = require('./crawl.js')


test('normalizeURL www', () => {
    expect(normalizeURL('https://www.nodejs.org/en')).toBe('nodejs.org/en')
})
test('normalizeURL protocols', () => {
    expect(normalizeURL('https://nodejs.org/en')).toBe('nodejs.org/en')
})
test('normalizeURL http', () => {
    expect(normalizeURL('http://nodejs.org/en/?&')).toBe('nodejs.org/en')
})
test('normalizeURL additional characters', () => {
    expect(normalizeURL('https://nodejs.org/en/?&')).toBe('nodejs.org/en')
})

test('getURLsFromHTML absolute path', () => {
    const baseUrl = 'https://nodejs.org/ru/about'
    const body = '<html><body><a href="https://nodejs.org/ru/about/governance"><span>nodejs.org></span></a></body></html>'
    const result = ['https://nodejs.org/ru/about/governance']
    expect(getURLsFromHTML(body, baseUrl)).toEqual(result)
})

test('getURLsFromHTML both', () => {
    const baseUrl = 'https://nodejs.org/ru/about'
    const body = '<html><body><a href="/path/one"><span>Boot.dev></span></a><a href="https://nodejs.org/path/one"><span>nodejs.org></span></a></body></html>'
    const result = ['https://nodejs.org/path/one', 'https://nodejs.org/path/one']
    expect(getURLsFromHTML(body, baseUrl)).toEqual(result)
})