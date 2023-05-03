import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { FC } from 'react';

import { useClasses } from './styles';

export const StageRow: FC<{ name: string; value?: string; className?: string }> = ({
  name,
  value,
  className,
}) => {
  const { classes } = useClasses();

  return (
    <Box className={clsx(classes.stageRow, className)}>
      <Typography>{name}: </Typography>
      <Typography variant="body2">{value}</Typography>
    </Box>
  );
};
