import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import { Autocomplete, TextField } from '@mui/material';

function RHFAutocomplete({ name, label, helperText, ...other }) {
    const { control, setValue } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <Autocomplete
                    {...field}
                    fullWidth
                    onChange={(event, newValue) => setValue(name, newValue, { shouldValidate: true })}
                    error={!!error}
                    helperText={error ? error.message : helperText} 
                    {...other}
                    renderInput={(params)=>(
                        <TextField label={label} error={!!error}   helperText={error ? error.message : helperText}  {...params} />
                    )}

                />
            )}
        />
    );
}

// Define PropTypes on the function itself
RHFAutocomplete.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    helperText: PropTypes.node,
};

export default RHFAutocomplete;
