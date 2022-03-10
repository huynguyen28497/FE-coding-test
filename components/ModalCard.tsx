import React from "react";
import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/modal";
import { Image } from "@chakra-ui/image";
import { Heading } from "@chakra-ui/layout";

const ModalCard = ({ openModal, setOpenModal, imageUrl, title }) => {
  return (
    <>
      {openModal && (
        <Modal isOpen onClose={() => setOpenModal(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody display="flex" flexDirection="column" alignItems="center" w="100%">
              <Image src={imageUrl} />
              <Heading>{title}</Heading>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default ModalCard;
