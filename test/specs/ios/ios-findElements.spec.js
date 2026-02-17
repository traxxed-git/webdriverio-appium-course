
describe('IOS find elements',()=>{
    it('accesibility id', async() =>{
        await $('~Alert Views').click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    })
    it('find by tag name', async () => {
        //expected 1 element
        await $('XCUIElementTypeStaticText').getText();

        //multiple elements
        const textEls = await $$('XCUIElementTypeStaticText');

        for (const element of textEls) {
            console.log(await element.getText());
        }

    })
    it('find by xpath', async() =>{
          await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
        await $('//XCUIElementTypeStaticText[@name="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    })

    it('find path by class chain', async () =>{
    //    const alertText = '**/XCUIElementTypeStaticText[`name == "Alert Views"`]';
const alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';

        await $(`-ios class chain:${alertText}`).click();
        await $('//XCUIElementTypeStaticText[@name="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

    })
     it('find path by predicate string', async () =>{
const alertText = 'label == "Alert Views"';

        await $(`-ios predicate string:${alertText}`).click();
        await $('//XCUIElementTypeStaticText[@name="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

    })

    its.only('Section 10 exercise', async () =>{
        //access default search bar screen
        // Search->Default->Default Search Bar

        await $('~Search').click();
        await $('~Default').click();

  
await $a(dsfasfd)
      
        //Enter text in input field
        await $('~magnifyingglass').setValue("This course is great");
        await expect($('XCUIElementTypeSearchField')).toHaveAttr("value");



        //clear search input by clicking x button
        await $('~Clear text').click();

        //Verify Serach input field is cleared
       
        await expect($('XCUIElementTypeSearchField')).not.toHaveAttr("value");
        await expect($('~Clear text')).not.toExist();

    })
})