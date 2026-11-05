import { UserProfile } from './core/api-services/profilo/profilo.model';

export type ServicesType = {
  name: string;
  text: string;
  icon: string;
  category: string;
};

export type MenuType = {
  name: string;
  icon: string;
  id: string;
};

export type CardField = {
  key: keyof UserProfile;
  label: string;
};

export type CardConfig = {
  title: string;
  icon: string;
  fields: CardField[];
};
