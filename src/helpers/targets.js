import { v4 as uuid } from 'uuid';
// Functions used in editing the targets

export const createNewTargetObj = () => {
  return {
    _id: uuid(),
    target: '',
    keySuccess: [
      {
        ...createSuccessIndicatorObj(),
      },
    ],
  };
};

export const createSuccessIndicatorObj = () => {
  return {
    _id: uuid(),
    keyResult: '',
    successIndicator: '',
    comments: '',
  };
};
