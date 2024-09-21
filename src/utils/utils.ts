export const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const formatDate = (date: Date, offset: number = 0): string => {
  offset = offset * 60 * 60 * 1000;
  date = new Date(date.getTime() + offset);
  const day = date.getDate();
  const month = date.toLocaleString("en", { month: "long" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};
