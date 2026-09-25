import type { ComponentProps } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";

type ThemeImageProps = Omit<ComponentProps<"img">, "src"> & {
  light: string;
  dark: string;
  alt: string;
};

/** Resolve both local assets without a client-only theme branch. */
export default function ThemeImage({ light, dark, ...props }: ThemeImageProps) {
  const lightSource = useBaseUrl(light);
  const darkSource = useBaseUrl(dark);
  return <ThemedImage sources={{ light: lightSource, dark: darkSource }} {...props} />;
}
