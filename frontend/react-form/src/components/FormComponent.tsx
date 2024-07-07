// src/components/FormComponent.tsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Button, Form, Input, Select, DatePicker } from 'antd';
import { useTranslation } from 'react-i18next';
import { addPerson, editPerson, Person } from '../redux/personSlice';
import dayjs from 'dayjs';
import '../styles/FormStyles.scss';

const { Option } = Select;

interface FormComponentProps {
  editingPerson?: Person;
  onFinish: () => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ editingPerson, onFinish }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (editingPerson) {
      form.setFieldsValue({
        ...editingPerson,
        birthDate: editingPerson.birthDate ? dayjs(editingPerson.birthDate) : null,
      });
    }
  }, [editingPerson, form]);

  const onSubmit = (values: any) => {
    const payload = {
      ...values,
      birthDate: values.birthDate ? values.birthDate.format('YYYY-MM-DD') : null,
    };

    if (editingPerson && editingPerson.id) {
      dispatch(editPerson({ ...payload, id: editingPerson.id }));
    } else {
      dispatch(addPerson({ ...payload, id: uuidv4() }));
    }
    form.resetFields();
    onFinish();
  };

  const onClear = () => {
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onSubmit} layout="vertical" className="form-component">
      <Form.Item name="prefix" label={t('prefix')} rules={[{ required: true }]}>
        <Select>
          <Option value="Mr">Mr</Option>
          <Option value="Ms">Ms</Option>
          <Option value="Mrs">Mrs</Option>
        </Select>
      </Form.Item>
      <Form.Item name="firstName" label={t('firstName')} rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="lastName" label={t('lastName')} rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="idCard" label={t('idCard')} rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="birthDate" label={t('birthDate')} rules={[{ required: true }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item name="nationality" label={t('nationality')} rules={[{ required: true }]}>
        <Select>
          <Option value="thai">Thai</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item name="countryCode" label={t('countryCode')} rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="phone" label={t('phoneNumber')} rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="passport" label={t('passport')}>
        <Input />
      </Form.Item>
      <Form.Item name="expectedSalary" label={t('expectedSalary')} rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <div className="form-buttons">
        <Button type="default" onClick={onClear}>
          {t('clearForm')}
        </Button>
        <Button type="primary" htmlType="submit">
          {t('submitData')}
        </Button>
      </div>
    </Form>
  );
};

export default FormComponent;
