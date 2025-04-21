import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  useTheme,
  CardHeader,
  Divider,
  useMediaQuery,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useUsers } from "../../context/UserContext";

type HeaderCardProps = {
  children?: React.ReactNode;
};

const HeaderCard = ({ children }: HeaderCardProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { setOpen } = useUsers();

  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        width: "100%",
        mb: 4,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader
        sx={{
          backgroundColor: theme.palette.grey[100],
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? 1 : 0,
        }}
        title={
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{ fontSize: isMobile ? "1rem" : "1.25rem" }}
          >
            User Management
          </Typography>
        }
        action={
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setOpen(true)}
            size={isMobile ? "small" : "medium"}
          >
            Add User
          </Button>
        }
      />
      <Divider />
      <CardContent
        sx={{
          px: isMobile ? 2 : 3,
          py: isMobile ? 1 : 2,
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
};

export default HeaderCard;
