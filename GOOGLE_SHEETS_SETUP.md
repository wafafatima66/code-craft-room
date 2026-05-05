## Google Sheets Setup

1. Open [Google Apps Script](https://script.google.com/).
2. Create a new project.
3. Paste the code from `google-apps-script/contact-form.gs`.
4. Save the project.
5. Deploy it as a web app:
   - Execute as: `Me`
   - Who has access: `Anyone`
6. Copy the deployed web app URL.
7. Create a `.env.local` file in the project root with:

```env
GOOGLE_APPS_SCRIPT_URL=your_deployed_web_app_url
```

## Sheet Columns

The script automatically creates the header row if the tab is empty:

- `Timestamp`
- `Name`
- `Email`
- `Phone`
- `Company`
- `Package`
- `Project Type`
- `Timeline`
- `Message`
- `Source`

## Notes

- The target spreadsheet ID is already set to your provided sheet.
- The target tab name is set to `CODE CRAFT SPACE`.
- Email alerts are set to `fatima.amir.dev@gmail.com`.
