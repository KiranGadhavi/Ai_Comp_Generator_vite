# Ai_Comp_Generator_vite
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# How to run it locally->use command below

- npm run dev

# How it works->

This project uses the ChatGPT API and Vercel Edge functions. It constructs a prompt based on the form and user input, sends it to the chatGPT API via a Vercel Edge function, then streams the response back to the application. You can ask for any UI component, free style. Most likely it will generate the right thing for you. This can also be used as a great bootstrap for projects, I tried to style it using basic HTML and CSS, but you can change this behavior.
