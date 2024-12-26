import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Prop {
  children: string;
}

const ExpandableText = ({ children }: Prop) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 400;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = isExpanded ? children : children.substring(0, limit) + "... ";

  return (
    <>
      <Text>
        {summary}
        <Button
          size="xs"
          marginLeft={1}
          fontWeight="bold"
          colorScheme="yellow"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
