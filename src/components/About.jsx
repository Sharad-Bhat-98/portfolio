import PersonIcon from '@material-ui/icons/Person';
import  Typography  from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import  React  from 'react';


const About = () => {
    return (
        <React.Fragment>
    <Typography variant='h6' style={{textAlign:'center'}} >
    <u style={{color:'red'}}>
      <span style={{color:'black'}}>
        <b>Contact Me</b>
        </span>
        </u>
        </Typography>
<div style={{ width:'220px' ,display:'block',marginLeft:'auto',marginRight:'auto' ,marginTop:'25px'}}>
    <div>
    <PersonIcon color='primary' fontSize='large' />
    </div>
  <Typography style={{position:'relative',left:'35px',bottom:'44px'}} variant='h6'>Name</Typography>
  <Typography style={{position:'relative',left:'35px',bottom:'52px'}} variant="subtitle2">Sharad chandra Bhat I U</Typography>
   
  <div>
    <LocationOnIcon color='primary' fontSize='large' />
    </div>
  <Typography style={{position:'relative',left:'35px',bottom:'44px'}} variant='h6'>Address</Typography>
  <Typography style={{position:'relative',left:'35px',bottom:'52px'}} variant="subtitle2"> Mangalore, Karnataka</Typography>


  <div>
    <MailIcon color='primary' fontSize='large' />
    </div>
  <Typography style={{position:'relative',left:'35px',bottom:'44px'}} variant='h6'>Email</Typography>
  <Typography style={{position:'relative',left:'35px',bottom:'52px'}} variant="subtitle2">sharathbhat563@gmail.com</Typography>
   
   
    </div>
    
      </React.Fragment>);
}
 
export default About;