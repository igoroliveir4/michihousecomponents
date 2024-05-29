import React, { useState } from 'react';
import GenericForm from '../components/molecules/GenericForm';
import SelectComponent from '../components/molecules/Select';

const MoleculesUsages = () => {
  const [selectedComponent, setSelectedComponent] = useState('genericForm');

  const renderComponent = (component) => {
    switch (component) {
      case 'genericForm':
        return <GenericForm fields={fields} onSubmit={() => console.log('Form submitted')} />;
      case 'select':
        return <SelectComponent options={options} value={selectedValue} onChange={handleChange} />;
      default:
        return null;
    }
  };

  const componentExplanation = {
    genericForm: 'Este componente é um formulário genérico para captura de informações. Os parâmetros necessários são fields e onSubmit.',
    select: 'Este componente é um campo de seleção. Os parâmetros necessários são options, value e onChange.'
  };

  const fields = [
    { label: 'Name', props: { type: 'text' } },
    { label: 'Email', props: { type: 'email' } },
    { label: 'Message', props: { type: 'text', multiline: true, rows: 4 } }
  ];

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '200px', backgroundColor: '#f0f6fc', padding: '20px' }}>
          <h3>Componentes da Classificação Molecula:</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li
              onClick={() => setSelectedComponent('genericForm')}
              style={{
                cursor: 'pointer',
                marginBottom: '10px',
                backgroundColor: selectedComponent === 'genericForm' ? '#e3f2fd' : 'inherit',
                padding: '5px'
              }}
            >
              GenericForm
            </li>
            <li
              onClick={() => setSelectedComponent('select')}
              style={{
                cursor: 'pointer',
                marginBottom: '10px',
                backgroundColor: selectedComponent === 'select' ? '#e3f2fd' : 'inherit',
                padding: '5px'
              }}
            >
              Select
            </li>
          </ul>
        </div>
        <div style={{ flex: 1, padding: '20px', marginLeft: '20px' }}>
          {selectedComponent && (
            <div>
              <h2>{selectedComponent.charAt(0).toUpperCase() + selectedComponent.slice(1)}</h2>
              <p><strong>Descrição:</strong> {componentExplanation[selectedComponent]}</p>
              {selectedComponent === 'button' && (
                <div>
                  <p><strong>Variants possíveis:</strong> {variantOptions[selectedComponent].join(', ')}</p>
                  <p><strong>Colors possíveis:</strong> {colorOptions[selectedComponent].join(', ')}</p>
                </div>
              )}
              {renderComponent(selectedComponent)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoleculesUsages;
