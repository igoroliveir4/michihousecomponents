import React, { useState } from 'react';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';

const AtomsUsage = () => {
  const [selectedComponent, setSelectedComponent] = useState('input');

  const renderComponent = (component) => {
    switch (component) {
      case 'input':
        return <Input value="" onChange={() => { }} placeholder="Digite algo..." />;
      case 'button':
        return <Button label="Teste" variant="text" color="success" onClick={() => { console.log("Botão clicado!"); alert("Botão clicado!") }}>Botão</Button>;
      default:
        return null;
    }
  };

  const componentExplanation = {
    input: 'Este componente é utilizado para entrada de texto. Os parâmetros necessários são value, onChange e placeholder.',
    button: 'Este componente é um botão clicável. Os parâmetros necessários são label, variant, color e onClick.',
  };

  const variantOptions = {
    button: ['text', 'outlined', 'contained'],
  };

  const colorOptions = {
    button: ['default', 'inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '200px', backgroundColor: '#f0f6fc', padding: '20px' }}>
          <h3>Componentes da Classificação Atomo:</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li
              onClick={() => setSelectedComponent('input')}
              style={{
                cursor: 'pointer',
                marginBottom: '10px',
                backgroundColor: selectedComponent === 'input' ? '#e3f2fd' : 'inherit',
                padding: '5px'
              }}
            >
              Input
            </li>
            <li
              onClick={() => setSelectedComponent('button')}
              style={{
                cursor: 'pointer',
                marginBottom: '10px',
                backgroundColor: selectedComponent === 'button' ? '#e3f2fd' : 'inherit',
                padding: '5px'
              }}
            >
              Button
            </li>
          </ul>
        </div>
        <div style={{ flex: 1, padding: '20px', marginLeft: '20px' }}>
          {selectedComponent && (
            <div>
              <h2>{selectedComponent.charAt(0).toUpperCase() + selectedComponent.slice(1)}</h2>
              <p><strong>Parâmetros:</strong> {componentExplanation[selectedComponent]}</p>
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

export default AtomsUsage;
