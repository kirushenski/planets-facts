/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [{ source: '/', destination: '/earth', permanent: true }]
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: {
        loader: '@svgr/webpack',
        options: {
          prettier: false,
          svgo: true,
          svgoConfig: {
            plugins: [{ name: 'preset-default', params: { overrides: { removeViewBox: false } } }],
          },
          titleProp: true,
        },
      },
    })
    return config
  },
}
