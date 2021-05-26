export const selectContact = (contact) =>{
    console.log(contact)
    return{
        type:"CONTACT_SELECTED",
        payload:contact
    }
}