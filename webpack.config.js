module.exports = {
    entry: {
        bundle: './src/hello.jsx' 
    },
    output: {
        path: './built',
        // publicPath: './built',
        filename: '[name].js'
    },
    // resolve: {
    //     extensions: ['', '.js', '.jsx']
    // },
    devServer: {
        inline: true,
        port: 6969
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}