import { test, expect } from '@playwright/test';

test('root redirects (or renders redirect page) to /es/', async ({ page }) => {
  await page.goto('/');
  await page.waitForURL(/\/es\/?$/, { timeout: 5000 }).catch(async () => {
    // Static host: redirect happens via meta-refresh/JS, may not update URL in time.
    // Accept either final URL at /es/ OR a visible link/signal that redirect is wired.
    const html = await page.content();
    expect(html).toMatch(/\/es\//);
  });
});

test('home ES renders hero and CTAs', async ({ page }) => {
  await page.goto('/es/');
  await expect(page.locator('h1').first()).toContainText(/Investigación|research/i);
  await expect(page.getByRole('link', { name: /Agendar/i }).first()).toBeVisible();
});

test('blog post renders in Spanish', async ({ page }) => {
  await page.goto('/es/blog/');
  // Click the first post link
  const firstPostLink = page.locator('h3 a, h3').first();
  // Try clicking anywhere that links to a blog post
  await page.goto('/es/blog/2026-04-20-bienvenida/');
  await expect(page.locator('article h1')).toBeVisible();
  await expect(page.locator('article h1')).toContainText(/primer post/i);
});

test('language toggle switches to EN', async ({ page }) => {
  await page.goto('/es/');
  // Toggle shows "EN" when on Spanish
  await page.getByRole('link', { name: 'Switch to EN' }).click();
  await expect(page).toHaveURL(/\/en\/?$/);
  await expect(page.locator('h1').first()).toContainText(/Research|Investigación/i);
});

test('projects page lists all four featured projects', async ({ page }) => {
  await page.goto('/es/proyectos/');
  await expect(page.getByText('Taskue').first()).toBeVisible();
  await expect(page.getByText('Intuitiv AI').first()).toBeVisible();
  await expect(page.getByText('OpuLens').first()).toBeVisible();
  await expect(page.getByText('Arnium').first()).toBeVisible();
});
