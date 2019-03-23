const path = require('path');

//module.exports is a node thing (Expose an object to another file)
module.exports = {

    //Where is the entry point?
    entry: './src/app.js',

    //Where to output the bundle file
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            //css-loader, style-loader (npm package)
            // loader: yarn add sass-loader node-sass
            use:['style-loader', 'css-loader', 'sass-loader'],
            test: /\.s?css$/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true //allows client side routing
        
    }
};

