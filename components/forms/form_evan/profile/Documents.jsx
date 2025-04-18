import React from 'react'
import NotAvailableComponent from '../modalForms_evan/NoComponent/NotAvailableComponent'
import { CiFileOff } from "react-icons/ci";


const Documents = () => {
  return (
    <div>
      <NotAvailableComponent componentName = "Documents" icon={ CiFileOff } />
    </div>
  )
}

export default Documents
