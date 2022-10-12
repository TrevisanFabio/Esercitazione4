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
          '<tr><td>' + img,
          (src =
            'http://xsgames.co/randomusers/assets/avatars/' +
            u.gender +
            '/' +
            Math.floor(Math.random() * 10) + 1 +
            '.jpg'
          )+
          '</td><td>' +
          u.email +
          '</td><td>' +
          u.firstName +
          '</td></tr>'
        );
        usersTable.append(el);
      }
      $('#usersTable').DataTable();
    });
});
