import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './Departments.styled';
import { Input, Depts, Divider } from './Departments.styled';

function Departments({ departments }) {
  const [search, setSearchText] = useState('');

  const navigate = useNavigate();

  // const handleSearch = (e) => {
  //   setSearchText(e.target.value);
  // };

  return (
    <Container>
      <Input
        placeholder='Search'
        value={search}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <Divider>
        {departments.length != 0 &&
          departments
            .filter((dept) => {
              return search.toLocaleLowerCase() === ''
                ? dept
                : dept.name.toLowerCase().includes(search);
            })
            .map((dept) => (
              <Depts key={dept._id} onClick={() => navigate(dept._id)}>
                {dept.name}
              </Depts>
            ))}
      </Divider>
    </Container>
  );
}

export default Departments;

Departments.propTypes = {
  departments: PropTypes.array,
};
