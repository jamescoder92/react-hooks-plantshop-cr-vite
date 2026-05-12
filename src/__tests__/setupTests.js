import "@testing-library/jest-dom";

global.basePlants = [
  { id: 1, name: "Aloe", image: "http://localhost:6001/aloe.jpg", price: 15.99, sold_out: false },
  { id: 2, name: "ZZ Plant", image: "http://localhost:6001/zz.jpg", price: 25.98, sold_out: false },
  { id: 3, name: "Pilea", image: "http://localhost:6001/pilea.jpg", price: 10.0, sold_out: false },
];

global.alternatePlants = [
  { id: 4, name: "Cactus", image: "http://localhost:6001/cactus.jpg", price: 5.99, sold_out: false },
  { id: 5, name: "Fern", image: "http://localhost:6001/fern.jpg", price: 8.49, sold_out: false },
];

global.setFetchResponse = (data) => {
  global.fetch = vi.fn().mockResolvedValue({
    json: () => Promise.resolve(data),
    ok: true,
  });
};
