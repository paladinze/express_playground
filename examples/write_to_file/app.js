const http = require('http');
const fs = require('fs');

const reqListener = (req, res) => {
  const { url, method } = req;
  if (url === '/') {
    res.setHeader('content-type', 'text/html');
    res.write('<html>')
    res.write('<head><title>my title</title></head>')
    res.write('<body><form action="/message" method="POST"><input name="message" type="text"><button type="submit">Send</button></form></body>')
    res.write('</html>')
    return res.end();
  }
  if(url === '/message' && method === "POST") {
    const bufferList = [];
    req.on('data', (chunk) => {
      bufferList.push(chunk);
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(bufferList).toString();
      fs.writeFile('message.txt', parsedBody, () => {});
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  // console.log({url: req.url, method: req.method, header: req.headers});
  res.setHeader('content-type', 'text/html');
  res.write('<html>')
  res.write('<head><title>my title</title></head>')
  res.write('<body><h1>Greeting from nodejs</h1></body>')
  res.write('</html>')
}

const server = http.createServer(reqListener);
server.listen(2000);