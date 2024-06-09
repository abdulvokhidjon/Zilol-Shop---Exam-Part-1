export const loading = (isPending) => {
  if (isPending) {
    console.log("Loading....");
  } else {
    console.log("Done");
  }
};
