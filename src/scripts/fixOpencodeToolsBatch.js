import fs from 'fs';
import path from 'path';

const dir = 'opencode-tools';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.bat'));
files.forEach(f => {
  const full = path.join(dir, f);
  let content = fs.readFileSync(full, 'utf8');
  if (content.includes('cd /d')) {
    content = content.replace(/cd\s+\/d\s+["']?%~dp0\\?\.\.["']?/gi, 'pushd "%~dp0\\.."');
    if (!content.includes('popd')) {
      content = content.replace('pause', 'popd\r\npause');
    }
    fs.writeFileSync(full, content, 'utf8');
    console.log('Updated:', f);
  }
});
