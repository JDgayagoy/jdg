import { execSync } from 'child_process';
import { resolve } from 'path';

const projectDir = resolve(process.cwd());
console.log('[v0] Updating pnpm lockfile...');

try {
  execSync('pnpm install --no-frozen-lockfile', {
    cwd: projectDir,
    stdio: 'inherit'
  });
  console.log('[v0] Lockfile updated successfully');
} catch (error) {
  console.error('[v0] Failed to update lockfile:', error.message);
  process.exit(1);
}
