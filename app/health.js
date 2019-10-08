import moment from 'moment';
import { Response } from '../services';

export const handler = async (event, context) => {
  const body = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`Ok - ${moment()}`);
    }, 2000);
  });

  return Response(200, body);
};
