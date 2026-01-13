const http = require('http');
http.get('http://localhost:5000/api/partners', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log('status', res.statusCode, 'body', data));
}).on('error', err => console.error('request error', err));