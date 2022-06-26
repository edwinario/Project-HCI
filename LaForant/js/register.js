function isValidLength(data, length) {
  return data.length > length ? true : false;
}

function countData(data, dataSearched) {
  let counter = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] == dataSearched) {
      counter++;
    }
  }
  return counter;
}

function checkSuffixEmail(data) {
  const suffix = [".com", ".co.id", ".org", ".edu", ".ac.id", ".cc"];
  for (let index = 0; index < data.length; index++) {
    if (data.endsWith(suffix[index])) {
      return true;
    }
  }
  return false;
}

function isValidCharacter(data) {
  for (let i = 0; i < data.length; i++) {
    if (!((data[i] >= "0" && data[i] <= "9") || (data[i] >= "a" && data[i] <= "z") || (data[i] >= "A" && data[i] <= "Z"))) {
      return false;
    }
  }
  return true;
}

function isValidDOB(myYear, myMonth, myDate) {
  let nowDate = new Date();
  if (myYear > nowDate.getFullYear() || (myMonth > nowDate.getMonth() && myYear == nowDate.getFullYear()) || (myDate > nowDate.getDate() && myMonth == nowDate.getMonth() && myYear == nowDate.getFullYear())) {
    return false;
  }

  return true;
}

$(document).ready(function () {
  $("#form").submit(function (e) {
    e.preventDefault();

    let isValidEmail = false;
    let isValidUsername = false;
    let isValidPassword = false;
    let isValidRePassword = false;
    let isValidDOBB = false;
    let isValidNationality = false;
    let isValidTerms = false;

    $("#invalidEmail").html("");
    const myEmail = $("#email").val();
    const indexAt = myEmail.indexOf("@");
    if (!isValidLength(myEmail, 0)) {
      $("#invalidEmail").html("Email tidak boleh kosong<br />");
    } else if (indexAt <= 0 || !myEmail.includes("@") || countData(myEmail, "@") > 1 || myEmail.charAt(indexAt - 1) === "." || myEmail.charAt(indexAt + 1) === "." || !checkSuffixEmail(myEmail)) {
      $("#invalidEmail").html("Masukkan format email yang valid<br />");
    } else {
      isValidEmail = true;
    }

    $("#invalidUsername").html("");
    const myUsername = $("#username").val();
    if (!isValidLength(myUsername, 0)) {
      $("#invalidUsername").html("Username tidak boleh kosong<br />");
    } else if (myUsername.length < 4 || myUsername.length > 12) {
      $("#invalidUsername").html("Masukkan username minimal 4 karakter dan maksimal 12<br />");
    } else if (!isValidCharacter(myUsername)) {
      $("#invalidUsername").html("Username tidak boleh menggunakan spesial karakter<br />");
    } else {
      isValidUsername = true;
    }

    $("#invalidPassword").html("");
    const myPassword = $("#password").val();
    let isValidUpperCase = false;
    for (let index = 0; index < myPassword.length; index++) {
      let char = myPassword.charAt(index);
      if (char == char.toUpperCase()) {
        isValidUpperCase = true;
      }
    }

    let isValidNumber = false;
    for (let index = 0; index < myPassword.length; index++) {
      if (myPassword.charAt(index) >= "0" && myPassword.charAt(index) <= "9") {
        isValidNumber = true;
      }
    }

    if (!isValidLength(myPassword, 0)) {
      $("#invalidPassword").html("Password tidak boleh kosong<br />");
    } else if (myPassword.length < 5) {
      $("#invalidPassword").html("Masukkan password minimal 5 huruf<br />");
    } else if (!isValidUpperCase) {
      $("#invalidPassword").html("Password setidaknya mempunyai 1 huruf kapital<br />");
    } else if (!isValidNumber) {
      $("#invalidPassword").html("Password setidaknya mempunyai 1 angka<br />");
    } else if (isValidCharacter(myPassword)) {
      $("#invalidPassword").html("Password setidaknya mempunyai 1 spesial karakter<br />");
    } else {
      isValidPassword = true;
    }

    $("#invalidRePassword").html("");
    const myRePassword = $("#repassword").val();
    if (!isValidLength(myRePassword, 0)) {
      $("#invalidRePassword").html("Konfirmasi password tidak boleh kosong<br />");
    } else if (myPassword != myRePassword) {
      $("#invalidRePassword").html("Konfirmasi password tidak sama<br />");
    } else {
      isValidRePassword = true;
    }

    $("#invalidDateOfBirth").html("");
    let myDOB = $("#dateofbirth").val();
    let myYear = Number(myDOB.substr(0, 4));
    let myMonth = Number(myDOB.substr(5, 2));
    let myDate = Number(myDOB.substr(8, 2));
    if (!isValidDOB(myYear + 16, myMonth - 1, myDate)) {
      $("#invalidDateOfBirth").html("Minimal umur 16 tahun<br />");
    } else if (myYear <= 1905 && myYear >= 1000) {
      $("#invalidDateOfBirth").html("Masukkan tanggal lahir dengan benar<br />");
    } else if (!myDOB || myYear <= 1000) {
      $("#invalidDateOfBirth").html("Tanggal lahir tidak boleh kosong<br />");
    } else {
      isValidDOBB = true;
    }

    $("#invalidNationality").html("");
    const myNationality = $("#nationality").val();
    if (!isValidLength(myNationality, 0)) {
      $("#invalidNationality").html("Negara asal dibutuhkan<br />");
    } else {
      isValidNationality = true;
    }

    $("#invalidTerms").html("");
    if (!$("#terms").is(":checked")) {
      $("#invalidTerms").html("Persetujuan dibutuhkan<br />");
    } else {
      isValidTerms = true;
    }

    if (isValidEmail && isValidUsername && isValidPassword && isValidRePassword && isValidDOBB && isValidNationality && isValidTerms) {
      alert("Pendaftaran Akun Berhasil!");
    }
  });
});
