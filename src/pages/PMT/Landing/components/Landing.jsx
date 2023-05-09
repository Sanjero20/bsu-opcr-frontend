import { useContext, useState, useEffect } from 'react';

import { Container } from './Styled';
import { Input, Depts, Divider } from './Styled';

import { DepartmentContext } from '../../index';

function Landing() {
  const [searchText, setSearchText] = useState('');
  const [color, setColor] = useState('');

  function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useEffect(() => {
    setColor(generateRandomColor());
  }, []);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
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
            <Depts
              style={{ backgroundColor: color }}
              key={nam._id}
              onClick={() => selectDepartment(nam._id)}
            >
              {nam.name}
            </Depts>
          ))}
      </Divider>
    </Container>
  );
}

export default Landing;
