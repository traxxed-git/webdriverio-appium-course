// describe("Android Elements Tests", () => {
//   it("Find element by accessibility id", async () => {
//     //find Element by accessibility ID
//     const appOption = await $("~App");
//     //click on element
//     await appOption.click();
//     //assertion
//     const actionBar = await $("~Action Bar");
//     await expect(actionBar).toBeExisting();
//   });

//   it("Find element by class name", async () => {
//     //find element by class name
//     const className = await $("android.widget.TextView");
//     console.log(await className.getText());

//     //Assertion
//     await expect(className).toHaveText("API Demos");
//   });

//   xit("Findelements by Xpath", async () => {
//     //xpath - (//tagname[@attribute=value])
//     await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

//     //find by resourceID
//     await $(
//       '//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]',
//     ).click();

//     //find by text
//     await $('//android.widget.TextView[@text="Command two"]').click();

//     //find by class- assertion
//     const textAssertion = await $("//android.widget.TextView");
//     await expect(textAssertion).toHaveText("You selected: 1 , Command two");
//   });

//   it("Find Elements by UIAutomator", async () => {
//     //find by text contains
//     await $('android=new UiSelector().textContains("Alert")').click();
//   });

//   it.only("Find multiple elements", async () => {
//     const expectedList = [
//       "API Demos",
//       "Access'ibility",
//       "Accessibility",
//       "Animation",
//       "App",
//       "Content",
//       "Graphics",
//       "Media",
//       "NFC",
//       "OS",
//       "Preference",
//       "Text",
//       "Views",
//     ];
//     const actualList = [];
//     //find multiple elements
//     const textList = await $$("android.widget.TextView");
//     //loop through them
//     for (const element of textList) {
//       actualList.push(await element.getText());
//     }
//     await expect(actualList).toEqual(expectedList);
//   });
// });

describe("Android Elements Exercise 1", () => {
  it("Section 1 Test", async () => {
    //Views -> Auto Complete -> Screen Top, Country Canada

    //find Element by accessibility ID
    await $("~Views").click();
    await $("~Auto Complete").click();
    await $("~1. Screen Top").click();
    const input = await $(
      '//android.widget.AutoCompleteTextView[@resource-id="io.appium.android.apis:id/edit"]',
    );
    await input.setValue("Canada");

    await expect(input).toHaveText("Canada");
  });
});
