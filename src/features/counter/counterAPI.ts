interface FetchData {
  data: number;
}

export const fetchCount = (amount = 1) => {
  return new Promise<FetchData>((resolve) => setTimeout(() => resolve({ data: amount }), 1000));
};
