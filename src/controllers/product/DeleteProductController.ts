import { Request, Response } from "express";
import { DeleteProductServide } from "../../services/product/DeleteProductService";

class DeleteProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;

    const deleteProductService = new DeleteProductServide();

    const product = await deleteProductService.execute({
      product_id,
    });

    return res.json(product);
  }
}

export { DeleteProductController };
