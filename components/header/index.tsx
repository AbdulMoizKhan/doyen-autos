import {
  Box,
  ListItem,
  Stack,
  SxProps,
  Drawer,
  List,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TextLinks } from "../../utils/helpers";
// import Img from "../img";
import TextButton from "../text-button";
import Container from "../container";
import Logo from "../../assests/logo.png";
import Image from "next/image";
import DefaultButton from "../default-button";

const wrapper = (variant: string | null | undefined): SxProps => {
  return {
    background: variant === "light" ? "#ffffffa6" : "#000",
    height: { xs: "60px", sm: "75px", md: "90px" },
    display: "flex",
    alignItems: "center",
    zIndex: 1000,
    position: "fixed",
    width: "100%",
  };
};

const btnWrapper: SxProps = {
  borderRadius: "8px",
  backgroundColor: "tomato",
};

const navbarWrap: SxProps = {
  mb: { md: 0, xs: 2 },
  mt: { md: 0, xs: 1 },
  display: {
    md: "flex",
    xs: "none",
  },
};

const drawerBtn: SxProps = {
  marginLeft: "auto",
  display: {
    md: "none",
    xs: "flex",
  },
};
const closeBtn = (variant: string | null | undefined): SxProps => {
  return {
    color: variant === "light" ? "text.primary" : "text.secondary",
    "&:hover": { color: "error.main" },
  };
};
const drawerItems: SxProps = {
  borderBottom: "1px solid #4b4040",
  padding: "15px 20px",
  display: "block",
  textAlign: "center",
};

export default function Header({ variant }: IHeader) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = usePathname();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Box sx={wrapper(variant)}>
        <Container>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Link href="/">
              <Image src={Logo} alt="Logo" width={130} height={130} />
            </Link>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={5}
              sx={navbarWrap}
            >
              {TextLinks?.map((text) => {
                return (
                  <TextButton
                    color={
                      variant === "light"
                        ? location === text.url
                          ? "#f40809"
                          : "#000"
                        : location === text.url
                        ? "#f40809"
                        : "#fff"
                    }
                    title={text.title}
                    hoverColor={"#f40809"}
                    redirectLink={text.url}
                    key={text.title}
                  />
                );
              })}
              <Box pl={10}>
                <DefaultButton variant="contained" sx={btnWrapper}>
                  Get a Quote
                </DefaultButton>
              </Box>
            </Stack>

            <IconButton
              sx={drawerBtn}
              size="large"
              edge="start"
              aria-label="logo"
              onClick={toggleDrawer}
            >
              <MenuIcon
                sx={{
                  color:
                    variant === "light" ? "text.primary" : "text.secondary",
                }}
              />
            </IconButton>
            <Drawer
              PaperProps={{
                sx: {
                  backgroundColor: "black",
                  width: "100%",
                },
              }}
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            >
              <Box sx={{ alignSelf: "end" }}>
                <IconButton
                  sx={{
                    margin: "12px 16px 5px 0px",
                  }}
                  size="medium"
                  onClick={toggleDrawer}
                >
                  <CloseIcon sx={closeBtn(variant)} />
                </IconButton>
              </Box>
              <Box>
                <Box>
                  <List>
                    {TextLinks.map((item, index) => (
                      <ListItem
                        sx={drawerItems}
                        onClick={() => setIsDrawerOpen(false)}
                        key={index}
                      >
                        <TextButton
                          color={
                            variant === "light"
                              ? location === item.url
                                ? "#f40809"
                                : "#000"
                              : location === item.url
                              ? "#f40809"
                              : "#fff"
                          }
                          title={item.title}
                          hoverColor={"#f40809"}
                          redirectLink={item.url}
                          key={item.title}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Box sx={{display:'flex',alignItems:"center",justifyContent:'center',mt:'10px'}}>
                    <DefaultButton variant="contained" sx={btnWrapper}>
                      Get a Quote
                    </DefaultButton>
                  </Box>
                </Box>
              </Box>
            </Drawer>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
