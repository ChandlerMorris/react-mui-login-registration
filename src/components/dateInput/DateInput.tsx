import { SetStateAction } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

type DateInputProps = {
    label: string;
    date: Dayjs | null;
    setDate: (date: SetStateAction<dayjs.Dayjs | null>) => void;
};

const DateInput = ({ label, date, setDate }: DateInputProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label={label}
                value={date}
                onChange={(newValue) => setDate(newValue)}
                slotProps={{ textField: { size: "small", required: true }}}
                
            />
        </LocalizationProvider>
    )
};

export default DateInput;