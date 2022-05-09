export const requiredField = (value: string) => {
    if (value) {
        return undefined
    }
    return 'Field is required';


}


//по аналогии с TC
//Узнать почему не работает
//Не использовать redux-form, устарело, использовать formik
export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value.length >= maxLength) {
    return `Max length is ${maxLength} symbol`
    }
    return undefined
}