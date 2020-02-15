import createApp from './app';

export default (context) => {
    return new Promise((reslove, reject) => {
        const { app, store, App } = createApp();
        let components = App.components; // 获取到业务所有的子组件
        let asyncDataPromiseFns = [];
        // 筛选出所有的需要提前渲染数据的组件；
        Object.values(components).forEach(component => {
            if (component.asyncData) {
                asyncDataPromiseFns.push(component.asyncData({ store }));
            }
        });
        Promise.all(asyncDataPromiseFns).then((data) => {
            // 当使用 template 时，context.state 将作为 window.__INITIAL_STATE__ 状态，自动嵌入到最终的 HTML 中
            context.state = store.state;
            reslove(app);
        }, reject);
    });
}