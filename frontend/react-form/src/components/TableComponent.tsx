// src/components/TableComponent.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table, Space } from 'antd';
import { RootState } from '../redux/store';
import { deletePerson, Person } from '../redux/personSlice';
import { useTranslation } from 'react-i18next';
import type { ColumnsType } from 'antd/es/table';
import '../styles/TableStyles.scss';

const TableComponent: React.FC = () => {
  const dispatch = useDispatch();
  const people = useSelector((state: RootState) => state.person.people);
  const { t } = useTranslation();
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

  const handleDelete = (id: string) => {
    dispatch(deletePerson(id));
  };

  const handleDeleteSelected = () => {
    selectedRowKeys.forEach(id => dispatch(deletePerson(id)));
    setSelectedRowKeys([]);
  };

  const columns: ColumnsType<Person> = [
    {
      title: t('name'),
      dataIndex: 'firstName',
      key: 'firstName',
      sorter: (a: Person, b: Person) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: t('gender'),
      dataIndex: 'gender',
      key: 'gender',
      filters: [
        { text: t('male'), value: 'male' },
        { text: t('female'), value: 'female' },
        { text: t('notSpecify'), value: 'notSpecify' },
      ],
      onFilter: (value: string | number | boolean | bigint, record: Person) => record.gender === value,
    },
    {
      title: t('birthDate'),
      dataIndex: 'birthDate',
      key: 'birthDate',
      sorter: (a: Person, b: Person) => new Date(a.birthDate).getTime() - new Date(b.birthDate).getTime(),
    },
    {
      title: t('nationality'),
      dataIndex: 'nationality',
      key: 'nationality',
    },
    {
      title: t('phone'),
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: t('passport'),
      dataIndex: 'passport',
      key: 'passport',
    },
    {
      title: t('expectedSalary'),
      dataIndex: 'expectedSalary',
      key: 'expectedSalary',
    },
    {
      title: t('action'),
      key: 'action',
      render: (text: any, record: Person) => (
        <Space size="middle">
          <Button onClick={() => handleDelete(record.id)}>{t('delete')}</Button>
        </Space>
      ),
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: React.Key[]) => {
      setSelectedRowKeys(keys as string[]);
    },
  };

  return (
    <>
      <Button onClick={handleDeleteSelected} disabled={!selectedRowKeys.length}>
        {t('deleteSelected')}
      </Button>
      <Table
        columns={columns}
        dataSource={people}
        pagination={{ pageSize: 5 }}
        rowKey="id"
        className="table-component"
        rowSelection={rowSelection}
      />
    </>
  );
};

export default TableComponent;
