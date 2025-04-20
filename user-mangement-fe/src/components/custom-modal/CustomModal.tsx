"use client";

import type React from "react";
import type { ReactNode } from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  width?: string | number;
}

const CustomModal: React.FC<CustomModalProps> = ({
  open,
  onClose,
  children,
  width = "90%",
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      BackdropProps={{
        sx: { backgroundColor: "rgba(0, 0, 0, 0.6)" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: width },
          maxWidth: "600px",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          outline: "none",
          maxHeight: "90vh",
          overflow: "auto",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box sx={{ mt: 2 }}>{children}</Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
