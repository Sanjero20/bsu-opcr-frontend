import { useEffect, useState, createContext } from 'react';

import Preview from './preview/Preview';
import { retrievePmtOpcr } from '../../services/requests';
import Landing from './Landing/components/Landing';

export const DepartmentContext = createContext();

function Pmt() {
  const [department, setDepartment] = useState([]);
  const [opcr, setOpcr] = useState([]);
  const [selectedDepartment, setselectedDepartment] = useState([]);

  const [mode, setMode] = useState('landing');

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await retrievePmtOpcr();
      setDepartment(fetchedData.opcr);
    };

    getData();
  }, []);

  const changeMode = (mode) => {
    setMode(mode);
  };

  const changeDept = (dept) => {
    setselectedDepartment(dept);
  };
  console.log(selectedDepartment);
  return (
    <DepartmentContext.Provider value={{ department, changeMode, changeDept }}>
      {mode == 'landing' && <Landing />}

      {mode == 'edit' && <>akjdfakjldf</>}

      {mode == 'preview' && <Preview targets={selectedDepartment.opcr} />}
    </DepartmentContext.Provider>
  );
}

export default Pmt;
