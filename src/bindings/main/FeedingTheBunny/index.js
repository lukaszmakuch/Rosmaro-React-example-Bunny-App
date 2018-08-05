import React from 'react';

const View = ({theBunny, carrotControls}) => 
  <div>
    {theBunny}
    <hr/>
    {carrotControls}
  </div>;

export default ({utils: {makeHandler, callChildren}}) => ({

  handler: makeHandler({

    RENDER: ({action, context, children}) => {
      const childrenResults = callChildren({action, context, children});

      return <View 
        theBunny={childrenResults.result['TheBunny'].data}
        carrotControls={childrenResults.result['CarrotControls'].data}
        />;
    },

  })

});