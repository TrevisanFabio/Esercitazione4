$(document).ready(function () {
  fetch('https://dummyjson.com/users')
    .then((res) => res.json())
    .then((data) => {
      let users = data.users;
      let usersTable = $('#usersTable');
      for (user in users) {
        console.log(users[user]);

        let u = users[user];

        let el = $(
          '<tr><td>' + u.email + '</td><td>' + u.firstName + '</td></tr>'
        );

        usersTable.append(el);
      }
      $('#usersTable').DataTable();
    });
});
