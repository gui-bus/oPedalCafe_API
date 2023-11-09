import { prismaClient } from "../../prisma";

interface RemoveitemRequest {
  item_id: string;
}

class RemoveItemService {
  async execute({ item_id }: RemoveitemRequest) {
    const order = await prismaClient.item.delete({
      where: {
        id: item_id,
      },
    });

    return order;
  }
}

export { RemoveItemService };
