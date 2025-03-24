import { Sheet, Typography } from "@mui/joy";

const ErrorFragment = () => {
  return (
    <Sheet
      variant="soft"
      color="danger"
      sx={{
        borderRadius: "0.5rem",
        padding: "0.75rem 1rem",
        marginTop: "0.75rem",
      }}
    >
      <Typography textColor={"inherit"} level="h2" fontSize={"1.5rem"}>
        Произошла ошибка. Не удалось получить данные
      </Typography>
    </Sheet>
  );
};

export default ErrorFragment;
