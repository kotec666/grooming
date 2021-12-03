
export const isItemAdded = (items:any[], id:number) => {
    const isAdded = items.some((obj) => Number(obj.id) === Number(id))
    return isAdded
}


