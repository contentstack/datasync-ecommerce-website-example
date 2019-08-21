const config = {
  sdk: 'datasync-filesystem-sdk',
  locales: [
    {
      code: 'en-us',
      relative_url_prefix: '/'
    },
    {
      code: 'es-es',
      relative_url_prefix: '/es/'
    }
  ],
  contentStore: {
    baseDir: '_development_contents'
  },
  assetStore: {
    baseDir: '_development_contents'
  },
  port: 4000
}
module.exports = config