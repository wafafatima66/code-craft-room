const SPREADSHEET_ID = "13uVnMtT-2jSX4oTj01CfR800c3cbcj-RHnZINS2fll0";
const SHEET_NAME = "CODE CRAFT SPACE";

function sanitizePhone(value) {
  return String(value || "")
    .replace(/[^\d+\-()\s]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 20);
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || "{}");
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet =
      spreadsheet.getSheetByName(SHEET_NAME) ||
      spreadsheet.insertSheet(SHEET_NAME);

    const timestamp = new Date();
    const row = [
      timestamp,
      payload.name || "",
      payload.email || "",
      sanitizePhone(payload.phone),
      payload.company || "",
      payload.package || "",
      payload.projectType || "",
      payload.timeline || "",
      payload.message || "",
      payload.source || "website",
    ];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Email",
        "Phone",
        "Company",
        "Package",
        "Project Type",
        "Timeline",
        "Message",
        "Source",
      ]);
    }

    sheet.appendRow(row);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
