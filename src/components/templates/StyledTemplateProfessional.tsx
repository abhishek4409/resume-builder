import React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { useSelect } from '../../hooks/useSelect';

import {
    resumeThemeColorSelector,
    resumeFontSizeSelector,
    dragEnableSelector,
    resumeFontFamilySelector,
    educationDetailsSelector,
    personalDetailSelector,
    summarySelector,
    professionalExperienceSelector,
    skillsSelector,
    personalProjectsSelector,
} from '../../selectors';

import { ThemeProvider } from '@emotion/react';
import moment from 'moment';
import { defaultValues2 } from './defaultValues2';
import { theme } from './theme';

import Draggable from 'react-draggable';
import WithDrag from '../../hoc/WithDrag';

export const StyledTemplateProfessional = () => {
    const [selectPersonalDetail] = useSelect(personalDetailSelector);
    const [selectSummary] = useSelect(summarySelector);
    const [selectProfessionalExperience] = useSelect(
        professionalExperienceSelector
    );
    const [selectEducationDetails] = useSelect(educationDetailsSelector);
    const [selectPersonalProjects] = useSelect(personalProjectsSelector);
    const [selectSkills] = useSelect(skillsSelector);

    const [selectFormattingColor] = useSelect(resumeThemeColorSelector);
    const [selectCurrentFont] = useSelect(resumeFontSizeSelector);
    const [selectCurrentFontFamily] = useSelect(resumeFontFamilySelector);
    const [selectDragEnable] = useSelect(dragEnableSelector);

    const style = theme(
        selectFormattingColor,
        selectCurrentFont,
        selectCurrentFontFamily
    );

    return (
        <ThemeProvider theme={style}>
            <Grid
                id="resume-main"
                container
                sx={{
                    padding: '1rem 1.75rem 1rem 1.75rem',
                    '& li::marker': {
                        color: selectFormattingColor.main,
                    },
                    ...(selectDragEnable
                        ? {
                              '& div[id^="section"]': {
                                  '&:hover': {
                                      outline: 'solid 1px',
                                      outlineColor: 'text.primary',
                                  },
                              },
                          }
                        : {}),
                }}
            >
                <WithDrag>
                    <Grid container id={`section_0`} className="handle">
                        {/** First and Second Name */}
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography variant="h4" color="textPrimary">
                                    {/* @ts-ignore:*/}
                                    {Object.groupBy(
                                        selectPersonalDetail?.fields || [],
                                        ({ name }: any) => name
                                    )['firstName']?.[0]?.value ||
                                        defaultValues2['firstName']}
                                </Typography>

                                <Box sx={{ ml: 0.5 }} />

                                <Typography variant="h4" color="textPrimary">
                                    {/* @ts-ignore:*/}
                                    {Object.groupBy(
                                        selectPersonalDetail?.fields || [],
                                        ({ name }: any) => name
                                    )['lastName']?.[0]?.value ||
                                        defaultValues2['lastName']}
                                </Typography>
                            </Box>
                        </Grid>

                        {/** Job Title */}
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography
                                    variant="subtitle1"
                                    color="textPrimary"
                                >
                                    {/* @ts-ignore:*/}
                                    {Object.groupBy(
                                        selectPersonalDetail?.fields || [],
                                        ({ name }: any) => name
                                    )['jobTitle']?.[0]?.value ||
                                        defaultValues2['jobTitle']}
                                </Typography>
                            </Box>
                        </Grid>

                        {/** Phone | Email |  Linkedin/portfolio | Location*/}
                        <Grid item xs={12} className="nowrap">
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    color="textPrimary"
                                >
                                    {/* @ts-ignore:*/}
                                    {Object.groupBy(
                                        selectPersonalDetail?.fields || [],
                                        ({ name }: any) => name
                                    )['phone']?.[0]?.value ||
                                        defaultValues2['phone']}
                                </Typography>

                                <Typography
                                    variant="subtitle2"
                                    color="textPrimary"
                                >
                                    &nbsp;&nbsp;|&nbsp;&nbsp;
                                </Typography>

                                <Typography
                                    variant="subtitle2"
                                    color="textPrimary"
                                >
                                    {/* @ts-ignore:*/}
                                    {Object.groupBy(
                                        selectPersonalDetail?.fields || [],
                                        ({ name }: any) => name
                                    )['emailAddress']?.[0]?.value ||
                                        defaultValues2['emailAddress']}
                                </Typography>

                                <Typography
                                    variant="subtitle2"
                                    color="textPrimary"
                                >
                                    &nbsp;&nbsp;|&nbsp;&nbsp;
                                </Typography>

                                {/* Change field */}
                                <Typography
                                    variant="subtitle2"
                                    color="textPrimary"
                                >
                                    {/* @ts-ignore:*/}
                                    {Object.groupBy(
                                        selectPersonalDetail?.fields || [],
                                        ({ name }: any) => name
                                    )['portfolioUrl']?.[0]?.value ||
                                        defaultValues2['portfolioUrl']}
                                </Typography>

                                <Typography
                                    variant="subtitle2"
                                    color="textPrimary"
                                >
                                    &nbsp;&nbsp;|&nbsp;&nbsp;
                                </Typography>

                                <Typography
                                    variant="subtitle2"
                                    color="textPrimary"
                                >
                                    {/* @ts-ignore:*/}
                                    {Object.groupBy(
                                        selectPersonalDetail?.fields || [],
                                        ({ name }: any) => name
                                    )['currentLocation']?.[0]?.value ||
                                        defaultValues2['currentLocation']}
                                </Typography>
                            </Box>
                        </Grid>

                        {/** 1rem of line space */}
                        <Grid item xs={12}>
                            <Box sx={{ mt: '1rem' }} />
                        </Grid>
                    </Grid>
                </WithDrag>

                <WithDrag>
                    <Grid container id={`section_1`} className="handle">
                        {/* Change field */}
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography variant="h6" color="textPrimary">
                                    {/* {selectProfessionalExperience?.label} */}
                                    Summary
                                </Typography>
                            </Box>
                        </Grid>
                        {/** Horizantal line */}
                        <Grid item xs={12}>
                            <Divider variant="fullWidth" />
                        </Grid>
                        {/** 1rem of line space */}
                        <Grid item xs={12}>
                            <Box sx={{ mt: '1rem' }} />
                        </Grid>

                        {/** Summary */}
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    {/* @ts-ignore:*/}
                                    {Object.groupBy(
                                        selectSummary?.fields || [],
                                        ({ name }: any) => name
                                    )['summary']?.[0]?.value ||
                                        defaultValues2['summary']}
                                </Typography>
                            </Box>
                        </Grid>

                        {/** 1rem of line space */}
                        <Grid item xs={12}>
                            <Box sx={{ mt: '1rem' }} />
                        </Grid>
                    </Grid>
                </WithDrag>

                {/** Skills Section */}
                <WithDrag>
                    <Grid container id={`section_2`} className="handle">
                        {/** Skills Header*/}
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography variant="h6" color="textPrimary">
                                    {selectSkills?.label}
                                </Typography>
                            </Box>
                        </Grid>

                        {/** Horizantal line */}
                        <Grid item xs={12}>
                            <Divider variant="fullWidth" />
                        </Grid>

                        {/** 1rem of line space */}
                        <Grid item xs={12}>
                            <Box sx={{ mt: '1rem' }} />
                        </Grid>

                        {/** Skills */}
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    className="bold"
                                    color="textSecondary"
                                >
                                    {/* @ts-ignore:* */}
                                    {(
                                        Object.groupBy(
                                            selectSkills?.fields || [],
                                            ({ name }: any) => name
                                        )['technicalSkills']?.[0]?.value ||
                                        defaultValues2['technicalSkills']
                                    )
                                        ?.split('\n')
                                        .map((sentence: any, i: number) => (
                                            <li
                                                style={{
                                                    display: 'inline-block',
                                                }}
                                                key={`${sentence.length}_${i}`}
                                            >
                                                {`• ${sentence}`}
                                            </li>
                                        ))}
                                </Typography>
                            </Box>
                        </Grid>

                        {/** 1rem of line space */}
                        <Grid item xs={12}>
                            <Box sx={{ mt: '1rem' }} />
                        </Grid>
                    </Grid>
                </WithDrag>

                <WithDrag>
                    <Grid container id={`section_3`} className="handle">
                        {/** Professional Experience Header */}
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography variant="h6" color="textPrimary">
                                    {selectProfessionalExperience?.label}
                                </Typography>
                            </Box>
                        </Grid>

                        {/** Horizantal line */}
                        <Grid item xs={12}>
                            <Divider variant="fullWidth" />
                        </Grid>

                        {/** 1rem of line space */}
                        <Grid item xs={12}>
                            <Box sx={{ mt: '1rem' }} />
                        </Grid>

                        {/** Professional Experience Job Title */}
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <Typography
                                    variant="subtitle1"
                                    color="textPrimary"
                                >
                                    {/* @ts-ignore:*/}
                                    {Object.groupBy(
                                        selectProfessionalExperience?.fields ||
                                            [],
                                        ({ name }: any) => name
                                    )['positionTitle']?.[0]?.value ||
                                        defaultValues2['positionTitle']}
                                </Typography>
                            </Box>
                        </Grid>

                        {/** Company name and Job Location */}
                        <Grid item xs={6} className="nowrap">
                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    className="italic"
                                    color="textPrimary"
                                >
                                    {/* @ts-ignore:*/}
                                    {Object.groupBy(
                                        selectProfessionalExperience?.fields ||
                                            [],
                                        ({ name }: any) => name
                                    )['companyName']?.[0]?.value ||
                                        defaultValues2['companyName']}
                                </Typography>
                                <Typography
                                    color="textPrimary"
                                    variant="subtitle2"
                                >
                                    ,&nbsp;
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    className="italic"
                                    color="textPrimary"
                                >
                                    {/* @ts-ignore:*/}
                                    {Object.groupBy(
                                        selectProfessionalExperience?.fields ||
                                            [],
                                        ({ name }: any) => name
                                    )['location']?.[0]?.value ||
                                        defaultValues2['location']}
                                </Typography>
                            </Box>
                        </Grid>

                        {/** From and To date */}
                        <Grid item xs={6} className="nowrap">
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'end',
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    className="italic"
                                    color="textPrimary"
                                >
                                    {moment(
                                        // @ts-ignore:*
                                        Object.groupBy(
                                            selectProfessionalExperience?.fields ||
                                                [],
                                            ({ name }: any) => name
                                        )['startDate']?.[0]?.value ||
                                            '2000-01-01',
                                        'YYYY-MM-DD'
                                    )?.format('MMMM YYYY') ||
                                        defaultValues2['startDate']}
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    className="italic"
                                    color="textPrimary"
                                >
                                    &nbsp;-&nbsp;
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    className="italic"
                                    color="textPrimary"
                                >
                                    {moment(
                                        // @ts-ignore:*
                                        Object.groupBy(
                                            selectProfessionalExperience?.fields ||
                                                [],
                                            ({ name }: any) => name
                                        )['endDate']?.[0]?.value ||
                                            '2000-01-01',
                                        'YYYY-MM-DD'
                                    )?.format('MMMM YYYY') ||
                                        defaultValues2['endDate']}
                                </Typography>
                            </Box>
                        </Grid>

                        {/**  of line space */}
                        <Grid item xs={12}>
                            <Box sx={{ mt: '1rem' }} />
                        </Grid>

                        {/** Work Summary */}
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    {/* @ts-ignore:* */}
                                    {(
                                        Object.groupBy(
                                            selectProfessionalExperience?.fields ||
                                                [],
                                            ({ name }: any) => name
                                        )['workSummary']?.[0]?.value ||
                                        defaultValues2['workSummary']
                                    )
                                        ?.split('\n')
                                        .map((sentence: any, i: number) => (
                                            <li key={`${sentence.length}_${i}`}>
                                                {sentence}
                                            </li>
                                        ))}
                                </Typography>
                            </Box>
                        </Grid>

                        {/** 1rem of line space */}
                        <Grid item xs={12}>
                            <Box sx={{ mt: '1rem' }} />
                        </Grid>
                    </Grid>
                </WithDrag>

                <WithDrag>
                    <Grid container id={`section_4`} className="handle">
                        {/** Personal Project Header */}
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography variant="h6" color="textPrimary">
                                    {selectPersonalProjects?.label}
                                </Typography>
                            </Box>
                        </Grid>

                        {/** Horizantal line */}
                        <Grid item xs={12}>
                            <Divider variant="fullWidth" />
                        </Grid>

                        {/** 1rem of line space */}
                        <Grid item xs={12}>
                            <Box sx={{ mt: '1rem' }} />
                        </Grid>

                        {/** Project name */}
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <Typography
                                    variant="subtitle1"
                                    color="textPrimary"
                                >
                                    {/* @ts-ignore:*/}
                                    {Object.groupBy(
                                        selectPersonalProjects?.fields || [],
                                        ({ name }: any) => name
                                    )['projectName']?.[0]?.value ||
                                        defaultValues2['projectName']}
                                </Typography>
                            </Box>
                        </Grid>

                        {/** From and To date */}
                        <Grid item xs={12} className="nowrap">
                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    className="italic"
                                    color="textPrimary"
                                >
                                    {moment(
                                        // @ts-ignore:*
                                        Object.groupBy(
                                            selectPersonalProjects?.fields ||
                                                [],
                                            ({ name }: any) => name
                                        )['startDate']?.[0]?.value ||
                                            '2000-01-01',
                                        'YYYY-MM-DD'
                                    )?.format('MMMM YYYY') ||
                                        defaultValues2['startDate']}
                                </Typography>
                            </Box>
                        </Grid>

                        {/** 1rem of line space */}
                        <Grid item xs={12}>
                            <Box sx={{ mt: '1rem' }} />
                        </Grid>

                        {/** Schooling Description */}
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    {/* @ts-ignore:* */}
                                    {(
                                        Object.groupBy(
                                            selectPersonalProjects?.fields ||
                                                [],
                                            ({ name }: any) => name
                                        )['description']?.[0]?.value ||
                                        defaultValues2['description']
                                    )
                                        ?.split('\n')
                                        .map((sentence: any, i: number) => (
                                            <li key={`${sentence.length}_${i}`}>
                                                {sentence}
                                            </li>
                                        ))}
                                </Typography>
                            </Box>
                        </Grid>

                        {/** 1rem of line space */}
                        <Grid item xs={12}>
                            <Box sx={{ mt: '1rem' }} />
                        </Grid>
                    </Grid>
                </WithDrag>

                <WithDrag>
                    <Grid container id={`section_5`} className="handle">
                        {/** Education Header */}
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography variant="h6" color="textPrimary">
                                    {selectEducationDetails?.label}
                                </Typography>
                            </Box>
                        </Grid>

                        {/** Horizantal line */}
                        <Grid item xs={12}>
                            <Divider variant="fullWidth" />
                        </Grid>

                        {/** 1rem of line space */}
                        <Grid item xs={12}>
                            <Box sx={{ mt: '1rem' }} />
                        </Grid>

                        {/** School name */}
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <Typography
                                    variant="subtitle1"
                                    color="textPrimary"
                                >
                                    {/* @ts-ignore:*/}
                                    {Object.groupBy(
                                        selectEducationDetails?.fields || [],
                                        ({ name }: any) => name
                                    )['schoolName']?.[0]?.value ||
                                        defaultValues2['schoolName']}
                                </Typography>
                            </Box>
                        </Grid>

                        {/** Degree and field of study */}
                        <Grid item xs={6} className="nowrap">
                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    className="italic"
                                    color="textPrimary"
                                >
                                    {/* @ts-ignore:*/}
                                    {Object.groupBy(
                                        selectEducationDetails?.fields || [],
                                        ({ name }: any) => name
                                    )['degree']?.[0]?.value ||
                                        defaultValues2['degree']}
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    color="textPrimary"
                                >
                                    ,&nbsp;
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    className="italic"
                                    color="textPrimary"
                                >
                                    {/* @ts-ignore:*/}
                                    {Object.groupBy(
                                        selectEducationDetails?.fields || [],
                                        ({ name }: any) => name
                                    )['fieldOfStudy']?.[0]?.value ||
                                        defaultValues2['fieldOfStudy']}
                                </Typography>
                            </Box>
                        </Grid>

                        {/** From and To date */}
                        <Grid item xs={6} className="nowrap">
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'end',
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    className="italic"
                                    color="textPrimary"
                                >
                                    {moment(
                                        // @ts-ignore:*
                                        Object.groupBy(
                                            selectEducationDetails?.fields ||
                                                [],
                                            ({ name }: any) => name
                                        )['startDate']?.[0]?.value ||
                                            '2000-01-01',
                                        'YYYY-MM-DD'
                                    )?.format('MMMM YYYY') ||
                                        defaultValues2['startDate']}
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    className="italic"
                                    color="textPrimary"
                                >
                                    &nbsp;-&nbsp;
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    className="italic"
                                    color="textPrimary"
                                >
                                    {moment(
                                        // @ts-ignore:*
                                        Object.groupBy(
                                            selectEducationDetails?.fields ||
                                                [],
                                            ({ name }: any) => name
                                        )['endDate']?.[0]?.value ||
                                            '2000-01-01',
                                        'YYYY-MM-DD'
                                    )?.format('MMMM YYYY') ||
                                        defaultValues2['endDate']}
                                </Typography>
                            </Box>
                        </Grid>

                        {/** 1rem of line space */}
                        <Grid item xs={12}>
                            <Box sx={{ mt: '1rem' }} />
                        </Grid>

                        {/** Schooling Description */}
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    {/* @ts-ignore:* */}
                                    {(
                                        Object.groupBy(
                                            selectEducationDetails?.fields ||
                                                [],
                                            ({ name }: any) => name
                                        )['description']?.[0]?.value ||
                                        defaultValues2['description']
                                    )
                                        ?.split('\n')
                                        .map((sentence: any, i: number) => (
                                            <li key={`${sentence.length}_${i}`}>
                                                {sentence}
                                            </li>
                                        ))}
                                </Typography>
                            </Box>
                        </Grid>

                        {/** 1rem of line space */}
                        <Grid item xs={12}>
                            <Box sx={{ mt: '1rem' }} />
                        </Grid>
                    </Grid>
                </WithDrag>
            </Grid>
        </ThemeProvider>
    );
};
