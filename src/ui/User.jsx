import { Avatar, Stack, Typography } from "@mui/joy";
import { useUser } from "../api/useUser";
import LoadingFragment from "./LoadingFragment";
import ErrorFragment from "./ErrorFragment";

/**
 * Mini user component for post
 * @public
 * @param { userId: number } props
 */
const User = (props) => {
  const { data, isLoading, isError } = useUser(props.userId);

  if (isLoading) {
    return <LoadingFragment />;
  }

  if (isError) {
    return <ErrorFragment />;
  }

  return (
    <Stack flexDirection={"row"} alignItems={"center"} gap={"0.5rem"}>
      <Avatar sx={{ background: "white" }} />
      <Typography>
        {data.name} - {data.email}
      </Typography>
    </Stack>
  );
};

export default User;
