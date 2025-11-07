
import { expect } from '@playwright/test';

export class CheckboxPage {
  constructo// r(page) {
    this.page = page;

    // Locators (using CSS instead of long XPath)
    this.monday = page.locator('#monday');
    this.sunday = page.locator('#sunday');
    this.tuesday = page.locator('#tuesday');
  }

  async open() {
    await this.page.goto('https://testautomationpractice.blogspot.com/');
  }

  async checkMonday() {
    await this.monday.check();
  }

  async verifyMondayChecked() {
    await expect(this.monday).toBeChecked();
  }

  async verifyMondayTruthy() {
    await expect(await this.monday.isChecked()).toBeTruthy();
  }

  async verifySundayFalsy() {
    await expect(await this.sunday.isChecked()).toBeFalsy();
  }

  async handleMultipleCheckboxes() {
    const allCheckboxes = [this.monday, this.sunday, this.tuesday];

    // Check all
    for (const checkbox of allCheckboxes) {
      await checkbox.check();
    }

    // Uncheck all
    for (const checkbox of allCheckboxes) {
      if (await checkbox.isChecked()) {
        await checkbox.uncheck();
      }
    }
  }

