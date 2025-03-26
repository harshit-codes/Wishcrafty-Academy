const ghpages = require('gh-pages');
const path = require('path');

console.log('Deploying to GitHub Pages...');

ghpages.publish(
  path.join(process.cwd(), 'build'),
  {
    branch: 'gh-pages',
    repo: 'https://github.com/harshit-codes/Wishcrafty-Academy.git',
    message: 'Auto-generated deployment to GitHub Pages'
  },
  (err) => {
    if (err) {
      console.error('Deployment error:', err);
      return;
    }
    console.log('Deployment completed successfully!');
  }
);
