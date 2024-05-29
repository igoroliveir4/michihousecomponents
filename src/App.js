import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, ButtonGroup } from '@mui/material';
import AtomsUsage from './usages/AtomsUsages';
import MoleculesUsage from './usages/MoleculesUsages';
import OrganismsUsage from './usages/OrganismsUsages';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('atoms');

  const renderComponent = () => {
    switch (selectedOption) {
      case 'atoms':
        return <AtomsUsage />;
      case 'molecules':
        return <MoleculesUsage />;
      case 'organisms':
        return <OrganismsUsage />;
      default:
        return null;
    }
  };

  return (
    <div style={{ backgroundColor: '#f0f6fc', minHeight: '100vh' }}>
      <AppBar position="static" style={{ backgroundColor: '#fff' }}>
        <Toolbar>
          <img src="https://www.michihouse.com.br/media/64d68da0d4ac8ef221910e4f/md" alt="MichiHouse Logo" style={{ height: '50px', marginRight: '20px' }} />
          <Typography variant="h6" style={{ flexGrow: 1 }}>Component Usage Examples</Typography>
          <ButtonGroup>
            <Button onClick={() => setSelectedOption('atoms')}>Átomos</Button>
            <Button onClick={() => setSelectedOption('molecules')}>Moléculas</Button>
            <Button onClick={() => setSelectedOption('organisms')}>Organismos</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '20px' }}>
        {renderComponent()}
      </div>
    </div>
  );
};

export default App;
