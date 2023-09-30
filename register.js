// سلکت کردن متغییر ها
const contactName = document.querySelector('#userName')
const numberPhone = document.querySelector('#numberPhone')
const button = document.querySelector('#button')
const form = document.querySelector('form')
// جلوگیری از ریفرش شدن صفحه 
form.addEventListener('submit', e =>{
    e.preventDefault()
})
//ساخت تابع ارور
const error = ( input, massage) => {
    let p = document.querySelector('p')
    p.innerText = massage
    p.classList.add('text-red-500')
    input.classList.add('border-2 border-rose-500')
}
// ساخت تابع صحیح بودن ولیدیشن
const oksub = (massage) => {
    let p = document.querySelector('p')
    p.innerText = massage
    p.classList.add('text-green-600')
}
// انجام ولیدیشن با کلبک بر روی دکمه
button.addEventListener('click', validation)

// تابع ولیدیشن نام کاربری و شماره تلفن
function validation() {
// گرفتن فضای خالی از مقدار نام کار بری و شماره تلفن
    const contactNameValue = contactName.value.trim()
    const numberPhoneValue = numberPhone.value.trim()
    
    if(contactNameValue === '') {
        error(contactName, 'نام کاربری را وارد نمایید')
        contactName.classList.add('border-red-600')
        return false
    }else
    if(contactNameValue.length < 3) {
        error(contactName, 'نام کاربری باید بیشتر از 3 حرف باشد')
        return false
    }

    if(numberPhoneValue === '') {
        error(numberPhone,'شماره تلفن را وارد نمایید')
        return false
    }else
        if(numberPhoneValue.length >= 12){
        error(numberPhone,'شماره تلفن باید 11 شماره باشد')
        return false
    }else
        if(numberPhoneValue.length <= 10){
            error(numberPhone,'شماره تلفن باید 11 شماره باشد')
            return false
        }else
        if(numberPhoneValue[0] != 0 && numberPhoneValue[1] != 9){
            error(numberPhone,'شماره تلفن باید با 09 شروع شود')
            return false
        }
        // انجام تابع با موفقیت
        oksub('اطلاعات با موفقیت ثبت شد') 
        
        // ارسال نام مخاطب و سماره برای س
        await (await fetch('https://farawin.iran.liara.run/api/contact', {
        
        method:'post',
       
        Headers:{
                    'contact-type':'application/json',
                },

        body: JSON.stringify({
            "username": numberPhoneValue,
            "name": contactNameValue
        })

       
    })).json()
        

    }
    
    // کارنکردن api
    // اضافه کردن کلاس برای قرمز شدن رنگ اینپوت و سبز شدن
    // حذف کلید های اینپوت نامبر