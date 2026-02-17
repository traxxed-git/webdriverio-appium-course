describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        await $('//*[@text="SKIP"]').click()
        await expect($('//*[@text="Add note"]')).toBeDisplayed()
    })
    it('add a note, save changes & verify note', async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/empty_text"]').click()
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').setValue("Fav Anime List");
        
        //add Note value

        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').setValue("Naruto\nOnePiece\nAOT");
        await driver.back();

        await driver.back();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
    })
    it('Delete Note', async () => {
        //Add Note (Use the above)

        //Delete Note
        const noteTitle = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title" and @text="Fav Anime List"]');
        noteTitle.click();
        await $('~More').click();
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Delete"]').click();
        await $('//*[@resource-id="android:id/button1"]').click();


        //Check Note in Trash Can
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
        await $('//*[@text="Trash Can"]').click();
        await expect($('//*[@text="Fav Anime List"]')).toExist();

    })
})