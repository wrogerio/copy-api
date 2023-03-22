import { GetAll } from "@/controllers/UsuariosController";

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      const resultGetAll = await GetAll();
      res.status(200).json(resultGetAll);
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};