import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { useSelect } from '../hooks/useSelect';
import { dragEnableSelector, templateSelector } from '../selectors';
import { useDispatch } from 'react-redux';

const WithDrag = ({ children }) => {
    const dispatch = useDispatch();
    const [selectDragEnable] = useSelect(dragEnableSelector);
    const [selectTemplate] = useSelect(templateSelector);

    const [sectionIndex, setSectionIndex] = useState(0);

    useEffect(() => {
        const idx = children?.props?.id?.split('_')?.[1];
        setSectionIndex(Number(idx));
    }, []);

    const onStop = (_event, transform) => {
        dispatch({
            type: 'SET_SECTION_DRAG_POSITION',
            payload: {
                positionX: transform?.y || 0,
                currentSectionIndex: sectionIndex,
            },
        });
    };

    return (
        <Draggable
            axis="y"
            handle=".handle"
            defaultPosition={{
                x: 0,
                y: 0,
            }}
            position={{
                x: 0,
                y: selectTemplate.sections[sectionIndex]['transformX'] || 0,
            }}
            grid={[1, 1]}
            scale={1}
            disabled={!selectDragEnable}
            onStop={onStop}
        >
            {children}
        </Draggable>
    );
};

export default WithDrag;
