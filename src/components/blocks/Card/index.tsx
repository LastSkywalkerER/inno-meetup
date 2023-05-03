import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

export const MediaCard: FC<{ image: string; title: string; description: string }> = ({
  image,
  title,
  description,
}) => {
  return (
    <Card sx={{ width: 400 }} elevation={10}>
      <CardMedia sx={{ height: 500 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};