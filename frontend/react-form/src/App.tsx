// src/App.tsx
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Button } from 'antd';
import { Person } from './redux/personSlice';
import FormComponent from './components/FormComponent';
import TableComponent from './components/TableComponent';
import LanguageSwitcher from './components/LanguageSwitcher';
import './styles/AppStyles.scss';
import './i18n';

const App: React.FC = () => {
  const [editingPerson, setEditingPerson] = useState<Person>({} as any);
  const [formVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible(!formVisible);
  };

  const handleFormFinish = () => {
    setFormVisible(false);
    setEditingPerson({} as any);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <LanguageSwitcher />
        <Button type="primary" onClick={toggleForm}>
          {formVisible ? 'Hide Form' : 'Show Form'}
        </Button>
        {formVisible && (
          <FormComponent
            editingPerson={editingPerson || {}}
            onFinish={handleFormFinish}
          />
        )}
        <TableComponent />
      </div>
    </Provider>
  );
};

export default App;
