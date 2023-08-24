import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./ModalInfo.scss"

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth:400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius:5,
  boxShadowColor:'1px 2px 2px black'
};
interface IPersonalData {
  characterInfo:{
    name:string,
    created:string,
    gender:string,
    image:string,
    location:{
      name:string
    },
    origin:{
      name:string
    },
    species:string
    status:string
    type:string
  }
}
const ModalInfo = ({characterInfo:{name,created,image,gender,location,origin,species,status,type}}:IPersonalData) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Learn more</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="first-info-person">
            <img className="modal-info-image" src={image} alt=""/>
            <Typography id="modal-modal-title" sx={{mt:2}} variant="h6" component="h2">
              {name}
            </Typography>
          </div>
          <div className="info-container">
            <div className="personal-info">
              <Typography variant="body2">
                <span className="decoration">species:</span> {species}
              </Typography>
              <Typography variant="body2">
                <span className="decoration">type:</span> {type ? type : 'none'}
              </Typography>
              <Typography variant="body2">
                <span className="decoration">status:</span> {status}
              </Typography>
              <Typography variant="body2">
                <span className="decoration">gender:</span> {gender}
              </Typography>
              <Typography variant="body2">
                <span className="decoration">created:</span> {created}
              </Typography>
            </div>
            <div className="personal-info">
              <Typography variant="body2">
                <span className="decoration">location:</span> {location.name}
              </Typography>
              <Typography variant="body2">
                <span className="decoration">origin:</span> {origin.name}
              </Typography>
            </div>
          </div>
          <div className="modal-close">
            <Button  style={{width:'100%', background:'#1476D218'}} onClick={handleClose}>Close modal</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalInfo;