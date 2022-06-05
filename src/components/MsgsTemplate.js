export default function templateMessages({ time, name, text }) {
  return `<tr>
              <td>${time}</td>
              <td>${name}</td>
              <td>${text}</td>
            </tr>`;
}
