import axios from 'axios';
import { BLOG_COMMENTS_ADD, accessToken } from "../../../Fetch/settings";
import { toast } from 'react-toastify';

export const postBlogCommentAdd = async ({ slug, text }) => {
  try {
    const response = await axios.post(BLOG_COMMENTS_ADD, {
      article_slug: slug,
      text: text
    }, {
      headers: {
        'Authorization': `JWT ${accessToken}`,
        'Content-Type': 'application/json',
      }
    });
    toast.success('Комментарий добавлен!');

  } catch (error) {
    toast.error('Ошибка при обновлении избранного');
    console.error('Error:', error);
  }
};
