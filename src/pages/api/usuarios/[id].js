import { GetItem } from "@/controllers/UsuariosController";

export default async (req, res) => {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      const resultGetAll = await GetItem(id);
      res.status(200).json(resultGetAll);
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};