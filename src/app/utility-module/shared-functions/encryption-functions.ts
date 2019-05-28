import * as cryptoJS from 'crypto-js';
import {BASE} from '../constants/base-constants';

export class EncryptionFunctions {
  
  public static ENCRYPT_OBJ(value: any): any {
    return cryptoJS.AES.encrypt(JSON.stringify(value), BASE.ENCRYPTION_TOKEN);
  }
  
  public static DECRYPT_OBJ(value: any): any {
    if (value && value != null) {
      const bytes = cryptoJS.AES.decrypt(value.toString(), BASE.ENCRYPTION_TOKEN);
      const decryptedData = JSON.parse(bytes.toString(cryptoJS.enc.Utf8));
      return decryptedData;
    }
    return '';
  }
}

