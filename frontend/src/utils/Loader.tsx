import { styled } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";

const TrackCircularProgress = styled(CircularProgress)((_props) => ({
  left: 0,
  color: "#e8def7",
  position: "absolute",
}));

const SpinnerCircularProgress = styled(CircularProgress)({
  left: 0,
  color: "#64558e",
  position: "absolute",
  animationDuration: "550ms",
  "& .MuiCircularProgress-circle": {
    strokeLinecap: "round",
  },
});

const Loader = ({ loading }: { loading: boolean }) => {
  if (!loading) return null;

  return (
    <div
      style={{
        top: "50%",
        left: "50%",
        zIndex: 1300,
        position: "absolute",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div style={{ position: "relative" }}>
        <TrackCircularProgress
          size={40}
          value={100}
          thickness={4}
          variant="determinate"
        />
        <SpinnerCircularProgress
          size={40}
          disableShrink
          thickness={4}
          variant="indeterminate"
        />
      </div>
    </div>
  );
};

export default Loader;
