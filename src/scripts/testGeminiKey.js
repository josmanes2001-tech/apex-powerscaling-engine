import https from 'https';

const apiKey = process.env.GEMINI_API_KEY || '';

async function testModel(modelName) {
  return new Promise((resolve) => {
    const postData = JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: 'Responde exclusivamente JSON: {"status": "ok", "model": "' + modelName + '"}' }] }],
      generationConfig: { response_mime_type: 'application/json' }
    });

    const req = https.request({
      hostname: 'generativelanguage.googleapis.com',
      path: `/v1beta/models/${modelName}:generateContent?key=${apiKey}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        resolve({ model: modelName, status: res.statusCode, body: body.slice(0, 200) });
      });
    });
    req.on('error', e => resolve({ model: modelName, error: e.message }));
    req.write(postData);
    req.end();
  });
}

const models = [
  'gemini-3.6-flash',
  'gemini-2.5-flash',
  'gemini-2.5-flash-lite',
  'gemini-3.5-flash-lite',
  'gemini-1.5-flash'
];

for (const m of models) {
  const res = await testModel(m);
  console.log(`[${m}] -> HTTP ${res.status}: ${res.body || res.error}`);
}
