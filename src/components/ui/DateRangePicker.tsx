import React, { useState } from 'react';
import DatePicker from 'react-tailwindcss-datepicker';
import { DateRangeType } from 'react-tailwindcss-datepicker';

export const DateRangePicker = () => {
  const [dateRange, setDateRange] = useState<DateRangeType>({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleChange = (newValue: DateRangeType) => {
    setDateRange(newValue)
  }

  return (
    <div className="w-full custom-date-picker">
      <DatePicker
        i18n="es"
        showFooter={true}
        primaryColor={"orange"}
        useRange={true}
        value={dateRange}
        onChange={handleChange}
      />
    </div>
  );
};