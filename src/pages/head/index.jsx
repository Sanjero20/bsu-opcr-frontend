import { useState } from 'react';

import Preview from './preview/Preview';
import Edit from './edit/Edit';

import { Container } from '../../components/ui/Container.styled';
import { Button, ButtonContainer } from '../../components/ui/Button.styled';

function Head() {
  const [targets, setTargets] = useState([]);

  const [isOnPreview, setIsOnPreview] = useState(true);

  const toggleState = () => {
    setIsOnPreview(!isOnPreview);
  };

  return (
    <Container>
      <p>Status: {}</p>

      {isOnPreview ? (
        <Preview targets={targets} />
      ) : (
        <Edit targets={targets} setTargets={setTargets} />
      )}

      <ButtonContainer>
        <Button yellow onClick={toggleState}>
          {isOnPreview ? <>Edit</> : <>Preview</>}
        </Button>

        {isOnPreview ? <Button>Submit</Button> : <Button>Reset</Button>}
      </ButtonContainer>
    </Container>
  );
}

export default Head;