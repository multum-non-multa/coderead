/** @jsx jsx */
import { MDXProvider } from "@mdx-js/react";
import { Heading, Text, jsx, Box, Link, Flex } from "theme-ui";

export default function MDXCompProvider(props) {
  const state = {
    h1: (props) => <Heading as="h1" sx={{ mt: "3", mb: "2" }} {...props} />,
    h2: (props) => <Heading as="h2" sx={{ mt: "3", mb: "2" }} {...props} />,
    h3: (props) => <Heading as="h3" sx={{ mt: "3", mb: "2" }} {...props} />,
    h4: (props) => <Heading as="h4" sx={{ mt: "3", mb: "2" }} {...props} />,
    // todo testing
    pre: props => <div {...props} />,
    code: props => <pre style={{ lineHeight: "1.5", fontWeight: "400", margin: "1em 0px", padding: "5%", color: 'black', background: '#f6f6f6', width: '100%', fontSize: "1rem" }} {...props} />,
    // * end testing
    p: (props) => <Text as="p" sx={{ mb: "2", lineHeight: "2", fontSize: '1.2rem' }} {...props} />,
    a: (props) => (
      <Link as="a" sx={{ color: "secondary", fontWeight: "bold" }} {...props} />
    ),
    li: (props) => <Text as="p" sx={{ mb: "2", lineHeight: "2", fontSize: '1.2rem' }} {...props} />,
    blockquote: (props) => <Text as="p" sx={{ mb: "2", lineHeight: "2", px: "1rem", background: "#eee", fontSize: '1rem' }} {...props} />,
  };

  return (
    <MDXProvider components={state}>
      <Box {...props} />
    </MDXProvider>
  );
}
