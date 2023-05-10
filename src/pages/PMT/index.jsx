import { useEffect, useState } from 'react';

import Departments from './departments/Departmenst';
import { retrievePmtOpcr } from '../../services/requests';

function Pmt() {
  const [departments, setDepartments] = useState([]);

  // Fetch departments on server
  useEffect(() => {
    const getData = async () => {
      const fetchedData = await retrievePmtOpcr();
      setDepartments(fetchedData.opcr);
    };

    getData();
  }, []);

  return <Departments departments={departments} />;
}

export default Pmt;
