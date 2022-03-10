import { Image } from "@chakra-ui/image";
import { AspectRatio, Box, Heading } from "@chakra-ui/layout";
import { useState } from "react";
import ModalCard from "./ModalCard";

type CardProps = {
  imageUrl: string;
  title: string;
};

const Card = ({ imageUrl, title }: CardProps) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Box
      cursor="pointer"
      boxShadow='base'
      _hover={{
        transform: "scale(1.01)",
        transition: "0.5s",
      }}
      onClick={() => setOpenModal(true)}
      borderRadius="8px"
      overflow="hidden">
      <AspectRatio ratio={4 / 3}>
        <Image src={imageUrl} />
      </AspectRatio>
      <Heading p="4" size="md">
        {title}
      </Heading>
      <ModalCard title={title} imageUrl={imageUrl} openModal={openModal} setOpenModal={setOpenModal} />
    </Box>
  );
};

export default Card;
