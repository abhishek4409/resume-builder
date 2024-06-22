import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const defaultTheme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1920,
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            750: 750,
            850: 850,
        },
    },
});
