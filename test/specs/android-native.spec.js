describe("Android Native Feature Tests", () => {
  it("Access an Activity directly", async () => {
    //access activity
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.app.AlertDialogSamples",
    );

    //pause
    await driver.pause(3000);
    //Assertion
    await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
  });

  it("Working with Dialog Boxes", async () => {
    //access activity
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.app.AlertDialogSamples",
    );

    //click on first idalog box
    await $('//*[@content-desc="OK Cancel dialog with a message"]').click();

    //Accept Alert
    // await driver.acceptAlert();

    //Dismiss Alert
    // await driver.dismissAlert();

    //get alert text
    console.log("Alert TEXT -->", await driver.getAlertText());

    //click on the ok Button
    await $('//*[@resource-id="android:id/button1"]').click();

    //assertion - alert box is no longer visible
    await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
  });

  it("Vertical scrolling", async () => {
    await $("~App").click();
    await $("~Activity").click();

    //scroll to the end (not stable if element gets moved)
    // await $(
    //   "android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)",
    // );

    //scrollTextIntoView - mroe stable

    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")',
    ).click();
    // await $("~Secure Surfaces").click();

    //assertion
    await expect($("~Secure Dialog")).toExist();
  });

  it("Horizontal Scrolling", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.Gallery1",
    );

    //Horizontal Scrolling
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()",
    );
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()",
    );
    await driver.pause(3000);
  });
  it.only("Section 6 - Exercise", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.DateWidgets1",
    );
    console.log(
      "CURRENT DATE -->",
      await $(
        '//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText(),
    );
    await $('~change the date').click();
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()",
    );
    await $('//*[@text="10"]').click();
    await $('//*[@resource-id="android:id/button1"]').click()
    await expect($('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]')).toHaveText(expect.stringContaining('-10a'))
  });
});
