module.exports ={
    entry: "./script.ts",
    module: {
        rules: [
          {
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
    ],
},
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },    

};