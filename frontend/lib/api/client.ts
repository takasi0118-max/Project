export const apiClient = async (url: string, options: RequestInit = {}) => {
  const res = await fetch(url, {
    credentials: "include",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  const text = await res.text();

  if (!res.ok) {
    throw new Error(text);
  }

  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
};