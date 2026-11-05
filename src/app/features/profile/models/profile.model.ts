import { UserProfile } from '../../../core/api-services/profilo/profilo.model';

export type CardField = {
  key: keyof UserProfile;
  label: string;
};

export type CardConfig = {
  title: string;
  icon: string;
  fields: CardField[];
};
