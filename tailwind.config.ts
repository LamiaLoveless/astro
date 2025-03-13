import type { Config } from "tailwindcss";

export default {
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        avatar: {
          sm: "2rem",
          md: "3rem",
          lg: "4rem"
        }
      },
      transitionProperty: {
        avatar: "transform, box-shadow",
        image: "box-shadow"
      },
      boxShadow: {
        // 通用图片阴影
        image: "2px 2px 8px rgba(0, 0, 0, 0.1)",
        "image-hover": "4px 4px 12px rgba(0, 0, 0, 0.2)",
        // 头像专用阴影
        avatar: "0 2px 8px rgba(0, 0, 0, 0.15)",
        "avatar-hover": "0 4px 12px rgba(0, 0, 0, 0.25)"
      },

      typography: () => ({
        DEFAULT: {
          css: {
            // 通用图片样式
            img: {
              marginBottom: "2em",
              boxShadow: "var(--tw-shadow-image)", // 应用通用阴影
              transition: "box-shadow 0.3s ease",
              '&:not([class*="avatar"])': {
                marginTop: "2em",
                '&:hover': {
                  boxShadow: "var(--tw-shadow-image-hover)"
                }
              }
            },
            
            // 方形头像核心样式
            'img[class*="avatar"]': {
              marginTop: "0 !important",
              marginBottom: "0.5em",
              borderRadius: "0",
              display: "inline-block",
              verticalAlign: "middle",
              boxShadow: "var(--tw-shadow-avatar)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              objectFit: "cover",
              '&:hover': {
                transform: "scale(1.05)",
                boxShadow: "var(--tw-shadow-avatar-hover)",
                zIndex: 10,
                position: "relative"
              }
            },

            // 头像容器样式
            '.avatar-container': {
              borderRadius: "0",
              overflow: "visible",
              display: "inline-block",
              border: "1px solid #e5e7eb",
              transition: "all 0.3s ease",
              '&:hover': {
                borderColor: "transparent",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)"
              }
            },

            // 其他元素样式
            a: {
              textUnderlineOffset: "2px",
              "&:hover": {
                "@media (hover: hover)": {
                  textDecorationColor: "var(--color-link)",
                  textDecorationThickness: "2px",
                },
              },
            },
            blockquote: { borderLeftWidth: "0" },
            code: { border: "1px dotted #666", borderRadius: "2px" },
            kbd: { 
              "&:where([data-theme='dark'], [data-theme='dark'] *)": { 
                background: "var(--color-global-text)" 
              }
            },
            hr: { borderTopStyle: "dashed" },
            strong: { fontWeight: "700" },
            sup: { 
              marginInlineStart: "calc(var(--spacing) * 0.5)",
              a: {
                "&:after": { content: "']'" },
                "&:before": { content: "'['" },
                "&:hover": { 
                  "@media (hover: hover)": { color: "var(--color-link)" }
                }
              }
            },
            "tbody tr": { borderBottomWidth: "none" },
            tfoot: { borderTop: "1px dashed #666" },
            thead: { borderBottomWidth: "none" },
            "thead th": { 
              borderBottom: "1px dashed #666",
              fontWeight: "700"
            },
            'th[align="center"], td[align="center"]': { textAlign: "center" },
            'th[align="right"], td[align="right"]': { textAlign: "right" },
            'th[align="left"], td[align="left"]': { textAlign: "left" }
          },
        },
        sm: {
          css: {
            // 移动端适配
            img: {
              boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.1)",
              '&:hover': {
                boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.15)"
              }
            },
            'img[class*="avatar"]': {
              maxWidth: "80px",
              marginBottom: "0.3em",
              boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
              '&:hover': {
                transform: "scale(1.03)",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)"
              }
            },
            '.avatar-container': {
              borderWidth: "1px",
              '&:hover': {
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
              }
            }
          },
        },
      }),
    },
  },
} satisfies Config;