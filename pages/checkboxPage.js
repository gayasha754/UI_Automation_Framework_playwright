exports.checkboxPage = class checkboxPage{

  constructor(page){
    this.page = page; 
    this.title= page.locator('div[class="example"] h3') // Locator for the title of the checkbox page
    this.checkbox1= page.locator("//input[@type='checkbox'] [1]") // Locator for the first checkbox
    this.checkbox2 = page.locator("//input[@type='checkbox'] [2]") // Locator for the second checkbox
  }

 // Verifies and checks the first checkbox if not already checked
  verifyCheckboxOne= async () => {
    await this.checkbox1.isVisible();
    const isChecked = await this.checkbox1.isChecked();
    if (!isChecked ){
      await this.checkbox1.check();
    }
  }
  // Verifies and checks the second checkbox if not already checked
  verifyCheckboxTwo= async () => {
    await this.checkbox2.isVisible();
    const isChecked = await this.checkbox2.isChecked();
    if (!isChecked ){
      await this.checkbox2.check();
    }
  }
 

}