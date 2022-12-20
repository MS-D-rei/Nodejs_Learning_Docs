import fs from 'fs';
fs.readFile('./package.json', (err, data) => {
    // Error handle
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});
