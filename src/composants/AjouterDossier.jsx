import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState} from 'react';
import { TwitterPicker } from 'react-color';
import { green, red } from '@material-ui/core/colors';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function AjouterDossier({ouvert, setOuvert, gererAjout}) {
  const classes = useStyles();

  const [nom, setNom] = useState('');
  const [couverture, setCouverture] = useState('');
  const [couleur, setCouleur] = useState('#537169');

  function viderChamps() {
    setNom('');
    setCouverture('');
    setCouleur('#537169');
  }

  const RougeButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(red[700]),
      backgroundColor: red[700],
      '&:hover': {
        backgroundColor: red[900],
      },
    },
  }))(Button);

  

  const VertButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(green[700]),
      backgroundColor: green[700],
      '&:hover': {
        backgroundColor: green[900],
      },
    },
  }))(Button);


  return (
    <div className="AjouterDossier">
      <Dialog open={ouvert} onClose={()=>setOuvert(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ajouter un dossier</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nomDossier"
            label="Nom du dossier"
            type="text"
            fullWidth
            onChange={(e) => setNom(e.target.value)}
            defaultValue={nom}
          />
          <TextField
            margin="dense"
            id="urlImage"
            label="Adresse de l'image de couverture"
            type="text"
            fullWidth
            onChange={(e) => setCouverture(e.target.value)}
            defaultValue={couverture}
          />
          <TwitterPicker 
           colors={['#F94144', '#f8961e','#f9c74f','#90be6d','#277da1','#7B3CAB',]}
            width="100%" 
            triangle="hide" 
            onChangeComplete={(couleur, e) => setCouleur(couleur.hex)}
            color={couleur}
          />
        </DialogContent>
        <DialogActions>
          <RougeButton className={classes.button} onClick={()=>{setOuvert(false); viderChamps()}} color="primary">
            Annuler
          </RougeButton>
          <VertButton className={classes.button} onClick={() => {nom !== '' && gererAjout(nom, couverture, couleur); viderChamps(); }} color="primary">
            Ajouter
          </VertButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}