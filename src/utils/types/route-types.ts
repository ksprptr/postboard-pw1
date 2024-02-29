import { ComponentType } from "react";

export interface Route {
  path: string;
  component: ComponentType;
}

export interface NavbarRoute {
  name: string;
  path: string;
}