class ItemScreen{


 get toDoName() {
    return $('~Things to do today')
 } 
 get createItemBtn(){
        return $('//*[@name="Create item"]')
 }

       
        //Enter Title

        get titleField(){
            return  $('//*[@value="Title"]')
        }

        //Enter Due Date

        get dueField(){
            return $('//*[@value="Due"]')}

        get showPicker(){
            return $('~DatePicker.Show')
        }

        get monthSelector() {
            return $('//*[@value="February"]')
        }

        get yearSelector() {
            return $('//*[@value="2026"]')
        }

        get hidePicker() {
            return $('~DatePicker.Hide')
        }
        daySelector(day) {
            return $(`~${day}`)
        }
        get createToDo(){
            return $('~Create')
        }
}
export default new ItemScreen();