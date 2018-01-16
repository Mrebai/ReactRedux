

var webpack = require("webpack");
var path    = require("path")

var DIST_DIR = path.resolve(__dirname);
var SRC = path.resolve(__dirname,"src");

var config = {
    entry: SRC + "/index.js",
    output: {
        path: DIST_DIR + "/dist/assets",
        filename:"bundle.js",

    },

    module:{
        loaders:[
            {
                test: /\.js?/,
                exclude: /(node_modules)/,
                loader:"babel-loader",
                query: {
                    presets:["react" , "es2015" , "stage-2"]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            },
        ]
    }

};

module.exports = config;