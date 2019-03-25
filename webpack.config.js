const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//module.exports is a node thing (Expose a function to another file)
module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new MiniCssExtractPlugin({filename: 'styles.css'});

    return{
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
                test: /\.s?css$/,
                use:[

                    MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                ],
            }]
        },
        plugins:[
            CSSExtract
        ],

        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer:{
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true //allows client side routing
        }
    }
}
