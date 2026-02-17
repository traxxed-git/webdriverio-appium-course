import ListScreen from '../screenobjects/ios/list.screen'; 
import ItemScreen from '../screenobjects/ios/item.screen' 
describe('Todo List', () => {
    it('Create a Todo List', async () => {
        // await $('//*[@name="Create list"]').click();
        // await $('//*[@value="List Name"]').addValue("Things to do today");
        // await $('~Create').click();
          await ListScreen.createListBtn.click();
        await ListScreen.listNameInput.addValue("Things to do today");
        await ListScreen.createBtn.click();

        await expect(ListScreen.listNameField('Things to do today')).toBeExisting();
    })

    it.only('Section 12 Exercise', async() =>{
        //Create List & Verify

        before(async ()=>{
         await ListScreen.createListBtn.click();
        await ListScreen.listNameInput.addValue("Things to do today");
        await ListScreen.createBtn.click();

        await expect(ListScreen.listNameField('Things to do today')).toBeExisting();


        });
      

        //click To do
        await ItemScreen.toDoName.click();
        await ItemScreen.createItemBtn.click();

       
        //Enter Title

        await ItemScreen.toDoName.addValue("Todo Item #1");

        //Enter Due Date

        await ItemScreen.dueField.click();
        await ItemScreen.showPicker.click();

        await ItemScreen.monthSelector.addValue('December');

        await ItemScreen.yearSelector.addValue('2029');

        await ItemScreen.hidePicker.click();
        await ItemScreen.daySelector('25').click();
        await ItemScreen.createToDo.click();

        //Verify To do item
        await expect($('~Todo Item #1')).toBeExisting();

        await expect($('~Due December 25, 2029')).toBeExisting();
    })
})