const data = require("./data");
const http = require("http");
const hostname = "localhost";
const port = 3035;

http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    res.setHeader("Access-Control-Max-Age", 60 * 60 * 24 * 30);

    if (req.method == "GET") {
      const searchParams = new URL(req.url, `http://${req.headers.host}`)
        .searchParams;

      const searchVal = searchParams.get("searchVal");
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
      res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
      res.setHeader("Access-Control-Max-Age", 2592000);
      res.setHeader('Access-Control-Allow-Headers', 'authorization, content-type');

      if (!searchVal) {
        res.write(JSON.stringify(data));
        return res.end();
      }

      const filteredData = data?.filter(
        (item) =>
          item._id.includes(searchVal) ||
          item.isActive.includes(searchVal) ||
          item.price.includes(searchVal) ||
          item.name.includes(searchVal) ||
          item.about.includes(searchVal) ||
          item.tags.includes(searchVal) ||
          item.picture.includes(searchVal)
      );

      res.write(JSON.stringify(filteredData));
      return res.end();
    } else {
      res.write("Unknown method");
      return res.end();
    }
  })
  .listen(port);

console.log(`[Server running on ${hostname}:${port}]`);
