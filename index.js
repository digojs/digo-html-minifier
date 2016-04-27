var htmlMinifier = require("html-minifier");

module.exports = function HtmlMinifier(file, options) {

    // 设置默认值。
    options = Object.assign({
        collapseWhitespace: true,
        removeComments: true,
        minifyJS: true,
        minifyCSS: true
    }, options);

    // 生成。
    try {
        file.content = htmlMinifier.minify(file.content, options);
    } catch (e) {
        file.error({
            plugin: HtmlMinifier.name,
            error: e,
            message: e.message
        });
    }

};
