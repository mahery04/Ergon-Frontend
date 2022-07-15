import React from 'react';

import { Typography,Button,TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


function NewEmployee() {
  return (
    <div>
      <Typography variant="h3" sx={{ px: 5, mt: 1, mb: 5 }}>
          Nouveau Employé(e)
      </Typography>
      <Card sx={{ minWidth: 275,backgroundColor: '#C6D9E3', height:1400 }}>
        <CardContent>
          <form>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              
              <label> Nom :</label> <br/>
              <TextField  id="outlined-basic" placeholder='Entrer le nom' variant="outlined" sx={{mb: 2, mr:5, width: 550, backgroundColor:'white',borderRadius:'10px'}}  />  <br/>

              <label>Prénom :</label> <br/>
              <TextField id="outlined-basic" placeholder="Entrer le prénom" variant="outlined" sx={{mb: 2, mr:5,width: 550, backgroundColor:'white',borderRadius:'10px'}} />  <br/>

              <label>Date de naissance :</label> <br/>
              <TextField id="date" type="date" placeholder="Date de naissance" defaultValue="yyyy-mm-dd" sx={{ mb:2, mr:5,width: 550, backgroundColor:'white',borderRadius:'10px' }}  InputLabelProps={{ shrink: true}}/> <br/>

              <label>Lieu de naissance :</label> <br/>
              <TextField id="outlined-basic" placeholder="Entrer le lieu de naissance" variant="outlined" sx={{mb: 2, mr:5,width: 550, backgroundColor:'white',borderRadius:'10px'}}  /> <br/>
            
              <label>CIN :</label> <br/>
              <TextField id="outlined-basic" placeholder="Entrer le numéro du CIN" variant="outlined" sx={{mb: 2, mr:5,width: 550, backgroundColor:'white',borderRadius:'10px'}}  />  <br/>

              <label>CIN Date de délivrance :</label> <br/>
              <TextField id="date" type="date"placeholderl="CIN Date de délivrance" defaultValue="yyyy-mm-dd" sx={{ mb:2,mr:5,width: 550, backgroundColor:'white',borderRadius:'10px' }}  InputLabelProps={{ shrink: true}}/> <br/>

              <label>CIN Recto :</label> <br/>
              <TextField id="outlined-basic" type="file" variant="outlined" sx={{mb: 2, mr:5,width: 550, backgroundColor:'white',borderRadius:'10px'}}  />  <br/>

              <label>CIN Verso :</label> <br/>
              <TextField id="outlined-basic" type="file" variant="outlined" sx={{mb: 2, mr:5,width: 550, backgroundColor:'white',borderRadius:'10px'}}  />  <br/>

              <label>Certificat de résidence :</label> <br/>
              <TextField id="outlined-basic" type="file" variant="outlined"  sx={{mb: 2, mr:5,width: 550, backgroundColor:'white',borderRadius:'10px'}}  />  <br/>

              <label>Contact 1 :</label> <br/>
              <TextField id="outlined-basic" placeholder="Entrer le contact 1" variant="outlined" sx={{mb: 2, mr:5,width: 550, backgroundColor:'white',borderRadius:'10px'}}  />  <br/>

              <label>Contact 2 :</label> <br/>
              <TextField id="outlined-basic" placeholder="Entrer le contact 2" variant="outlined" sx={{mb: 2, mr:5,width: 550, backgroundColor:'white',borderRadius:'10px'}}  />  <br/>

              <label>Email :</label> <br/>
              <TextField id="outlined-basic" placeholder="Entrer l'email" variant="outlined" sx={{mb: 2, mr:5,width: 550, backgroundColor:'white',borderRadius:'10px'}}  />  <br/>
            </Typography>
          </form>
        </CardContent>
        <CardActions sx={{ml: 29 }}>
          <Button variant="contained" color="primary" sx={{mr: 15, width:200}}>Enregister</Button>
          <Button variant="outlined" color="secondary" sx={{width:200}} >Annuler</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default NewEmployee