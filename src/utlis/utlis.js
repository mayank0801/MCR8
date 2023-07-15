export const FIlterData = (searchValue, SearchType, data) => {
  if (searchValue === "" && SearchType === "") return data;
  let finalData = [];
  finalData = data.filter(
    ({ title, eventTags }) =>
      title.toLowerCase().includes(searchValue.toLowerCase()) ||
      eventTags.some((el) =>
        el.toLowerCase().includes(searchValue.toLowerCase())
      )
  );
  finalData =
    SearchType === "Both"
      ? [...finalData]
      : finalData.filter(({ eventType }) => eventType === SearchType);
  return finalData;
};

export const findEvent = (data, idToFind) => {
  return data.find((id) => id == idToFind);
};

export function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    amPm: true
  };
  const currentDate = new Date();

  if (date.getFullYear() < currentDate.getFullYear()) {
    options.year = "numeric";
  } else {
    delete options.year;
  }

  return date.toLocaleString("en-US", options);
}
