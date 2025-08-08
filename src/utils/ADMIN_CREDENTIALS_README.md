// Admin Credentials README

This file explains how to update and use the admin credentials for this project.

## Admin Credentials File

Your admin credentials are stored in `src/utils/adminCredentials.json`. 
This file contains:
```json
{
  "email": "admin@rakeshconsulting.com",
  "password": "AdminRakesh@123"
}
```

## How to Update Admin Credentials

1. Simply edit the `adminCredentials.json` file to change the email and password
2. Save the file
3. Run the setup script as described below to create a new admin user

## How to Create an Admin User

### Option 1: Using the setupAdmin script

Run the following in your code or browser console:
```typescript
import { setupAdmin } from './utils/setupAdmin';
setupAdmin();
```

### Option 2: Manually creating an admin

```typescript
import { createAdminUser } from './utils/createAdmin';
createAdminUser('your-email@example.com', 'your-password');
```

## Security Notes

- Keep your admin credentials secure
- Do not commit `adminCredentials.json` to public repositories (add it to .gitignore)
- Consider changing your admin password regularly
