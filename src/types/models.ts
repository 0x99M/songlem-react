export interface Album {
  id: string;
  title: string;
  description: string;
  date_created: string;
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
  first_name: string;
  last_name: string;
}