import { paramChecker, arrayParamChecker } from './helperFunctions';

////////////////////////////
//  Request modification  //
////////////////////////////
let apiAddr =
  import.meta.env.MODE == 'development' ? 'http://localhost:5050/api' : '/api';
let routeAddr =
  import.meta.env.MODE == 'development'
    ? 'http://localhost:5050'
    : window.location.origin;

// modified get request for api path
const getAPIRequest = async (path) => {
  const response = await fetch(`${apiAddr}${path}`, {
    credentials: 'include',
  });

  return response.json();
};

// modified post request for api path
const postAPIRequest = async (path, body) => {
  const response = await fetch(`${apiAddr}${path}`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(body),
  });

  return response.json();
};

// modified post request for root path
const postRequest = async (path, body) => {
  const response = await fetch(`${routeAddr}${path}`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(body),
  });

  return response.json();
};

/////////////////////////
//  Public operations  //
/////////////////////////
export const login = async (credentialsJSON) => {
  paramChecker(['username', 'password'], credentialsJSON);
  return await postRequest('/login', credentialsJSON);
};

//////////////////////
//  PMT operations  //
//////////////////////
// retrieves all the opcr registered to the pmt account
export const retrievePmtOpcr = async () => {
  return await getAPIRequest('/pmt/read/office');
};

// marks the department's pmt as 'calibrated'
export const acceptOpcr = async (departmentIdJSON) => {
  paramChecker(['departmentID'], departmentIdJSON);
  return await postAPIRequest('/pmt/status/opcr/accept', departmentIdJSON);
};

// declines an opcr of the department/s (with limited checking)
export const declineOpcr = async (detailedOpcrArray) => {
  paramChecker(['departmentID', 'targets'], detailedOpcrArray);
  arrayParamChecker(
    ['targetID', 'successIDs'],
    detailedOpcrArray.targets,
    'targets'
  );
  return await postAPIRequest('/pmt/status/opcr/decline', detailedOpcrArray);
};

///////////////////////
//  head operations  //
// ////////////////////
// CREATES a new opcr (this also includes the pseudo-editing functionality)
export const createOpcr = async (opcrDetailsJSON) => {
  paramChecker(['opcr'], opcrDetailsJSON);
  arrayParamChecker(['target', 'keySuccess'], opcrDetailsJSON.opcr, 'opcr');
  return await postAPIRequest('/head/create/opcr/', opcrDetailsJSON);
};

export const retrieveHeadOpcr = async () => {
  return await getAPIRequest('/head/read/opcr');
};


////////////////////////
//  admin operations  //
////////////////////////
// retrieves all the campuses data
export const retrieveCampuses = async () => {
  return await getAPIRequest('/admin/read/campus');
};