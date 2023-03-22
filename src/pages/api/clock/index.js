export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      // dtAgora
      const dtAgora = new Date();

      // convert to DD/MM/YYYY HH:MM:SS
      const dtFull = dtAgora.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }).replace(', ', ' ');

      // create variable in format YYYY-MM-DD HH:MM:SS
      const dtFull_ISO = dtAgora.toISOString().replace('T', ' ');

      // create variable in format YYYY-MM-DD
      const dtDate = dtFull_ISO.split(' ')[0];

      // create variable in format HH:MM:SS
      const dtHour = dtFull_ISO.split(' ')[1].split('.')[0];

      res.status(200).json({
        dtFull_ISO,
        dtFull,
        dtDate,
        dtHour,
      });
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};