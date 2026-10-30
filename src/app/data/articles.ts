export interface Article {
  id: number;
  title: string;
  website: string;
  image: string;
  description: string;
}

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'Mein erster Artikel',
    website: 'Google.com',
    image: 'https://picsum.photos/id/1/1500/1000',
    description: 'Hier steht eine ausführliche Beschreibung.'
  },
  {
    id: 2,
    title: 'Mein zweiter Artikel',
    website: 'Example.com',
    image: 'https://picsum.photos/id/2/1500/1000',
    description: 'Beschreibung des zweiten Artikels.'
  },
];