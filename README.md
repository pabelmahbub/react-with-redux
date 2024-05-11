# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
# How to start a react-redux app:

a. create an app: 
```npm create vite@latest
```
```
b.name the project name and choose react and Typescript and install: npm I
```
```
c.to run app: npm run dev
it will open in port 5173
to run it in 3000:
in vite.config.ts:

export default define Config({
plugins: [react()],
server: {
  port: 3000
},
terminal re-open.
```
```
d. delete app.css file and App.jsx, index.css need modifications
```
```
e.to install tailwind in the app go to URL: tailwindcss.com/docs/installation
npm install -D tailwindcss postcss autoprefixer
npm tailwind init -p
Then in tailwind.config.js change accordingly:
content:['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

then in index.css:
@tailwind base
@tailwind components
@tailwind utilities

to check: className='bg-red-600' -> npm run dev
```
