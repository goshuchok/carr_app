import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function CarBrand() {
  const classes = useStyles();
  
  const [modelId, setModelId] = useState("");
  
  const handleChange = (event) => {
    setModelId(event.target.value);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-brand"
          select
          label="Выберите авто"
          value={modelId}
          onChange={handleChange}
          variant="outlined"
        >
        </TextField>
      </div>
    </form>
  );
}
