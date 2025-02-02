import {
  Box,
  Modal,
  Button,
  Backdrop,
  Typography,
} from "@mui/material";
import { MouseEvent } from "react";

const buttonStyle = {
  flexGrow: 1,
  width: "100%",
  maxWidth: 160,
  fontSize: "14px",
  borderWidth: "0",
  fontWeight: "500",
  paddingTop: "10px",
  lineHeight: "20px",
  borderRadius: "100px",
  paddingBottom: "10px",
  letterSpacing: "0.1px",
};

const style = {
  p: 4,
  width: 400,
  top: "50%",
  left: "50%",
  boxShadow: 24,
  borderRadius: 2,
  paddingTop: "24px",
  paddingBottom: "24px",
  position: "absolute",
  bgcolor: "background.paper",
  transform: "translate(-50%, -50%)",
};

const DeleteModal = ({
  open,
  onDelete,
  handleClose,
  conversationId,
}: {
  open: boolean;
  conversationId: number;
  handleClose: () => void;
  onDelete: (e: MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      slots={{ backdrop: Backdrop }}
      aria-describedby="delete-conversation"
      aria-labelledby="delete-conversation-modal"
      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      }}
    >
      <Box sx={style}>
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontSize: "22px",
            fontWeight: "400",
            lineHeight: "28px",
            textAlign: "center",
            marginBottom: "24px",
          }}
          id="delete-conversation"
        >
          Are you sure you want to delete Conversation{" "}
          {conversationId}?
        </Typography>
        <Box
          sx={{
            gap: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            color="inherit"
            variant="outlined"
            onClick={handleClose}
            sx={{
              ...buttonStyle,
              backgroundColor: "#E8DEF8",
            }}
          >
            Cancel
          </Button>

          <Button
            color="error"
            onClick={(e) => {
              onDelete(e);
              handleClose();
            }}
            variant="contained"
            sx={{
              ...buttonStyle,
              backgroundColor: "#B3261E",
            }}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
