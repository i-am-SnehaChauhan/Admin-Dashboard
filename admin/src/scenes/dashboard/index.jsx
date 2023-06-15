import React from 'react'
import Header from '../../components/Header'
import { Box } from '@mui/system'

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="DASHBOARD" subtitle="Welcome to the your dashboard" />
      </Box>
    </Box>
  )
}

export default Dashboard

