export function ProductColor({color}){

    const style = {
        backgroundColor: "#" + color
    }

    return(
        <div style={style} className="h-6 w-full rounded-sm"/>
    )

}
export function ProductColorsContainer({product}){
    const colors = product.colors
    return(
        <div className="grid grid-auto-rows grid-cols-6 gap-2 h-fit w-full">
            {colors.map((color, index) => <ProductColor key={index} color={color}/>)}
            <ProductColor color={"123123"}/>
        </div>
    )
}