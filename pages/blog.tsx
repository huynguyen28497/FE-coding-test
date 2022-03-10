import { Box, SimpleGrid } from "@chakra-ui/layout";
import Card from "components/Card";
import Header from "components/Header";
import { useBlogs } from "hook/useBlogs";

export default function BlogPage() {
  const { blogs } = useBlogs();

  return (
    <>
      <Header />
      <Box paddingTop={"5vh"} paddingLeft={"5vw"} paddingRight={"5vw"} paddingBottom={"5vh"}>
        <SimpleGrid columns={[1, 1, 2, 4]} spacing="4" justifyContent="center">
          {blogs.map((blog) => (
            <Card key={blog.id} imageUrl={blog.imageUrl} title={blog.title} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
