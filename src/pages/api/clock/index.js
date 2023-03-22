export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      const dtAgora = new Date();

      // convert to DD/MM/YYYY HH:MM:SS
      const dtFullPT_BR = dtAgora.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

      // create variable in format YYYY-MM-DD HH:MM:SS
      const dtFull_ISO = dtAgoraFormatada.split(' ')[0].split('/').reverse().join('-') + ' ' + dtAgoraFormatada.split(' ')[1];

      // create variable in format YYYY-MM-DD
      const dtDateOnly = dtAgoraFormatada.split(' ')[0].split('/').reverse().join('-');

      // create variable in format HH:MM:SS
      const dtHourOnly = dtAgoraFormatada.split(' ')[1];

      res.status(200).json({
        dtAgora,
        dtFullPT_BR,
        dtFull_ISO,
        dtDateOnly,
      });
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};