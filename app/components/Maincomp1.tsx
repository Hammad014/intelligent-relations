import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Maincomp1 = () => {
  return (
    <>
    <div className='flex justify-center mt-10 ' 
    // style={{ backgroundImage: 'url("/Group (2).png")',backgroundRepeat:"no-repeat"}}
    >
      <div className='mt-10' style={{maxWidth:"30rem"}}>
       <h1 className='text-5xl text-white pb-3 font-bold'>PR, meet AI</h1>
    <p className='text-white'>Get the power of a full service professional PR team that harnesses the technology of a 4/7 AI engine</p>
  <Card className='rounded-xl mt-5' sx={{ maxWidth: 300, backgroundColor: 'transparent',border:"2px solid #7DF4DC" }}>
      <CardContent>
        <Typography variant="body2" className='pt-3 pb-3 text-white' >
          An AI-Powered DIY PR Portal for your marketing team a benevolent smile
      
        </Typography>
      </CardContent>
     
        <Button style={{backgroundColor:"#7DF4DC",width:"100%"}} className='text-blue-700 btn font-semibold'  variant="contained">START NOW</Button>
     
    </Card>
    <Button style={{backgroundColor:"transparent",width:"63%",color:"#7DF4DC",border:"2px solid #7DF4DC"}} className='text-blue-700 btn mt-5 rounded-xl font-semibold'  variant="contained"><img className='pr-2' src='/play-circle.png'/>SEE US IN ACTION</Button>
    </div>
    <div className='right-comp1'>
       <img src='/Group 54.png'/>
    </div>
    </div>
    </>
  )
}

export default Maincomp1
