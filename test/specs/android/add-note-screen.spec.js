import addNoteScreen from "../screenobjects/android/add-note.screen"

describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        // await $('//*[@text="SKIP"]').click()
        await addNoteScreen.skipBtn.click();
        await expect(addNoteScreen.addNoteBtn).toBeDisplayed()
    })
    it('add a note, save changes & verify note', async () => {
        await addNoteScreen.addNoteBtn.click()
        await addNoteScreen.noteTypeBtn.click();
        await expect(addNoteScreen.editText).toBeDisplayed();

        await addNoteScreen.titleTextField.setValue("Fav Anime List");
        
        //add Note value

        await addNoteScreen.noteTextField.setValue("Naruto\nOnePiece\nAOT");
        await driver.back();

        await driver.back();
        await expect(addNoteScreen.editBtn).toBeDisplayed();
         await driver.back();
    })
    it('Delete Note', async () => {
        //Add Note (Use the above)

        //Delete Note
        const noteTitle = await addNoteScreen.noteTitle.getText();
        await addNoteScreen.noteTitle.click();

        await addNoteScreen.moreBtn.click();
        await addNoteScreen.deleteBtn.click();
        await driver.acceptAlert();


        //Check Note in Trash Can
        await addNoteScreen.menuBtn.click();
        await addNoteScreen.trashCanBtn.click();
        await expect(addNoteScreen.trashCanNotes).toHaveText(noteTitle);

    })
})