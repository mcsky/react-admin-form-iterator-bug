import { useMemo, useState } from 'react'
import { useFormState, type FormState, type FieldValues } from 'react-hook-form'
import { FormControl, MenuItem, Select, type SelectProps } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { ReactUtils } from 'src/utils/shared'
import { useWatchValue } from 'src/hooks/shared'



const useStyles = makeStyles({
    container: {
        width: '100%',
    },
    pre: {
        margin: '.5rem 0',
        padding: '1rem',
        overflow: 'auto',
        borderRadius: '.25rem',
        backgroundColor: '#272c34',
        color: '#fff',
    },
})

const AVAILABLE_KEYS: FormStateKey[] = [
    'errors',
    'defaultValues',
    'dirtyFields',
    'isDirty',
    'isLoading',
    'isSubmitted',
    'isSubmitting',
    'isSubmitSuccessful',
    'isValid',
    'isValidating',
    'submitCount',
    'touchedFields',
    'values',
]

export const FormDebug = (): JSX.Element => {
    const classes = useStyles()
    const [formStateKey, setFormStateKey] = useState<FormStateKey>('values')

    // Note: We need to deconstruct the values before rendering
    // https://react-hook-form.com/docs/useformstate#rules
    const {
        isDirty,
        isValid,
        isLoading,
        isSubmitted,
        isSubmitting,
        isValidating,
        isSubmitSuccessful,
        defaultValues,
        touchedFields,
        submitCount,
        dirtyFields,
        errors,
    } = useFormState()

    const values = useWatchValue()
    const watchedState = useMemo(() => {
        const formState: Record<FormStateKey, unknown> = {
            values,
            defaultValues,
            errors,
            isDirty,
            isLoading,
            isSubmitted,
            isSubmitting,
            isSubmitSuccessful,
            isValid,
            isValidating,
            dirtyFields,
            touchedFields,
            submitCount,
        }

        return formState[formStateKey]
    }, [
        formStateKey,
        values,
        defaultValues,
        errors,
        isDirty,
        isLoading,
        isSubmitted,
        isSubmitting,
        isSubmitSuccessful,
        isValid,
        isValidating,
        dirtyFields,
        touchedFields,
        submitCount,
    ])

    const handleChange: SelectProps['onChange'] = (e): void => {
        const { value } = e.target

        if (typeof value === 'string') {
            const formStateKey = value as FormStateKey

            if (AVAILABLE_KEYS.includes(formStateKey)) {
                setFormStateKey(formStateKey)
            }
        }
    }

    return (
        <div className={classes.container}>
            <FormControl variant="outlined" margin="dense" fullWidth>
                <Select value={formStateKey} onChange={handleChange}>
                    {ReactUtils.mapChildren(AVAILABLE_KEYS, (stateKey) => (
                        <MenuItem value={stateKey}>{stateKey}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <pre className={classes.pre}>{JSON.stringify(watchedState, null, 2)}</pre>
        </div>
    )
}

export default FormDebug
