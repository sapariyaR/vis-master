export class CommonRegexp {
  public static NUMERIC_REGEXP = '^[0-9]*$';
  public static ALPHA_NUMERIC_REGEXP = '^[A-Za-z0-9]*$';
  public static USER_NAME_REGEXP = '^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z\\d#?.!@$%^&*-]+$';
  public static EMAIL_ADDRESS_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public static PASSWORD_REGEXP = /^(?=.*[a-zA-Z])(?=.*[A-Za-z])(?=.*\d)[a-zA-Z\d#?!@$%^&*-]{8,}$/;
  public static COMMA_REGEXP = /^[-+]?(?:[0-9]+,)*[0-9]+(?:\\.[0-9]+)?$/;
}

export class ValidationConstant {
  public REQUIRED = 'is required';
  
  public VALID_PASSWORD = 'Password allowed alphanumeric only';
  public PASSWORD_LENGTH = 'Password length between 6 to 50 characters';
  public EMAIL_LENGTH = 'Email address length between 6 to 100 characters';
  
  // ${this.REQUIRED.replace('is', 'are')}
  public EMAIL = `Email ${this.REQUIRED}`;
  public PASSWORD = `Password ${this.REQUIRED}`;
  public MANDAL_ID = `Mandal ID ${this.REQUIRED}`;
  public FORM_ID = `Form ID ${this.REQUIRED}`;
  public NAME = `Name ${this.REQUIRED}`;
  public AGE = `Age ${this.REQUIRED}`;
  public NUMERIC_VALUE = `Numeric value allowed only`;
  public VALID_VALUE = `Enter valid value`;
  public CONTACT_NO = `Contact number ${this.REQUIRED}`;
  public OTHERWORK = `Other work ${this.REQUIRED}`;
  public COMPUTER_KNOWLEDGE = `Computer knowledge ${this.REQUIRED}`;
  public SPECIAL_WORK = `Special work ${this.REQUIRED}`;
  public SEVANA_DIVSO = `Sevana divso ${this.REQUIRED}`;
  public SATSAND_POST = `Satsang post ${this.REQUIRED}`;
}
