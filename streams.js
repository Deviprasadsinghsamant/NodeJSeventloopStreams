const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //.....................................................
  //   //solution 1
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  //.....................................................
  //   //SOLUTION 2: USING STREAMS
  //   const readable = fs.createReadStream("test-file.txt");
  //   readable.on("data", (chunk) => {
  //     //chunk is that piece of data
  //     res.write(chunk); //res is a writable stream
  //   });
  //   //below line exists because we need to end it as soon as the file is completely read and streamed using chunks
  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   //change the name to see the error
  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("File not found");
  //   });
  //...........................................
  //SOLUTION 3:(because of backpressure)(using pipe function)[refer notes]
  //............................................

  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);

  //readableSource.pipe(writableDestination)
});

server.listen(8000, () => {
  console.log(`running server`);
});
