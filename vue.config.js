const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "": {
        target: "https://apis.netstart.cn/mogujie/",
        changeOrigin: true,
        // headers: {

        // },
      },
    },
  }
})