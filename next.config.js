const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css')
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
})
module.exports = withPlugins([withCSS, withMDX, withFonts], {pageExtensions: ['js', 'jsx', 'md', 'mdx']})
