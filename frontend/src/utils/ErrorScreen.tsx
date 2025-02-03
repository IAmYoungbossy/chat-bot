// External Packages
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

// Types
import { ErrorScreenProps } from "@/types/errorScreen.type";

const ErrorScreen = ({ error }: ErrorScreenProps) => {
  if (!error) return null;

  return (
    <Alert
      severity="error"
      sx={{
        p: 2,
        width: "100%",
        display: "flex",
        alignItems:"center",
        justifyContent: "center",
        backgroundColor: "red.200",
      }}
    >
      <AlertTitle>Error</AlertTitle>
      {error}
    </Alert>
  );
};

export default ErrorScreen;
