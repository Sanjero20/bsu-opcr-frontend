import { useContext } from 'react';

import { Container } from './Styled';
import { Input, Depts, Divider } from './Styled';

import { DepartmentContext } from '../../index';

function Landing() {
  const { department, changeMode, changeDept } = useContext(DepartmentContext);

  const selectDepartment = (id) => {
    changeMode('preview');

    const selected = department.filter((dept) => dept._id === id); ///condition lang yan
    changeDept(selected[0]);
  };

  return (
    <Container>
      <Input placeholder='Search' />
      <Divider>
        {department.length != 0 &&
          department.map((nam) => (
            <Depts key={nam._id} onClick={() => selectDepartment(nam._id)}>
              {nam.name}
            </Depts>
          ))}
      </Divider>
    </Container>
  );
}

export default Landing;
