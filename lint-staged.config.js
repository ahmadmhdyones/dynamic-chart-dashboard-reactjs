export default {
  '**/*.{js,jsx,ts,tsx,json,html,css,scss,md}': stagedFiles => [`prettier --write ${stagedFiles.join(' ')}`],
  '**/*.{js,jsx,ts,tsx}': () => [`eslint --fix --config eslint.config.js`],
};
