export const getLocations = async () => {
  const res = await fetch(
    "http://apis.data.go.kr/B551011/KorService1/areaBasedList1?contentTypeId=12&serviceKey=hhPRU4TihqC7sGrFL7uNTmty4I7Hng2A57yNkCPaRsb%2BbnlxyetnLDADCFy%2FDh0KshzZmRBEyFO1VEMKNHeuPg%3D%3D&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json"
  );
  return res.json();
};
