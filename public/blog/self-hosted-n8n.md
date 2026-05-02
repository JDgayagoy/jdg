# Deploy n8n on Render with Zero Downtime

> **Stack:** n8n · Render · PostgreSQL · cron-job.org
> **Time:** ~15 min · **Cost:** Free tier

---

## Architecture

```
cron-job.org (every 10 min)  →  n8n Web Service (Render · Docker)  ⇄  PostgreSQL (Render · free)
```

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Fork the n8n Template](#2-fork-the-n8n-template)
3. [Create a Render Blueprint](#3-create-a-render-blueprint)
4. [Deploy & Access Your Instance](#4-deploy--access-your-instance)
5. [Set Up a Keep-Alive Cron Job](#5-set-up-a-keep-alive-cron-job)

---

## 1. Prerequisites

Before you start, make sure you have the following ready:

- **A GitHub account** — needed to fork the template and connect your repo to Render.
- **A Render account** — sign up free at [render.com](https://render.com). Connect GitHub during onboarding.
- **A cron-job.org account** — free, no credit card required.
- **One free Render Postgres slot** — each workspace gets one. Check your dashboard before proceeding.

---

## 2. Fork the n8n Template

Render maintains an official template repository that bundles an n8n web service and a Postgres database into a single `render.yaml` file.

1. **Open the template** — go to [github.com/render-examples/n8n](https://github.com/render-examples/n8n).
2. **Create your copy** — click **Use this template → Create a new repository**. Give it a name and set visibility.
3. **Review render.yaml** — the file in your new repo defines both resources. No edits needed for the free tier.

### What's inside render.yaml

```yaml
services:
  - type: web
    plan: free
    runtime: image
    name: n8n-service
    image:
      url: docker.io/n8nio/n8n:latest
    # envVars, healthCheckPath, disk,
    # and database link defined below…

databases:
  - name: n8n-db
    plan: free
```

> **Note — paid upgrade:** If your workspace already uses the one free Postgres slot, update the `plan` field to `starter` (or higher) for the database, then push the change to trigger a new Blueprint sync.

---

## 3. Create a Render Blueprint

Blueprints are Render's infrastructure-as-code model — one click deploys every resource defined in your `render.yaml`.

1. **Open the Render Dashboard** — click **New → Blueprint**.
2. **Connect GitHub** — if not already linked, authorise Render to read your repos.
3. **Select your repo** — find the repo you created and click **Connect**. Render reads the `render.yaml` and shows you a resource preview.
4. **Name the Blueprint** — give it a recognisable name (e.g. `n8n-prod`) and confirm the branch.
5. **Click Deploy Blueprint** — watch the sync; a green checkmark appears beside each resource once created.

---

## 4. Deploy & Access Your Instance

After both resources show green, navigate to your web service in the Render Dashboard. Your public URL looks like:

```
https://n8n-service.onrender.com
```

Open it in the browser. n8n will prompt you to create an owner account on first launch. Complete the setup, and you're live.

> **Copy this URL** — you'll need the exact `onrender.com` URL in the next step to configure the keep-alive cron job. Paste it somewhere handy.

---

## 5. Set Up a Keep-Alive Cron Job

Render's free tier spins down web services after 15 minutes of inactivity, causing a cold-start delay of 30–60 seconds. A simple ping every 10 minutes keeps your instance warm around the clock.

### Cron expression

```
*/10 * * * *
```

| Field   | Value  | Meaning        |
|---------|--------|----------------|
| Minute  | `*/10` | Every 10 min   |
| Hour    | `*`    | Every hour     |
| Day     | `*`    | Every day      |
| Month   | `*`    | Every month    |
| Weekday | `*`    | Every weekday  |

### Steps on cron-job.org

1. **Log in** — go to [cron-job.org](https://cron-job.org) and sign in to your free account.
2. **Create a new cronjob** — click **Cronjobs → Create cronjob**.
3. **Set the URL** — paste your `onrender.com` URL. The root path `/` is fine; it just needs an HTTP 200 response.
4. **Set the schedule** — choose **Every 10 minutes** from the interval picker, or enter `*/10 * * * *` in custom cron mode.
5. **Enable notifications (optional)** — turn on failure alerts so you know if Render is down.
6. **Save & enable** — click **Create**. The job activates immediately.

> **Result:** Your n8n instance stays warm indefinitely. Workflows trigger instantly with no cold-start delay, even on the free Render plan.

---

## Resources

- Template repo: [github.com/render-examples/n8n](https://github.com/render-examples/n8n)
- Render docs: [render.com/docs/deploy-n8n](https://render.com/docs/deploy-n8n)
- Render Blueprints: [render.com/docs/infrastructure-as-code](https://render.com/docs/infrastructure-as-code)
- cron-job.org: [cron-job.org](https://cron-job.org)
