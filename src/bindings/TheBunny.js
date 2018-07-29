import {
  defaultHandler,
  sliceLens
} from './utils';

export default () => ({

  lens: () => sliceLens('bunny'),

  handler: defaultHandler,

});