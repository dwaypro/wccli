const path = require('path');
const { exec } = require('child_process');
const fs = require('fs');
const http = require('http');
const webpack = require('webpack');
const componentName = path.basename(__dirname);
// http://192.168.10.50:3094/
const hostName = "localhost";
const port = 3094;
const updateRoute = "/updateComponent";
const fileName = "main.js";
const contentBase = "./dist";
const encoding = "utf-8"
const buildRoute = "/build";
// stuffffff...
module.exports = {
  mode: 'development',
  entry: { app: './src/index.js' },

  output: {
    filename: fileName,
    path: path.resolve(__dirname, 'dist')
  },

  devtool: 'inline-source-map',
  devServer: {
    contentBase: contentBase,
    hot: true,
    // using an older version of webpack... 
    // middleware function that allows us to send requests directly to the dev server, allowing us to execute other 
    // automation tasks... 
    after: function (app, server, compiler) {
      // route for the browser to hit triggering the build process and ultimately the http post request
      app.get(buildRoute, function (req, res) {
        res.json({ data: "building" });
        exec('npm run build', (err, stdout, stderr) => {
          // handle errors... 
          if (err) {
          }

          console.log('build finished!');
          const payload = JSON.stringify({
            "componentName": componentName,
            "buildFile": fs.readFileSync('./dist/main.js', encoding)
          });

          const options = {
            method: 'POST',
            hostname: hostName,
            port: port,
            path: updateRoute,
            headers: {
              'Content-Type': 'application/json',
              'Content-Length': Buffer.byteLength(payload)
            }
          }

          const req = http.request(options, (res) => {            
            process.stdout.write(' Body: ');
            res.pipe(process.stdout);
            res.on('end', () => { console.log('\n end') });
          })
          req.on('error', (err) => console.log('Error: ', err));
          req.on('response', (res) => {
          })
          req.end(payload);
        });
      });
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: { loader: 'html-loader' }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },

    ],
  },
  externals: {

  }

};