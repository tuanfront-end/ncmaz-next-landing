const nextCoreWebVitals = require('eslint-config-next/core-web-vitals')

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  { ignores: ['.next/**', 'next-env.d.ts'] },
  ...nextCoreWebVitals,
]
