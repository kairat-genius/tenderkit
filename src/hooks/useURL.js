export const useURL = () => {
    return {

      Detail: { name: 'Detail', path: '/result/:slug'},
      PrivacyPolicy: { name: 'PrivacyPolicy', path: '/privacy-policy'},
      UserAgreement: { name: 'UserAgreement', path: '/user-agreement'},
      AboutService: { name: 'AboutService', path: '/about-service'},
      Tariffs: { name: 'Tariffs', path: '/tariffs'},
      Regions: {name: 'Regions', path: '/regions'},
      Areas: {name: 'Areas', path: '/areas'},
      Result: {name: 'Result', path: '/result'},
      Contacts: {name: 'Contacts', path: '/contacts'},

      // Блог 
      Author: {name: 'Author', path: ':author_slug'},
      Article: {name: 'Article', path: ':author_slug/:slug'},
      // Кабинет
      Profile: {name: 'Profile', path: 'profile'},
      Favorites: {name: 'Favorites', path: 'favorites'},
      FoldersList: {name: 'FoldersList', path: 'folders'},
      FoldersDetail: {name: 'FoldersDetail', path: 'folders/:id'},
      Subscribes: {name: 'Subscribes', path: 'subscribes'},
      MailingHistory: {name: 'MailingHistory', path: 'mailing-history'},
      Tracking: {name: 'Tracking', path: 'tracking'},
    };
  };
  

