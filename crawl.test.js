const { test, expect } = require('@jest/globals')
const { normalizeURL } = require('./crawl.js')

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