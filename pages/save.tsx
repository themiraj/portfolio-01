import Layout from '@/Components/layout'
import { useWarnIfUnsavedChanges } from '@/Components/useWarnIfUnsavedChanges'
import React, { useEffect, useState } from 'react'

export const Save = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  return (
    <div>Save</div>
  )
}