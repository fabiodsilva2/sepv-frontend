export default function parseJwt(token: string) {
    // Divide o token em partes
    const base64Url = token.split('.')[1];

    // Converte a string base64 para formato legível
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    // Decodifica o Base64
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    // Retorna o payload como objeto JSON
    return JSON.parse(jsonPayload);
  }
