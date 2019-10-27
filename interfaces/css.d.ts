import * as CSS from "csstype";

declare module "csstype" {
  interface Properties {
    // Add a missing property
    WebkitRocketLauncher?: string;

    // Add a CSS Custom Property
    "--pdxPt"?: number | string;
    "--pdxPm"?: number | string;
    "--pdxPb"?: number | string;
    "--wrMax"?: number | string;
    "--wrMin"?: number | string;
    "--pdxMinHeight"?: number | string;
    "--pdxMaxheight"?: number | string;
  }
}
