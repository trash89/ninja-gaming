export async function get() {
  //connect to db & get data

  const guides = [
    { id: 1, title: "some title" },
    { id: 2, title: "some title2" },
    { id: 3, title: "some title3" },
  ];

  return {
    status: 200,
    body: {
      guides,
    },
  };
}
