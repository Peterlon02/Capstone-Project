function ComponentForm(prop){
    return (
        <div className="d-flex flex-column mt-2">
                    <label className="text-light">{prop.title}:</label>
                    <input className="inputstyle"
                        type={prop.type}
                        id=""
                        value={prop.value}
                        onChange={prop.func}
                         required
                         />
                </div>
    )
}

export default ComponentForm