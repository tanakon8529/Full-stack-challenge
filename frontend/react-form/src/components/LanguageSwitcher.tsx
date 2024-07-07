// src/components/LanguageSwitcher.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'antd';

const { Option } = Select;

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Select defaultValue="en" style={{ width: 120 }} onChange={changeLanguage}>
      <Option value="en">English</Option>
      <Option value="th">Thai</Option>
    </Select>
  );
};

export default LanguageSwitcher;
