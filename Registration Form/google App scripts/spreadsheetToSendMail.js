function sendMail() {

  var sheetId = "...";  // fill in your googlesheet id there!!!
  var ss = SpreadsheetApp.openById(sheetId);

  var EMAIL_SENT = 'EMAIL_SENT';

  var sheet = ss.getActiveSheet();

  var startRow = 2; // First row of data to process
  var numRows = sheet.getLastRow(); // Number of rows to process

  var range = sheet.getRange(startRow, 1 , numRows,sheet.getLastRow() );

  var values = range.getValues();

  for (i=1; i < values.length; i++) {
    var fullName = values[i][2];
    var email = values[i][1];
    var course = values[i][5];
    var emailSent = values[i] [6];
    if (emailSent != EMAIL_SENT && email!="") { //// Prevents sending duplicates
    var Subject = "Congratulations on your Application";
    var message = "Hi " + fullName + ", " + "Thank you for your application " + " To Register and start the course,Click this link ===> " +
      course ;

      console.log("Quota: " + MailApp.getRemainingDailyQuota());
      //MailApp.sendEmail ******* Sends emails as spam if the email body contains links ,Rather use GmailApp.sendMail

       GmailApp.sendEmail(
          email,
          Subject,
          message
       );
      sheet.getRange(startRow + i, 7).setValue(EMAIL_SENT);
      SpreadsheetApp.flush();
    }
  }

}
