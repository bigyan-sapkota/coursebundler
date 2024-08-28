import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  useColorMode,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from "react-icons/ri";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import { Link } from "react-router-dom";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isAuthenticated = false;
  const user = {
    role: "admin",
  };

  const logoutHandler = () => {
    console.log("logout");
  };

  return (
    <div>
      <IconButton
        onClick={toggleColorMode}
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        position="fixed"
        top="4"
        right="4"
      >
        {colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
      </IconButton>

      <Button
        onClick={onOpen}
        colorScheme="yellow"
        width="12"
        height="12"
        rounded="full"
        position="fixed"
        top="6"
        left="6"
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={"blur(2px)"} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">COURSE BUNDLER</DrawerHeader>

          <DrawerBody>
            <VStack spacing="4" alignItems="flex-start">
              <LinkButton url="/" title="Home" />
              <LinkButton url="/courses" title="Browse All Courses" />
              <LinkButton url="/request" title="Request a Course" />
              <LinkButton url="/contact" title="Contact Us" />
              <LinkButton url="/about" title="About" />

              <HStack
                justifyContent="space-evenly"
                position="absolute"
                bottom="2rem"
                width="80%"
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to="/profile">
                          <Button variant="ghost" colorScheme="yellow">
                            Profile
                          </Button>
                        </Link>
                        <Button variant="ghost" onClick={logoutHandler}>
                          <RiLogoutBoxLine />
                          Logout
                        </Button>
                      </HStack>

                      {user && user.role === "admin" && (
                        <Link to="/admin/dashboard">
                          <Button colorScheme="purple" variant="ghost">
                            <RiDashboardFill style={{ margin: "4px" }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button colorScheme="yellow">Login</Button>
                    </Link>

                    <p>OR</p>

                    <Link to="/register">
                      <Button colorScheme="yellow">SignUp</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

const LinkButton = ({ url = "/", title = "Home" }) => {
  return (
    <Link to={url}>
      <Button variant="ghost">{title}</Button>
    </Link>
  );
};
