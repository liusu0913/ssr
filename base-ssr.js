const Vue = require('vue');
const vueServerRender = require('vue-server-renderer');
const http = require('http');
const app = new Vue({
    template: '<h1>SSR Vue.js</h1>'
});
const server = http.createServer();
const render = vueServerRender.createRenderer();

server.on('request', (req, res) => {
    render.renderToString(app, (err, html) => {
        res.end(
            `<!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>SSR DEMO</title>
            </head>
            <body>
                ${html}
            </body>
            </html>`
        );
    });
});

server.listen(8080, () => {
    console.log('server is running 8080');
});
