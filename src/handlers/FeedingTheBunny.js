import React from 'react';

export default {

  afterRender: res => <div>
    {res.TheBunny}
    <hr/>
    {res.CarrotControls}
  </div>

};