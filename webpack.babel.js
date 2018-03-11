import path from 'path';
import webpack from 'webpack';


const config = {
    cache: true,
    entry:  {
        bundle: './src/bundle.js',
    },
    output: {
        filename: '[name].js',
        path:     path.join(__dirname, 'dist')
    },
    plugins: [
        new webpack.DefinePlugin({
            '__API_URL__': JSON.stringify('/'),
        }),
        new webpack.ExtendedAPIPlugin()
    ],
    node: {
        fs: "empty"
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                use:  ['babel-loader'],
                test:    /\.js?$/
            },
            { test: /\.css$/, use: 'css-loader/locals'},
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ]
    }
};

export default config;