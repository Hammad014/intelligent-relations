'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styled from 'styled-components';

const StyledTabs = styled(Tabs)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: auto;
  color:red;
  // Add any other custom styles here
`;

export default function page() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };

  return (
    <>
    <div className='flex justify-center mt-10'>
        <img src='/Group 38 (1).png' alt="Logo" />
      </div>
      <div className='dashboard-top'>
        <StyledTabs
        sx={{display:"flex", justifyContent:"center"}}
          value={value}
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Active" />
          <Tab label="Disabled" disabled />
          <Tab label="Disabled" disabled/> {/* Custom text for this tab */}
          <Tab label="Disabled" disabled/>
          <Tab label="Disabled" disabled/>
        </StyledTabs>
      </div>
    </>
  )
}
