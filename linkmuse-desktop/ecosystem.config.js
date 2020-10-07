module.exports = [
  {
    script: './server.js',
    name: 'webapp-prod',
    max_memory_restart : '4096M',
    out_file: './logs/out.log',
    error_file: './logs/error.log',
    log_file: './logs/combined.log',
    time: true,
    env: {
      'NODE_ENV': 'production'
    }
  },
  {
    script: './server.js',
    name: 'webapp-staging',
    max_memory_restart : '2048M',
    out_file: './logs/out.log',
    error_file: './logs/error.log',
    log_file: './logs/combined.log',
    time: true,
    env: {
      'NODE_ENV': 'staging'
    }
  }
]
