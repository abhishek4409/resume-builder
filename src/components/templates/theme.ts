import { createTheme } from '@mui/material';

export const theme = (
    themeColor: string,
    fontSize: string,
    fontFamily: string
) => {
    let fontScale = String(fontSize).matchAll(/\d+/g).next().value[0];
    fontScale = Number(fontScale / 16);

    return createTheme({
        palette: {
            text: {
                primary: `${themeColor.main} !important`,
                secondary: `${themeColor.light} !important`,
            },
        },
        components: {
            MuiTypography: {
                styleOverrides: {
                    root: {
                        fontFamily: fontFamily,
                        '&.italic': {
                            fontStyle: 'italic',
                        },
                        '&.bold': {
                            fontWeight: 'bold',
                        },
                    },
                    h1: {
                        color: `${themeColor.main} !important`,
                        fontSize: `${fontScale * 6}rem}`,
                    },
                    h2: {
                        color: `${themeColor.main} !important`,
                        fontSize: `${fontScale * 3.75}rem}`,
                    },
                    h3: {
                        color: `${themeColor.main} !important`,
                        fontSize: `${fontScale * 3}rem}`,
                    },
                    h4: {
                        color: `${themeColor.main} !important`,
                        fontSize: `${fontScale * 2.125}rem}`,
                    },
                    h5: {
                        color: `${themeColor.main} !important`,
                        fontSize: `${fontScale * 1.5}rem}`,
                    },
                    h6: {
                        color: `${themeColor.main} !important`,
                        fontSize: `${fontScale * 1.25}rem}`,
                    },
                    body1: {
                        color: `${themeColor.light} !important`,
                        fontSize: `${fontScale * 1}rem}`,
                    },
                    body2: {
                        color: `${themeColor.light} !important`,
                        fontSize: `${fontScale * 0.875}rem}`,
                    },
                    subtitle1: {
                        color: `${themeColor.main} !important`,
                        fontSize: `${fontScale * 1}rem}`,
                    },
                    subtitle2: {
                        color: `${themeColor.main} !important`,
                        fontSize: `${fontScale * 0.875}rem}`,
                    },
                },
            },
            MuiDivider: {
                styleOverrides: {
                    fullWidth: {},
                },
            },
            MuiGrid: {
                styleOverrides: {
                    item: {
                        '&.nowrap': {
                            whiteSpace: 'nowrap',
                        },
                    },
                },
            },
        },
    });
};
