import fs from 'fs';

const files = fs.readdirSync('.').filter(f => f.endsWith('.bat'));
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('cd /d')) {
    content = content.replace(/cd\s+\/d\s+["']?%~dp0["']?/gi, 'pushd "%~dp0"');
    if (!content.includes('popd')) {
      content = content.replace('pause', 'popd\r\npause');
    }
    fs.writeFileSync(f, content, 'utf8');
    console.log('Updated:', f);
  }
});
