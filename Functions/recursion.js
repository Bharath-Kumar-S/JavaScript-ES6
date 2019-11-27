const fs = require('fs');
const { join } = require('path');

const traverse = (dir) => {
    const subfolders = fs.statSync(dir).isDirectory() && fs.readdirSync(dir);
    if (subfolders) {
        console.log('##### Traversing', dir);
        subfolders.forEach(path => {
            const fullpath = join(dir, path);
            traverse(fullpath);
        })
    }
}

traverse(process.cwd());

traverse('C:/Bharath/JS_Survival/super-JS');