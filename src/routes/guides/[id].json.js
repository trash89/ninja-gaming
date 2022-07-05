export async function get({ params }) {
  //connect to db & get data

  const guides = [
    { id: 1, title: "some title" },
    { id: 2, title: "some title2" },
    { id: 3, title: "some title3" },
  ];
  const guide = guides.find((g) => g.id == params.id);
  if (guide) {
    return {
      status: 200,
      body: { guide },
    };
  }
}
