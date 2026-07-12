import { test, expect } from '@playwright/test';

test('root redirects to /es/', async ({ page }) => {
  await page.goto('/');
  await page.waitForURL(/\/es\/?$/, { timeout: 5000 }).catch(async () => {
    const html = await page.content();
    expect(html).toMatch(/\/es\//);
  });
});

test('home ES renders thesis and sections', async ({ page }) => {
  await page.goto('/es/');
  await expect(page.locator('h1')).toContainText(/Marco Sánchez Sorondo/i);
  await expect(page.getByText(/los pongo en producción/i).first()).toBeVisible();
  for (const heading of ['Qué hago', 'Approach', 'Qué construí', 'Trayectoria', 'Trabajemos juntos']) {
    await expect(page.getByRole('heading', { name: heading })).toBeVisible();
  }
  await expect(page.getByRole('link', { name: /Aplicá acá/i })).toBeVisible();
});

test('home EN renders thesis and apply link', async ({ page }) => {
  await page.goto('/en/');
  await expect(page.getByText(/ship them to production fast/i).first()).toBeVisible();
  await expect(page.getByRole('link', { name: /Apply here/i })).toBeVisible();
});

test('language toggle switches to EN', async ({ page }) => {
  await page.goto('/es/');
  await page.getByRole('link', { name: 'EN', exact: true }).click();
  await expect(page).toHaveURL(/\/en\/?$/);
});

test('home lists built projects with links', async ({ page }) => {
  await page.goto('/es/');
  for (const name of ['Intuitiv AI', 'Clofi', 'OpuLens', 'Taskue', 'Peak Health']) {
    await expect(page.getByRole('link', { name }).first()).toBeVisible();
  }
});

test('blog post renders in Spanish', async ({ page }) => {
  await page.goto('/es/blog/2026-04-20-bienvenida/');
  await expect(page.locator('article h1')).toContainText(/primer post/i);
});

test('apply form has qualifying filters', async ({ page }) => {
  await page.goto('/es/aplicar/');
  await expect(page.locator('form[action*="formspree"]')).toBeVisible();
  await expect(page.getByText('Presupuesto estimado *')).toBeVisible();
  await expect(page.getByText('Cuándo querés arrancar *')).toBeVisible();
  await expect(page.getByText('En cuánto tiempo querés terminar el proyecto *')).toBeVisible();
});

test('old routes redirect to home anchors', async ({ page }) => {
  await page.goto('/es/servicios/');
  await page.waitForURL(/\/es\/#que-hago$/, { timeout: 5000 });
});
