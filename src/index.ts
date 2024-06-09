import app from './app';
import { ServerInit } from './config/server.init';

(async () => {
  const initializeServer = new ServerInit(app);

  try {
    const [server] = await Promise.all([initializeServer.initialize()]);
  } catch (err) {
    console.error('Error occurred during initialization:', err);
    process.exit(1);
  }
})();
