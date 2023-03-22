import { GetAll } from "@/controllers/UsuariosController";

export default async (req, res) => {
  const { method } = req;

  res.setHeader("Allow", ["GET"]);
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Access-Control-Allow-Origin", "*");

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