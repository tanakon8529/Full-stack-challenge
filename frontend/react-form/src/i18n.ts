// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      prefix: "Prefix",
      firstName: "First Name",
      lastName: "Last Name",
      idCard: "ID Card",
      birthDate: "Birth Date",
      nationality: "Nationality",
      countryCode: "Country Code",
      phoneNumber: "Phone Number",
      passport: "Passport",
      expectedSalary: "Expected Salary",
      action: "Action",
      editPerson: "Edit Person",
      addPerson: "Add Person",
      showForm: "Show Form",
      hideForm: "Hide Form",
      clearForm: "Clear Form",
      submitData: "Submit Data",
      selectAll: "Select All",
      deleteSelected: "Delete Selected",
      managementForm: "Management Form",
      male: "Male",
      female: "Female",
      notSpecify: "Not Specify"
    },
  },
  th: {
    translation: {
      prefix: "คำนำหน้า",
      firstName: "ชื่อจริง",
      lastName: "นามสกุล",
      idCard: "เลขบัตรประชาชน",
      birthDate: "วันเกิด",
      nationality: "สัญชาติ",
      countryCode: "รหัสประเทศ",
      phoneNumber: "หมายเลขโทรศัพท์",
      passport: "หนังสือเดินทาง",
      expectedSalary: "เงินเดือนที่คาดหวัง",
      action: "จัดการ",
      editPerson: "แก้ไขข้อมูล",
      addPerson: "เพิ่มข้อมูล",
      showForm: "แสดงฟอร์ม",
      hideForm: "ซ่อนฟอร์ม",
      clearForm: "ล้างข้อมูล",
      submitData: "ส่งข้อมูล",
      selectAll: "เลือกทั้งหมด",
      deleteSelected: "ลบข้อมูลที่เลือก",
      managementForm: "การจัดการหน้าฟอร์ม",
      male: "ผู้ชาย",
      female: "ผู้หญิง",
      notSpecify: "ไม่ระบุ"
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
