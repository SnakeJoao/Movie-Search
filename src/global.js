export const convertToDateBr = date => {
  if (date != null && date !== undefined) {
    const data = new Date(date);

    const day = data.getDate() < 10 ? `0${data.getDate()}` : data.getDate();
    const month =
      data.getMonth() < 9 ? `0${data.getMonth() + 1}` : data.getMonth() + 1;
    const year = data.getFullYear();

    return `${day}/${month}/${year}`;
  }
  return '-';
};

export const calculateAge = date => {
  const today = new Date();
  const birthDate = new Date(date);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    // eslint-disable-next-line no-plusplus
    age--;
  }
  return age;
};
