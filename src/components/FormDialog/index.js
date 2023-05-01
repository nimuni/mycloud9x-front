import React from 'react'

function FormDialog(props) {
  return (
    <Dialog open={open} onClose={props.handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {props.contentText}
        </DialogContentText>
        {props.setEmail && <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>Cancel</Button>
        <Button onClick={props.handleClose}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  )
}

export default FormDialog