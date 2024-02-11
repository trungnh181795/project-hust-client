import { FC } from 'react';
import { Box, LinearProgress } from '@mui/material';

const LinearLoading: FC = () =>  {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );
}

export default LinearLoading