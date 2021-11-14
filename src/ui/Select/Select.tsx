import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
  InputLabel,
  MenuItem,
} from "@mui/material";

interface SelectProps extends MuiSelectProps {
  options: { label: string; value: string }[];
}

export const Select = ({ options, ...props }: SelectProps) => {
  return (
    <>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <MuiSelect {...props}>
        {options.map(({ label, value }) => (
          <MenuItem value={value}>{label}</MenuItem>
        ))}
      </MuiSelect>
    </>
  );
};
