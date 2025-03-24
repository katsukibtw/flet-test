import { CircularProgress, Sheet } from "@mui/joy";

const LoadingFragment = () => {
  return (
    <Sheet
      variant="plain"
      sx={{
        height: "calc(100vh - 10rem)",
        width: "60vw",
        display: "grid",
        placeContent: "center",
        background: "transparent",
      }}
    >
      <CircularProgress />
    </Sheet>
  );
};

export default LoadingFragment;
