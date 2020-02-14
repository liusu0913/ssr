import createApp from './app';

export default (content) => {
    console.log(content);
    const app = createApp();
    return app;
}