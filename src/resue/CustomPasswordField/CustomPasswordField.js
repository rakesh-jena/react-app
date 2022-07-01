import React from "react";
import "./CustomPasswordField.scss";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    "& $notchedOutline": {
      borderWidth: 0,
    },
    "&:hover $notchedOutline": {
      borderWidth: 0,
      border: "3px solid $hoverColor",
    },
    "&$focused $notchedOutline": {
      borderWidth: 0,
    },
  },
  focused: {},
  notchedOutline: {},
});

const CustomPasswordField = (props) => {
  const { classes } = props;
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    props.getPasword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="customPasswordField">
      <FormControl className="customPasswordField--FormControl">
        <OutlinedInput
          classes={classes}
          className="customPasswordField--FormControl--OutlinedInput"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          InputProps={{ classes }}
          name="password"
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                className="customPasswordField--FormControl--OutlinedInput--Visibility"
              >
                {values.showPassword ? (
                  <Visibility className="customPasswordField--FormControl--OutlinedInput--Visibility" />
                ) : (
                  <VisibilityOff className="customPasswordField--FormControl--OutlinedInput--Visibility" />
                )}
              </IconButton>
            </InputAdornment>
          }
          placeholder="Password"
          labelWidth={70}
        />
      </FormControl>
    </div>
  );
};

const StyledApp = withStyles(styles)(CustomPasswordField);
export default StyledApp;
