import React from 'react'
import NotAvailableComponent from '../modalForms_evan/NoComponent/NotAvailableComponent'
import { FiFileText } from 'react-icons/fi';

const Payroll = () => {
  return (
    <div>
      <NotAvailableComponent componentName = "Payslips" icon={FiFileText}/>
    </div>
  )
}

export default Payroll
