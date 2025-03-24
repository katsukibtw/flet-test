import { Avatar, Stack, Typography } from "@mui/joy";
import { useCommentsByPost } from "../api/useCommentsByPost";
import ErrorFragment from "./ErrorFragment";
import LoadingFragment from "./LoadingFragment";

const Comments = (props) => {
  const { data, isLoading, isError } = useCommentsByPost(props.postId);

  if (isLoading) {
    return <LoadingFragment />;
  }

  if (isError) {
    return <ErrorFragment />;
  }

  return (
    <Stack gap={"1rem"} padding={"0.5rem 0"}>
      {data.map((el, index) => (
        <Stack key={`${el} ${index}`} gap={"0.25rem"}>
          <Stack flexDirection={"row"} alignItems={"center"} gap={"0.5rem"}>
            <Avatar />
            <Typography level="body-lg">
              {el.email} - <Typography level="title-lg">{el.name}</Typography>
            </Typography>
          </Stack>
          <Typography>{el.body}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default Comments;
