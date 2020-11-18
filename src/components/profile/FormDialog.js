import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import {
  Button,
  DialogActions,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { useState } from "react";

export default function FormDialog({ open, setOpen, handleEdit }) {
  const [input, setInput] = useState(null);

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Add Description"
            type="text"
            fullWidth
            onChange={(e) => setInput(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleEdit(input)} color="primary">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
