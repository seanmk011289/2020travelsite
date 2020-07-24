const path = require('path');

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('postcss-hexrgba'),
    require('autoprefixer')
]

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    mode: 'development',
    //SETTING UP WEBPACK DEV SERVER
    devServer: {
        before: function(app, server){
            server._watch('./app/**/*.html')
        },
        contentBase: path.join(__dirname, 'app'),
        watchContentBase: true,
        hot: true,
        port: 8000,
        host: '0.0.0.0'
    },
    // watch: true,
    //CSS LOADER CODE
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            }
        ]
    }
}