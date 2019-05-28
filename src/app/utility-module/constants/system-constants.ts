import {environment} from '../../../environments/environment';


export class BASE {
  public static TOAST_TIMEOUT = 3000;
  public static URL = environment.apiUrl;
  public static API_URL = BASE.URL + 'api/';
  public static IMAGE_PATH = 'assets/images/';
}
