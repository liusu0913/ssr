const http = require('http');
const server = http.createServer();
const { createBundleRenderer } = require('vue-server-renderer');

const template = require('fs').readFileSync('./dist/index_server.html', 'utf-8');
const serverBundle = require('./dist/vue-ssr-server-bundle.json');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');
const path = require('path');
const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template,
    clientManifest
});
server.on('request', (req, res) => {
    const url = req.url;
    if (url.indexOf('.js') > -1) {
        res.writeHead(200, {'Content-Type': 'application/x-javascript'});
        res.end(require('fs').readFileSync(path.resolve(__dirname, `./dist${url}`)));
    } else {
        renderer.renderToString({
            url
        },(err, html) => {
            if (err) {
                console.log(html, err);
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(html);
        });
    }
});

server.listen(8080, () => {
    console.log('server is running: 8080');
});