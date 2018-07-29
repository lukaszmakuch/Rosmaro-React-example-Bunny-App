import {defaultHandler,  initialContextLens} from './utils';

export default () => ({

  handler: defaultHandler,

  lens: () => initialContextLens({
    name: 'Unknown person'
  })
  
});