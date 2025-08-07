export interface Album {
  id: string;
  title: string;
  description?: string;
  dateCreated: string;
}

export interface Song {
  id: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

export interface Artist {
  id: string;
  firstName: string;
  lastName: string;
}