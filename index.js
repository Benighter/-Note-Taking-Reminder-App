const { exec } = require('child_process');

exec('git remote add origin https://github.com/Benighter/-Note-Taking-Reminder-App.git', (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error}`);
    return;
  }

  exec('git add .', (error, stdout, stderr) => {
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
