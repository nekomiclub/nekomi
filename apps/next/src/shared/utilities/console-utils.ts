import pc from 'picocolors';



const Log = {
  debug: (...args: unknown[]) =>
    console.debug(pc.cyan('[DEBUG]'), ...args),

  info: (...args: unknown[]) =>
    console.info(pc.blue('[INFO]'), ...args),

  warn: (...args: unknown[]) =>
    console.warn(pc.yellow('[WARN]'), ...args),

  error: (...args: unknown[]) =>
    console.error(pc.red('[ERROR]'), ...args),

  success: (...args: unknown[]) =>
    console.log(pc.green('[SUCCESS]'), ...args),
};

export default Log;