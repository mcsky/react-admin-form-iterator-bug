import {
  ArrayInput,
  AutocompleteInput,
  Create,
  DateInput,
  minValue,
  NumberInput,
  required,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

const choices = [
  {
    id: "carbonara-pasta",
    name: "Pâtes carbonara",
  },
  {
    id: "pizza",
    name: "Pizza",
  },
];

export const CreateReceipe = () => {
  return (
    <Create>
      <SimpleForm>
        <ArrayInput label={false} source={"recettes"}>
          <SimpleFormIterator inline disableReordering>
            <AutocompleteInput
              validate={required()}
              label="Recette"
              source={"name"}
              name="field"
              choices={choices}
              variant="outlined"
            />
            <NumberInput
              source={"countPersons"}
              label={"Nombre de personnes"}
            />
            <ArrayInput label={false} source={"ingredients"}>
              <SimpleFormIterator inline disableReordering>
                <AutocompleteInput
                  validate={required()}
                  label="Ingrédient"
                  source={"name"}
                  choices={choices}
                  variant="outlined"
                />
                <NumberInput
                  source={"quantity"}
                  validate={minValue(0)}
                  label={"Quantité"}
                />
                <DateInput source={"validUntil"} label={"Périmé le"} />
                <TextInput source={"commentary"} name={"Commentaire"} />
              </SimpleFormIterator>
            </ArrayInput>
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};
