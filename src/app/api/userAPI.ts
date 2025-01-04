export const getUser = async (id: number) => {
  const response = await fetch(
    `http://gameb.co.kr/steam/user/getuser/?id=${id}`
  );

  if (!response.ok) {
    throw new Error("An error occurred");
  }

  return response.json();
};
