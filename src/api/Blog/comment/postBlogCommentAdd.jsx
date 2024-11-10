import axios from 'axios';
import { BLOG_COMMENTS_ADD, accessToken } from "../../../Fetch/settings";
export const postBlogCommentAdd = async ({ slug, text, showToast }) => {

  try {
    await axios.post(BLOG_COMMENTS_ADD, {
      article_slug: slug,
      text: text
    }, {
      headers: {
        'Authorization': `JWT ${accessToken}`,
        'Content-Type': 'application/json',
      }
    });
    showToast('Комментарий добавлен!', 'success');

  } catch (error) {
    showToast('Ошибка при добавлений комментарий', 'error');
  }
};
