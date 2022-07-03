export async function getAllTasksData() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/posts`)
  );
  const tasks = await res.json();
  return tasks;
}

export async function getAllTaskIds() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/posts`)
  );
  const tasks = await res.json();

  return tasks.map((task) => {
    return {
      params: {
        id: String(task.id),
      },
    };
  });
}
export async function getTaskData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/posts/${id}/`)
  );
  const task = await res.json();
  return task;
}
