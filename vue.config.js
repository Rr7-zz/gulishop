module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://182.92.128.115",
        // 不可重写该地址，由于接口中自带了api路径（后端允许访问）
        // 上一步去除了 /api
        // pathRewrite: { "^/api": "" },
        // 任何域都会解决跨域问题
        changeOrigin: true,
      },
    },
  },
};