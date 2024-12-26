import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
          <Heading>Oops...</Heading>
          <Text>
            {isRouteErrorResponse(error)
              ? "Sorry, invalid page"
              : "Sorry, an unexpected error occurred "}
          </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
