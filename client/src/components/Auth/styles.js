import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  auth: {
    marginTop: theme.spacing(12),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 0),
  },
  form: {
    marginTop: theme.spacing(2),
  },
  avatar: {
    margin: theme.spacing(1),
  },
}));
