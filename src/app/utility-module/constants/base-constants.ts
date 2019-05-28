export class BASE {
  public static TOAST_TIMEOUT = 3000;
  public static URL = 'http://35.231.62.43:7070/';
  public static API_URL = BASE.URL + 'api/v1/';
  public static ENCRYPTION_TOKEN = '';
}

export class HttpStatus {
  public static SUCCESS = 200;
  public static UNAUTHORIZED = 401;
  public static EXPIRED = 450;
}

export enum ToastStatus {
  UNKNOWN = 0,
  SUCCESS = 1,
  ERROR = 2,
  MULTIPLE = 3
}

export class AppConstant {
  public static PAGE_SIZE = 20;
  public static NO_DATA = 'No data found';
  public static PAGINATION_ARRAY: number[] = [10, 25, 50, 100];
  public static FIVE_MB_IMAGE_SIZE = 5000000;
}

export const globalToastConfig = {
  positionClass: 'toast-top-centre',
  maxOpened: 1,
  preventDuplicates: true
};

// IndividualConfig
export const individualToastConfig = {
  timeOut: BASE.TOAST_TIMEOUT,
  closeButton: true,
};
