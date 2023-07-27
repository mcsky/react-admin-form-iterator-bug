import {
    Admin,
    Resource,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import {CreateReceipe} from "./receipe/create";

export const App = () => (
  <Admin dataProvider={dataProvider}>
      <Resource name={'receipe'} create={CreateReceipe} />
  </Admin>
);
