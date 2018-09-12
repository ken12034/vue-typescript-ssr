const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')
// using webpack-merge so we don't have to repeat common configuration attributes twice
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: { 
    'main-client': './src/client.js' ,
    'main-server': './src/server.js'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.ts', '.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  output: {
    filename: '[name].js',
    publicPath: '/dist/',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      },

      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true,
        },
      },

      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            url: false,
            postLoaders: {
              html: 'babel-loader',
            },
            publicPath: './src/',
          },
        },
      },

      {
        test:  /\.(css|sass|scss)$/,
        oneOf: [
          // this matches `<style module>`
          {
            resourceQuery: /module/,
            use: [
              
              
              //'vue-style-loader',
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[local]_[hash:base64:5]'
                }
              },
              
              {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
              }
            ]
          },
          // this matches plain `<style>` or `<style scoped>`
          {
            use: [
              'vue-style-loader',
              'css-loader'
            ]
          }
        ]

      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { modules: true }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [ 
    new MiniCssExtractPlugin({
      filename: 'public/css/main.css',
    }),
    new VueLoaderPlugin()
  ]



}
