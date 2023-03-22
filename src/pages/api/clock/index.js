export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      const dtAgora = new Date();

      // convert to DD/MM/YYYY HH:MM:SS
      const dtAgoraFormatada = dtAgora.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
      res.status(200).json(dtAgoraFormatada);
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};