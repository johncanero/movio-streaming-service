'use client';

import { PropagateLoader } from 'react-spinners';
import Box from '@/app/components/Box';

const Loading = () => {
    return (
        <Box className='flex items-center justify-center h-full'>
            <PropagateLoader color='#ff0000' size={30} />
        </Box>
    );
};

export default Loading;