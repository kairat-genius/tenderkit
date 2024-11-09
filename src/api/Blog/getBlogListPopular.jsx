import axios from 'axios';
import { BLOG_LIST_POPULAR, accessToken } from "../../Fetch/settings";

export const getBlogListPopular = async ({ setData, setLoading }) => {
  const headers = accessToken
    ? { 'Authorization': `JWT ${accessToken}` }
    : {};

  try {
    const response = await axios.get(BLOG_LIST_POPULAR, { headers });
    setData(response.data);
  } finally {
    if (setLoading) setLoading(false); 
  }
};