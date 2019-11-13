'use strict'

exports.config = {
  app_name: ['Gallery'],
  license_key: '9f567ea3d817e258f225326e41bb29307efad904',
  logging: {
    level: 'trace',
    filepath: '../../../newrelic_agent.log'
  },
  utilization: {
    detect_aws: false,
    detect_pcf: false,
    detect_azure: false,
    detect_gcp: false,
    detect_docker: false
  },
  transaction_tracer: {
    enabled: true
  }
}
