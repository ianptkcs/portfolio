export const formatExpTime = (time: string) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [m, y] = time.split("/").map(Number);
  return `${months[m - 1]} ${y}`;
};

export const toTime = (time: string) => {
  const [m, y] = time.split("/").map(Number);
  return new Date(y, m - 1, 1).getTime();
};

