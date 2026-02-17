describe('Todo List', () => {
    it('Create a Todo List', async () => {
        await $('//*[@name="Create list"]').click();
        await $('//*[@value="List Name"]').addValue("Things to do today");
        await $('~Create').click();

        await expect($('~Things to do today')).toBeExisting();
    })

    it.only('Section 12 Exercise', async() =>{
        //Create List & Verify
         await $('//*[@name="Create list"]').click();
        await $('//*[@value="List Name"]').addValue("Things to do today");
        await $('~Create').click();

        await expect($('~Things to do today')).toBeExisting();


        //click To do
        await $('~Things to do today').click();
        await $('//*[@name="Create item"]').click();

       
        //Enter Title

        await $('//*[@value="Title"]').addValue("Todo Item #1");

        //Enter Due Date

        await $('//*[@value="Due"]').click();
        await $('~DatePicker.Show').click();

        await $('//*[@value="February"]').addValue('December');

        await $('//*[@value="2026"]').addValue('2029');

        await $('~DatePicker.Hide').click();
        await $('~25').click();
        await $('~Create').click();

        //Verify To do item
          await expect($('~Todo Item #1')).toBeExisting();

          await expect($('~Due December 25, 2029')).toBeExisting();
    })
})