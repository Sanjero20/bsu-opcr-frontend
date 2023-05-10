import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './Departments.styled';
import { Input, Depts, Divider } from './Departments.styled';

function Departments({ departments }) {
  const [searchText, setSearchText] = useState('');

  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <Container>
      <Input
        placeholder="Search"
        value={searchText}
        onChange={(e) => handleSearch(e)}
      />

      <Divider>
        {departments.length != 0 &&
          departments.map((dept) => (
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
