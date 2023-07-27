import {
    ArrayInput,
    AutocompleteInput,
    Create,
    NumberInput,
    required,
    SimpleForm,
    SimpleFormIterator
} from "react-admin";
import {IngredientsRenderer} from "./ingredients/ingredients-renderer";

const choices = [
    {
        id: 'carbonara-pasta',
        name: 'Pâtes carbonara'
    },
    {
        id: 'pizza',
        name: 'Pizza'
    },
]
export const CreateReceipe = () => {
    return <Create>
        <SimpleForm>
            <ArrayInput
                // defaultValue props make infinite rendering from V4.
                // defaultValue={value || DEFAULT_AND_FILTER_VALUES}
                label={false}
                source={'recettes'}
            >
                <div>
                    <SimpleFormIterator
                        inline
                        disableReordering
                    >
                        <AutocompleteInput
                            validate={required()}
                            label="Recette"
                            source={'name'}
                            name="field"
                            choices={choices}
                            variant="outlined"
                            // onChange={(fieldId: string) => handleOnChange(fieldId, source, setValue)}
                        />
                        <NumberInput
                            source={'countPersons'}
                            label={'Nombre de personnes'}
                        />
                        <IngredientsRenderer />
                    </SimpleFormIterator>
                </div>
            </ArrayInput>
        </SimpleForm>
    </Create>
}