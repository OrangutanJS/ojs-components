const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        OInput: './src/components/OInput/OInput',
        OButton: './src/components/OButton/OButton',
        OSelect: './src/components/OSelect/OSelect',
        OCheckbox: './src/components/OCheckbox/OCheckbox',
        ORadio: './src/components/ORadio/ORadio',
    },
    output: {
        path: path.resolve(__dirname, '../npm/components'),
        filename: '[name].js',
        library: {
            export: 'default',
            name: '[name]',
            type: 'umd',
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};
