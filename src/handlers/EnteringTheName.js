import React from 'react';

export default {

  typeName: ({ctx, name}) => ({
    arrow: 'typed',
    ctx: {...ctx, name}
  }),

  finishEnteringTheName: () => ({arrow: 'done'}),

  render: ({thisModel, ctx}) => <div>
    <p>Please, enter your name.</p>
    <input
      type="text"
      value={ctx.name}
      onChange={e => thisModel.typeName({name: e.target.value})}
      />
    <input
      type="button"
      value="Done"
      onClick={() => thisModel.finishEnteringTheName()}
      />
  </div>

};