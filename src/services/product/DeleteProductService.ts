import { prismaClient } from "../../prisma";

interface DeleteProductRequest {
  product_id: string;
}

class DeleteProductServide {
  async execute({ product_id }: DeleteProductRequest) {
    const order = await prismaClient.product.delete({
      where: {
        id: product_id,
      },
    });

    return order;
  }
}

export { DeleteProductServide };
