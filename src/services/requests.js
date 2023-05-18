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

// modified delete request for api
const deleteAPIRequest = async (path) => {
  const response = await fetch(`${apiAddr}${path}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: { 'Content-type': 'application/json' }
  });

  return response.json();
}

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

// retrieves a specific opcr by the provided id
export const retrieveDepartmentOpcr = async (departmentID) => {
  return await getAPIRequest(`/pmt/read/office/${departmentID}`);
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
// registers a new pmt account
export const registerPmt = async (creds) => {
  paramChecker(['username', 'password'], creds);
  return await postRequest('/register/pmt', creds);
};

// registers a new head account
export const registerHead = async (creds) => {
  paramChecker(['username', 'password'], creds);
  return await postRequest('/register/head', creds);
};

// deletes head account
export const deleteHead = async (id) => {
  return await deleteAPIRequest(`/admin/delete/account/head/${id}`);
};

// deletes a pmt account
export const deletePmt = async (id) => {
  return await deleteAPIRequest(`/admin/delete/account/pmt/${id}`);
};

// retrieves all the campuses data
export const retrieveCampuses = async () => {
  return await getAPIRequest('/admin/read/campus');
};

// retrieves the head account data
export const retrieveHeadAccount = async () => {
  return await getAPIRequest('/admin/read/account/head');
};

// retrieves the pmt account data
export const retrievePmtAccount = async () => {
  return await getAPIRequest('/admin/read/account/pmt');
};

// adds the new campus to the list
export const addCampusData = async (campusData) => {
  paramChecker(['campusName', 'departmentDetails'], campusData);
  arrayParamChecker(['name'], campusData.departmentDetails, 'deptDetails');
  return await postAPIRequest('/admin/create/campus', campusData);
};

// deletes a campus by id
export const deleteCampus = async (campusID) => {
  return await deleteAPIRequest(`/admin/delete/campus/${campusID}`);
};

// assigns a department and campus to the account
export const assignHeadOffice = async (accOfficeDetails) => {
  paramChecker(['campusID', 'departmentID', 'accountID'], accOfficeDetails);
  return await postAPIRequest('/admin/assign/account/head', accOfficeDetails);
};

// assigns a campus to the pmt account
export const assignPmtCampus = async (accCampusDetails) => {
  paramChecker(['campusID', 'accountID'], accCampusDetails);
  return await postAPIRequest('/admin/assign/account/pmt', accCampusDetails);
};