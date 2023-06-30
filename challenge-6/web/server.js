const express = require('express');
const {exec} = require('child_process');
const app = express();
const port = 5000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  const folder = req.query.folder;
  if (folder) {
    // Run the command with the parameter the user gives us
    exec(`ls -l ${folder}`, (error, stdout, stderr) => {
      let output = stdout;
      if (error) {
        // If there are any errors, show that
        output = error; 
      }
      res.render('index', { output: output, folder: folder });
    });
  } else {
    // Handle the case when folder parameter is not provided
    const defaultFolder = '/home/node';
    exec(`ls -l ${defaultFolder}`, (error, stdout, stderr) => {
      let output = stdout;
      if (error) {
        // If there are any errors, show that
        output = error;
      }
      res.render('index', { output: output, folder: defaultFolder });
    });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
