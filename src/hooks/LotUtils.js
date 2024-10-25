// Функция для форматирования даты
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };
  
  // Функция для форматирования времени
  export const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
// Функция для форматирования даты 29 ноября 2023
  export const formatDateMonth = (dateStr) => {
    const date = new Date(dateStr);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString("ru-RU", options);
};

export const formatMinutes = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleTimeString("ru-RU", { minute: '2-digit' });
};

export const formatTimeAgo = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  
  // Разница в миллисекундах
  const diffInMs = now - date;

  // Конвертация разницы в различные единицы времени
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  // Форматирование результата
  if (diffInDays > 0) {
      return diffInDays === 1 ? "1 день назад" : `${diffInDays} дней назад`;
  } else if (diffInHours > 0) {
      return diffInHours === 1 ? "1 час назад" : `${diffInHours} часов назад`;
  } else if (diffInMinutes > 0) {
      return diffInMinutes === 1 ? "1 минуту назад" : `${diffInMinutes} минут назад`;
  } else {
      return "Только что";
  }
};


// Функция для обработки purchaseTyp
  export const formatPurchaseType = (purchaseType) => {
    const words = purchaseType.split(' ');
    if (words.length > 1) {
      // Если несколько слов, возвращаем первые буквы каждого слова
      return words.map(word => word[0].toUpperCase()).join('');
    }
    // Если одно слово, возвращаем его как есть
    return purchaseType;
  };