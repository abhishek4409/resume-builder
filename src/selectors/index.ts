export const templateSelector = (state: any) => state.templateReducer;

export const personalDetailSelector = (state: any) => {
    const name = 'personalDetails';
    const result = state.templateReducer.sections.find(
        (section: any) => section.name === name
    );
    return result;
};

export const professionalExperienceSelector = (state: any) => {
    const name = 'professionalExperience';
    const result = state.templateReducer.sections.find(
        (section: any) => section.name === name
    );
    return result;
};

export const educationDetailsSelector = (state: any) => {
    const name = 'educationDetails';
    const result = state.templateReducer.sections.find(
        (section: any) => section.name === name
    );
    return result;
};

export const skillsSelector = (state: any) => {
    const name = 'skills';
    const result = state.templateReducer.sections.find(
        (section: any) => section.name === name
    );
    return result;
};

export const summarySelector = (state: any) => {
    const name = 'summary';
    const result = state.templateReducer.sections.find(
        (section: any) => section.name === name
    );
    return result;
};

export const resumeFormattingSelector = (state: any) => state.formattingReducer;

export const resumeCurrentStepSelector = (state: any) =>
    state.formattingReducer.currentStep;

export const resumeThemeColorSelector = (state: any) =>
    state.formattingReducer.currentColor;

export const resumeThemeColorListSelector = (state: any) =>
    state.formattingReducer.colorList;

export const resumeFontSizeSelector = (state: any) =>
    state.formattingReducer.currentFontSize;

export const resumeFontSizeListSelector = (state: any) =>
    state.formattingReducer.fontSizeList;

export const resumeFontFamilySelector = (state: any) =>
    state.formattingReducer.currentFontFamily;

export const resumeFontFamilyListSelector = (state: any) =>
    state.formattingReducer.fontFamilyList;

export const dragEnableSelector = (state: any) =>
    state.formattingReducer.allowDrag;

export const resumeTitleSelector = (state: any) =>
    state.formattingReducer.resumeTitle;

export const resumeUIDSelector = (state: any) => state.formattingReducer?.uid;

export const alertBoxSelector = (state: any) => state.alertReducer;

export const savedResumeSelector = (state: any) => state.savedResumeReducer;
