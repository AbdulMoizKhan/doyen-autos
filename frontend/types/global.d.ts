import { Theme as MuiTheme } from "@mui/material/styles";

export {};

declare global {
  type ReactNode =
    | React.ReactElement<unknown>
    | FunctionComponent<unknown>
    | React.ComponentClass<unknown>
    | null;

  interface IHeader {
    variant?: string | null;
  }
}

declare module "@emotion/react" {
  export type Theme = MuiTheme;
}
