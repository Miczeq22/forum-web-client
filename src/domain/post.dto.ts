export interface PostDTO {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
  };
  status: string;
  category: {
    id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string | null;
}
