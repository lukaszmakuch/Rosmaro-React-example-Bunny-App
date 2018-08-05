export default ({utils: {defaultHandler, sliceLens}}) => ({

  lens: () => sliceLens('bunny'),

  handler: defaultHandler,

});