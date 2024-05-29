import React, { useState } from 'react';
import GenericForm from '../components/molecules/GenericForm';
import SelectComponent from '../components/molecules/Select';
import Chart from '../components/organisms/Chart';
import DatePicker from '../components/organisms/Datepicker';

const OrganismsUsages = () => {
  const [selectedComponent, setSelectedComponent] = useState('chart');

  const renderComponent = (component) => {
    switch (component) {
      case 'chart':
        return <Chart type="bar" data={chartData} options={chartOptions} />;
      case 'datePicker':
        return <DatePicker selected={selectedDate} onChange={handleDateChange} />;
      default:
        return null;
    }
  };

  const componentExplanation = {
    chart: 'Este componente é um gráfico. Os parâmetros necessários são type, data e options.',
    datePicker: 'Este componente é um seletor de data. Os parâmetros necessários são selected e onChange.'
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
  const [selectedDate, setSelectedDate] = useState(null);

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1
      }
    ]
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '200px', backgroundColor: '#f0f6fc', padding: '20px' }}>
          <h3>Componentes da Classificação Organismo:</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li
              onClick={() => setSelectedComponent('chart')}
              style={{
                cursor: 'pointer',
                marginBottom: '10px',
                backgroundColor: selectedComponent === 'chart' ? '#e3f2fd' : 'inherit',
                padding: '5px'
              }}
            >
              Chart
            </li>
            <li
              onClick={() => setSelectedComponent('datePicker')}
              style={{
                cursor: 'pointer',
                marginBottom: '10px',
                backgroundColor: selectedComponent === 'datePicker' ? '#e3f2fd' : 'inherit',
                padding: '5px'
              }}
            >
              DatePicker
            </li>
          </ul>
        </div>
        <div style={{ flex: 1, padding: '20px', marginLeft: '20px' }}>
          {selectedComponent && (
            <div>
              <h2>{selectedComponent.charAt(0).toUpperCase() + selectedComponent.slice(1)}</h2>
              <p><strong>Descrição:</strong> {componentExplanation[selectedComponent]}</p>

              {selectedComponent === 'chart' && (
                <div>
                  <p><strong>Dados do Gráfico:</strong></p>
                  <p><strong>Labels:</strong> {chartData.labels.join(', ')}</p>
                  <p><strong>Datasets:</strong></p>
                  <ul>
                    {chartData.datasets.map((dataset, index) => (
                      <li key={index}>
                        <p><strong>Label:</strong> {dataset.label}</p>
                        <p><strong>Data:</strong> {dataset.data.join(', ')}</p>
                        <p><strong>BackgroundColor:</strong> {dataset.backgroundColor}</p>
                        <p><strong>BorderColor:</strong> {dataset.borderColor}</p>
                        <p><strong>BorderWidth:</strong> {dataset.borderWidth}</p>
                      </li>
                    ))}
                  </ul>
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

export default OrganismsUsages;
