const config = {
  sdk: 'datasync-mongodb-sdk',
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
    dbName: 'ecommerce-demo',
    collectionName: 'development',
  },
  assetStore: {
    baseDir: '../datasync-boilerplate/_contents'
  },
  port: 4000
}

module.exports = config
