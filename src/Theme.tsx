import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import type { GlobalStyleProps, Styles } from '@chakra-ui/theme-tools';

const styles : Styles = {
  global: (props) => ({
    body: {
      bg: mode('gray.100', '#272727')(props),
    },
  }),
};

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
}

const components = {
  Menu: {
    baseStyle: (props : GlobalStyleProps) => ({
      list: {
        minW: "4xs",
        transition: "background 10ms ease-in 0s",
        borderRadius: "sm",
        bg: mode('#fff', '#545454')(props),
      },
      item: {
        _focus: {
          bg: mode('#c0d3db', '#3c3c3c')(props),
        },
        _active: {
          bg: mode('#a9b8bf', '#545454')(props),
        },
        _expanded: {
          bg: mode('#c0d3db', '#3c3c3c')(props),
        },
      }
    })
  },
  Popover: {
    baseStyle: (props : GlobalStyleProps) => ({
      content: {
        bg: mode("white", "#545454")(props),
      }
    })
  },
};

const theme = extendTheme({
  config,
  components,
  styles,
});

export default theme