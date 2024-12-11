export const getData = async (url: string) => {
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const postData = async (url: string, data: any) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to post data");
  }
  return res.json();
};

export const patchData = async (url: string, data: any) => {
  const res = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to patch data");
  }
  return res.json();
};

export const deleteData = async (url: string) => {
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to delete data");
  }
  return res.json();
};
