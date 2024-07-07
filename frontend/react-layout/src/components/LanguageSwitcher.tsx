// src/components/LanguageSwitcher.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'antd';

const { Option } = Select;

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <Select defaultValue="en" onChange={handleLanguageChange}>
      <Option value="en">English</Option>
      <Option value="th">ไทย</Option>
    </Select>
  );
};

export default LanguageSwitcher;
