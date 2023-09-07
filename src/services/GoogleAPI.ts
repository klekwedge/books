import axios from 'axios';

interface IRequestParams {
    search: string;
    category: string;
    orderBy: string;
}

const API_KEY = import.meta.env.VITE_API_KEY;

const baseUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:art&orderBy=newest&maxResults=12&key=${API_KEY}`;

export const setQuery = ({ search, category, orderBy }: IRequestParams, currIndex = 0) => {
  const cat = (category === 'all') ? null : `subject:${category}`;
  return `${baseUrl}?q=${search}+${cat}&orderBy=${orderBy}&startIndex=${currIndex}&maxResults=30&key=${API_KEY}`;
};

export const getBooks = async (args: IRequestParams, currIndex: number) => {
  const res = await axios.get(setQuery(args, currIndex));
  return res;
};

export const getBookDetails = async (id: string) => {
  const res = await axios.get(`${baseUrl}/${id}`);
  return res;
};