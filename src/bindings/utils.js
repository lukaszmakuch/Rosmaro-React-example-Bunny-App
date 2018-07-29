import {
  callChildren,
  mergeContexts,
  mergeArrows,
  initialValueLens as initialContextLens,
  sliceLens,
  extendArrows,
  // transparentLens,
  typeHandler,
  defaultHandler,
  partialReturns,
} from 'rosmaro-binding-utils';

export {mergeContexts, mergeArrows, sliceLens, extendArrows, callChildren, defaultHandler};

export {initialContextLens};

export const makeHandler = handlerPlan => partialReturns(typeHandler({defaultHandler})(handlerPlan))