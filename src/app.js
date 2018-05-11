import { addCar, fetchAndDisplayCars } from './car';
import { focusOnFirstInput, prepareNewCarForm } from './form';

const GARAGE_SLUG = "lewagon-is-awesome";

fetchAndDisplayCars(GARAGE_SLUG);
prepareNewCarForm(GARAGE_SLUG);
