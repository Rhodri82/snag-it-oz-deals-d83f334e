import type { Config } from "tailwindcss";

export default {
  // Enable dark mode based on class
  darkMode: ["class"],

  // Define paths to all template files that contain Tailwind class names
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  prefix: "",

  // Customize Tailwind theme
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.5rem",
        lg: "2rem",
      },
      // Define screen sizes for responsiveness
      screens: {
        sm: "640px", // Mobile
        md: "768px", // Tablet
        lg: "1024px", // Desktop
        xl: "1200px", // Large Desktop
        "2xl": "1400px", // Extra Large Desktop
      },
    },

    // Extend the default Tailwind theme
    extend: {
      // Define font family
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif", // Fallback font
        ], // Inter is our primary font, with system-ui and sans-serif as fallbacks
      },
      // Define custom colors using CSS variables for theming
      colors: {
        // Default values (these can be overridden by CSS variables)
        border: "hsl(var(--border))", // #e0e0e0 or #333333
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Primary colors (branding)
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        
        // Secondary colors (call-to-action, buttons)
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        // Accent colors (for alerts, success messages)
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          info: "hsl(var(--accent-info))",
          success: "hsl(var(--accent-success))",
          warning: "hsl(var(--accent-warning))",
          tag: "hsl(var(--accent-tag))",
        },

        // Destructive colors (errors, deletes)
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        // Muted colors (secondary text, placeholders)
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        // Popover colors (dropdowns)
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        
        // Card colors (cards, containers)
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // To help visualizing the color palette:
        // - Use a tool like https://uicolors.app/ to see how the colors work together
        // - Try pasting the color variables into a CSS file to preview in your browser
        //   e.g. .color-preview {
        //          background-color: hsl(var(--primary));
        //          color: hsl(var(--primary-foreground));
        //        }
      },
      // Define custom border radius values
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // Define custom keyframes for animations
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      // Define custom animations using the keyframes
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // Define plugins
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
