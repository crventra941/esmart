export const sendMail = async (data) => {
  const mailTemplate = `
      <div align="center">
        Esta persona se puso en contacto con nosotros
      </div>
      <hr>
      <div>
        <b>Nombre:</b> <br>
        ${data.name}
      </div>
      <div>
        <b>Email: </b> <br>
        ${data.email}
      </div>
      <div>
      <b> Telefono: </b><br>
        ${data.tel}
      </div>
      <div>
        <b> Asunto: </b> <br>
        ${data.subject}
      </div>
      <div>
        <b> Mensaje: </b> <br>
        ${data.message}
      </div>
    `;

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  const urlencoded = new URLSearchParams();
  urlencoded.append('from', 'contacto@esmartconstrucciones.com');
  urlencoded.append('emailPass', 'G!rasolo1');
  urlencoded.append('to', 'christian@girasolo.com');
  urlencoded.append('message', mailTemplate);
  urlencoded.append('subject', 'Contacto merexmex');
  urlencoded.append('host', 'mail.zoho.com');
  urlencoded.append('port', '993');

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow',
  };

  let res = await fetch('https://sender-mail-big-pink.herokuapp.com/v2/sendmail', requestOptions);

  return res.ok;
}
