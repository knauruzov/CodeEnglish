const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if package.json exists
const packageJsonPath = path.join(__dirname, 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.error('package.json not found');
  process.exit(1);
}

// Read package.json
const packageJson = require('./package.json');

// Check Tailwind CSS version
const tailwindVersion = packageJson.dependencies.tailwindcss;
console.log(`Current Tailwind CSS version: ${tailwindVersion}`);

// Create proper tailwind.config.js
const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
        success: '#38c172',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}`;

// Create proper postcss.config.js
const postcssConfig = `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`;

// Write files
fs.writeFileSync(path.join(__dirname, 'tailwind.config.js'), tailwindConfig);
console.log('Generated tailwind.config.js');

fs.writeFileSync(path.join(__dirname, 'postcss.config.js'), postcssConfig);
console.log('Generated postcss.config.js');

console.log('Attempting to reinstall dependencies...');
try {
  // Uninstall existing packages
  execSync('npm uninstall tailwindcss postcss autoprefixer', { stdio: 'inherit' });
  
  // Install specific versions
  execSync('npm install tailwindcss@3.3.3 postcss@8.4.29 autoprefixer@10.4.15 --save-exact', { stdio: 'inherit' });
  
  console.log('Dependencies reinstalled successfully');
} catch (error) {
  console.error('Failed to reinstall dependencies:', error.message);
}

console.log('Tailwind CSS configuration has been updated. Try running your app now.'); 