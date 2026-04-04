/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        colors: {
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          primary: "hsl(var(--primary))",
          secondary: "hsl(var(--secondary))",
          muted: "hsl(var(--muted))",
          accent: "hsl(var(--accent))",
        },
      },
    },
    plugins: [],
  };