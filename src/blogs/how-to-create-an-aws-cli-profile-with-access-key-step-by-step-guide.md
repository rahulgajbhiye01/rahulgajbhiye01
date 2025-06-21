---
title: 🔐 How to Create an AWS CLI Profile with Access Keys – Step-by-Step Guide
author: Rahul Gajbhiye
category:
  - Development
keywords: "#Git #Github"
date: 17-April-2025
---

When working with AWS through the command line, it's essential to set up your AWS CLI with the right credentials and profile. This guide will walk you through how to **create a new AWS CLI profile** and generate **Access Keys** securely.

Whether you're a developer, DevOps engineer, or just getting started with cloud, setting this up is a must-have skill.

---

## ⚙️ Step 1: Create a New IAM User or Use Existing

You should never use the root AWS account credentials for CLI access.

1. Log in to [AWS Console](https://console.aws.amazon.com/)
2. Go to **IAM** service (search for it in the console).
3. Click on **Users** in the sidebar.
4. Select the IAM user you want to use or create a new one.

Make sure this user has appropriate permissions (for example: `AmazonS3FullAccess`, `AdministratorAccess`, or custom policies depending on your use case).

---

## 🔑 Step 2: Create Access Keys

Once inside the IAM user profile:

1. Click the **“Security credentials”** tab.
2. Scroll to **“Access Keys”**.
3. Click on **“Create access key”**.
4. Choose the access key type:
    - Select **“Application running outside AWS”** for CLI usage.
5. Click **Next**, then **Create access key**.

You’ll get:
- **Access Key ID**
- **Secret Access Key**

> ⚠️ The secret access key is shown **only once**, so make sure to **copy or download it** securely.

---

## 🧪 Step 3: Configure Your AWS CLI Profile

Now let’s plug this into the AWS CLI.

Run the following command in your terminal:

```bash
aws configure --profile your-profile-name
```

For example:

```bash
aws configure --profile prod
```


You'll be prompted to enter:
- Access Key ID
- Secret Access Key
- **Default region name** (like `us-east-1`, `ap-south-1`, etc.)
- **Default output format** (you can use `json`, `text`, or `table`, or leave it blank for `json`)

#### 🔍 Example:

```bash
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY 
Default region name [None]: ap-south-1 
Default output format [None]: json
```

---

## 🚀 Step 4: Use Your AWS CLI Profile

To use your new profile:

```bash
aws s3 ls --profile prod
```

Or temporarily set it in your environment:

```bash
export AWS_PROFILE=prod
```

---

## 🔐 Security Tips

- Never share your access keys.
- Don’t hardcode them in code—use environment variables or AWS config files.
- Delete unused keys and rotate regularly.
- Avoid using root credentials for programmatic access.

---

## ✅ Wrapping Up

Setting up AWS CLI with custom profiles and secure access keys is a simple but powerful step toward cloud automation. Now you’re ready to run AWS commands, automate scripts, or configure services from your local machine or CI/CD pipeline!

---

**Got stuck or need help with IAM policies, multi-account setups, or AWS CLI automation? Drop a comment or DM. At [LinkedIn](https://www.linkedin.com/in/rahulgajbhiye01/) Happy to help! 👇**