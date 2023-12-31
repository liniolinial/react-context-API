import React, { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";
import { LanguageContext } from "./contexts/LanguageContext";

const words = {
  english: {
    signIn: "Sign In",
    email: "Email Address",
    password: "Password",
    remember: "Remember Me",
  },

  french: {
    signIn: "Se Connecter",
    email: "Adresse Électronique",
    password: "Mot de Passe",
    remember: "Souviens-toi De Moi",
  },

  spanish: {
    signIn: "Registrarse",
    email: "Correo Electrónico",
    password: "Contraseña",
    remember: "Recuérdame",
  },

  korean: {
    signIn: "로그인",
    email: "이메일",
    password: "비밀번호",
    remember: "로그인 저장",
  },
};

function Form(props) {
  const { language, changeLanguage } = useContext(LanguageContext);
  // functional component doesn't have render
  const { classes } = props;
  const { email, signIn, password, remember } = words[language];

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{signIn}</Typography>
        <Select value={language} onChange={changeLanguage}>
          <MenuItem value='english'>English</MenuItem>
          <MenuItem value='french'>French</MenuItem>
          <MenuItem value='spanish'>Spanish</MenuItem>
          <MenuItem value='korean'>Korean</MenuItem>
        </Select>
        <form className={classes.form}>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='email'>{email}</InputLabel>
            <Input id='email' name='email' autoFocus />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='password'>{password}</InputLabel>
            <Input id='password' name='password' autoFocus />
          </FormControl>
          <FormControlLabel
            control={<Checkbox color='primary' />}
            label={remember}
          />
          <Button
            variant='contained'
            type='submit'
            fullWidth
            color='primary'
            className={classes.submit}>
            {signIn}
          </Button>
        </form>
      </Paper>
    </main>
  );
}

// export default kann nur einmal eingesetzt werden.
export default withStyles(styles)(Form);
