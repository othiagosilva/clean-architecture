import CreateProductUseCase from "./create.product.usercase";

const input = {
    type: "a",
    name: "CHOCOLATE MEIO AMARGO 80G - GAROTO" ,
    price: 11.90,
};

const MockRepository = () => {
  return {
    find: jest.fn(),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  };
};

describe("Unit test create product use case", () => {
  it("should create a product", async () => {
    const productRepository = MockRepository();
    const productCreateUseCase = new CreateProductUseCase(productRepository);

    const output = await productCreateUseCase.execute(input);  

    expect(output).toEqual({
      id: expect.any(String),
      name: input.name,
      price: input.price,
      type: input.type,
    });
  });
});

