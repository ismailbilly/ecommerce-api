//import mongoose from 'mongoose';
import app from './utils/server';
import config from 'config';

const port = config.get<number>('port');
async function main() {
  try {
    // await mongoose.connect(config.db_url as string);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
      console.log(err);
      
  }
}

main();
