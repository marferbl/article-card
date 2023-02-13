export interface Article {
    type: string;
    title: string;
    journal: string;
    section: string;
    editor: object;
    yourself: object;
    authors: [];
  }
export interface User {
    id: number;
    fullName: string;
    role: string;
    publications: number;
    views: number;
    followers: number;
    pictureUrl: string;
    profileUrl: string;
    affiliations: Array<Affiliation>;
  }
export interface Affiliation {
    id: number;
    name: string;
    city: string;
    country: string;
  }