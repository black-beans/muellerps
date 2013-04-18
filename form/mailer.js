/*
 Google Form Mailer
 Keep an updated copy in the website repository: https://github.com/mksoft/muellerps/form/mailer.js
*/

function onFormSubmit(e) {
  var timestamp = e.values[0];
  var course = e.values[1];
  var company = e.values[2];
  var firstname = e.values[3];
  var lastname = e.values[4];
  var dob = e.values[5];
  var functioning = e.values[6];
  var street = e.values[7];
  var pobox = e.values[8];
  var zip = e.values[9];
  var city = e.values[10];
  var telephone = e.values[11];
  var mobile = e.values[12];
  var email = e.values[13];
  var comment = e.values[14];

  var data = "Anmeldung am: " + timestamp +
    "\nKurs: " + course +
    "\n\nFirma: " + company +
    "\nName: " + firstname +
    "\nVorname: " + lastname +
    "\nGeburtsdatum: " + dob +
    "\nFunktion: " + functioning +
    "\nStrasse/Nr.: " + street +
    "\nPostfach: " + pobox +
    "\nPLZ: " + zip +
    "\nOrt: " + city +
    "\n\nTelefon: " + telephone +
    "\nMobile: " + mobile +
    "\nE-Mail: " + email +
    "\n\nIhre Anmerkung:\n" + comment;

  GmailApp.sendEmail(email, "Ihre Kursanmeldung: " + course, "Gerne Bestätigen wir Ihnen folgende Kursanmeldung:\n\n" + data + "\n\n\nFreundliche Grüsse\n\nMPS Team\n\nMPS Müller Projects & Services GmbH\nNotfallmanagement, Arbeitssicherheit, Brandschutz & Schulungen seit 2002\n\nBrühlweg 1, Postfach 510, CH-8049 Zürich\n\nTelefon: +41 (0)44 302 32 76\nFax: +41 (0)44 302 32 77\n\nE-Mail: mps@muellerps.ch\n\nInternet: www.muellerps.ch", { name: 'MPS Müller Projects & Services GmbH', replyTo: 'mps@muellerps.ch', from: 'mps@muellerps.ch' });
  GmailApp.sendEmail("mps@muellerps.ch", "Neue Kursanmeldung: " + course, data, { name: 'MPS Müller Projects & Services GmbH', replyTo: 'mps@muellerps.ch', from: 'mps@muellerps.ch' });
}
