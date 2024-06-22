import React, { useId } from 'react';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    Grid,
    InputLabel,
    Step,
    StepLabel,
    Stepper,
    TextField,
    Typography,
} from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import DownloadIcon from '@mui/icons-material/Download';
import { convertToSentenceCase } from '../../utils/utils';

export const DynamicFields = ({
    selectTemplate,
    currentStep,
    handleInputChange,
    exportToPDF,
}) => {
    const fieldIds = useId();

    const currentFields = selectTemplate?.sections?.[currentStep]?.fields || [];
    return (
        <Grid container>
            {currentFields.map((field: any, index: number) => (
                <Grid
                    item
                    xs={field.space * 12}
                    key={`${fieldIds}_step${index}_${field?.name}`}
                >
                    <Box
                        // key={fieldIds + field?.name}
                        sx={{
                            display: 'flex',
                            height: 'calc(100% - 1.5rem)',
                            justifyContent: [
                                'text',
                                'textarea',
                                'date',
                            ].includes(field?.type)
                                ? 'center'
                                : 'start',
                            margin: '0.75rem 1.5rem',
                            alignItems: ['text', 'textarea', 'date'].includes(
                                field?.type
                            )
                                ? 'start'
                                : 'flex-end',

                            flexDirection: [
                                'text',
                                'textarea',
                                'date',
                            ].includes(field?.type)
                                ? 'column'
                                : 'row',
                        }}
                    >
                        <InputLabel
                            // key={fieldIds + field?.name}
                            required={field?.required}
                            shrink={true}
                            // htmlFor={'username'}
                            sx={{
                                '.MuiInputLabel-asterisk': {
                                    color: 'red',
                                },
                            }}
                        >
                            <span>
                                {field?.label
                                    ? field.label || ''
                                    : convertToSentenceCase(field?.name) || ''}
                            </span>
                        </InputLabel>
                        {['text', 'textarea', 'date'].includes(field?.type) && (
                            <TextField
                                // key={fieldIds + field?.name}
                                sx={{
                                    width: '100%',
                                }}
                                size="small"
                                type={field?.type || 'text'}
                                multiline={field?.type === 'textarea'}
                                rows={
                                    field?.type === 'textarea'
                                        ? field?.multiLineRows || 4
                                        : undefined
                                }
                                name={field?.name}
                                onChange={(event) =>
                                    handleInputChange(
                                        event,
                                        field,
                                        currentStep,
                                        index
                                    )
                                }
                                inputProps={{
                                    ...(field?.maxLength
                                        ? {
                                              maxLength: field?.maxLength + '',
                                          }
                                        : {}),
                                }}
                                value={field?.value}
                                //   defaultValue="Hello World"
                            />
                        )}
                        {field?.type === 'checkbox' && (
                            <Checkbox
                                // key={fieldIds + field?.name}
                                size="small"
                                // type={field?.type || 'text'}
                                sx={{
                                    padding: '0.3rem',
                                    marginLeft: '-1rem',
                                }}
                                name={field?.name}
                                onChange={(event) =>
                                    handleInputChange(
                                        event,
                                        field,
                                        currentStep,
                                        index
                                    )
                                }
                                checked={field?.value}
                                //   defaultValue="Hello World"
                            />
                        )}
                    </Box>
                </Grid>
            ))}
            {currentFields.length === 0 && (
                <Grid
                    container
                    justifyContent="center"
                    alignContent="center"
                    alignItems="center"
                    marginTop="2rem"
                    flexDirection="column"
                >
                    <Box>
                        <Typography
                            textAlign="center"
                            width="100%"
                            variant="h4"
                            fontFamily="Montserrat"
                        >
                            {' '}
                            Resume Completed
                        </Typography>
                    </Box>
                    <Box sx={{ mt: '1rem' }} />
                    <Box>
                        <TaskAltIcon fontSize="large" color="primary" />
                    </Box>
                    <Box sx={{ mt: '5rem' }} />
                    <Box>
                        <Typography
                            textAlign="center"
                            width="100%"
                            variant="h6"
                            fontFamily="Montserrat"
                        >
                            {' '}
                            Export your Resume to PDF
                        </Typography>
                    </Box>
                    <Box sx={{ mt: '1rem' }} />
                    <Box>
                        <DownloadIcon
                            sx={{ cursor: 'pointer', fontSize: '4rem' }}
                            fontSize="large"
                            color="primary"
                            onClick={exportToPDF}
                        />
                    </Box>
                </Grid>
            )}
        </Grid>
    );
};
