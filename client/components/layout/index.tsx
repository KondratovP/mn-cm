import { ReactNode } from "react";
import NextLink from "next/link";
import {
  Box,
  Flex,
  HStack,
  Link,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import ExchangeValueIndicator from "../common/exchange-value-indicator";

const NavLink: React.FC<{ children: ReactNode; to: string }> = ({
  children,
  to,
}) => (
  <NextLink href={to}>
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      to={to || "/"}
    >
      {children}
    </Link>
  </NextLink>
);

const Navigation = () => (
  <>
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Flex
          width="100%"
          spacing={8}
          alignItems={"center"}
          justifyContent="space-between"
        >
          <HStack as={"nav"} spacing={4}>
            <NavLink to="/">Каталог</NavLink>
            <NavLink to="checkout">{"Корзина"}</NavLink>
          </HStack>

          <Text
            alignItems={"center"}
            as="p"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="sm"
            justifyContent="center"
          >
            курс $ <ExchangeValueIndicator />
          </Text>
        </Flex>
      </Flex>
    </Box>
  </>
);

export default Navigation;
