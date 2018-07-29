import React from 'react'
import {makeHandler, callChildren} from './utils';

const View = ({theBunny, carrotControls}) => <div>
    {theBunny}
    <hr/>
    {carrotControls}
  </div>;

export default () => ({

  handler: makeHandler({

    RENDER: ({action, context, children}) => {
      const childrenResults = callChildren({action, context, children});

      // childrenResults.result['TheBunny'].effect,
      // childrenResults.result['CarrotControls'].effect,

      return <View 
        theBunny={childrenResults.result['TheBunny'].data}
        carrotControls={childrenResults.result['CarrotControls'].data}
        />

    },

  })

});