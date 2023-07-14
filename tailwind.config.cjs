/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  future: { hoverOnlyWhenSupported: true },
  theme: {
    colors: {
      darkgray: '#333333', // 文章
      sub: '#858585', // 補足文章
      critical: '#ef4b4b', // エラー
      warning: '#ffc107', // 注意
      success: '#28a745', // 処理完了
      disabled: '#CECECE', // 無効な要素
      on: '#CECECE', // 塗りつぶしの上に使う色
      link: '#0085c7', // リンク
      focused: '#FF5720', // フォーカス
      base: '#ffffff', // 背景色(70%)
      main: '#808080', // イメージカラー(25%)
      accent: '#000000', // 大事な情報(5%)
    },
    fontSize: {
      sm: '1.4rem', // 14px
      rg: '1.6rem', // 16px
      lg: '2.2rem', // 22px
      xl: '2.8rem', // 28px
      exl: '4.6rem', // 46px
    },
    fontWeight: { th: 100, rg: 300, bd: 600, eb: 800 },
    extend: {
      fontFamily: {
        custom: ['line-seed-jp'],
      },
      cursor: {
        fancy: 'url(hand.cur), pointer',
      },
    },
  },
  plugins: [],
};
