import {
  ArrayInput,
  AutocompleteInput,
  DateInput,
  minValue,
  NumberInput,
  required,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

const choices = [
  {
    id: "basilic",
    name: "basilic",
  },
  {
    id: "salmon",
    name: "Saumon",
  },
  {
    id: "poivrons",
    name: "poivrons",
  },
  {
    id: "jparmer",
    name: "Jambon de parme",
  },
  {
    id: "eggs",
    name: "Oeufs",
  },
];

export const IngredientsRenderer = ({ source = "" }: { source?: string }) => {
  console.log(source);
  return (
    <ArrayInput
      // defaultValue props make infinite rendering from V4.
      // defaultValue={value || DEFAULT_AND_FILTER_VALUES}
      label={false}
      source={source + ".ingredients"}
    >
      <SimpleFormIterator inline disableReordering>
        <AutocompleteInput
          validate={required()}
          label="Ingrédient"
          source={"name"}
          choices={choices}
          variant="outlined"
          // onChange={(fieldId: string) => handleOnChange(fieldId, source, setValue)}
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
  );
};
