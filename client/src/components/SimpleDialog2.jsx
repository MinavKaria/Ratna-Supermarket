import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const SimpleDialog2 = ({ onClose, open, handleOption }) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Choose:</DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
          How would you like to receive your order?
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => {
            handleOption("Delivery");
            onClose();
          }}
        >
          Delivery
        </Button>
        <Typography
          variant="body2"
          align="center"
          gutterBottom
          style={{ marginTop: "10px" }}
        >
          OR
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          onClick={() => {
            handleOption("Pickup");
            onClose();
          }}
        >
          Pickup
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// Prop validation for SimpleDialog2
SimpleDialog2.propTypes = {
  onClose: PropTypes.func.isRequired, // Ensures onClose is a required function
  open: PropTypes.bool.isRequired, // Ensures open is a required boolean
  handleOption: PropTypes.func.isRequired, // Ensures handleOption is a required function
};

export default SimpleDialog2;
