import React from 'react'
import NotAvailableComponent from '../modalForms_evan/NoComponent/NotAvailableComponent'
import { FiAlertCircle } from 'react-icons/fi';

const PenaltyAccount = () => {
  return (
    <div>
      <NotAvailableComponent componentName = "Penalty Accounts" icon={FiAlertCircle} />
    </div>
  )
}

export default PenaltyAccount
