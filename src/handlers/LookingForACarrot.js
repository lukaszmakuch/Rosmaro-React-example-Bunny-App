import React from 'react';

export default {

  lookForACarrot: () => ({arrow: 'found a carrot'}),

  render: ({thisModel}) => <div>
    <p>You don't have a carrot to give to your bunny.</p>
    <input
      type="button"
      value="Look for a carrot"
      onClick={() => thisModel.lookForACarrot()}
      />
  </div>

};