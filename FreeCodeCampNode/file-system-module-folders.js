const { log } = require('console');
const fs = require('fs');

// create folder
// fs.mkdir('tutorial', (err) => {
//   if (err)
//     console.log(err);
//   else
//     console.log('Folder successfully created!');
// });

// delete empty folder
// fs.rmdir('tutorial', (err) => {
//   if (err)
//     console.log(err);
//   else
//     console.log('Folder successfully deleted!');
// });

// create file inside the folder
// fs.writeFile('./tutorial/example.txt', '123', (err) => {
//   if (err)
//     console.log(err);
//   else
//     console.log('File successfully created!');
// });

// delete folder which contain a file
// fs.unlink('./tutorial/example.txt', (err) => {
//   if (err)
//     console.log(err);
//   else {
//     fs.rmdir('tutorial', (err) => {
//       if (err)
//         console.log(err);
//       else
//         console.log('Folder successfully deleted!');
//     });
//   }
// });

fs.mkdir('example', (err) => {
  if (err)
    console.log(err);
  else
    console.log('Folder successfully created!');
});

// delete each file in folder
fs.readdir('example', (err, files) => {
  if (err)
    console.log(err);
  else {
    for (let file of files) {
      fs.unlink(`./example/${file}`, (err) => {
        if (err)
          console.log(err);
        else
          console.log('Each file successfully deleted!');
      });
    }
    fs.rmdir('example', (err) => {
      if (err)
        console.log(err);
      else
        console.log('Folder successfully deleted!');
    });
  }
});