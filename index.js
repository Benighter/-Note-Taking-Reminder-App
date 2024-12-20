const { exec } = require('child_process');

exec('git add .', (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error}`);
    return;
  }

  exec('git branch -M main', (error, stdout, stderr) => {
    if (error) {
      console.error(`error: ${error}`);
      return;
    }

    exec('git commit -m "Automated commit"', (error, stdout, stderr) => {
      if (error) {
        console.error(`error: ${error}`);
        return;
      }

      exec('git push origin main', (error, stdout, stderr) => {
        if (error) {
          console.error(`error: ${error}`);
          return;
        }

        console.log('Changes added, committed, and pushed successfully');
      });
    });
  });
});
