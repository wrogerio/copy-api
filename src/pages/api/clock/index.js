export default async (req, res) => {
  const { method } = req;
  res.setHeader("Allow", ["GET"]);
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Access-Control-Allow-Origin", "*");

  switch (method) {
    case "GET":
      // dtAgora
      const dtAgora = new Date();

      // convert to DD/MM/YYYY HH:MM:SS
      const dtFull = dtAgora.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }).replace(', ', ' ');

      // create variable in format YYYY-MM-DD HH:MM:SS
      const dtFull_ISO = dtAgora.toISOString()

      // create variable in format YYYY-MM-DD
      const dtDate = dtFull_ISO.split('T')[0];

      // create variable in format HH:MM:SS
      const dtTime = dtFull_ISO.split('T')[1].split('.')[0];

      res.status(200).json({
        dtFull_ISO,
        dtFull,
        dtDate,
        dtTime,
      });
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};