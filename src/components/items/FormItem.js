function FormItem({form: {afCode, afName, afExplain}}){
    return(
        <>
            <a className="el_draftApply" href={(`/approval/form/${afCode}`)}>
                {afName}
                {afExplain && <b className="hp_7Color">({afExplain})</b>}
            </a>
        </>
    )
}
export default FormItem;