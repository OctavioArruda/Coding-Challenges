function timeConversion(s) {
  const isPM = (s.indexOf('PM') > -1);
  const timeStrArr = s.split(':');
  let result;

  if (isPM) {
      timeStrArr[0] = (Number(timeStrArr[0]) % 12) + 12;
  } else {
      timeStrArr[0] = '0' + Number(timeStrArr[0]) % 12;
  }
  timeStrArr[2] = timeStrArr[2].replace('AM', '').replace('PM', '');
  result = timeStrArr.join(':');

  return result;
}