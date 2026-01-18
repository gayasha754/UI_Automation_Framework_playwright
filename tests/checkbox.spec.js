import { test, expect } from '@playwright/test';
import {checkboxPage} from '../pages/checkboxPage';

test.describe('Checkbox verification', () => {

  test.beforeEach(async ({ page }) => {
    // Navigate to the checkbox page before each test
    await page.goto('/checkboxes');
  });

  test('Verify that the checkboxes are checked', async ({ page }) => {
    const CheckboxPage = new checkboxPage(page);

    // Expect the title of the page to be correct
    await expect(CheckboxPage.title).toBeVisible();

    await CheckboxPage.verifyCheckboxOne();
    await expect(CheckboxPage.checkbox1).toBeChecked();
    
    await CheckboxPage.verifyCheckboxTwo();
    await expect(CheckboxPage.checkbox2).toBeChecked();
  });

});
