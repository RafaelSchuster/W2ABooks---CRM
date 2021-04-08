import React, { useContext } from 'react';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';
import { MainContext } from '../Context/Context';

const MonthsDropdown = () => {
    const { monthsToRecommend, setMonthsToRecommend } = useContext(MainContext);

    const animatedComponents = makeAnimated();

    const updateMonths = (myMonths) => {
        setMonthsToRecommend(myMonths);
    }

    const months = [
        { value: 'january', label: 'Jan' },
        { value: 'february', label: 'Feb' },
        { value: 'march', label: 'Mar' },
        { value: 'april', label: 'Apr' },
        { value: 'may', label: 'May' },
        { value: 'june', label: 'June' },
        { value: 'july', label: 'July' },
        { value: 'august', label: 'Aug' },
        { value: 'september', label: 'Sept' },
        { value: 'october', label: 'Oct' },
        { value: 'november', label: 'Nov' },
        { value: 'december', label: 'Dec' },
    ]
    return (
        <Select
            isMulti
            name="months"
            options={months}
            components={animatedComponents}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={myMonths => updateMonths(myMonths)}
            defaultValue={monthsToRecommend}
            placeholder="Send Me Books On:"
        />
    )
};

export default MonthsDropdown;