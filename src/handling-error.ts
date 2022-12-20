import fs from "fs";

fs.readFile(
  "./package.json",
  (err: NodeJS.ErrnoException | null, data: Buffer) => {
    // Error handle
    if (err) {
      console.log(err);
      return;
    }

    console.log(data);
    /*
    <Buffer 7b 0a 20 20 22 6e 61 6d 65 22 3a 20 22 6e 6f 64 65 6a 73 2d 74 75 74 6f 72 69 61 6c 22 2c 0a 20 20 22 76 65 72 73 69 6f 6e 22 3a 20 22 31 2e 30 2e 30 ... 247 more bytes
    */
  }
);
