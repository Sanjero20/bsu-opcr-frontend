import {
  CampusHolder,
  CampusListContainer,
  CLHeader,
  CreateButton,
  Input,
  LowerInputContainer,
  TextButton,
} from './CampusLoader.styled';

// container for button with text type (will have onclick values soon)
const CampusTextButton = ({ text }) => {
  return <TextButton>{text}</TextButton>;
};

// Input container component (will have onclick values soon)
const ValueInput = () => {
  return (
    <LowerInputContainer>
      <Input />
      <CreateButton>Create</CreateButton>
    </LowerInputContainer>
  );
};

// Form that contains the list of clickable campuses
export const CampusLoader = ({ campuses }) => {
  return (
    <CampusHolder>
      <div className="separator">
        <CampusListContainer>
          <CLHeader>Campuses</CLHeader>
          {campuses.length > 0 ? (
            campuses.map((value, index) => (
              <CampusTextButton text={value} key={index} />
            ))
          ) : (
            <></>
          )}
        </CampusListContainer>
      </div>
      <ValueInput />
    </CampusHolder>
  );
};
