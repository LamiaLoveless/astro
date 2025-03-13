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
      // 新增动效配置
      transitionProperty: {
        avatar: "transform, box-shadow",
      },
      boxShadow: {
        avatar: "0 2px 8px rgba(0, 0, 0, 0.15)",
        "avatar-hover": "0 4px 12px rgba(0, 0, 0, 0.25)"
      },

      typography: () => ({
        DEFAULT: {
          css: {
            img: {
              marginBottom: "2em",
              '&:not([class*="avatar"])': {
                marginTop: "2em"
              }
            },
            
            // 方形头像核心样式（带悬停）
            'img[class*="avatar"]': {
              marginTop: "0 !important",
              marginBottom: "0.5em",
              borderRadius: "0", // 保持方形
              display: "inline-block",
              verticalAlign: "middle",
              boxShadow: "var(--tw-shadow)", // 使用配置的阴影
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", // 平滑过渡
              objectFit: "cover",
              '&:hover': {
                transform: "scale(1.05)", // 缩放效果
                boxShadow: "var(--tw-shadow-colored)", // 悬停阴影
                zIndex: 10, // 防止被其他元素覆盖
                position: "relative"
              }
            },

            // 容器样式
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

            // 其他原有样式...
            a: {
              textUnderlineOffset: "2px",
              "&:hover": {
                "@media (hover: hover)": {
                  textDecorationColor: "var(--color-link)",
                  textDecorationThickness: "2px",
                },
              },
            },
            // ...保持其他样式不变
          },
        },
        sm: {
          css: {
            'img[class*="avatar"]': {
              maxWidth: "80px",
              marginBottom: "0.3em",
              '&:hover': {
                transform: "scale(1.03)" // 移动端缩放幅度减小
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