import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { callbackify } from 'util';
import './Contact.scss';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        },
        margin: {
            margin: theme.spacing(2),
        },
    }),
);

const FormTextField = withStyles({
  root: {
      '& label': {
        color: 'lightgray',
      },
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:hover': {
        borderBottomColor: 'white',
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiInputBase-input': {
          color: 'white',
      },
    },
})(TextField)

const CssTextField = withStyles({
    root: {
        maxWidth: '600px',
        width: 'calc(100% - 2rem)',
        '& label': {
          color: 'lightgray',
        },
        '& label.Mui-focused': {
          color: 'white',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            color: 'white',
          '& fieldset': {
            borderColor: 'white',
          },
          '&:hover fieldset': {
            borderColor: 'white',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white',
          },
        },
      },
})(TextField)

const Contact = () => {
    const classes = useStyles();

    return (
        <section id="contact" className="contact-container">
            <div className="contact lightblue-transparent">
                <form className="contact-form">
                    <FormTextField required id="name" label="Name" className={classes.margin} />
                    <FormTextField required id="email" label="E-mail address" className={classes.margin} />
                    <CssTextField
                        id="outlined-multiline-static"
                        label="Body"
                        multiline
                        rows={12}
                        variant="outlined"
                        className={classes.margin}
                    />
                </form>
            </div>
            <div className="contact transparent"></div>
        </section>
    )
}

export default Contact;