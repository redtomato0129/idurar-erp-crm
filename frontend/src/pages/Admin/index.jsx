import useLanguage from '@/locale/useLanguage';
import AdminCrudModule from '@/modules/AdminCrudModule';
import AdminForm from '@/forms/AdminForm';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

export default function Admin() {
  const translate = useLanguage();
  const entity = 'admin';
  const searchConfig = {
    displayLabels: ['name', 'surname'],
    searchFields: 'email,name,surname',
    outputValue: '_id',
  };

  const deleteModalLabels = ['email'];

  const readColumns = [
    { title: translate('first name'), dataIndex: 'name' },
    { title: translate('last name'), dataIndex: 'surname' },
    { title: translate('Email'), dataIndex: 'email' },
    { title: translate('role'), dataIndex: 'role' },
  ];

  const dataTableColumns = [
    { title: translate('first name'), dataIndex: 'name' },
    { title: translate('last name'), dataIndex: 'surname' },
    { title: translate('Email'), dataIndex: 'email' },
    { title: translate('role'), dataIndex: 'role' },
    {
      title: translate('enabled'),
      dataIndex: 'enabled',
      onCell: () => ({
        props: {
          style: {
            width: '60px',
          },
        },
      }),
      render: (text, record) => (
        <Switch
          checked={text}
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
        />
      ),
    },
  ];

  const Labels = {
    PANEL_TITLE: translate('admin'),
    DATATABLE_TITLE: translate('admin_list'),
    ADD_NEW_ENTITY: translate('add_new_admin'),
    ENTITY_NAME: translate('admin'),

    RECORD_ENTITY: translate('record_payment'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    readColumns,
    dataTableColumns,
    searchConfig,
    deleteModalLabels,
  };
  return (
    <AdminCrudModule
      createForm={<AdminForm />}
      updateForm={<AdminForm isUpdateForm={true} />}
      config={config}
    />
  );
}
