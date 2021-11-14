import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
  InputLabel,
  MenuItem,
} from "@mui/material";

interface SelectProps extends MuiSelectProps {
  options: { label: string; value: string }[];
}

export const Select = ({ options, label, ...props }: SelectProps) => {
  return (
    <>
      {label && <InputLabel id="demo-simple-select-label">{label}</InputLabel>}
      <MuiSelect {...props}>
        {options.map(({ label, value }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </MuiSelect>
    </>
  );
};
