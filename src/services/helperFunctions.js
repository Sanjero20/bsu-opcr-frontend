////////////////////////
//  Helper functions  //
////////////////////////
// helper functions that will help for json formatting
export const paramChecker = (params, jsonObj) => {
  const missedParams = [];
  params.forEach((param) => {
    if (!jsonObj[param]) missedParams.push(param);
  });

  if (missedParams.length > 0) {
    missedParams.forEach((p) => {
      console.error(p);
    });

    throw 'MissedRequestParams';
  }
};

// this param checker checks the object values of array if these
// object has the needed key-value pairs
export const arrayParamChecker = (arrayParam, arrayValues, arrayKey = '') => {
  const missedParams = [];
  for (let i = 0; i < arrayValues.length; i++) {
    const jsonObj = arrayValues[i];
    for (let j = 0; j < arrayParam.length; j++) {
      if (!jsonObj[arrayParam[j]])
        missedParams.push(`${arrayKey}:${arrayParam[j]}`);
    }
  }

  if (missedParams.length > 0) {
    missedParams.forEach((p) => {
      console.error(p);
    });

    throw 'MissedRequestParams';
  }
};
