import LocalizedStrings from 'react-localization';
import Env from '../config/env.config';
import UserService from '../services/UserService';

export const strings = new LocalizedStrings({
    fr: {
        EMPTY_LIST: 'Pas de notifications',
        VIEW: 'Consulter',
        MARK_AS_READ: 'Marquer comme lu',
        MARK_AS_UNREAD: 'Marquer comme non lu',
        MARK_ALL_AS_READ: 'Tout marquer comme lu',
        MARK_ALL_AS_UNREAD: 'Tout marquer comme non lu',
        DELETE_ALL: 'Tout supprimer'
    },
    en: {
        EMPTY_LIST: 'No notifications',
        VIEW: 'View',
        MARK_AS_READ: 'Mark as read',
        MARK_AS_UNREAD: 'Mark as unread',
        MARK_ALL_AS_READ: 'Mark all as read',
        MARK_ALL_AS_UNREAD: 'Mark all as unread',
        DELETE_ALL: 'Delete all'
    }
});

let language = UserService.getQueryLanguage();

if (language === '' || !Env.LANGUAGES.includes(language)) {
    language = UserService.getLanguage();
}

strings.setLanguage(language);