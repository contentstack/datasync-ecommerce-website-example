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
    baseDir: '../../datasync-boilerplate/_development_contents'
  },
  assetStore: {
    baseDir: '../../datasync-boilerplate/_development_contents'
  },
  port: 4000
}
module.exports = config