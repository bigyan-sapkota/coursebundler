import {
  Avatar,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { fileUploadCss } from "../auth/register";
import { useState } from "react";

export default function Profile() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const user = {
    name: "Bigyan",
    email: "biggie@gmail.com",
    createdAt: String(new Date().toISOString()),
    role: "admin",
    subscription: {
      status: undefined,
    },
    playlist: [{ course: "sasdfasd", poster: "asdfaser" }],
  };

  const removeFromPlaylistHandler = (id) => {
    console.log(id);
  };

  const changeImageSubmitHandler = (e, image) => {
    e.preventDefault();
    console.log(image);
  };

  return (
    <Container minH="95vh" maxW="container.lg" py="8">
      <Heading mt="12">Profile</Heading>

      <Stack
        justifyContent="flex-start"
        direction={["column", "wor"]}
        alignItems="center"
        spacing={["8", "16"]}
        padding="8"
      >
        <VStack>
          <Avatar boxSize="48" />

          <Button colorScheme="yellow" variant="ghost" onClick={onOpen}>
            Change Photo
          </Button>
        </VStack>

        <VStack spacing="4" alignItems={["center", "flex-start"]}>
          <HStack>
            <Text fontWeight="bold"> Name</Text>
            <Text> {user.name}</Text>
          </HStack>

          <HStack>
            <Text fontWeight="bold"> Email</Text>
            <Text> {user.email}</Text>
          </HStack>

          <HStack>
            <Text fontWeight="bold"> Since</Text>
            <Text> {user.createdAt.split("T")[0]}</Text>
          </HStack>

          {user.role === "admin" && (
            <HStack>
              <Text fontWeight="bold">Subscription</Text>

              {user.subscription.status === "active" ? (
                <Button colorScheme="yellow.500" variant="unstyled">
                  Cancel Subscription
                </Button>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme="yellow">Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}

          <Stack direction={["column", "row"]} alignItems="center">
            <Link to="/updateprofile">
              <Button>Update Profile</Button>
            </Link>
            <Link to="/chagepassword">
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>

      <Heading size="md" my="8">
        Playlist
        {user.playlist.length > 0 && (
          <Stack
            direction={["column", "row"]}
            alignItems="center"
            flexWrap="wrap"
            p="4"
          >
            {user.playlist.map((item) => (
              <VStack key={item.course} w="48" m="2">
                <Image
                  boxSize="full"
                  objectFit="contain"
                  src={
                    "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_960_720.jpg"
                  }
                />
                <HStack>
                  <Link to={`/course/${item.course}`}>
                    <Button variant="ghost" colorScheme="yellow">
                      Watch Now
                    </Button>
                  </Link>

                  <Button
                    onClick={() => removeFromPlaylistHandler(item.course)}
                  >
                    <RiDeleteBin7Fill />
                  </Button>
                </HStack>
              </VStack>
            ))}
          </Stack>
        )}
      </Heading>

      <ChangePhotoBox
        isOpen={isOpen}
        onClose={onClose}
        changeImageSubmitHandler={changeImageSubmitHandler}
      />
    </Container>
  );
}

function ChangePhotoBox({ isOpen, onClose, changeImageSubmitHandler }) {
  const [imgPrev, setImgPrev] = useState("");
  const [image, setImage] = useState("");

  const changeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImgPrev(reader.result);
      setImage(file);
    };
  };

  const closeHandler = () => {
    onClose();
    setImage("");
    setImgPrev("");
  };

  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Container>
            <form onSubmit={(e) => changeImageSubmitHandler(e, image)}>
              <VStack spacing="8">
                {imgPrev && <Avatar src={imgPrev} boxSize="48" />}

                <Input
                  type="file"
                  onChange={changeImage}
                  css={{ "&::file-selector-button": fileUploadCss }}
                />

                <Button w="full" colorScheme="yellow" type="submit">
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>

        <ModalFooter>
          <Button mr="3" onClick={closeHandler}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
