// 客户端 Markdown 渲染
$(document).ready(function () {
    // 获取 id 为 body 里面的文本
    var text = $.ajax({
            url: "./file/rules.md",
            async: false
        }).responseText,

        // 设定渲染后的位置为 id 为 MDOut 的 div
        target = document.getElementById('main'),

        // 开启表格和删除线功能（因为默认是关闭的）
        converter = new showdown.Converter({
            tables: true,
            strikethrough: true
        }),

        // Markdown 文本转换成 html
        html = converter.makeHtml(text);

    // 放置 html
    target.innerHTML = html;
});
