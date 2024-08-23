module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gtsd : 'GT-Sectra-Display',
        product : 'ProductSans',
        clash : 'ClashDisplay'
        
      },
      colors : {
        noir : "#333333",
        blanc : "#eaeaea"
      },
      screens : {
        xs : '50px',
        lg: '1024px'
      },
      brightness: {
        0: '0',
      },
    },
  },
  plugins: [],
};
