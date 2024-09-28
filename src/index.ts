import {connect} from './utils/database'
import mongoose from 'mongoose';
import app from './utils/server';
import config from 'config';

const port = config.get<number>('port');
async function main() {
  try {
    await connect();
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
      console.log(err);
      
  }
}

main();
