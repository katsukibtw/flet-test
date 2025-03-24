import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Avatar,
  Sheet,
  Stack,
  Typography,
} from "@mui/joy";
import { usePosts } from "./api/usePosts";
import LoadingFragment from "./ui/LoadingFragment";
import ErrorFragment from "./ui/ErrorFragment";
import Comments from "./ui/Comments";
import User from "./ui/User";

const App = () => {
  const { data, isLoading, isError } = usePosts();

  return (
    <Stack
      position={"absolute"}
      sx={{
        inset: 0,
      }}
    >
      <Stack
        width={"60svw"}
        marginInline={"auto"}
        marginTop={"1.25rem"}
        display={"flex"}
      >
        <Typography level="h1">Сообщения</Typography>
        {isLoading ? (
          <LoadingFragment />
        ) : isError ? (
          <ErrorFragment />
        ) : (
          <AccordionGroup
            sx={{
              gap: "0.75rem",
              marginTop: "0.75rem",
            }}
          >
            {data.map((el, index) => (
              <Sheet
                key={`${el} ${index}`}
                variant="soft"
                sx={{
                  padding: "0.75rem 1rem",
                  borderRadius: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <Typography level="h3">{el.title}</Typography>
                <Stack flexDirection={"row"}>
                  <User userId={el.userId} />
                </Stack>
                <Typography level="body-lg">{el.body}</Typography>
                <Accordion
                  sx={{
                    borderRadius: "0.35rem",
                    overflow: "hidden",
                  }}
                >
                  <AccordionSummary>Комментарии</AccordionSummary>
                  <AccordionDetails
                    sx={{
                      background: "white",
                    }}
                  >
                    <Comments postId={el.id} />
                  </AccordionDetails>
                </Accordion>
              </Sheet>
            ))}
          </AccordionGroup>
        )}
      </Stack>
    </Stack>
  );
};

export default App;
