import { defaultValues2 } from './defaultValues2';

export const tempJSON2 = {
    sections: [
        {
            name: 'personalDetails',
            label: 'Personal Details',
            transformX: 0,
            fields: [
                {
                    name: 'firstName',
                    type: 'text',
                    value: null,
                    required: true,
                    space: 0.5,
                    defaultValue: defaultValues2['firstName'],
                    maxLength: 15,
                },
                {
                    name: 'lastName',
                    type: 'text',
                    value: null,
                    required: true,
                    space: 0.5,
                    defaultValue: defaultValues2['lastName'],
                    maxLength: 15,
                },
                {
                    name: 'jobTitle',
                    type: 'text',
                    value: null,
                    required: true,
                    space: 0.5,
                    defaultValue: defaultValues2['jobTitle'],
                },
                {
                    name: 'currentLocation',
                    label: 'Location',
                    type: 'text',
                    value: null,
                    space: 0.5,
                    defaultValue: defaultValues2['currentLocation'],
                },
                {
                    name: 'phone',
                    type: 'text',
                    value: null,
                    space: 0.5,
                    defaultValue: defaultValues2['phone'],
                },
                {
                    name: 'emailAddress',
                    type: 'text',
                    required: true,
                    value: null,
                    space: 0.5,
                    defaultValue: defaultValues2['emailAddress'],
                },
                {
                    name: 'portfolioUrl',
                    label: 'LinkedIn / Portfolia URL',
                    type: 'text',
                    required: true,
                    value: null,
                    space: 0.5,
                    defaultValue: defaultValues2['portfolioUrl'],
                },
            ],
        },
        {
            name: 'summary',
            transformX: 0,
            fields: [
                {
                    name: 'summary',
                    type: 'textarea',
                    value: null,
                    space: 1,
                    multiLineRows: 12,
                    defaultValue: defaultValues2['summary'],
                },
            ],
        },
        {
            name: 'skills',
            label: 'Technical Skills',
            transformX: 0,
            fields: [
                {
                    name: 'technicalSkills',
                    type: 'textarea',
                    required: true,
                    value: null,
                    space: 1,
                    multiLineRows: 6,
                },
            ],
        },
        {
            name: 'professionalExperience',
            label: 'Professional Experience',
            transformX: 0,
            fields: [
                {
                    name: 'positionTitle',
                    type: 'text',
                    value: null,
                    required: true,
                    space: 0.5,
                    defaultValue: defaultValues2['positionTitle'],
                },
                {
                    name: 'companyName',
                    type: 'text',
                    value: null,
                    required: true,
                    space: 0.5,
                    defaultValue: defaultValues2['companyName'],
                    maxLength: 25,
                },
                {
                    name: 'location',
                    type: 'text',
                    value: null,
                    space: 0.5,
                    defaultValue: defaultValues2['location'],
                    maxLength: 25,
                },
                {
                    type: null,
                    space: 0.5,
                },
                {
                    name: 'startDate',
                    type: 'date',
                    value: null,
                    required: true,
                    space: 0.5,
                    defaultValue: defaultValues2['startDate'],
                },
                {
                    name: 'endDate',
                    type: 'date',
                    value: null,
                    space: 0.5,
                    defaultValue: defaultValues2['endDate'],
                },
                {
                    name: 'workSummary',
                    type: 'textarea',
                    value: null,
                    space: 1,
                    required: true,
                    multiLineRows: 12,
                    defaultValue: defaultValues2['workSummary'],
                },
            ],
        },

        {
            name: 'projectDetails',
            label: 'Personal Projects',
            transformX: 0,
            fields: [
                {
                    name: 'projectName',
                    type: 'text',
                    required: true,
                    value: null,
                    space: 1,
                    defaultValue: defaultValues2['projectName'],
                },
                {
                    name: 'startDate',
                    label: 'Project Completion Date',
                    type: 'date',
                    value: null,
                    required: true,
                    space: 0.5,
                },
                {
                    type: null,
                    space: 0.5,
                },
                {
                    name: 'description',
                    label: 'Describe Your projects in Points',
                    type: 'textarea',
                    required: true,
                    value: null,
                    space: 1,
                    multiLineRows: 6,
                },
            ],
        },

        {
            name: 'educationDetails',
            label: 'Education',
            transformX: 0,
            fields: [
                {
                    name: 'schoolName',
                    type: 'text',
                    required: true,
                    value: null,
                    space: 0.5,
                    maxLength: 30,
                    defaultValue: defaultValues2['schoolName'],
                },
                {
                    name: 'startDate',
                    type: 'date',
                    value: null,
                    required: true,
                    space: 0.5,
                },
                {
                    name: 'endDate',
                    type: 'date',
                    value: null,
                    space: 0.5,
                },
                {
                    name: 'degree',
                    type: 'text',
                    required: true,
                    value: null,
                    space: 0.5,
                    maxLength: 30,
                },
                {
                    name: 'fieldOfStudy',
                    type: 'text',
                    required: true,
                    value: null,
                    space: 0.5,
                    maxLength: 30,
                },
                {
                    name: 'description',
                    type: 'textarea',
                    required: true,
                    value: null,
                    space: 1,
                    multiLineRows: 6,
                },
            ],
        },
    ],
};
