const config = {
  sdk: 'contentstack-mongodb-sdk',
  contentstack: {
    apikey: '',
    deliveryToken: '',
    locales: [{
        code: 'en-us',
        relative_url_prefix: '/'
      },
      {
        code: 'es-es',
        relative_url_prefix: '/es/'
      }
    ]
  },
  options: {
  
  },
  port: '4000'
}

module.exports = config
