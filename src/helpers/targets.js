import { v4 as uuid } from 'uuid';
// Functions used in editing the targets

export const createNewTargetObj = () => {
  return {
    id: uuid(),
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
    id: uuid(),
    keyResult: '',
    successIndicator: '',
  };
};
