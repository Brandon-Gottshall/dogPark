const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})
const withCSS = require('@zeit/next-css')
module.exports = withPlugins([withCSS, withMDX], {pageExtensions: ['js', 'jsx', 'md', 'mdx']})
