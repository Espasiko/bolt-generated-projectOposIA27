const git = require('simple-git')();
    const repoUrl = 'URL_DEL_REPO'; // Reemplazar con tu URL
    const targetDir = 'app-oposiciones';
    
    git.clone(repoUrl, targetDir)
      .then(() => console.log('Repo clonado exitosamente'))
      .catch(err => console.error('Error:', err));
