import * as fs from 'fs';

export function loadEnvFile(envType) {
  const envFolderPath = './env';
  const envFilePath = `${envFolderPath}/.env.${envType}`;

  if (!fs.existsSync(envFilePath)) {
    return;
  }

  require('dotenv').config({ path: envFilePath });
}

export function throwMissinEnvTypeError() {
  return 'staging';
}
