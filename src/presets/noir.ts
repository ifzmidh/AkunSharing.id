import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

const Severniy = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{lime.50}",
      100: "{lime.100}",
      200: "{lime.200}",
      300: "{lime.300}",
      400: "{lime.400}",
      500: "{lime.500}",
      600: "{lime.600}",
      700: "{lime.700}",
      800: "{lime.800}",
      900: "{lime.900}",
      950: "{lime.950}",
    },
    surface: {
      0: "{surface.0}",
      50: "{surface.50}",
      100: "{surface.100}",
      200: "{surface.200}",
      300: "{surface.300}",
      400: "{surface.400}",
      500: "{surface.500}",
      600: "{surface.600}",
      700: "{surface.700}",
      800: "{surface.800}",
      900: "{surface.900}",
      950: "{surface.950}",
    },
    content: {
      default: "{content.default}",
      secondary: "{content.secondary}",
      tertiary: "{content.tertiary}",
      inverse: "{content.inverse}",
      strong: "{content.strong}",
      surface: "{content.surface}",
    },
    divider: {
      default: "{divider.default}",
      strong: "{divider.strong}",
    },
    state: {
      focusRing: "{lime.500}",
      hover: "{lime.700}",
      active: "{lime.800}",
    },
    colorScheme: {
      light: {
        primary: {
          color: "{lime.800}",
          inverseColor: "{lime.50}",
          hoverColor: "{lime.700}",
          activeColor: "{lime.600}",
        },
        highlight: {
          background: "{lime.800}",
          focusBackground: "{lime.600}",
          color: "{lime.50}",
          focusColor: "{lime.100}",
        },
      },
      dark: {
        primary: {
          color: "{lime.300}",
          inverseColor: "{lime.950}",
          hoverColor: "{lime.400}",
          activeColor: "{lime.200}",
        },
        highlight: {
          background: "{lime.400}",
          focusBackground: "{lime.300}",
          color: "{lime.950}",
          focusColor: "{lime.900}",
        },
      },
    },
  },
});

export default Severniy;
