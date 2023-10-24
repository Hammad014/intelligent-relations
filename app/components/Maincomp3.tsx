import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

// Define the type for your data
type DataItem = {
  h1: string;
  p: string;
};

interface Maincomp3Props {
  data: DataItem[]; // Use the DataItem type as the data type
}

const Maincomp3: React.FC<Maincomp3Props> = ({ data }) => {
  return (
    <div className=''>
      <CssBaseline />
      <Container className='mt-20 pb-40' sx={{ bgcolor: '#ffffff', borderRadius: '20px 20px 0 0' }}>
        <div className='flex max-w-xs ml-20 pt-20'>
        <h1 className='text-4xl font-semibold'>Welcome to the future of Public Relations:</h1>
        <img className='w-9 h-5' src='/imagesmain/Group 48.png' />
        </div>
        <div className='flex m-auto' style={{ maxWidth: '80%', justifyContent: 'flex-end',gap:"1rem" }}>
          <div className='column-container'>
            {data.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <div key={index} className='post-card mb-4 pb-16 pt-10 pl-10 pr-10'>
                    <h1 className='text-2xl font-bold'>{item.h1}</h1>
                    <br/>
                    <p className='text-sm'>{item.p}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className='column-container'>
            {data.map((item, index) => {
              if (index % 2 !== 0) {
                return (
                  <div key={index} className='post-card mb-4 pb-14 pt-10 pl-10 pr-10'>
                    <h1 className='text-2xl font-bold'>{item.h1}</h1>
                    <br/>
                    <p className='text-sm'>{item.p}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Maincomp3;