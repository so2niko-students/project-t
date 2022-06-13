export function templateMessages(time, userName, text) {
  return `<tr class="render-msg">
              <td>${time}</td>
              <td>${userName}</td>
              <td>${text}</td>
            </tr>`;
}

export function getTableHead() {
  return `<table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col">Time</th>
            <th scope="col">Author</th>
            <th scope="col">Message</th>
            </tr>
        </thead>
        <tbody>`;
}

export function getTableEnd() {
  return `</tbody></table>`;
}
