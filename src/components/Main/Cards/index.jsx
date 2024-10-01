
export default function CardsPrincipal ({children, alinhamento,BorderCard, Padding}) {
    return(
        <div className={`w-1/2 ${Padding} ${alinhamento} ${BorderCard}` }>
            {children}
        </div>
    )
}

