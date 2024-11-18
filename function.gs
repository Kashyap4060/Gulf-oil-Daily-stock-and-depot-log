function doGet() {
  return HtmlService.createHtmlOutputFromFile('index.html')
    .setTitle('Daily Log Entry');
}

// Function to fetch the next Serial Number
function getNextSerialNo() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Log Daily - Master");
  if (!sheet) throw new Error("Sheet 'Log Daily - Master' not found.");

  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return 1; // Start at 1 if no data

  const lastSerialNo = sheet.getRange(lastRow, 1).getValue(); // Assuming Serial No is in the first column
  return lastSerialNo ? lastSerialNo + 1 : 1;
}

// Function to add form entry data to the sheet
function addEntry(data) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Log Daily - Master");
  if (!sheet) throw new Error("Sheet 'Log Daily - Master' not found.");

  sheet.appendRow([
    data.serialNo,
    data.openingDate,
    data.week,
    data.month,
    data.depotName,
    data.vehicleNo,
    data.reportingTime,
    data.OpeningKMReading,
    data.adblueDef,
    data.defLitresFilledQty || "",
    data.engineOil,
    data.engineOilQty || "",
    data.coolant,
    data.coolantQty || "",
    data.closingDate,
    data.kmsRan || "",
    data.refillPhoto,
    data.driverName,
    data.driverSignature,
    data.gulfSignature
  ]);
}
