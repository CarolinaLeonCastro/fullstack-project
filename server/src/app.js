import app from './config/app.config.js';
import { config } from './config/env.config.js';
import { connect } from './config/database.config.js';

const [major, minor] = process.versions.node.split('.').map( parseFloat )

if(major < 20  || major === 20 && minor <= 0)
{
  console.error('--- The node version of the server is too low for modern node programming');
  process.exit(1);
}

connect();

const server = app.listen(config.port, () => {
  console.info(`Server is running on port ${config.port}`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.info('Server closed');
  });
});
