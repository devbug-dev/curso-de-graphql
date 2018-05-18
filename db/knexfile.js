module.exports = {
  development: {
    client: 'mariasql',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'user_graphql',
      password: 'user_graphql',
      db: 'bd_graphql'
    }
    
  },
  production: {}
};