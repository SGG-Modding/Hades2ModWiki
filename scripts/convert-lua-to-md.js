#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// convert-lua-to-md.js
// Converts .lua files to .md by wrapping their contents in a fenced lua block
// and adding YAML frontmatter with the filename as the title.
// Usage: node scripts/convert-lua-to-md.js [dir] [--recursive] [--dry-run]

const argv = process.argv.slice(2);
if (argv.includes('--help') || argv.includes('-h')) {
  console.log('Usage: node scripts/convert-lua-to-md.js [dir] [--recursive] [--dry-run]');
  process.exit(0);
}

const dirArg = argv.find(a => !a.startsWith('--')) || process.cwd();
const startDir = path.resolve(dirArg);
const recursive = argv.includes('--recursive');
const dryRun = argv.includes('--dry-run');

function listLuaFiles(dir) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (recursive) out.push(...listLuaFiles(full));
      continue;
    }
    if (e.name.endsWith('.lua')) {
      // skip .git and node_modules
      if (full.includes(path.sep + '.git' + path.sep)) continue;
      if (full.includes(path.sep + 'node_modules' + path.sep)) continue;
      out.push(full);
    }
  }
  return out;
}

try {
  const files = listLuaFiles(startDir);
  if (files.length === 0) {
    console.log('No .lua files found in', startDir);
    process.exit(0);
  }

  let converted = 0;
  for (const luaPath of files) {
    const base = path.basename(luaPath);
    const title = base; // e.g. rom.config.lua
    const mdPath = luaPath.replace(/\.lua$/, '.md');
    const luaContent = fs.readFileSync(luaPath, 'utf8').replace(/\r\n/g, '\n');
    const trimmed = luaContent.replace(/\n+$/, '\n');

    // Compose markdown with frontmatter and fenced lua block
    const mdLines = [
      '---',
      'title: ' + title,
      '---',
      '',
      '```lua',
      trimmed,
      '```',
      ''
    ];
    const md = mdLines.join('\n');

    if (dryRun) {
      console.log(`[dry-run] would create: ${mdPath}`);
    } else {
      fs.writeFileSync(mdPath, md, 'utf8');
      fs.unlinkSync(luaPath);
      console.log(`Converted: ${luaPath} -> ${mdPath}`);
      converted++;
    }
  }

  console.log(`Done. Converted ${converted} files.`);
} catch (err) {
  console.error('Error:', err && err.message ? err.message : err);
  process.exit(2);
}
