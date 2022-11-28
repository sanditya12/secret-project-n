export interface GetLetterResponse {
  data: Data;
  meta: Meta;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Meta {}
