export default class Validator {
 testLogin(value) {
   if (/^[A-Za-z][A-Za-z0-9_-]{2,20}$/.test(value)) {
      return true;
  } else {
      return false;
   }
 }
 
 testPassword(value) {
   if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,40}$/.test(value)) {
      return true;
  } else {
      return false;
   }
 }

 testCommonName(value) {
   if (/^[A-ZА-Я][A-Za-zА-Яа-я-]{1,20}$/.test(value)) {
      return true;
  } else {
      return false;
   }
 }

 testEmail(value) {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      return true;
  } else {
      return false;
   }
 }

 testPhone(value) {
   if (/^[+0-9][0-9]{8,15}$/.test(value)) {
      return true;
  } else {
      return false;
   }
 }

 testMessage(value) {
   if (/^.+$/.test(value)) {
      return true;
  } else {
      return false;
   }
 }


}