# MongoDB Atlas Setup Guide

This guide details the step-by-step process for creating a MongoDB Atlas cluster, configuring security settings, obtaining your connection string, and setting it up for both local development and production deployment.

---

## Step 1: Create a MongoDB Atlas Account
1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and register for a free account.
2. Log in to your MongoDB Cloud account.

---

## Step 2: Create a Cluster
1. On your MongoDB Atlas console, click **Create** or **Build a Database**.
2. Select the **M0 (Free)** shared tier.
3. Choose your preferred Cloud Provider (e.g., AWS) and Region closest to your users.
4. Click **Create** (this will spin up your cluster, which takes 1–3 minutes).

---

## Step 3: Create a Database User
1. In the left sidebar, navigate to **Security** > **Database Access**.
2. Click **Add New Database User**.
3. Set the authentication method to **Password**.
4. Enter a **Username** (e.g., `db_user`) and a secure **Password**.
5. Set the user privilege to **Read and write to any database**.
6. Click **Add User**.
> [!IMPORTANT]
> Save these credentials safely. You will need to insert them into your connection string.

---

## Step 4: Configure Network Access (IP Whitelisting)
1. In the left sidebar, navigate to **Security** > **Network Access**.
2. Click **Add IP Address**.
3. To allow access from your local machine, you have two options:
   - Click **Add Current IP Address** (restricts connection to your local IP address. If your IP address changes, you must update this).
   - Click **Allow Access from Anywhere** (adds `0.0.0.0/0`. Recommended for local development to prevent connection failures if your ISP changes your IP).
4. Click **Confirm**.

---

## Step 5: Obtain the Connection String
1. Go back to the **Database** menu in the sidebar.
2. Click **Connect** on your cluster.
3. Select **Drivers** under the connection options.
4. Choose **Node.js** as your driver and select the appropriate version.
5. Copy the provided connection string. It will look like this:
   ```
   mongodb+srv://<username>:<password>@cluster0.dl9z3rz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   ```

---

## Step 6: Connect to Backend
1. Open the [backend/.env](file:///E:/ecommerce-app/backend/.env) file.
2. Replace `MONGO_URI` with the copied connection string.
3. Replace `<username>` and `<password>` with the database user details created in **Step 3**.
4. Restart your backend server. It will automatically connect.

---

## Step 7: Configuring Atlas during Production Deployment
When deploying the application to hosting providers like Render, Heroku, or AWS:
1. Do **not** commit the `.env` file (the `.gitignore` file will prevent this).
2. On your hosting provider's dashboard, go to the environment settings.
3. Add an environment variable named `MONGO_URI` and paste your MongoDB Atlas connection string.
4. In the MongoDB Atlas **Network Access** settings:
   - You must whitelist the outbound IP addresses of your production server.
   - If your hosting provider does not support static outbound IPs, you will need to add `0.0.0.0/0` (Allow Access from Anywhere) to the network access list in MongoDB Atlas to ensure your deployed backend can connect to the database.
