import React from 'react';
import { useSelector } from 'react-redux';

export const useSelect = (selectorCallback: any) => {
    const selected: any = useSelector(selectorCallback);

    return [selected];
};
