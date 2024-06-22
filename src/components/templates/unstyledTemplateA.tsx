import React, { useEffect } from 'react';
import { tempJSON } from './tempJSON';
import {
    Box,
    Divider,
    Grid,
    Typography,
    TypographyProps,
    createTheme,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useSelect } from '../../hooks/useSelect';
import {
    educationDetailsSelector,
    personalDetailSelector,
    summarySelector,
    professionalExperienceSelector,
    skillsSelector,
    resumeThemeColorSelector,
    resumeFontSizeSelector,
    dragEnableSelector,
    resumeFontFamilySelector,
} from '../../selectors';
import { ThemeProvider } from '@emotion/react';
import moment from 'moment';
import { defaultValues } from './defaultValues';
import { theme } from './theme';
import {
    DragDropContext,
    Droppable,
    OnDragEndResponder,
} from 'react-beautiful-dnd';
import Draggable from 'react-draggable';
import WithDrag from '../../hoc/WithDrag';

const Template = () => {
    const [selectPersonalDetail] = useSelect(personalDetailSelector);
    const [selectSummary] = useSelect(summarySelector);
    const [selectProfessionalExperience] = useSelect(
        professionalExperienceSelector
    );
    const [selectEducationDetails] = useSelect(educationDetailsSelector);
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
                    padding: '4rem',
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
                                }}
                            >
                                <Typography variant="h4" color="textPrimary">
                                    {/* @ts-ignore:*/}
                                    {Object.groupBy(
                                        selectPersonalDetail.fields,
                                        ({ name }: any) => name
                                    )['firstName']?.[0]?.value ||
                                        defaultValues['firstName']}
                                </Typography>

                                <Box sx={{ ml: 0.5 }} />

                                <Typography variant="h4" color="textPrimary">
                                    {/* @ts-ignore:*/}
                                    {Object.groupBy(
                                        selectPersonalDetail.fields,
                                        ({ name }: any) => name
                                    )['lastName']?.[0]?.value ||
                                        defaultValues['lastName']}
                                </Typography>
                            </Box>
                        </Grid>

                        {/** Job Title */}
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <Typography variant="h5" color="textPrimary">
                                    {/* @ts-ignore:*/}
                                    {Object.groupBy(
                                        selectPersonalDetail.fields,
                                        ({ name }: any) => name
                                    )['jobTitle']?.[0]?.value ||
                                        defaultValues['jobTitle']}
                                </Typography>
                            </Box>
                        </Grid>

                        {/** Address Line 1 and 2 */}
                        <Grid item xs={12} className="nowrap">
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
                                        selectPersonalDetail.fields,
                                        ({ name }: any) => name
                                    )['address1']?.[0]?.value ||
                                        defaultValues['address1']}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="textPrimary"
                                >
                                    ,&nbsp;
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="textPrimary"
                                >
                                    {/* @ts-ignore:*/}
                                    {Object.groupBy(
                                        selectPersonalDetail.fields,
                                        ({ name }: any) => name
                                    )['address2']?.[0]?.value ||
                                        defaultValues['address2']}
                                </Typography>
                            </Box>
                        </Grid>

                        {/** Phone */}
                        <Grid item xs={6}>
                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    color="textPrimary"
                                >
                                    {/* @ts-ignore:*/}
                                    {Object.groupBy(
                                        selectPersonalDetail.fields,
                                        ({ name }: any) => name
                                    )['phone']?.[0]?.value ||
                                        defaultValues['phone']}
                                </Typography>
                            </Box>
                        </Grid>

                        {/** Email */}
                        <Grid item xs={6} className="nowrap">
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'end',
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    color="textPrimary"
                                >
                                    {/* @ts-ignore:*/}
                                    {Object.groupBy(
                                        selectPersonalDetail.fields,
                                        ({ name }: any) => name
                                    )['emailAddress']?.[0]?.value ||
                                        defaultValues['emailAddress']}
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
                        {/** Summary */}
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    color="textSecondary"
                                >
                                    {/* @ts-ignore:*/}
                                    {Object.groupBy(
                                        selectSummary.fields,
                                        ({ name }: any) => name
                                    )['summary']?.[0]?.value ||
                                        defaultValues['summary']}
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
                    <Grid container id={`section_2`} className="handle">
                        {/** Professional Experience Header */}
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
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
                                        selectProfessionalExperience.fields,
                                        ({ name }: any) => name
                                    )['positionTitle']?.[0]?.value ||
                                        defaultValues['positionTitle']}
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
                                        selectProfessionalExperience.fields,
                                        ({ name }: any) => name
                                    )['companyName']?.[0]?.value ||
                                        defaultValues['companyName']}
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
                                        selectProfessionalExperience.fields,
                                        ({ name }: any) => name
                                    )['location']?.[0]?.value ||
                                        defaultValues['location']}
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
                                            selectProfessionalExperience.fields,
                                            ({ name }: any) => name
                                        )['startDate']?.[0]?.value,
                                        'YYYY-MM-DD'
                                    )?.format('MMMM YYYY') ||
                                        defaultValues['startDate']}
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
                                            selectProfessionalExperience.fields,
                                            ({ name }: any) => name
                                        )['endDate']?.[0]?.value,
                                        'YYYY-MM-DD'
                                    )?.format('MMMM YYYY') ||
                                        defaultValues['endDate']}
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
                                            selectProfessionalExperience.fields,
                                            ({ name }: any) => name
                                        )['workSummary']?.[0]?.value ||
                                        defaultValues['workSummary']
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
                    <Grid container id={`section_3`} className="handle">
                        {/** Education Header */}
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
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
                                        selectEducationDetails.fields,
                                        ({ name }: any) => name
                                    )['schoolName']?.[0]?.value ||
                                        defaultValues['schoolName']}
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
                                        selectEducationDetails.fields,
                                        ({ name }: any) => name
                                    )['degree']?.[0]?.value ||
                                        defaultValues['degree']}
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
                                        selectEducationDetails.fields,
                                        ({ name }: any) => name
                                    )['fieldOfStudy']?.[0]?.value ||
                                        defaultValues['fieldOfStudy']}
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
                                            selectEducationDetails.fields,
                                            ({ name }: any) => name
                                        )['startDate']?.[0]?.value,
                                        'YYYY-MM-DD'
                                    )?.format('MMMM YYYY') ||
                                        defaultValues['startDate']}
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
                                            selectEducationDetails.fields,
                                            ({ name }: any) => name
                                        )['endDate']?.[0]?.value,
                                        'YYYY-MM-DD'
                                    )?.format('MMMM YYYY') ||
                                        defaultValues['endDate']}
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
                                            selectEducationDetails.fields,
                                            ({ name }: any) => name
                                        )['description']?.[0]?.value ||
                                        defaultValues['description']
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
                        {/** Skills Header*/}
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: 'flex',
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
                                            selectSkills.fields,
                                            ({ name }: any) => name
                                        )['skill']?.[0]?.value ||
                                        defaultValues['skill']
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
                {/* </Droppable>
                </DragDropContext> */}
            </Grid>
        </ThemeProvider>
    );
};

export default Template;
