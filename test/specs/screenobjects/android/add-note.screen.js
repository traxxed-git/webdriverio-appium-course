
class AddNoteScreen {
    get skipBtn() {
        return $('//*[@text="SKIP"]');
    }
    get addNoteBtn() {
        // return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/empty_text"]')
    }

    get noteTypeBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text"]')
    }
    get editText() {
        return $('//*[@text="Editing"]')
    }

    get titleTextField() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get noteTextField() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
    }

    get editBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')
    }
    get noteTitle() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
    }
    get moreBtn(){
        return $('~More')
    }
    get deleteBtn() {
        return $('//*[@text="Delete"]')
    }
    get menuBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
    }
    get trashCanBtn(){
        return $('//*[@text="Trash Can"]')
    }

    get trashCanNotes(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

}
export default new AddNoteScreen()
// module.exports = new AddNoteScreen();