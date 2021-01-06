const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    basePath: '/hawaii',
    assetPrefix: isProd ? 'https://tinaandcarlton.com/hawaii' : '',
}