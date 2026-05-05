const rawUrl = process.env.GOOGLE_APPS_SCRIPT_URL?.trim();

function getAppsScriptUrl(value) {
  if (!value) return null;

  if (value.startsWith('http://') || value.startsWith('https://')) {
    return value;
  }

  return `https://script.google.com/macros/s/${value}/exec`;
}

async function main() {
  const url = getAppsScriptUrl(rawUrl);

  if (!url) {
    console.error('Missing GOOGLE_APPS_SCRIPT_URL in .env.local');
    process.exit(1);
  }

  const payload = {
    name: 'Google Sheets Test',
    email: 'test@codecraftspace.com',
    phone: '+1 000 000 0000',
    company: 'Code Craft Space Test',
    package: 'all-in-one-website-service',
    projectType: 'business',
    timeline: 'asap',
    message: `Test submission sent at ${new Date().toISOString()}`,
    source: 'manual-test-script',
  };

  console.log(`Posting test submission to: ${url}`);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(payload),
  });

  const text = await response.text();

  console.log(`Status: ${response.status} ${response.statusText}`);
  console.log('Response:');
  console.log(text);

  if (!response.ok) {
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('Google Sheets test failed:');
  console.error(error);
  process.exit(1);
});
