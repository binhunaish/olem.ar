import { type ReactNode } from "react";
import clsx from "clsx";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { translate } from "@docusaurus/Translate";
import { useColorMode, useThemeConfig } from "@docusaurus/theme-common";
import IconLightMode from "@theme/Icon/LightMode";
import IconDarkMode from "@theme/Icon/DarkMode";
import IconSystemColorMode from "@theme/Icon/SystemColorMode";
import type { Props } from "@theme/Navbar/ColorModeToggle";
import type { ColorMode } from "@docusaurus/theme-common";
import styles from "./styles.module.css";

function getNextColorMode(
  colorMode: ColorMode | null,
  respectPrefersColorScheme: boolean,
) {
  if (!respectPrefersColorScheme) {
    return colorMode === "dark" ? "light" : "dark";
  }

  switch (colorMode) {
    case null:
      return "light";
    case "light":
      return "dark";
    case "dark":
      return null;
    default:
      throw new Error(`unexpected color mode ${colorMode}`);
  }
}

function getColorModeLabel(colorMode: ColorMode | null): string {
  switch (colorMode) {
    case null:
      return translate({
        message: "system mode",
        id: "theme.colorToggle.ariaLabel.mode.system",
        description: "The name for the system color mode",
      });
    case "light":
      return translate({
        message: "light mode",
        id: "theme.colorToggle.ariaLabel.mode.light",
        description: "The name for the light color mode",
      });
    case "dark":
      return translate({
        message: "dark mode",
        id: "theme.colorToggle.ariaLabel.mode.dark",
        description: "The name for the dark color mode",
      });
    default:
      throw new Error(`unexpected color mode ${colorMode}`);
  }
}

function getColorModeAriaLabel(colorMode: ColorMode | null) {
  return translate(
    {
      message: "Switch between dark and light mode (currently {mode})",
      id: "theme.colorToggle.ariaLabel",
      description: "The ARIA label for the color mode toggle",
    },
    { mode: getColorModeLabel(colorMode) },
  );
}

export default function NavbarColorModeToggle({
  className,
}: Props): ReactNode {
  const navbarStyle = useThemeConfig().navbar.style;
  const { disableSwitch, respectPrefersColorScheme } =
    useThemeConfig().colorMode;
  const { colorModeChoice, setColorMode } = useColorMode();
  const isBrowser = useIsBrowser();

  if (disableSwitch) {
    return null;
  }

  const choice = colorModeChoice ?? "system";

  return (
    <div
      className={clsx(styles.toggle, className)}
      data-theme-choice={choice}
    >
      <button
        className={clsx(
          "clean-btn",
          styles.toggleButton,
          !isBrowser && styles.toggleButtonDisabled,
          navbarStyle === "dark" && styles.darkNavbarColorModeToggle,
        )}
        type="button"
        onClick={() =>
          setColorMode(
            getNextColorMode(colorModeChoice, respectPrefersColorScheme),
          )
        }
        disabled={!isBrowser}
        title={getColorModeLabel(colorModeChoice)}
        aria-label={getColorModeAriaLabel(colorModeChoice)}
      >
        <span className={styles.iconStack}>
          <span aria-hidden className={clsx("material-symbols-rounded", styles.toggleIcon, styles.lightToggleIcon)}> sunny </span>
          <span aria-hidden className={clsx("material-symbols-rounded", styles.toggleIcon, styles.darkToggleIcon)}> dark_mode </span>
        </span>
      </button>
    </div>
  );
}