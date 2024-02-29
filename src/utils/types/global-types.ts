import { AxiosResponse } from "axios";

export interface ExtendedProps {
  className?: string,
  children?: React.ReactNode,
  style?: React.CSSProperties,
}

export interface HttpResponse {
  response: AxiosResponse | null;
  error: any | null;
}

export interface PostType {
  id: string,
  firstName: string,
  lastName: string,
  birthDate: string,
  authorId: string,
}

export enum StatusType {
  LOADING,
  ERROR,
  SUCCESS,
}