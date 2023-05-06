import { ContentHolder, Separator } from './Admin.styled';

const Admin = () => {
  return (
    <Separator>
      <ContentHolder>
        <div className="gridItem">
          {/* <CampusLoader campuses={['Alangilan', 'Main', 'Pablo Borbon']} /> */}
        </div>
      </ContentHolder>
    </Separator>
  );
};

export default Admin;