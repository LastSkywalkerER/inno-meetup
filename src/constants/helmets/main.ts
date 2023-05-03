import { images } from '@/assets';
import { HelmetOptions } from '@/components/hocs/with-helmet.hoc';

export const mainHelmet: HelmetOptions = {
  favicon: images.icon,
  title: 'Inno Meetup',
  author: 'Innowise',
  description: 'Inno Meetup',
  image: images.icon,
  keywords: 'Blockchain',
  openGraphDescription: 'Inno Meetup',
  openGraphTitle: 'Inno Meetup',
  url: '',
};
