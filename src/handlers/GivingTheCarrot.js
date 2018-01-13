import React from 'react';

export default {

  giveTheCarrot: () => ({arrow: 'gave the carrot'}),

  render: ({thisModel}) => <div>
    <p>You have a carrot. You can give it to your bunny.</p>
    <input
      type="button"
      value="Give the carrot"
      onClick={() => thisModel.giveTheCarrot()}
      />
  </div>

};