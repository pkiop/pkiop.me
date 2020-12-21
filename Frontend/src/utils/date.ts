export default {
  addZeroForStringDate: (date: number): string => (date < 10 ? `0${date}` : String(date)),
};
