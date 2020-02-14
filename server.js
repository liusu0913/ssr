const http = require('http');
const server = http.createServer();
const { createBundleRenderer } = require('vue-server-renderer');

const template = require('fs').readFileSync('./dist/index_server.html', 'utf-8');
const serverBundle = require('./dist/vue-ssr-server-bundle.json');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');

const renderer = createBundleRenderer(serverBundle, {
    template,
    clientManifest
});
server.on('request', (req, res) => {
    const url = req.url;
    if (url === '/') {
        renderer.renderToString((err, html) => {
            res.end(html);
        });
    }
});

server.listen(8080, () => {
    console.log('server is running: 8080');
})