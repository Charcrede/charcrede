const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  // Ajout de configurations spécifiques
  configureWebpack: {
    // Par exemple, pour ajouter des alias
    resolve: {
      alias: {
        '@components': '@/components',
        '@assets': '@/assets',
        '@views': '@/views',
      },
    },
  },
  devServer: {
    // Configuration du serveur de développement
    port: 8080, // ou le port que vous préférez
  },
  css: {
    // Configuration pour pré-traiter le CSS
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/_variables.scss";`,
      },
    },
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(pdf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash:8].[ext]',
                outputPath: 'assets',
              },
            },
          ],
        },
      ],
    },
  },
});
