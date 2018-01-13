import React from 'react';

export default {

  repeat: () => ({arrow: 'repeated'}),

  render: ({ctx, thisModel}) => <div>
    <p>Thanks, {ctx.name}!</p>
    <input
      type="button"
      value="One more time!"
      onClick={() => thisModel.repeat()}
      />
  </div>

};