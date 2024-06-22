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
                        // '& #resume-paper .MuiTypography-h1': {
                        //     color: themeColor.main,
                        // },
                    },
                    h2: {
                        color: `${themeColor.main} !important`,
                        fontSize: `${fontScale * 3.75}rem}`,

                        // '& #resume-paper subtitle1.MuiTypography-h2': {
                        //     color: themeColor.main,
                        // },
                    },
                    h3: {
                        color: `${themeColor.main} !important`,
                        fontSize: `${fontScale * 3}rem}`,

                        // '& #resume-paper .MuiTypography-h3': {
                        //     color: themeColor.main,
                        // },
                    },
                    h4: {
                        color: `${themeColor.main} !important`,
                        fontSize: `${fontScale * 2.125}rem}`,

                        // '& #resume-paper .MuiTypography-h4': {
                        //     color: themeColor.main,
                        // },
                    },
                    h5: {
                        color: `${themeColor.main} !important`,
                        fontSize: `${fontScale * 1.5}rem}`,

                        // '& #resume-paper .MuiTypography-h5': {
                        //     color: themeColor.main,
                        // },
                    },
                    h6: {
                        color: `${themeColor.main} !important`,
                        fontSize: `${fontScale * 1.25}rem}`,

                        // '& #resume-paper .MuiTypography-h6': {
                        //     color: themeColor.main,
                        // },
                    },
                    body1: {
                        color: `${themeColor.light} !important`,
                        fontSize: `${fontScale * 1}rem}`,

                        // '& #resume-paper .MuiTypography-body1': {
                        //     color: themeColor.light,
                        // },
                    },
                    body2: {
                        color: `${themeColor.light} !important`,
                        fontSize: `${fontScale * 0.875}rem}`,

                        // '& #resume-paper .MuiTypography-body2': {
                        //     color: themeColor.light,
                        // },
                    },
                    subtitle1: {
                        color: `${themeColor.main} !important`,
                        fontSize: `${fontScale * 1}rem}`,

                        // '& #resume-paper .MuiTypography-subtitle1': {
                        //     color: themeColor.main,
                        // },
                    },
                    subtitle2: {
                        color: `${themeColor.main} !important`,
                        fontSize: `${fontScale * 0.875}rem}`,

                        // '& #resume-paper .MuiTypography-subtitle2': {
                        //     color: themeColor.main,
                        // },
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
