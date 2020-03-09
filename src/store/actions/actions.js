export const loading = () => {
    return { type:"LOADING" }
}

const ageUpAsyc = (val) => {
    return { type:"AGE_UP" , value: val }
}

const ageUp = (val) => {
    return dispach => {
        dispach(loading())
        setTimeout(() => {
            dispach(ageUpAsyc(val))
        },5000)
    }
}

const ageDown = (val) => {
    return { type:"AGE_DOWN", value: val}
}
const onDelete = (id) => {
    return { type:'DELETE', key: id }
}

export default { ageUp, ageDown, onDelete, ageUpAsyc, loading }